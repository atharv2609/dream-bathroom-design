import type { Placement, Product, Room, ValidationIssue } from "@/lib/design-types";

const size = (p: Placement, product: Product) => p.rotation === 0 ? { w: product.dimensions.width, d: product.dimensions.depth } : { w: product.dimensions.depth, d: product.dimensions.width };
export function defaultPlacements(products: Product[], room: Room): Placement[] {
  const fixtureProducts = products.filter((p) => p.category === "toilet" || p.category === "vanity" || p.category === "shower");
  return fixtureProducts.map((p, i) => ({ id: `place-${p.category}`, productId: p.id, kind: p.category as Placement["kind"], x: i === 0 ? 0.28 : i === 1 ? Math.max(0.2, room.length - p.dimensions.width - 0.28) : Math.max(0.2, room.length - p.dimensions.width - 0.22), y: i === 2 ? Math.max(0.2, room.width - p.dimensions.depth - 0.22) : 0.3, rotation: 0 }));
}
export function clampPlacement(p: Placement, product: Product, room: Room): Placement { const s = size(p, product); return { ...p, x: Math.max(0, Math.min(room.length - s.w, p.x)), y: Math.max(0, Math.min(room.width - s.d, p.y)) }; }
export function validateLayout(room: Room, placements: Placement[], products: Product[]): ValidationIssue[] {
  const byId = new Map(products.map((p) => [p.id, p])); const issues: ValidationIssue[] = [];
  for (const p of placements) { const product = byId.get(p.productId); if (!product) continue; const s = size(p, product); if (p.x < 0 || p.y < 0 || p.x + s.w > room.length || p.y + s.d > room.width) issues.push({ type: "boundary", fixtureIds: [p.id], message: `${product.name} crosses a room boundary.` }); if (p.y < room.doorWidth && p.x < room.doorWidth && p.x + s.w > 0) issues.push({ type: "door", fixtureIds: [p.id], message: `${product.name} enters the door swing.` }); }
  for (let i = 0; i < placements.length; i++) for (let j = i + 1; j < placements.length; j++) { const a = placements[i], b = placements[j]; if (!a || !b) continue; const ap = byId.get(a.productId), bp = byId.get(b.productId); if (!ap || !bp) continue; const as = size(a, ap), bs = size(b, bp); const overlap = a.x < b.x + bs.w && a.x + as.w > b.x && a.y < b.y + bs.d && a.y + as.d > b.y; if (overlap) issues.push({ type: "overlap", fixtureIds: [a.id, b.id], message: `${ap.name} overlaps ${bp.name}.` }); }
  return issues;
}
