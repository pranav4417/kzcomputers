import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

// Use strong JWT_SECRET from environment - fallback to random if not set
const JWT_SECRET = process.env.JWT_SECRET || process.env.AUTH_SECRET || (
    process.env.NODE_ENV === 'production'
        ? (() => { throw new Error('JWT_SECRET environment variable is required in production'); })()
        : 'suraksha_dev_secret_change_in_production'
);

export function signToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch {
        return null;
    }
}

export async function getSession() {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token')?.value;
    if (!token) return null;
    return verifyToken(token);
}

export async function requireAuth(roles = []) {
    const session = await getSession();
    if (!session) return null;
    if (roles.length > 0 && !roles.includes(session.role)) return null;
    return session;
}
