"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export function WhyDevopstrioManaged() {
  return (
    <section className="w-full py-24 bg-[#030303] text-white relative">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">

        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <Reveal>
            <span className="text-2xl font-semibold tracking-[0.3em] uppercase text-rose-500 mb-4 block drop-shadow-md">
              WHY DEVOPSTRIO
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white mb-4">
              Trusted Cloud Support UK Businesses Rely On.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {[
            {
              id: "01",
              tag: "SUPPORT & ENGINEERING",
              title: "Real Engineers, Not Call Centres",
              desc: "As a genuine cloud support provider UK businesses trust, we connect you directly with certified architects and reliability engineers — real cloud support UK teams, not scripted first-line triage.",
              badges: ["No Script-Readers", "Direct Engineer Access", "Full Accountability"]
            },
            {
              id: "02",
              tag: "MULTI-CLOUD RUNTIMES",
              title: "Multi-Cloud & Kubernetes Know-How",
              desc: "Our cloud managed services span production clusters across AWS, Azure, and Google Cloud, backed by managed cloud services UK expertise in automated upgrades, GitOps deployments, and regional failover.",
              badges: ["Zero-Downtime Upgrades", "GitOps Deployments", "Regional Failover"]
            },
            {
              id: "03",
              tag: "MONITORING & SLA",
              title: "Always-On Monitoring, Fast Triage",
              desc: "With 24/7 cloud support UK teams watching your systems, our cloud support services UK include continuous checks, distributed tracing, and automated alerts, all backed by firm response-time commitments.",
              badges: ["Fast Response Times", "Continuous Monitoring", "No-Blame Reviews"]
            },
            {
              id: "04",
              tag: "FINOPS & GOVERNANCE",
              title: "Smarter Cloud Cost Control",
              desc: "Through ongoing cloud management services UK, we audit usage regularly, reclaim idle resources automatically, and apply pricing strategies that keep your cloud spend predictable.",
              badges: ["Regular Usage Audits", "Idle Resource Cleanup", "Lower Cloud Bills"]
            },
            {
              id: "05",
              tag: "SECURITY & COMPLIANCE",
              title: "Security Built Into Everything We Do",
              desc: "As part of our managed cloud support UK, we run continuous vulnerability scans, enforce least-privilege access controls, correlate security events live, and test backup restores every week.",
              badges: ["Ongoing Threat Scans", "Least-Privilege Access", "Verified Backups"]
            },
            {
              id: "06",
              tag: "STRATEGIC PARTNERSHIP",
              title: "Support That Grows With You",
              desc: "Rather than one-off fixes, our cloud technical support UK acts as an extension of your team, with quarterly reviews, shared planning, and full transparency into how your systems perform.",
              badges: ["Quarterly Reviews", "Shared Team Access", "Transparent Reporting"]
            }
          ].map((pillar, idx) => (
            <Reveal key={pillar.id} delay={idx * 0.05}>
              <div className="group relative rounded-2xl border border-white/[0.08] hover:border-rose-500/50 bg-gradient-to-br from-[#0c0c0e] via-[#080809] to-black p-7 sm:p-8 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(225,29,72,0.07)] hover:-translate-y-1 flex flex-col justify-between h-full overflow-hidden">
                <div className="absolute left-0 top-7 bottom-7 w-1 rounded-r-full bg-zinc-800 group-hover:bg-rose-500 transition-colors duration-300" />

                <div className="absolute -top-16 -right-16 w-36 h-36 bg-rose-600/[0.04] group-hover:bg-rose-600/[0.09] rounded-full blur-2xl pointer-events-none transition-all duration-500" />


                <div className="pl-3 sm:pl-4">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-mono font-bold text-rose-500 bg-rose-500/10 border border-rose-500/25 px-2.5 py-1 rounded-md">
                      PILLAR {pillar.id}
                    </span>
                    <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-500 uppercase group-hover:text-zinc-300 transition-colors">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-3 group-hover:text-rose-400 transition-colors leading-snug">
                    {pillar.title}
                  </h3>


                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pl-3 sm:pl-4 pt-5 border-t border-white/[0.06] mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {pillar.badges.map((b) => (
                      <span key={b} className="text-xs font-mono font-medium text-zinc-300 bg-white/[0.03] border border-white/[0.07] px-3 py-1 rounded-full group-hover:border-rose-500/30 group-hover:text-white transition-all">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyDevopstrioManaged;
