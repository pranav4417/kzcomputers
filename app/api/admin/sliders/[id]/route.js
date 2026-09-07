import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function DELETE(req, { params }) {
    try {
        const session = await requireAuth(['admin', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { id } = await params;
        await prisma.slider.delete({ where: { id: parseInt(id) } });
        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function PATCH(req, { params }) {
    try {
        const session = await requireAuth(['admin', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { id } = await params;
        const formData = await req.formData();

        const title = formData.get('title');
        const subtitle = formData.get('subtitle');
        const description = formData.get('description');
        const link = formData.get('link');
        const buttonText = formData.get('buttonText');
        const displayOrder = formData.get('displayOrder');
        const isActive = formData.get('isActive');
        const startDate = formData.get('startDate');
        const endDate = formData.get('endDate');
        const transitionType = formData.get('transitionType');
        const image = formData.get('image');

        const updateData = {};
        if (title !== null) updateData.title = title;
        if (subtitle !== null) updateData.subtitle = subtitle;
        if (description !== null) updateData.description = description;
        if (link !== null) updateData.link = link;
        if (buttonText !== null) updateData.buttonText = buttonText;
        if (displayOrder !== null) updateData.displayOrder = parseInt(displayOrder);
        if (isActive !== null) updateData.isActive = isActive === 'true';
        if (startDate !== null) updateData.startDate = startDate ? new Date(startDate) : null;
        if (endDate !== null) updateData.endDate = endDate ? new Date(endDate) : null;
        if (transitionType !== null) updateData.transitionType = transitionType;

        if (image && typeof image !== 'string') {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const fileName = `${Date.now()}-${image.name}`;

            const uploadResult = await cloudinary.uploader.upload(
                `data:${image.type};base64,${buffer.toString('base64')}`,
                {
                    public_id: `sliders/${fileName.replace(/\.[^/.]+$/, '')}`,
                    folder: 'suraksha/sliders'
                }
            );

            updateData.image = uploadResult.secure_url;
        }

        const slider = await prisma.slider.update({
            where: { id: parseInt(id) },
            data: updateData
        });

        return NextResponse.json({ success: true, slider });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
