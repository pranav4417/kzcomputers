'use client';

import React, { useState, useEffect } from 'react';
import {
    Plus, Hammer, Edit2, Trash2, Camera, Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function ServiceManagement() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingService, setEditingService] = useState(null);
    const [formData, setFormData] = useState({ name: '', description: '' });
    const [image, setImage] = useState(null);
    const [saving, setSaving] = useState(false);

    useEffect(() => { fetchServices(); }, []);

    const fetchServices = async () => {
        setLoading(true);
        const res = await fetch('/api/admin/services');
        const data = await res.json();
        setServices(data);
        setLoading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);

        const body = new FormData();
        body.append('name', formData.name);
        body.append('description', formData.description);
        if (image) body.append('image', image);

        try {
            const url = editingService ? `/api/admin/services/${editingService.id}` : '/api/admin/services';
            const method = editingService ? 'PATCH' : 'POST';
            const res = await fetch(url, { method, body });
            if (res.ok) {
                fetchServices();
                setIsModalOpen(false);
                setEditingService(null);
                setFormData({ name: '', description: '' });
                setImage(null);
            }
        } catch (err) {
            alert('Failed to save service');
        } finally {
            setSaving(false);
        }
    };

    const deleteService = async (id) => {
        if (!confirm('Are you sure?')) return;
        await fetch(`/api/admin/services/${id}`, { method: 'DELETE' });
        fetchServices();
    };

    return (
        <div className="space-y-10 animate-fade-in">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-black mb-2">Service <span className="gradient-text">Catalogue</span></h1>
                    <p className="text-text-dim text-sm">Define and update the high-level services you offer.</p>
                </div>
                <button
                    onClick={() => { setEditingService(null); setFormData({ name: '', description: '' }); setIsModalOpen(true); }}
                    className="btn-primary flex items-center gap-2"
                >
                    <Plus className="w-5 h-5" /> Add Service
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {loading ? (
                    <div className="col-span-full flex justify-center py-20"><Loader2 className="w-10 h-10 animate-spin text-primary" /></div>
                ) : services.map((service) => (
                    <div key={service.id} className="glass p-8 flex flex-col gap-6 group">
                        <div className="flex justify-between items-start">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                                <Hammer className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => { setEditingService(service); setFormData(service); setIsModalOpen(true); }} className="p-2 hover:bg-white/5 rounded-lg text-text-dim hover:text-white transition-all"><Edit2 className="w-4 h-4" /></button>
                                <button onClick={() => deleteService(service.id)} className="p-2 hover:bg-white/5 rounded-lg text-text-dim hover:text-secondary transition-all"><Trash2 className="w-4 h-4" /></button>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                            <p className="text-xs text-text-dim leading-relaxed">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal - Similar to Product Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="glass max-w-lg w-full p-10 relative">
                            <h3 className="text-2xl font-black mb-6">{editingService ? 'Edit' : 'Add'} <span className="gradient-text">Service</span></h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="text-[10px] uppercase font-bold text-text-dim tracking-widest mb-2 block">Service Title</label>
                                    <input required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-primary outline-none transition-all" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase font-bold text-text-dim tracking-widest mb-2 block">Description</label>
                                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-primary outline-none transition-all resize-none text-sm" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
                                </div>
                                <div className="flex gap-4">
                                    <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-4 glass font-bold">Cancel</button>
                                    <button type="submit" disabled={saving} className="flex-1 btn-primary">{saving ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'Save Service'}</button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
