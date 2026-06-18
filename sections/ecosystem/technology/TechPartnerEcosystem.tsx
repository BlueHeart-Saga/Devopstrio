"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function TechPartnerEcosystem() {
  const partners = [
    { name: "Microsoft", role: "Gold Cloud Partner", logo: "/assets/Home-page/Techtools/MSAzure.svg" },
    { name: "AWS", role: "Advanced Tier Service Partner", logo: "/assets/Home-page/Techtools/aws-color.svg" },
    { name: "Google Cloud", role: "Premier Integration Partner", logo: "/assets/Home-page/Techtools/google-color.svg" },
    { name: "Oracle", role: "OCI Solution Provider", logo: "/assets/Home-page/Techtools/Oracle.svg" },
    { name: "GitHub", role: "DevOps Toolchain Partner", logo: "/assets/Home-page/Techtools/typescript.svg" },
    { name: "Docker", role: "Containerization Partner", logo: "/assets/Home-page/Techtools/docker.svg" },
    { name: "Red Hat", role: "OpenShift Platform Partner", logo: "/assets/Home-page/Techtools/python.svg" },
    { name: "Databricks", role: "Unified Data partner", logo: "/assets/Home-page/Techtools/nextjs.svg" },
    { name: "Snowflake", role: "Data Cloud Alliance", logo: "/assets/Home-page/Techtools/typescript.svg" }
  ];

  return (
    <section id="partners" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            ALLIANCES NETWORK
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Technology Partner <span className="text-rose-500">Ecosystem</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            We collaborate with world-class technology suppliers to deliver secure, resilient, and optimized software environments.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-6 items-center max-w-6xl mx-auto">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-zinc-950/40 border border-zinc-900/80 rounded-2xl p-5 hover:border-rose-500/10 transition-all duration-300 flex flex-col justify-center items-center text-center min-h-[120px]"
            >
              <span className="text-xs font-bold text-white uppercase tracking-wider mb-2">{p.name}</span>
              <span className="text-[7px] font-mono text-zinc-550 uppercase tracking-widest font-semibold block leading-tight">
                {p.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
