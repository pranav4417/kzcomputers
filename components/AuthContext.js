'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext(null);

// Session timeout constants (in milliseconds)
const INACTIVITY_WARNING_DELAY = 60 * 1000; // 1 minute of inactivity before showing warning
const SESSION_TIMEOUT = 10 * 60 * 1000; // 10 minute total session timeout

export function AuthProvider({ children }) {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showTimeoutWarning, setShowTimeoutWarning] = useState(false);
    const [timeoutCountdown, setTimeoutCountdown] = useState(0);

    const warningTimerRef = useRef(null);
    const logoutTimerRef = useRef(null);
    const countdownRef = useRef(null);
    const lastActivityRef = useRef(Date.now());

    // Check session on mount
    useEffect(() => {
        checkSession();
    }, []);

    // Track user activity
    useEffect(() => {
        if (!user) return;

        const handleActivity = () => {
            lastActivityRef.current = Date.now();

            // If warning is showing and user is active, reset everything
            if (showTimeoutWarning) {
                resetTimers();
                setShowTimeoutWarning(false);
                setTimeoutCountdown(0);
            }
        };

        // Activity listeners
        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('mousedown', handleActivity);
        window.addEventListener('keypress', handleActivity);
        window.addEventListener('scroll', handleActivity);
        window.addEventListener('touchstart', handleActivity);

        return () => {
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('mousedown', handleActivity);
            window.removeEventListener('keypress', handleActivity);
            window.removeEventListener('scroll', handleActivity);
            window.removeEventListener('touchstart', handleActivity);
        };
    }, [user, showTimeoutWarning]);

    // Start the warning timer when user is logged in
    useEffect(() => {
        if (!user) return;

        // Clear any existing timers
        if (warningTimerRef.current) clearTimeout(warningTimerRef.current);
        if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current);

        // Set timer to show warning after 1 minute of inactivity
        warningTimerRef.current = setTimeout(() => {
            setShowTimeoutWarning(true);
            setTimeoutCountdown(SESSION_TIMEOUT / 1000); // 10 minutes in seconds

            // Start countdown
            countdownRef.current = setInterval(() => {
                setTimeoutCountdown(prev => {
                    if (prev <= 1) {
                        // Time's up - logout
                        logout();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            // Set logout timer for 10 minutes from now
            logoutTimerRef.current = setTimeout(() => {
                logout();
            }, SESSION_TIMEOUT);
        }, INACTIVITY_WARNING_DELAY);

        return () => {
            if (warningTimerRef.current) clearTimeout(warningTimerRef.current);
            if (countdownRef.current) clearInterval(countdownRef.current);
        };
    }, [user]);

    const resetTimers = useCallback(() => {
        if (warningTimerRef.current) clearTimeout(warningTimerRef.current);
        if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current);
        if (countdownRef.current) clearInterval(countdownRef.current);

        lastActivityRef.current = Date.now();

        // Restart the warning timer
        warningTimerRef.current = setTimeout(() => {
            setShowTimeoutWarning(true);
            setTimeoutCountdown(SESSION_TIMEOUT / 1000);

            countdownRef.current = setInterval(() => {
                setTimeoutCountdown(prev => {
                    if (prev <= 1) {
                        logout();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            logoutTimerRef.current = setTimeout(() => {
                logout();
            }, SESSION_TIMEOUT);
        }, INACTIVITY_WARNING_DELAY);
    }, []);

    const checkSession = async () => {
        try {
            const res = await fetch('/api/auth/session-check');
            const data = await res.json();
            if (data.user) {
                setUser(data.user);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error('Session check failed:', error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const logout = useCallback(async () => {
        // Clear timers
        if (warningTimerRef.current) clearTimeout(warningTimerRef.current);
        if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current);
        if (countdownRef.current) clearInterval(countdownRef.current);

        setShowTimeoutWarning(false);
        setTimeoutCountdown(0);

        try {
            await fetch('/api/auth/logout', { method: 'POST' });
        } catch (e) {
            // Ignore errors
        }

        // Clear cookie
        document.cookie = 'auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        setUser(null);
        window.location.href = '/admin/login';
    }, []);

    const extendSession = useCallback(() => {
        resetTimers();
        setShowTimeoutWarning(false);
        setTimeoutCountdown(0);
    }, [resetTimers]);

    const value = {
        user,
        loading,
        showTimeoutWarning,
        timeoutCountdown,
        logout,
        extendSession,
        checkSession
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export default AuthContext;
