import type { Requirements } from "@/lib/design-types";

const base: Requirements = {
  room: { length: 4, width: 3, height: 2.7, unit: "m", doorWidth: 0.8, doorWall: "south", windowWall: "north" },
  minBudget: 150000, maxBudget: 500000,
  mandatory: ["toilet", "faucet", "shower", "vanity", "mirror"],
  preferences: { style: "Japanese Zen", waterConservation: true, smartFeatures: false, luxury: 3, maintenance: true, accessibility: false, storage: true, spaceOptimization: true },
};
export const demoScenarios = [
  { id: "zen", name: "Japanese Zen", note: "4 × 3m · ₹5 lakh", requirements: base },
  { id: "small", name: "Small Minimalist", note: "2.4 × 1.8m · ₹2 lakh", requirements: { ...base, room: { ...base.room, length: 2.4, width: 1.8 }, maxBudget: 200000, preferences: { ...base.preferences, style: "Minimalist Modern", luxury: 2 } } },
  { id: "classic", name: "Classic Luxury", note: "5 × 4m · ₹10 lakh", requirements: { ...base, room: { ...base.room, length: 5, width: 4 }, maxBudget: 1000000, preferences: { ...base.preferences, style: "Classic Luxury", luxury: 5, spaceOptimization: false } } },
  { id: "accessible", name: "Accessible Calm", note: "4.2 × 3.4m · ₹6.5 lakh", requirements: { ...base, room: { ...base.room, length: 4.2, width: 3.4, doorWidth: 0.95 }, maxBudget: 650000, preferences: { ...base.preferences, style: "Contemporary", accessibility: true } } },
  { id: "smart", name: "Smart Sanctuary", note: "4 × 3.2m · ₹7.5 lakh", requirements: { ...base, room: { ...base.room, width: 3.2 }, maxBudget: 750000, preferences: { ...base.preferences, style: "Premium", smartFeatures: true, luxury: 5 } } },
] as const;
export const defaultRequirements: Requirements = structuredClone(base);
