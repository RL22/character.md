# Identity Ladder Prompts

Use this file when a good anchor headshot does not translate into lifestyle images.

Goal:

```txt
Anchor -> Transition -> Lifestyle
```

Do not jump directly from a good headshot into full lifestyle scenes. Approve identity at each step before adding more environment, pose, wardrobe, props, or lighting complexity.

Every prompt below is a template. Replace each bracketed field with the matching line from the user's own Facial Feature Map and character file. A fully filled-in example is in the "Worked example" section at the end of this file.

## Reference Priority

Upload the reference images in this order:

1. Original front-facing reference photo
2. Original three-quarter reference photo
3. Original profile reference photo
4. Approved anchor headshot

Instruction:

```txt
Use the original reference photos as the identity truth. Use the approved anchor headshot only as a quality, realism, and finish reference. If the generated headshot conflicts with the original photos, follow the original photos.
```

## Batch 1: Anchor Headshots

Generate 4 controlled headshots. Do not add lifestyle context yet.

```txt
[Character DNA]

[Face Lock Snippet]

Use the original front, three-quarter, and profile photos as the identity truth. Use the approved anchor headshot only as a quality and realism anchor.

Create a close controlled headshot of the same person. The face must be the main subject and clearly recognizable when cropped away from clothing and background.

Preserve exact face proportions from the reference photos: [face shape and facial silhouette], [hairline trait], [eyes / brows], [nose], [mouth], [jaw / chin], [facial hair density], and natural skin texture.

Wearing [a simple neutral base layer from the Wardrobe System], no collar, no hat, no headphones, no visible logos.

Neutral warm background, direct eye contact or slight three-quarter gaze, calm focused expression.

85mm lens, f/2.0, eye-level framing, face sharp, shoulders relaxed, clean natural lighting.

Photorealistic, consistent identity, natural skin texture, no beautification, no face widening, no heavier jaw, no filled-in hairline, no thicker beard, no generic founder/model recast.
```

Acceptance gate:

- Approve only images where the face still looks like the original photos.
- Reject polished images that look like a different person.
- Keep the best prompt and image as the next transition reference.

## Batch 2: Transition Portraits

Generate 4 waist-up portraits. Add only a small amount of environment.

```txt
[Character DNA]

[Face Lock Snippet]

Use the original reference photos as the identity truth and the approved anchor headshot as a quality reference. Do not change facial structure to match the scene.

Create a waist-up transition portrait of the same person at a simple desk or cafe table. The environment should be visible but secondary. The face must remain large, sharp, and clearly recognizable.

Preserve the [face shape and facial silhouette], [hairline trait], eye shape, brow weight, nose profile, mouth width, [chin trait], [facial hair density], and natural skin texture from the reference photos.

Wearing [an outer layer over a base layer from the Wardrobe System], no hat, no headphones, no visible logos.

Simple lived-in workspace or cafe background with laptop and ceramic coffee mug. Keep props away from the face.

70mm lens, f/2.8, eye-level or slight three-quarter angle, waist-up framing, both eyes visible, soft natural light, no heavy shadows across facial features.

Photorealistic, consistent identity, natural candid posture, not a stock photo. Reject if the face becomes broader, jaw becomes heavier, hairline fills in, beard thickens, skin becomes too smooth, or the person looks recast.
```

Acceptance gate:

- Crop the face mentally before judging the scene.
- If the face does not pass, do not continue to lifestyle.
- If one transition portrait passes, reuse its exact facial and camera language for Batch 3.

## Batch 3: Single-Scene Lifestyle

Generate 4 lifestyle images in one scene only. Change only the environment depth.

```txt
[Character DNA]

[Face Lock Snippet]

Use the original reference photos as the identity truth. Use the approved transition portrait as the pose, lighting, and realism reference. Keep facial structure unchanged.

Create a lifestyle image of the same person working at a warm, lived-in cafe table. The scene may include laptop, coffee mug, notebook, textured wall, natural window light, and light background activity, but the face remains the primary identity signal.

Preserve exact facial proportions: [face shape and facial silhouette], [hairline trait], [eyes / brows], [nose], [mouth], [jaw / chin], [facial hair density], and natural skin texture.

Wearing the same [outer layer over a base layer from the Wardrobe System] as the approved transition portrait, no hat, no headphones, no visible logos.

70mm lens, f/2.8, slight three-quarter angle, medium waist-up framing, face large enough to judge identity, soft background blur.

Natural window light, warm but realistic tones, no dramatic shadows, no cinematic recasting, no model-like polish.

Photorealistic, consistent identity, lived-in environment, natural candid moment, not a stock photo. Reject if the environment looks good but the face no longer looks like the original reference photos.
```

Acceptance gate:

- Approve at least one single-scene lifestyle image before expanding to more scenes.
- Keep the winner prompt unchanged except for one variable at a time.

## Batch 4: Expanded Lifestyle

Only run this after Batch 3 has an approved image.

Scene variants:

- Builder desk setup
- Podcast portrait
- Speaking portrait
- Social/content cafe scene

Rules:

- Change one variable at a time.
- Keep the approved face, camera distance, and lighting language.
- Do not add beanies, headphones, microphones near the mouth, low-key lighting, strong side profiles, or wide environmental framing until multiple lifestyle images pass identity review.
- Reject anything that looks like a generic founder, model, or different person.

---

## Worked example

One filled-in Batch 1 anchor prompt, to show the level of specificity the bracketed fields expect. This is an example character, not a default — replace every trait with the user's own.

```txt
[Character DNA]

[Face Lock Snippet]

Use the original front, three-quarter, and profile photos as the identity truth. Use the approved anchor headshot only as a quality and realism anchor.

Create a close controlled headshot of the same person. The face must be the main subject and clearly recognizable when cropped away from clothing and background.

Preserve exact face proportions from the reference photos: oval face shape with a narrower facial silhouette, natural temple recession, almond-shaped dark brown eyes, calm slightly heavy-lidded look, natural brow weight, consistent nose bridge/profile, understated mouth shape, slightly narrow chin with a natural taper, short beard at 3-5mm with natural density variation, and natural skin texture.

Wearing a simple dark crewneck or heavyweight t-shirt, no collar, no hat, no headphones, no visible logos.

Neutral warm background, direct eye contact or slight three-quarter gaze, calm focused expression.

85mm lens, f/2.0, eye-level framing, face sharp, shoulders relaxed, clean natural lighting.

Photorealistic, consistent identity, natural skin texture, no beautification, no face widening, no heavier jaw, no filled-in hairline, no thicker beard, no generic founder/model recast.
```

The same substitutions apply to Batch 2 and Batch 3: swap each bracketed field for the same trait wording every time, so the identity language never shifts between batches.
