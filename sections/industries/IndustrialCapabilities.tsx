"use client";

import React from "react";
import { ShieldCheck, Lock, CheckCircle, FileText } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const certs = [
  {
    icon: <ShieldCheck className="text-rose-500" size={20} />,
    title: "SOC-2 Type II Certification",
    desc: "Rigorous annual security evaluations on all hosting centers, employee access permissions, and codebase modifications."
  },
  {
    icon: <Lock className="text-rose-500" size={20} />,
    title: "HIPAA & GDPR Standards",
    desc: "Strict personal data masking algorithms and database security patterns that protect medical files and client credentials."
  },
  {
    icon: <FileText className="text-rose-500" size={20} />,
    title: "PCI-DSS Level 1 Compliance",
    desc: "Vulnerability scanning, payment processor isolation, and end-to-end tokenization configurations."
  },
  {
    icon: <CheckCircle className="text-rose-500" size={20} />,
    title: "ISO/IEC 27001 Alignment",
    desc: "Standardized risk assessment procedures, operational checks, and incident logs."
  }
];

export function IndustrialCapabilities() {
  return (
    <section className="w-full py-24 bg-black text-white border-b border-zinc-900/60 relative">
      {/* Soft overlay glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* Section Header */}
        <Reveal className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
              Trust Deployment
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Regulatory security by <span className="font-semibold text-rose-500">default</span>
          </h2>
          <p className="text-zinc-500 text-xs md:text-sm font-light leading-relaxed mt-2 max-w-xl mx-auto">
            We operate under international security guidelines to guarantee absolute network isolation and software safety.
          </p>
        </Reveal>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, idx) => (
            <Reveal key={cert.title} delay={idx * 0.05} className="h-full">
              <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 flex flex-col justify-between hover:border-rose-500/30 hover:bg-zinc-900/10 transition-all duration-300 hover:scale-[1.02] group text-left relative overflow-hidden cursor-pointer">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div>
                  <div className="mb-6 w-11 h-11 rounded-xl bg-rose-950/15 border border-rose-900/20 flex items-center justify-center group-hover:border-rose-500/30 transition-colors">
                    {cert.icon}
                  </div>
                  <h3 className="text-xs font-semibold text-zinc-100 mb-3 tracking-wide group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-[10.5px] text-zinc-450 leading-relaxed font-light group-hover:text-zinc-350 transition-colors">
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
