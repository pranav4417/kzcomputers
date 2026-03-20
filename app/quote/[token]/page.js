'use client';

import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle2, XCircle, Download, ArrowLeft, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function QuotePage() {
    const params = useParams();
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const token = params?.token;

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const res = await fetch(`/api/quotes/respond?token=${token}`);
                const data = await res.json();
                if (res.ok) {
                    setQuote(data);
                } else {
                    setError(data.error || 'Quote not found');
                }
            } catch (e) {
                setError('Failed to load quote');
            } finally {
                setLoading(false);
            }
        };
        fetchQuote();
    }, [token]);

    const handleResponse = async (action) => {
        setSubmitting(true);
        setMessage(null);
        try {
            const res = await fetch('/api/quotes/respond', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ quoteToken: token, action })
            });
            const data = await res.json();
            if (res.ok) {
                setMessage(data.message);
                setQuote({ ...quote, status: action, respondedAt: new Date() });
            } else {
                setError(data.error || 'Failed to respond to quote');
            }
        } catch (e) {
            setError('Failed to respond to quote');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-dark)' }}>
                <Loader2 size={40} className="text-primary" style={{ animation: 'spin 1s linear infinite' }} />
                <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
            </main>
        );
    }

    if (error && !quote) {
        return (
            <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-dark)', padding: '2rem' }}>
                <XCircle size={64} style={{ color: '#ef4444', marginBottom: '1rem' }} />
                <h1 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Quote Not Found</h1>
                <p style={{ color: 'var(--text-dim)', marginBottom: '2rem' }}>{error}</p>
                <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ArrowLeft size={16} /> Back to Home
                </Link>
            </main>
        );
    }

    const items = quote?.items || [];

    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-dark)', padding: '2rem 1rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', textDecoration: 'none', marginBottom: '2rem', fontSize: '0.875rem' }}>
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                {/* Header */}
                <div style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #8B5CF6 100%)', borderRadius: '1rem', padding: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                    <h1 style={{ color: '#fff', fontSize: '2rem', fontWeight: 900, margin: 0 }}>QUOTE</h1>
                    <p style={{ color: 'rgba(255,255,255,0.8)', margin: '0.5rem 0 0 0', fontFamily: 'monospace' }}>#{quote?.quoteToken?.substring(0, 8).toUpperCase() || quote?.id}</p>
                </div>

                {/* Message */}
                {message && (
                    <div style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: '0.75rem', padding: '1rem', marginBottom: '1.5rem', color: '#22c55e', textAlign: 'center' }}>
                        {message}
                    </div>
                )}

                {error && (
                    <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '0.75rem', padding: '1rem', marginBottom: '1.5rem', color: '#ef4444' }}>
                        {error}
                    </div>
                )}

                {/* Quote Details */}
                <div className="glass" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                        <div>
                            <div style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', marginBottom: '0.5rem' }}>Quote Date</div>
                            <div style={{ color: '#fff', fontSize: '1rem' }}>{new Date(quote?.createdAt).toLocaleDateString('en-GB')}</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', marginBottom: '0.5rem' }}>Valid Until</div>
                            <div style={{ color: '#fff', fontSize: '1rem' }}>{new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB')}</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', marginBottom: '0.5rem' }}>Customer</div>
                            <div style={{ color: '#fff', fontSize: '1rem' }}>{quote?.customerName}</div>
                            {quote?.guestEmail && <div style={{ color: 'var(--text-dim)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}><Mail size={12} /> {quote.guestEmail}</div>}
                            {quote?.guestPhone && <div style={{ color: 'var(--text-dim)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}><Phone size={12} /> {quote.guestPhone}</div>}
                        </div>
                        <div>
                            <div style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', marginBottom: '0.5rem' }}>Status</div>
                            <span style={{
                                padding: '0.25rem 0.75rem',
                                borderRadius: '0.5rem',
                                fontSize: '0.75rem',
                                fontWeight: 900,
                                textTransform: 'uppercase',
                                background: quote?.status === 'Accepted' ? 'rgba(34, 197, 94, 0.2)' : quote?.status === 'Rejected' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 193, 7, 0.2)',
                                color: quote?.status === 'Accepted' ? '#22c55e' : quote?.status === 'Rejected' ? '#ef4444' : '#ffc107'
                            }}>
                                {quote?.status}
                            </span>
                        </div>
                    </div>

                    {/* Items Table */}
                    {items.length > 0 && (
                        <div style={{ marginTop: '1.5rem' }}>
                            <div style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '1rem' }}>Quote Items</div>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ background: 'var(--primary)' }}>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fff', fontSize: '0.625rem', textTransform: 'uppercase' }}>#</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'left', color: '#fff', fontSize: '0.625rem', textTransform: 'uppercase' }}>Description</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'center', color: '#fff', fontSize: '0.625rem', textTransform: 'uppercase' }}>Qty</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'right', color: '#fff', fontSize: '0.625rem', textTransform: 'uppercase' }}>Rate</th>
                                        <th style={{ padding: '0.75rem', textAlign: 'right', color: '#fff', fontSize: '0.625rem', textTransform: 'uppercase' }}>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, i) => (
                                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                            <td style={{ padding: '0.75rem', textAlign: 'center', color: 'var(--text-dim)' }}>{i + 1}</td>
                                            <td style={{ padding: '0.75rem', color: '#fff' }}>{item.desc}</td>
                                            <td style={{ padding: '0.75rem', textAlign: 'center', color: 'var(--text-dim)' }}>{item.qty || 1}</td>
                                            <td style={{ padding: '0.75rem', textAlign: 'right', color: 'var(--text-dim)' }}>₹{parseFloat(item.price || 0).toFixed(2)}</td>
                                            <td style={{ padding: '0.75rem', textAlign: 'right', color: '#fff', fontWeight: 'bold' }}>₹{(parseFloat(item.price || 0) * (item.qty || 1)).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Total */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem 2rem', borderRadius: '0.75rem', textAlign: 'right' }}>
                            <div style={{ color: 'var(--text-dim)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Total Amount</div>
                            <div style={{ color: 'var(--primary)', fontSize: '2rem', fontWeight: 900 }}>₹{(quote?.amount || 0).toFixed(2)}</div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                {!quote?.respondedAt && (
                    <div className="glass" style={{ padding: '2rem', textAlign: 'center' }}>
                        <p style={{ color: 'var(--text-dim)', marginBottom: '1.5rem' }}>Please review the quote and confirm your decision</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button
                                onClick={() => handleResponse('Accepted')}
                                disabled={submitting}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '1rem 2rem',
                                    background: '#22c55e',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '0.75rem',
                                    fontSize: '1rem',
                                    fontWeight: 900,
                                    cursor: submitting ? 'not-allowed' : 'pointer',
                                    opacity: submitting ? 0.7 : 1
                                }}
                            >
                                {submitting ? <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} /> : <CheckCircle2 size={20} />}
                                Accept Quote
                            </button>
                            <button
                                onClick={() => handleResponse('Rejected')}
                                disabled={submitting}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '1rem 2rem',
                                    background: 'transparent',
                                    color: '#ef4444',
                                    border: '2px solid #ef4444',
                                    borderRadius: '0.75rem',
                                    fontSize: '1rem',
                                    fontWeight: 900,
                                    cursor: submitting ? 'not-allowed' : 'pointer',
                                    opacity: submitting ? 0.7 : 1
                                }}
                            >
                                {submitting ? <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} /> : <XCircle size={20} />}
                                Reject Quote
                            </button>
                        </div>
                    </div>
                )}

                {quote?.respondedAt && (
                    <div className="glass" style={{ padding: '2rem', textAlign: 'center' }}>
                        {quote.status === 'Accepted' ? (
                            <div style={{ color: '#22c55e' }}>
                                <CheckCircle2 size={48} style={{ marginBottom: '1rem' }} />
                                <h2 style={{ margin: 0 }}>Quote Accepted</h2>
                                <p style={{ color: 'var(--text-dim)', marginTop: '0.5rem' }}>Thank you for accepting the quote. We will contact you shortly.</p>
                            </div>
                        ) : (
                            <div style={{ color: '#ef4444' }}>
                                <XCircle size={48} style={{ marginBottom: '1rem' }} />
                                <h2 style={{ margin: 0 }}>Quote Rejected</h2>
                                <p style={{ color: 'var(--text-dim)', marginTop: '0.5rem' }}>You have rejected this quote.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
        </main>
    );
}
