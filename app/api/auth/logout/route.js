import { NextResponse } from 'next/server';

export async function POST() {
    try {
        const response = NextResponse.json({ success: true });
        response.cookies.set('auth_token', '', { expires: new Date(0), path: '/' });
        return response;
    } catch (error) {
        console.error('Logout error:', error);
        return NextResponse.json({ success: false, error: 'Logout failed' }, { status: 500 });
    }
}
