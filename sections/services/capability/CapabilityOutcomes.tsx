"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Server, ShieldCheck, ArrowRight } from "lucide-react";

interface CapabilityOutcomesProps {
  solution: string;
  deliveryApproach: string[];
  challenge: string;
  benefits: string[];
}

export function CapabilityOutcomes({
  solution,
  deliveryApproach,
  challenge,
  benefits,
}: CapabilityOutcomesProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);

  // Parse phase descriptions split by " - "
  const parsedSteps = deliveryApproach.map((step) => {
    const parts = step.split(" - ");
    const title = parts[0] || step;
    const desc = parts[1] || "";
    return { title, desc };
  });

  return (
    <section id="solutions-outcomes" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
        <Reveal className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Outcomes Map
            </span>
          </div>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-6 text-white">
            Solving complex <span className="text-rose-500">infrastructure issues</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 1. Engineering Solution Card */}
          <Reveal className="h-full">
            <div className="h-full bg-zinc-950/45 border border-white/10 hover:border-rose-500/30 rounded-[32px] p-6 flex flex-col justify-between hover:bg-zinc-900/40 transition-all duration-300 relative group backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              
              {/* Padded Rounded Image Header */}
              <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-6 group/img border border-white/5 bg-zinc-900/10">
                <img
                  src="/assets/services/outcomes_delivery.png"
                  alt="Delivery Roadmap Illustration"
                  className="w-full h-full object-cover opacity-90 group-hover/img:scale-[1.02] transition-transform duration-700 pointer-events-none select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Title & Description */}
              <div className="flex flex-col flex-grow text-left">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                    OUR IMPLEMENTATION
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500">
                    <Server size={14} />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-rose-500 transition-colors">
                  The Engineering Solution
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed font-semibold mb-8">
                  {solution}
                </p>

                {/* Interactive Steps Slider */}
                <div className="border-t border-white/5 pt-6 mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                      DELIVERY ROADMAP
                    </h4>
                    <div className="flex gap-1">
                      {parsedSteps.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveStep(idx)}
                          className={`w-6 h-6 rounded-full text-[10px] font-mono font-bold flex items-center justify-center transition-all ${
                            activeStep === idx
                              ? "bg-rose-600 text-white border border-rose-500"
                              : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700"
                          }`}
                        >
                          {idx + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="min-h-[120px] bg-zinc-900/30 border border-white/5 rounded-2xl p-4 transition-all duration-300 relative overflow-hidden">
                    <span className="text-[9px] font-mono tracking-widest text-rose-500 uppercase block mb-1 font-semibold">
                      Phase 0{activeStep + 1}
                    </span>
                    <h5 className="text-xs font-bold text-white mb-1.5">
                      {parsedSteps[activeStep]?.title.replace(/^Phase \d+:\s*/i, "")}
                    </h5>
                    <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">
                      {parsedSteps[activeStep]?.desc}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>

          {/* 2. Expected Advantages Card */}
          <Reveal delay={0.05} className="h-full">
            <div className="h-full bg-zinc-950/45 border border-white/10 hover:border-rose-500/30 rounded-[32px] p-6 flex flex-col justify-between hover:bg-zinc-900/40 transition-all duration-300 relative group backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              
              {/* Padded Rounded Image Header */}
              <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-6 group/img border border-white/5 bg-zinc-900/10">
                <img
                  src="/assets/services/outcomes_operations.png"
                  alt="Expected Outcomes Illustration"
                  className="w-full h-full object-cover opacity-90 group-hover/img:scale-[1.02] transition-transform duration-700 pointer-events-none select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Title & Description */}
              <div className="flex flex-col flex-grow text-left">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-mono tracking-widest text-rose-450 uppercase font-semibold">
                    EXPECTED ADVANTAGES
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500">
                    <ShieldCheck size={14} />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-rose-500 transition-colors">
                  Strategic Capabilities
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed font-semibold mb-8">
                  {challenge}
                </p>

                {/* Interactive Benefits Slider */}
                <div className="border-t border-white/5 pt-6 mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[10px] font-bold text-rose-550 uppercase tracking-widest">
                      PROJECT OUTCOMES
                    </h4>
                    <div className="flex gap-1.5">
                      {benefits.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveBenefit(idx)}
                          className={`w-6 h-6 rounded-full text-[10px] font-mono font-bold flex items-center justify-center transition-all ${
                            activeBenefit === idx
                              ? "bg-rose-600 text-white border border-rose-500"
                              : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700"
                          }`}
                        >
                          {idx + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="min-h-[120px] bg-zinc-900/30 border border-white/5 rounded-2xl p-4 transition-all duration-300 relative overflow-hidden">
                    <span className="text-[9px] font-mono tracking-widest text-rose-500 uppercase block mb-2 font-semibold">
                      Outcome KPI 0{activeBenefit + 1}
                    </span>
                    <p className="text-xs text-zinc-200 leading-relaxed font-semibold">
                      {benefits[activeBenefit]}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
