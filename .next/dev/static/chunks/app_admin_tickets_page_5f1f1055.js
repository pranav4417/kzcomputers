(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/admin/tickets/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TicketManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Cable({ size }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
            }, void 0, false, {
                fileName: "[project]/app/admin/tickets/page.js",
                lineNumber: 13,
                columnNumber: 137
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
            }, void 0, false, {
                fileName: "[project]/app/admin/tickets/page.js",
                lineNumber: 13,
                columnNumber: 209
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/tickets/page.js",
        lineNumber: 13,
        columnNumber: 35
    }, this);
}
_c = Cable;
function TicketManagement() {
    _s();
    const [tickets, setTickets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [agents, setAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedTicket, setSelectedTicket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [updateLoading, setUpdateLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Invoice state
    const [invoiceItems, setInvoiceItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('services'); // services, parts, custom
    const [customItem, setCustomItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        desc: '',
        qty: 1,
        unit: 'NOS',
        price: 0,
        mrp: 0
    });
    const [generatingInvoice, setGeneratingInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sendEmailChecked, setSendEmailChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [existingInvoice, setExistingInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [excludingGst, setExcludingGst] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [servicePresets, setServicePresets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [partsPresets, setPartsPresets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createForm, setCreateForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        customerName: '',
        email: '',
        phone: '',
        product: '',
        customProduct: '',
        serviceType: 'Repair',
        priority: 'Medium',
        subject: '',
        description: '',
        assignedToId: ''
    });
    const [creatingTicket, setCreatingTicket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TicketManagement.useEffect": ()=>{
            const checkUserSession = {
                "TicketManagement.useEffect.checkUserSession": async ()=>{
                    try {
                        const res = await fetch('/api/auth/session-check');
                        const data = await res.json();
                        if (data.user) setSession(data.user);
                    } catch (e) {
                        console.error('Session check failed');
                    }
                }
            }["TicketManagement.useEffect.checkUserSession"];
            checkUserSession();
            fetchTickets();
            fetchAgents();
            fetchProducts();
            fetchPresets();
        }
    }["TicketManagement.useEffect"], []);
    const fetchPresets = async ()=>{
        try {
            const [partsRes, chargesRes] = await Promise.all([
                fetch('/api/admin/parts'),
                fetch('/api/admin/charges')
            ]);
            const partsData = await partsRes.json();
            const chargesData = await chargesRes.json();
            setPartsPresets(Array.isArray(partsData) ? partsData : []);
            setServicePresets(Array.isArray(chargesData) ? chargesData : []);
        } catch (error) {
            console.error('Error fetching presets:', error);
        }
    };
    const fetchTickets = async ()=>{
        setLoading(true);
        const res = await fetch('/api/admin/tickets');
        const data = await res.json();
        setTickets(data);
        setLoading(false);
    };
    const fetchAgents = async ()=>{
        const res = await fetch('/api/admin/agents');
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data)) {
                // Agents and admins cannot assign tickets to super admin
                setAgents(data.filter((a)=>a.status === 'active' && a.role !== 'superadmin'));
            }
        }
    };
    const fetchProducts = async ()=>{
        try {
            const res = await fetch('/api/admin/products');
            if (res.ok) {
                const data = await res.json();
                setProducts(data);
            }
        } catch (e) {
            console.log('No products found');
        }
    };
    const handleCreateTicket = async (e)=>{
        e.preventDefault();
        setCreatingTicket(true);
        try {
            const payload = {
                ...createForm
            };
            if (createForm.product === 'Custom') {
                payload.product = createForm.customProduct || 'Custom Product';
            }
            delete payload.customProduct;
            if (session?.role === 'agent') {
                payload.assignedToId = session.id;
            }
            const res = await fetch('/api/admin/tickets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (res.ok) {
                alert('Ticket created successfully!');
                setIsCreateModalOpen(false);
                setCreateForm({
                    customerName: '',
                    email: '',
                    phone: '',
                    product: '',
                    customProduct: '',
                    serviceType: 'Repair',
                    priority: 'Medium',
                    subject: '',
                    description: '',
                    assignedToId: ''
                });
                fetchTickets();
            } else {
                const errData = await res.json();
                alert('Failed to create ticket: ' + (errData.error || 'Unknown error'));
            }
        } catch (err) {
            console.error(err);
            alert('Failed to create ticket');
        } finally{
            setCreatingTicket(false);
        }
    };
    const fetchExistingInvoice = async (ticketId)=>{
        try {
            const res = await fetch(`/api/admin/invoices?ticketId=${ticketId}`);
            if (res.ok) {
                const data = await res.json();
                if (data.length > 0) {
                    setExistingInvoice(data[0]);
                    setInvoiceItems(JSON.parse(data[0].items || '[]'));
                }
            }
        } catch (e) {
            console.log('No existing invoice');
        }
    };
    const updateTicketDetails = async (id, status, comments, assignedToId)=>{
        setUpdateLoading(true);
        const res = await fetch(`/api/admin/tickets/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status,
                comments,
                assignedToId,
                updatedByRole: 'Admin',
                invoiceItems: invoiceItems.length > 0 ? invoiceItems : undefined,
                sendInvoiceEmail: sendEmailChecked && (status === 'Completed' || status === 'Closed')
            })
        });
        if (res.ok) {
            const data = await res.json();
            if (data.invoiceSent) {
                alert(`🎉 Ticket updated and invoice sent to customer!`);
            }
            fetchTickets();
            setIsModalOpen(false);
        } else {
            alert(await res.json().then((data)=>data.error) || 'Failed to update ticket');
        }
        setUpdateLoading(false);
    };
    const deleteTicket = async (id, ticketNumber)=>{
        if (!confirm(`Are you sure you want to delete ticket #${ticketNumber}? This action cannot be undone.`)) {
            return;
        }
        setUpdateLoading(true);
        try {
            const res = await fetch(`/api/admin/tickets/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                fetchTickets();
                alert('Ticket deleted successfully');
            } else {
                const data = await res.json();
                alert(data.error || 'Failed to delete ticket');
            }
        } catch (err) {
            alert('Failed to delete ticket');
        }
        setUpdateLoading(false);
    };
    // Invoice functions
    const addItem = (item)=>{
        const existingIndex = invoiceItems.findIndex((i)=>i.desc === item.name);
        if (existingIndex >= 0) {
            const updated = [
                ...invoiceItems
            ];
            updated[existingIndex].qty += 1;
            setInvoiceItems(updated);
        } else {
            setInvoiceItems([
                ...invoiceItems,
                {
                    desc: item.name,
                    qty: 1,
                    unit: item.unit || 'NOS',
                    price: item.price,
                    mrp: 0
                }
            ]);
        }
    };
    const addCustomItem = ()=>{
        if (!customItem.desc || !customItem.price) {
            alert('Please enter item description and selling price');
            return;
        }
        setInvoiceItems([
            ...invoiceItems,
            {
                ...customItem,
                qty: parseInt(customItem.qty) || 1
            }
        ]);
        setCustomItem({
            desc: '',
            qty: 1,
            unit: 'NOS',
            price: 0,
            mrp: 0
        });
    };
    const removeItem = (index)=>{
        const updated = invoiceItems.filter((_, i)=>i !== index);
        setInvoiceItems(updated);
    };
    const updateItemQty = (index, qty)=>{
        const updated = [
            ...invoiceItems
        ];
        updated[index].qty = Math.max(1, parseInt(qty) || 1);
        setInvoiceItems(updated);
    };
    const updateItemPrice = (index, price)=>{
        const updated = [
            ...invoiceItems
        ];
        updated[index].price = Math.max(0, parseFloat(price) || 0);
        setInvoiceItems(updated);
    };
    const getItemTotal = (item)=>item.price * item.qty;
    const getGrandTotal = ()=>invoiceItems.reduce((sum, item)=>sum + getItemTotal(item), 0);
    const generateAndDownloadPDF = async ()=>{
        if (invoiceItems.length === 0) {
            alert('Please add at least one item to the invoice.');
            return;
        }
        setGeneratingInvoice(true);
        try {
            const res = await fetch('/api/admin/invoices', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ticketId: selectedTicket.id,
                    amount: getGrandTotal(),
                    items: invoiceItems,
                    status: 'Unpaid',
                    excludingGst
                })
            });
            const data = await res.json();
            if (res.ok) {
                // Handle pending approval case for admin/agent roles
                if (data.pendingApproval) {
                    alert(data.message);
                    setGeneratingInvoice(false);
                    return;
                }
                if (!data.invoice) {
                    alert('Error: No invoice returned from server');
                    setGeneratingInvoice(false);
                    return;
                }
                setExistingInvoice(data.invoice);
                // Trigger download
                if (data.pdfBase64) {
                    const link = document.createElement('a');
                    link.href = `data:application/pdf;base64,${data.pdfBase64}`;
                    link.download = `${data.invoice.invoiceNumber}.pdf`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } else if (data.invoice.pdfUrl) {
                    const link = document.createElement('a');
                    link.href = data.invoice.pdfUrl;
                    link.target = '_blank';
                    link.download = `${data.invoice.invoiceNumber}.pdf`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
                alert(`✅ Invoice ${data.invoice.invoiceNumber} generated and downloaded!`);
            } else {
                alert(data.error || 'Failed to generate invoice');
            }
        } catch (e) {
            alert('Error generating invoice: ' + e.message);
        }
        setGeneratingInvoice(false);
    };
    const sendInvoiceToCustomer = async ()=>{
        if (invoiceItems.length === 0) {
            alert('Please add items first');
            return;
        }
        setGeneratingInvoice(true);
        try {
            const res = await fetch('/api/admin/invoices', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ticketId: selectedTicket.id,
                    amount: getGrandTotal(),
                    items: invoiceItems,
                    status: 'Unpaid',
                    sendEmail: true,
                    excludingGst
                })
            });
            const data = await res.json();
            if (res.ok) {
                // Handle pending approval case for admin/agent roles
                if (data.pendingApproval) {
                    alert(data.message);
                    setGeneratingInvoice(false);
                    return;
                }
                if (!data.invoice) {
                    alert('Error: No invoice returned from server');
                    setGeneratingInvoice(false);
                    return;
                }
                setExistingInvoice(data.invoice);
                alert(`📧 Invoice sent to ${selectedTicket.email}!`);
            } else {
                alert(data.error || 'Failed to send invoice');
            }
        } catch (e) {
            alert('Error sending invoice: ' + e.message);
        }
        setGeneratingInvoice(false);
    };
    const sendQuoteToCustomer = async ()=>{
        if (invoiceItems.length === 0) {
            alert('Please add items first');
            return;
        }
        if (!selectedTicket?.email || !selectedTicket?.customerName) {
            alert('Ticket missing customer email or name');
            return;
        }
        setGeneratingInvoice(true);
        try {
            const res = await fetch('/api/admin/quotes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    customerEmail: selectedTicket.email,
                    customerName: selectedTicket.customerName,
                    customerPhone: selectedTicket.phone,
                    items: invoiceItems,
                    amount: getGrandTotal(),
                    ticketId: selectedTicket.id
                })
            });
            const data = await res.json();
            if (res.ok) {
                alert(`📧 Quote sent to ${selectedTicket.email}! Customer can now Accept or Reject the quote.`);
            } else {
                alert(data.error || 'Failed to send quote');
            }
        } catch (e) {
            alert('Error sending quote: ' + e.message);
        }
        setGeneratingInvoice(false);
    };
    const openTicketModal = (ticket)=>{
        setSelectedTicket(ticket);
        setExistingInvoice(null);
        setIsModalOpen(true);
        // First try to load from existing invoice
        fetchExistingInvoice(ticket.id);
        // Also load saved items directly from ticket if no invoice items
        if (ticket.items) {
            try {
                const savedItems = JSON.parse(ticket.items);
                if (savedItems && savedItems.length > 0) {
                    setInvoiceItems(savedItems);
                } else {
                    setInvoiceItems([]);
                }
            } catch (e) {
                setInvoiceItems([]);
            }
        } else {
            setInvoiceItems([]);
        }
    };
    const canCreate = session && (session.role !== 'agent' || session.canCreateTickets !== false);
    const filteredTickets = tickets.filter((t)=>t.ticketNumber.toLowerCase().includes(search.toLowerCase()) || t.customerName.toLowerCase().includes(search.toLowerCase()) || t.email.toLowerCase().includes(search.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-fade-in",
        style: {
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    gap: '1.5rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "title-lg mb-2",
                                style: {
                                    margin: 0,
                                    fontWeight: 900
                                },
                                children: [
                                    "Service ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gradient-text",
                                        children: "Tickets"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/tickets/page.js",
                                        lineNumber: 456,
                                        columnNumber: 98
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/tickets/page.js",
                                lineNumber: 456,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-dim",
                                style: {
                                    fontSize: '0.875rem',
                                    marginTop: '0.5rem'
                                },
                                children: "Manage and track all customer service requests."
                            }, void 0, false, {
                                fileName: "[project]/app/admin/tickets/page.js",
                                lineNumber: 457,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/tickets/page.js",
                        lineNumber: 455,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: '1 1 auto',
                            maxWidth: '600px',
                            display: 'flex',
                            gap: '1rem',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass",
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '0.5rem 1rem',
                                    flex: 1,
                                    borderRadius: '0.75rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 16,
                                        className: "text-dim"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/tickets/page.js",
                                        lineNumber: 462,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "input-field",
                                        style: {
                                            background: 'transparent',
                                            border: 'none',
                                            boxShadow: 'none',
                                            padding: '0.5rem',
                                            width: '100%',
                                            fontSize: '0.875rem'
                                        },
                                        placeholder: "Search by ID or name...",
                                        value: search,
                                        onChange: (e)=>setSearch(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/tickets/page.js",
                                        lineNumber: 463,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/tickets/page.js",
                                lineNumber: 461,
                                columnNumber: 21
                            }, this),
                            canCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsCreateModalOpen(true),
                                className: "btn-primary",
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1.25rem',
                                    borderRadius: '0.75rem',
                                    fontWeight: 900,
                                    fontSize: '0.875rem',
                                    whiteSpace: 'nowrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/tickets/page.js",
                                        lineNumber: 476,
                                        columnNumber: 29
                                    }, this),
                                    " New Ticket"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/tickets/page.js",
                                lineNumber: 471,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/tickets/page.js",
                        lineNumber: 460,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/tickets/page.js",
                lineNumber: 454,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass",
                style: {
                    overflow: 'hidden',
                    borderRadius: '1rem'
                },
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '5rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            size: 40,
                            className: "text-primary",
                            style: {
                                animation: 'spin 1s linear infinite'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/admin/tickets/page.js",
                            lineNumber: 485,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                            children: `@keyframes spin { 100% { transform: rotate(360deg); } }`
                        }, void 0, false, {
                            fileName: "[project]/app/admin/tickets/page.js",
                            lineNumber: 486,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/tickets/page.js",
                    lineNumber: 484,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        overflowX: 'auto'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "data-table",
                        style: {
                            width: '100%',
                            textAlign: 'left',
                            borderCollapse: 'collapse'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: {
                                        background: 'rgba(255,255,255,0.02)',
                                        borderBottom: '1px solid var(--border-glass)',
                                        fontSize: '0.625rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        color: 'var(--text-dim)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                padding: '1.25rem 2rem'
                                            },
                                            children: "Ticket ID"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 493,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                padding: '1.25rem 2rem'
                                            },
                                            children: "Customer Info"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 494,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                padding: '1.25rem 2rem'
                                            },
                                            children: "Service Details"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 495,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                padding: '1.25rem 2rem'
                                            },
                                            children: "Assigned Tech"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 496,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                padding: '1.25rem 2rem'
                                            },
                                            children: "Priority"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 497,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                padding: '1.25rem 2rem'
                                            },
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 498,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                padding: '1.25rem 2rem',
                                                textAlign: 'right'
                                            },
                                            children: "Update"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 499,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/tickets/page.js",
                                    lineNumber: 492,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/tickets/page.js",
                                lineNumber: 491,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: filteredTickets.map((ticket)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                                            transition: 'var(--transition)'
                                        },
                                        onMouseOver: (e)=>e.currentTarget.style.background = 'rgba(255,255,255,0.02)',
                                        onMouseOut: (e)=>e.currentTarget.style.background = 'transparent',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1.5rem 2rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: 'var(--primary)',
                                                            fontWeight: 900,
                                                            fontSize: '0.875rem',
                                                            fontFamily: 'monospace',
                                                            letterSpacing: '0.05em',
                                                            background: 'rgba(99, 102, 241, 0.1)',
                                                            padding: '0.25rem 0.5rem',
                                                            borderRadius: '0.375rem',
                                                            display: 'inline-block'
                                                        },
                                                        children: [
                                                            "#",
                                                            ticket.ticketNumber
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                        lineNumber: 506,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.625rem',
                                                            color: 'var(--text-dim)',
                                                            marginTop: '0.25rem'
                                                        },
                                                        children: new Date(ticket.createdAt).toLocaleDateString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                        lineNumber: 517,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/tickets/page.js",
                                                lineNumber: 505,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1.5rem 2rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.875rem',
                                                            fontWeight: 'bold'
                                                        },
                                                        children: ticket.customerName
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                        lineNumber: 520,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.75rem',
                                                            color: 'var(--text-dim)',
                                                            maxWidth: '150px',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            whiteSpace: 'nowrap'
                                                        },
                                                        children: ticket.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                        lineNumber: 521,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/tickets/page.js",
                                                lineNumber: 519,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1.5rem 2rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.875rem',
                                                            fontWeight: 600
                                                        },
                                                        children: ticket.product
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                        lineNumber: 524,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.65rem',
                                                            color: 'var(--text-dim)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.25rem',
                                                            marginTop: '0.25rem'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                lineNumber: 526,
                                                                columnNumber: 49
                                                            }, this),
                                                            " ",
                                                            ticket.serviceType
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                        lineNumber: 525,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/tickets/page.js",
                                                lineNumber: 523,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1.5rem 2rem'
                                                },
                                                children: ticket.assignedTo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.5rem'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '1.5rem',
                                                                height: '1.5rem',
                                                                borderRadius: '50%',
                                                                background: 'rgba(108, 99, 255, 0.2)',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                color: 'var(--primary)',
                                                                fontSize: '0.5rem',
                                                                fontWeight: 900
                                                            },
                                                            children: ticket.assignedTo.username.substring(0, 2).toUpperCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 532,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '0.75rem',
                                                                fontWeight: 'bold',
                                                                color: '#e5e7eb'
                                                            },
                                                            children: ticket.assignedTo.username
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 535,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 531,
                                                    columnNumber: 49
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.75rem'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '0.65rem',
                                                                fontWeight: 'bold',
                                                                padding: '0.25rem 0.5rem',
                                                                borderRadius: '0.25rem',
                                                                background: 'rgba(255,255,255,0.05)',
                                                                color: 'var(--text-dim)',
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                gap: '0.25rem',
                                                                border: '1px solid rgba(255,255,255,0.1)'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                                    size: 10
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                    lineNumber: 540,
                                                                    columnNumber: 57
                                                                }, this),
                                                                " Unassigned"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 539,
                                                            columnNumber: 53
                                                        }, this),
                                                        session?.role === 'agent' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                updateTicketDetails(ticket.id, ticket.status, `Self-assigned by agent ${session.username}.`, session.id);
                                                            },
                                                            style: {
                                                                padding: '0.25rem 0.6rem',
                                                                background: 'rgba(108, 99, 255, 0.1)',
                                                                border: '1px solid rgba(108, 99, 255, 0.3)',
                                                                borderRadius: '0.5rem',
                                                                color: 'var(--primary)',
                                                                fontSize: '0.65rem',
                                                                fontWeight: 900,
                                                                cursor: 'pointer',
                                                                transition: 'all 0.2s',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '0.25rem'
                                                            },
                                                            onMouseOver: (e)=>{
                                                                e.currentTarget.style.background = 'var(--primary)';
                                                                e.currentTarget.style.color = '#fff';
                                                            },
                                                            onMouseOut: (e)=>{
                                                                e.currentTarget.style.background = 'rgba(108, 99, 255, 0.1)';
                                                                e.currentTarget.style.color = 'var(--primary)';
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                    lineNumber: 565,
                                                                    columnNumber: 61
                                                                }, this),
                                                                " Take Over"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 543,
                                                            columnNumber: 57
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 538,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/tickets/page.js",
                                                lineNumber: 529,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1.5rem 2rem'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '0.625rem',
                                                        fontWeight: 900,
                                                        display: 'inline-block',
                                                        padding: '0.25rem 0.75rem',
                                                        borderRadius: '9999px',
                                                        border: '1px solid',
                                                        color: ticket.priority === 'High' ? 'var(--secondary)' : 'var(--text-dim)',
                                                        borderColor: ticket.priority === 'High' ? 'rgba(255, 101, 132, 0.2)' : 'rgba(255,255,255,0.1)',
                                                        background: ticket.priority === 'High' ? 'rgba(255, 101, 132, 0.1)' : 'transparent'
                                                    },
                                                    children: ticket.priority.toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 572,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/tickets/page.js",
                                                lineNumber: 571,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1.5rem 2rem'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.5rem'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '0.5rem',
                                                                height: '0.5rem',
                                                                borderRadius: '50%',
                                                                background: ticket.status === 'Open' ? '#60a5fa' : ticket.status === 'Completed' ? '#4ade80' : ticket.status === 'Closed' ? '#9ca3af' : '#facc15'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 578,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '0.875rem',
                                                                fontWeight: 'bold'
                                                            },
                                                            children: ticket.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 579,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 577,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/tickets/page.js",
                                                lineNumber: 576,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1.5rem 2rem',
                                                    textAlign: 'right'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        gap: '0.5rem',
                                                        justifyContent: 'flex-end'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>openTicketModal(ticket),
                                                            style: {
                                                                padding: '0.75rem',
                                                                background: 'rgba(255,255,255,0.05)',
                                                                borderRadius: '0.75rem',
                                                                border: '1px solid rgba(255,255,255,0.05)',
                                                                color: 'var(--text-main)',
                                                                cursor: 'pointer',
                                                                transition: 'all 0.2s'
                                                            },
                                                            onMouseOver: (e)=>{
                                                                e.currentTarget.style.background = 'rgba(108, 99, 255, 0.2)';
                                                                e.currentTarget.style.color = 'var(--primary)';
                                                            },
                                                            onMouseOut: (e)=>{
                                                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                                                e.currentTarget.style.color = 'var(--text-main)';
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                lineNumber: 590,
                                                                columnNumber: 53
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 584,
                                                            columnNumber: 49
                                                        }, this),
                                                        (ticket.status === 'Closed' || ticket.status === 'Completed') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>deleteTicket(ticket.id, ticket.ticketNumber),
                                                            style: {
                                                                padding: '0.75rem',
                                                                background: 'rgba(255,255,255,0.05)',
                                                                borderRadius: '0.75rem',
                                                                border: '1px solid rgba(255,255,255,0.05)',
                                                                color: 'var(--text-main)',
                                                                cursor: 'pointer',
                                                                transition: 'all 0.2s'
                                                            },
                                                            onMouseOver: (e)=>{
                                                                e.currentTarget.style.background = 'rgba(255, 101, 132, 0.2)';
                                                                e.currentTarget.style.color = 'var(--secondary)';
                                                            },
                                                            onMouseOut: (e)=>{
                                                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                                                e.currentTarget.style.color = 'var(--text-main)';
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                lineNumber: 599,
                                                                columnNumber: 57
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 593,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 583,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/tickets/page.js",
                                                lineNumber: 582,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, ticket.id, true, {
                                        fileName: "[project]/app/admin/tickets/page.js",
                                        lineNumber: 504,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/admin/tickets/page.js",
                                lineNumber: 502,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/tickets/page.js",
                        lineNumber: 490,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/tickets/page.js",
                    lineNumber: 489,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/tickets/page.js",
                lineNumber: 482,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isModalOpen && selectedTicket && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'fixed',
                        inset: 0,
                        zIndex: 1000,
                        display: 'flex',
                        justifyContent: 'flex-end'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            onClick: ()=>setIsModalOpen(false),
                            style: {
                                position: 'fixed',
                                inset: 0,
                                background: 'rgba(0,0,0,0.6)',
                                backdropFilter: 'blur(4px)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/admin/tickets/page.js",
                            lineNumber: 616,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                x: '100%'
                            },
                            animate: {
                                x: 0
                            },
                            exit: {
                                x: '100%'
                            },
                            transition: {
                                type: 'spring',
                                damping: 30,
                                stiffness: 300
                            },
                            style: {
                                background: '#0a0a0f',
                                borderLeft: '1px solid var(--border-glass)',
                                width: '95%',
                                maxWidth: '900px',
                                height: '100vh',
                                position: 'relative',
                                zIndex: 10,
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden',
                                boxShadow: '-10px 0 50px rgba(0, 0, 0, 0.5)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '1.5rem 2.5rem',
                                        borderBottom: '1px solid var(--border-glass)',
                                        background: 'rgba(255,255,255,0.02)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        flexShrink: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '1.5rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: '3.5rem',
                                                        height: '3.5rem',
                                                        borderRadius: '1rem',
                                                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        boxShadow: '0 8px 16px -4px var(--primary-glow)'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                        size: 24,
                                                        color: "#fff"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                        lineNumber: 646,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 645,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            style: {
                                                                fontSize: '1.75rem',
                                                                fontWeight: 900,
                                                                margin: '0 0 0.25rem 0',
                                                                letterSpacing: '-0.025em'
                                                            },
                                                            children: [
                                                                "Update ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-primary",
                                                                    style: {
                                                                        fontFamily: 'monospace'
                                                                    },
                                                                    children: [
                                                                        "#",
                                                                        selectedTicket.ticketNumber
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                    lineNumber: 649,
                                                                    columnNumber: 153
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 649,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: '0.875rem',
                                                                color: 'var(--text-dim)',
                                                                fontWeight: 600,
                                                                margin: 0
                                                            },
                                                            children: [
                                                                selectedTicket.customerName,
                                                                " • ",
                                                                selectedTicket.product
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 650,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 648,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 644,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '1.5rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: '0.625rem 1.25rem',
                                                        borderRadius: '1rem',
                                                        border: '1px solid rgba(255,255,255,0.1)',
                                                        fontSize: '0.75rem',
                                                        fontWeight: 900,
                                                        letterSpacing: '0.1em',
                                                        textTransform: 'uppercase',
                                                        background: 'rgba(255,255,255,0.05)',
                                                        color: '#fff'
                                                    },
                                                    children: selectedTicket.status
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 654,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsModalOpen(false),
                                                    style: {
                                                        padding: '0.75rem',
                                                        background: 'rgba(255,255,255,0.05)',
                                                        border: 'none',
                                                        borderRadius: '0.75rem',
                                                        cursor: 'pointer',
                                                        color: 'var(--text-dim)',
                                                        transition: 'all 0.2s'
                                                    },
                                                    onMouseOver: (e)=>e.currentTarget.style.color = '#fff',
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                        lineNumber: 658,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 657,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 653,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/tickets/page.js",
                                    lineNumber: 643,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: 0,
                                        overflowY: 'auto',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flex: 1,
                                        minHeight: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: '1.5rem 2.5rem',
                                                borderBottom: '1px solid rgba(255,255,255,0.05)',
                                                background: 'rgba(255,255,255,0.01)',
                                                flexShrink: 0
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                                    gap: '2rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: {
                                                                    fontSize: '0.625rem',
                                                                    textTransform: 'uppercase',
                                                                    fontWeight: 900,
                                                                    color: 'var(--text-dim)',
                                                                    letterSpacing: '0.15em',
                                                                    display: 'block'
                                                                },
                                                                children: "Assigned Technician"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                lineNumber: 669,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    position: 'relative'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        id: "assign-select",
                                                                        defaultValue: selectedTicket.assignedToId || '',
                                                                        className: "input-field",
                                                                        style: {
                                                                            width: '100%',
                                                                            padding: '1rem',
                                                                            background: 'rgba(255,255,255,0.05)',
                                                                            borderRadius: '1rem',
                                                                            fontSize: '0.875rem',
                                                                            fontWeight: 700,
                                                                            appearance: 'none',
                                                                            border: '1px solid rgba(255,255,255,0.05)'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                style: {
                                                                                    background: 'var(--bg-dark)'
                                                                                },
                                                                                children: "Unassigned"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                                lineNumber: 677,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            agents.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: a.id,
                                                                                    style: {
                                                                                        background: 'var(--bg-dark)'
                                                                                    },
                                                                                    children: a.username
                                                                                }, a.id, false, {
                                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                                    lineNumber: 679,
                                                                                    columnNumber: 57
                                                                                }, this))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                        lineNumber: 671,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            position: 'absolute',
                                                                            right: '1rem',
                                                                            top: '50%',
                                                                            transform: 'translateY(-50%)',
                                                                            pointerEvents: 'none',
                                                                            opacity: 0.5
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                            lineNumber: 683,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                        lineNumber: 682,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                lineNumber: 670,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                        lineNumber: 668,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: {
                                                                    fontSize: '0.625rem',
                                                                    textTransform: 'uppercase',
                                                                    fontWeight: 900,
                                                                    color: 'var(--text-dim)',
                                                                    letterSpacing: '0.15em',
                                                                    display: 'block'
                                                                },
                                                                children: "Ticket Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                lineNumber: 688,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    position: 'relative'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        id: "status-select",
                                                                        defaultValue: selectedTicket.status,
                                                                        className: "input-field",
                                                                        style: {
                                                                            width: '100%',
                                                                            padding: '1rem',
                                                                            background: 'rgba(255,255,255,0.05)',
                                                                            borderRadius: '1rem',
                                                                            fontSize: '0.875rem',
                                                                            fontWeight: 700,
                                                                            appearance: 'none',
                                                                            border: '1px solid rgba(255,255,255,0.05)'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Open",
                                                                                children: "Open"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                                lineNumber: 696,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "In Progress",
                                                                                children: "In Progress"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                                lineNumber: 697,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Pending Parts",
                                                                                children: "Pending Parts"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                                lineNumber: 698,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Completed",
                                                                                children: "Completed ✅"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                                lineNumber: 699,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "Closed",
                                                                                children: "Closed 🔒"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                                lineNumber: 700,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                        lineNumber: 690,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            position: 'absolute',
                                                                            right: '1rem',
                                                                            top: '50%',
                                                                            transform: 'translateY(-50%)',
                                                                            pointerEvents: 'none',
                                                                            opacity: 0.5
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                            lineNumber: 703,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                        lineNumber: 702,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                lineNumber: 689,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                        lineNumber: 687,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: {
                                                                    fontSize: '0.625rem',
                                                                    textTransform: 'uppercase',
                                                                    fontWeight: 900,
                                                                    color: 'var(--text-dim)',
                                                                    letterSpacing: '0.15em',
                                                                    display: 'block'
                                                                },
                                                                children: "Update Note"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                lineNumber: 708,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    position: 'relative'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        id: "comments-textarea",
                                                                        defaultValue: "",
                                                                        className: "input-field",
                                                                        style: {
                                                                            width: '100%',
                                                                            padding: '1rem',
                                                                            background: 'rgba(255,255,255,0.05)',
                                                                            borderRadius: '1rem',
                                                                            fontSize: '0.875rem',
                                                                            border: '1px solid rgba(255,255,255,0.05)'
                                                                        },
                                                                        placeholder: "Status update note..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                        lineNumber: 710,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            position: 'absolute',
                                                                            right: '1rem',
                                                                            top: '50%',
                                                                            transform: 'translateY(-50%)',
                                                                            pointerEvents: 'none',
                                                                            opacity: 0.5
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                            lineNumber: 718,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                        lineNumber: 717,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                lineNumber: 709,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                        lineNumber: 707,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/tickets/page.js",
                                                lineNumber: 667,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 666,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                minHeight: '600px',
                                                background: 'rgba(0,0,0,0.1)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: '1.25rem 2.5rem',
                                                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                                                        background: 'linear-gradient(to right, rgba(108, 99, 255, 0.05), rgba(0,0,0,0))',
                                                        flexShrink: 0
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '1rem'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            width: '2.5rem',
                                                                            height: '2.5rem',
                                                                            background: 'rgba(108, 99, 255, 0.15)',
                                                                            borderRadius: '0.75rem',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center'
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                                            size: 20,
                                                                            className: "text-primary"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                            lineNumber: 730,
                                                                            columnNumber: 230
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                        lineNumber: 730,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                style: {
                                                                                    margin: 0,
                                                                                    fontSize: '1rem',
                                                                                    fontWeight: 800,
                                                                                    color: '#fff'
                                                                                },
                                                                                children: "Integrated Billing"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                                lineNumber: 732,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                style: {
                                                                                    margin: 0,
                                                                                    fontSize: '0.75rem',
                                                                                    color: 'var(--text-dim)'
                                                                                },
                                                                                children: "Select items for invoice"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                                lineNumber: 733,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                        lineNumber: 731,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                lineNumber: 729,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    textAlign: 'right'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: '1.5rem',
                                                                        fontWeight: 900,
                                                                        color: '#4ade80'
                                                                    },
                                                                    children: [
                                                                        "₹",
                                                                        getGrandTotal().toFixed(2)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                    lineNumber: 737,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                lineNumber: 736,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                        lineNumber: 728,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 727,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        flex: 1,
                                                        display: 'flex',
                                                        overflow: 'hidden'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '55%',
                                                                borderRight: '1px solid rgba(255,255,255,0.05)',
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                overflow: 'hidden'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        padding: '1rem',
                                                                        display: 'flex',
                                                                        gap: '0.5rem',
                                                                        flexShrink: 0
                                                                    },
                                                                    children: [
                                                                        'services',
                                                                        'parts',
                                                                        'custom'
                                                                    ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setActiveTab(t),
                                                                            style: {
                                                                                padding: '0.5rem 1rem',
                                                                                borderRadius: '0.5rem',
                                                                                border: '1px solid',
                                                                                borderColor: activeTab === t ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                                                                                background: activeTab === t ? 'var(--primary)' : 'transparent',
                                                                                color: '#fff',
                                                                                fontSize: '0.75rem',
                                                                                fontWeight: 'bold',
                                                                                cursor: 'pointer'
                                                                            },
                                                                            children: t.toUpperCase()
                                                                        }, t, false, {
                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                            lineNumber: 747,
                                                                            columnNumber: 53
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                    lineNumber: 745,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        flex: 1,
                                                                        overflow: 'auto',
                                                                        padding: '1rem'
                                                                    },
                                                                    children: [
                                                                        activeTab === 'services' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: 'grid',
                                                                                gridTemplateColumns: '1fr 1fr',
                                                                                gap: '0.5rem'
                                                                            },
                                                                            children: servicePresets.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>addItem(s),
                                                                                    style: {
                                                                                        padding: '0.75rem',
                                                                                        background: 'rgba(255,255,255,0.03)',
                                                                                        border: '1px solid rgba(255,255,255,0.05)',
                                                                                        borderRadius: '0.5rem',
                                                                                        color: '#fff',
                                                                                        textAlign: 'left',
                                                                                        cursor: 'pointer'
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                fontSize: '0.75rem',
                                                                                                fontWeight: 'bold'
                                                                                            },
                                                                                            children: s.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 755,
                                                                                            columnNumber: 65
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                fontSize: '0.85rem',
                                                                                                color: '#4ade80'
                                                                                            },
                                                                                            children: [
                                                                                                "₹",
                                                                                                s.price
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 756,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    ]
                                                                                }, s.id, true, {
                                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                                    lineNumber: 754,
                                                                                    columnNumber: 61
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                            lineNumber: 752,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        activeTab === 'parts' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: 'grid',
                                                                                gridTemplateColumns: '1fr 1fr',
                                                                                gap: '0.5rem'
                                                                            },
                                                                            children: partsPresets.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>addItem(p),
                                                                                    style: {
                                                                                        padding: '0.75rem',
                                                                                        background: 'rgba(255,255,255,0.03)',
                                                                                        border: '1px solid rgba(255,255,255,0.05)',
                                                                                        borderRadius: '0.5rem',
                                                                                        color: '#fff',
                                                                                        textAlign: 'left',
                                                                                        cursor: 'pointer'
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                fontSize: '0.75rem',
                                                                                                fontWeight: 'bold'
                                                                                            },
                                                                                            children: p.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 765,
                                                                                            columnNumber: 65
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                fontSize: '0.85rem',
                                                                                                color: '#4ade80'
                                                                                            },
                                                                                            children: [
                                                                                                "₹",
                                                                                                p.price
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 766,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    ]
                                                                                }, p.id, true, {
                                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                                    lineNumber: 764,
                                                                                    columnNumber: 61
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                            lineNumber: 762,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        activeTab === 'custom' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: 'flex',
                                                                                flexDirection: 'column',
                                                                                gap: '0.75rem'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    value: customItem.desc,
                                                                                    onChange: (e)=>setCustomItem({
                                                                                            ...customItem,
                                                                                            desc: e.target.value
                                                                                        }),
                                                                                    className: "input-field",
                                                                                    style: {
                                                                                        width: '100%',
                                                                                        padding: '0.75rem',
                                                                                        background: 'rgba(255,255,255,0.05)',
                                                                                        borderRadius: '0.5rem'
                                                                                    },
                                                                                    placeholder: "Description"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                                    lineNumber: 773,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        display: 'grid',
                                                                                        gridTemplateColumns: '1fr 1fr 1fr 1fr',
                                                                                        gap: '0.5rem',
                                                                                        marginBottom: '0.25rem',
                                                                                        alignItems: 'center'
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                fontSize: '0.625rem',
                                                                                                fontWeight: 900,
                                                                                                textTransform: 'uppercase',
                                                                                                letterSpacing: '0.08em',
                                                                                                color: 'var(--text-dim)',
                                                                                                textAlign: 'center'
                                                                                            },
                                                                                            children: "Qty"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 776,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                fontSize: '0.625rem',
                                                                                                fontWeight: 900,
                                                                                                textTransform: 'uppercase',
                                                                                                letterSpacing: '0.08em',
                                                                                                color: 'var(--text-dim)',
                                                                                                textAlign: 'center'
                                                                                            },
                                                                                            children: "Unit"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 777,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                fontSize: '0.625rem',
                                                                                                fontWeight: 900,
                                                                                                textTransform: 'uppercase',
                                                                                                letterSpacing: '0.08em',
                                                                                                color: 'var(--text-dim)',
                                                                                                textAlign: 'right'
                                                                                            },
                                                                                            children: "MRP (Optional)"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 778,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                fontSize: '0.625rem',
                                                                                                fontWeight: 900,
                                                                                                textTransform: 'uppercase',
                                                                                                letterSpacing: '0.08em',
                                                                                                color: '#22c55e',
                                                                                                textAlign: 'right'
                                                                                            },
                                                                                            children: "Selling Price *"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 779,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                                    lineNumber: 775,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        display: 'grid',
                                                                                        gridTemplateColumns: '1fr 1fr 1fr 1fr',
                                                                                        gap: '0.5rem'
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "number",
                                                                                            value: customItem.qty,
                                                                                            onChange: (e)=>setCustomItem({
                                                                                                    ...customItem,
                                                                                                    qty: e.target.value
                                                                                                }),
                                                                                            className: "input-field",
                                                                                            style: {
                                                                                                width: '100%',
                                                                                                padding: '0.5rem',
                                                                                                background: 'rgba(255,255,255,0.05)',
                                                                                                borderRadius: '0.5rem'
                                                                                            },
                                                                                            placeholder: "1"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 782,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                            value: customItem.unit,
                                                                                            onChange: (e)=>setCustomItem({
                                                                                                    ...customItem,
                                                                                                    unit: e.target.value
                                                                                                }),
                                                                                            className: "input-field",
                                                                                            style: {
                                                                                                width: '100%',
                                                                                                padding: '0.5rem',
                                                                                                background: 'rgba(255,255,255,0.05)',
                                                                                                borderRadius: '0.5rem'
                                                                                            },
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: "NOS",
                                                                                                children: "NOS"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                                                lineNumber: 783,
                                                                                                columnNumber: 295
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 783,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "number",
                                                                                            value: customItem.mrp,
                                                                                            onChange: (e)=>setCustomItem({
                                                                                                    ...customItem,
                                                                                                    mrp: e.target.value
                                                                                                }),
                                                                                            className: "input-field",
                                                                                            style: {
                                                                                                width: '100%',
                                                                                                padding: '0.5rem',
                                                                                                background: 'rgba(255,255,255,0.05)',
                                                                                                borderRadius: '0.5rem'
                                                                                            },
                                                                                            placeholder: "0"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 784,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "number",
                                                                                            value: customItem.price,
                                                                                            onChange: (e)=>setCustomItem({
                                                                                                    ...customItem,
                                                                                                    price: e.target.value
                                                                                                }),
                                                                                            className: "input-field",
                                                                                            style: {
                                                                                                width: '100%',
                                                                                                padding: '0.5rem',
                                                                                                background: 'rgba(255,255,255,0.05)',
                                                                                                borderRadius: '0.5rem'
                                                                                            },
                                                                                            placeholder: "0"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 785,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                                    lineNumber: 781,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    style: {
                                                                                        display: 'flex',
                                                                                        alignItems: 'center',
                                                                                        gap: '0.5rem',
                                                                                        cursor: 'pointer',
                                                                                        color: '#fff',
                                                                                        fontSize: '0.875rem'
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "checkbox",
                                                                                            checked: excludingGst,
                                                                                            onChange: (e)=>setExcludingGst(e.target.checked),
                                                                                            style: {
                                                                                                width: '16px',
                                                                                                height: '16px',
                                                                                                cursor: 'pointer'
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 788,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        "Excluding GST"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                                    lineNumber: 787,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: addCustomItem,
                                                                                    className: "btn-primary",
                                                                                    style: {
                                                                                        padding: '0.75rem',
                                                                                        borderRadius: '0.5rem'
                                                                                    },
                                                                                    children: "Add Item"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                                    lineNumber: 791,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                            lineNumber: 772,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                    lineNumber: 750,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 744,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '45%',
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                background: 'rgba(0,0,0,0.2)'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        padding: '1rem',
                                                                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                                                                        fontWeight: 'bold'
                                                                    },
                                                                    children: [
                                                                        "Bill (",
                                                                        invoiceItems.length,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                    lineNumber: 797,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        flex: 1,
                                                                        overflow: 'auto',
                                                                        padding: '1rem'
                                                                    },
                                                                    children: [
                                                                        existingInvoice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                marginBottom: '1rem',
                                                                                padding: '1rem',
                                                                                borderRadius: '0.75rem',
                                                                                background: 'rgba(74, 222, 128, 0.1)',
                                                                                border: '1px solid rgba(74, 222, 128, 0.2)',
                                                                                display: 'flex',
                                                                                flexDirection: 'column',
                                                                                gap: '0.5rem'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        display: 'flex',
                                                                                        justifyContent: 'space-between',
                                                                                        alignItems: 'center'
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                fontSize: '0.625rem',
                                                                                                textTransform: 'uppercase',
                                                                                                fontWeight: 900,
                                                                                                color: '#4ade80',
                                                                                                letterSpacing: '0.1em'
                                                                                            },
                                                                                            children: "Existing Invoice"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 811,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                padding: '0.25rem 0.5rem',
                                                                                                borderRadius: '0.25rem',
                                                                                                background: '#4ade80',
                                                                                                color: '#000',
                                                                                                fontSize: '0.625rem',
                                                                                                fontWeight: 900
                                                                                            },
                                                                                            children: existingInvoice.status || 'UNPAID'
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 812,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                                    lineNumber: 810,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        display: 'flex',
                                                                                        justifyContent: 'space-between',
                                                                                        alignItems: 'center'
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                fontSize: '0.875rem',
                                                                                                fontWeight: 'bold',
                                                                                                color: '#fff'
                                                                                            },
                                                                                            children: existingInvoice.invoiceNumber
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 815,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            onClick: ()=>window.open(`/api/admin/invoices/download/${existingInvoice.id}`, '_blank'),
                                                                                            style: {
                                                                                                padding: '0.4rem 0.8rem',
                                                                                                background: 'rgba(255,255,255,0.1)',
                                                                                                border: 'none',
                                                                                                borderRadius: '0.5rem',
                                                                                                color: '#fff',
                                                                                                fontSize: '0.75rem',
                                                                                                fontWeight: 'bold',
                                                                                                cursor: 'pointer',
                                                                                                display: 'flex',
                                                                                                alignItems: 'center',
                                                                                                gap: '0.4rem'
                                                                                            },
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                                                    size: 14
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                                                    lineNumber: 820,
                                                                                                    columnNumber: 65
                                                                                                }, this),
                                                                                                " Download"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 816,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                                    lineNumber: 814,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                            lineNumber: 800,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        invoiceItems.map((item, index)=>{
                                                                            const mrp = Number(item.mrp || 0);
                                                                            const sellingPrice = Number(item.price || 0);
                                                                            const total = sellingPrice * (item.qty || 1);
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    background: 'rgba(255,255,255,0.03)',
                                                                                    padding: '0.75rem',
                                                                                    borderRadius: '0.5rem',
                                                                                    marginBottom: '0.5rem',
                                                                                    display: 'flex',
                                                                                    flexDirection: 'column',
                                                                                    gap: '0.25rem'
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            display: 'flex',
                                                                                            justifyContent: 'space-between',
                                                                                            alignItems: 'flex-start'
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        style: {
                                                                                                            fontSize: '0.75rem',
                                                                                                            fontWeight: 'bold'
                                                                                                        },
                                                                                                        children: item.desc
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                                                        lineNumber: 834,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        style: {
                                                                                                            fontSize: '0.65rem',
                                                                                                            color: 'var(--text-dim)'
                                                                                                        },
                                                                                                        children: [
                                                                                                            item.qty,
                                                                                                            " ",
                                                                                                            item.unit,
                                                                                                            mrp > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                children: [
                                                                                                                    " · MRP: ",
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                        style: {
                                                                                                                            textDecoration: 'line-through',
                                                                                                                            color: '#666'
                                                                                                                        },
                                                                                                                        children: [
                                                                                                                            "₹",
                                                                                                                            mrp.toLocaleString()
                                                                                                                        ]
                                                                                                                    }, void 0, true, {
                                                                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                                                                        lineNumber: 838,
                                                                                                                        columnNumber: 91
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                                                                lineNumber: 838,
                                                                                                                columnNumber: 77
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                                                        lineNumber: 835,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                                                lineNumber: 833,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                onClick: ()=>removeItem(index),
                                                                                                style: {
                                                                                                    color: 'var(--secondary)',
                                                                                                    border: 'none',
                                                                                                    background: 'transparent'
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                                    size: 12
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                                                    lineNumber: 842,
                                                                                                    columnNumber: 188
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                                                lineNumber: 842,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                                        lineNumber: 832,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            display: 'flex',
                                                                                            justifyContent: 'space-between',
                                                                                            alignItems: 'center'
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                style: {
                                                                                                    fontSize: '0.7rem',
                                                                                                    color: '#22c55e',
                                                                                                    fontWeight: 'bold'
                                                                                                },
                                                                                                children: [
                                                                                                    "₹",
                                                                                                    sellingPrice.toLocaleString(),
                                                                                                    " / ",
                                                                                                    item.unit
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                                                lineNumber: 845,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                style: {
                                                                                                    fontWeight: 'bold',
                                                                                                    color: '#4ade80',
                                                                                                    fontSize: '0.875rem'
                                                                                                },
                                                                                                children: [
                                                                                                    "₹",
                                                                                                    total.toLocaleString()
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                                                lineNumber: 846,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                                        lineNumber: 844,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, index, true, {
                                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                                lineNumber: 831,
                                                                                columnNumber: 57
                                                                            }, this);
                                                                        })
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                    lineNumber: 798,
                                                                    columnNumber: 45
                                                                }, this),
                                                                invoiceItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        padding: '1rem',
                                                                        borderTop: '1px solid rgba(255,255,255,0.05)',
                                                                        display: 'flex',
                                                                        flexDirection: 'column',
                                                                        gap: '0.75rem'
                                                                    },
                                                                    children: [
                                                                        session && (session.role === 'admin' || session.role === 'agent') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                padding: '0.75rem',
                                                                                borderRadius: '0.5rem',
                                                                                background: 'rgba(108, 99, 255, 0.1)',
                                                                                border: '1px solid rgba(108, 99, 255, 0.2)',
                                                                                fontSize: '0.7rem',
                                                                                color: 'var(--primary)',
                                                                                textAlign: 'center',
                                                                                fontWeight: 'bold'
                                                                            },
                                                                            children: "Generations by Admin/Agent require Superadmin approval."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                            lineNumber: 855,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: 'flex',
                                                                                gap: '0.5rem'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: generateAndDownloadPDF,
                                                                                    disabled: generatingInvoice,
                                                                                    style: {
                                                                                        flex: 1,
                                                                                        padding: '0.75rem',
                                                                                        background: '#4ade80',
                                                                                        color: '#000',
                                                                                        borderRadius: '0.5rem',
                                                                                        fontWeight: 'bold',
                                                                                        border: 'none',
                                                                                        display: 'flex',
                                                                                        alignItems: 'center',
                                                                                        justifyContent: 'center',
                                                                                        gap: '0.5rem',
                                                                                        opacity: generatingInvoice ? 0.7 : 1
                                                                                    },
                                                                                    children: [
                                                                                        generatingInvoice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                            size: 16,
                                                                                            className: "animate-spin"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 865,
                                                                                            columnNumber: 82
                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                                            size: 16
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 865,
                                                                                            columnNumber: 131
                                                                                        }, this),
                                                                                        existingInvoice ? 'Update & Download' : 'Generate PDF'
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                                    lineNumber: 860,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: sendInvoiceToCustomer,
                                                                                    disabled: generatingInvoice,
                                                                                    style: {
                                                                                        flex: 1,
                                                                                        padding: '0.75rem',
                                                                                        background: 'var(--primary)',
                                                                                        color: '#fff',
                                                                                        borderRadius: '0.5rem',
                                                                                        fontWeight: 'bold',
                                                                                        border: 'none',
                                                                                        display: 'flex',
                                                                                        alignItems: 'center',
                                                                                        justifyContent: 'center',
                                                                                        gap: '0.5rem',
                                                                                        opacity: generatingInvoice ? 0.7 : 1
                                                                                    },
                                                                                    children: [
                                                                                        generatingInvoice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                            size: 16,
                                                                                            className: "animate-spin"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 873,
                                                                                            columnNumber: 82
                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                                            size: 16
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                                            lineNumber: 873,
                                                                                            columnNumber: 131
                                                                                        }, this),
                                                                                        "Email Bill"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                                    lineNumber: 868,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                            lineNumber: 859,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        invoiceItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: sendQuoteToCustomer,
                                                                            disabled: generatingInvoice,
                                                                            style: {
                                                                                width: '100%',
                                                                                padding: '0.75rem',
                                                                                background: 'transparent',
                                                                                color: '#ffc107',
                                                                                borderRadius: '0.5rem',
                                                                                fontWeight: 'bold',
                                                                                border: '1px solid #ffc107',
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                justifyContent: 'center',
                                                                                gap: '0.5rem',
                                                                                opacity: generatingInvoice ? 0.7 : 1
                                                                            },
                                                                            children: [
                                                                                generatingInvoice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                    size: 16,
                                                                                    className: "animate-spin"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                                    lineNumber: 883,
                                                                                    columnNumber: 82
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                                                    size: 16
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                                    lineNumber: 883,
                                                                                    columnNumber: 131
                                                                                }, this),
                                                                                "Send Quote (Customer Can Accept/Reject)"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                            lineNumber: 878,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                                    lineNumber: 853,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 796,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 742,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 726,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/tickets/page.js",
                                    lineNumber: 664,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '1.5rem 2.5rem',
                                        borderTop: '1px solid var(--border-glass)',
                                        background: 'rgba(0,0,0,0.4)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        flexShrink: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem',
                                                cursor: 'pointer',
                                                fontSize: '0.875rem',
                                                color: 'var(--text-dim)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: sendEmailChecked,
                                                    onChange: (e)=>setSendEmailChecked(e.target.checked),
                                                    style: {
                                                        width: '18px',
                                                        height: '18px',
                                                        accentColor: 'var(--primary)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 897,
                                                    columnNumber: 37
                                                }, this),
                                                "Auto-send invoice"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 896,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '1rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsModalOpen(false),
                                                    style: {
                                                        padding: '0.75rem 1.5rem',
                                                        border: '1px solid rgba(255,255,255,0.1)',
                                                        borderRadius: '1rem',
                                                        color: 'var(--text-dim)',
                                                        background: 'transparent'
                                                    },
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 901,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        const s = document.getElementById('status-select').value;
                                                        const a = document.getElementById('assign-select').value;
                                                        const c = document.getElementById('comments-textarea').value;
                                                        updateTicketDetails(selectedTicket.id, s, c, a);
                                                    },
                                                    disabled: updateLoading,
                                                    className: "btn-primary",
                                                    style: {
                                                        padding: '0.75rem 2rem',
                                                        borderRadius: '1rem',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.5rem'
                                                    },
                                                    children: [
                                                        updateLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 903,
                                                            columnNumber: 58
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 903,
                                                            columnNumber: 82
                                                        }, this),
                                                        " Update"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 902,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 900,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/tickets/page.js",
                                    lineNumber: 895,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/tickets/page.js",
                            lineNumber: 623,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/tickets/page.js",
                    lineNumber: 615,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/tickets/page.js",
                lineNumber: 613,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isCreateModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'fixed',
                        inset: 0,
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1.5rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            onClick: ()=>setIsCreateModalOpen(false),
                            style: {
                                position: 'absolute',
                                inset: 0,
                                background: 'rgba(0,0,0,0.8)',
                                backdropFilter: 'blur(8px)',
                                WebkitBackdropFilter: 'blur(8px)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/admin/tickets/page.js",
                            lineNumber: 916,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 0.95,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            exit: {
                                scale: 0.95,
                                opacity: 0
                            },
                            className: "glass-modal",
                            style: {
                                maxWidth: '42rem',
                                width: '100%',
                                padding: '2.5rem',
                                position: 'relative',
                                zIndex: 10,
                                maxHeight: '90vh',
                                overflowY: 'auto'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '2rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "title-md",
                                            style: {
                                                margin: 0,
                                                fontWeight: 900
                                            },
                                            children: [
                                                "Create New ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "gradient-text",
                                                    children: "Ticket"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 919,
                                                    columnNumber: 108
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 919,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsCreateModalOpen(false),
                                            style: {
                                                background: 'none',
                                                border: 'none',
                                                color: 'var(--text-dim)',
                                                cursor: 'pointer'
                                            },
                                            onMouseOver: (e)=>e.currentTarget.style.color = '#fff',
                                            onMouseOut: (e)=>e.currentTarget.style.color = 'var(--text-dim)',
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/tickets/page.js",
                                                lineNumber: 921,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 920,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/tickets/page.js",
                                    lineNumber: 918,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleCreateTicket,
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1.5rem'
                                    },
                                    children: [
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
                                                                fontSize: '0.625rem',
                                                                fontWeight: 900,
                                                                textTransform: 'uppercase',
                                                                letterSpacing: '0.1em',
                                                                color: 'var(--text-dim)',
                                                                marginBottom: '0.5rem',
                                                                display: 'block'
                                                            },
                                                            children: "Customer Name *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 927,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            required: true,
                                                            className: "input-field",
                                                            style: {
                                                                width: '100%',
                                                                padding: '1rem',
                                                                borderRadius: '0.75rem',
                                                                background: 'rgba(255,255,255,0.05)',
                                                                fontSize: '0.875rem'
                                                            },
                                                            value: createForm.customerName,
                                                            onChange: (e)=>setCreateForm({
                                                                    ...createForm,
                                                                    customerName: e.target.value
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 928,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 926,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: {
                                                                fontSize: '0.625rem',
                                                                fontWeight: 900,
                                                                textTransform: 'uppercase',
                                                                letterSpacing: '0.1em',
                                                                color: 'var(--text-dim)',
                                                                marginBottom: '0.5rem',
                                                                display: 'block'
                                                            },
                                                            children: "Phone Number *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 931,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            required: true,
                                                            type: "tel",
                                                            className: "input-field",
                                                            style: {
                                                                width: '100%',
                                                                padding: '1rem',
                                                                borderRadius: '0.75rem',
                                                                background: 'rgba(255,255,255,0.05)',
                                                                fontSize: '0.875rem'
                                                            },
                                                            value: createForm.phone,
                                                            onChange: (e)=>setCreateForm({
                                                                    ...createForm,
                                                                    phone: e.target.value
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 932,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 930,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 925,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: '0.625rem',
                                                        fontWeight: 900,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.1em',
                                                        color: 'var(--text-dim)',
                                                        marginBottom: '0.5rem',
                                                        display: 'block'
                                                    },
                                                    children: "Email Address *"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 936,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    type: "email",
                                                    className: "input-field",
                                                    style: {
                                                        width: '100%',
                                                        padding: '1rem',
                                                        borderRadius: '0.75rem',
                                                        background: 'rgba(255,255,255,0.05)',
                                                        fontSize: '0.875rem'
                                                    },
                                                    value: createForm.email,
                                                    onChange: (e)=>setCreateForm({
                                                            ...createForm,
                                                            email: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 937,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 935,
                                            columnNumber: 33
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
                                                                fontSize: '0.625rem',
                                                                fontWeight: 900,
                                                                textTransform: 'uppercase',
                                                                letterSpacing: '0.1em',
                                                                color: 'var(--text-dim)',
                                                                marginBottom: '0.5rem',
                                                                display: 'block'
                                                            },
                                                            children: "Product *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 941,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "input-field",
                                                            style: {
                                                                padding: 0,
                                                                overflow: 'hidden',
                                                                background: 'rgba(255,255,255,0.05)',
                                                                borderRadius: '0.75rem'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                required: true,
                                                                style: {
                                                                    appearance: 'none',
                                                                    background: 'transparent',
                                                                    border: 'none',
                                                                    width: '100%',
                                                                    padding: '1rem',
                                                                    color: 'inherit',
                                                                    fontSize: '0.875rem',
                                                                    fontWeight: 'bold',
                                                                    outline: 'none'
                                                                },
                                                                value: createForm.product,
                                                                onChange: (e)=>setCreateForm({
                                                                        ...createForm,
                                                                        product: e.target.value
                                                                    }),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        style: {
                                                                            background: 'var(--bg-dark)'
                                                                        },
                                                                        children: "Select Product"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                        lineNumber: 944,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    products.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: p.name,
                                                                            style: {
                                                                                background: 'var(--bg-dark)'
                                                                            },
                                                                            children: p.name
                                                                        }, p.id, false, {
                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                            lineNumber: 946,
                                                                            columnNumber: 53
                                                                        }, this)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Custom",
                                                                        style: {
                                                                            background: 'var(--bg-dark)'
                                                                        },
                                                                        children: "Other / Custom"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                        lineNumber: 948,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                lineNumber: 943,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 942,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 940,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: {
                                                                fontSize: '0.625rem',
                                                                fontWeight: 900,
                                                                textTransform: 'uppercase',
                                                                letterSpacing: '0.1em',
                                                                color: 'var(--text-dim)',
                                                                marginBottom: '0.5rem',
                                                                display: 'block'
                                                            },
                                                            children: "Service Type *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 953,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "input-field",
                                                            style: {
                                                                padding: 0,
                                                                overflow: 'hidden',
                                                                background: 'rgba(255,255,255,0.05)',
                                                                borderRadius: '0.75rem'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                style: {
                                                                    appearance: 'none',
                                                                    background: 'transparent',
                                                                    border: 'none',
                                                                    width: '100%',
                                                                    padding: '1rem',
                                                                    color: 'inherit',
                                                                    fontSize: '0.875rem',
                                                                    fontWeight: 'bold',
                                                                    outline: 'none'
                                                                },
                                                                value: createForm.serviceType,
                                                                onChange: (e)=>setCreateForm({
                                                                        ...createForm,
                                                                        serviceType: e.target.value
                                                                    }),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Repair",
                                                                        style: {
                                                                            background: 'var(--bg-dark)'
                                                                        },
                                                                        children: "Repair"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                        lineNumber: 956,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Installation",
                                                                        style: {
                                                                            background: 'var(--bg-dark)'
                                                                        },
                                                                        children: "Installation"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                        lineNumber: 957,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Maintenance",
                                                                        style: {
                                                                            background: 'var(--bg-dark)'
                                                                        },
                                                                        children: "Maintenance"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                        lineNumber: 958,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Support",
                                                                        style: {
                                                                            background: 'var(--bg-dark)'
                                                                        },
                                                                        children: "Support"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                        lineNumber: 959,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                lineNumber: 955,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 954,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 952,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 939,
                                            columnNumber: 33
                                        }, this),
                                        createForm.product === 'Custom' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: '0.625rem',
                                                        fontWeight: 900,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.1em',
                                                        color: 'var(--text-dim)',
                                                        marginBottom: '0.5rem',
                                                        display: 'block'
                                                    },
                                                    children: "Custom Product Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 966,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    className: "input-field",
                                                    style: {
                                                        width: '100%',
                                                        padding: '1rem',
                                                        borderRadius: '0.75rem',
                                                        background: 'rgba(255,255,255,0.05)',
                                                        fontSize: '0.875rem'
                                                    },
                                                    value: createForm.customProduct || '',
                                                    onChange: (e)=>setCreateForm({
                                                            ...createForm,
                                                            customProduct: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 967,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 965,
                                            columnNumber: 37
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
                                                                fontSize: '0.625rem',
                                                                fontWeight: 900,
                                                                textTransform: 'uppercase',
                                                                letterSpacing: '0.1em',
                                                                color: 'var(--text-dim)',
                                                                marginBottom: '0.5rem',
                                                                display: 'block'
                                                            },
                                                            children: "Priority *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 972,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "input-field",
                                                            style: {
                                                                padding: 0,
                                                                overflow: 'hidden',
                                                                background: 'rgba(255,255,255,0.05)',
                                                                borderRadius: '0.75rem'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                style: {
                                                                    appearance: 'none',
                                                                    background: 'transparent',
                                                                    border: 'none',
                                                                    width: '100%',
                                                                    padding: '1rem',
                                                                    color: 'inherit',
                                                                    fontSize: '0.875rem',
                                                                    fontWeight: 'bold',
                                                                    outline: 'none'
                                                                },
                                                                value: createForm.priority,
                                                                onChange: (e)=>setCreateForm({
                                                                        ...createForm,
                                                                        priority: e.target.value
                                                                    }),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Low",
                                                                        style: {
                                                                            background: 'var(--bg-dark)'
                                                                        },
                                                                        children: "Low"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                        lineNumber: 975,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Medium",
                                                                        style: {
                                                                            background: 'var(--bg-dark)'
                                                                        },
                                                                        children: "Medium"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                        lineNumber: 976,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "High",
                                                                        style: {
                                                                            background: 'var(--bg-dark)'
                                                                        },
                                                                        children: "High"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                        lineNumber: 977,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Urgent",
                                                                        style: {
                                                                            background: 'var(--bg-dark)'
                                                                        },
                                                                        children: "Urgent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                        lineNumber: 978,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                lineNumber: 974,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 973,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 971,
                                                    columnNumber: 37
                                                }, this),
                                                session?.role !== 'agent' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: {
                                                                fontSize: '0.625rem',
                                                                fontWeight: 900,
                                                                textTransform: 'uppercase',
                                                                letterSpacing: '0.1em',
                                                                color: 'var(--text-dim)',
                                                                marginBottom: '0.5rem',
                                                                display: 'block'
                                                            },
                                                            children: "Assign Technician / Agent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 984,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "input-field",
                                                            style: {
                                                                padding: 0,
                                                                overflow: 'hidden',
                                                                background: 'rgba(255,255,255,0.05)',
                                                                borderRadius: '0.75rem'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                style: {
                                                                    appearance: 'none',
                                                                    background: 'transparent',
                                                                    border: 'none',
                                                                    width: '100%',
                                                                    padding: '1rem',
                                                                    color: 'inherit',
                                                                    fontSize: '0.875rem',
                                                                    fontWeight: 'bold',
                                                                    outline: 'none'
                                                                },
                                                                value: createForm.assignedToId,
                                                                onChange: (e)=>setCreateForm({
                                                                        ...createForm,
                                                                        assignedToId: e.target.value
                                                                    }),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        style: {
                                                                            background: 'var(--bg-dark)'
                                                                        },
                                                                        children: "Unassigned"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/tickets/page.js",
                                                                        lineNumber: 987,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    agents.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: a.id,
                                                                            style: {
                                                                                background: 'var(--bg-dark)'
                                                                            },
                                                                            children: a.username
                                                                        }, a.id, false, {
                                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                                            lineNumber: 989,
                                                                            columnNumber: 57
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                lineNumber: 986,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/tickets/page.js",
                                                            lineNumber: 985,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 983,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 970,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: '0.625rem',
                                                        fontWeight: 900,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.1em',
                                                        color: 'var(--text-dim)',
                                                        marginBottom: '0.5rem',
                                                        display: 'block'
                                                    },
                                                    children: "Subject *"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 997,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    className: "input-field",
                                                    style: {
                                                        width: '100%',
                                                        padding: '1rem',
                                                        borderRadius: '0.75rem',
                                                        background: 'rgba(255,255,255,0.05)',
                                                        fontSize: '0.875rem'
                                                    },
                                                    value: createForm.subject,
                                                    onChange: (e)=>setCreateForm({
                                                            ...createForm,
                                                            subject: e.target.value
                                                        }),
                                                    placeholder: "e.g., Screen replacement required"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 998,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 996,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        fontSize: '0.625rem',
                                                        fontWeight: 900,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.1em',
                                                        color: 'var(--text-dim)',
                                                        marginBottom: '0.5rem',
                                                        display: 'block'
                                                    },
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 1001,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    rows: 3,
                                                    className: "input-field",
                                                    style: {
                                                        width: '100%',
                                                        padding: '1rem',
                                                        borderRadius: '0.75rem',
                                                        background: 'rgba(255,255,255,0.05)',
                                                        fontSize: '0.875rem',
                                                        resize: 'none'
                                                    },
                                                    value: createForm.description,
                                                    onChange: (e)=>setCreateForm({
                                                            ...createForm,
                                                            description: e.target.value
                                                        }),
                                                    placeholder: "Provide any additional issue details..."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 1002,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 1000,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '1rem',
                                                marginTop: '0.5rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setIsCreateModalOpen(false),
                                                    style: {
                                                        flex: 1,
                                                        padding: '1rem',
                                                        border: '1px solid rgba(255,255,255,0.1)',
                                                        borderRadius: '0.75rem',
                                                        fontWeight: 900,
                                                        fontSize: '0.875rem',
                                                        background: 'rgba(255,255,255,0.05)',
                                                        color: 'var(--text-dim)',
                                                        cursor: 'pointer'
                                                    },
                                                    onMouseOver: (e)=>e.currentTarget.style.color = '#fff',
                                                    onMouseOut: (e)=>e.currentTarget.style.color = 'var(--text-dim)',
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 1005,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: creatingTicket,
                                                    className: "btn-primary",
                                                    style: {
                                                        flex: 1,
                                                        padding: '1rem',
                                                        borderRadius: '0.75rem',
                                                        fontWeight: 900,
                                                        fontSize: '0.875rem',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        gap: '0.5rem'
                                                    },
                                                    children: creatingTicket ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                size: 18,
                                                                style: {
                                                                    animation: 'spin 1s linear infinite'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/tickets/page.js",
                                                                lineNumber: 1007,
                                                                columnNumber: 61
                                                            }, this),
                                                            " Creating..."
                                                        ]
                                                    }, void 0, true) : 'Create Ticket'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/tickets/page.js",
                                                    lineNumber: 1006,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/tickets/page.js",
                                            lineNumber: 1004,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/tickets/page.js",
                                    lineNumber: 924,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/tickets/page.js",
                            lineNumber: 917,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/tickets/page.js",
                    lineNumber: 915,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/admin/tickets/page.js",
                lineNumber: 913,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @keyframes spin { 100% { transform: rotate(360deg); } }
            `
            }, void 0, false, {
                fileName: "[project]/app/admin/tickets/page.js",
                lineNumber: 1016,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/tickets/page.js",
        lineNumber: 453,
        columnNumber: 9
    }, this);
}
_s(TicketManagement, "+4IS3Ak3aLKs0MNysJJ5erg7nEA=");
_c1 = TicketManagement;
var _c, _c1;
__turbopack_context__.k.register(_c, "Cable");
__turbopack_context__.k.register(_c1, "TicketManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_admin_tickets_page_5f1f1055.js.map