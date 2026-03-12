import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'suraksha_secret');

export async function middleware(request) {
    const { pathname } = request.nextUrl;

    // Protect admin routes
    if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
        const token = request.cookies.get('auth_token')?.value;

        if (!token) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }

        try {
            const { payload } = await jwtVerify(token, JWT_SECRET);
            if (!['agent', 'admin', 'superadmin'].includes(payload.role)) {
                return NextResponse.redirect(new URL('/admin/login', request.url));
            }
        } catch (error) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    // Protect customer dashboard and raise-ticket routes
    if ((pathname.startsWith('/dashboard') || pathname.startsWith('/raise-ticket')) && !pathname.startsWith('/api')) {
        const token = request.cookies.get('auth_token')?.value;

        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        try {
            const { payload } = await jwtVerify(token, JWT_SECRET);
            if (payload.role !== 'customer') {
                return NextResponse.redirect(new URL('/login', request.url));
            }
        } catch (error) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*', '/dashboard/:path*', '/raise-ticket/:path*'],
};
