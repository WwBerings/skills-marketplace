---
name: brand-voice-v2
description: |
  Capture and apply your unique writing voice to all marketing content. Use this skill when:
  - Defining your brand's sound (tone, rhythm, vocabulary, beliefs)
  - Analyzing existing content to extract voice patterns
  - Ensuring any piece of copy sounds like YOU instead of generic AI
  
  Triggers: voice, tone, writing style, brand personality, "making content sound like me"
  
  V2 improvements: Integration with orchestrator pre-checks, voice profile passed to all downstream skills.
---

# Brand Voice V2

Your voice is your unfair advantage. Capture what makes your writing distinctly yours.

## When to Use This Skill

- **Capture**: Define voice from scratch or extract from existing content
- **Apply**: Transform generic copy into your voice
- **Audit**: Check if content matches your established voice

## Voice Capture Workflow

### Step 1: Gather Voice Samples

Ask: "Deel 3-5 voorbeelden van je schrijfwerk die het meest voelen als JIJ."

Prioritize:
- Content you wrote yourself (not edited)
- Pieces you're proud of
- Writing that got strong audience response

### Step 2: Analyze Voice Dimensions

Extract patterns across four dimensions:

**Rhythm**: Sentence length, paragraph structure, pacing
**Vocabulary**: Word choices, jargon stance, formality
**Tone**: Emotional register, attitude, energy
**Beliefs**: Values that show through, opinions, worldview

### Step 3: Document Voice Profile

Create profile with:
1. Voice summary (2-3 sentences)
2. Dimension details (specific patterns)
3. Do/Don't examples (side-by-side)
4. Signature phrases or patterns

See `references/voice-profile.md` for template.

### Step 4: Create Voice Tests

Build before/after examples showing transformation.
See `references/voice-tests.md` for examples.

## Voice Application Workflow

### Step 1: Load Voice Profile

If profile exists, read first. Look for:
- Core voice summary
- Specific patterns to apply
- Words/phrases to use or avoid

### Step 2: Write or Transform

**Writing new content:**
- Match rhythm patterns
- Use vocabulary from profile
- Maintain documented tone
- Let beliefs inform perspective

**Transforming existing content:**
- Identify generic patterns to replace
- Apply rhythm adjustments
- Swap vocabulary
- Adjust tone markers

### Step 3: Voice Check

Read aloud. Ask:
- Does this sound like the samples?
- Would the audience recognize this as [brand]?
- Are there any AI tells remaining?

**AI tells to eliminate:**
- "In today's fast-paced world..."
- "It's important to note that..."
- Excessive hedging ("might," "could potentially")
- Over-formal transitions
- Lists where prose would flow better

## Integration with Orchestrator

When orchestrator routes to this skill:
1. Complete voice capture/application
2. Return voice profile summary for downstream skills
3. All subsequent skills receive voice context

**Voice Handoff Format:**

```
## Voice Profile: [Brand Name]

**Summary:** [2-3 sentence essence]

**Key Patterns:**
- Rhythm: [e.g., "Short punchy sentences. Then longer flowing ones."]
- Vocabulary: [e.g., "Direct Dutch, avoids English jargon where possible"]
- Tone: [e.g., "Confident but approachable, mild humor"]
- Beliefs: [e.g., "Complexity is the enemy, simplicity wins"]

**Avoid:** [List of AI tells and generic patterns]

**Signature Phrases:** [Any recurring expressions]
```

This profile is passed to all content-producing skills.

## Output Format

When capturing voice:

```
## Brand Voice Profile: [Name]

### Voice Summary
[2-3 sentences capturing the essence]

### Dimensions

**Rhythm**
- Sentence length: [pattern]
- Paragraph structure: [pattern]
- Pacing: [pattern]

**Vocabulary**
- Formality: [level]
- Jargon stance: [approach]
- Characteristic words: [list]

**Tone**
- Register: [warm/distant/etc.]
- Attitude: [confident/tentative/etc.]
- Energy: [high/low/etc.]

**Beliefs**
- Stands for: [values]
- Pushes against: [anti-values]

### Do / Don't Examples

| Instead of... | Write... |
|---------------|----------|
| [Generic] | [On-brand] |
| [Generic] | [On-brand] |

### Signature Phrases
- [Phrase 1]
- [Phrase 2]

### AI Tells to Eliminate
- [Tell 1]
- [Tell 2]
```

## Success Metrics

Voice is working when:
- Audience can identify your content without seeing author
- Content feels consistent across channels
- Writing time decreases (voice becomes automatic)
- You stop editing AI output to "sound like you"

