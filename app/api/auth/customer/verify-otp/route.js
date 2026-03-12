import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { signToken } from '@/lib/auth';
import bcrypt from 'bcryptjs';

export async function POST(req) {
    try {
        const { email, code, name, phone, password, isRegister } = await req.json();

        const normalizedEmail = email.toLowerCase();

        // 1. Verify OTP
        const otpRecord = await prisma.otp.findFirst({
            where: {
                email: normalizedEmail,
                code,
                expiresAt: { gte: new Date() },
            },
            orderBy: { createdAt: 'desc' },
        });

        if (!otpRecord) {
            return NextResponse.json({ success: false, error: 'Invalid or expired OTP' }, { status: 400 });
        }

        // 2. Clear OTP
        await prisma.otp.deleteMany({ where: { email: normalizedEmail } });

        let userId;
        let role = 'customer';

        if (isRegister) {
            // Create new customer
            const hashedPassword = await bcrypt.hash(password, 10);
            const customer = await prisma.customer.create({
                data: {
                    email: normalizedEmail,
                    name,
                    phone,
                    password: hashedPassword,
                    verified: true,
                },
            });
            userId = customer.id;
        } else {
            // Login check
            const customer = await prisma.customer.findUnique({ where: { email: normalizedEmail } });
            if (!customer) {
                return NextResponse.json({ success: false, error: 'Customer not found' }, { status: 404 });
            }
            userId = customer.id;
        }

        // 3. Generate JWT
        const token = signToken({ id: userId, email: normalizedEmail, role });

        const response = NextResponse.json({ success: true, message: 'Verified successfully' });

        // Set cookie
        response.cookies.set('auth_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60, // 1 week
            path: '/',
        });

        return response;
    } catch (error) {
        console.error('Verify OTP error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
