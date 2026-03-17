import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { requireAuth } from '@/lib/auth';

export async function GET() {
    try {
        // Check authentication
        const session = await requireAuth(['admin', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

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
        // Check authentication
        const session = await requireAuth(['admin', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized - Admin access required' }, { status: 401 });
        }

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
        // Check authentication
        const session = await requireAuth(['admin', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized - Admin access required' }, { status: 401 });
        }

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

export async function PUT(req) {
    try {
        const session = await requireAuth(['superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized - Superadmin access required' }, { status: 401 });
        }

        const { id, status } = await req.json();

        if (!id || !status) {
            return NextResponse.json({ error: 'ID and status are required' }, { status: 400 });
        }

        const updated = await prisma.admin.update({
            where: { id: parseInt(id) },
            data: { status }
        });

        return NextResponse.json({ success: true, agent: updated });
    } catch (error) {
        console.error('Update agent error:', error);
        return NextResponse.json({ error: 'Failed to update agent' }, { status: 500 });
    }
}
