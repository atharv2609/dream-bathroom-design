import { ArrowUp, Bot, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDesign } from "@/state/design-context";
const prompts=["Reduce the cost by ₹50,000","Make it more luxurious","Prioritize water conservation"];
export function DesignAssistant(){const{messages,refine}=useDesign();const[input,setInput]=useState("");const send=(text=input)=>{if(!text.trim())return;refine(text.trim());setInput("")};return <section className="assistant-panel"><div className="assistant-heading"><span><Bot/><strong>Design Assistant</strong><small>Deterministic demo guidance</small></span><span className="assistant-status">Ready</span></div><div className="assistant-body" aria-live="polite">{messages.slice(-4).map((m,i)=><div key={i} className={`message ${m.role}`}>{m.role==="assistant"&&<Sparkles/>}<p>{m.text}</p></div>)}</div><div className="prompt-chips">{prompts.map(p=><button key={p} onClick={()=>send(p)}>{p}</button>)}</div><form className="assistant-input" onSubmit={e=>{e.preventDefault();send()}}><Input value={input} onChange={e=>setInput(e.target.value)} aria-label="Ask the design assistant" placeholder="Try: replace the vanity with something minimal…"/><Button type="submit" size="icon" aria-label="Send refinement"><ArrowUp/></Button></form></section>}
