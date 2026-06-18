"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Award, ShieldAlert, CheckCircle, Zap } from "lucide-react";

interface CertBadge {
  name: string;
  count: string;
  category: string;
}

export function Certifications() {
  const certifications: CertBadge[] = [
    { name: "AWS Solutions Architect Pro", count: "45+", category: "Cloud Infrastructure" },
    { name: "Azure Solutions Architect Expert", count: "35+", category: "Hybrid & Enterprise" },
    { name: "Google Cloud Professional Architect", count: "25+", category: "AI & Data Engineering" },
    { name: "Kubernetes Certified (CKA/CKAD)", count: "40+", category: "Cloud Native Containers" },
    { name: "HashiCorp Terraform Associate", count: "55+", category: "Infrastructure-as-Code" },
    { name: "Azure Security Engineer Associate", count: "20+", category: "Security & IAM" }
  ];

  const highlights = [
    { count: "150+", label: "Total Cloud Certifications" },
    { count: "60+", label: "DevOps & IaC Certifications" },
    { count: "35+", label: "Security & Kubernetes Badges" }
  ];

  return (
    <section id="certifications" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            VERIFIED EXPERTISE
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Ecosystem Certifications & <span className="text-rose-500">Accreditations</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            Our teams are rigorously trained and certified by our global technology partners to ensure world-class solution deliveries.
          </p>
        </Reveal>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((h, idx) => (
            <div
              key={h.label}
              className="bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-8 text-center flex flex-col justify-center items-center"
            >
              <div className="text-3xl md:text-4xl font-black text-rose-500 tracking-tight mb-2">
                {h.count}
              </div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                {h.label}
              </div>
            </div>
          ))}
        </div>

        {/* Badge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center gap-4 bg-zinc-950/40 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center text-rose-500 flex-shrink-0">
                <Award size={22} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white tracking-wide">{cert.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[9px] text-zinc-500 font-semibold">{cert.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                  <span className="text-[10px] text-rose-500 font-mono font-bold">{cert.count} Certified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
