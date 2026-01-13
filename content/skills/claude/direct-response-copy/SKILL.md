---
name: direct-response-copy-v2
description: |
  Sales pages that convert using architecture and persuasion principles—not templates. Use this skill when:
  - Writing sales pages or landing pages
  - Creating ad copy
  - Any copy meant to drive immediate action
  
  Teaches page architecture (how to structure) and persuasion principles (why people say yes).
  
  Triggers: sales page, landing page, conversion copy, persuasive writing, copywriting, direct response, selling with words, "make them buy"
  
  V2 improvements: URL collection for CTAs, claim labeling for proof points, receives positioning angle selection.
---

# Direct Response Copy V2

Architecture plus persuasion. The structure that guides, and the psychology that compels.

## Required Inputs

Before writing, collect:

```
"Voordat ik de sales page schrijf, heb ik een paar URLs nodig:

1. Checkout/koop pagina: ___
2. Demo of contact pagina: ___
3. Testimonials pagina (indien beschikbaar): ___
4. Case studies (indien beschikbaar): ___

Welke URLs kan ik gebruiken?"
```

## Core Architecture

Every sales page answers questions in order:

```
1. What is this? → HOOK
2. Is this for me? → PROBLEM + TARGET
3. What do I get? → SOLUTION + OFFER
4. Does it work? → PROOF
5. What if it doesn't work? → GUARANTEE
6. What do I do now? → CTA
7. What about [objection]? → FAQ
```

See `references/architecture.md` for detailed breakdowns.

## The Workflow

### Step 1: Receive Positioning Input

If routed from positioning-angle-v2, expect:
- Selected angle (user chose)
- Proof points with claim labels
- One-liner hook

If no positioning provided, run positioning-angle-v2 first or gather:
- Differentiated hook
- Key proof points
- Main objection to address

### Step 2: Gather Offer Details

**About the Offer:**
- What are they buying exactly?
- What transformation does it enable?
- Who is this perfect for?
- Who should NOT buy?

**About the Buyer:**
- Current state (pain)?
- Desired state (gain)?
- What have they tried before?
- Main objections?

### Step 3: Establish Persuasion Strategy

See `references/persuasion-principles.md` for full framework.

| Situation | Lead With |
|-----------|-----------|
| New/unknown offer | Social proof + Authority |
| Expensive offer | Value anchoring + Guarantee |
| Competitive market | Differentiation + Urgency |
| Skeptical audience | Proof stacking + Risk reversal |
| Transformational | Before/After + Future pacing |

### Step 4: Write Section by Section

**Section 1: Hook (Above Fold)**
- Headline: The promise
- Subhead: Clarifies/expands
- First CTA: For ready buyers
- Use actual checkout URL

**Section 2: Problem (Agitation)**
- Name frustrations
- Show understanding
- Agitate consequences
- Build desire

**Section 3: Solution (Introduction)**
- Introduce your thing
- Connect to problem
- Preview transformation

**Section 4: Offer (What They Get)**
- Core deliverables
- Bonuses
- Support/access
- Format/delivery

**Section 5: Proof (Why Believe)**
- Results/testimonials [with claim labels]
- Case studies [BRON: {source}]
- Credentials [VERIFICATIE NODIG if unverified]

**Section 6: Guarantee (Risk Reversal)**
- What you guarantee
- How long
- Clear process

**Section 7: Price + CTA**
- Value anchor
- Price reveal
- Clear CTA with actual URL

**Section 8: FAQ (Objection Handling)**
- Real objections
- Direct answers
- Evidence where needed

See `references/section-patterns.md` for examples.

## Claim Labeling (B2B Requirement)

Label all factual claims in proof sections:

- `[BRON: {source}]` - From testimonial, case study, data
- `[SCHATTING]` - Estimate or approximation
- `[VERIFICATIE NODIG]` - Needs fact-check

**Examples:**
- "Klanten zien gemiddeld 40% tijdsbesparing [BRON: klantonderzoek 2024]"
- "De markt groeit naar €2M [VERIFICATIE NODIG]"

## Output Format

```
## Sales Page: [Offer Name]

### Strategic Foundation
- Hook/angle: [from positioning]
- Target buyer: [who this is for]
- Primary objection: [biggest barrier]
- Persuasion emphasis: [principles used]

### URLs Collected
- Checkout: [URL]
- Demo/Contact: [URL]
- Testimonials: [URL]

### Page Copy

[HERO SECTION]
Headline: 
Subhead: 
CTA: [action] → [actual checkout URL]

[PROBLEM SECTION]
[Copy]

[SOLUTION SECTION]
[Copy]

[OFFER SECTION]
[Copy with deliverables]

[PROOF SECTION]
[Copy + testimonials with claim labels]

[GUARANTEE SECTION]
[Copy]

[PRICE + CTA SECTION]
[Copy with actual URL]

[FAQ SECTION]
Q: [Objection]
A: [Answer]

---

### Claims to Verify
[List all [VERIFICATIE NODIG] items]
```

## Integration

Direct response copy connects to:
- **positioning-angle-v2**: Receives selected hook
- **brand-voice-v2**: Applies voice to all copy
- **lead-magnet-v2**: Same principles for opt-in pages
- **email-sequences-v2**: Sales emails use these principles

