import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';
import { sendTicketEmail, sendInvoiceEmail } from '@/lib/email';
import { generateInvoicePDFBuffer } from '@/lib/pdfGenerator';
import fs from 'fs';
import path from 'path';

function getPublicDir() {
    // In Next.js, process.cwd() returns the project root where next.config is
    return path.join(process.cwd(), 'public');
}

export async function PATCH(req, { params }) {
    try {
        // Check authentication
        const session = await requireAuth(['admin', 'agent', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized - Admin access required' }, { status: 401 });
        }

        const { id } = await params;
        const { status, comments, assignedToId, updatedByRole, invoiceItems, sendInvoiceEmail: shouldSendInvoice } = await req.json();

        // Build update object based on what was provided
        const updateData = {};
        if (status !== undefined) updateData.status = status;
        if (comments !== undefined) updateData.comments = comments;
        if (assignedToId !== undefined) updateData.assignedToId = assignedToId === "" ? null : parseInt(assignedToId);

        // Save invoice items to ticket if provided (for persisting costs/charges)
        if (invoiceItems && invoiceItems.length > 0) {
            updateData.items = JSON.stringify(invoiceItems);
        }

        const ticket = await prisma.ticket.update({
            where: { id: parseInt(id) },
            data: updateData
        });

        // Add a timeline log record
        let timelineMsg = comments || `Status updated to ${status || ticket.status}`;
        if (assignedToId !== undefined) {
            timelineMsg = assignedToId ? `Ticket assigned to Staff ID #${assignedToId}` : 'Ticket unassigned';
        }

        await prisma.ticketUpdate.create({
            data: {
                ticketId: ticket.id,
                status: ticket.status,
                comment: timelineMsg,
                createdBy: updatedByRole || 'Admin'
            }
        });

        let invoiceSent = false;
        let generatedInvoice = null;

        // Handle invoice generation when ticket is completed or closed
        if ((status === 'Completed' || status === 'Closed') && invoiceItems && invoiceItems.length > 0) {
            try {
                // Check if invoice already exists for this ticket
                const existingInvoice = await prisma.invoice.findFirst({
                    where: { ticketId: ticket.id }
                });

                if (!existingInvoice) {
                    // Generate new invoice
                    const currentYear = new Date().getFullYear();
                    const count = await prisma.invoice.count();
                    const invoiceNumber = `EST-${currentYear}-${String(count + 1).padStart(4, '0')}`;

                    const calculatedTotal = invoiceItems.reduce((sum, item) => {
                        return sum + (parseFloat(item.price || 0) * (item.qty || 1));
                    }, 0);

                    // Create invoice record
                    const invoice = await prisma.invoice.create({
                        data: {
                            invoiceNumber,
                            amount: calculatedTotal,
                            status: 'Unpaid',
                            ticketId: ticket.id,
                            generatedBy: 'Admin',
                            items: JSON.stringify(invoiceItems)
                        }
                    });

                    // Update invoice with PDF URL
                    const pdfUrl = `/api/admin/invoices/download/${invoice.id}`;
                    generatedInvoice = await prisma.invoice.update({
                        where: { id: invoice.id },
                        data: { pdfUrl }
                    });

                    // Send invoice email if requested
                    if (shouldSendInvoice || status === 'Closed') {
                        try {
                            const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://suraksha-wb.vercel.app';
                            await sendInvoiceEmail(ticket.email, {
                                invoiceNumber: generatedInvoice.invoiceNumber,
                                ticketNumber: ticket.ticketNumber,
                                customerName: ticket.customerName,
                                amount: calculatedTotal,
                                items: invoiceItems,
                                pdfUrl: `${baseUrl}${pdfUrl}`,
                                baseUrl
                            });
                            invoiceSent = true;

                            // Log the invoice sent
                            await prisma.ticketUpdate.create({
                                data: {
                                    ticketId: ticket.id,
                                    status: ticket.status,
                                    comment: `Invoice ${invoiceNumber} sent to customer (₹${calculatedTotal.toFixed(2)})`,
                                    createdBy: 'System'
                                }
                            });
                        } catch (emailErr) {
                            console.log("Failed to send invoice email:", emailErr);
                        }
                    }
                }
            } catch (invErr) {
                console.log("Invoice generation error:", invErr);
            }
        }

        // Send email notification about the update
        if (status && status !== 'Open') {
            try {
                await sendTicketEmail(ticket.email, {
                    ticketNumber: ticket.ticketNumber,
                    customerName: ticket.customerName,
                    product: ticket.product,
                    serviceType: ticket.serviceType,
                    priority: ticket.priority,
                    status: ticket.status,
                    subject: ticket.subject,
                    description: ticket.description,
                    ticketLink: `${process.env.NEXT_PUBLIC_APP_URL || 'https://suraksha-wb.vercel.app'}/track/${ticket.ticketToken}`,
                    isUpdate: true
                });
            } catch (e) {
                console.log("Failed to send notification email. Resuming.", e)
            }
        }

        return NextResponse.json({ success: true, ticket, invoiceSent, generatedInvoice });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    try {
        // Check authentication
        const session = await requireAuth(['admin', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized - Admin access required' }, { status: 401 });
        }

        const { id } = await params;

        // Delete related records first (cascading)
        await prisma.ticketUpdate.deleteMany({ where: { ticketId: parseInt(id) } });
        await prisma.invoice.deleteMany({ where: { ticketId: parseInt(id) } });

        // Delete the ticket
        await prisma.ticket.delete({
            where: { id: parseInt(id) }
        });

        return NextResponse.json({ success: true, message: 'Ticket deleted successfully' });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
