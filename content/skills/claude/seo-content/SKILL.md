---
name: seo-content-v3
description: |
  "Rank. Sound human." Create high-quality articles that rank in search engines while demonstrating Experience, Expertise, Authority, and Trust (E-E-A-T).

  Enhanced with:
  - E-E-A-T verification framework for credibility
  - Authenticity patterns to avoid robotic content
  - Concrete example guidance for real vs hypothetical

  Use this skill when:
  - Writing blog posts or articles for competitive niches
  - Creating guides or how-to content that requires credibility
  - Producing content for organic search traffic (especially YMYL topics)
  - Turning keyword research into authentic, expert content

  Triggers: SEO content, blog post, article writing, organic traffic, ranking content, search optimization, content brief, E-E-A-T, authenticity, expert content, "write an article about"

  V3 improvements: E-E-A-T verification checklist, authenticity patterns, example-based guidance, optional positioning/voice context, strongly encouraged dependencies.
---

# SEO Content V3

Structure for search engines. Authenticity for people. E-E-A-T for both.

## The Core Tension

SEO content has two masters:
1. **Google**: Needs structure, coverage, signals
2. **Readers**: Need value, engagement, humanity

This skill satisfies both through Google's E-E-A-T framework.

## Google's E-E-A-T Framework

Since 2022, Google prioritizes content that demonstrates:
- **Experience**: First-hand, demonstrable interaction with the topic
- **Expertise**: Depth of knowledge beyond basics
- **Authority**: External validation and credible sources
- **Trust**: Accuracy, transparency, and proper attribution

This skill integrates E-E-A-T throughout the writing process, not as afterthought.

See `references/humanizing.md` for detailed E-E-A-T integration guide and `references/authenticity-examples.md` for before/after transformations.

## Receiving Handoff Context

When routed from keyword-research-v2, expect this context:

```
## SEO Content Brief (from Keyword Research)

Target Keyword: [keyword]
Secondary Keywords: [from cluster]
Search Intent: [type]
6 Circles Score: [X/18]
Competition Assessment: [level] [SCHATTING]
Unique Angle: [differentiation point]
Authority Anchor: [available research/data]
```

Use all provided context. Do not re-research what's already been assessed.

## Core Workflow

### Step 1: Confirm Brief & Load Context

If no handoff context, create brief:

```
Target Keyword: [primary keyword]
Secondary Keywords: [related terms]
Search Intent: [informational/commercial/navigational/transactional]
Target Word Count: [based on competitors]
Content Format: [guide/how-to/list/comparison]
Unique Angle: [your differentiator]
```

**Enhanced with Context (Strongly Encouraged):**

If you have:
- **Positioning analysis** → Load hook and angle for differentiation
  - "What's your unique take on this topic?"
  - "What proof points support this positioning?"
- **Brand voice profile** → Apply voice patterns throughout
  - "What's your rhythm/vocabulary/tone?"
  - "What AI tells should I avoid?"

If not available:
- Proceed with competent generic voice (professional but conversational)
- Note in output: `[ENHANCED: Consider running brand-voice-v2 for distinctive voice]`

**Why this matters:** E-E-A-T Authority benefits significantly from distinctive voice and clear positioning. Content without these will score lower on the Authority pillar.

### Step 2: Structure for Search Engines

See `references/structure.md` for detailed guidance.

**Required Elements:**

- **Title (H1)**: Include keyword, under 60 chars, compelling
- **Meta Description**: 150-160 chars, keyword natural, clear value
- **Headers (H2, H3)**: Logical hierarchy, secondary keywords natural
- **Introduction**: Hook, state what they'll learn, keyword in first 100 words
- **Body**: Short paragraphs, subheadings every 300 words, lists where appropriate

### Step 3: Write for Humans

See `references/humanizing.md` for detailed guidance.

**Human Writing Markers:**
- Opinions and perspectives
- First-person where appropriate
- Specific examples from experience
- Conversational transitions
- Varied sentence structure

**Kill These AI Tells:**
- "In today's digital landscape..."
- "When it comes to..."
- "It's important to note..."
- "Let's dive in..."
- Generic lists with no personality

### Step 4: Apply Brand Voice

If brand voice available from orchestrator handoff:
- Apply voice characteristics throughout
- Note in output: "Voice applied: [brand name]"

If no brand voice:
- Show warning once in output
- Continue with competent but generic voice

## Claim Labeling (B2B Requirement)

Label every factual claim in output:

- `[BRON: {source}]` - Direct from source material or authority anchor
- `[SCHATTING]` - Estimate without hard data
- `[VERIFICATIE NODIG]` - Requires fact-check before publication

**Examples:**
- "Het traject duurt 6-12 maanden [BRON: CEO quote]"
- "Most companies struggle with this [VERIFICATIE NODIG]"

## Output Format

```
## SEO Content: [Title]

### Brief
Target Keyword: [keyword]
Search Intent: [type]
Target Length: [word count]
Unique Angle: [differentiator]
6 Circles Score: [if from handoff]

### Meta Data
Title: [H1] [X/60 chars]
Meta Description: [description] [X/160 chars]

### Article

[INTRODUCTION]
[Hook + what they'll learn + keyword naturally included]

[H2: Section 1]
[Content with personality, examples, specific advice]
[Claims labeled where applicable]

[H2: Section 2]
[Content...]

[CONCLUSION]
[Summary + CTA or next steps]

---
**Voice Applied:** [Yes - brand name / No - generic, warning shown]
**Internal Link Suggestions:** [list]
**Image Suggestions:** [list]
**Claims to Verify:** [list any [VERIFICATIE NODIG] items]
```

### E-E-A-T Verification Checklist

Rate your content 1-4 on each pillar (16 points total):

**Experience (0-4)**
- [ ] Contains personal example with real data (2 pts)
- [ ] Includes screenshots/artifacts/proof (1 pt)
- [ ] Discusses what didn't work or failures (1 pt)

**Expertise (0-4)**
- [ ] Explains "why" behind recommendations (1 pt)
- [ ] Addresses edge cases or exceptions (1 pt)
- [ ] Compares multiple approaches with trade-offs (1 pt)
- [ ] Cites authoritative sources with [BRON] labels (1 pt)

**Authority (0-4)**
- [ ] Author bio with credentials included (1 pt)
- [ ] References own case studies or prior work (1 pt)
- [ ] Third-party validation or media mentions (1 pt)
- [ ] Expert endorsements or testimonials (1 pt)

**Trust (0-4)**
- [ ] All claims labeled [BRON/SCHATTING/VERIFICATIE] (2 pts)
- [ ] Acknowledges limitations or what you don't know (1 pt)
- [ ] Clear author and contact information (1 pt)

**Total Score: ___/16**

**Score Interpretation:**
- 12-16: Excellent - Strong E-E-A-T signals
- 10-11: Good - Acceptable, consider strengthening weak pillars
- 6-9: Needs improvement - Add evidence before publishing
- 0-5: Weak - Significant gaps in credibility

**Recommended for competitive niches:** 12+ score

See `references/humanizing.md` for how to strengthen each pillar.

## Integration

SEO content connects to:
- **keyword-research-v2**: Receives topic briefs via handoff
- **brand-voice-v2**: Voice applied throughout writing
- **positioning-angle-v2**: Angle differentiates content
- **newsletter-v2**: Content feeds newsletter
- **content-repurposer-v2**: Articles become other formats

