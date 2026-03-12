import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import fs from 'fs';
import path from 'path';

// Company Information
const COMPANY_INFO = {
    name: 'Suraksha Group of Computers',
    address: 'Ward No 7, Near Male Mahadeshwara Temple,\nRailway Station, Srinagar Doddaballapur\n561203',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '561203',
    phone: '8884358801',
    email: 'Surakshagroupofcompunters@gmail.com',
    bankName: 'Kotak 811 Bank',
    bankAccount: '0913586516',
    bankIFSC: 'KKBK0008045',
    gstin: ''
};

function getLogoBase64() {
    try {
        // Try to find logo in multiple locations
        const possiblePaths = [
            path.join(process.cwd(), 'public', 'logo', 'logo horizontal.png'),
            path.join(process.cwd(), '..', 'suraksha-next', 'public', 'logo', 'logo horizontal.png'),
            path.join(process.cwd(), '..', '..', 'suraksha-next', 'public', 'logo', 'logo horizontal.png'),
        ];

        for (const logoPath of possiblePaths) {
            if (fs.existsSync(logoPath)) {
                const logoBuffer = fs.readFileSync(logoPath);
                return logoBuffer.toString('base64');
            }
        }
    } catch (e) {
        console.log('Logo not found, using text instead');
    }
    return null;
}

export async function generateInvoicePDF(invoice, ticket, items) {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Colors
    const primaryColor = [108, 99, 255]; // #6C63FF
    const textColor = [51, 51, 51];
    const lightGray = [240, 240, 240];

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
    doc.text('ESTIMATE', pageWidth / 2, 50, { align: 'center' });

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
    const tableData = items.map((item, index) => [
        index + 1,
        item.desc,
        item.qty || '1',
        item.unit || 'NOS',
        `₹ ${parseFloat(item.price || 0).toFixed(2)}`,
        `₹ ${(parseFloat(item.price || 0) * (item.qty || 1)).toFixed(2)}`
    ]);

    // Calculate total
    const total = items.reduce((sum, item) => sum + (parseFloat(item.price || 0) * (item.qty || 1)), 0);

    autoTable(doc, {
        startY: 105,
        head: [['S.No', 'Description', 'Qty', 'Unit', 'Unit Price', 'Amount']],
        body: tableData,
        theme: 'striped',
        headStyles: {
            fillColor: primaryColor,
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            fontSize: 10
        },
        bodyStyles: {
            fontSize: 9,
            textColor: textColor
        },
        columnStyles: {
            0: { cellWidth: 15, halign: 'center' },
            1: { cellWidth: 'auto' },
            2: { cellWidth: 20, halign: 'center' },
            3: { cellWidth: 20, halign: 'center' },
            4: { cellWidth: 30, halign: 'right' },
            5: { cellWidth: 30, halign: 'right' }
        },
        margin: { left: 15, right: 15 }
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
    doc.text(`₹ ${total.toFixed(2)}`, pageWidth - 18, finalY + 8, { align: 'right' });

    // Amount in Words
    doc.setTextColor(...textColor);
    doc.setFontSize(10);
    doc.text(`Amount In Words:`, 15, finalY + 8);
    doc.setFont('helvetica', 'bold');
    const amountInWords = numberToWords(Math.round(total));
    doc.text(`${amountInWords} Rupees only`, 50, finalY + 8);

    // Bank Details Section
    const bankY = finalY + 25;
    doc.setFillColor(...lightGray);
    doc.roundedRect(15, bankY, pageWidth - 30, 25, 3, 3, 'F');

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryColor);
    doc.text('Bank Details:', 20, bankY + 8);

    doc.setFontSize(9);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    doc.text(`Bank Name: ${COMPANY_INFO.bankName}`, 20, bankY + 15);
    doc.text(`Account No.: ${COMPANY_INFO.bankAccount}`, 20, bankY + 21);
    doc.text(`IFSC Code: ${COMPANY_INFO.bankIFSC}`, 100, bankY + 15);

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

    terms.forEach((term, index) => {
        doc.text(term, 15, termsY + 8 + (index * 5));
    });

    // Footer - Authorized Signatory
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(0.3);
    doc.line(15, 265, pageWidth - 15, 265);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('For, Suraksha Group of Computers', pageWidth - 15, 275, { align: 'right' });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('Authorized Signatory', pageWidth - 15, 282, { align: 'right' });

    // Save the PDF
    return doc;
}

export function generateInvoicePDFBuffer(invoice, ticket, items) {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Colors
    const primaryColor = [108, 99, 255];
    const textColor = [51, 51, 51];
    const lightGray = [240, 240, 240];

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
    doc.text('ESTIMATE', pageWidth / 2, 50, { align: 'center' });

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
    const tableData = items.map((item, index) => [
        index + 1,
        item.desc,
        item.qty || '1',
        item.unit || 'NOS',
        `₹ ${parseFloat(item.price || 0).toFixed(2)}`,
        `₹ ${(parseFloat(item.price || 0) * (item.qty || 1)).toFixed(2)}`
    ]);

    const total = items.reduce((sum, item) => sum + (parseFloat(item.price || 0) * (item.qty || 1)), 0);

    autoTable(doc, {
        startY: 105,
        head: [['S.No', 'Description', 'Qty', 'Unit', 'Unit Price', 'Amount']],
        body: tableData,
        theme: 'striped',
        headStyles: {
            fillColor: primaryColor,
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            fontSize: 10
        },
        bodyStyles: {
            fontSize: 9,
            textColor: textColor
        },
        columnStyles: {
            0: { cellWidth: 15, halign: 'center' },
            1: { cellWidth: 'auto' },
            2: { cellWidth: 20, halign: 'center' },
            3: { cellWidth: 20, halign: 'center' },
            4: { cellWidth: 30, halign: 'right' },
            5: { cellWidth: 30, halign: 'right' }
        },
        margin: { left: 15, right: 15 }
    });

    const finalY = doc.lastAutoTable.finalY + 10;

    // Total Section
    doc.setFillColor(...lightGray);
    doc.roundedRect(pageWidth - 90, finalY, 75, 12, 2, 2, 'F');

    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Total:', pageWidth - 85, finalY + 8);
    doc.setTextColor(...primaryColor);
    doc.text(`₹ ${total.toFixed(2)}`, pageWidth - 18, finalY + 8, { align: 'right' });

    // Amount in Words
    doc.setTextColor(...textColor);
    doc.setFontSize(10);
    doc.text(`Amount In Words:`, 15, finalY + 8);
    doc.setFont('helvetica', 'bold');
    const amountInWords = numberToWords(Math.round(total));
    doc.text(`${amountInWords} Rupees only`, 50, finalY + 8);

    // Bank Details Section
    const bankY = finalY + 25;
    doc.setFillColor(...lightGray);
    doc.roundedRect(15, bankY, pageWidth - 30, 25, 3, 3, 'F');

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryColor);
    doc.text('Bank Details:', 20, bankY + 8);

    doc.setFontSize(9);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    doc.text(`Bank Name: ${COMPANY_INFO.bankName}`, 20, bankY + 15);
    doc.text(`Account No.: ${COMPANY_INFO.bankAccount}`, 20, bankY + 21);
    doc.text(`IFSC Code: ${COMPANY_INFO.bankIFSC}`, 100, bankY + 15);

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

    terms.forEach((term, index) => {
        doc.text(term, 15, termsY + 8 + (index * 5));
    });

    // Footer
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(0.3);
    doc.line(15, 265, pageWidth - 15, 265);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('For, Suraksha Group of Computers', pageWidth - 15, 275, { align: 'right' });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('Authorized Signatory', pageWidth - 15, 282, { align: 'right' });

    return doc.output('arraybuffer');
}

// Helper function to convert number to words
function numberToWords(n) {
    const single = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
    const double = ['', '', 'Twenty ', 'Thirty ', 'Forty ', 'Fifty ', 'Sixty ', 'Seventy ', 'Eighty ', 'Ninety '];

    if (n < 20) return single[n];
    if (n < 100) return double[Math.floor(n / 10)] + single[n % 10];
    if (n < 1000) return single[Math.floor(n / 100)] + 'Hundred ' + (n % 100 > 0 ? numberToWords(n % 100) : '');
    if (n < 100000) return numberToWords(Math.floor(n / 1000)) + 'Thousand ' + (n % 1000 > 0 ? numberToWords(n % 1000) : '');
    if (n < 10000000) return numberToWords(Math.floor(n / 100000)) + 'Lakh ' + (n % 100000 > 0 ? numberToWords(n % 100000) : '');
    return numberToWords(Math.floor(n / 10000000)) + 'Crore ' + (n % 10000000 > 0 ? numberToWords(n % 10000000) : '');
}

export default { generateInvoicePDF, generateInvoicePDFBuffer };
