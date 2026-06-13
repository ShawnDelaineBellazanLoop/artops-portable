---
uid: artops.skills.index
_category: conceptual
---

# Skill Files

ArtOps ships four `SKILL.md` files — one per agent phase. Each file is a structured
system prompt: paste it into any capable AI platform, supply the required inputs,
and the agent activates.

All skill files live in the `skills/` directory of the repo.

---

## How to Use a SKILL.md

1. Open the file in any text editor and copy its full contents.
2. Open your AI platform (Claude, Google AI Studio, Gemini, Copilot, etc.).
3. Paste the contents as your first message or system prompt.
4. Supply the required inputs listed in the file's **Inputs** section.
5. Copy the JSON output and carry it to the next agent.

> **No install required.** The loop is a process, not software. Any capable
> AI chat can run any phase.

---

## The Four Skill Files

| File | Phase | Pattern | Input | Output |
|---|---|---|---|---|
| [`00-prompt-craft-agent/SKILL.md`](https://github.com/ShawnDelaineBellazanLoop/artops-portable/blob/main/skills/00-prompt-craft-agent/SKILL.md) | PLAN | 2 — Deliberative | concept + constraints | `prompt_plan_json` |
| [`01-generation-agent/SKILL.md`](https://github.com/ShawnDelaineBellazanLoop/artops-portable/blob/main/skills/01-generation-agent/SKILL.md) | MAKE | 1 — Reactive | `prompt_plan_json` + reference photo | `make_response_json` |
| [`02-portfolio-checker-agent/SKILL.md`](https://github.com/ShawnDelaineBellazanLoop/artops-portable/blob/main/skills/02-portfolio-checker-agent/SKILL.md) | CHECK | 3 — Goal-Oriented | `make_response_json` + brand profile | `checker_frame_json` |
| [`03-monetization-reflector-agent/SKILL.md`](https://github.com/ShawnDelaineBellazanLoop/artops-portable/blob/main/skills/03-monetization-reflector-agent/SKILL.md) | REFLECT | 4 — Learning | `checker_frame_json` | verdict + constraints |

---

## Supporting Data Files

These files live in `skills/` alongside the SKILL.md files:

| File | Purpose | Starts As |
|---|---|---|
| [`brand-profile.json`](https://github.com/ShawnDelaineBellazanLoop/artops-portable/blob/main/skills/brand-profile.json) | Subject brand tokens for `brand_consistency` scoring | Populated — see [Getting Started](../guides/getting-started.md) |
| `earned-constraints.json` | Crystallized never_again rules from prior loops | Synced from root `earned_constraints.json` |
| `conversion-tracker.json` | ACCEPT log — tracks published pieces and revenue | Empty entries array with typed schema |
| `CHEATSHEET.md` | One-page quick reference — keep open while running | Static reference |
| `GUIDE.md` | Full operator guide with worked examples | Static reference |

---

## Phase Isolation Law

Each SKILL.md is constitutionally restricted to its phase. This is enforced by
the agent's own identity declaration — not by the platform.

| Agent | Does | Never Does |
|---|---|---|
| PromptCraftAgent | Plans prompt variants from concept + constraints | Generates · scores · issues verdicts |
| GenerationAgent | Executes prompts · records raw results | Plans · summarizes · scores · issues verdicts |
| PortfolioCheckerAgent | Scores variants · issues PASS/FAIL per variant | Plans · generates · issues verdicts |
| MonetizationReflectorAgent | Issues verdict · writes constraints · prepares publish payload | Plans · generates · scores |

If an agent's output looks like it's doing someone else's job, re-paste the
SKILL.md and try again — the identity declaration will re-anchor it.

---

## Active Earned Constraint

| ID | Rule | Embedded In |
|---|---|---|
| `EARNED-2026-06-12-001` | Reference photo must be attached at MAKE step. Text-only generation → `brand_consistency = 0` → total fails 28/40 threshold. | `01-generation-agent/SKILL.md` + `00-prompt-craft-agent/SKILL.md` process step 1 |

[Full earned constraints documentation →](../guides/earned-constraints.md)
