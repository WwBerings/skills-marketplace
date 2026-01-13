---
name: keyword-research-v2
description: |
  Content planning without expensive tools using the 6 Circles Method. Use this skill when:
  - Deciding what to write about
  - Prioritizing content topics
  - Finding SEO opportunities
  - Planning a content calendar
  - Identifying what your audience is searching for
  
  Triggers: keyword research, content planning, what to write about, SEO topics, content ideas, topic prioritization, search intent, blog ideas
  
  V2 improvements: Clear score interpretation with tiers, auto-handoff to seo-content-v2, claim labeling for estimates, full score breakdown in output.
---

# Keyword Research V2

The 6 Circles Method for finding what to write about—and knowing which topics deserve your time first.

## Core Workflow

### Step 1: Define the Circles

See `references/6-circles.md` for complete methodology.

**The Six Circles:**
1. **Expertise** - What you know deeply
2. **Audience Pain** - What keeps them up at night
3. **Search Volume** - Are people actually searching?
4. **Competition** - Can you rank?
5. **Business Value** - Does this lead to revenue?
6. **Content Gap** - Is there room for your take?

### Step 2: Generate Topic Seeds

Three sources:
1. **Your Brain** - Questions customers ask
2. **Audience Research** - Reddit, Twitter, support tickets
3. **Competitor Content** - What they write about (and don't)

### Step 3: Expand Keywords (Free Tools)

- Google Autocomplete
- People Also Ask
- Related Searches
- AnswerThePublic (limited free)
- AlsoAsked (limited free)

### Step 4: Score Each Topic

Rate each topic 1-3 on all six circles.

## 6 Circles Scoring

### Score Interpretation

| Score | Rating | Action |
|-------|--------|--------|
| 15-18 | **Excellent** | Priority 1 - execute immediately |
| 12-14 | **Good** | Include in content calendar |
| 9-11 | **Moderate** | Only if capacity allows |
| <9 | **Skip** | Time better spent elsewhere |

### Output Format (Required)

Always show full breakdown with toelichting:

```
## Topic: [Topic Name]

| Criterium | Score | Toelichting |
|-----------|-------|-------------|
| Expertise | X/3 | [reason] |
| Pain | X/3 | [reason] |
| Volume | X/3 | [reason] [SCHATTING - geen echte data] |
| Competition | X/3 | [reason] [SCHATTING - geen SERP analyse] |
| Value | X/3 | [reason] |
| Gap | X/3 | [reason] |
| **TOTAL** | **X/18** | **[Rating: Excellent/Good/Moderate/Skip]** |
```

### Claim Labeling (B2B Requirement)

Mark estimates clearly:
- Volume scores: Always add `[SCHATTING]` unless actual data provided
- Competition scores: Always add `[SCHATTING]` unless SERP analysis done
- Pain/Expertise/Value/Gap: Based on provided context, no label needed

## Handoff to SEO-Content

After generating blog topics, offer to continue:

```
"Ik heb [X] blog topics gevonden. Wil je dat ik er één uitwerk als volledige blog?

**Aanbevolen om te starten:**
[Topic met hoogste score]
- Keyword: [keyword]
- Search intent: [type]
- Score: [X/18] - [Rating]
- Unique angle: [angle]

Zeg 'ja' of kies een ander topic uit de lijst."
```

On confirmation → Route to seo-content-v2 with context from `references/handoff-templates.md`

## Output Format

```
## Keyword Research: [Topic Area]

### Seeds Explored
[List of seed topics analyzed]

### Top Opportunities (Prioritized)

**Tier 1: Quick Wins** (execute first)

| Topic | Score | Rating | Volume | Competition | Angle |
|-------|-------|--------|--------|-------------|-------|
| [Topic] | X/18 | [rating] | [est.] | [low/med] | [unique take] |

[Full score breakdown for each topic]

**Tier 2: Strategic Plays** (worth investment)
[Same format]

**Tier 3: Consider Later**
[Topics that score well but have constraints]

### Recommended Content Plan
- Month 1: [Quick wins to target]
- Month 2-3: [Build on wins, start pillars]
- Ongoing: [Cluster expansion]

### Topics to Skip
[What scored low and why]

---

**Handoff aanbod:** Wil je dat ik een van deze topics uitwerk naar een volledige blog?
```

## Integration

Keyword research feeds into:
- **seo-content-v2** - Keywords become content briefs (auto-handoff available)
- **newsletter-v2** - Topics inform newsletter themes
- **content-repurposer-v2** - Keyword data guides platform focus
- **lead-magnet-v2** - High-intent keywords suggest magnet topics

See `references/prioritization.md` for detailed prioritization framework.

