const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding database...');

    // Create admin user
    const hashedPassword = await bcrypt.hash('Admin@1234', 10);

    await prisma.admin.upsert({
        where: { username: 'admin' },
        update: {},
        create: {
            username: 'admin',
            email: 'admin@suraksha.com',
            password: hashedPassword,
            role: 'admin',
            status: 'active',
        },
    });
    console.log('✅ Admin user created: admin / Admin@1234');

    // Create sample services
    const services = [
        { name: 'Laptop Repair', description: 'Professional laptop repair for all brands with genuine spare parts and expert technicians.', image: null },
        { name: 'CCTV Installation', description: 'Complete home and office security camera setup with 24/7 monitoring support.', image: null },
        { name: 'Printer Services', description: 'Printer cartridge refill, repairs, and troubleshooting for all printer brands.', image: null },
        { name: 'PC Building', description: 'Custom-built desktop PCs with premium components from top brands.', image: null },
        { name: 'Data Recovery', description: 'Safe and secure data recovery from damaged or corrupted storage devices.', image: null },
        { name: 'Networking Setup', description: 'Home and office networking including WiFi, LAN setup, and configuration.', image: null },
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

    console.log('🎉 Database seeded successfully!');
}

main()
    .catch((e) => { console.error(e); process.exit(1); })
    .finally(async () => { await prisma.$disconnect(); });
