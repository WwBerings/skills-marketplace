# Deployment Guide

Deploy the Skills & Agents Marketplace to Vercel.

## Pre-Deployment Checklist

- [ ] Supabase project created
- [ ] Both migration scripts executed successfully
- [ ] Local development works (`npm run dev`)
- [ ] Both request flows tested locally
- [ ] Build succeeds (`npm run build`)
- [ ] No linter errors (`npm run lint`)

## Deploy to Vercel

### 1. Push to GitHub

```bash
# If not already on GitHub
git remote add origin https://github.com/YOUR-USERNAME/skills-marketplace.git
git branch -M main
git push -u origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Framework preset: Next.js (auto-detected)

### 3. Add Environment Variables

Before clicking Deploy, add these variables:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key |

Select all environments: Production, Preview, Development.

### 4. Deploy

Click **Deploy** and wait 2-3 minutes.

## Post-Deployment Testing

### Hero Section
- [ ] Particle animation loads
- [ ] Text reveals word by word
- [ ] Both CTA buttons visible
- [ ] Smooth scroll works when clicking buttons

### Catalog Flow
- [ ] Scroll to catalog section
- [ ] Select items from grid
- [ ] "Request X Items" button appears
- [ ] Modal form opens
- [ ] Form submits successfully
- [ ] Check Supabase for `request_type='catalog'`

### Custom Request Flow
- [ ] Scroll to custom request section
- [ ] Step 1: Select category (text cards, no emojis)
- [ ] Step 2: Category badge visible, fill textareas
- [ ] Step 3: Category badge visible, fill outcome
- [ ] Step 4: Category badge visible, fill contact info (3 fields only)
- [ ] Submit and see success message
- [ ] Check Supabase for `request_type='custom'`

### Mobile Testing
- [ ] Hero scales correctly
- [ ] Category cards stack vertically
- [ ] Form fields are full-width
- [ ] All interactions work on touch

## n8n Webhook Integration

Configure n8n to poll Supabase for new requests:

```sql
SELECT * FROM requests 
WHERE created_at > NOW() - INTERVAL '5 minutes'
ORDER BY created_at DESC;
```

Route differently based on `request_type`:
- `catalog` → Standard catalog request notification
- `custom` → Custom build request with full details

Custom request fields available:
- `business_category`
- `current_process`
- `pain_points`
- `desired_outcome`
- `tools_used`
- `team_size`

## Troubleshooting

### Build Fails

Check Vercel build logs for specific error. Common fixes:
- Verify all environment variables are set
- Run `npm run build` locally to reproduce
- Check for TypeScript errors

### Database Connection Fails

- Verify Supabase credentials in Vercel dashboard
- Check Supabase is not paused (free tier pauses after inactivity)
- Confirm RLS policies allow anonymous inserts

### Smooth Scroll Not Working

- Check browser console for JavaScript errors
- Verify section IDs: `#catalog`, `#custom-request`

### Form Submission Fails

- Open browser DevTools → Network tab
- Check for server action errors
- Verify Supabase connection

## Rollback

### Option 1: Revert in Vercel

1. Go to Vercel project → Deployments
2. Find previous working deployment
3. Click **⋯** → **Promote to Production**

### Option 2: Git Revert

```bash
git revert HEAD
git push origin main
```

## Monitoring

### Request Volume

```sql
SELECT request_type, COUNT(*) 
FROM requests 
GROUP BY request_type;
```

### Popular Categories

```sql
SELECT business_category, COUNT(*) 
FROM requests 
WHERE request_type = 'custom' 
GROUP BY business_category 
ORDER BY COUNT(*) DESC;
```


