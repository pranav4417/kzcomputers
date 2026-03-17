import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function GET() {
    // Public endpoint - anyone can view services
    try {
        const services = await prisma.service.findMany({ orderBy: { createdAt: 'desc' } });
        return NextResponse.json(services);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        // Check authentication
        const session = await requireAuth(['admin', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized - Admin access required' }, { status: 401 });
        }

        const formData = await req.formData();
        const name = formData.get('name');
        const description = formData.get('description');
        const image = formData.get('image');

        let imagePath = null;
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

            imagePath = uploadResult.secure_url;
        }

        if (session.role === 'admin') {
            await prisma.pendingUpdate.create({
                data: {
                    entityType: 'Service_Create',
                    data: JSON.stringify({ name, description, image: imagePath }),
                    submittedBy: session.id,
                    status: 'Pending'
                }
            });
            return NextResponse.json({ success: true, message: 'Service creation submitted for superadmin approval' });
        }

        const service = await prisma.service.create({
            data: { name, description, image: imagePath }
        });

        return NextResponse.json({ success: true, service });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
