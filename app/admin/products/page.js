'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
    Plus, Search, Edit2, Trash2, Camera, Loader2, X, Share2, Check, Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function ProductManagement() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [formData, setFormData] = useState({ name: '', description: '', price: '', category: 'General', stock: 0, featured: false, displayOrder: 0, isActive: true, assetId: '' });
    const [image, setImage] = useState(null);
    const [saving, setSaving] = useState(false);
    const [copied, setCopied] = useState(false);
    const [search, setSearch] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [viewMode, setViewMode] = useState('grid');

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        const params = new URLSearchParams();
        if (search) params.set('search', search);
        if (filterCategory) params.set('category', filterCategory);
        params.set('sort', 'displayOrder');
        params.set('order', 'asc');
        params.set('limit', '100');

        const res = await fetch(`/api/admin/products?${params.toString()}`);
        const data = await res.json();
        setProducts(data.products || []);
        setLoading(false);

        const cats = [...new Set((data.products || []).map(p => p.category).filter(Boolean))];
        setCategories(cats);
    }, [search, filterCategory]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);

        const body = new FormData();
        body.append('name', formData.name);
        body.append('description', formData.description);
        body.append('price', formData.price);
        body.append('category', formData.category);
        body.append('stock', formData.stock.toString());
        body.append('featured', formData.featured.toString());
        body.append('displayOrder', formData.displayOrder.toString());
        body.append('isActive', formData.isActive.toString());
        if (image) body.append('image', image);

        try {
            const url = editingProduct ? `/api/admin/products/${editingProduct.id}` : '/api/admin/products';
            const method = editingProduct ? 'PATCH' : 'POST';

            const res = await fetch(url, { method, body });
            if (res.ok) {
                fetchProducts();
                setIsModalOpen(false);
                setEditingProduct(null);
                setFormData({ name: '', description: '', price: '', category: 'General', stock: 0, featured: false, displayOrder: 0, isActive: true });
                setImage(null);
            } else {
                const err = await res.json();
                alert(err.error || 'Failed to save product');
            }
        } catch (err) {
            alert('Failed to save product');
        } finally {
            setSaving(false);
        }
    };

    const deleteProduct = async (id) => {
        if (!confirm('Are you sure you want to delete this product?')) return;
        await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
        fetchProducts();
    };

    const shareProduct = (product) => {
        const url = `${window.location.origin}/products/${product.id}`;
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                    <h1 className="title-lg mb-2" style={{ margin: 0, fontWeight: 900 }}>Product <span className="gradient-text">Management</span></h1>
                    <p className="text-dim" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Manage products displayed on your public storefront.</p>
                </div>
                <button
                    onClick={() => { setEditingProduct(null); setFormData({ name: '', description: '', price: '', category: 'General', stock: 0, featured: false, displayOrder: 0, isActive: true }); setIsModalOpen(true); }}
                    className="btn-primary"
                    style={{ padding: '0.75rem 1.5rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 900, fontSize: '0.875rem' }}
                >
                    <Plus size={20} /> Add Product
                </button>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ flex: 1, minWidth: '280px', position: 'relative' }}>
                    <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => { setSearch(e.target.value); fetchProducts(); }}
                        className="input-field"
                        style={{ width: '100%', padding: '0.875rem 1rem 0.875rem 2.5rem', background: 'var(--surface)', borderRadius: '0.75rem', fontSize: '0.875rem' }}
                    />
                </div>
                <button
                    onClick={() => { setShowFilters(!showFilters); fetchProducts(); }}
                    className="btn-secondary"
                    style={{ padding: '0.875rem 1.25rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}
                >
                    <Filter size={16} /> Filters
                </button>
                <div style={{ display: 'flex', gap: '0.25rem', padding: '0.25rem', background: 'var(--surface)', borderRadius: '0.75rem' }}>
                    <button
                        onClick={() => setViewMode('grid')}
                        style={{
                            padding: '0.625rem 0.875rem', borderRadius: '0.5rem', border: 'none', fontWeight: 700, fontSize: '0.875rem',
                            background: viewMode === 'grid' ? 'var(--primary)' : 'transparent',
                            color: viewMode === 'grid' ? '#fff' : 'var(--text-dim)',
                            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'
                        }}
                    >
                        Grid
                    </button>
                    <button
                        onClick={() => setViewMode('list')}
                        style={{
                            padding: '0.625rem 0.875rem', borderRadius: '0.5rem', border: 'none', fontWeight: 700, fontSize: '0.875rem',
                            background: viewMode === 'list' ? 'var(--primary)' : 'transparent',
                            color: viewMode === 'list' ? '#fff' : 'var(--text-dim)',
                            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'
                        }}
                    >
                        List
                    </button>
                </div>
            </div>

            {showFilters && (
                <div className="glass" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)' }}>Category:</span>
                    <button onClick={() => { setFilterCategory(''); fetchProducts(); }} style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 600, background: !filterCategory ? 'var(--primary)' : 'var(--surface)', color: !filterCategory ? '#fff' : 'var(--text-dim)', border: '1px solid', borderColor: !filterCategory ? 'var(--primary)' : 'var(--border-glass)' }}>All</button>
                    {categories.map(cat => (
                        <button key={cat} onClick={() => { setFilterCategory(filterCategory === cat ? '' : cat); fetchProducts(); }} style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 600, background: filterCategory === cat ? 'var(--primary)' : 'var(--surface)', color: filterCategory === cat ? '#fff' : 'var(--text-dim)', border: '1px solid', borderColor: filterCategory === cat ? 'var(--primary)' : 'var(--border-glass)' }}>{cat}</button>
                    ))}
                </div>
            )}

            {viewMode === 'grid' ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem' }}>
                    {loading ? (
                        <div style={{ gridColumn: '1 / -1', display: 'flex', justifySelf: 'center', padding: '5rem' }}>
                            <Loader2 size={40} className="text-primary" style={{ animation: 'spin 1s linear infinite' }} />
                            <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                        </div>
                    ) : products.map((product) => (
                        <div key={product.id} className="glass group" style={{ overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column', borderRadius: '1rem' }}>
                            <div style={{ position: 'relative', height: '12rem', background: 'var(--surface)' }}>
                                {product.image ? (
                                    <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dim)', fontWeight: 900, letterSpacing: '0.2em' }}>NO IMAGE</div>
                                )}
                                <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                    <button onClick={() => shareProduct(product)} style={{ padding: '0.5rem', background: 'rgba(0,0,0,0.6)', borderRadius: '0.5rem', cursor: 'pointer', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }} title="Share Product"><Share2 size={16} /></button>
                                    <button onClick={() => { setEditingProduct(product); setFormData(product); setIsModalOpen(true); }} style={{ padding: '0.5rem', background: 'rgba(0,0,0,0.6)', borderRadius: '0.5rem', cursor: 'pointer', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }} title="Edit Product"><Edit2 size={16} /></button>
                                    <button onClick={() => deleteProduct(product.id)} style={{ padding: '0.5rem', background: 'rgba(0,0,0,0.6)', borderRadius: '0.5rem', cursor: 'pointer', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }} title="Delete Product"><Trash2 size={16} /></button>
                                </div>
                                {product.featured && (
                                    <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                                        <span style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.65rem', fontWeight: 900, background: 'rgba(108, 117, 125, 0.2)', color: 'var(--secondary)', textTransform: 'uppercase', border: '1px solid rgba(108, 117, 125, 0.3)' }}>Featured</span>
                                    </div>
                                )}
                            </div>
                            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', gap: '0.5rem' }}>
                                    <h3 style={{ fontWeight: 700, fontSize: '0.9375rem', margin: 0 }}>{product.name}</h3>
                                    <span style={{ color: 'var(--primary)', fontWeight: 900, fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'rgba(108, 99, 255, 0.1)', borderRadius: '9999px', whiteSpace: 'nowrap' }}>₹{Number(product.price).toLocaleString()}</span>
                                </div>
                                <p className="text-dim" style={{ fontSize: '0.625rem', lineHeight: 1.6, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{product.description}</p>
                                <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>{product.category || 'General'}</span>
                                    <span style={{ fontSize: '0.65rem', color: product.stock > 0 ? '#28a745' : '#dc3545', fontWeight: 700, textTransform: 'uppercase' }}>{product.stock > 0 ? `Stock: ${product.stock}` : 'Out of stock'}</span>
                                </div>
                                <div style={{ marginTop: '0.5rem', fontSize: '0.6rem', color: 'var(--text-dim)' }}>
                                    {product.assetId ? `Asset ID: ${product.assetId}` : 'No Asset ID'} | Display Order: {product.displayOrder} | Status: {product.isActive ? 'Active' : 'Inactive'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {loading ? (
                        <div style={{ display: 'flex', justifySelf: 'center', padding: '5rem' }}>
                            <Loader2 size={40} className="text-primary" style={{ animation: 'spin 1s linear infinite' }} />
                            <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                        </div>
                    ) : products.map((product) => (
                        <div key={product.id} className="glass" style={{ padding: '1.25rem', borderRadius: '1rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                            <div style={{ flex: '0 0 10rem', height: '10rem', position: 'relative', borderRadius: '0.75rem', overflow: 'hidden', background: 'var(--surface)', minWidth: '8rem' }}>
                                {product.image ? (
                                    <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dim)', fontWeight: 900, letterSpacing: '0.2em' }}>NO IMAGE</div>
                                )}
                                {product.featured && (
                                    <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}>
                                        <span style={{ padding: '0.25rem 0.5rem', borderRadius: '9999px', fontSize: '0.6rem', fontWeight: 900, background: 'rgba(108, 117, 125, 0.9)', color: '#fff', textTransform: 'uppercase' }}>Featured</span>
                                    </div>
                                )}
                            </div>
                            <div style={{ flex: 1, minWidth: '200px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>{product.name}</h3>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em' }}>{product.category || 'General'}</span>
                                        {product.assetId && <span style={{ fontSize: '0.65rem', color: 'var(--primary)', fontWeight: 700, marginLeft: '0.5rem' }}>Asset: {product.assetId}</span>}
                                    </div>
                                    <span style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--primary)', whiteSpace: 'nowrap' }}>₹{Number(product.price).toLocaleString()}</span>
                                </div>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', lineHeight: 1.7, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{product.description}</p>
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.75rem', color: product.stock > 0 ? '#28a745' : '#dc3545', fontWeight: 700, textTransform: 'uppercase' }}>
                                        {product.stock > 0 ? `Stock: ${product.stock}` : 'Out of stock'}
                                    </span>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                                        Order: {product.displayOrder} | {product.isActive ? 'Active' : 'Inactive'}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                                    <button onClick={() => { setEditingProduct(product); setFormData(product); setIsModalOpen(true); }} style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', background: 'var(--primary)', color: '#fff', border: 'none', fontSize: '0.875rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Edit2 size={14} /> Edit</button>
                                    <button onClick={() => deleteProduct(product.id)} style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', background: 'transparent', color: 'var(--secondary)', border: '1px solid var(--border-glass)', fontSize: '0.875rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Trash2 size={14} /> Delete</button>
                                    <button onClick={() => shareProduct(product)} style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', background: 'transparent', color: 'var(--text-dim)', border: '1px solid var(--border-glass)', fontSize: '0.875rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Share2 size={14} /> Share</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '1.5rem', paddingTop: '4rem', overflowY: 'auto' }}>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(12px)', zIndex: -1 }} />
                        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="glass-modal" style={{ width: '100%', maxWidth: '32rem', padding: '2rem', position: 'relative', zIndex: 10, maxHeight: 'calc(100vh - 6rem)', overflowY: 'auto', borderRadius: '1rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.5rem', margin: '0 0 1.5rem 0' }}>{editingProduct ? 'Edit' : 'Add'} <span className="gradient-text">Product</span></h3>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Product Name</label>
                                    <input required className="input-field" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', fontSize: '0.875rem' }} value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                </div>
                                <div>
                                    <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Asset / Catalogue ID</label>
                                    <input className="input-field" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', fontSize: '0.875rem' }} placeholder="e.g. KZ-ASSET-001" value={formData.assetId} onChange={e => setFormData({ ...formData, assetId: e.target.value })} />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Price (INR)</label>
                                        <input required type="number" step="0.01" className="input-field" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 900, color: 'var(--primary)' }} value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} />
                                    </div>
                                    <div>
                                        <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Category</label>
                                        <input required className="input-field" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', fontSize: '0.875rem' }} value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} />
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Stock</label>
                                        <input required type="number" className="input-field" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 900, color: 'var(--primary)' }} value={formData.stock} onChange={e => setFormData({ ...formData, stock: parseInt(e.target.value) || 0 })} />
                                    </div>
                                    <div>
                                        <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Display Order</label>
                                        <input required type="number" className="input-field" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 900, color: 'var(--primary)' }} value={formData.displayOrder} onChange={e => setFormData({ ...formData, displayOrder: parseInt(e.target.value) || 0 })} />
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem' }}>
                                        <input type="checkbox" id="featured" checked={formData.featured} onChange={e => setFormData({ ...formData, featured: e.target.checked })} style={{ width: '1.25rem', height: '1.25rem', accentColor: 'var(--primary)' }} />
                                        <label htmlFor="featured" style={{ fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>Featured</label>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem' }}>
                                        <input type="checkbox" id="isActive" checked={formData.isActive} onChange={e => setFormData({ ...formData, isActive: e.target.checked })} style={{ width: '1.25rem', height: '1.25rem', accentColor: 'var(--primary)' }} />
                                        <label htmlFor="isActive" style={{ fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>Active</label>
                                    </div>
                                </div>
                                <div>
                                    <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Description</label>
                                    <textarea rows={3} className="input-field" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', fontSize: '0.875rem', resize: 'none', lineHeight: 1.6 }} value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
                                </div>
                                <div>
                                    <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Image</label>
                                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                                        <input type="file" onChange={e => setImage(e.target.files[0])} style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', zIndex: 10 }} />
                                        <div style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}><Camera size={16} /> {image ? image.name.slice(0, 10) + '...' : 'Upload'}</div>
                                    </div>
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
