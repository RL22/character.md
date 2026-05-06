# Character.md

A cross-agent skill kit for creating consistent photorealistic AI characters.

Character.md helps an agent turn uploaded reference images into a reusable character identity, approve an anchor headshot, approve a multi-angle identity sheet, and then generate either a professional headshot or a 4-tile lifestyle image with less character drift.

The core package lives here:

```txt
skills/character-md/
```

## Use It

If your agent supports skills, invoke:

```txt
/character create
```

The skill can also handle:

```txt
/character map-face
/character anchor
/character sheet
/character headshot
/character lifestyle
/character diagnose
```

For manual use, start with `skills/character-md/references/getting-started.md`.

## Source Of Truth

- Uploaded reference images are the original identity truth.
- The approved anchor headshot is the quality anchor.
- The approved identity sheet is the visual source of truth.
- `character.md` is the reusable text source of truth.
- Style references affect wardrobe, color, texture, and vibe only.

## Repo Layout

```txt
character-md/
├── README.md
├── AGENTS.md
├── CLAUDE.md
├── character.md
├── CONTRIBUTING.md
├── LICENSE
└── skills/
    └── character-md/
        ├── SKILL.md
        ├── agents/
        │   └── openai.yaml
        ├── assets/
        └── references/
```

## Agent Compatibility

- Codex uses `skills/character-md/SKILL.md`.
- OpenCode and other compatible agents use `AGENTS.md`.
- Claude Code uses `CLAUDE.md`, which imports `AGENTS.md`.

This repo is intentionally skill-first, not plugin-first. There are no local scripts, Python dependencies, landmark detection models, MediaPipe setup, or OpenCV setup in v1.

## License

MIT.
