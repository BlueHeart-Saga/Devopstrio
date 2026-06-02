"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function ContactForm() {
  return (
    <section className="w-full py-20 bg-[#050505] text-white border-b border-zinc-900 relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20">
        
        <Reveal className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Block */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
                02 / INQUIRY DETAILS
              </span>
            </div>
            <h2 className="text-3xl font-light tracking-tight leading-tight mb-6">
              Tell us about your <span className="text-white font-medium bg-gradient-to-r from-red-600 via-rose-600 to-rose-500 bg-clip-text text-transparent">technical goals</span>.
            </h2>
            <p className="text-zinc-450 text-sm leading-relaxed font-light max-w-sm mb-6">
              Whether you are decoupling microservices, deploying LLM agents, or looking for an embedded SRE cohort, fill out the details and a senior partner will respond within 24 hours.
            </p>
          </div>

          {/* Right Block: High-fidelity form */}
          <form className="flex flex-col gap-5 w-full border border-zinc-900 bg-zinc-950/20 p-8 rounded-2xl shadow-2xl relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.01),transparent_50%)] pointer-events-none" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 z-10">
              <input 
                aria-label="Name" 
                placeholder="Full Name" 
                className="w-full bg-zinc-900/60 border border-zinc-850 px-4 py-3 rounded-lg text-xs text-white placeholder-zinc-550 focus:outline-none focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500/30 transition-all font-light" 
              />
              <input 
                aria-label="Work email" 
                placeholder="Work Email" 
                className="w-full bg-zinc-900/60 border border-zinc-850 px-4 py-3 rounded-lg text-xs text-white placeholder-zinc-550 focus:outline-none focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500/30 transition-all font-light" 
              />
            </div>
            
            <div className="z-10">
              <input 
                aria-label="Organization" 
                placeholder="Company / Organization" 
                className="w-full bg-zinc-900/60 border border-zinc-850 px-4 py-3 rounded-lg text-xs text-white placeholder-zinc-550 focus:outline-none focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500/30 transition-all font-light" 
              />
            </div>

            <div className="z-10">
              <select 
                aria-label="Area of interest" 
                defaultValue="" 
                className="w-full bg-zinc-900/60 border border-zinc-850 px-4 py-3 rounded-lg text-xs text-zinc-300 focus:outline-none focus:border-rose-500/80 transition-all font-light"
              >
                <option value="" disabled>Area of interest</option>
                <option>AI Engineering & MLOps</option>
                <option>Cloud Infrastructure Architecture</option>
                <option>DevOps & Site Reliability Engineering</option>
                <option>Zero-Trust Cybersecurity Integration</option>
                <option>Enterprise Systems Modernization</option>
              </select>
            </div>

            <div className="z-10">
              <textarea 
                aria-label="Project details" 
                placeholder="Briefly describe the systems or platform challenge..." 
                rows={4} 
                className="w-full bg-zinc-900/60 border border-zinc-850 px-4 py-3 rounded-lg text-xs text-white placeholder-zinc-550 focus:outline-none focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500/30 transition-all font-light" 
              />
            </div>

            <button 
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-fit z-10" 
              type="button"
            >
              Submit Inquiry <ArrowUpRight size={14} />
            </button>
          </form>

        </Reveal>

      </div>
    </section>
  );
}
