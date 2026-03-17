import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'surakshagroupofcomputers@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'dhrjvqibqybdanqc',
  },
});

export async function sendEmail({ to, subject, html, attachments = [] }) {
  const mailOptions = {
    from: '"Suraksha Group" <surakshagroupofcomputers@gmail.com>',
    to,
    subject,
    html,
    attachments,
  };
  return transporter.sendMail(mailOptions);
}

export async function sendOtpEmail(to, otp) {
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
    `,
  });
}

export async function sendTicketEmail(to, { ticketNumber, customerName, product, serviceType, priority, status, subject, description, ticketLink, isUpdate = false }) {
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
    `,
  });
}

export async function sendInvoiceEmail(to, { invoiceNumber, ticketNumber, customerName, amount, items, pdfUrl, baseUrl }) {
  const itemsList = Array.isArray(items) ? items : JSON.parse(items || '[]');
  const totalAmount = itemsList.reduce((sum, item) => sum + (parseFloat(item.price || 0) * (item.qty || 1)), 0);
  const amountInWords = numberToWords(Math.round(totalAmount));

  const itemsHtml = itemsList.map((item, idx) => `
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
