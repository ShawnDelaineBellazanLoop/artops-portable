---
uid: artops.changelog
_category: changelog
---

# Changelog

All changes to ArtOps Portable are recorded here.  
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).  
Versioning follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
