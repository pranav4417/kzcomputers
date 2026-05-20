(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ExportModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExportModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-client] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$braces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileJson$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-braces.js [app-client] (ecmascript) <export default as FileJson>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ticket.js [app-client] (ecmascript) <export default as Ticket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileQuestion$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-question-mark.js [app-client] (ecmascript) <export default as FileQuestion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// Entity icons mapping
const ICON_MAP = {
    Ticket: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"],
    Users: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    FileText: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileQuestion$3e$__["FileQuestion"],
    Package: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
    FileQuestion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileQuestion$3e$__["FileQuestion"],
    UserCheck: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"],
    Wrench: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"]
};
// Default export entities configuration
const DEFAULT_ENTITIES = [
    {
        key: 'tickets',
        label: 'Service Tickets',
        icon: 'Ticket',
        description: 'All service requests and tickets'
    },
    {
        key: 'customers',
        label: 'Customers',
        icon: 'Users',
        description: 'Registered customer accounts'
    },
    {
        key: 'invoices',
        label: 'Invoices',
        icon: 'FileText',
        description: 'Generated invoices and payments'
    },
    {
        key: 'products',
        label: 'Products',
        icon: 'Package',
        description: 'Product catalog'
    },
    {
        key: 'quoteRequests',
        label: 'Quote Requests',
        icon: 'FileQuestion',
        description: 'Product quote requests'
    },
    {
        key: 'agents',
        label: 'Agents/Admins',
        icon: 'UserCheck',
        description: 'System agents and administrators'
    },
    {
        key: 'services',
        label: 'Services',
        icon: 'Wrench',
        description: 'Available service types'
    }
];
// Field configurations per entity
const ENTITY_FIELDS = {
    tickets: [
        {
            key: 'id',
            label: 'ID'
        },
        {
            key: 'ticketNumber',
            label: 'Ticket Number'
        },
        {
            key: 'customerName',
            label: 'Customer Name'
        },
        {
            key: 'email',
            label: 'Email'
        },
        {
            key: 'phone',
            label: 'Phone'
        },
        {
            key: 'serviceType',
            label: 'Service Type'
        },
        {
            key: 'product',
            label: 'Product'
        },
        {
            key: 'priority',
            label: 'Priority'
        },
        {
            key: 'status',
            label: 'Status'
        },
        {
            key: 'subject',
            label: 'Subject'
        },
        {
            key: 'description',
            label: 'Description'
        },
        {
            key: 'assignedTo',
            label: 'Assigned To'
        },
        {
            key: 'comments',
            label: 'Comments'
        },
        {
            key: 'createdAt',
            label: 'Created At'
        },
        {
            key: 'updatedAt',
            label: 'Updated At'
        }
    ],
    customers: [
        {
            key: 'id',
            label: 'ID'
        },
        {
            key: 'name',
            label: 'Name'
        },
        {
            key: 'email',
            label: 'Email'
        },
        {
            key: 'phone',
            label: 'Phone'
        },
        {
            key: 'verified',
            label: 'Verified'
        },
        {
            key: 'createdAt',
            label: 'Created At'
        }
    ],
    invoices: [
        {
            key: 'id',
            label: 'ID'
        },
        {
            key: 'invoiceNumber',
            label: 'Invoice Number'
        },
        {
            key: 'ticketNumber',
            label: 'Ticket Number'
        },
        {
            key: 'amount',
            label: 'Amount'
        },
        {
            key: 'status',
            label: 'Status'
        },
        {
            key: 'generatedBy',
            label: 'Generated By'
        },
        {
            key: 'items',
            label: 'Items'
        },
        {
            key: 'createdAt',
            label: 'Created At'
        },
        {
            key: 'updatedAt',
            label: 'Updated At'
        }
    ],
    products: [
        {
            key: 'id',
            label: 'ID'
        },
        {
            key: 'name',
            label: 'Name'
        },
        {
            key: 'description',
            label: 'Description'
        },
        {
            key: 'price',
            label: 'Price'
        },
        {
            key: 'image',
            label: 'Image URL'
        },
        {
            key: 'createdAt',
            label: 'Created At'
        }
    ],
    quoteRequests: [
        {
            key: 'id',
            label: 'ID'
        },
        {
            key: 'customerName',
            label: 'Customer Name'
        },
        {
            key: 'guestEmail',
            label: 'Guest Email'
        },
        {
            key: 'guestPhone',
            label: 'Guest Phone'
        },
        {
            key: 'productName',
            label: 'Product'
        },
        {
            key: 'message',
            label: 'Message'
        },
        {
            key: 'status',
            label: 'Status'
        },
        {
            key: 'createdAt',
            label: 'Created At'
        }
    ],
    agents: [
        {
            key: 'id',
            label: 'ID'
        },
        {
            key: 'username',
            label: 'Username'
        },
        {
            key: 'email',
            label: 'Email'
        },
        {
            key: 'role',
            label: 'Role'
        },
        {
            key: 'status',
            label: 'Status'
        },
        {
            key: 'createdAt',
            label: 'Created At'
        }
    ],
    services: [
        {
            key: 'id',
            label: 'ID'
        },
        {
            key: 'name',
            label: 'Name'
        },
        {
            key: 'description',
            label: 'Description'
        },
        {
            key: 'image',
            label: 'Image URL'
        },
        {
            key: 'createdAt',
            label: 'Created At'
        }
    ]
};
// Filter configurations per entity
const ENTITY_FILTERS = {
    tickets: [
        {
            key: 'status',
            label: 'Status',
            type: 'select',
            options: [
                'Open',
                'In Progress',
                'Completed',
                'Cancelled'
            ]
        },
        {
            key: 'priority',
            label: 'Priority',
            type: 'select',
            options: [
                'Low',
                'Medium',
                'High',
                'Critical'
            ]
        },
        {
            key: 'serviceType',
            label: 'Service Type',
            type: 'text'
        },
        {
            key: 'datePreset',
            label: 'Date Range',
            type: 'datePreset'
        }
    ],
    customers: [
        {
            key: 'verified',
            label: 'Verified',
            type: 'select',
            options: [
                {
                    value: 'true',
                    label: 'Verified'
                },
                {
                    value: 'false',
                    label: 'Not Verified'
                }
            ]
        },
        {
            key: 'datePreset',
            label: 'Date Range',
            type: 'datePreset'
        }
    ],
    invoices: [
        {
            key: 'status',
            label: 'Status',
            type: 'select',
            options: [
                'Paid',
                'Unpaid',
                'Pending',
                'Cancelled'
            ]
        },
        {
            key: 'minAmount',
            label: 'Min Amount',
            type: 'number'
        },
        {
            key: 'maxAmount',
            label: 'Max Amount',
            type: 'number'
        },
        {
            key: 'datePreset',
            label: 'Date Range',
            type: 'datePreset'
        }
    ],
    products: [
        {
            key: 'minPrice',
            label: 'Min Price',
            type: 'number'
        },
        {
            key: 'maxPrice',
            label: 'Max Price',
            type: 'number'
        }
    ],
    quoteRequests: [
        {
            key: 'status',
            label: 'Status',
            type: 'select',
            options: [
                'Pending',
                'Reviewed',
                'Sent'
            ]
        },
        {
            key: 'datePreset',
            label: 'Date Range',
            type: 'datePreset'
        }
    ],
    agents: [
        {
            key: 'role',
            label: 'Role',
            type: 'select',
            options: [
                'admin',
                'agent',
                'superadmin'
            ]
        },
        {
            key: 'status',
            label: 'Status',
            type: 'select',
            options: [
                'active',
                'pending',
                'suspended'
            ]
        }
    ],
    services: []
};
const DATE_PRESETS = [
    {
        value: '',
        label: 'All Time'
    },
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'yesterday',
        label: 'Yesterday'
    },
    {
        value: 'last7days',
        label: 'Last 7 Days'
    },
    {
        value: 'last30days',
        label: 'Last 30 Days'
    },
    {
        value: 'thisMonth',
        label: 'This Month'
    },
    {
        value: 'lastMonth',
        label: 'Last Month'
    },
    {
        value: 'thisYear',
        label: 'This Year'
    }
];
const EXPORT_FORMATS = [
    {
        key: 'xlsx',
        label: 'Excel (.xlsx)',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"],
        description: 'Best for large datasets'
    },
    {
        key: 'csv',
        label: 'CSV (.csv)',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        description: 'Universal format'
    },
    {
        key: 'json',
        label: 'JSON (.json)',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$braces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileJson$3e$__["FileJson"],
        description: 'Developer friendly'
    }
];
function ExportModal({ isOpen, onClose }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedEntity, setSelectedEntity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedFields, setSelectedFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [expandedFields, setExpandedFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [format, setFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('xlsx');
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [exportProgress, setExportProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showAdvancedFilters, setShowAdvancedFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Reset state when modal opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExportModal.useEffect": ()=>{
            if (isOpen) {
                setStep(1);
                setSelectedEntity(null);
                setSelectedFields([]);
                setExpandedFields({});
                setFilters({});
                setFormat('xlsx');
                setIsExporting(false);
                setExportProgress(0);
                setShowAdvancedFilters(false);
            }
        }
    }["ExportModal.useEffect"], [
        isOpen
    ]);
    // Initialize fields when entity changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExportModal.useEffect": ()=>{
            if (selectedEntity && ENTITY_FIELDS[selectedEntity]) {
                setSelectedFields(ENTITY_FIELDS[selectedEntity].map({
                    "ExportModal.useEffect": (f)=>f.key
                }["ExportModal.useEffect"]));
            }
        }
    }["ExportModal.useEffect"], [
        selectedEntity
    ]);
    const handleFieldToggle = (fieldKey)=>{
        setSelectedFields((prev)=>prev.includes(fieldKey) ? prev.filter((f)=>f !== fieldKey) : [
                ...prev,
                fieldKey
            ]);
    };
    const handleSelectAllFields = ()=>{
        if (selectedEntity && ENTITY_FIELDS[selectedEntity]) {
            setSelectedFields(ENTITY_FIELDS[selectedEntity].map((f)=>f.key));
        }
    };
    const handleDeselectAllFields = ()=>{
        setSelectedFields([]);
    };
    const handleFilterChange = (key, value)=>{
        setFilters((prev)=>({
                ...prev,
                [key]: value
            }));
    };
    const handleExport = async ()=>{
        setIsExporting(true);
        setExportProgress(10);
        try {
            // Prepare export data
            const exportData = {
                entity: selectedEntity,
                fields: selectedFields,
                filters: filters,
                format: format
            };
            setExportProgress(30);
            // Make API call
            const response = await fetch('/api/admin/export', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(exportData)
            });
            setExportProgress(70);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Export failed');
            }
            // Get filename from headers
            const contentDisposition = response.headers.get('Content-Disposition');
            const filenameMatch = contentDisposition?.match(/filename="(.+)"/);
            const defaultFilename = `${selectedEntity}_export_${new Date().toISOString().slice(0, 10)}`;
            const filename = filenameMatch ? filenameMatch[1] : defaultFilename;
            // Convert to blob and download
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            setExportProgress(100);
            // Close modal after short delay
            setTimeout(()=>{
                onClose();
            }, 1000);
        } catch (error) {
            console.error('Export error:', error);
            alert(`Export failed: ${error.message}`);
            setIsExporting(false);
            setExportProgress(0);
        }
    };
    const getIconComponent = (iconName)=>{
        const Icon = ICON_MAP[iconName] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"];
        return Icon;
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/ExportModal.js",
                lineNumber: 283,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-4xl max-h-[90vh] bg-[#0a0a0f] border border-[#2a2a3a] rounded-2xl shadow-2xl overflow-hidden flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-8 py-6 border-b border-[#2a2a3a] bg-gradient-to-r from-[#1a1a2e] to-[#0a0a0f]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-white",
                                        children: "Export Data"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExportModal.js",
                                        lineNumber: 293,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-400 mt-1",
                                        children: [
                                            step === 1 && 'Select data to export',
                                            step === 2 && 'Choose fields to include',
                                            step === 3 && 'Configure filters and export'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ExportModal.js",
                                        lineNumber: 294,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ExportModal.js",
                                lineNumber: 292,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 hover:bg-[#2a2a3a] rounded-lg transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/ExportModal.js",
                                    lineNumber: 304,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ExportModal.js",
                                lineNumber: 300,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ExportModal.js",
                        lineNumber: 291,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-2 py-4 border-b border-[#2a2a3a] bg-[#0f0f1a]",
                        children: [
                            1,
                            2,
                            3
                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `
                w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                ${step >= s ? 'bg-[#6C63FF] text-white' : 'bg-[#2a2a3a] text-gray-500'}
              `,
                                        children: step > s ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ExportModal.js",
                                            lineNumber: 318,
                                            columnNumber: 45
                                        }, this) : s
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExportModal.js",
                                        lineNumber: 312,
                                        columnNumber: 29
                                    }, this),
                                    s < 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-16 h-0.5 mx-2 ${step > s ? 'bg-[#6C63FF]' : 'bg-[#2a2a3a]'}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExportModal.js",
                                        lineNumber: 321,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, s, true, {
                                fileName: "[project]/components/ExportModal.js",
                                lineNumber: 311,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ExportModal.js",
                        lineNumber: 309,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-8",
                        children: [
                            step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                                children: DEFAULT_ENTITIES.map((entity)=>{
                                    const Icon = getIconComponent(entity.icon);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setSelectedEntity(entity.key);
                                            setFilters({});
                                        },
                                        className: `
                      p-6 rounded-xl border-2 text-left transition-all duration-200
                      ${selectedEntity === entity.key ? 'border-[#6C63FF] bg-[#6C63FF]/10 shadow-lg shadow-[#6C63FF]/20' : 'border-[#2a2a3a] hover:border-[#4a4a5a] hover:bg-[#1a1a2e]'}
                    `,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${selectedEntity === entity.key ? 'bg-[#6C63FF]/20 text-[#6C63FF]' : 'bg-[#2a2a3a] text-gray-400'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ExportModal.js",
                                                    lineNumber: 353,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExportModal.js",
                                                lineNumber: 349,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-white mb-1",
                                                children: entity.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExportModal.js",
                                                lineNumber: 355,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500",
                                                children: entity.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExportModal.js",
                                                lineNumber: 356,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, entity.key, true, {
                                        fileName: "[project]/components/ExportModal.js",
                                        lineNumber: 335,
                                        columnNumber: 37
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/ExportModal.js",
                                lineNumber: 331,
                                columnNumber: 25
                            }, this),
                            step === 2 && selectedEntity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-white",
                                                children: [
                                                    "Select Fields for ",
                                                    DEFAULT_ENTITIES.find((e)=>e.key === selectedEntity)?.label
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ExportModal.js",
                                                lineNumber: 367,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleSelectAllFields,
                                                        className: "px-3 py-1.5 text-sm bg-[#2a2a3a] hover:bg-[#3a3a4a] text-gray-300 rounded-lg transition-colors",
                                                        children: "Select All"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ExportModal.js",
                                                        lineNumber: 371,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleDeselectAllFields,
                                                        className: "px-3 py-1.5 text-sm bg-[#2a2a3a] hover:bg-[#3a3a4a] text-gray-300 rounded-lg transition-colors",
                                                        children: "Deselect All"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ExportModal.js",
                                                        lineNumber: 377,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ExportModal.js",
                                                lineNumber: 370,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ExportModal.js",
                                        lineNumber: 366,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[400px] overflow-y-auto pr-2",
                                        children: ENTITY_FIELDS[selectedEntity]?.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: `
                      flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all
                      ${selectedFields.includes(field.key) ? 'border-[#6C63FF] bg-[#6C63FF]/10' : 'border-[#2a2a3a] hover:border-[#4a4a5a]'}
                    `,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `
                      w-5 h-5 rounded border-2 flex items-center justify-center transition-colors
                      ${selectedFields.includes(field.key) ? 'bg-[#6C63FF] border-[#6C63FF]' : 'border-gray-500'}
                    `,
                                                        children: selectedFields.includes(field.key) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-3 h-3 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ExportModal.js",
                                                            lineNumber: 406,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ExportModal.js",
                                                        lineNumber: 398,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: selectedFields.includes(field.key),
                                                        onChange: ()=>handleFieldToggle(field.key),
                                                        className: "hidden"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ExportModal.js",
                                                        lineNumber: 409,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-200",
                                                        children: field.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ExportModal.js",
                                                        lineNumber: 415,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, field.key, true, {
                                                fileName: "[project]/components/ExportModal.js",
                                                lineNumber: 388,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExportModal.js",
                                        lineNumber: 386,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 mt-4",
                                        children: [
                                            selectedFields.length,
                                            " of ",
                                            ENTITY_FIELDS[selectedEntity]?.length || 0,
                                            " fields selected"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ExportModal.js",
                                        lineNumber: 420,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ExportModal.js",
                                lineNumber: 365,
                                columnNumber: 25
                            }, this),
                            step === 3 && selectedEntity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowAdvancedFilters(!showAdvancedFilters),
                                                className: "flex items-center gap-2 text-white font-medium mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ExportModal.js",
                                                        lineNumber: 435,
                                                        columnNumber: 37
                                                    }, this),
                                                    "Advanced Filters",
                                                    showAdvancedFilters ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ExportModal.js",
                                                        lineNumber: 438,
                                                        columnNumber: 41
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ExportModal.js",
                                                        lineNumber: 440,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ExportModal.js",
                                                lineNumber: 431,
                                                columnNumber: 33
                                            }, this),
                                            showAdvancedFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4 p-6 bg-[#1a1a2e] rounded-xl border border-[#2a2a3a]",
                                                children: [
                                                    ENTITY_FILTERS[selectedEntity]?.map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm text-gray-400 mb-2",
                                                                    children: filter.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ExportModal.js",
                                                                    lineNumber: 448,
                                                                    columnNumber: 49
                                                                }, this),
                                                                filter.type === 'select' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: filters[filter.key] || '',
                                                                    onChange: (e)=>handleFilterChange(filter.key, e.target.value),
                                                                    className: "w-full px-4 py-2.5 bg-[#0a0a0f] border border-[#2a2a3a] rounded-lg text-white text-sm focus:border-[#6C63FF] focus:outline-none",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "All"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/ExportModal.js",
                                                                            lineNumber: 455,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        filter.options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: opt.value || opt,
                                                                                children: opt.label || opt
                                                                            }, opt.value || opt, false, {
                                                                                fileName: "[project]/components/ExportModal.js",
                                                                                lineNumber: 457,
                                                                                columnNumber: 61
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/ExportModal.js",
                                                                    lineNumber: 450,
                                                                    columnNumber: 53
                                                                }, this),
                                                                filter.type === 'text' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: filters[filter.key] || '',
                                                                    onChange: (e)=>handleFilterChange(filter.key, e.target.value),
                                                                    placeholder: "Enter value...",
                                                                    className: "w-full px-4 py-2.5 bg-[#0a0a0f] border border-[#2a2a3a] rounded-lg text-white text-sm focus:border-[#6C63FF] focus:outline-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ExportModal.js",
                                                                    lineNumber: 464,
                                                                    columnNumber: 53
                                                                }, this),
                                                                filter.type === 'number' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: filters[filter.key] || '',
                                                                    onChange: (e)=>handleFilterChange(filter.key, e.target.value),
                                                                    placeholder: "Enter value...",
                                                                    className: "w-full px-4 py-2.5 bg-[#0a0a0f] border border-[#2a2a3a] rounded-lg text-white text-sm focus:border-[#6C63FF] focus:outline-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ExportModal.js",
                                                                    lineNumber: 473,
                                                                    columnNumber: 53
                                                                }, this),
                                                                filter.type === 'datePreset' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                            value: filters.datePreset || '',
                                                                            onChange: (e)=>handleFilterChange('datePreset', e.target.value),
                                                                            className: "flex-1 px-4 py-2.5 bg-[#0a0a0f] border border-[#2a2a3a] rounded-lg text-white text-sm focus:border-[#6C63FF] focus:outline-none",
                                                                            children: DATE_PRESETS.map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: preset.value,
                                                                                    children: preset.label
                                                                                }, preset.value, false, {
                                                                                    fileName: "[project]/components/ExportModal.js",
                                                                                    lineNumber: 489,
                                                                                    columnNumber: 65
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/ExportModal.js",
                                                                            lineNumber: 483,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        filters.datePreset === 'custom' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "date",
                                                                                    value: filters.dateFrom || '',
                                                                                    onChange: (e)=>handleFilterChange('dateFrom', e.target.value),
                                                                                    className: "flex-1 px-4 py-2.5 bg-[#0a0a0f] border border-[#2a2a3a] rounded-lg text-white text-sm focus:border-[#6C63FF] focus:outline-none"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/ExportModal.js",
                                                                                    lineNumber: 496,
                                                                                    columnNumber: 65
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "date",
                                                                                    value: filters.dateTo || '',
                                                                                    onChange: (e)=>handleFilterChange('dateTo', e.target.value),
                                                                                    className: "flex-1 px-4 py-2.5 bg-[#0a0a0f] border border-[#2a2a3a] rounded-lg text-white text-sm focus:border-[#6C63FF] focus:outline-none"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/ExportModal.js",
                                                                                    lineNumber: 502,
                                                                                    columnNumber: 65
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/ExportModal.js",
                                                                    lineNumber: 482,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, filter.key, true, {
                                                            fileName: "[project]/components/ExportModal.js",
                                                            lineNumber: 447,
                                                            columnNumber: 45
                                                        }, this)),
                                                    (!ENTITY_FILTERS[selectedEntity] || ENTITY_FILTERS[selectedEntity].length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 col-span-2",
                                                        children: "No filters available for this entity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ExportModal.js",
                                                        lineNumber: 515,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ExportModal.js",
                                                lineNumber: 445,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ExportModal.js",
                                        lineNumber: 430,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-white mb-4",
                                                children: "Export Format"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExportModal.js",
                                                lineNumber: 525,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-3 gap-4",
                                                children: EXPORT_FORMATS.map((fmt)=>{
                                                    const Icon = fmt.icon;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setFormat(fmt.key),
                                                        className: `
                          p-4 rounded-xl border-2 text-left transition-all
                          ${format === fmt.key ? 'border-[#6C63FF] bg-[#6C63FF]/10' : 'border-[#2a2a3a] hover:border-[#4a4a5a]'}
                        `,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                className: `w-8 h-8 mb-3 ${format === fmt.key ? 'text-[#6C63FF]' : 'text-gray-400'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ExportModal.js",
                                                                lineNumber: 541,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-medium text-white",
                                                                children: fmt.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ExportModal.js",
                                                                lineNumber: 542,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500 mt-1",
                                                                children: fmt.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ExportModal.js",
                                                                lineNumber: 543,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, fmt.key, true, {
                                                        fileName: "[project]/components/ExportModal.js",
                                                        lineNumber: 530,
                                                        columnNumber: 45
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExportModal.js",
                                                lineNumber: 526,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ExportModal.js",
                                        lineNumber: 524,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 p-6 bg-[#1a1a2e] rounded-xl border border-[#2a2a3a]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold text-white mb-4",
                                                children: "Export Summary"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExportModal.js",
                                                lineNumber: 552,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-500",
                                                                children: "Entity:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ExportModal.js",
                                                                lineNumber: 555,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white ml-2",
                                                                children: DEFAULT_ENTITIES.find((e)=>e.key === selectedEntity)?.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ExportModal.js",
                                                                lineNumber: 556,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ExportModal.js",
                                                        lineNumber: 554,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-500",
                                                                children: "Fields:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ExportModal.js",
                                                                lineNumber: 561,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white ml-2",
                                                                children: [
                                                                    selectedFields.length,
                                                                    " selected"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/ExportModal.js",
                                                                lineNumber: 562,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ExportModal.js",
                                                        lineNumber: 560,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-500",
                                                                children: "Format:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ExportModal.js",
                                                                lineNumber: 565,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white ml-2 uppercase",
                                                                children: format
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ExportModal.js",
                                                                lineNumber: 566,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ExportModal.js",
                                                        lineNumber: 564,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-500",
                                                                children: "Active Filters:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ExportModal.js",
                                                                lineNumber: 569,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white ml-2",
                                                                children: [
                                                                    Object.values(filters).filter((v)=>v).length,
                                                                    " applied"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/ExportModal.js",
                                                                lineNumber: 570,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ExportModal.js",
                                                        lineNumber: 568,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ExportModal.js",
                                                lineNumber: 553,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ExportModal.js",
                                        lineNumber: 551,
                                        columnNumber: 29
                                    }, this),
                                    isExporting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 p-4 bg-[#1a1a2e] rounded-xl border border-[#6C63FF]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-white",
                                                        children: "Exporting data..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ExportModal.js",
                                                        lineNumber: 581,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-[#6C63FF]",
                                                        children: [
                                                            exportProgress,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ExportModal.js",
                                                        lineNumber: 582,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ExportModal.js",
                                                lineNumber: 580,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-2 bg-[#2a2a3a] rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full bg-[#6C63FF] transition-all duration-300",
                                                    style: {
                                                        width: `${exportProgress}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ExportModal.js",
                                                    lineNumber: 585,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExportModal.js",
                                                lineNumber: 584,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ExportModal.js",
                                        lineNumber: 579,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ExportModal.js",
                                lineNumber: 428,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ExportModal.js",
                        lineNumber: 328,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-8 py-6 border-t border-[#2a2a3a] bg-[#0a0a0f]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>step > 1 ? setStep(step - 1) : onClose(),
                                className: "px-6 py-2.5 text-gray-400 hover:text-white transition-colors",
                                children: step > 1 ? 'Back' : 'Cancel'
                            }, void 0, false, {
                                fileName: "[project]/components/ExportModal.js",
                                lineNumber: 598,
                                columnNumber: 21
                            }, this),
                            step < 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setStep(step + 1),
                                disabled: step === 1 && !selectedEntity,
                                className: `
                px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-all
                ${step === 1 && !selectedEntity ? 'bg-[#2a2a3a] text-gray-500 cursor-not-allowed' : 'bg-[#6C63FF] hover:bg-[#5a52e0] text-white'}
              `,
                                children: [
                                    "Continue",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExportModal.js",
                                        lineNumber: 618,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ExportModal.js",
                                lineNumber: 606,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleExport,
                                disabled: isExporting || selectedFields.length === 0,
                                className: `
                px-8 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-all
                ${isExporting || selectedFields.length === 0 ? 'bg-[#2a2a3a] text-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-[#6C63FF] to-[#8b7cff] hover:from-[#5a52e0] hover:to-[#7a6ce0] text-white shadow-lg shadow-[#6C63FF]/30'}
              `,
                                children: isExporting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: "Processing..."
                                }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ExportModal.js",
                                            lineNumber: 636,
                                            columnNumber: 37
                                        }, this),
                                        "Export Data"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/components/ExportModal.js",
                                lineNumber: 621,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ExportModal.js",
                        lineNumber: 597,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ExportModal.js",
                lineNumber: 289,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ExportModal.js",
        lineNumber: 281,
        columnNumber: 9
    }, this);
}
_s(ExportModal, "C8XHu1xvDTEBJY4qktRlhiyfzOA=");
_c = ExportModal;
var _c;
__turbopack_context__.k.register(_c, "ExportModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AdminOverviewClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminOverviewClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ticket.js [app-client] (ecmascript) <export default as Ticket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ExportModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ExportModal.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function AdminOverviewClient({ stats, recentTickets }) {
    _s();
    const [showExportModal, setShowExportModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const isAgent = stats.role === 'agent';
    const cards = isAgent ? [
        {
            name: 'Assigned Tickets',
            value: stats.totalTickets,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"],
            color: 'var(--primary)'
        },
        {
            name: 'Active Repairs',
            value: stats.openTickets,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
            color: '#ffc107'
        },
        {
            name: 'Completed Tasks',
            value: stats.completedTickets,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
            color: '#28a745'
        },
        {
            name: 'Urgent Tickets',
            value: stats.otherStat,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"],
            color: 'var(--secondary)'
        }
    ] : [
        {
            name: 'Total Tickets',
            value: stats.totalTickets,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"],
            color: 'var(--primary)'
        },
        {
            name: 'Open Queries',
            value: stats.openTickets,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
            color: '#ffc107'
        },
        {
            name: 'Fixed Today',
            value: stats.completedTickets,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
            color: '#28a745'
        },
        {
            name: 'Products Live',
            value: stats.otherStat,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"],
            color: 'var(--secondary)'
        }
    ];
    // Use real service distribution data from stats
    const serviceStats = stats.serviceStats || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2.5rem'
                },
                className: "jsx-731b696a8b0c5635" + " " + "animate-fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start'
                        },
                        className: "jsx-731b696a8b0c5635",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-731b696a8b0c5635",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            margin: 0,
                                            fontWeight: 900
                                        },
                                        className: "jsx-731b696a8b0c5635" + " " + "title-lg mb-2",
                                        children: [
                                            isAgent ? 'Workbench' : 'Systems',
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-731b696a8b0c5635" + " " + "gradient-text",
                                                children: "Overview"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AdminOverviewClient.js",
                                                lineNumber: 38,
                                                columnNumber: 65
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AdminOverviewClient.js",
                                        lineNumber: 37,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '0.875rem'
                                        },
                                        className: "jsx-731b696a8b0c5635" + " " + "text-dim mt-4",
                                        children: isAgent ? `Hello ${stats.username}, here is your current technical queue.` : 'Real-time performance metrics and system-wide activities.'
                                    }, void 0, false, {
                                        fileName: "[project]/components/AdminOverviewClient.js",
                                        lineNumber: 40,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AdminOverviewClient.js",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowExportModal(true),
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1.25rem',
                                    background: 'linear-gradient(135deg, #6C63FF 0%, #8b7cff 100%)',
                                    border: 'none',
                                    borderRadius: '0.75rem',
                                    color: 'white',
                                    fontWeight: '600',
                                    fontSize: '0.875rem',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 15px rgba(108, 99, 255, 0.3)',
                                    transition: 'all 0.2s ease'
                                },
                                className: "jsx-731b696a8b0c5635" + " " + "export-btn",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/components/AdminOverviewClient.js",
                                        lineNumber: 64,
                                        columnNumber: 25
                                    }, this),
                                    "Export Data"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AdminOverviewClient.js",
                                lineNumber: 45,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AdminOverviewClient.js",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-731b696a8b0c5635" + " " + "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: cards.map((card, idx)=>{
                            let href = '/admin/tickets';
                            if (card.name === 'Total Tickets' || card.name === 'Assigned Tickets') {
                                href = '/admin/tickets';
                            } else if (card.name === 'Open Queries' || card.name === 'Active Repairs') {
                                href = '/admin/tickets?status=Open';
                            } else if (card.name === 'Fixed Today' || card.name === 'Completed Tasks') {
                                href = '/admin/tickets?status=Completed';
                            } else if (card.name === 'Urgent Tickets') {
                                href = '/admin/tickets?priority=High';
                            } else if (card.name === 'Products Live') {
                                href = '/admin/products';
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: href,
                                className: "block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-731b696a8b0c5635" + " " + `glass glass-hover p-8 relative overflow-hidden delay-${idx % 4}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-731b696a8b0c5635" + " " + "flex justify-between items-start mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: '0.75rem',
                                                        borderRadius: '0.75rem',
                                                        background: 'rgba(255,255,255,0.05)',
                                                        color: card.color
                                                    },
                                                    className: "jsx-731b696a8b0c5635",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(card.icon, {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AdminOverviewClient.js",
                                                        lineNumber: 90,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminOverviewClient.js",
                                                    lineNumber: 89,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                    size: 16,
                                                    className: "text-dim"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminOverviewClient.js",
                                                    lineNumber: 92,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AdminOverviewClient.js",
                                            lineNumber: 88,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-731b696a8b0c5635" + " " + "title-lg m-0",
                                            children: card.value
                                        }, void 0, false, {
                                            fileName: "[project]/components/AdminOverviewClient.js",
                                            lineNumber: 94,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '0.65rem',
                                                textTransform: 'uppercase',
                                                fontWeight: 'bold',
                                                letterSpacing: '0.1em',
                                                marginTop: '0.25rem'
                                            },
                                            className: "jsx-731b696a8b0c5635" + " " + "text-dim",
                                            children: card.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/AdminOverviewClient.js",
                                            lineNumber: 95,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, card.name, true, {
                                    fileName: "[project]/components/AdminOverviewClient.js",
                                    lineNumber: 87,
                                    columnNumber: 33
                                }, this)
                            }, card.name, false, {
                                fileName: "[project]/components/AdminOverviewClient.js",
                                lineNumber: 86,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/AdminOverviewClient.js",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem'
                        },
                        className: "jsx-731b696a8b0c5635",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    gridColumn: '1 / -1',
                                    overflow: 'hidden'
                                },
                                className: "jsx-731b696a8b0c5635" + " " + "glass flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            borderBottom: '1px solid var(--border-glass)'
                                        },
                                        className: "jsx-731b696a8b0c5635" + " " + "p-6 flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontWeight: 'bold',
                                                    margin: 0
                                                },
                                                className: "jsx-731b696a8b0c5635",
                                                children: "Recent Service Requests"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AdminOverviewClient.js",
                                                lineNumber: 107,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>router.push('/admin/tickets'),
                                                style: {
                                                    background: 'none',
                                                    border: 'none',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.25rem',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 'bold',
                                                    color: 'var(--primary)',
                                                    cursor: 'pointer'
                                                },
                                                className: "jsx-731b696a8b0c5635" + " " + "hover-primary",
                                                children: [
                                                    "VIEW ALL ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AdminOverviewClient.js",
                                                        lineNumber: 113,
                                                        columnNumber: 42
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AdminOverviewClient.js",
                                                lineNumber: 108,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AdminOverviewClient.js",
                                        lineNumber: 106,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-731b696a8b0c5635" + " " + "table-wrapper m-0 pb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "jsx-731b696a8b0c5635" + " " + "data-table",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "jsx-731b696a8b0c5635",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            background: 'rgba(255,255,255,0.02)'
                                                        },
                                                        className: "jsx-731b696a8b0c5635",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-731b696a8b0c5635",
                                                                children: "Ticket"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/AdminOverviewClient.js",
                                                                lineNumber: 120,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-731b696a8b0c5635",
                                                                children: "Customer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/AdminOverviewClient.js",
                                                                lineNumber: 121,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-731b696a8b0c5635",
                                                                children: "Service"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/AdminOverviewClient.js",
                                                                lineNumber: 122,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-731b696a8b0c5635",
                                                                children: "Priority"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/AdminOverviewClient.js",
                                                                lineNumber: 123,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "jsx-731b696a8b0c5635",
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/AdminOverviewClient.js",
                                                                lineNumber: 124,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/AdminOverviewClient.js",
                                                        lineNumber: 119,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminOverviewClient.js",
                                                    lineNumber: 118,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "jsx-731b696a8b0c5635",
                                                    children: recentTickets.map((ticket)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "jsx-731b696a8b0c5635",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        fontWeight: 'bold',
                                                                        fontSize: '0.875rem',
                                                                        color: 'var(--primary)',
                                                                        fontFamily: 'monospace',
                                                                        letterSpacing: '0.05em',
                                                                        background: 'rgba(99, 102, 241, 0.1)',
                                                                        padding: '0.25rem 0.5rem',
                                                                        borderRadius: '0.375rem',
                                                                        display: 'inline-block'
                                                                    },
                                                                    className: "jsx-731b696a8b0c5635",
                                                                    children: [
                                                                        "#",
                                                                        ticket.ticketNumber
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/AdminOverviewClient.js",
                                                                    lineNumber: 130,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-731b696a8b0c5635",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: '0.875rem',
                                                                                fontWeight: 600
                                                                            },
                                                                            className: "jsx-731b696a8b0c5635",
                                                                            children: ticket.customerName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/AdminOverviewClient.js",
                                                                            lineNumber: 132,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: '0.65rem',
                                                                                textTransform: 'uppercase'
                                                                            },
                                                                            className: "jsx-731b696a8b0c5635" + " " + "text-dim",
                                                                            children: ticket.email
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/AdminOverviewClient.js",
                                                                            lineNumber: 133,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/AdminOverviewClient.js",
                                                                    lineNumber: 131,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        fontSize: '0.875rem',
                                                                        fontWeight: 600
                                                                    },
                                                                    className: "jsx-731b696a8b0c5635",
                                                                    children: ticket.serviceType
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/AdminOverviewClient.js",
                                                                    lineNumber: 135,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "jsx-731b696a8b0c5635",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: '0.65rem',
                                                                            fontWeight: 'black',
                                                                            padding: '0.25rem 0.5rem',
                                                                            borderRadius: '0.25rem',
                                                                            border: '1px solid',
                                                                            color: ticket.priority === 'High' ? 'var(--secondary)' : 'var(--text-dim)',
                                                                            borderColor: ticket.priority === 'High' ? 'rgba(255, 101, 132, 0.2)' : 'rgba(255,255,255,0.1)',
                                                                            background: ticket.priority === 'High' ? 'rgba(255, 101, 132, 0.1)' : 'transparent'
                                                                        },
                                                                        className: "jsx-731b696a8b0c5635",
                                                                        children: ticket.priority.toUpperCase()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/AdminOverviewClient.js",
                                                                        lineNumber: 137,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/AdminOverviewClient.js",
                                                                    lineNumber: 136,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        fontSize: '0.875rem',
                                                                        fontWeight: 'bold',
                                                                        color: '#ffc107'
                                                                    },
                                                                    className: "jsx-731b696a8b0c5635",
                                                                    children: ticket.status
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/AdminOverviewClient.js",
                                                                    lineNumber: 141,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, ticket.id, true, {
                                                            fileName: "[project]/components/AdminOverviewClient.js",
                                                            lineNumber: 129,
                                                            columnNumber: 41
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AdminOverviewClient.js",
                                                    lineNumber: 127,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AdminOverviewClient.js",
                                            lineNumber: 117,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/AdminOverviewClient.js",
                                        lineNumber: 116,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AdminOverviewClient.js",
                                lineNumber: 105,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    gridColumn: '1 / -1'
                                },
                                className: "jsx-731b696a8b0c5635" + " " + "glass p-8 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontWeight: 'bold',
                                            marginBottom: '1.5rem',
                                            marginTop: 0
                                        },
                                        className: "jsx-731b696a8b0c5635",
                                        children: "Service Distribution"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AdminOverviewClient.js",
                                        lineNumber: 151,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                            gap: '2rem'
                                        },
                                        className: "jsx-731b696a8b0c5635",
                                        children: serviceStats.slice(0, 3).map((service, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-731b696a8b0c5635" + " " + "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.75rem',
                                                            fontWeight: 'bold',
                                                            textTransform: 'uppercase'
                                                        },
                                                        className: "jsx-731b696a8b0c5635" + " " + "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-731b696a8b0c5635",
                                                                children: service.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/AdminOverviewClient.js",
                                                                lineNumber: 156,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-731b696a8b0c5635",
                                                                children: [
                                                                    service.percentage,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/AdminOverviewClient.js",
                                                                lineNumber: 157,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/AdminOverviewClient.js",
                                                        lineNumber: 155,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '100%',
                                                            height: '0.5rem',
                                                            background: 'rgba(255,255,255,0.05)',
                                                            borderRadius: '1rem',
                                                            overflow: 'hidden'
                                                        },
                                                        className: "jsx-731b696a8b0c5635",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                height: '100%',
                                                                background: idx === 0 ? 'var(--primary)' : idx === 1 ? 'var(--secondary)' : '#ffc107',
                                                                width: `${service.percentage}%`
                                                            },
                                                            className: "jsx-731b696a8b0c5635"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AdminOverviewClient.js",
                                                            lineNumber: 160,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AdminOverviewClient.js",
                                                        lineNumber: 159,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, service.name || idx, true, {
                                                fileName: "[project]/components/AdminOverviewClient.js",
                                                lineNumber: 154,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/AdminOverviewClient.js",
                                        lineNumber: 152,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '2rem',
                                            padding: '1.5rem',
                                            background: 'rgba(108, 99, 255, 0.1)',
                                            borderRadius: '1rem',
                                            border: '1px solid rgba(108, 99, 255, 0.2)',
                                            textAlign: 'center'
                                        },
                                        className: "jsx-731b696a8b0c5635",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                size: 40,
                                                className: "text-primary mx-auto mb-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AdminOverviewClient.js",
                                                lineNumber: 167,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    fontWeight: 'bold',
                                                    fontSize: '0.875rem',
                                                    marginBottom: '0.5rem'
                                                },
                                                className: "jsx-731b696a8b0c5635",
                                                children: "Technician Alert"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AdminOverviewClient.js",
                                                lineNumber: 168,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '0.65rem',
                                                    lineHeight: 1.6
                                                },
                                                className: "jsx-731b696a8b0c5635" + " " + "text-dim",
                                                children: [
                                                    "There are ",
                                                    stats.openTickets,
                                                    " tickets awaiting response for more than 24 hours."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AdminOverviewClient.js",
                                                lineNumber: 169,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AdminOverviewClient.js",
                                        lineNumber: 166,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AdminOverviewClient.js",
                                lineNumber: 150,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AdminOverviewClient.js",
                        lineNumber: 103,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AdminOverviewClient.js",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ExportModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showExportModal,
                onClose: ()=>setShowExportModal(false)
            }, void 0, false, {
                fileName: "[project]/components/AdminOverviewClient.js",
                lineNumber: 178,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "731b696a8b0c5635",
                children: ".export-btn:hover{transform:translateY(-2px);box-shadow:0 6px 20px #6c63ff66!important}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_s(AdminOverviewClient, "rzDGecBblRPa6fqdktRBpWEGpf0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminOverviewClient;
var _c;
__turbopack_context__.k.register(_c, "AdminOverviewClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_45772689._.js.map