import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req) {
    try {
        const body = await req.json();
        const { quoteToken, action } = body;

        if (!quoteToken || !action) {
            return NextResponse.json({ error: 'Quote token and action are required' }, { status: 400 });
        }

        if (!['Accepted', 'Rejected'].includes(action)) {
            return NextResponse.json({ error: 'Invalid action. Must be Accepted or Rejected' }, { status: 400 });
        }

        const quote = await prisma.quoteRequest.findFirst({
            where: { quoteToken }
        });

        if (!quote) {
            return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
        }

        // Update quote status
        const updatedQuote = await prisma.quoteRequest.update({
            where: { id: quote.id },
            data: {
                status: action,
                respondedAt: new Date()
            }
        });

        return NextResponse.json({
            success: true,
            quote: updatedQuote,
            message: action === 'Accepted' ? 'Quote accepted successfully!' : 'Quote rejected'
        });
    } catch (err) {
        console.error("Quote Response Error", err);
        return NextResponse.json({ error: 'Failed to respond to quote' }, { status: 500 });
    }
}

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const quoteToken = searchParams.get('token');

        if (!quoteToken) {
            return NextResponse.json({ error: 'Quote token is required' }, { status: 400 });
        }

        const quote = await prisma.quoteRequest.findFirst({
            where: { quoteToken },
            include: { product: true }
        });

        if (!quote) {
            return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
        }

        // Parse items
        let items = [];
        try {
            items = typeof quote.items === 'string' ? JSON.parse(quote.items) : quote.items || [];
        } catch (e) {
            items = [];
        }

        return NextResponse.json({
            ...quote,
            items
        });
    } catch (err) {
        console.error("Quote Fetch Error", err);
        return NextResponse.json({ error: 'Failed to fetch quote' }, { status: 500 });
    }
}
