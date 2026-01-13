---
name: newsletter-v2
description: |
  Turn content into recurring audience touchpoints with 9 newsletter formats. Use this skill when:
  - Creating email newsletters
  - Planning newsletter strategy
  - Choosing newsletter formats
  - Writing newsletter editions
  - Building audience relationships through email
  
  Triggers: newsletter, email newsletter, weekly email, audience building, subscriber communication, "write a newsletter"
  
  V2 improvements: Multiple subject line variants (3-5) per edition with A/B test recommendations, URL collection for CTAs, claim labeling.
---

# Newsletter V2

Nine formats. From curated to story-driven. Turn content into recurring audience touchpoints.

## Why Newsletters Matter

Your email list is the only audience you own. Social platforms change algorithms, but your subscribers chose to hear from you.

## Required Inputs

Before writing, collect:

```
"Voordat ik de newsletter schrijf, heb ik een paar dingen nodig:

1. Link naar content/artikel (indien van toepassing): ___
2. Signup of landing page voor CTA: ___
3. Contact/demo pagina: ___

Welke URLs kan ik gebruiken?"
```

## The 9 Formats

See `references/9-formats.md` for detailed breakdown.

| Format | Best For | Effort |
|--------|----------|--------|
| Curated | Busy professionals | Low |
| Educational | Teaching audience | Medium |
| Story-Driven | Building connection | Medium |
| Behind-the-Scenes | Transparency | Low |
| Opinion/POV | Thought leadership | Medium |
| Roundup | Recapping content | Low |
| Interview | Leveraging others | High |
| Challenge | Driving action | High |
| Hybrid | Flexible format | Medium |

## Core Workflow

### Step 1: Choose Format
### Step 2: Define Structure  
### Step 3: Plan Edition
### Step 4: Write Edition

See `references/9-formats.md` for format-specific guidance.

## Subject Line Generation

Generate 3-5 subject line variants per newsletter:

### Output Format

```
**Subject Line Opties:**

1. [Curiosity]: "[subject]" [X/60 chars]
2. [Data/Number]: "[subject]" [X/60 chars]
3. [Benefit]: "[subject]" [X/60 chars]
4. [Personal]: "[subject]" [X/60 chars]
5. [Question]: "[subject]" [X/60 chars]

**A/B Test Aanbeveling:** Test [X] vs [Y] 
(contrast: [strategy A - emotional] vs [strategy B - rational])
```

### Subject Line Types

| Type | Formula | When to Use |
|------|---------|-------------|
| Curiosity | [Unexpected element] | When you have a hook |
| Data/Number | [Specific stat] | When you have numbers |
| Benefit | [What they'll get] | When value is clear |
| Personal | [Direct/intimate] | When sharing experience |
| Question | [Prompt thought] | When creating dialogue |
| Urgency | [Time element] | When relevant deadline |

### A/B Testing Guidance

Always recommend contrasting strategies:
- Emotional vs Rational
- Short vs Long
- Question vs Statement
- Specific vs Mysterious
- Personal vs Professional

## Claim Labeling (B2B Requirement)

Label factual claims:
- `[BRON: {source}]` - From source
- `[SCHATTING]` - Estimate
- `[VERIFICATIE NODIG]` - Needs verification

## Output Format

```
## Newsletter Edition: [Theme/Title]

### Edition Brief
Format: [Which of the 9]
Theme: [Topic]
Hook Angle: [What makes this interesting]
CTA: [Desired reader action]

### URLs Collected
- Content link: [URL]
- CTA destination: [URL]

### Subject Line Opties (3-5)

1. [Curiosity]: "[subject]" [X/60 chars]
2. [Data/Number]: "[subject]" [X/60 chars]
3. [Benefit]: "[subject]" [X/60 chars]
4. [Personal]: "[subject]" [X/60 chars]
5. [Question]: "[subject]" [X/60 chars]

**A/B Test Aanbeveling:** Test [1] vs [3]
(contrast: curiosity-gap vs clear-benefit)

**Preview Text:** [Text that shows after subject]

### Newsletter Copy

[OPENING]
[Hook + transition - 1-3 sentences]

[MAIN CONTENT]
[Format-specific content with claim labels where applicable]

[CLOSING]
[Wrap + CTA with actual URL + sign-off]

---

**Claims to Verify:** [List any [VERIFICATIE NODIG] items]
```

## Integration

Newsletter connects to:
- **brand-voice-v2**: Voice applied to all writing
- **seo-content-v2**: Articles become newsletter topics
- **content-repurposer-v2**: Newsletter transforms for platforms
- **positioning-angle-v2**: Newsletter reinforces positioning

