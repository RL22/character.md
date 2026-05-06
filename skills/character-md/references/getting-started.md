# Getting Started

Use this guide to set up your own `character.md` file and generate consistent photorealistic AI images.

You do not need to be technical. The workflow is:

```txt
Map → Anchor → Identity Sheet → Character.md → Generate
```

---

## Agent skill workflow

If your agent supports skills, use the Character.md skill in `skills/character-md/SKILL.md`.

Start with:

```txt
/character create
```

The agent will guide you through:

1. Uploading 3–5 reference images.
2. Creating a Facial Feature Map.
3. Generating and approving an anchor headshot.
4. Choosing attire and style direction.
5. Generating and approving a 5-panel identity sheet.
6. Translating the approved identity sheet into `character.md`.
7. Creating one professional headshot or one 4-tile lifestyle image.

If the anchor or identity sheet does not look right, reject it. The agent should run drift diagnostics, explain what changed, and regenerate with stronger identity constraints.

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

## Step 2: Create a Facial Feature Map

Use the skill command:

```txt
/character map-face
```

The agent should analyze visible traits from your uploaded images and produce a map covering:

- Face shape
- Jawline and chin
- Eyes and brows
- Nose bridge and profile
- Mouth and lips
- Hairline
- Facial hair
- Skin texture
- Natural asymmetry
- Drift risks

This is not landmark detection or face recognition. It is a prompt-ready identity description for keeping generated images consistent.

---

## Step 3: Generate and approve an anchor headshot

Use:

```txt
/character anchor
```

Start simple before generating lifestyle scenes.

Use:

- Facial Feature Map
- Face Lock snippet
- Front-facing or slight three-quarter angle
- Face large in frame
- Neutral outfit
- Clean background
- 85mm lens
- Soft studio lighting

Goal: get one image that feels like the same person before adding complex styling or environments.

If the anchor fails, reject it. The agent should diagnose the drift and regenerate the anchor with corrected constraints.

---

## Step 4: Generate and approve an identity sheet

After the anchor is approved, provide attire and style direction:

- 3–5 clothing or style elements
- Preferred color palette
- Fit preference
- Accessories, if any
- Things to avoid

You can upload style reference images. Style references should affect wardrobe and mood only. They should not change the face.

Use:

```txt
/character sheet
```

The identity sheet should contain five head-and-shoulders panels:

- Front-facing
- Left three-quarter
- Right three-quarter
- Left profile
- Right profile

Each panel should use a different style combination while preserving the same face, hairline, facial hair, skin texture, and proportions.

If the sheet fails, reject it. The agent should diagnose which panel drifted and regenerate with stronger identity constraints.

---

## Step 5: Fill out strict Character DNA

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
Oval-to-slightly-long face shape with a defined jawline and slightly narrow chin taper.
Natural brow weight, almond-shaped dark brown eyes, consistent nose bridge/profile.
Very short cropped hair, slight recession at temples, natural hairline.
Short beard, 3–5mm length, with natural density variation.
```

If you used the skill workflow, translate the approved identity sheet into this section. The identity sheet is the visual source of truth; `character.md` is the reusable text source of truth.

---

## Step 6: Add Face Lock

Add the Face Lock snippet to your prompts when you care about consistency.

```txt
must maintain identical facial structure, same person across all images,
no variation in bone structure, no reinterpretation,
consistent face shape, jawline, eyes, and proportions,
preserve exact eye spacing, brow weight, nose profile, mouth width,
chin taper, natural hairline, temple recession, and beard density,
do not widen the face, thicken the jaw, fill in the hairline,
over-densify the beard, smooth the skin, or recast as a generic model
```

This tells the model not to recast the person.

---

## Step 7: Add body composition

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

## Step 8: Define wardrobe and vibe

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
Mixes chore coats, heavyweight tees, relaxed chinos, and clean sneakers.
No visible logos.
```

---

## Step 9: Choose a final output mode

After the identity sheet is approved, choose one final output mode.

For a professional headshot:

```txt
/character headshot
```

Generate exactly one polished but natural headshot from the approved identity.

For lifestyle photography:

```txt
/character lifestyle
```

The agent should ask five environment questions:

1. Primary use case
2. Setting type
3. Mood
4. Props
5. Avoid-list

Then generate one image containing four tiles, each with a different environment.

---

## Step 10: Run the quick consistency check

Ask three questions:

1. Does the face still look like the same person?
2. Are the hairline and beard consistent?
3. Does the image feel personal instead of generic or stock?

If yes, keep it.

If no, refine `character.md` and regenerate.

---

## Step 11: Refine your file

Common refinements:

- Add more detail to face shape
- Tighten hairline language
- Add beard length in millimeters
- Add skin texture constraints
- Add “not a stock photo” and “lived-in environment”
- Add stronger style and cultural context

---

## Step 12: Keep your winners

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
