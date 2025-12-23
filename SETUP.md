# Setup Guide

Complete setup instructions for the Skills & Agents Marketplace.

## Prerequisites

- Node.js 18+
- GitHub account
- Supabase account (free tier works)
- Vercel account (for deployment)

## 1. Supabase Setup

### Create Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Fill in:
   - **Name:** skills-marketplace
   - **Database Password:** Create a strong password
   - **Region:** Choose closest to your users
4. Wait 2-3 minutes for provisioning

### Run Database Migrations

1. In Supabase dashboard, go to **SQL Editor**
2. Click **New query**
3. Copy contents of `supabase/migrations/001_create_tables.sql`
4. Click **Run**
5. Create another new query
6. Copy contents of `supabase/migrations/002_add_custom_requests.sql`
7. Click **Run**

### Get API Credentials

1. Go to **Settings** → **API**
2. Copy these three values:
   - **Project URL** (starts with `https://`)
   - **anon public key** (under Project API keys)
   - **service_role key** (click Reveal first)

## 2. Environment Variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Replace placeholder values with your actual credentials from step 1.

## 3. Install and Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 4. Test Both Flows

### Catalog Flow
1. Scroll to catalog section
2. Select 1-2 items
3. Click "Request X Items" button
4. Fill out modal form
5. Submit and verify success message
6. Check Supabase → Table Editor → requests

### Custom Request Flow
1. Click "Request AI Agent Build" in hero
2. Step 1: Select a business category
3. Step 2: Fill in current process and pain points
4. Step 3: Fill in desired outcome (tools/team size optional)
5. Step 4: Fill in name, email, company
6. Submit and verify success message
7. Check Supabase for new row with `request_type='custom'`

## Verify Database

Run this query in Supabase SQL Editor to confirm setup:

```sql
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'requests' 
ORDER BY ordinal_position;
```

You should see columns including:
- id, created_at, name, email, company_team, use_case, status
- request_type, business_category, current_process, pain_points
- desired_outcome, tools_used, team_size

## Troubleshooting

**Build fails?**
```bash
npm run build  # Check for errors
npm run lint   # Check for linting issues
```

**Database errors?**
- Verify all 3 Supabase credentials are correct
- Check that both migration files ran successfully
- Go to Table Editor to confirm tables exist

**Form not submitting?**
- Check browser console for errors
- Verify RLS policies allow anonymous inserts
- Test server action in DevTools Network tab

