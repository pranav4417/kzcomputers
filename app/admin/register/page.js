'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User, Shield, ArrowRight, Loader2, Key } from 'lucide-react';

export default function AdminRegister() {
    const router = useRouter();
    const [step, setStep] = useState(1); // 1 = details, 2 = verify OTP
    const [formData, setFormData] = useState({ username: '', email: '', password: '', role: 'agent' });
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSendOtp = async (e) => {
        e.preventDefault();
        setError('');
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
                setSuccess('OTP sent to your email.');
            } else {
                setError(data.error || 'Failed to send OTP.');
            }
        } catch (err) {
            setError('Network error.');
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyAndRegister = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            // First verify OTP
            const otpRes = await fetch('/api/auth/customer/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: formData.email, otp }),
            });
            const otpData = await otpRes.json();
            if (!otpData.success) {
                setError(otpData.error || 'Invalid OTP');
                setLoading(false);
                return;
            }

            // Now register
            const regRes = await fetch('/api/auth/admin/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const regData = await regRes.json();
            if (regData.success) {
                setSuccess('Registration successful! Waiting for superadmin approval.');
                setTimeout(() => {
                    router.push('/admin/login');
                }, 3000);
            } else {
                setError(regData.error || 'Registration failed');
            }
        } catch (err) {
            setError('Registration failed due to network error.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-dark)', padding: '2rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-10rem', right: '-10rem', width: '30rem', height: '30rem', background: 'var(--primary)', filter: 'blur(100px)', opacity: 0.1, borderRadius: '50%' }} />
            <div style={{ position: 'absolute', bottom: '-10rem', left: '-10rem', width: '30rem', height: '30rem', background: 'var(--secondary)', filter: 'blur(100px)', opacity: 0.1, borderRadius: '50%' }} />
            
            <div className="glass" style={{ maxWidth: '400px', width: '100%', padding: '2.5rem', borderRadius: '1.5rem', position: 'relative', zIndex: 10, border: '1px solid var(--border-glass)' }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <div style={{ display: 'inline-flex', padding: '0.75rem', background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.1), rgba(255, 101, 132, 0.1))', borderRadius: '1rem', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <Shield size={32} className="text-secondary" />
                    </div>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: 900, letterSpacing: '-0.025em', margin: 0, color: 'var(--text-main)' }}>Staff <span className="gradient-text">Registration</span></h1>
                    <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-dim)', fontSize: '0.875rem' }}>Join the administration team</p>
                </div>

                {error && <div style={{ background: 'rgba(255, 101, 132, 0.1)', color: 'var(--secondary)', padding: '1rem', borderRadius: '0.75rem', marginBottom: '1.5rem', fontSize: '0.875rem', border: '1px solid rgba(255, 101, 132, 0.2)' }}>{error}</div>}
                {success && <div style={{ background: 'rgba(52, 199, 89, 0.1)', color: '#4ade80', padding: '1rem', borderRadius: '0.75rem', marginBottom: '1.5rem', fontSize: '0.875rem', border: '1px solid rgba(52, 199, 89, 0.2)' }}>{success}</div>}

                {step === 1 ? (
                    <form onSubmit={handleSendOtp} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>Username</label>
                            <div style={{ position: 'relative' }}>
                                <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                                <input type="text" required value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} style={{ width: '100%', padding: '0.875rem 1rem 0.875rem 2.75rem', background: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem', color: '#fff', fontSize: '0.875rem', outline: 'none' }} placeholder="johndoe" />
                            </div>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>Email Address</label>
                            <div style={{ position: 'relative' }}>
                                <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ width: '100%', padding: '0.875rem 1rem 0.875rem 2.75rem', background: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem', color: '#fff', fontSize: '0.875rem', outline: 'none' }} placeholder="admin@example.com" />
                            </div>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>Password</label>
                            <div style={{ position: 'relative' }}>
                                <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                                <input type="password" required value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} style={{ width: '100%', padding: '0.875rem 1rem 0.875rem 2.75rem', background: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem', color: '#fff', fontSize: '0.875rem', outline: 'none' }} placeholder="••••••••" />
                            </div>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>Role Request</label>
                            <select value={formData.role} onChange={e => setFormData({ ...formData, role: e.target.value })} style={{ width: '100%', padding: '0.875rem 1rem', background: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem', color: '#fff', fontSize: '0.875rem', outline: 'none' }}>
                                <option value="agent" style={{ background: '#0a0a0f' }}>Agent</option>
                                <option value="admin" style={{ background: '#0a0a0f' }}>Admin</option>
                            </select>
                        </div>
                        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', fontWeight: 900, fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                            {loading ? <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} /> : <>Verify Email <ArrowRight size={18} /></>}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleVerifyAndRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>Enter OTP</label>
                            <div style={{ position: 'relative' }}>
                                <Key size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                                <input type="text" required value={otp} onChange={(e) => setOtp(e.target.value)} style={{ width: '100%', padding: '0.875rem 1rem 0.875rem 2.75rem', background: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem', color: '#fff', fontSize: '0.875rem', outline: 'none', letterSpacing: '0.2em' }} placeholder="123456" maxLength={6} />
                            </div>
                        </div>
                        <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', fontWeight: 900, fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                            {loading ? <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} /> : 'Complete Registration'}
                        </button>
                    </form>
                )}
                
                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.875rem', margin: 0 }}>
                        Already have an account? <Link href="/admin/login" style={{ color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'none' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = 'var(--primary)'}>Login here</Link>
                    </p>
                </div>
            </div>
            <style jsx global>{` @keyframes spin { 100% { transform: rotate(360deg); } } `}</style>
        </div>
    );
}
