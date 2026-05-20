export const dynamic = 'force-dynamic';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import prisma from '@/lib/prisma';
import { Calendar, Clock, User, Package, Settings, MessageCircle, ArrowLeft, FileText } from 'lucide-react';
import Link from 'next/link';

export default async function TrackResult({ params }) {
    const { token } = await params;

    const ticket = await prisma.ticket.findUnique({
        where: { ticketToken: token },
        include: {
            updates: { orderBy: { createdAt: 'desc' } },
            invoices: { orderBy: { createdAt: 'desc' } }
        }
    });

    if (!ticket) {
        return (
            <main className="flex flex-col min-h-screen">
                <Navbar />
                <section className="section-padding flex flex-col items-center justify-center container flex-grow pt-32">
                    <h2 className="title-lg mb-4 text-center">Ticket Not Found</h2>
                    <p className="text-dim mb-8 text-center">The tracking link you used is invalid or has expired.</p>
                    <Link href="/track" className="btn-primary">Try searching instead</Link>
                </section>
                <Footer />
            </main>
        );
    }

    const statusColors = {
        'Open': { color: '#8c85ff', bg: 'bg-[#8c85ff]/10', border: 'border-[#8c85ff]/20' },
        'In Progress': { color: '#ffc107', bg: 'bg-[#ffc107]/10', border: 'border-[#ffc107]/20' },
        'Pending Parts': { color: '#fd7e14', bg: 'bg-[#fd7e14]/10', border: 'border-[#fd7e14]/20' },
        'Completed': { color: '#28a745', bg: 'bg-[#28a745]/10', border: 'border-[#28a745]/20' },
        'Closed': { color: '#6c757d', bg: 'bg-[#6c757d]/10', border: 'border-[#6c757d]/20' },
    };

    const currentStyle = statusColors[ticket.status] || { color: '#fff', bg: 'bg-white/10', border: 'border-white/20' };

    return (
        <main className="flex flex-col min-h-screen">
            <Navbar />
            <section className="section-padding container pt-32 max-w-5xl flex-grow">
                <Link href="/track" className="inline-flex items-center gap-2 text-text-dim mb-8 hover:text-white transition-colors decoration-transparent text-sm font-bold">
                    <ArrowLeft size={16} /> Back to Search
                </Link>

                <div className="flex flex-col md:flex-row justify-between md:items-start gap-8 mb-12">
                    <div>
                        <h1 className="text-4xl font-black mb-2">Ticket <span className="text-primary tracking-tight font-mono" style={{ letterSpacing: '0.05em', background: 'rgba(99, 102, 241, 0.1)', padding: '0.25rem 0.75rem', borderRadius: '0.5rem' }}>#{ticket.ticketNumber}</span></h1>
                        <p className="text-text-dim text-sm">Last updated: {new Date(ticket.updatedAt).toLocaleString()}</p>
                    </div>
                    <div className={`px-6 py-2 rounded-full border text-sm font-black tracking-widest uppercase shadow-lg ${currentStyle.bg} ${currentStyle.border}`} style={{ color: currentStyle.color }}>
                        {ticket.status}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Details Dashboard */}
                    <div className="flex flex-col gap-8 lg:col-span-2">
                        <div className="glass p-8">
                            <h3 className="text-xl font-bold flex items-center gap-2 mb-8">
                                <Settings size={20} className="text-primary" /> Service Details
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] font-black uppercase text-text-dim tracking-widest">Product</span>
                                    <div className="flex items-center gap-2 font-bold"><Package size={16} className="text-primary" /> {ticket.product}</div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] font-black uppercase text-text-dim tracking-widest">Service Type</span>
                                    <div className="flex items-center gap-2 font-bold"><Settings size={16} className="text-primary" /> {ticket.serviceType}</div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] font-black uppercase text-text-dim tracking-widest">Priority Level</span>
                                    <div className="font-black text-secondary">{ticket.priority}</div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[10px] font-black uppercase text-text-dim tracking-widest">Date Raised</span>
                                    <div className="flex items-center gap-2 font-bold"><Calendar size={16} className="text-primary" /> {new Date(ticket.createdAt).toLocaleDateString()}</div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-border-glass">
                                <h4 className="text-lg font-bold mb-4">{ticket.subject}</h4>
                                <p className="text-text-dim text-sm leading-relaxed whitespace-pre-wrap">
                                    {ticket.description || 'No additional description provided.'}
                                </p>
                            </div>
                        </div>

                        {/* Digital Receipt / Invoice View */}
                        {ticket.invoices && ticket.invoices.length > 0 && (
                            <div className="glass p-8 border border-green-500/20 bg-green-500/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
                                <h3 className="text-xl font-bold flex items-center gap-2 mb-6 text-green-400">
                                    <FileText size={20} /> Billing & Invoices
                                </h3>

                                <div className="space-y-6 relative z-10">
                                    {ticket.invoices.map(invoice => {
                                        const items = JSON.parse(invoice.items || '[]');
                                        return (
                                            <div key={invoice.id} className="bg-bg-dark border border-white/5 rounded-2xl p-6">
                                                <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
                                                    <div>
                                                        <div className="text-sm font-black text-white">{invoice.invoiceNumber}</div>
                                                        <div className="text-[10px] text-text-dim uppercase tracking-widest mt-1">Issued: {new Date(invoice.createdAt).toLocaleDateString()}</div>
                                                    </div>
                                                    <div className={`px-3 py-1 text-xs font-black uppercase tracking-widest rounded-lg border ${invoice.status === 'Paid' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-orange-500/10 text-orange-400 border-orange-500/20'}`}>
                                                        {invoice.status}
                                                    </div>
                                                </div>

                                                <div className="space-y-3 mb-6">
                                                    {items.map((item, i) => {
                                                        const mrp = Number(item.mrp || 0);
                                                        const sellingPrice = Number(item.price || 0);
                                                        return (
                                                            <div key={i} className="flex justify-between items-center text-sm">
                                                                <span className="text-gray-300 font-medium">{item.desc}</span>
                                                                <span className="font-mono tracking-tight">
                                                                    {mrp > 0 && (
                                                                        <span className="text-gray-500 line-through mr-2">₹{mrp.toFixed(2)}</span>
                                                                    )}
                                                                    <span className="text-green-400 font-bold">₹{sellingPrice.toFixed(2)}</span>
                                                                </span>
                                                            </div>
                                                        )
                                                    })}
                                                </div>

                                                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                                                    <span className="text-xs uppercase font-black text-text-dim tracking-widest">Total Amount</span>
                                                    <span className="text-2xl font-black text-green-400 font-mono tracking-tight">${invoice.amount.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Timeline / Updates Section */}
                        <div className="glass p-8">
                            <h3 className="text-xl font-bold flex items-center gap-2 mb-8">
                                <MessageCircle size={20} className="text-primary" /> Tracking Timeline
                            </h3>

                            <div className="relative pl-6 border-l-2 border-border-glass ml-4 space-y-8">
                                {/* Display Database TicketUpdates */}
                                {ticket.updates && ticket.updates.length > 0 ? ticket.updates.map((update, idx) => (
                                    <div key={update.id} className="relative">
                                        <div className="absolute -left-[35px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-bg-dark" />
                                        <div className="mb-1 flex items-center gap-2">
                                            <span className="text-xs font-black text-primary uppercase tracking-widest">{update.status}</span>
                                            <span className="text-[10px] text-text-dim">• {new Date(update.createdAt).toLocaleString()}</span>
                                        </div>
                                        <div className="p-4 mt-2 bg-white/5 border border-white/5 rounded-xl rounded-tl-none">
                                            <p className="text-sm font-bold text-gray-200">{update.comment}</p>
                                            <p className="text-[10px] text-text-dim mt-2 tracking-widest uppercase">Updated by: {update.createdBy}</p>
                                        </div>
                                    </div>
                                )) : null}

                                {/* Original Hardcoded Open Status to ensure timeline isn't completely blank if empty updates array */}
                                <div className="relative">
                                    <div className={`absolute -left-[35px] top-1 w-4 h-4 rounded-full ${ticket.updates?.length ? 'bg-border-glass' : 'bg-primary'} border-4 border-bg-dark`} />
                                    <div className="mb-1 flex items-center gap-2">
                                        <span className={`text-xs font-black ${ticket.updates?.length ? 'text-text-dim' : 'text-primary'} uppercase tracking-widest`}>Ticket Opened</span>
                                        <span className="text-[10px] text-text-dim">• {new Date(ticket.createdAt).toLocaleString()}</span>
                                    </div>
                                    <div className="p-4 mt-2 bg-white/5 border border-white/5 rounded-xl rounded-tl-none">
                                        <p className="text-sm font-medium text-gray-300">Your service request was successfully logged in our system.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="flex flex-col gap-8 lg:col-span-1">
                        <div className="glass p-8 border-primary/20 bg-primary/5">
                            <h3 className="text-lg font-bold flex items-center gap-2 mb-6">
                                <User size={20} className="text-primary" /> Customer Info
                            </h3>
                            <div className="flex flex-col gap-5">
                                <div>
                                    <div className="text-[10px] font-black uppercase text-text-dim tracking-widest mb-1">Name</div>
                                    <div className="font-bold">{ticket.customerName}</div>
                                </div>
                                <div className="overflow-hidden">
                                    <div className="text-[10px] font-black uppercase text-text-dim tracking-widest mb-1">Email</div>
                                    <div className="font-bold truncate" title={ticket.email}>{ticket.email}</div>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-8">
                            <h4 className="text-lg font-bold mb-4">Need help?</h4>
                            <p className="text-text-dim text-sm leading-relaxed mb-6">
                                If you have questions about this ticket, please call us quoting your ticket number.
                            </p>
                            <button className="btn-primary w-full py-4 text-sm font-bold shadow-lg shadow-primary/20">Call Support</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
