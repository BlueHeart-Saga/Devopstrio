"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function BusinessOutcomes() {
  return (
    <section id="outcomes" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">

          {/* Left Column: Outcome list */}
          <div className="lg:col-span-7 flex flex-col items-start text-left justify-center z-20">
            <Reveal>
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                QUANTIFIABLE IMPACT
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                Proven Business Results <span className="text-rose-500">for Our Clients</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mb-8">
                By leveraging our integrated ecosystems, enterprises achieve unprecedented efficiency gains, drastically reduced time-to-market, and ironclad security guardrails.
              </p>
            </Reveal>

            {/* Outcome rows */}
            <div className="flex flex-col gap-6 w-full">
              {[
                {
                  title: "50% Faster Delivery",
                  desc: "Automated CI/CD pipelines and infrastructure-as-code drastically reduce time-to-market."
                },
                {
                  title: "99.99% Availability",
                  desc: "Self-healing cloud architectures designed for zero downtime and peak resilience."
                },
                {
                  title: "40% Reduced Cloud Spend",
                  desc: "Continuous resource optimization and dynamic auto-scaling cut unnecessary costs."
                },
                {
                  title: "24×7 Operations",
                  desc: "Follow-the-sun managed services ensuring continuous system monitoring and support."
                },
                {
                  title: "100+ Certified Engineers",
                  desc: "A vetted global talent pool certified across AWS, Azure, Google Cloud, and Kubernetes."
                }
              ].map((item, idx) => (
                <Reveal key={idx} delay={0.25 + idx * 0.05}>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-md bg-rose-950/15 border border-rose-900/20 flex items-center justify-center text-rose-500 mt-0.5 flex-shrink-0">
                      <CheckCircle2 size={13} />
                    </div>
                    <div>
                      <strong className="block text-xs font-bold text-white mb-1">
                        {item.title}
                      </strong>
                      <p className="text-[11px] text-zinc-400 leading-relaxed font-semibold">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Azure Partnership Announcement Card */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end z-20">
            <Reveal delay={0.2} className="w-full max-w-[440px]">
              <div className="bg-gradient-to-br from-[#100816] to-[#170b1b] border border-[#281438] hover:border-rose-500/35 rounded-3xl p-8 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.06),transparent_75%)] pointer-events-none" />

                <span className="inline-block px-2.5 py-1 rounded bg-rose-950/30 border border-rose-900/40 text-[#E11D48] text-[8px] font-bold tracking-wider uppercase mb-6">
                  STRATEGIC COLLABORATION
                </span>

                <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-4 group-hover:text-rose-450 transition-colors">
                  Devopstrio Partners with Azure to Accelerate Enterprise AI Adoption
                </h3>

                <p className="text-[11px] text-zinc-400 leading-relaxed mb-8 font-semibold">
                  We are proud to announce a multi-year technical partnership aimed at accelerating secure cloud-native deployment patterns and custom cognitive service integrations for healthcare and fintech industries.
                </p>

                <Link
                  href="/insights-knowledge/white-paper"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-rose-500 transition-colors"
                >
                  Read the Full Announcement <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
