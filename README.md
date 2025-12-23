# Skills & Agents Marketplace

A Next.js application for browsing and requesting access to marketing skills and AI agents.

## Features

- 🎨 Modern, responsive UI built with Tailwind CSS
- 🔍 Search and filter functionality
- 📧 Email notifications via Resend
- 💾 Data storage with Supabase
- ✨ 10 marketing skills and 3 AI agents available

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Supabase account
- Resend account (for email notifications)

### Setup

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Create a `.env.local` file with your credentials:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Resend
RESEND_API_KEY=your_resend_api_key

# Email Configuration
ADMIN_EMAIL=your_admin_email@example.com
FROM_EMAIL=noreply@yourdomain.com
```

3. Set up your Supabase database:

- Go to your Supabase project dashboard
- Navigate to SQL Editor
- Run the migration file: `supabase/migrations/001_create_tables.sql`

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Database Setup

The application uses two main tables:

- `requests` - Stores user requests with contact info and status
- `request_items` - Stores the skills/agents selected for each request

Run the SQL migration file in your Supabase dashboard to create these tables with proper Row Level Security (RLS) policies.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Install the Supabase integration from Vercel marketplace
4. Add all environment variables in Vercel dashboard
5. Deploy!

### Environment Variables

Make sure to set all required environment variables in your Vercel project settings:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `ADMIN_EMAIL`
- `FROM_EMAIL`

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Email**: Resend with React Email
- **Deployment**: Vercel
- **Icons**: Lucide React
- **Validation**: Zod

## Project Structure

```
src/
├── app/
│   ├── actions/          # Server Actions
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── components/           # React components
│   ├── catalog-card.tsx
│   ├── catalog-grid.tsx
│   └── request-form.tsx
└── lib/
    ├── catalog/          # Catalog data and types
    ├── email/            # Email utilities and templates
    └── supabase/         # Supabase client setup
```

## Available Skills

1. Brand Voice
2. Content Repurposer
3. Direct Response Copy
4. Email Sequences
5. Keyword Research
6. Lead Magnet
7. Marketing Orchestrator
8. Newsletter
9. Positioning Angle
10. SEO Content

## Available Agents

1. Orchestrator Agent
2. Coding Agent
3. n8n Workflow Engineer

## License

This project is for internal use only.
