# ArtOps Cheat Sheet

Keep this open while you run a loop. Full explanations are in `GUIDE.md`.

---

## The Loop

```
PLAN  →  MAKE  →  CHECK  →  REFLECT
 00       01       02         03
```

| Step | File | Input | Output |
|---|---|---|---|
| 00 Plan | `00-prompt-craft-agent/SKILL.md` | your concept (+ earned constraints if any) | `prompt_plan_json` |
| 01 Make | `01-generation-agent/SKILL.md` | `prompt_plan_json` + reference photo | `make_response_json` |
| 02 Check | `02-portfolio-checker-agent/SKILL.md` | `make_response_json` + `brand-profile.json` | `checker_frame_json` |
| 03 Reflect | `03-monetization-reflector-agent/SKILL.md` | `checker_frame_json` + loop #/max | `reflector_output` |

**How to run each step:** paste the SKILL.md into any AI chat → give it the
listed input → copy the JSON it returns → that's the input for the next step.

---

## Before You Start

- [ ] Unzipped `artops-portable/`
- [ ] Filled in `brand-profile.json` (a few words on your style)
- [ ] Have one good reference photo ready (natural light, neutral background)

---

## The #1 Quality Tip

**Always attach your reference photo at the Make step.**
Text-only → generic results that don't look like you.
Photo + style prompt → keeps your face/pose, applies the new style.
This is the single biggest lever for `brand_consistency` and
`prompt_adherence` scores.

---

## After Reflect: What To Do

| Verdict | Action |
|---|---|
| **ACCEPT** | Review drafted post (title/tags/description). Publish manually. Log result in `conversion-tracker.json` later. |
| **LOOP** | Copy `earned_constraints` → append to `earned-constraints.json` → back to step 00 with same concept. |
| **ESCALATE** | Don't keep tweaking prompts — rethink the *concept* itself, then start a fresh loop. |

Default max loops before ESCALATE: **3**

---

## Quick Fixes

| Problem | Fix |
|---|---|
| `brand_consistency: unscored` | Fill in `brand-profile.json`, re-run step 02 only |
| Variant `status: FAILED` | Normal — Checker scores it 0, Reflect handles it. No manual retry. |
| Used Google AI Studio for Plan, Copilot for image gen? | Fine — manually copy `prompt_plan_json` over, and hand-build `make_response_json` from Copilot's results before step 02 |

---

## Golden Rule

Each agent does **one job only**:
- Plan never generates images
- Make never judges quality
- Check never decides ACCEPT/LOOP/ESCALATE
- Reflect never writes new prompts directly

If an agent's output looks like it's doing someone else's job, something's
off — re-paste the SKILL.md and try again.
