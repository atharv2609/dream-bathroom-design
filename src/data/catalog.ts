import type { DesignStyle, Product, ProductCategory } from "@/lib/design-types";

const styles: DesignStyle[] = ["Minimalist Modern", "Classic Luxury", "Japanese Zen", "Contemporary", "Premium"];
const configs: Record<ProductCategory, { count: number; base: number; dims: [number, number, number]; names: string[] }> = {
  toilet: { count: 7, base: 28000, dims: [0.38, 0.68, 0.42], names: ["Aven Smart", "Elara Wall-Hung", "Serein Comfort", "Numa Compact", "Veda Rimless", "Forma Classic", "Lumen Smart"] },
  faucet: { count: 7, base: 9500, dims: [0.05, 0.18, 0.22], names: ["Arc Basin", "Still Monobloc", "Vale Tall", "Rill Sensor", "Muse Widespread", "Kanso Wall", "Line Touchless"] },
  shower: { count: 7, base: 22000, dims: [0.9, 0.9, 2.1], names: ["Rainveil System", "Therma Balance", "Quiet Rain", "Cascade Smart", "Aero Handshower", "Heritage Column", "Spa Array"] },
  vanity: { count: 7, base: 42000, dims: [0.8, 0.48, 0.82], names: ["Atelier 800", "Oakline 1000", "Contour 600", "Maison 1200", "Kanso Floating", "Terra Storage", "Frame Console"] },
  mirror: { count: 6, base: 12000, dims: [0.7, 0.04, 0.8], names: ["Halo Lit", "Arch Classic", "Mistfree 800", "Quiet Round", "Frame 1000", "Lumen Smart"] },
  accessory: { count: 6, base: 4500, dims: [0.3, 0.12, 0.1], names: ["Towel Rail", "Storage Ledge", "Grab Bar", "Robe Hook Set", "Paper Holder", "Shower Shelf"] },
};
const finishes = ["Brushed Brass", "Warm White", "Polished Nickel", "Natural Oak", "Matte Graphite", "Stone Grey"];
const tones: Product["imageTone"][] = ["brass", "stone", "sage", "walnut", "graphite"];

export const catalog: Product[] = (Object.entries(configs) as [ProductCategory, (typeof configs)[ProductCategory]][]).flatMap(([category, config]) =>
  Array.from({ length: config.count }, (_, i) => {
    const premium = i / Math.max(1, config.count - 1);
    const style = styles[i % styles.length] ?? "Contemporary";
    const secondStyle = styles[(i + 2) % styles.length] ?? "Premium";
    return {
      id: `${category.slice(0, 3)}-${String(i + 1).padStart(3, "0")}`,
      name: config.names[i] ?? `${category} ${i + 1}`,
      category,
      price: Math.round((config.base * (0.72 + premium * 1.35)) / 500) * 500,
      dimensions: { width: +(config.dims[0] * (0.86 + i * 0.035)).toFixed(2), depth: +(config.dims[1] * (0.9 + (i % 3) * 0.05)).toFixed(2), height: config.dims[2] },
      styles: [style, secondStyle], finish: finishes[i % finishes.length] ?? "Warm White",
      description: `A considered ${category} concept balancing proportion, material warmth and everyday function.`,
      features: [i % 2 ? "Easy-clean surfaces" : "Space-conscious profile", i % 3 ? "Quiet operation" : "Touch-free control", category === "vanity" ? "Integrated storage" : "Coordinated finish"],
      waterEfficiency: category === "toilet" || category === "faucet" || category === "shower" ? 3 + (i % 3) : 0,
      smart: (category === "toilet" || category === "faucet" || category === "shower" || category === "mirror") && i % 3 === 0,
      installation: category === "toilet" ? [i % 2 ? "floor-outlet" : "wall-outlet"] : category === "faucet" ? [i % 2 ? "single-hole" : "three-hole"] : ["standard-supply"],
      compatibleWith: ["standard-supply"], clearance: category === "toilet" ? 0.38 : category === "vanity" ? 0.55 : category === "shower" ? 0.6 : 0.15,
      imageTone: tones[i % tones.length] ?? "stone",
    } satisfies Product;
  }),
);
