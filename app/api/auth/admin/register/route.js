import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(req) {
    try {
        const { username, email, password, role } = await req.json();

        if (!username || !email || !password || !role) {
            return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 400 });
        }

        const existingAdmin = await prisma.admin.findFirst({
            where: {
                OR: [
                    { username },
                    { email }
                ]
            }
        });

        if (existingAdmin) {
            return NextResponse.json({ success: false, error: 'Username or email already exists' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = await prisma.admin.create({
            data: {
                username,
                email,
                password: hashedPassword,
                role: role === 'admin' ? 'admin' : 'agent',
                status: 'pending' // Important: needs superadmin approval
            }
        });

        return NextResponse.json({ success: true, message: 'Registration successful. Waiting for approval.' });
    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json({ success: false, error: 'Registration failed' }, { status: 500 });
    }
}
