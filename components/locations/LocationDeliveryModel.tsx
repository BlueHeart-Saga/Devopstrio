"use client";

import React from "react";
import { ShieldCheck, Server, Clock, Lock, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface LocationDeliveryModelProps {
  locationName?: string;
}

export function LocationDeliveryModel({ locationName = "the UK" }: LocationDeliveryModelProps) {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Sovereign In-Region Data Hosting",
      desc: "Client workloads, databases, and operational logs are provisioned inside regional sovereign cloud availability zones (AWS, Microsoft Azure, and GCP) in full alignment with local data residency mandates."
    },
    {
      icon: Clock,
      title: "24/7 Follow-the-Sun SRE Support",
      desc: "Senior solutions architects lead governance and technical scoping, supported by follow-the-sun engineering delivery centers providing continuous cluster monitoring, automated maintenance, and incident escalation."
    },
    {
      icon: Lock,
      title: "Enterprise Regulatory Alignment",
      desc: "Our architectures are designed to align with ISO 27001, SOC-2 Type II, Cyber Essentials Plus, and local privacy frameworks, including UK GDPR, the Indian DPDP Act, and US HIPAA standards."
    },
    {
      icon: Server,
      title: "Contractual Enterprise SLA Desks",
      desc: "Direct access to senior cloud architects and SREs with contract-backed response targets, prioritizing rapid critical outage triage and reliable high-availability uptime commitments."
    }
  ];

  return (
    <section id="delivery-model" className="w-full py-16 md:py-24 bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
        
        <Reveal className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            How We Deliver Enterprise Engineering in <span className="text-rose-500">{locationName}</span>
          </h2>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
            Devopstrio combines senior onshore consulting led from our London headquarters with distributed follow-the-sun delivery centers, providing enterprise scale, cost efficiency, and rigorous security.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx} delay={idx * 0.04} className="h-full">
                <div className="flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl bg-zinc-950/60 hover:bg-zinc-900/40 transition-all duration-300">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500 mb-5">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                    <CheckCircle2 size={13} /> Verified Standard
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
