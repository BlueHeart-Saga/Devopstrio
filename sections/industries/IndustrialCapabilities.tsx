"use client";

import React from "react";
import { ShieldCheck, Lock, CheckCircle, FileText } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const certs = [
  {
    icon: <ShieldCheck className="text-rose-500" size={24} />,
    title: "SOC-2 Type II Certification",
    desc: "Rigorous annual security evaluations on all hosting centers, employee access permissions, and codebase modifications."
  },
  {
    icon: <Lock className="text-rose-500" size={24} />,
    title: "HIPAA & GDPR Standards",
    desc: "Strict personal data masking algorithms and database security patterns that protect medical files and client credentials."
  },
  {
    icon: <FileText className="text-rose-500" size={24} />,
    title: "PCI-DSS Level 1 Compliance",
    desc: "Vulnerability scanning, payment processor isolation, and end-to-end tokenization configurations."
  },
  {
    icon: <CheckCircle className="text-rose-500" size={24} />,
    title: "ISO/IEC 27001 Alignment",
    desc: "Standardized risk assessment procedures, operational checks, and incident logs."
  }
];

export function IndustrialCapabilities() {
  return (
    <section className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20">

        <Reveal className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-rose-600"></span>
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400">
              TRUST DEPLOYMENT
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Regulatory security by <span className="font-semibold text-rose-500">default</span>
          </h2>
          <p className="text-zinc-550 text-xs md:text-sm font-light leading-relaxed mt-2 max-w-xl mx-auto">
            We operate under international security guidelines to guarantee absolute network isolation and software safety.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, idx) => (
            <Reveal key={cert.title} delay={idx * 0.05} className="h-full">
              <div className="h-full bg-[#030303] border border-zinc-900 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-800 transition-colors text-left">
                <div>
                  <div className="mb-6 w-12 h-12 rounded-xl bg-rose-950/10 flex items-center justify-center border border-rose-900/10">
                    {cert.icon}
                  </div>
                  <h3 className="text-xs font-semibold text-zinc-100 mb-3 tracking-wide">
                    {cert.title}
                  </h3>
                  <p className="text-[10px] text-zinc-450 leading-relaxed font-light">
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
