'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Shield, Monitor, Hammer, Settings, LogIn, Sun, Moon, LogOut, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);

        // Close profile menu when clicking outside
        const handleClickOutside = (event) => {
            if (profileMenuOpen && !event.target.closest('.relative')) {
                setProfileMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        fetch('/api/auth/session-check')
            .then(res => res.json())
            .then(data => {
                if (data.user) setUser(data.user);
            })
            .catch(console.error);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [profileMenuOpen]);

    const handleLogout = async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
            window.location.href = '/';
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

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
                        alt="KZ COMPUTERS Logo"
                        style={{ height: '65px', width: 'auto', objectFit: 'contain' }}
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
                    {user ? (
                        <div className="relative">
                            {/* Profile Dropdown Trigger */}
                            <button onClick={(e) => {
                                e.stopPropagation();
                                setProfileMenuOpen(!profileMenuOpen);
                            }} className="flex items-center gap-2 hover:bg-gray-700/30 rounded-full p-1 transition-colors">
                                {/* User Avatar */}
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700/20 text-gray-200">
                                    {user.username ? user.username.substring(0, 2).toUpperCase() : 'US'}
                                </div>
                                <div className="hidden md:block">
                                    <div className="flex flex-col items-start">
                                        <span className="text-sm font-medium">{user.username}</span>
                                        <span className="text-xs text-gray-400 capitalize">{user.role}</span>
                                    </div>
                                    <svg className="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </button>

                            {/* Profile Dropdown Menu */}
                            <div className={`absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-gray-800/90 backdrop-blur-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${profileMenuOpen ? 'block' : 'hidden'}`}>
                                <div className="px-3 py-2">
                                    {/* User Info */}
                                    <div className="flex items-center space-x-3 text-sm font-medium text-white">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700/30 text-gray-200">
                                            {user.username ? user.username.substring(0, 2).toUpperCase() : 'US'}
                                        </div>
                                        <div>
                                            <div className="text-white">{user.username}</div>
                                            <div className="text-xs text-gray-400">{user.role}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-gray-700/50"></div>
                                <div className="py-1">
                                    {/* Dashboard Link (for customers) */}
                                    {user.role === 'customer' && (
                                        <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                                            <User className="mr-3 h-4 w-4" /> Dashboard
                                        </Link>
                                    )}
                                    {/* Admin/Agent Links */}
                                    {(user.role === 'admin' || user.role === 'agent') && (
                                        <>
                                            <Link href="/admin" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                                                <Monitor className="mr-3 h-4 w-4" /> Admin Panel
                                            </Link>
                                            <Link href="/admin/tickets" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                                                <Ticket className="mr-3 h-4 w-4" /> Tickets
                                            </Link>
                                        </>
                                    )}
                                    {/* Settings Link */}
                                    <Link href="/admin/appearance" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                                        <Settings className="mr-3 h-4 w-4" /> Settings
                                    </Link>
                                    {/* Logout Button */}
                                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                                        <LogOut className="mr-3 h-4 w-4" /> Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Link href="/login" className="btn-secondary flex items-center gap-2">
                            <LogIn size={16} /> Login
                        </Link>
                    )}
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
                        {user ? (
                            <button className="btn-primary mt-4 flex items-center justify-center gap-2" style={{ background: 'var(--secondary)', boxShadow: '0 4px 15px var(--secondary-glow)' }} onClick={() => { handleLogout(); setMobileMenuOpen(false); }}>
                                <LogOut size={16} /> Logout
                            </button>
                        ) : (
                            <Link href="/login" className="btn-primary mt-4 flex items-center justify-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                                <LogIn size={16} /> Customer Login
                            </Link>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
