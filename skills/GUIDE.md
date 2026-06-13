# ArtOps Portable Pack — Getting Started

This pack helps you turn a self-portrait idea into a polished, portfolio-ready
piece of AI art by running it through a simple 4-step loop:

**Plan → Make → Check → Reflect**

You don't need any special setup — just paste each agent's `SKILL.md` into an
AI chat, give it the input it asks for, and pass its output to the next agent.
Everything below assumes zero prior experience with the pack.

---

## Quick Start (TL;DR)

1. Unzip `artops-portable/`, fill in `brand-profile.json` with a few words
   about your style.
2. Take a decent selfie/portrait photo — you'll reuse it throughout.
3. Run the four agents in order, copying each JSON output into the next:
   `00-prompt-craft` → `01-generation` → `02-portfolio-checker` →
   `03-monetization-reflector`.
4. On **LOOP**, copy `earned_constraints` back into step 1 and go again
   (max 3 rounds is the suggested default).
5. On **ACCEPT**, review the drafted post — publishing is always manual.

Everything from here is the detail behind those five steps. See also
`CHEATSHEET.md` for a one-page quick reference to keep open while you work.

---

## 1. The Four Agents

| Step | Agent | What it does | You give it | It gives you |
|---|---|---|---|---|
| Plan | `00-prompt-craft-agent` | Turns your idea into 3–5 prompt variants | A short description of your concept | `prompt_plan_json` |
| Make | `01-generation-agent` | Generates an image for each variant | `prompt_plan_json` | `make_response_json` |
| Check | `02-portfolio-checker-agent` | Scores each image (composition, brand fit, trends, prompt match) | `make_response_json` | `checker_frame_json` |
| Reflect | `03-monetization-reflector-agent` | Decides ACCEPT / LOOP / ESCALATE | `checker_frame_json` | Verdict + next steps |

Each agent does **only** its job — Plan never generates, Make never judges
quality, Check never decides the verdict, Reflect never re-prompts directly.
This separation is what keeps the loop from going in circles: every output
is a clean handoff to the next step.

---

## 2. Setup (5 minutes)

1. Unzip the `artops-portable` folder somewhere you'll remember.
2. Open `brand-profile.json` and jot down a few words about your visual style
   (e.g. *"warm tones, soft film grain, minimal backgrounds"*). Optional, but
   it makes the Check step's `brand_consistency` score meaningful instead of
   `unscored`.
3. Leave `earned-constraints.json` and `conversion-tracker.json` as-is —
   they fill in automatically as you use the loop.
4. Take a decent selfie or portrait photo now (natural light, neutral
   background works best). You'll reuse this across rounds — see Section 3.

---

## 3. Key Tip: Start From a Real Photo, Not Just a Description

This is the single biggest quality upgrade you can make.

**Text-only prompt** (Make agent generates from scratch):
> "A portrait of a woman with curly brown hair, warm lighting, looking off
> to the side, painterly style"

The model is guessing at everything — face shape, hair texture, proportions,
expression. Results tend to look *generically* like the description rather
than like *you*.

**Photo-based prompt** (you attach an actual selfie, then the image tool
edits/restyles it):
> "Using the uploaded photo as the base, restyle in a painterly portrait
> look — warm lighting, soft brush texture, keep the subject's face and pose
> as-is, shift the background to a muted studio tone"

With a real reference for your face, pose, and proportions, the output keeps
what makes the image *recognizably you* while applying the new style on top.
The Checker agent will almost always score these higher on **prompt
adherence** and **brand consistency**, because there's less for the model to
invent.

**How to do this in practice:**
1. Use the same reference photo from Setup for every variant in a round.
2. When you run `01-generation-agent` (or its equivalent in whatever image
   tool you're using), attach the photo alongside the `prompt_plan_json` and
   say to use the photo as the base, applying that variant's
   style/lighting/framing on top.
3. Continue the loop as normal — Check and Reflect work the same way
   regardless of whether the image started from a photo or from scratch.

---

## 4. Worked Examples

### Example A — Moody Editorial Portrait

**Concept given to Plan agent:** *"Moody editorial-style self-portrait, dark
academia aesthetic"*

```json
{
  "id": "v1",
  "prompt": "Editorial portrait, dark academia aesthetic, dramatic side
    lighting, library/bookshelf background, muted earth tones",
  "negative_prompt": "bright colors, flat lighting, modern setting",
  "intent_hypothesis": "Does dramatic side lighting read as 'editorial'
    without looking harsh?"
}
```

- **Without a base photo:** the Make agent generates a stranger fitting this
  description. `prompt_adherence` might score ~8, but `brand_consistency`
  stays low (~4) or unscored — nothing ties the result to you.
- **With your selfie as the base:** the lighting, background, and tone shift
  apply to *your actual photo*. The Checker now has something concrete to
  compare against `brand-profile.json`, and `brand_consistency` jumps
  significantly.

### Example B — Commercial / Dribbble-Style Headshot

**Concept given to Plan agent:** *"Clean, modern UI-designer headshot for a
Dribbble profile — friendly, approachable, tech-forward"*

```json
{
  "id": "v2",
  "prompt": "Professional headshot, soft studio lighting, gradient
    blue-purple background, subtle smile, modern minimalist styling,
    slight 3/4 angle",
  "negative_prompt": "harsh shadows, cluttered background, formal suit",
  "intent_hypothesis": "Does a gradient background plus soft lighting read
    as 'tech-forward' without feeling generic stock-photo?"
}
```

- **Without a base photo:** composition and `trend_alignment` can still score
  well (these are about layout/style trends, not identity), but
  `brand_consistency` stays low — there's no real anchor to your identity.
- **With your selfie as the base:** the same gradient background, lighting,
  and framing apply to your actual face and expression. `brand_consistency`
  scores much higher, and the Reflect agent's drafted Dribbble post copy more
  plausibly describes *you*, not a stand-in.

**Takeaway across both examples:** photo-based generation helps
`brand_consistency` and `prompt_adherence` the most, since the model adapts a
known reference rather than inventing one. Composition and `trend_alignment`
scores tend to be similar either way, since those are mostly layout/style
choices.

---

## 5. Running a Full Loop

1. Paste `00-prompt-craft-agent/SKILL.md` into an AI chat, describe your
   concept (and attach your reference photo if the model supports image
   input at this stage — extra context never hurts).
2. Take the `prompt_plan_json` it returns. Paste
   `01-generation-agent/SKILL.md` (same chat or a new one), attach your
   reference photo, and provide the plan.
3. Take `make_response_json`. Paste `02-portfolio-checker-agent/SKILL.md`,
   and include your `brand-profile.json` contents if you have them.
4. Take `checker_frame_json`. Paste `03-monetization-reflector-agent/SKILL.md`,
   and tell it the loop number (e.g. 1) and max loops (3 is a good default).
5. Follow the verdict:
   - **ACCEPT** → review the drafted post details (title, tags, description),
     publish manually when ready. A `conversion-tracker.json` entry gets
     drafted too — fill in `sold` later once you know the outcome.
   - **LOOP** → copy `earned_constraints` back into step 1 — append them to
     `earned-constraints.json` so the next round avoids the same mistakes.
   - **ESCALATE** → the concept itself may need a rethink, not just the
     prompts. Try a different angle on the idea before re-entering the loop.

---

## 6. Cross-Platform Flow (e.g. Plan in Google AI Studio, Generate in Copilot)

You don't have to run all four agents in the same chat or tool. Each agent
only needs the JSON output from the previous step, so you can move that JSON
between platforms by hand.

**Example: Plan in Google AI Studio, Make (image generation) in Copilot**

1. **Plan (Google AI Studio):**
   - Paste `00-prompt-craft-agent/SKILL.md` into a Gemini/AI Studio chat.
   - Give it your concept (and your selfie, if supported).
   - Copy the `prompt_plan_json` it returns.

2. **Make (Copilot):**
   - Open Copilot's image generation.
   - Copilot doesn't need the agent's *identity* (SKILL.md) — just the
     *instructions*. For each variant, take its `prompt` (and
     `negative_prompt` if supported) and generate an image, attaching your
     reference photo if using the photo-based approach.
   - Manually assemble the results into `make_response_json` format:
     ```json
     {
       "make_response_json": {
         "step_results": [
           {
             "variant_id": "v1",
             "status": "OK",
             "asset_path": "<wherever Copilot saved/exported the image>",
             "generation_metadata": { "model": "Copilot image gen" }
           }
         ]
       }
     }
     ```
   - This translation step is the only manual part of a cross-platform flow —
     you're standing in for the Generation agent, since Copilot doesn't read
     the SKILL.md format itself.

3. **Check + Reflect (back wherever you like):**
   - Paste `02-portfolio-checker-agent/SKILL.md` with your assembled
     `make_response_json` (and `brand-profile.json` if available).
   - Continue with `03-monetization-reflector-agent/SKILL.md` as normal.

**Why this works:** Plan and Check/Reflect are pure reasoning steps — any
capable AI chat can run them. Make is the only step tied to an actual
image-generation tool, and the pack already treats that as a black box
("whatever image-generation tool is available").

**Going backward (LOOP from a later step):** if Reflect returns LOOP with
`earned_constraints`, take those back to whichever platform ran Plan (Google
AI Studio in this example) and include them in your next prompt to
`00-prompt-craft-agent`. Constraints are plain JSON/text, so they move between
platforms as easily as the prompt plans do.

---

## 7. Troubleshooting / FAQ

**"The Checker scored `brand_consistency` as `unscored`."**
Normal if `brand-profile.json` is still empty. Fill it in with a few
sentences about your visual style and re-run Check on the same
`make_response_json` — no need to redo Plan/Make.

**"A variant came back FAILED in `make_response_json`."**
That's expected behavior, not a bug — Make never retries on its own. The
Checker will flag it as `ASSET_MISSING_CONFLICT` and score it 0; Reflect will
account for that when deciding LOOP vs ESCALATE.

**"I got ESCALATE."**
This means no variant cleared the `portfolio_threshold` even after multiple
LOOP rounds. Treat it as a signal to revisit the *concept* itself — try a
different angle, mood, or framing idea — rather than tweaking prompt wording
again.

**"Do I have to use Claude for every step?"**
No — see Section 6. Any capable AI chat can run Plan, Check, or Reflect. Only
Make is tied to whatever image-generation tool you're using.

**"Can I skip the photo-based approach?"**
Yes, the loop works either way. You'll just likely see lower
`brand_consistency` scores and more LOOP rounds before ACCEPT.

---

## 8. Notes

- Nothing in this pack posts or publishes anything automatically — every
  publish step is drafted for review first.
- `conversion-tracker.json` and `earned-constraints.json` build up over time
  as you run more loops, so the pack gets better at matching your style and
  avoiding past mistakes.
- The pack is intentionally tool-agnostic — it's a *process*, not a piece of
  software. As long as you can paste text and copy JSON between chats, you
  can run it anywhere.
