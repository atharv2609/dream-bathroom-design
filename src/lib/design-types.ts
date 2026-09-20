export type ProductCategory = "toilet" | "faucet" | "shower" | "vanity" | "mirror" | "accessory";
export type DesignStyle = "Minimalist Modern" | "Classic Luxury" | "Japanese Zen" | "Contemporary" | "Premium";
export type FixtureKind = "toilet" | "vanity" | "shower";

export interface Dimensions { width: number; depth: number; height: number }
export interface Product {
  id: string; name: string; category: ProductCategory; price: number; dimensions: Dimensions;
  styles: DesignStyle[]; finish: string; description: string; features: string[];
  waterEfficiency: number; smart: boolean; installation: string[]; compatibleWith: string[];
  clearance: number; imageTone: "stone" | "sage" | "walnut" | "brass" | "graphite";
}
export interface Room { length: number; width: number; height: number; unit: "m"; doorWidth: number; doorWall: "south" | "west"; windowWall: "north" | "east" }
export interface Preferences { style: DesignStyle; waterConservation: boolean; smartFeatures: boolean; luxury: number; maintenance: boolean; accessibility: boolean; storage: boolean; spaceOptimization: boolean }
export interface Requirements { room: Room; minBudget: number; maxBudget: number; mandatory: ProductCategory[]; preferences: Preferences }
export interface Placement { id: string; productId: string; kind: FixtureKind; x: number; y: number; rotation: 0 | 90 }
export interface ValidationIssue { type: "boundary" | "overlap" | "clearance" | "door"; fixtureIds: string[]; message: string }
export interface Bundle { id: string; name: string; products: Product[]; total: number; remaining: number; score: number; feasible: boolean; explanation: string[]; placements: Placement[]; issues: ValidationIssue[] }
export interface DesignSnapshot { id: string; name: string; savedAt: string; requirements: Requirements; selectedBundleId: string; bundles: Bundle[] }
