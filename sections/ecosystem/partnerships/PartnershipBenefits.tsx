"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheck, Award, Zap, HelpCircle, HeartHandshake, Compass, Layers } from "lucide-react";

interface BenefitItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export function PartnershipBenefits() {
  const benefits: BenefitItem[] = [
    {
      title: "Faster Time-to-Market",
      desc: "Utilize pre-approved solution blueprints and native integrations, saving months of architecture development.",
      icon: <Zap size={20} className="text-rose-500" />
    },
    {
      title: "Certified Engineers",
      desc: "Our delivery teams maintain top-tier cloud certificates, guaranteeing professional configuration.",
      icon: <Award size={20} className="text-rose-500" />
    },
    {
      title: "Reduced Project Risk",
      desc: "Deployment plans are reviewed against cloud provider validation frames, securing system uptimes.",
      icon: <ShieldCheck size={20} className="text-rose-500" />
    },
    {
      title: "Vendor Best Practices",
      desc: "Direct channel alignment ensures architectures strictly adhere to verified infrastructure frameworks.",
      icon: <Compass size={20} className="text-rose-500" />
    },
    {
      title: "Enterprise support",
      desc: "Priority ticket escalation queues directly to cloud vendor engineering support centers.",
      icon: <HeartHandshake size={20} className="text-rose-500" />
    },
    {
      title: "Early Innovation Access",
      desc: "Get exclusive preview updates to alpha and beta products to build tomorrow's toolkits early.",
      icon: <Layers size={20} className="text-rose-500" />
    }
  ];

  return (
    <section id="benefits" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            PARTNER VALUE
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Benefits of <span className="text-rose-500">Partnership</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            How our strategic alliances translate into reduced engineering risks and superior business capabilities for your enterprise.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={benefit.title}
              className="bg-zinc-950/35 border border-zinc-900/60 rounded-3xl p-8 hover:border-rose-500/20 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-rose-600/[0.01] blur-[60px] rounded-full pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-850 flex items-center justify-center mb-6 group-hover:bg-rose-950/20 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3.5">{benefit.title}</h3>
              <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
