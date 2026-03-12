'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => null,
});

// Set default dark theme before React loads to prevent flash
if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (!stored) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(storedTheme);
        document.documentElement.setAttribute('data-theme', storedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    // Prevent hydration mismatch by initially rendering nothing until mounted on the client
    if (!mounted) {
        return <div style={{ visibility: 'hidden' }}>{children}</div>;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
