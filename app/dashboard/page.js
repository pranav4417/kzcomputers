export const dynamic = 'force-dynamic';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Ticket, Clock, CheckCircle2, Package } from 'lucide-react';
import Link from 'next/link';

export default async function CustomerDashboard({ searchParams }) {
    const session = await getSession();

    if (!session || session.role !== 'customer') {
        redirect('/login');
    }

    const customer = await prisma.customer.findUnique({
        where: { email: session.email },
        select: { name: true }
    });

    const allTickets = await prisma.ticket.findMany({
        where: { email: session.email },
        orderBy: { createdAt: 'desc' },
        include: {
            updates: {
                orderBy: { createdAt: 'desc' },
                take: 1
            }
        }
    });

    const stats = {
        total: allTickets.length,
        open: allTickets.filter(t => t.status === 'Open').length,
        completed: allTickets.filter(t => t.status === 'Completed').length,
    };

    const statusFilter = searchParams.status;
    const tickets = statusFilter
        ? allTickets.filter(ticket => ticket.status === statusFilter)
        : allTickets;

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <section className="section-padding container" style={{ paddingTop: '8rem', maxWidth: '72rem', flexGrow: 1 }}>
                <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
                    <div>
                        <h1 className="title-lg mb-2" style={{ fontWeight: 900 }}>My <span className="gradient-text">Dashboard</span></h1>
                        <p className="text-dim">Welcome back, <span style={{ color: '#fff', fontWeight: 'bold' }}>{customer?.name || 'Customer'}</span>! Here is the status of your service requests.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <form action={async () => {
                            'use server';
                            const { cookies } = await import('next/headers');
                            (await cookies()).set('auth_token', '', { expires: new Date(0), path: '/' });
                            redirect('/');
                        }}>
                            <button className="btn-secondary flex items-center gap-2 logout-btn-hover" style={{ borderColor: 'rgba(255, 101, 132, 0.3)', color: 'var(--secondary)', transition: 'all 0.2s' }}>
                                Log Out
                            </button>
                        </form>
                        <Link href="/raise-ticket" className="btn-primary flex items-center gap-2">
                            <Ticket size={20} /> Raise New Ticket
                        </Link>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <Link key="total" href="/dashboard" className="block">
                        <div className="glass p-8 flex items-center gap-6 glass-hover delay-0 animate-fade-in">
                            <div style={{ padding: '1rem', background: 'rgba(108, 99, 255, 0.1)', borderRadius: '1rem' }}><Ticket size={24} className="text-primary" /></div>
                            <div><div className="title-md m-0">{stats.total}</div><div className="text-dim" style={{ fontSize: '0.65rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Total Tickets</div></div>
                        </div>
                    </Link>
                    <Link key="open" href="/dashboard?status=Open" className="block">
                        <div className="glass p-8 flex items-center gap-6 glass-hover delay-1 animate-fade-in">
                            <div style={{ padding: '1rem', background: 'rgba(255, 193, 7, 0.1)', borderRadius: '1rem' }}><Clock size={24} style={{ color: '#ffc107' }} /></div>
                            <div><div className="title-md m-0">{stats.open}</div><div className="text-dim" style={{ fontSize: '0.65rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Active Requests</div></div>
                        </div>
                    </Link>
                    <Link key="completed" href="/dashboard?status=Completed" className="block">
                        <div className="glass p-8 flex items-center gap-6 glass-hover delay-2 animate-fade-in">
                            <div style={{ padding: '1rem', background: 'rgba(40, 167, 69, 0.1)', borderRadius: '1rem' }}><CheckCircle2 size={24} style={{ color: '#28a745' }} /></div>
                            <div><div className="title-md m-0">{stats.completed}</div><div className="text-dim" style={{ fontSize: '0.65rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Fixed & Closed</div></div>
                        </div>
                    </Link>
                </div>

                {/* Tickets List */}
                <div className="glass animate-fade-in delay-3" style={{ overflow: 'hidden' }}>
                    {tickets.length === 0 ? (
                        <div className="p-12 text-center text-dim">
                            <Package size={64} className="mx-auto mb-4" style={{ opacity: 0.2 }} />
                            <p>You haven't raised any tickets yet.</p>
                        </div>
                    ) : (
                        <div className="table-wrapper">
                            <table className="data-table">
                                <thead>
                                    <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--border-glass)', fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)' }}>
                                        <th style={{ padding: '1.25rem' }}>Ticket #</th>
                                        <th style={{ padding: '1.25rem' }}>Product / Service</th>
                                        <th style={{ padding: '1.25rem' }}>Status</th>
                                        <th style={{ padding: '1.25rem' }}>Latest Update</th>
                                        <th style={{ padding: '1.25rem' }}>Date</th>
                                        <th style={{ padding: '1.25rem', textAlign: 'right' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tickets.map((ticket) => (
                                        <tr key={ticket.id} className="tr-hover" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'var(--transition)' }}>
                                            <td style={{ padding: '1.25rem', fontWeight: 'bold', color: 'var(--primary)', fontFamily: 'monospace', letterSpacing: '0.05em' }}>
                                                <span style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '0.5rem 0.75rem', borderRadius: '0.375rem', display: 'inline-block' }}>#{ticket.ticketNumber}</span>
                                            </td>
                                            <td style={{ padding: '1.25rem' }}>
                                                <div style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>{ticket.product}</div>
                                                <div className="text-dim" style={{ fontSize: '0.65rem' }}>{ticket.serviceType}</div>
                                            </td>
                                            <td style={{ padding: '1.25rem' }}>
                                                <span className={`status-badge ${ticket.status === 'Open' ? 'status-open' : 'status-closed'}`}>
                                                    {ticket.status.toUpperCase()}
                                                </span>
                                            </td>
                                            <td className="text-dim" style={{ padding: '1.25rem', fontSize: '0.75rem', maxWidth: '200px' }}>
                                                {ticket.updates && ticket.updates.length > 0 ? (
                                                    <div>
                                                        <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{ticket.updates[0].status}</div>
                                                        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ticket.updates[0].comment}</div>
                                                    </div>
                                                ) : (
                                                    <span style={{ opacity: 0.5 }}>No updates yet</span>
                                                )}
                                            </td>
                                            <td className="text-dim" style={{ padding: '1.25rem', fontSize: '0.875rem' }}>{new Date(ticket.createdAt).toLocaleDateString()}</td>
                                            <td style={{ padding: '1.25rem', textAlign: 'right' }}>
                                                <Link href={`/track/${ticket.ticketToken}`} className="track-btn-hover hover-primary" style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-main)', textDecoration: 'none', background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.2s' }}>TRACK</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </main>
    );
}
