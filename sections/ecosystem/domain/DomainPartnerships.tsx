"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const alliances = [
  { name: "Microsoft", path: "/assets/Home-page/partners/Microsoft.svg" },
  { name: "AWS", path: "/assets/Tech-icons/amazon-web-service-logo_svgstack_com_7421780931787.svg" },
  { name: "Google Cloud", path: "/assets/Tech-icons/google-cloud-logo_svgstack_com_28371780931185.svg" },
  { name: "OpenAI", path: "/assets/Tech-icons/openai-logo_svgstack_com_28971780931370.svg" },
  { name: "Oracle", path: "/assets/Tech-icons/oracle-logo_svgstack_com_28991780931429.svg" },
  { name: "ServiceNow", path: "/webp/assets/Home-page/partners/servicenow.webp" }
];

export function DomainPartnerships() {
  return (
    <section className="py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-left">
        <Reveal className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            ALLIANCES
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Strategic <span className="text-rose-500">partnership network</span>
          </h2>
          <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-xl">
            Technology alliances with AWS, Microsoft Azure, Google Cloud, and Oracle to build pre-certified integration templates.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
          {alliances.map((partner, i) => (
            <Reveal key={i} delay={i * 0.05} className="h-full">
              <div className="h-24 bg-zinc-950/20 border border-zinc-900 rounded-2xl flex items-center justify-center p-6 grayscale hover:grayscale-0 hover:border-rose-500/20 hover:bg-zinc-900/5 transition-all duration-300">
                <Image
                  src={partner.path}
                  alt={partner.name}
                  width={100}
                  height={32}
                  className="object-contain max-h-8"
                  unoptimized
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
