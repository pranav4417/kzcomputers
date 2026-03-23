'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShoppingCart, Star, X, Loader2, Send, Share2, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

export default function ProductsGrid() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [copied, setCopied] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('/api/admin/products');
            const data = await res.json();
            setProducts(data);
            setLoading(false);

            // Check for product query parameter to open modal automatically
            const params = new URLSearchParams(window.location.search);
            const productId = params.get('product');
            if (productId) {
                const product = data.find(p => p.id === parseInt(productId));
                if (product) {
                    setSelectedProduct(product);
                    setIsModalOpen(true);
                }
            }
        };
        fetchProducts();
    }, []);

    const handleSubmitQuote = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const form = e.target;
        const res = await fetch('/api/quotes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                customerName: form.customerName.value,
                email: form.email.value,
                phone: form.phone.value,
                notes: form.notes.value,
                productId: selectedProduct.id
            })
        });

        if (res.ok) {
            alert('Quote requested successfully! Our team will contact you shortly.');
            setIsModalOpen(false);
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

    if (loading) return <div className="p-20 flex justify-center"><Loader2 className="animate-spin text-primary w-8 h-8" /></div>;

    return (
        <section id="products" className="section-padding" style={{ background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)', borderTop: '1px solid var(--border-glass)', borderBottom: '1px solid var(--border-glass)' }}>
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
                    <div>
                        <h2 className="title-lg m-0">Premium <span className="gradient-text">Hardware</span></h2>
                        <p className="text-dim mt-4">Hand-picked technology for performance and durability.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, idx) => {
                        const delayClass = `delay-${idx % 4}`;
                        return (
                            <div key={product.id} className={`glass glass-hover flex-col animate-fade-in ${delayClass}`} style={{ overflow: 'hidden', border: theme === 'dark' ? '1px solid var(--border-glass)' : '1px solid rgba(0,0,0,0.1)' }}>
                                <div className={`product-image-container relative h-48 w-full ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-200'}`}>
                                    {product.image ? (
                                        <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
                                    ) : (
                                        <div className={`flex items-center justify-center w-full h-full text-xs font-bold tracking-widest ${theme === 'dark' ? 'text-text-dim bg-bg-dark' : 'text-gray-500 bg-gray-200'}`}>NO IMAGE</div>
                                    )}
                                    <div className="absolute top-4 right-4 bg-secondary/20 border border-secondary/50 text-secondary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1 shadow-lg backdrop-blur-md">
                                        <Star size={10} style={{ fill: 'var(--secondary)' }} /> New
                                    </div>
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
                                            onClick={() => { setSelectedProduct(product); setIsModalOpen(true); }}
                                            className="btn-primary flex-1"
                                            style={{ fontSize: '0.875rem', padding: '0.75rem' }}
                                        >
                                            <ShoppingCart size={18} />
                                            Request Quote
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
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Quote Request Modal */}
            <AnimatePresence>
                {isModalOpen && selectedProduct && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="fixed inset-0 bg-black-80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="glass max-w-lg w-full p-8 md:p-10 relative z-10 flex flex-col max-h-[90vh] overflow-y-auto"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-title"
                        >
                            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 p-2 bg-primary text-white rounded-full hover:bg-primary/80 transition shadow-lg" aria-label="Close modal">
                                <X size={20} />
                            </button>

                            <div className="flex flex-col items-center text-center mb-8">
                                <h3 id="modal-title" className="title-md mb-2">Configure <span className="gradient-text">Quote</span></h3>
                                <p className="text-sm text-dim">Estimate for <strong>{selectedProduct.name}</strong> at base ₹{Number(selectedProduct.price).toLocaleString()}</p>
                            </div>

                            <form onSubmit={handleSubmitQuote} className="space-y-6">
                                <div>
                                    <label className="text-xs font-bold text-dim mb-2 block">Full Name *</label>
                                    <input required name="customerName" type="text" className="input-field" placeholder="John Doe" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-bold text-dim mb-2 block">Email Address *</label>
                                        <input required name="email" type="email" className="input-field" placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-dim mb-2 block">Phone Number</label>
                                        <input name="phone" type="tel" className="input-field" placeholder="+91 00000 00000" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-dim mb-2 block">Configuration Notes</label>
                                    <textarea name="notes" rows={3} className="input-field" style={{ resize: 'none' }} placeholder="Requirements and notes..." />
                                </div>

                                <button disabled={submitting} type="submit" className="btn-primary w-full py-4 mt-4">
                                    {submitting ? <Loader2 size={18} className="animate-spin" /> : <><Send size={18} /> Submit Request</>}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
