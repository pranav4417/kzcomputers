'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, User, Lock, Loader2, Cpu, Activity } from 'lucide-react';
import Link from 'next/link';

export default function AdminLogin() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/auth/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success) {
                window.location.href = data.role === 'admin' ? '/admin' : '/agent';
            } else {
                alert(data.error);
            }
        } catch (err) {
            alert('Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '1.5rem' }}>
            {/* Background elements */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: 'var(--secondary-glow)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative" style={{ maxWidth: '64rem', zIndex: 10 }}>

                {/* Left Branding Panel */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-center gap-6"
                    style={{ padding: '2rem' }}
                >
                    <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem', textDecoration: 'none' }}>
                        <img
                            src="/logo/logo horizontal.png"
                            alt="Suraksha Logo"
                            style={{ height: '65px', width: 'auto', objectFit: 'contain' }}
                        />
                    </Link>

                    <h1 style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1.1, margin: 0 }}>
                        Command<br />
                        <span className="gradient-text">Center</span>
                    </h1>
                    <p className="text-dim" style={{ fontSize: '1.125rem', lineHeight: 1.6, marginTop: '1.5rem', marginBottom: '3rem', maxWidth: '24rem' }}>
                        Secure access gateway for Suraksha administration and technical support staff.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <Cpu size={24} style={{ color: 'var(--primary)' }} />
                            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)' }}>Ops Control</span>
                        </div>
                        <div className="glass" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <Activity size={24} style={{ color: 'var(--secondary)' }} />
                            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)' }}>Live Tracking</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Login Panel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex justify-center w-full relative"
                    style={{ alignItems: 'center' }}
                >
                    <div className="glass w-full relative" style={{ maxWidth: '28rem', padding: '3rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>

                        {/* Decorative Top Bar */}
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }} />

                        <div className="flex flex-col items-center" style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.875rem', fontWeight: 900, margin: '0 0 0.5rem 0', color: '#fff' }}>Staff Login</h2>
                            <p style={{ fontSize: '0.875rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dim)', margin: 0 }}>Authentication Required</p>
                        </div>

                        <form onSubmit={handleLogin} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.1em', marginLeft: '0.25rem' }}>Username</label>
                                <div className="relative flex items-center">
                                    <div style={{ position: 'absolute', left: '1rem', display: 'flex', alignItems: 'center', pointerEvents: 'none', zIndex: 10 }}>
                                        <User size={18} style={{ color: 'rgba(255,255,255,0.4)' }} />
                                    </div>
                                    <input
                                        required
                                        className="input-field"
                                        style={{ paddingLeft: '3rem', paddingTop: '1rem', paddingBottom: '1rem', background: 'rgba(0,0,0,0.4)', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 600 }}
                                        placeholder="admin"
                                        value={formData.username}
                                        onChange={e => setFormData({ ...formData, username: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.1em', marginLeft: '0.25rem' }}>Password</label>
                                <div className="relative flex items-center">
                                    <div style={{ position: 'absolute', left: '1rem', display: 'flex', alignItems: 'center', pointerEvents: 'none', zIndex: 10 }}>
                                        <Lock size={18} style={{ color: 'rgba(255,255,255,0.4)' }} />
                                    </div>
                                    <input
                                        required
                                        type="password"
                                        className="input-field"
                                        style={{ paddingLeft: '3rem', paddingTop: '1rem', paddingBottom: '1rem', background: 'rgba(0,0,0,0.4)', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em' }}
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                                    />
                                </div>
                            </div>

                            <button
                                disabled={loading}
                                className="btn-primary w-full"
                                style={{ padding: '1rem', marginTop: '1.5rem', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}
                            >
                                {loading ? (
                                    <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                                ) : (
                                    <>Authorize Access <Shield size={16} /></>
                                )}
                            </button>
                            <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>

                            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                                <Link href="/admin/forgot-password" style={{ fontSize: '0.75rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>
                                    Forgot Password?
                                </Link>
                            </div>
                        </form>

                        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                            <p style={{ fontSize: '0.625rem', fontWeight: 'bold', color: 'var(--text-dim)', margin: 0 }}>
                                Protected by Suraksha Internal Systems • {new Date().getFullYear()}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
