# Diagnosis Tree

Decision logic for routing requests to the right skills.

---

## Primary Diagnosis Flow

```
START: What's the request?
│
├─ "Help me sell more / convert better"
│   └─ Do they have positioning?
│       ├─ NO → positioning-angle first
│       └─ YES → direct-response-copy
│           └─ Then: email-sequences (if nurture needed)
│
├─ "Help me get more traffic"
│   └─ Do they have positioning?
│       ├─ NO → positioning-angle first
│       └─ YES → keyword-research
│           └─ Then: seo-content
│               └─ Optional: content-repurposer
│
├─ "Help me build email list"
│   └─ Do they have an offer concept?
│       ├─ NO → lead-magnet (ideation mode)
│       └─ YES → lead-magnet (creation mode)
│           └─ Then: email-sequences (welcome)
│
├─ "Help me create content"
│   └─ What kind?
│       ├─ Blog/SEO → keyword-research → seo-content
│       ├─ Newsletter → newsletter
│       ├─ Sales copy → direct-response-copy
│       └─ Social → content-repurposer (from existing)
│
├─ "Help me distribute content"
│   └─ Do they have source content?
│       ├─ NO → Create first (appropriate skill)
│       └─ YES → content-repurposer
│
├─ "Help me with my voice/brand"
│   └─ brand-voice
│
├─ "Help me figure out positioning"
│   └─ positioning-angle
│
└─ "I don't know where to start"
    └─ Go to Goal Assessment
```

---

## Goal Assessment (For Unclear Requests)

When the request is vague, diagnose the goal.

### Question 1: What's your primary goal?

**A. Grow audience / Get more reach**
→ Distribution-focused

**B. Generate leads / Build email list**
→ Lead-gen focused

**C. Sell product / Close more customers**
→ Conversion-focused

**D. Create content / Build presence**
→ Content-focused

**E. Establish brand / Find voice**
→ Foundation-focused

### Based on Goal:

**A: Grow Audience**
```
Check: Have positioning? → positioning-angle
Check: Have voice? → brand-voice
Then: keyword-research OR newsletter
Then: content-repurposer
```

**B: Generate Leads**
```
Check: Have positioning? → positioning-angle
Then: lead-magnet
Then: email-sequences
```

**C: Sell More**
```
Check: Have positioning? → positioning-angle
Then: direct-response-copy
Then: email-sequences
```

**D: Create Content**
```
Check: Have voice? → brand-voice
Check: Know what to write? → keyword-research
Then: seo-content OR newsletter
Optional: content-repurposer
```

**E: Establish Brand**
```
Start: brand-voice
Then: positioning-angle
Then: Ready for execution
```

---

## Foundation Check

Before routing to execution skills, verify foundation.

### Voice Check

**Signs voice is missing:**
- "Everything sounds generic"
- "Content doesn't sound like us"
- "AI keeps writing differently each time"
- No documented voice guidelines
- Inconsistent tone across content

→ Route to brand-voice first

### Positioning Check

**Signs positioning is weak:**
- "We're not sure what makes us different"
- "Copy isn't converting"
- "We sound like everyone else"
- No clear hook or angle
- Competing on features/price only

→ Route to positioning-angle first

### Skip Foundation When:

- Voice is clearly established (show examples)
- Positioning is clearly articulated
- Request is narrow (just need X)
- Time constraint requires tactical focus (note the gap)

---

## Execution Routing

Once foundation is confirmed, route to execution.

### Writing Requests

| Request | Route To |
|---------|----------|
| Sales page / landing page | direct-response-copy |
| Blog post / article | seo-content |
| Newsletter | newsletter |
| Email sequence / automation | email-sequences |
| Social posts | content-repurposer |
| Opt-in page | lead-magnet |

### Strategy Requests

| Request | Route To |
|---------|----------|
| What should I write about? | keyword-research |
| How do I grow my list? | lead-magnet |
| What's my positioning? | positioning-angle |
| What's my voice? | brand-voice |

### Distribution Requests

| Request | Route To |
|---------|----------|
| Turn content into more content | content-repurposer |
| Get more reach from existing | content-repurposer |
| Adapt for different platforms | content-repurposer |

---

## Problem-Based Routing

### "My conversion is low"

**Diagnose:**
- Is positioning clear? → positioning-angle
- Is copy weak? → direct-response-copy
- Is nurture missing? → email-sequences
- Is traffic wrong? → keyword-research

### "I don't have enough content"

**Diagnose:**
- Don't know what to write? → keyword-research
- Don't have voice? → brand-voice
- Need to create? → seo-content or newsletter
- Need to repurpose? → content-repurposer

### "Nobody's signing up"

**Diagnose:**
- Is opt-in compelling? → lead-magnet
- Is landing page converting? → direct-response-copy
- Is positioning clear? → positioning-angle

### "Content sounds generic"

**Diagnose:**
- Is voice established? → brand-voice
- Is positioning clear? → positioning-angle
- Then re-do content with voice

---

## Routing Confidence

### High Confidence Routes

Direct matches where request clearly maps to skill:
- "Write a sales page" → direct-response-copy
- "Help with positioning" → positioning-angle
- "Create email sequence" → email-sequences

### Medium Confidence Routes

Need brief clarification:
- "Need help with marketing" → Goal assessment
- "Want more traffic" → Confirm traffic vs. leads vs. sales
- "Create content" → Confirm type

### Low Confidence Routes

Need significant exploration:
- "I don't know where to start"
- "Everything feels broken"
- "Help me grow"

→ Full discovery questions before routing






