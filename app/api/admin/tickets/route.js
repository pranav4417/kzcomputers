import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';
import { sendTicketEmail } from '@/lib/email';
import crypto from 'crypto';

function generateTicketNumber() {
    const now = new Date();
    const datePart = `${String(now.getDate()).padStart(2, '0')}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getFullYear()).slice(-2)}`;
    const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `SUK-${datePart}${randomPart}`;
}

export async function GET(req) {
    try {
        // Check authentication
        const session = await requireAuth(['admin', 'agent', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

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

export async function POST(req) {
    try {
        // Check authentication
        const session = await requireAuth(['admin', 'agent', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();
        const { customerName, email, phone, product, serviceType, priority, subject, description, assignedToId } = body;

        if (!customerName || !email || !phone || !product || !serviceType || !subject) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const ticketNumber = generateTicketNumber();
        const ticketToken = crypto.randomBytes(16).toString('hex');

        const ticket = await prisma.ticket.create({
            data: {
                ticketNumber,
                ticketToken,
                customerName,
                email,
                phone,
                product,
                serviceType,
                priority: priority || 'Medium',
                subject,
                description: description || null,
                assignedToId: assignedToId ? parseInt(assignedToId, 10) : null,
            },
        });

        // Send confirmation email
        try {
            await sendTicketEmail(email, {
                ticketNumber: ticket.ticketNumber,
                customerName: ticket.customerName,
            });
        } catch (emailErr) {
            console.error('Failed to send ticket email:', emailErr);
        }

        return NextResponse.json({ success: true, ticket });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
