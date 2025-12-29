---
name: email-sequences
description: The emails between "subscribed" and "purchased." Create nurture, conversion, and launch sequences that turn subscribers into customers. Use this skill when building email automation, welcome sequences, sales sequences, launch campaigns, or any drip email system. Covers sequence types, email architecture, and timing. Triggers on email sequence, drip campaign, email automation, nurture sequence, welcome series, sales emails, launch emails, or email funnel.
---

# Email Sequences

Nurture. Convert. Launch. The emails between "subscribed" and "purchased."

## Why Sequences Matter

A single email is a moment. A sequence is a journey.

Sequences do what single emails can't:
- Build relationship over time
- Address objections progressively
- Create urgency that feels natural
- Move people from aware to ready

## When to Use This Skill

- **Welcome Sequences**: New subscribers
- **Nurture Sequences**: Building trust over time
- **Sales Sequences**: Converting to customers
- **Launch Sequences**: Time-limited campaigns
- **Re-engagement**: Inactive subscribers
- **Onboarding**: New customers

## Sequence Types

See `references/sequence-types.md` for detailed breakdowns.

Quick Overview:

| Type | Purpose | Length | Trigger |
|------|---------|--------|---------|
| Welcome | Introduce, set expectations | 3-5 emails | New subscriber |
| Nurture | Build trust, deliver value | 5-10 emails | After welcome |
| Sales | Convert to customer | 5-7 emails | When ready to sell |
| Launch | Time-limited offers | 6-10 emails | Launch window |
| Re-engagement | Revive inactive | 3-5 emails | Inactivity trigger |
| Onboarding | Activate new customers | 5-7 emails | Purchase |

## Core Workflow

### Step 1: Define the Sequence Goal

**Questions to answer:**

- What action do you want at the end?
- Who is receiving this sequence?
- What do they believe now?
- What do they need to believe to take action?
- What objections must be addressed?

### Step 2: Map the Belief Journey

Sequences work by shifting beliefs. Map what needs to change:

```
Email 1: Establish trust/credibility
Email 2: Identify with their problem
Email 3: Introduce solution concept
Email 4: Prove it works
Email 5: Address main objection
Email 6: Create urgency
Email 7: Make the offer
```

### Step 3: Choose Sequence Structure

**Structure Elements:**

```
[Trigger Event]
     ↓
[Email 1] → [Delay] → [Email 2] → [Delay] → [Email N]
     ↓
[Goal Action or Next Sequence]
```

**Timing Guidelines:**

| Sequence Type | Email Spacing |
|---------------|---------------|
| Welcome | Day 0, 1, 2, 4, 7 |
| Nurture | Every 2-3 days |
| Sales | Daily or every 2 days |
| Launch | Daily during launch |
| Re-engagement | Day 0, 3, 7 |

### Step 4: Write Each Email

See `references/email-anatomy.md` for email structure.

**For Each Email:**

1. **Purpose**: What does this email accomplish?
2. **Hook**: Why will they open? (subject line)
3. **Core**: What's the main message?
4. **Action**: What do you want them to do?

**Email Brief Template:**

```
Email #: [Position in sequence]
Purpose: [What belief shift or action]
Subject Line Options:
1. [Option 1]
2. [Option 2]
Core Message: [Main point in 1-2 sentences]
CTA: [Specific action]
```

### Step 5: Build the Sequence Flow

**Sequence Map:**

```
Email 1: [Name] - [Purpose]
  ↓ [X days]
Email 2: [Name] - [Purpose]
  ↓ [X days]
Email 3: [Name] - [Purpose]
  ↓
[Continue...]
```

**Branch Logic (if applicable):**

```
Email 3 →
  If opened: → Email 4A (continue sales)
  If not opened: → Email 4B (re-engage)
```

### Step 6: Apply Voice & Review

- Load brand-voice profile if available
- Apply voice to all emails
- Check for consistency across sequence
- Remove generic AI patterns

## Output Format

When creating email sequences, deliver:

```
## Email Sequence: [Sequence Name]

### Sequence Overview
Type: [Welcome/Nurture/Sales/Launch]
Trigger: [What starts this sequence]
Goal: [End action desired]
Length: [Number of emails]
Timing: [Email spacing]

### Belief Journey
Start: [What they believe now]
End: [What they need to believe]
Key shifts: [List main belief changes]

### Sequence Map

**Email 1: [Name]**
Purpose: [What this email does]
Subject Lines:
1. [Option 1]
2. [Option 2]
Preview Text: [Text]
Core Message: [Summary]
CTA: [Action]

[Full email copy]

---

**Email 2: [Name]**
[Same structure]

---

[Continue for all emails]

### Sequence Notes
- [Any conditional logic]
- [A/B testing recommendations]
- [Metrics to watch]
```

## Integration with Other Skills

Email sequences connect to:
- **lead-magnet**: Magnet triggers welcome sequence
- **direct-response-copy**: Sales principles apply to emails
- **brand-voice**: Voice applied throughout
- **positioning-angle**: Positioning threads through sequence

## Common Mistakes

1. **No clear goal**: Sequence wanders without destination
2. **All sales, no value**: People unsubscribe before buying
3. **Wrong timing**: Too fast overwhelms, too slow loses momentum
4. **Generic subject lines**: Never get opened
5. **No personality**: Sounds like every other brand
6. **Missing belief work**: Jumps to offer before building trust
7. **One-size-fits-all**: Same sequence for all audiences






