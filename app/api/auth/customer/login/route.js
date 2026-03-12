import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { signToken } from '@/lib/auth';
import bcrypt from 'bcryptjs';

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ success: false, error: 'Email and password are required' }, { status: 400 });
        }

        const customer = await prisma.customer.findUnique({
            where: { email: email.toLowerCase() },
        });

        if (!customer) {
            return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
        }

        const isMatch = await bcrypt.compare(password, customer.password);
        if (!isMatch) {
            return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
        }

        const token = signToken({ id: customer.id, email: customer.email.toLowerCase(), role: 'customer' });

        const response = NextResponse.json({ success: true, message: 'Logged in successfully' });

        response.cookies.set('auth_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60, // 1 week
            path: '/',
        });

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
