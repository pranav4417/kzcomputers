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

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const search = searchParams.get('search') || '';
        const category = searchParams.get('category') || '';
        const featured = searchParams.get('featured');
        const active = searchParams.get('active');
        const sort = searchParams.get('sort') || 'displayOrder';
        const order = searchParams.get('order') || 'asc';
        const limit = parseInt(searchParams.get('limit')) || 50;
        const offset = parseInt(searchParams.get('offset')) || 0;

        const where = {
            ...(search ? { name: { contains: search, mode: 'insensitive' } } : {}),
            ...(category ? { category } : {}),
            ...(featured !== null && featured !== '' ? { featured: featured === 'true' } : {}),
            ...(active !== null && active !== '' ? { isActive: active === 'true' } : {}),
        };

        const orderBy = {
            ...(sort === 'price' ? { price: order } : {}),
            ...(sort === 'name' ? { name: order } : {}),
            ...(sort === 'createdAt' ? { createdAt: order } : {}),
            ...(sort === 'displayOrder' ? { displayOrder: order } : {}),
            ...(sort === 'featured' ? { featured: order } : {}),
        };

        const [products, total] = await Promise.all([
            prisma.product.findMany({
                where,
                orderBy: Object.keys(orderBy).length > 0 ? orderBy : { displayOrder: 'asc', createdAt: 'desc' },
                take: limit,
                skip: offset,
            }).then(rows => rows.map(p => ({ ...p, price: p.price != null ? Number(p.price) : null }))),
            prisma.product.count({ where }),
        ]);

        return NextResponse.json({ products, total, limit, offset });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const session = await requireAuth(['admin', 'superadmin']);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized - Admin access required' }, { status: 401 });
        }

        const formData = await req.formData();
        const name = formData.get('name');
        const description = formData.get('description');
        const price = formData.get('price');
        const category = formData.get('category') || 'General';
        const stock = parseInt(formData.get('stock')) || 0;
        const featured = formData.get('featured') === 'true';
        const displayOrder = parseInt(formData.get('displayOrder')) || 0;
        const isActive = formData.get('isActive') !== 'false';
        const assetId = formData.get('assetId');
        const image = formData.get('image');

        let imagePath = null;
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

            imagePath = uploadResult.secure_url;
        }

        if (session.role === 'admin') {
            await prisma.pendingUpdate.create({
                data: {
                    entityType: 'Product_Create',
                    data: JSON.stringify({ name, description, price: parseFloat(price), category, stock, featured, displayOrder, isActive, assetId, image: imagePath }),
                    submittedBy: session.id,
                    status: 'Pending'
                }
            });
            return NextResponse.json({ success: true, message: 'Product creation submitted for superadmin approval' });
        }

        const product = await prisma.product.create({
            data: { name, description, price: parseFloat(price), category, stock, featured, displayOrder, isActive, assetId, image: imagePath }
        });

        return NextResponse.json({ success: true, product });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
