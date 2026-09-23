# Dream Bathroom Studio

### Imagine Your Dream Bathroom. Now Bring It to Life.

An AI-powered bathroom design and planning platform that transforms
customer preferences, spatial constraints, and budgets into personalized
bathroom designs with intelligent product recommendations.

KOHLER AI — Dream Bathroom Studio combines AI-assisted design reasoning,
constraint-aware product selection, budget optimization, and interactive
bathroom visualization to create a more intuitive and personalized
bathroom planning experience.

---

## Project Overview

Traditional bathroom planning often requires customers to navigate
multiple product catalogs, compare specifications, understand spatial
constraints, and coordinate individual fixtures.

This can make it difficult to visualize how different products will
work together within a real bathroom.

 — Dream Bathroom Studio addresses this challenge by bringing
bathroom planning and product discovery into a single interactive
experience.

Users can define their bathroom dimensions, specify their budget,
choose an aesthetic, and select their requirements.

The system then evaluates available demo catalog products and generates
personalized bathroom bundles based on spatial feasibility, budget,
compatibility, and design preferences.

The goal is to make bathroom design more accessible, explainable,
and convenient while preserving practical design constraints.

 https://bath-design-whisperer.lovable.app/

---

## Project Objectives

- Simplify bathroom product discovery and selection.
- Generate personalized bathroom product bundles.
- Respect customer budgets and mandatory requirements.
- Validate spatial feasibility before recommending products.
- Provide interactive bathroom visualization.
- Explain why products are recommended.
- Support conversational design refinement.
- Encourage water-conscious and accessibility-aware design.
- Create a foundation that can integrate verified KOHLER catalog data.

---

## Key Features

### 1. Dream Studio & Design Inspiration

An immersive bathroom design experience featuring a premium,
editorial-style interface.

Users can explore bathroom aesthetics and begin designing a space
based on their preferred visual style.

### 2. Guided Bathroom Requirements

Users can specify:

- Bathroom length, width, and height
- Measurement units
- Budget range
- Preferred design style
- Required product categories
- Smart features
- Water-efficiency preferences
- Accessibility requirements
- Storage and space optimization preferences

The application uses these inputs to establish structured
design constraints.

### 3. Intelligent Product Recommendation

The recommendation engine evaluates products against customer
requirements before ranking feasible candidates.

The process includes:

- Hard constraint filtering
- Product compatibility validation
- Spatial feasibility checks
- Budget optimization
- Style matching
- Preference-based scoring

The objective is to recommend coherent product combinations rather
than simply displaying popular or expensive products.

### 4. Bathroom Product Catalog

The prototype includes a structured synthetic bathroom product catalog.

Product categories include:

- Smart toilets
- Standard toilets
- Faucets
- Shower systems
- Thermostatic showers
- Vanities
- Mirrors
- Accessories

Catalog records include attributes such as price, dimensions,
style, finish, features, and compatibility information.

Synthetic demo products are not represented as verified,
commercially available KOHLER products.

### 5. Interactive 2D Bathroom Planner

The spatial planner provides a top-down bathroom visualization.

It is designed to support:

- Bathroom boundary visualization
- Fixture placement
- Product dimensions
- Clearance visualization
- Overlap detection
- Spatial feasibility validation
- Layout updates following product swaps

Spatial validation is based on the dimensions and rules available
in the demo catalog.

The planner is intended for conceptual design, not as a substitute
for professional construction drawings.

### 6. Conversational Design Assistant

The design assistant supports natural-language refinement
of bathroom requirements.

Example requests:

- "Make this bathroom more luxurious."
- "Reduce the total cost."
- "Replace the vanity with a minimalist option."
- "Prioritize water efficiency."

The assistant translates supported requests into design changes.

The recommendation engine then recalculates the bundle while
preserving mandatory constraints unless the user changes them.

### 7. Product Swapping & Budget Recalculation

Users can explore alternative products within a bundle.

Product changes trigger recalculation of:

- Bundle price
- Remaining budget
- Compatibility
- Spatial feasibility
- Recommendation score

The design should remain synchronized with the selected products.

### 8. Saved Designs & Export

Users can save and revisit designs where supported by the
configured data layer.

The final design proposal is intended to include:

- Bathroom dimensions
- Selected products
- Product prices
- Budget summary
- Layout
- Recommendation rationale

Printable design summaries allow users to review and share
their proposed bathroom configuration.

---

## How It Works

The application follows a hybrid AI and deterministic
recommendation architecture.

```text
Customer Requirements
        |
        v
AI Requirement Parser
        |
        v
Structured Design Constraints
        |
        v
Product Catalog Filtering
        |
        v
Compatibility Validation
        |
        v
Spatial Feasibility Validation
        |
        v
Budget Optimization
        |
        v
Preference-Based Recommendation Ranking
        |
        v
AI-Generated Design Explanation
        |
        v
Interactive Bathroom Visualization
        |
        v
Design Refinement & Export
```

### Why a Hybrid Architecture?

An LLM is useful for interpreting natural-language preferences
and explaining design decisions.

However, product dimensions, budget limits, and compatibility
rules require deterministic validation.

The system therefore separates AI-generated reasoning from
constraint validation.

The AI may interpret user intent and explain recommendations,
but it must not override hard constraints.

This improves transparency and reduces the risk of presenting
infeasible product combinations as valid designs.

---

## Recommendation Engine

The recommendation engine combines hard constraints with
preference-based ranking.

### Hard Constraints

Products and bundles are evaluated against:

- Bathroom dimensions
- Product dimensions
- Required clearances
- Product compatibility
- Mandatory product categories
- Customer budget

Candidates that violate mandatory constraints should be
excluded from feasible recommendations.

### Preference-Based Scoring

Feasible candidates are ranked using configurable criteria.

| Criterion | Initial Weight |
|---|---:|
| Spatial Fit | 25% |
| Budget Fit | 20% |
| Style Match | 20% |
| Compatibility | 15% |
| Water Efficiency | 10% |
| Feature Match | 10% |

These weights are configurable and represent internal
recommendation preferences rather than objective measures
of design quality.

The system can explain the factors that contributed
to a recommendation.

---

## Technology Stack

The project is built using a modular TypeScript-based
web application architecture.

| Layer | Technology |
|---|---|
| Frontend | React |
| Language | TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Backend | Node.js |
| API Layer | Project-specific server routes |
| Visualization | SVG / interactive 2D planner |
| AI Layer | Provider-independent abstraction |
| Data Layer | Local structured demo catalog |

The exact dependencies and scripts are defined in `package.json`.

Optional services and integrations depend on the configured
environment.

---

## Architecture & Code Organization

The codebase separates the user interface, application state,
recommendation logic, and data handling.

The main source directory is:

```text
src/
├── components/     # Reusable UI components
├── hooks/          # Application hooks
├── lib/            # Shared utilities and business logic
├── routes/         # Application routes
├── state/          # Shared application state
├── router.tsx      # Routing configuration
└── styles.css      # Global styling
```

Additional configuration and application files are located
in the project root.

The exact directory structure may evolve as the project develops.

---

## Getting Started

### Prerequisites

Install the following:

- Node.js (LTS recommended)
- Bun or the package manager supported by the project
- Git

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Navigate to the Project

```bash
cd kohler-ai-dream-bathroom-studio
```

### 3. Install Dependencies

If using Bun:

```bash
bun install
```

Alternatively, if using npm:

```bash
npm install
```

Use the package manager corresponding to the project's lockfile.

### 4. Configure Environment Variables

Create a `.env` file using `.env.example` as a reference.

Example:

```env
# Optional AI provider configuration
AI_API_KEY=
AI_MODEL=
```

Use only the variables required by the actual implementation.

Never commit API keys or other secrets to GitHub.

The application should retain its supported deterministic
fallback behavior when AI credentials are unavailable.

### 5. Start the Development Server

If the project defines the standard Vite development script:

```bash
bun run dev
```

Or:

```bash
npm run dev
```

Open the local address printed in the terminal.

Refer to `package.json` for the exact available scripts.

---

## Demo Scenarios

The application is designed to support predefined
bathroom planning scenarios.

| Scenario | Design Preference | Budget |
|---|---|---:|
| Japanese Zen | Space-conscious luxury | ₹5,00,000 |
| Minimalist Modern | Small bathroom | ₹2,00,000 |
| Classic Luxury | Large bathroom | ₹10,00,000 |
| Accessibility Focus | Accessible layout | Configurable |
| Smart Bathroom | Smart fixtures | Configurable |

These scenarios use synthetic demo catalog data.

Actual recommendations depend on the available products,
configured constraints, and validation rules.

---

## Ethical AI & Responsible Design

The project follows a responsible design approach.

### Transparency

AI-generated suggestions are distinguished from verified
product specifications and measurements.

### Privacy

Bathroom images and saved design information should be
handled with appropriate privacy safeguards.

Users should be able to remove uploaded images and saved
designs where supported.

### Explainability

Recommendations should include understandable reasons
for product selection.

### Constraint-Aware Recommendations

The AI must not bypass mandatory budget, compatibility,
or spatial constraints.

### Accessibility

Accessibility preferences are treated as legitimate
design requirements rather than optional aesthetic choices.

### Product Accuracy

Synthetic catalog records are clearly identified.

The prototype does not claim that synthetic products,
prices, certifications, or specifications are official
KOHLER catalog information.

---

## Testing & Validation

The project should include automated tests for
the recommendation and spatial validation logic.

Important test areas include:

- Budget validation
- Dimension validation
- Product compatibility
- Fixture overlap detection
- Clearance validation
- Bundle generation
- Recommendation scoring
- Product swapping
- AI requirement parsing
- Invalid user inputs

Testing status should be updated as the implementation
is verified.

---

## Current Limitations

This project is a prototype and should not be treated
as a production-ready bathroom construction system.

Known limitations may include:

- Synthetic demo product catalog
- No guaranteed access to official KOHLER inventory
- Limited real-world installation data
- Conceptual spatial validation
- Limited or unavailable manufacturer-specific 3D assets
- AI functionality dependent on configured providers
- No guarantee of building-code compliance

The project is intended to demonstrate a practical
AI-assisted bathroom design workflow.

---

## Future Enhancements

Potential future improvements include:

- Official KOHLER catalog integration
- Verified product pricing and availability
- More advanced spatial planning
- Image-assisted bathroom measurement
- Real-time 3D bathroom visualization
- Enhanced installation compatibility rules
- Persistent customer design accounts
- Improved recommendation evaluation
- Accessibility and sustainability validation
- Production deployment and monitoring

---

## Business Impact

The platform explores how AI-assisted bathroom planning
can improve the customer product discovery experience.

Potential benefits include:

- Reduced complexity in product selection
- Personalized product recommendations
- Improved visualization before purchase
- Better budget awareness
- More coherent product bundles
- Increased visibility of water-efficient options
- Reduced friction during bathroom planning

These are intended benefits and require real-world
evaluation before being treated as measured outcomes.

---

## Project Status

**Development Status: Prototype**

The project demonstrates a working foundation for an
AI-assisted bathroom design and recommendation workflow.

Features should be considered production-ready only
after appropriate testing, validation, and integration
with verified product data.

---

## Acknowledgements

This project explores AI-assisted product discovery,
bathroom planning, and personalized interior design.

KOHLER is referenced as the intended product ecosystem
for this concept.

This project is an independent prototype and is not
an official KOHLER product or endorsement.

---

## License

Add the appropriate license before distributing
the project publicly.

Until a license is added, no additional permissions
to reuse or redistribute the code should be assumed.

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
