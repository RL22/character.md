---
name: character-md
description: Use when creating, refining, diagnosing, or generating consistent AI character imagery with Character.md. Supports reference-image facial feature mapping, anchor headshots, multi-angle identity sheets, professional headshots, lifestyle tiles, and drift diagnostics while keeping character.md as the reusable source of truth.
---

# Character.md

Character.md is a face-first workflow for creating consistent photorealistic AI characters. Use this skill when a user wants to build a reusable character identity, reduce facial drift, create a professional headshot, create lifestyle photography, or diagnose why a generated image no longer looks like the same person.

Keep the workflow non-technical. Do not require Python, local scripts, MediaPipe, OpenCV, model downloads, or landmark-detection setup. Use uploaded reference images directly when the environment supports image analysis and image generation.

## Optional References

Load these only when needed:

- `references/getting-started.md`: manual setup path for users who are not invoking the skill directly.
- `references/starter-prompts.md`: first-pass prompts for creating the initial character identity.
- `references/prompt-assembly.md`: how to combine Character DNA, face lock, scene, wardrobe, camera, and lighting.
- `references/face-lock-snippet.md`: reusable identity lock language.
- `references/identity-ladder-prompts.md`: anchor, transition, and lifestyle ladder prompts.
- `references/headshot-prompts.md`: professional headshot prompts.
- `references/lifestyle-prompts.md`: lifestyle and 4-tile prompts.
- `references/drift-diagnostics.md`: detailed rejection and correction workflow.
- `references/simple-checklist.md`: quick visual acceptance checklist.
- `references/scoring-rubric.md`: stricter scoring for identity consistency.
- `references/test-prompts.md`: manual test scenarios.
- `references/image-progression.md`: example progression from source images to refined outputs.

Use `assets/` only as visual examples or reference assets. Do not treat bundled asset subjects as the default character.

Several references end with a "Worked example" block showing a fully filled-in prompt or character file. Use those blocks when the user asks what a completed example looks like. Everything outside those blocks is a template with bracketed fields to fill from the user's own reference images.

## Output Location

Write the user's character file into the user's own working directory, or to a path the user specifies. Default to `character.md` in the user's current project directory, and confirm the path before writing if a file already exists there.

Never modify this skill package. Do not write to, overwrite, or copy from any file under the skill directory, including any bundled template, reference, example, or asset. Those are read-only instructional material.

## Command Menu

Use these commands as workflow names. If the user asks naturally, map the request to the closest command.

- `/character create`: run the full guided workflow.
- `/character map-face`: analyze uploaded reference images and create a Facial Feature Map.
- `/character anchor`: generate or revise the anchor headshot.
- `/character sheet`: generate or revise the identity sheet.
- `/character headshot`: create one professional headshot from the approved identity.
- `/character lifestyle`: create one 4-tile lifestyle image from the approved identity.
- `/character diagnose`: identify drift and produce correction instructions.

## Source Of Truth

- The uploaded identity reference images are the original identity truth.
- The approved anchor headshot is the controlled quality anchor.
- The approved multi-angle identity sheet is the visual source of truth.
- The character file you write for the user is the reusable text source of truth.
- Style references affect attire, palette, texture, and vibe only. They must never override facial identity.

## Full Create Workflow

1. Ask the user to upload 3-5 identity reference images:
   - front-facing
   - left or right three-quarter
   - side profile
   - natural candid
   - optional waist-up or full-body image
2. Run `/character map-face`.
3. Generate one anchor headshot.
4. Ask the user to approve or reject the anchor.
5. If rejected, run `/character diagnose`, revise the prompt using the diagnosis, and regenerate the anchor.
6. After anchor approval, ask for attire and style direction.
7. Generate a 5-panel identity sheet with five distinct style combinations.
8. Ask the user to approve or reject the identity sheet.
9. If rejected, run `/character diagnose`, identify which panel or traits drifted, revise the prompt, and regenerate the sheet.
10. After identity sheet approval, translate the visual identity into a new character file in the user's working directory (see "Output Location").
11. Ask whether the user wants a professional headshot or lifestyle photography.
12. Generate the selected final output.

## Facial Feature Map

Create a text-first map that can be used directly inside prompts. Describe visible features only. Do not identify the person, compare them to a named person, infer sensitive traits, or claim exact biometric measurement.

Include:

- Face shape and facial proportions
- Jawline and chin
- Cheekbone structure
- Eyes, eyelids, and eye spacing
- Brows and brow weight
- Nose bridge, width, and profile
- Mouth width and lip shape
- Hairline and hair density
- Facial hair shape, density, and edges
- Skin texture and tone variation
- Natural asymmetry
- Drift risks
- Negative constraints

Output format:

```txt
Facial Feature Map
- Face shape:
- Jaw / chin:
- Eyes / brows:
- Nose:
- Mouth:
- Hair / hairline:
- Facial hair:
- Skin texture:
- Natural asymmetry:

Identity Lock
Preserve...

Drift Risks
Do not...
```

## Anchor Headshot

The anchor headshot is a controlled identity test, not a final lifestyle image.

Generate one clean, front-facing or slight three-quarter professional portrait with:

- face dominant in frame
- neutral or calm expression
- simple background
- clean lighting
- no hats, sunglasses, headphones, microphones, or identity-blocking props
- no heavy stylization or beautification

If rejected:

1. Ask what feels wrong if the user has not said it.
2. Diagnose drift against the Facial Feature Map.
3. Name the failed traits plainly.
4. Regenerate the anchor with corrected identity constraints.

## Identity Sheet

Generate one 5-panel head-and-shoulders identity sheet after the anchor is approved.

Required structure:

- Panel 1: front-facing
- Panel 2: left three-quarter
- Panel 3: right three-quarter
- Panel 4: left profile
- Panel 5: right profile

Each panel should use a unique attire/style combination based on the user-provided style elements while keeping:

- same person
- same face structure
- same hairline
- same facial hair
- same skin texture
- consistent lighting and background system
- head-and-shoulders framing

If rejected:

1. Diagnose which panel or traits drifted.
2. Preserve approved panels as style/identity guidance.
3. Regenerate the sheet with stronger identity constraints.

## Attire And Style Intake

After anchor approval, ask for concise style direction:

- 3-5 clothing or style elements
- preferred color palette
- fit preference
- accessories, if any
- avoid-list

The user may upload style reference images. Treat them as wardrobe and mood references only.

## Professional Headshot

Generate exactly one final professional headshot unless the user asks for a batch.

Use:

- approved identity sheet as visual truth
- the user's character file as text truth
- professional but natural styling
- face large enough to verify identity
- no identity-blocking props

## Lifestyle Photography

Before generating lifestyle output, ask five environment questions:

1. Primary use case: LinkedIn, website, podcast, content, speaking, workspace, or other.
2. Setting type: cafe, office, studio, desk, stage, street, home office, or other.
3. Mood: authority, warmth, creative, technical, candid, editorial, or other.
4. Props: laptop, microphone, coffee, notebook, monitors, books, phone, or none.
5. Avoid-list: hats, headphones, logos, dark lighting, wide shots, side profiles, face-obscuring props, or other.

Generate one final image containing four tiles. Each tile should show a different environment or use case while preserving the same face and character identity.

Tile guidance:

- Tile 1: authority or professional presence
- Tile 2: working or technical environment
- Tile 3: personality or media/podcast/content environment
- Tile 4: lifestyle or social/content environment

Keep the face visible enough in each tile to judge identity. Avoid environment choices that hide jawline, eyes, hairline, or facial hair.

## Drift Diagnostics

Use this whenever the user rejects an anchor, identity sheet, headshot, or lifestyle output.

Report:

- What drifted
- Where it drifted
- Which source of truth it conflicts with
- What prompt constraint should be strengthened
- Whether to regenerate anchor, sheet, headshot, or lifestyle output

Common drift categories:

- face widened or narrowed
- jaw thickened or softened
- chin changed
- eyes shifted shape or spacing
- brow became too sharp or too light
- nose bridge/profile changed
- mouth width or lip shape changed
- hairline filled in or receded too far
- facial hair became too dense, too sharp, or disappeared
- skin became too smooth, glossy, or generic
- styling or props hid identity-critical features

## Character.md Translation

After identity sheet approval, write or revise the user's own character file — a new file in the user's working directory, or at a path the user specifies. Never write over a bundled template or example inside this skill package. Include:

- Character DNA
- Facial Identity Lock
- Face Lock Snippet
- Body composition, if known
- Expression system
- Wardrobe system
- Props and environment system
- Drift prevention notes

Keep identity language strict and scene language flexible. The final prompt order is:

```txt
Character DNA + Facial Feature Map + Face Lock + Output Mode + Scene / Attire / Camera / Lighting
```
