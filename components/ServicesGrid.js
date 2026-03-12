import React from 'react';
import prisma from '@/lib/prisma';
import { Laptop, Camera, Printer, Cpu, Database, Network, Monitor } from 'lucide-react';

const iconMap = {
    'Laptop': Laptop,
    'CCTV': Camera,
    'Printer': Printer,
    'Building': Cpu,
    'Recovery': Database,
    'Networking': Network,
};

export default async function ServicesGrid() {
    const services = await prisma.service.findMany();

    return (
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
                            <p className="text-dim mb-6" style={{ fontSize: '0.875rem' }}>
                                {service.description || 'Professional technology services provided by our expert team.'}
                            </p>
                            <button className="btn-icon mt-auto" style={{ border: 'none', background: 'transparent', color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.875rem', letterSpacing: '0.05em' }}>
                                LEARN MORE +
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
