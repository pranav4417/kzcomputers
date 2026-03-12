'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Mail, User, Lock, Loader2, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function AdminForgotPassword() {
    const [step, setStep] = useState(1); // 1: email input, 2: OTP verification, 3: new password
    const [formData, setFormData] = useState({ email: '', otp: '', newPassword: '', confirmPassword: '' });
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSendOTP = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/admin/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: formData.email }),
            });
            const data = await res.json();

            if (data.success) {
                setUserId(data.userId);
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
            const res = await fetch('/api/auth/admin/forgot-password', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId,
                    otp: formData.otp,
                    newPassword: formData.newPassword
                }),
            });
            const data = await res.json();

            if (data.success) {
                setSuccess('Password reset successfully!');
                setTimeout(() => {
                    window.location.href = '/admin/login';
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
        <main style={{ minHeight: '100vh', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '1.5rem' }}>
            {/* Background elements */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: 'var(--secondary-glow)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />

            <div className="w-full relative" style={{ maxWidth: '28rem', zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="glass w-full relative"
                    style={{ padding: '3rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
                >
                    {/* Decorative Top Bar */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }} />

                    {/* Back to Login */}
                    <Link href="/admin/login" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                        <ArrowLeft size={16} /> Back to Login
                    </Link>

                    <div className="flex flex-col items-center" style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.875rem', fontWeight: 900, margin: '0 0 0.5rem 0', color: '#fff' }}>Reset Password</h2>
                        <p style={{ fontSize: '0.875rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dim)', margin: 0 }}>
                            {step === 1 ? 'Enter your email' : step === 2 ? 'Enter OTP & new password' : 'Create new password'}
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
                                    <label style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.1em', marginLeft: '0.25rem' }}>Email Address</label>
                                    <div className="relative flex items-center">
                                        <div style={{ position: 'absolute', left: '1rem', display: 'flex', alignItems: 'center', pointerEvents: 'none', zIndex: 10 }}>
                                            <Mail size={18} style={{ color: 'rgba(255,255,255,0.4)' }} />
                                        </div>
                                        <input
                                            required
                                            type="email"
                                            className="input-field"
                                            style={{ paddingLeft: '3rem', paddingTop: '1rem', paddingBottom: '1rem', background: 'rgba(0,0,0,0.4)', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 600 }}
                                            placeholder="admin@example.com"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <button
                                    disabled={loading}
                                    className="btn-primary w-full"
                                    style={{ padding: '1rem', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}
                                >
                                    {loading ? <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> : <>Send OTP <ArrowRight size={16} /></>}
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
                                    <label style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.1em', marginLeft: '0.25rem' }}>OTP Code</label>
                                    <input
                                        required
                                        type="text"
                                        className="input-field"
                                        style={{ padding: '1rem', background: 'rgba(0,0,0,0.4)', borderRadius: '0.75rem', fontSize: '1.5rem', fontWeight: 900, textAlign: 'center', letterSpacing: '0.5rem' }}
                                        placeholder="000000"
                                        maxLength={6}
                                        value={formData.otp}
                                        onChange={e => setFormData({ ...formData, otp: e.target.value.replace(/\D/g, '').slice(0, 6) })}
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.1em', marginLeft: '0.25rem' }}>New Password</label>
                                    <div className="relative flex items-center">
                                        <div style={{ position: 'absolute', left: '1rem', display: 'flex', alignItems: 'center', pointerEvents: 'none', zIndex: 10 }}>
                                            <Lock size={18} style={{ color: 'rgba(255,255,255,0.4)' }} />
                                        </div>
                                        <input
                                            required
                                            type="password"
                                            className="input-field"
                                            style={{ paddingLeft: '3rem', paddingTop: '1rem', paddingBottom: '1rem', background: 'rgba(0,0,0,0.4)', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 600 }}
                                            placeholder="New password"
                                            value={formData.newPassword}
                                            onChange={e => setFormData({ ...formData, newPassword: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.1em', marginLeft: '0.25rem' }}>Confirm Password</label>
                                    <div className="relative flex items-center">
                                        <div style={{ position: 'absolute', left: '1rem', display: 'flex', alignItems: 'center', pointerEvents: 'none', zIndex: 10 }}>
                                            <Lock size={18} style={{ color: 'rgba(255,255,255,0.4)' }} />
                                        </div>
                                        <input
                                            required
                                            type="password"
                                            className="input-field"
                                            style={{ paddingLeft: '3rem', paddingTop: '1rem', paddingBottom: '1rem', background: 'rgba(0,0,0,0.4)', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 600 }}
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
                                    className="btn-primary w-full"
                                    style={{ padding: '1rem', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}
                                >
                                    {loading ? <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> : <span>Reset Password <CheckCircle size={16} /></span>}
                                </button>
                                <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    );
}
