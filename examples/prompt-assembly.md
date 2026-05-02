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

## Example assembled prompt

```txt
Photorealistic image of the same Black male, early 30s, medium-deep brown skin with warm undertones, oval face with a defined jawline and slightly narrow chin, almond-shaped dark brown eyes, calm focused expression, natural skin texture with slight under-eye shadows.

Very short cropped hair with slight recession at temples and lower density at crown, natural hairline, short beard 3–5mm with natural density variation.

Must maintain identical facial structure, same person across all images, no variation in bone structure, no reinterpretation, consistent face shape, jawline, eyes, and proportions.

Slight forward lean, hands engaged on laptop, eyes focused off-camera.

Wearing relaxed chinos, heavyweight black tee, dark work jacket, beanie, no visible logos.

Modern standing desk with dual monitors, laptop, headphones, coffee mug, and notebook. Lived-in workspace with subtle cables and warm textures.

50mm lens, f/3.2, side angle, workspace context visible.

Bright productivity lighting, clean white balance, minimal shadows.

Photorealistic, consistent identity, natural skin texture, no visible brands, lived-in environment, not a stock photo.
```
