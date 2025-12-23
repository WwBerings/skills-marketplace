# Quick Start - Deploy in 15 Minutes

This is the fastest path from code to production. Follow these steps in order.

## ⚡ Prerequisites (5 minutes)

1. **Accounts Needed:**
   - [ ] GitHub account → [Sign up](https://github.com/signup)
   - [ ] Supabase account → [Sign up](https://supabase.com)
   - [ ] Resend account → [Sign up](https://resend.com)
   - [ ] Vercel account → [Sign up](https://vercel.com)

## 🗄️ Step 1: Database (3 minutes)

1. Go to [supabase.com](https://supabase.com) → "New Project"
2. Name it "skills-marketplace", create password, choose region
3. Wait 2 minutes for setup
4. Go to "SQL Editor" → "New query"
5. Copy ALL contents from `supabase/migrations/001_create_tables.sql`
6. Paste and click "Run"
7. Go to "Settings" → "API" → Copy these 3 values:
   - Project URL
   - anon public key
   - service_role key (click "Reveal" first)

## 📧 Step 2: Email (2 minutes)

1. Go to [resend.com](https://resend.com) → Sign up
2. Go to "API Keys" → "Create API Key"
3. Name: "skills-marketplace", permissions: "Full access"
4. Copy the key immediately (you can't see it again!)

## 🚀 Step 3: Deploy (5 minutes)

### A. Push to GitHub

```bash
# Create a new repository on GitHub first (github.com/new)
# Then run these commands:

cd /Users/willemversionone/Claude-skills/CursorNovember/skills-marketplace

# Add GitHub remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/skills-marketplace.git

# Push code
git branch -M main
git push -u origin main
```

### B. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Click "Environment Variables" and add these 6 variables:

```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: [paste from Supabase Step 1]

Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: [paste from Supabase Step 1]

Name: SUPABASE_SERVICE_ROLE_KEY
Value: [paste from Supabase Step 1]

Name: RESEND_API_KEY
Value: [paste from Resend Step 2]

Name: ADMIN_EMAIL
Value: your-email@company.com

Name: FROM_EMAIL
Value: noreply@yourdomain.com (or onboarding@resend.dev for testing)
```

5. Click "Deploy"
6. Wait 2-3 minutes
7. Click "Visit" to see your live site! 🎉

## ✅ Step 4: Test (2 minutes)

1. Visit your Vercel URL
2. Select a few skills/agents
3. Click "Request X Items"
4. Fill out the form and submit
5. Check both emails (admin + user)
6. Check Supabase → "Table Editor" → "requests" → See your data

## 🎯 Done!

Your marketplace is live. Share the URL with your team.

---

## 🔧 Troubleshooting

**Emails not sending?**
- Use `onboarding@resend.dev` as FROM_EMAIL for testing
- Verify your Resend API key is correct

**Database errors?**
- Double-check you ran the migration SQL
- Verify all 3 Supabase credentials in Vercel

**Build failed?**
- Check Vercel logs for the specific error
- Ensure all 6 environment variables are set

---

## 📚 Need More Help?

- Full setup guide: `SETUP_GUIDE.md`
- Deployment checklist: `DEPLOYMENT_CHECKLIST.md`
- Project overview: `README.md`

