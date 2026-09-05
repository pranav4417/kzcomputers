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

export async function DELETE(req, { params }) {
    try {
        const session = await requireAuth(['admin', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized - Admin access required' }, { status: 401 });
        }

        const { id } = await params;
        
        if (session.role === 'admin') {
            await prisma.pendingUpdate.create({
                data: {
                    entityType: 'Product_Delete',
                    entityId: parseInt(id),
                    data: '{}',
                    submittedBy: session.id,
                    status: 'Pending'
                }
            });
            return NextResponse.json({ success: true, message: 'Product deletion submitted for superadmin approval' });
        }

        await prisma.product.delete({ where: { id: parseInt(id) } });
        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function PATCH(req, { params }) {
    try {
        const session = await requireAuth(['admin', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized - Admin access required' }, { status: 401 });
        }

        const { id } = await params;
        const formData = await req.formData();

        const name = formData.get('name');
        const description = formData.get('description');
        const price = formData.get('price');
        const category = formData.get('category');
        const stock = formData.get('stock');
        const featured = formData.get('featured');
        const displayOrder = formData.get('displayOrder');
        const isActive = formData.get('isActive');
        const image = formData.get('image');

        const updateData = {};
        if (name) updateData.name = name;
        if (description !== null) updateData.description = description;
        if (price) updateData.price = parseFloat(price);
        if (category !== null) updateData.category = category;
        if (stock !== null) updateData.stock = parseInt(stock);
        if (featured !== null) updateData.featured = featured === 'true';
        if (displayOrder !== null) updateData.displayOrder = parseInt(displayOrder);
        if (isActive !== null) updateData.isActive = isActive === 'true';

        if (image && typeof image !== 'string') {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const fileName = `${Date.now()}-${image.name}`;

            const uploadResult = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream(
                    {
                        public_id: `products/${fileName.replace(/\.[^/.]+$/, '')}`,
                        folder: 'suraksha/products'
                    },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                ).end(buffer);
            });

            updateData.image = uploadResult.secure_url;
        }

        if (session.role === 'admin') {
            await prisma.pendingUpdate.create({
                data: {
                    entityType: 'Product_Update',
                    entityId: parseInt(id),
                    data: JSON.stringify(updateData),
                    submittedBy: session.id,
                    status: 'Pending'
                }
            });
            return NextResponse.json({ success: true, message: 'Product update submitted for superadmin approval' });
        }

        const product = await prisma.product.update({
            where: { id: parseInt(id) },
            data: updateData
        });

        return NextResponse.json({ success: true, product });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
