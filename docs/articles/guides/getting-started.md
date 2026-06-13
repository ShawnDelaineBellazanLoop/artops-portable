# Getting Started

This guide walks you through your first complete ArtOps loop — from concept to portfolio-ready image.

---

## Pre-flight Checklist

- [ ] A concept in mind (subject, style, mood — 1–3 sentences)
- [ ] A reference photo of your subject (strongly recommended — see [why](#why-reference-photos-matter))
- [ ] Access to at least one AI platform (Google AI Studio, Claude, Gemini, Copilot)
- [ ] `earned_constraints.json` — start with `{"entries": []}` on first run

---

## Step 1 — PLAN: PromptCraftAgent

**Platform:** Google AI Studio, Claude, or any capable chat AI

1. Open your AI platform of choice.
2. Paste the full contents of `00-prompt-craft-agent/SKILL.md` as your first message.
3. In the same message, paste:

```
--- earned_constraints.json ---
{"entries": []}

Concept: [your concept here — e.g. "My German Shepherd Chase who looks like a Paw Patrol dog — police aesthetic, heroic, photorealistic"]
```

4. The agent returns `prompt_plan_json` — typically 3–5 variants, each testing a distinct hypothesis.

**What good output looks like:**

```json
{
  "prompt_plan_json": {
    "concept": "Chase — heroic police German Shepherd",
    "variants": [
      {
        "id": "v1",
        "prompt": "Cinematic portrait, noble German Shepherd in police-blue tactical vest...",
        "negative_prompt": "cartoon, 3d render, distorted...",
        "intent_hypothesis": "Tests high-fidelity realism approach"
      }
    ],
    "constraints_applied": []
  }
}
```

---

## Step 2 — MAKE: GenerationAgent

**Platform:** Microsoft Copilot Image Creator, Adobe Firefly, DALL-E, or any image generator

For each variant in `prompt_plan_json`:

1. Open your image generator.
2. Paste the variant's `prompt` text.
3. **Attach your reference photo of the subject.** This is the single most important step — it drives `brand_consistency`, which is required for a PASS score.
4. Note the result: did it generate? Where is the asset saved?

**Prompt template:**

```
Using the attached photo as the reference subject (preserve face, markings, proportions), generate:

[variant.prompt]

Avoid: [variant.negative_prompt]

Keep the subject's actual appearance recognizable.
```

---

## Step 3 — CHECK: PortfolioCheckerAgent

**Platform:** Same AI as Step 1, or any capable chat AI

1. Open a new chat (or continue the same session).
2. Paste the full contents of `02-portfolio-checker-agent/SKILL.md`.
3. Then paste:
   - The full `prompt_plan_json` from Step 1
   - The full `make_response_json` you assembled from Step 2
   - The contents of `brand-profile.json` (fill it in if empty)

4. The agent returns `checker_frame_json` with scores for each variant.

**Pass threshold:** Total ≥ 28/40 AND `brand_consistency > 0`

---

## Step 4 — REFLECT: MonetizationReflectorAgent

**Platform:** Same AI

1. Paste `03-monetization-reflector-agent/SKILL.md`.
2. Then paste:
   - `checker_frame_json` from Step 3
   - `loop_number: 1` and `max_loops: 3`

3. The agent issues one of three verdicts:
   - **ACCEPT** → Your image is portfolio-ready. Dribbble publish payload included.
   - **LOOP** → Re-run from Step 1 with `earned_constraints.json` updated.
   - **ESCALATE** → Loop could not resolve after max_loops. Human review needed.

4. If LOOP: copy the `earned_constraints` from `reflector_output` into `earned_constraints.json` before running Step 1 again.

---

## Why Reference Photos Matter

| Without reference photo | With reference photo |
|---|---|
| Generic police dog portrait | Subject's actual face, markings, and proportions |
| `brand_consistency` = 0 (unscored) | `brand_consistency` scoreable (up to 10) |
| Likely total < 28 → FAIL | Total can reach 35–38 → PASS |

This is a **crystallized EarnedConstraint** from the first real ArtOps run (Chase session, 2026-06-12).  
The loop produced this rule from real failure data — it is not a guideline, it is a law.

---

## Quick Reference — JSON Carry Chain

```
[Step 1 output] prompt_plan_json
       ↓ (you carry this)
[Step 2 input]  prompt_plan_json → GenerationAgent → make_response_json
       ↓ (you carry this)
[Step 3 input]  make_response_json + brand-profile.json → checker_frame_json
       ↓ (you carry this)
[Step 4 input]  checker_frame_json → reflector_output
       ↓ (if LOOP)
[Update]        earned_constraints.json → back to Step 1
```
