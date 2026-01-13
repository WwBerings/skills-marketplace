---
name: email-sequences-v2
description: |
  The emails between "subscribed" and "purchased." Create nurture, conversion, and launch sequences that turn subscribers into customers. Use this skill when:
  - Building email automation
  - Creating welcome sequences
  - Writing sales sequences
  - Planning launch campaigns
  - Any drip email system
  
  Triggers: email sequence, drip campaign, email automation, nurture sequence, welcome series, sales emails, launch emails, email funnel
  
  V2 improvements: Multiple subject line variants (3-5) per email with A/B test recommendations, URL collection for CTAs, claim labeling.
---

# Email Sequences V2

Nurture. Convert. Launch. The emails between "subscribed" and "purchased."

## Why Sequences Matter

A single email is a moment. A sequence is a journey.

Sequences:
- Build relationship over time
- Address objections progressively
- Create urgency that feels natural
- Move people from aware to ready

## Required Inputs

Before writing, collect:

```
"Voordat ik de email sequence schrijf, heb ik URLs nodig voor de CTAs:

1. Sales/product pagina: ___
2. Demo of contact pagina: ___
3. Landing page voor offer: ___
4. Testimonials of case studies pagina: ___

Welke URLs kan ik gebruiken?"
```

## Sequence Types

See `references/sequence-types.md` for detailed breakdowns.

| Type | Purpose | Length | Trigger |
|------|---------|--------|---------|
| Welcome | Introduce, set expectations | 3-5 emails | New subscriber |
| Nurture | Build trust, deliver value | 5-10 emails | After welcome |
| Sales | Convert to customer | 5-7 emails | When ready to sell |
| Launch | Time-limited offers | 6-10 emails | Launch window |
| Re-engagement | Revive inactive | 3-5 emails | Inactivity |
| Onboarding | Activate customers | 5-7 emails | Purchase |

## Core Workflow

### Step 1: Define Sequence Goal
### Step 2: Map Belief Journey
### Step 3: Choose Structure
### Step 4: Write Each Email
### Step 5: Build Sequence Flow

## Subject Line Generation

Generate 3-5 subject line variants per email:

### Output Format Per Email

```
**Email [X]: [Name]**

**Subject Line Opties:**

1. [Curiosity]: "[subject]" [X/60 chars]
2. [Urgency]: "[subject]" [X/60 chars]
3. [Benefit]: "[subject]" [X/60 chars]
4. [Data/Number]: "[subject]" [X/60 chars]
5. [Question]: "[subject]" [X/60 chars]

**A/B Test Aanbeveling:** Test [X] vs [Y]
(contrast: [strategy A] vs [strategy B])

**Preview Text:** [extension of curiosity]
```

### Subject Line Types by Sequence Stage

| Stage | Best Subject Types |
|-------|-------------------|
| Early (welcome) | Personal, Benefit, Question |
| Middle (nurture) | Curiosity, Data, Story |
| Late (sales) | Urgency, Specificity, FOMO |
| Final (close) | Urgency, Direct ask |

### A/B Testing Guidance

For sequences, test:
- Email 1: High volume, test fundamental approach
- Middle emails: Test curiosity vs benefit
- Final emails: Test urgency level

## Claim Labeling (B2B Requirement)

Label factual claims:
- `[BRON: {source}]` - From source
- `[SCHATTING]` - Estimate
- `[VERIFICATIE NODIG]` - Needs verification

Especially important for:
- Success metrics
- Customer results
- Industry statistics
- Competitive claims

## Output Format

```
## Email Sequence: [Sequence Name]

### Sequence Overview
Type: [Welcome/Nurture/Sales/Launch]
Trigger: [What starts this sequence]
Goal: [End action desired]
Length: [Number of emails]
Timing: [Email spacing]

### URLs Collected
- Sales page: [URL]
- Demo: [URL]
- Testimonials: [URL]

### Belief Journey
Start: [What they believe now]
End: [What they need to believe]
Key shifts: [List main belief changes]

### Sequence Map

---

**Email 1: [Name]**
Purpose: [What this email does]
Timing: [When sent]

**Subject Line Opties:**
1. [Curiosity]: "[subject]" [X/60 chars]
2. [Personal]: "[subject]" [X/60 chars]
3. [Benefit]: "[subject]" [X/60 chars]
4. [Question]: "[subject]" [X/60 chars]
5. [Data]: "[subject]" [X/60 chars]

**A/B Test Aanbeveling:** Test [1] vs [3]
(contrast: curiosity vs direct benefit)

**Preview Text:** [text]

**Core Message:** [Summary]
**CTA:** [Action with actual URL]

[Full email copy with claim labels]

---

**Email 2: [Name]**
[Same structure]

---

[Continue for all emails]

### Sequence Notes
- [Conditional logic if any]
- [A/B testing priorities]
- [Metrics to watch]

### Claims to Verify
[List all [VERIFICATIE NODIG] items from sequence]
```

## Integration

Email sequences connect to:
- **lead-magnet-v2**: Magnet triggers welcome sequence
- **direct-response-copy-v2**: Sales principles apply
- **brand-voice-v2**: Voice applied throughout
- **positioning-angle-v2**: Positioning threads through sequence

