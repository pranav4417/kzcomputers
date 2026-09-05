'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, Star, X, Loader2, Send, ChevronLeft, AlertCircle, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function ProductDetailClient({ product }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({ customerName: '', email: '', phone: '', notes: '' });

    const handleSubmitQuote = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const res = await fetch('/api/quotes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...formData,
                productId: product.id
            })
        });

        if (res.ok) {
            alert('Quote requested successfully! Our team will contact you shortly.');
            setIsExpanded(false);
            setFormData({ customerName: '', email: '', phone: '', notes: '' });
        } else {
            alert('Failed to submit quote request. Please try again.');
        }
        setSubmitting(false);
    };

    if (!product) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', gap: '1.5rem' }}>
                <AlertCircle size={48} style={{ color: 'var(--secondary)' }} />
                <h1 style={{ fontSize: '2rem', fontWeight: 900 }}>Product Not Found</h1>
                <p style={{ color: 'var(--text-dim)' }}>The product you are looking for does not exist or has been removed.</p>
                <Link href="/products" className="btn-primary" style={{ padding: '0.875rem 1.5rem', borderRadius: '0.75rem', fontWeight: 900, fontSize: '0.875rem' }}>
                    Back to Products
                </Link>
            </div>
        );
    }

    return (
        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div className="container" style={{ paddingTop: '3rem' }}>
                <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>
                    <ChevronLeft size={18} /> Back to Products
                </Link>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1.5rem', padding: '2.5rem', border: '1px solid var(--border-glass)' }}>
                    <div style={{ position: 'relative', height: '24rem', borderRadius: '1rem', overflow: 'hidden', background: 'rgba(255,255,255,0.05)' }}>
                        {product.image ? (
                            <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
                        ) : (
                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.1)', fontWeight: 900, letterSpacing: '0.2em' }}>NO IMAGE</div>
                        )}
                        {product.featured && (
                            <div className="absolute top-4 right-4 bg-secondary/20 border border-secondary/50 text-secondary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1 shadow-lg backdrop-blur-md">
                                <Star size={10} style={{ fill: 'var(--secondary)' }} /> Featured
                            </div>
                        )}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <h1 style={{ fontSize: '2rem', fontWeight: 900, margin: 0, lineHeight: 1.2 }}>{product.name}</h1>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                <span style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--primary)' }}>₹{Number(product.price).toLocaleString()}</span>
                                <span style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, background: 'rgba(108, 99, 255, 0.1)', color: 'var(--primary)', textTransform: 'uppercase' }}>{product.category || 'General'}</span>
                                {product.assetId && <span style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, background: 'rgba(108, 99, 255, 0.1)', color: 'var(--primary)', textTransform: 'uppercase' }}>Asset: {product.assetId}</span>}
                                <span style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, background: product.stock > 0 ? 'rgba(40, 167, 69, 0.1)' : 'rgba(220, 53, 69, 0.1)', color: product.stock > 0 ? '#28a745' : '#dc3545', textTransform: 'uppercase' }}>
                                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                                </span>
                            </div>
                        </div>

                        <div style={{ height: '1px', background: 'var(--border-glass)' }} />

                        <div>
                            <h3 style={{ fontSize: '0.875rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '0.75rem' }}>Description</h3>
                            <p style={{ color: 'var(--text-main)', lineHeight: 1.8, fontSize: '0.9375rem' }}>
                                {product.description || 'No description available for this product.'}
                            </p>
                        </div>

                        <div style={{ height: '1px', background: 'var(--border-glass)' }} />

                        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="btn-primary"
                                style={{ flex: 1, padding: '1rem', borderRadius: '0.75rem', fontWeight: 900, fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                            >
                                <ShoppingCart size={18} /> {isExpanded ? 'Cancel' : 'Request Quote'}
                            </button>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.form
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onSubmit={handleSubmitQuote}
                            style={{ overflow: 'hidden', marginTop: '1rem' }}
                        >
                            <div className="glass" style={{ padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border-glass)' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1.5rem' }}>Configure <span className="gradient-text">Quote</span></h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="text-xs font-bold text-dim mb-2 block">Full Name *</label>
                                        <input required name="customerName" type="text" className="input-field" placeholder="John Doe" value={formData.customerName} onChange={e => setFormData({ ...formData, customerName: e.target.value })} />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-dim mb-2 block">Email Address *</label>
                                        <input required name="email" type="email" className="input-field" placeholder="john@example.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="text-xs font-bold text-dim mb-2 block">Phone Number</label>
                                        <input name="phone" type="tel" className="input-field" placeholder="+91 00000 00000" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-dim mb-2 block">Configuration Notes</label>
                                        <textarea name="notes" rows={3} className="input-field" style={{ resize: 'none' }} placeholder="Requirements and notes..." value={formData.notes} onChange={e => setFormData({ ...formData, notes: e.target.value })} />
                                    </div>
                                </div>
                                <button disabled={submitting} type="submit" className="btn-primary w-full py-4">
                                    {submitting ? <Loader2 size={18} className="animate-spin" /> : <><Send size={18} /> Submit Request</>}
                                </button>
                            </div>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
