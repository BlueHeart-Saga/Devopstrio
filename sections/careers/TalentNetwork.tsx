"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function TalentNetwork() {
  return (
    <section id="talent-network" className="w-full py-24 bg-black text-white relative overflow-hidden border-b border-zinc-900/60">
      {/* Background ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(225,29,72,0.04),transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              JOIN US
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            Ready to build <span className="text-rose-500">what's next?</span>
          </h2>

          <p className="text-white text-xs md:text-sm font-semibold leading-relaxed max-w-xl mx-auto mb-12">
            Join a team passionate about innovation, engineering excellence, and creating meaningful impact for organizations worldwide. Submit your resume below to join our talent network database.
          </p>
        </Reveal>

        {/* Premium Form CTA Card */}
        <Reveal delay={0.1}>
          <div className="group bg-zinc-950/40 border border-white/[0.08] rounded-[24px] p-8 max-w-lg mx-auto text-left relative shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-rose-500/20 transition-all duration-300">
            {/* Subtle red gradient top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-500 to-rose-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-[24px]" />
            
            <span className="text-[9px] font-mono tracking-widest text-white/50 uppercase block mb-6">
              TALENT NETWORK PORTAL
            </span>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! You have joined our Talent Network.");
              }}
              className="space-y-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold tracking-wider text-white uppercase mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John"
                    className="w-full bg-zinc-900/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:border-rose-500/40 focus:outline-none transition-all duration-300 font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-wider text-white uppercase mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Doe"
                    className="w-full bg-zinc-900/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:border-rose-500/40 focus:outline-none transition-all duration-300 font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-wider text-white uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john.doe@enterprise.com"
                  className="w-full bg-zinc-900/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:border-rose-500/40 focus:outline-none transition-all duration-300 font-semibold"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-wider text-white uppercase mb-2">
                  Preferred Domain
                </label>
                <select
                  className="w-full bg-zinc-900/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-rose-500/40 focus:outline-none transition-all duration-300 font-semibold cursor-pointer"
                >
                  <option value="cloud">Cloud Engineering</option>
                  <option value="ai">AI & Data</option>
                  <option value="devops">DevOps & SRE</option>
                  <option value="sec">Cybersecurity</option>
                  <option value="dev">Software Engineering</option>
                  <option value="consulting">Technology Consulting</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 transition-all duration-300 shadow-[0_4px_20px_rgba(225,29,72,0.25)] hover:scale-[1.01]"
              >
                <span>Join Talent Network</span>
                <ArrowUpRight size={14} />
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
