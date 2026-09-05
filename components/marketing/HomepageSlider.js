'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HomepageSlider({ sliders = [] }) {
    const [current, setCurrent] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying || sliders.length <= 1) return;
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % sliders.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isAutoPlaying, sliders.length]);

    const goTo = (index) => {
        setIsAutoPlaying(false);
        setCurrent(index);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const prev = () => goTo((current - 1 + sliders.length) % sliders.length);
    const next = () => goTo((current + 1) % sliders.length);

    if (!sliders.length) return null;

    const slider = sliders[current];

    return (
        <div style={{ position: 'relative', width: '100%', height: '70vh', minHeight: '500px', maxHeight: '800px', overflow: 'hidden', background: '#000' }}>
            <Image src={slider.image} alt={slider.title || 'Slider'} fill style={{ objectFit: 'cover' }} priority={current === 0} />

            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0 5%' }}>
                <div style={{ maxWidth: '700px', textAlign: 'left' }}>
                    {slider.title && <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1.1, textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>{slider.title}</h1>}
                    {slider.subtitle && <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)', fontWeight: 700, color: 'var(--primary)', margin: '0.5rem 0 1rem', textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}>{slider.subtitle}</h2>}
                    {slider.description && <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', color: 'rgba(255,255,255,0.9)', margin: '0 0 2rem', lineHeight: 1.6, textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}>{slider.description}</p>}
                    {slider.link && (
                        <a href={slider.link} style={{ display: 'inline-flex', padding: '1rem 2.5rem', background: 'var(--primary)', color: '#fff', textDecoration: 'none', borderRadius: '0.75rem', fontWeight: 900, fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', boxShadow: '0 4px 20px var(--primary-glow)', transition: 'var(--transition)' }}>
                            {slider.buttonText || 'Learn More'}
                        </a>
                    )}
                </div>
            </div>

            {sliders.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        style={{ position: 'absolute', top: '50%', left: '1.5rem', transform: 'translateY(-50%)', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', color: '#fff', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        onMouseOver={e => e.currentTarget.style.background = 'rgba(0,0,0,0.7)'}
                        onMouseOut={e => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={next}
                        style={{ position: 'absolute', top: '50%', right: '1.5rem', transform: 'translateY(-50%)', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', color: '#fff', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        onMouseOver={e => e.currentTarget.style.background = 'rgba(0,0,0,0.7)'}
                        onMouseOut={e => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem', zIndex: 10 }}>
                        {sliders.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goTo(idx)}
                                style={{ width: current === idx ? '2rem' : '0.75rem', height: '0.75rem', borderRadius: '9999px', border: 'none', background: current === idx ? 'var(--primary)' : 'rgba(255,255,255,0.4)', cursor: 'pointer', transition: 'all 0.3s' }}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
