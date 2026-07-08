"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheck, Workflow, Layers } from "lucide-react";

import Link from "next/link";

export function WhyPartnershipsMatter() {
  const cards = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#E11D48]" />,
      title: "Credibility",
      desc: "We align with recognized platforms and delivery standards that strengthen client confidence."
    },
    {
      icon: <Layers className="w-8 h-8 text-[#E11D48]" />,
      title: "Capability",
      desc: "Our partnerships expand access to tools, technologies, and ecosystem knowledge across modern digital programs."
    },
    {
      icon: <Workflow className="w-8 h-8 text-[#E11D48]" />,
      title: "Consistency",
      desc: "Certification-led practices and structured engineering processes support reliable, repeatable delivery outcomes."
    }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#E11D48] mb-3 block">
              Why This Matters
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Trust Is Built Through <br className="hidden md:block" />
              <span className="text-[#E11D48]">More Than Delivery</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
              At Devopstrio, partnerships and certifications are not treated as standalone credentials. They are part of a broader commitment to delivery quality, platform expertise, governance, and continuous improvement. They help us strengthen technical depth, improve implementation confidence, and support clients with solutions grounded in recognized standards and proven ecosystems. Explore our <Link href="/about/overview" className="text-[#E11D48] hover:underline font-bold">company overview</Link> or learn more about our <Link href="/services" className="text-[#E11D48] hover:underline font-bold">digital services</Link>.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-950/50 hover:bg-zinc-900/50 transition-colors h-full flex flex-col">
                <div className="w-14 h-14 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
