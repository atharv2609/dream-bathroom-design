import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { catalog } from "@/data/catalog";
import { defaultRequirements } from "@/data/scenarios";
import { refineRequirements } from "@/engine/assistant";
import { clampPlacement, validateLayout } from "@/engine/spatial";
import { generateBundles, swapProduct } from "@/engine/recommendation";
import type { Bundle, DesignSnapshot, Placement, Product, Requirements } from "@/lib/design-types";

type AssistantMessage = { role: "user" | "assistant"; text: string };
interface DesignContextValue {
  requirements: Requirements; bundles: Bundle[]; selectedBundle: Bundle | undefined; selectedBundleId: string;
  saved: DesignSnapshot[]; messages: AssistantMessage[]; setRequirements: (r: Requirements) => void;
  loadRequirements: (r: Requirements) => void; selectBundle: (id: string) => void; moveFixture: (id: string, x: number, y: number) => void;
  swap: (product: Product) => void; refine: (text: string) => void; save: () => void; removeSaved: (id: string) => void; restore: (id: string) => void;
}
const DesignContext = createContext<DesignContextValue | null>(null);
const initialBundles = generateBundles(defaultRequirements);
export function DesignProvider({ children }: { children: ReactNode }) {
  const [requirements,setRequirementsState]=useState<Requirements>(defaultRequirements);
  const [bundles,setBundles]=useState<Bundle[]>(initialBundles);
  const [selectedBundleId,setSelectedBundleId]=useState(initialBundles[0]?.id ?? "");
  const [saved,setSaved]=useState<DesignSnapshot[]>([]);
  const [messages,setMessages]=useState<AssistantMessage[]>([{role:"assistant",text:"Tell me how you want the room to feel or what you want to change. I’ll preserve mandatory fixtures and recheck fit and budget."}]);
  useEffect(()=>{ try { const raw=window.localStorage.getItem("kohler-ai-designs"); if(raw) setSaved(JSON.parse(raw) as DesignSnapshot[]); } catch {} },[]);
  const persist=(items:DesignSnapshot[])=>{setSaved(items);try{window.localStorage.setItem("kohler-ai-designs",JSON.stringify(items));}catch{}};
  const recalc=(r:Requirements)=>{const next=generateBundles(r);setRequirementsState(r);setBundles(next);setSelectedBundleId(next[0]?.id??"");};
  const selectedBundle=useMemo(()=>bundles.find(b=>b.id===selectedBundleId)??bundles[0],[bundles,selectedBundleId]);
  const moveFixture=(id:string,x:number,y:number)=>{if(!selectedBundle)return;const products=selectedBundle.products;const placements=selectedBundle.placements.map(p=>{if(p.id!==id)return p;const product=products.find(item=>item.id===p.productId);return product?clampPlacement({...p,x,y},product,requirements.room):p;});const issues=validateLayout(requirements.room,placements,products);const updated={...selectedBundle,placements,issues,feasible:selectedBundle.total<=requirements.maxBudget&&issues.length===0};setBundles(bs=>bs.map(b=>b.id===updated.id?updated:b));};
  const swap=(p:Product)=>{if(!selectedBundle)return;const updated=swapProduct(selectedBundle,p,requirements);setBundles(bs=>bs.map(b=>b.id===updated.id?updated:b));};
  const refine=(text:string)=>{const result=refineRequirements(text,requirements);const next=generateBundles(result.requirements);setRequirementsState(result.requirements);setBundles(next);setSelectedBundleId(next[0]?.id??"");setMessages(m=>[...m,{role:"user",text},{role:"assistant",text:result.message}]);};
  const save=()=>{if(!selectedBundle)return;const snapshot:DesignSnapshot={id:`design-${Date.now()}`,name:`${requirements.preferences.style} bathroom`,savedAt:new Date().toISOString(),requirements,selectedBundleId,bundles};persist([snapshot,...saved].slice(0,8));};
  const removeSaved=(id:string)=>persist(saved.filter(s=>s.id!==id));
  const restore=(id:string)=>{const item=saved.find(s=>s.id===id);if(!item)return;setRequirementsState(item.requirements);setBundles(item.bundles);setSelectedBundleId(item.selectedBundleId);};
  return <DesignContext.Provider value={{requirements,bundles,selectedBundle,selectedBundleId,saved,messages,setRequirements:setRequirementsState,loadRequirements:recalc,selectBundle:setSelectedBundleId,moveFixture,swap,refine,save,removeSaved,restore}}>{children}</DesignContext.Provider>;
}
export function useDesign(){const value=useContext(DesignContext);if(!value)throw new Error("useDesign must be used inside DesignProvider");return value;}
export const productCatalog=catalog;
