'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Send, Upload, CheckCircle2 } from 'lucide-react';

export default function RaiseTicket() {
    const [formData, setFormData] = useState({
        customerName: '', email: '', phone: '', product: 'Laptop', serviceType: 'Repair', priority: 'Medium', subject: '', description: '',
    });
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [ticketInfo, setTicketInfo] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const body = new FormData();
        Object.entries(formData).forEach(([key, val]) => body.append(key, val));
        if (image) body.append('image', image);

        try {
            const res = await fetch('/api/tickets', { method: 'POST', body });
            const data = await res.json();
            if (data.success) {
                setSubmitted(true);
                setTicketInfo(data);
            } else {
                alert('Error: ' + data.error);
            }
        } catch (err) {
            alert('Failed to submit ticket');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Navbar />
                <section className="section-padding flex items-center justify-center container" style={{ flexGrow: 1, paddingTop: '8rem' }}>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass p-8 text-center" style={{ maxWidth: '32rem', width: '100%' }}>
                        <CheckCircle2 size={80} className="text-primary mx-auto mb-6" />
                        <h2 className="title-md mb-4">Ticket <span className="gradient-text">Submitted!</span></h2>
                        <p className="text-dim mb-8">
                            Your ticket number is <strong style={{ color: '#fff' }}>{ticketInfo.ticketNumber}</strong>.
                            We've sent a tracking link to your email.
                        </p>
                        <div className="flex flex-col gap-4">
                            <button onClick={() => window.location.href = `/track/${ticketInfo.token}`} className="btn-primary" style={{ padding: '1rem', width: '100%' }}>
                                Track Status Now
                            </button>
                            <button onClick={() => setSubmitted(false)} className="text-dim hover" style={{ background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = 'var(--text-dim)'}>
                                Raise Another Ticket
                            </button>
                        </div>
                    </motion.div>
                </section>
                <Footer />
            </main>
        );
    }

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <section className="section-padding container" style={{ maxWidth: '56rem', paddingTop: '8rem', flexGrow: 1 }}>
                <div className="text-center mb-12">
                    <h1 className="title-lg mb-4">Raise a <span className="gradient-text">Service Ticket</span></h1>
                    <p className="text-dim">Fill out the form below and our experts will get back to you shortly.</p>
                </div>

                <form onSubmit={handleSubmit} className="glass p-8 grid md:grid-cols-2 gap-8 animate-fade-in">
                    <div className="flex flex-col gap-2">
                        <label className="text-dim" style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Full Name</label>
                        <input required className="input-field" type="text" value={formData.customerName} onChange={e => setFormData({ ...formData, customerName: e.target.value })} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-dim" style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email Address</label>
                        <input required className="input-field" type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-dim" style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Phone Number</label>
                        <input required className="input-field" type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-dim" style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Product</label>
                        <select className="input-field" style={{ appearance: 'none', background: 'rgba(0,0,0,0.4)', backgroundImage: 'linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%)', backgroundPosition: 'calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px)', backgroundSize: '5px 5px, 5px 5px', backgroundRepeat: 'no-repeat' }} value={formData.product} onChange={e => setFormData({ ...formData, product: e.target.value })}>
                            <option value="Laptop" style={{ background: 'var(--bg-dark)' }}>Laptop</option>
                            <option value="Desktop" style={{ background: 'var(--bg-dark)' }}>Desktop</option>
                            <option value="CCTV" style={{ background: 'var(--bg-dark)' }}>CCTV</option>
                            <option value="Printer" style={{ background: 'var(--bg-dark)' }}>Printer</option>
                            <option value="Networking" style={{ background: 'var(--bg-dark)' }}>Networking</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2" style={{ gridColumn: '1 / -1' }}>
                        <label className="text-dim" style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Subject</label>
                        <input required className="input-field" type="text" placeholder="Brief summary of the issue" value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} />
                    </div>
                    <div className="flex flex-col gap-2" style={{ gridColumn: '1 / -1' }}>
                        <label className="text-dim" style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Description</label>
                        <textarea rows={4} className="input-field" placeholder="Tell us more about the problem..." style={{ resize: 'none' }} value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
                    </div>
                    <div className="flex flex-col gap-2" style={{ gridColumn: '1 / -1' }}>
                        <label className="text-dim" style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Upload Image (Optional)</label>
                        <div className="relative cursor-pointer" style={{ border: '2px dashed var(--border-glass)', borderRadius: '0.75rem', padding: '2rem', textAlign: 'center', transition: 'var(--transition)' }} onMouseOver={e => e.currentTarget.style.borderColor = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border-glass)'}>
                            <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', zIndex: 10, width: '100%' }} />
                            <div className="flex flex-col items-center gap-2">
                                <Upload size={32} className="text-dim" />
                                <span className="text-dim font-medium">{image ? image.name : 'Click or drop to upload image'}</span>
                            </div>
                        </div>
                    </div>

                    <button disabled={loading} className="btn-primary mt-4" style={{ gridColumn: '1 / -1', padding: '1.25rem', fontSize: '1.125rem' }}>
                        {loading ? 'Submitting...' : <><Send size={20} /> Submit Ticket</>}
                    </button>
                </form>
            </section>
            <Footer />
        </main>
    );
}
