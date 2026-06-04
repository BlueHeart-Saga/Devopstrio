"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbulb, PenTool, Code2, Rocket, ServerCog, LineChart, Globe } from "lucide-react";

const deliveryProcess = [
  { step: "Consult", desc: "Audit infrastructure & pipeline bottlenecks.", icon: Lightbulb },
  { step: "Design", desc: "Draft landing zones & AI integrations.", icon: PenTool },
  { step: "Build", desc: "Execute core development & CI/CD flows.", icon: Code2 },
  { step: "Deploy", desc: "Automate rollouts & security scans.", icon: Rocket },
  { step: "Operate", desc: "Manage infrastructure & ensure uptime.", icon: ServerCog },
  { step: "Optimize", desc: "Assess utilization & FinOps spend.", icon: LineChart },
  { step: "Scale", desc: "Expand architecture seamlessly.", icon: Globe }
];

const nodeColors = [
  "text-lime-500 border-lime-500 shadow-lime-500/20",
  "text-emerald-500 border-emerald-500 shadow-emerald-500/20",
  "text-cyan-500 border-cyan-500 shadow-cyan-500/20",
  "text-blue-500 border-blue-500 shadow-blue-500/20",
  "text-indigo-500 border-indigo-500 shadow-indigo-500/20",
  "text-violet-500 border-violet-500 shadow-violet-500/20",
  "text-rose-500 border-rose-500 shadow-rose-500/20",
];

export function DeliveryWorkflow() {
  return (
    <>
      <div className="mb-24 relative p-8 md:p-12 rounded-3xl border border-zinc-900 bg-zinc-950/30 shadow-2xl">
        
        <Reveal>
          <div className="mb-16 text-center">
             <span className="text-xs font-bold tracking-[0.25em] uppercase text-rose-500 block mb-3">
               CLIENT SUCCESS LIFECYCLE
             </span>
             <h3 className="text-2xl md:text-4xl font-light text-white tracking-tight">
               Our Proven Delivery <span className="font-bold">Framework</span>
             </h3>
          </div>
        </Reveal>

        {/* Desktop Infographic Flow */}
        <div className="hidden lg:block w-full relative pt-20 pb-16 max-w-6xl mx-auto">
          
          {/* S-Curve SVG Background */}
          <div className="absolute inset-0 z-0 pointer-events-none w-full h-[280px] mt-4">
            <svg preserveAspectRatio="none" viewBox="0 0 1000 280" className="w-full h-full">
              <path 
                d="M 71 40 C 142 40, 142 240, 214 240 C 285 240, 285 40, 357 40 C 428 40, 428 240, 500 240 C 571 240, 571 40, 643 40 C 714 40, 714 240, 786 240 C 857 240, 857 40, 929 40" 
                fill="none" 
                stroke="#3f3f46" 
                strokeWidth="2.5" 
                strokeDasharray="6, 6"
                className="opacity-60"
              />
            </svg>
          </div>

          <div className="grid grid-cols-7 gap-0 relative z-10 w-full h-[280px]">
            {deliveryProcess.map((item, index) => {
               const isTop = index % 2 === 0;
               const colorClass = nodeColors[index];
               const textColor = colorClass.split(" ")[0];
               const borderColor = colorClass.split(" ")[1];
               const shadowColor = colorClass.split(" ")[2];

               return (
                 <div key={item.step} className={`flex flex-col items-center text-center w-full h-full ${isTop ? 'justify-start' : 'justify-end'}`}>
                    
                    <div className="relative">
                      {/* Top Text (Only for TOP nodes) */}
                      {isTop && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 flex flex-col items-center px-1 w-[140px]">
                          <span className={`text-[11px] font-black tracking-widest ${textColor}`}>STEP 0{index + 1}</span>
                          <h4 className="text-sm font-bold text-white mt-1 mb-1">{item.step}</h4>
                          <p className="text-[10px] text-zinc-400 leading-snug">{item.desc}</p>
                        </div>
                      )}

                      {/* Circular Broken Node */}
                      <Reveal delay={index * 0.1}>
                        <div className={`w-20 h-20 rounded-full bg-zinc-950 border-[5px] ${borderColor} shadow-lg ${shadowColor} flex items-center justify-center relative z-10 transition-transform hover:scale-110 duration-300 ${isTop ? 'border-b-transparent -rotate-45' : 'border-t-transparent rotate-45'}`}>
                          {/* Inner icon container (counter-rotate to stay upright) */}
                          <div className={`absolute inset-0 flex items-center justify-center ${isTop ? 'rotate-45' : '-rotate-45'}`}>
                             <item.icon size={26} strokeWidth={2.5} className={`${textColor} drop-shadow-md`} />
                          </div>
                        </div>
                      </Reveal>

                      {/* Bottom Text (Only for BOTTOM nodes) */}
                      {!isTop && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 flex flex-col items-center px-1 w-[140px]">
                          <span className={`text-[11px] font-black tracking-widest ${textColor}`}>STEP 0{index + 1}</span>
                          <h4 className="text-sm font-bold text-white mt-1 mb-1">{item.step}</h4>
                          <p className="text-[10px] text-zinc-400 leading-snug">{item.desc}</p>
                        </div>
                      )}
                    </div>

                 </div>
               )
            })}
          </div>
        </div>

        {/* Mobile/Tablet Vertical Flow */}
        <div className="lg:hidden flex flex-col gap-0 pt-8 pb-4 relative">
          <div className="absolute left-[39px] top-12 bottom-12 w-[2px] border-l-2 border-dashed border-zinc-700 opacity-60 z-0" />
          
          {deliveryProcess.map((item, index) => {
            const colorClass = nodeColors[index];
            const textColor = colorClass.split(" ")[0];
            const borderColor = colorClass.split(" ")[1];
            const shadowColor = colorClass.split(" ")[2];

            return (
              <Reveal key={item.step} className="w-full relative z-10 mb-10 last:mb-0">
                <div className="flex items-center gap-6">
                  {/* Node */}
                  <div className={`w-20 h-20 flex-shrink-0 rounded-full bg-zinc-950 border-[5px] ${borderColor} border-l-transparent rotate-45 shadow-lg ${shadowColor} flex items-center justify-center relative z-10`}>
                    <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                        <item.icon size={26} strokeWidth={2.5} className={`${textColor} drop-shadow-md`} />
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div className="flex-1 bg-zinc-900/40 p-5 rounded-2xl border border-zinc-800/60 shadow-lg">
                    <span className={`text-[10px] font-black tracking-widest uppercase ${textColor} block mb-1`}>
                      Step 0{index + 1}
                    </span>
                    <h4 className="text-lg font-bold text-zinc-100 tracking-wide mb-2">{item.step}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </>
  );
}
