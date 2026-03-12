'use client';

import React, { useState, useEffect } from 'react';
import {
    Plus, Search, Edit2, Trash2, Camera, Loader2, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function ProductManagement() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [formData, setFormData] = useState({ name: '', description: '', price: '' });
    const [image, setImage] = useState(null);
    const [saving, setSaving] = useState(false);

    useEffect(() => { fetchProducts(); }, []);

    const fetchProducts = async () => {
        setLoading(true);
        const res = await fetch('/api/admin/products');
        const data = await res.json();
        setProducts(data);
        setLoading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);

        const body = new FormData();
        body.append('name', formData.name);
        body.append('description', formData.description);
        body.append('price', formData.price);
        if (image) body.append('image', image);

        try {
            const url = editingProduct ? `/api/admin/products/${editingProduct.id}` : '/api/admin/products';
            const method = editingProduct ? 'PATCH' : 'POST';

            const res = await fetch(url, { method, body });
            if (res.ok) {
                fetchProducts();
                setIsModalOpen(false);
                setEditingProduct(null);
                setFormData({ name: '', description: '', price: '' });
                setImage(null);
            }
        } catch (err) {
            alert('Failed to save product');
        } finally {
            setSaving(false);
        }
    };

    const deleteProduct = async (id) => {
        if (!confirm('Are you sure?')) return;
        await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
        fetchProducts();
    };

    return (
        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                    <h1 className="title-lg mb-2" style={{ margin: 0, fontWeight: 900 }}>Inventory <span className="gradient-text">Gallery</span></h1>
                    <p className="text-dim" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Manage products displayed on your public storefront.</p>
                </div>
                <button
                    onClick={() => { setEditingProduct(null); setFormData({ name: '', description: '', price: '' }); setIsModalOpen(true); }}
                    className="btn-primary"
                    style={{ padding: '0.75rem 1.5rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 900, fontSize: '0.875rem' }}
                >
                    <Plus size={20} /> Add Product
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
                {loading ? (
                    <div style={{ gridColumn: '1 / -1', display: 'flex', justifySelf: 'center', padding: '5rem' }}>
                        <Loader2 size={40} className="text-primary" style={{ animation: 'spin 1s linear infinite' }} />
                        <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                    </div>
                ) : products.map((product) => (
                    <div key={product.id} className="glass group" style={{ overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ position: 'relative', height: '12rem', background: 'rgba(255,255,255,0.05)' }}>
                            {product.image ? (
                                <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
                            ) : (
                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.1)', fontWeight: 900, letterSpacing: '0.2em' }}>NO IMAGE</div>
                            )}
                            <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                <button onClick={() => { setEditingProduct(product); setFormData(product); setIsModalOpen(true); }} style={{ padding: '0.5rem', background: 'rgba(0,0,0,0.6)', borderRadius: '0.5rem', cursor: 'pointer', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }} title="Edit Product"><Edit2 size={16} /></button>
                                <button onClick={() => deleteProduct(product.id)} style={{ padding: '0.5rem', background: 'rgba(0,0,0,0.6)', borderRadius: '0.5rem', cursor: 'pointer', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }} title="Delete Product"><Trash2 size={16} /></button>
                            </div>
                        </div>
                        <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', gap: '0.5rem' }}>
                                <h3 style={{ fontWeight: 'bold', fontSize: '0.875rem', margin: 0 }}>{product.name}</h3>
                                <span style={{ color: 'var(--primary)', fontWeight: 900, fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'rgba(108, 99, 255, 0.1)', borderRadius: '9999px' }}>₹{Number(product.price).toLocaleString()}</span>
                            </div>
                            <p className="text-dim" style={{ fontSize: '0.625rem', lineHeight: 1.6, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(12px)' }} />
                        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="glass" style={{ width: '100%', maxWidth: '32rem', padding: '2.5rem', position: 'relative', zIndex: 10 }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.5rem', margin: '0 0 1.5rem 0' }}>{editingProduct ? 'Edit' : 'Add'} <span className="gradient-text">Product</span></h3>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Product Name</label>
                                    <input required className="input-field" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', fontSize: '0.875rem' }} value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Price (INR)</label>
                                        <input required type="number" className="input-field" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 900, color: 'var(--primary)' }} value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} />
                                    </div>
                                    <div>
                                        <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Image</label>
                                        <div style={{ position: 'relative', overflow: 'hidden' }}>
                                            <input type="file" onChange={e => setImage(e.target.files[0])} style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', zIndex: 10 }} />
                                            <div style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}><Camera size={16} /> {image ? image.name.slice(0, 10) + '...' : 'Upload'}</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Description</label>
                                    <textarea rows={3} className="input-field" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', fontSize: '0.875rem', resize: 'none', lineHeight: 1.6 }} value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                                    <button type="button" onClick={() => setIsModalOpen(false)} style={{ flex: 1, padding: '1rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem', fontWeight: 900, fontSize: '0.875rem', background: 'rgba(255,255,255,0.05)', color: 'var(--text-dim)', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-dim)'}>Cancel</button>
                                    <button type="submit" disabled={saving} className="btn-primary" style={{ flex: 1, padding: '1rem', borderRadius: '0.75rem', fontWeight: 900, fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {saving ? <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} /> : 'Save Product'}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
