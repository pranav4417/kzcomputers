import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

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

            // Upload to Cloudinary
            const uploadResult = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream(
                    {
                        public_id: `services/${fileName.replace(/\.[^/.]+$/, '')}`,
                        folder: 'suraksha/services'
                    },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                ).end(buffer);
            });

            updateData.image = uploadResult.secure_url;
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
