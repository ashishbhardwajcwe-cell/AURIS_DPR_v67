# DPR Analyzer Pro — Ver67

DPR Analysis tool with all major IRC/MoRTH codes built in as guiding norms.

**Border Roads Organisation** — Developed by Col Ashish Bhardwaj.

Ver67 carries the full Ver66 audit engine forward, plus:

1. **Ninth IRC reference loaded** — `IRC:SP:55-2014` (Guidelines on Traffic
   Management in Work Zones, First Revision) now preloads alongside the
   existing IRC:37, IRC:52, IRC:73, IRC:SP:13, IRC:SP:19, IRC:SP:42,
   IRC:SP:48 and MoRTH 5th Revision. The picker entry for IRC:SP:55 is
   now enabled and the title is corrected to match the actual document
   ("Traffic Management in Work Zones" — Road Safety Audit is the
   separate IRC:SP:88, which remains out of scope).
2. **Tightened analyze prompt** — two systematic citation errors found
   in the Sikkim Ver66 audit are now prevented:
   - **Document-attribution rules** explicitly tell the model that
     hill-road geometric-design clauses (hairpin radius, curve radii,
     superelevation, transition curves, gradients) live in IRC:52, not
     IRC:SP:48. IRC:SP:48 covers slope stability, retaining walls,
     hill-road pavement, catch water drains, earthwork.
   - **Loaded-references-only rule strengthened** — if the model
     recognises a code from training (e.g. IRC:6, IRC:78, IRC:112,
     IRC:SP:84, IRC:SP:88, BR Regulations, IS:1893) but it has no
     `[IRC REFERENCE: filename]` block above, the finding MUST fall
     back to General Observation. Citing an un-loaded code is treated
     as a fabrication.
   - A pre-emit mental-verification step is now mandated.
3. **JSON report export** — new "📥 JSON (verifier)" button on the
   results screen downloads the parsed analysis result as JSON.
4. **Standalone citation verifier** (`verify-report.html`) — drop in
   the exported JSON (or paste PDF/Word text) to cross-check every
   cited clause against the nine loaded MD files. Output is a
   colour-coded table — `VERIFIED` / `MISATTRIBUTED` /
   `NO REF LOADED` / `NOT FOUND` / `GENERAL OBS`.

What's unchanged from Ver66:

- All eight existing IRC / MoRTH MD references (now nine with SP:55)
- The full clause-level citation rules (documentName / clauseNumber /
  clauseSummary / failureReason) and the General Observation fallback
- Design / Documentation compliance split, severity model, JSON output
  schema
- Report header inputs, PDF / Word / Print builders
- Guideline preflight load with green/red banner, "Engine Ready" status
- Two-host audio overview ("podcast") via Gemini TTS
- Netlify Functions (`anthropic-proxy`, `gemini-tts`, `get-config`)
- Visual theme: teal (#0D9488) + dark navy (#1a1a2e) on light grey,
  Playfair Display + Outfit fonts — the Ver66 look. Login page, app
  header and report template restored to the Ver66 layout, with the
  BRO image removed (no on-screen logo). Drop a logo file into
  `assets/` and reference it if you want one back.

## Access

Site password: `BRO@DPR2026`.

## Deployment

Netlify auto-detects everything. Build command is empty, publish
directory is repo root, functions directory is `netlify/functions`.
Set `ANTHROPIC_API_KEY` and `GEMINI_API_KEY` environment variables
on the Netlify site.
