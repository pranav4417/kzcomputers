import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    const products = await prisma.product.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json(products);
}

export async function POST(req) {
    try {
        const formData = await req.formData();
        const name = formData.get('name');
        const description = formData.get('description');
        const price = formData.get('price');
        const image = formData.get('image');

        let imagePath = null;
        if (image && typeof image !== 'string') {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const fileName = `${Date.now()}-${image.name}`;
            const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'products');
            await fs.mkdir(uploadDir, { recursive: true });
            await fs.writeFile(path.join(uploadDir, fileName), buffer);
            imagePath = `/uploads/products/${fileName}`;
        }

        const product = await prisma.product.create({
            data: { name, description, price: parseFloat(price), image: imagePath }
        });

        return NextResponse.json({ success: true, product });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
