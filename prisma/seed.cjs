const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding database...');

    // Create superadmin user from environment variables
    const superUsername = process.env.INITIAL_SUPERADMIN_USERNAME || 'superadmin';
    const superEmail = process.env.INITIAL_SUPERADMIN_EMAIL || 'admin@suraksha.com';
    const superPassword = process.env.INITIAL_SUPERADMIN_PASSWORD || 'Admin@1234';

    const hashedPassword = await bcrypt.hash(superPassword, 10);

    await prisma.admin.upsert({
        where: { email: superEmail },
        update: {
            username: superUsername,
            password: hashedPassword,
            role: 'superadmin',
            status: 'active',
        },
        create: {
            username: superUsername,
            email: superEmail,
            password: hashedPassword,
            role: 'superadmin',
            status: 'active',
        },
    });
    console.log(`✅ Superadmin user created: ${superUsername} / ${superEmail}`);
    if (!process.env.INITIAL_SUPERADMIN_PASSWORD) {
        console.warn('⚠️  Warning: Initial password "Admin@1234" used because INITIAL_SUPERADMIN_PASSWORD is not set in .env');
    }

    // Create sample services
    const services = [
        { name: 'Laptop Repair', description: 'Professional laptop repair for all brands with genuine spare parts and expert technicians.', image: null },
        { name: 'CCTV Installation', description: 'Complete home and office security camera setup with 24/7 monitoring support.', image: null },
        { name: 'Printer Services', description: 'Printer cartridge refill, repairs, and troubleshooting for all printer brands.', image: null },
        { name: 'PC Building', description: 'Custom-built desktop PCs with premium components from top brands.', image: null },
        { name: 'Data Recovery', description: 'Safe and secure data recovery from damaged or corrupted storage devices.', image: null },
        { name: 'Networking Setup', description: 'Home and office networking including WiFi, LAN setup, and configuration.', image: null },
        { name: 'AMC', description: 'Annual maintenance contracts for computers, printers, and IT infrastructure to ensure maximum uptime.', image: null },
        { name: 'Corporate IT Solutions', description: 'End-to-end corporate IT services including infrastructure setup, support, and managed IT solutions.', image: null },
    ];

    for (const service of services) {
        await prisma.service.upsert({
            where: { id: (await prisma.service.findFirst({ where: { name: service.name } }))?.id ?? 0 },
            update: {},
            create: service,
        }).catch(() => prisma.service.create({ data: service }));
    }
    console.log('✅ Sample services created');

    // Create sample products
    const products = [
        { name: 'Dell Inspiron Laptop', description: 'High-performance Dell laptop with Intel i5 processor, 8GB RAM, 512GB SSD. Perfect for professionals.', price: 55000, image: null },
        { name: 'HP Desktop PC', description: 'Reliable HP desktop with AMD Ryzen 5, 16GB RAM, 1TB HDD. Great for home and office use.', price: 45000, image: null },
        { name: 'Canon Printer MX490', description: 'Wireless all-in-one office printer with scan, copy, and fax functions.', price: 12000, image: null },
        { name: 'Lenovo ThinkPad', description: 'Premium Lenovo business laptop with excellent keyboard and long battery life.', price: 75000, image: null },
        { name: 'Samsung CCTV Camera', description: '4MP full-color night vision CCTV camera for round-the-clock surveillance.', price: 3500, image: null },
        { name: 'LG Monitor 24"', description: 'Full HD IPS monitor with crystal clear display. Perfect for gaming and work.', price: 15000, image: null },
    ];

    for (const product of products) {
        await prisma.product.create({ data: product }).catch(() => { });
    }
    console.log('✅ Sample products created');

    // Create sample parts
    const parts = [
        { name: 'NVMe SSD 512GB', partNumber: 'PART-SSD-512', price: 4500, costPrice: 3200, category: 'Storage', stock: 15, hsnCode: '8471', gstRate: 18 },
        { name: 'DDR4 RAM 8GB', partNumber: 'PART-RAM-8GB', price: 2800, costPrice: 2100, category: 'Memory', stock: 25, hsnCode: '8471', gstRate: 18 },
        { name: 'Laptop Battery 4-Cell', partNumber: 'PART-BAT-GEN', price: 3200, costPrice: 2400, category: 'Power', stock: 10, hsnCode: '8506', gstRate: 18 },
        { name: 'USB Wifi Adapter', partNumber: 'PART-WIFI-AD', price: 850, costPrice: 450, category: 'Networking', stock: 50, hsnCode: '8517', gstRate: 18 },
        { name: 'CCTV BNC Connector', partNumber: 'PART-BNC-CON', price: 45, costPrice: 15, category: 'CCTV Accessories', stock: 200, hsnCode: '8536', gstRate: 18 }
    ];

    for (const part of parts) {
        await prisma.part.upsert({
            where: { partNumber: part.partNumber },
            update: part,
            create: part
        }).catch(() => { });
    }
    console.log('✅ Sample parts created');

    // Create sample service charges
    const serviceCharges = [
        { name: 'Basic Diagnostic Fee', code: 'SRV-DIAG-001', price: 500, category: 'Service', duration: 30, gstRate: 18 },
        { name: 'OS Reinstallation (Standard)', code: 'SRV-OS-002', price: 800, category: 'Software', duration: 90, gstRate: 18 },
        { name: 'CCTV Camera Config & Setup', code: 'SRV-CCTV-003', price: 1500, category: 'Installation', duration: 120, gstRate: 18 },
        { name: 'Printer Head Cleaning', code: 'SRV-PRINT-004', price: 450, category: 'Maintenance', duration: 45, gstRate: 18 },
        { name: 'Data Recovery Service Tier 1', code: 'SRV-DATA-005', price: 2500, category: 'Recovery', duration: 180, gstRate: 18 }
    ];

    for (const charge of serviceCharges) {
        await prisma.serviceCharge.upsert({
            where: { code: charge.code },
            update: charge,
            create: charge
        }).catch(() => { });
    }
    console.log('✅ Sample service charges created');

    console.log('🎉 Database seeded successfully!');
}

main()
    .catch((e) => { console.error(e); process.exit(1); })
    .finally(async () => { await prisma.$disconnect(); });
