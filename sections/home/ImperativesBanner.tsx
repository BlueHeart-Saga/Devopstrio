"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, ArrowRight, FileText } from "lucide-react";

export function ImperativesBanner() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you! ${email} has been registered for the 2026 Imperatives report.`);
      setEmail("");
    }
  };

  return (
    <section className="w-full py-12 bg-[#030303] text-white relative ">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal>
          <div className="relative w-full rounded-2xl border border-zinc-800 bg-zinc-950/40 p-8 lg:p-12 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Background Red Mesh waves / glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.04),transparent_50%)] pointer-events-none" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_70%)] blur-3xl pointer-events-none" />

            {/* Left Content Side */}
            <div className="flex-1 z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-zinc-900">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 leading-tight">
                    The <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">AI Impact</span> Imperatives, 2026
                  </h2>
                  <p className="text-zinc-400 text-sm md:text-base font-bold max-w-xl">
                    Explore how organizations are turning AI potential into measurable business impact.
                  </p>
                </div>
              </div>

              {/* Newsletter Sub-Form */}
              <div>
                <span className="block text-xs font-medium text-zinc-400 mb-3">
                  Stay ahead with our latest Updates
                </span>
                <form onSubmit={handleSubmit} className="flex max-w-md items-center relative">
                  <div className="absolute left-3.5 text-zinc-500">
                    <Mail size={16} />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-zinc-900/60 border border-zinc-800 rounded-lg pl-10 pr-12 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-rose-600 transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 p-2 rounded bg-rose-600 hover:bg-rose-500 text-white transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight size={14} />
                  </button>
                </form>
              </div>
            </div>

            {/* Right Report Cover Visual Side */}
            <div className="w-[180px] sm:w-[200px] flex-shrink-0 z-10 relative">
              {/* Elegant CSS Report cover */}
              <div className="w-full aspect-[3/4] rounded-lg border border-zinc-800 bg-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col justify-between p-5 group hover:border-zinc-700 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.2),transparent_70%)] pointer-events-none" />
                {/* Visual red waves decoration */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,rgba(220,38,38,0.1),transparent)] [mask-image:linear-gradient(rgba(0,0,0,1),transparent)]" />

                <div className="flex justify-between items-start">
                  <span className="text-[8px] font-mono text-zinc-500 tracking-widest uppercase">RESEARCH REPORT</span>
                  <FileText size={16} className="text-rose-500" />
                </div>

                <div className="my-auto">
                  <h3 className="text-sm font-semibold tracking-wider text-white leading-snug">
                    AI IMPACT<br />
                    IMPERATIVES
                  </h3>
                  <div className="h-[2px] w-8 bg-rose-600 mt-2" />
                </div>

                <div className="flex justify-between items-center text-[8px] font-mono text-zinc-500 mt-4">
                  <span>Devopstrio</span>
                  <span className="text-white">2026 EDITION</span>
                </div>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
