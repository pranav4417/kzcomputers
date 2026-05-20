'use client';

import React, { useState, useEffect } from 'react';
import { Loader2, MessageSquare, Phone, Mail, Package, ArrowRight, CheckCircle2, Plus, X, Send, DollarSign, Trash2, Download } from 'lucide-react';


export default function AdminQuotes() {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [sending, setSending] = useState(false);

    // Quote form state
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [quoteItems, setQuoteItems] = useState([{ desc: '', qty: 1, unit: 'NOS', price: 0, mrp: 0 }]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const res = await fetch('/api/quotes');
                const data = await res.json();
                setQuotes(data);
            } catch (e) {
                console.error("Failed to load quotes");
            } finally {
                setLoading(false);
            }
        };
        fetchQuotes();
    }, []);

    const addItem = () => {
        setQuoteItems([...quoteItems, { desc: '', qty: 1, unit: 'NOS', price: 0, mrp: 0 }]);
    };

    const removeItem = (index) => {
        setQuoteItems(quoteItems.filter((_, i) => i !== index));
    };

    const updateItem = (index, field, value) => {
        const updated = [...quoteItems];
        updated[index][field] = value;
        setQuoteItems(updated);
    };

    const getTotal = () => {
        return quoteItems.reduce((sum, item) => sum + (parseFloat(item.price || 0) * parseInt(item.qty || 1)), 0);
    };

    const sendQuote = async () => {
        if (!customerName || !customerEmail) {
            alert('Please enter customer name and email');
            return;
        }
        if (quoteItems.length === 0 || !quoteItems[0].desc) {
            alert('Please add at least one item');
            return;
        }

        setSending(true);
        try {
            const res = await fetch('/api/admin/quotes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    customerName,
                    customerEmail,
                    customerPhone,
                    items: quoteItems,
                    message
                })
            });
            const data = await res.json();
            if (res.ok) {
                alert('Quote sent successfully!');
                setShowModal(false);
                setCustomerName('');
                setCustomerEmail('');
                setCustomerPhone('');
                setQuoteItems([{ desc: '', qty: 1, unit: 'NOS', price: 0 }]);
                setMessage('');
                fetchQuotes();
            } else {
                alert(data.error || 'Failed to send quote');
            }
        } catch (e) {
            alert('Error sending quote');
        } finally {
            setSending(false);
        }
    };

    const downloadPdf = (quoteToken) => {
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin;
        window.open(`${baseUrl}/api/quotes/pdf/${quoteToken}`, '_blank');
    };

    const deleteQuote = async (quoteId) => {
        if (!confirm('Are you sure you want to delete this quote?')) return;

        try {
            const res = await fetch(`/api/admin/quotes?id=${quoteId}`, {
                method: 'DELETE'
            });
            const data = await res.json();
            if (res.ok) {
                alert('Quote deleted successfully');
                setQuotes(quotes.filter(q => q.id !== quoteId));
            } else {
                alert(data.error || 'Failed to delete quote');
            }
        } catch (e) {
            alert('Error deleting quote');
        }
    };

    if (loading) {
        return (
            <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-dark)' }}>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '8rem' }}>
                    <Loader2 size={40} className="text-primary" style={{ animation: 'spin 1s linear infinite' }} />
                    <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                </div>
            </main>
        );
    }

    return (
        <main className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'space-between' }}>
                <div>
                    <h1 className="title-lg mb-2" style={{ margin: 0, fontWeight: 900 }}>Quote <span className="gradient-text">Requests</span></h1>
                    <p className="text-dim" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Review incoming product estimates from the storefront.</p>
                </div>
                <button onClick={() => setShowModal(true)} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', fontSize: '0.875rem', fontWeight: 900 }}>
                    <Plus size={18} /> Create Quote
                </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {quotes.length === 0 ? (
                    <div className="glass" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-dim)', borderStyle: 'dashed', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)' }}>
                        No new quote requests at this time.
                    </div>
                ) : quotes.map(quote => (
                    <div key={quote.id} className="glass" style={{ padding: '2rem', display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', marginBottom: '0.25rem' }}>Customer Details</div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>{quote.customerName}</h3>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.875rem', color: 'var(--text-dim)' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}><Mail size={14} /> {quote.email}</span>
                                        {quote.phone && <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}><Phone size={14} /> {quote.phone}</span>}
                                    </div>
                                </div>
                                <div style={{
                                    padding: '0.25rem 0.75rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.375rem',
                                    fontSize: '0.625rem',
                                    fontWeight: 900,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: quote.status === 'Accepted' ? '#22c55e' : quote.status === 'Rejected' ? '#ef4444' : '#ffc107',
                                    background: quote.status === 'Accepted' ? 'rgba(34, 197, 94, 0.1)' : quote.status === 'Rejected' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255, 193, 7, 0.1)',
                                    border: `1px solid ${quote.status === 'Accepted' ? 'rgba(34, 197, 94, 0.2)' : quote.status === 'Rejected' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 193, 7, 0.2)'}`,
                                    borderRadius: '0.5rem'
                                }}>
                                    <CheckCircle2 size={12} /> {quote.status}
                                </div>
                            </div>

                            <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}><MessageSquare size={14} /> Special Requirements</div>
                                <p style={{ fontSize: '0.875rem', color: '#e5e7eb', lineHeight: 1.6, background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.05)', whiteSpace: 'pre-wrap', margin: 0 }}>
                                    {quote.notes || 'No additional notes provided.'}
                                </p>
                            </div>
                        </div>

                        <div style={{ flex: '0 0 auto', width: '100%', maxWidth: '320px', borderTop: 'none', borderLeft: '1px solid rgba(255,255,255,0.05)', paddingLeft: '2rem', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}><Package size={14} /> {quote.items?.length > 0 ? 'Quote Details' : 'Target Product'}</div>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.05)', flexGrow: 1, marginBottom: '1rem' }}>
                                {quote.items?.length > 0 ? (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {quote.items.slice(0, 3).map((item, i) => {
                                            const mrp = Number(item.mrp || 0);
                                            const sellingPrice = Number(item.price || 0);
                                            return (
                                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', flexDirection: 'column', gap: '0.125rem' }}>
                                                    <span style={{ color: '#e5e7eb' }}>{item.desc || 'Item ' + (i + 1)}</span>
                                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end' }}>
                                                        {mrp > 0 && (
                                                            <span style={{ textDecoration: 'line-through', color: '#666', fontSize: '0.75rem' }}>₹{mrp.toLocaleString()}</span>
                                                        )}
                                                        <span style={{ color: '#22c55e', fontFamily: 'monospace', fontWeight: 900, fontSize: '0.8rem' }}>₹{sellingPrice.toLocaleString()}</span>
                                                    </span>
                                                </div>
                                            )
                                        })}
                                        {quote.items.length > 3 && (
                                            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textAlign: 'center', marginTop: '0.25rem' }}>+{quote.items.length - 3} more items</div>
                                        )}
                                    </div>
                                ) : (
                                    <>
                                        <div style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.25rem' }}>{quote.product?.name || 'Unknown Product'}</div>
                                        <div style={{ color: 'var(--primary)', fontFamily: 'monospace', fontSize: '1.25rem', fontWeight: 900 }}>₹{Number(quote.product?.price || 0).toLocaleString()}</div>
                                    </>
                                )}
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1rem', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '0.25rem' }}>Total Amount</div>
                                <div style={{ color: 'var(--primary)', fontFamily: 'monospace', fontSize: '1.5rem', fontWeight: 900 }}>₹{Number(quote.amount || quote.product?.price || 0).toLocaleString()}</div>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <button className="btn-primary group" style={{ flex: 1, padding: '1rem', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', minWidth: '140px' }}>
                                    Contact Client <ArrowRight size={16} />
                                </button>
                                <button
                                    onClick={() => downloadPdf(quote.quoteToken)}
                                    title="Download PDF"
                                    style={{
                                        padding: '1rem',
                                        background: 'rgba(108, 99, 255, 0.1)',
                                        border: '1px solid rgba(108, 99, 255, 0.3)',
                                        borderRadius: '0.75rem',
                                        color: 'var(--primary)',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minWidth: '48px'
                                    }}
                                >
                                    <Download size={16} />
                                </button>
                                <button
                                    onClick={() => deleteQuote(quote.id)}
                                    title="Delete Quote"
                                    style={{
                                        padding: '1rem',
                                        background: 'rgba(239, 68, 68, 0.1)',
                                        border: '1px solid rgba(239, 68, 68, 0.3)',
                                        borderRadius: '0.75rem',
                                        color: '#ef4444',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minWidth: '48px'
                                    }}
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Create Quote Modal */}
            {showModal && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem' }}>
                    <div className="glass" style={{ width: '100%', maxWidth: '700px', maxHeight: '90vh', overflow: 'auto', padding: '2rem', borderRadius: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h2 style={{ margin: 0, color: '#fff', fontSize: '1.5rem', fontWeight: 900 }}>Create Quote</h2>
                            <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}><X size={24} /></button>
                        </div>

                        {/* Customer Details */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', color: 'var(--text-dim)', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Customer Name *</label>
                                <input value={customerName} onChange={e => setCustomerName(e.target.value)} className="input-field" style={{ width: '100%', padding: '0.75rem' }} placeholder="Enter customer name" />
                            </div>
                            <div>
                                <label style={{ display: 'block', color: 'var(--text-dim)', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email *</label>
                                <input value={customerEmail} onChange={e => setCustomerEmail(e.target.value)} className="input-field" style={{ width: '100%', padding: '0.75rem' }} placeholder="customer@email.com" type="email" />
                            </div>
                            <div>
                                <label style={{ display: 'block', color: 'var(--text-dim)', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</label>
                                <input value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} className="input-field" style={{ width: '100%', padding: '0.75rem' }} placeholder="Phone number" />
                            </div>
                        </div>

                        {/* Quote Items */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <label style={{ color: 'var(--text-dim)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quote Items</label>
                                <button onClick={addItem} style={{ background: 'var(--primary)', border: 'none', color: '#fff', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '0.75rem', fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                    <Plus size={14} /> Add Item
                                </button>
                            </div>

                            {/* Column Headers */}
                            <div style={{ display: 'grid', gridTemplateColumns: '2fr 0.5fr 0.5fr 1fr 1fr auto', gap: '0.5rem', marginBottom: '0.375rem', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)' }}>Description</span>
                                <span style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', textAlign: 'center' }}>Qty</span>
                                <span style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', textAlign: 'center' }}>Unit</span>
                                <span style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', textAlign: 'right' }}>MRP</span>
                                <span style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#22c55e', textAlign: 'right' }}>Selling Price</span>
                                <span></span>
                            </div>

                            {quoteItems.map((item, index) => (
                                <div key={index} style={{ display: 'grid', gridTemplateColumns: '2fr 0.5fr 0.5fr 1fr 1fr auto', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'center' }}>
                                    <input value={item.desc} onChange={e => updateItem(index, 'desc', e.target.value)} className="input-field" style={{ padding: '0.5rem' }} placeholder="Description" />
                                    <input type="number" value={item.qty} onChange={e => updateItem(index, 'qty', e.target.value)} className="input-field" style={{ padding: '0.5rem' }} placeholder="Qty" />
                                    <select value={item.unit} onChange={e => updateItem(index, 'unit', e.target.value)} className="input-field" style={{ padding: '0.5rem' }}>
                                        <option value="NOS">NOS</option>
                                        <option value="Hours">Hours</option>
                                        <option value="Kgs">Kgs</option>
                                        <option value="Ltr">Ltr</option>
                                    </select>
                                    <input type="number" value={item.mrp} onChange={e => updateItem(index, 'mrp', e.target.value)} className="input-field" style={{ padding: '0.5rem' }} placeholder="0" />
                                    <input type="number" value={item.price} onChange={e => updateItem(index, 'price', e.target.value)} className="input-field" style={{ padding: '0.5rem' }} placeholder="0" />
                                    <button onClick={() => removeItem(index)} disabled={quoteItems.length === 1} style={{ background: 'rgba(239,68,68,0.2)', border: 'none', color: '#ef4444', padding: '0.5rem', borderRadius: '0.5rem', cursor: quoteItems.length === 1 ? 'not-allowed' : 'pointer' }}>
                                        <X size={16} />
                                    </button>
                                </div>
                            ))}

                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem' }}>
                                <span style={{ color: 'var(--text-dim)', marginRight: '1rem' }}>Total:</span>
                                <span style={{ color: 'var(--primary)', fontWeight: 900, fontSize: '1.25rem' }}>₹{getTotal().toFixed(2)}</span>
                            </div>
                        </div>

                        {/* Message / Note to Customer */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', color: 'var(--text-dim)', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Note to Customer</label>
                            <textarea value={message} onChange={e => setMessage(e.target.value)} className="input-field" style={{ width: '100%', padding: '0.75rem', minHeight: '80px' }} placeholder="Add a note or message for the customer (e.g. delivery instructions, special terms, discount details)..." />
                        </div>

                        {/* Actions */}
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                            <button onClick={() => setShowModal(false)} className="btn-secondary" style={{ padding: '0.75rem 1.5rem' }}>Cancel</button>
                            <button onClick={sendQuote} disabled={sending} className="btn-primary" style={{ padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                {sending ? <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> : <Send size={18} />}
                                Send Quote
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
