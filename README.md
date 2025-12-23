# Skills & Agents Marketplace

A Next.js application for browsing and requesting access to marketing skills and AI agents. Features a catalog of ready-to-use solutions plus a custom request flow for bespoke AI agent builds.

## Features

- **Catalog Browser** - Browse 10 marketing skills and 3 AI agents with search and filtering
- **Custom Request Flow** - 4-step inline form for requesting custom AI agent builds
- **Animated Hero** - Prism UI-inspired hero with particle animation and word reveal
- **Smooth Navigation** - Single-page design with smooth scroll between sections
- **Supabase Backend** - PostgreSQL database with Row Level Security
- **Responsive Design** - Mobile-first, works on all screen sizes

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Database:** Supabase (PostgreSQL)
- **Validation:** Zod
- **Icons:** Lucide React
- **Deployment:** Vercel

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment template and add your Supabase credentials
cp .env.local.example .env.local

# Run database migrations in Supabase SQL Editor:
# - supabase/migrations/001_create_tables.sql
# - supabase/migrations/002_add_custom_requests.sql

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Documentation

| Document | Purpose |
|----------|---------|
| [SETUP.md](SETUP.md) | Complete setup guide with Supabase configuration |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Vercel deployment, checklist, troubleshooting |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Technical reference, database schema, components |
| [UX_FLOW.md](UX_FLOW.md) | User experience flows and visual mockups |

## Two Request Flows

### 1. Catalog Request
Users browse the catalog, select items, and submit a request via modal form.

### 2. Custom Request
Users complete a 4-step inline form:
1. Select business category
2. Describe current process and pain points
3. Define desired outcome
4. Provide contact information

Both flows save to the same `requests` table with a `request_type` field ('catalog' or 'custom').

## Available Items

### Skills (10)
Brand Voice, Content Repurposer, Direct Response Copy, Email Sequences, Keyword Research, Lead Magnet, Marketing Orchestrator, Newsletter, Positioning Angle, SEO Content

### Agents (3)
Orchestrator Agent, Coding Agent, n8n Workflow Engineer

## After Deployment

1. Test both request flows on your live site
2. Monitor submissions in Supabase Table Editor
3. Configure n8n workflow for notifications (optional)
4. Share the URL with your team

## License

This project is for internal use only.
