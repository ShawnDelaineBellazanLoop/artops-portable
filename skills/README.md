# ArtOps PMCR-O Pack

A four-agent skill pack that runs the **Plan → Make → Check → Reflect** cognitive
loop on AI self-portrait art: iterate prompts, generate, score for portfolio
fitness, and decide whether to publish or try again.

## The Loop (no Orchestrator needed)

You can run this manually, in order, in any Claude conversation:

1. **00-prompt-craft-agent** — give it your concept. It outputs `prompt_plan_json`
   (3-5 prompt variants + negative prompts).
2. **01-generation-agent** — give it the `prompt_plan_json`. It generates an image
   for each variant using whatever image tool you have available, and outputs
   `make_response_json`.
3. **02-portfolio-checker-agent** — give it `make_response_json`. It scores each
   image and outputs `checker_frame_json` with a `best_variant_id`.
4. **03-monetization-reflector-agent** — give it `checker_frame_json`. It tells you
   ACCEPT (publish this one, here's the post copy) or LOOP (try again, here's what
   to change) or ESCALATE (rethink the concept itself).

On LOOP, feed the `earned_constraints` it produces back to step 1 — the prompt
agent will avoid those mistakes next round. That's how it gets better over time.

## Files

All agent skills and supporting data files live in the `skills/` directory:

- `skills/earned-constraints.json` — phrasing/composition rules learned over time (starts empty)
- `skills/brand-profile.json` — describe your visual style here for better brand_consistency scoring
- `skills/conversion-tracker.json` — log of published pieces and whether they led to paid work
- Root `earned_constraints.json` — canonical constraint file injected into every PromptCraft call
