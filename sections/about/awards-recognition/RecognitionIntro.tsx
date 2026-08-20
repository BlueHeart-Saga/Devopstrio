"use client";
import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheck, Cpu, TrendingUp } from "lucide-react";
import Link from "next/link";

export function RecognitionIntro() {
  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-rose-500" />,
      title: "Client Impact",
      description: <>Recognition is strongest when it reflects measurable outcomes, trust, and long-term client <Link href="/contact#contact-form" className="text-[#E11D48] hover:underline">collaboration</Link>.</>
    },
    {
      icon: <Cpu className="w-6 h-6 text-rose-500" />,
      title: "Engineering Excellence",
      description: <>Our progress is shaped by disciplined delivery, continuous learning, and strong technical <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">execution models</Link>.</>
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-rose-500" />,
      title: "Sustained Growth",
      description: <>Milestones and recognition also represent the evolution of our people, platforms, <Link href="/ecosystem/partnerships" className="text-[#E11D48] hover:underline">partnerships</Link>, and global ambition.</>
    }
  ];

  return (
    <section className="py-10 sm:py-14 bg-black relative border-t border-zinc-900 overflow-hidden font-sans" id="story">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <Reveal>
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
              Recognition Is a Reflection of <span className="text-rose-600 font-semibold">Impact, Discipline, and Growth</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 hover:border-rose-500/50 hover:bg-zinc-900/60 transition-all duration-300 group cursor-pointer h-full flex flex-col justify-center">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-rose-950/30 group-hover:border-rose-900/50 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white font-sans group-hover:text-rose-400 transition-colors">
                  {value.title}
                </h3>
                
                {/* Description Text (Only visible on hover) */}
                <div className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-48 group-hover:mt-2 transition-all duration-300 ease-in-out">
                  <p className="text-zinc-300 text-base leading-relaxed font-normal font-sans">
                    {value.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
