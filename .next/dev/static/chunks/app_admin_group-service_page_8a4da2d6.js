(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/admin/group-service/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GroupServicePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// Parts Categories
const PART_CATEGORIES = [
    'General',
    'Electronics',
    'Mechanical',
    'Plumbing',
    'Electrical',
    'Hardware',
    'Consumables',
    'Spare Parts',
    'Accessories'
];
// Charge Categories
const CHARGE_CATEGORIES = [
    'Labor',
    'Visit',
    'Diagnostic',
    'Installation',
    'Repair',
    'Maintenance',
    'Service',
    'Consultation',
    'Transportation'
];
// Units for parts
const PART_UNITS = [
    'NOS',
    'KG',
    'MTR',
    'LTR',
    'SET',
    'BOX',
    'PAIR',
    'FT',
    'INCH',
    'MM'
];
function GroupServicePage() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('parts');
    const [parts, setParts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [charges, setCharges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Modal states
    const [showPartModal, setShowPartModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showChargeModal, setShowChargeModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showBillModal, setShowBillModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingPart, setEditingPart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingCharge, setEditingCharge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Form states
    const [partForm, setPartForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        partNumber: '',
        category: 'General',
        description: '',
        price: 0,
        costPrice: '',
        hsnCode: '',
        gstRate: 18,
        stock: 0,
        minStock: 0,
        unit: 'NOS',
        isActive: true
    });
    const [chargeForm, setChargeForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        code: '',
        category: 'Labor',
        description: '',
        price: 0,
        gstRate: 18,
        duration: '',
        isActive: true
    });
    // Bill generator state
    const [billItems, setBillItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [billCustomer, setBillCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        phone: '',
        email: '',
        address: ''
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupServicePage.useEffect": ()=>{
            fetchData();
        }
    }["GroupServicePage.useEffect"], []);
    const fetchData = async ()=>{
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
    const handleSavePart = async ()=>{
        const formData = new FormData();
        Object.entries(partForm).forEach(([key, value])=>{
            formData.append(key, String(value));
        });
        const url = editingPart ? '/api/admin/parts' : '/api/admin/parts';
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
    const handleDeletePart = async (id)=>{
        if (!confirm('Are you sure you want to delete this part?')) return;
        try {
            await fetch(`/api/admin/parts?id=${id}`, {
                method: 'DELETE'
            });
            fetchData();
        } catch (error) {
            alert('Error deleting part');
        }
    };
    const openPartModal = (part = null)=>{
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
                name: '',
                partNumber: '',
                category: 'General',
                description: '',
                price: 0,
                costPrice: '',
                hsnCode: '',
                gstRate: 18,
                stock: 0,
                minStock: 0,
                unit: 'NOS',
                isActive: true
            });
        }
        setShowPartModal(true);
    };
    const closePartModal = ()=>{
        setShowPartModal(false);
        setEditingPart(null);
    };
    // Charge operations
    const handleSaveCharge = async ()=>{
        const formData = new FormData();
        Object.entries(chargeForm).forEach(([key, value])=>{
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
    const handleDeleteCharge = async (id)=>{
        if (!confirm('Are you sure you want to delete this charge?')) return;
        try {
            await fetch(`/api/admin/charges?id=${id}`, {
                method: 'DELETE'
            });
            fetchData();
        } catch (error) {
            alert('Error deleting charge');
        }
    };
    const openChargeModal = (charge = null)=>{
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
                name: '',
                code: '',
                category: 'Labor',
                description: '',
                price: 0,
                gstRate: 18,
                duration: '',
                isActive: true
            });
        }
        setShowChargeModal(true);
    };
    const closeChargeModal = ()=>{
        setShowChargeModal(false);
        setEditingCharge(null);
    };
    // Bill generator
    const addToBill = (item, type)=>{
        const existing = billItems.find((i)=>i.id === item.id && i.type === type);
        if (existing) {
            setBillItems(billItems.map((i)=>i.id === item.id && i.type === type ? {
                    ...i,
                    qty: i.qty + 1
                } : i));
        } else {
            setBillItems([
                ...billItems,
                {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    gstRate: item.gstRate || 18,
                    qty: 1,
                    unit: item.unit || 'NOS',
                    type
                }
            ]);
        }
    };
    const updateBillItemQty = (index, qty)=>{
        const updated = [
            ...billItems
        ];
        updated[index].qty = Math.max(1, parseInt(qty) || 1);
        setBillItems(updated);
    };
    const removeBillItem = (index)=>{
        setBillItems(billItems.filter((_, i)=>i !== index));
    };
    const calculateBill = ()=>{
        let subtotal = 0;
        let gstTotal = 0;
        billItems.forEach((item)=>{
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
    const generateBillPDF = async ()=>{
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
                                <th class="text-right">Selling Price</th>
                                <th class="text-right">GST %</th>
                                <th class="text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${billItems.map((item)=>`
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
    const filteredParts = parts.filter((p)=>p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.partNumber?.toLowerCase().includes(searchTerm.toLowerCase()) || p.category.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredCharges = charges.filter((c)=>c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.code?.toLowerCase().includes(searchTerm.toLowerCase()) || c.category.toLowerCase().includes(searchTerm.toLowerCase()));
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary"
            }, void 0, false, {
                fileName: "[project]/app/admin/group-service/page.js",
                lineNumber: 399,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/group-service/page.js",
            lineNumber: 398,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: '2rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: '1.75rem',
                                    fontWeight: 900,
                                    marginBottom: '0.5rem'
                                },
                                children: "Billing & Invoice Service"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/group-service/page.js",
                                lineNumber: 409,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'var(--text-dim)'
                                },
                                children: "Manage Parts, Service Charges & Generate Bills"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/group-service/page.js",
                                lineNumber: 412,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/group-service/page.js",
                        lineNumber: 408,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowBillModal(true),
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.75rem 1.5rem',
                                background: 'var(--primary)',
                                color: '#fff',
                                borderRadius: '0.75rem',
                                fontWeight: 600,
                                border: 'none',
                                cursor: 'pointer'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/group-service/page.js",
                                    lineNumber: 426,
                                    columnNumber: 25
                                }, this),
                                "Generate Bill"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/group-service/page.js",
                            lineNumber: 417,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/group-service/page.js",
                        lineNumber: 416,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/group-service/page.js",
                lineNumber: 407,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: '0.5rem',
                    marginBottom: '1.5rem',
                    borderBottom: '1px solid var(--border-glass)',
                    paddingBottom: '0.5rem'
                },
                children: [
                    {
                        id: 'parts',
                        label: 'Parts',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
                        count: parts.length
                    },
                    {
                        id: 'charges',
                        label: 'Service Charges',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
                        count: charges.length
                    }
                ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(tab.id),
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '0.5rem',
                            background: activeTab === tab.id ? 'var(--primary)' : 'transparent',
                            color: activeTab === tab.id ? '#fff' : 'var(--text-dim)',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: 600,
                            transition: 'var(--transition)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/admin/group-service/page.js",
                                lineNumber: 450,
                                columnNumber: 25
                            }, this),
                            tab.label,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    background: activeTab === tab.id ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
                                    padding: '0.125rem 0.5rem',
                                    borderRadius: '1rem',
                                    fontSize: '0.75rem'
                                },
                                children: tab.count
                            }, void 0, false, {
                                fileName: "[project]/app/admin/group-service/page.js",
                                lineNumber: 452,
                                columnNumber: 25
                            }, this)
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/app/admin/group-service/page.js",
                        lineNumber: 438,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/admin/group-service/page.js",
                lineNumber: 433,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            width: '300px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                size: 18,
                                style: {
                                    position: 'absolute',
                                    left: '1rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: 'var(--text-dim)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/admin/group-service/page.js",
                                lineNumber: 465,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search...",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value),
                                style: {
                                    width: '100%',
                                    padding: '0.75rem 1rem 0.75rem 2.75rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--border-glass)',
                                    borderRadius: '0.5rem',
                                    color: '#fff',
                                    outline: 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/admin/group-service/page.js",
                                lineNumber: 466,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/group-service/page.js",
                        lineNumber: 464,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>activeTab === 'parts' ? openPartModal() : openChargeModal(),
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem 1.5rem',
                            background: 'var(--primary)',
                            color: '#fff',
                            borderRadius: '0.5rem',
                            fontWeight: 600,
                            border: 'none',
                            cursor: 'pointer'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/admin/group-service/page.js",
                                lineNumber: 487,
                                columnNumber: 21
                            }, this),
                            "Add ",
                            activeTab === 'parts' ? 'Part' : 'Charge'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/group-service/page.js",
                        lineNumber: 478,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/group-service/page.js",
                lineNumber: 463,
                columnNumber: 13
            }, this),
            activeTab === 'parts' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: '0.75rem',
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: '100%',
                        borderCollapse: 'collapse'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                style: {
                                    background: 'rgba(255,255,255,0.05)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '1rem',
                                            textAlign: 'left',
                                            fontWeight: 600,
                                            fontSize: '0.875rem'
                                        },
                                        children: "Part Number"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 498,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '1rem',
                                            textAlign: 'left',
                                            fontWeight: 600,
                                            fontSize: '0.875rem'
                                        },
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 499,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '1rem',
                                            textAlign: 'left',
                                            fontWeight: 600,
                                            fontSize: '0.875rem'
                                        },
                                        children: "Category"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 500,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '1rem',
                                            textAlign: 'right',
                                            fontWeight: 600,
                                            fontSize: '0.875rem'
                                        },
                                        children: "Price"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 501,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '1rem',
                                            textAlign: 'right',
                                            fontWeight: 600,
                                            fontSize: '0.875rem'
                                        },
                                        children: "Stock"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 502,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '1rem',
                                            textAlign: 'center',
                                            fontWeight: 600,
                                            fontSize: '0.875rem'
                                        },
                                        children: "GST"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 503,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '1rem',
                                            textAlign: 'center',
                                            fontWeight: 600,
                                            fontSize: '0.875rem'
                                        },
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 504,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/group-service/page.js",
                                lineNumber: 497,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/group-service/page.js",
                            lineNumber: 496,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                filteredParts.map((part)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: '1px solid var(--border-glass)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem',
                                                    fontFamily: 'monospace',
                                                    fontSize: '0.875rem'
                                                },
                                                children: part.partNumber || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 510,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem',
                                                    fontWeight: 600
                                                },
                                                children: part.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 511,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        background: 'rgba(108, 99, 255, 0.2)',
                                                        padding: '0.25rem 0.75rem',
                                                        borderRadius: '1rem',
                                                        fontSize: '0.75rem'
                                                    },
                                                    children: part.category
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/group-service/page.js",
                                                    lineNumber: 513,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 512,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem',
                                                    textAlign: 'right',
                                                    fontWeight: 600,
                                                    color: '#4ade80'
                                                },
                                                children: [
                                                    "₹",
                                                    part.price.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 520,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem',
                                                    textAlign: 'right'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: part.stock <= part.minStock ? '#f87171' : '#4ade80',
                                                            fontWeight: 600
                                                        },
                                                        children: [
                                                            part.stock,
                                                            " ",
                                                            part.unit
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                        lineNumber: 522,
                                                        columnNumber: 41
                                                    }, this),
                                                    part.stock <= part.minStock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                        size: 14,
                                                        style: {
                                                            color: '#f87171',
                                                            marginLeft: '0.5rem'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                        lineNumber: 526,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 521,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem',
                                                    textAlign: 'center'
                                                },
                                                children: [
                                                    part.gstRate,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 529,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem',
                                                    textAlign: 'center'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        gap: '0.5rem'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>addToBill(part, 'part'),
                                                            style: {
                                                                padding: '0.5rem',
                                                                background: 'rgba(74, 222, 128, 0.1)',
                                                                border: 'none',
                                                                borderRadius: '0.25rem',
                                                                cursor: 'pointer',
                                                                color: '#4ade80'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                lineNumber: 533,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/group-service/page.js",
                                                            lineNumber: 532,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>openPartModal(part),
                                                            style: {
                                                                padding: '0.5rem',
                                                                background: 'rgba(108, 99, 255, 0.1)',
                                                                border: 'none',
                                                                borderRadius: '0.25rem',
                                                                cursor: 'pointer',
                                                                color: 'var(--primary)'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                lineNumber: 536,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/group-service/page.js",
                                                            lineNumber: 535,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleDeletePart(part.id),
                                                            style: {
                                                                padding: '0.5rem',
                                                                background: 'rgba(248, 113, 113, 0.1)',
                                                                border: 'none',
                                                                borderRadius: '0.25rem',
                                                                cursor: 'pointer',
                                                                color: '#f87171'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                lineNumber: 539,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/group-service/page.js",
                                                            lineNumber: 538,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/group-service/page.js",
                                                    lineNumber: 531,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 530,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, part.id, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 509,
                                        columnNumber: 33
                                    }, this)),
                                filteredParts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 7,
                                        style: {
                                            padding: '3rem',
                                            textAlign: 'center',
                                            color: 'var(--text-dim)'
                                        },
                                        children: "No parts found. Add your first part!"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 547,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/group-service/page.js",
                                    lineNumber: 546,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/group-service/page.js",
                            lineNumber: 507,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/group-service/page.js",
                    lineNumber: 495,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/group-service/page.js",
                lineNumber: 494,
                columnNumber: 17
            }, this),
            activeTab === 'charges' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: '0.75rem',
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: '100%',
                        borderCollapse: 'collapse'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                style: {
                                    background: 'rgba(255,255,255,0.05)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '1rem',
                                            textAlign: 'left',
                                            fontWeight: 600,
                                            fontSize: '0.875rem'
                                        },
                                        children: "Code"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 563,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '1rem',
                                            textAlign: 'left',
                                            fontWeight: 600,
                                            fontSize: '0.875rem'
                                        },
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 564,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '1rem',
                                            textAlign: 'left',
                                            fontWeight: 600,
                                            fontSize: '0.875rem'
                                        },
                                        children: "Category"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 565,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '1rem',
                                            textAlign: 'right',
                                            fontWeight: 600,
                                            fontSize: '0.875rem'
                                        },
                                        children: "Price"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 566,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '1rem',
                                            textAlign: 'center',
                                            fontWeight: 600,
                                            fontSize: '0.875rem'
                                        },
                                        children: "Duration"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 567,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '1rem',
                                            textAlign: 'center',
                                            fontWeight: 600,
                                            fontSize: '0.875rem'
                                        },
                                        children: "GST"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 568,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: '1rem',
                                            textAlign: 'center',
                                            fontWeight: 600,
                                            fontSize: '0.875rem'
                                        },
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 569,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/group-service/page.js",
                                lineNumber: 562,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/group-service/page.js",
                            lineNumber: 561,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                filteredCharges.map((charge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: '1px solid var(--border-glass)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem',
                                                    fontFamily: 'monospace',
                                                    fontSize: '0.875rem'
                                                },
                                                children: charge.code || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 575,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem',
                                                    fontWeight: 600
                                                },
                                                children: charge.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 576,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        background: 'rgba(255, 101, 132, 0.2)',
                                                        padding: '0.25rem 0.75rem',
                                                        borderRadius: '1rem',
                                                        fontSize: '0.75rem'
                                                    },
                                                    children: charge.category
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/group-service/page.js",
                                                    lineNumber: 578,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 577,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem',
                                                    textAlign: 'right',
                                                    fontWeight: 600,
                                                    color: '#4ade80'
                                                },
                                                children: [
                                                    "₹",
                                                    charge.price.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 585,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem',
                                                    textAlign: 'center'
                                                },
                                                children: charge.duration ? `${charge.duration} min` : '-'
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 586,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem',
                                                    textAlign: 'center'
                                                },
                                                children: [
                                                    charge.gstRate,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 587,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem',
                                                    textAlign: 'center'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        gap: '0.5rem'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>addToBill(charge, 'charge'),
                                                            style: {
                                                                padding: '0.5rem',
                                                                background: 'rgba(74, 222, 128, 0.1)',
                                                                border: 'none',
                                                                borderRadius: '0.25rem',
                                                                cursor: 'pointer',
                                                                color: '#4ade80'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                lineNumber: 591,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/group-service/page.js",
                                                            lineNumber: 590,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>openChargeModal(charge),
                                                            style: {
                                                                padding: '0.5rem',
                                                                background: 'rgba(108, 99, 255, 0.1)',
                                                                border: 'none',
                                                                borderRadius: '0.25rem',
                                                                cursor: 'pointer',
                                                                color: 'var(--primary)'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                lineNumber: 594,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/group-service/page.js",
                                                            lineNumber: 593,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleDeleteCharge(charge.id),
                                                            style: {
                                                                padding: '0.5rem',
                                                                background: 'rgba(248, 113, 113, 0.1)',
                                                                border: 'none',
                                                                borderRadius: '0.25rem',
                                                                cursor: 'pointer',
                                                                color: '#f87171'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                lineNumber: 597,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/group-service/page.js",
                                                            lineNumber: 596,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/group-service/page.js",
                                                    lineNumber: 589,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 588,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, charge.id, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 574,
                                        columnNumber: 33
                                    }, this)),
                                filteredCharges.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 7,
                                        style: {
                                            padding: '3rem',
                                            textAlign: 'center',
                                            color: 'var(--text-dim)'
                                        },
                                        children: "No service charges found. Add your first charge!"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 605,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/group-service/page.js",
                                    lineNumber: 604,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/group-service/page.js",
                            lineNumber: 572,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/group-service/page.js",
                    lineNumber: 560,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/group-service/page.js",
                lineNumber: 559,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showPartModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    style: {
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 100
                    },
                    onClick: closePartModal,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0.9
                        },
                        animate: {
                            scale: 1
                        },
                        exit: {
                            scale: 0.9
                        },
                        style: {
                            background: 'var(--bg-dark)',
                            borderRadius: '1rem',
                            padding: '2rem',
                            width: '90%',
                            maxWidth: '600px',
                            maxHeight: '90vh',
                            overflow: 'auto'
                        },
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '1.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '1.5rem',
                                            fontWeight: 900
                                        },
                                        children: editingPart ? 'Edit Part' : 'Add New Part'
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 639,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: closePartModal,
                                        style: {
                                            background: 'none',
                                            border: 'none',
                                            color: 'var(--text-dim)',
                                            cursor: 'pointer'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/group-service/page.js",
                                            lineNumber: 643,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 642,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/group-service/page.js",
                                lineNumber: 638,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '1rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600
                                                },
                                                children: "Name *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 649,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: partForm.name,
                                                onChange: (e)=>setPartForm({
                                                        ...partForm,
                                                        name: e.target.value
                                                    }),
                                                style: {
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid var(--border-glass)',
                                                    borderRadius: '0.5rem',
                                                    color: '#fff'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 650,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 648,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600
                                                },
                                                children: "Part Number"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 658,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: partForm.partNumber,
                                                onChange: (e)=>setPartForm({
                                                        ...partForm,
                                                        partNumber: e.target.value
                                                    }),
                                                style: {
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid var(--border-glass)',
                                                    borderRadius: '0.5rem',
                                                    color: '#fff'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 659,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 657,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600
                                                },
                                                children: "Category"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 667,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: partForm.category,
                                                onChange: (e)=>setPartForm({
                                                        ...partForm,
                                                        category: e.target.value
                                                    }),
                                                style: {
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid var(--border-glass)',
                                                    borderRadius: '0.5rem',
                                                    color: '#fff'
                                                },
                                                children: PART_CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: cat,
                                                        children: cat
                                                    }, cat, false, {
                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                        lineNumber: 673,
                                                        columnNumber: 69
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 668,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 666,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600
                                                },
                                                children: "Unit"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 677,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: partForm.unit,
                                                onChange: (e)=>setPartForm({
                                                        ...partForm,
                                                        unit: e.target.value
                                                    }),
                                                style: {
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid var(--border-glass)',
                                                    borderRadius: '0.5rem',
                                                    color: '#fff'
                                                },
                                                children: PART_UNITS.map((unit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: unit,
                                                        children: unit
                                                    }, unit, false, {
                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                        lineNumber: 683,
                                                        columnNumber: 65
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 678,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 676,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600
                                                },
                                                children: "Selling Price *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 687,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: partForm.price,
                                                onChange: (e)=>setPartForm({
                                                        ...partForm,
                                                        price: parseFloat(e.target.value) || 0
                                                    }),
                                                style: {
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid var(--border-glass)',
                                                    borderRadius: '0.5rem',
                                                    color: '#fff'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 688,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 686,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600
                                                },
                                                children: "Cost Price"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 696,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: partForm.costPrice,
                                                onChange: (e)=>setPartForm({
                                                        ...partForm,
                                                        costPrice: e.target.value
                                                    }),
                                                style: {
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid var(--border-glass)',
                                                    borderRadius: '0.5rem',
                                                    color: '#fff'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 697,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 695,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600
                                                },
                                                children: "GST Rate (%)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 705,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: partForm.gstRate,
                                                onChange: (e)=>setPartForm({
                                                        ...partForm,
                                                        gstRate: parseFloat(e.target.value) || 0
                                                    }),
                                                style: {
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid var(--border-glass)',
                                                    borderRadius: '0.5rem',
                                                    color: '#fff'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 706,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 704,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600
                                                },
                                                children: "HSN Code"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 714,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: partForm.hsnCode,
                                                onChange: (e)=>setPartForm({
                                                        ...partForm,
                                                        hsnCode: e.target.value
                                                    }),
                                                style: {
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid var(--border-glass)',
                                                    borderRadius: '0.5rem',
                                                    color: '#fff'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 715,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 713,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600
                                                },
                                                children: "Stock"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 723,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: partForm.stock,
                                                onChange: (e)=>setPartForm({
                                                        ...partForm,
                                                        stock: parseInt(e.target.value) || 0
                                                    }),
                                                style: {
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid var(--border-glass)',
                                                    borderRadius: '0.5rem',
                                                    color: '#fff'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 724,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 722,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600
                                                },
                                                children: "Min Stock Alert"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 732,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: partForm.minStock,
                                                onChange: (e)=>setPartForm({
                                                        ...partForm,
                                                        minStock: parseInt(e.target.value) || 0
                                                    }),
                                                style: {
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid var(--border-glass)',
                                                    borderRadius: '0.5rem',
                                                    color: '#fff'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 733,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 731,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            gridColumn: '1 / -1'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600
                                                },
                                                children: "Description"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 741,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: partForm.description,
                                                onChange: (e)=>setPartForm({
                                                        ...partForm,
                                                        description: e.target.value
                                                    }),
                                                rows: 3,
                                                style: {
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid var(--border-glass)',
                                                    borderRadius: '0.5rem',
                                                    color: '#fff',
                                                    resize: 'vertical'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 742,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 740,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            gridColumn: '1 / -1',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: partForm.isActive,
                                                onChange: (e)=>setPartForm({
                                                        ...partForm,
                                                        isActive: e.target.checked
                                                    }),
                                                id: "partActive"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 750,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "partActive",
                                                children: "Active"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 756,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 749,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/group-service/page.js",
                                lineNumber: 647,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    gap: '1rem',
                                    marginTop: '2rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: closePartModal,
                                        style: {
                                            padding: '0.75rem 1.5rem',
                                            background: 'transparent',
                                            border: '1px solid var(--border-glass)',
                                            borderRadius: '0.5rem',
                                            color: '#fff',
                                            cursor: 'pointer'
                                        },
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 761,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSavePart,
                                        style: {
                                            padding: '0.75rem 1.5rem',
                                            background: 'var(--primary)',
                                            border: 'none',
                                            borderRadius: '0.5rem',
                                            color: '#fff',
                                            cursor: 'pointer',
                                            fontWeight: 600
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                size: 18,
                                                style: {
                                                    marginRight: '0.5rem'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 765,
                                                columnNumber: 37
                                            }, this),
                                            "Save Part"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 764,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/group-service/page.js",
                                lineNumber: 760,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/group-service/page.js",
                        lineNumber: 628,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/group-service/page.js",
                    lineNumber: 618,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/group-service/page.js",
                lineNumber: 616,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showChargeModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    style: {
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 100
                    },
                    onClick: closeChargeModal,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0.9
                        },
                        animate: {
                            scale: 1
                        },
                        exit: {
                            scale: 0.9
                        },
                        style: {
                            background: 'var(--bg-dark)',
                            borderRadius: '1rem',
                            padding: '2rem',
                            width: '90%',
                            maxWidth: '600px',
                            maxHeight: '90vh',
                            overflow: 'auto'
                        },
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '1.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '1.5rem',
                                            fontWeight: 900
                                        },
                                        children: editingCharge ? 'Edit Charge' : 'Add New Service Charge'
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 798,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: closeChargeModal,
                                        style: {
                                            background: 'none',
                                            border: 'none',
                                            color: 'var(--text-dim)',
                                            cursor: 'pointer'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/group-service/page.js",
                                            lineNumber: 802,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 801,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/group-service/page.js",
                                lineNumber: 797,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '1rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600
                                                },
                                                children: "Name *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 808,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: chargeForm.name,
                                                onChange: (e)=>setChargeForm({
                                                        ...chargeForm,
                                                        name: e.target.value
                                                    }),
                                                style: {
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid var(--border-glass)',
                                                    borderRadius: '0.5rem',
                                                    color: '#fff'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 809,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 807,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600
                                                },
                                                children: "Code"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 817,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: chargeForm.code,
                                                onChange: (e)=>setChargeForm({
                                                        ...chargeForm,
                                                        code: e.target.value
                                                    }),
                                                placeholder: "e.g., LAB-001",
                                                style: {
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid var(--border-glass)',
                                                    borderRadius: '0.5rem',
                                                    color: '#fff'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 818,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 816,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600
                                                },
                                                children: "Category"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 827,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: chargeForm.category,
                                                onChange: (e)=>setChargeForm({
                                                        ...chargeForm,
                                                        category: e.target.value
                                                    }),
                                                style: {
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid var(--border-glass)',
                                                    borderRadius: '0.5rem',
                                                    color: '#fff'
                                                },
                                                children: CHARGE_CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: cat,
                                                        children: cat
                                                    }, cat, false, {
                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                        lineNumber: 833,
                                                        columnNumber: 71
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 828,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 826,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600
                                                },
                                                children: "Price *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 837,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: chargeForm.price,
                                                onChange: (e)=>setChargeForm({
                                                        ...chargeForm,
                                                        price: parseFloat(e.target.value) || 0
                                                    }),
                                                style: {
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid var(--border-glass)',
                                                    borderRadius: '0.5rem',
                                                    color: '#fff'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 838,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 836,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600
                                                },
                                                children: "GST Rate (%)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 846,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: chargeForm.gstRate,
                                                onChange: (e)=>setChargeForm({
                                                        ...chargeForm,
                                                        gstRate: parseFloat(e.target.value) || 0
                                                    }),
                                                style: {
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid var(--border-glass)',
                                                    borderRadius: '0.5rem',
                                                    color: '#fff'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 847,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 845,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600
                                                },
                                                children: "Duration (minutes)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 855,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: chargeForm.duration,
                                                onChange: (e)=>setChargeForm({
                                                        ...chargeForm,
                                                        duration: e.target.value
                                                    }),
                                                placeholder: "e.g., 60",
                                                style: {
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid var(--border-glass)',
                                                    borderRadius: '0.5rem',
                                                    color: '#fff'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 856,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 854,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            gridColumn: '1 / -1'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600
                                                },
                                                children: "Description"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 865,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: chargeForm.description,
                                                onChange: (e)=>setChargeForm({
                                                        ...chargeForm,
                                                        description: e.target.value
                                                    }),
                                                rows: 3,
                                                style: {
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid var(--border-glass)',
                                                    borderRadius: '0.5rem',
                                                    color: '#fff',
                                                    resize: 'vertical'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 866,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 864,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            gridColumn: '1 / -1',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: chargeForm.isActive,
                                                onChange: (e)=>setChargeForm({
                                                        ...chargeForm,
                                                        isActive: e.target.checked
                                                    }),
                                                id: "chargeActive"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 874,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "chargeActive",
                                                children: "Active"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 880,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 873,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/group-service/page.js",
                                lineNumber: 806,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    gap: '1rem',
                                    marginTop: '2rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: closeChargeModal,
                                        style: {
                                            padding: '0.75rem 1.5rem',
                                            background: 'transparent',
                                            border: '1px solid var(--border-glass)',
                                            borderRadius: '0.5rem',
                                            color: '#fff',
                                            cursor: 'pointer'
                                        },
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 885,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSaveCharge,
                                        style: {
                                            padding: '0.75rem 1.5rem',
                                            background: 'var(--primary)',
                                            border: 'none',
                                            borderRadius: '0.5rem',
                                            color: '#fff',
                                            cursor: 'pointer',
                                            fontWeight: 600
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                size: 18,
                                                style: {
                                                    marginRight: '0.5rem'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 889,
                                                columnNumber: 37
                                            }, this),
                                            "Save Charge"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 888,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/group-service/page.js",
                                lineNumber: 884,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/group-service/page.js",
                        lineNumber: 787,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/group-service/page.js",
                    lineNumber: 777,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/group-service/page.js",
                lineNumber: 775,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showBillModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    style: {
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 100
                    },
                    onClick: ()=>setShowBillModal(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0.9
                        },
                        animate: {
                            scale: 1
                        },
                        exit: {
                            scale: 0.9
                        },
                        style: {
                            background: 'var(--bg-dark)',
                            borderRadius: '1rem',
                            padding: '2rem',
                            width: '95%',
                            maxWidth: '1200px',
                            maxHeight: '90vh',
                            overflow: 'auto'
                        },
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '1.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '1.5rem',
                                            fontWeight: 900
                                        },
                                        children: "Generate Bill"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 922,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowBillModal(false),
                                        style: {
                                            background: 'none',
                                            border: 'none',
                                            color: 'var(--text-dim)',
                                            cursor: 'pointer'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/group-service/page.js",
                                            lineNumber: 926,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 925,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/group-service/page.js",
                                lineNumber: 921,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '2rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '1rem',
                                                    fontWeight: 700,
                                                    marginBottom: '1rem'
                                                },
                                                children: "Available Items"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 933,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: 'rgba(255,255,255,0.02)',
                                                    padding: '1rem',
                                                    borderRadius: '0.5rem',
                                                    marginBottom: '1rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            fontSize: '0.875rem',
                                                            fontWeight: 600,
                                                            marginBottom: '0.75rem'
                                                        },
                                                        children: "Customer Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                        lineNumber: 937,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'grid',
                                                            gridTemplateColumns: '1fr 1fr',
                                                            gap: '0.5rem'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                placeholder: "Customer Name",
                                                                value: billCustomer.name,
                                                                onChange: (e)=>setBillCustomer({
                                                                        ...billCustomer,
                                                                        name: e.target.value
                                                                    }),
                                                                style: {
                                                                    padding: '0.5rem',
                                                                    background: 'rgba(255,255,255,0.05)',
                                                                    border: '1px solid var(--border-glass)',
                                                                    borderRadius: '0.25rem',
                                                                    color: '#fff',
                                                                    fontSize: '0.875rem'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                lineNumber: 939,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                placeholder: "Phone",
                                                                value: billCustomer.phone,
                                                                onChange: (e)=>setBillCustomer({
                                                                        ...billCustomer,
                                                                        phone: e.target.value
                                                                    }),
                                                                style: {
                                                                    padding: '0.5rem',
                                                                    background: 'rgba(255,255,255,0.05)',
                                                                    border: '1px solid var(--border-glass)',
                                                                    borderRadius: '0.25rem',
                                                                    color: '#fff',
                                                                    fontSize: '0.875rem'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                lineNumber: 945,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                placeholder: "Email",
                                                                value: billCustomer.email,
                                                                onChange: (e)=>setBillCustomer({
                                                                        ...billCustomer,
                                                                        email: e.target.value
                                                                    }),
                                                                style: {
                                                                    padding: '0.5rem',
                                                                    background: 'rgba(255,255,255,0.05)',
                                                                    border: '1px solid var(--border-glass)',
                                                                    borderRadius: '0.25rem',
                                                                    color: '#fff',
                                                                    fontSize: '0.875rem'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                lineNumber: 951,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                placeholder: "Address",
                                                                value: billCustomer.address,
                                                                onChange: (e)=>setBillCustomer({
                                                                        ...billCustomer,
                                                                        address: e.target.value
                                                                    }),
                                                                style: {
                                                                    padding: '0.5rem',
                                                                    background: 'rgba(255,255,255,0.05)',
                                                                    border: '1px solid var(--border-glass)',
                                                                    borderRadius: '0.25rem',
                                                                    color: '#fff',
                                                                    fontSize: '0.875rem'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                lineNumber: 957,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                        lineNumber: 938,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 936,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: '1rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            fontSize: '0.875rem',
                                                            fontWeight: 600,
                                                            marginBottom: '0.5rem',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.5rem'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                lineNumber: 969,
                                                                columnNumber: 45
                                                            }, this),
                                                            " Parts"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                        lineNumber: 968,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexWrap: 'wrap',
                                                            gap: '0.5rem'
                                                        },
                                                        children: parts.filter((p)=>p.isActive).map((part)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>addToBill(part, 'part'),
                                                                style: {
                                                                    padding: '0.5rem 0.75rem',
                                                                    background: 'rgba(108, 99, 255, 0.1)',
                                                                    border: '1px solid var(--border-glass)',
                                                                    borderRadius: '0.25rem',
                                                                    color: '#fff',
                                                                    cursor: 'pointer',
                                                                    fontSize: '0.75rem',
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    alignItems: 'flex-start'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontWeight: 600
                                                                        },
                                                                        children: part.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                                        lineNumber: 982,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: '#4ade80'
                                                                        },
                                                                        children: [
                                                                            "₹",
                                                                            part.price,
                                                                            " ",
                                                                            part.unit
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                                        lineNumber: 983,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, part.id, true, {
                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                lineNumber: 973,
                                                                columnNumber: 49
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                        lineNumber: 971,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 967,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            fontSize: '0.875rem',
                                                            fontWeight: 600,
                                                            marginBottom: '0.5rem',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.5rem'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                lineNumber: 992,
                                                                columnNumber: 45
                                                            }, this),
                                                            " Service Charges"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                        lineNumber: 991,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexWrap: 'wrap',
                                                            gap: '0.5rem'
                                                        },
                                                        children: charges.filter((c)=>c.isActive).map((charge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>addToBill(charge, 'charge'),
                                                                style: {
                                                                    padding: '0.5rem 0.75rem',
                                                                    background: 'rgba(255, 101, 132, 0.1)',
                                                                    border: '1px solid var(--border-glass)',
                                                                    borderRadius: '0.25rem',
                                                                    color: '#fff',
                                                                    cursor: 'pointer',
                                                                    fontSize: '0.75rem',
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    alignItems: 'flex-start'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontWeight: 600
                                                                        },
                                                                        children: charge.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                                        lineNumber: 1005,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: '#4ade80'
                                                                        },
                                                                        children: [
                                                                            "₹",
                                                                            charge.price
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                                        lineNumber: 1006,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, charge.id, true, {
                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                lineNumber: 996,
                                                                columnNumber: 49
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                        lineNumber: 994,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 990,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 932,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'rgba(255,255,255,0.02)',
                                            padding: '1rem',
                                            borderRadius: '0.5rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '1rem',
                                                    fontWeight: 700,
                                                    marginBottom: '1rem'
                                                },
                                                children: "Bill Preview"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 1015,
                                                columnNumber: 37
                                            }, this),
                                            billItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    textAlign: 'center',
                                                    padding: '3rem',
                                                    color: 'var(--text-dim)'
                                                },
                                                children: "Click items to add them to the bill"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/group-service/page.js",
                                                lineNumber: 1018,
                                                columnNumber: 41
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        style: {
                                                            width: '100%',
                                                            borderCollapse: 'collapse',
                                                            fontSize: '0.875rem'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    style: {
                                                                        borderBottom: '1px solid var(--border-glass)'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            style: {
                                                                                padding: '0.5rem',
                                                                                textAlign: 'left'
                                                                            },
                                                                            children: "Item"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/group-service/page.js",
                                                                            lineNumber: 1026,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            style: {
                                                                                padding: '0.5rem',
                                                                                textAlign: 'center',
                                                                                width: '60px'
                                                                            },
                                                                            children: "Qty"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/group-service/page.js",
                                                                            lineNumber: 1027,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            style: {
                                                                                padding: '0.5rem',
                                                                                textAlign: 'right'
                                                                            },
                                                                            children: "Rate"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/group-service/page.js",
                                                                            lineNumber: 1028,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            style: {
                                                                                padding: '0.5rem',
                                                                                textAlign: 'right'
                                                                            },
                                                                            children: "Amount"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/group-service/page.js",
                                                                            lineNumber: 1029,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            style: {
                                                                                padding: '0.5rem',
                                                                                width: '30px'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/group-service/page.js",
                                                                            lineNumber: 1030,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/group-service/page.js",
                                                                    lineNumber: 1025,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                lineNumber: 1024,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: billItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        style: {
                                                                            borderBottom: '1px solid rgba(255,255,255,0.05)'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                style: {
                                                                                    padding: '0.5rem'
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            fontWeight: 600
                                                                                        },
                                                                                        children: item.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                                                        lineNumber: 1037,
                                                                                        columnNumber: 65
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            fontSize: '0.75rem',
                                                                                            color: 'var(--text-dim)'
                                                                                        },
                                                                                        children: [
                                                                                            "GST: ",
                                                                                            item.gstRate,
                                                                                            "%"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                                                        lineNumber: 1038,
                                                                                        columnNumber: 65
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                                lineNumber: 1036,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                style: {
                                                                                    padding: '0.5rem',
                                                                                    textAlign: 'center'
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "number",
                                                                                    min: "1",
                                                                                    value: item.qty,
                                                                                    onChange: (e)=>updateBillItemQty(index, e.target.value),
                                                                                    style: {
                                                                                        width: '50px',
                                                                                        padding: '0.25rem',
                                                                                        textAlign: 'center',
                                                                                        background: 'rgba(255,255,255,0.05)',
                                                                                        border: '1px solid var(--border-glass)',
                                                                                        borderRadius: '0.25rem',
                                                                                        color: '#fff'
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/group-service/page.js",
                                                                                    lineNumber: 1041,
                                                                                    columnNumber: 65
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                                lineNumber: 1040,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                style: {
                                                                                    padding: '0.5rem',
                                                                                    textAlign: 'right'
                                                                                },
                                                                                children: [
                                                                                    "₹",
                                                                                    item.price.toFixed(2)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                                lineNumber: 1049,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                style: {
                                                                                    padding: '0.5rem',
                                                                                    textAlign: 'right',
                                                                                    fontWeight: 600
                                                                                },
                                                                                children: [
                                                                                    "₹",
                                                                                    (item.price * item.qty).toFixed(2)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                                lineNumber: 1050,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                style: {
                                                                                    padding: '0.5rem'
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>removeBillItem(index),
                                                                                    style: {
                                                                                        background: 'none',
                                                                                        border: 'none',
                                                                                        color: '#f87171',
                                                                                        cursor: 'pointer',
                                                                                        padding: '0.25rem'
                                                                                    },
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                                                        lineNumber: 1053,
                                                                                        columnNumber: 69
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/group-service/page.js",
                                                                                    lineNumber: 1052,
                                                                                    columnNumber: 65
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                                lineNumber: 1051,
                                                                                columnNumber: 61
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                                        lineNumber: 1035,
                                                                        columnNumber: 57
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                lineNumber: 1033,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                        lineNumber: 1023,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            marginTop: '1rem',
                                                            paddingTop: '1rem',
                                                            borderTop: '1px solid var(--border-glass)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    padding: '0.25rem 0'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Subtotal"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                                        lineNumber: 1063,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "₹",
                                                                            calculateBill().subtotal.toFixed(2)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                                        lineNumber: 1064,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                lineNumber: 1062,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    padding: '0.25rem 0'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "GST Total"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                                        lineNumber: 1067,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "₹",
                                                                            calculateBill().gstTotal.toFixed(2)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                                        lineNumber: 1068,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                lineNumber: 1066,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    padding: '0.5rem 0',
                                                                    fontSize: '1.25rem',
                                                                    fontWeight: 900,
                                                                    color: '#4ade80'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Total"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                                        lineNumber: 1071,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "₹",
                                                                            calculateBill().total.toFixed(2)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                                        lineNumber: 1072,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/group-service/page.js",
                                                                lineNumber: 1070,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                        lineNumber: 1061,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            gap: '1rem',
                                                            marginTop: '1rem'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: generateBillPDF,
                                                            style: {
                                                                flex: 1,
                                                                padding: '0.75rem',
                                                                background: 'var(--primary)',
                                                                border: 'none',
                                                                borderRadius: '0.5rem',
                                                                color: '#fff',
                                                                cursor: 'pointer',
                                                                fontWeight: 600,
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                gap: '0.5rem'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/group-service/page.js",
                                                                    lineNumber: 1085,
                                                                    columnNumber: 53
                                                                }, this),
                                                                "Download PDF"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/group-service/page.js",
                                                            lineNumber: 1077,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/group-service/page.js",
                                                        lineNumber: 1076,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/group-service/page.js",
                                        lineNumber: 1014,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/group-service/page.js",
                                lineNumber: 930,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/group-service/page.js",
                        lineNumber: 911,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/group-service/page.js",
                    lineNumber: 901,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/group-service/page.js",
                lineNumber: 899,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/group-service/page.js",
        lineNumber: 405,
        columnNumber: 9
    }, this);
}
_s(GroupServicePage, "pMLPkohqvJMWdF4p1uzdkyriVu8=");
_c = GroupServicePage;
var _c;
__turbopack_context__.k.register(_c, "GroupServicePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_admin_group-service_page_8a4da2d6.js.map