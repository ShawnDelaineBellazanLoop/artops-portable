---
uid: artops.changelog
_category: changelog
---

# Changelog

All changes to ArtOps Portable are recorded here.  
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).  
Versioning follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.5] — 2026-06-12 (patch)

**SVG diagrams replace ASCII art. GitHub release workflow added.**

### Added
- `docs/images/loop-flow.svg` — full loop flow diagram: input node, four agent boxes with phase/pattern badges, JSON frame labels on arrows, color-coded ACCEPT/LOOP/ESCALATE verdict branches, LOOP feedback arrow back to top. Replaces the ASCII `<pre>` block in `index.md`.
- `docs/images/agent-chain.svg` — horizontal four-card agent chain strip with phase color coding, output labels, and connecting arrows. Displayed above the agent card grid in `index.md`.
- `.github/workflows/release.yml` — automated GitHub release workflow: triggers on `v*` tags, extracts the relevant changelog section, packages `skills/` as `artops-portable-skills-v{VERSION}.zip`, and creates a GitHub Release. Usage: `git tag v1.0.5 && git push origin v1.0.5`.

### Changed
- `docs/index.md` — ASCII loop diagram replaced with `![ArtOps Cognitive Loop](images/loop-flow.svg)`. Agent chain SVG added above the HTML card grid.
- Version bumped to `v1.0.5` in `index.md` hero badge, footer, and `main.js` footer badge.

### Why images instead of ASCII
DocFX modern renders SVG inline at full resolution with no font/encoding issues. ASCII `<pre>` blocks in dark-mode sites: wrong font rendering, misaligned on some browsers, no color, no brand alignment. The SVG diagrams use the same design tokens as the rest of the site (AO brand colors, monospace font references, phase badge colors).

---

## [1.0.4] — 2026-06-12 (patch)

**Logo bug fix, CSS selector correction, docs.yml comment clarification.**

### Fixed
- `docs/images/artops-logo.svg` — removed opaque `<rect fill="#0a0b0f"/>` background that was rendering as a solid black square in the navbar. Transparent background now. Trimmed viewBox to 256×256 (pure ring icon — wordmark/tagline are unreadable at 28px navbar height anyway).
- `docs/artops-template/public/main.css` — logo CSS was targeting `.app-logo` only. DocFX modern template renders the logo as `<img class="logo">` inside `.navbar-brand`. Now targets `.navbar-brand img`, `.navbar .logo`, and `.app-logo` for compatibility across DocFX versions.
- `.github/workflows/docs.yml` — header comment said "do NOT use 10.x here" without explanation, which looked like a version bug. Clarified: the `dotnet-version: 8.x` is the DocFX CLI tool runtime (separate from the project application's .NET 10 LTS runtime). Both are correct; they serve different purposes.

### Changed
- Version bumped to `v1.0.4` in `index.md` hero badge, footer, and `main.js` footer badge.

---

## [1.0.3] — 2026-06-12 (patch)

**Artifact source integration, SKILL.md hardening, Skill Files nav page.**

### Added
- `docs/articles/skills.md` — new nav page surfacing all four SKILL.md files with direct GitHub links, supporting data file table, phase isolation law, and active constraint table
- `docs/toc.yml` — new **Skill Files** nav entry between Agent Reference and Guides
- `skills/01-generation-agent/SKILL.md` — added reference photo earned constraint note to Inputs section and Cross-Platform Note
- `skills/00-prompt-craft-agent/SKILL.md` — embedded `EARNED-2026-06-12-001` active constraint directly in Process step 1

### Decision: Artifacts vs SKILL.md files
- The seven Claude artifact URLs contained the original source SKILL.md content that matches what’s on disk in `skills/`. The artifacts were the generative session outputs; `skills/` is the canonical disk representation. No duplicate files needed — the artifacts are already materialized as SKILL.md files. The `skills.md` docs page now links to them on GitHub so the site surfaces them properly.

---

## [1.0.2] — 2026-06-12 (patch)

**Path reference fixes, scoring rubric correction, design system rebuild.**

### Fixed
- All `artops-portable/` folder name references updated to `skills/` across `GUIDE.md`, `README.md`, `getting-started.md`, `cross-platform.md`
- `02-portfolio-checker-agent.md` scoring rubric corrected: was 4 dimensions × 10pts; now correctly 10 dimensions × 4pts (matching agent index and run log evidence)
- All `brand-profile.json` path references updated to `skills/brand-profile.json`
- All agent SKILL.md path references updated to include `skills/` prefix

### Changed
- `docs/index.md`: rewritten with proper HTML component blocks (`hero-banner`, `stat-grid`, `agent-grid`, `agent-card`) that match the CSS class hooks
- `docs/artops-template/public/main.css`: full design system rebuild — hero badge, CTA buttons, agent card grid with phase badges and IO labels, stat grid, responsive breakpoints, enhanced light mode

### Added
- `hero-badge`, `hero-title`, `hero-sub`, `hero-ctas`, `btn-cta-primary`, `btn-cta-ghost` CSS components
- `agent-grid`, `card-number`, `card-phase-badge`, `card-desc`, `card-io`, `io-label` CSS components
- Proper responsive collapse: stat grid 4→2 cols on mobile, agent grid 2→1 col on mobile, CTA buttons stack vertically

---

## [1.0.1] — 2026-06-12 (patch)

**Post-launch corrections and data layer population.**

### Fixed
- `main.js` footer badge: `.NET 8` corrected to `.NET 10 LTS` (stack version mismatch)
- `docfx.json`: wired `_appLogoPath` and `_appFaviconPath` to `images/artops-logo.svg` (logo existed but was not referenced in globalMetadata)

### Changed
- `brand-profile.json`: populated from empty stub to full brand token set — style keywords, color palette, recurring themes, avoid list, reference pieces, platform targets
- `conversion-tracker.json`: populated with JSON schema definition so MonetizationReflectorAgent has a typed target for ACCEPT logging

### Added
- PromptCraftAgent run log entry: ArtOps logo generation session (5 variants, EARNED-2026-06-12-001 applied)

---

## [1.0.0] — 2026-06-12

**Initial production release of ArtOps Portable.**  
Built from the backward flow of the Chase real-world session — the pack existed before the docs, which means the docs describe a system that has already run a real loop and produced real earned constraints.

### Added

- `00-prompt-craft-agent/SKILL.md` — PLAN phase agent, Pattern 2 Deliberative, produces `prompt_plan_json`
- `01-generation-agent/SKILL.md` — MAKE phase agent, Pattern 1 Reactive, produces `make_response_json`
- `02-portfolio-checker-agent/SKILL.md` — CHECK phase agent, Pattern 3 Goal-Oriented, produces `checker_frame_json`
- `03-monetization-reflector-agent/SKILL.md` — REFLECT phase agent, Pattern 4 Learning, produces `reflector_output`
- `earned_constraints.json` — crystallized rule set, initialized with `EARNED-2026-06-12-001`
- DocFX 2.78.5 documentation site (`docs/`) with product-grade design layer
- GitHub Actions CI pipeline (`docs.yml`) — auto-deploys to GitHub Pages on push to `main`

### Earned Constraints Crystallized

| ID | Rule | Source |
|---|---|---|
| `EARNED-2026-06-12-001` | Reference photo must be attached at generation time. Text-only generation produces `brand_consistency = 0`, making the score unpassable regardless of other dimension performance. | Chase session · Loop 1 · Check score 24/40 · Verdict: LOOP |

### Known Limitations

- `brand-profile.json` must be manually populated before the CHECK phase — no auto-generation yet
- Cross-platform JSON carry is manual — no orchestrator CLI exists yet (see [Roadmap](roadmap.md))
- Image generator platforms each have different reference photo attachment UX — see [Cross-Platform Guide](guides/cross-platform.md)

---

## Versioning Policy

| Increment | Trigger |
|---|---|
| PATCH (1.0.x) | Bug fixes in SKILL.md phrasing, constraint corrections, doc fixes |
| MINOR (1.x.0) | New earned constraints, new platform support, new agent capabilities |
| MAJOR (x.0.0) | Breaking changes to JSON frame contracts, new agents, framework version bump |

---

*Changelog maintained by the ArtOps Orchestrator + PMCRO Reflector agent · Tooensure LLC*
