import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { sendOtpEmail } from '@/lib/email';

export async function POST(req) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 });
        }

        const normalizedEmail = email.toLowerCase();

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        // Store in DB
        await prisma.otp.create({
            data: {
                email: normalizedEmail,
                code: otp,
                expiresAt,
            },
        });

        // Send Email
        await sendOtpEmail(email, otp);

        return NextResponse.json({ success: true, message: 'OTP sent successfully' });
    } catch (error) {
        console.error('Send OTP error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
