'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [spin, setSpin] = useState(0);
    const [mounted, setMounted] = useState(false);
    const spinRef = useRef(null);

    useEffect(() => {
        setMounted(true);

        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!visible) setVisible(true);
        };

        const handleMouseLeave = () => setVisible(false);
        const handleMouseEnter = () => setVisible(true);

        const handleMouseOver = (e) => {
            const target = e.target;
            const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .btn-primary, .btn-secondary, .btn-share, .btn-icon, label, [tabindex]:not([tabindex="-1"])');
            setIsHovering(!!isInteractive);
        };

        const handleMouseDown = () => {
            setIsLoading(true);
            setSpin(0);
        };

        const handleMouseUp = () => {
            setIsLoading(false);
        };

        const handlePageStart = () => {
            setIsLoading(true);
            setSpin(0);
        };

        const handlePageComplete = () => {
            setIsLoading(false);
        };

        window.addEventListener('mousemove', updatePosition);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('pageshow', handlePageComplete);
        window.addEventListener('load', handlePageComplete);
        window.addEventListener('beforeunload', handlePageStart);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('pageshow', handlePageComplete);
            window.removeEventListener('load', handlePageComplete);
            window.removeEventListener('beforeunload', handlePageStart);
        };
    }, [visible]);

    useEffect(() => {
        if (!isLoading) {
            if (spinRef.current) cancelAnimationFrame(spinRef.current);
            return;
        }

        const animate = () => {
            setSpin(prev => (prev + 4) % 360);
            spinRef.current = requestAnimationFrame(animate);
        };

        spinRef.current = requestAnimationFrame(animate);

        return () => {
            if (spinRef.current) cancelAnimationFrame(spinRef.current);
        };
    }, [isLoading]);

    if (!mounted) return null;

    const baseSize = isHovering ? 36 : 28;
    const strokeWidth = 2.5;
    const teal = '#14B8A6';
    const tealGlow = 'rgba(20, 184, 166, 0.5)';

    return (
        <>
            <style>{`
                * {
                    cursor: none !important;
                }
                @media (max-width: 768px) {
                    * {
                        cursor: auto !important;
                    }
                }
            `}</style>
            <div
                style={{
                    position: 'fixed',
                    left: position.x,
                    top: position.y,
                    width: baseSize,
                    height: baseSize,
                    pointerEvents: 'none',
                    zIndex: 99999,
                    transform: 'translate(-50%, -50%)',
                    opacity: visible ? 1 : 0,
                    transition: 'width 0.2s ease, height 0.2s ease, opacity 0.15s ease',
                }}
            >
                <svg
                    width={baseSize}
                    height={baseSize}
                    viewBox={`0 0 ${baseSize} ${baseSize}`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: 'block' }}
                >
                    {isLoading ? (
                        <>
                            <circle
                                cx={baseSize / 2}
                                cy={baseSize / 2}
                                r={(baseSize / 2) - strokeWidth}
                                stroke={teal}
                                strokeWidth={strokeWidth}
                                strokeLinecap="round"
                                strokeDasharray={`${Math.PI * ((baseSize / 2) - strokeWidth) * 0.75} ${Math.PI * ((baseSize / 2) - strokeWidth) * 0.25}`}
                                strokeDashoffset={0}
                                style={{
                                    transform: `rotate(${spin}deg)`,
                                    transformOrigin: 'center',
                                    transition: 'transform 0.05s linear',
                                }}
                            />
                            <circle
                                cx={baseSize / 2}
                                cy={baseSize / 2}
                                r="2.5"
                                fill={teal}
                            />
                        </>
                    ) : (
                        <>
                            <circle
                                cx={baseSize / 2}
                                cy={baseSize / 2}
                                r={(baseSize / 2) - strokeWidth}
                                stroke={teal}
                                strokeWidth={strokeWidth}
                                strokeLinecap="round"
                                fill="none"
                                style={{
                                    filter: `drop-shadow(0 0 4px ${tealGlow})`,
                                }}
                            />
                            <circle
                                cx={baseSize / 2}
                                cy={baseSize / 2}
                                r="2.5"
                                fill={teal}
                                style={{
                                    filter: `drop-shadow(0 0 3px ${tealGlow})`,
                                }}
                            />
                        </>
                    )}
                </svg>
            </div>
        </>
    );
}