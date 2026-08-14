# Face Lock Snippet

Use this in any prompt where identity consistency matters. Replace the bracketed fields with the matching traits and drift risks from the user's own Facial Feature Map.

```txt
must maintain identical facial structure, same person across all images,
no variation in bone structure, no reinterpretation,
consistent face shape, jawline, eyes, and proportions,
preserve exact eye spacing, brow weight, nose profile, mouth width,
[chin trait], [hairline trait], and [facial hair trait],
do not [drift risk 1], [drift risk 2], [drift risk 3],
smooth the skin, or recast as a generic model
```

### Worked example

One filled-in version. This is an example character, not a default.

```txt
must maintain identical facial structure, same person across all images,
no variation in bone structure, no reinterpretation,
consistent face shape, jawline, eyes, and proportions,
preserve exact eye spacing, brow weight, nose profile, mouth width,
chin taper, natural hairline, temple recession, and beard density,
do not widen the face, thicken the jaw, fill in the hairline,
over-densify the beard, smooth the skin, or recast as a generic model
```

## When to use it

Use the Face Lock snippet when:

- Generating a batch of images
- Changing outfits
- Changing environments
- Moving from headshots to lifestyle images
- Creating podcast, desk, café, or speaking scenes
- Any time the person starts to look different

## How to place it

Place it directly after your Character DNA block.

```txt
[Character DNA]
+
[Face Lock Snippet]
+
[Scene / Outfit / Camera / Lighting]
```
