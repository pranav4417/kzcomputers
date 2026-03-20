import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';

export async function POST(req) {
    try {
        const body = await req.json();
        const { customerName, email, phone, productId, notes } = body;

        // Basic validation
        if (!customerName || !email || !productId) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
        }

        const quoteRequest = await prisma.quoteRequest.create({
            data: {
                customerName,
                email,
                phone: phone || '',
                notes: notes || '',
                status: 'New',
                productId: parseInt(productId)
            }
        });

        return NextResponse.json({ success: true, quoteRequest });
    } catch (err) {
        console.error("Quote Request Creation Error", err);
        return NextResponse.json({ error: 'Failed to submit quote request' }, { status: 500 });
    }
}

export async function GET(req) {
    try {
        // Require admin authentication to view all quotes
        const session = await requireAuth(['admin', 'superadmin', 'agent']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized - Admin access required' }, { status: 401 });
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
