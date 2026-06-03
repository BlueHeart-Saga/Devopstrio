"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbulb, PenTool, Code2, Rocket, ServerCog, LineChart, Globe } from "lucide-react";

const deliveryProcess = [
  { step: "Consult", desc: "Audit existing infrastructure, telemetry pipelines & software stack bottlenecks.", icon: Lightbulb },
  { step: "Design", desc: "Draft landing zones, compliance criteria & AI integration opportunities.", icon: PenTool },
  { step: "Build", desc: "Execute core software development, CI/CD flows & LLM evaluations.", icon: Code2 },
  { step: "Deploy", desc: "Automate canary rollouts, post-deployment tests & security posture scans.", icon: Rocket },
  { step: "Operate", desc: "Manage infrastructure, monitor performance, and ensure continuous availability.", icon: ServerCog },
  { step: "Optimize", desc: "Assess resource utilization, FinOps spend & system response times.", icon: LineChart },
  { step: "Scale", desc: "Expand architecture seamlessly to support business growth and global reach.", icon: Globe }
];

export function DeliveryWorkflow() {
  return (
    <>
      {/* Client Success Lifecycle Diagram */}
      <div className="mb-24 relative p-8 md:p-12 rounded-3xl border border-zinc-900 bg-zinc-950/30 overflow-hidden">
        
        <Reveal>
          <div className="mb-16">
             <span className="text-xs font-bold tracking-[0.25em] uppercase text-rose-500 block mb-3">
               CLIENT SUCCESS LIFECYCLE
             </span>
             <h3 className="text-2xl md:text-4xl font-light text-white tracking-tight">
               Our Proven Delivery <span className="font-bold">Framework</span>
             </h3>
          </div>
        </Reveal>

        {/* Desktop Zigzag Pipeline */}
        <div className="hidden lg:block w-full relative pt-12 pb-24">
          <div className="relative z-10 w-full">
            <div className="absolute top-[68px] left-0 right-0 h-[100px] z-0 pointer-events-none">
               <svg preserveAspectRatio="none" viewBox="0 0 100 100" className="w-full h-full opacity-40">
                  <polyline 
                    points="7.14,0 21.4,100 35.7,0 50,100 64.3,0 78.6,100 92.8,0" 
                    fill="none" 
                    stroke="#f43f5e" 
                    strokeWidth="0.5" 
                    strokeDasharray="2, 2"
                  />
               </svg>
            </div>

            <div className="grid grid-cols-7 gap-4 relative z-10">
              {deliveryProcess.map((item, index) => {
                 const isTop = index % 2 === 0;
                 return (
                   <div key={item.step} className={`flex flex-col items-center text-center ${isTop ? '' : 'mt-[100px]'}`}>
                      <div className="text-2xl font-black text-rose-500/20 italic mb-3 select-none">
                        0{index + 1}
                      </div>

                      <Reveal delay={index * 0.1}>
                        <div className="relative group w-12 h-12 mb-8 mx-auto cursor-default">
                           <div className="absolute inset-0 bg-rose-500/20 blur-xl rounded-full group-hover:bg-rose-500/40 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                           <div className="absolute inset-0 rotate-45 rounded-xl border border-zinc-700 bg-gradient-to-br from-zinc-900 to-[#050505] shadow-2xl group-hover:border-rose-500 transition-all duration-500 flex items-center justify-center overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                           </div>
                           <div className="absolute inset-0 flex items-center justify-center z-10 text-rose-500 group-hover:text-white transition-colors duration-500">
                              <item.icon size={22} strokeWidth={2} className="group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(225,29,72,0.8)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
                           </div>
                        </div>
                      </Reveal>

                      <Reveal delay={index * 0.1 + 0.1} className="w-full">
                        <div className="bg-zinc-950/40 px-2 py-4 rounded-xl border border-zinc-800/40 hover:border-zinc-700 transition-colors h-full group cursor-default shadow-lg hover:shadow-2xl flex items-center justify-center">
                          <h4 className="text-xs xl:text-sm font-bold text-zinc-100 uppercase tracking-widest group-hover:text-rose-400 transition-colors">
                            {item.step}
                          </h4>
                        </div>
                      </Reveal>
                   </div>
                 )
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Flow */}
        <div className="lg:hidden flex flex-col gap-0 pb-10">
          {deliveryProcess.map((item, index) => (
            <React.Fragment key={item.step}>
              <Reveal className="w-full">
                <div className="p-6 rounded-2xl border border-zinc-800/60 bg-zinc-950/40 hover:border-rose-500/50 hover:bg-zinc-900/60 transition-all duration-300 relative overflow-hidden group shadow-lg">
                  <div className="absolute -top-4 -right-2 p-4 text-7xl font-black text-rose-500/5 italic select-none pointer-events-none group-hover:text-rose-500/10 transition-colors duration-500">
                    0{index + 1}
                  </div>
                  <div className="flex items-center gap-6 relative z-10">
                    <div className="relative w-10 h-10 flex-shrink-0">
                       <div className="absolute inset-0 rotate-45 rounded-lg border border-rose-500/50 bg-gradient-to-br from-zinc-900 to-[#050505] shadow-[0_0_15px_rgba(225,29,72,0.2)] group-hover:border-rose-500 transition-all duration-300" />
                       <div className="absolute inset-0 flex items-center justify-center z-10 text-rose-500 group-hover:text-white transition-colors duration-300">
                          <item.icon size={18} strokeWidth={2.5} className="drop-shadow-[0_0_5px_rgba(225,29,72,0.6)] group-hover:scale-110 transition-transform duration-300" />
                       </div>
                    </div>
                    <h4 className="text-xl font-bold text-zinc-100 tracking-wide group-hover:text-rose-400 transition-colors">{item.step}</h4>
                  </div>
                </div>
              </Reveal>
              {index < deliveryProcess.length - 1 && (
                <div className="flex justify-center h-8">
                   <div className="w-[1px] h-full border-l border-dashed border-rose-500/40" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
