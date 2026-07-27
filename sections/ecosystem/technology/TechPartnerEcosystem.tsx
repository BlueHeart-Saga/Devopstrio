"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function TechPartnerEcosystem() {
  const partners = [
    { name: "Microsoft", role: "Gold Cloud Partner", logo: "/assets/Tech-icons/microsoft-azure-logo_svgstack_com_7501780931055.svg" },
    { name: "AWS", role: "Advanced Tier Service Partner", logo: "/assets/Tech-icons/amazon-aws-logo_svgstack_com_7491780931192.svg" },
    { name: "Google Cloud", role: "Premier Integration Partner", logo: "/assets/Tech-icons/google-cloud-logo_svgstack_com_28371780931185.svg" },
    { name: "Oracle", role: "OCI Solution Provider", logo: "/assets/Tech-icons/oracle-logo_svgstack_com_28991780931429.svg" },
    { name: "GitHub", role: "DevOps Toolchain Partner", logo: "/assets/Tech-icons/github-logo-svg_svgstack_com_28391780931442.svg", darkLogo: true },
    { name: "Docker", role: "Containerization Partner", logo: "/assets/Tech-icons/docker-logo_svgstack_com_28191780931128.svg" },
    { name: "Red Hat", role: "OpenShift Platform Partner", logo: "/assets/Tech-icons/redhat-logo_svgstack_com_29191780931481.svg" },
    { name: "Cloudflare", role: "Edge & Security Partner", logo: "/assets/Tech-icons/cloudflare-logo-icon_svgstack_com_28071780931769.svg" },
    { name: "OpenAI", role: "Applied AI Partner", logo: "/assets/Tech-icons/openai-logo_svgstack_com_28971780931370.svg", darkLogo: true }
  ];

  return (
    <section id="partners" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            ALLIANCES NETWORK
          </span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight leading-tight mb-6 text-white">
            Technology Partner <span className="text-rose-500">Ecosystem</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed">
            We collaborate with world-class technology suppliers to deliver secure, resilient, and optimized software environments.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-6 items-stretch max-w-6xl mx-auto">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group bg-zinc-950/40 border border-zinc-900/80 rounded-2xl p-5 hover:border-rose-500/20 hover:bg-zinc-950/70 transition-all duration-300 flex flex-col justify-between items-center text-center min-h-[140px]"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className={`max-w-full max-h-full object-contain transition-all duration-300 ${p.darkLogo ? "invert brightness-200" : "brightness-100 group-hover:brightness-110"
                    }`}
                />
              </div>
              <div>
                <span className="text-xs font-bold text-white uppercase tracking-wider block mb-1">{p.name}</span>
                <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest font-semibold block leading-tight">
                  {p.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
