# character.md

## Overview

This document is the reusable **Character DNA and Visual Generation System** template for a consistent, photorealistic representation of the same individual across generated images.

Every bracketed value below is a placeholder. Replace each one with the details of *your* character, taken from your own reference photos, Facial Feature Map, and approved identity sheet. Delete any placeholder you do not need. Do not ship this file with placeholders still in it.

Priority:

- **Strict:** facial features, hair, identity, realism
- **Flexible:** outfit, environment, composition

Use your filled copy of this file as the reusable text source of truth for image generation. If you create a Character.md identity sheet, treat the approved sheet as the visual source of truth and translate its stable face, hair, styling, and drift-prevention notes into your file.

Reference priority:

1. Original reference photos: identity truth
2. Approved anchor headshot: quality and style anchor
3. Approved multi-angle identity sheet: visual source of truth
4. Your filled character file: reusable text source of truth

Style reference images may guide wardrobe, color, texture, and vibe only. They must not change the facial identity.

---

## 1. Character DNA (STRICT — DO NOT MODIFY LIGHTLY)

Photorealistic image of the same [subject description: gender presentation, approximate age range, skin tone and undertone].

### Face

- [Face shape and overall facial silhouette]
- [Jawline description and how it meets the chin]
- [Cheekbone structure]
- [Facial proportions and any natural asymmetry]
- [Eye shape, eye color, eyelid character]
- [Brow weight and shape] — do not raise, sharpen, or reshape the brow
- Nose bridge and profile must remain consistent with the reference photos: [nose description]
- Mouth width and lip shape must remain consistent with the reference photos: [mouth description]
- [Default expression: e.g. neutral, calm, composed]

### Facial Identity Lock

Use the original reference photos as the identity truth. Use the best approved generated headshot only as a quality and style anchor.

- Preserve exact face proportions from the reference photos
- Preserve [the character's distinguishing structural traits, e.g. facial silhouette, temple shape]
- Preserve the specific eye shape, brow weight, nose bridge/profile, mouth width, chin shape, and facial hair density
- Keep the face recognizable when cropped away from the outfit, background, and scene
- Do not [list this character's specific drift risks, e.g. widen the face, reshape the jaw, alter the hairline, change facial hair density, smooth the skin] or recast the subject as a generic model type
- Do not make the subject younger, older, more corporate, more polished, more symmetrical, or more conventionally model-like than the reference photos

### Skin

- Natural skin texture clearly visible
- [Skin detail to retain, e.g. under-eye shadows, freckles, scars, tone variation]
- [Tone and evenness description]
- No plastic smoothing or glossy artificial skin

### Hair

- [Hair length and cut]
- [Hair texture and density, including any variation by region]
- [Hairline shape and any recession or growth pattern]
- Natural hairline, not artificially filled or reshaped

### Facial Hair

- [Facial hair style and length, in mm if known — or "none"]
- [Density and variation]
- [Any region that is fuller or sparser]
- [Neckline and edge treatment]
- Avoid overly sharp or hyper-defined barber edges unless the reference photos show them

### Identity Constraints

- Must maintain consistent facial structure across all images
- Original reference photos override any generated style anchor if there is a conflict
- The approved generated headshot may guide lighting, realism, and finish, but not facial structure
- No exaggerated expressions
- No artificial beautification or stylization
- No identity drift
- Do not reinterpret the face as a new person

---

## 2. Facial Feature Map

Use this section for the prompt-ready facial map created from uploaded reference images and the approved identity sheet.

```txt
Face shape: [Face shape]
Jaw / chin: [Jaw / chin]
Eyes / brows: [Eyes / brows]
Nose: [Nose]
Mouth: [Mouth]
Hair / hairline: [Hair / hairline]
Facial hair: [Facial hair]
Skin texture: [Skin texture]
Natural asymmetry: [Natural asymmetry]
Drift risks: [Drift risks]
```

Keep this anatomical and specific. Avoid generic attractiveness language. The purpose is to preserve identity across headshots, lifestyle scenes, podcast images, workspace images, and social content.

---

## 3. Face Lock Snippet (ALWAYS USE WHEN CONSISTENCY MATTERS)

```txt
must maintain identical facial structure, same person across all images,
no variation in bone structure, no reinterpretation,
consistent face shape, jawline, eyes, and proportions,
preserve exact eye spacing, brow weight, nose profile, mouth width,
[chin trait], [hairline trait], and [facial hair trait],
do not [drift risk 1], [drift risk 2], [drift risk 3],
smooth the skin, or recast as a generic model
```

Use this snippet inside prompts when generating batches, changing environments, changing wardrobe, or creating lifestyle imagery.

---

## 4. Body Composition

- Height: [Height]
- Weight: [Weight]
- Build: [Build]
- Posture: [Posture]

Optional future additions:

- Shoulder width: [Shoulder width]
- Torso length: [Torso length]
- Arm build: [Arm build]
- Walking posture: [Walking posture]
- Preferred angles: [Preferred angles]

---

## 5. Expression System

### Primary

- [Primary expression 1]
- [Primary expression 2]
- [Primary expression 3]
- [Primary expression 4]

### Secondary

- [Secondary expression 1]
- [Secondary expression 2]
- [Secondary expression 3]

### Avoid

- [Expression to avoid 1]
- [Expression to avoid 2]
- [Expression to avoid 3]
- [Expression to avoid 4]

---

## 6. Wardrobe System (FLEXIBLE — STYLE DRIVEN)

### Style Identity

- [Style identity line 1: overall wardrobe archetype]
- [Style identity line 2: regional or subcultural influence]
- [Style identity line 3: tension or mix that makes it specific]
- [Style identity line 4]
- [Style identity line 5: how formal or informal it should read]

### Core Look

- Outerwear: [Outerwear types]
- Base layers: [Base layer types]
- Collars: [Collar preference]
- Silhouette: [Silhouette preference]
- Fit to avoid: [Fit to avoid]

### Styling Influences

Use these as style references only. Do not show visible brand logos.

- [Brand or designer]: [what it contributes]
- [Brand or designer]: [what it contributes]
- [Brand or designer]: [what it contributes]
- [Brand or designer]: [what it contributes]

### Color Palette

- [Color 1]
- [Color 2]
- [Color 3]
- [Color 4]
- [Color 5]

### Fit

- [Fit description]
- [Fit to avoid]
- [Fit to avoid]

### Constraints

- No visible logos
- [Constraint: graphics]
- [Constraint: trend sensitivity]
- [Constraint: costume-like styling]

---

## 7. Props & Environment (FLEXIBLE — CONTEXTUAL REALISM)

### Environment Style

- [Environment quality 1, e.g. real, lived-in spaces]
- [Environment quality 2]
- [Environment quality 3]
- [Environment style to avoid]

### Spaces

- [Space 1]
- [Space 2]
- [Space 3]
- [Space 4]
- [Space 5]
- [Space 6]

### Desk Setup

- [Desk item 1]
- [Desk item 2]
- [Desk item 3]
- [Desk item 4]
- [Desk item 5]
- [Clutter and cable guidance]

### Props

- [Prop 1]
- [Prop 2]
- [Prop 3]
- [Prop 4]
- [Prop 5]

### Constraints

- No visible brand logos
- [Constraint: staging]
- [Constraint: aesthetic to avoid]
- [Constraint: stock-photo energy]

---

## 8. Cultural Signal Layer

### Identity Context

- [Cultural signal layer: who this person is, in context]
- [Professional or creative identity]
- [Communities or worlds they move between]
- [Generational or regional signal]
- [Attitude or stance]

### Visual Signals

- [Visual signal 1]
- [Visual signal 2]
- [Visual signal 3]
- [Visual signal 4]

### Energy

- [Energy word or phrase 1]
- [Energy word or phrase 2]
- [Energy word or phrase 3]
- [Energy word or phrase 4]
- [Energy word or phrase 5]

### Avoid

- [Energy to avoid 1]
- [Energy to avoid 2]
- [Energy to avoid 3]
- [Energy to avoid 4]

---

## 9. Camera Presets

Adjust the framing language to your character, but keep the face dominant in every preset.

### A. Primary Headshot

Use for LinkedIn, profile images, press, and website hero.

```txt
85mm lens, f/2.0, shallow depth of field, eye-level framing,
centered composition, sharp focus on eyes, natural skin texture
```

### B. Lifestyle / Work Mode

Use for website sections, blog images, café scenes, and workspace shots.

```txt
70mm lens, f/2.8, slight 3/4 angle, waist-up framing,
face large and sharp, environment secondary, subtle background blur
```

### C. Cinematic / Brand

Use for podcast, speaking, story, and campaign imagery.

```txt
70mm lens, f/2.8, eye-level or very slight low angle,
face large and sharp, cinematic depth without obscuring identity
```

### D. Desk / Builder Mode

Use for desk, monitor, laptop work, and maker scenes.

```txt
70mm lens, f/3.2, front-facing or slight 3/4 angle,
face dominant, workspace context visible but secondary
```

---

## 10. Lighting Presets

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

## 11. Pose System

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

## 12. Shot List by Platform

Keep or replace these lists depending on where your character's images will be used.

### LinkedIn

- Clean primary headshot
- Slight smile headshot
- 3/4 angle professional portrait
- Desk-side working portrait

### Website

- Standing desk setup with dual monitors
- Seated workspace portrait
- Thinker pose in home office
- Lifestyle image in café
- Portrait for about section

### Podcast

- Podcast portrait with face unobstructed
- Speaking pose with microphone low or off to the side
- Cinematic portrait with controlled shadows
- Desk recording setup

### Social Content

- Coffee shop working
- Notebook planning
- Walking through coworking space
- Casual candid shot with laptop
- Behind-the-scenes image

---

## 13. Batch Generation System

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

## 14. Quick Consistency Check

After generating a batch, ask:

1. Does the face still look like the same person?
2. Is the hairline consistent?
3. Is the facial hair length and density consistent?
4. Does the skin texture still feel natural?
5. Does the image feel personal, or does it feel like stock photography?

Keep images that pass. Refine and rerun images that drift.

---

## 15. Global Constraints (ALWAYS APPLY)

```txt
photorealistic, natural skin texture, consistent identity,
no visible brands, no distorted face, no stylization,
no hyper-glossy skin, no stock-photo energy,
natural candid moment, slightly imperfect composition,
lived-in environment
```

---

## 16. Prompt Assembly Structure

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

## 17. Example Prompt

Fill each bracket from the sections above before generating.

```txt
Photorealistic image of the same [subject description], [face shape] with [jaw / chin description], [eye description], [expression], natural skin texture with [skin detail to retain].

[Hair length, density, and hairline description], natural hairline, [facial hair description with length and density].

Must maintain identical facial structure, same person across all images, no variation in bone structure, no reinterpretation, consistent face shape, jawline, eyes, and proportions. Preserve exact eye spacing, brow weight, nose profile, mouth width, [chin trait], [hairline trait], and [facial hair trait]. Do not [drift risk 1], [drift risk 2], [drift risk 3], smooth the skin, or recast as a generic model.

Wearing [outfit from the Wardrobe System], [fit], minimal styling, no hat, no headphones, no visible logos.

[Pose and environment from the Props & Environment section], environment feels lived-in but remains secondary to the face.

[Camera preset].

[Lighting preset].

Photorealistic, consistent identity, natural skin texture, no visible brands, natural candid moment, lived-in environment, not a stock photo. Reject if [drift risk 1], [drift risk 2], or the subject looks like a different person.
```

For a fully filled-in version of this prompt shape, see the "Worked example" blocks in `skills/character-md/references/prompt-assembly.md`, `references/identity-ladder-prompts.md`, `references/lifestyle-prompts.md`, and `references/drift-diagnostics.md`.
