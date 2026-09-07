# Standard Operating Procedure (SOP)
## KZ COMPUTERS - Suraksha_wb Platform

**Version:** 1.0  
**Last Updated:** 2026-09-07  
**Company:** KZ COMPUTERS  
**Address:** NO.483 & 484, Nimishamba, Square Amrutahalli, Amruthahalli, Bangalore, Bangalore North, Karnataka, India, 560092  
**GSTIN:** 29AANCK0673R1ZL  
**CIN:** U62099KA2026PTC224499  
**Phone:** 8971132109  
**Email:** sales.kzcomputers@gmail.com

---

## Table of Contents
1. [Customer SOP](#1-customer-sop)
2. [Staff (Agent) SOP](#2-staff-agent-sop)
3. [Admin SOP](#3-admin-sop)
4. [Super Admin SOP](#4-super-admin-sop)
5. [Common Issues & Troubleshooting](#5-common-issues--troubleshooting)

---

## 1. Customer SOP

### 1.1 Overview
Customers are end-users who need IT services, repairs, or products from KZ COMPUTERS. They can use the platform to raise service tickets, track repair status, request quotes, and accept/Reject quotes.

### 1.2 Customer Registration & Login

#### How to Register as a Customer:
1. Go to `https://suraksha.kzcomputers.com/login`
2. Click on **"Create Account"** or switch to the **Register** tab
3. Fill in the following details:
   - **Full Name** (letters, spaces, hyphens, apostrophes only)
   - **Email Address** (valid email format)
   - **Phone Number** (10-15 digits, no special characters)
   - **Password** (minimum 6 characters)
4. Click **"Send OTP"**
5. Check your email for the 6-digit OTP code
6. Enter the OTP in the verification field
7. Click **"Verify & Create Account"**
8. You will be automatically logged in

#### How to Login:
1. Go to `https://suraksha.kzcomputers.com/login`
2. Enter your **Email Address** and **Password**
3. Click **"Login"**
4. You will be redirected to your Customer Dashboard

#### How to Reset Forgotten Password:
1. Go to `https://suraksha.kzcomputers.com/forgot-password`
2. Enter your **Email Address** or **Phone Number**
3. Click **"Send OTP"**
4. Check your email for the 6-digit OTP
5. Enter the OTP and your **New Password**
6. Click **"Reset Password"**
7. Login with your new password

### 1.3 Raising a Service Ticket

Customers can raise tickets as a **Guest** (without login) or as a **Logged-in Customer**.

#### As a Guest (No Login Required):
1. Go to `https://suraksha.kzcomputers.com/raise-ticket`
2. Fill in the form:
   - **Full Name** (required)
   - **Email Address** (required)
   - **Phone Number** (required)
   - **Product Type** (Laptop/Desktop/CCTV/Printer/Networking/Other)
   - **Service Type** (Repair/Installation/Maintenance/Other)
   - **Priority** (Low/Medium/High)
   - **Subject** (brief description of the issue)
   - **Description** (detailed problem description)
   - **Image Upload** (optional - attach a photo of the issue)
3. Click **"Submit Ticket"**
4. You will receive a **Ticket Number** and **Tracking Link**
5. Save the tracking link to check status later

#### As a Logged-in Customer:
1. Go to `https://suraksha.kzcomputers.com/raise-ticket`
2. Your **Name, Email, and Phone** will be auto-filled
3. Fill in the remaining fields:
   - **Product Type**
   - **Service Type**
   - **Priority**
   - **Subject**
   - **Description**
   - **Image Upload** (optional)
4. Click **"Submit Ticket"**
5. You will receive a **Ticket Number** and **Tracking Link**

### 1.4 Tracking a Ticket

#### Method 1: Using Tracking Link
- Use the link provided in your confirmation email
- Format: `https://suraksha.kzcomputers.com/track/[token]`
- You will see the current status and full timeline

#### Method 2: Search by Ticket Number
1. Go to `https://suraksha.kzcomputers.com/track`
2. Enter your **Ticket Number** (e.g., TK-1001)
3. Click **"Track Ticket"**
4. You will see:
   - Current status (Open/In Progress/Pending Parts/Completed/Closed)
   - Full timeline of updates with timestamps
   - Any invoices generated for the ticket

### 1.5 Browsing Products & Requesting Quotes

#### Viewing Products:
1. Go to `https://suraksha.kzcomputers.com/products`
2. Browse products in grid or list view
3. Use **Search** to find specific products
4. Use **Filters** to filter by category
5. Use **Sort** options (Featured, Price, Name, Newest)
6. Click on a product card to view full details

#### Requesting a Quote:
1. On the **Products** page or **Product Detail** page
2. Click on the **"Request Quote"** button
3. An inline form will expand
4. Fill in:
   - **Full Name**
   - **Email Address**
   - **Phone Number**
   - **Notes** (optional - specific requirements)
5. Click **"Submit Quote Request"**
6. You will receive a confirmation

### 1.6 Accepting or Rejecting a Quote

1. You will receive an email with a quote link
2. Click the link or go to `https://suraksha.kzcomputers.com/quote/[token]`
3. Review the quote details:
   - Quote validity (30 days from creation)
   - Customer information
   - Itemized list with quantities, MRP, and selling price
   - Total amount
4. Click **"Accept Quote"** or **"Reject Quote"**
5. You will see a confirmation message

**Note:** Once you respond, the buttons will be disabled and you cannot change your response.

### 1.7 Customer Dashboard

1. After logging in, go to `https://suraksha.kzcomputers.com/dashboard`
2. You will see:
   - **Total Tickets**: Count of all your tickets
   - **Active Requests**: Count of Open tickets
   - **Fixed & Closed**: Count of Completed/Closed tickets
3. **Tickets Table** showing:
   - Ticket #
   - Product/Service
   - Status
   - Latest Update
   - Date
   - Track button
4. Use filters to view tickets by status
5. Click **"Raise New Ticket"** to create a new ticket
6. Click **"Track"** to view ticket details

### 1.8 Theme Toggle
- Click the **Sun/Moon icon** in the bottom-right corner to switch between Dark and Light mode

---

## 2. Staff (Agent) SOP

### 2.1 Overview
Staff members (Agents) are technicians who handle customer tickets, perform repairs, and generate invoices. They have access to the Admin Panel with limited permissions.

### 2.2 Staff Login

1. Go to `https://suraksha.kzcomputers.com/admin/login`
2. Enter your **Username** and **Password**
3. Click **"Login"**
4. You will be redirected to the **Agent Workbench** (`/admin`)

**Session Timeout:** After 10 minutes of inactivity, you will see a warning modal. Click **"Stay Logged In"** to continue or **"Logout Now"** to exit.

### 2.3 Agent Dashboard

1. After login, you will see the **Agent Dashboard** (`/admin`)
2. **Stats Cards:**
   - **Assigned Tickets**: Tickets currently assigned to you
   - **Active Repairs**: Tickets in progress
   - **Completed Tasks**: Finished tickets
   - **Urgent Tickets**: High-priority tickets not yet closed
3. **Recent Tickets**: Last 10 tickets assigned to you
4. **Service Distribution**: Breakdown by service type
5. **Technician Alert**: Shows count of open tickets awaiting response >24 hours

### 2.4 Managing Tickets

#### Viewing Your Tickets:
1. Go to **Tickets** in the sidebar (`/admin/tickets`)
2. You will see only tickets assigned to you
3. Use **Search** to find tickets by ID, customer name, or email

#### Taking Over an Unassigned Ticket:
1. Find an unassigned ticket in the list
2. Click the **"Take Over"** button
3. The ticket will be assigned to you

#### Updating Ticket Status:
1. Click on a ticket to open the **Ticket Detail Modal**
2. In the **Ticket Updates** section, you can:
   - Change status (Open → In Progress → Pending Parts → Completed → Closed)
   - Add a comment/note
3. Click **"Add Update"**

#### Assigning a Ticket:
1. Open the ticket detail modal
2. Click **"Assign"**
3. Select an agent or admin from the dropdown
4. Click **"Assign"** to confirm
5. **Note:** You cannot assign tickets to Superadmin

#### Deleting a Ticket:
1. Open the ticket detail modal
2. **Important:** Only tickets with status **Completed** or **Closed** can be deleted
3. Click **"Delete Ticket"**
4. Confirm the deletion

### 2.5 Generating Invoices

#### Creating an Invoice from a Ticket:
1. Open the ticket detail modal
2. Go to the **Billing** section
3. Add items using one of these methods:
   - **From Service Presets**: Select from predefined services
   - **From Parts Presets**: Select from predefined parts
   - **Custom Item**: Enter description, quantity, MRP, and selling price
4. Check **"Excluding GST"** if GST should not be included
5. Review the auto-calculated totals:
   - Subtotal
   - GST (if applicable)
   - Grand Total
6. Click **"Generate Invoice"** to save (requires Superadmin approval)
7. Or click **"Send Invoice"** to save and email to customer (requires Superadmin approval)

#### Invoice Status:
- When you generate an invoice, it goes to the **Superadmin Approval Queue**
- The Superadmin will review and approve it
- Once approved, the PDF is generated and emailed to the customer

### 2.6 Creating Quotes from Tickets

1. Open the ticket detail modal
2. Click **"Send Quote"**
3. The quote form opens with customer details pre-filled
4. Add quote items:
   - Description
   - Quantity
   - Unit (NOS, KG, MTR, etc.)
   - MRP (Maximum Retail Price)
   - Selling Price
5. Add a message/note for the customer
6. Click **"Create & Send Quote"**
7. The quote is sent to the customer's email with a response link

### 2.7 What Agents Cannot Do

Agents **DO NOT** have access to:
- Product Management
- Service Management
- Slider Management
- Group Service / Parts Management
- Appearance Settings
- Staff Management
- Approval Queue
- Data Export

---

## 3. Admin SOP

### 3.1 Overview
Admins have full access to the Admin Panel. They can manage products, services, tickets, quotes, agents, and generate invoices. They can also approve staff registrations.

### 3.2 Admin Login

1. Go to `https://suraksha.kzcomputers.com/admin/login`
2. Enter your **Username** and **Password**
3. Click **"Login"**
4. You will be redirected to the **Administrator Panel** (`/admin`)

**Session Timeout:** After 10 minutes of inactivity, you will see a warning modal. Click **"Stay Logged In"** to continue or **"Logout Now"** to exit.

### 3.3 Admin Dashboard

1. After login, you will see the **Admin Dashboard** (`/admin`)
2. **Stats Cards:**
   - **Total Tickets**: All tickets in the system
   - **Open Queries**: Tickets with Open status
   - **Fixed Today**: Tickets completed today
   - **Products Live**: Number of active products
3. **Recent Tickets**: Last 10 system-wide tickets
4. **Service Distribution**: Breakdown by service type
5. **Export Data Button**: Quick access to data export

### 3.4 Ticket Management

#### Viewing All Tickets:
1. Go to **Tickets** in the sidebar (`/admin/tickets`)
2. You will see all tickets (no assignment filter)
3. Use **Search** to find tickets by ID, customer name, or email

#### Creating a Ticket Manually:
1. In the Tickets page, click **"Create Ticket"**
2. Fill in:
   - **Customer Name** (letters, spaces, hyphens, apostrophes only)
   - **Email Address**
   - **Phone Number** (digits only, max 15 characters)
   - **Product Type**
   - **Service Type**
   - **Priority**
   - **Subject**
   - **Description**
   - **Image Upload** (optional)
3. Click **"Create Ticket"**

#### Ticket Actions:
- **Assign**: Assign to any agent or admin (not Superadmin)
- **Update Status**: Change status and add comments
- **Generate Invoice**: Create and send invoice to customer
- **Send Quote**: Create and send quote to customer
- **Delete**: Only Completed/Closed tickets can be deleted

### 3.5 Quote Management

#### Viewing All Quotes:
1. Go to **Quotes** in the sidebar (`/admin/quotes`)
2. You will see all quote requests with:
   - Customer details
   - Items and amounts
   - Status (Pending/Sent/Accepted/Rejected)
   - Date created

#### Creating a New Quote Manually:
1. Click **"Create Quote"**
2. Fill in:
   - **Customer Name**
   - **Email Address**
   - **Phone Number**
   - **Message/Notes** for the customer
3. Add quote items:
   - **Description**
   - **Quantity**
   - **Unit** (NOS, KG, MTR, LTR, etc.)
   - **MRP** (Maximum Retail Price)
   - **Selling Price**
4. Review the auto-calculated total
5. Click **"Create & Send Quote"**
6. The quote is sent to the customer's email

#### Downloading a Quote:
1. Find the quote in the list
2. Click the **Download** icon
3. The quote PDF will be downloaded

#### Deleting a Quote:
1. Find the quote in the list
2. Click the **Delete** icon
3. Confirm the deletion

### 3.6 Product Management

#### Viewing Products:
1. Go to **Products** in the sidebar (`/admin/products`)
2. You can switch between **Grid View** and **List View**
3. Use **Search** to find products by name or category

#### Creating a Product:
1. Click **"Add Product"**
2. Fill in:
   - **Product Name** (letters, numbers, spaces, hyphens only)
   - **Description** (detailed product description)
   - **Price (INR)** (numeric, can include decimals)
   - **Category** (e.g., Laptop, Printer, CCTV)
   - **Stock** (whole number, minimum 0)
   - **Display Order** (whole number, for sorting)
   - **Asset / Catalogue ID** (e.g., KZ-ASSET-001)
   - **Image** (upload product image)
   - **Featured**: Check to show on homepage
   - **Active**: Check to show in public catalogue
3. Click **"Create Product"**

#### Editing a Product:
1. Find the product in the list
2. Click the **Edit** icon
3. Update the fields
4. Click **"Update Product"**

#### Deleting a Product:
1. Find the product in the list
2. Click the **Delete** icon
3. Confirm the deletion

#### Sharing a Product:
1. Find the product in the list
2. Click the **Share** icon
3. The product URL is copied to your clipboard

**Note:** Product creation/update/delete goes to Superadmin approval queue.

### 3.7 Service Management

#### Viewing Services:
1. Go to **Services** in the sidebar (`/admin/services`)
2. You will see all services in a grid layout

#### Creating a Service:
1. Click **"Add Service"**
2. Fill in:
   - **Service Title** (letters, spaces, hyphens only)
   - **Description** (detailed service description)
   - **Image** (upload service image)
3. Click **"Create Service"**

#### Editing/Deleting a Service:
1. Find the service in the grid
2. Click **Edit** to modify or **Delete** to remove

**Note:** Service creation/update/delete goes to Superadmin approval queue.

### 3.8 Slider Management (Homepage Banners)

#### Viewing Sliders:
1. Go to **Sliders** in the sidebar (`/admin/sliders`)
2. You will see all homepage sliders in order

#### Creating a Slider:
1. Click **"Add Slider"**
2. Fill in:
   - **Title** (short headline)
   - **Subtitle** (supporting text)
   - **Description** (detailed description)
   - **Image** (banner image)
   - **Link URL** (e.g., /products or https://...)
   - **Button Text** (e.g., "Shop Now", "Learn More")
   - **Display Order** (whole number, for sorting)
   - **Start Date** (optional - when to start showing)
   - **End Date** (optional - when to stop showing)
   - **Active**: Check to show on homepage
3. Click **"Create Slider"**

#### Editing a Slider:
1. Find the slider in the list
2. Click **"Edit"** to expand the inline form
3. Update fields
4. Click **"Save"**

#### Deleting a Slider:
1. Find the slider in the list
2. Click **"Delete"**
3. Confirm the deletion

### 3.9 Group Service / Billing

#### Parts Management:
1. Go to **Group Service** in the sidebar
2. **Parts** tab:
   - **Create Part**: Name, Part Number, Category, Description, Selling Price, Cost Price, HSN Code, GST Rate, Stock, Min Stock Alert, Unit, Image
   - **Edit/Delete** parts as needed

#### Service Charges Management:
1. **Service Charges** tab:
   - **Create Charge**: Name, Code, Category (Labor/Visit/Diagnostic/etc.), Description, Price, GST Rate, Duration (minutes)
   - **Edit/Delete** charges as needed

#### Bill Generator:
1. **Bill Generator** tab:
   - Add parts by clicking **"Add Part"** and selecting from dropdown
   - Add service charges by clicking **"Add Service"** and selecting from dropdown
   - Add custom items with description, quantity, and price
   - Check **"Excluding GST"** if applicable
   - Review auto-calculated subtotal, GST, and total
   - Click **"Generate Bill"** to create a printable HTML bill

### 3.10 Agent Management

#### Viewing All Staff:
1. Go to **Agents** in the sidebar (`/admin/agents`)
2. You will see cards for all agents/admins with:
   - Username
   - Role
   - Email
   - Status (Pending/Active)
   - Creation Date

#### Approving Pending Staff:
1. Find a staff member with **"Pending"** status
2. Click the **"Approve"** button
3. The staff member can now log in

#### Adding New Staff:
1. Click **"Add Staff"**
2. Fill in:
   - **Username**
   - **Email Address**
   - **Password**
   - **Role** (Agent or Admin)
3. Click **"Add Staff"**
4. The staff account is created with **Pending** status
5. The staff member must verify their email via OTP
6. You can approve them from this page

#### Deleting Staff:
1. Find the staff member in the list
2. Click the **Delete** icon
3. Confirm the deletion
4. **Restrictions:**
   - You cannot delete Superadmins
   - You cannot delete other Admins
   - You cannot delete yourself
   - At least one Admin must remain in the system

### 3.11 Data Export

1. Go to **Export** in the sidebar (`/admin/export`)
2. **Step 1: Select Entity**
   - Choose from: Tickets, Customers, Invoices, Products, Quote Requests, Agents/Admins, Services
3. **Step 2: Select Fields**
   - Choose specific fields to export for the selected entity
4. **Step 3: Apply Filters** (if available)
   - Status, Priority, Date Range, Amount Range
5. **Step 4: Choose Format**
   - Excel (.xlsx)
   - CSV
   - JSON
6. Click **"Export Data"**
7. Wait for the export to complete
8. Download the file

### 3.12 Invoice Approval Queue (For Non-Superadmin Admins)

**Important:** When you generate an invoice from a ticket, it does not get created immediately. It goes to the Superadmin approval queue.

1. After generating an invoice, the ticket will show **"Invoice Pending"**
2. The Superadmin will review and approve the invoice
3. Once approved, the PDF is generated and emailed to the customer
4. You can check the ticket status to see if the invoice has been approved

---

## 4. Super Admin SOP

### 4.1 Overview
Super Admin has the highest level of access. They control the entire system including appearance settings, staff approvals, invoice approvals, and all admin functions.

### 4.2 Super Admin Login

1. Go to `https://suraksha.kzcomputers.com/admin/login`
2. Enter your **Username** and **Password**
3. Click **"Login"**
4. You will be redirected to the **Super Admin Control Panel** (`/admin`)

**Session Timeout:** After 10 minutes of inactivity, you will see a warning modal. Click **"Stay Logged In"** to continue or **"Logout Now"** to exit.

### 4.3 Super Admin Dashboard

Same as Admin Dashboard with additional access to:
- Approvals Queue
- Appearance Settings
- Full Agent Management

### 4.4 Staff Registration Approval

#### Viewing Pending Registrations:
1. Go to **Agents** in the sidebar (`/admin/agents`)
2. You will see all staff with their status
3. Pending staff will have an **"Approve"** button

#### Approving a Staff Registration:
1. Find the staff member with **"Pending"** status
2. Click the **"Approve"** button
3. The staff member's status changes to **Active**
4. They can now log in to the system

#### Rejecting a Staff Registration:
1. Find the staff member with **"Pending"** status
2. Click the **"Delete"** icon
3. Confirm the deletion
4. The staff account is removed from the system

### 4.5 Approval Queue (Pending Updates)

When Admins or Agents create/update/delete products, services, or invoices, those changes go to your approval queue.

#### Viewing Pending Updates:
1. Go to **Approvals** in the sidebar (`/admin/approvals`)
2. You will see a list of pending updates with:
   - **Entity Type**: Product_Create, Product_Update, Product_Delete, Service_Create, Service_Update, Service_Delete, Invoice_Create
   - **Entity ID**: The ID of the affected record
   - **Data**: The changes requested
   - **Submitted By**: Who submitted the request
   - **Status**: Pending/Approved/Rejected
   - **Date Created**

#### Approving an Update:
1. Find the pending update
2. Review the changes in the **Data** section
3. Click **"Approve"**
4. The system will execute the actual database operation
5. The status changes to **Approved**

#### Rejecting an Update:
1. Find the pending update
2. Review the changes
3. Click **"Reject"**
4. The status changes to **Rejected**
5. The changes are NOT applied

**Important Approvals to Watch:**
- **Invoice_Create**: When an agent generates an invoice, approve it to send the PDF to the customer
- **Product_Create/Update/Delete**: New products or changes to existing products
- **Service_Create/Update/Delete**: New services or changes to existing services

### 4.6 Appearance Settings (Branding Control)

1. Go to **Appearance** in the sidebar (`/admin/appearance`)
2. **Color Scheme:**
   - **Primary Accent**: Enter a hex color (e.g., #003B73) - used for buttons, links, highlights
   - **Secondary Glow**: Enter a hex color (e.g., #00D4FF) - used for glows and gradients
   - See the **Live Preview** at the bottom of the page
3. **Typography:**
   - **Font Family**: Choose from Inter, Roboto, Montserrat, Outfit
4. **Interface Mode:**
   - **Dark Glass**: Dark theme with glassmorphism effects
   - **Light Minimal**: Light theme with clean minimal design
5. Click **"Save Changes"**
6. The changes apply immediately across the entire website

### 4.7 All Admin Functions

As Super Admin, you have access to ALL admin features listed in Section 3:
- Ticket Management
- Quote Management
- Product Management
- Service Management
- Slider Management
- Group Service / Billing
- Agent Management (including approval)
- Data Export

### 4.8 Invoice Management

Since you are Super Admin, when you generate an invoice from a ticket:
1. The invoice is created **immediately** (no approval needed)
2. PDF is generated and saved
3. Email is sent to the customer automatically
4. The ticket is updated with the invoice details

---

## 5. Common Issues & Troubleshooting

### 5.1 Customer Issues

| Issue | Solution |
|-------|----------|
| Cannot login | Check email and password are correct; use "Forgot Password" to reset |
| OTP not received | Check spam folder; wait 2 minutes and resend |
| Ticket not found | Verify ticket number is correct; use the tracking link from email |
| Quote link expired | Quote links are valid for 30 days; contact support for a new quote |
| Image upload fails | Ensure image is JPG/PNG and under 5MB |

### 5.2 Staff Issues

| Issue | Solution |
|-------|----------|
| Cannot login | Account may be pending approval; contact Super Admin |
| Session expired | Login again; session timeout is 10 minutes |
| Ticket not assigned to me | Use "Take Over" button for unassigned tickets |
| Cannot delete ticket | Ticket must be Completed or Closed status |
| Invoice not sending | Super Admin needs to approve invoices |

### 5.3 Admin Issues

| Issue | Solution |
|-------|----------|
| Product/Service not appearing on website | Ensure "Active" checkbox is checked |
| Changes not reflecting | Clear browser cache; check if Super Admin approved the change |
| Cannot assign ticket to Super Admin | System restriction - Super Admin cannot be assigned tickets |
| Export not working | Check if you selected at least one entity and one field |

### 5.4 Super Admin Issues

| Issue | Solution |
|-------|----------|
| Staff registration pending | Go to Agents page and approve the registration |
| Invoice not sent | Go to Approvals page and approve the Invoice_Create request |
| Appearance changes not showing | Click "Save Changes"; clear browser cache |
| Cannot delete last Admin | System requires at least one Admin; create a new Admin first |

---

## 6. Quick Reference

### 6.1 Important URLs

| Role | URL | Purpose |
|------|-----|---------|
| Customer | `/` | Homepage |
| Customer | `/products` | Browse products |
| Customer | `/raise-ticket` | Raise a ticket |
| Customer | `/track` | Track ticket |
| Customer | `/login` | Login/Register |
| Customer | `/dashboard` | Customer dashboard |
| Staff | `/admin/login` | Staff login |
| Staff | `/admin` | Agent dashboard |
| Staff | `/admin/tickets` | Manage tickets |
| Admin | `/admin/products` | Manage products |
| Admin | `/admin/services` | Manage services |
| Admin | `/admin/quotes` | Manage quotes |
| Admin | `/admin/agents` | Manage staff |
| Admin | `/admin/export` | Export data |
| Super Admin | `/admin/approvals` | Approval queue |
| Super Admin | `/admin/appearance` | Branding settings |

### 6.2 Ticket Status Flow

```
Open → In Progress → Pending Parts → Completed → Closed
```

### 6.3 Quote Status Flow

```
Pending → Sent → Accepted/Rejected
```

### 6.4 Staff Approval Flow

```
Staff Registers → Pending Status → Super Admin Approves → Active Status → Can Login
```

### 6.5 Invoice Flow

```
Admin/Agent Creates Invoice → Pending Update → Super Admin Approves → PDF Generated → Email Sent
```

---

## 7. Contact & Support

For technical issues with the platform:
- **Email:** sales.kzcomputers@gmail.com
- **Phone:** 8971132109
- **Company:** KZ COMPUTERS
- **Address:** NO.483 & 484, Nimishamba, Square Amrutahalli, Amruthahalli, Bangalore, Bangalore North, Karnataka, India, 560092

---

*End of SOP Document*
