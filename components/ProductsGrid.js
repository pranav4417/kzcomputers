'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShoppingCart, Star, X, Loader2, Send, Share2, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductsGrid() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [copied, setCopied] = useState(false);

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
        <section id="products" className="section-padding" style={{ background: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid var(--border-glass)', borderBottom: '1px solid var(--border-glass)' }}>
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
                            <div key={product.id} className={`glass glass-hover flex-col animate-fade-in ${delayClass}`} style={{ overflow: 'hidden' }}>
                                <div className="product-image-container relative h-48 w-full bg-white/5">
                                    {product.image ? (
                                        <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
                                    ) : (
                                        <div className="flex items-center justify-center w-full h-full text-text-dim text-xs font-bold tracking-widest bg-bg-dark">NO IMAGE</div>
                                    )}
                                    <div className="absolute top-4 right-4 bg-secondary/20 border border-secondary/50 text-secondary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1 shadow-lg backdrop-blur-md">
                                        <Star size={10} style={{ fill: 'var(--secondary)' }} /> New
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-lg font-black">{product.name}</h3>
                                        <span className="text-primary font-black text-lg font-mono">₹{Number(product.price).toLocaleString()}</span>
                                    </div>
                                    <p className="text-text-dim text-sm mb-8 leading-relaxed line-clamp-2 flex-grow">
                                        {product.description || 'High-quality hardware component for your professional or home setup.'}
                                    </p>
                                    <div className="flex gap-4 mt-auto">
                                        <button
                                            onClick={() => { setSelectedProduct(product); setIsModalOpen(true); }}
                                            className="flex-1 py-3 bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors text-sm font-bold flex items-center justify-center gap-2 rounded-xl group border border-primary/20 hover:border-transparent"
                                        >
                                            <ShoppingCart size={16} className="group-hover:scale-110 transition-transform" />
                                            Request Quote
                                        </button>
                                        <button
                                            onClick={(e) => handleShare(product, e)}
                                            className="py-3 px-4 bg-white/5 text-text-dim hover:bg-white/10 hover:text-white transition-colors text-sm font-bold flex items-center justify-center gap-2 rounded-xl border border-white/10"
                                            title="Share this product"
                                        >
                                            {copied ? <Check size={16} className="text-green-400" /> : <Share2 size={16} />}
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
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-0">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="glass max-w-lg w-full p-8 md:p-10 relative z-10 flex flex-col max-h-[90vh] overflow-y-auto"
                        >
                            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-text-dim hover:text-white transition bg-white/5 p-2 rounded-full border border-white/10">
                                <X size={20} />
                            </button>

                            <div className="flex items-center gap-2 mb-4">
                                <h3 className="text-2xl font-black mb-0">Configure <span className="gradient-text">Quote</span></h3>
                                <button
                                    onClick={() => {
                                        const url = window.location.origin + '/?product=' + selectedProduct.id;
                                        navigator.clipboard.writeText(url);
                                        setCopied(true);
                                        setTimeout(() => setCopied(false), 2000);
                                    }}
                                    className="ml-auto text-xs font-bold flex items-center gap-1 px-3 py-1.5 rounded-lg border transition-all"
                                    style={{
                                        background: copied ? 'rgba(52, 199, 89, 0.2)' : 'rgba(255,255,255,0.05)',
                                        borderColor: copied ? 'rgba(52, 199, 89, 0.3)' : 'rgba(255,255,255,0.1)',
                                        color: copied ? '#4ade80' : 'var(--text-dim)'
                                    }}
                                >
                                    {copied ? <><Check size={12} /> Copied!</> : <><Share2 size={12} /> Share</>}
                                </button>
                            </div>
                            <p className="text-sm text-text-dim mb-8">You are requesting an estimate for <strong>{selectedProduct.name}</strong> at base ₹{Number(selectedProduct.price).toLocaleString()}. Please provide your details below.</p>

                            <form onSubmit={handleSubmitQuote} className="space-y-5">
                                <div>
                                    <label className="text-[10px] uppercase font-black tracking-widest text-text-dim mb-2 block">Full Name *</label>
                                    <input required name="customerName" type="text" className="w-full bg-bg-dark border border-white/10 p-4 rounded-xl focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-sm font-medium" placeholder="John Doe" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-[10px] uppercase font-black tracking-widest text-text-dim mb-2 block">Email Address *</label>
                                        <input required name="email" type="email" className="w-full bg-bg-dark border border-white/10 p-4 rounded-xl focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-sm font-medium" placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label className="text-[10px] uppercase font-black tracking-widest text-text-dim mb-2 block">Phone Number</label>
                                        <input name="phone" type="tel" className="w-full bg-bg-dark border border-white/10 p-4 rounded-xl focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-sm font-medium" placeholder="+1 (555) 000-0000" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase font-black tracking-widest text-text-dim mb-2 block">Configuration Notes / Requirements</label>
                                    <textarea name="notes" rows={3} className="w-full bg-bg-dark border border-white/10 p-4 rounded-xl focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-sm font-medium resize-none" placeholder="I would like to order 5 of these for my office..." />
                                </div>

                                <button disabled={submitting} type="submit" className="w-full py-4 bg-primary text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-primary/20">
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
