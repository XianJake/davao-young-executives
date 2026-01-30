# Davao Young Executives - Website MVP

## Project Overview
A complete Next.js website for Davao Young Executives non-profit organization built with TypeScript and Tailwind CSS.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS v4
- React Hook Form + Zod (form validation)
- Lucide React (icons)

## Design System
- **Primary Color**: #0ea5e9 (Sky Blue)
- **Secondary Color**: #f59e0b (Amber/Orange)
- **Fonts**:
  - Body: Inter
  - Headings: Poppins (weights: 400, 500, 600, 700, 800)

## Pages Created

### 1. Homepage (/)
- Hero section with gradient background
- Stats section (500+ members, 50+ events, 10+ years)
- Features grid (4 key benefits)
- CTA section with call-to-action buttons

### 2. About (/about)
- Mission section with description
- Vision statement with stats
- Core values grid (4 values: Integrity, Collaboration, Excellence, Innovation)
- Membership CTA

### 3. Blog (/blog)
- Blog listing page with 2 featured posts
- Article cards with category, read time, author, and date
- Responsive grid layout

### 4. Blog Posts
- `/blog/leadership-skills-2026` - Leadership skills article
- `/blog/community-outreach-success` - Community impact story
- Full article pages with formatted content

### 5. Contact (/contact)
- Contact form with validation (name, email, subject, message)
- Contact information cards (location, email, phone, hours)
- Membership benefits sidebar
- Map placeholder section

## Components Created

### Layout Components
- **Header** (`components/layout/Header.tsx`)
  - Responsive navigation
  - Mobile menu with hamburger icon
  - Sticky header
  - DYE branding

- **Footer** (`components/layout/Footer.tsx`)
  - Multi-column layout
  - Social media links
  - Contact information
  - Quick links

### UI Components
- **Button** (`components/ui/Button.tsx`)
  - 3 variants: primary, secondary, outline
  - Link and button support
  - Hover states and transitions

- **Container** (`components/ui/Container.tsx`)
  - Responsive max-width wrapper
  - Consistent padding

### Section Components
- **Hero** (`components/sections/Hero.tsx`)
  - Customizable title and subtitle
  - Gradient background
  - Optional CTA buttons
  - Grid pattern overlay

### Form Components
- **ContactForm** (`components/forms/ContactForm.tsx`)
  - React Hook Form integration
  - Zod schema validation
  - Loading states
  - Success/error messages
  - API integration

## API Routes

### POST /api/contact
- Receives contact form submissions
- Validates required fields
- Logs to console (ready for email/database integration)
- Returns success/error responses

## Features
✅ Fully responsive design (mobile, tablet, desktop)
✅ Modern, clean, professional aesthetic
✅ Form validation with proper error handling
✅ Accessible navigation with mobile menu
✅ SEO-friendly metadata
✅ Fast page loads with Next.js optimization
✅ Type-safe with TypeScript
✅ Production-ready code structure

## Running the Project

### Development
```bash
npm run dev
# Open http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Project Structure
```
davao-young-executives/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── blog/
│   │   ├── community-outreach-success/
│   │   │   └── page.tsx
│   │   ├── leadership-skills-2026/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── forms/
│   │   └── ContactForm.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── sections/
│   │   └── Hero.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Container.tsx
└── public/
```

## Next Steps for Production

1. **Email Integration**
   - Set up email service (SendGrid, Resend, etc.)
   - Implement email notifications in `/api/contact`
   - Add auto-reply emails

2. **Database**
   - Set up database (PostgreSQL, MongoDB, etc.)
   - Store contact form submissions
   - Create member database

3. **CMS Integration**
   - Add headless CMS for blog posts (Contentful, Sanity, etc.)
   - Enable dynamic blog content

4. **Analytics**
   - Add Google Analytics or similar
   - Track user engagement

5. **Deployment**
   - Deploy to Vercel (recommended) or other platforms
   - Set up custom domain
   - Configure environment variables

6. **Additional Features**
   - Member authentication
   - Event calendar
   - Photo gallery
   - Newsletter signup

## Development Notes
- All dependencies are already installed
- Uses Next.js 14 App Router
- Tailwind CSS v4 configuration
- TypeScript strict mode enabled
- ESLint configured

## Support
For issues or questions about the codebase, refer to:
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React Hook Form: https://react-hook-form.com
