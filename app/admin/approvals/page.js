'use client';

import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle, XCircle, Clock, Loader2, AlertTriangle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ApprovalsPage() {
    const router = useRouter();
    const [updates, setUpdates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const checkRole = async () => {
            const res = await fetch('/api/auth/session-check');
            const data = await res.json();
            if (!data.user || data.user.role?.toLowerCase() !== 'superadmin') {
                router.push('/admin');
                return;
            }
            fetchUpdates();
        };
        checkRole();
    }, []);

    const fetchUpdates = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/admin/approvals');
            if (res.ok) {
                const data = await res.json();
                setUpdates(data);
            } else {
                setError('Failed to load approvals');
            }
        } catch (err) {
            setError('Failed to fetch approvals');
        } finally {
            setLoading(false);
        }
    };

    const handleAction = async (id, action) => {
        setProcessing(id);
        try {
            const res = await fetch('/api/admin/approvals', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ updateId: id, action })
            });

            if (res.ok) {
                fetchUpdates();
            } else {
                const data = await res.json();
                alert(data.error || 'Failed to process approval');
            }
        } catch (err) {
            alert('Failed to process. Network error.');
        } finally {
            setProcessing(null);
        }
    };

    const renderDataPreview = (entityType, dataString) => {
        try {
            const data = JSON.parse(dataString);
            return (
                <pre style={{ margin: 0, padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '0.5rem', fontSize: '0.75rem', color: '#ccc', overflowX: 'auto' }}>
                    {JSON.stringify(data, null, 2)}
                </pre>
            );
        } catch (e) {
            return <span>No readable data</span>;
        }
    };

    return (
        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                    <h1 className="title-lg mb-2" style={{ margin: 0, fontWeight: 900 }}>Pending <span className="gradient-text">Approvals</span></h1>
                    <p className="text-dim" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Review updates submitted by admins and agents.</p>
                </div>
            </div>

            {error && <div style={{ background: 'rgba(255, 101, 132, 0.1)', color: 'var(--secondary)', padding: '1rem', borderRadius: '0.75rem', fontSize: '0.875rem', border: '1px solid rgba(255, 101, 132, 0.2)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><AlertTriangle size={18} /> {error}</div>}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {loading ? (
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem 0' }}>
                        <Loader2 size={32} style={{ animation: 'spin 1s linear infinite', color: 'var(--primary)' }} />
                    </div>
                ) : updates.length === 0 ? (
                    <div style={{ padding: '4rem', textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px dashed rgba(255,255,255,0.1)' }}>
                        <Shield size={48} style={{ color: 'rgba(255,255,255,0.1)', margin: '0 auto 1rem' }} />
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>All clear!</h3>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.875rem', margin: 0 }}>There are no pending actions requiring your approval.</p>
                    </div>
                ) : (
                    updates.map((update) => (
                        <div key={update.id} className="glass" style={{ padding: '1.5rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                        <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(108, 99, 255, 0.1)', color: 'var(--primary)', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                            {update.entityType.replace('_', ' ')}
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-dim)', fontSize: '0.75rem' }}>
                                            <Clock size={12} /> {new Date(update.createdAt).toLocaleString()}
                                        </span>
                                    </div>
                                    <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem' }}>
                                        <strong>Submitted By UI ID:</strong> {update.submittedBy}
                                    </p>
                                    {(update.entityId !== null) && (
                                        <p style={{ margin: 0, fontSize: '0.875rem' }}>
                                            <strong>Target Entity ID:</strong> {update.entityId}
                                        </p>
                                    )}
                                </div>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <button
                                        onClick={() => handleAction(update.id, 'reject')}
                                        disabled={processing === update.id}
                                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(255, 101, 132, 0.1)', color: 'var(--secondary)', border: '1px solid rgba(255, 101, 132, 0.2)', borderRadius: '0.5rem', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600 }}
                                    >
                                        <XCircle size={16} /> {processing === update.id ? '...' : 'Reject'}
                                    </button>
                                    <button
                                        onClick={() => handleAction(update.id, 'approve')}
                                        disabled={processing === update.id}
                                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(52, 199, 89, 0.1)', color: '#4ade80', border: '1px solid rgba(52, 199, 89, 0.2)', borderRadius: '0.5rem', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600 }}
                                    >
                                        <CheckCircle size={16} /> {processing === update.id ? '...' : 'Approve'}
                                    </button>
                                </div>
                            </div>
                            
                            <div>
                                <h4 style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--text-dim)', margin: '0 0 0.5rem 0' }}>Data Payload:</h4>
                                {renderDataPreview(update.entityType, update.data)}
                            </div>
                        </div>
                    ))
                )}
            </div>
            <style jsx global>{` @keyframes spin { 100% { transform: rotate(360deg); } } `}</style>
        </div>
    );
}
