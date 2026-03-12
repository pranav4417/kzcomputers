'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Loader2, ShieldAlert, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export function SearchRedirect() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q');
    const router = useRouter();
    const [error, setError] = useState(null);

    useEffect(() => {
        if (query) {
            performSearch();
        }
    }, [query]);

    const performSearch = async () => {
        try {
            const res = await fetch(`/api/tickets/search?q=${encodeURIComponent(query)}`);
            const data = await res.json();
            if (data.success) {
                router.push(`/track/${data.token}`);
            } else {
                setError(data.error || 'Ticket not found');
            }
        } catch (err) {
            setError('Search failed. Please try again.');
        }
    };

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <section className="section-padding flex items-center justify-center container" style={{ flexGrow: 1, paddingTop: '8rem', minHeight: '70vh' }}>
                <AnimatePresence mode="wait">
                    {!error ? (
                        <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                            <Loader2 size={48} className="text-primary mx-auto mb-6" style={{ animation: 'spin 1s linear infinite' }} />
                            <h2 className="title-md">Searching for <span className="text-primary">{query}</span></h2>
                            <p className="text-dim mt-2">Connecting to secure database...</p>
                        </motion.div>
                    ) : (
                        <motion.div key="error" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass p-8 text-center" style={{ maxWidth: '28rem', width: '100%' }}>
                            <ShieldAlert size={64} className="text-secondary mx-auto mb-6" />
                            <h2 className="title-md mb-4" style={{ fontWeight: 900 }}>No Match Found</h2>
                            <p className="text-dim mb-8">
                                We couldn't find any ticket or account matching "<b>{query}</b>".
                                Please double-check your input.
                            </p>
                            <div className="flex flex-col gap-4">
                                <Link href="/track" className="btn-primary flex items-center justify-center gap-2">
                                    <ArrowLeft size={16} /> Try Again
                                </Link>
                                <Link href="/contact" className="text-dim hover" style={{ fontSize: '0.875rem', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = 'var(--text-dim)'}>
                                    Need help? Contact Us
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
            <Footer />
            <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
        </main>
    );
}

import { Suspense } from 'react';
function SearchContent() {
    return (
        <Suspense fallback={<div className="container" style={{ paddingTop: '8rem' }}>Loading...</div>}>
            <SearchRedirect />
        </Suspense>
    );
}

export { SearchContent as default };
