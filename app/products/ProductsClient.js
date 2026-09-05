'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import { ShoppingCart, Star, Search, Filter, X, ChevronLeft, ChevronRight, Loader2, Grid, List, SlidersHorizontal, ChevronRight as Breadcrumb, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '../../components/ThemeProvider';

export default function ProductsClient({ initialData }) {
    const { theme } = useTheme();
    const [products, setProducts] = useState(() => initialData.products);
    const [categories, setCategories] = useState(() => initialData.categories);
    const [total, setTotal] = useState(() => initialData.total);
    const [limit, setLimit] = useState(() => initialData.limit);
    const [offset, setOffset] = useState(() => initialData.offset);
    const [loading, setLoading] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [expandedProductId, setExpandedProductId] = useState(null);
    const [formData, setFormData] = useState({ customerName: '', email: '', phone: '', notes: '' });

    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sort, setSort] = useState('displayOrder');
    const [order, setOrder] = useState('asc');
    const [viewMode, setViewMode] = useState('grid');
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    const totalPages = Math.ceil(total / limit);
    const currentPage = Math.floor(offset / limit) + 1;
    const searchRef = useRef(search);
    const categoryRef = useRef(selectedCategory);
    const sortRef = useRef(sort);
    const orderRef = useRef(order);
    const limitRef = useRef(limit);

    useEffect(() => { searchRef.current = search; }, [search]);
    useEffect(() => { categoryRef.current = selectedCategory; }, [selectedCategory]);
    useEffect(() => { sortRef.current = sort; }, [sort]);
    useEffect(() => { orderRef.current = order; }, [order]);
    useEffect(() => { limitRef.current = limit; }, [limit]);

    const fetchProducts = async () => {
        setLoading(true);
        const params = new URLSearchParams();
        if (searchRef.current) params.set('search', searchRef.current);
        if (categoryRef.current) params.set('category', categoryRef.current);
        params.set('sort', sortRef.current);
        params.set('order', orderRef.current);
        params.set('limit', limitRef.current.toString());
        params.set('offset', '0');

        try {
            const res = await fetch(`/api/admin/products?${params.toString()}`);
            const data = await res.json();
            setProducts(data.products || []);
            setTotal(data.total || 0);
            setOffset(0);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [search, selectedCategory, sort, order, limit]);

    const handlePageChange = (newOffset) => {
        setOffset(newOffset);
        const params = new URLSearchParams();
        if (searchRef.current) params.set('search', searchRef.current);
        if (categoryRef.current) params.set('category', categoryRef.current);
        params.set('sort', sortRef.current);
        params.set('order', orderRef.current);
        params.set('limit', limitRef.current.toString());
        params.set('offset', newOffset.toString());

        fetch(`/api/admin/products?${params.toString()}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products || []);
                setOffset(newOffset);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
    };

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

    const toggleExpand = (productId) => {
        setExpandedProductId(expandedProductId === productId ? null : productId);
        setFormData({ customerName: '', email: '', phone: '', notes: '' });
    };

    const clearFilters = () => {
        setSearch('');
        setSelectedCategory('');
        setSort('displayOrder');
        setOrder('asc');
    };

    const hasActiveFilters = search || selectedCategory;

    return (
        <div className="animate-fade-in" style={{ minHeight: '100vh' }}>
            {/* Breadcrumb */}
            <div className="container" style={{ paddingTop: '1rem', paddingBottom: '0.5rem' }}>
                <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-dim)' }}>
                    <Link href="/" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Home</Link>
                    <Breadcrumb size={14} />
                    <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Products</span>
                </nav>
            </div>

            {/* Header */}
            <div className="container" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                        <h1 className="title-lg mb-2" style={{ margin: 0, fontWeight: 900 }}>Product <span className="gradient-text">Catalogue</span></h1>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                            {total > 0 ? `${total} product${total !== 1 ? 's' : ''} found` : 'Browse our complete range'}
                        </p>
                    </div>
                </div>

                {/* Toolbar */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', padding: '1rem', background: 'var(--surface)', borderRadius: '0.75rem', border: '1px solid var(--border-glass)' }}>
                    <div style={{ flex: 1, minWidth: '280px', position: 'relative' }}>
                        <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="input-field"
                            style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', background: 'var(--surface)', borderRadius: '0.5rem', fontSize: '0.875rem' }}
                        />
                    </div>

                    <button
                        onClick={() => setShowMobileFilters(!showMobileFilters)}
                        className="btn-secondary"
                        style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}
                    >
                        <SlidersHorizontal size={16} /> Filters
                    </button>

                    <select
                        value={sort}
                        onChange={(e) => {
                            const val = e.target.value;
                            if (val === 'price_asc') { setSort('price'); setOrder('asc'); }
                            else if (val === 'price_desc') { setSort('price'); setOrder('desc'); }
                            else if (val === 'name') { setSort('name'); setOrder('asc'); }
                            else if (val === 'createdAt') { setSort('createdAt'); setOrder('desc'); }
                            else { setSort('displayOrder'); setOrder('asc'); }
                        }}
                        className="input-field"
                        style={{ padding: '0.75rem 1rem', background: 'var(--surface)', borderRadius: '0.5rem', fontSize: '0.875rem', minWidth: '160px' }}
                    >
                        <option value="displayOrder">Sort by: Featured</option>
                        <option value="price_asc">Price: Low to High</option>
                        <option value="price_desc">Price: High to Low</option>
                        <option value="name">Name: A-Z</option>
                        <option value="createdAt">Newest First</option>
                    </select>

                    <div style={{ display: 'flex', gap: '0.25rem', padding: '0.25rem', background: 'var(--surface)', borderRadius: '0.5rem' }}>
                        <button
                            onClick={() => setViewMode('grid')}
                            style={{
                                padding: '0.5rem 0.75rem', borderRadius: '0.375rem', border: 'none',
                                background: viewMode === 'grid' ? 'var(--primary)' : 'transparent',
                                color: viewMode === 'grid' ? '#fff' : 'var(--text-dim)',
                                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem'
                            }}
                        >
                            <Grid size={16} /> Grid
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            style={{
                                padding: '0.5rem 0.75rem', borderRadius: '0.375rem', border: 'none',
                                background: viewMode === 'list' ? 'var(--primary)' : 'transparent',
                                color: viewMode === 'list' ? '#fff' : 'var(--text-dim)',
                                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem'
                            }}
                        >
                            <List size={16} /> List
                        </button>
                    </div>
                </div>

                {/* Active Filters */}
                {hasActiveFilters && (
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 600 }}>Active Filters:</span>
                        {search && (
                            <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(108, 99, 255, 0.1)', borderRadius: '9999px', fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                Search: {search}
                                <X size={12} style={{ cursor: 'pointer' }} onClick={() => setSearch('')} />
                            </span>
                        )}
                        {selectedCategory && (
                            <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(108, 99, 255, 0.1)', borderRadius: '9999px', fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                Category: {selectedCategory}
                                <X size={12} style={{ cursor: 'pointer' }} onClick={() => setSelectedCategory('')} />
                            </span>
                        )}
                        <button onClick={clearFilters} style={{ padding: '0.25rem 0.75rem', background: 'transparent', border: '1px solid var(--border-glass)', borderRadius: '9999px', fontSize: '0.75rem', color: 'var(--text-dim)', cursor: 'pointer', fontWeight: 600 }}>
                            Clear All
                        </button>
                    </div>
                )}
            </div>

            {/* Main Layout: Sidebar + Products */}
            <div className="container" style={{ display: 'flex', gap: '2rem', paddingBottom: '4rem' }}>
                {/* Desktop Sidebar */}
                <aside style={{ width: '16rem', flexShrink: 0, display: 'none' }} className="hidden lg:block">
                    <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem', position: 'sticky', top: '5rem', maxHeight: 'calc(100vh - 6rem)', overflowY: 'auto' }}>
                        <h3 style={{ fontSize: '0.875rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '1rem' }}>Categories</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <button
                                onClick={() => setSelectedCategory('')}
                                style={{
                                    padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 600,
                                    background: !selectedCategory ? 'var(--primary)' : 'transparent',
                                    color: !selectedCategory ? '#fff' : 'var(--text-dim)',
                                    border: '1px solid', borderColor: !selectedCategory ? 'var(--primary)' : 'var(--border-glass)',
                                    cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s'
                                }}
                            >
                                All Products
                            </button>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(selectedCategory === cat ? '' : cat)}
                                    style={{
                                        padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 600,
                                        background: selectedCategory === cat ? 'var(--primary)' : 'transparent',
                                        color: selectedCategory === cat ? '#fff' : 'var(--text-dim)',
                                        border: '1px solid', borderColor: selectedCategory === cat ? 'var(--primary)' : 'var(--border-glass)',
                                        cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s'
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div style={{ height: '1px', background: 'var(--border-glass)', margin: '1.5rem 0' }} />

                        <h3 style={{ fontSize: '0.875rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '1rem' }}>Quick Links</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <Link href="/" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-dim)', textDecoration: 'none', border: '1px solid var(--border-glass)', transition: 'all 0.2s' }}>
                                Home
                            </Link>
                            <Link href="/track" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-dim)', textDecoration: 'none', border: '1px solid var(--border-glass)', transition: 'all 0.2s' }}>
                                Track Ticket
                            </Link>
                            <Link href="/raise-ticket" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-dim)', textDecoration: 'none', border: '1px solid var(--border-glass)', transition: 'all 0.2s' }}>
                                Raise Ticket
                            </Link>
                        </div>
                    </div>
                </aside>

                {/* Mobile Filters Overlay */}
                <AnimatePresence>
                    {showMobileFilters && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 999 }}
                            onClick={() => setShowMobileFilters(false)}
                        >
                            <motion.div
                                initial={{ x: -300 }}
                                animate={{ x: 0 }}
                                exit={{ x: -300 }}
                                style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80%', maxWidth: '20rem', background: 'var(--bg-dark)', padding: '1.5rem', overflowY: 'auto' }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: 900 }}>Filters</h3>
                                    <button onClick={() => setShowMobileFilters(false)} style={{ padding: '0.5rem', background: 'var(--surface)', borderRadius: '0.5rem', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}>
                                        <X size={20} />
                                    </button>
                                </div>
                                <h4 style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '0.75rem' }}>Categories</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                                    <button onClick={() => { setSelectedCategory(''); setShowMobileFilters(false); }} style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 600, background: !selectedCategory ? 'var(--primary)' : 'transparent', color: !selectedCategory ? '#fff' : 'var(--text-dim)', border: '1px solid', borderColor: !selectedCategory ? 'var(--primary)' : 'var(--border-glass)', cursor: 'pointer', textAlign: 'left' }}>All Products</button>
                                    {categories.map(cat => (
                                        <button key={cat} onClick={() => { setSelectedCategory(selectedCategory === cat ? '' : cat); setShowMobileFilters(false); }} style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 600, background: selectedCategory === cat ? 'var(--primary)' : 'transparent', color: selectedCategory === cat ? '#fff' : 'var(--text-dim)', border: '1px solid', borderColor: selectedCategory === cat ? 'var(--primary)' : 'var(--border-glass)', cursor: 'pointer', textAlign: 'left' }}>{cat}</button>
                                    ))}
                                </div>
                                <button onClick={clearFilters} style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', border: '1px solid var(--border-glass)', background: 'transparent', color: 'var(--text-main)', fontWeight: 900, cursor: 'pointer', fontSize: '0.875rem' }}>
                                    Clear All Filters
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Products Area */}
                <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Results count */}
                    <div style={{ marginBottom: '1rem', fontSize: '0.875rem', color: 'var(--text-dim)' }}>
                        Showing {products.length > 0 ? offset + 1 : 0}-{Math.min(offset + limit, total)} of {total} products
                    </div>

                    {/* Products */}
                    {loading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', padding: '5rem' }}>
                            <Loader2 size={40} className="text-primary" style={{ animation: 'spin 1s linear infinite' }} />
                            <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                        </div>
                    ) : products.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '5rem', color: 'var(--text-dim)' }}>
                            <p style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>No products found</p>
                            <p style={{ fontSize: '0.875rem' }}>Try adjusting your search or filters.</p>
                            {hasActiveFilters && (
                                <button onClick={clearFilters} style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', borderRadius: '0.75rem', background: 'var(--primary)', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
                                    Clear All Filters
                                </button>
                            )}
                        </div>
                    ) : viewMode === 'grid' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" style={{ width: '100%' }}>
                            {products.map((product) => (
                                <div key={product.id} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                                    <div className="glass group product-card" style={{ overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column', borderRadius: '1rem', transition: 'all 0.3s', border: '1px solid var(--border-glass)' }}>
                                        <Link href={`/products/${product.id}`} style={{ display: 'block', position: 'relative', paddingTop: '100%', background: 'rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                                            {product.image ? (
                                                <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover', transition: 'transform 0.5s' }} />
                                            ) : (
                                                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.1)', fontWeight: 900, letterSpacing: '0.2em' }}>NO IMAGE</div>
                                            )}
                                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)', opacity: 0, transition: 'opacity 0.3s' }} className="group-hover:opacity-100" />
                                            {product.featured && (
                                                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                                                    <span style={{ padding: '0.35rem 0.75rem', borderRadius: '9999px', fontSize: '0.65rem', fontWeight: 900, background: 'rgba(108, 117, 125, 0.9)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                        <Star size={10} style={{ fill: '#fff' }} /> Featured
                                                    </span>
                                                </div>
                                            )}
                                            <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem', opacity: 0, transform: 'translateY(10px)', transition: 'all 0.3s' }} className="group-hover:opacity-100 group-hover:translate-y-0">
                                                <span style={{ padding: '0.5rem 1rem', background: 'var(--primary)', borderRadius: '0.5rem', fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>View Details</span>
                                            </div>
                                        </Link>
                                        <div style={{ padding: '1rem', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <h3 style={{ fontWeight: 700, fontSize: '0.875rem', margin: 0, lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{product.name}</h3>
                                            <p className="text-dim" style={{ fontSize: '0.75rem', lineHeight: 1.5, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{product.description}</p>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                                <span style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--primary)' }}>₹{Number(product.price).toLocaleString()}</span>
                                                <span style={{ fontSize: '0.65rem', color: product.stock > 0 ? '#28a745' : '#dc3545', fontWeight: 700, textTransform: 'uppercase' }}>
                                                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                                                </span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem', borderTop: '1px solid var(--border-glass)' }}>
                                                <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{product.category || 'General'}</span>
                                                <button
                                                    onClick={() => toggleExpand(product.id)}
                                                    style={{ padding: '0.4rem 0.75rem', borderRadius: '0.5rem', background: 'var(--primary)', color: '#fff', border: 'none', fontSize: '0.7rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                                                >
                                                    <ShoppingCart size={12} /> {expandedProductId === product.id ? 'Cancel' : 'Quote'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {expandedProductId === product.id && (
                                        <motion.form
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            onSubmit={(e) => handleSubmitQuote(e, product.id)}
                                            style={{ overflow: 'hidden', borderTop: '1px solid var(--border-glass)' }}
                                        >
                                            <div className="p-4 flex flex-col gap-3" style={{ background: theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)' }}>
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
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {products.map((product) => (
                                <div key={product.id} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                                    <div className="glass" style={{ padding: '1rem', borderRadius: '1rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                        <Link href={`/products/${product.id}`} style={{ flex: '0 0 12rem', height: '12rem', position: 'relative', borderRadius: '0.75rem', overflow: 'hidden', background: 'rgba(255,255,255,0.05)', minWidth: '10rem' }}>
                                            {product.image ? (
                                                <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
                                            ) : (
                                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.1)', fontWeight: 900, letterSpacing: '0.2em' }}>NO IMAGE</div>
                                            )}
                                            {product.featured && (
                                                <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}>
                                                    <span style={{ padding: '0.25rem 0.5rem', borderRadius: '9999px', fontSize: '0.6rem', fontWeight: 900, background: 'rgba(108, 117, 125, 0.9)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Featured</span>
                                                </div>
                                            )}
                                        </Link>
                                        <div style={{ flex: 1, minWidth: '200px', display: 'flex', flexDirection: 'column' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                                <div>
                                                    <Link href={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>{product.name}</h3>
                                                    </Link>
                                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em' }}>{product.category || 'General'}</span>
                                                </div>
                                                <span style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--primary)', whiteSpace: 'nowrap' }}>₹{Number(product.price).toLocaleString()}</span>
                                            </div>
                                            <p className="text-dim" style={{ fontSize: '0.875rem', lineHeight: 1.7, margin: 0, marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{product.description}</p>
                                            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', flexWrap: 'wrap', alignItems: 'center' }}>
                                                <span style={{ fontSize: '0.75rem', color: product.stock > 0 ? '#28a745' : '#dc3545', fontWeight: 700, textTransform: 'uppercase' }}>
                                                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                                                </span>
                                                <button
                                                    onClick={() => toggleExpand(product.id)}
                                                    style={{ padding: '0.625rem 1.25rem', borderRadius: '0.5rem', background: 'var(--primary)', color: '#fff', border: 'none', fontSize: '0.875rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                                >
                                                    <ShoppingCart size={16} /> {expandedProductId === product.id ? 'Cancel' : 'Request Quote'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {expandedProductId === product.id && (
                                        <motion.form
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            onSubmit={(e) => handleSubmitQuote(e, product.id)}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div className="p-4 flex flex-col gap-3" style={{ background: theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)', borderTop: '1px solid var(--border-glass)' }}>
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
                                </div>
                            ))}
                </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', padding: '2rem 0' }}>
                            <button
                                onClick={() => handlePageChange(Math.max(0, offset - limit))}
                                disabled={currentPage === 1}
                                style={{
                                    padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid var(--border-glass)',
                                    background: 'var(--surface)', color: 'var(--text-main)', cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                                    opacity: currentPage === 1 ? 0.5 : 1, display: 'flex', alignItems: 'center', gap: '0.25rem'
                                }}
                            >
                                <ChevronLeft size={18} /> Previous
                            </button>
                            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-dim)', padding: '0 1rem' }}>
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                onClick={() => handlePageChange(offset + limit)}
                                disabled={currentPage === totalPages}
                                style={{
                                    padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid var(--border-glass)',
                                    background: 'var(--surface)', color: 'var(--text-main)', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                                    opacity: currentPage === totalPages ? 0.5 : 1, display: 'flex', alignItems: 'center', gap: '0.25rem'
                                }}
                            >
                                Next <ChevronRight size={18} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
