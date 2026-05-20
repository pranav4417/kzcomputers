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
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/auth.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSession",
    ()=>getSession,
    "requireAuth",
    ()=>requireAuth,
    "signToken",
    ()=>signToken,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
// Use strong JWT_SECRET from environment - fallback to random if not set
const JWT_SECRET = process.env.JWT_SECRET || process.env.AUTH_SECRET || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'suraksha_dev_secret_change_in_production');
function signToken(payload) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(payload, JWT_SECRET, {
        expiresIn: '7d'
    });
}
function verifyToken(token) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
    } catch  {
        return null;
    }
}
async function getSession() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get('auth_token')?.value;
    if (!token) return null;
    return verifyToken(token);
}
async function requireAuth(roles = []) {
    const session = await getSession();
    if (!session) return null;
    if (roles.length > 0 && !roles.includes(session.role)) return null;
    return session;
}
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
    const tableData = items.map((item, index)=>[
            index + 1,
            item.desc,
            item.qty || '1',
            item.unit || 'NOS',
            `Rs. ${parseFloat(item.price || 0).toFixed(2)}`,
            `Rs. ${(parseFloat(item.price || 0) * (item.qty || 1)).toFixed(2)}`
        ]);
    // Calculate total
    const total = items.reduce((sum, item)=>sum + parseFloat(item.price || 0) * (item.qty || 1), 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(doc, {
        startY: 105,
        head: [
            [
                'S.No',
                'Description',
                'Qty',
                'Unit',
                'Unit Price',
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
                cellWidth: 12,
                halign: 'center'
            },
            1: {
                cellWidth: 'auto',
                halign: 'left'
            },
            2: {
                cellWidth: 15,
                halign: 'center'
            },
            3: {
                cellWidth: 15,
                halign: 'center'
            },
            4: {
                cellWidth: 28,
                halign: 'right'
            },
            5: {
                cellWidth: 30,
                halign: 'right'
            }
        },
        margin: {
            left: 15,
            right: 15
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
    const tableData = items.map((item, index)=>[
            index + 1,
            item.desc,
            item.qty || '1',
            item.unit || 'NOS',
            `Rs. ${parseFloat(item.price || 0).toFixed(2)}`,
            `Rs. ${(parseFloat(item.price || 0) * (item.qty || 1)).toFixed(2)}`
        ]);
    const total = items.reduce((sum, item)=>sum + parseFloat(item.price || 0) * (item.qty || 1), 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(doc, {
        startY: 105,
        head: [
            [
                'S.No',
                'Description',
                'Qty',
                'Unit',
                'Unit Price',
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
                cellWidth: 12,
                halign: 'center'
            },
            1: {
                cellWidth: 'auto',
                halign: 'left'
            },
            2: {
                cellWidth: 15,
                halign: 'center'
            },
            3: {
                cellWidth: 15,
                halign: 'center'
            },
            4: {
                cellWidth: 28,
                halign: 'right'
            },
            5: {
                cellWidth: 30,
                halign: 'right'
            }
        },
        margin: {
            left: 15,
            right: 15
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
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/lib/email.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendEmail",
    ()=>sendEmail,
    "sendInvoiceEmail",
    ()=>sendInvoiceEmail,
    "sendOtpEmail",
    ()=>sendOtpEmail,
    "sendQuoteEmail",
    ()=>sendQuoteEmail,
    "sendTicketEmail",
    ()=>sendTicketEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nodemailer/lib/nodemailer.js [app-route] (ecmascript)");
;
const EMAIL_USER = process.env.EMAIL_USER || 'surakshagroupofcomputers@gmail.com';
const EMAIL_PASS = process.env.EMAIL_PASSWORD;
const transporter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS || ''
    }
});
if (!EMAIL_PASS) {
    console.warn('⚠️ GMAIL_PASSWORD is not set in .env! Emails will fail with "PLAIN credentials" errors.');
}
async function sendEmail({ to, subject, html, attachments = [] }) {
    const mailOptions = {
        from: `"Suraksha Group" <${EMAIL_USER}>`,
        to,
        subject,
        html,
        attachments
    };
    try {
        return await transporter.sendMail(mailOptions);
    } catch (err) {
        console.error(`❌ Email delivery failed to ${to}:`, err.message);
        throw err;
    }
}
async function sendOtpEmail(to, otp) {
    return sendEmail({
        to,
        subject: 'Your OTP for Suraksha Group',
        html: `
      <div style="font-family:Inter,sans-serif;max-width:480px;margin:auto;background:#1a1a2e;padding:40px;border-radius:16px;">
        <h2 style="color:#6C63FF;margin-bottom:8px;">Suraksha Group</h2>
        <p style="color:#ccc;">Your OTP verification code:</p>
        <div style="font-size:36px;font-weight:bold;letter-spacing:12px;color:#fff;background:#2a2a4a;padding:20px;border-radius:8px;text-align:center;margin:20px 0;">${otp}</div>
        <p style="color:#aaa;font-size:14px;">This OTP expires in 10 minutes. Do not share it with anyone.</p>
      </div>
    `
    });
}
async function sendTicketEmail(to, { ticketNumber, customerName, product, serviceType, priority, status, subject, description, ticketLink, isUpdate = false }) {
    return sendEmail({
        to,
        subject: isUpdate ? `UPDATE: Ticket ${ticketNumber} Updated` : `Ticket #${ticketNumber} Created Successfully`,
        html: `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:auto;background:#1a1a2e;padding:40px;border-radius:16px;">
        <h2 style="color:#6C63FF;">Suraksha Group of Computers</h2>
        <p style="color:#ccc;">Greetings from Suraksha Group,</p>
        <p style="color:#ccc;">Dear <b style="color:#fff;">${customerName}</b>,</p>
        <p style="color:#ccc;">${isUpdate ? 'Your service ticket has been updated:' : `Your ticket number <b>${ticketNumber}</b> has been created successfully:`}</p>
        <div style="background:#2a2a4a;padding:20px;border-radius:12px;margin:20px 0;">
          <p style="margin:8px 0;color:#aaa;"><b style="color:#fff;">Ticket #:</b> ${ticketNumber}</p>
          <p style="margin:8px 0;color:#aaa;"><b style="color:#fff;">Product:</b> ${product}</p>
          <p style="margin:8px 0;color:#aaa;"><b style="color:#fff;">Service:</b> ${serviceType}</p>
          <p style="margin:8px 0;color:#aaa;"><b style="color:#fff;">Priority:</b> ${priority}</p>
          <p style="margin:8px 0;color:#aaa;"><b style="color:#fff;">Status:</b> <span style="color:#6C63FF;">${status}</span></p>
          <p style="margin:8px 0;color:#aaa;"><b style="color:#fff;">Subject:</b> ${subject}</p>
        </div>
        ${ticketLink ? `<a href="${ticketLink}" style="display:inline-block;background:#6C63FF;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">Track Ticket Status</a>` : ''}
        <p style="color:#777;font-size:12px;margin-top:30px;">Suraksha Group of Computers, Bangalore</p>
      </div>
    `
    });
}
async function sendInvoiceEmail(to, { invoiceNumber, ticketNumber, customerName, amount, items, pdfUrl, baseUrl }) {
    const itemsList = Array.isArray(items) ? items : JSON.parse(items || '[]');
    const totalAmount = itemsList.reduce((sum, item)=>sum + parseFloat(item.price || 0) * (item.qty || 1), 0);
    const amountInWords = numberToWords(Math.round(totalAmount));
    const itemsHtml = itemsList.map((item, idx)=>`
    <tr style="border-bottom:1px solid #333;">
      <td style="padding:12px 8px;color:#aaa;font-size:13px;">${idx + 1}</td>
      <td style="padding:12px 8px;color:#fff;font-size:13px;">${item.desc}</td>
      <td style="padding:12px 8px;color:#aaa;font-size:13px;text-align:center;">${item.qty || 1}</td>
      <td style="padding:12px 8px;color:#aaa;font-size:13px;text-align:right;">₹${parseFloat(item.price || 0).toFixed(2)}</td>
      <td style="padding:12px 8px;color:#fff;font-size:13px;text-align:right;font-weight:bold;">₹${(parseFloat(item.price || 0) * (item.qty || 1)).toFixed(2)}</td>
    </tr>
  `).join('');
    return sendEmail({
        to,
        subject: `Invoice ${invoiceNumber} for Ticket #${ticketNumber}`,
        html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Invoice</title>
        <!--[if mso]>
        <style type="text/css">
          table { border-collapse: collapse; }
          td { padding: 0; }
        </style>
        <![endif]-->
      </head>
      <body style="margin:0;padding:0;background:#1a1a2e;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#1a1a2e;">
          <tr>
            <td align="center" style="padding:20px 10px;">
              <!--[if mso]>
              <table role="presentation" cellpadding="0" cellspacing="0" width="600">
              <tr>
              <td>
              <![endif]-->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;width:100%;">
                <tr>
                  <td style="font-family:Inter,sans-serif;background:#1a1a2e;padding:30px 20px;border-radius:16px;">
                    <div style="text-align:center;margin-bottom:30px;">
                      <h2 style="color:#6C63FF;margin:0 0 8px 0;">Suraksha Group of Computers</h2>
                      <p style="color:#888;font-size:11px;margin:0;">Ward No 7, Near Male Mahadeshwara Temple, Railway Station, Srinagar Doddaballapur, Bangalore - 561203</p>
                      <p style="color:#888;font-size:11px;margin:4px 0 0 0;">📞 8884358801 | 📧 Surakshagroupofcompunters@gmail.com</p>
                    </div>
                    
                    <div style="background:#2a2a4a;padding:20px;border-radius:12px;margin-bottom:24px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;">
                        <tr>
                          <td style="padding-bottom:15px;">
                            <p style="margin:0 0 4px 0;color:#6C63FF;font-size:10px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">Invoice Number</p>
                            <p style="margin:0;font-size:16px;font-weight:bold;color:#fff;">${invoiceNumber}</p>
                          </td>
                          <td style="padding-bottom:15px;text-align:right;">
                            <p style="margin:0 0 4px 0;color:#6C63FF;font-size:10px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">Ticket Reference</p>
                            <p style="margin:0;font-size:14px;font-weight:bold;color:#fff;">#${ticketNumber}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p style="margin:0 0 4px 0;color:#888;font-size:11px;">Customer Name</p>
                            <p style="margin:0;font-size:14px;font-weight:bold;color:#fff;">${customerName}</p>
                          </td>
                          <td style="text-align:right;">
                            <p style="margin:0 0 4px 0;color:#888;font-size:11px;">Date</p>
                            <p style="margin:0;font-size:14px;color:#ccc;">${new Date().toLocaleDateString('en-GB')}</p>
                          </td>
                        </tr>
                      </table>
                    </div>
                    
                    <div style="overflow-x:auto;margin-bottom:24px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;min-width:500px;border-collapse:collapse;">
                        <thead>
                          <tr style="background:#6C63FF;">
                            <th style="padding:12px 8px;text-align:left;color:#fff;font-size:10px;text-transform:uppercase;letter-spacing:1px;white-space:nowrap;">#</th>
                            <th style="padding:12px 8px;text-align:left;color:#fff;font-size:10px;text-transform:uppercase;letter-spacing:1px;">Description</th>
                            <th style="padding:12px 8px;text-align:center;color:#fff;font-size:10px;text-transform:uppercase;letter-spacing:1px;white-space:nowrap;">Qty</th>
                            <th style="padding:12px 8px;text-align:right;color:#fff;font-size:10px;text-transform:uppercase;letter-spacing:1px;white-space:nowrap;">Rate</th>
                            <th style="padding:12px 8px;text-align:right;color:#fff;font-size:10px;text-transform:uppercase;letter-spacing:1px;white-space:nowrap;">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${itemsHtml}
                        </tbody>
                      </table>
                    </div>
                    
                    <div style="background:linear-gradient(135deg,#6C63FF 0%,#8B83FF 100%);padding:20px;border-radius:12px;margin-bottom:24px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;">
                        <tr>
                          <td>
                            <p style="margin:0 0 4px 0;color:rgba(255,255,255,0.8);font-size:11px;">Total Amount</p>
                            <p style="margin:0;font-size:24px;font-weight:bold;color:#fff;">₹${totalAmount.toFixed(2)}</p>
                          </td>
                          <td style="text-align:right;">
                            <p style="margin:0;color:rgba(255,255,255,0.8);font-size:10px;">Amount in Words</p>
                            <p style="margin:0;font-size:12px;font-weight:bold;color:#fff;">${amountInWords} Rupees only</p>
                          </td>
                        </tr>
                      </table>
                    </div>
                    
                    ${pdfUrl ? `
                    <div style="text-align:center;margin-bottom:30px;">
                      <a href="${pdfUrl}" style="display:inline-block;background:#4ade80;color:#000;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:14px;">📥 Download Invoice PDF</a>
                      <p style="color:#666;font-size:11px;margin-top:12px;">Click the button above to download your detailed invoice</p>
                    </div>
                    ` : ''}
                    
                    <div style="border-top:1px solid #333;padding-top:20px;">
                      <p style="margin:0 0 8px 0;color:#888;font-size:11px;font-weight:bold;">Bank Details</p>
                      <p style="margin:0;color:#aaa;font-size:12px;">Bank: Kotak 811 Bank | A/c: 0913586516 | IFSC: KKBK0008045</p>
                    </div>
                    
                    <p style="color:#555;font-size:11px;margin-top:30px;text-align:center;">Thank you for choosing Suraksha Group of Computers!</p>
                    <p style="color:#444;font-size:10px;margin-top:20px;text-align:center;">This is a computer-generated invoice. No signature required.</p>
                  </td>
                </tr>
              </table>
              <!--[if mso]>
              </td>
              </tr>
              </table>
              <![endif]-->
            </td>
          </tr>
        </table>
      </body>
      </html>
    `
    });
}
async function sendQuoteEmail(to, customerName, quote, pdfUrl, quoteUrl, pdfBuffer = null) {
    const itemsList = quote.items ? typeof quote.items === 'string' ? JSON.parse(quote.items) : quote.items : [];
    // Prepare attachments if PDF buffer is provided
    const attachments = pdfBuffer ? [
        {
            filename: `QUOTE-${quote.quoteToken?.substring(0, 8).toUpperCase() || quote.id}.pdf`,
            content: pdfBuffer
        }
    ] : [];
    const itemsHtml = itemsList.map((item, i)=>{
        const mrp = parseFloat(item.mrp || 0);
        const sellingPrice = parseFloat(item.price || 0);
        const qty = parseInt(item.qty || 1);
        const amount = sellingPrice * qty;
        const mrpDisplay = mrp > 0 ? `<span style="text-decoration:line-through;color:#999;margin-right:8px;">₹${mrp.toFixed(2)}</span>` : '';
        return `
    <tr style="background:${i % 2 === 0 ? '#f9f9f9' : '#fff'};">
      <td style="padding:10px 8px;border-bottom:1px solid #eee;text-align:center;color:#555;">${i + 1}</td>
      <td style="padding:10px 8px;border-bottom:1px solid #eee;text-align:left;color:#333;">${item.desc || 'Item ' + (i + 1)}</td>
      <td style="padding:10px 8px;border-bottom:1px solid #eee;text-align:center;color:#555;">${qty}</td>
      <td style="padding:10px 8px;border-bottom:1px solid #eee;text-align:right;color:#555;">${mrpDisplay}<span style="color:#22c55e;font-weight:bold;">₹${sellingPrice.toFixed(2)}</span></td>
      <td style="padding:10px 8px;border-bottom:1px solid #eee;text-align:right;color:#333;font-weight:bold;">₹${amount.toFixed(2)}</td>
    </tr>
  `;
    }).join('');
    return sendEmail({
        to,
        subject: `Quote #QUOTE-${quote.quoteToken?.substring(0, 8).toUpperCase() || quote.id} - Suraksha Group`,
        attachments,
        html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,sans-serif;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f4f4f4;">
          <tr>
            <td align="center" style="padding:20px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="background:#fff;border-radius:8px;overflow:hidden;">
                <!-- Header -->
                <tr>
                  <td style="background:linear-gradient(135deg,#6C63FF 0%,#8B5CF6 100%);padding:30px;text-align:center;">
                    <h1 style="margin:0;color:#fff;font-size:28px;font-weight:bold;">QUOTE</h1>
                    <p style="margin:10px 0 0 0;color:rgba(255,255,255,0.9);font-size:14px;">Suraksha Group of Computers</p>
                  </td>
                </tr>
                <!-- Quote Info -->
                <tr>
                  <td style="padding:25px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td>
                          <p style="margin:0 0 5px 0;color:#6C63FF;font-size:10px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">Quote Number</p>
                          <p style="margin:0;font-size:18px;font-weight:bold;color:#333;">QUOTE-${quote.quoteToken?.substring(0, 8).toUpperCase() || quote.id}</p>
                        </td>
                        <td style="text-align:right;">
                          <p style="margin:0 0 5px 0;color:#6C63FF;font-size:10px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">Date</p>
                          <p style="margin:0;font-size:14px;color:#666;">${new Date(quote.createdAt).toLocaleDateString('en-GB')}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top:15px;">
                          <p style="margin:0 0 5px 0;color:#888;font-size:11px;">Customer Name</p>
                          <p style="margin:0;font-size:16px;font-weight:bold;color:#333;">${customerName}</p>
                        </td>
                        <td style="padding-top:15px;text-align:right;">
                          <p style="margin:0 0 5px 0;color:#888;font-size:11px;">Valid Until</p>
                          <p style="margin:0;font-size:14px;color:#666;">${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB')}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Items Table -->
                <tr>
                  <td style="padding:0 25px 25px 25px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
                      <thead>
                        <tr style="background:#6C63FF;">
                          <th style="padding:12px 8px;text-align:left;color:#fff;font-size:10px;text-transform:uppercase;">#</th>
                          <th style="padding:12px 8px;text-align:left;color:#fff;font-size:10px;text-transform:uppercase;">Description</th>
                          <th style="padding:12px 8px;text-align:center;color:#fff;font-size:10px;text-transform:uppercase;">Qty</th>
                          <th style="padding:12px 8px;text-align:right;color:#fff;font-size:10px;text-transform:uppercase;">MRP / Selling Price</th>
                          <th style="padding:12px 8px;text-align:right;color:#fff;font-size:10px;text-transform:uppercase;">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${itemsHtml}
                      </tbody>
                    </table>
                  </td>
                </tr>
                <!-- Total -->
                <tr>
                  <td style="padding:0 25px 25px 25px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="text-align:right;">
                          <div style="background:#f8f8f8;padding:15px 20px;border-radius:8px;display:inline-block;">
                            <span style="color:#666;font-size:14px;">Total: </span>
                            <span style="color:#6C63FF;font-size:24px;font-weight:bold;">₹${(quote.amount || 0).toFixed(2)}</span>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Additional Note / Message -->
                ${quote.message ? `
                <tr>
                  <td style="padding:0 25px 25px 25px;">
                    <div style="background:#f0f4ff;border:1px solid #6C63FF;border-radius:8px;padding:12px 16px;margin-bottom:8px;">
                      <p style="margin:0 0 4px 0;color:#6C63FF;font-size:10px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">Additional Note</p>
                      <p style="margin:0;color:#333;font-size:13px;line-height:1.5;">${quote.message}</p>
                    </div>
                  </td>
                </tr>
                ` : ''}
                <!-- Action Buttons -->
                <tr>
                  <td style="padding:0 25px 25px 25px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td align="center" style="padding:10px;">
                          <a href="${quoteUrl}" style="display:inline-block;background:#28a745;color:#fff;text-decoration:none;padding:14px 30px;border-radius:6px;font-weight:bold;font-size:14px;">Accept Quote</a>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="padding:10px;">
                          <a href="${pdfUrl}" style="display:inline-block;background:#6C63FF;color:#fff;text-decoration:none;padding:14px 30px;border-radius:6px;font-weight:bold;font-size:14px;">Download PDF</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td style="background:#333;padding:20px;text-align:center;">
                    <p style="margin:0;color:#888;font-size:12px;">Suraksha Group of Computers | Surakshagroupofcomputers@gmail.com | 8884358801</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `
    });
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
}),
"[project]/app/api/admin/quotes/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdfGenerator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdfGenerator.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/email.js [app-route] (ecmascript)");
;
;
;
;
;
async function POST(req) {
    try {
        const body = await req.json();
        const { customerEmail, customerName, customerPhone, items, amount, message, productId, ticketId } = body;
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSession"])();
        if (!session || ![
            'admin',
            'superadmin',
            'agent'
        ].includes(session.role)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        // Validate required fields
        if (!customerEmail || !customerName) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Customer email and name are required'
            }, {
                status: 400
            });
        }
        // Generate a unique quote token
        const quoteToken = Date.now().toString(36) + Math.random().toString(36).substr(2);
        // Find or create customer
        let customer = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].customer.findUnique({
            where: {
                email: customerEmail
            }
        });
        // Parse items
        let parsedItems = [];
        try {
            parsedItems = typeof items === 'string' ? JSON.parse(items) : items;
        } catch (e) {
            parsedItems = [];
        }
        // Calculate total from items if provided
        const calculatedTotal = parsedItems.reduce((sum, item)=>{
            return sum + parseFloat(item.price || 0) * parseInt(item.qty || 1);
        }, 0);
        const finalAmount = calculatedTotal > 0 ? calculatedTotal : parseFloat(amount || 0);
        // Create quote request
        const quote = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].quoteRequest.create({
            data: {
                customerId: customer?.id,
                guestEmail: customerEmail,
                guestPhone: customerPhone,
                customerName,
                productId: productId ? parseInt(productId) : null,
                ticketId: ticketId ? parseInt(ticketId) : null,
                message: message || '',
                items: JSON.stringify(parsedItems),
                amount: finalAmount,
                status: 'Sent',
                quoteToken,
                sentAt: new Date()
            }
        });
        // Generate PDF
        const pdfBuffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdfGenerator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateQuotePDFBuffer"])(quote, {
            customerName,
            email: customerEmail,
            phone: customerPhone
        }, parsedItems, message);
        // Note: Vercel has read-only filesystem, so we can't save PDFs to disk
        // Instead, we'll generate PDF on-demand or attach to email
        const baseUrl = ("TURBOPACK compile-time value", "http://localhost:3000") || 'https://suraksha-wb.vercel.app';
        // Generate PDF URL for download (will be generated on-the-fly)
        const pdfUrl = `${baseUrl}/api/quotes/pdf/${quoteToken}`;
        // Send email to customer with PDF attached
        const quoteUrl = `${baseUrl}/quote/${quoteToken}`;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$email$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendQuoteEmail"])(customerEmail, customerName, quote, pdfUrl, quoteUrl, pdfBuffer);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            quote,
            pdfUrl
        });
    } catch (err) {
        console.error("Quote Creation Error", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to create quote'
        }, {
            status: 500
        });
    }
}
async function GET(req) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSession"])();
        if (!session || ![
            'admin',
            'superadmin',
            'agent'
        ].includes(session.role)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        const quotes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].quoteRequest.findMany({
            include: {
                product: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        // Parse items JSON for each quote
        const quotesWithItems = quotes.map((quote)=>({
                ...quote,
                items: quote.items ? typeof quote.items === 'string' ? JSON.parse(quote.items) : quote.items : []
            }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(quotesWithItems);
    } catch (err) {
        console.error("Quote fetch error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch quotes'
        }, {
            status: 500
        });
    }
}
async function DELETE(req) {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSession"])();
        if (!session || ![
            'admin',
            'superadmin',
            'agent'
        ].includes(session.role)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        const { searchParams } = new URL(req.url);
        const quoteId = searchParams.get('id');
        if (!quoteId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Quote ID is required'
            }, {
                status: 400
            });
        }
        // Delete the quote
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].quoteRequest.delete({
            where: {
                id: parseInt(quoteId)
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'Quote deleted successfully'
        });
    } catch (err) {
        console.error("Quote delete error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to delete quote'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4d3dfaf6._.js.map