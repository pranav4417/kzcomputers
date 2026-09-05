'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ShoppingCart, Star, X, Loader2, Send, Share2, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../ThemeProvider';
import Link from 'next/link';

export default function ProductsGrid({ initialProducts, maxProducts, showSeeMore = false }) {
    const [products, setProducts] = useState(() => initialProducts || []);
    const [loading, setLoading] = useState(() => !initialProducts);
    const [expandedProductId, setExpandedProductId] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [copied, setCopied] = useState(false);
    const [formData, setFormData] = useState({ customerName: '', email: '', phone: '', notes: '' });
    const { theme } = useTheme();
    const productOpenedRef = useRef(false);

    useEffect(() => {
        if (initialProducts) return;
        const fetchProducts = async () => {
            const res = await fetch('/api/admin/products?limit=1000');
            const data = await res.json();
            setProducts(data.products || []);
            setLoading(false);
        };
        fetchProducts();
    }, [initialProducts]);

     useEffect(() => {
        if (!initialProducts || productOpenedRef.current) return;
        productOpenedRef.current = true;
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('product');
        if (productId) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setExpandedProductId(parseInt(productId));
        }
    }, [initialProducts, products]);

    const displayProducts = maxProducts ? products.slice(0, maxProducts) : products;

    const handleSubmitQuote = async (e, productId) => {
        e.preventDefault();
        setSubmitting(true);
        const res = await fetch('/api/quotes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...formData,
                productId
            })
        });

        if (res.ok) {
            alert('Quote requested successfully! Our team will contact you shortly.');
            setExpandedProductId(null);
            setFormData({ customerName: '', email: '', phone: '', notes: '' });
        } else {
            alert('Failed to submit quote request. Please try again.');
        }
        setSubmitting(false);
    };

    const handleShare = (product, e) => {
        e.stopPropagation();
        const url = window.location.origin + '/?product=' + product.id;
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const toggleExpand = (productId) => {
        setExpandedProductId(expandedProductId === productId ? null : productId);
        setFormData({ customerName: '', email: '', phone: '', notes: '' });
    };

    if (loading) return <div className="p-20 flex justify-center"><Loader2 className="animate-spin text-primary w-8 h-8" /></div>;

    return (
        <section id="products" className="section-padding" style={{ background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)', borderTop: '1px solid var(--border-glass)', borderBottom: '1px solid var(--border-glass)' }}>
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
                    <div>
                        <h2 className="title-lg m-0">Products</h2>
                        <p className="text-dim mt-4">Hand-picked technology for performance and durability.</p>
                    </div>
                    {showSeeMore && initialProducts && initialProducts.length > 0 && (
                        <Link href="/products" className="btn-primary" style={{ padding: '0.75rem 1.5rem', borderRadius: '0.75rem', fontWeight: 900, fontSize: '0.875rem' }}>
                            See More
                        </Link>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayProducts.map((product, idx) => {
                        const delayClass = `delay-${idx % 4}`;
                        const isExpanded = expandedProductId === product.id;
                        return (
                            <div key={product.id} className={`glass glass-hover flex-col animate-fade-in ${delayClass}`} style={{ overflow: 'hidden', border: theme === 'dark' ? '1px solid var(--border-glass)' : '1px solid rgba(0,0,0,0.1)' }}>
                                <div className={`product-image-container relative h-48 w-full ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-200'}`}>
                                    {product.image ? (
                                        <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
                                    ) : (
                                        <div className={`flex items-center justify-center w-full h-full text-xs font-bold tracking-widest ${theme === 'dark' ? 'text-text-dim bg-bg-dark' : 'text-gray-500 bg-gray-200'}`}>NO IMAGE</div>
                                    )}
                                    {product.featured && (
                                        <div className="absolute top-4 right-4 bg-secondary/20 border border-secondary/50 text-secondary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1 shadow-lg backdrop-blur-md">
                                            <Star size={10} style={{ fill: 'var(--secondary)' }} /> Featured
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="title-sm m-0">{product.name}</h3>
                                        <span className="product-price">₹{Number(product.price).toLocaleString()}</span>
                                    </div>
                                    <p className="text-dim line-clamp-2 mb-8" style={{ fontSize: '0.875rem' }}>
                                        {product.description || 'High-quality hardware component for your professional or home setup.'}
                                    </p>
                                    <div className="flex gap-4 mt-auto">
                                        <button
                                            onClick={() => toggleExpand(product.id)}
                                            className="btn-primary flex-1"
                                            style={{ fontSize: '0.875rem', padding: '0.75rem' }}
                                        >
                                            <ShoppingCart size={18} />
                                            {isExpanded ? 'Cancel' : 'Request Quote'}
                                        </button>
                                        <button
                                            onClick={(e) => handleShare(product, e)}
                                            className="btn-share"
                                            title="Share this product"
                                        >
                                            <Share2 size={18} />
                                            {copied ? 'Copied!' : 'Share'}
                                        </button>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.form
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            onSubmit={(e) => handleSubmitQuote(e, product.id)}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div className="p-6 flex flex-col gap-4" style={{ background: theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)', borderTop: '1px solid var(--border-glass)' }}>
                                                <div style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Configure Quote</div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                    <input required name="customerName" className="input-field" style={{ padding: '0.75rem', fontSize: '0.875rem' }} placeholder="Full Name *" value={formData.customerName} onChange={e => setFormData({ ...formData, customerName: e.target.value })} />
                                                    <input required name="email" type="email" className="input-field" style={{ padding: '0.75rem', fontSize: '0.875rem' }} placeholder="Email *" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                    <input name="phone" className="input-field" style={{ padding: '0.75rem', fontSize: '0.875rem' }} placeholder="Phone" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                                                    <input name="notes" className="input-field" style={{ padding: '0.75rem', fontSize: '0.875rem' }} placeholder="Notes" value={formData.notes} onChange={e => setFormData({ ...formData, notes: e.target.value })} />
                                                </div>
                                                <button disabled={submitting} type="submit" className="btn-primary w-full py-3">
                                                    {submitting ? <Loader2 size={18} className="animate-spin" /> : <><Send size={18} /> Submit Request</>}
                                                </button>
                                            </div>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                {showSeeMore && initialProducts && initialProducts.length > 0 && (
                    <div className="flex justify-center mt-12">
                        <Link href="/products" className="btn-primary" style={{ padding: '1rem 2.5rem', borderRadius: '0.75rem', fontWeight: 900, fontSize: '1rem' }}>
                            View All Products
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
