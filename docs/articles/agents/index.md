# Agent Reference

The ArtOps pack consists of four agents, each owning a single phase of the cognitive loop.  
No agent crosses its phase boundary. Typed frames carry all state between agents.

## The Four Agents

| # | Agent | Phase | Cognitive Pattern |
|---|---|---|---|
| 00 | [PromptCraftAgent](00-prompt-craft-agent.md) | PLAN | Pattern 2 — Deliberative |
| 01 | [GenerationAgent](01-generation-agent.md) | MAKE | Pattern 1 — Reactive |
| 02 | [PortfolioCheckerAgent](02-portfolio-checker-agent.md) | CHECK | Pattern 3 — Goal-Oriented |
| 03 | [MonetizationReflectorAgent](03-monetization-reflector-agent.md) | REFLECT | Pattern 4 — Learning |

## Frame Chain

Every agent handoff is a typed JSON frame. No prose crosses agent boundaries.

```
seed_intent
    → [00 PromptCraft]  → prompt_plan_json
    → [01 Generation]   → make_response_json
    → [02 Checker]      → checker_frame_json
    → [03 Reflector]    → reflector_output (verdict: ACCEPT | LOOP | ESCALATE)
```

## Phase Isolation Law

Each agent stays strictly in its phase. The table below defines what each agent **does** and **does not** do.

| Agent | Does | Never Does |
|---|---|---|
| PromptCraft | Plans prompt variants | Generates images, scores, reflects |
| Generation | Executes prompts, extracts raw results | Summarizes, plans, scores |
| Checker | Scores completeness, correctness, brand | Plans, generates, issues verdicts |
| Reflector | Issues verdict, writes EarnedConstraints | Plans, generates, scores |
