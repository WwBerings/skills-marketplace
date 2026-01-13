---
name: content-repurposer-v2
description: |
  Turn one piece into fifteen. Extract hooks, transform for platforms, maintain voice across channels. Use this skill when:
  - Repurposing content for multiple platforms
  - Creating social posts from articles or newsletters
  - Turning long-form content into threads
  - Maximizing reach from existing content
  
  Triggers: repurpose, content distribution, turn this into, adapt for [platform], social posts from article, "make more content from this"
  
  V2 improvements: Character counts per platform, URL collection before generation, claim labeling carried through.
---

# Content Repurposer V2

One piece becomes fifteen. Extract hooks. Transform for platforms. Maintain voice.

## Required Inputs

Before generating content with CTAs, collect URLs:

```
"Voordat ik content genereer, heb ik een paar URLs nodig:

1. Link naar het bronmateriaal/artikel: ___
2. Demo of contact pagina: ___
3. Relevante landing pages: ___

Welke URLs kan ik gebruiken?"
```

Insert actual URLs in output. Never use `[link]` placeholders.
If URL not provided: mark as `[URL NODIG: {type}]`

## Platform Character Limits

See `references/platform-limits.md` for all platforms.

**Always show character count in output:**

```
POST 1: [Format Type]
[X/3000 karakters] ✓

[Post content]
```

**Warning thresholds:**
- LinkedIn: >2500 chars → "⚠️ Overweeg inkorten voor betere engagement"
- Twitter: >270 chars → "⚠️ Bijna aan limiet"

## Core Workflow

### Step 1: Content Audit

Identify source content value:
- What hooks worked?
- What got engagement?
- What questions did it answer?

### Step 2: Extract Hooks

See `references/extraction.md` for detailed hook extraction.

**Hook Types:**
1. Opening hooks - First lines that grabbed attention
2. Insight hooks - Non-obvious points
3. Story hooks - Anecdotes that illustrate
4. Data hooks - Numbers and specifics
5. Contrarian hooks - Against-the-grain takes
6. How-to hooks - Tactical steps

### Step 3: Map Platform Transformations

See `references/platform-transforms.md` for platform specs.

**Quick Platform Guide:**

| Platform | Limit | Optimal | Tone |
|----------|-------|---------|------|
| LinkedIn | 3000 | 1300-1500 | Professional insight |
| Twitter/X | 280 | 240-270 | Punchy, direct |
| Twitter thread | 280/tweet | 10-15 tweets | Progressive story |
| Instagram | 2200 | 125-150 | Visual, accessible |
| Email subject | 60 | 30-50 | Curiosity/benefit |

### Step 4: Transform Content

**Principles:**
- Lead with the hook
- Match platform energy
- Standalone value
- Native format
- Actual URLs in CTAs

### Step 5: Maintain Voice Consistency

See `references/voice-consistency.md`.

Voice stays. Tone adapts.

## Claim Labeling

Carry through any claim labels from source content:
- `[BRON: {source}]` - Keep attribution
- `[SCHATTING]` - Keep estimate markers
- `[VERIFICATIE NODIG]` - Flag for review

## Output Format

```
## Repurposed Content: [Source Title]

### URLs Collected
- Bronmateriaal: [URL]
- Contact/Demo: [URL]
- Landing: [URL]

### Source Analysis
Type: [Newsletter/Article/Video]
Core Topic: [Main theme]
Best Hooks: [List top 3-5]

### Extracted Hooks

**Hook 1: [Hook text]**
- Type: [opening/insight/story/data/contrarian]
- Best for: [Platform suggestions]

### Platform Adaptations

**LinkedIn Post**
[X/3000 karakters] ✓

[Full post with actual URLs]

---

**Twitter Thread (X posts)**
[Total: X/280 per tweet]

1/ [Tweet 1]
2/ [Tweet 2]
[Continue...]

---

**Single Tweets (3-5)**

Tweet 1: [X/280 karakters] ✓
[Tweet]

Tweet 2: [X/280 karakters] ✓
[Tweet]

---

**Carousel Outline (10 slides)**
Slide 1: [Hook]
Slide 2-9: [Points]
Slide 10: [CTA with URL]

### Distribution Schedule
- Day 0: [What to post]
- Day 1: [What to post]
- Day 2-3: [What to post]

### Claims to Verify
[List any [VERIFICATIE NODIG] items carried from source]
```

## Integration

Content repurposer connects to:
- **newsletter-v2**: Newsletters become multi-platform content
- **seo-content-v2**: Articles become social and video
- **brand-voice-v2**: Voice maintained across channels
- **positioning-angle-v2**: Positioning hooks extracted and amplified

