# Platform Character Limits

Reference for content length constraints per platform.

---

## Character Limits Table

| Platform | Limit | Optimal | Warning Threshold |
|----------|-------|---------|-------------------|
| LinkedIn post | 3000 | 1300-1500 | >2500 |
| LinkedIn article | 125000 | 1500-2500 | N/A |
| Twitter/X | 280 | 240-270 | >270 |
| Twitter thread | 280/tweet | 10-15 tweets | N/A |
| Instagram caption | 2200 | 125-150 | >150 |
| Facebook | 63206 | 40-80 | N/A |
| Email subject | 60 | 30-50 | >50 |
| Meta description | 160 | 150-160 | >160 |
| Title tag | 60 | 50-60 | >60 |

---

## Display Format

Always show character count with status indicator:

```
[current/limit karakters] ✓    (within optimal)
[current/limit karakters] ⚠️   (at warning threshold)
```

---

## Platform-Specific Notes

### LinkedIn

**Post:**
- 3000 char hard limit
- First 210 chars visible before "...see more"
- Hook must work in first 210 chars
- Optimal engagement at 1300-1500 chars

**Article:**
- Much longer allowed (125K)
- But posts generally outperform articles
- Use articles for evergreen, in-depth content

### Twitter/X

**Single tweet:**
- 280 char hard limit
- Leave room for engagement (don't fill completely)
- URLs count as ~23 chars regardless of length

**Thread:**
- 280 per tweet
- Number tweets (1/, 2/, etc.)
- First tweet is the hook—make it count
- 10-15 tweets optimal for engagement

### Instagram

**Caption:**
- 2200 char limit
- But first 125 chars show before "...more"
- Hook in first line critical
- Use line breaks for readability

**Carousel text:**
- Keep slides text-light
- Main message in caption

### Email

**Subject line:**
- 60 chars typical display
- Mobile often cuts at 30-40 chars
- Front-load the hook
- A/B test different lengths

---

## Output Format Examples

### LinkedIn Post Output

```
**LinkedIn Post**
[1,247/3000 karakters] ✓

[Post content here]
```

### Near Limit Warning

```
**LinkedIn Post**
[2,734/3000 karakters] ⚠️ Overweeg inkorten voor betere engagement

[Post content here]
```

### Twitter Thread Output

```
**Twitter Thread (8 tweets)**

1/ [247/280 karakters] ✓
[Tweet content]

2/ [261/280 karakters] ✓
[Tweet content]

3/ [278/280 karakters] ⚠️
[Tweet content]
```

---

## Best Practices

1. **Always count before delivery** - Don't make user check
2. **Warn at threshold** - Not just at hard limit
3. **Hook in visible space** - Front-load regardless of total length
4. **Leave buffer for edits** - Don't max out
5. **Native format** - Match platform expectations, not just limits

