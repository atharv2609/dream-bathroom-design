# Architecture

The prototype separates synthetic catalog data (`src/data`) from deterministic planning (`src/engine`) and presentation (`src/components`, `src/routes`). `DesignProvider` owns the active requirements, generated bundles, selected bundle, placements, assistant transcript, and browser-local saved designs.

## Recommendation pipeline
Input validation → category/dimension filtering → compatibility and spatial validation → budget check → normalized weighted scoring → explanation. Hard constraints are never overridden by assistant text.

## AI boundary
`src/engine/assistant.ts` is the provider-independent contract. This demo uses an explicitly labelled deterministic parser, so it remains useful without credentials. A live provider can implement the same return shape later without moving budget or spatial decisions into the model.

## Data replacement
`catalog` exports normalized `Product[]`; replacing it with an official feed only requires mapping feed records to that interface. No UI or engine rewrite is required.
