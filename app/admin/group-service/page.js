'use client';

import React, { useState, useEffect } from 'react';
import {
    Package, Wrench, Plus, Search, Edit2, Trash2, X,
    Save, Download, Send, Receipt, Calculator, AlertTriangle,
    CheckCircle, Copy, RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Parts Categories
const PART_CATEGORIES = [
    'General', 'Electronics', 'Mechanical', 'Plumbing', 'Electrical',
    'Hardware', 'Consumables', 'Spare Parts', 'Accessories'
];

// Charge Categories
const CHARGE_CATEGORIES = [
    'Labor', 'Visit', 'Diagnostic', 'Installation', 'Repair',
    'Maintenance', 'Service', 'Consultation', 'Transportation'
];

// Units for parts
const PART_UNITS = ['NOS', 'KG', 'MTR', 'LTR', 'SET', 'BOX', 'PAIR', 'FT', 'INCH', 'MM'];

export default function GroupServicePage() {
    const [activeTab, setActiveTab] = useState('parts');
    const [parts, setParts] = useState([]);
    const [charges, setCharges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    // Modal states
    const [showPartModal, setShowPartModal] = useState(false);
    const [showChargeModal, setShowChargeModal] = useState(false);
    const [showBillModal, setShowBillModal] = useState(false);
    const [editingPart, setEditingPart] = useState(null);
    const [editingCharge, setEditingCharge] = useState(null);

    // Form states
    const [partForm, setPartForm] = useState({
        name: '', partNumber: '', category: 'General', description: '',
        price: 0, costPrice: '', hsnCode: '', gstRate: 18,
        stock: 0, minStock: 0, unit: 'NOS', isActive: true
    });

    const [chargeForm, setChargeForm] = useState({
        name: '', code: '', category: 'Labor', description: '',
        price: 0, gstRate: 18, duration: '', isActive: true
    });

    // Bill generator state
    const [billItems, setBillItems] = useState([]);
    const [billCustomer, setBillCustomer] = useState({
        name: '', phone: '', email: '', address: ''
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [partsRes, chargesRes] = await Promise.all([
                fetch('/api/admin/parts'),
                fetch('/api/admin/charges')
            ]);
            const partsData = await partsRes.json();
            const chargesData = await chargesRes.json();
            setParts(Array.isArray(partsData) ? partsData : []);
            setCharges(Array.isArray(chargesData) ? chargesData : []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };

    // Part operations
    const handleSavePart = async () => {
        const formData = new FormData();
        Object.entries(partForm).forEach(([key, value]) => {
            formData.append(key, String(value));
        });

        const url = editingPart
            ? '/api/admin/parts'
            : '/api/admin/parts';
        const method = editingPart ? 'PUT' : 'POST';

        if (editingPart) {
            formData.append('id', editingPart.id);
        }

        try {
            const res = await fetch(url, {
                method,
                body: formData
            });
            const data = await res.json();
            if (data.success) {
                fetchData();
                closePartModal();
            } else {
                alert(data.error || 'Failed to save part');
            }
        } catch (error) {
            alert('Error saving part');
        }
    };

    const handleDeletePart = async (id) => {
        if (!confirm('Are you sure you want to delete this part?')) return;
        try {
            await fetch(`/api/admin/parts?id=${id}`, { method: 'DELETE' });
            fetchData();
        } catch (error) {
            alert('Error deleting part');
        }
    };

    const openPartModal = (part = null) => {
        if (part) {
            setEditingPart(part);
            setPartForm({
                name: part.name || '',
                partNumber: part.partNumber || '',
                category: part.category || 'General',
                description: part.description || '',
                price: part.price || 0,
                costPrice: part.costPrice || '',
                hsnCode: part.hsnCode || '',
                gstRate: part.gstRate || 18,
                stock: part.stock || 0,
                minStock: part.minStock || 0,
                unit: part.unit || 'NOS',
                isActive: part.isActive
            });
        } else {
            setEditingPart(null);
            setPartForm({
                name: '', partNumber: '', category: 'General', description: '',
                price: 0, costPrice: '', hsnCode: '', gstRate: 18,
                stock: 0, minStock: 0, unit: 'NOS', isActive: true
            });
        }
        setShowPartModal(true);
    };

    const closePartModal = () => {
        setShowPartModal(false);
        setEditingPart(null);
    };

    // Charge operations
    const handleSaveCharge = async () => {
        const formData = new FormData();
        Object.entries(chargeForm).forEach(([key, value]) => {
            formData.append(key, String(value));
        });

        const method = editingCharge ? 'PUT' : 'POST';

        if (editingCharge) {
            formData.append('id', editingCharge.id);
        }

        try {
            const res = await fetch('/api/admin/charges', {
                method,
                body: formData
            });
            const data = await res.json();
            if (data.success) {
                fetchData();
                closeChargeModal();
            } else {
                alert(data.error || 'Failed to save charge');
            }
        } catch (error) {
            alert('Error saving charge');
        }
    };

    const handleDeleteCharge = async (id) => {
        if (!confirm('Are you sure you want to delete this charge?')) return;
        try {
            await fetch(`/api/admin/charges?id=${id}`, { method: 'DELETE' });
            fetchData();
        } catch (error) {
            alert('Error deleting charge');
        }
    };

    const openChargeModal = (charge = null) => {
        if (charge) {
            setEditingCharge(charge);
            setChargeForm({
                name: charge.name || '',
                code: charge.code || '',
                category: charge.category || 'Labor',
                description: charge.description || '',
                price: charge.price || 0,
                gstRate: charge.gstRate || 18,
                duration: charge.duration || '',
                isActive: charge.isActive
            });
        } else {
            setEditingCharge(null);
            setChargeForm({
                name: '', code: '', category: 'Labor', description: '',
                price: 0, gstRate: 18, duration: '', isActive: true
            });
        }
        setShowChargeModal(true);
    };

    const closeChargeModal = () => {
        setShowChargeModal(false);
        setEditingCharge(null);
    };

    // Bill generator
    const addToBill = (item, type) => {
        const existing = billItems.find(i => i.id === item.id && i.type === type);
        if (existing) {
            setBillItems(billItems.map(i =>
                i.id === item.id && i.type === type
                    ? { ...i, qty: i.qty + 1 }
                    : i
            ));
        } else {
            setBillItems([...billItems, {
                id: item.id,
                name: item.name,
                price: item.price,
                gstRate: item.gstRate || 18,
                qty: 1,
                unit: item.unit || 'NOS',
                type
            }]);
        }
    };

    const updateBillItemQty = (index, qty) => {
        const updated = [...billItems];
        updated[index].qty = Math.max(1, parseInt(qty) || 1);
        setBillItems(updated);
    };

    const removeBillItem = (index) => {
        setBillItems(billItems.filter((_, i) => i !== index));
    };

    const calculateBill = () => {
        let subtotal = 0;
        let gstTotal = 0;

        billItems.forEach(item => {
            const itemTotal = item.price * item.qty;
            const gstAmount = itemTotal * (item.gstRate / 100);
            subtotal += itemTotal;
            gstTotal += gstAmount;
        });

        return {
            subtotal,
            gstTotal,
            total: subtotal + gstTotal
        };
    };

    const generateBillPDF = async () => {
        if (billItems.length === 0) {
            alert('Please add items to the bill');
            return;
        }

        try {
            const { subtotal, gstTotal, total } = calculateBill();

            // Generate a simple HTML-based bill for printing
            const billContent = `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Invoice - ${new Date().toISOString().split('T')[0]}</title>
                    <style>
                        * { margin: 0; padding: 0; box-sizing: border-box; }
                        body { font-family: 'Arial', sans-serif; padding: 20px; max-width: 800px; margin: 0 auto; }
                        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #333; }
                        .company-name { font-size: 28px; font-weight: bold; }
                        .invoice-title { font-size: 24px; color: #666; }
                        .bill-to { margin-bottom: 30px; }
                        .bill-to h3 { margin-bottom: 10px; font-size: 14px; color: #666; }
                        .bill-to p { margin: 4px 0; }
                        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
                        th { background: #f5f5f5; font-weight: bold; }
                        .text-right { text-align: right; }
                        .text-center { text-align: center; }
                        .totals { margin-top: 20px; }
                        .totals .row { display: flex; justify-content: flex-end; padding: 8px 0; }
                        .totals .label { width: 150px; text-align: right; padding-right: 20px; }
                        .totals .value { width: 120px; text-align: right; }
                        .grand-total { font-size: 18px; font-weight: bold; border-top: 2px solid #333; padding-top: 10px; }
                        .footer { margin-top: 50px; text-align: center; color: #666; font-size: 12px; }
                        @media print { body { padding: 0; } }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <div class="company-name">SURAKSHA</div>
                        <div class="invoice-title">INVOICE</div>
                    </div>
                    
                    <div class="bill-to">
                        <h3>BILL TO:</h3>
                        <p><strong>${billCustomer.name || 'Customer Name'}</strong></p>
                        <p>${billCustomer.phone || '-'}</p>
                        <p>${billCustomer.email || '-'}</p>
                        <p>${billCustomer.address || '-'}</p>
                    </div>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th class="text-center">Qty</th>
                                <th>Unit</th>
                                <th class="text-right">Rate</th>
                                <th class="text-right">GST %</th>
                                <th class="text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${billItems.map(item => `
                                <tr>
                                    <td>${item.name}</td>
                                    <td class="text-center">${item.qty}</td>
                                    <td>${item.unit}</td>
                                    <td class="text-right">₹${item.price.toFixed(2)}</td>
                                    <td class="text-right">${item.gstRate}%</td>
                                    <td class="text-right">₹${(item.price * item.qty).toFixed(2)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                    
                    <div class="totals">
                        <div class="row">
                            <div class="label">Subtotal:</div>
                            <div class="value">₹${subtotal.toFixed(2)}</div>
                        </div>
                        <div class="row">
                            <div class="label">GST Total:</div>
                            <div class="value">₹${gstTotal.toFixed(2)}</div>
                        </div>
                        <div class="row grand-total">
                            <div class="label">TOTAL:</div>
                            <div class="value">₹${total.toFixed(2)}</div>
                        </div>
                    </div>
                    
                    <div class="footer">
                        <p>Thank you for your business!</p>
                        <p>Generated on ${new Date().toLocaleString()}</p>
                    </div>
                </body>
                </html>
            `;

            // Open in new window for printing
            const printWindow = window.open('', '_blank');
            printWindow.document.write(billContent);
            printWindow.document.close();
            printWindow.print();

        } catch (error) {
            alert('Error generating bill: ' + error.message);
        }
    };

    const filteredParts = parts.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.partNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredCharges = charges.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.code?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem' }}>
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '0.5rem' }}>
                        Billing & Invoice Service
                    </h1>
                    <p style={{ color: 'var(--text-dim)' }}>
                        Manage Parts, Service Charges & Generate Bills
                    </p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => setShowBillModal(true)}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            padding: '0.75rem 1.5rem', background: 'var(--primary)',
                            color: '#fff', borderRadius: '0.75rem', fontWeight: 600,
                            border: 'none', cursor: 'pointer'
                        }}
                    >
                        <Receipt size={20} />
                        Generate Bill
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-glass)', paddingBottom: '0.5rem' }}>
                {[
                    { id: 'parts', label: 'Parts', icon: Package, count: parts.length },
                    { id: 'charges', label: 'Service Charges', icon: Wrench, count: charges.length }
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            padding: '0.75rem 1.5rem', borderRadius: '0.5rem',
                            background: activeTab === tab.id ? 'var(--primary)' : 'transparent',
                            color: activeTab === tab.id ? '#fff' : 'var(--text-dim)',
                            border: 'none', cursor: 'pointer', fontWeight: 600,
                            transition: 'var(--transition)'
                        }}
                    >
                        <tab.icon size={18} />
                        {tab.label}
                        <span style={{
                            background: activeTab === tab.id ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
                            padding: '0.125rem 0.5rem', borderRadius: '1rem', fontSize: '0.75rem'
                        }}>
                            {tab.count}
                        </span>
                    </button>
                ))}
            </div>

            {/* Search & Add */}
            <div className="flex justify-between items-center mb-6">
                <div style={{ position: 'relative', width: '300px' }}>
                    <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: '100%', padding: '0.75rem 1rem 0.75rem 2.75rem',
                            background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)',
                            borderRadius: '0.5rem', color: '#fff', outline: 'none'
                        }}
                    />
                </div>
                <button
                    onClick={() => activeTab === 'parts' ? openPartModal() : openChargeModal()}
                    style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.75rem 1.5rem', background: 'var(--primary)',
                        color: '#fff', borderRadius: '0.5rem', fontWeight: 600,
                        border: 'none', cursor: 'pointer'
                    }}
                >
                    <Plus size={18} />
                    Add {activeTab === 'parts' ? 'Part' : 'Charge'}
                </button>
            </div>

            {/* Parts Table */}
            {activeTab === 'parts' && (
                <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '0.75rem', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, fontSize: '0.875rem' }}>Part Number</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, fontSize: '0.875rem' }}>Name</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, fontSize: '0.875rem' }}>Category</th>
                                <th style={{ padding: '1rem', textAlign: 'right', fontWeight: 600, fontSize: '0.875rem' }}>Price</th>
                                <th style={{ padding: '1rem', textAlign: 'right', fontWeight: 600, fontSize: '0.875rem' }}>Stock</th>
                                <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 600, fontSize: '0.875rem' }}>GST</th>
                                <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 600, fontSize: '0.875rem' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredParts.map(part => (
                                <tr key={part.id} style={{ borderBottom: '1px solid var(--border-glass)' }}>
                                    <td style={{ padding: '1rem', fontFamily: 'monospace', fontSize: '0.875rem' }}>{part.partNumber || '-'}</td>
                                    <td style={{ padding: '1rem', fontWeight: 600 }}>{part.name}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{
                                            background: 'rgba(108, 99, 255, 0.2)', padding: '0.25rem 0.75rem',
                                            borderRadius: '1rem', fontSize: '0.75rem'
                                        }}>
                                            {part.category}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem', textAlign: 'right', fontWeight: 600, color: '#4ade80' }}>₹{part.price.toFixed(2)}</td>
                                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                                        <span style={{ color: part.stock <= part.minStock ? '#f87171' : '#4ade80', fontWeight: 600 }}>
                                            {part.stock} {part.unit}
                                        </span>
                                        {part.stock <= part.minStock && (
                                            <AlertTriangle size={14} style={{ color: '#f87171', marginLeft: '0.5rem' }} />
                                        )}
                                    </td>
                                    <td style={{ padding: '1rem', textAlign: 'center' }}>{part.gstRate}%</td>
                                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                                            <button onClick={() => addToBill(part, 'part')} style={{ padding: '0.5rem', background: 'rgba(74, 222, 128, 0.1)', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', color: '#4ade80' }}>
                                                <Plus size={16} />
                                            </button>
                                            <button onClick={() => openPartModal(part)} style={{ padding: '0.5rem', background: 'rgba(108, 99, 255, 0.1)', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', color: 'var(--primary)' }}>
                                                <Edit2 size={16} />
                                            </button>
                                            <button onClick={() => handleDeletePart(part.id)} style={{ padding: '0.5rem', background: 'rgba(248, 113, 113, 0.1)', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', color: '#f87171' }}>
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredParts.length === 0 && (
                                <tr>
                                    <td colSpan={7} style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-dim)' }}>
                                        No parts found. Add your first part!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Charges Table */}
            {activeTab === 'charges' && (
                <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '0.75rem', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, fontSize: '0.875rem' }}>Code</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, fontSize: '0.875rem' }}>Name</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600, fontSize: '0.875rem' }}>Category</th>
                                <th style={{ padding: '1rem', textAlign: 'right', fontWeight: 600, fontSize: '0.875rem' }}>Price</th>
                                <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 600, fontSize: '0.875rem' }}>Duration</th>
                                <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 600, fontSize: '0.875rem' }}>GST</th>
                                <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 600, fontSize: '0.875rem' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCharges.map(charge => (
                                <tr key={charge.id} style={{ borderBottom: '1px solid var(--border-glass)' }}>
                                    <td style={{ padding: '1rem', fontFamily: 'monospace', fontSize: '0.875rem' }}>{charge.code || '-'}</td>
                                    <td style={{ padding: '1rem', fontWeight: 600 }}>{charge.name}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{
                                            background: 'rgba(255, 101, 132, 0.2)', padding: '0.25rem 0.75rem',
                                            borderRadius: '1rem', fontSize: '0.75rem'
                                        }}>
                                            {charge.category}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem', textAlign: 'right', fontWeight: 600, color: '#4ade80' }}>₹{charge.price.toFixed(2)}</td>
                                    <td style={{ padding: '1rem', textAlign: 'center' }}>{charge.duration ? `${charge.duration} min` : '-'}</td>
                                    <td style={{ padding: '1rem', textAlign: 'center' }}>{charge.gstRate}%</td>
                                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                                            <button onClick={() => addToBill(charge, 'charge')} style={{ padding: '0.5rem', background: 'rgba(74, 222, 128, 0.1)', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', color: '#4ade80' }}>
                                                <Plus size={16} />
                                            </button>
                                            <button onClick={() => openChargeModal(charge)} style={{ padding: '0.5rem', background: 'rgba(108, 99, 255, 0.1)', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', color: 'var(--primary)' }}>
                                                <Edit2 size={16} />
                                            </button>
                                            <button onClick={() => handleDeleteCharge(charge.id)} style={{ padding: '0.5rem', background: 'rgba(248, 113, 113, 0.1)', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', color: '#f87171' }}>
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredCharges.length === 0 && (
                                <tr>
                                    <td colSpan={7} style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-dim)' }}>
                                        No service charges found. Add your first charge!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Part Modal */}
            <AnimatePresence>
                {showPartModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100
                        }}
                        onClick={closePartModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            style={{
                                background: 'var(--bg-dark)', borderRadius: '1rem', padding: '2rem',
                                width: '90%', maxWidth: '600px', maxHeight: '90vh', overflow: 'auto'
                            }}
                            onClick={e => e.stopPropagation()}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 900 }}>
                                    {editingPart ? 'Edit Part' : 'Add New Part'}
                                </h2>
                                <button onClick={closePartModal} style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}>
                                    <X size={24} />
                                </button>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Name *</label>
                                    <input
                                        type="text"
                                        value={partForm.name}
                                        onChange={e => setPartForm({ ...partForm, name: e.target.value })}
                                        style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.5rem', color: '#fff' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Part Number</label>
                                    <input
                                        type="text"
                                        value={partForm.partNumber}
                                        onChange={e => setPartForm({ ...partForm, partNumber: e.target.value })}
                                        style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.5rem', color: '#fff' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Category</label>
                                    <select
                                        value={partForm.category}
                                        onChange={e => setPartForm({ ...partForm, category: e.target.value })}
                                        style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.5rem', color: '#fff' }}
                                    >
                                        {PART_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Unit</label>
                                    <select
                                        value={partForm.unit}
                                        onChange={e => setPartForm({ ...partForm, unit: e.target.value })}
                                        style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.5rem', color: '#fff' }}
                                    >
                                        {PART_UNITS.map(unit => <option key={unit} value={unit}>{unit}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Selling Price *</label>
                                    <input
                                        type="number"
                                        value={partForm.price}
                                        onChange={e => setPartForm({ ...partForm, price: parseFloat(e.target.value) || 0 })}
                                        style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.5rem', color: '#fff' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Cost Price</label>
                                    <input
                                        type="number"
                                        value={partForm.costPrice}
                                        onChange={e => setPartForm({ ...partForm, costPrice: e.target.value })}
                                        style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.5rem', color: '#fff' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>GST Rate (%)</label>
                                    <input
                                        type="number"
                                        value={partForm.gstRate}
                                        onChange={e => setPartForm({ ...partForm, gstRate: parseFloat(e.target.value) || 0 })}
                                        style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.5rem', color: '#fff' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>HSN Code</label>
                                    <input
                                        type="text"
                                        value={partForm.hsnCode}
                                        onChange={e => setPartForm({ ...partForm, hsnCode: e.target.value })}
                                        style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.5rem', color: '#fff' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Stock</label>
                                    <input
                                        type="number"
                                        value={partForm.stock}
                                        onChange={e => setPartForm({ ...partForm, stock: parseInt(e.target.value) || 0 })}
                                        style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.5rem', color: '#fff' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Min Stock Alert</label>
                                    <input
                                        type="number"
                                        value={partForm.minStock}
                                        onChange={e => setPartForm({ ...partForm, minStock: parseInt(e.target.value) || 0 })}
                                        style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.5rem', color: '#fff' }}
                                    />
                                </div>
                                <div style={{ gridColumn: '1 / -1' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Description</label>
                                    <textarea
                                        value={partForm.description}
                                        onChange={e => setPartForm({ ...partForm, description: e.target.value })}
                                        rows={3}
                                        style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.5rem', color: '#fff', resize: 'vertical' }}
                                    />
                                </div>
                                <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <input
                                        type="checkbox"
                                        checked={partForm.isActive}
                                        onChange={e => setPartForm({ ...partForm, isActive: e.target.checked })}
                                        id="partActive"
                                    />
                                    <label htmlFor="partActive">Active</label>
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem' }}>
                                <button onClick={closePartModal} style={{ padding: '0.75rem 1.5rem', background: 'transparent', border: '1px solid var(--border-glass)', borderRadius: '0.5rem', color: '#fff', cursor: 'pointer' }}>
                                    Cancel
                                </button>
                                <button onClick={handleSavePart} style={{ padding: '0.75rem 1.5rem', background: 'var(--primary)', border: 'none', borderRadius: '0.5rem', color: '#fff', cursor: 'pointer', fontWeight: 600 }}>
                                    <Save size={18} style={{ marginRight: '0.5rem' }} />
                                    Save Part
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Charge Modal */}
            <AnimatePresence>
                {showChargeModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100
                        }}
                        onClick={closeChargeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            style={{
                                background: 'var(--bg-dark)', borderRadius: '1rem', padding: '2rem',
                                width: '90%', maxWidth: '600px', maxHeight: '90vh', overflow: 'auto'
                            }}
                            onClick={e => e.stopPropagation()}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 900 }}>
                                    {editingCharge ? 'Edit Charge' : 'Add New Service Charge'}
                                </h2>
                                <button onClick={closeChargeModal} style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}>
                                    <X size={24} />
                                </button>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Name *</label>
                                    <input
                                        type="text"
                                        value={chargeForm.name}
                                        onChange={e => setChargeForm({ ...chargeForm, name: e.target.value })}
                                        style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.5rem', color: '#fff' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Code</label>
                                    <input
                                        type="text"
                                        value={chargeForm.code}
                                        onChange={e => setChargeForm({ ...chargeForm, code: e.target.value })}
                                        placeholder="e.g., LAB-001"
                                        style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.5rem', color: '#fff' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Category</label>
                                    <select
                                        value={chargeForm.category}
                                        onChange={e => setChargeForm({ ...chargeForm, category: e.target.value })}
                                        style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.5rem', color: '#fff' }}
                                    >
                                        {CHARGE_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Price *</label>
                                    <input
                                        type="number"
                                        value={chargeForm.price}
                                        onChange={e => setChargeForm({ ...chargeForm, price: parseFloat(e.target.value) || 0 })}
                                        style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.5rem', color: '#fff' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>GST Rate (%)</label>
                                    <input
                                        type="number"
                                        value={chargeForm.gstRate}
                                        onChange={e => setChargeForm({ ...chargeForm, gstRate: parseFloat(e.target.value) || 0 })}
                                        style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.5rem', color: '#fff' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Duration (minutes)</label>
                                    <input
                                        type="number"
                                        value={chargeForm.duration}
                                        onChange={e => setChargeForm({ ...chargeForm, duration: e.target.value })}
                                        placeholder="e.g., 60"
                                        style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.5rem', color: '#fff' }}
                                    />
                                </div>
                                <div style={{ gridColumn: '1 / -1' }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>Description</label>
                                    <textarea
                                        value={chargeForm.description}
                                        onChange={e => setChargeForm({ ...chargeForm, description: e.target.value })}
                                        rows={3}
                                        style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.5rem', color: '#fff', resize: 'vertical' }}
                                    />
                                </div>
                                <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <input
                                        type="checkbox"
                                        checked={chargeForm.isActive}
                                        onChange={e => setChargeForm({ ...chargeForm, isActive: e.target.checked })}
                                        id="chargeActive"
                                    />
                                    <label htmlFor="chargeActive">Active</label>
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem' }}>
                                <button onClick={closeChargeModal} style={{ padding: '0.75rem 1.5rem', background: 'transparent', border: '1px solid var(--border-glass)', borderRadius: '0.5rem', color: '#fff', cursor: 'pointer' }}>
                                    Cancel
                                </button>
                                <button onClick={handleSaveCharge} style={{ padding: '0.75rem 1.5rem', background: 'var(--primary)', border: 'none', borderRadius: '0.5rem', color: '#fff', cursor: 'pointer', fontWeight: 600 }}>
                                    <Save size={18} style={{ marginRight: '0.5rem' }} />
                                    Save Charge
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bill Generator Modal */}
            <AnimatePresence>
                {showBillModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100
                        }}
                        onClick={() => setShowBillModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            style={{
                                background: 'var(--bg-dark)', borderRadius: '1rem', padding: '2rem',
                                width: '95%', maxWidth: '1200px', maxHeight: '90vh', overflow: 'auto'
                            }}
                            onClick={e => e.stopPropagation()}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 900 }}>
                                    Generate Bill
                                </h2>
                                <button onClick={() => setShowBillModal(false)} style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}>
                                    <X size={24} />
                                </button>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                {/* Left: Available Items */}
                                <div>
                                    <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Available Items</h3>

                                    {/* Customer Info */}
                                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
                                        <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>Customer Details</h4>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                            <input
                                                placeholder="Customer Name"
                                                value={billCustomer.name}
                                                onChange={e => setBillCustomer({ ...billCustomer, name: e.target.value })}
                                                style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.25rem', color: '#fff', fontSize: '0.875rem' }}
                                            />
                                            <input
                                                placeholder="Phone"
                                                value={billCustomer.phone}
                                                onChange={e => setBillCustomer({ ...billCustomer, phone: e.target.value })}
                                                style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.25rem', color: '#fff', fontSize: '0.875rem' }}
                                            />
                                            <input
                                                placeholder="Email"
                                                value={billCustomer.email}
                                                onChange={e => setBillCustomer({ ...billCustomer, email: e.target.value })}
                                                style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.25rem', color: '#fff', fontSize: '0.875rem' }}
                                            />
                                            <input
                                                placeholder="Address"
                                                value={billCustomer.address}
                                                onChange={e => setBillCustomer({ ...billCustomer, address: e.target.value })}
                                                style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.25rem', color: '#fff', fontSize: '0.875rem' }}
                                            />
                                        </div>
                                    </div>

                                    {/* Parts */}
                                    <div style={{ marginBottom: '1rem' }}>
                                        <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Package size={16} /> Parts
                                        </h4>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {parts.filter(p => p.isActive).map(part => (
                                                <button
                                                    key={part.id}
                                                    onClick={() => addToBill(part, 'part')}
                                                    style={{
                                                        padding: '0.5rem 0.75rem', background: 'rgba(108, 99, 255, 0.1)',
                                                        border: '1px solid var(--border-glass)', borderRadius: '0.25rem',
                                                        color: '#fff', cursor: 'pointer', fontSize: '0.75rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
                                                    }}
                                                >
                                                    <span style={{ fontWeight: 600 }}>{part.name}</span>
                                                    <span style={{ color: '#4ade80' }}>₹{part.price} {part.unit}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Charges */}
                                    <div>
                                        <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Wrench size={16} /> Service Charges
                                        </h4>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {charges.filter(c => c.isActive).map(charge => (
                                                <button
                                                    key={charge.id}
                                                    onClick={() => addToBill(charge, 'charge')}
                                                    style={{
                                                        padding: '0.5rem 0.75rem', background: 'rgba(255, 101, 132, 0.1)',
                                                        border: '1px solid var(--border-glass)', borderRadius: '0.25rem',
                                                        color: '#fff', cursor: 'pointer', fontSize: '0.75rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
                                                    }}
                                                >
                                                    <span style={{ fontWeight: 600 }}>{charge.name}</span>
                                                    <span style={{ color: '#4ade80' }}>₹{charge.price}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Bill Preview */}
                                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '0.5rem' }}>
                                    <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Bill Preview</h3>

                                    {billItems.length === 0 ? (
                                        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-dim)' }}>
                                            Click items to add them to the bill
                                        </div>
                                    ) : (
                                        <>
                                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                                                <thead>
                                                    <tr style={{ borderBottom: '1px solid var(--border-glass)' }}>
                                                        <th style={{ padding: '0.5rem', textAlign: 'left' }}>Item</th>
                                                        <th style={{ padding: '0.5rem', textAlign: 'center', width: '60px' }}>Qty</th>
                                                        <th style={{ padding: '0.5rem', textAlign: 'right' }}>Rate</th>
                                                        <th style={{ padding: '0.5rem', textAlign: 'right' }}>Amount</th>
                                                        <th style={{ padding: '0.5rem', width: '30px' }}></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {billItems.map((item, index) => (
                                                        <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                                            <td style={{ padding: '0.5rem' }}>
                                                                <div style={{ fontWeight: 600 }}>{item.name}</div>
                                                                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>GST: {item.gstRate}%</div>
                                                            </td>
                                                            <td style={{ padding: '0.5rem', textAlign: 'center' }}>
                                                                <input
                                                                    type="number"
                                                                    min="1"
                                                                    value={item.qty}
                                                                    onChange={e => updateBillItemQty(index, e.target.value)}
                                                                    style={{ width: '50px', padding: '0.25rem', textAlign: 'center', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '0.25rem', color: '#fff' }}
                                                                />
                                                            </td>
                                                            <td style={{ padding: '0.5rem', textAlign: 'right' }}>₹{item.price.toFixed(2)}</td>
                                                            <td style={{ padding: '0.5rem', textAlign: 'right', fontWeight: 600 }}>₹{(item.price * item.qty).toFixed(2)}</td>
                                                            <td style={{ padding: '0.5rem' }}>
                                                                <button onClick={() => removeBillItem(index)} style={{ background: 'none', border: 'none', color: '#f87171', cursor: 'pointer', padding: '0.25rem' }}>
                                                                    <X size={16} />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>

                                            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-glass)' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.25rem 0' }}>
                                                    <span>Subtotal</span>
                                                    <span>₹{calculateBill().subtotal.toFixed(2)}</span>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.25rem 0' }}>
                                                    <span>GST Total</span>
                                                    <span>₹{calculateBill().gstTotal.toFixed(2)}</span>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', fontSize: '1.25rem', fontWeight: 900, color: '#4ade80' }}>
                                                    <span>Total</span>
                                                    <span>₹{calculateBill().total.toFixed(2)}</span>
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                                <button
                                                    onClick={generateBillPDF}
                                                    style={{
                                                        flex: 1, padding: '0.75rem', background: 'var(--primary)',
                                                        border: 'none', borderRadius: '0.5rem', color: '#fff',
                                                        cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                                                    }}
                                                >
                                                    <Download size={18} />
                                                    Download PDF
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
