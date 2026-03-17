import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';
import { generateInvoicePDFBuffer } from '@/lib/pdfGenerator';
import { sendInvoiceEmail } from '@/lib/email';
import fs from 'fs';
import path from 'path';

function getPublicDir() {
    return path.join(process.cwd(), 'public');
}

export async function GET() {
    try {
        const session = await requireAuth(['superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const pendingUpdates = await prisma.pendingUpdate.findMany({
            where: { status: 'Pending' },
            orderBy: { createdAt: 'desc' }
        });

        return NextResponse.json(pendingUpdates);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const session = await requireAuth(['superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { updateId, action } = await req.json();

        const pending = await prisma.pendingUpdate.findUnique({ where: { id: parseInt(updateId) } });
        if (!pending || pending.status !== 'Pending') {
            return NextResponse.json({ error: 'Not found or already processed' }, { status: 404 });
        }

        if (action === 'reject') {
            await prisma.pendingUpdate.update({ where: { id: pending.id }, data: { status: 'Rejected' } });
            return NextResponse.json({ success: true, message: 'Rejected update' });
        }

        if (action === 'approve') {
            const data = JSON.parse(pending.data);

            if (pending.entityType === 'Product_Create') {
                await prisma.product.create({ data });
            } else if (pending.entityType === 'Product_Update') {
                await prisma.product.update({ where: { id: pending.entityId }, data });
            } else if (pending.entityType === 'Product_Delete') {
                await prisma.product.delete({ where: { id: pending.entityId } });
            } else if (pending.entityType === 'Service_Create') {
                await prisma.service.create({ data });
            } else if (pending.entityType === 'Service_Update') {
                await prisma.service.update({ where: { id: pending.entityId }, data });
            } else if (pending.entityType === 'Service_Delete') {
                await prisma.service.delete({ where: { id: pending.entityId } });
            } else if (pending.entityType === 'Invoice_Create') {
                // Generate invoice
                const ticket = await prisma.ticket.findUnique({ where: { id: pending.entityId } });
                if (ticket) {
                    const currentYear = new Date().getFullYear();
                    const timestamp = Date.now().toString(36).toUpperCase();
                    const invoiceNumber = `EST-${currentYear}-${timestamp}`;

                    let parsedItems = [];
                    try {
                        parsedItems = typeof data.items === 'string' ? JSON.parse(data.items) : data.items;
                    } catch (e) {
                        parsedItems = [{ desc: 'Service', qty: 1, price: data.amount || 0, unit: 'NOS' }];
                    }

                    const calculatedTotal = parsedItems.reduce((sum, item) => sum + (parseFloat(item.price || 0) * (item.qty || 1)), 0);
                    const finalAmount = calculatedTotal > 0 ? calculatedTotal : parseFloat(data.amount || 0);

                    const invoice = await prisma.invoice.create({
                        data: {
                            invoiceNumber, amount: finalAmount, status: data.status || 'Unpaid',
                            ticketId: pending.entityId, generatedBy: 'Admin Approval',
                            items: JSON.stringify(parsedItems)
                        }
                    });

                    const pdfBuffer = generateInvoicePDFBuffer(invoice, ticket, parsedItems);
                    const publicDir = getPublicDir();
                    const pdfDir = path.join(publicDir, 'invoices');
                    if (!fs.existsSync(pdfDir)) fs.mkdirSync(pdfDir, { recursive: true });
                    const pdfFileName = `${invoiceNumber}.pdf`;
                    const pdfPath = path.join(pdfDir, pdfFileName);
                    fs.writeFileSync(pdfPath, Buffer.from(pdfBuffer));

                    const pdfUrl = `/invoices/${pdfFileName}`;
                    await prisma.invoice.update({ where: { id: invoice.id }, data: { pdfUrl } });

                    if (data.sendEmail) {
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
                            await prisma.ticketUpdate.create({
                                data: {
                                    ticketId: ticket.id, status: ticket.status,
                                    comment: `Invoice ${invoiceNumber} sent to customer via email (Approved by Superadmin).`,
                                    createdBy: 'Super Admin'
                                }
                            });
                        } catch (e) {
                            console.error(e);
                        }
                    } else {
                        await prisma.ticketUpdate.create({
                            data: {
                                ticketId: ticket.id, status: ticket.status,
                                comment: `Estimate ${invoiceNumber} generated for ₹${finalAmount.toFixed(2)} (Approved by Superadmin).`,
                                createdBy: 'Super Admin'
                            }
                        });
                    }
                }
            }

            await prisma.pendingUpdate.update({ where: { id: pending.id }, data: { status: 'Approved' } });
            return NextResponse.json({ success: true, message: 'Approved update' });
        }

        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    } catch (error) {
        console.error('Approval Error:', error);
        return NextResponse.json({ error: 'Failed' }, { status: 500 });
    }
}
