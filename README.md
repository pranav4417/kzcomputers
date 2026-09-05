# Suraksha WB - Computer Services Management

A full-stack Next.js application for managing computer services, tickets, quotes, invoices, and customer relationships.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT (jose)
- **Email**: Nodemailer
- **PDF Generation**: jsPDF + jsPDF-AutoTable
- **Export**: xlsx, csv, json
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js >= 18
- PostgreSQL database
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Update .env with your database and service credentials
```

### Database Setup

```bash
# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Seed database (optional)
npm run prisma:seed
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run prisma:generate` | Generate Prisma client |
| `npm run prisma:migrate` | Run database migrations |
| `npm run prisma:seed` | Seed database |
| `npm run prisma:studio` | Open Prisma Studio |

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── admin/              # Admin dashboard pages
│   ├── api/                # API routes
│   ├── dashboard/          # Customer dashboard
│   ├── layout.js           # Root layout
│   └── page.js             # Homepage
├── components/             # Reusable React components
│   ├── ui/                 # Generic UI components
│   ├── layout/             # Layout components (Navbar, Footer, Hero)
│   ├── admin/              # Admin-specific components
│   └── marketing/          # Marketing components (Services, Products)
├── lib/                    # Utility libraries
│   ├── auth.js             # Authentication helpers
│   ├── email.js            # Email sending utilities
│   ├── prisma.js           # Prisma client instance
│   ├── pdfGenerator.js     # PDF generation utilities
│   └── exportUtils.js      # Data export utilities
├── prisma/                 # Database schema and migrations
│   ├── schema.prisma       # Prisma schema
│   └── migrations/         # Migration files
├── public/                 # Static assets
├── scripts/                # Utility scripts
└── middleware.js           # Next.js middleware (auth guards)
```

## Deployment

### Docker (Recommended)

```bash
# Build image
docker build -t suraksha-app .

# Run container
docker run -p 3000:3000 \
  -e DATABASE_URL="your-db-url" \
  -e JWT_SECRET="your-secret" \
  suraksha-app
```

### Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### GoDaddy / cPanel

1. Build the project locally:
   ```bash
   npm run build
   ```

2. Upload the following to your GoDaddy hosting:
   - `.next/` folder
   - `public/` folder
   - `prisma/` folder (for migrations)
   - `package.json`
   - `package-lock.json`
   - `next.config.mjs`
   - `middleware.js`

3. Set environment variables in cPanel:
   - `DATABASE_URL`
   - `JWT_SECRET`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL`
   - `NEXT_PUBLIC_APP_URL`

4. Install dependencies and start:
   ```bash
   npm install --production
   npm run build
   npm start
   ```

### AWS / DigitalOcean / Linode

Use the Dockerfile for consistent deployment:

```bash
# On your server
docker build -t suraksha-app .
docker run -d -p 3000:3000 --env-file .env suraksha-app
```

Or use PM2 for process management:

```bash
npm install -g pm2
pm2 start npm --name "suraksha" -- start
```

## Environment Variables

See `.env.example` for all required variables.

### Database

The app uses PostgreSQL. For GoDaddy or other shared hosting:
- Use an external PostgreSQL provider (Neon, Supabase, Railway, AWS RDS)
- Set `DATABASE_URL` and `DIRECT_URL` in your environment

### Email

Configure SMTP settings for transactional emails (tickets, invoices, OTPs).

## License

Private - All rights reserved