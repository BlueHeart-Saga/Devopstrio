"use client";

import React from "react";
import { ShieldCheck, Lock, CheckCircle, FileText } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

interface CertItem {
  icon: React.ReactNode;
  title: string;
  desc: React.ReactNode;
}

const certs: CertItem[] = [
  {
    icon: <ShieldCheck size={18} />,
    title: "SOC-2 Type II Certification",
    desc: <>Rigorous annual security evaluations on all hosting centers, employee access permissions, and <Link href="/services/devops-automation" className="text-rose-500 hover:underline">codebase modifications</Link>.</>
  },
  {
    icon: <Lock size={18} />,
    title: "HIPAA & GDPR Standards",
    desc: <>Strict personal data masking algorithms and <Link href="/services/cloud-services" className="text-rose-500 hover:underline">database security patterns</Link> that protect medical files and client credentials.</>
  },
  {
    icon: <FileText size={18} />,
    title: "PCI-DSS Level 1 Compliance",
    desc: <><Link href="/services/cybersecurity" className="text-rose-500 hover:underline">Vulnerability scanning</Link>, payment processor isolation, and end-to-end tokenization configurations.</>
  },
  {
    icon: <CheckCircle size={18} />,
    title: "ISO/IEC 27001 Alignment",
    desc: <>Standardized risk assessment procedures, operational checks, and incident logs under <Link href="/services/cybersecurity" className="text-rose-500 hover:underline">security standards</Link>.</>
  }
];

export function IndustrialCapabilities() {
  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* Section Header */}
        <Reveal className="mb-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
              Trust Deployment
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white">
            Regulatory security by <span className="text-[#E11D48]">default</span>
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-semibold leading-relaxed mt-4 max-w-xl mx-auto">
            We operate under international security guidelines to guarantee absolute network isolation and software safety.
          </p>
        </Reveal>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, idx) => (
            <Reveal key={cert.title} delay={idx * 0.05} className="h-full">
              <div className="group h-full bg-[#0b0b0c] border border-white/10 rounded-[24px] p-8 flex flex-col justify-between hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-300 relative overflow-hidden cursor-pointer text-left">
                
                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-[12px] bg-rose-950/15 border border-[#E11D48]/20 flex items-center justify-center text-[#E11D48] group-hover:bg-[#E11D48] group-hover:text-white transition-all duration-300 mb-6">
                    {cert.icon}
                  </div>
                  
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-[#E11D48] transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                    {cert.desc}
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
