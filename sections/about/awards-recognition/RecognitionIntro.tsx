"use client";
import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheck, Cpu, TrendingUp } from "lucide-react";

export function RecognitionIntro() {
  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-rose-500" />,
      title: "Client Impact",
      description: "Recognition is strongest when it reflects measurable outcomes, trust, and long-term collaboration."
    },
    {
      icon: <Cpu className="w-6 h-6 text-rose-500" />,
      title: "Engineering Excellence",
      description: "Our progress is shaped by disciplined delivery, continuous learning, and strong technical execution."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-rose-500" />,
      title: "Sustained Growth",
      description: "Milestones and recognition also represent the evolution of our people, platforms, partnerships, and global ambition."
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden" id="story">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Recognition Is a Reflection of Impact, Discipline, and Growth
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              At Devopstrio, recognition is not viewed as a standalone achievement. It is a reflection of the work we do for clients, the standards we uphold in delivery, and the commitment of our teams across engineering, operations, and innovation. Every milestone, award, and acknowledgement reinforces our belief in building technology partnerships that create lasting value.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="bg-[#0A0A0A] border border-zinc-900 rounded-3xl p-8 hover:border-zinc-800 transition-all duration-300 group h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-rose-950/30 group-hover:border-rose-900/50 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
