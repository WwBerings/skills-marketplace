# Deployment Checklist

Use this checklist to ensure everything is configured correctly before and after deployment.

## Pre-Deployment Checklist

### ✅ Supabase Configuration

- [ ] Supabase project created
- [ ] Database migration script executed successfully
- [ ] Tables visible in Table Editor (requests, request_items)
- [ ] RLS policies are enabled
- [ ] Project URL copied
- [ ] anon/public key copied
- [ ] service_role key copied

### ✅ n8n Configuration (Separate Setup)

- [ ] n8n instance available
- [ ] Teams credentials configured
- [ ] Postgres connection to Supabase configured
- [ ] Test email sent successfully
- [ ] FROM_EMAIL address configured

### ✅ Local Environment

- [ ] `.env.local` file created
- [ ] All environment variables populated
- [ ] `npm install` completed successfully
- [ ] `npm run dev` works locally
- [ ] Can browse catalog items
- [ ] Can select items
- [ ] Form validation works
- [ ] Form submission works
- [ ] Admin email received
- [ ] User confirmation email received
- [ ] Data appears in Supabase

### ✅ Code Quality

- [ ] No linter errors (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] No TypeScript errors
- [ ] All components render correctly
- [ ] Responsive design tested (mobile, tablet, desktop)

### ✅ GitHub Repository

- [ ] Repository created on GitHub
- [ ] Code pushed to main branch
- [ ] .env.local is in .gitignore (not pushed)
- [ ] README.md is complete
- [ ] SETUP_GUIDE.md included

## Deployment Checklist

### ✅ Vercel Setup

- [ ] Vercel account connected to GitHub
- [ ] New project created from repository
- [ ] Framework preset: Next.js
- [ ] All environment variables added:
  - [ ] NEXT_PUBLIC_SUPABASE_URL
  - [ ] NEXT_PUBLIC_SUPABASE_ANON_KEY
  - [ ] SUPABASE_SERVICE_ROLE_KEY
- [ ] Environment variables set for all environments (Production, Preview, Development)
- [ ] Build settings correct (npm run build)
- [ ] Output directory set (.next)

### ✅ First Deployment

- [ ] Deployment triggered
- [ ] Build completed successfully
- [ ] No build errors in logs
- [ ] Deployment URL generated
- [ ] Site is accessible

## Post-Deployment Checklist

### ✅ Functionality Testing

- [ ] Landing page loads
- [ ] All 13 items display (10 skills + 3 agents)
- [ ] Search functionality works
- [ ] Filter by type works (All, Skills, Agents)
- [ ] Filter by category works
- [ ] Can select multiple items
- [ ] Selected count updates correctly
- [ ] "Request X Items" button appears
- [ ] Request form opens
- [ ] Form validation works
  - [ ] Name required (min 2 chars)
  - [ ] Email validation works
  - [ ] Company/Team required (min 2 chars)
  - [ ] Use case required (min 20 chars)
  - [ ] At least one item must be selected
- [ ] Form submits successfully
- [ ] Success message displays
- [ ] Form closes after success

### ✅ Email Testing

- [ ] Admin notification email received
  - [ ] Contains requester details
  - [ ] Shows selected items correctly
  - [ ] Formatted properly
- [ ] User confirmation email received
  - [ ] Personalized with user's name
  - [ ] Shows selected items
  - [ ] Contains next steps
  - [ ] Formatted properly

### ✅ Database Testing

- [ ] Request appears in Supabase
- [ ] Request has correct data
- [ ] Request items linked correctly
- [ ] Status is 'pending'
- [ ] Timestamp is correct
- [ ] Can query requests table
- [ ] Can query request_items table

### ✅ Performance Testing

- [ ] Page load time < 2 seconds
- [ ] No console errors
- [ ] No console warnings
- [ ] Images load correctly
- [ ] Icons display properly
- [ ] Animations are smooth
- [ ] No layout shift issues

### ✅ Responsive Design Testing

- [ ] Mobile (375px width)
  - [ ] Layout adapts correctly
  - [ ] All text is readable
  - [ ] Buttons are tappable
  - [ ] Form is usable
  - [ ] No horizontal scroll
- [ ] Tablet (768px width)
  - [ ] 2-column grid works
  - [ ] Filters are accessible
  - [ ] Form layout good
- [ ] Desktop (1440px+ width)
  - [ ] 3-column grid works
  - [ ] Maximum width maintained
  - [ ] Proper spacing

### ✅ Browser Testing

- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### ✅ Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Tab order is logical
- [ ] Focus indicators visible
- [ ] Form labels present
- [ ] Error messages announced
- [ ] Color contrast sufficient
- [ ] Alt text on images (if any)

### ✅ Security Checklist

- [ ] .env.local not in Git
- [ ] API keys not exposed in client
- [ ] Supabase RLS policies active
- [ ] CORS configured correctly
- [ ] Rate limiting considered
- [ ] Input validation on server
- [ ] SQL injection protected (via Supabase)

### ✅ Monitoring Setup

- [ ] Vercel Analytics enabled (optional)
- [ ] Error tracking configured (optional)
- [ ] Database usage monitoring
- [ ] n8n workflow monitoring (separate setup)

## Optional Enhancements

### ✅ Production Improvements

- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Supabase integration installed in Vercel
- [ ] n8n workflow deployed and active
- [ ] Backup strategy for database
- [ ] Monitoring alerts configured

### ✅ User Experience

- [ ] Loading states smooth
- [ ] Error messages helpful
- [ ] Success feedback clear
- [ ] Mobile UX optimized
- [ ] Fast form validation
- [ ] Accessible to all users

## Success Criteria Met ✅

From the plan, verify these success criteria:

1. [ ] Landing page loads in under 2 seconds
2. [ ] All 13 items (10 skills + 3 agents) display correctly
3. [ ] Form submission stores data in Supabase
4. [ ] Success message displays after submission
5. [ ] Responsive design works on mobile, tablet, desktop
6. [ ] n8n workflow picks up new requests (test separately)
7. [ ] Zero console errors in production
8. [ ] Accessible (WCAG 2.1 AA compliance)

## Documentation Checklist

- [ ] README.md complete
- [ ] SETUP_GUIDE.md included
- [ ] Environment variables documented
- [ ] Deployment process documented
- [ ] Troubleshooting guide included
- [ ] API endpoints documented (if any)

## Handoff Checklist

Before sharing with the team:

- [ ] Admin email address configured
- [ ] Test submission completed end-to-end
- [ ] Instructions prepared for team
- [ ] Process for handling requests documented
- [ ] Support contact information provided
- [ ] Known issues documented (if any)

---

## Notes

Use this section to track any issues or observations during deployment:

```
Date: ___________
Deployed by: ___________
Deployment URL: ___________

Issues encountered:
-

Resolutions:
-

Additional notes:
-
```

