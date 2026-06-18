"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, ShieldCheck, Cpu, Users, Building2, Megaphone, FileSignature } from "lucide-react";

interface ProductCard {
  name: string;
  tagline: string;
  desc: string;
  icon: React.ReactNode;
}

export function FeaturedProducts() {
  const products: ProductCard[] = [
    {
      name: "Humanex",
      tagline: "Recruitment & Workforce Management Platform",
      desc: "Enterprise platform streamlining candidate sourcing, assessment scoring, onboarding workflows, and workforce telemetry analytics.",
      icon: <Users size={20} className="text-rose-500" />
    },
    {
      name: "Brio",
      tagline: "AI-Powered Marketing & Content Platform",
      desc: "Unified analytics solution providing predictive attribution models, intelligent asset scheduling, and automated copy generators.",
      icon: <Cpu size={20} className="text-rose-500" />
    },
    {
      name: "SafeSign",
      tagline: "Electronic Signature & Digital Trust Platform",
      desc: "Cryptographically secured document e-signature software providing tamper-proof audit trails and compliance reports.",
      icon: <FileSignature size={20} className="text-rose-500" />
    },
    {
      name: "CareSuite",
      tagline: "Healthcare Operations Management Platform",
      desc: "HIPAA-compliant medical workflow suite coordinating patient consultation queues, video consult rooms, and secure charts.",
      icon: <ShieldCheck size={20} className="text-rose-500" />
    },
    {
      name: "Homela",
      tagline: "Property & Accommodation Management Platform",
      desc: "PropTech workspace connecting tenants, managers, and service groups, automating ticket tracking and payment updates.",
      icon: <Building2 size={20} className="text-rose-500" />
    },
    {
      name: "Campix",
      tagline: "Campaign & Marketing Automation Platform",
      desc: "Omnichannel campaigns manager tracking impression goals, user acquisitions paths, and conversion budgets on one canvas.",
      icon: <Megaphone size={20} className="text-rose-500" />
    }
  ];

  return (
    <section id="showcase" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            CORE IP CATALOG
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Featured Products <span className="text-rose-500">Showcase</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Proprietary SaaS platforms and digital products engineered by Devopstrio for rapid deployment.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod) => (
            <div
              key={prod.name}
              className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/20 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between min-h-[300px]"
            >
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-rose-600/[0.015] blur-[65px] rounded-full pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-900/60">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 group-hover:bg-rose-950/20 transition-all duration-300">
                    {prod.icon}
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-550 group-hover:text-rose-500 transition-colors" />
                </div>

                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">{prod.name}</h3>
                <span className="block text-[9px] font-mono text-rose-500 uppercase tracking-widest mb-4">
                  {prod.tagline}
                </span>
                <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                  {prod.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-900/60 flex items-center justify-between">
                <span className="text-[9px] font-mono text-zinc-500 font-bold uppercase tracking-wider">
                  SaaS DEPLOYMENT READY
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
