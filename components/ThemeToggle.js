'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

export default function ThemeToggle({ label = false }) {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.25rem',
                borderRadius: '9999px',
                border: '2px solid var(--primary)',
                background: theme === 'dark' ? 'rgba(0, 59, 115, 0.15)' : 'rgba(0, 59, 115, 0.08)',
                color: 'var(--primary)',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: 700,
                transition: 'var(--transition)',
                boxShadow: '0 0 15px var(--primary-glow)',
                backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = theme === 'dark' ? 'rgba(0, 59, 115, 0.3)' : 'rgba(0, 59, 115, 0.15)';
                e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = theme === 'dark' ? 'rgba(0, 59, 115, 0.15)' : 'rgba(0, 59, 115, 0.08)';
                e.currentTarget.style.transform = 'scale(1)';
            }}
        >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            {label && <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>}
        </button>
    );
}
