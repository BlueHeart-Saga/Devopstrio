"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface LifecycleStage {
  step: string;
  title: string;
  desc: string;
}

export function DeliveryLifecycle() {
  const stages: LifecycleStage[] = [
    { step: "01", title: "Consult", desc: "Understanding the client strategy, outlining targets, and defining compliance metrics." },
    { step: "02", title: "Architect", desc: "Designing multi-region schemas, cloud networks, and API boundaries." },
    { step: "03", title: "Engineer", desc: "Coding service modules, frontends, and database structures." },
    { step: "04", title: "Secure", desc: "Executing static security audits, credentials scanning, and identity reviews." },
    { step: "05", title: "Deploy", desc: "Automating cluster rollouts via declarative GitOps pipelines." },
    { step: "06", title: "Operate", desc: "Ongoing telemetry gathering, log updates, and round-the-clock rotations." },
    { step: "07", title: "Optimize", desc: "Analyzing application performance, database sizes, and cloud budgets." }
  ];

  return (
    <section id="lifecycle" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[20%] left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[10%] right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Header */}
        <Reveal className="mb-24 text-center max-w-2xl mx-auto">
          {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            PROCESS MAP
          </span> */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
            Global Delivery <span className="text-rose-500">Lifecycle</span>
          </h2>
          {/* <p className="text-zinc-400 text-sm font-semibold">
            The sequential engineering phases coordinated across our network to deliver high-quality cloud platforms.
          </p> */}
        </Reveal>

        {/* Infographic Steps Grid */}
        <div className="relative max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-20 md:gap-y-24">
            {stages.map((stage, idx) => {
              const isEven = idx % 2 === 0;

              const style = {
                borderColor: "border-rose-500/80",
                textColor: "text-rose-500",
                numPos: isEven 
                  ? "-top-8 -right-4 md:-top-10 md:-right-6" 
                  : "-bottom-8 -left-4 md:-bottom-10 md:-left-6",
                borderRadius: isEven 
                  ? "rounded-[2.5rem] rounded-tr-2xl" 
                  : "rounded-[2.5rem] rounded-bl-2xl",
                textAlign: isEven 
                  ? "text-left" 
                  : "text-left md:text-right",
                alignItems: isEven 
                  ? "items-start" 
                  : "items-start md:items-end"
              };

              return (
                <Reveal key={stage.step} delay={idx * 0.05}>
                  <div className={`relative p-8 md:p-10 border-[2px] ${style.borderColor} ${style.borderRadius} bg-black group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]`}>
                    
                    {/* The Giant Cut-out Number */}
                    <div className={`absolute ${style.numPos} bg-[#030303] px-4 z-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                      <span 
                        className={`text-[3.5rem] md:text-[4rem] font-black leading-none ${style.textColor}`}
                        style={{
                          WebkitTextStroke: `2px currentColor`,
                          WebkitTextFillColor: "transparent",
                          textShadow: `0 0 18px currentColor`
                        }}
                      >
                        {stage.step}
                      </span>
                    </div>

                    {/* Content */}
                    <div className={`flex flex-col gap-4 relative z-0 ${style.alignItems} ${style.textAlign}`}>
                      
                      {/* Decorative Inner Graphic */}
                      <div className={`w-9 h-9 rounded-full border-2 ${style.borderColor} flex items-center justify-center mb-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                        <div className={`w-1.5 h-1.5 rounded-full bg-current ${style.textColor} animate-pulse`} />
                      </div>

                      <h3 className={`text-xl md:text-2xl font-semibold uppercase tracking-wider ${style.textColor}`}>
                        {stage.title}
                      </h3>
                      
                      {/* <p className="text-xs md:text-sm text-zinc-300 font-semibold leading-relaxed max-w-[90%]">
                        {stage.desc}
                      </p> */}
                    </div>

                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
