import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { sendTicketEmail } from '@/lib/email';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function POST(req) {
    try {
        const formData = await req.formData();

        const customerName = formData.get('customerName');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const product = formData.get('product');
        const serviceType = formData.get('serviceType');
        const priority = formData.get('priority');
        const subject = formData.get('subject');
        const description = formData.get('description');
        const image = formData.get('image');

        // 1. Generate Ticket Number - Short format: SUK-AB12CD (8 chars)
        const datePart = new Date().toISOString().slice(2, 10).replace(/-/g, '');
        const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
        const ticketNumber = `SUK-${datePart}${randomPart}`;
        const ticketToken = crypto.randomBytes(16).toString('hex');

        // 2. Handle Image Upload to Cloudinary
        let imagePath = null;
        if (image && typeof image !== 'string') {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const ext = path.extname(image.name) || '.jpg';
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}${ext}`;

            // Upload to Cloudinary
            try {
                const uploadResult = await new Promise((resolve, reject) => {
                    cloudinary.uploader.upload_stream(
                        {
                            public_id: `tickets/${fileName.replace(/\.[^/.]+$/, '')}`,
                            folder: 'suraksha/tickets'
                        },
                        (error, result) => {
                            if (error) reject(error);
                            else resolve(result);
                        }
                    ).end(buffer);
                });
                imagePath = uploadResult.secure_url;
            } catch (uploadError) {
                console.error('Cloudinary upload error:', uploadError);
                // Continue without image if upload fails
            }
        }

        // 3. Save to Database
        const ticket = await prisma.ticket.create({
            data: {
                ticketNumber,
                customerName,
                email: email.toLowerCase(),
                phone,
                product,
                serviceType,
                priority,
                subject,
                description,
                image: imagePath,
                ticketToken,
                status: 'Open',
            },
        });

        // 4. Send Email
        const ticketLink = `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/track/${ticketToken}`;
        await sendTicketEmail(email, {
            ticketNumber,
            customerName,
            product,
            serviceType,
            priority,
            status: 'Open',
            subject,
            description,
            ticketLink,
        });

        return NextResponse.json({ success: true, ticketNumber, token: ticketToken });
    } catch (error) {
        console.error('Ticket creation error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
