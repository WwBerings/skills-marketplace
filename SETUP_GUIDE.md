# Setup Guide - Skills & Agents Marketplace

This guide will walk you through setting up the complete application from scratch.

## Prerequisites

Before you begin, make sure you have:
- Node.js 18+ installed
- A GitHub account (for deployment)
- A Supabase account (free tier is sufficient)
- A Resend account (free tier is sufficient)

## Step 1: Supabase Setup

### 1.1 Create a New Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign in or create an account
3. Click "New Project"
4. Fill in the details:
   - **Name**: skills-marketplace (or your preferred name)
   - **Database Password**: Create a strong password (save it!)
   - **Region**: Choose the closest region to your users
   - **Pricing Plan**: Free tier is sufficient
5. Click "Create new project"
6. Wait 2-3 minutes for the project to be provisioned

### 1.2 Run Database Migration

1. In your Supabase project dashboard, click on "SQL Editor" in the left sidebar
2. Click "New query"
3. Copy and paste the entire contents of `supabase/migrations/001_create_tables.sql`
4. Click "Run" (or press Cmd/Ctrl + Enter)
5. You should see a success message

### 1.3 Get Your API Credentials

1. In your Supabase project, go to "Settings" → "API"
2. You'll need three values:
   - **Project URL**: Found under "Project URL" (starts with https://)
   - **anon/public key**: Under "Project API keys" → "anon public"
   - **service_role key**: Under "Project API keys" → "service_role" (click "Reveal" first)
3. Save these values - you'll need them for the `.env.local` file

## Step 2: Resend Setup

### 2.1 Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 2.2 Get Your API Key

1. In the Resend dashboard, click "API Keys" in the left sidebar
2. Click "Create API Key"
3. Give it a name: "skills-marketplace"
4. Select permissions: "Full access" (for simplicity)
5. Click "Create"
6. Copy the API key immediately (you won't be able to see it again!)
7. Save this value

### 2.3 Verify Your Domain (Optional but Recommended)

For production use:
1. In Resend, go to "Domains"
2. Click "Add Domain"
3. Enter your domain (e.g., `yourdomain.com`)
4. Follow the DNS configuration instructions
5. Wait for verification (can take a few minutes)

For testing, you can use the default Resend domain.

## Step 3: Environment Variables

### 3.1 Update `.env.local`

The file `.env.local` already exists in your project. Open it and update with your actual values:

```env
# Supabase (from Step 1.3)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Resend (from Step 2.2)
RESEND_API_KEY=re_your_api_key_here

# Email Configuration
ADMIN_EMAIL=your-email@company.com
FROM_EMAIL=noreply@yourdomain.com
```

**Important Notes:**
- Replace all placeholder values with your actual credentials
- Never commit `.env.local` to Git (it's already in `.gitignore`)
- `FROM_EMAIL` should match your verified Resend domain

## Step 4: Test Locally

### 4.1 Install Dependencies (if not already done)

```bash
npm install
```

### 4.2 Run Development Server

```bash
npm run dev
```

### 4.3 Test the Application

1. Open [http://localhost:3000](http://localhost:3000)
2. You should see the landing page with all skills and agents
3. Select a few items
4. Click "Request X Items" button
5. Fill out the form
6. Submit the request
7. Check:
   - You should see a success message
   - Check your admin email for the notification
   - The requester should receive a confirmation email
   - Data should appear in Supabase (go to "Table Editor" → "requests")

## Step 5: Deploy to Vercel

### 5.1 Prepare GitHub Repository

1. Initialize Git (if not already done):
```bash
cd /Users/willemversionone/Claude-skills/CursorNovember/skills-marketplace
git init
git add .
git commit -m "Initial commit: Skills & Agents Marketplace"
```

2. Create a new repository on GitHub
3. Push your code:
```bash
git remote add origin https://github.com/your-username/skills-marketplace.git
git branch -M main
git push -u origin main
```

### 5.2 Deploy to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Configure the project:
   - **Framework Preset**: Next.js (should be auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)

### 5.3 Add Environment Variables in Vercel

1. Before deploying, click "Environment Variables"
2. Add each variable from your `.env.local` file:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `RESEND_API_KEY`
   - `ADMIN_EMAIL`
   - `FROM_EMAIL`
3. For each variable:
   - Paste the **Name** (e.g., `NEXT_PUBLIC_SUPABASE_URL`)
   - Paste the **Value** (your actual credential)
   - Select "Production", "Preview", and "Development" (all three)
4. Click "Add" after each one

### 5.4 Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for the build and deployment
3. Once complete, you'll get a URL (e.g., `https://skills-marketplace-xxx.vercel.app`)
4. Click "Visit" to test your deployed application

### 5.5 Optional: Add Custom Domain

1. In your Vercel project, go to "Settings" → "Domains"
2. Enter your custom domain
3. Follow the DNS configuration instructions
4. Update `FROM_EMAIL` in environment variables to use your domain

## Step 6: Install Supabase Integration (Optional)

This makes managing environment variables easier:

1. In Vercel, go to your project
2. Click "Integrations" tab
3. Search for "Supabase"
4. Click "Add Integration"
5. Follow the connection flow
6. This will automatically sync your Supabase credentials

## Troubleshooting

### Email Not Sending

- Check that `RESEND_API_KEY` is correct
- Verify `FROM_EMAIL` matches your verified domain
- Check Resend dashboard for error logs
- For testing, use a verified email address

### Database Errors

- Verify all Supabase credentials are correct
- Check that the migration script ran successfully
- Go to Supabase → "Table Editor" to verify tables exist
- Check Supabase → "Logs" for error messages

### Build Failures

- Run `npm run build` locally first
- Check for TypeScript errors
- Verify all environment variables are set in Vercel
- Check Vercel build logs for specific errors

### Form Submission Fails

- Open browser console to see error messages
- Check that database tables have RLS policies enabled
- Verify server action is working (check Next.js logs)
- Test with a simple request first

## Maintenance

### Monitoring Requests

1. Go to Supabase → "Table Editor" → "requests"
2. View all submitted requests
3. Filter by status: pending, approved, delivered
4. Update status manually as needed

### Viewing Logs

- **Vercel**: Project → "Logs" tab
- **Supabase**: Project → "Logs" → "Postgres Logs"
- **Resend**: Dashboard → "Logs"

### Updating Content

To add/edit skills or agents:
1. Edit `src/lib/catalog/skills-agents.ts`
2. Update the `catalogItems` array
3. Commit and push to GitHub
4. Vercel will auto-deploy the changes

## Next Steps

Once deployed:
1. Share the URL with your marketing team
2. Test the full flow with a real request
3. Set up monitoring for email deliverability
4. Consider adding the admin dashboard (Phase 7 from plan)
5. Add analytics to track usage

## Support

For issues:
1. Check the troubleshooting section above
2. Review Vercel deployment logs
3. Check Supabase and Resend dashboards
4. Review browser console for client-side errors

