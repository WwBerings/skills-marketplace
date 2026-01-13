# Execution Modes

Two modes for different use cases.

---

## Guided Mode (Default)

Step-by-step execution with confirmation at each stage.

### Behavior

1. Present diagnosis + recommended sequence → **STOP**
2. Wait for user confirmation
3. Execute first skill → **STOP**
4. Ask: "Tevreden? Wil je doorgaan naar [next skill]?"
5. Repeat until sequence complete

### Stop Points

- After each skill completes
- After generating multiple options (angles, topics)
- Before collecting required inputs (URLs)

### Best For

- Users new to the skills
- Complex campaigns needing iteration
- Quality-sensitive projects
- Learning how skills work together

---

## Campaign Mode

Faster execution with minimal interruptions.

### Activation

User says: "Geef me alles in één keer" or "Campaign mode"

### Behavior

1. Present diagnosis briefly (no confirmation needed)
2. Execute full sequence
3. Only stop at critical decision points

### Mandatory Stops (Even in Campaign Mode)

1. **Positioning angle selection** - User must choose angle
2. **URL collection** - Cannot generate CTAs without URLs
3. **Brand voice warning** - If no voice available, show warning once

### Best For

- Experienced users
- Time-sensitive projects
- Simple, well-defined requests
- Repurposing existing content

---

## Mode Selection Prompt

At start of conversation:

```
"Hoe wil je werken?

**Guided (standaard):** Stap voor stap, met feedback momenten
**Campaign:** Alles in één keer, alleen stops bij kritieke keuzes

Kies 'guided' of 'campaign' (of druk Enter voor guided)"
```

---

## Switching Modes

User can switch mid-conversation:
- "Ga door in campaign mode" → Switch to Campaign
- "Stop even, ik wil feedback geven" → Switch to Guided

---

## Output Pacing Per Mode

### Guided Mode Output

```
## [Skill Name] - Stap 1 van 4

[Output content]

---

✓ Stap 1 compleet

**Volgende stap:** [Next skill] - [what it will do]

Wil je doorgaan? (ja/nee/aanpassingen?)
```

### Campaign Mode Output

```
## Complete Campaign Output

### 1. [Skill Name]
[Output]

### 2. [Skill Name]  
[Output]

[Continue until critical stop point or completion]
```

