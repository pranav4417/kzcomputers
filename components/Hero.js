'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ChevronRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="hero-badge"
                >
                    <Shield size={16} className="text-primary" />
                    <span>Your Trusted IT Partner</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="title-xl"
                >
                    Elevate Your <br />
                    <span className="gradient-text">Tech Experience</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-dim title-md mb-8"
                    style={{ maxWidth: '48rem', margin: '0 auto 2rem' }}
                >
                    Premium computer services, CCTV solutions, and custom PC building.
                    Suraksha Group delivers excellence in every repair and installation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <button className="btn-primary">
                        Get Started Now <ChevronRight size={20} />
                    </button>
                    <button className="btn-secondary">
                        Track Your Status
                    </button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="hero-scroll-indicator"
            >
                <div style={{ width: '4px', height: '6px', background: 'rgba(255,255,255,0.4)', borderRadius: '4px' }} />
            </motion.div>
        </section>
    );
}
