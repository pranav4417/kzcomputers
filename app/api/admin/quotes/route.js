import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAuth, getSession } from '@/lib/auth';
import { generateQuotePDFBuffer } from '@/lib/pdfGenerator';
import { sendQuoteEmail } from '@/lib/email';

// Get the correct base path for saving files
function getPublicDir() {
    return path.join(process.cwd(), 'public');
}

import fs from 'fs';
import path from 'path';

export async function POST(req) {
    try {
        const body = await req.json();
        const { customerEmail, customerName, customerPhone, items, amount, message, productId, ticketId } = body;

        const session = await getSession();
        if (!session || !['admin', 'superadmin', 'agent'].includes(session.role)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Validate required fields
        if (!customerEmail || !customerName) {
            return NextResponse.json({ error: 'Customer email and name are required' }, { status: 400 });
        }

        // Generate a unique quote token
        const quoteToken = Date.now().toString(36) + Math.random().toString(36).substr(2);

        // Find or create customer
        let customer = await prisma.customer.findUnique({
            where: { email: customerEmail }
        });

        // Parse items
        let parsedItems = [];
        try {
            parsedItems = typeof items === 'string' ? JSON.parse(items) : items;
        } catch (e) {
            parsedItems = [];
        }

        // Calculate total from items if provided
        const calculatedTotal = parsedItems.reduce((sum, item) => {
            return sum + (parseFloat(item.price || 0) * (parseInt(item.qty || 1)));
        }, 0);

        const finalAmount = calculatedTotal > 0 ? calculatedTotal : parseFloat(amount || 0);

        // Create quote request
        const quote = await prisma.quoteRequest.create({
            data: {
                customerId: customer?.id,
                guestEmail: customerEmail,
                guestPhone: customerPhone,
                customerName,
                productId: productId ? parseInt(productId) : null,
                ticketId: ticketId ? parseInt(ticketId) : null,
                message: message || '',
                items: JSON.stringify(parsedItems),
                amount: finalAmount,
                status: 'Sent',
                quoteToken,
                sentAt: new Date()
            }
        });

        // Generate PDF
        const pdfBuffer = generateQuotePDFBuffer(quote, { customerName, email: customerEmail, phone: customerPhone }, parsedItems);

        // Save PDF to public folder
        const publicDir = getPublicDir();
        const quotesDir = path.join(publicDir, 'quotes');
        if (!fs.existsSync(quotesDir)) {
            fs.mkdirSync(quotesDir, { recursive: true });
        }

        const pdfFileName = `QUOTE-${quoteToken}.pdf`;
        const pdfPath = path.join(quotesDir, pdfFileName);
        fs.writeFileSync(pdfPath, pdfBuffer);

        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
        const pdfUrl = `${baseUrl}/quotes/${pdfFileName}`;

        // Send email to customer
        const quoteUrl = `${baseUrl}/quote/${quoteToken}`;
        await sendQuoteEmail(customerEmail, customerName, quote, pdfUrl, quoteUrl);

        return NextResponse.json({
            success: true,
            quote,
            pdfUrl
        });
    } catch (err) {
        console.error("Quote Creation Error", err);
        return NextResponse.json({ error: 'Failed to create quote' }, { status: 500 });
    }
}

export async function GET(req) {
    try {
        const session = await getSession();
        if (!session || !['admin', 'superadmin', 'agent'].includes(session.role)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const quotes = await prisma.quoteRequest.findMany({
            include: { product: true },
            orderBy: { createdAt: 'desc' }
        });

        // Parse items JSON for each quote
        const quotesWithItems = quotes.map(quote => ({
            ...quote,
            items: quote.items ? (typeof quote.items === 'string' ? JSON.parse(quote.items) : quote.items) : []
        }));

        return NextResponse.json(quotesWithItems);
    } catch (err) {
        console.error("Quote fetch error:", err);
        return NextResponse.json({ error: 'Failed to fetch quotes' }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const session = await getSession();
        if (!session || !['admin', 'superadmin', 'agent'].includes(session.role)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { searchParams } = new URL(req.url);
        const quoteId = searchParams.get('id');

        if (!quoteId) {
            return NextResponse.json({ error: 'Quote ID is required' }, { status: 400 });
        }

        // Delete the quote
        await prisma.quoteRequest.delete({
            where: { id: parseInt(quoteId) }
        });

        return NextResponse.json({ success: true, message: 'Quote deleted successfully' });
    } catch (err) {
        console.error("Quote delete error:", err);
        return NextResponse.json({ error: 'Failed to delete quote' }, { status: 500 });
    }
}
