export const dynamic = 'force-dynamic';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Ticket, Clock, CheckCircle2, Package } from 'lucide-react';
import Link from 'next/link';

export default async function CustomerDashboard() {
    const session = await getSession();

    if (!session || session.role !== 'customer') {
        redirect('/login');
    }

    const tickets = await prisma.ticket.findMany({
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
        total: tickets.length,
        open: tickets.filter(t => t.status === 'Open').length,
        completed: tickets.filter(t => t.status === 'Completed').length,
    };

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <section className="section-padding container" style={{ paddingTop: '8rem', maxWidth: '72rem', flexGrow: 1 }}>
                <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
                    <div>
                        <h1 className="title-lg mb-2" style={{ fontWeight: 900 }}>My <span className="gradient-text">Dashboard</span></h1>
                        <p className="text-dim">Welcome back! Here is the status of your service requests.</p>
                    </div>
                    <Link href="/raise-ticket" className="btn-primary flex items-center gap-2">
                        <Ticket size={20} /> Raise New Ticket
                    </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="glass p-8 flex items-center gap-6 glass-hover delay-0 animate-fade-in">
                        <div style={{ padding: '1rem', background: 'rgba(108, 99, 255, 0.1)', borderRadius: '1rem' }}><Ticket size={24} className="text-primary" /></div>
                        <div><div className="title-md m-0">{stats.total}</div><div className="text-dim" style={{ fontSize: '0.65rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Total Tickets</div></div>
                    </div>
                    <div className="glass p-8 flex items-center gap-6 glass-hover delay-1 animate-fade-in">
                        <div style={{ padding: '1rem', background: 'rgba(255, 193, 7, 0.1)', borderRadius: '1rem' }}><Clock size={24} style={{ color: '#ffc107' }} /></div>
                        <div><div className="title-md m-0">{stats.open}</div><div className="text-dim" style={{ fontSize: '0.65rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Active Requests</div></div>
                    </div>
                    <div className="glass p-8 flex items-center gap-6 glass-hover delay-2 animate-fade-in">
                        <div style={{ padding: '1rem', background: 'rgba(40, 167, 69, 0.1)', borderRadius: '1rem' }}><CheckCircle2 size={24} style={{ color: '#28a745' }} /></div>
                        <div><div className="title-md m-0">{stats.completed}</div><div className="text-dim" style={{ fontSize: '0.65rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Fixed & Closed</div></div>
                    </div>
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
                                    <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                                        <th>Ticket #</th>
                                        <th>Product / Service</th>
                                        <th>Status</th>
                                        <th>Latest Update</th>
                                        <th>Date</th>
                                        <th style={{ textAlign: 'right' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tickets.map((ticket) => (
                                        <tr key={ticket.id} style={{ transition: 'background 0.2s cursor-pointer' }}>
                                            <td style={{ fontWeight: 'bold', color: 'var(--primary)', fontFamily: 'monospace', letterSpacing: '0.05em', background: 'rgba(99, 102, 241, 0.1)', padding: '0.5rem 0.75rem', borderRadius: '0.375rem', display: 'inline-block' }}>#{ticket.ticketNumber}</td>
                                            <td>
                                                <div style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>{ticket.product}</div>
                                                <div className="text-dim" style={{ fontSize: '0.65rem' }}>{ticket.serviceType}</div>
                                            </td>
                                            <td>
                                                <span className={`status-badge ${ticket.status === 'Open' ? 'status-open' : 'status-closed'}`}>
                                                    {ticket.status.toUpperCase()}
                                                </span>
                                            </td>
                                            <td className="text-dim" style={{ fontSize: '0.75rem', maxWidth: '200px' }}>
                                                {ticket.updates && ticket.updates.length > 0 ? (
                                                    <div>
                                                        <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{ticket.updates[0].status}</div>
                                                        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ticket.updates[0].comment}</div>
                                                    </div>
                                                ) : (
                                                    <span style={{ opacity: 0.5 }}>No updates yet</span>
                                                )}
                                            </td>
                                            <td className="text-dim" style={{ fontSize: '0.875rem' }}>{new Date(ticket.createdAt).toLocaleDateString()}</td>
                                            <td style={{ textAlign: 'right' }}>
                                                <Link href={`/track/${ticket.ticketToken}`} style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--primary)', textDecoration: 'none' }} className="hover-primary">TRACK</Link>
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
