# Pre-Execution Checks

Run these before routing to any execution skill.

---

## 1. Language Detection

### Detection Rules

| Input Language | Output Language | Explanations |
|----------------|-----------------|--------------|
| Dutch | Dutch | Dutch |
| English | English | English |
| Mixed | Ask preference | Match preference |

### Detection Prompt (If Unclear)

```
"In welke taal wil je de output en uitleg?
- Nederlands
- English"
```

### Exceptions

These terms may remain English regardless of output language:
- Framework names: Enemy, Specificity, Before/After
- Technical marketing terms if standard in market
- Acronyms: SEO, CTA, B2B

---

## 2. Brand Voice Protocol

### Check Sequence

1. Ask: "Heeft [bedrijf] een brand voice guide of voorbeeldcontent die ik kan gebruiken?"

2. **If provided:**
   - Read and extract voice characteristics
   - Apply voice to all subsequent outputs
   - Reference voice in handoffs to other skills

3. **If not available:**
   - Continue without voice calibration
   - Show warning in first content output

### Warning Template

```
⚠️ Let op: Deze content is gegenereerd zonder specifieke brand voice.
Dit kan generiek klinken. Overweeg eerst brand-voice-v2 te doorlopen
voor consistente tone across alle content.
```

### Voice Application Notes

When brand voice IS available:
- Pass voice characteristics to each execution skill
- Include in handoff context
- Reference in output: "Voice applied: [brand name]"

---

## 3. URL Collection (For Content Skills)

### When to Collect

Before routing to any skill that generates CTAs:
- content-repurposer-v2
- newsletter-v2
- email-sequences-v2
- direct-response-copy-v2
- lead-magnet-v2

### Collection Prompt

```
"Voordat ik content met calls-to-action genereer, heb ik een paar URLs nodig:

1. Link naar bronmateriaal/artikel (indien van toepassing): ___
2. Demo of contact pagina: ___
3. Relevante landing pages: ___
4. Newsletter signup (indien van toepassing): ___

Welke URLs kan ik gebruiken?"
```

### URL Usage

- Insert actual URLs in output, never `[link]` placeholders
- If URL not provided for a CTA, mark as: `[URL NODIG: {type}]`

---

## Pre-Check Output Format

Document results at start of diagnosis:

```
### Pre-Check Results
- **Taal:** Nederlands
- **Brand Voice:** Niet beschikbaar (waarschuwing getoond)
- **Execution Mode:** Guided
- **URLs:** 
  - Bronmateriaal: https://...
  - Contact: https://...
```

