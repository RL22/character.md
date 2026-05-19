# DESIGN.md

## Overview

Character.md uses the Sprintz design system for a warm, structured project page that supports AI-builder authority. The page should feel like a product-grade case study: clear enough for non-technical visitors, polished enough for a video visual aid, and credible enough for builders evaluating the workflow.

The visual register is brand-led product storytelling. Use Sprintz foundations with Impeccable-inspired section choreography: numbered systems, hover-revealed detail, smooth visual progression, and purposeful motion.

## Color Palette

- `primary`: `#141413`
- `secondary`: `#57514C`
- `orange`: `#ED5724`
- `action-primary`: `#C9471B`
- `action-primary-hover`: `#B84018`
- `neutral`: `#FFFEF8`
- `surface-canvas`: `#F7F3EC`
- `surface-panel`: `#FFFFFF`
- `surface-muted`: `#EFE4DA`
- `surface-dark`: `#2E2A28`
- `text-primary`: `#2B2623`
- `text-secondary`: `#57514C`
- `text-tertiary`: `#7A746E`
- `text-on-dark`: `#D8D1C8`
- `border-base`: `#EEE6DC`
- `border-strong`: `#DDC6B4`
- `ring-hover`: `#FFD4C2`
- `focus`: `#1D70B8`
- `ring-focus`: `#9CC4E4`
- `error`: `#B2382C`
- `error-tint`: `#E7B3AE`

Use orange sparingly for primary calls to action, active markers, and precise emphasis. Do not flood large long-reading surfaces with orange.

## Typography

Use `Space Grotesk` for headings and body when available, falling back to system sans-serif. Use `JetBrains Mono` for command labels, section numbers, field hints, and compact technical labels.

Headlines should be short, outcome-led, and high contrast. Body copy should stay scannable with line lengths under 75 characters.

## Layout

Use a 12-column responsive grid, generous whitespace, and modular full-width bands. Prefer clear section jobs over dense card grids.

Default section rhythm:

1. Context
2. Problem
3. Workflow
4. Proof
5. Download
6. Final action

Cards are allowed for feature commands, proof tiles, and form containment. Do not nest cards.

## Components

- Primary buttons: filled action-primary, uppercase mono label, 48px height, 12px radius.
- Secondary buttons: muted surface, text-primary, same sizing as primary.
- Inputs: white panel, 12px radius, explicit labels, visible blue focus ring.
- Feature panels: restrained borders, warm surfaces, hover lift and warm ring.
- Visual modules: image-first, with concise labels and no decorative overlays that hide identity-critical faces.

## Motion

Use subtle entrance, hover, and active-state motion. Animate opacity and transform only. Respect `prefers-reduced-motion` by disabling nonessential animation.

Motion should make the workflow feel alive, not distract from the face and output examples.

## Copy Guidance

Use plain, direct language. Avoid hype, magic claims, and technical dependency language. Emphasize the identity-first workflow, approval gates, drift diagnostics, and lightweight skill-kit setup.
