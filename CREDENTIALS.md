# Default Credentials & Password Policy
## KZ COMPUTERS - Suraksha_wb Platform

**Last Updated:** 2026-09-07  
**Security Level:** Internal Use Only

---

## 1. Default Credentials

### 1.1 Super Admin (System Default)

The system comes with a **default Super Admin** account that is created when you first run the database seed.

| Field | Value |
|-------|-------|
| **Username** | `superadmin` |
| **Email** | `admin@suraksha.com` |
| **Password** | `Admin@1234` |
| **Role** | Super Admin |
| **Status** | Active |

**How to change this password:**
1. Login with the default credentials
2. Go to **Admin Panel** → **Agents**
3. Find the superadmin account
4. Edit the password field and save

**Important:** After first login, change the default password immediately to something secure.

### 1.2 Admin Accounts

**No default Admin accounts exist.** Admins must be created by the Super Admin.

**How to create an Admin:**
1. Login as Super Admin
2. Go to **Admin Panel** → **Agents**
3. Click **"Add Staff"**
4. Fill in:
   - Username
   - Email Address
   - Password (minimum 6 characters)
   - Role: Select **Admin**
5. Click **"Add Staff"**
6. The admin account is created with **Pending** status
7. The admin must verify their email via OTP
8. You can approve them from the Agents page

### 1.3 Agent Accounts

**No default Agent accounts exist.** Agents can be created in two ways:

**Option A: Created by Super Admin or Admin**
1. Login as Super Admin or Admin
2. Go to **Admin Panel** → **Agents**
3. Click **"Add Staff"**
4. Fill in:
   - Username
   - Email Address
   - Password (minimum 6 characters)
   - Role: Select **Agent**
5. Click **"Add Staff"**
6. The agent account is created with **Pending** status
7. The agent must verify their email via OTP
8. You can approve them from the Agents page

**Option B: Self-Registration**
1. Agent goes to `/admin/register`
2. Enters Username, Email, Password, and selects Role: Agent
3. Verifies email via OTP
4. Account is created with **Pending** status
5. Super Admin must approve in **Admin Panel** → **Agents**

### 1.4 Customer/User Accounts

**No default Customer accounts exist.** Customers must register themselves.

**How customers register:**
1. Go to `/login`
2. Click **"Create Account"**
3. Fill in:
   - Full Name
   - Email Address
   - Phone Number
   - Password (minimum 6 characters)
4. Click **"Send OTP"**
5. Enter the 6-digit OTP sent to email
6. Click **"Verify & Create Account"**
7. Customer is automatically logged in

---

## 2. Password Policy

### 2.1 Minimum Requirements
- **Length:** Minimum 6 characters
- **Complexity:** No enforced complexity rules (but recommended: mix of uppercase, lowercase, numbers, symbols)
- **Change Frequency:** No enforced expiration (but recommended to change every 90 days)

### 2.2 Recommended Password Rules
For security, all users should follow these guidelines:
- Minimum 8 characters
- At least one uppercase letter (A-Z)
- At least one lowercase letter (a-z)
- At least one number (0-9)
- At least one special character (!@#$%^&*)

### 2.3 Password Examples (DO NOT USE THESE)
```
❌ Admin@123
❌ Password123
❌ 12345678
❌ KZ Computers
```

**Good Examples:**
```
✅ KZ@Support2024!
✅ Service#8971132109
✅ Computer@Repair99
```

---

## 3. User Roles & Permissions

| Feature | Super Admin | Admin | Agent | Customer |
|---------|-------------|-------|-------|----------|
| **Login URL** | `/admin/login` | `/admin/login` | `/admin/login` | `/login` |
| **Access Admin Panel** | Yes | Yes | Yes | No |
| **View All Tickets** | Yes | Yes | Own only | Own only |
| **Create Tickets** | Yes | Yes | Yes | Own only |
| **Assign Tickets** | Yes | Yes | Yes (not to Super Admin) | No |
| **Generate Invoices** | Yes (immediate) | Yes (pending approval) | Yes (pending approval) | No |
| **Manage Products** | Yes | Yes | No | No |
| **Manage Services** | Yes | Yes | No | No |
| **Manage Sliders** | Yes | Yes | No | No |
| **Manage Parts/Charges** | Yes | Yes | No | No |
| **Manage Staff** | Yes | Yes | No | No |
| **Approve Staff** | Yes | No | No | No |
| **Approve Changes** | Yes | No | No | No |
| **Appearance Settings** | Yes | No | No | No |
| **Data Export** | Yes | Yes | No | No |
| **Track Tickets** | Yes | Yes | Yes | Yes |
| **Request Quotes** | Yes | Yes | Yes | Yes |
| **Accept Quotes** | No | No | No | Yes |

---

## 4. Account Creation Checklist

### 4.1 Creating a New Staff Member (Admin or Agent)

**For Super Admin/Admin:**
- [ ] Go to `/admin/agents`
- [ ] Click **"Add Staff"**
- [ ] Enter username (letters, spaces, hyphens only)
- [ ] Enter email address
- [ ] Enter password (minimum 6 characters)
- [ ] Select role (Admin or Agent)
- [ ] Click **"Add Staff"**
- [ ] Inform the new staff member to check email for OTP
- [ ] After OTP verification, approve the staff member in Agents page
- [ ] Share login credentials securely (phone/WhatsApp/in-person)

**For Staff Self-Registration:**
- [ ] Go to `/admin/register`
- [ ] Enter username, email, password
- [ ] Select role
- [ ] Verify email with OTP
- [ ] Wait for Super Admin approval
- [ ] After approval, login at `/admin/login`

### 4.2 Creating a New Customer

**Customer self-registers:**
- [ ] Go to `/login`
- [ ] Switch to Register tab
- [ ] Enter full name, email, phone, password
- [ ] Verify email with OTP
- [ ] Customer is now active and can login

**OR Admin creates customer ticket manually:**
- [ ] Go to `/admin/tickets`
- [ ] Click **"Create Ticket"**
- [ ] Enter customer details
- [ ] System creates ticket; customer can track via token

---

## 5. Password Reset Procedures

### 5.1 Customer Password Reset

1. Go to `/forgot-password`
2. Enter email address or phone number
3. Click **"Send OTP"**
4. Check email for 6-digit OTP
5. Enter OTP and new password
6. Click **"Reset Password"**
7. Login with new password

### 5.2 Staff Password Reset

1. Go to `/admin/forgot-password`
2. Enter email address
3. Click **"Send OTP"**
4. Check email for 6-digit OTP
5. Enter OTP and new password
6. Click **"Reset Password"**
7. Login at `/admin/login`

### 5.3 Super Admin Password Reset

If Super Admin forgets password:
1. Use `/admin/forgot-password` with the superadmin email
2. Or directly reset via database using Prisma Studio:
   ```bash
   npm run prisma:studio
   ```
3. Navigate to `Admin` table
4. Find superadmin record
5. Update password field with bcrypt hash

---

## 6. Security Best Practices

### 6.1 For All Users
- Never share passwords via email or unencrypted chat
- Use different passwords for different systems
- Change default passwords immediately
- Log out when leaving computer unattended
- Report suspicious activity to Super Admin

### 6.2 For Super Admin
- Change default superadmin password immediately after first setup
- Regularly review agent list and remove inactive accounts
- Monitor approval queue for suspicious changes
- Use strong, unique password for superadmin account
- Enable 2FA if available in email provider

### 6.3 Password Storage
- All passwords are stored as **bcrypt hashes** in the database
- Plain text passwords are never stored
- Password comparison uses bcrypt.compare()

---

## 7. Quick Reference

### 7.1 Login URLs

| Role | Login URL | Forgot Password URL |
|------|-----------|---------------------|
| Customer | `/login` | `/forgot-password` |
| Agent | `/admin/login` | `/admin/forgot-password` |
| Admin | `/admin/login` | `/admin/forgot-password` |
| Super Admin | `/admin/login` | `/admin/forgot-password` |

### 7.2 Registration URLs

| Role | Registration URL |
|------|-----------------|
| Customer | `/login` (Register tab) |
| Agent/Admin | `/admin/register` |

### 7.3 Default Credentials Summary

| Role | Default Username | Default Email | Default Password | Created By |
|------|-----------------|---------------|------------------|------------|
| Super Admin | `superadmin` | `admin@suraksha.com` | `Admin@1234` | System Seed |
| Admin | *None* | *Set at creation* | *Set at creation* | Super Admin |
| Agent | *None* | *Set at creation* | *Set at creation* | Super Admin/Self |
| Customer | *None* | *Set at registration* | *Set at registration* | Self |

---

## 8. Troubleshooting

### 8.1 Cannot Login
- Verify username/email and password are correct
- Check if account is **Pending** (wait for approval)
- Check if account is **Active**
- Use **Forgot Password** to reset
- Clear browser cache and cookies

### 8.2 OTP Not Received
- Check spam/junk folder
- Wait 2 minutes and resend
- Verify email address is correct
- Check email service configuration in `.env`

### 8.3 Account Stuck in Pending
- Super Admin must approve in `/admin/agents`
- Check email for OTP verification (if not verified)
- Contact Super Admin for approval

---

## 9. Environment Variables for Initial Setup

In your `.env` file, you can customize the default superadmin:

```env
# Initial Super Admin (set on first run)
INITIAL_SUPERADMIN_EMAIL="admin@yourdomain.com"
INITIAL_SUPERADMIN_PASSWORD="YourSecurePassword123!"
INITIAL_SUPERADMIN_USERNAME="superadmin"
```

If these are not set, the system uses:
- Email: `admin@suraksha.com`
- Password: `Admin@1234`
- Username: `superadmin`

**After first run, change these via the admin panel.**

---

*End of Credentials Document*
