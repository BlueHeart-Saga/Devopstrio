"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { employeeStories } from "./careersData";

export function EmployeeStories() {
  return (
    <section className="py-24 bg-[#030303] border-b border-zinc-900/60">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl text-left mb-16">
          <Reveal>
            <div className="flex items-center gap-2 mb-4">

              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">Testimonials</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Meet the people behind <span className="font-semibold text-rose-500">the innovation</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {employeeStories.map((story, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="group h-full bg-zinc-950/20 border border-zinc-900 rounded-3xl p-8 hover:border-zinc-850 transition-all duration-300 relative overflow-hidden flex flex-col justify-between text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.01),transparent_70%)] pointer-events-none" />

                <div>
                  {/* Quotation mark */}
                  <span className="text-4xl text-rose-500/20 font-serif leading-none block mb-6 select-none">“</span>

                  <p className="text-[11px] text-zinc-400 leading-relaxed font-light mb-8 italic">
                    {story.story}
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-zinc-900/80 pt-6">
                  <div className={`w-10 h-10 rounded-full ${story.photoBg} flex items-center justify-center text-xs font-bold text-white shadow-md`}>
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-zinc-200 block">{story.name}</span>
                    <span className="text-[9px] text-zinc-550 font-semibold block">{story.role}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
