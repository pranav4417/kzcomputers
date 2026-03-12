'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Shield, Monitor, Hammer, Settings, LogIn, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/', icon: Monitor },
        { name: 'Services', href: '/#services', icon: Hammer },
        { name: 'Products', href: '/#products', icon: Monitor },
        { name: 'Raise Ticket', href: '/raise-ticket', icon: Shield },
        { name: 'Track', href: '/track', icon: Settings },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container flex justify-between items-center w-full">
                {/* Logo */}
                <Link href="/" className="nav-logo">
                    <img
                        src="/logo/logo horizontal.png"
                        alt="Suraksha Logo"
                        style={{ height: '55px', width: 'auto', objectFit: 'contain' }}
                    />
                </Link>

                {/* Desktop Links */}
                <div className="nav-desktop-only">
                    <div className="nav-links">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="nav-link">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <button onClick={toggleTheme} aria-label="Toggle Theme" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <Link href="/login" className="btn-secondary flex items-center gap-2">
                        <LogIn size={16} /> Login
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-menu"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="mobile-nav-link"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <link.icon size={20} />
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/login" className="btn-primary mt-4" onClick={() => setMobileMenuOpen(false)}>
                            Customer Login
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
