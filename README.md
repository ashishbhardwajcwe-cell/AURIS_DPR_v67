# AURIS DPR Analyzer Pro — Ver67

**Intelligent DPR Audit. IRC & MoRTH Certified Logic.**

AURIS is the V67 evolution of the DPR Analyzer, rebranded for use across all
major road-constructing agencies of the country. It carries forward every
audit feature of Ver66 and adds the AURIS visual identity (navy + gold,
luxury wealth-management aesthetic inspired by auriswealth.co).

## What carries over from Ver66 (unchanged)

All analytical/technical behaviour is preserved verbatim from Ver66:

1. **Clause-level citations** — every deficiency reports the source document,
   exact clause number, a one-line summary of what the clause requires, and
   how the DPR fails it.
2. **Three output formats** — PDF (via print-to-PDF), editable Word (.doc),
   and a clean on-screen Print view, all now with the AURIS header/footer.
3. **Guideline load status** — green banner on successful load, red blocking
   alert if any guideline fails; report footer lists the guideline versions
   referenced.
4. **Report header inputs** — Project Name, Road Number / Project Code,
   Reviewing Officer Name & Designation, and Date of Review (auto-filled
   with today). Populated into every report.
5. **Unsupported codes greyed out** — codes without a backing MD reference
   are disabled in the picker with a tooltip.
6. **Deeper analysis** — findings split into **Design Compliance** and
   **Documentation Compliance**, each with a **Recommended Corrective
   Action** and a **Severity Justification** tied to the cited clause.
7. **Two-host audio overview ("podcast")** — generated via the same
   Gemini TTS pipeline as Ver66.
8. **IRC reference loading** — same eight markdown reference files
   (`IRC:37`, `IRC:52`, `IRC:73`, `IRC:SP:13`, `IRC:SP:19`, `IRC:SP:42`,
   `IRC:SP:48`, `MoRTH 5th Revision`) loaded from the repository on boot.
9. **Analyze prompt and citation rules** — preserved verbatim. The
   priority-codes block (IRC:SP:48, IRC:52, IRC:73, IRC:SP:13, IRC:SP:42)
   continues to bias the audit toward hill/mountain road projects, as in
   Ver66. Adjust in `Index.html` if your project type differs.

## What changed (branding only)

- **Name**: "DPR Analyzer Pro" → **"AURIS DPR Analyzer Pro"**
- **Version**: Ver63/Ver66 → **Ver67**
- **Colour palette**: teal `#0D9488` + dark navy `#1a1a2e` → AURIS navy
  `#0A1F44` + gold `#C9A961` on a warm-ivory `#F8F5EE` page background
- **Tagline**: *"Intelligent DPR Audit. IRC & MoRTH Certified Logic."*
- **Logo**: Clean text-mark "AURIS" in Playfair Display
  (drop in `assets/logo.png` and the `AurisMark` component for a real logo)
- **Subtitles**: "Border Roads Organisation" → "AURIS" / tagline
- **Access password**: `BRO@DPR2026` → **`AURIS@DPR2026`**
- **Guideline base URL** points at this repo's `main` branch
- **Placeholder examples** (project name, road number, designation) made
  agency-agnostic (NH-style instead of GREF/Arunank-style)

## Deployment notes

1. **Netlify functions** (`netlify/functions/`) carry over unchanged —
   `anthropic-proxy.js`, `gemini-tts.js`, `get-config.js`. Set the same
   environment variables on the Netlify site (`ANTHROPIC_API_KEY`,
   `GEMINI_API_KEY`).
2. **Guideline loading** uses
   `https://raw.githubusercontent.com/ashishbhardwajcwe-cell/AURIS_DPR_v67/main/guidelines/`.
   This only resolves once this branch is merged to `main`. Until then,
   either temporarily point `GITHUB_BASE_URL` (in `Index.html`) at the
   Ver66 repo, or merge first.
3. **Logo**: the AURIS text-mark renders without an image. To use a real
   logo, drop an SVG/PNG into `assets/` and replace `AurisMark` calls with
   an `<img>` of the same height.
