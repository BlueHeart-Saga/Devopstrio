"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const keyLeaders = [
  { 
    name: "Manikandan", 
    role: "Cloud Data & AI Lead", 
    expertise: "Specialises in scalable AI model deployment and cloud data engineering across multi-cloud environments." 
  },
  { 
    name: "Kishore", 
    role: "Azure Hybrid Cloud & AI Security", 
    expertise: "Expert in zero-trust architecture, Azure security posture management, and hybrid identity." 
  },
  { 
    name: "Mareeswaran", 
    role: "SAP on Azure & Cloud-Native Product", 
    expertise: "Leads enterprise SAP migrations and cloud-native product architecture on Azure." 
  },
  { 
    name: "Subbiah Muthu", 
    role: "Business Applications & Deep Learning", 
    expertise: "Deep learning specialist driving AI-powered enterprise application modernisation." 
  },
  { 
    name: "Punitha", 
    role: "App Modernisation & Migration", 
    expertise: "Guides legacy-to-cloud migration programmes and application re-architecture strategies." 
  },
  { 
    name: "Sermaraja", 
    role: "Analytics & AI / UI Design", 
    expertise: "Bridges data science and human-centred design to create intelligent, usable enterprise platforms." 
  }
];

export function Leadership() {
  return (
    <section className="w-full py-20 bg-[#030303] text-white relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20">
        
        {/* Intro Header */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-rose-500">
                Our People
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white">
              The minds behind <span className="font-bold block">every breakthrough.</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-4 font-bold">
              Our leadership team brings decades of combined experience across cloud architecture, AI engineering, DevOps, and enterprise security — drawn from the world's leading technology organisations.
            </p>
          </div>
          
          <div className="bg-zinc-950/20 border border-zinc-900 p-6 rounded-xl flex flex-col gap-4">
            <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block">
              Team Footprint
            </span>
            <p className="text-zinc-450 text-xs md:text-sm leading-relaxed font-bold">
              At Devopstrio, leadership isn't a title — it's a practice. Our senior team works alongside clients, rolls up its sleeves when it matters, and builds the culture of precision and ownership that defines every project we touch.
            </p>
            <div className="grid grid-cols-3 gap-2 border-t border-zinc-800 pt-4 mt-2">
              <div>
                <p className="text-sm font-bold text-white">200+</p>
                <p className="text-[9px] text-zinc-500 font-semibold uppercase">Pros</p>
              </div>
              <div>
                <p className="text-sm font-bold text-white">50+</p>
                <p className="text-[9px] text-zinc-500 font-semibold uppercase">Architects</p>
              </div>
              <div>
                <p className="text-sm font-bold text-white">200+</p>
                <p className="text-[9px] text-zinc-500 font-semibold uppercase">Certs</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Culture Subheading Note */}
        <Reveal className="bg-zinc-950/20 border border-zinc-900 rounded-xl p-5 mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-4xl">
          <div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
              Culture Note
            </span>
            <p className="text-sm md:text-base font-semibold text-zinc-200 italic">
              "Built by engineers. Led by people who still write code."
            </p>
          </div>
          <p className="text-xs text-zinc-400 font-bold max-w-md sm:text-right">
            Our leadership team stays close to the work. That's what makes the difference.
          </p>
        </Reveal>

        {/* Leaders Grid (3x2 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyLeaders.map((leader) => {
            const initials = leader.name.charAt(0);
            return (
              <Reveal 
                key={leader.name}
                className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/20 hover:border-zinc-800 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-rose-950/30 text-rose-500 font-bold flex items-center justify-center border border-rose-900/60">
                      {initials}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white leading-tight">
                        {leader.name}
                      </h3>
                      <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">
                        {leader.name === "Manikandan" ? "Lead Developer" : "Partner"}
                      </span>
                    </div>
                  </div>
                  <span className="block text-[11px] text-rose-500 font-bold uppercase tracking-wider mb-3">
                    {leader.role}
                  </span>
                  <p className="text-xs text-zinc-450 leading-relaxed font-bold">
                    {leader.expertise}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
