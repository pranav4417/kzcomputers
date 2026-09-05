import { Suspense } from 'react';
import ProductsClient from './ProductsClient';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

async function getProducts(searchParams) {
  const search = searchParams?.search || '';
  const category = searchParams?.category || '';
  const sort = searchParams?.sort || 'displayOrder';
  const order = searchParams?.order || 'asc';
  const limit = parseInt(searchParams?.limit) || 12;
  const offset = parseInt(searchParams?.offset) || 0;

    const where = {
        isActive: true,
        ...(search ? { name: { contains: search, mode: 'insensitive' } } : {}),
        ...(category ? { category } : {}),
    };

  const orderBy = {
    ...(sort === 'price' ? { price: order } : {}),
    ...(sort === 'name' ? { name: order } : {}),
    ...(sort === 'createdAt' ? { createdAt: order } : {}),
    ...(sort === 'displayOrder' ? { displayOrder: order } : {}),
  };

  const [products, categories, total] = await Promise.all([
    prisma.product.findMany({
      where,
      orderBy: Object.keys(orderBy).length > 0 ? orderBy : { displayOrder: 'asc', createdAt: 'desc' },
      take: limit,
      skip: offset,
    }).then(rows => rows.map(p => ({ ...p, price: p.price != null ? Number(p.price) : null }))),
    prisma.product.findMany({
      where: { isActive: true },
      select: { category: true },
      distinct: ['category'],
      orderBy: { category: 'asc' },
    }),
    prisma.product.count({ where }),
  ]);

  return { products, categories: categories.map(c => c.category).filter(Boolean), total, limit, offset };
}

export default async function ProductsPage({ searchParams }) {
  const data = await getProducts(searchParams);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Suspense fallback={<div className="p-20 flex justify-center"><div style={{ width: '50px', height: '50px', border: '3px solid var(--primary)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div></div>}>
        <ProductsClient initialData={data} />
      </Suspense>
    </main>
  );
}
