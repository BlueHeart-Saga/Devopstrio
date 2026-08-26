"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { 
  ArrowUpRight, 
  Cloud, 
  Cpu, 
  Layers, 
  Shield, 
  ShieldCheck, 
  Zap, 
  RefreshCw, 
  Clock, 
  BarChart3, 
  Bot, 
  Database, 
  Network, 
  Handshake, 
  Users, 
  Rocket 
} from "lucide-react";
import Link from "next/link";

interface PillarItem {
  icon: React.ElementType;
  label: string;
}

interface AllianceCard {
  name: string;
  tier: string;
  logo: string;
  ctaText: string;
  ctaLink: string;
  pillars: PillarItem[];
}

export function StrategicAlliances() {
  const cards: AllianceCard[] = [
    {
      name: "Microsoft Azure",
      tier: "AUTHORIZED PARTNER",
      logo: "/assets/Tech_logos/Microsoft-Azure.svg",
      ctaText: "Explore Azure Solutions",
      ctaLink: "/ecosystem/partnerships/microsoft",
      pillars: [
        { icon: Cloud, label: "Cloud Migration" },
        { icon: ShieldCheck, label: "AI & Cognitive" },
        { icon: Layers, label: "Kubernetes" },
        { icon: Shield, label: "Security" }
      ]
    },
    {
      name: "Amazon Web Services",
      tier: "ADVANCED PARTNER",
      logo: "/assets/Tech_logos/AWS.svg",
      ctaText: "Explore AWS Solutions",
      ctaLink: "/ecosystem/partnerships/aws",
      pillars: [
        { icon: Zap, label: "Serverless Computing" },
        { icon: Shield, label: "Security & IAM" },
        { icon: RefreshCw, label: "Migration Assessments" },
        { icon: Clock, label: "24/7 Support" }
      ]
    },
    {
      name: "Google Cloud Platform",
      tier: "PREMIER PARTNER",
      logo: "/assets/Tech_logos/Google_Cloud.svg",
      ctaText: "Explore GCP Solutions",
      ctaLink: "/ecosystem/partnerships/gcp",
      pillars: [
        { icon: ShieldCheck, label: "AI / ML Solutions" },
        { icon: BarChart3, label: "Data Analytics" },
        { icon: Shield, label: "Security & Compliance" },
        { icon: Bot, label: "DevOps Automation" }
      ]
    },
    {
      name: "Oracle (OCI)",
      tier: "ENTERPRISE PARTNER",
      logo: "/assets/Tech_logos/Oracle_Cloud.svg",
      ctaText: "Explore Oracle Solutions",
      ctaLink: "/ecosystem/partnerships/oracle",
      pillars: [
        { icon: Cloud, label: "Cloud Infrastructure" },
        { icon: Database, label: "Database Management" },
        { icon: Network, label: "ERP Integration" },
        { icon: ShieldCheck, label: "Data Guard & DR" }
      ]
    }
  ];

  const stats = [
    { icon: Handshake, number: "4+", label: "Strategic Partners" },
    { icon: ShieldCheck, number: "100+", label: "Joint Solutions" },
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Rocket, number: "99.9%", label: "Customer Success" }
  ];

  return (
    <section id="alliances" className="w-full py-24 bg-black text-white border-b border-zinc-900/60 relative overflow-hidden">
      {/* Subtle ambient glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8 relative z-10">
        
        {/* Header Section */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-rose-500/60" />
              <span className="text-xs font-mono font-semibold tracking-[0.3em] uppercase text-rose-500">
                STRONGER TOGETHER
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-rose-500/60" />
            </div> */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-4">
              Strategic Alliance <span className="text-rose-500">Showcase</span>
            </h2>
            {/* <p className="text-zinc-300 text-base md:text-lg font-semibold">
              Partnering with industry leaders to deliver scalable, secure, and future-ready cloud solutions.
            </p> */}
          </div>
        </Reveal>

        {/* 2x2 Showcase Grid - Borderless Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {cards.map((card, idx) => (
            <Reveal key={card.name} delay={idx * 0.1}>
              <div className="bg-[#09090b] rounded-2xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 group shadow-2xl h-full">
                
                {/* Logo & Tier Header */}
                <div className="text-center mb-8 flex flex-col items-center">
                  <div className="h-20 flex items-center justify-center mb-5">
                    <img
                      src={card.logo}
                      alt={card.name}
                      className="h-14 md:h-16 w-auto object-contain filter brightness-100 group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">
                    {card.name}
                  </h3>
                  {/* <span className="text-xs md:text-sm font-mono tracking-[0.2em] text-rose-500/90 uppercase font-semibold">
                    {card.tier}
                  </span> */}
                </div>

                {/* 4 Feature Pillars - Borderless Grid */}
                <div className="grid grid-cols-4 gap-3 py-6 mb-6">
                  {card.pillars.map((pillar) => {
                    const PillarIcon = pillar.icon;
                    return (
                      <div key={pillar.label} className="px-2 flex flex-col items-center text-center justify-start">
                        <PillarIcon className="w-6 h-6 text-rose-500 mb-2.5 flex-shrink-0" />
                        <span className="text-xs md:text-sm text-zinc-200 font-semibold leading-snug">
                          {pillar.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Link */}
                <div className="text-center pt-2">
                  <Link
                    href={card.ctaLink}
                    className="inline-flex items-center justify-center gap-2 text-rose-500 hover:text-rose-400 font-semibold text-sm md:text-base transition-colors group/link"
                  >
                    {card.ctaText}
                    <ArrowUpRight size={17} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Stats Banner - Borderless */}
        <Reveal delay={0.3}>
          <div className="bg-[#09090b] rounded-2xl p-8 md:p-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center p-4">
                  <StatIcon className="w-7 h-7 text-rose-500 mb-3" />
                  <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-2">
                    {stat.number}
                  </span>
                  <span className="text-sm md:text-base text-zinc-300 font-semibold">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
