'use client';

import React, { useState, useEffect } from 'react';
import { Palette, Share2, Type, Sun, Moon, Save, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function AppearanceManagement() {
    const router = useRouter();
    const [config, setConfig] = useState({
        primary: '#003B73',
        secondary: '#6C757D',
        font: 'Inter',
        mode: 'dark'
    });
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const checkRole = async () => {
            const res = await fetch('/api/auth/session-check');
            const data = await res.json();
            if (!data.user || data.user.role?.toLowerCase() !== 'superadmin') {
                router.push('/admin');
            }
        };
        checkRole();
    }, []);

    const handleSave = () => {
        setSaving(true);
        setTimeout(() => {
            setSaving(false);
            alert('Branding settings updated globally!');
        }, 1000);
    };

    return (
        <div className="space-y-10 animate-fade-in">
            <div>
                <h1 className="text-3xl font-black mb-2">Brand <span className="gradient-text">Identity</span></h1>
                <p className="text-text-dim text-sm">Customize the visual experience for your customers.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Color Palette */}
                <div className="glass p-8 space-y-8">
                    <h3 className="text-lg font-bold flex items-center gap-2"><Palette className="w-5 h-5 text-primary" /> Color Scheme</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase font-bold text-text-dim tracking-widest block">Primary Accent</label>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl border border-white/10" style={{ background: config.primary }} />
                                <input
                                    type="text"
                                    className="bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none text-xs flex-1"
                                    value={config.primary} onChange={e => setConfig({ ...config, primary: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] uppercase font-bold text-text-dim tracking-widest block">Secondary Glow</label>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl border border-white/10" style={{ background: config.secondary }} />
                                <input
                                    type="text"
                                    className="bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none text-xs flex-1"
                                    value={config.secondary} onChange={e => setConfig({ ...config, secondary: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5">
                        <h4 className="text-sm font-bold mb-4">Live Preview</h4>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 rounded-xl font-bold text-white text-xs transition-all" style={{ background: config.primary }}>Solid Primary</button>
                            <button className="px-6 py-3 rounded-xl font-bold text-xs border transition-all" style={{ borderColor: config.secondary, color: config.secondary }}>Ghost Secondary</button>
                        </div>
                    </div>
                </div>

                {/* Typography & Mode */}
                <div className="glass p-8 space-y-8">
                    <h3 className="text-lg font-bold flex items-center gap-2"><Type className="w-5 h-5 text-secondary" /> Typography & Mode</h3>

                    <div className="space-y-6">
                        <div>
                            <label className="text-[10px] uppercase font-bold text-text-dim tracking-widest block mb-3">Font Family</label>
                            <select className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none appearance-none cursor-pointer">
                                <option>Inter, sans-serif</option>
                                <option>Roboto, sans-serif</option>
                                <option>Montserrat, sans-serif</option>
                                <option>Outfit, sans-serif</option>
                            </select>
                        </div>

                        <div className="pt-6 border-t border-white/5">
                            <label className="text-[10px] uppercase font-bold text-text-dim tracking-widest block mb-4">Interface Mode</label>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="glass p-4 flex flex-col items-center gap-2 border-primary/40 bg-primary/5">
                                    <Moon className="w-5 h-5 text-primary" />
                                    <span className="text-xs font-bold">Dark Glass</span>
                                </button>
                                <button className="glass p-4 flex flex-col items-center gap-2 opacity-50 grayscale">
                                    <Sun className="w-5 h-5" />
                                    <span className="text-xs font-bold">Light Minimal</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-6">
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="btn-primary flex items-center gap-2 py-4 px-10 shadow-2xl"
                >
                    {saving ? <RefreshCw className="w-5 h-5 animate-spin" /> : <><Save className="w-5 h-5" /> Apply Branding</>}
                </button>
            </div>
        </div>
    );
}
