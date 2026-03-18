PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
    "id"                    TEXT PRIMARY KEY NOT NULL,
    "checksum"              TEXT NOT NULL,
    "finished_at"           DATETIME,
    "migration_name"        TEXT NOT NULL,
    "logs"                  TEXT,
    "rolled_back_at"        DATETIME,
    "started_at"            DATETIME NOT NULL DEFAULT current_timestamp,
    "applied_steps_count"   INTEGER UNSIGNED NOT NULL DEFAULT 0
);
INSERT INTO _prisma_migrations VALUES('740f1125-49f9-481b-8488-329cd9f0c99a','9ab31c4e4461f16d4e447887a3eae7bffa1cb36ea33d750e8cb47f001696728a',1772084505853,'20260226054145_init',NULL,NULL,1772084505850,1);
CREATE TABLE IF NOT EXISTS "admins" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'agent',
    "status" TEXT NOT NULL DEFAULT 'pending',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO admins VALUES(1,'superadmin','admin@suraksha.com','$2b$10$8YhXj1AqzTcj7EU0l9YPKO4AwLuCvMbXszpvPLZn/V1Y6hA5hCZPO','admin','active',1772084518396);
CREATE TABLE IF NOT EXISTS "customers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO customers VALUES(1,'pranav','pranav4417@outlook.com','5555555555','$2b$10$ZNnaZhioiIKBvC5GHqNRh.5.fTQUzEquObp80fBRitQ10X4QqHYD2',1,1772085582771);
CREATE TABLE IF NOT EXISTS "products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DECIMAL,
    "image" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO products VALUES(1,'Dell Inspiron Laptop','High-performance Dell laptop with Intel i5 processor, 8GB RAM, 512GB SSD. Perfect for professionals.',55000,NULL,1772084518404);
INSERT INTO products VALUES(2,'HP Desktop PC','Reliable HP desktop with AMD Ryzen 5, 16GB RAM, 1TB HDD. Great for home and office use.',45000,NULL,1772084518405);
INSERT INTO products VALUES(3,'Canon Printer MX490','Wireless all-in-one office printer with scan, copy, and fax functions.',12000,NULL,1772084518406);
INSERT INTO products VALUES(4,'Lenovo ThinkPad','Premium Lenovo business laptop with excellent keyboard and long battery life.',75000,NULL,1772084518406);
INSERT INTO products VALUES(5,'Sandisk SD Card','32 Gb',3500,'/uploads/products/1772936417285-Image.jpeg',1772084518407);
INSERT INTO products VALUES(6,'LG Monitor 24"','Full HD IPS monitor with crystal clear display. Perfect for gaming and work.',15000,NULL,1772084518407);
CREATE TABLE IF NOT EXISTS "services" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO services VALUES(1,'Laptop Repair','Professional laptop repair for all brands with genuine spare parts and expert technicians.',NULL,1772084518399);
INSERT INTO services VALUES(2,'CCTV Installation','Complete home and office security camera setup with 24/7 monitoring support.',NULL,1772084518400);
INSERT INTO services VALUES(4,'PC Building','Custom-built desktop PCs with premium components from top brands.',NULL,1772084518402);
INSERT INTO services VALUES(5,'Data Recovery','Safe and secure data recovery from damaged or corrupted storage devices.',NULL,1772084518403);
INSERT INTO services VALUES(6,'Networking Setup','Home and office networking including WiFi, LAN setup, and configuration.',NULL,1772084518404);
CREATE TABLE IF NOT EXISTS "sliders" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS "appearance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "primary_color" TEXT NOT NULL DEFAULT '#6C63FF',
    "secondary_color" TEXT NOT NULL DEFAULT '#FF6584',
    "font_family" TEXT NOT NULL DEFAULT 'Inter, sans-serif',
    "dark_mode" BOOLEAN NOT NULL DEFAULT true,
    "updated_at" DATETIME NOT NULL
);
CREATE TABLE IF NOT EXISTS "otps" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "expires_at" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO otps VALUES(1,'admin@surakshagroup.in','124539',1772086130369,1772085530371);
CREATE TABLE IF NOT EXISTS "ticket_updates" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ticket_id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "comment" TEXT,
    "createdBy" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ticket_updates_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "tickets" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO ticket_updates VALUES(6,5,'Open','Estimate EST-2026-0001 generated for ₹4646.00.','Admin',1772940457427);
INSERT INTO ticket_updates VALUES(7,5,'Open','Estimate EST-2026-0002 generated for ₹34.00.','Admin',1772976676453);
INSERT INTO ticket_updates VALUES(8,5,'Open','Estimate EST-2026-0003 generated for ₹493.00.','Admin',1772980463269);
INSERT INTO ticket_updates VALUES(9,5,'Open','Estimate EST-2026-0004 generated for ₹493.00.','Admin',1772981130963);
INSERT INTO ticket_updates VALUES(10,5,'Open','Invoice EST-2026-0005 sent to customer via email.','Admin',1772981185720);
INSERT INTO ticket_updates VALUES(11,5,'Open','Estimate EST-2026-0005 generated for ₹493.00.','Admin',1772981185725);
INSERT INTO ticket_updates VALUES(12,5,'Open','Estimate EST-2026-0006 generated for ₹493.00.','Admin',1773021383894);
CREATE TABLE IF NOT EXISTS "quote_requests" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customer_id" INTEGER,
    "product_id" INTEGER NOT NULL,
    "guest_email" TEXT,
    "guest_phone" TEXT,
    "message" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "quote_requests_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "quote_requests_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS "tickets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ticket_number" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "service_type" TEXT NOT NULL,
    "customer_name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "priority" TEXT NOT NULL DEFAULT 'Low',
    "status" TEXT NOT NULL DEFAULT 'Open',
    "comments" TEXT,
    "ticket_token" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "assigned_to_id" INTEGER,
    CONSTRAINT "tickets_assigned_to_id_fkey" FOREIGN KEY ("assigned_to_id") REFERENCES "admins" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO tickets VALUES(5,'TCK-LM-20260308-MMH3RB0X53J','Laptop','Repair','PRANAV KANDAKURTHI','07670958135','pranav4417@outlook.com','we','wde',NULL,'Medium','Open',NULL,'01d33af125f345f9c6ceb25c2b2a8e2c',1772935059347,1772935059347,NULL);
CREATE TABLE IF NOT EXISTS "pending_updates" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "entityType" TEXT NOT NULL,
    "entityId" INTEGER,
    "data" TEXT NOT NULL,
    "submittedBy" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS "invoices" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "invoice_number" TEXT NOT NULL,
    "ticket_id" INTEGER NOT NULL,
    "amount" REAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Unpaid',
    "pdf_url" TEXT,
    "items" TEXT,
    "generated_by" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "invoices_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "tickets" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO invoices VALUES(1,'EST-2026-0001',5,4646.0,'Unpaid','/invoices/EST-2026-0001.pdf','[{"desc":"asd","qty":2,"unit":"NOS","price":2323}]','admin',1772940456911,1772940457423);
INSERT INTO invoices VALUES(2,'EST-2026-0002',5,34.0,'Unpaid','/invoices/EST-2026-0002.pdf','[{"desc":"sdaf","qty":1,"unit":"NOS","price":34}]','admin',1772976675717,1772976676451);
INSERT INTO invoices VALUES(3,'EST-2026-0003',5,493.0,'Unpaid','/invoices/EST-2026-0003.pdf','[{"desc":"sdaf","qty":1,"unit":"NOS","price":34},{"desc":"USB Cable","qty":2,"unit":"NOS","price":80},{"desc":"Diagnostic Fee","qty":1,"unit":"NOS","price":299}]','admin',1772980462721,1772980463265);
INSERT INTO invoices VALUES(4,'EST-2026-0004',5,493.0,'Unpaid','/invoices/EST-2026-0004.pdf','[{"desc":"sdaf","qty":1,"unit":"NOS","price":34},{"desc":"USB Cable","qty":2,"unit":"NOS","price":80},{"desc":"Diagnostic Fee","qty":1,"unit":"NOS","price":299}]','admin',1772981130445,1772981130959);
INSERT INTO invoices VALUES(5,'EST-2026-0005',5,493.0,'Unpaid','/invoices/EST-2026-0005.pdf','[{"desc":"sdaf","qty":1,"unit":"NOS","price":34},{"desc":"USB Cable","qty":2,"unit":"NOS","price":80},{"desc":"Diagnostic Fee","qty":1,"unit":"NOS","price":299}]','admin',1772981182436,1772981182949);
INSERT INTO invoices VALUES(6,'EST-2026-0006',5,493.0,'Unpaid','/invoices/EST-2026-0006.pdf','[{"desc":"sdaf","qty":1,"unit":"NOS","price":34},{"desc":"USB Cable","qty":2,"unit":"NOS","price":80},{"desc":"Diagnostic Fee","qty":1,"unit":"NOS","price":299}]','admin',1773021383338,1773021383887);
INSERT INTO sqlite_sequence VALUES('admins',2);
INSERT INTO sqlite_sequence VALUES('services',6);
INSERT INTO sqlite_sequence VALUES('products',6);
INSERT INTO sqlite_sequence VALUES('otps',4);
INSERT INTO sqlite_sequence VALUES('customers',1);
INSERT INTO sqlite_sequence VALUES('tickets',5);
INSERT INTO sqlite_sequence VALUES('ticket_updates',12);
INSERT INTO sqlite_sequence VALUES('invoices',6);
CREATE UNIQUE INDEX "admins_username_key" ON "admins"("username");
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");
CREATE UNIQUE INDEX "tickets_ticket_number_key" ON "tickets"("ticket_number");
CREATE UNIQUE INDEX "tickets_ticket_token_key" ON "tickets"("ticket_token");
CREATE UNIQUE INDEX "invoices_invoice_number_key" ON "invoices"("invoice_number");
COMMIT;
