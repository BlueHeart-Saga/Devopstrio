"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function BusinessOverview() {
  return (
    <section className="w-full pt-4 pb-12 bg-[#030303] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 xl:px-8">
        <Reveal>
          <div className="group relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/60 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-zinc-700/80">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-rose-600/10 blur-[120px]" />
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[120px]" />
            </div>

            <div className="relative grid lg:grid-cols-2 items-center gap-0">
              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10 z-10">
                <div className="mb-3">
                  <span className="inline-block text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-rose-400 bg-rose-500/10 px-3 py-1 rounded-md border border-rose-500/20">
                    Business Overview
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold leading-tight tracking-tight mb-3 text-white">
                  Transforming Businesses Through Cloud, AI &amp; Digital Innovation
                </h2>

                <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mb-3 font-normal">
                  Devopstrio is an elite global{" "}
                  <Link
                    href="/services/it-consulting"
                    className="text-rose-500 hover:underline font-medium"
                  >
                    technology consulting
                  </Link>{" "}
                  and engineering company. We help enterprises modernize legacy systems, accelerate innovation, and scale{" "}
                  <Link
                    href="/services/digital-transformation"
                    className="text-rose-500 hover:underline font-medium"
                  >
                    digital transformation
                  </Link>{" "}
                  across multiple cloud platforms.
                </p>

                {/* <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mb-5 font-normal">
                  Through custom{" "}
                  <Link
                    href="/services/ai-data-innovation"
                    className="text-rose-500 hover:underline font-medium"
                  >
                    AI innovation
                  </Link>
                  , automated{" "}
                  <Link
                    href="/services/devops-automation"
                    className="text-rose-500 hover:underline font-medium"
                  >
                    DevOps pipelines
                  </Link>
                  , and robust{" "}
                  <Link
                    href="/services/cybersecurity"
                    className="text-rose-500 hover:underline font-medium"
                  >
                    cybersecurity
                  </Link>
                  , we build scalable environments tailored to your specific business requirements.
                </p> */}

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2.5 text-white text-xs sm:text-sm font-semibold group/link w-fit hover:text-rose-400 transition-colors"
                >
                  Explore Capabilities
                  <span className="w-8 h-8 rounded-full bg-[#E11D48] flex items-center justify-center transition-transform duration-300 group-hover/link:translate-x-1 text-white shadow-md">
                    <ArrowUpRight size={15} />
                  </span>
                </Link>
              </div>

              {/* RIGHT IMAGE - Premium Landscape Rectangle with Reduced Border Gap */}
              <div className="p-2.5 sm:p-3.5 lg:p-4 flex items-center justify-center bg-zinc-950/30 border-t lg:border-t-0 lg:border-l border-zinc-900/80">
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl group/img">
                  <img src="/assets/Home-page/business-overview/overview-lifestyle.png"
                    alt="Devopstrio Digital Transformation"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-[1.03]"
                  loading="lazy" />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}