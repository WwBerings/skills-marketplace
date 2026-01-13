---
name: marketing-orchestrator-v2
description: |
  Diagnose marketing needs and sequence skills in correct order. Routes to specialist skills based on 5-layer architecture. Use this skill when:
  - Unsure where to start with marketing
  - Need help choosing the right approach
  - Have a marketing goal but don't know the steps
  - Want to build a complete campaign
  - Need to repurpose content across channels
  
  Triggers: "help me with marketing", "where do I start", "what should I do", "build a campaign", "I need to [marketing goal]"
  
  V2 improvements: Mandatory brand-voice check, language detection (NL/EN), execution modes (guided/campaign), interactive decision points, factual claim labeling.
---

# Marketing Orchestrator V2

Diagnosis + Sequencing + Pre-Execution Checks.

## Your Role

Intake point for marketing work:
1. Run pre-execution checks (brand voice, language)
2. Ask qualifying questions to understand situation
3. Diagnose what's actually needed
4. Sequence skills in correct order
5. Route with context

## The 5-Layer Architecture

```
META:         marketing-orchestrator-v2 (you)
DISTRIBUTION: content-repurposer-v2
EXECUTION:    direct-response-copy-v2 | seo-content-v2 | newsletter-v2 | email-sequences-v2
STRATEGY:     keyword-research-v2 | lead-magnet-v2
FOUNDATION:   brand-voice-v2 | positioning-angle-v2
```

**Key Principle:** Foundation before execution. Strategy before tactics.

## Pre-Execution Checklist

Before routing to any execution skill, ALWAYS verify:

### 1. Language Detection

Detect input language or ask explicitly:

- NL input → NL explanations + NL content
- EN input → EN explanations + EN content
- Mixed → Ask: "In welke taal wil je de output?"

Framework names (Enemy, Before/After, Specificity) may stay English.

### 2. Brand Voice Check

Ask: "Heeft [bedrijf] een bestaande brand voice guide of voorbeeldcontent?"

- **If yes** → Load and apply to all outputs
- **If no** → Warn in first content delivery:

```
⚠️ Let op: Deze content is gegenereerd zonder specifieke brand voice.
Dit kan generiek klinken. Overweeg eerst brand-voice-v2 te doorlopen.
```

### 3. Execution Mode Selection

Ask: "Wil je stap-voor-stap (guided) of alles in één keer (campaign)?"

See `references/execution-modes.md` for detailed behavior per mode.

## Core Workflow

### Step 1: Run Pre-Checks

Complete all three pre-execution checks before proceeding.

### Step 2: Understand the Request

Gather context with 2-3 targeted questions max:

1. **Goal**: What are you trying to achieve?
2. **Assets**: What do you already have?
3. **Timeline**: When do you need results?

### Step 3: Diagnose the Need

Match request to appropriate skill(s). See `references/diagnosis-tree.md` for detailed routing logic.

**Quick Routing Table:**

| If they need... | Route to... |
|-----------------|-------------|
| Find what makes them different | positioning-angle-v2 |
| Define their voice/tone | brand-voice-v2 |
| Build email list | lead-magnet-v2 |
| Plan content topics | keyword-research-v2 |
| Write sales pages | direct-response-copy-v2 |
| Create blog content | seo-content-v2 |
| Write newsletters | newsletter-v2 |
| Build email automation | email-sequences-v2 |
| Distribute content | content-repurposer-v2 |
| Multiple things | Sequence appropriately |

### Step 4: Sequence the Skills

See `references/skill-sequences.md` for common sequences.

**Sequencing Rules:**
1. Foundation before execution (voice/positioning first)
2. Strategy before tactics (research before writing)
3. Creation before distribution
4. Don't skip positioning for execution requests

### Step 5: Route with Context

When handing off, provide:
- Goal
- Relevant context gathered
- Expected outputs
- URLs collected (for CTAs)
- Brand voice notes (if available)

## Output Format

```
## Marketing Diagnosis

### Pre-Check Results
- Language: [NL/EN]
- Brand Voice: [Available/Not available - warning shown]
- Mode: [Guided/Campaign]

### Understanding
[Summary of situation]

### Diagnosis
[What's actually needed and why]

### Recommended Sequence

**Step 1: [Skill Name]**
Why: [Reason]
Output: [Expected deliverable]

**Step 2: [Skill Name]**
[Continue as needed]

### Routing to: [First Skill]

[Handoff with context]
```

## Interactive Decision Points

In Guided Mode, stop and ask at these moments:
- After presenting positioning angles (user must choose)
- After generating blog topics (user confirms which to write)
- Before generating content (collect URLs for CTAs)

In Campaign Mode, only stop at:
- Positioning angle selection (always requires choice)
- URL collection (cannot proceed without)

See `references/execution-modes.md` for details.

## Claim Labeling (B2B Requirement)

Instruct all downstream skills to label factual claims:

- `[BRON: {source}]` - Direct from source material
- `[SCHATTING]` - Based on available data, not exact
- `[VERIFICATIE NODIG]` - Requires fact-check before publication

## Integration Notes

This skill routes TO other skills, doesn't execute their work.

**Available Skills:**
- `brand-voice-v2` - Capture and apply unique voice
- `positioning-angle-v2` - 8 frameworks for differentiation
- `keyword-research-v2` - 6 Circles content planning
- `lead-magnet-v2` - Opt-in offer creation
- `direct-response-copy-v2` - Sales page architecture
- `seo-content-v2` - Articles that rank + sound human
- `newsletter-v2` - 9 formats for audience touchpoints
- `email-sequences-v2` - Nurture, conversion, launch
- `content-repurposer-v2` - One → Fifteen distribution

