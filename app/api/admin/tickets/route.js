import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const customerEmail = searchParams.get('email');

        let whereClause = {};
        if (customerEmail) {
            whereClause.email = customerEmail;
        }

        const tickets = await prisma.ticket.findMany({
            where: whereClause,
            include: {
                assignedTo: { select: { username: true } }
            },
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(tickets);
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
