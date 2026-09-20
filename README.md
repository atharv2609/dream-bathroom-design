# Dream Bathroom Design

PROJECT: KOHLER AI — The Dream Bathroom Studio

1. PROJECT VISION

Build a premium, AI-powered bathroom design platform for KOHLER that transforms the traditional bathroom shopping experience into an immersive, personalized interior-design journey.

The application should feel like a luxury home-design studio where users explore beautiful spaces, discover their dream aesthetic, and transform their own bathroom into a realistic, functional, and budget-conscious design.

This is not a generic e-commerce website, dashboard, or static AI chatbot.

It should combine the visual appeal of luxury interior-design inspiration platforms with the intelligence of a professional bathroom planner and the functionality of a product recommendation system.

The user should feel like they are working with a personal interior designer who understands their space, preferences, budget, and lifestyle.

Core objective

Convert a customer's bathroom dimensions, layout, preferences, and budget into a personalized KOHLER-style bathroom design with:

Intelligent product recommendations

Spatially validated product placement

Budget-optimized product bundles

AI-generated design explanations

Interactive 2D bathroom visualization

Optional 3D visualization

Conversational design refinement

Downloadable design proposals

The application must be genuinely interactive, technically credible, ethically responsible, and visually impressive enough for a professional product demonstration.

2. UNIQUE VISUAL IDENTITY — DREAM HOME DESIGN EXPERIENCE

This is the most important creative requirement.

Create a dreamy, immersive, editorial-style interior-design experience inspired by luxury architectural magazines, Pinterest-style inspiration boards, and premium home-design studios.

The website should immediately communicate:

"Imagine your dream bathroom. Now bring it to life."

Visual direction

Use a premium, warm, architectural aesthetic.

Suggested visual elements:

Full-screen luxury bathroom photography

Dreamy natural lighting

Sunlit interiors and soft shadows

Warm ivory, sand, taupe, stone, and muted sage

Elegant serif headings paired with clean sans-serif body text

Large editorial typography

Spacious layouts and generous whitespace

Subtle translucent panels over photography

Refined image transitions

Minimal, tasteful animations

Premium product photography

Architectural textures such as marble, travertine, natural wood, and brushed metal

Avoid making the interface look like a conventional SaaS dashboard.

Do not use excessive gradients, neon colors, generic glassmorphism, oversized rounded cards, or unnecessary animations.

Create a distinctive landing page

The landing page should feature:

A full-screen, cinematic bathroom interior image with elegant typography and a clear call to action.

Suggested headline:

"Your dream bathroom, thoughtfully designed."

Supporting text:

"Discover a space that reflects your style, fits your lifestyle, and works within your budget—with intelligent design powered by KOHLER."

Primary CTA:
[Design My Bathroom]

Secondary CTA:
[Explore Inspirations]

Include an elegant inspiration gallery featuring different bathroom aesthetics.

Each inspiration should be clickable and allow the user to begin a design using that aesthetic.

Use high-quality, appropriately licensed images or reliable image assets. If image assets cannot be loaded, provide graceful fallbacks rather than broken image placeholders.

Do not invent or misrepresent real KOHLER product imagery.

Make the experience feel like a design journey

Use a clear progression:

Dream → Discover → Design → Refine → Visualize → Finalize

The interface should remain intuitive for users who have never used interior-design software.

3. APPLICATION STRUCTURE

Build the following interconnected experiences:

A. Dream Studio — Landing & Inspiration

Immersive home-design landing page

Inspirational bathroom photography

Clickable bathroom styles

Featured design collections

Start designing CTA

Browse sample designs

B. Design Studio — Main Application

A premium, interactive design workspace containing:

Bathroom requirements

Design preferences

Product recommendations

Interactive 2D floor plan

Design refinement assistant

Budget summary

C. Design Results

A polished final design proposal containing:

Selected products

Product bundle and pricing

Bathroom layout

Design rationale

Compatibility status

Space utilization

Sustainability insights

Export functionality

All sections must be connected through working navigation and shared application state.

4. BATHROOM REQUIREMENTS & CUSTOMER INPUT

Create a guided design wizard with a clear progress indicator.

Allow users to enter:

Bathroom dimensions

Length

Width

Height

Unit selection: feet or meters

Bathroom layout

Support two modes:

Manual dimension and fixture entry

Bathroom image or layout upload

Allow users to specify:

Door location and width

Door swing

Window location

Existing toilet location

Vanity location

Shower area

Plumbing points

Fixed obstacles

If image analysis is implemented, use it to suggest possible room boundaries and objects.

Never treat image-derived dimensions as verified measurements.

Show detected objects and allow manual correction. Clearly identify uncertain measurements.

If image analysis is unavailable, provide a functional manual layout editor.

Customer preferences

Budget:

Minimum budget

Maximum budget

Design styles:

Minimalist Modern

Classic Luxury

Japanese Zen

Contemporary

Premium

Custom style

Requirements:

Smart toilet

Standard toilet

Faucet

Shower

Thermostatic shower

Vanity

Mirror

Accessories

Additional preferences:

Water conservation

Smart features

Luxury level

Ease of maintenance

Accessibility

Storage

Space optimization

Include a clear distinction between mandatory requirements and optional preferences.

The application must preserve mandatory requirements during recommendation generation and conversational refinement unless the user explicitly changes them.

5. KOHLER PRODUCT CATALOG

Create a structured, searchable catalog containing at least 30–50 synthetic KOHLER-style bathroom products.

Clearly label synthetic products as demo catalog data.

Do not invent claims about actual KOHLER products, certifications, performance, availability, or compatibility.

Use verified official catalog data only when provided.

Each product should contain:

Product ID

Name

Category

Price in INR

Dimensions

Width, depth, height

Style

Color and finish

Features

Water efficiency

Smart features

Installation requirements

Compatibility rules

Required clearances

Product image

Description

Include categories such as:

Smart toilets

Standard toilets

Faucets

Thermostatic showers

Shower systems

Vanities

Mirrors

Accessories

Create realistic, internally consistent pricing and compatibility data for demonstration purposes.

Build the catalog so that replacing synthetic products with an official product feed or API does not require rewriting the recommendation engine.

6. HYBRID AI RECOMMENDATION ENGINE

This is a core technical differentiator.

Do not simply send a prompt to an LLM asking it to recommend bathroom products.

Implement a hybrid architecture combining deterministic algorithms with AI-powered requirement understanding and explanation.

Recommendation pipeline

Customer Input
↓
AI Requirement Parser
↓
Structured Constraints
↓
Hard Constraint Filtering
↓
Product Compatibility Validation
↓
Spatial Feasibility Validation
↓
Budget Optimization
↓
Preference-Based Ranking
↓
AI Explanation Layer
↓
Final Design Bundles

Hard constraints

The engine must validate:

Product dimensions

Bathroom boundaries

Required clearances

Product compatibility

Required product categories

Budget limits

Installation feasibility, where data is available

Never allow an LLM to override these constraints.

Soft scoring

Implement a configurable recommendation scoring system using:

Spatial fit

Budget fit

Style match

Compatibility

Water efficiency

Feature match

Suggested initial weights:

Spatial Fit: 25%

Budget Fit: 20%

Style Match: 20%

Compatibility: 15%

Water Efficiency: 10%

Feature Match: 10%

Normalize scores and make weights configurable.

Clearly explain that recommendation scores are internal decision-support indicators, not objective guarantees of design quality.

Bundle generation

Generate multiple feasible bundles with meaningful differences.

For example:

Minimalist Smart

Classic Luxury

Japanese Zen

Each bundle must show:

Total price

Individual product prices

Remaining budget

Selected products

Product dimensions

Compatibility information

Spatial feasibility

Water-efficiency information

Smart features

Reasons for product selection

Never fabricate a feasible bundle when the constraints cannot be satisfied.

If no valid bundle exists, explain the conflict and offer practical alternatives.

7. INTERACTIVE SPATIAL DESIGN ENGINE

Build a functional 2D top-down bathroom planner using SVG or Canvas.

This is mandatory, even if 3D visualization is not implemented.

Display:

Bathroom walls

Door and swing

Windows

Toilet

Vanity and sink

Shower

Selected fixtures

Product dimensions

Clearance zones

Functional requirements

Position fixtures according to their dimensions.

Support drag-and-drop placement where practical.

Allow users to move or swap fixtures.

Prevent fixtures from extending outside the room.

Detect fixture overlaps.

Validate configured clearances.

Detect door-swing collisions.

Validate shower placement.

Visually distinguish valid and invalid placements.

Recalculate spatial feasibility after changes.

Use actual catalog dimensions rather than arbitrary decorative placements.

Keep the floor plan synchronized with the selected product bundle.

If a user swaps a vanity, the planner must update accordingly.

Do not claim that the design is construction-ready or code-compliant unless the relevant requirements have actually been validated.

8. OPTIONAL 3D BATHROOM VISUALIZATION

If feasible, implement a lightweight 3D bathroom preview using Three.js or React Three Fiber.

Include:

Bathroom walls and floor

Shower

Toilet

Vanity

Sink

Fixtures

Product colors and finishes

Procedural geometry is acceptable when real product models are unavailable.

Prioritize performance, visual coherence, and accurate relative dimensions over complex rendering.

The 2D planner must remain fully functional without 3D.

9. CONVERSATIONAL AI DESIGN ASSISTANT

Create a visually integrated AI design assistant that feels like a personal interior designer.

Example interactions:

User:
"Make this bathroom feel more luxurious."

System:

Adjusts luxury preference

Re-ranks compatible products

Preserves mandatory requirements

Recalculates the bundle

Updates the layout

Explains the changes

User:
"Reduce the cost by ₹50,000."

System:

Optimizes the bundle

Preserves required categories

Checks compatibility

Recalculates total cost

Explains what changed

User:
"Replace the vanity with something more minimalist."

System:

Finds compatible alternatives

Checks dimensions

Checks budget

Updates the selected product

Updates the floor plan

AI architecture

Use an LLM abstraction layer that supports changing providers.

The AI should handle:

Natural-language requirement extraction

Style interpretation

Conversational refinement

Recommendation explanations

Design rationale

The deterministic engine must handle:

Product filtering

Budget calculations

Spatial validation

Compatibility checks

Bundle generation

If no API key is configured, implement a deterministic fallback that still supports useful demo interactions.

Never pretend a mock AI response was generated by a live AI model.

10. PRODUCT SWAPPING & LIVE DESIGN UPDATES

Every recommended product should support a functional swap action.

When a user swaps a product:

Display compatible alternatives.

Show price differences.

Validate dimensions.

Validate compatibility.

Recalculate bundle price.

Recalculate remaining budget.

Recalculate recommendation score.

Update the 2D layout.

Explain the impact.

The user must be able to compare alternatives before confirming a swap.

Maintain a consistent application state across the design wizard, recommendation panel, floor plan, and final summary.

11. PREMIUM DESIGN STUDIO UI

The main design workspace should feel like a professional interior-design application.

Suggested structure:

HEADER

KOHLER AI

Dream Studio

My Design

Saved Designs

Profile

LEFT PANEL

Room dimensions

Bathroom requirements

Budget

Style

Preferences

CENTER

Large interactive bathroom visualization

2D / 3D toggle

Zoom and reset controls

Fixture placement

Layout validation

RIGHT PANEL

Recommended bundles

Selected products

Product prices

Compatibility status

Design rationale

BOTTOM OR COLLAPSIBLE PANEL

AI design assistant

Conversational refinement

Avoid overcrowding the workspace.

Use progressive disclosure so users see essential information first and advanced controls only when needed.

Make the application responsive for desktop and tablet, with a usable mobile experience.

12. INDUSTRY-READY FUNCTIONALITY

Build the prototype with realistic commercial product-design considerations.

Include:

Product discovery

Search and filtering

Category selection

Product comparison

Product details

Alternative recommendations

Customer experience

Saved designs

Design history

Editable requirements

Clear budget breakdown

Design restoration where practical

Professional feasibility

Product compatibility rules

Spatial validation

Installation requirement warnings

Clear distinction between estimates and verified pricing

Transparent catalog data provenance

Commercial readiness

Modular product catalog

API-ready architecture

Configurable recommendation engine

Environment-based configuration

Reusable components

Error handling

Logging

Performance-conscious rendering

Accessibility

Follow WCAG 2.2 AA as a design target.

Include:

Keyboard navigation

Accessible labels

Visible focus indicators

Sufficient color contrast

Screen-reader-friendly controls

Non-color indicators for errors

Reduced-motion support

Accessibility must be considered throughout the experience, not added only at the end.

13. ETHICAL AI & RESPONSIBLE DESIGN

The application must be transparent, privacy-conscious, and responsible.

Implement these principles:

Do not infer sensitive personal characteristics from bathroom images.

Do not use facial recognition or identify people in uploaded images.

Request consent before processing uploaded images.

Avoid retaining personal images unnecessarily.

Allow users to remove uploaded images and saved designs.

Clearly distinguish AI-generated suggestions from verified measurements.

Explain why products are recommended.

Do not fabricate reviews, certifications, product availability, or official KOHLER claims.

Avoid discriminatory assumptions about customers or household needs.

Treat accessibility as a legitimate design requirement.

Do not describe recommendation scores as objective truths.

Provide alternatives when the user's requirements cannot be met.

Do not claim building-code compliance without actual validation.

Make the application helpful without being manipulative or pressuring users into higher-priced products.

14. FINAL DESIGN SUMMARY & EXPORT

Create a premium final design proposal.

Include:

Bathroom summary

Dimensions

Area

Design style

Layout

Budget summary

Original budget

Selected bundle price

Remaining budget

Product summary

Product names

Categories

Prices

Dimensions

Compatibility status

Design analysis

Space utilization

Spatial feasibility

Water-efficiency insights

Smart features

AI-generated design rationale

Actions

Swap Product

Edit Layout

Try Another Style

Reduce Cost

Make More Premium

Save Design

Export Design

Implement a working printable design summary and PDF export.

The export must contain actual selected products, prices, room dimensions, and the current layout—not generic placeholder content.

15. DEMO SCENARIOS

Create at least five predefined demo scenarios:

Japanese Zen bathroom — 4m × 3m — ₹5 lakh budget

Small minimalist bathroom — ₹2 lakh budget

Large classic luxury bathroom — ₹10 lakh budget

Accessibility-focused bathroom

Smart bathroom with a smart toilet

Users should be able to load a scenario and immediately explore its requirements, recommendations, and floor plan.

All demo data must be clearly identified as synthetic where applicable.

16. TESTING & VALIDATION

Implement automated tests for:

Budget validation

Dimension validation

Product compatibility

Product overlap

Clearance validation

Bundle generation

Recommendation scoring

Product swapping

AI requirement parsing

Invalid inputs

Include tests for impossible design constraints and missing AI credentials.

Ensure invalid recommendations cannot silently appear as feasible designs.

The application should display useful error messages instead of crashing.

17. TECHNICAL STACK & ARCHITECTURE

Preferred stack:

Frontend:

React

TypeScript

Vite or Next.js

Tailwind CSS

Visualization:

SVG or Canvas for 2D

Three.js / React Three Fiber for optional 3D

Backend:

Node.js

Express or Next.js API routes

Data:

SQLite, PostgreSQL, Supabase, or a clean local data layer

AI:

Provider-independent LLM abstraction

Environment-based API keys

Deterministic fallback

Use:

Strong TypeScript typing

Modular architecture

Reusable components

Separation of UI, business logic, and data

Centralized validation

Consistent error handling

Maintainable state management

Do not introduce unnecessary infrastructure or dependencies.

If an existing project is provided, inspect its architecture, routes, components, dependencies, and current functionality before making changes.

Preserve useful existing code and extend the project rather than rebuilding it unnecessarily.

18. IMPLEMENTATION REQUIREMENTS

Do not stop at planning.

Do not return only a wireframe, design concept, pseudocode, or static mockup.

Build the complete runnable application.

Before implementation:

Inspect the existing project.

Identify the current architecture.

Identify what can be reused.

Establish the data model and application state.

Implement the recommendation and spatial validation logic.

Connect the UI to the actual business logic.

After implementation:

Run the application.

Run the build.

Test the core user journey.

Fix runtime errors.

Verify product swapping.

Verify budget recalculation.

Verify layout updates.

Verify export functionality.

Verify fallback behavior when AI credentials are missing.

Do not create fake buttons.

Every major visible button must perform a meaningful action.

If a feature is not implemented, do not present it as functional.

19. DELIVERABLES

Provide a complete runnable project containing:

Source code

README

Setup instructions

Environment variable example

Seed product catalog

Architecture documentation

AI prompt templates

Recommendation algorithm

Spatial validation engine

Automated tests

Demo scenarios

Export functionality

Include clear instructions for running the application locally.

20. FINAL QUALITY STANDARD

The finished application should combine the visual beauty of a luxury interior-design platform with the practical intelligence of a real bathroom planning system.

A judge or customer should be able to:

Open a beautiful, immersive design homepage.

Explore bathroom inspirations.

Start a personalized bathroom design.

Enter dimensions and preferences.

Generate multiple product bundles.

Understand why products were recommended.

See a spatially validated 2D bathroom layout.

Swap products and see live updates.

Refine the design through natural conversation.

Stay informed about budget and compatibility.

Save and export the final proposal.

The ultimate goal: Create an application that makes users fall in love with the design before helping them understand exactly how to bring it to life.

Prioritize a cohesive, premium user experience, genuine functionality, explainable AI, and trustworthy recommendations over unnecessary complexity.

Build the experience as a polished, connected product—not a collection of disconnected features.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fe2e5ac7-15fb-51a2-9aae-650b77a65c46).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
