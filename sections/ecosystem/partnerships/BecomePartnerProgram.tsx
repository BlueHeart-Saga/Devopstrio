"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Code2, Users2, Building2, Rocket, GraduationCap } from "lucide-react";
import Link from "next/link";

interface ProgramItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  image: string;
}

export function BecomePartnerProgram() {
  const programs: ProgramItem[] = [
    {
      title: "Technology Partner",
      desc: "For software vendors and platforms looking to integrate their products directly into our reference architectures.",
      icon: <Code2 size={24} />,
      image: "/assets/common/45ea830d170d382ade235db479060da7-1.png"
    },
    {
      title: "Consulting Partner",
      desc: "For systems integrators, consultants, and IT firms aiming to co-deliver migration and modernization services.",
      icon: <Users2 size={24} />,
      image: "/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca-1.png"
    },
    {
      title: "Channel Partner",
      desc: "For agencies and value-added resellers focused on distributing Devopstrio proprietary platforms to wider markets.",
      icon: <Building2 size={24} />,
      image: "/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b-1.png"
    },
    {
      title: "Startup Partner",
      desc: "For early-stage tech innovators looking for architectural coaching and custom credits to leverage cloud systems.",
      icon: <Rocket size={24} />,
      image: "/assets/common/82090d7be4ef5694954ce77f9cc2e627-1.png"
    },
    {
      title: "University Partner",
      desc: "For academic research departments and student engineering groups driving technology research initiatives.",
      icon: <GraduationCap size={24} />,
      image: "/assets/common/90361fed0bb781d7c86e451995b4dbce-1.png"
    }
  ];

  return (
    <section id="partner-program" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            GROWTH CHANNELS
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Partner Program <span className="text-rose-500">Tracks</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            Choose the path that fits your company's focus and co-engineer value alongside Devopstrio global teams.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((prog, idx) => (
            <Reveal key={prog.title} delay={idx * 0.1}>
              <div className="relative rounded-[24px] border border-zinc-800/80 bg-[#0A0A0A] p-6 md:p-8 flex flex-col justify-between group h-full shadow-lg overflow-hidden transition-all duration-500 hover:border-rose-500/40 min-h-[340px]">
                
                {/* Expanding Image Layer with Glassmorphism */}
                <div className="absolute inset-0 z-0 [clip-path:circle(0%_at_100%_100%)] group-hover:[clip-path:circle(150%_at_100%_100%)] transition-all duration-700 ease-in-out pointer-events-none">
                  <img src={prog.image} alt={prog.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out opacity-70" />
                  
                  {/* Frosted Glass Blur Overlay */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
                  
                  {/* Vignette Gradient for depth and text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-white/5 border border-white/5 rounded-[24px]" />
                </div>

                {/* Content Layer */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 text-rose-500 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-400 transition-all duration-500">
                      {prog.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
                      {prog.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed font-medium group-hover:text-zinc-200 transition-colors duration-500">
                      {prog.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-zinc-800/60 group-hover:border-white/20 transition-colors duration-500">
                    <Link
                      href="/contact#contact-form"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-rose-500 group-hover:text-white transition-colors"
                    >
                      Apply Track
                      <ArrowUpRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
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
