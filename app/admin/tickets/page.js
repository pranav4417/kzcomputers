'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Search, Filter, MoreVertical, Edit2, Trash2, Eye, ShieldAlert,
    ChevronLeft, ChevronRight, Loader2, UserPlus, FileText, Download,
    Plus, Minus, X, ShoppingCart, Receipt, Send, Mail, Package,
    Wrench, Zap, HardDrive, Monitor, Smartphone, Watch, Camera,
    Wifi, Speaker, Printer, Keyboard, Mouse, Headphones, CreditCard
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Cable({ size }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>; }

export default function TicketManagement() {
    const [tickets, setTickets] = useState([]);
    const [agents, setAgents] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updateLoading, setUpdateLoading] = useState(false);

    // Invoice state
    const [invoiceItems, setInvoiceItems] = useState([]);
    const [activeTab, setActiveTab] = useState('services'); // services, parts, custom
    const [customItem, setCustomItem] = useState({ desc: '', qty: 1, unit: 'NOS', price: 0 });
    const [generatingInvoice, setGeneratingInvoice] = useState(false);
    const [sendEmailChecked, setSendEmailChecked] = useState(true);
    const [existingInvoice, setExistingInvoice] = useState(null);

    const [servicePresets, setServicePresets] = useState([]);
    const [partsPresets, setPartsPresets] = useState([]);

    const [session, setSession] = useState(null);

    useEffect(() => {
        const checkUserSession = async () => {
            try {
                const res = await fetch('/api/auth/session-check');
                const data = await res.json();
                if (data.user) setSession(data.user);
            } catch (e) { console.error('Session check failed'); }
        };
        checkUserSession();
        fetchTickets();
        fetchAgents();
        fetchProducts();
        fetchPresets();
    }, []);

    const fetchPresets = async () => {
        try {
            const [partsRes, chargesRes] = await Promise.all([
                fetch('/api/admin/parts'),
                fetch('/api/admin/charges')
            ]);
            const partsData = await partsRes.json();
            const chargesData = await chargesRes.json();
            setPartsPresets(Array.isArray(partsData) ? partsData : []);
            setServicePresets(Array.isArray(chargesData) ? chargesData : []);
        } catch (error) {
            console.error('Error fetching presets:', error);
        }
    };

    const fetchTickets = async () => {
        setLoading(true);
        const res = await fetch('/api/admin/tickets');
        const data = await res.json();
        setTickets(data);
        setLoading(false);
    };

    const fetchAgents = async () => {
        const res = await fetch('/api/admin/agents');
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data)) {
                // Agents and admins cannot assign tickets to super admin
                setAgents(data.filter(a => a.status === 'active' && a.role !== 'superadmin'));
            }
        }
    };

    const fetchProducts = async () => {
        try {
            const res = await fetch('/api/admin/products');
            if (res.ok) {
                const data = await res.json();
                setProducts(data);
            }
        } catch (e) {
            console.log('No products found');
        }
    };

    const fetchExistingInvoice = async (ticketId) => {
        try {
            const res = await fetch(`/api/admin/invoices?ticketId=${ticketId}`);
            if (res.ok) {
                const data = await res.json();
                if (data.length > 0) {
                    setExistingInvoice(data[0]);
                    setInvoiceItems(JSON.parse(data[0].items || '[]'));
                }
            }
        } catch (e) {
            console.log('No existing invoice');
        }
    };

    const updateTicketDetails = async (id, status, comments, assignedToId) => {
        setUpdateLoading(true);
        const res = await fetch(`/api/admin/tickets/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                status,
                comments,
                assignedToId,
                updatedByRole: 'Admin',
                invoiceItems: invoiceItems.length > 0 ? invoiceItems : undefined,
                sendInvoiceEmail: sendEmailChecked && (status === 'Completed' || status === 'Closed')
            })
        });
        if (res.ok) {
            const data = await res.json();
            if (data.invoiceSent) {
                alert(`🎉 Ticket updated and invoice sent to customer!`);
            }
            fetchTickets();
            setIsModalOpen(false);
        } else {
            alert(await res.json().then(data => data.error) || 'Failed to update ticket');
        }
        setUpdateLoading(false);
    };

    const deleteTicket = async (id, ticketNumber) => {
        if (!confirm(`Are you sure you want to delete ticket #${ticketNumber}? This action cannot be undone.`)) {
            return;
        }
        setUpdateLoading(true);
        try {
            const res = await fetch(`/api/admin/tickets/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                fetchTickets();
                alert('Ticket deleted successfully');
            } else {
                const data = await res.json();
                alert(data.error || 'Failed to delete ticket');
            }
        } catch (err) {
            alert('Failed to delete ticket');
        }
        setUpdateLoading(false);
    };

    // Invoice functions
    const addItem = (item) => {
        const existingIndex = invoiceItems.findIndex(i => i.desc === item.name);
        if (existingIndex >= 0) {
            const updated = [...invoiceItems];
            updated[existingIndex].qty += 1;
            setInvoiceItems(updated);
        } else {
            setInvoiceItems([...invoiceItems, {
                desc: item.name,
                qty: 1,
                unit: item.unit || 'NOS',
                price: item.price
            }]);
        }
    };

    const addCustomItem = () => {
        if (!customItem.desc || !customItem.price) {
            alert('Please enter item description and price');
            return;
        }
        setInvoiceItems([...invoiceItems, { ...customItem, qty: parseInt(customItem.qty) || 1 }]);
        setCustomItem({ desc: '', qty: 1, unit: 'NOS', price: 0 });
    };

    const removeItem = (index) => {
        const updated = invoiceItems.filter((_, i) => i !== index);
        setInvoiceItems(updated);
    };

    const updateItemQty = (index, qty) => {
        const updated = [...invoiceItems];
        updated[index].qty = Math.max(1, parseInt(qty) || 1);
        setInvoiceItems(updated);
    };

    const updateItemPrice = (index, price) => {
        const updated = [...invoiceItems];
        updated[index].price = Math.max(0, parseFloat(price) || 0);
        setInvoiceItems(updated);
    };

    const getItemTotal = (item) => (item.price * item.qty);
    const getGrandTotal = () => invoiceItems.reduce((sum, item) => sum + getItemTotal(item), 0);

    const generateAndDownloadPDF = async () => {
        if (invoiceItems.length === 0) {
            alert('Please add at least one item to the invoice.');
            return;
        }

        setGeneratingInvoice(true);
        try {
            const res = await fetch('/api/admin/invoices', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ticketId: selectedTicket.id,
                    amount: getGrandTotal(),
                    items: invoiceItems,
                    status: 'Unpaid'
                })
            });
            const data = await res.json();
            if (res.ok) {
                // Handle pending approval case for admin/agent roles
                if (data.pendingApproval) {
                    alert(data.message);
                    setGeneratingInvoice(false);
                    return;
                }

                if (!data.invoice) {
                    alert('Error: No invoice returned from server');
                    setGeneratingInvoice(false);
                    return;
                }

                setExistingInvoice(data.invoice);

                // Trigger download
                if (data.pdfBase64) {
                    const link = document.createElement('a');
                    link.href = `data:application/pdf;base64,${data.pdfBase64}`;
                    link.download = `${data.invoice.invoiceNumber}.pdf`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } else if (data.invoice.pdfUrl) {
                    const link = document.createElement('a');
                    link.href = data.invoice.pdfUrl;
                    link.target = '_blank';
                    link.download = `${data.invoice.invoiceNumber}.pdf`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }

                alert(`✅ Invoice ${data.invoice.invoiceNumber} generated and downloaded!`);
            } else {
                alert(data.error || 'Failed to generate invoice');
            }
        } catch (e) {
            alert('Error generating invoice: ' + e.message);
        }
        setGeneratingInvoice(false);
    };

    const sendInvoiceToCustomer = async () => {
        if (invoiceItems.length === 0) {
            alert('Please add items first');
            return;
        }

        setGeneratingInvoice(true);
        try {
            const res = await fetch('/api/admin/invoices', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ticketId: selectedTicket.id,
                    amount: getGrandTotal(),
                    items: invoiceItems,
                    status: 'Unpaid',
                    sendEmail: true
                })
            });
            const data = await res.json();
            if (res.ok) {
                // Handle pending approval case for admin/agent roles
                if (data.pendingApproval) {
                    alert(data.message);
                    setGeneratingInvoice(false);
                    return;
                }

                if (!data.invoice) {
                    alert('Error: No invoice returned from server');
                    setGeneratingInvoice(false);
                    return;
                }

                setExistingInvoice(data.invoice);
                alert(`📧 Invoice sent to ${selectedTicket.email}!`);
            } else {
                alert(data.error || 'Failed to send invoice');
            }
        } catch (e) {
            alert('Error sending invoice: ' + e.message);
        }
        setGeneratingInvoice(false);
    };

    const openTicketModal = (ticket) => {
        setSelectedTicket(ticket);
        setExistingInvoice(null);
        setIsModalOpen(true);

        // First try to load from existing invoice
        fetchExistingInvoice(ticket.id);

        // Also load saved items directly from ticket if no invoice items
        if (ticket.items) {
            try {
                const savedItems = JSON.parse(ticket.items);
                if (savedItems && savedItems.length > 0) {
                    setInvoiceItems(savedItems);
                } else {
                    setInvoiceItems([]);
                }
            } catch (e) {
                setInvoiceItems([]);
            }
        } else {
            setInvoiceItems([]);
        }
    };

    const filteredTickets = tickets.filter(t =>
        t.ticketNumber.toLowerCase().includes(search.toLowerCase()) ||
        t.customerName.toLowerCase().includes(search.toLowerCase()) ||
        t.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem' }}>
                <div>
                    <h1 className="title-lg mb-2" style={{ margin: 0, fontWeight: 900 }}>Service <span className="gradient-text">Tickets</span></h1>
                    <p className="text-dim" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Manage and track all customer service requests.</p>
                </div>

                <div style={{ flex: '1 1 auto', maxWidth: '400px', display: 'flex', gap: '1rem' }}>
                    <div className="glass" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', flex: 1, borderRadius: '0.75rem' }}>
                        <Search size={16} className="text-dim" />
                        <input
                            className="input-field"
                            style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: '0.5rem', width: '100%', fontSize: '0.875rem' }}
                            placeholder="Search by ID or name..."
                            value={search} onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="glass" style={{ overflow: 'hidden', borderRadius: '1rem' }}>
                {loading ? (
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '5rem' }}>
                        <Loader2 size={40} className="text-primary" style={{ animation: 'spin 1s linear infinite' }} />
                        <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                    </div>
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table className="data-table" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--border-glass)', fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)' }}>
                                    <th style={{ padding: '1.25rem 2rem' }}>Ticket ID</th>
                                    <th style={{ padding: '1.25rem 2rem' }}>Customer Info</th>
                                    <th style={{ padding: '1.25rem 2rem' }}>Service Details</th>
                                    <th style={{ padding: '1.25rem 2rem' }}>Assigned Tech</th>
                                    <th style={{ padding: '1.25rem 2rem' }}>Priority</th>
                                    <th style={{ padding: '1.25rem 2rem' }}>Status</th>
                                    <th style={{ padding: '1.25rem 2rem', textAlign: 'right' }}>Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTickets.map((ticket) => (
                                    <tr key={ticket.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'var(--transition)' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                                        <td style={{ padding: '1.5rem 2rem' }}>
                                            <div style={{
                                                color: 'var(--primary)',
                                                fontWeight: 900,
                                                fontSize: '0.875rem',
                                                fontFamily: 'monospace',
                                                letterSpacing: '0.05em',
                                                background: 'rgba(99, 102, 241, 0.1)',
                                                padding: '0.25rem 0.5rem',
                                                borderRadius: '0.375rem',
                                                display: 'inline-block'
                                            }}>#{ticket.ticketNumber}</div>
                                            <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)', marginTop: '0.25rem' }}>{new Date(ticket.createdAt).toLocaleDateString()}</div>
                                        </td>
                                        <td style={{ padding: '1.5rem 2rem' }}>
                                            <div style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>{ticket.customerName}</div>
                                            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ticket.email}</div>
                                        </td>
                                        <td style={{ padding: '1.5rem 2rem' }}>
                                            <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{ticket.product}</div>
                                            <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
                                                <FileText size={12} /> {ticket.serviceType}
                                            </div>
                                        </td>
                                        <td style={{ padding: '1.5rem 2rem' }}>
                                            {ticket.assignedTo ? (
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    <div style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', background: 'rgba(108, 99, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '0.5rem', fontWeight: 900 }}>
                                                        {ticket.assignedTo.username.substring(0, 2).toUpperCase()}
                                                    </div>
                                                    <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#e5e7eb' }}>{ticket.assignedTo.username}</span>
                                                </div>
                                            ) : (
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                    <span style={{ fontSize: '0.65rem', fontWeight: 'bold', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', background: 'rgba(255,255,255,0.05)', color: 'var(--text-dim)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                                                        <UserPlus size={10} /> Unassigned
                                                    </span>
                                                    {session?.role === 'agent' && (
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                updateTicketDetails(ticket.id, ticket.status, `Self-assigned by agent ${session.username}.`, session.id);
                                                            }}
                                                            style={{
                                                                padding: '0.25rem 0.6rem',
                                                                background: 'rgba(108, 99, 255, 0.1)',
                                                                border: '1px solid rgba(108, 99, 255, 0.3)',
                                                                borderRadius: '0.5rem',
                                                                color: 'var(--primary)',
                                                                fontSize: '0.65rem',
                                                                fontWeight: 900,
                                                                cursor: 'pointer',
                                                                transition: 'all 0.2s',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '0.25rem'
                                                            }}
                                                            onMouseOver={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#fff' }}
                                                            onMouseOut={e => { e.currentTarget.style.background = 'rgba(108, 99, 255, 0.1)'; e.currentTarget.style.color = 'var(--primary)' }}
                                                        >
                                                            <Plus size={12} /> Take Over
                                                        </button>
                                                    )}
                                                </div>
                                            )}
                                        </td>
                                        <td style={{ padding: '1.5rem 2rem' }}>
                                            <div style={{ fontSize: '0.625rem', fontWeight: 900, display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '9999px', border: '1px solid', color: ticket.priority === 'High' ? 'var(--secondary)' : 'var(--text-dim)', borderColor: ticket.priority === 'High' ? 'rgba(255, 101, 132, 0.2)' : 'rgba(255,255,255,0.1)', background: ticket.priority === 'High' ? 'rgba(255, 101, 132, 0.1)' : 'transparent' }}>
                                                {ticket.priority.toUpperCase()}
                                            </div>
                                        </td>
                                        <td style={{ padding: '1.5rem 2rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: ticket.status === 'Open' ? '#60a5fa' : ticket.status === 'Completed' ? '#4ade80' : ticket.status === 'Closed' ? '#9ca3af' : '#facc15' }} />
                                                <span style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>{ticket.status}</span>
                                            </div>
                                        </td>
                                        <td style={{ padding: '1.5rem 2rem', textAlign: 'right' }}>
                                            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                                                <button
                                                    onClick={() => openTicketModal(ticket)}
                                                    style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-main)', cursor: 'pointer', transition: 'all 0.2s' }}
                                                    onMouseOver={e => { e.currentTarget.style.background = 'rgba(108, 99, 255, 0.2)'; e.currentTarget.style.color = 'var(--primary)' }}
                                                    onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-main)' }}
                                                >
                                                    <Edit2 size={16} />
                                                </button>
                                                {(ticket.status === 'Closed' || ticket.status === 'Completed') && (
                                                    <button
                                                        onClick={() => deleteTicket(ticket.id, ticket.ticketNumber)}
                                                        style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-main)', cursor: 'pointer', transition: 'all 0.2s' }}
                                                        onMouseOver={e => { e.currentTarget.style.background = 'rgba(255, 101, 132, 0.2)'; e.currentTarget.style.color = 'var(--secondary)' }}
                                                        onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-main)' }}
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Sophisticated Slide-out Pane */}
            <AnimatePresence>
                {isModalOpen && selectedTicket && (
                    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', justifyContent: 'flex-end' }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            style={{
                                background: '#0a0a0f',
                                borderLeft: '1px solid var(--border-glass)',
                                width: '95%',
                                maxWidth: '900px',
                                height: '100vh',
                                position: 'relative',
                                zIndex: 10,
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden',
                                boxShadow: '-10px 0 50px rgba(0, 0, 0, 0.5)'
                            }}
                        >
                            {/* Modal Header */}
                            <div style={{ padding: '1.5rem 2.5rem', borderBottom: '1px solid var(--border-glass)', background: 'rgba(255,255,255,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '1rem', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -4px var(--primary-glow)' }}>
                                        <Edit2 size={24} color="#fff" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.75rem', fontWeight: 900, margin: '0 0 0.25rem 0', letterSpacing: '-0.025em' }}>Update <span className="text-primary" style={{ fontFamily: 'monospace' }}>#{selectedTicket.ticketNumber}</span></h3>
                                        <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', fontWeight: 600, margin: 0 }}>{selectedTicket.customerName} • {selectedTicket.product}</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ padding: '0.625rem 1.25rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.05)', color: '#fff' }}>
                                        {selectedTicket.status}
                                    </div>
                                    <button onClick={() => setIsModalOpen(false)} style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '0.75rem', cursor: 'pointer', color: 'var(--text-dim)', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'}>
                                        <X size={24} />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div style={{ padding: 0, overflowY: 'auto', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
                                {/* Status & Assignment Section */}
                                <div style={{ padding: '1.5rem 2.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.01)', flexShrink: 0 }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                                        <div className="space-y-2">
                                            <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.15em', display: 'block' }}>Assigned Technician</label>
                                            <div style={{ position: 'relative' }}>
                                                <select
                                                    id="assign-select"
                                                    defaultValue={selectedTicket.assignedToId || ''}
                                                    className="input-field"
                                                    style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', fontSize: '0.875rem', fontWeight: 700, appearance: 'none', border: '1px solid rgba(255,255,255,0.05)' }}
                                                >
                                                    <option value="" style={{ background: 'var(--bg-dark)' }}>Unassigned</option>
                                                    {agents.map(a => (
                                                        <option key={a.id} value={a.id} style={{ background: 'var(--bg-dark)' }}>{a.username}</option>
                                                    ))}
                                                </select>
                                                <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', opacity: 0.5 }}>
                                                    <UserPlus size={16} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.15em', display: 'block' }}>Ticket Status</label>
                                            <div style={{ position: 'relative' }}>
                                                <select
                                                    id="status-select"
                                                    defaultValue={selectedTicket.status}
                                                    className="input-field"
                                                    style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', fontSize: '0.875rem', fontWeight: 700, appearance: 'none', border: '1px solid rgba(255,255,255,0.05)' }}
                                                >
                                                    <option value="Open">Open</option>
                                                    <option value="In Progress">In Progress</option>
                                                    <option value="Pending Parts">Pending Parts</option>
                                                    <option value="Completed">Completed ✅</option>
                                                    <option value="Closed">Closed 🔒</option>
                                                </select>
                                                <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', opacity: 0.5 }}>
                                                    <Filter size={16} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.15em', display: 'block' }}>Update Note</label>
                                            <div style={{ position: 'relative' }}>
                                                <input
                                                    id="comments-textarea"
                                                    defaultValue={""}
                                                    className="input-field"
                                                    style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', fontSize: '0.875rem', border: '1px solid rgba(255,255,255,0.05)' }}
                                                    placeholder="Status update note..."
                                                />
                                                <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', opacity: 0.5 }}>
                                                    <FileText size={16} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Billing Section */}
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '600px', background: 'rgba(0,0,0,0.1)' }}>
                                    <div style={{ padding: '1.25rem 2.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'linear-gradient(to right, rgba(108, 99, 255, 0.05), rgba(0,0,0,0))', flexShrink: 0 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <div style={{ width: '2.5rem', height: '2.5rem', background: 'rgba(108, 99, 255, 0.15)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Receipt size={20} className="text-primary" /></div>
                                                <div>
                                                    <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, color: '#fff' }}>Integrated Billing</h4>
                                                    <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-dim)' }}>Select items for invoice</p>
                                                </div>
                                            </div>
                                            <div style={{ textAlign: 'right' }}>
                                                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#4ade80' }}>₹{getGrandTotal().toFixed(2)}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
                                        {/* Panels */}
                                        <div style={{ width: '55%', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                                            <div style={{ padding: '1rem', display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                                                {['services', 'parts', 'custom'].map(t => (
                                                    <button key={t} onClick={() => setActiveTab(t)} style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid', borderColor: activeTab === t ? 'var(--primary)' : 'rgba(255,255,255,0.05)', background: activeTab === t ? 'var(--primary)' : 'transparent', color: '#fff', fontSize: '0.75rem', fontWeight: 'bold', cursor: 'pointer' }}>{t.toUpperCase()}</button>
                                                ))}
                                            </div>
                                            <div style={{ flex: 1, overflow: 'auto', padding: '1rem' }}>
                                                {activeTab === 'services' && (
                                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                                        {servicePresets.map(s => (
                                                            <button key={s.id} onClick={() => addItem(s)} style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '0.5rem', color: '#fff', textAlign: 'left', cursor: 'pointer' }}>
                                                                <div style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>{s.name}</div>
                                                                <div style={{ fontSize: '0.85rem', color: '#4ade80' }}>₹{s.price}</div>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                                {activeTab === 'parts' && (
                                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                                        {partsPresets.map(p => (
                                                            <button key={p.id} onClick={() => addItem(p)} style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '0.5rem', color: '#fff', textAlign: 'left', cursor: 'pointer' }}>
                                                                <div style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>{p.name}</div>
                                                                <div style={{ fontSize: '0.85rem', color: '#4ade80' }}>₹{p.price}</div>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                                {activeTab === 'custom' && (
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                        <input value={customItem.desc} onChange={e => setCustomItem({ ...customItem, desc: e.target.value })} className="input-field" style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem' }} placeholder="Description" />
                                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
                                                            <input type="number" value={customItem.qty} onChange={e => setCustomItem({ ...customItem, qty: e.target.value })} className="input-field" style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem' }} placeholder="Qty" />
                                                            <select value={customItem.unit} onChange={e => setCustomItem({ ...customItem, unit: e.target.value })} className="input-field" style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem' }}><option value="NOS">NOS</option></select>
                                                            <input type="number" value={customItem.price} onChange={e => setCustomItem({ ...customItem, price: e.target.value })} className="input-field" style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem' }} placeholder="Price" />
                                                        </div>
                                                        <button onClick={addCustomItem} className="btn-primary" style={{ padding: '0.75rem', borderRadius: '0.5rem' }}>Add Item</button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div style={{ width: '45%', display: 'flex', flexDirection: 'column', background: 'rgba(0,0,0,0.2)' }}>
                                            <div style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', fontWeight: 'bold' }}>Bill ({invoiceItems.length})</div>
                                            <div style={{ flex: 1, overflow: 'auto', padding: '1rem' }}>
                                                {existingInvoice && (
                                                    <div style={{
                                                        marginBottom: '1rem',
                                                        padding: '1rem',
                                                        borderRadius: '0.75rem',
                                                        background: 'rgba(74, 222, 128, 0.1)',
                                                        border: '1px solid rgba(74, 222, 128, 0.2)',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: '0.5rem'
                                                    }}>
                                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                            <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: '#4ade80', letterSpacing: '0.1em' }}>Existing Invoice</span>
                                                            <div style={{ padding: '0.25rem 0.5rem', borderRadius: '0.25rem', background: '#4ade80', color: '#000', fontSize: '0.625rem', fontWeight: 900 }}>{existingInvoice.status || 'UNPAID'}</div>
                                                        </div>
                                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                            <span style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#fff' }}>{existingInvoice.invoiceNumber}</span>
                                                            <button
                                                                onClick={() => window.open(`/api/admin/invoices/download/${existingInvoice.id}`, '_blank')}
                                                                style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '0.5rem', color: '#fff', fontSize: '0.75rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                                                            >
                                                                <Download size={14} /> Download
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}

                                                {invoiceItems.map((item, index) => (
                                                    <div key={index} style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                                                        <div>
                                                            <div style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>{item.desc}</div>
                                                            <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>₹{item.price} x {item.qty}</div>
                                                        </div>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                            <button onClick={() => removeItem(index)} style={{ color: 'var(--secondary)', border: 'none', background: 'transparent' }}><X size={12} /></button>
                                                            <div style={{ fontWeight: 'bold', color: '#4ade80' }}>₹{getItemTotal(item)}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {invoiceItems.length > 0 && (
                                                <div style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                    {session && (session.role === 'admin' || session.role === 'agent') && (
                                                        <div style={{ padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(108, 99, 255, 0.1)', border: '1px solid rgba(108, 99, 255, 0.2)', fontSize: '0.7rem', color: 'var(--primary)', textAlign: 'center', fontWeight: 'bold' }}>
                                                            Generations by Admin/Agent require Superadmin approval.
                                                        </div>
                                                    )}
                                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                                        <button
                                                            onClick={generateAndDownloadPDF}
                                                            disabled={generatingInvoice}
                                                            style={{ flex: 1, padding: '0.75rem', background: '#4ade80', color: '#000', borderRadius: '0.5rem', fontWeight: 'bold', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: generatingInvoice ? 0.7 : 1 }}
                                                        >
                                                            {generatingInvoice ? <Loader2 size={16} className="animate-spin" /> : <FileText size={16} />}
                                                            {existingInvoice ? 'Update & Download' : 'Generate PDF'}
                                                        </button>
                                                        <button
                                                            onClick={sendInvoiceToCustomer}
                                                            disabled={generatingInvoice}
                                                            style={{ flex: 1, padding: '0.75rem', background: 'var(--primary)', color: '#fff', borderRadius: '0.5rem', fontWeight: 'bold', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: generatingInvoice ? 0.7 : 1 }}
                                                        >
                                                            {generatingInvoice ? <Loader2 size={16} className="animate-spin" /> : <Mail size={16} />}
                                                            Email Bill
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pane Footer */}
                            <div style={{ padding: '1.5rem 2.5rem', borderTop: '1px solid var(--border-glass)', background: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', fontSize: '0.875rem', color: 'var(--text-dim)' }}>
                                    <input type="checkbox" checked={sendEmailChecked} onChange={e => setSendEmailChecked(e.target.checked)} style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }} />
                                    Auto-send invoice
                                </label>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button onClick={() => setIsModalOpen(false)} style={{ padding: '0.75rem 1.5rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', color: 'var(--text-dim)', background: 'transparent' }}>Cancel</button>
                                    <button onClick={() => { const s = document.getElementById('status-select').value; const a = document.getElementById('assign-select').value; const c = document.getElementById('comments-textarea').value; updateTicketDetails(selectedTicket.id, s, c, a); }} disabled={updateLoading} className="btn-primary" style={{ padding: '0.75rem 2rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        {updateLoading ? <Loader2 size={16} /> : <Send size={16} />} Update
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style>{`
                @keyframes spin { 100% { transform: rotate(360deg); } }
            `}</style>
        </div>
    );
}
