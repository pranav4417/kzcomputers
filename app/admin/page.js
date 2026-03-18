export const dynamic = 'force-dynamic';
import React from 'react';
import prisma from '@/lib/prisma';
import AdminOverviewClient from '@/components/AdminOverviewClient';
import { getSession } from '@/lib/auth';

export default async function AdminOverview() {
    const session = await getSession();
    const isAgent = session?.role === 'agent';
    const agentId = session?.id;

    // Base query filters
    const baseFilter = isAgent ? { assignedToId: agentId } : {};
    
    // Optimize: Run all queries in parallel
    const [
        totalTickets, 
        openTickets, 
        completedTickets, 
        otherStat, // totalProducts for Admin, urgentTickets for Agent
        recentTickets, 
        serviceDistribution
    ] = await Promise.all([
        prisma.ticket.count({ where: baseFilter }),
        prisma.ticket.count({ 
            where: { 
                ...baseFilter, 
                status: { in: ['Open', 'In Progress', 'Pending Parts'] } 
            } 
        }),
        prisma.ticket.count({ 
            where: { 
                ...baseFilter, 
                status: { in: ['Completed', 'Closed'] } 
            } 
        }),
        isAgent 
            ? prisma.ticket.count({ where: { ...baseFilter, priority: 'High', status: { not: 'Closed' } } })
            : prisma.product.count(),
        prisma.ticket.findMany({
            where: baseFilter,
            take: 10,
            orderBy: { createdAt: 'desc' },
            include: { assignedTo: { select: { username: true } } }
        }),
        prisma.ticket.groupBy({
            by: ['serviceType'],
            where: baseFilter,
            _count: { id: true }
        })
    ]);

    // Calculate percentages
    const totalServiceCount = serviceDistribution.reduce((sum, item) => sum + item._count.id, 0);
    const serviceStats = serviceDistribution.map(item => ({
        name: item.serviceType,
        percentage: totalServiceCount > 0 ? Math.round((item._count.id / totalServiceCount) * 100) : 0
    }));

    const stats = {
        totalTickets,
        openTickets,
        completedTickets,
        otherStat,
        serviceStats,
        role: session?.role || 'admin',
        username: session?.username || 'User'
    };

    return <AdminOverviewClient stats={stats} recentTickets={recentTickets} />;
}
