# ArtOps Portable

**A four-agent PMCRO cognitive loop for AI self-portrait art.**  
Plan prompts → Generate images → Check portfolio quality → Reflect and monetize.  
Runs on any AI platform. No framework install required.

[![Deploy DocFX to GitHub Pages](https://github.com/tooensure/artops-portable/actions/workflows/docs.yml/badge.svg)](https://github.com/tooensure/artops-portable/actions/workflows/docs.yml)

---

## 📖 Documentation

**[→ View the full docs site](https://tooensure.github.io/artops-portable)**

Built with DocFX 2.78.5 · Deployed via GitHub Actions · Hosted on GitHub Pages

---

## The Loop

```
Seed Concept
     │
     ▼
[00] PromptCraftAgent      PLAN    →  prompt_plan_json
     │
     ▼
[01] GenerationAgent       MAKE    →  make_response_json
     │
     ▼
[02] PortfolioCheckerAgent CHECK   →  checker_frame_json
     │
     ▼
[03] MonetizationReflector REFLECT →  verdict + earned_constraints
     │
     ├── ACCEPT   → portfolio-ready · Dribbble publish
     ├── LOOP     → re-plan with crystallized constraints
     └── ESCALATE → human review
```

---

## Quick Start

1. **Open** `00-prompt-craft-agent/SKILL.md` in any capable AI (Google AI Studio, Claude, Gemini)
2. **Paste** `earned_constraints.json` contents + your concept
3. **Get** `prompt_plan_json` — 3–5 prompt variants
4. **Generate** each variant in your image tool (Copilot, Firefly, DALL-E) — **attach a reference photo**
5. **Score** with `02-portfolio-checker-agent/SKILL.md` — threshold is 28/40
6. **Reflect** with `03-monetization-reflector-agent/SKILL.md` — get ACCEPT, LOOP, or ESCALATE

---

## Key Rule — Crystallized 2026-06-12

> **Always attach a reference photo of your subject at the MAKE step.**  
> Without it, `brand_consistency` scores 0, dropping total below the 28/40 threshold.  
> This is an EarnedConstraint from a real loop run — not a guideline.

See [`earned_constraints.json`](earned_constraints.json) for the full constraint record.

---

## Pack Structure

```
artops-portable/
├── 00-prompt-craft-agent/SKILL.md      ← PLAN phase
├── 01-generation-agent/SKILL.md        ← MAKE phase
├── 02-portfolio-checker-agent/SKILL.md ← CHECK phase
├── 03-monetization-reflector-agent/SKILL.md ← REFLECT phase
├── earned_constraints.json             ← Crystallized loop knowledge
├── brand-profile.json                  ← Fill in your subject's brand
├── docs/                               ← DocFX documentation site source
└── .github/workflows/docs.yml          ← GitHub Pages CI pipeline
```

---

## License

Proprietary — Tooensure LLC © 2026
