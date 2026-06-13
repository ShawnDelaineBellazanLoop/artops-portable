---
_appTitle: "ArtOps — AI Self-Portrait Agent Pack"
_description: "A portable PMCRO-powered four-agent cognitive loop that turns rough self-portrait concepts into prompt-engineered, portfolio-ready, monetizable art assets. Runs on any AI platform."
layout: landing
uid: artops.home
---

# ArtOps

**A four-agent cognitive loop for AI self-portrait art.**

> Plan prompts. Generate images. Check portfolio quality. Reflect and monetize.  
> Runs on any AI platform — Google AI Studio, Microsoft Copilot, Claude, Gemini.

[Get Started](articles/guides/getting-started.md) &nbsp;&nbsp; [Agent Reference](articles/agents/index.md) &nbsp;&nbsp; [GitHub](https://github.com/ShawnDelaineBellazanLoop/artops-portable)

---

## What is ArtOps?

ArtOps is a **portable agent skill pack** built on the PMCRO framework. It structures the messy, iterative process of AI art generation into four discrete, phase-isolated agents — each with a typed input contract, a typed output contract, and a cognitive pattern that matches its job.

The pack is not a tool. It is a **cognitive protocol** — load each agent's `SKILL.md` into any capable AI platform, carry JSON frames between agents, and the loop does the rest.

| Metric | Value |
|---|---|
| Agents | 4 |
| Phases | PLAN → MAKE → CHECK → REFLECT |
| Pass threshold | ≥ 28 / 40 total score |
| Max loops | 3 (EC-009 enforced) |
| Framework | PMCRO 2.0.0 · MAF 1.10.0 · MCP 1.4.0 |
| Runtime | .NET 10 LTS |

---

## The Loop

```
Seed Concept  +  earned_constraints.json
        │
        ▼
┌─────────────────────────────┐
│  00  PromptCraftAgent        │  ← PLAN   Pattern 2 — Deliberative
│  Reads constraints first.    │
│  Produces N distinct prompt  │
│  variants, each with a       │
│  testable hypothesis.        │
└──────────────┬──────────────┘
               │  prompt_plan_json
               ▼
┌─────────────────────────────┐
│  01  GenerationAgent         │  ← MAKE   Pattern 1 — Reactive
│  Executes each prompt on     │
│  your image generator.       │
│  REQUIRES reference photo.   │
│  Records raw results.        │
└──────────────┬──────────────┘
               │  make_response_json
               ▼
┌─────────────────────────────┐
│  02  PortfolioCheckerAgent   │  ← CHECK  Pattern 3 — Goal-Oriented
│  Scores each variant across  │
│  10 dimensions (4 pts each). │
│  Pass = total ≥ 28/40        │
│  AND brand_consistency > 0.  │
└──────────────┬──────────────┘
               │  checker_frame_json
               ▼
┌─────────────────────────────┐
│  03  MonetizationReflector   │  ← REFLECT Pattern 4 — Learning
│  Issues verdict.             │
│  Writes EarnedConstraints.   │
│  Prepares Dribbble publish   │
│  payload on ACCEPT.          │
└──────────────┬──────────────┘
               │
    ┌──────────┴──────────┐
    ▼                     ▼                      ▼
  ACCEPT              LOOP (→ 00)          ESCALATE
  Publish.            Re-plan with         Human review.
                      new constraints.
```

---

## The Four Agents

### 00 — PromptCraftAgent · PLAN

[**View Agent →**](articles/agents/00-prompt-craft-agent.md)

Cognitive Pattern 2 — Deliberative. Receives a concept and the accumulated `earned_constraints.json`, then produces a set of fully-specified prompt variants — each testing a distinct hypothesis about what will pass the Checker's rubric. Reads all constraints *before* generating a single variant. Never generates images, never scores.

**Input:** `seed_intent` + `earned_constraints.json`  
**Output:** `prompt_plan_json`

---

### 01 — GenerationAgent · MAKE

[**View Agent →**](articles/agents/01-generation-agent.md)

Cognitive Pattern 1 — Reactive. Takes the `prompt_plan_json` and executes each variant on the configured image generator platform. Assembles raw results into `make_response_json`. Enforces the single most important earned constraint in the system: **a reference photo of the subject must be attached at generation time.**

**Input:** `prompt_plan_json` + reference photo  
**Output:** `make_response_json`

---

### 02 — PortfolioCheckerAgent · CHECK

[**View Agent →**](articles/agents/02-portfolio-checker-agent.md)

Cognitive Pattern 3 — Goal-Oriented. Scores each generated variant across ten dimensions (four points each, forty total). The goal state is `total ≥ 28` AND `brand_consistency > 0`. Never issues verdicts — that is the Reflector's exclusive domain. Issues PASS/FAIL per variant only.

**Input:** `make_response_json` + `brand-profile.json`  
**Output:** `checker_frame_json`

---

### 03 — MonetizationReflectorAgent · REFLECT

[**View Agent →**](articles/agents/03-monetization-reflector-agent.md)

Cognitive Pattern 4 — Learning. The only agent authorized to issue a verdict. Reads `checker_frame_json`, considers loop number against `max_loops`, and issues one of three verdicts. On ACCEPT, produces a Dribbble publish payload. On LOOP, writes new `earned_constraints` entries to prevent repeating the failure mode. On ESCALATE, documents why the loop could not converge.

**Input:** `checker_frame_json` + loop metadata  
**Output:** `reflector_output` (verdict: ACCEPT | LOOP | ESCALATE)

---

## Earned Constraints

The loop learns. Every LOOP verdict produces `earned_constraints` — crystallized rules written from real failure data that prevent the same mistake from occurring in future cycles. These are not guidelines; they are laws.

**Current active constraints:**

| ID | Source | Rule |
|---|---|---|
| `EARNED-2026-06-12-001` | Chase session · Loop 1 | Reference photo of the subject must be attached at generation time. Text-only generation produces `brand_consistency = 0`, which makes the total score unpassable. |

[Full constraint documentation →](articles/guides/earned-constraints.md)

---

## Platform Compatibility

ArtOps is platform-agnostic. Each agent is a `SKILL.md` file — a structured system prompt that works in any capable AI chat interface.

| Platform | PLAN (00) | MAKE (01) | CHECK (02) | REFLECT (03) |
|---|---|---|---|---|
| Google AI Studio | ✅ Gemini 2.5 Pro | — | ✅ | ✅ |
| Microsoft Copilot | ✅ | ✅ Image Creator | ✅ | ✅ |
| Claude (Anthropic) | ✅ | — | ✅ | ✅ |
| Gemini CLI | ✅ | — | ✅ | ✅ |
| Adobe Firefly | — | ✅ | — | — |
| DALL-E / GPT-4o | — | ✅ | — | — |

Cross-platform workflow guide → [Running ArtOps Across Platforms](articles/guides/cross-platform.md)

---

## Quick Start

```bash
# 1. Clone the pack
git clone https://github.com/ShawnDelaineBellazanLoop/artops-portable
cd artops-portable

# 2. Initialize constraints (first run — empty)
# earned_constraints.json is already in the repo as {"entries":[]}

# 3. Open 00-prompt-craft-agent/SKILL.md in your AI platform
# Paste contents as system prompt, add your concept, run

# 4. Carry prompt_plan_json to GenerationAgent
# ATTACH a reference photo of your subject — this is required

# 5. Carry make_response_json to PortfolioCheckerAgent
# Review checker_frame_json scores

# 6. Carry checker_frame_json to MonetizationReflectorAgent
# Act on verdict: ACCEPT → publish | LOOP → re-plan | ESCALATE → review
```

[Full step-by-step guide →](articles/guides/getting-started.md)

---

## Stack

| Component | Version | Role |
|---|---|---|
| PMCRO | 2.0.0 | Cognitive loop orchestration framework |
| MAF | 1.10.0 | Multi-Agent Framework |
| MCP | 1.4.0 | Model Context Protocol |
| .NET | 10 LTS | Runtime |
| DocFX | 2.78.5 | Documentation site generator |

---

*ArtOps Portable v1.0.0 · Built on PMCRO 2.0.0 · Tooensure LLC · 2026*
