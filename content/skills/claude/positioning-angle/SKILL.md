---
name: positioning-angle-v2
description: |
  Surface differentiated hooks and unique angles BEFORE writing any marketing copy. Use this skill when:
  - Launching something new
  - Repositioning existing offers
  - Finding what makes you different
  - Crafting value propositions
  - Copy isn't converting because the angle is weak
  
  Contains 8 positioning frameworks to find hooks that make things sell. 
  
  Triggers: positioning, differentiation, unique angle, value proposition, "why should they buy", competitive advantage, "what makes us different"
  
  V2 improvements: Mandatory user choice for angle selection (never auto-select), claim labeling for proof points.
---

# Positioning Angle V2

The hook comes before the copy. Surface differentiated angles using 8 frameworks—know WHAT to say before worrying about HOW to say it.

## Why This Matters

Most marketing fails at the positioning layer, not the copy layer. Strong angle with mediocre copy sells. Beautiful prose on weak angle loses.

Find the angle first.

## Core Workflow

### Step 1: Gather Positioning Inputs

Collect before running frameworks:

**About the Offer:**
- What does it do? (functionality)
- What does it enable? (outcome)
- Who is it for? (specific audience)

**About the Market:**
- Who are the main competitors?
- What do they claim?

**About the Buyer:**
- What problem brings them to you?
- What have they already tried?

### Step 2: Select Framework(s)

Choose 2-3 frameworks based on situation. See `references/8-frameworks.md`.

| Situation | Best Frameworks |
|-----------|-----------------|
| Crowded market | Contrarian, Enemy, Category Creation |
| Unknown category | Analogy, Before/After |
| Premium pricing | Outcome, Specificity |
| Complex product | Simplification, Analogy |
| Me-too product | Enemy, Contrarian |

### Step 3: Run Framework Analysis

For each framework:
1. Apply the core question
2. Generate 3-5 potential angles
3. Stress-test against criteria

**Evaluation Criteria:**
- Is it true? (Can you prove it?)
- Is it different? (Does anyone else claim this?)
- Is it relevant? (Does the buyer care?)
- Is it specific? (Concrete enough to visualize?)

### Step 4: Extract Hook Candidates

See `references/hook-examples.md` for examples.

For each angle, articulate:
- **One-liner**: Single sentence hook
- **Expanded**: 2-3 sentence positioning statement
- **Proof**: Hook + evidence [with claim labels]

## Angle Selection (REQUIRED)

After generating positioning angles, **ALWAYS ask user to choose.**

Do NOT select an angle autonomously. Do NOT say "Angle X wins."

### Selection Prompt Format

```
"Ik heb [X] positioning angles gevonden:

**1. [Angle Name]** - [One-line description]
   Best voor: [use case]
   Proof points: [what makes it credible]
   
**2. [Angle Name]** - [One-line description]
   Best voor: [use case]
   Proof points: [what makes it credible]

**3. [Angle Name]** - [One-line description]
   Best voor: [use case]
   Proof points: [what makes it credible]

Welke past het beste bij jullie doelgroep en campagnedoel?
(Of: 'Leg uit waarom je [X] zou kiezen' voor advies)"
```

Wait for user selection before proceeding to any downstream skill.

## Claim Labeling (B2B Requirement)

Label proof points:

- `[BRON: {source}]` - From provided materials
- `[SCHATTING]` - Estimate/assumption
- `[VERIFICATIE NODIG]` - Needs verification

**Example:**
```
**Angle: Specificity**
- One-liner: "548 bedrijven riskeren uitsluiting" [BRON: onderzoeksdata]
- Proof: "27% van de sector" [BRON: NEN register analyse]
```

## The 8 Frameworks (Overview)

1. **Contrarian** - "What does everyone believe that's actually wrong?"
2. **Enemy** - "What common approach is holding people back?"
3. **Before/After** - "What transformation do you enable?"
4. **Analogy** - "What is this the [X] of [Y]?"
5. **Outcome** - "What's the ultimate result people want?"
6. **Specificity** - "What precise, measurable claim can you make?"
7. **Category Creation** - "What new category could this define?"
8. **Simplification** - "What complexity do you eliminate?"

See `references/8-frameworks.md` for detailed methodology.

## Output Format

```
## Positioning Analysis for [Offer]

### Context
[Brief summary of offer, market, buyer situation]

### Frameworks Applied
[Which 2-3 frameworks were used and why]

### Angles Identified

**Angle 1: [Name]**
- Framework: [Which framework]
- One-liner: [Single sentence hook]
- Expanded: [2-3 sentences]
- Proof points: [Evidence with claim labels]
- Best voor: [Use case]
- Risk: [Any weakness]

**Angle 2: [Name]**
[Same structure]

**Angle 3: [Name]**
[Same structure]

---

## Keuze Moment

Welke angle past het beste bij jullie doelgroep en campagnedoel?

1. [Angle 1 name]
2. [Angle 2 name]
3. [Angle 3 name]

(Of vraag om advies: "Leg uit waarom je [X] zou kiezen")
```

## Integration

After user selects angle, it feeds into:
- **direct-response-copy-v2**: Angle becomes sales page foundation
- **lead-magnet-v2**: Angle shapes opt-in hooks
- **seo-content-v2**: Angle informs content differentiation
- **email-sequences-v2**: Angle threads through nurture messaging

Always establish positioning BEFORE moving to execution skills.

