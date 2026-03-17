export const dynamic = 'force-dynamic';
import React from 'react';
import prisma from '@/lib/prisma';
import AdminOverviewClient from '@/components/AdminOverviewClient';

export default async function AdminOverview() {
    // Optimize: Run all queries in parallel instead of sequentially
    const [totalTickets, openTickets, completedTickets, totalProducts, recentTickets, serviceDistribution] = await Promise.all([
        prisma.ticket.count(),
        prisma.ticket.count({ where: { status: 'Open' } }),
        prisma.ticket.count({ where: { status: 'Completed' } }),
        prisma.product.count(),
        prisma.ticket.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' },
            include: { assignedTo: { select: { username: true } } }
        }),
        // Get real service distribution data
        prisma.ticket.groupBy({
            by: ['serviceType'],
            _count: { id: true }
        })
    ]);

    // Calculate percentages from real data
    const totalServiceCount = serviceDistribution.reduce((sum, item) => sum + item._count.id, 0);
    const serviceStats = serviceDistribution.map(item => ({
        name: item.serviceType,
        percentage: totalServiceCount > 0 ? Math.round((item._count.id / totalServiceCount) * 100) : 0
    }));

    const stats = {
        totalTickets,
        openTickets,
        completedTickets,
        totalProducts,
        serviceStats
    };

    return <AdminOverviewClient stats={stats} recentTickets={recentTickets} />;
}
