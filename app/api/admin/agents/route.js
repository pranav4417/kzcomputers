import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function GET() {
    try {
        const agents = await prisma.admin.findMany({
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
                status: true,
                createdAt: true,
            },
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(agents);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch agents' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const { username, email, password, role } = await req.json();

        // Check if exists
        const existingUser = await prisma.admin.findFirst({
            where: {
                OR: [
                    { username },
                    { email }
                ]
            }
        });

        if (existingUser) {
            return NextResponse.json({ error: 'Username or Email already exists' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAgent = await prisma.admin.create({
            data: {
                username,
                email,
                password: hashedPassword,
                role: role || 'agent',
                status: 'active'
            }
        });

        return NextResponse.json({ success: true, agent: { id: newAgent.id, username: newAgent.username, role: newAgent.role } });
    } catch (error) {
        console.error('Add agent error:', error);
        return NextResponse.json({ error: 'Failed to create agent' }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'Agent ID is required' }, { status: 400 });
        }

        // Prevent deleting the last admin
        const adminCount = await prisma.admin.count({ where: { role: 'admin' } });
        const targetAgent = await prisma.admin.findUnique({ where: { id: parseInt(id) } });

        if (targetAgent?.role === 'admin' && adminCount <= 1) {
            return NextResponse.json({ error: 'Cannot delete the last admin account.' }, { status: 400 });
        }

        await prisma.admin.delete({
            where: { id: parseInt(id) }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete agent' }, { status: 500 });
    }
}
