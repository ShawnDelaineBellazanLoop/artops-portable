# Earned Constraints

Earned Constraints are the memory of the loop.  
They are crystallized lessons — rules derived from real failure data — that govern every subsequent run.

---

## What Is an EarnedConstraint?

An EarnedConstraint is a rule produced by the MonetizationReflectorAgent on a LOOP verdict.  
It encodes what went wrong, why it went wrong, and how to prevent it from happening again.

Unlike guidelines (which are advisory), EarnedConstraints are **binding**.  
The PromptCraftAgent reads them before planning any variant.  
Any variant that violates a `never_again` phrase is removed before the plan is emitted.

---

## The `earned_constraints.json` File

This file lives at the root of the pack. It grows with every LOOP cycle.

**Empty (first run):**

```json
{
  "entries": []
}
```

**After the Chase session, Loop 1 (2026-06-12):**

```json
{
  "entries": [
    {
      "constraint_id": "EARNED-2026-06-12-001",
      "never_again":    "generating a variant without attaching the reference photo",
      "reason":         "brand_consistency scored 0 (unscored), causing total 24/40 — below threshold 28. Reference photo is the primary driver of brand_consistency.",
      "created_at":     "2026-06-12T00:00:00Z",
      "cycle":          1,
      "loop":           1,
      "status":         "active"
    }
  ]
}
```

---

## How Constraints Are Earned

```
Checker scores variant → FAIL
        │
        ▼
Reflector identifies the failure pattern
  "brand_consistency = 0 because no reference photo was attached"
        │
        ▼
Reflector crystallizes the rule:
  never_again: "generating a variant without attaching the reference photo"
        │
        ▼
Constraint written to earned_constraints.json
        │
        ▼
Next PromptCraft call reads the file
  Any plan step that would violate this rule is blocked
```

---

## The Constraint Lifecycle

| Status | Meaning |
|---|---|
| `active` | Enforced on every subsequent run |
| `superseded` | Replaced by a more specific constraint |
| `resolved` | The underlying issue was fixed at the tool level (e.g. reference photo is now always attached by the orchestrator) |

Constraints are **never deleted** — only superseded or resolved. The history is preserved.

---

## Active Constraints (as of 2026-06-12)

| ID | Never Again | Source |
|---|---|---|
| `EARNED-2026-06-12-001` | Generating a variant without attaching the reference photo | Chase session, Loop 1 |

---

## How to Use Constraints in Your Prompt

When you paste `earned_constraints.json` into PromptCraftAgent, the agent reads every `never_again` phrase and enforces it:

- If a candidate variant would rely on text-only generation → it is removed from the plan.
- If all variants would violate constraints → the agent returns a `planning_failure` so you know to investigate.

This is the ArtOps version of the PMCRO framework's broader EarnedConstraint system. The same principle that governs the PMCRO orchestrator governs each domain-specific pack built on top of it.

---

## Crystallization — When Constraints Become Skills

After enough constraint accumulation, the pack can be **crystallized**:  
the earned constraints are folded back into the agent SKILL.md files as built-in rules,  
producing a higher-tier version of the pack that starts with accumulated knowledge rather than an empty file.

This is the Tier 1 → Tier 2 → Tier 3 progression:

| Tier | EarnedConstraints | What It Is |
|---|---|---|
| Tier 1 | 0 (empty) | Fresh bootstrap — the free baseline |
| Tier 2 | 1–5 proven rules | Tested, feedback-driven — mid-tier paid asset |
| Tier 3 | 6+ crystallized into SKILL.md | Benchmarked, pre-loaded knowledge — premium asset |

ArtOps Portable v1.0.0 ships as a Tier 1 pack.  
The Chase session earned its first constraint — that is the beginning of Tier 2.
