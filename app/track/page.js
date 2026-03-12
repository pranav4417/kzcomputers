'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, Loader2 } from 'lucide-react';

export default function TrackSearch() {
    const [ticketNumber, setTicketNumber] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        setLoading(true);
        // In a real app, you'd fetch the token by ticketNumber first
        // For now, let's redirect to a placeholder or a dedicated search API
        window.location.href = `/track/search?q=${ticketNumber}`;
    };

    return (
        <main className="min-h-screen">
            <Navbar />
            <section className="section-padding pt-40 min-h-[70vh] flex flex-col items-center justify-center text-center">
                <div className="max-w-2xl w-full">
                    <h1 className="text-5xl font-black mb-6">Track Your <span className="gradient-text">Repair Status</span></h1>
                    <p className="text-text-dim mb-12">Enter your ticket number or email address to get real-time updates on your service.</p>

                    <form onSubmit={handleSearch} className="glass p-2 flex items-center gap-2 pr-4 pl-6">
                        <Search className="w-5 h-5 text-text-dim" />
                        <input
                            required
                            className="flex-1 bg-transparent border-none p-4 focus:outline-none text-lg"
                            placeholder="e.g. SUK260312AB1C"
                            value={ticketNumber} onChange={e => setTicketNumber(e.target.value)}
                        />
                        <button className="btn-primary py-3 px-8 flex items-center gap-2">
                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Search'}
                        </button>
                    </form>

                    <p className="mt-8 text-sm text-text-dim">
                        Lost your ticket number? Check your email or <a href="/contact" className="text-primary hover:underline">Contact Support</a>
                    </p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
