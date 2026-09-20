# KOHLER AI — Dream Bathroom Studio

## Goal
Build a polished, connected prototype that moves from inspiration to requirements, feasible recommendations, an editable 2D plan, conversational refinements, and a printable/exportable proposal. Catalog items and scenarios will be clearly marked as synthetic demo data; measurements, prices, scores, and feasibility will carry appropriate limitations.

## Experience
- Create a cinematic editorial home page with generated luxury-bathroom imagery, style collections, demo scenarios, and direct entry into the studio.
- Add shared navigation and three connected destinations: Dream Studio (`/`), Design Studio (`/studio`), and Final Proposal (`/proposal`).
- Use a warm architectural system: ivory, mineral stone, muted sage, ink, brushed-brass accents, elegant serif display type, restrained motion, sharp editorial composition, and accessible focus/contrast states.
- Make desktop the richest workspace while preserving usable tablet and mobile flows through progressive panels.

## Core Product Flow
- Guided setup for dimensions/units, layout details, budget, mandatory fixtures, optional preferences, and style.
- Consent-gated room image upload with removal and a clear “not measured or analyzed” status; manual editing remains fully functional.
- Five one-click demo scenarios that immediately populate requirements and generate a design.
- Shared client state with local design persistence, history, restoration, and removal.

## Catalog and Recommendation Logic
- Add 40 synthetic, consistently structured KOHLER-style demo products across toilets, faucets, showers, vanities, mirrors, and accessories.
- Keep catalog data separate from engine logic so a future official feed can replace it.
- Implement deterministic hard filtering for dimensions, required categories, budget, installation/compatibility constraints, and placement feasibility.
- Implement configurable normalized scoring using spatial fit, budget fit, style match, compatibility, water efficiency, and feature match.
- Generate multiple genuinely feasible bundles where possible; otherwise show conflicts and actionable alternatives rather than fabricating results.
- Support search/filter, details, comparison-ready alternatives, and validated product swapping with live price, score, and layout updates.

## Spatial Planner
- Build an interactive top-down SVG room using catalog dimensions.
- Render walls, door/swing, window, fixtures, dimensions, and clearance zones.
- Support pointer and keyboard fixture movement, boundary clamping, overlap checks, door-swing collision checks, and explicit valid/warning indicators.
- Synchronize swaps and selected bundles with fixture geometry and feasibility results.
- Keep claims limited to planning guidance, not construction readiness or code compliance.

## Design Assistant
- Provide an integrated conversational panel with deterministic intent parsing for luxury, cost reduction, minimal styling, accessibility, storage, water conservation, and smart features.
- Preserve mandatory requirements unless the user explicitly changes them.
- Re-run recommendations, totals, and layout after each accepted refinement and explain what changed.
- Label responses as deterministic demo guidance when no live model is configured; isolate the interface behind a provider abstraction for future AI integration.

## Final Proposal and Export
- Build a proposal from current state: room/area, style, products, exact demo prices and dimensions, budget balance, layout snapshot, feasibility, water/smart insights, and design rationale.
- Add meaningful actions for editing layout, changing style, reducing cost, increasing premium level, saving, printing, and downloading a PDF-ready proposal.
- Use the browser print flow with dedicated print styling so users can save a faithful PDF containing the live selection and layout.

## Engineering and Validation
- Organize types, catalog/scenarios, recommendation engine, spatial engine, state, and UI as separate modules.
- Add route-specific titles, descriptions, Open Graph fields, and shared document fonts.
- Add Vitest coverage for input validation, budgets, compatibility, overlap/clearance, scoring, bundle generation, swaps, deterministic parsing, impossible constraints, and missing-provider fallback.
- Update README, architecture notes, AI prompt templates, and environment example.
- Validate with focused tests and browser checks at desktop and mobile sizes, including the complete scenario → swap → refine → save → proposal → print journey.

## Deliberate Scope Boundary
- The mandatory 2D planner will be complete. The optional 3D view will not be presented as functional in this prototype; the interface will only expose implemented controls.
- Uploaded images remain in the browser session and are not sent or retained. No live catalog, inventory, certification, construction-code, or official KOHLER product claims will be made.
