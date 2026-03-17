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

// Quick service presets - like a restaurant menu
const SERVICE_PRESETS = [
    { id: 1, name: 'Diagnostic Fee', price: 299, icon: Search },
    { id: 2, name: 'Service Charge', price: 199, icon: Wrench },
    { id: 3, name: 'Installation', price: 499, icon: Zap },
    { id: 4, name: 'Repair/Labour', price: 399, icon: HardDrive },
    { id: 5, name: 'Home Visit', price: 249, icon: Package },
    { id: 6, name: 'Data Recovery', price: 999, icon: HardDrive },
    { id: 7, name: 'Software Setup', price: 399, icon: Monitor },
    { id: 8, name: 'Virus Removal', price: 499, icon: ShieldAlert },
];

// Quick parts/parts presets
const PARTS_PRESETS = [
    { id: 1, name: 'HDMI Cable (2m)', price: 150, icon: Cable },
    { id: 2, name: 'USB Cable', price: 80, icon: Cable },
    { id: 3, name: 'Mouse', price: 299, icon: Mouse },
    { id: 4, name: 'Keyboard', price: 499, icon: Keyboard },
    { id: 5, name: 'Pendrive 32GB', price: 350, icon: HardDrive },
    { id: 6, name: 'Pendrive 64GB', price: 550, icon: HardDrive },
    { id: 7, name: 'Hard Disk 1TB', price: 3500, icon: HardDrive },
    { id: 8, name: 'SSD 256GB', price: 2200, icon: HardDrive },
    { id: 9, name: 'RAM 4GB', price: 1200, icon: HardDrive },
    { id: 10, name: 'RAM 8GB', price: 2200, icon: HardDrive },
    { id: 11, name: 'Webcam', price: 699, icon: Camera },
    { id: 12, name: 'Headphones', price: 499, icon: Headphones },
    { id: 13, name: 'WiFi Dongle', price: 599, icon: Wifi },
    { id: 14, name: 'Bluetooth Speaker', price: 899, icon: Speaker },
    { id: 15, name: 'Printer Cartridge', price: 400, icon: Printer },
    { id: 16, name: 'Power Adapter', price: 349, icon: Zap },
];

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

    useEffect(() => {
        fetchTickets();
        fetchAgents();
        fetchProducts();
    }, []);

    const fetchTickets = async () => {
        setLoading(true);
        const res = await fetch('/api/admin/tickets');
        const data = await res.json();
        setTickets(data);
        setLoading(false);
    };

    const fetchAgents = async () => {
        const res = await fetch('/api/admin/agents');
        const data = await res.json();
        setAgents(data.filter(a => a.status === 'active'));
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
                unit: 'NOS',
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
                                                <span style={{ fontSize: '0.65rem', fontWeight: 'bold', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', background: 'rgba(255,255,255,0.05)', color: 'var(--text-dim)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                                                    <UserPlus size={10} /> Unassigned
                                                </span>
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

            {/* Sophisticated Invoice Modal */}
            <AnimatePresence>
                {isModalOpen && selectedTicket && (
                    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', overflowY: 'auto' }}>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
                        />
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            style={{ background: '#121216', border: '1px solid var(--border-glass)', borderRadius: '1rem', width: '100%', maxWidth: '65rem', padding: 0, position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', maxHeight: '95vh', overflow: 'hidden' }}
                        >
                            {/* Modal Header */}
                            <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--border-glass)', background: 'rgba(255,255,255,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 900, margin: '0 0 0.5rem 0' }}>Update <span className="gradient-text" style={{ fontFamily: 'monospace', letterSpacing: '0.05em' }}>#{selectedTicket.ticketNumber}</span></h3>
                                        <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>{selectedTicket.customerName} • {selectedTicket.product}</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ padding: '0.5rem 1rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.05)', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                                        {selectedTicket.status}
                                    </div>
                                    <button onClick={() => setIsModalOpen(false)} style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', color: 'var(--text-dim)' }}>
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div style={{ padding: 0, overflowY: 'auto', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>

                                {/* Status & Assignment Section */}
                                <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', alignItems: 'end' }}>
                                        <div>
                                            <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Technician</label>
                                            <select
                                                id="assign-select"
                                                defaultValue={selectedTicket.assignedToId || ''}
                                                className="input-field"
                                                style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 'bold', appearance: 'none' }}
                                            >
                                                <option value="" style={{ background: 'var(--bg-dark)' }}>Unassigned</option>
                                                {agents.map(a => (
                                                    <option key={a.id} value={a.id} style={{ background: 'var(--bg-dark)' }}>{a.username}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Status</label>
                                            <select
                                                id="status-select"
                                                defaultValue={selectedTicket.status}
                                                className="input-field"
                                                style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 'bold', appearance: 'none' }}
                                            >
                                                <option value="Open" style={{ background: 'var(--bg-dark)' }}>Open</option>
                                                <option value="In Progress" style={{ background: 'var(--bg-dark)' }}>In Progress</option>
                                                <option value="Pending Parts" style={{ background: 'var(--bg-dark)' }}>Pending Parts</option>
                                                <option value="Completed" style={{ background: 'var(--bg-dark)' }}>Completed ✅</option>
                                                <option value="Closed" style={{ background: 'var(--bg-dark)' }}>Closed 🔒</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Note</label>
                                            <input
                                                id="comments-textarea"
                                                defaultValue={""}
                                                className="input-field"
                                                style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', fontSize: '0.875rem' }}
                                                placeholder="Status update note..."
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Sophisticated Billing Section - POS Style */}
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '500px' }}>

                                    {/* Billing Header */}
                                    <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.1) 0%, rgba(74, 222, 128, 0.05) 100%)' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <div style={{ padding: '0.75rem', background: 'rgba(108, 99, 255, 0.2)', borderRadius: '0.75rem' }}>
                                                    <Receipt size={24} className="text-primary" />
                                                </div>
                                                <div>
                                                    <h4 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--primary)' }}>Generate Invoice / Estimate</h4>
                                                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.75rem', color: 'var(--text-dim)' }}>Like a restaurant order - click items to add, adjust quantities easily</p>
                                                </div>
                                            </div>

                                            {/* Grand Total Display */}
                                            <div style={{ textAlign: 'right' }}>
                                                <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold' }}>Total Amount</div>
                                                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#4ade80', fontFamily: 'monospace' }}>₹{getGrandTotal().toFixed(2)}</div>
                                                <div style={{ fontSize: '0.625rem', color: 'var(--text-dim)' }}>{invoiceItems.length} items</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

                                        {/* Left Panel - Menu/Quick Add */}
                                        <div style={{ width: '55%', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

                                            {/* Tabs */}
                                            <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '0.5rem' }}>
                                                {[
                                                    { id: 'services', label: '🛠️ Services', icon: Wrench },
                                                    { id: 'parts', label: '🔧 Parts', icon: Package },
                                                    { id: 'custom', label: '✏️ Custom', icon: Edit2 }
                                                ].map(tab => (
                                                    <button
                                                        key={tab.id}
                                                        onClick={() => setActiveTab(tab.id)}
                                                        style={{
                                                            padding: '0.5rem 1rem',
                                                            borderRadius: '0.5rem',
                                                            border: 'none',
                                                            background: activeTab === tab.id ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                                                            color: activeTab === tab.id ? '#fff' : 'var(--text-dim)',
                                                            fontSize: '0.75rem',
                                                            fontWeight: 'bold',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.2s'
                                                        }}
                                                    >
                                                        {tab.label}
                                                    </button>
                                                ))}
                                            </div>

                                            {/* Tab Content - Scrollable */}
                                            <div style={{ flex: 1, overflow: 'auto', padding: '1rem' }}>

                                                {/* Services Tab */}
                                                {activeTab === 'services' && (
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                                                        {SERVICE_PRESETS.map(service => (
                                                            <button
                                                                key={service.id}
                                                                onClick={() => addItem(service)}
                                                                style={{
                                                                    padding: '1rem',
                                                                    background: 'rgba(255,255,255,0.03)',
                                                                    border: '1px solid rgba(255,255,255,0.08)',
                                                                    borderRadius: '0.75rem',
                                                                    cursor: 'pointer',
                                                                    textAlign: 'left',
                                                                    transition: 'all 0.2s',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '0.75rem'
                                                                }}
                                                                onMouseOver={e => { e.currentTarget.style.background = 'rgba(108, 99, 255, 0.15)'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
                                                                onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                                                            >
                                                                <div style={{ padding: '0.5rem', background: 'rgba(108, 99, 255, 0.2)', borderRadius: '0.5rem' }}>
                                                                    <service.icon size={16} className="text-primary" />
                                                                </div>
                                                                <div style={{ flex: 1 }}>
                                                                    <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#fff' }}>{service.name}</div>
                                                                    <div style={{ fontSize: '0.9rem', fontWeight: '900', color: '#4ade80' }}>₹{service.price}</div>
                                                                </div>
                                                                <Plus size={16} className="text-primary" style={{ opacity: 0.5 }} />
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Parts Tab */}
                                                {activeTab === 'parts' && (
                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                                                        {PARTS_PRESETS.map(part => (
                                                            <button
                                                                key={part.id}
                                                                onClick={() => addItem(part)}
                                                                style={{
                                                                    padding: '1rem',
                                                                    background: 'rgba(255,255,255,0.03)',
                                                                    border: '1px solid rgba(255,255,255,0.08)',
                                                                    borderRadius: '0.75rem',
                                                                    cursor: 'pointer',
                                                                    textAlign: 'left',
                                                                    transition: 'all 0.2s',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '0.75rem'
                                                                }}
                                                                onMouseOver={e => { e.currentTarget.style.background = 'rgba(74, 222, 128, 0.15)'; e.currentTarget.style.borderColor = '#4ade80'; }}
                                                                onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                                                            >
                                                                <div style={{ padding: '0.5rem', background: 'rgba(74, 222, 128, 0.2)', borderRadius: '0.5rem' }}>
                                                                    <part.icon size={16} style={{ color: '#4ade80' }} />
                                                                </div>
                                                                <div style={{ flex: 1 }}>
                                                                    <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#fff' }}>{part.name}</div>
                                                                    <div style={{ fontSize: '0.9rem', fontWeight: '900', color: '#4ade80' }}>₹{part.price}</div>
                                                                </div>
                                                                <Plus size={16} style={{ color: '#4ade80', opacity: 0.5 }} />
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Custom Tab */}
                                                {activeTab === 'custom' && (
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                                        <div>
                                                            <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Item Description</label>
                                                            <input
                                                                value={customItem.desc}
                                                                onChange={e => setCustomItem({ ...customItem, desc: e.target.value })}
                                                                className="input-field"
                                                                style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', fontSize: '0.875rem' }}
                                                                placeholder="e.g., Special Repair, Custom Part, etc."
                                                            />
                                                        </div>
                                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
                                                            <div>
                                                                <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Quantity</label>
                                                                <input
                                                                    type="number"
                                                                    value={customItem.qty}
                                                                    onChange={e => setCustomItem({ ...customItem, qty: e.target.value })}
                                                                    className="input-field"
                                                                    style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', fontSize: '0.875rem' }}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Unit</label>
                                                                <select
                                                                    value={customItem.unit}
                                                                    onChange={e => setCustomItem({ ...customItem, unit: e.target.value })}
                                                                    className="input-field"
                                                                    style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', fontSize: '0.875rem' }}
                                                                >
                                                                    <option value="NOS">NOS</option>
                                                                    <option value="PCS">PCS</option>
                                                                    <option value="SET">SET</option>
                                                                    <option value="PRS">PRS</option>
                                                                    <option value="MT">Meters</option>
                                                                    <option value="FT">Feet</option>
                                                                    <option value="HR">Hours</option>
                                                                </select>
                                                            </div>
                                                            <div>
                                                                <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Price (₹)</label>
                                                                <input
                                                                    type="number"
                                                                    value={customItem.price}
                                                                    onChange={e => setCustomItem({ ...customItem, price: e.target.value })}
                                                                    className="input-field"
                                                                    style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', fontSize: '0.875rem' }}
                                                                    placeholder="0.00"
                                                                />
                                                            </div>
                                                        </div>
                                                        <button
                                                            onClick={addCustomItem}
                                                            className="btn-primary"
                                                            style={{ padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                                        >
                                                            <Plus size={18} /> Add Custom Item
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Right Panel - Current Order */}
                                        <div style={{ width: '45%', display: 'flex', flexDirection: 'column', background: 'rgba(0,0,0,0.2)' }}>

                                            {/* Order Header */}
                                            <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                <ShoppingCart size={20} className="text-primary" />
                                                <span style={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Current Bill</span>
                                                <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--text-dim)', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>{invoiceItems.length} items</span>
                                            </div>

                                            {/* Order Items - Scrollable */}
                                            <div style={{ flex: 1, overflow: 'auto', padding: '1rem' }}>
                                                {invoiceItems.length === 0 ? (
                                                    <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-dim)' }}>
                                                        <ShoppingCart size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
                                                        <p style={{ fontSize: '0.875rem', margin: 0 }}>No items added yet</p>
                                                        <p style={{ fontSize: '0.75rem', margin: '0.5rem 0 0 0', opacity: 0.7 }}>Click items from the menu to add</p>
                                                    </div>
                                                ) : (
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                        {invoiceItems.map((item, index) => (
                                                            <motion.div
                                                                key={index}
                                                                initial={{ opacity: 0, x: 20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                style={{
                                                                    background: 'rgba(255,255,255,0.03)',
                                                                    border: '1px solid rgba(255,255,255,0.05)',
                                                                    borderRadius: '0.75rem',
                                                                    padding: '0.75rem',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '0.75rem'
                                                                }}
                                                            >
                                                                <div style={{ flex: 1, minWidth: 0 }}>
                                                                    <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.desc}</div>
                                                                    <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>₹{item.price.toFixed(2)} × {item.qty} {item.unit}</div>
                                                                </div>

                                                                {/* Quantity Controls */}
                                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                                    <button
                                                                        onClick={() => updateItemQty(index, item.qty - 1)}
                                                                        style={{ padding: '0.25rem', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', color: 'var(--text-dim)' }}
                                                                    >
                                                                        <Minus size={12} />
                                                                    </button>
                                                                    <input
                                                                        type="number"
                                                                        value={item.qty}
                                                                        onChange={e => updateItemQty(index, e.target.value)}
                                                                        style={{ width: '40px', padding: '0.25rem', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.25rem', color: '#fff', textAlign: 'center', fontSize: '0.75rem', fontWeight: 'bold' }}
                                                                    />
                                                                    <button
                                                                        onClick={() => updateItemQty(index, item.qty + 1)}
                                                                        style={{ padding: '0.25rem', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', color: 'var(--text-dim)' }}
                                                                    >
                                                                        <Plus size={12} />
                                                                    </button>
                                                                </div>

                                                                <div style={{ width: '70px', textAlign: 'right' }}>
                                                                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#4ade80' }}>₹{getItemTotal(item).toFixed(2)}</div>
                                                                </div>

                                                                <button
                                                                    onClick={() => removeItem(index)}
                                                                    style={{ padding: '0.25rem', background: 'rgba(255, 101, 132, 0.1)', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', color: 'var(--secondary)' }}
                                                                >
                                                                    <X size={14} />
                                                                </button>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Order Summary & Actions */}
                                            {invoiceItems.length > 0 && (
                                                <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.3)' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                                        <span style={{ fontSize: '0.875rem', color: 'var(--text-dim)' }}>Subtotal</span>
                                                        <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#fff' }}>₹{getGrandTotal().toFixed(2)}</span>
                                                    </div>

                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                        <button
                                                            onClick={generateAndDownloadPDF}
                                                            disabled={generatingInvoice}
                                                            style={{ width: '100%', padding: '0.875rem', background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)', color: '#000', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '0.875rem', cursor: generatingInvoice ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: generatingInvoice ? 0.7 : 1 }}
                                                        >
                                                            {generatingInvoice ? <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> : <Download size={18} />}
                                                            Generate & Download PDF
                                                        </button>

                                                        <button
                                                            onClick={sendInvoiceToCustomer}
                                                            disabled={generatingInvoice}
                                                            style={{ width: '100%', padding: '0.875rem', background: 'linear-gradient(135deg, var(--primary) 0%, #8B83FF 100%)', color: '#fff', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '0.875rem', cursor: generatingInvoice ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: generatingInvoice ? 0.7 : 1 }}
                                                        >
                                                            {generatingInvoice ? <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> : <Mail size={18} />}
                                                            Send to Customer Email
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border-glass)', background: 'rgba(0,0,0,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem', color: 'var(--text-dim)' }}>
                                    <input
                                        type="checkbox"
                                        checked={sendEmailChecked}
                                        onChange={e => setSendEmailChecked(e.target.checked)}
                                        style={{ width: '16px', height: '16px', accentColor: 'var(--primary)' }}
                                    />
                                    Auto-send invoice when ticket is closed
                                </label>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        style={{ padding: '0.75rem 1.5rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem', fontWeight: 'bold', fontSize: '0.875rem', color: 'var(--text-dim)', background: 'transparent', cursor: 'pointer', transition: 'all 0.2s' }}
                                        onMouseOver={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#fff' }}
                                        onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-dim)' }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={() => {
                                            const s = document.getElementById('status-select').value;
                                            const a = document.getElementById('assign-select').value;
                                            const c = document.getElementById('comments-textarea').value;
                                            updateTicketDetails(selectedTicket.id, s, c, a);
                                        }}
                                        disabled={updateLoading}
                                        className="btn-primary"
                                        style={{ padding: '0.75rem 2rem', borderRadius: '0.75rem', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                    >
                                        {updateLoading ? <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> : <Send size={16} />}
                                        Save Updates
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
