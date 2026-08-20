"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Shield, Settings, Lock, BookOpen } from "lucide-react";

export function CertificationsAssurance() {
  const cards = [
    {
      icon: <Shield className="w-6 h-6 text-rose-500" />,
      title: "Cloud & Platform Certifications",
      desc: "Strengthening expertise across modern cloud, enterprise, and infrastructure ecosystems."
    },
    {
      icon: <Settings className="w-6 h-6 text-rose-500" />,
      title: "Engineering Best Practices",
      desc: "Applying disciplined approaches across software development, DevOps, QA, automation, and release processes."
    },
    {
      icon: <Lock className="w-6 h-6 text-rose-500" />,
      title: "Security & Governance Awareness",
      desc: "Supporting secure delivery, operational discipline, and responsible system design."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-rose-500" />,
      title: "Continuous Learning & Capability Building",
      desc: "Investing in ongoing technical development to keep pace with evolving technologies and client needs."
    }
  ];

  return (
    <section className="py-10 sm:py-14 bg-black text-white relative overflow-hidden z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
              Certifications, Standards, and <span className="text-rose-600">Delivery Readiness</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/40 transition-colors h-full flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-zinc-950 flex items-center justify-center shrink-0 border border-zinc-800">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 font-sans">{card.title}</h3>
                  <p className="text-zinc-300 text-base leading-relaxed font-normal font-sans">
                    {card.desc}
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
