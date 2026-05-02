# Scoring Rubric

This is optional. Beginners can use `simple-checklist.md`. Use this rubric when you want stricter consistency testing.

Score each image from 1 to 5.

```txt
5 = Excellent: clearly the same person, strong output
4 = Good: minor variation, usable
3 = Borderline: noticeable drift, maybe usable with caution
2 = Reject: significant drift
1 = Hard reject: looks like a different person
```

## Categories

### 1. Facial structure consistency

Check:

- Face shape
- Jawline
- Chin shape
- Eye shape and spacing
- Nose and mouth proportions

### 2. Hair + facial hair accuracy

Check:

- Hairline
- Crown density
- Temple recession
- Beard length
- Beard density
- Neckline

### 3. Skin + texture realism

Check:

- Natural texture
- Under-eye detail
- No plastic smoothing
- Realistic tone variation
- No glossy or waxy skin

### 4. Identity recognition

Ask:

- Would someone recognize this as the same person?
- Does it feel like the anchor image?
- Did the model recast the subject?

### 5. Brand + cultural alignment

Check:

- Does the outfit feel aligned?
- Does the environment feel real and lived-in?
- Does the output avoid generic stock-photo energy?
- Does it match the intended personality and context?

## Acceptance criteria

For a public-facing image, aim for:

```txt
4 or higher in facial structure
4 or higher in hair + beard
4 or higher in identity recognition
3 or higher in brand/cultural alignment
```

Reject anything that scores below 3 in facial structure or identity recognition.
