"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle, Award, Lock, BookOpen } from "lucide-react";

export function CertificationsAssurance() {
  const cards = [
    {
      icon: <Award className="w-6 h-6 text-rose-500" />,
      title: "Leadership With Vision",
      desc: "“Great leadership is about empowering teams, taking direct accountability, and turning bold ideas into reliable realities every single day.”"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-rose-500" />,
      title: "Purpose-Driven Work",
      desc: "“We don’t just write code or build systems—we craft solutions with passion, pride, and total dedication to our clients' long-term success.”"
    },
    {
      icon: <Lock className="w-6 h-6 text-rose-500" />,
      title: "Unwavering Integrity",
      desc: "“Trust is earned when actions match words. We lead with honesty, transparency, and unshakeable commitment in every partnership.”"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-rose-500" />,
      title: "Continuous Growth",
      desc: "“Learning never stops. We constantly challenge ourselves to adapt, innovate, and shape a brighter digital future together.”"
    }
  ];

  return (
    <section className="py-10 sm:py-14 bg-black text-white relative overflow-hidden z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header Quote (Centered) */}
        <div className="max-w-4xl mx-auto mb-14 text-center relative">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.35] text-white font-sans italic">
              &ldquo;Standards don't restrict innovation—they empower us to deliver engineering excellence with unshakeable{" "}
              <span className="relative inline-block not-italic">
                <span className="inline-block bg-rose-500 text-black font-extrabold px-3.5 py-0.5 mx-1.5 rounded-xs transform -rotate-3 shadow-[0_4px_20px_rgba(225,29,72,0.45)] align-middle">
                  Consistency
                </span>
                {/* Curved top-to-bottom side arrow image positioned directly AFTER Consistency */}
                <img src="/webp/assets/components/top-to-buttom-side-Arrowmid.webp"
                  alt="Side arrow pointing down"
                  className="absolute -bottom-14 sm:-bottom-20 md:-bottom-24 -right-8 sm:-right-12 md:-right-16 scale-x-[-1] w-10 sm:w-14 md:w-16 lg:w-18 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(244,63,94,0.5)] pointer-events-none select-none z-20"
                loading="lazy" />
              </span>
              &rdquo;
            </h2>
          </Reveal>
        </div>

        {/* Motivating Leadership & Work Quote Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-950/60 hover:bg-zinc-900/60 hover:border-rose-500/40 transition-all duration-300 h-full flex flex-col md:flex-row gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900/80 flex items-center justify-center shrink-0 border border-zinc-800 group-hover:border-rose-500/30 group-hover:bg-rose-500/10 transition-colors">
                  {card.icon}
                </div>
                <div>
                 
                  <p className="text-zinc-300 text-base leading-relaxed font-medium italic font-sans">
                    {card.desc}
                  </p>
                   {/* <h3 className="text-xl font-bold text-white mb-3 font-sans group-hover:text-rose-400 transition-colors">
                    {card.title}
                  </h3> */}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificationsAssurance;
