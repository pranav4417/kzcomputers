'use client';

import React, { useState, useEffect } from 'react';
import { Loader2, MessageSquare, Phone, Mail, Package, ArrowRight, CheckCircle2 } from 'lucide-react';


export default function AdminQuotes() {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);

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
                                <div style={{ padding: '0.25rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--secondary)', background: 'rgba(255, 101, 132, 0.1)', border: '1px solid rgba(255, 101, 132, 0.2)', borderRadius: '0.5rem' }}>
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
                            <div style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}><Package size={14} /> Target Product</div>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.05)', flexGrow: 1, marginBottom: '1rem' }}>
                                <div style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.25rem' }}>{quote.product?.name || 'Unknown Product'}</div>
                                <div style={{ color: 'var(--primary)', fontFamily: 'monospace', fontSize: '1.25rem', fontWeight: 900 }}>₹{Number(quote.product?.price || 0).toLocaleString()}</div>
                            </div>
                            <button className="btn-primary group" style={{ width: '100%', padding: '1rem', fontSize: '0.875rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                Contact Client <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
