# Prompt Assembly

Character.md works best when prompts are assembled from reusable blocks.

## Formula

```txt
[Character DNA]
+
[Face Lock Snippet]
+
[Pose]
+
[Outfit]
+
[Environment]
+
[Camera]
+
[Lighting]
+
[Global Constraints]
```

## Why this works

Most prompts mix identity, style, and setting together. That makes it easy for the model to reinterpret the person.

This system separates them:

- **Character DNA:** strict identity rules
- **Face Lock:** identity reinforcement
- **Pose:** how the person is positioned
- **Outfit:** flexible styling
- **Environment:** flexible scene context
- **Camera:** photographic realism
- **Lighting:** consistent visual tone
- **Constraints:** no logos, no stock-photo energy, natural texture

## Assembled prompt template

Replace each bracketed field with the matching line from the user's own Facial Feature Map and character file. Keep the same substitution for a given field across every prompt, so identity language never shifts between images.

```txt
Photorealistic image of the same [subject description: gender presentation, approximate age range, skin tone and undertone], [face shape] with [jaw / chin], [eyes / brows], [expression], natural skin texture with [skin detail to retain].

[Hair length, cut, density, and hairline description], natural hairline, [facial hair style, length, and density].

Must maintain identical facial structure, same person across all images, no variation in bone structure, no reinterpretation, consistent face shape, jawline, eyes, and proportions. Preserve exact eye spacing, brow weight, nose profile, mouth width, [chin trait], [hairline trait], and [facial hair trait]. Do not [drift risk 1], [drift risk 2], [drift risk 3], smooth the skin, or recast as a generic model.

[Pose], both eyes visible, [expression], face large enough in frame to judge identity.

Wearing [outfit from the Wardrobe System], no hat, no headphones, no visible logos.

[Environment and props from the Props & Environment section]. Lived-in scene with realistic texture.

[Camera preset].

[Lighting preset].

Photorealistic, consistent identity, natural skin texture, no visible brands, lived-in environment, not a stock photo. Reject if the scene looks good but the face no longer matches the original reference photos.
```

## Worked example

One filled-in version of the template above, to show the level of specificity each field expects. This is an example character, not a default — replace every trait with the user's own.

```txt
Photorealistic image of the same man in his early 30s, medium-deep brown skin with warm undertones, oval face with a defined jawline and slightly narrow chin, almond-shaped dark brown eyes, calm focused expression, natural skin texture with slight under-eye shadows.

Very short cropped hair with slight recession at temples and lower density at crown, natural hairline, short beard 3–5mm with natural density variation.

Must maintain identical facial structure, same person across all images, no variation in bone structure, no reinterpretation, consistent face shape, jawline, eyes, and proportions. Preserve exact eye spacing, brow weight, nose profile, mouth width, chin taper, natural hairline, temple recession, and beard density. Do not widen the face, thicken the jaw, fill in the hairline, over-densify the beard, smooth the skin, or recast as a generic model.

Slight forward lean, both eyes visible, calm focused expression, face large enough in frame to judge identity.

Wearing relaxed chinos, heavyweight black tee, dark work jacket, no hat, no headphones, no visible logos.

Modern standing desk with dual monitors, laptop, headphones, coffee mug, and notebook. Lived-in workspace with subtle cables and warm textures.

70mm lens, f/3.2, slight three-quarter angle, waist-up framing, workspace context visible but secondary.

Bright productivity lighting, clean white balance, minimal shadows.

Photorealistic, consistent identity, natural skin texture, no visible brands, lived-in environment, not a stock photo. Reject if the workspace looks good but the face no longer matches the original reference photos.
```
