import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';

// GET - Fetch all parts (public for viewing)
export async function GET(req) {
    try {
        if (!prisma || !prisma.part) {
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

        const parts = await prisma.part.findMany({
            where,
            orderBy: [{ category: 'asc' }, { name: 'asc' }],
        });

        return NextResponse.json(parts);
    } catch (error) {
        console.error('Error fetching parts:', error);
        return NextResponse.json({ error: 'Failed to fetch parts', details: error.message }, { status: 500 });
    }
}

// POST - Create new part (admin only)
export async function POST(req) {
    try {
        const session = await requireAuth(['admin', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized - Admin access required' }, { status: 401 });
        }

        const formData = await req.formData();

        const part = await prisma.part.create({
            data: {
                name: formData.get('name'),
                partNumber: formData.get('partNumber') || null,
                category: formData.get('category') || 'General',
                description: formData.get('description') || null,
                price: parseFloat(formData.get('price')) || 0,
                costPrice: formData.get('costPrice') ? parseFloat(formData.get('costPrice')) : null,
                hsnCode: formData.get('hsnCode') || null,
                gstRate: parseFloat(formData.get('gstRate')) || 18,
                stock: parseInt(formData.get('stock')) || 0,
                minStock: parseInt(formData.get('minStock')) || 0,
                unit: formData.get('unit') || 'NOS',
                image: formData.get('image') || null,
                isActive: formData.get('isActive') !== 'false',
            }
        });

        return NextResponse.json({ success: true, part });
    } catch (error) {
        console.error('Error creating part:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// PUT - Update part (admin only)
export async function PUT(req) {
    try {
        const session = await requireAuth(['admin', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized - Admin access required' }, { status: 401 });
        }

        const formData = await req.formData();
        const id = parseInt(formData.get('id'));

        const part = await prisma.part.update({
            where: { id },
            data: {
                name: formData.get('name'),
                partNumber: formData.get('partNumber') || null,
                category: formData.get('category') || 'General',
                description: formData.get('description') || null,
                price: parseFloat(formData.get('price')) || 0,
                costPrice: formData.get('costPrice') ? parseFloat(formData.get('costPrice')) : null,
                hsnCode: formData.get('hsnCode') || null,
                gstRate: parseFloat(formData.get('gstRate')) || 18,
                stock: parseInt(formData.get('stock')) || 0,
                minStock: parseInt(formData.get('minStock')) || 0,
                unit: formData.get('unit') || 'NOS',
                image: formData.get('image') || null,
                isActive: formData.get('isActive') !== 'false',
            }
        });

        return NextResponse.json({ success: true, part });
    } catch (error) {
        console.error('Error updating part:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// DELETE - Delete part (admin only)
export async function DELETE(req) {
    try {
        const session = await requireAuth(['admin', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized - Admin access required' }, { status: 401 });
        }

        const { searchParams } = new URL(req.url);
        const id = parseInt(searchParams.get('id'));

        await prisma.part.delete({
            where: { id }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting part:', error);
        return NextResponse.json({ error: 'Failed to delete part' }, { status: 500 });
    }
}
