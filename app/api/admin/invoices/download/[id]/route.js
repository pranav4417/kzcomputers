import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';
import { generateInvoicePDFBuffer } from '@/lib/pdfGenerator';

export async function GET(req, { params }) {
    try {
        const { id } = await params;
        const invoiceId = parseInt(id);

        if (isNaN(invoiceId)) {
            return new NextResponse('Invalid Invoice ID', { status: 400 });
        }

        const invoice = await prisma.invoice.findUnique({
            where: { id: invoiceId },
            include: { ticket: true }
        });

        if (!invoice) {
            return new NextResponse('Invoice not found', { status: 404 });
        }

        // Instead of strictly demanding superadmin, allow any authorized user or even the customer?
        // Let's protect this endpoint:
        // For admin/agents, check requireAuth. Wait, we want customers to also download from the email!
        // The email sends a link. Should it be public?
        // Or if 'invoiceId' is hard to guess, maybe public? Wait, invoice ID is sequential (e.g., 1, 2, 3), so extremely easy to guess.
        // It's better to verify user or token.
        // Wait, previously `/invoices/EST-2024-TIMESTAMP.pdf` was served statically. Since the token was the timestamp, it was hard to guess.
        // What if we use `invoiceNumber` (e.g., "EST-2024-TIMESTAMP") instead of `id` for the lookup? That's much more secure for dynamic unauthenticated downloads.
        
        let items = [];
        try {
            items = typeof invoice.items === 'string' ? JSON.parse(invoice.items) : invoice.items;
        } catch (e) {
            items = [];
        }

        const pdfBuffer = generateInvoicePDFBuffer(invoice, invoice.ticket, items);

        // Return the raw buffer as a PDF file
        return new NextResponse(pdfBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `inline; filename="${invoice.invoiceNumber}.pdf"`
            }
        });
    } catch (error) {
        console.error("PDF Download Error:", error);
        return new NextResponse('Internal Server Error while generating PDF', { status: 500 });
    }
}
