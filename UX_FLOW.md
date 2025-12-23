# User Experience Flow

Visual documentation of the Skills & Agents Marketplace user interface.

## Page Structure

```
┌─────────────────────────────────────┐
│           Hero Section              │  ← Full viewport
│     (particle animation, CTAs)      │
├─────────────────────────────────────┤
│          Catalog Section            │  ← Scrollable grid
│       (search, filter, cards)       │
├─────────────────────────────────────┤
│      Custom Request Section         │  ← 4-step form
│         (inline form)               │
└─────────────────────────────────────┘
```

## Hero Section

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│        [Animated Particle Background]                   │
│                                                         │
│         AI Agents & Marketing Skills                    │  ← Word reveal
│              Built for You                              │     animation
│                                                         │
│    Browse ready-to-use solutions or request             │  ← Fade in
│    a custom build tailored to your workflow.            │
│                                                         │
│   ┌─────────────────────┐  ┌──────────────────────┐    │
│   │  Browse Agent       │  │  Request AI Agent    │    │
│   │     Catalog         │  │       Build          │    │
│   └─────────────────────┘  └──────────────────────┘    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Interactions:**
- Particle animation responds to mouse movement
- Text reveals word by word with blur effect
- Both buttons smooth scroll to respective sections

## Custom Request Form

### Step 1: Category Selection

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│              Need Something Custom?                      │
│   Tell us about your challenge and we'll build           │
│        an AI agent tailored to your needs.               │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │     (1)────────(2)────────(3)────────(4)           │ │
│  │      ●         ○          ○          ○             │ │
│  ├────────────────────────────────────────────────────┤ │
│  │                                                    │ │
│  │  What type of challenge are you trying to solve?   │ │
│  │                                                    │ │
│  │  ┌────────────────────┐  ┌────────────────────┐   │ │
│  │  │ Content Creation & │  │ Sales & Lead       │   │ │
│  │  │    Distribution    │  │   Generation       │   │ │
│  │  └────────────────────┘  └────────────────────┘   │ │
│  │                                                    │ │
│  │  ┌────────────────────┐  ┌────────────────────┐   │ │
│  │  │ Marketing          │  │ SEO & Analytics    │   │ │
│  │  │   Automation       │  │                    │   │ │
│  │  └────────────────────┘  └────────────────────┘   │ │
│  │                                                    │ │
│  │  ┌────────────────────┐  ┌────────────────────┐   │ │
│  │  │ Email Marketing &  │  │ Customer Research  │   │ │
│  │  │     Nurture        │  │  & Intelligence    │   │ │
│  │  └────────────────────┘  └────────────────────┘   │ │
│  │                                                    │ │
│  │  ┌────────────────────┐  ┌────────────────────┐   │ │
│  │  │ Social Media       │  │ Data Integration   │   │ │
│  │  │   Management       │  │   & Reporting      │   │ │
│  │  └────────────────────┘  └────────────────────┘   │ │
│  │                                                    │ │
│  │  ┌────────────────────┐                           │ │
│  │  │      Other         │                           │ │
│  │  └────────────────────┘                           │ │
│  │                                                    │ │
│  │                              [ Next Step → ]      │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Notes:**
- 9 category cards with text only (no emojis)
- Cards highlight on hover
- Selected card has primary border and background
- Next button disabled until selection made

### Step 2: Current State

```
┌──────────────────────────────────────────────────────────┐
│  ┌────────────────────────────────────────────────────┐ │
│  │     (1)────────(2)────────(3)────────(4)           │ │
│  │      ●         ●          ○          ○             │ │
│  ├────────────────────────────────────────────────────┤ │
│  │                                                    │ │
│  │  ┌──────────────────────────────────────────────┐ │ │
│  │  │  Selected: Content Creation & Distribution   │ │ │  ← Category badge
│  │  └──────────────────────────────────────────────┘ │ │
│  │                                                    │ │
│  │  Tell us about your current process                │ │
│  │                                                    │ │
│  │  How do you handle this today? *                   │ │
│  │  ┌──────────────────────────────────────────────┐ │ │
│  │  │                                              │ │ │
│  │  │                                              │ │ │
│  │  └──────────────────────────────────────────────┘ │ │
│  │                                                    │ │
│  │  What's not working? *                             │ │
│  │  ┌──────────────────────────────────────────────┐ │ │
│  │  │                                              │ │ │
│  │  │                                              │ │ │
│  │  └──────────────────────────────────────────────┘ │ │
│  │                                                    │ │
│  │  [ ← Back ]                    [ Next Step → ]    │ │
│  └────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

**Notes:**
- Category badge shows selected category from Step 1
- Both textareas required
- Placeholder text provides examples

### Step 3: Desired Outcome

```
┌──────────────────────────────────────────────────────────┐
│  ┌────────────────────────────────────────────────────┐ │
│  │     (1)────────(2)────────(3)────────(4)           │ │
│  │      ●         ●          ●          ○             │ │
│  ├────────────────────────────────────────────────────┤ │
│  │                                                    │ │
│  │  ┌──────────────────────────────────────────────┐ │ │
│  │  │  Selected: Content Creation & Distribution   │ │ │  ← Category badge
│  │  └──────────────────────────────────────────────┘ │ │
│  │                                                    │ │
│  │  What would success look like?                     │ │
│  │                                                    │ │
│  │  Ideal outcome *                                   │ │
│  │  ┌──────────────────────────────────────────────┐ │ │
│  │  │                                              │ │ │
│  │  └──────────────────────────────────────────────┘ │ │
│  │                                                    │ │
│  │  Tools you currently use (optional)                │ │
│  │  ┌──────────────────────────────────────────────┐ │ │
│  │  │                                              │ │ │
│  │  └──────────────────────────────────────────────┘ │ │
│  │                                                    │ │
│  │  Team size (optional)                              │ │
│  │  ┌──────────────────────────────────────────────┐ │ │
│  │  │ Select team size                        ▼    │ │ │
│  │  └──────────────────────────────────────────────┘ │ │
│  │                                                    │ │
│  │  [ ← Back ]                    [ Next Step → ]    │ │
│  └────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

**Notes:**
- Category badge persists
- Only "Ideal outcome" is required
- Tools and team size are optional

### Step 4: Contact Information

```
┌──────────────────────────────────────────────────────────┐
│  ┌────────────────────────────────────────────────────┐ │
│  │     (1)────────(2)────────(3)────────(4)           │ │
│  │      ●         ●          ●          ●             │ │
│  ├────────────────────────────────────────────────────┤ │
│  │                                                    │ │
│  │  ┌──────────────────────────────────────────────┐ │ │
│  │  │  Selected: Content Creation & Distribution   │ │ │  ← Category badge
│  │  └──────────────────────────────────────────────┘ │ │
│  │                                                    │ │
│  │  Contact Information                               │ │
│  │                                                    │ │
│  │  Your Name *                                       │ │
│  │  ┌──────────────────────────────────────────────┐ │ │
│  │  │                                              │ │ │
│  │  └──────────────────────────────────────────────┘ │ │
│  │                                                    │ │
│  │  Email Address *                                   │ │
│  │  ┌──────────────────────────────────────────────┐ │ │
│  │  │                                              │ │ │
│  │  └──────────────────────────────────────────────┘ │ │
│  │                                                    │ │
│  │  Company/Team *                                    │ │
│  │  ┌──────────────────────────────────────────────┐ │ │
│  │  │                                              │ │ │
│  │  └──────────────────────────────────────────────┘ │ │
│  │                                                    │ │
│  │  [ ← Back ]                  [ Submit Request ]   │ │
│  └────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

**Notes:**
- Category badge persists
- Three required fields: name, email, company
- No timeline field
- Submit button shows loading spinner during submission

### Success State

```
┌──────────────────────────────────────────────────────────┐
│  ┌────────────────────────────────────────────────────┐ │
│  │                                                    │ │
│  │                      ┌───┐                         │ │
│  │                      │ ✓ │                         │ │
│  │                      └───┘                         │ │
│  │                                                    │ │
│  │              Request Submitted!                    │ │
│  │                                                    │ │
│  │   Thanks! I'll review your requirements and get    │ │
│  │   back to you within 24-48 hours with a proposal.  │ │
│  │                                                    │ │
│  └────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

## Responsive Behavior

### Desktop (1024px+)
- Category cards: 3-column grid
- Full-width hero
- Side-by-side CTA buttons

### Tablet (768px - 1023px)
- Category cards: 2-column grid
- Full-width hero
- Side-by-side CTA buttons

### Mobile (< 768px)
- Category cards: 1-column stack
- Hero text scales down
- CTA buttons stack vertically
- Form fields full-width
- Navigation buttons stack

## Animation Details

### Hero
- Particle animation: continuous, responds to mouse
- Word reveal: staggered, 0.05s per word, blur + slide up
- Subtext: fade in after words complete
- Buttons: fade in after subtext

### Form Steps
- Step transitions: fade out left, fade in right (300ms)
- Progress indicator: instant update with checkmark
- Category badge: fade in from top

### Success
- Checkmark: scale in with bounce
- Text: fade in

## Color Scheme

- Background: Black with gradient overlay
- Cards: Dark gray with border
- Primary accent: Blue (buttons, selected states, badges)
- Text: White (headings), gray (body)
- Particles: Light blue, 30% opacity

