"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";

interface LabItem {
  name: string;
  desc: string;
  href: string;
  action: string;
  image: string;
}

export function LabsEcosystem() {
  const labs: LabItem[] = [
    {
      name: "AI Innovation Lab",
      desc: "Stateful agent networks and vector lookups",
      href: "#ai-lab",
      action: "Explore AI Lab",
      image: "/webp/assets/ecosystem/grid/ecosystem_innovation-labs-page_grid_5/Generated-Design.webp",
    },
    {
      name: "Cloud Innovation Lab",
      desc: "Green computing and serverless edge WASM",
      href: "#cloud-lab",
      action: "Explore Cloud Lab",
      image: "/webp/assets/ecosystem/grid/ecosystem_innovation-labs-page_grid_5/Generated-Design-1.webp",
    },
    {
      name: "DevOps Innovation Lab",
      desc: "Canary rollouts and dynamic pipeline tasks",
      href: "#devops-lab",
      action: "Explore DevOps Lab",
      image: "/webp/assets/ecosystem/grid/ecosystem_innovation-labs-page_grid_5/Generated-Design-2.webp",
    },
    {
      name: "Cybersecurity Lab",
      desc: "eBPF security rules and SBOM vulnerability scans",
      href: "#cyber-lab",
      action: "Explore Cyber Lab",
      image: "/webp/assets/ecosystem/grid/ecosystem_innovation-labs-page_grid_5/Generated-Design-3.webp",
    },
    {
      name: "Data & Analytics Lab",
      desc: "Flink stream engines and Delta Lake compression",
      href: "#data-lab",
      action: "Explore Data Lab",
      image: "/webp/assets/ecosystem/grid/ecosystem_innovation-labs-page_grid_5/Generated-Design-4.webp",
    },
  ];

  return (
    <section id="ecosystem" className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Header Section */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
           
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-4 text-white">
              Our Innovation Labs <span className="text-rose-500">Ecosystem</span>
            </h2>
            <p className="text-zinc-300 text-base md:text-lg lg:text-xl leading-relaxed font-normal italic max-w-3xl mx-auto">
              “Highly specialized research hubs testing next-generation architectural paradigms to future-proof enterprise technology.”
            </p>
          </div>
        </Reveal>

        {/* Categories Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">

          {/* Left Tall Card (Col 1, Spans entire height / 2 rows on desktop) */}
          <Reveal className="lg:col-span-1 h-full">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-rose-500/30 p-8 flex flex-col justify-between h-full min-h-[420px] bg-gradient-to-br from-zinc-950/90 via-[#0a0506]/90 to-[#0f0709]/90 group/tall backdrop-blur-md transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {/* Internal decorative glowing meshes */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />

              <img src="/webp/assets/ecosystem/grid/ecosystem_innovation-labs-page_grid_5/Generated-Design.webp"
                alt="Abstract Background"
                className="absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none opacity-30"
              loading="lazy" />

              {/* Card top details */}
              <div className="relative z-10">
                <div className="mb-2 text-rose-500 font-serif text-3xl leading-none opacity-90 select-none">
                  “
                </div>
                <blockquote className="border-l-2 border-rose-500/70 pl-4 py-0.5">
                  <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight leading-relaxed group-hover/tall:text-rose-200 transition-colors italic">
                    In our Innovation Labs, we don&apos;t just anticipate the future—we design, build, and pioneer it.
                  </h3>
                </blockquote>
              </div>

              {/* Card bottom button */}
              <div className="relative z-10 mt-8">
                <Link
                  href="/contact#contact-form"
                  className="gap-2 w-fit inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
                >
                  Partner With Us{" "}
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right Capabilities Grid (Col 2-4) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labs.map((item, idx) => (
              <Reveal key={item.name} delay={idx * 0.05} className="h-full">
                <div className="group/card flex flex-col justify-between bg-zinc-950/30 border border-white/5 hover:border-rose-500/20 hover:bg-zinc-950/60 rounded-2xl p-6 transition-all duration-300 min-h-[140px] h-full relative overflow-hidden backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">

                  {/* Background graphic image */}
                  <img src={item.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none opacity-25 group-hover/card:opacity-40 transition-opacity duration-500"
                  loading="lazy" />

                  {/* Subtle color highlight glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Text details */}
                  <div className="relative z-10">
                    <h4 className="text-base md:text-lg font-semibold text-rose-500 group-hover:text-rose-400 transition-colors mb-2">
                      {item.name}
                    </h4>
                    {/* <p className="text-[12px] text-zinc-200 font-semibold leading-relaxed mb-6">
                      {item.desc}
                    </p> */}
                  </div>

                  {/* Link action details */}
                  <Link
                    href={item.href}
                    className="relative z-10 inline-flex items-center gap-2.5 group/link mt-auto w-fit"
                  >
                    <span className="w-7 h-7 rounded-full bg-rose-600/10 group-hover/link:bg-rose-600 text-rose-500 group-hover/link:text-white flex items-center justify-center transition-all duration-300">
                      <ChevronRight
                        size={12}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                      />
                    </span>
                    <span className="text-[12px] font-semibold text-zinc-400 group-hover/link:text-zinc-200 transition-colors">
                      {item.action}
                    </span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
