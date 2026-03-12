import React from 'react';
import Link from 'next/link';
import { Shield, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{ paddingTop: '5rem', paddingBottom: '2.5rem', borderTop: '1px solid var(--border-glass)', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(24px)' }}>
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {/* Brand */}
                <div>
                    <Link href="/" className="nav-logo mb-6">
                        <img
                            src="/logo/logo horizontal.png"
                            alt="Suraksha Logo"
                            style={{ height: '50px', width: 'auto', objectFit: 'contain' }}
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

                {/* Quick Links */}
                <div>
                    <h4 className="title-sm" style={{ color: '#fff', marginBottom: '1.5rem' }}>Quick Links</h4>
                    <ul className="flex flex-col gap-4">
                        <li><Link href="/#services" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>Our Services</Link></li>
                        <li><Link href="/#products" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>Product Store</Link></li>
                        <li><Link href="/track" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>Track Repair</Link></li>
                        <li><Link href="/raise-ticket" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>Raise a Ticket</Link></li>
                        <li><Link href="/about" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>About Us</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="title-sm" style={{ color: '#fff', marginBottom: '1.5rem' }}>Support</h4>
                    <ul className="flex flex-col gap-4">
                        <li><Link href="/login" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>Customer Login</Link></li>
                        <li><Link href="/faq" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>FAQs</Link></li>
                        <li><Link href="/contact" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>Contact Support</Link></li>
                        <li><Link href="/terms" className="text-dim hover:text-white" style={{ transition: 'color 0.3s' }}>Terms of Service</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="title-sm" style={{ color: '#fff', marginBottom: '1.5rem' }}>Get in Touch</h4>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-start gap-2">
                            <MapPin size={20} className="text-primary" style={{ flexShrink: 0 }} />
                            <span className="text-dim" style={{ fontSize: '0.875rem' }}>#42, 1st Floor, Tech Circle, Bangalore 560001</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone size={20} className="text-primary" style={{ flexShrink: 0 }} />
                            <span className="text-dim" style={{ fontSize: '0.875rem' }}>+91 98765 43210</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={20} className="text-primary" style={{ flexShrink: 0 }} />
                            <span className="text-dim" style={{ fontSize: '0.875rem' }}>support@suraksha.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <p className="text-dim" style={{ fontSize: '0.75rem' }}>&copy; 2026 Suraksha Group of Computers. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="/privacy" className="text-dim hover:text-white" style={{ fontSize: '0.75rem' }}>Privacy Policy</Link>
                    <Link href="/terms" className="text-dim hover:text-white" style={{ fontSize: '0.75rem' }}>Terms of Use</Link>
                </div>
            </div>
        </footer>
    );
}
