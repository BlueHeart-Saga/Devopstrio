"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const partnerCategories = [
  {
    category: "Cloud Platforms",
    partners: ["AWS Advanced Tier", "Microsoft Partner", "Google Cloud Pro", "VMware Connect"]
  },
  {
    category: "DevOps & Infra",
    partners: ["HashiCorp Specialised", "Kubernetes Admin", "Terraform Associate", "ServiceNow Master"]
  },
  {
    category: "Compliance & Security",
    partners: ["ISO 27001", "ISO 42001", "GDPR", "HIPAA", "Cyber Essentials"]
  }
];

export function OurPartnership() {
  return (
    <section className="w-full py-20 bg-black text-white relative">
      <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-20">

        {/* Header Block */}
        <Reveal className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-rose-600"></span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-rose-500">
              Our Ecosystem
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white mb-4">
            Authorised by the best. <span className="font-bold block"><span className="text-rose-500">Trusted to deliver</span> the rest.</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold">
            Devopstrio holds advanced authorisations across the world's most respected technology ecosystems. From AWS Advanced Tier and Microsoft Partner Network to HashiCorp Specialised and Google Cloud Professional — our certifications mean your project is executed by engineers who are validated, not just experienced.
          </p>
        </Reveal>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">

          {/* Left Column: Extra Context & Client Value */}
          <Reveal className="flex flex-col gap-6">
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-bold">
              These partnerships give our clients preferential access to enterprise support channels, early-access technology previews, and co-investment programmes unavailable through standard vendor relationships.
            </p>
            <div className="p-6 bg-zinc-950/20 border border-zinc-900 rounded-xl border-l-4 border-l-rose-600 mt-2">
              <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block mb-2">
                Partnership Value for Clients
              </span>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-bold">
                When you engage Devopstrio, you don't just get our team — you get our entire partner ecosystem. AWS migration credits, Azure Hybrid Benefit guidance, Google Cloud architecture reviews, and Salesforce implementation pathways — all unlocked through our advanced-tier relationships.
              </p>
            </div>
          </Reveal>

          {/* Right Column: Category Groups */}
          <Reveal className="flex flex-col gap-6">
            {partnerCategories.map((cat) => (
              <div
                key={cat.category}
                className="bg-zinc-950/20 border border-zinc-900 p-6 rounded-xl hover:border-zinc-800 transition-colors"
              >
                <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block mb-3">
                  {cat.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.partners.map((p) => (
                    <span
                      key={p}
                      className="text-[10px] md:text-[11px] px-2.5 py-1 bg-zinc-900 text-zinc-300 rounded font-medium border border-zinc-800"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>

        </div>

      </div>
    </section>
  );
}
