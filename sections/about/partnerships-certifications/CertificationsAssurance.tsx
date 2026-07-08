"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Shield, Settings, Lock, BookOpen } from "lucide-react";

import Link from "next/link";

export function CertificationsAssurance() {
  const cards = [
    {
      icon: <Shield className="w-6 h-6 text-[#E11D48]" />,
      title: "Cloud & Platform Certifications",
      desc: "Strengthening expertise across modern cloud, enterprise, and infrastructure ecosystems."
    },
    {
      icon: <Settings className="w-6 h-6 text-[#E11D48]" />,
      title: "Engineering Best Practices",
      desc: "Applying disciplined approaches across software development, DevOps, QA, automation, and release processes."
    },
    {
      icon: <Lock className="w-6 h-6 text-[#E11D48]" />,
      title: "Security & Governance Awareness",
      desc: "Supporting secure delivery, operational discipline, and responsible system design."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#E11D48]" />,
      title: "Continuous Learning & Capability Building",
      desc: "Investing in ongoing technical development to keep pace with evolving technologies and client needs."
    }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#E11D48] mb-3 block">
              Quality & Assurance
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Certifications, Standards, and <span className="text-[#E11D48]">Delivery Readiness</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium max-w-3xl">
              We continue to strengthen our capabilities through platform-aligned learning, engineering best practices, and delivery standards that improve how we build, deploy, secure, and support digital solutions. Our certification and readiness approach reflects a long-term commitment to technical excellence and responsible delivery in <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline font-bold">cloud architectures</Link>, <Link href="/services/devops-automation" className="text-[#E11D48] hover:underline font-bold">DevOps frameworks</Link>, and <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline font-bold">zero-trust security</Link>.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/40 transition-colors h-full flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center shrink-0 border border-zinc-800">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-medium">
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
