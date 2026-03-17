import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';

// GET - Fetch all service charges (public for viewing)
export async function GET(req) {
    try {
        if (!prisma || !prisma.serviceCharge) {
            console.error('Prisma client not initialized properly');
            return NextResponse.json({ error: 'Database not ready' }, { status: 500 });
        }

        const { searchParams } = new URL(req.url);
        const category = searchParams.get('category');
        const activeOnly = searchParams.get('active') !== 'false';

        const where = {
            ...(category && category !== 'all' ? { category } : {}),
            ...(activeOnly ? { isActive: true } : {})
        };

        const charges = await prisma.serviceCharge.findMany({
            where,
            orderBy: [{ category: 'asc' }, { name: 'asc' }],
        });

        return NextResponse.json(charges);
    } catch (error) {
        console.error('Error fetching charges:', error);
        return NextResponse.json({ error: 'Failed to fetch service charges', details: error.message }, { status: 500 });
    }
}

// POST - Create new service charge (admin only)
export async function POST(req) {
    try {
        const session = await requireAuth(['admin', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized - Admin access required' }, { status: 401 });
        }

        const formData = await req.formData();

        const charge = await prisma.serviceCharge.create({
            data: {
                name: formData.get('name'),
                code: formData.get('code') || null,
                category: formData.get('category') || 'Labor',
                description: formData.get('description') || null,
                price: parseFloat(formData.get('price')) || 0,
                gstRate: parseFloat(formData.get('gstRate')) || 18,
                duration: formData.get('duration') ? parseInt(formData.get('duration')) : null,
                isActive: formData.get('isActive') !== 'false',
            }
        });

        return NextResponse.json({ success: true, charge });
    } catch (error) {
        console.error('Error creating charge:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// PUT - Update service charge (admin only)
export async function PUT(req) {
    try {
        const session = await requireAuth(['admin', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized - Admin access required' }, { status: 401 });
        }

        const formData = await req.formData();
        const id = parseInt(formData.get('id'));

        const charge = await prisma.serviceCharge.update({
            where: { id },
            data: {
                name: formData.get('name'),
                code: formData.get('code') || null,
                category: formData.get('category') || 'Labor',
                description: formData.get('description') || null,
                price: parseFloat(formData.get('price')) || 0,
                gstRate: parseFloat(formData.get('gstRate')) || 18,
                duration: formData.get('duration') ? parseInt(formData.get('duration')) : null,
                isActive: formData.get('isActive') !== 'false',
            }
        });

        return NextResponse.json({ success: true, charge });
    } catch (error) {
        console.error('Error updating charge:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// DELETE - Delete service charge (admin only)
export async function DELETE(req) {
    try {
        const session = await requireAuth(['admin', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized - Admin access required' }, { status: 401 });
        }

        const { searchParams } = new URL(req.url);
        const id = parseInt(searchParams.get('id'));

        await prisma.serviceCharge.delete({
            where: { id }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting charge:', error);
        return NextResponse.json({ error: 'Failed to delete service charge' }, { status: 500 });
    }
}
