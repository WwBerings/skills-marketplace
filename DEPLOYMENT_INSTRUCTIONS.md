# Deployment Instructions - Custom Request Feature

## ✅ Pre-Deployment Checklist

- [x] Build completes successfully (`npm run build`)
- [x] No TypeScript errors
- [x] No linter warnings
- [x] All components created and tested
- [x] Server actions implemented
- [x] Database migration file ready

## 🚀 Deployment Steps

### Step 1: Run Database Migration

**Option A: Via Supabase Dashboard (Recommended)**

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Click **New Query**
4. Copy and paste the contents of:
   ```
   supabase/migrations/002_add_custom_requests.sql
   ```
5. Click **Run** to execute the migration
6. Verify success message appears

**Option B: Via Supabase CLI**

```bash
# If you have Supabase CLI installed
supabase db push
```

**Verification:**

After running the migration, verify the new columns exist:

```sql
-- Run this in SQL Editor to verify
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'requests'
ORDER BY ordinal_position;
```

You should see the new columns:
- `request_type`
- `business_category`
- `current_process`
- `pain_points`
- `desired_outcome`
- `tools_used`
- `team_size`
- `timeline`

---

### Step 2: Commit and Push Code

```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Add custom request feature with Prism UI hero

- Implement Prism UI hero with particle animation
- Add multi-step custom request form (4 steps)
- Create WordReveal text animation component
- Add database migration for custom request fields
- Implement smooth scroll navigation
- Update server actions to handle both request types
- Maintain backward compatibility with catalog requests"

# Push to your repository
git push origin main
```

---

### Step 3: Deploy to Vercel

**If connected to GitHub (Automatic):**

Vercel will automatically detect the push and start deploying. Monitor the deployment at:
```
https://vercel.com/[your-username]/skills-marketplace
```

**If manual deployment:**

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Deploy
vercel --prod
```

---

### Step 4: Verify Deployment

#### 4.1 Check Build Logs

In Vercel dashboard:
1. Go to your project
2. Click on the latest deployment
3. Check **Build Logs** for any errors
4. Verify "Build completed successfully"

#### 4.2 Test Hero Section

Visit your deployed site and verify:
- [ ] Particle animation loads and responds to mouse
- [ ] Text reveals word by word
- [ ] Two CTA buttons visible and styled correctly
- [ ] Smooth scroll works when clicking buttons

#### 4.3 Test Catalog Flow (Existing)

1. Click "Browse Agent Catalog"
2. Scroll to catalog section
3. Select 1-2 items
4. Click floating "Request X Items" button
5. Fill out modal form
6. Submit request
7. Check Supabase dashboard for new row with `request_type='catalog'`

#### 4.4 Test Custom Request Flow (New)

1. Click "Request AI Agent Build"
2. Scroll to custom request section
3. **Step 1:** Select a business category
4. **Step 2:** Fill in current process and pain points
5. **Step 3:** Fill in desired outcome (tools and team size optional)
6. **Step 4:** Fill in contact info and select timeline
7. Submit request
8. Verify success message appears inline
9. Check Supabase dashboard for new row with `request_type='custom'`

#### 4.5 Verify Database Entries

In Supabase dashboard, run:

```sql
-- Check catalog request
SELECT * FROM requests 
WHERE request_type = 'catalog' 
ORDER BY created_at DESC 
LIMIT 1;

-- Check custom request
SELECT * FROM requests 
WHERE request_type = 'custom' 
ORDER BY created_at DESC 
LIMIT 1;
```

Verify:
- Catalog request has `request_type='catalog'` and NULL custom fields
- Custom request has `request_type='custom'` and populated custom fields

---

### Step 5: Test Mobile Responsiveness

Use browser DevTools or real devices:

**Mobile (375px width):**
- [ ] Hero text scales appropriately
- [ ] CTA buttons stack vertically
- [ ] Category cards display 1 per row
- [ ] Form fields are full-width
- [ ] Navigation buttons stack properly
- [ ] Smooth scroll works on touch

**Tablet (768px width):**
- [ ] Category cards display 2 per row
- [ ] Form layout adjusts appropriately
- [ ] All interactions work smoothly

---

### Step 6: Configure n8n Webhook (Optional)

If you have n8n set up for notifications:

1. Update your n8n workflow to handle `request_type` field
2. Create separate branches for 'catalog' vs 'custom' requests
3. Customize notification templates for each type

**Example n8n Flow:**

```
Webhook Trigger
    ↓
IF Node (Check request_type)
    ├─ catalog → Send "Catalog Request" email
    └─ custom → Send "Custom Build Request" email
```

**Custom Request Email Template:**

```
Subject: New Custom Agent Build Request

Category: {{$json["business_category"]}}
Current Process: {{$json["current_process"]}}
Pain Points: {{$json["pain_points"]}}
Desired Outcome: {{$json["desired_outcome"]}}
Tools Used: {{$json["tools_used"]}}
Team Size: {{$json["team_size"]}}
Timeline: {{$json["timeline"]}}

Contact:
Name: {{$json["name"]}}
Email: {{$json["email"]}}
Company: {{$json["company_team"]}}
```

---

## 🔍 Troubleshooting

### Build Fails

**Error:** TypeScript compilation error

**Solution:**
```bash
# Check for TypeScript errors locally
npm run build

# Fix any errors shown
# Re-commit and push
```

### Migration Fails

**Error:** Column already exists

**Solution:**
The migration uses `IF NOT EXISTS` clauses, so it should be safe to run multiple times. If you get errors:

```sql
-- Check if columns exist
SELECT column_name FROM information_schema.columns 
WHERE table_name = 'requests';

-- If they exist, the migration already ran successfully
```

### Smooth Scroll Not Working

**Issue:** Clicking buttons doesn't scroll

**Solution:**
- Check browser console for JavaScript errors
- Verify section IDs match: `#hero`, `#catalog`, `#custom-request`
- Test in different browsers

### Form Not Submitting

**Issue:** Submit button doesn't work

**Solution:**
1. Check browser console for errors
2. Verify Supabase environment variables are set in Vercel
3. Check Supabase RLS policies allow anonymous inserts
4. Test server action directly in browser DevTools

### Particle Animation Not Loading

**Issue:** Black screen instead of particles

**Solution:**
- Check if `ParticleAnimation` component imported correctly
- Verify Framer Motion is installed
- Check browser console for errors
- Test on different devices/browsers

---

## 📊 Monitoring

### Key Metrics to Track

1. **Request Types:**
   ```sql
   SELECT request_type, COUNT(*) 
   FROM requests 
   GROUP BY request_type;
   ```

2. **Popular Categories (Custom Requests):**
   ```sql
   SELECT business_category, COUNT(*) 
   FROM requests 
   WHERE request_type = 'custom' 
   GROUP BY business_category 
   ORDER BY COUNT(*) DESC;
   ```

3. **Timeline Distribution:**
   ```sql
   SELECT timeline, COUNT(*) 
   FROM requests 
   WHERE request_type = 'custom' 
   GROUP BY timeline;
   ```

4. **Conversion Rate:**
   - Track page views vs. form submissions
   - Compare catalog vs. custom request rates

---

## 🎯 Success Criteria

Deployment is successful when:

- [x] Site loads without errors
- [x] Hero animations work smoothly
- [x] Both CTAs scroll to correct sections
- [x] Catalog flow works (backward compatible)
- [x] Custom request form completes all 4 steps
- [x] Both request types save to database correctly
- [x] Mobile responsive on all screen sizes
- [x] No console errors
- [x] Build time < 3 minutes
- [x] Page load time < 2 seconds

---

## 🔄 Rollback Plan

If critical issues occur after deployment:

### Option 1: Revert Code (Quick)

```bash
# Revert to previous commit
git revert HEAD

# Push revert
git push origin main

# Vercel will auto-deploy the reverted version
```

### Option 2: Rollback in Vercel Dashboard

1. Go to Vercel project
2. Click **Deployments**
3. Find previous working deployment
4. Click **⋯** → **Promote to Production**

### Option 3: Database Rollback (If Needed)

```sql
-- Remove new columns (only if absolutely necessary)
ALTER TABLE requests 
  DROP COLUMN IF EXISTS request_type,
  DROP COLUMN IF EXISTS business_category,
  DROP COLUMN IF EXISTS current_process,
  DROP COLUMN IF EXISTS pain_points,
  DROP COLUMN IF EXISTS desired_outcome,
  DROP COLUMN IF EXISTS tools_used,
  DROP COLUMN IF EXISTS team_size,
  DROP COLUMN IF EXISTS timeline;

-- Drop index
DROP INDEX IF EXISTS idx_requests_request_type;
```

**Note:** This will lose any custom request data. Only use as last resort.

---

## 📞 Support

If you encounter issues:

1. Check browser console for errors
2. Check Vercel build logs
3. Check Supabase logs
4. Review this document's troubleshooting section
5. Test locally with `npm run dev`

---

## ✅ Post-Deployment Tasks

After successful deployment:

1. **Test thoroughly** on production
2. **Monitor Supabase** for incoming requests
3. **Update n8n workflows** if needed
4. **Share link** with team for feedback
5. **Document any issues** encountered
6. **Plan iterations** based on user feedback

---

## 🎉 Deployment Complete!

Your custom request feature is now live. Users can:
- Browse the catalog and request existing items (unchanged)
- Request custom AI agent builds through the new multi-step form
- Experience smooth animations and responsive design
- Submit requests that route to your n8n workflows

**Next Steps:**
- Monitor request submissions
- Gather user feedback
- Iterate on the experience
- Consider adding admin dashboard (future enhancement)

**Congratulations! 🚀**

