'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    Shield, LayoutDashboard, Ticket, Package, Hammer, Palette, Users, LogOut, Menu, X, Download, Settings, Clock, AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ErrorBoundary from '@/components/ErrorBoundary';

// Session timeout constants (in milliseconds)
const INACTIVITY_WARNING_DELAY = 60 * 1000; // 1 minute of inactivity before showing warning
const SESSION_TIMEOUT = 10 * 60 * 1000; // 10 minute total session timeout

export default function AdminLayout({ children }) {
    const pathname = usePathname();
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showTimeoutWarning, setShowTimeoutWarning] = useState(false);
    const [timeoutCountdown, setTimeoutCountdown] = useState(0);

    const warningTimerRef = React.useRef(null);
    const logoutTimerRef = React.useRef(null);
    const countdownRef = React.useRef(null);
    const lastActivityRef = React.useRef(Date.now());

    // Check session on mount
    useEffect(() => {
        checkSession();
    }, []);

    // Redirect to login if no user
    useEffect(() => {
        if (!loading && !user && pathname !== '/admin/login') {
            router.push('/admin/login');
        }
    }, [user, loading, pathname, router]);

    const checkSession = async () => {
        try {
            const res = await fetch('/api/auth/session-check');
            const data = await res.json();
            if (data.user) {
                setUser(data.user);
            } else {
                setUser(null);
                if (pathname !== '/admin/login') {
                    router.push('/admin/login');
                }
            }
        } catch (error) {
            console.error('Session check failed:', error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    // Track user activity
    useEffect(() => {
        if (!user || pathname === '/admin/login') return;

        const handleActivity = () => {
            lastActivityRef.current = Date.now();

            // If warning is showing and user is active, reset everything
            if (showTimeoutWarning) {
                resetTimers();
                setShowTimeoutWarning(false);
                setTimeoutCountdown(0);
            }
        };

        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('mousedown', handleActivity);
        window.addEventListener('keypress', handleActivity);
        window.addEventListener('scroll', handleActivity);
        window.addEventListener('touchstart', handleActivity);

        return () => {
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('mousedown', handleActivity);
            window.removeEventListener('keypress', handleActivity);
            window.removeEventListener('scroll', handleActivity);
            window.removeEventListener('touchstart', handleActivity);
        };
    }, [user, showTimeoutWarning, pathname]);

    // Start the warning timer when user is logged in
    useEffect(() => {
        if (!user || pathname === '/admin/login') return;

        // Clear any existing timers
        if (warningTimerRef.current) clearTimeout(warningTimerRef.current);
        if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current);

        // Set timer to show warning after 1 minute of inactivity
        warningTimerRef.current = setTimeout(() => {
            setShowTimeoutWarning(true);
            setTimeoutCountdown(SESSION_TIMEOUT / 1000); // 10 minutes in seconds

            // Start countdown
            countdownRef.current = setInterval(() => {
                setTimeoutCountdown(prev => {
                    if (prev <= 1) {
                        // Time's up - logout
                        handleLogout();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            // Set logout timer for 10 minutes from now
            logoutTimerRef.current = setTimeout(() => {
                handleLogout();
            }, SESSION_TIMEOUT);
        }, INACTIVITY_WARNING_DELAY);

        return () => {
            if (warningTimerRef.current) clearTimeout(warningTimerRef.current);
            if (countdownRef.current) clearInterval(countdownRef.current);
        };
    }, [user, pathname]);

    const resetTimers = () => {
        if (warningTimerRef.current) clearTimeout(warningTimerRef.current);
        if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current);
        if (countdownRef.current) clearInterval(countdownRef.current);

        lastActivityRef.current = Date.now();

        // Restart the warning timer
        warningTimerRef.current = setTimeout(() => {
            setShowTimeoutWarning(true);
            setTimeoutCountdown(SESSION_TIMEOUT / 1000);

            countdownRef.current = setInterval(() => {
                setTimeoutCountdown(prev => {
                    if (prev <= 1) {
                        handleLogout();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            logoutTimerRef.current = setTimeout(() => {
                handleLogout();
            }, SESSION_TIMEOUT);
        }, INACTIVITY_WARNING_DELAY);
    };

    const extendSession = () => {
        resetTimers();
        setShowTimeoutWarning(false);
        setTimeoutCountdown(0);
    };

    const handleLogout = async () => {
        // Clear timers
        if (warningTimerRef.current) clearTimeout(warningTimerRef.current);
        if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current);
        if (countdownRef.current) clearInterval(countdownRef.current);

        setShowTimeoutWarning(false);
        setTimeoutCountdown(0);

        try {
            await fetch('/api/auth/logout', { method: 'POST' });
        } catch (e) {
            // Ignore errors
        }

        // Clear cookie
        document.cookie = 'auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        setUser(null);
        window.location.href = '/admin/login';
    };

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#1A202C', color: '#fff' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ width: '50px', height: '50px', border: '3px solid #003B73', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 20px' }}></div>
                    <p>Loading...</p>
                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                </div>
            </div>
        );
    }

    if (!user && pathname !== '/admin/login') {
        return null; // Will redirect via useEffect
    }

    if (pathname === '/admin/login') return children;

    const menuItems = [
        { name: 'Overview', href: '/admin', icon: LayoutDashboard },
        { name: 'Tickets', href: '/admin/tickets', icon: Ticket },
        { name: 'Quotes', href: '/admin/quotes', icon: Package },
        { name: 'Products', href: '/admin/products', icon: Package, roleRequirement: ['admin', 'superadmin'] },
        { name: 'Services', href: '/admin/services', icon: Hammer, roleRequirement: ['admin', 'superadmin'] },
        { name: 'Group Service', href: '/admin/group-service', icon: Settings, roleRequirement: ['admin', 'superadmin'] },
        { name: 'Appearance', href: '/admin/appearance', icon: Palette, roleRequirement: ['superadmin'] },
        { name: 'Agents', href: '/admin/agents', icon: Users, roleRequirement: ['admin', 'superadmin'] },
        { name: 'Approvals', href: '/admin/approvals', icon: Shield, roleRequirement: ['superadmin'] },
        { name: 'Data Export', href: '/admin/export', icon: Download, roleRequirement: ['admin', 'superadmin'] },
    ].filter(item => {
        if (!item.roleRequirement) return true;
        const userRole = user?.role?.toLowerCase();
        return Array.isArray(item.roleRequirement) 
            ? item.roleRequirement.includes(userRole) 
            : userRole === item.roleRequirement;
    });

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-dark)', color: 'var(--text-main)', overflow: 'hidden' }}>
            {/* Sidebar */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.aside
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        exit={{ x: -300 }}
                        className="glass"
                        style={{ position: 'relative', zIndex: 40, width: '18rem', height: '100vh', borderRadius: 0, borderTop: 'none', borderBottom: 'none', borderLeft: 'none', background: 'rgba(0, 0, 0, 0.4)', display: 'flex', flexDirection: 'column' }}
                    >
                        <div style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--border-glass)' }}>
                            <img
                                src="/logo/logo small square.png"
                                alt="KZ COMPUTERS Logo"
                                style={{ width: '42px', height: '42px', objectFit: 'contain' }}
                            />
                            <span style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.025em' }}>CONTROL</span>
                        </div>

                        <nav style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1, overflowY: 'auto' }}>
                            {menuItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.875rem 1rem', borderRadius: '0.75rem', transition: 'var(--transition)',
                                            background: isActive ? 'var(--primary)' : 'transparent',
                                            color: isActive ? '#fff' : 'var(--text-dim)',
                                            boxShadow: isActive ? '0 4px 15px var(--primary-glow)' : 'none'
                                        }}
                                        onMouseOver={(e) => { if (!isActive) { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#fff'; } }}
                                        onMouseOut={(e) => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-dim)'; } }}
                                    >
                                        <item.icon size={20} />
                                        <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{item.name}</span>
                                    </Link>
                                );
                            })}
                        </nav>

                        <div style={{ padding: '1.5rem' }}>
                            <button
                                onClick={handleLogout}
                                style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.875rem 1rem', color: 'var(--text-dim)', borderRadius: '0.75rem', transition: 'var(--transition)' }}
                                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255, 101, 132, 0.1)'; e.currentTarget.style.color = 'var(--secondary)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-dim)'; }}
                            >
                                <LogOut size={20} />
                                <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Logout</span>
                            </button>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, height: '100vh' }}>
                <header style={{ height: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', background: 'rgba(0, 0, 0, 0.2)', borderBottom: '1px solid var(--border-glass)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        style={{ padding: '0.5rem', borderRadius: '0.5rem', color: 'var(--text-main)' }}
                        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ textAlign: 'right' }}>
                            <p style={{ fontSize: '0.875rem', fontWeight: 'bold', margin: 0 }}>{user?.username || 'Admin User'}</p>
                            <p style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 900, color: 'var(--primary)', margin: 0 }}>
                                {user?.role?.toLowerCase() === 'superadmin' ? 'Super Admin Control' : 
                                 user?.role?.toLowerCase() === 'agent' ? 'Agent Workbench' : 'Administrator Panel'}
                            </p>
                        </div>
                        <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', padding: '2px' }}>
                            <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold' }}>AD</div>
                        </div>
                    </div>
                </header>

                <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
                    <ErrorBoundary>
                        {children}
                    </ErrorBoundary>
                </main>
            </div>

            {/* Session Timeout Warning Modal */}
            <AnimatePresence>
                {showTimeoutWarning && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.8)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 9999
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            style={{
                                background: 'linear-gradient(135deg, #1A202C 0%, #1A202C 100%)',
                                padding: '2.5rem',
                                borderRadius: '1rem',
                                maxWidth: '400px',
                                width: '90%',
                                textAlign: 'center',
                                border: '1px solid rgba(108, 99, 255, 0.3)',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: 'rgba(255, 165, 0, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem'
                            }}>
                                <Clock size={40} color="#ffa500" />
                            </div>

                            <h2 style={{ color: '#ffa500', fontSize: '1.5rem', marginBottom: '1rem', margin: 0 }}>
                                Session Expiring
                            </h2>

                            <p style={{ color: '#aaa', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                Your session will expire due to inactivity.
                            </p>

                            <div style={{
                                background: 'rgba(255, 165, 0, 0.1)',
                                padding: '1rem',
                                borderRadius: '0.5rem',
                                marginBottom: '1.5rem'
                            }}>
                                <p style={{ color: '#ffa500', fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>
                                    {Math.floor(timeoutCountdown / 60)}:{(timeoutCountdown % 60).toString().padStart(2, '0')}
                                </p>
                                <p style={{ color: '#888', fontSize: '0.875rem', margin: '0.5rem 0 0' }}>remaining</p>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                                <button
                                    onClick={handleLogout}
                                    style={{
                                        padding: '0.75rem 1.5rem',
                                        borderRadius: '0.5rem',
                                        border: '1px solid #6C757D',
                                        background: 'transparent',
                                        color: '#6C757D',
                                        cursor: 'pointer',
                                        fontWeight: '600',
                                        transition: 'all 0.2s'
                                    }}
                                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(108, 117, 125, 0.1)'; }}
                                    onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; }}
                                >
                                    Logout Now
                                </button>
                                <button
                                    onClick={extendSession}
                                    style={{
                                        padding: '0.75rem 1.5rem',
                                        borderRadius: '0.5rem',
                                        border: 'none',
                                        background: 'linear-gradient(135deg, #003B73, #0082C8)',
                                        color: '#fff',
                                        cursor: 'pointer',
                                        fontWeight: '600',
                                        transition: 'all 0.2s'
                                    }}
                                    onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; }}
                                    onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                                >
                                    Stay Logged In
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
