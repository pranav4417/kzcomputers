'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Plus, Edit2, Trash2, Loader2, X, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SliderManagement() {
    const [sliders, setSliders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState(null);
    const [editingSlider, setEditingSlider] = useState(null);
    const [formData, setFormData] = useState({ title: '', subtitle: '', description: '', link: '', buttonText: 'Learn More', displayOrder: 0, isActive: true, startDate: '', endDate: '' });
    const [image, setImage] = useState(null);
    const [saving, setSaving] = useState(false);

    const fetchSliders = useCallback(async () => {
        setLoading(true);
        const res = await fetch('/api/admin/sliders');
        const data = await res.json();
        setSliders(data.sliders || []);
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchSliders();
    }, [fetchSliders]);

    const startCreate = () => {
        setEditingSlider(null);
        setFormData({ title: '', subtitle: '', description: '', link: '', buttonText: 'Learn More', displayOrder: 0, isActive: true, startDate: '', endDate: '' });
        setImage(null);
        setExpandedId('new');
    };

    const startEdit = (slider) => {
        setEditingSlider(slider);
        setFormData({ title: slider.title || '', subtitle: slider.subtitle || '', description: slider.description || '', link: slider.link || '', buttonText: slider.buttonText || 'Learn More', displayOrder: slider.displayOrder || 0, isActive: slider.isActive !== false, startDate: slider.startDate ? new Date(slider.startDate).toISOString().split('T')[0] : '', endDate: slider.endDate ? new Date(slider.endDate).toISOString().split('T')[0] : '' });
        setImage(null);
        setExpandedId(slider.id);
    };

    const cancel = () => {
        setExpandedId(null);
        setEditingSlider(null);
        setFormData({ title: '', subtitle: '', description: '', link: '', buttonText: 'Learn More', displayOrder: 0, isActive: true, startDate: '', endDate: '' });
        setImage(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);

        const body = new FormData();
        body.append('title', formData.title);
        body.append('subtitle', formData.subtitle);
        body.append('description', formData.description);
        body.append('link', formData.link);
        body.append('buttonText', formData.buttonText);
        body.append('displayOrder', formData.displayOrder.toString());
        body.append('isActive', formData.isActive.toString());
        body.append('startDate', formData.startDate);
        body.append('endDate', formData.endDate);
        if (image) body.append('image', image);

        try {
            const url = editingSlider ? `/api/admin/sliders/${editingSlider.id}` : '/api/admin/sliders';
            const method = editingSlider ? 'PATCH' : 'POST';

            const res = await fetch(url, { method, body });
            if (res.ok) {
                fetchSliders();
                cancel();
            } else {
                const err = await res.json();
                alert(err.error || 'Failed to save slider');
            }
        } catch (err) {
            alert('Failed to save slider');
        } finally {
            setSaving(false);
        }
    };

    const deleteSlider = async (id) => {
        if (!confirm('Delete this slider?')) return;
        await fetch(`/api/admin/sliders/${id}`, { method: 'DELETE' });
        if (expandedId === id) cancel();
        fetchSliders();
    };

    return (
        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                    <h1 className="title-lg mb-2" style={{ margin: 0, fontWeight: 900 }}>Slider <span className="gradient-text">Management</span></h1>
                    <p className="text-dim" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Manage homepage sliders and promotional banners.</p>
                </div>
                {expandedId !== 'new' && (
                    <button onClick={startCreate} className="btn-primary" style={{ padding: '0.75rem 1.5rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 900, fontSize: '0.875rem' }}>
                        <Plus size={20} /> Add Slider
                    </button>
                )}
            </div>

            {/* Inline create form */}
            <AnimatePresence>
                {expandedId === 'new' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                        <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-glass)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, margin: 0 }}>Add <span className="gradient-text">Slider</span></h3>
                                <button onClick={cancel} style={{ padding: '0.5rem', borderRadius: '50%', background: 'var(--surface)', color: 'var(--text-main)', border: '1px solid var(--border-glass)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <X size={20} />
                                </button>
                            </div>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Title</label>
                                        <input className="input-field" style={{ width: '100%', padding: '0.75rem', background: 'var(--surface)', borderRadius: '0.75rem', fontSize: '0.875rem' }} value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
                                    </div>
                                    <div>
                                        <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Subtitle</label>
                                        <input className="input-field" style={{ width: '100%', padding: '0.75rem', background: 'var(--surface)', borderRadius: '0.75rem', fontSize: '0.875rem' }} value={formData.subtitle} onChange={e => setFormData({ ...formData, subtitle: e.target.value })} />
                                    </div>
                                </div>
                                <div>
                                    <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Description</label>
                                    <textarea rows={3} className="input-field" style={{ width: '100%', padding: '0.75rem', background: 'var(--surface)', borderRadius: '0.75rem', fontSize: '0.875rem', resize: 'none' }} value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Link URL</label>
                                        <input className="input-field" style={{ width: '100%', padding: '0.75rem', background: 'var(--surface)', borderRadius: '0.75rem', fontSize: '0.875rem' }} placeholder="/products" value={formData.link} onChange={e => setFormData({ ...formData, link: e.target.value })} />
                                    </div>
                                    <div>
                                        <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Button Text</label>
                                        <input className="input-field" style={{ width: '100%', padding: '0.75rem', background: 'var(--surface)', borderRadius: '0.75rem', fontSize: '0.875rem' }} value={formData.buttonText} onChange={e => setFormData({ ...formData, buttonText: e.target.value })} />
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Display Order</label>
                                        <input type="number" className="input-field" style={{ width: '100%', padding: '0.75rem', background: 'var(--surface)', borderRadius: '0.75rem', fontSize: '0.875rem' }} value={formData.displayOrder} onChange={e => setFormData({ ...formData, displayOrder: parseInt(e.target.value) || 0 })} />
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: 'var(--surface)', borderRadius: '0.75rem', marginTop: '1.35rem' }}>
                                        <input type="checkbox" id="isActive" checked={formData.isActive} onChange={e => setFormData({ ...formData, isActive: e.target.checked })} style={{ width: '1.25rem', height: '1.25rem', accentColor: 'var(--primary)' }} />
                                        <label htmlFor="isActive" style={{ fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>Active</label>
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Start Date</label>
                                        <input type="date" className="input-field" style={{ width: '100%', padding: '0.75rem', background: 'var(--surface)', borderRadius: '0.75rem', fontSize: '0.875rem' }} value={formData.startDate} onChange={e => setFormData({ ...formData, startDate: e.target.value })} />
                                    </div>
                                    <div>
                                        <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>End Date</label>
                                        <input type="date" className="input-field" style={{ width: '100%', padding: '0.75rem', background: 'var(--surface)', borderRadius: '0.75rem', fontSize: '0.875rem' }} value={formData.endDate} onChange={e => setFormData({ ...formData, endDate: e.target.value })} />
                                    </div>
                                </div>
                                <div>
                                    <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Image</label>
                                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                                        <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', zIndex: 10 }} />
                                        <div style={{ width: '100%', padding: '0.75rem', background: 'var(--surface)', border: '1px solid var(--border-glass)', borderRadius: '0.75rem', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
                                            <ImageIcon size={16} /> {image ? image.name : 'Upload slider image'}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                                    <button type="button" onClick={cancel} style={{ flex: 1, padding: '0.75rem', border: '1px solid var(--border-glass)', borderRadius: '0.75rem', fontWeight: 900, fontSize: '0.875rem', background: 'var(--surface)', color: 'var(--text-dim)', cursor: 'pointer' }}>Cancel</button>
                                    <button type="submit" disabled={saving} className="btn-primary" style={{ flex: 1, padding: '0.75rem', borderRadius: '0.75rem', fontWeight: 900, fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                        {saving ? <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} /> : 'Save Slider'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
                {loading ? (
                    <div style={{ gridColumn: '1 / -1', display: 'flex', justifySelf: 'center', padding: '5rem' }}>
                        <Loader2 size={40} className="text-primary" style={{ animation: 'spin 1s linear infinite' }} />
                        <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                    </div>
                ) : sliders.map((slider) => {
                    const isExpanded = expandedId === slider.id;
                    return (
                        <div key={slider.id} style={{ background: 'var(--surface)', border: '1px solid var(--border-glass)', borderRadius: '0.75rem', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ position: 'relative', height: '14rem', background: 'var(--surface)' }}>
                                {slider.image ? (
                                    <img src={slider.image} alt={slider.title || 'Slider'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dim)', background: 'var(--surface)' }}>
                                        <ImageIcon size={40} />
                                    </div>
                                )}
                                <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                    <button onClick={() => startEdit(slider)} style={{ padding: '0.5rem', background: 'rgba(0,0,0,0.6)', borderRadius: '0.5rem', cursor: 'pointer', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="Edit Slider"><Edit2 size={16} /></button>
                                    <button onClick={() => deleteSlider(slider.id)} style={{ padding: '0.5rem', background: 'rgba(0,0,0,0.6)', borderRadius: '0.5rem', cursor: 'pointer', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="Delete Slider"><Trash2 size={16} /></button>
                                </div>
                                {slider.isActive && (
                                    <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                                        <span style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.65rem', fontWeight: 900, background: 'rgba(40, 167, 69, 0.9)', color: '#fff', textTransform: 'uppercase' }}>Active</span>
                                    </div>
                                )}
                            </div>
                            <div style={{ padding: '1.25rem', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0, color: 'var(--text-main)' }}>{slider.title || 'Untitled Slider'}</h3>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', lineHeight: 1.6, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{slider.description || slider.subtitle || 'No description'}</p>
                                <div style={{ marginTop: 'auto', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 600 }}>Order: {slider.displayOrder}</span>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{slider.link || 'No link'}</span>
                                </div>
                            </div>

                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.form initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} onSubmit={handleSubmit} style={{ overflow: 'hidden', borderTop: '1px solid var(--border-glass)' }}>
                                        <div className="p-4 flex flex-col gap-3" style={{ background: 'var(--surface)' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em' }}>Edit Slider</span>
                                                <button type="button" onClick={cancel} style={{ padding: '0.25rem 0.5rem', borderRadius: '0.5rem', background: 'transparent', color: 'var(--text-dim)', border: '1px solid var(--border-glass)', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 700 }}>Close</button>
                                            </div>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                                <input required className="input-field" style={{ padding: '0.75rem', background: 'var(--surface)', borderRadius: '0.75rem', fontSize: '0.875rem' }} placeholder="Title" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
                                                <input className="input-field" style={{ padding: '0.75rem', background: 'var(--surface)', borderRadius: '0.75rem', fontSize: '0.875rem' }} placeholder="Subtitle" value={formData.subtitle} onChange={e => setFormData({ ...formData, subtitle: e.target.value })} />
                                            </div>
                                            <textarea rows={3} className="input-field" style={{ padding: '0.75rem', background: 'var(--surface)', borderRadius: '0.75rem', fontSize: '0.875rem', resize: 'none' }} placeholder="Description" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                                <input className="input-field" style={{ padding: '0.75rem', background: 'var(--surface)', borderRadius: '0.75rem', fontSize: '0.875rem' }} placeholder="/products" value={formData.link} onChange={e => setFormData({ ...formData, link: e.target.value })} />
                                                <input className="input-field" style={{ padding: '0.75rem', background: 'var(--surface)', borderRadius: '0.75rem', fontSize: '0.875rem' }} placeholder="Button Text" value={formData.buttonText} onChange={e => setFormData({ ...formData, buttonText: e.target.value })} />
                                            </div>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                                <input type="number" className="input-field" style={{ padding: '0.75rem', background: 'var(--surface)', borderRadius: '0.75rem', fontSize: '0.875rem' }} value={formData.displayOrder} onChange={e => setFormData({ ...formData, displayOrder: parseInt(e.target.value) || 0 })} />
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: 'var(--surface)', borderRadius: '0.75rem' }}>
                                                    <input type="checkbox" id="isActive" checked={formData.isActive} onChange={e => setFormData({ ...formData, isActive: e.target.checked })} style={{ width: '1.25rem', height: '1.25rem', accentColor: 'var(--primary)' }} />
                                                    <label htmlFor="isActive" style={{ fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>Active</label>
                                                </div>
                                            </div>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                                <input type="date" className="input-field" style={{ padding: '0.75rem', background: 'var(--surface)', borderRadius: '0.75rem', fontSize: '0.875rem' }} value={formData.startDate} onChange={e => setFormData({ ...formData, startDate: e.target.value })} />
                                                <input type="date" className="input-field" style={{ padding: '0.75rem', background: 'var(--surface)', borderRadius: '0.75rem', fontSize: '0.875rem' }} value={formData.endDate} onChange={e => setFormData({ ...formData, endDate: e.target.value })} />
                                            </div>
                                            <div>
                                                <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 900, color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>Image</label>
                                                <div style={{ position: 'relative', overflow: 'hidden' }}>
                                                    <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', zIndex: 10 }} />
                                                    <div style={{ width: '100%', padding: '0.75rem', background: 'var(--surface)', border: '1px solid var(--border-glass)', borderRadius: '0.75rem', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
                                                        <ImageIcon size={16} /> {image ? image.name : 'Upload slider image'}
                                                    </div>
                                                </div>
                                            </div>
                                            <button disabled={saving} type="submit" className="btn-primary" style={{ padding: '0.75rem', borderRadius: '0.75rem', fontWeight: 900, fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                                {saving ? <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} /> : 'Save Slider'}
                                            </button>
                                        </div>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
