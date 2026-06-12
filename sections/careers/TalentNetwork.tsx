"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function TalentNetwork() {
  return (
    <section id="talent-network" className="w-full py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(225,29,72,0.04),transparent_65%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <div className="flex items-center justify-center gap-2 mb-4">

            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Join Us
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
            Ready to build <span className="font-semibold text-rose-500">what's next?</span>
          </h2>

          <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto mb-10">
            Join a team passionate about innovation, engineering excellence, and creating meaningful impact for organizations worldwide. Submit your resume below to join our talent network database.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-zinc-950/30 border border-zinc-900 rounded-[32px] p-8 max-w-lg mx-auto text-left relative">
            <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block mb-6">Talent Network Portal</span>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! You have joined our Talent Network.");
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] font-mono tracking-wider text-zinc-450 uppercase mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John"
                    className="w-full bg-zinc-900/40 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-650 focus:border-rose-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-mono tracking-wider text-zinc-450 uppercase mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Doe"
                    className="w-full bg-zinc-900/40 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-650 focus:border-rose-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[9px] font-mono tracking-wider text-zinc-450 uppercase mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="john.doe@enterprise.com"
                  className="w-full bg-zinc-900/40 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-650 focus:border-rose-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[9px] font-mono tracking-wider text-zinc-450 uppercase mb-2">Preferred Domain</label>
                <select
                  className="w-full bg-zinc-900/40 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white focus:border-rose-500 focus:outline-none transition-colors"
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
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-700 transition-all duration-300"
              >
                Join Talent Network <ArrowUpRight size={13} />
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
