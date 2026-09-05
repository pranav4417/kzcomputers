import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const active = searchParams.get('active');

        const where = {};
        if (active !== null && active !== '') {
            where.isActive = active === 'true';
        }

        const sliders = await prisma.slider.findMany({
            where,
            orderBy: { displayOrder: 'asc' }
        });

        return NextResponse.json({ sliders });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch sliders' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const session = await requireAuth(['admin', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const formData = await req.formData();
        const title = formData.get('title');
        const subtitle = formData.get('subtitle');
        const description = formData.get('description');
        const link = formData.get('link');
        const buttonText = formData.get('buttonText') || 'Learn More';
        const displayOrder = parseInt(formData.get('displayOrder')) || 0;
        const isActive = formData.get('isActive') !== 'false';
        const startDate = formData.get('startDate');
        const endDate = formData.get('endDate');
        const image = formData.get('image');

        let imagePath = null;
        if (image && typeof image !== 'string') {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const fileName = `${Date.now()}-${image.name}`;

            const uploadResult = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream(
                    {
                        public_id: `sliders/${fileName.replace(/\.[^/.]+$/, '')}`,
                        folder: 'suraksha/sliders'
                    },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                ).end(buffer);
            });

            imagePath = uploadResult.secure_url;
        }

        const slider = await prisma.slider.create({
            data: {
                title,
                subtitle,
                description,
                image: imagePath,
                link,
                buttonText,
                displayOrder,
                isActive,
                startDate: startDate ? new Date(startDate) : null,
                endDate: endDate ? new Date(endDate) : null,
            }
        });

        return NextResponse.json({ success: true, slider });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
