"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, HelpCircle, Code2, Users2, Building2, Rocket, GraduationCap } from "lucide-react";
import Link from "next/link";

interface ProgramItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export function BecomePartnerProgram() {
  const programs: ProgramItem[] = [
    {
      title: "Technology Partner",
      desc: "For software vendors and platforms looking to integrate their products directly into our reference architectures.",
      icon: <Code2 size={20} className="text-rose-500" />
    },
    {
      title: "Consulting Partner",
      desc: "For systems integrators, consultants, and IT firms aiming to co-deliver migration and modernization services.",
      icon: <Users2 size={20} className="text-rose-500" />
    },
    {
      title: "Channel Partner",
      desc: "For agencies and value-added resellers focused on distributing Devopstrio proprietary platforms to wider markets.",
      icon: <Building2 size={20} className="text-rose-500" />
    },
    {
      title: "Startup Partner",
      desc: "For early-stage tech innovators looking for architectural coaching and custom credits to leverage cloud systems.",
      icon: <Rocket size={20} className="text-rose-500" />
    },
    {
      title: "University Partner",
      desc: "For academic research departments and student engineering groups driving technology research initiatives.",
      icon: <GraduationCap size={20} className="text-rose-500" />
    }
  ];

  return (
    <section id="partner-program" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {programs.map((prog) => (
            <div
              key={prog.title}
              className="group flex flex-col justify-between p-6 bg-zinc-950/40 border border-zinc-900 hover:border-rose-500/20 rounded-2xl transition-all duration-300 min-h-[260px]"
            >
              <div>
                <div className="text-rose-500 mb-6">
                  {prog.icon}
                </div>
                <h3 className="text-sm md:text-base font-bold text-white uppercase tracking-wider mb-3 leading-normal">{prog.title}</h3>
                <p className="text-xs md:text-sm text-zinc-400 font-medium leading-relaxed">
                  {prog.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900/60">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-rose-500 group-hover:text-rose-400 transition-colors"
                >
                  Apply Track
                  <ArrowUpRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
