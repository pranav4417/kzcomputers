'use client';

import React, { useState } from 'react';
import prisma from '@/lib/prisma';
import { Laptop, Camera, Printer, Cpu, Database, Network, Monitor, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const iconMap = {
    'Laptop': Laptop,
    'CCTV': Camera,
    'Printer': Printer,
    'Building': Cpu,
    'Recovery': Database,
    'Networking': Network,
};

export default function ServicesGrid({ services }) {
    const [selectedService, setSelectedService] = useState(null);
    const { theme } = useTheme();

    return (
        <>
            <section id="services" className="section-padding container">
                <div className="text-center mb-12">
                    <h2 className="title-lg">Expertise we <span className="gradient-text">Offer</span></h2>
                    <p className="text-dim max-w-xl mx-auto">Dedicated professional solutions for all your computing and security needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => {
                        const Icon = Object.entries(iconMap).find(([key]) => service.name.includes(key))?.[1] || Monitor;
                        const delayClass = `delay-${idx % 4}`;

                        return (
                            <div key={service.id} className={`glass p-8 glass-hover flex flex-col items-center text-center animate-fade-in ${delayClass}`}>
                                <div className="card-icon">
                                    <Icon size={32} />
                                </div>
                                <h3 className="title-sm">{service.name}</h3>
                                <p className="text-dim mb-6" style={{ fontSize: '0.875rem', flex: 1 }}>
                                    {service.description || 'Professional technology services provided by our expert team.'}
                                </p>
                                <button
                                    onClick={() => setSelectedService(service)}
                                    className="btn-primary mt-auto"
                                    style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
                                >
                                    LEARN MORE
                                </button>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Service Detail Modal */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="fixed inset-0 bg-black-80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="glass max-w-xl w-full p-8 md:p-10 relative z-10 flex flex-col max-h-[90vh] overflow-y-auto"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="service-modal-title"
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-6 right-6 p-2 bg-primary text-white rounded-full hover:bg-primary/80 transition shadow-lg"
                                aria-label="Close modal"
                            >
                                <X size={20} />
                            </button>

                            <div className="text-center mb-8">
                                {(() => {
                                    const Icon = Object.entries(iconMap).find(([key]) => selectedService.name.includes(key))?.[1] || Monitor;
                                    return (
                                        <div className="card-icon mx-auto" style={{ width: '64px', height: '64px', borderRadius: '50%' }}>
                                            <Icon size={32} />
                                        </div>
                                    );
                                })()}
                                <h2 id="service-modal-title" className="title-md mb-2">{selectedService.name}</h2>
                                <span className="status-badge status-open">
                                    {selectedService.category || 'Service Package'}
                                </span>
                            </div>

                            <div className="text-dim mb-10" style={{ lineHeight: 1.8 }}>
                                <p className="mb-4">{selectedService.description || 'Professional technology services provided by our expert team.'}</p>
                                {selectedService.longDescription && (
                                    <p>{selectedService.longDescription}</p>
                                )}
                            </div>

                            <div className="flex gap-4 mt-auto">
                                <Link
                                    href="/raise-ticket"
                                    className="btn-primary flex-1 py-4 text-center rounded-xl"
                                >
                                    Book Now
                                </Link>
                                <Link
                                    href="/track"
                                    className="btn-secondary flex-1 py-4 text-center rounded-xl"
                                >
                                    Our Pricing
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
