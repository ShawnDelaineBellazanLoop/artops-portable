---
uid: artops.roadmap
_category: roadmap
---

# Roadmap

Strategic milestones for ArtOps Portable.  
Ordered by priority within each milestone. Subject to revision based on earned constraints produced by real loops.

---

## Milestone 2 — Orchestrator CLI · Target: Q3 2026

The current v1.0 pack requires manual JSON carry between agents. Milestone 2 automates the carry chain.

| Item | Description | Status |
|---|---|---|
| `artops run` CLI | Single command that runs all four phases in sequence, carrying JSON automatically | Planned |
| Auto reference-photo attachment | CLI flag `--reference <path>` injects reference photo into the MAKE step automatically | Planned |
| Loop tracking | CLI tracks `loop_number` and enforces `max_loops: 3` without manual counting | Planned |
| Trail auto-write | Every run writes a dated trail directory to `trails/` automatically | Planned |

---

## Milestone 3 — Multi-Subject Support · Target: Q4 2026

v1.0 is optimized for a single subject per loop run. Milestone 3 enables pack-level generation for multiple subjects in a single session.

| Item | Description | Status |
|---|---|---|
| Subject registry | `subjects/` directory with per-subject `brand-profile.json` | Planned |
| Batch PLAN | PromptCraftAgent generates variants for N subjects simultaneously | Planned |
| Parallel CHECK | PortfolioCheckerAgent scores all subjects in one call | Planned |
| Aggregate REFLECT | MonetizationReflectorAgent issues per-subject verdicts + pack-level summary | Planned |

---

## Milestone 4 — Marketplace Integration · Target: Q1 2027

Automate the ACCEPT → publish flow end-to-end.

| Item | Description | Status |
|---|---|---|
| Dribbble publish automation | MonetizationReflectorAgent ACCEPT payload → Dribbble API auto-publish | Planned |
| Adobe Stock submit | On ACCEPT, auto-generate Adobe Stock submission metadata | Planned |
| Revenue tracking | Post-publish, track view/download/license data back into the trail | Planned |
| Earned constraint from market data | If published asset underperforms, generate an earned constraint | Planned |

---

## Backlog — No Target Date

| Item | Description |
|---|---|
| Earned constraint federation | Share constraints across ArtOps instances via a federated board |
| Video portrait loop | Extend MAKE phase to support video generators (Sora, Runway, Kling) |
| Style transfer agent | New agent (Pattern 5 Hybrid) that applies a style template to an ACCEPTED asset |
| DocFX API reference | Auto-generate API reference from the PMCRO .NET assemblies |
| Dark/light favicon | SVG favicon that respects system color scheme |

---

## Completed

| Version | Item |
|---|---|
| v1.0.0 | Four core agents (PLAN/MAKE/CHECK/REFLECT) |
| v1.0.0 | `earned_constraints.json` with crystallized Chase session constraint |
| v1.0.0 | DocFX 2.78.5 documentation site with product design layer |
| v1.0.0 | GitHub Actions CI/CD pipeline → GitHub Pages auto-deploy |
| v1.0.0 | Cross-platform guide (AI Studio + Copilot + Claude + Gemini) |

---

*Roadmap reflects the Orchestrator's current planning state. Items move from Backlog → Milestone based on real loop feedback, not calendar schedules.*
