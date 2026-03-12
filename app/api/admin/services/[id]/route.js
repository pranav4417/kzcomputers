import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import fs from 'fs/promises';
import path from 'path';

export async function DELETE(req, { params }) {
    try {
        const { id } = await params;
        await prisma.service.delete({ where: { id: parseInt(id) } });
        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function PATCH(req, { params }) {
    try {
        const { id } = await params;
        const formData = await req.formData();

        const name = formData.get('name');
        const description = formData.get('description');
        const image = formData.get('image');

        // Build update data
        const updateData = {};
        if (name) updateData.name = name;
        if (description) updateData.description = description;

        // Handle image upload if provided
        if (image && typeof image !== 'string') {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const fileName = `${Date.now()}-${image.name}`;
            const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'services');
            await fs.mkdir(uploadDir, { recursive: true });
            await fs.writeFile(path.join(uploadDir, fileName), buffer);
            updateData.image = `/uploads/services/${fileName}`;
        }

        const service = await prisma.service.update({
            where: { id: parseInt(id) },
            data: updateData
        });

        return NextResponse.json({ success: true, service });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
