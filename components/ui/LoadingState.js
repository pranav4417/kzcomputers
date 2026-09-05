'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';

export default function LoadingState({ message = 'Loading...' }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '300px',
            padding: '2rem',
            gap: '1rem'
        }}>
            <Loader2
                size={40}
                style={{
                    animation: 'spin 1s linear infinite',
                    color: 'var(--primary, #003B73)'
                }}
            />
            <p style={{
                color: 'var(--text-dim, #666)',
                fontSize: '0.875rem'
            }}>
                {message}
            </p>
            <style jsx>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}

// Skeleton loader for cards
export function CardSkeleton() {
    return (
        <div className="glass p-8 relative overflow-hidden">
            <div style={{
                height: '48px',
                width: '48px',
                borderRadius: '0.75rem',
                background: 'rgba(255,255,255,0.05)',
                marginBottom: '1rem',
                animation: 'pulse 1.5s ease-in-out infinite'
            }} />
            <div style={{
                height: '32px',
                width: '60%',
                background: 'rgba(255,255,255,0.05)',
                marginBottom: '0.5rem',
                animation: 'pulse 1.5s ease-in-out infinite'
            }} />
            <div style={{
                height: '16px',
                width: '40%',
                background: 'rgba(255,255,255,0.05)',
                animation: 'pulse 1.5s ease-in-out infinite'
            }} />
            <style jsx>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
            `}</style>
        </div>
    );
}

// Skeleton loader for table
export function TableSkeleton({ rows = 5 }) {
    return (
        <div className="table-wrapper m-0 pb-2">
            <table className="data-table">
                <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                        <th>Ticket</th>
                        <th>Customer</th>
                        <th>Service</th>
                        <th>Priority</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: rows }).map((_, idx) => (
                        <tr key={idx}>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <td key={i}>
                                    <div style={{
                                        height: '20px',
                                        width: `${Math.random() * 60 + 40}%`,
                                        background: 'rgba(255,255,255,0.05)',
                                        borderRadius: '0.25rem',
                                        animation: 'pulse 1.5s ease-in-out infinite',
                                        animationDelay: `${idx * 0.1}s`
                                    }} />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <style jsx>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
            `}</style>
        </div>
    );
}
