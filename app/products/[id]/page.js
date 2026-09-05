import { Suspense } from 'react';
import ProductDetailClient from './ProductDetailClient';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

async function getProduct(id) {
    const product = await prisma.product.findUnique({
        where: { id: parseInt(id) },
    });
    return product;
}

export default async function ProductDetailPage({ params }) {
    const product = await getProduct(params.id);

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Suspense fallback={<div className="p-20 flex justify-center"><div style={{ width: '50px', height: '50px', border: '3px solid var(--primary)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div></div>}>
                <ProductDetailClient product={product} />
            </Suspense>
        </main>
    );
}
