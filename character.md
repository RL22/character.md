# character.md

## Overview

This document defines the **Character DNA and Visual Generation System** for a consistent, photorealistic representation of the same individual across generated images.

Priority:

- **Strict:** facial features, hair, identity, realism
- **Flexible:** outfit, environment, composition

Use this file as the source of truth for image generation. Update it as you learn what improves consistency.

---

## 1. Character DNA (STRICT — DO NOT MODIFY LIGHTLY)

Photorealistic image of the same Black male, early 30s, medium-deep brown skin with warm undertones.

### Face

- Oval face shape with a defined jawline and slightly narrow chin
- Balanced facial proportions with subtle natural asymmetry
- Almond-shaped dark brown eyes
- Neutral to focused expression: calm, composed, grounded

### Skin

- Natural skin texture clearly visible
- Slight under-eye shadows retained, not fully removed
- Even tone with realistic variation
- No plastic smoothing or glossy artificial skin

### Hair

- Very short cropped hair
- Lower density at crown
- Slight recession at temples
- Natural hairline, not artificially filled or reshaped

### Facial Hair

- Short beard, 3–5mm length
- Natural density variation, not overly uniform
- Slightly fuller on chin
- Clean neckline
- Avoid overly sharp or hyper-defined barber edges

### Identity Constraints

- Must maintain consistent facial structure across all images
- No exaggerated expressions
- No artificial beautification or stylization
- No identity drift
- Do not reinterpret the face as a new person

---

## 2. Face Lock Snippet (ALWAYS USE WHEN CONSISTENCY MATTERS)

```txt
must maintain identical facial structure, same person across all images,
no variation in bone structure, no reinterpretation,
consistent face shape, jawline, eyes, and proportions
```

Use this snippet inside prompts when generating batches, changing environments, changing wardrobe, or creating lifestyle imagery.

---

## 3. Body Composition

- Height: 6ft
- Weight: 195lbs
- Build: athletic lean
- Posture: upright, relaxed shoulders, grounded stance

Optional future additions:

- Shoulder width:
- Torso length:
- Arm build:
- Walking posture:
- Preferred angles:

---

## 4. Expression System

### Primary

- Calm
- Focused
- Composed
- Observant

### Secondary

- Subtle confidence
- Very slight smirk
- Thoughtful off-camera gaze

### Avoid

- Overly expressive smiles
- Intense or aggressive expressions
- Cartoonish emotion
- Influencer-style overposing

---

## 5. Wardrobe System (FLEXIBLE — STYLE DRIVEN)

### Style Identity

- Tech founder with streetwear and workwear influence
- Oakland millennial aesthetic
- Clean minimalism mixed with expressive layering
- Hypebeast meets builder
- Polished enough for business, personal enough to avoid stock-photo energy

### Core Look

- Structured outerwear: blazers, chore coats, work jackets
- Base layers: heavyweight tees, crewnecks, knits
- No collars unless intentionally requested
- Relaxed but intentional silhouettes
- Not slim-fit corporate

### Styling Influences

Use these as style references only. Do not show visible brand logos.

- J.Crew: structure
- Carhartt: workwear texture
- Nike / Stussy: casual athletic influence
- Uniqlo: minimal basics
- Comme des Garçons: subtle edge
- Supreme: cultural confidence without obvious logos
- Gap: easy everyday wear

### Color Palette

- Earth tones
- Washed neutrals
- Deep navy
- Charcoal
- Black
- Cream
- Olive
- Rust
- Deep green

### Fit

- Relaxed, modern, slightly oversized at times
- Avoid tight corporate fits
- Avoid overly high-fashion styling

### Constraints

- No visible logos
- No loud graphics
- No overly trendy pieces that date the image
- No costume-like styling

---

## 6. Props & Environment (FLEXIBLE — CONTEXTUAL REALISM)

### Environment Style

- Real, lived-in spaces
- Slight imperfections allowed
- Feels like a working creative, not a stock office
- Avoid overly staged or sterile setups

### Spaces

- Industrial coworking spaces with wood, metal, plants, and texture
- Warm cafés with natural light and slight grit
- Home office with books, objects, layered lighting, and personality
- Tech workspace with depth, not a minimal white void
- Podcast studio or desk setup with subtle warmth
- Stage or speaking environment with blurred audience or ambient lighting

### Desk Setup

- Standing desk
- Dual monitors
- Laptop
- Headphones
- Coffee mug
- Notebook
- Subtle cable presence allowed
- Minimal but human desk clutter

### Props

- Laptop
- Headphones, no visible branding
- Coffee mug, ceramic and neutral
- Notebook, used but not messy
- Phone, generic and unbranded

### Constraints

- No visible brand logos
- No perfectly staged environments
- Avoid Apple-store minimalism
- Avoid generic coworking-stock-photo energy

---

## 7. Cultural Signal Layer

### Identity Context

- Black tech founder from Oakland
- Creative and technical hybrid
- Moves between builder, marketer, and culture
- Millennial who works in tech but does not dress like a generic tech bro
- Shakes things up within bounds

### Visual Signals

- Quiet confidence, not performative
- Comfortable in polished and raw environments
- Style feels personal, not curated by a brand
- Practical, creative, grounded, and slightly disruptive

### Energy

- Observant
- Thoughtful
- Intentional
- Slight edge
- Not overly polished
- Feels like someone who builds and thinks, not just presents

### Avoid

- Corporate stock energy
- Overly influencer aesthetic
- Sterile visuals
- Generic startup-founder uniform

---

## 8. Camera Presets

### A. Founder Headshot

Use for LinkedIn, profile images, press, and website hero.

```txt
85mm lens, f/2.0, shallow depth of field, eye-level framing,
centered composition, sharp focus on eyes, natural skin texture
```

### B. Lifestyle / Work Mode

Use for website sections, blog images, café scenes, and workspace shots.

```txt
50mm lens, f/2.8, slight 3/4 angle, medium shot,
natural perspective, subtle background blur
```

### C. Cinematic / Brand

Use for podcast, speaking, founder-story, and campaign imagery.

```txt
35mm lens, f/1.8, slight low angle, subject off-center,
rule-of-thirds composition, cinematic depth of field
```

### D. Desk / Builder Mode

Use for standing desk, dual monitors, laptop work, and maker scenes.

```txt
50mm lens, f/3.2, side angle or over-the-shoulder,
focus split between subject and environment, workspace context visible
```

---

## 9. Lighting Presets

### A. Soft Studio

```txt
soft diffused key light at 45 degrees, subtle fill light,
gentle shadow falloff, neutral tones, natural skin tones
```

### B. Natural Window Light

```txt
soft side lighting, warm highlights, realistic indoor lighting,
ambient bounce light, slight warmth, natural shadows
```

### C. Cinematic Low Key

```txt
directional lighting, deeper shadows, subtle rim light,
high contrast, moody tones, realistic skin detail
```

### D. Bright Productivity

```txt
even front lighting, minimal shadows, clean white balance,
high clarity, focused workspace energy
```

### E. Warm Café

```txt
warm ambient lighting, soft practical lights in background,
golden tones, shallow depth of field, cozy environment lighting
```

---

## 10. Pose System

### A. Neutral Authority

- Straight posture
- Shoulders squared
- Direct eye contact
- Calm expression

### B. Builder Mode

- Slight forward lean
- Hands engaged: typing, holding laptop, writing
- Eyes focused off-camera
- Feels in the middle of work

### C. Thinker

- Looking slightly off-camera
- Hand near chin or resting on table
- Relaxed posture
- Reflective but not staged

### D. Speaker

- One or both hands gesturing
- Mid-speech expression
- Slight body rotation
- Presence without exaggeration

### E. Candid Movement

- Walking or transitioning
- Looking away from camera
- Natural motion
- Slight imperfect framing allowed

---

## 11. Shot List by Platform

### LinkedIn

- Clean founder headshot
- Slight smile headshot
- 3/4 angle professional portrait
- Desk-side builder portrait

### Website

- Standing desk setup with dual monitors
- Seated workspace portrait
- Thinker pose in home office
- Lifestyle image in café
- Founder portrait for about section

### Podcast

- Headphones on, side profile
- Speaking pose with microphone
- Cinematic low-key portrait
- Desk recording setup

### Social Content

- Coffee shop working
- Notebook planning
- Walking through coworking space
- Casual candid shot with laptop
- Behind-the-scenes builder image

---

## 12. Batch Generation System

Generate in sets of 6–12 images using:

- Same Character DNA
- Same Face Lock snippet
- Same lighting preset per batch
- Same wardrobe palette
- Slight variation in pose, angle, framing, and environment details

Goal:

```txt
Mimic a real photoshoot session, not a set of disconnected AI outputs.
```

---

## 13. Quick Consistency Check

After generating a batch, ask:

1. Does the face still look like the same person?
2. Is the hairline consistent?
3. Is the beard length and density consistent?
4. Does the skin texture still feel natural?
5. Does the image feel personal, or does it feel like stock photography?

Keep images that pass. Refine and rerun images that drift.

---

## 14. Global Constraints (ALWAYS APPLY)

```txt
photorealistic, natural skin texture, consistent identity,
no visible brands, no distorted face, no stylization,
no hyper-glossy skin, no stock-photo energy,
natural candid moment, slightly imperfect composition,
lived-in environment
```

---

## 15. Prompt Assembly Structure

Use this format for all generations:

```txt
[Character DNA]
+
[Face Lock Snippet]
+
[Pose]
+
[Outfit Description]
+
[Environment / Props]
+
[Camera Preset]
+
[Lighting Preset]
+
[Global Constraints]
```

---

## 16. Example Prompt

```txt
Photorealistic image of the same Black male, early 30s, medium-deep brown skin with warm undertones, oval face with a defined jawline and slightly narrow chin, almond-shaped dark brown eyes, calm focused expression, natural skin texture with slight under-eye shadows.

Very short cropped hair with slight recession at temples and lower density at crown, natural hairline, short beard 3–5mm with natural density variation, slightly fuller on chin, clean neckline.

Must maintain identical facial structure, same person across all images, no variation in bone structure, no reinterpretation, consistent face shape, jawline, eyes, and proportions.

Wearing a dark chore coat over a heavyweight cream t-shirt, relaxed fit, minimal styling, beanie, no visible logos.

Seated in a warm, slightly busy café with natural textures, laptop open, ceramic coffee mug nearby, environment feels lived-in and not staged.

50mm lens, f/2.8, 3/4 angle.

Natural window light with warm tones and soft shadows.

Photorealistic, consistent identity, natural skin texture, no visible brands, natural candid moment, slightly imperfect composition, lived-in environment, not a stock photo.
```
