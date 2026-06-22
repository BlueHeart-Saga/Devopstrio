"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Landmark, Rocket, GraduationCap, Link2, Users } from "lucide-react";
import Link from "next/link";

interface Program {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export function CollaborationProgram() {
  const programs: Program[] = [
    {
      title: "Enterprise Innovation",
      desc: "Co-invest and design custom accelerators tailored to solve specific scaling and automation issues inside your business.",
      icon: <Landmark size={18} />
    },
    {
      title: "Startup Collaboration",
      desc: "For pre-seed software builders seeking engineering reviews, sandbox accounts, and integration pathways to our catalog.",
      icon: <Rocket size={18} />
    },
    {
      title: "University Partnerships",
      desc: "Sponsoring student research theses, internship programs, and academic investigation into post-quantum models.",
      icon: <GraduationCap size={18} />
    },
    {
      title: "Technology Alliances",
      desc: "Collaborative testing of upcoming features with AWS, Microsoft Azure, and GCP alpha/beta developer units.",
      icon: <Link2 size={18} />
    },
    {
      title: "Research Community",
      desc: "Open-source codebase contributions, monthly tech meetups, and hosting community labs prototyping sessions.",
      icon: <Users size={18} />
    }
  ];

  return (
    <section id="collaboration" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            PARTICIPATION OPTIONS
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Collaboration <span className="text-rose-500">Programs</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            Join Devopstrio Innovation Labs to develop next-gen toolsets, exchange technical assets, and build reliable cloud platforms.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {programs.map((prog) => (
            <div
              key={prog.title}
              className="group flex flex-col justify-between p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 min-h-[250px]"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 group-hover:bg-rose-950/20 transition-all duration-300 mb-6">
                  {prog.icon}
                </div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 leading-normal">{prog.title}</h3>
                <p className="text-[10px] text-zinc-450 font-semibold leading-relaxed">
                  {prog.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900/60">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase tracking-wider text-rose-500 group-hover:text-rose-400 transition-colors"
                >
                  Join Program
                  <ArrowUpRight size={10} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
