import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

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

        return NextResponse.json({ user: payload }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ user: null }, { status: 200 });
    }
}
