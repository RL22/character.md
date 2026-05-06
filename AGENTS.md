# AGENTS.md

## Project Purpose

Character.md is a cross-agent skill kit for creating consistent photorealistic AI characters. The main product is the skill at `skills/character-md/SKILL.md`.

Use this repo to maintain the skill instructions, optional references, visual example assets, and the reusable `character.md` template.

## Source Of Truth

- `skills/character-md/SKILL.md` is the main workflow entry point.
- `skills/character-md/references/` contains optional supporting prompts, diagnostics, examples, and checklists.
- `skills/character-md/assets/` contains visual examples and reusable reference assets.
- `character.md` is the reusable user-facing text template.
- Do not duplicate the full workflow across root docs. Point agents back to the skill.

## Editing Rules

- Keep the repo skill-first, not plugin-first.
- Keep root docs short and focused on discovery.
- Do not add local Python, OpenCV, MediaPipe, model-download, or landmark-detection requirements for v1.
- Preserve prompt, diagnostic, and example content when reorganizing.
- Remove generated clutter such as `.DS_Store`.
- Do not treat bundled example assets as the default character.

## Validation

For markdown-only changes:

- Confirm `skills/character-md/SKILL.md` has valid YAML frontmatter with `name` and `description`.
- Confirm every optional reference is linked from `SKILL.md`.
- Confirm root `README.md`, `AGENTS.md`, and `CLAUDE.md` do not contradict the skill.
- Confirm `git status` shows only intentional changes.
