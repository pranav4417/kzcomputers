import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q');

    if (!query) {
        return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    try {
        const ticket = await prisma.ticket.findFirst({
            where: {
                OR: [
                    { ticketNumber: query },
                    { email: query }
                ]
            },
            orderBy: { createdAt: 'desc' }
        });

        if (!ticket) {
            return NextResponse.json({ success: false, error: 'Ticket not found' });
        }

        return NextResponse.json({ success: true, token: ticket.ticketToken });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
