export const dynamic = 'force-dynamic';
import React from 'react';
import prisma from '@/lib/prisma';
import AdminOverviewClient from '@/components/AdminOverviewClient';

export default async function AdminOverview() {
    const stats = {
        totalTickets: await prisma.ticket.count(),
        openTickets: await prisma.ticket.count({ where: { status: 'Open' } }),
        completedTickets: await prisma.ticket.count({ where: { status: 'Completed' } }),
        totalProducts: await prisma.product.count(),
    };

    const recentTickets = await prisma.ticket.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' }
    });

    return <AdminOverviewClient stats={stats} recentTickets={recentTickets} />;
}
