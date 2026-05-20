import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { generateQuotePDFBuffer } from '@/lib/pdfGenerator';

export async function GET(req, { params }) {
    try {
        const { token } = await params;

        if (!token) {
            return NextResponse.json({ error: 'Token is required' }, { status: 400 });
        }

        // Find the quote
        const quote = await prisma.quoteRequest.findFirst({
            where: { quoteToken: token },
            include: { product: true }
        });

        if (!quote) {
            return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
        }

        // Parse items
        let items = [];
        try {
            items = quote.items ? (typeof quote.items === 'string' ? JSON.parse(quote.items) : quote.items) : [];
        } catch (e) {
            items = [];
        }

        // Generate PDF buffer
        const pdfBuffer = generateQuotePDFBuffer(
            quote,
            {
                customerName: quote.customerName,
                email: quote.guestEmail,
                phone: quote.guestPhone
            },
            items,
            quote.message || ''
        );

        // Return PDF
        return new NextResponse(pdfBuffer, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="QUOTE-${token.substring(0, 8).toUpperCase()}.pdf"`
            }
        });
    } catch (err) {
        console.error("PDF Generation Error:", err);
        return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
    }
}
