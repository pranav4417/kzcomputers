import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET(req) {
    try {
        // Get the auth token from cookies
        const token = req.cookies.get('auth_token')?.value;

        if (!token) {
            return NextResponse.json({ user: null }, { status: 200 });
        }

        const payload = verifyToken(token);

        if (!payload) {
            return NextResponse.json({ user: null }, { status: 200 });
        }

        if (payload.role === 'customer') {
            const customer = await prisma.customer.findUnique({
                where: { email: payload.email },
                select: { name: true, phone: true }
            });
            if (customer) {
                payload.name = customer.name;
                payload.phone = customer.phone;
            }
        }

        return NextResponse.json({ user: payload }, { status: 200 });
    } catch (error) {
        console.error('Session check error:', error);
        return NextResponse.json({ user: null }, { status: 200 });
    }
}
