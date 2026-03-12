import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req) {
    try {
        const body = await req.json();
        const { customerName, email, phone, productId, notes } = body;

        // Basic validation
        if (!customerName || !email || !productId) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
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
        // Optionally, add admin-only checks here by getting the session.
        const quotes = await prisma.quoteRequest.findMany({
            include: { product: true },
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(quotes);
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
