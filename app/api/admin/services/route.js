import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    const services = await prisma.service.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json(services);
}

export async function POST(req) {
    try {
        const formData = await req.formData();
        const name = formData.get('name');
        const description = formData.get('description');
        const image = formData.get('image');

        let imagePath = null;
        if (image && typeof image !== 'string') {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const fileName = `${Date.now()}-${image.name}`;
            const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'services');
            await fs.mkdir(uploadDir, { recursive: true });
            await fs.writeFile(path.join(uploadDir, fileName), buffer);
            imagePath = `/uploads/services/${fileName}`;
        }

        const service = await prisma.service.create({
            data: { name, description, image: imagePath }
        });

        return NextResponse.json({ success: true, service });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
