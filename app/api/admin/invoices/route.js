import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAuth, getSession } from '@/lib/auth';
import { generateInvoicePDFBuffer } from '@/lib/pdfGenerator';
import { sendInvoiceEmail } from '@/lib/email';
import fs from 'fs';
import path from 'path';

// Get the correct base path for saving files
function getPublicDir() {
    // In Next.js, process.cwd() returns the project root where next.config is
    return path.join(process.cwd(), 'public');
}

export async function POST(req) {
    try {
        const body = await req.json();
        const { ticketId, amount, status, items, sendEmail: shouldSendEmail } = body;

        const session = await getSession();
        if (!session || !['admin', 'agent', 'superadmin'].includes(session.role)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const ticket = await prisma.ticket.findUnique({ where: { id: parseInt(ticketId) } });
        if (!ticket) {
            return NextResponse.json({ error: 'Ticket not found.' }, { status: 404 });
        }

        // Generate a unique Invoice Number using timestamp to prevent duplicates
        const currentYear = new Date().getFullYear();
        const timestamp = Date.now().toString(36).toUpperCase();
        const invoiceNumber = `EST-${currentYear}-${timestamp}`;

        if (session.role === 'admin' || session.role === 'agent') {
            await prisma.pendingUpdate.create({
                data: {
                    entityType: 'Invoice_Create',
                    entityId: parseInt(ticketId),
                    data: JSON.stringify({ amount, status, items, sendEmail: shouldSendEmail }),
                    submittedBy: session.id,
                    status: 'Pending'
                }
            });
            return NextResponse.json({ success: true, message: 'Invoice generation submitted for superadmin approval' });
        }

        // Parse items
        let parsedItems = [];
        try {
            parsedItems = typeof items === 'string' ? JSON.parse(items) : items;
        } catch (e) {
            parsedItems = [{ desc: 'Service', qty: 1, price: amount || 0, unit: 'NOS' }];
        }

        // Calculate total from items if provided
        const calculatedTotal = parsedItems.reduce((sum, item) => {
            return sum + (parseFloat(item.price || 0) * (item.qty || 1));
        }, 0);

        const finalAmount = calculatedTotal > 0 ? calculatedTotal : parseFloat(amount || 0);

        // Create invoice record
        const invoice = await prisma.invoice.create({
            data: {
                invoiceNumber,
                amount: finalAmount,
                status: status || 'Unpaid',
                ticketId: parseInt(ticketId),
                generatedBy: session?.username || session?.email || 'Admin',
                items: JSON.stringify(parsedItems)
            }
        });

        // Generate PDF
        const pdfBuffer = generateInvoicePDFBuffer(invoice, ticket, parsedItems);

        // Save PDF to public folder for direct access
        const publicDir = getPublicDir();
        const pdfDir = path.join(publicDir, 'invoices');

        if (!fs.existsSync(pdfDir)) {
            fs.mkdirSync(pdfDir, { recursive: true });
        }

        const pdfFileName = `${invoiceNumber}.pdf`;
        const pdfPath = path.join(pdfDir, pdfFileName);

        fs.writeFileSync(pdfPath, Buffer.from(pdfBuffer));

        // Update invoice with PDF URL
        const pdfUrl = `/invoices/${pdfFileName}`;
        const updatedInvoice = await prisma.invoice.update({
            where: { id: invoice.id },
            data: { pdfUrl }
        });

        // Send email if requested
        if (shouldSendEmail) {
            try {
                const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
                await sendInvoiceEmail(ticket.email, {
                    invoiceNumber: invoice.invoiceNumber,
                    ticketNumber: ticket.ticketNumber,
                    customerName: ticket.customerName,
                    amount: finalAmount,
                    items: parsedItems,
                    pdfUrl: `${baseUrl}${pdfUrl}`,
                    baseUrl
                });

                // Log to Ticket Timeline
                await prisma.ticketUpdate.create({
                    data: {
                        ticketId: ticket.id,
                        status: ticket.status,
                        comment: `Invoice ${invoiceNumber} sent to customer via email.`,
                        createdBy: session.role === 'admin' ? 'Admin' : 'Agent'
                    }
                });
            } catch (emailErr) {
                console.log("Failed to send invoice email:", emailErr);
            }
        }

        // Log to Ticket Timeline
        await prisma.ticketUpdate.create({
            data: {
                ticketId: ticket.id,
                status: ticket.status,
                comment: `Estimate ${invoiceNumber} generated for ₹${finalAmount.toFixed(2)}.`,
                createdBy: session.role === 'admin' ? 'Admin' : 'Agent'
            }
        });

        return NextResponse.json({ success: true, invoice: updatedInvoice });
    } catch (err) {
        console.error("Invoice generation error:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function GET(req) {
    try {
        // Check authentication
        const session = await requireAuth(['admin', 'agent', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { searchParams } = new URL(req.url);
        const ticketId = searchParams.get('ticketId');

        let whereClause = {};
        if (ticketId) {
            whereClause.ticketId = parseInt(ticketId);
        }

        const invoices = await prisma.invoice.findMany({
            where: whereClause,
            orderBy: { createdAt: 'desc' },
            include: {
                ticket: {
                    select: {
                        ticketNumber: true,
                        customerName: true,
                        phone: true,
                        email: true
                    }
                }
            }
        });

        return NextResponse.json(invoices);
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
