'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const transitionVariants = {
    fade: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    },
    'slide-left': {
        initial: { x: '100%', opacity: 1 },
        animate: { x: 0, opacity: 1 },
        exit: { x: '-100%', opacity: 1 }
    },
    'slide-right': {
        initial: { x: '-100%', opacity: 1 },
        animate: { x: 0, opacity: 1 },
        exit: { x: '100%', opacity: 1 }
    },
    'slide-up': {
        initial: { y: '100%', opacity: 1 },
        animate: { y: 0, opacity: 1 },
        exit: { y: '-100%', opacity: 1 }
    },
    'slide-down': {
        initial: { y: '-100%', opacity: 1 },
        animate: { y: 0, opacity: 1 },
        exit: { y: '100%', opacity: 1 }
    },
    zoom: {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 1.2, opacity: 0 }
    },
    flip: {
        initial: { rotateY: 90, opacity: 0 },
        animate: { rotateY: 0, opacity: 1 },
        exit: { rotateY: -90, opacity: 0 }
    }
};

export default function HomepageSlider({ sliders = [] }) {
    const [current, setCurrent] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        if (!isAutoPlaying || sliders.length <= 1) return;
        const timer = setInterval(() => {
            setDirection(1);
            setCurrent(prev => (prev + 1) % sliders.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isAutoPlaying, sliders.length]);

    const goTo = (index) => {
        setIsAutoPlaying(false);
        setDirection(index > current ? 1 : -1);
        setCurrent(index);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const prev = () => {
        setDirection(-1);
        goTo((current - 1 + sliders.length) % sliders.length);
    };

    const next = () => {
        setDirection(1);
        goTo((current + 1) % sliders.length);
    };

    if (!sliders.length) return null;

    const slider = sliders[current];
    const transitionType = slider.transitionType || 'fade';
    const variants = transitionVariants[transitionType] || transitionVariants.fade;
    const isFlip = transitionType === 'flip';

    return (
        <div style={{ position: 'relative', width: '100%', height: '70vh', minHeight: '500px', maxHeight: '800px', overflow: 'hidden', background: '#000', perspective: isFlip ? '1200px' : 'none' }}>
            <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                    key={current}
                    custom={direction}
                    initial={variants.initial}
                    animate={variants.animate}
                    exit={variants.exit}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden' }}
                >
                    {slider.image ? (
                        <Image src={slider.image} alt={slider.title || 'Slider'} fill style={{ objectFit: 'cover' }} priority={current === 0} />
                    ) : (
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #001f3f 0%, #003B73 50%, #0066CC 100%)' }} />
                    )}

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
                </motion.div>
            </AnimatePresence>

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
