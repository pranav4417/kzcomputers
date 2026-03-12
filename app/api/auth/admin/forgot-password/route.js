import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { sendEmail } from '@/lib/email';

export async function POST(request) {
    try {
        const { email, username } = await request.json();

        // Find admin/agent by email or username
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: email },
                    { username: username }
                ],
                role: { in: ['admin', 'agent'] }
            }
        });

        if (!user) {
            return NextResponse.json(
                { success: false, error: 'No staff account found with this email/username' },
                { status: 404 }
            );
        }

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        // Save OTP to database
        await prisma.user.update({
            where: { id: user.id },
            data: {
                otp: otp,
                otpExpiry: otpExpiry
            }
        });

        // Send OTP via email
        const html = `
            <div style="font-family:Inter,sans-serif;max-width:480px;margin:auto;background:#1a1a2e;padding:40px;border-radius:16px;">
                <h2 style="color:#6C63FF;margin-bottom:8px;">Suraksha Group - Password Reset</h2>
                <p style="color:#ccc;">Your password reset verification code:</p>
                <div style="font-size:36px;font-weight:bold;letter-spacing:12px;color:#fff;background:#2a2a4a;padding:20px;border-radius:8px;text-align:center;margin:20px 0;">${otp}</div>
                <p style="color:#aaa;font-size:14px;">This OTP expires in 10 minutes. Do not share it with anyone.</p>
            </div>
        `;

        await sendEmail({
            to: user.email,
            subject: 'Suraksha Group - Password Reset OTP',
            html
        });

        return NextResponse.json({
            success: true,
            message: 'OTP sent to your email',
            userId: user.id
        });

    } catch (error) {
        console.error('Forgot password error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to process request' },
            { status: 500 }
        );
    }
}

export async function PUT(request) {
    try {
        const { userId, otp, newPassword } = await request.json();

        const user = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (!user) {
            return NextResponse.json(
                { success: false, error: 'User not found' },
                { status: 404 }
            );
        }

        // Verify OTP
        if (user.otp !== otp || !user.otpExpiry || new Date() > user.otpExpiry) {
            return NextResponse.json(
                { success: false, error: 'Invalid or expired OTP' },
                { status: 400 }
            );
        }

        // Update password
        await prisma.user.update({
            where: { id: userId },
            data: {
                password: newPassword,
                otp: null,
                otpExpiry: null
            }
        });

        return NextResponse.json({
            success: true,
            message: 'Password reset successfully'
        });

    } catch (error) {
        console.error('Reset password error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to reset password' },
            { status: 500 }
        );
    }
}
