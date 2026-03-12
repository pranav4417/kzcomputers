import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { signToken } from '@/lib/auth';
import bcrypt from 'bcryptjs';

export async function POST(req) {
    try {
        const { username, password } = await req.json();

        const admin = await prisma.admin.findUnique({ where: { username } });

        if (!admin || admin.status !== 'active') {
            return NextResponse.json({ success: false, error: 'Invalid credentials or inactive account' }, { status: 401 });
        }

        const isValid = await bcrypt.compare(password, admin.password);
        if (!isValid) {
            return NextResponse.json({ success: false, error: 'Invalid password' }, { status: 401 });
        }

        const token = signToken({ id: admin.id, username: admin.username, role: admin.role });

        const response = NextResponse.json({ success: true, role: admin.role });
        response.cookies.set('auth_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60,
            path: '/',
        });

        return response;
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
