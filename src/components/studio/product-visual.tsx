import { Bath, Droplets, Frame, PanelsTopLeft, Sparkles, Toilet } from "lucide-react";
import type { Product } from "@/lib/design-types";
const icons={toilet:Toilet,faucet:Droplets,shower:Bath,vanity:PanelsTopLeft,mirror:Frame,accessory:Sparkles};
export function ProductVisual({product,small=false}:{product:Product;small?:boolean}){const Icon=icons[product.category];return <div className={`product-visual tone-${product.imageTone} ${small?"small":""}`}><Icon aria-hidden/><span>{product.finish}</span></div>}
