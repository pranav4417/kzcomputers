'use client';

import React, { useState, useEffect } from 'react';
import {
    Plus, User, Shield, Loader2, Trash2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AgentManagement() {
    const [agents, setAgents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [saving, setSaving] = useState(false);
    const [newAgent, setNewAgent] = useState({ username: '', email: '', password: '', role: 'agent' });
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        fetchAgents();
        fetchCurrentUser();
    }, []);

    const fetchCurrentUser = async () => {
        try {
            const res = await fetch('/api/auth/session-check');
            const data = await res.json();
            if (data.user) setCurrentUser(data.user);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchAgents = async () => {
        setLoading(true);
        const res = await fetch('/api/admin/agents');
        const data = await res.json();
        setAgents(data);
        setLoading(false);
    };

    const handleAddAgent = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            const res = await fetch('/api/admin/agents', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newAgent),
            });
            if (res.ok) {
                fetchAgents();
                setIsModalOpen(false);
                setNewAgent({ username: '', email: '', password: '', role: 'agent' });
            } else {
                alert(await res.json().then(data => data.error) || 'Failed to add agent');
            }
        } catch (err) {
            alert('Failed to add agent');
        } finally {
            setSaving(false);
        }
    };

    const handleDeleteAgent = async (id) => {
        if (!confirm('Are you sure you want to revoke access for this staff member?')) return;
        try {
            const res = await fetch(`/api/admin/agents?id=${id}`, { method: 'DELETE' });
            if (res.ok) fetchAgents();
            else alert(await res.json().then(data => data.error) || 'Failed to delete');
        } catch (err) {
            alert('Failed to execute');
        }
    };

    const handleApproveAgent = async (id) => {
        if (!confirm('Are you sure you want to approve this staff account?')) return;
        try {
            const res = await fetch('/api/admin/agents', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, status: 'active' })
            });
            if (res.ok) fetchAgents();
            else alert(await res.json().then(data => data.error) || 'Failed to approve');
        } catch (err) {
            alert('Failed to execute');
        }
    };

    return (
        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h1 className="title-lg mb-2" style={{ margin: 0, fontWeight: 900 }}>Staff <span className="gradient-text">Directory</span></h1>
                        <p className="text-dim" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Manage access for authorized service technicians and admins.</p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="btn-primary"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', borderRadius: '0.75rem', fontWeight: 900, fontSize: '0.875rem' }}
                    >
                        <Plus size={20} /> New Staff
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {loading ? (
                    <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', padding: '5rem 0' }}>
                        <Loader2 size={40} className="text-primary" style={{ animation: 'spin 1s linear infinite' }} />
                        <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                    </div>
                ) : (
                    agents.map((agent, idx) => (
                        <div key={agent.id} className={`glass glass-hover delay-${idx % 4} group`} style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', position: 'relative' }}>
                            <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.2), rgba(255, 101, 132, 0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)', flexShrink: 0 }}>
                                <User size={32} style={{ color: 'rgba(255,255,255,0.4)' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflow: 'hidden' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                    <h3 style={{ margin: 0, fontWeight: 'bold', fontSize: '1rem' }}>{agent.username}</h3>
                                    {agent.role === 'admin' && <Shield size={12} className="text-secondary" />}
                                </div>
                                <p className="text-primary" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'black', margin: 0 }}>{(agent.role === 'admin' || agent.role === 'superadmin') ? 'Super Admin' : agent.role}</p>
                                <p className="text-dim" style={{ fontSize: '0.65rem', margin: '0.5rem 0 0 0', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{agent.email}</p>
                            </div>
                            <div style={{ padding: '0.25rem 0.5rem', borderRadius: '1rem', fontSize: '0.5rem', fontWeight: 'black', textTransform: 'uppercase', background: agent.status === 'active' ? 'rgba(52, 199, 89, 0.1)' : 'rgba(255, 193, 7, 0.1)', color: agent.status === 'active' ? '#62e57e' : '#ffc107', position: 'absolute', bottom: '1.5rem', right: '1.5rem' }}>
                                {agent.status}
                            </div>

                            {agent.status === 'pending' && currentUser?.role === 'superadmin' && (
                                <button
                                    onClick={() => handleApproveAgent(agent.id)}
                                    className="md:opacity-0 md:group-hover:opacity-100"
                                    title="Approve access"
                                    style={{ position: 'absolute', top: '1rem', right: '3.5rem', transition: 'opacity 0.3s', padding: '0.5rem', color: '#4ade80', background: 'rgba(52, 199, 89, 0.1)', borderRadius: '0.5rem', cursor: 'pointer', border: 'none' }}
                                    onMouseOver={e => e.currentTarget.style.background = 'rgba(52, 199, 89, 0.2)'}
                                    onMouseOut={e => e.currentTarget.style.background = 'rgba(52, 199, 89, 0.1)'}
                                >
                                    <Shield size={16} />
                                </button>
                            )}

                            {agent.role?.toLowerCase() !== 'admin' &&
                                agent.role?.toLowerCase() !== 'superadmin' &&
                                String(agent.id) !== String(currentUser?.id) &&
                                currentUser?.role?.toLowerCase() === 'superadmin' && (
                                    <button
                                        onClick={() => handleDeleteAgent(agent.id)}
                                        className="md:opacity-0 md:group-hover:opacity-100"
                                        title="Remove access"
                                        style={{ position: 'absolute', top: '1rem', right: '1rem', transition: 'opacity 0.3s', padding: '0.5rem', color: 'var(--secondary)', background: 'rgba(255, 101, 132, 0.1)', borderRadius: '0.5rem', cursor: 'pointer', border: 'none' }}
                                        onMouseOver={e => e.currentTarget.style.background = 'rgba(255, 101, 132, 0.2)'}
                                        onMouseOut={e => e.currentTarget.style.background = 'rgba(255, 101, 132, 0.1)'}
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                )}
                        </div>
                    ))
                )}
            </div>

            {/* Add Agent Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }} />
                        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="glass-modal" style={{ maxWidth: '32rem', width: '100%', padding: '2.5rem', position: 'relative', zIndex: 10 }}>
                            <h3 className="title-md" style={{ marginBottom: '2rem', margin: '0 0 2rem 0', fontWeight: 900 }}>Authorize <span className="gradient-text">Staff</span></h3>
                            <form onSubmit={handleAddAgent} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '0.5rem', display: 'block' }}>Username</label>
                                    <input required className="input-field" style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', background: 'rgba(255,255,255,0.05)', fontSize: '0.875rem' }} value={newAgent.username} onChange={e => setNewAgent({ ...newAgent, username: e.target.value })} />
                                </div>
                                <div>
                                    <label style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '0.5rem', display: 'block' }}>Email Address</label>
                                    <input required type="email" className="input-field" style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', background: 'rgba(255,255,255,0.05)', fontSize: '0.875rem' }} value={newAgent.email} onChange={e => setNewAgent({ ...newAgent, email: e.target.value })} />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '0.5rem', display: 'block' }}>Password</label>
                                        <input required type="password" className="input-field" style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', background: 'rgba(255,255,255,0.05)', fontSize: '0.875rem' }} value={newAgent.password} onChange={e => setNewAgent({ ...newAgent, password: e.target.value })} />
                                    </div>
                                    <div>
                                        <label style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '0.5rem', display: 'block' }}>Role</label>
                                        <div className="input-field" style={{ padding: 0, overflow: 'hidden', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem' }}>
                                            <select style={{
                                                appearance: 'none', background: 'transparent', border: 'none', width: '100%', padding: '1rem', color: 'inherit', fontSize: '0.875rem', fontWeight: 'bold', outline: 'none',
                                                backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '0.65em auto', backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`
                                            }} value={newAgent.role} onChange={e => setNewAgent({ ...newAgent, role: e.target.value })}>
                                                <option value="agent" style={{ background: 'var(--bg-dark)' }}>Agent</option>
                                                <option value="admin" style={{ background: 'var(--bg-dark)' }}>Admin</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                                    <button type="button" onClick={() => setIsModalOpen(false)} style={{ flex: 1, padding: '1rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem', fontWeight: 900, fontSize: '0.875rem', background: 'rgba(255,255,255,0.05)', color: 'var(--text-dim)', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-dim)'}>Cancel</button>
                                    <button type="submit" disabled={saving} className="btn-primary" style={{ flex: 1, padding: '1rem', borderRadius: '0.75rem', fontWeight: 900, fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {saving ? <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} /> : 'Authorize'}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence >
        </div >
    );
}
