# Cross-Platform Workflow

ArtOps is tool-agnostic by design. The loop is a process, not software.  
Each phase can run on a different AI platform — you act as the bridge, carrying JSON between them.

---

## The Backward Flow Principle

ArtOps was designed and proven in a **backward flow** session:

- **PLAN** ran in Google AI Studio (Gemini)
- **MAKE** ran in Microsoft Copilot (image generation)
- **CHECK + REFLECT** ran in Claude

This is not a workaround. It is the intended design.  
The loop doesn't care which platform runs which phase — it cares about the typed JSON frames.

---

## Platform Capability Matrix

| Platform | Best For | Notes |
|---|---|---|
| Google AI Studio (Gemini) | PLAN (PromptCraft) | Strong at structured JSON output, prompt deliberation |
| Microsoft Copilot | MAKE (Generation) | Image Creator for visual generation; Copilot chat for assembly |
| Claude (claude.ai) | PLAN, CHECK, REFLECT | Strong reasoning, structured JSON, constraint application |
| Adobe Firefly | MAKE (Generation) | Structure Reference feature excellent for photo-based generation |
| DALL-E / ChatGPT | MAKE (Generation) | GPT-4o image generation with reference photo support |
| Gemini CLI | PLAN, CHECK, REFLECT | `gemini -s SKILL.md` for local automation |

---

## Running the Loop Cross-Platform

### Step-by-Step

```
[Google AI Studio]
  ├── Load: 00-prompt-craft-agent/SKILL.md
  ├── Input: earned_constraints.json + concept
  └── Output: prompt_plan_json  ──────────────────────┐
                                                       │ (copy)
[Microsoft Copilot — Image Creator]                    │
  ├── Input: prompt_plan_json variants + reference photo
  └── Output: generated images (asset paths)          │
                                                       │ (assemble make_response_json)
[Claude or Google AI Studio]                           │
  ├── Load: 02-portfolio-checker-agent/SKILL.md        │
  ├── Input: make_response_json + skills/brand-profile.json   │
  └── Output: checker_frame_json  ───────────────────┐│
                                                      ││
[Claude or Google AI Studio]                          ││
  ├── Load: 03-monetization-reflector-agent/SKILL.md  ││
  ├── Input: checker_frame_json                        ││
  └── Output: reflector_output (verdict + constraints) ││
                                                       ││
  IF LOOP: update earned_constraints.json ─────────────┘│
           re-run from PromptCraft ─────────────────────┘
```

---

## You Are the GenerationAgent

When running cross-platform, you stand in for the GenerationAgent:

1. Take `prompt_plan_json` from PromptCraft.
2. Run each variant manually in your image tool of choice.
3. Attach the reference photo at every generation call.
4. Assemble `make_response_json` from the results — this is your MCP bridge.

```json
{
  "make_response_json": {
    "status": "success",
    "step_results": [
      {
        "variant_id": "v1",
        "tool": "copilot-image-creator",
        "status": "success",
        "asset_path": "generated/chase-v1-cinematic.png",
        "notes": "strong composition, reads more like Lab than GSD — no reference photo used"
      }
    ]
  }
}
```

---

## EarnedConstraints Travel with You

EarnedConstraints are just JSON — they travel across platforms as file contents.  
Before any PromptCraft call on a new platform, paste the current `earned_constraints.json`.  
The platform-agnostic constraint system means a lesson learned in Copilot governs the next Gemini run.

---

## Decision: Which Platform for Which Phase?

The answer is: **whatever you have open**.

The only hard rule is that the MAKE phase requires an image generator.  
PLAN, CHECK, and REFLECT are pure reasoning — any capable chat AI works.

Pick the tool that gives you the best JSON output for each phase. Switch freely.
