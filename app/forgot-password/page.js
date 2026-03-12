'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Mail, Phone, Lock, Loader2, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ForgotPassword() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ email: '', phone: '', otp: '', newPassword: '', confirmPassword: '' });
    const [customerId, setCustomerId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSendOTP = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/customer/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: formData.email, phone: formData.phone }),
            });
            const data = await res.json();

            if (data.success) {
                setCustomerId(data.customerId);
                setStep(2);
                setSuccess('OTP sent to your email');
            } else {
                setError(data.error || 'Failed to send OTP');
            }
        } catch (err) {
            setError('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/customer/forgot-password', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    customerId,
                    otp: formData.otp,
                    newPassword: formData.newPassword
                }),
            });
            const data = await res.json();

            if (data.success) {
                setSuccess('Password reset successfully!');
                setTimeout(() => {
                    window.location.href = '/login';
                }, 2000);
            } else {
                setError(data.error || 'Invalid OTP');
            }
        } catch (err) {
            setError('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex flex-col min-h-screen">
            <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary z-50" />
            <Navbar />

            <section className="section-padding flex flex-col items-center justify-center container flex-grow pt-32 pb-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="glass w-full"
                    style={{ maxWidth: '28rem', padding: '3rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }} />

                    <Link href="/login" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                        <ArrowLeft size={16} /> Back to Login
                    </Link>

                    <div className="flex flex-col items-center" style={{ marginBottom: '2rem' }}>
                        <ShieldCheck size={48} className="text-primary mb-4" />
                        <h2 style={{ fontSize: '1.875rem', fontWeight: 900, margin: '0 0 0.5rem 0', color: '#fff' }}>Reset Password</h2>
                        <p style={{ fontSize: '0.875rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dim)', margin: 0 }}>
                            {step === 1 ? 'Enter your email or phone' : 'Enter OTP & new password'}
                        </p>
                    </div>

                    {error && (
                        <div style={{ padding: '0.75rem', background: 'rgba(255, 100, 100, 0.1)', borderRadius: '0.5rem', marginBottom: '1.5rem', color: '#ff6464', fontSize: '0.875rem', textAlign: 'center' }}>
                            {error}
                        </div>
                    )}

                    {success && (
                        <div style={{ padding: '0.75rem', background: 'rgba(100, 255, 100, 0.1)', borderRadius: '0.5rem', marginBottom: '1.5rem', color: '#64ff64', fontSize: '0.875rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <CheckCircle size={16} /> {success}
                        </div>
                    )}

                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.form
                                key="step1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                onSubmit={handleSendOTP}
                                className="flex flex-col gap-6"
                            >
                                <div className="flex flex-col gap-2">
                                    <label style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>Email Address</label>
                                    <div className="relative flex items-center">
                                        <Mail size={20} className="absolute left-4" style={{ color: 'rgba(255,255,255,0.3)' }} />
                                        <input
                                            required
                                            type="email"
                                            className="input-field"
                                            style={{ paddingLeft: '3rem' }}
                                            placeholder="email@example.com"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>Or Phone Number</label>
                                    <div className="relative flex items-center">
                                        <Phone size={20} className="absolute left-4" style={{ color: 'rgba(255,255,255,0.3)' }} />
                                        <input
                                            type="tel"
                                            className="input-field"
                                            style={{ paddingLeft: '3rem' }}
                                            placeholder="10-digit mobile"
                                            value={formData.phone}
                                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <button
                                    disabled={loading}
                                    className="btn-primary w-full flex items-center justify-center gap-2"
                                    style={{ padding: '1rem', fontSize: '1rem' }}
                                >
                                    {loading ? <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} /> : <><span>Send OTP</span> <ArrowRight size={20} /></>}
                                </button>
                                <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                            </motion.form>
                        )}

                        {step === 2 && (
                            <motion.form
                                key="step2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                onSubmit={handleVerifyOTP}
                                className="flex flex-col gap-6"
                            >
                                <div className="flex flex-col gap-2">
                                    <label style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>OTP Code</label>
                                    <input
                                        required
                                        type="text"
                                        className="input-field"
                                        style={{ padding: '1rem', fontSize: '1.5rem', fontWeight: 900, textAlign: 'center', letterSpacing: '0.5rem' }}
                                        placeholder="000000"
                                        maxLength={6}
                                        value={formData.otp}
                                        onChange={e => setFormData({ ...formData, otp: e.target.value.replace(/\D/g, '').slice(0, 6) })}
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>New Password</label>
                                    <div className="relative flex items-center">
                                        <Lock size={20} className="absolute left-4" style={{ color: 'rgba(255,255,255,0.3)' }} />
                                        <input
                                            required
                                            type="password"
                                            className="input-field"
                                            style={{ paddingLeft: '3rem' }}
                                            placeholder="New password"
                                            value={formData.newPassword}
                                            onChange={e => setFormData({ ...formData, newPassword: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>Confirm Password</label>
                                    <div className="relative flex items-center">
                                        <Lock size={20} className="absolute left-4" style={{ color: 'rgba(255,255,255,0.3)' }} />
                                        <input
                                            required
                                            type="password"
                                            className="input-field"
                                            style={{ paddingLeft: '3rem' }}
                                            placeholder="Confirm password"
                                            value={formData.confirmPassword}
                                            onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {formData.newPassword !== formData.confirmPassword && formData.confirmPassword && (
                                    <div style={{ color: '#ff6464', fontSize: '0.75rem' }}>Passwords do not match</div>
                                )}

                                <button
                                    disabled={loading || formData.newPassword !== formData.confirmPassword || formData.newPassword.length < 6}
                                    className="btn-primary w-full flex items-center justify-center gap-2"
                                    style={{ padding: '1rem', fontSize: '1rem' }}
                                >
                                    {loading ? <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} /> : <span>Reset Password <CheckCircle size={20} /></span>}
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </section>
            <Footer />
        </main>
    );
}
