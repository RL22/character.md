# install.md

Use this guide to set up your own `character.md` file and generate consistent photorealistic AI images.

You do not need to be technical. The workflow is:

```txt
Create → Check → Refine
```

---

## Step 1: Gather reference photos

Collect 3–5 photos of the same person.

Recommended set:

- 1 front-facing photo
- 1 side profile
- 1 three-quarter angle
- 1 natural candid photo
- 1 full-body or waist-up photo if you want body accuracy

Use clear, well-lit images. Avoid heavy filters, sunglasses, hats, or extreme angles for your main references.

---

## Step 2: Fill out strict Character DNA

Open `character.md` and update the strict identity sections:

- Face shape
- Jawline
- Chin
- Eyes
- Skin tone
- Skin texture
- Hairline
- Hair length
- Beard length and density
- Expression range

Be specific, but natural.

Example:

```txt
Oval face shape with a defined jawline and slightly narrow chin.
Very short cropped hair, slight recession at temples, natural hairline.
Short beard, 3–5mm length, with natural density variation.
```

---

## Step 3: Add Face Lock

Add the Face Lock snippet to your prompts when you care about consistency.

```txt
must maintain identical facial structure, same person across all images,
no variation in bone structure, no reinterpretation,
consistent face shape, jawline, eyes, and proportions
```

This tells the model not to recast the person.

---

## Step 4: Add body composition

Optional but useful for lifestyle images.

Add:

- Height
- Weight
- Build
- Posture
- Movement style

Example:

```txt
Height: 6ft
Weight: 195lbs
Build: athletic lean
Posture: upright, relaxed shoulders, grounded stance
```

---

## Step 5: Define wardrobe and vibe

Keep the identity strict, but let style flex.

Add:

- Wardrobe style
- Color palette
- Fit preferences
- Style references
- Things to avoid

Example:

```txt
Tech founder with streetwear and workwear influence.
Mixes chore coats, heavyweight tees, relaxed chinos, beanies, and clean sneakers.
No visible logos.
```

---

## Step 6: Generate your baseline headshot

Start simple before generating lifestyle scenes.

Use:

- Strict Character DNA
- Face Lock snippet
- Neutral outfit
- Clean background
- 85mm lens
- Soft studio lighting

Goal: get one image that feels like your anchor identity.

---

## Step 7: Generate a lifestyle batch

Once your baseline is strong, generate 6–8 lifestyle images.

Use one consistent scene type at a time:

- Café working
- Desk setup
- Podcast recording
- Coworking space
- On stage presenting

Do not change everything at once. Keep the Character DNA fixed.

---

## Step 8: Run the quick consistency check

Ask three questions:

1. Does the face still look like the same person?
2. Are the hairline and beard consistent?
3. Does the image feel personal instead of generic or stock?

If yes, keep it.

If no, refine `character.md` and regenerate.

---

## Step 9: Refine your file

Common refinements:

- Add more detail to face shape
- Tighten hairline language
- Add beard length in millimeters
- Add skin texture constraints
- Add “not a stock photo” and “lived-in environment”
- Add stronger style and cultural context

---

## Step 10: Keep your winners

Save the best outputs as examples.

Recommended folders:

```txt
outputs/
├── headshots/
├── lifestyle/
├── podcast/
└── website/
```

Do not include private outputs in a public repo unless you want them public.
