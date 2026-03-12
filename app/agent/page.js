'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
    Ticket, Users, CheckCircle2, MessageSquare, ArrowRight,
    Search, Filter, Play, Check, AlertTriangle, ShieldCheck, Plus, FileText
} from 'lucide-react';
import Link from 'next/link';

export default function AgentDashboard() {
    const [tickets, setTickets] = useState({ assigned: [], openPool: [] });
    const [stats, setStats] = useState({ total: 0, open: 0, urgent: 0 });
    const [sessionUser, setSessionUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserDataAndTickets = async () => {
            try {
                // Get all tickets
                const res = await fetch('/api/admin/tickets');
                const data = await res.json();

                // Get session from cookie via API
                const cookieRes = await fetch('/api/auth/session-check');
                const sessData = await cookieRes.json();

                if (!sessData.user || sessData.user.role !== 'agent') {
                    window.location.href = '/admin/login';
                    return;
                }

                setSessionUser(sessData.user);

                const assigned = data.filter(t => t.assignedToId === sessData.user.id);
                const openPool = data.filter(t => !t.assignedToId && t.status !== 'Closed');

                setTickets({ assigned, openPool });
                setStats({
                    total: assigned.length,
                    open: assigned.filter(t => t.status === 'Open' || t.status === 'In Progress').length,
                    urgent: assigned.filter(t => t.priority === 'High' && t.status !== 'Closed').length
                });
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }
        fetchUserDataAndTickets();
    }, []);

    const handleTakeTicket = async (ticketId) => {
        if (!sessionUser) return;

        const res = await fetch(`/api/admin/tickets/${ticketId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ assignedToId: sessionUser.id, updatedByRole: 'Agent', comments: `Agent ${sessionUser.username} self-assigned this ticket.` })
        });

        if (res.ok) {
            window.location.reload();
        }
    }

    if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin text-primary"><Search size={40} /></div></div>;

    return (
        <main className="flex flex-col min-h-screen">
            <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary z-50" />
            <Navbar />

            <section className="section-padding container flex-grow pt-24 md:pt-32 pb-12">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
                    <div className="w-full md:w-auto">
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                            <div className="px-2 py-1 md:px-3 md:py-1 bg-primary/10 rounded-full text-[8px] md:text-[10px] font-black text-primary tracking-widest border border-primary/20">AGENT PORTAL</div>
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-black m-0">Agent <span className="gradient-text">Workbench</span></h1>
                        </div>
                        <p className="text-xs md:text-sm text-dim mt-2">Hello, <strong className="text-white">{sessionUser?.username}</strong>. Manage your repairs and pick up open quotes.</p>
                    </div>

                    <div className="flex gap-2 md:gap-4 w-full md:w-auto justify-start md:justify-end">
                        <div className="glass p-2 md:p-4 flex flex-col items-center justify-center min-w-[70px] md:min-w-[100px] border border-white/5">
                            <span className="text-xl md:text-3xl font-black m-0 text-secondary">{stats.urgent}</span>
                            <span className="text-dim text-[8px] md:text-[10px] font-bold uppercase tracking-widest mt-1">Urgent</span>
                        </div>
                        <div className="glass p-2 md:p-4 flex flex-col items-center justify-center min-w-[70px] md:min-w-[100px] border border-primary/20 bg-primary/5">
                            <span className="text-xl md:text-3xl font-black m-0 text-primary">{stats.open}</span>
                            <span className="text-dim text-[8px] md:text-[10px] font-bold uppercase tracking-widest mt-1">Active</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

                    {/* Left Col - Open Pool - Shows first on mobile */}
                    <div className="flex flex-col gap-4 md:gap-6 lg:col-span-1 order-1 md:order-2 lg:order-1">
                        <div className="glass p-4 md:p-6">
                            <h4 className="flex items-center gap-2 text-primary text-xs md:text-sm font-bold uppercase tracking-widest mb-3 md:mb-4">
                                <ShieldCheck size={16} /> Open Pool
                            </h4>
                            <p className="text-xs text-text-dim mb-3 md:mb-4 leading-relaxed">
                                Unassigned tickets waiting for a technician. Claim a ticket to move it to your active queue.
                            </p>

                            <div className="flex flex-col gap-2 md:gap-3 max-h-[300px] md:max-h-[400px] overflow-y-auto pr-2">
                                {tickets.openPool.length === 0 ? (
                                    <div className="p-3 md:p-4 text-center border border-white/5 rounded-xl border-dashed">
                                        <span className="text-xs text-text-dim font-bold">No Open Tickets</span>
                                    </div>
                                ) : tickets.openPool.slice(0, 5).map(t => (
                                    <div key={t.id} className="p-3 md:p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-black text-primary font-mono" style={{ letterSpacing: '0.05em', background: 'rgba(99, 102, 241, 0.1)', padding: '0.125rem 0.375rem', borderRadius: '0.25rem' }}>#{t.ticketNumber}</span>
                                            <span className={`text-[9px] md:text-[10px] font-black px-1.5 md:px-2 py-0.5 rounded ${t.priority === 'High' ? 'bg-secondary/20 text-secondary' : 'bg-white/10 text-text-dim'}`}>{t.priority}</span>
                                        </div>
                                        <div className="text-xs font-bold mb-1 truncate">{t.serviceType}</div>
                                        <div className="text-[9px] md:text-[10px] text-text-dim mb-3 md:mb-4 truncate">{t.customerName}</div>

                                        <button onClick={() => handleTakeTicket(t.id)} className="w-full py-2 bg-primary/20 text-primary hover:bg-primary hover:text-white transition text-xs font-bold rounded-lg flex items-center justify-center gap-2">
                                            <Plus size={14} /> Take Assignment
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Col - My Active Tickets - Shows second on mobile */}
                    <div className="glass flex flex-col lg:col-span-3 min-h-[300px] md:min-h-[400px] lg:min-h-[500px] overflow-hidden order-2 md:order-1 lg:order-2">
                        <div className="p-4 md:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-border-glass bg-white/5">
                            <h3 className="font-bold flex items-center gap-2 m-0 text-sm md:text-base"><MessageSquare size={20} className="text-primary" /> My Active Queue</h3>
                            <span className="px-2 md:px-3 py-1 bg-primary/20 text-primary text-[9px] md:text-[10px] font-bold rounded-full whitespace-nowrap">Your Assignments</span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left min-w-[400px]">
                                <thead>
                                    <tr className="text-[9px] md:text-[10px] font-bold uppercase text-text-dim border-b border-white/5">
                                        <th className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap">Ticket</th>
                                        <th className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap">Details</th>
                                        <th className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap">Status</th>
                                        <th className="px-3 md:px-6 py-3 md:py-4 text-right whitespace-nowrap">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {tickets.assigned.length === 0 ? (
                                        <tr>
                                            <td colSpan={4} className="px-3 md:px-6 py-8 md:py-12 text-center text-text-dim font-bold text-xs md:text-sm">
                                                No active assignments. Grab a ticket from the open pool.
                                            </td>
                                        </tr>
                                    ) : tickets.assigned.map(ticket => (
                                        <tr key={ticket.id} className="hover:bg-white/5 transition-colors group">
                                            <td className="px-3 md:px-6 py-8 md:py-12">
                                                <div className="text-xs md:text-sm font-black text-primary font-mono" style={{ letterSpacing: '0.05em', background: 'rgba(99, 102, 241, 0.1)', padding: '0.125rem 0.375rem', borderRadius: '0.25rem', display: 'inline-block' }}>#{ticket.ticketNumber}</div>
                                                <div className="text-[9px] md:text-[10px] mt-1 text-text-dim">{ticket.customerName}</div>
                                            </td>
                                            <td className="px-3 md:px-6 py-8 md:py-12">
                                                <div className="text-xs md:text-sm font-bold flex gap-1 md:gap-2 items-center"><FileText size={14} className="text-text-dim flex-shrink-0" /> <span className="truncate max-w-[100px] md:max-w-none">{ticket.serviceType}</span></div>
                                                <div className="text-[9px] md:text-xs text-text-dim mt-1 truncate">{ticket.product}</div>
                                            </td>
                                            <td className="px-3 md:px-6 py-8 md:py-12">
                                                <span className={`inline-flex items-center gap-1 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full text-[9px] md:text-xs font-bold border ${ticket.status === 'Completed' ? 'border-green-500/20 text-green-400 bg-green-500/10' : 'border-blue-500/20 text-blue-400 bg-blue-500/10'}`}>
                                                    <div className={`w-1 md:w-1.5 h-1 md:h-1.5 rounded-full ${ticket.status === 'Completed' ? 'bg-green-400' : 'bg-blue-400'}`} />
                                                    {ticket.status}
                                                </span>
                                            </td>
                                            <td className="px-3 md:px-6 py-8 md:py-12 text-right">
                                                <Link href={`/admin/tickets?id=${ticket.id}`} className="inline-flex items-center gap-1 md:gap-2 text-[9px] md:text-xs font-bold text-text-dim hover:text-primary transition-colors hover:bg-white/5 px-2 md:px-3 py-1.5 md:py-2 rounded-lg border border-transparent hover:border-white/10 group whitespace-nowrap">
                                                    UPDATE <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
