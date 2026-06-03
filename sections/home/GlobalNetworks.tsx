"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { MapPin, ChevronRight, ChevronLeft, ChevronDown } from "lucide-react";

const deliveryProcess = [
  { step: "Consult", desc: "Audit existing infrastructure, telemetry pipelines & software stack bottlenecks." },
  { step: "Design", desc: "Draft landing zones, compliance criteria & AI integration opportunities." },
  { step: "Build", desc: "Execute core software development, CI/CD flows & LLM evaluations." },
  { step: "Deploy", desc: "Automate canary rollouts, post-deployment tests & security posture scans." },
  { step: "Operate", desc: "Manage infrastructure, monitor performance, and ensure continuous availability." },
  { step: "Optimize", desc: "Assess resource utilization, FinOps spend & system response times." },
  { step: "Scale", desc: "Expand architecture seamlessly to support business growth and global reach." }
];

const offices = [
  { city: "London", region: "Head Office", details: "1 St Katharine's Way, 6th floor, London E1W 1YL, UK" },
  { city: "Tennessee", region: "Sub-Regional Office", details: "Executive Tech Park, Nashville, TN, USA" },
  { city: "Bengaluru", region: "Corporate Office", details: "13 Kasturba Rd., Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka, 560001, India" },
  { city: "Chennai", region: "Sub-Regional Office", details: "RMZ Millenia Business Park, Taramani, Chennai, Tamil Nadu, 600096, India" },
  { city: "Thoothukudi", region: "Sub-Regional Office", details: "IT Park, Thoothukudi, Tamil Nadu, 628008, India" }
];

export function GlobalNetworks() {
  return (
    <section className="w-full py-20 md:py-32 bg-[#050505] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-start mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">

              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
                GLOBAL DELIVERY HUBS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              A standard <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">operating model</span> across our global network.
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-zinc-400 text-sm md:text-base leading-relaxed font-bold">
            <p>
              We operate standard delivery processes globally, enabling seamless project handovers and continuous uptime checks. Our distributed hubs ensure engineering alignment across key global regions.
            </p>
          </div>
        </Reveal>

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
            
            {/* Relative wrapper for absolute SVG alignment */}
            <div className="relative z-10 w-full">
              
              {/* SVG Zigzag Connecting Line */}
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

              {/* 7-Step Staggered Grid */}
              <div className="grid grid-cols-7 gap-4 relative z-10">
                {deliveryProcess.map((item, index) => {
                   const isTop = index % 2 === 0;
                   
                   return (
                     <div key={item.step} className={`flex flex-col items-center text-center ${isTop ? '' : 'mt-[100px]'}`}>
                        
                        {/* Floating Accent Number */}
                        <div className="text-2xl font-black text-rose-500/20 italic mb-3 select-none">
                          0{index + 1}
                        </div>

                        {/* 3D Isometric Diamond Node */}
                        <Reveal delay={index * 0.1}>
                          <div className="relative group w-12 h-12 mb-8 mx-auto cursor-default">
                             {/* Glow Effect */}
                             <div className="absolute inset-0 bg-rose-500/20 blur-xl rounded-full group-hover:bg-rose-500/40 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                             
                             {/* Isometric Diamond Body */}
                             <div className="absolute inset-0 rotate-45 rounded-xl border border-zinc-700 bg-gradient-to-br from-zinc-900 to-[#050505] shadow-2xl group-hover:border-rose-500 transition-all duration-500 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                             </div>
                             
                             {/* Inner Glowing Dot */}
                             <div className="absolute inset-0 flex items-center justify-center z-10 text-rose-500 font-bold group-hover:scale-150 transition-transform duration-500">
                                <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(225,29,72,0.8)]" />
                             </div>
                          </div>
                        </Reveal>

                        {/* Content Card */}
                        <Reveal delay={index * 0.1 + 0.1} className="w-full">
                          <div className="bg-zinc-950/40 px-2 py-4 rounded-xl border border-zinc-800/40 hover:border-zinc-700 transition-colors h-full group cursor-default shadow-lg hover:shadow-2xl">
                            <h4 className="text-xs xl:text-sm font-bold text-zinc-100 uppercase tracking-widest mb-3 group-hover:text-rose-400 transition-colors">
                              {item.step}
                            </h4>
                            <p className="text-[10px] xl:text-[11px] text-zinc-400 font-medium leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </Reveal>

                     </div>
                   )
                })}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Flow (Diamond Stack) */}
          <div className="lg:hidden flex flex-col gap-0 pb-10">
            {deliveryProcess.map((item, index) => (
              <React.Fragment key={item.step}>
                <Reveal className="w-full">
                  <div className="p-6 rounded-2xl border border-zinc-800/60 bg-zinc-950/40 hover:border-rose-500/50 hover:bg-zinc-900/60 transition-all duration-300 relative overflow-hidden group shadow-lg">
                    {/* Background Watermark Number */}
                    <div className="absolute -top-4 -right-2 p-4 text-7xl font-black text-rose-500/5 italic select-none pointer-events-none group-hover:text-rose-500/10 transition-colors duration-500">
                      0{index + 1}
                    </div>
                    
                    <div className="flex items-center gap-6 mb-4 relative z-10">
                      {/* Diamond Icon */}
                      <div className="relative w-10 h-10 flex-shrink-0">
                         <div className="absolute inset-0 rotate-45 rounded-lg border border-rose-500/50 bg-gradient-to-br from-zinc-900 to-[#050505] shadow-[0_0_15px_rgba(225,29,72,0.2)] group-hover:border-rose-500 transition-all duration-300" />
                         <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(225,29,72,0.8)]" />
                         </div>
                      </div>
                      <h4 className="text-xl font-bold text-zinc-100 tracking-wide group-hover:text-rose-400 transition-colors">{item.step}</h4>
                    </div>
                    <p className="text-sm text-zinc-400 font-medium leading-relaxed relative z-10">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
                
                {/* Connecting Vertical Dashed Line */}
                {index < deliveryProcess.length - 1 && (
                  <div className="flex justify-center h-8">
                     <div className="w-[1px] h-full border-l border-dashed border-rose-500/40" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>

        {/* Global Offices Grid */}
        <div className="border-t border-zinc-900 pt-16">
          <span className="block text-xs font-mono tracking-wider text-zinc-500 uppercase mb-8">
            PHYSICAL HEADQUARTERS & DELIVERY HUBS
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div 
                key={office.city}
                className="flex gap-4 items-start p-5 rounded-lg border border-zinc-900/60 bg-zinc-950/10 hover:border-zinc-900 transition-colors"
              >
                <div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center text-rose-500 flex-shrink-0">
                  <MapPin size={14} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-200">{office.city}</h4>
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-wider mb-1">{office.region}</span>
                  <p className="text-xs text-zinc-450 font-bold leading-relaxed">{office.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
