'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Phone, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';

export default function AuthPage() {
    const [isRegister, setIsRegister] = useState(false);
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', password: '', code: '',
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/auth/customer/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: formData.email, password: formData.password }),
            });
            const data = await res.json();
            if (data.success) {
                window.location.href = '/dashboard';
            } else {
                alert(data.error);
            }
        } catch (err) {
            alert('Login failed');
        } finally {
            setLoading(false);
        }
    };

    const handleSendOTP = async (e) => {
        e.preventDefault();
        if (!isRegister) {
            return handleLogin(e);
        }

        setLoading(true);
        try {
            const res = await fetch('/api/auth/customer/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: formData.email }),
            });
            const data = await res.json();
            if (data.success) {
                setStep(2);
            } else {
                alert(data.error);
            }
        } catch (err) {
            alert('Failed to send OTP');
        } finally {
            setLoading(false);
        }
    };

    const handleVerify = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/auth/customer/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, isRegister }),
            });
            const data = await res.json();
            if (data.success) {
                window.location.href = '/dashboard';
            } else {
                alert(data.error);
            }
        } catch (err) {
            alert('Verification failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <section className="section-padding flex justify-center items-center h-full" style={{ flexGrow: 1, minHeight: '100vh', paddingTop: '8rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass p-8 w-full"
                    style={{ maxWidth: '28rem' }}
                >
                    <div className="text-center mb-8">
                        <h2 className="title-md">{isRegister ? 'Join' : 'Welcome'} <span className="gradient-text">KZ COMPUTERS</span></h2>
                        <p className="text-dim">{step === 1 ? 'Enter your details to proceed' : 'Enter the 6-digit code sent to your email'}</p>
                    </div>

                    <AnimatePresence mode="wait">
                        {step === 1 ? (
                            <motion.form
                                key="step1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                onSubmit={handleSendOTP}
                                className="flex flex-col gap-6"
                            >
                                {isRegister && (
                                    <div className="flex flex-col gap-2">
                                        <label className="text-dim" style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Full Name</label>
                                        <div className="relative flex items-center">
                                            <User size={20} className="absolute left-4" style={{ color: 'rgba(255,255,255,0.3)' }} />
                                            <input
                                                required className="input-field" style={{ paddingLeft: '3rem' }}
                                                placeholder="John Doe" type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                )}
                                <div className="flex flex-col gap-2">
                                    <label className="text-dim" style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email Address</label>
                                    <div className="relative flex items-center">
                                        <Mail size={20} className="absolute left-4" style={{ color: 'rgba(255,255,255,0.3)' }} />
                                        <input
                                            required className="input-field" style={{ paddingLeft: '3rem' }}
                                            placeholder="email@example.com" type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                                {isRegister && (
                                    <div className="flex flex-col gap-2">
                                        <label className="text-dim" style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Phone Number</label>
                                        <div className="relative flex items-center">
                                            <Phone size={20} className="absolute left-4" style={{ color: 'rgba(255,255,255,0.3)' }} />
                                            <input
                                                required className="input-field" style={{ paddingLeft: '3rem' }}
                                                placeholder="10-digit mobile" type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                )}
                                <div className="flex flex-col gap-2">
                                    <label className="text-dim" style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Password</label>
                                    <div className="relative flex items-center">
                                        <Lock size={20} className="absolute left-4" style={{ color: 'rgba(255,255,255,0.3)' }} />
                                        <input
                                            required className="input-field" style={{ paddingLeft: '3rem' }}
                                            placeholder="••••••••" type="password" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <button disabled={loading} className="btn-primary w-full mt-4 flex items-center justify-center gap-2" style={{ padding: '1rem', fontSize: '1.125rem' }}>
                                    {loading ? <Loader2 size={24} className="mdi-spin" style={{ animation: 'spin 1s linear infinite' }} /> : <>{isRegister ? 'Get OTP' : 'Login'} <ArrowRight size={20} /></>}
                                </button>

                                {!isRegister && step === 1 && (
                                    <p className="text-center mt-4">
                                        <Link href="/forgot-password" style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.875rem', textDecoration: 'none' }}>
                                            Forgot Password?
                                        </Link>
                                    </p>
                                )}

                                <p className="text-center mt-6 text-dim" style={{ fontSize: '0.875rem' }}>
                                    {isRegister ? 'Already have an account?' : "Don't have an account?"} <br />
                                    <button type="button" onClick={() => setIsRegister(!isRegister)} style={{ color: 'var(--primary)', fontWeight: 'bold', marginTop: '0.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>
                                        {isRegister ? 'Login Here' : 'Create Account'}
                                    </button>
                                </p>
                            </motion.form>
                        ) : (
                            <motion.form
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                onSubmit={handleVerify}
                                className="flex flex-col gap-8"
                            >
                                <div className="flex flex-col items-center">
                                    <ShieldCheck size={64} className="text-primary mb-6" />
                                    <input
                                        required autoFocus className="input-field"
                                        style={{ fontSize: '2.5rem', fontWeight: 'black', textAlign: 'center', letterSpacing: '8px', padding: '1.5rem', background: 'rgba(255,255,255,0.02)' }}
                                        placeholder="000000" maxLength={6} type="text" value={formData.code} onChange={e => setFormData({ ...formData, code: e.target.value })}
                                    />
                                </div>

                                <button disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2" style={{ padding: '1rem', fontSize: '1.125rem' }}>
                                    {loading ? <Loader2 size={24} style={{ animation: 'spin 1s linear infinite' }} /> : 'Verify & Continue'}
                                </button>

                                <button type="button" onClick={() => setStep(1)} className="text-dim" style={{ fontSize: '0.875rem', width: '100%', textAlign: 'center', background: 'none', border: 'none', cursor: 'pointer' }}>
                                    Change email or details
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
                <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
            </section>
            <Footer />
        </main>
    );
}
