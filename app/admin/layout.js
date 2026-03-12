'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Shield, LayoutDashboard, Ticket, Package, Hammer, Palette, Users, LogOut, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminLayout({ children }) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    if (pathname === '/admin/login') return children;

    const menuItems = [
        { name: 'Overview', href: '/admin', icon: LayoutDashboard },
        { name: 'Tickets', href: '/admin/tickets', icon: Ticket },
        { name: 'Quotes', href: '/admin/quotes', icon: Package },
        { name: 'Products', href: '/admin/products', icon: Package },
        { name: 'Services', href: '/admin/services', icon: Hammer },
        { name: 'Appearance', href: '/admin/appearance', icon: Palette },
        { name: 'Agents', href: '/admin/agents', icon: Users },
    ];

    const handleLogout = async () => {
        document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = '/admin/login';
    };

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
                                alt="Suraksha Logo"
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
                            <p style={{ fontSize: '0.875rem', fontWeight: 'bold', margin: 0 }}>Admin User</p>
                            <p style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 900, color: 'var(--primary)', margin: 0 }}>Super Admin</p>
                        </div>
                        <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', padding: '2px' }}>
                            <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold' }}>AD</div>
                        </div>
                    </div>
                </header>

                <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
                    {children}
                </main>
            </div>
        </div>
    );
}
