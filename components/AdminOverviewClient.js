'use client';

import React, { useState } from 'react';
import {
    Ticket, CheckCircle2, Clock, AlertCircle, ShoppingBag, TrendingUp, ArrowUpRight, Download
} from 'lucide-react';
import ExportModal from '@/components/ExportModal';

export default function AdminOverviewClient({ stats, recentTickets }) {
    const [showExportModal, setShowExportModal] = useState(false);

    const cards = [
        { name: 'Total Tickets', value: stats.totalTickets, icon: Ticket, color: 'var(--primary)' },
        { name: 'Open Queries', value: stats.openTickets, icon: Clock, color: '#ffc107' },
        { name: 'Fixed Today', value: stats.completedTickets, icon: CheckCircle2, color: '#28a745' },
        { name: 'Products Live', value: stats.totalProducts, icon: ShoppingBag, color: 'var(--secondary)' },
    ];

    return (
        <>
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h1 className="title-lg mb-2" style={{ margin: 0, fontWeight: 900 }}>Systems <span className="gradient-text">Overview</span></h1>
                        <p className="text-dim mt-4" style={{ fontSize: '0.875rem' }}>Real-time performance metrics and recent activities.</p>
                    </div>
                    {/* Export Data Button */}
                    <button
                        onClick={() => setShowExportModal(true)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem 1.25rem',
                            background: 'linear-gradient(135deg, #6C63FF 0%, #8b7cff 100%)',
                            border: 'none',
                            borderRadius: '0.75rem',
                            color: 'white',
                            fontWeight: '600',
                            fontSize: '0.875rem',
                            cursor: 'pointer',
                            boxShadow: '0 4px 15px rgba(108, 99, 255, 0.3)',
                            transition: 'all 0.2s ease'
                        }}
                        className="export-btn"
                    >
                        <Download size={18} />
                        Export Data
                    </button>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, idx) => (
                        <div key={card.name} className={`glass glass-hover p-8 relative overflow-hidden delay-${idx % 4}`}>
                            <div className="flex justify-between items-start mb-4">
                                <div style={{ padding: '0.75rem', borderRadius: '0.75rem', background: 'rgba(255,255,255,0.05)', color: card.color }}>
                                    <card.icon size={24} />
                                </div>
                                <TrendingUp size={16} className="text-dim" />
                            </div>
                            <h3 className="title-lg m-0">{card.value}</h3>
                            <p className="text-dim" style={{ fontSize: '0.65rem', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '0.1em', marginTop: '0.25rem' }}>{card.name}</p>
                        </div>
                    ))}
                </div>

                {/* Main Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Recent Tickets Table */}
                    <div className="glass flex flex-col" style={{ gridColumn: '1 / -1', overflow: 'hidden' }}>
                        <div className="p-6 flex justify-between items-center" style={{ borderBottom: '1px solid var(--border-glass)' }}>
                            <h3 style={{ fontWeight: 'bold', margin: 0 }}>Recent Service Requests</h3>
                            <button style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--primary)', cursor: 'pointer' }} className="hover-primary">
                                VIEW ALL <ArrowUpRight size={12} />
                            </button>
                        </div>
                        <div className="table-wrapper m-0 pb-2">
                            <table className="data-table">
                                <thead>
                                    <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                                        <th>Ticket</th>
                                        <th>Customer</th>
                                        <th>Service</th>
                                        <th>Priority</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentTickets.map((ticket) => (
                                        <tr key={ticket.id}>
                                            <td style={{ fontWeight: 'bold', fontSize: '0.875rem', color: 'var(--primary)', fontFamily: 'monospace', letterSpacing: '0.05em', background: 'rgba(99, 102, 241, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', display: 'inline-block' }}>#{ticket.ticketNumber}</td>
                                            <td>
                                                <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{ticket.customerName}</div>
                                                <div className="text-dim" style={{ fontSize: '0.65rem', textTransform: 'uppercase' }}>{ticket.email}</div>
                                            </td>
                                            <td style={{ fontSize: '0.875rem', fontWeight: 600 }}>{ticket.serviceType}</td>
                                            <td>
                                                <span style={{ fontSize: '0.65rem', fontWeight: 'black', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', border: '1px solid', color: ticket.priority === 'High' ? 'var(--secondary)' : 'var(--text-dim)', borderColor: ticket.priority === 'High' ? 'rgba(255, 101, 132, 0.2)' : 'rgba(255,255,255,0.1)', background: ticket.priority === 'High' ? 'rgba(255, 101, 132, 0.1)' : 'transparent' }}>
                                                    {ticket.priority.toUpperCase()}
                                                </span>
                                            </td>
                                            <td style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#ffc107' }}>{ticket.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* System Health / Feedback */}
                    <div className="glass p-8 flex flex-col" style={{ gridColumn: '1 / -1' }}>
                        <h3 style={{ fontWeight: 'bold', marginBottom: '1.5rem', marginTop: 0 }}>Service Distribution</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between" style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                    <span>Laptops</span>
                                    <span>65%</span>
                                </div>
                                <div style={{ width: '100%', height: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', overflow: 'hidden' }}>
                                    <div style={{ height: '100%', background: 'var(--primary)', width: '65%' }} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between" style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                    <span>CCTV Installation</span>
                                    <span>20%</span>
                                </div>
                                <div style={{ width: '100%', height: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', overflow: 'hidden' }}>
                                    <div style={{ height: '100%', background: 'var(--secondary)', width: '20%' }} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between" style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                    <span>Custom PCs</span>
                                    <span>15%</span>
                                </div>
                                <div style={{ width: '100%', height: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', overflow: 'hidden' }}>
                                    <div style={{ height: '100%', background: '#ffc107', width: '15%' }} />
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(108, 99, 255, 0.1)', borderRadius: '1rem', border: '1px solid rgba(108, 99, 255, 0.2)', textAlign: 'center' }}>
                            <AlertCircle size={40} className="text-primary mx-auto mb-4" />
                            <h4 style={{ fontWeight: 'bold', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Technician Alert</h4>
                            <p className="text-dim" style={{ fontSize: '0.65rem', lineHeight: 1.6 }}>
                                There are {stats.openTickets} tickets awaiting response for more than 24 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Export Modal */}
            <ExportModal
                isOpen={showExportModal}
                onClose={() => setShowExportModal(false)}
            />

            <style jsx global>{`
                .export-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(108, 99, 255, 0.4) !important;
                }
            `}</style>
        </>
    );
}
