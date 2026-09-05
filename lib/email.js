import nodemailer from 'nodemailer';

const EMAIL_USER = process.env.EMAIL_USER || 'kzcomputers@gmail.com';
const EMAIL_PASS = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // SSL
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS || '',
  },
});

if (!EMAIL_PASS) {
  console.warn('⚠️ GMAIL_PASSWORD is not set in .env! Emails will fail with "PLAIN credentials" errors.');
}

export async function sendEmail({ to, subject, html, attachments = [] }) {
  const mailOptions = {
    from: `"KZ COMPUTERS" <${EMAIL_USER}>`,
    to,
    subject,
    html,
    attachments,
  };
  try {
    return await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error(`❌ Email delivery failed to ${to}:`, err.message);
    throw err;
  }
}

export async function sendOtpEmail(to, otp) {
  return sendEmail({
    to,
    subject: 'Your OTP for KZ COMPUTERS',
    html: `
      <div style="font-family:Inter,sans-serif;max-width:480px;margin:auto;background:#1A202C;padding:40px;border-radius:16px;">
        <h2 style="color:#003B73;margin-bottom:8px;">KZ COMPUTERS</h2>
        <p style="color:#ccc;">Your OTP verification code:</p>
        <div style="font-size:36px;font-weight:bold;letter-spacing:12px;color:#fff;background:#2d3748;padding:20px;border-radius:8px;text-align:center;margin:20px 0;">${otp}</div>
        <p style="color:#aaa;font-size:14px;">This OTP expires in 10 minutes. Do not share it with anyone.</p>
      </div>
    `,
  });
}

export async function sendTicketEmail(to, { ticketNumber, customerName, product, serviceType, priority, status, subject, description, ticketLink, isUpdate = false }) {
  return sendEmail({
    to,
    subject: isUpdate ? `UPDATE: Ticket ${ticketNumber} Updated` : `Ticket #${ticketNumber} Created Successfully`,
    html: `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:auto;background:#1A202C;padding:40px;border-radius:16px;">
        <h2 style="color:#003B73;">KZ COMPUTERS</h2>
        <p style="color:#ccc;">Greetings from KZ COMPUTERS,</p>
        <p style="color:#ccc;">Dear <b style="color:#fff;">${customerName}</b>,</p>
        <p style="color:#ccc;">${isUpdate ? 'Your service ticket has been updated:' : `Your ticket number <b>${ticketNumber}</b> has been created successfully:`}</p>
        <div style="background:#2d3748;padding:20px;border-radius:12px;margin:20px 0;">
          <p style="margin:8px 0;color:#aaa;"><b style="color:#fff;">Ticket #:</b> ${ticketNumber}</p>
          <p style="margin:8px 0;color:#aaa;"><b style="color:#fff;">Product:</b> ${product}</p>
          <p style="margin:8px 0;color:#aaa;"><b style="color:#fff;">Service:</b> ${serviceType}</p>
          <p style="margin:8px 0;color:#aaa;"><b style="color:#fff;">Priority:</b> ${priority}</p>
          <p style="margin:8px 0;color:#aaa;"><b style="color:#fff;">Status:</b> <span style="color:#003B73;">${status}</span></p>
          <p style="margin:8px 0;color:#aaa;"><b style="color:#fff;">Subject:</b> ${subject}</p>
        </div>
        ${ticketLink ? `<a href="${ticketLink}" style="display:inline-block;background:#003B73;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">Track Ticket Status</a>` : ''}
        <p style="color:#777;font-size:12px;margin-top:30px;">KZ COMPUTERS, NO.483 & 484, Nimishamba, Square Amrutahalli, Amruthahalli, Bangalore, Bangalore North, Karnataka, India, 560092 | GSTIN: 29AANCK0673R1ZL | CIN: U62099KA2026PTC224499</p>
      </div>
    `,
  });
}

export async function sendInvoiceEmail(to, { invoiceNumber, ticketNumber, customerName, amount, items, pdfUrl, baseUrl }) {
  const itemsList = Array.isArray(items) ? items : JSON.parse(items || '[]');
  const totalAmount = itemsList.reduce((sum, item) => sum + (parseFloat(item.price || 0) * (item.qty || 1)), 0);
  const amountInWords = numberToWords(Math.round(totalAmount));

  const itemsHtml = itemsList.map((item, idx) => {
    const mrp = parseFloat(item.mrp || 0);
    const sellingPrice = parseFloat(item.price || 0);
    const qty = parseInt(item.qty || 1);
    const amount = sellingPrice * qty;
    const mrpDisplay = mrp > 0 ? `<span style="text-decoration:line-through;color:#999;margin-right:8px;">₹${mrp.toFixed(2)}</span>` : '';
    return `
    <tr style="border-bottom:1px solid #333;">
      <td style="padding:12px 8px;color:#aaa;font-size:13px;">${idx + 1}</td>
      <td style="padding:12px 8px;color:#fff;font-size:13px;">${item.desc}</td>
      <td style="padding:12px 8px;color:#aaa;font-size:13px;text-align:center;">${qty}</td>
      <td style="padding:12px 8px;color:#aaa;font-size:13px;text-align:right;">${mrpDisplay}<span style="color:#22c55e;font-weight:bold;">₹${sellingPrice.toFixed(2)}</span></td>
      <td style="padding:12px 8px;color:#fff;font-size:13px;text-align:right;font-weight:bold;">₹${amount.toFixed(2)}</td>
    </tr>
  `}).join('');

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
      <body style="margin:0;padding:0;background:#1A202C;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#1A202C;">
          <tr>
            <td align="center" style="padding:20px 10px;">
              <!--[if mso]>
              <table role="presentation" cellpadding="0" cellspacing="0" width="600">
              <tr>
              <td>
              <![endif]-->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;width:100%;">
                <tr>
                  <td style="font-family:Inter,sans-serif;background:#1A202C;padding:30px 20px;border-radius:16px;">
                    <div style="text-align:center;margin-bottom:30px;">
                      <h2 style="color:#003B73;margin:0 0 8px 0;">KZ COMPUTERS</h2>
                      <p style="color:#888;font-size:11px;margin:0;">NO.483 & 484, Nimishamba, Square Amrutahalli, Amruthahalli, Bangalore, Bangalore North, Karnataka, India, 560092</p>
                      <p style="color:#888;font-size:11px;margin:4px 0 0 0;">GSTIN: 29AANCK0673R1ZL | CIN: U62099KA2026PTC224499 | 📞 8884358801 | 📧 kzcomputers@gmail.com</p>
                    </div>
                    
                    <div style="background:#2d3748;padding:20px;border-radius:12px;margin-bottom:24px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;">
                        <tr>
                          <td style="padding-bottom:15px;">
                            <p style="margin:0 0 4px 0;color:#003B73;font-size:10px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">Invoice Number</p>
                            <p style="margin:0;font-size:16px;font-weight:bold;color:#fff;">${invoiceNumber}</p>
                          </td>
                          <td style="padding-bottom:15px;text-align:right;">
                            <p style="margin:0 0 4px 0;color:#003B73;font-size:10px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">Ticket Reference</p>
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
                          <tr style="background:#003B73;">
                            <th style="padding:12px 8px;text-align:left;color:#fff;font-size:10px;text-transform:uppercase;letter-spacing:1px;white-space:nowrap;">#</th>
                            <th style="padding:12px 8px;text-align:left;color:#fff;font-size:10px;text-transform:uppercase;letter-spacing:1px;">Description</th>
                            <th style="padding:12px 8px;text-align:center;color:#fff;font-size:10px;text-transform:uppercase;letter-spacing:1px;white-space:nowrap;">Qty</th>
                            <th style="padding:12px 8px;text-align:right;color:#fff;font-size:10px;text-transform:uppercase;letter-spacing:1px;white-space:nowrap;">MRP / Selling Price</th>
                            <th style="padding:12px 8px;text-align:right;color:#fff;font-size:10px;text-transform:uppercase;letter-spacing:1px;white-space:nowrap;">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${itemsHtml}
                        </tbody>
                      </table>
                    </div>
                    
                    <div style="background:linear-gradient(135deg,#003B73 0%,#0082C8 100%);padding:20px;border-radius:12px;margin-bottom:24px;">
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
                    
                     <p style="color:#555;font-size:11px;margin-top:30px;text-align:center;">Thank you for choosing KZ COMPUTERS!</p>
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
    `,
  });
}

export async function sendQuoteEmail(to, customerName, quote, pdfUrl, quoteUrl, pdfBuffer = null) {
  const itemsList = quote.items ? (typeof quote.items === 'string' ? JSON.parse(quote.items) : quote.items) : [];

  // Prepare attachments if PDF buffer is provided
  const attachments = pdfBuffer ? [{
    filename: `QUOTE-${quote.quoteToken?.substring(0, 8).toUpperCase() || quote.id}.pdf`,
    content: pdfBuffer
  }] : [];
  const itemsHtml = itemsList.map((item, i) => {
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
  `}).join('');

  return sendEmail({
    to,
    subject: `Quote #QUOTE-${quote.quoteToken?.substring(0, 8).toUpperCase() || quote.id} - KZ COMPUTERS`,
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
                  <td style="background:linear-gradient(135deg,#003B73 0%,#0082C8 100%);padding:30px;text-align:center;">
                    <h1 style="margin:0;color:#fff;font-size:28px;font-weight:bold;">QUOTE</h1>
                     <p style="margin:10px 0 0 0;color:rgba(255,255,255,0.9);font-size:14px;">KZ COMPUTERS</p>
                  </td>
                </tr>
                <!-- Quote Info -->
                <tr>
                  <td style="padding:25px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td>
                          <p style="margin:0 0 5px 0;color:#003B73;font-size:10px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">Quote Number</p>
                          <p style="margin:0;font-size:18px;font-weight:bold;color:#333;">QUOTE-${quote.quoteToken?.substring(0, 8).toUpperCase() || quote.id}</p>
                        </td>
                        <td style="text-align:right;">
                          <p style="margin:0 0 5px 0;color:#003B73;font-size:10px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">Date</p>
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
                        <tr style="background:#003B73;">
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
                            <span style="color:#003B73;font-size:24px;font-weight:bold;">₹${(quote.amount || 0).toFixed(2)}</span>
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
                    <div style="background:#f0f4ff;border:1px solid #003B73;border-radius:8px;padding:12px 16px;margin-bottom:8px;">
                      <p style="margin:0 0 4px 0;color:#003B73;font-size:10px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">Additional Note</p>
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
                          <a href="${pdfUrl}" style="display:inline-block;background:#003B73;color:#fff;text-decoration:none;padding:14px 30px;border-radius:6px;font-weight:bold;font-size:14px;">Download PDF</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td style="background:#333;padding:20px;text-align:center;">
                      <p style="margin:0;color:#888;font-size:12px;">KZ COMPUTERS | NO.483 & 484, Nimishamba, Square Amrutahalli, Amruthahalli, Bangalore, Bangalore North, Karnataka, India, 560092 | GSTIN: 29AANCK0673R1ZL | CIN: U62099KA2026PTC224499 | kzcomputers@gmail.com | 8884358801</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  });
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
