---
_appTitle: "ArtOps — AI Self-Portrait Agent Pack"
_description: "A portable PMCRO-powered four-agent loop that turns rough self-portrait concepts into prompt-engineered, portfolio-ready, monetizable art assets."
layout: landing
---

# ArtOps Portable

**A four-agent cognitive loop for AI self-portrait art.**  
Plan prompts. Generate images. Check portfolio quality. Reflect and monetize.  
Runs on any AI platform — Google AI Studio, Copilot, Claude, Gemini.

---

## The Loop at a Glance

```
Seed Concept
     │
     ▼
[00] PromptCraftAgent   → prompt_plan_json      (PLAN)
     │
     ▼
[01] GenerationAgent    → make_response_json    (MAKE)
     │
     ▼
[02] PortfolioChecker   → checker_frame_json    (CHECK)
     │
     ▼
[03] MonetizationReflector → verdict + earned_constraints (REFLECT)
     │
     ├── ACCEPT  → publish to Dribbble, log conversion
     ├── LOOP    → re-plan with earned constraints
     └── ESCALATE → human review
```

---

## What's in This Pack

| Agent | Phase | Pattern | Output |
|---|---|---|---|
| [PromptCraftAgent](articles/agents/00-prompt-craft-agent.md) | PLAN | Deliberative | `prompt_plan_json` |
| [GenerationAgent](articles/agents/01-generation-agent.md) | MAKE | Reactive | `make_response_json` |
| [PortfolioCheckerAgent](articles/agents/02-portfolio-checker-agent.md) | CHECK | Goal-Oriented | `checker_frame_json` |
| [MonetizationReflectorAgent](articles/agents/03-monetization-reflector-agent.md) | REFLECT | Learning | `reflector_output` |

---

## Quick Start

```bash
# 1. Clone the pack
git clone https://github.com/tooensure/artops-portable
cd artops-portable

# 2. Describe your concept
# Open 00-prompt-craft-agent/SKILL.md in Google AI Studio
# Paste earned-constraints.json contents
# State your concept

# 3. Run each agent in sequence
# Carry JSON outputs between agents manually or via orchestrator

# 4. Attach a real reference photo at the MAKE step
# Results are significantly higher quality with a reference photo
```

---

## Navigation

- [**Agent Reference**](articles/agents/index.md) — One page per agent: identity, inputs, outputs, run log
- [**Getting Started Guide**](articles/guides/getting-started.md) — Step-by-step first run walkthrough
- [**Cross-Platform Workflow**](articles/guides/cross-platform.md) — Running across Google AI Studio, Copilot, Claude
- [**Earned Constraints**](articles/guides/earned-constraints.md) — How the loop learns and crystallizes knowledge

---

> **The One-Line Truth:**  
> A concept enters PromptCraft. The loop runs. The portfolio piece ships.

*ArtOps Portable v1.0.0 — Built on PMCRO 2.0.0 · Tooensure LLC*
