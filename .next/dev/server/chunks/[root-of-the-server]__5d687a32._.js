module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/prisma.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
    log: ("TURBOPACK compile-time truthy", 1) ? [
        'error'
    ] : "TURBOPACK unreachable"
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
const __TURBOPACK__default__export__ = prisma;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/worker_threads [external] (worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("worker_threads", () => require("worker_threads"));

module.exports = mod;
}),
"[project]/lib/pdfGenerator.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "generateInvoicePDF",
    ()=>generateInvoicePDF,
    "generateInvoicePDFBuffer",
    ()=>generateInvoicePDFBuffer,
    "generateQuotePDFBuffer",
    ()=>generateQuotePDFBuffer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.node.min.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
;
// Company Information
const COMPANY_INFO = {
    name: 'Suraksha Group of Computers',
    address: 'Bangalore 560064',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560064',
    phone: '8884358801',
    email: 'Surakshagroupofcomputers@gmail.com',
    upi: '8884358801@okbizaxis',
    gstin: '29ABDCS1234P1ZQ'
};
function getQRCodeBase64() {
    try {
        const qrPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'qr', 'upi qr.jpg');
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(qrPath)) {
            const qrBuffer = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(qrPath);
            return qrBuffer.toString('base64');
        }
    } catch (e) {
        console.log('QR code not found');
    }
    return null;
}
function getLogoBase64() {
    try {
        // Try to find logo in multiple locations
        const possiblePaths = [
            __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'logo', 'logo horizontal.png'),
            __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), '..', 'suraksha-next', 'public', 'logo', 'logo horizontal.png'),
            __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), '..', '..', 'suraksha-next', 'public', 'logo', 'logo horizontal.png')
        ];
        for (const logoPath of possiblePaths){
            if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(logoPath)) {
                const logoBuffer = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(logoPath);
                return logoBuffer.toString('base64');
            }
        }
    } catch (e) {
        console.log('Logo not found, using text instead');
    }
    return null;
}
async function generateInvoicePDF(invoice, ticket, items, excludingGst = false) {
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsPDF"]();
    const pageWidth = doc.internal.pageSize.getWidth();
    // Colors
    const primaryColor = [
        108,
        99,
        255
    ]; // #6C63FF
    const textColor = [
        51,
        51,
        51
    ];
    const lightGray = [
        240,
        240,
        240
    ];
    // Get logo if available
    const logoBase64 = getLogoBase64();
    // Header - Logo and Company Name
    if (logoBase64) {
        doc.addImage(logoBase64, 'PNG', 15, 10, 60, 20);
    } else {
        doc.setFontSize(20);
        doc.setTextColor(...primaryColor);
        doc.setFont('helvetica', 'bold');
        doc.text('SURAKSHA', 15, 20);
    }
    // Company Info (right side)
    doc.setFontSize(9);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    const companyRightX = pageWidth - 65;
    doc.text(COMPANY_INFO.name, companyRightX, 15);
    doc.setFontSize(8);
    doc.text(COMPANY_INFO.address, companyRightX, 20);
    doc.text(`Ph: ${COMPANY_INFO.phone}`, companyRightX, 32);
    doc.text(COMPANY_INFO.email, companyRightX, 37);
    // Horizontal line after header
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(0.5);
    doc.line(15, 40, pageWidth - 15, 40);
    // Invoice Title
    doc.setFontSize(18);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('ESTIMATE', pageWidth / 2, 50, {
        align: 'center'
    });
    // Invoice Details Box
    const boxY = 58;
    doc.setFillColor(...lightGray);
    doc.roundedRect(15, boxY, pageWidth - 30, 35, 3, 3, 'F');
    doc.setFontSize(10);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'bold');
    // Left column - Invoice info
    doc.text('Estimate No.:', 20, boxY + 10);
    doc.text('Date:', 20, boxY + 18);
    doc.text('Place of Supply:', 20, boxY + 26);
    doc.setFont('helvetica', 'normal');
    const invoiceDate = new Date().toLocaleDateString('en-GB');
    doc.text(invoice.invoiceNumber || `INV-${Date.now()}`, 50, boxY + 10);
    doc.text(invoiceDate, 50, boxY + 18);
    doc.text('29-Karnataka', 50, boxY + 26);
    // Right column - Customer info
    doc.setFont('helvetica', 'bold');
    doc.text('Estimate For:', pageWidth / 2 + 10, boxY + 10);
    doc.text('Contact:', pageWidth / 2 + 10, boxY + 18);
    doc.text('State:', pageWidth / 2 + 10, boxY + 26);
    doc.setFont('helvetica', 'normal');
    doc.text(ticket?.customerName || 'N/A', pageWidth / 2 + 40, boxY + 10);
    doc.text(ticket?.phone || 'N/A', pageWidth / 2 + 40, boxY + 18);
    doc.text('29-Karnataka', pageWidth / 2 + 40, boxY + 26);
    // Items Table
    const tableData = items.map((item, index)=>{
        const mrp = parseFloat(item.mrp || 0);
        const sellingPrice = parseFloat(item.price || 0);
        const qty = parseInt(item.qty || 1);
        const amount = sellingPrice * qty;
        return [
            index + 1,
            item.desc,
            qty,
            item.unit || 'NOS',
            mrp > 0 ? `Rs. ${mrp.toFixed(2)}` : '-',
            `Rs. ${sellingPrice.toFixed(2)}`,
            `Rs. ${amount.toFixed(2)}`
        ];
    });
    // Calculate total (based on selling price)
    const total = items.reduce((sum, item)=>sum + parseFloat(item.price || 0) * (item.qty || 1), 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(doc, {
        startY: 105,
        head: [
            [
                'S.No',
                'Description',
                'Qty',
                'Unit',
                'MRP',
                'Selling Price',
                'Amount'
            ]
        ],
        body: tableData,
        theme: 'striped',
        headStyles: {
            fillColor: primaryColor,
            textColor: [
                255,
                255,
                255
            ],
            fontStyle: 'bold',
            fontSize: 9,
            halign: 'center'
        },
        bodyStyles: {
            fontSize: 9,
            textColor: textColor,
            valign: 'middle'
        },
        columnStyles: {
            0: {
                cellWidth: 10,
                halign: 'center'
            },
            1: {
                cellWidth: 'auto',
                halign: 'left'
            },
            2: {
                cellWidth: 14,
                halign: 'center'
            },
            3: {
                cellWidth: 14,
                halign: 'center'
            },
            4: {
                cellWidth: 24,
                halign: 'right'
            },
            5: {
                cellWidth: 28,
                halign: 'right'
            },
            6: {
                cellWidth: 28,
                halign: 'right'
            }
        },
        margin: {
            left: 15,
            right: 15
        },
        didParseCell: function(data) {
            if (data.column.index === 4 && data.section === 'body' && data.cell.raw && data.cell.raw !== '-') {
                const mrpValue = parseFloat(data.cell.raw.replace('Rs. ', ''));
                if (mrpValue > 0) {
                    const cellPos = data.cell;
                    const textWidth = doc.getTextWidth(data.cell.raw);
                    const cellX = cellPos.x + cellPos.width - textWidth - 2;
                    const cellY = cellPos.y + cellPos.height / 2;
                    doc.setDrawColor(180, 50, 50);
                    doc.setLineWidth(0.5);
                    doc.line(cellX, cellY, cellX + textWidth + 2, cellY);
                }
            }
        }
    });
    // Get final Y position after table
    const finalY = doc.lastAutoTable.finalY + 10;
    // Total Section
    doc.setFillColor(...lightGray);
    doc.roundedRect(pageWidth - 90, finalY, 75, 12, 2, 2, 'F');
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Total:', pageWidth - 85, finalY + 8);
    doc.setTextColor(...primaryColor);
    doc.text(`Rs. ${total.toFixed(2)}`, pageWidth - 20, finalY + 8, {
        align: 'right'
    });
    // Excluding GST text
    if (excludingGst) {
        doc.setFontSize(9);
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(200, 0, 0);
        doc.text('(Excluding GST)', pageWidth - 85, finalY + 18);
    }
    // Amount in Words - Place below total to avoid overlap
    const wordsY = finalY + 20;
    doc.setTextColor(...textColor);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(`Amount In Words:`, 15, wordsY);
    doc.setFont('helvetica', 'bold');
    const amountInWords = numberToWords(Math.round(total));
    doc.text(`${amountInWords} Rupees only`, 15, wordsY + 5);
    // Bank Details Section
    const bankY = wordsY + 15;
    doc.setFillColor(...lightGray);
    doc.roundedRect(15, bankY, pageWidth - 30, 20, 3, 3, 'F');
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryColor);
    doc.text('UPI Payment:', 20, bankY + 8);
    doc.setFontSize(9);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    doc.text(`UPI: ${COMPANY_INFO.upi}`, 20, bankY + 15);
    // Terms and Conditions
    const termsY = bankY + 35;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryColor);
    doc.text('Terms And Conditions', 15, termsY);
    doc.setFontSize(8);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    const terms = [
        'Thanks for doing business with us!',
        '1. Items Once supplied cannot be taken back or exchanged',
        '2. Warranty based on Manufacturer\'s terms and conditions.',
        '3. No warranty for Burns or Physical damages',
        '4. Above mentioned values are valid for 15 days from the date of quotation',
        '5. 75% of advance payment has to be done before the contract',
        '6. Customer would be responsible for any damages caused to items due to fire, theft, floods or any other unforeseen reason'
    ];
    terms.forEach((term, index)=>{
        doc.text(term, 15, termsY + 8 + index * 5);
    });
    // Footer - Authorized Signatory
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(0.3);
    doc.line(15, 265, pageWidth - 15, 265);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('For, Suraksha Group of Computers', pageWidth - 15, 275, {
        align: 'right'
    });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('Authorized Signatory', pageWidth - 15, 282, {
        align: 'right'
    });
    // QR Code Section
    const qrBase64 = getQRCodeBase64();
    if (qrBase64) {
        doc.addPage();
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...primaryColor);
        doc.text('Scan to Pay', pageWidth / 2, 30, {
            align: 'center'
        });
        // QR code original size: 848x1205 pixels, aspect ratio 1:1.42
        const qrWidth = 80;
        const qrHeight = qrWidth * (1205 / 848);
        const qrX = (pageWidth - qrWidth) / 2;
        doc.addImage(qrBase64, 'JPG', qrX, 40, qrWidth, qrHeight);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...textColor);
        doc.text('UPI: ' + COMPANY_INFO.upi, pageWidth / 2, 40 + qrHeight + 15, {
            align: 'center'
        });
    }
    // Save the PDF
    return doc;
}
function generateInvoicePDFBuffer(invoice, ticket, items, excludingGst = false) {
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsPDF"]();
    const pageWidth = doc.internal.pageSize.getWidth();
    // Colors
    const primaryColor = [
        108,
        99,
        255
    ];
    const textColor = [
        51,
        51,
        51
    ];
    const lightGray = [
        240,
        240,
        240
    ];
    // Get logo if available
    const logoBase64 = getLogoBase64();
    // Header - Logo and Company Name
    if (logoBase64) {
        doc.addImage(logoBase64, 'PNG', 15, 10, 60, 20);
    } else {
        doc.setFontSize(20);
        doc.setTextColor(...primaryColor);
        doc.setFont('helvetica', 'bold');
        doc.text('SURAKSHA', 15, 20);
    }
    // Company Info (right side)
    doc.setFontSize(9);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    const companyRightX = pageWidth - 65;
    doc.text(COMPANY_INFO.name, companyRightX, 15);
    doc.setFontSize(8);
    doc.text(COMPANY_INFO.address, companyRightX, 20);
    doc.text(`Ph: ${COMPANY_INFO.phone}`, companyRightX, 32);
    doc.text(COMPANY_INFO.email, companyRightX, 37);
    // Horizontal line after header
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(0.5);
    doc.line(15, 40, pageWidth - 15, 40);
    // Invoice Title
    doc.setFontSize(18);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('ESTIMATE', pageWidth / 2, 50, {
        align: 'center'
    });
    // Invoice Details Box
    const boxY = 58;
    doc.setFillColor(...lightGray);
    doc.roundedRect(15, boxY, pageWidth - 30, 35, 3, 3, 'F');
    doc.setFontSize(10);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'bold');
    // Left column - Invoice info
    doc.text('Estimate No.:', 20, boxY + 10);
    doc.text('Date:', 20, boxY + 18);
    doc.text('Place of Supply:', 20, boxY + 26);
    doc.setFont('helvetica', 'normal');
    const invoiceDate = new Date().toLocaleDateString('en-GB');
    doc.text(invoice.invoiceNumber || `INV-${Date.now()}`, 50, boxY + 10);
    doc.text(invoiceDate, 50, boxY + 18);
    doc.text('29-Karnataka', 50, boxY + 26);
    // Right column - Customer info
    doc.setFont('helvetica', 'bold');
    doc.text('Estimate For:', pageWidth / 2 + 10, boxY + 10);
    doc.text('Contact:', pageWidth / 2 + 10, boxY + 18);
    doc.text('State:', pageWidth / 2 + 10, boxY + 26);
    doc.setFont('helvetica', 'normal');
    doc.text(ticket?.customerName || 'N/A', pageWidth / 2 + 40, boxY + 10);
    doc.text(ticket?.phone || 'N/A', pageWidth / 2 + 40, boxY + 18);
    doc.text('29-Karnataka', pageWidth / 2 + 40, boxY + 26);
    // Items Table
    const tableData = items.map((item, index)=>{
        const mrp = parseFloat(item.mrp || 0);
        const sellingPrice = parseFloat(item.price || 0);
        const qty = parseInt(item.qty || 1);
        const amount = sellingPrice * qty;
        return [
            index + 1,
            item.desc,
            qty,
            item.unit || 'NOS',
            mrp > 0 ? `Rs. ${mrp.toFixed(2)}` : '-',
            `Rs. ${sellingPrice.toFixed(2)}`,
            `Rs. ${amount.toFixed(2)}`
        ];
    });
    const total = items.reduce((sum, item)=>sum + parseFloat(item.price || 0) * (item.qty || 1), 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(doc, {
        startY: 105,
        head: [
            [
                'S.No',
                'Description',
                'Qty',
                'Unit',
                'MRP',
                'Selling Price',
                'Amount'
            ]
        ],
        body: tableData,
        theme: 'striped',
        headStyles: {
            fillColor: primaryColor,
            textColor: [
                255,
                255,
                255
            ],
            fontStyle: 'bold',
            fontSize: 9,
            halign: 'center'
        },
        bodyStyles: {
            fontSize: 9,
            textColor: textColor,
            valign: 'middle'
        },
        columnStyles: {
            0: {
                cellWidth: 10,
                halign: 'center'
            },
            1: {
                cellWidth: 'auto',
                halign: 'left'
            },
            2: {
                cellWidth: 14,
                halign: 'center'
            },
            3: {
                cellWidth: 14,
                halign: 'center'
            },
            4: {
                cellWidth: 24,
                halign: 'right'
            },
            5: {
                cellWidth: 28,
                halign: 'right'
            },
            6: {
                cellWidth: 28,
                halign: 'right'
            }
        },
        margin: {
            left: 15,
            right: 15
        },
        didParseCell: function(data) {
            if (data.column.index === 4 && data.section === 'body' && data.cell.raw && data.cell.raw !== '-') {
                const mrpValue = parseFloat(data.cell.raw.replace('Rs. ', ''));
                if (mrpValue > 0) {
                    const cellPos = data.cell;
                    const textWidth = doc.getTextWidth(data.cell.raw);
                    const cellX = cellPos.x + cellPos.width - textWidth - 2;
                    const cellY = cellPos.y + cellPos.height / 2;
                    doc.setDrawColor(180, 50, 50);
                    doc.setLineWidth(0.5);
                    doc.line(cellX, cellY, cellX + textWidth + 2, cellY);
                }
            }
        }
    });
    const finalY = doc.lastAutoTable.finalY + 10;
    // Total Section
    doc.setFillColor(...lightGray);
    doc.roundedRect(pageWidth - 90, finalY, 75, 12, 2, 2, 'F');
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Total:', pageWidth - 85, finalY + 8);
    doc.setTextColor(...primaryColor);
    doc.text(`Rs. ${total.toFixed(2)}`, pageWidth - 20, finalY + 8, {
        align: 'right'
    });
    // Excluding GST text
    if (excludingGst) {
        doc.setFontSize(9);
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(200, 0, 0);
        doc.text('(Excluding GST)', pageWidth - 85, finalY + 18);
    }
    // Amount in Words - Place below total to avoid overlap
    const wordsY = finalY + 20;
    doc.setTextColor(...textColor);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(`Amount In Words:`, 15, wordsY);
    doc.setFont('helvetica', 'bold');
    const amountInWords = numberToWords(Math.round(total));
    doc.text(`${amountInWords} Rupees only`, 15, wordsY + 5);
    // Bank Details Section
    const bankY = wordsY + 15;
    doc.setFillColor(...lightGray);
    doc.roundedRect(15, bankY, pageWidth - 30, 20, 3, 3, 'F');
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryColor);
    doc.text('UPI Payment:', 20, bankY + 8);
    doc.setFontSize(9);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    doc.text(`UPI: ${COMPANY_INFO.upi}`, 20, bankY + 15);
    // Terms and Conditions
    const termsY = bankY + 35;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryColor);
    doc.text('Terms And Conditions', 15, termsY);
    doc.setFontSize(8);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    const terms = [
        'Thanks for doing business with us!',
        '1. Items Once supplied cannot be taken back or exchanged',
        '2. Warranty based on Manufacturer\'s terms and conditions.',
        '3. No warranty for Burns or Physical damages',
        '4. Above mentioned values are valid for 15 days from the date of quotation',
        '5. 75% of advance payment has to be done before the contract',
        '6. Customer would be responsible for any damages caused to items due to fire, theft, floods or any other unforeseen reason'
    ];
    terms.forEach((term, index)=>{
        doc.text(term, 15, termsY + 8 + index * 5);
    });
    // Footer
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(0.3);
    doc.line(15, 265, pageWidth - 15, 265);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('For, Suraksha Group of Computers', pageWidth - 15, 275, {
        align: 'right'
    });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('Authorized Signatory', pageWidth - 15, 282, {
        align: 'right'
    });
    // QR Code Section
    const qrBase64 = getQRCodeBase64();
    if (qrBase64) {
        doc.addPage();
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...primaryColor);
        doc.text('Scan to Pay', pageWidth / 2, 30, {
            align: 'center'
        });
        // QR code original size: 848x1205 pixels, aspect ratio 1:1.42
        const qrWidth = 80;
        const qrHeight = qrWidth * (1205 / 848);
        const qrX = (pageWidth - qrWidth) / 2;
        doc.addImage(qrBase64, 'JPG', qrX, 40, qrWidth, qrHeight);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...textColor);
        doc.text('UPI: ' + COMPANY_INFO.upi, pageWidth / 2, 40 + qrHeight + 15, {
            align: 'center'
        });
    }
    return doc.output('arraybuffer');
}
// Helper function to convert number to words
function numberToWords(n) {
    const single = [
        '',
        'One ',
        'Two ',
        'Three ',
        'Four ',
        'Five ',
        'Six ',
        'Seven ',
        'Eight ',
        'Nine ',
        'Ten ',
        'Eleven ',
        'Twelve ',
        'Thirteen ',
        'Fourteen ',
        'Fifteen ',
        'Sixteen ',
        'Seventeen ',
        'Eighteen ',
        'Nineteen '
    ];
    const double = [
        '',
        '',
        'Twenty ',
        'Thirty ',
        'Forty ',
        'Fifty ',
        'Sixty ',
        'Seventy ',
        'Eighty ',
        'Ninety '
    ];
    if (n < 20) return single[n];
    if (n < 100) return double[Math.floor(n / 10)] + single[n % 10];
    if (n < 1000) return single[Math.floor(n / 100)] + 'Hundred ' + (n % 100 > 0 ? numberToWords(n % 100) : '');
    if (n < 100000) return numberToWords(Math.floor(n / 1000)) + 'Thousand ' + (n % 1000 > 0 ? numberToWords(n % 1000) : '');
    if (n < 10000000) return numberToWords(Math.floor(n / 100000)) + 'Lakh ' + (n % 100000 > 0 ? numberToWords(n % 100000) : '');
    return numberToWords(Math.floor(n / 10000000)) + 'Crore ' + (n % 10000000 > 0 ? numberToWords(n % 10000000) : '');
}
function generateQuotePDFBuffer(quote, customer, items, message) {
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsPDF"]();
    const pageWidth = doc.internal.pageSize.getWidth();
    const primaryColor = [
        99,
        102,
        241
    ];
    const textColor = [
        55,
        65,
        81
    ];
    const lightGray = [
        243,
        244,
        246
    ];
    const strikeColor = [
        180,
        50,
        50
    ];
    // Header
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, pageWidth, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('QUOTE', 15, 20);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Quote #: QUOTE-${quote.quoteToken?.substring(0, 8).toUpperCase() || quote.id}`, 15, 30);
    doc.text(`Date: ${new Date(quote.createdAt).toLocaleDateString()}`, pageWidth - 15, 20, {
        align: 'right'
    });
    doc.text(`Valid Until: ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}`, pageWidth - 15, 28, {
        align: 'right'
    });
    // Company Info
    doc.setTextColor(...textColor);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(COMPANY_INFO.name, 15, 55);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(COMPANY_INFO.address, 15, 62);
    doc.text(`Phone: ${COMPANY_INFO.phone} | Email: ${COMPANY_INFO.email}`, 15, 69);
    // Customer Info Box
    const boxY = 85;
    doc.setFillColor(...lightGray);
    doc.roundedRect(15, boxY, pageWidth - 30, 35, 3, 3, 'F');
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryColor);
    doc.text('Bill To:', 20, boxY + 10);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text(customer?.customerName || 'N/A', 20, boxY + 18);
    doc.setFontSize(9);
    doc.text(customer?.email || 'N/A', 20, boxY + 25);
    doc.text(customer?.phone || 'N/A', 20, boxY + 32);
    // Message / Additional Note Box
    if (message) {
        const msgY = boxY + 42;
        doc.setFillColor(255, 250, 230);
        doc.roundedRect(15, msgY, pageWidth - 30, 18, 3, 3, 'F');
        doc.setDrawColor(...primaryColor);
        doc.setLineWidth(0.5);
        doc.roundedRect(15, msgY, pageWidth - 30, 18, 3, 3, 'S');
        doc.setFontSize(9);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...primaryColor);
        doc.text('Additional Note:', 20, msgY + 7);
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...textColor);
        const splitMessage = doc.splitTextToSize(message, pageWidth - 50);
        doc.text(splitMessage.slice(0, 2), 20, msgY + 14);
    }
    // Items Table - with MRP (crossed out) and Selling Price
    const tableData = items?.map((item, index)=>{
        const mrp = parseFloat(item.mrp || 0);
        const sellingPrice = parseFloat(item.price || 0);
        const qty = parseInt(item.qty || 1);
        const amount = sellingPrice * qty;
        return [
            index + 1,
            item.desc,
            qty,
            item.unit || 'NOS',
            mrp > 0 ? `Rs. ${mrp.toFixed(2)}` : '-',
            `Rs. ${sellingPrice.toFixed(2)}`,
            `Rs. ${amount.toFixed(2)}`
        ];
    }) || [];
    const total = items?.reduce((sum, item)=>sum + parseFloat(item.price || 0) * (item.qty || 1), 0) || 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(doc, {
        startY: message ? 155 : 135,
        head: [
            [
                'S.No',
                'Description',
                'Qty',
                'Unit',
                'MRP',
                'Selling Price',
                'Amount'
            ]
        ],
        body: tableData,
        theme: 'striped',
        headStyles: {
            fillColor: primaryColor,
            textColor: [
                255,
                255,
                255
            ],
            fontStyle: 'bold',
            fontSize: 8,
            halign: 'center'
        },
        bodyStyles: {
            fontSize: 8,
            textColor: textColor,
            valign: 'middle'
        },
        columnStyles: {
            0: {
                cellWidth: 10,
                halign: 'center'
            },
            1: {
                cellWidth: 'auto',
                halign: 'left'
            },
            2: {
                cellWidth: 12,
                halign: 'center'
            },
            3: {
                cellWidth: 14,
                halign: 'center'
            },
            4: {
                cellWidth: 24,
                halign: 'right'
            },
            5: {
                cellWidth: 28,
                halign: 'right'
            },
            6: {
                cellWidth: 28,
                halign: 'right'
            }
        },
        margin: {
            left: 15,
            right: 15
        },
        didParseCell: function(data) {
            // Strike through MRP values
            if (data.column.index === 4 && data.section === 'body' && data.cell.raw && data.cell.raw !== '-') {
                const mrpValue = parseFloat(data.cell.raw.replace('Rs. ', ''));
                if (mrpValue > 0) {
                    const cellPos = data.cell;
                    const textWidth = doc.getTextWidth(data.cell.raw);
                    const cellX = cellPos.x + cellPos.width - textWidth - 2;
                    const cellY = cellPos.y + cellPos.height / 2;
                    doc.setDrawColor(...strikeColor);
                    doc.setLineWidth(0.5);
                    doc.line(cellX, cellY, cellX + textWidth + 2, cellY);
                }
            }
        }
    });
    const finalY = doc.lastAutoTable.finalY + 10;
    // Total Section
    doc.setFillColor(...lightGray);
    doc.roundedRect(pageWidth - 90, finalY, 75, 12, 2, 2, 'F');
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Total:', pageWidth - 85, finalY + 8);
    doc.setTextColor(...primaryColor);
    doc.text(`Rs. ${total.toFixed(2)}`, pageWidth - 20, finalY + 8, {
        align: 'right'
    });
    // Terms and Conditions
    const termsY = finalY + 30;
    doc.setTextColor(...textColor);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Terms & Conditions:', 15, termsY);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    const terms = [
        '1. This quote is valid for 30 days from the date of issue.',
        '2. Prices are subject to change after the validity period.',
        '3. 50% advance payment required to confirm the order.',
        '4. Delivery timeline starts after advance payment.',
        '5. Goods once sold cannot be returned or exchanged.'
    ];
    terms.forEach((term, i)=>{
        doc.text(term, 15, termsY + 8 + i * 5);
    });
    // Accept/Reject Instructions
    const acceptY = termsY + 40;
    doc.setFillColor(...lightGray);
    doc.roundedRect(15, acceptY, pageWidth - 30, 25, 3, 3, 'F');
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryColor);
    doc.text('To Accept This Quote:', 20, acceptY + 10);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...textColor);
    doc.text('Visit the quote link sent to your email and click "Accept Quote"', 20, acceptY + 18);
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(`Generated by ${COMPANY_INFO.name} | ${COMPANY_INFO.email}`, pageWidth / 2, 285, {
        align: 'center'
    });
    // QR Code Section
    const qrBase64 = getQRCodeBase64();
    if (qrBase64) {
        doc.addPage();
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...primaryColor);
        doc.text('Scan to Pay', pageWidth / 2, 30, {
            align: 'center'
        });
        // QR code original size: 848x1205 pixels, aspect ratio 1:1.42
        const qrWidth = 80;
        const qrHeight = qrWidth * (1205 / 848);
        const qrX = (pageWidth - qrWidth) / 2;
        doc.addImage(qrBase64, 'JPG', qrX, 40, qrWidth, qrHeight);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...textColor);
        doc.text('UPI: ' + COMPANY_INFO.upi, pageWidth / 2, 40 + qrHeight + 15, {
            align: 'center'
        });
    }
    return Buffer.from(doc.output('arraybuffer'));
}
const __TURBOPACK__default__export__ = {
    generateInvoicePDF,
    generateInvoicePDFBuffer,
    generateQuotePDFBuffer
};
}),
"[project]/app/api/quotes/pdf/[token]/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdfGenerator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdfGenerator.js [app-route] (ecmascript)");
;
;
;
async function GET(req, { params }) {
    try {
        const { token } = await params;
        if (!token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Token is required'
            }, {
                status: 400
            });
        }
        // Find the quote
        const quote = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].quoteRequest.findFirst({
            where: {
                quoteToken: token
            },
            include: {
                product: true
            }
        });
        if (!quote) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Quote not found'
            }, {
                status: 404
            });
        }
        // Parse items
        let items = [];
        try {
            items = quote.items ? typeof quote.items === 'string' ? JSON.parse(quote.items) : quote.items : [];
        } catch (e) {
            items = [];
        }
        // Generate PDF buffer
        const pdfBuffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdfGenerator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateQuotePDFBuffer"])(quote, {
            customerName: quote.customerName,
            email: quote.guestEmail,
            phone: quote.guestPhone
        }, items, quote.message || '');
        // Return PDF
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](pdfBuffer, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="QUOTE-${token.substring(0, 8).toUpperCase()}.pdf"`
            }
        });
    } catch (err) {
        console.error("PDF Generation Error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to generate PDF'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5d687a32._.js.map