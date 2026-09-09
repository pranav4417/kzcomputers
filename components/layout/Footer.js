import React from 'react';
import Link from 'next/link';
import { Shield, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{ paddingTop: '5rem', paddingBottom: '2.5rem', borderTop: '1px solid var(--border-glass)', background: 'var(--bg-dark)', backdropFilter: 'blur(24px)' }}>
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {/* Brand */}
                <div>
                    <Link href="/" className="nav-logo mb-6">
                        <img
                            src="/logo/logo horizontal.png"
                            alt="KZ COMPUTERS Logo"
                            style={{ height: '120px', width: '260px', objectFit: 'fill' }}

                        />
                    </Link>
                    <p className="text-dim mb-8" style={{ fontSize: '0.875rem' }}>
                        Providing expert computer sales and service since 2012.
                        We specialize in desktop/laptop repairs, CCTV installation,
                        and enterprise networking.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="btn-icon text-dim hover:text-primary"><Facebook size={20} /></a>
                        <a href="#" className="btn-icon text-dim hover:text-primary"><Instagram size={20} /></a>
                        <a href="#" className="btn-icon text-dim hover:text-primary"><Twitter size={20} /></a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h4 className="title-sm" style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: 800 }}>Services</h4>
                    <ul className="flex flex-col gap-4">
                        <li><Link href="/#services" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>Hardware Peripherals</Link></li>
                        <li><Link href="/#services" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>Software Products</Link></li>
                        <li><Link href="/#services" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>IT Infrastructure Management</Link></li>
                        <li><Link href="/#services" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>Network & Cybersecurity</Link></li>
                        <li><Link href="/#services" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>Enterprise Solutions</Link></li>
                        <li><Link href="/#services" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>Website Design & Development</Link></li>
                        <li><Link href="/#services" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>IT Equipment Rentals</Link></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="title-sm" style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: 800 }}>Quick Links</h4>
                    <ul className="flex flex-col gap-4">
                        <li><Link href="/#services" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>Our Services</Link></li>
                        <li><Link href="/#products" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>Product Store</Link></li>
                        <li><Link href="/track" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>Track Repair</Link></li>
                        <li><Link href="/raise-ticket" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>Raise a Ticket</Link></li>
                        <li><Link href="/about" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>About Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="title-sm" style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: 800 }}>Get in Touch</h4>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-start gap-2">
                            <MapPin size={20} className="text-primary" style={{ flexShrink: 0 }} />
                            <span className="text-dim" style={{ fontSize: '0.875rem' }}>NO.483 & 484, Nimishamba, Square Amrutahalli, Amruthahalli, Bangalore, Bangalore North, Karnataka, India, 560092</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone size={20} className="text-primary" style={{ flexShrink: 0 }} />
                            <span className="text-dim" style={{ fontSize: '0.875rem' }}>+91 8971132109</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={20} className="text-primary" style={{ flexShrink: 0 }} />
                            <span className="text-dim" style={{ fontSize: '0.875rem' }}>sales.kzcomputers@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container pt-8" style={{ borderTop: '1px solid var(--border-glass)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <p className="text-dim" style={{ fontSize: '0.75rem' }}>&copy; 2026 KZ COMPUTERS. All rights reserved.</p>
            </div>
        </footer>
    );
}
