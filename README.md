# Character.md

A free, open-source starter system for creating consistent photorealistic AI characters with GPT-5 Image 2 and other image generation tools.

Character.md helps you define a repeatable **Character DNA** file so your AI-generated images keep the same identity across headshots, lifestyle scenes, workspace photos, podcast visuals, and campaign content.

> Lock the face. Free the world.

## What this repo helps you do

- Create consistent AI portraits that actually look like the same person
- Reduce identity drift across image batches
- Move beyond generic stock-photo aesthetics
- Build reusable prompts for headshots and lifestyle photography
- Use a simple consistency loop: **Generate → Check → Refine**

## Who this is for

- Founders and solopreneurs
- Vibe marketers and creative operators
- Personal brand builders
- Creators and podcasters
- Marketing teams testing AI-generated visuals
- Anyone who wants a repeatable character system instead of one-off prompts

## Repo contents

```txt
character-md/
├── README.md
├── LICENSE
├── install.md
├── character.md
├── CONTRIBUTING.md
│
├── prompts/
│   ├── starter-prompts.md
│   ├── headshot-prompts.md
│   ├── lifestyle-prompts.md
│   └── face-lock-snippet.md
│
├── validation/
│   ├── simple-checklist.md
│   ├── scoring-rubric.md
│   ├── drift-diagnostics.md
│   └── test-prompts.md
│
├── examples/
│   ├── prompt-assembly.md
│   └── image-progression.md
│
└── landing-page/
    ├── index.html
    └── assets/
```

## Quick start

1. Open `install.md`.
2. Add 3–5 reference images.
3. Fill out `character.md` with your strict identity details.
4. Use `prompts/starter-prompts.md` to generate your first baseline headshot.
5. Use the quick consistency checklist to decide what to keep, refine, or regenerate.

## The core idea

Most AI image prompts are too loose. They describe the scene, but they let the model reinterpret the person.

Character.md separates the prompt into reusable layers:

```txt
Character DNA + Outfit + Environment + Camera + Lighting + Constraints
```

The **Character DNA** stays strict. The outfit, environment, camera, and lighting can change.

## Face Lock snippet

Use this in any prompt where identity consistency matters:

```txt
must maintain identical facial structure, same person across all images,
no variation in bone structure, no reinterpretation,
consistent face shape, jawline, eyes, and proportions
```

## Simple consistency loop

You do not need a complicated workflow to get better results.

```txt
Generate → Check → Refine
```

After every batch, ask:

- Does the face still look like the same person?
- Are the hairline, beard, and skin texture consistent?
- Does the image feel like the intended person, not a generic stock model?

If not, tighten `character.md` and regenerate.

## License

MIT. Use it, fork it, remix it, and build with it.

## Support the project

If this helps you create better AI visuals, consider starring the repo on GitHub. It helps more people find the project.
