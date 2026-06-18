"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { MapPin, CheckCircle, Target } from "lucide-react";

interface CenterFootprint {
  city: string;
  flag: string;
  name: string;
  address: string;
  functions: string[];
  focusAreas: string[];
}

export function DeliveryFootprint() {
  const centers: CenterFootprint[] = [
    {
      city: "London",
      flag: "🇬🇧",
      name: "London Global Headquarters",
      address: "128 City Road, London, EC1V 2NX",
      functions: [
        "Executive Leadership",
        "Enterprise Consulting",
        "Strategic Partnerships",
        "Global Program Governance",
        "Business Transformation"
      ],
      focusAreas: [
        "Client Strategy",
        "Digital Transformation",
        "Solution Architecture",
        "Global Operations Management"
      ]
    },
    {
      city: "London",
      flag: "🇬🇧",
      name: "London Client Experience Centre",
      address: "167-169 Great Portland Street, 5th Floor, W1W 5PF",
      functions: [
        "Customer Success",
        "Solution Workshops",
        "Executive Briefings",
        "Product Demonstrations",
        "Innovation Showcases"
      ],
      focusAreas: [
        "Client Engagement",
        "Design Thinking Sessions",
        "Technology Consulting"
      ]
    },
    {
      city: "Tennessee",
      flag: "🇺🇸",
      name: "Tennessee North America Operations",
      address: "522 Aventura Dr, Mt Juliet, Tennessee 37122",
      functions: [
        "North American Customer Support",
        "Regional Delivery Coordination",
        "Business Development",
        "Customer Success Management"
      ],
      focusAreas: [
        "Enterprise Support",
        "Managed Services",
        "Regional Operations"
      ]
    },
    {
      city: "Bengaluru",
      flag: "🇮🇳",
      name: "Bengaluru Engineering Centre",
      address: "Embassy Golf Links Business Park, Bengaluru",
      functions: [
        "Software Engineering",
        "Product Development",
        "Artificial Intelligence",
        "Platform Engineering",
        "Data Engineering"
      ],
      focusAreas: [
        "SaaS Development",
        "AI Solutions",
        "Enterprise Applications",
        "Cloud Native Engineering"
      ]
    },
    {
      city: "Chennai",
      flag: "🇮🇳",
      name: "Chennai Cloud & SecOps Hub",
      address: "Guindy Industrial Estate, Chennai",
      functions: [
        "Cloud Operations",
        "Security Operations",
        "Infrastructure Management",
        "Compliance Monitoring",
        "Reliability Engineering"
      ],
      focusAreas: [
        "Azure Integration",
        "AWS Integrations",
        "Cybersecurity Systems",
        "DevSecOps Pipelines",
        "Cloud Governance"
      ]
    },
    {
      city: "Thoothukudi",
      flag: "🇮🇳",
      name: "Thoothukudi DevOps & Automation Center",
      address: "Rajeev Colony, Pasuvanthanai",
      functions: [
        "DevOps Engineering",
        "Automation Services",
        "CI/CD Operations",
        "Infrastructure as Code",
        "Platform Operations"
      ],
      focusAreas: [
        "Kubernetes orchestration",
        "Terraform management",
        "GitOps architecture",
        "Release Engineering",
        "Continuous Delivery"
      ]
    }
  ];

  return (
    <section id="centers" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        <Reveal className="mb-16 text-left">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            FACILITIES MAP
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Global Delivery <span className="text-rose-500">Footprint</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            A comprehensive mapping of our regional centers of excellence, detailing the core functions and technological focus areas of each office.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {centers.map((center) => (
            <div
              key={center.name}
              className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/20 transition-all duration-300 flex flex-col justify-between min-h-[460px]"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4 border-b border-zinc-900 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{center.flag}</span>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">{center.city}</span>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-555 uppercase font-bold">
                    DELIVERY HUB
                  </span>
                </div>

                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">{center.name}</h4>
                <div className="flex items-start gap-2 text-[10px] text-zinc-450 font-semibold mb-6">
                  <MapPin size={12} className="text-rose-500 shrink-0 mt-0.5" />
                  <span>{center.address}</span>
                </div>

                {/* Core Functions */}
                <div className="mb-6">
                  <span className="flex items-center gap-2 text-[9px] font-mono font-bold text-rose-500 uppercase tracking-widest mb-3">
                    <CheckCircle size={10} />
                    CORE FUNCTIONS
                  </span>
                  <ul className="space-y-2">
                    {center.functions.map((func) => (
                      <li key={func} className="text-[10px] text-zinc-400 font-semibold flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-rose-500 shrink-0" />
                        {func}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Focus Areas */}
              <div className="border-t border-zinc-900/60 pt-4 mt-auto">
                <span className="flex items-center gap-2 text-[9px] font-mono font-bold text-rose-500 uppercase tracking-widest mb-3">
                  <Target size={10} />
                  FOCUS AREAS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {center.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-850 text-[9px] font-mono text-zinc-350 uppercase font-semibold"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
