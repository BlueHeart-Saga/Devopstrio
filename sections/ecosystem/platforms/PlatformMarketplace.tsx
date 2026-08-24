"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Users, DollarSign, BarChart, Mail, Layers, Map, ShieldAlert, Key, Lock, Home, Coins, UserCheck, Activity, Heart } from "lucide-react";

interface ShowcaseProduct {
  name: string;
  icon: string;
}

interface ShowcaseItem {
  id: string;
  logoPath: string;
  name: string;
  quote: string;
  authorName: string;
  authorRole: string;
  products: ShowcaseProduct[];
  imagePath: string;
}

export function PlatformMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState<string>("humanex");

  const showcaseItems: ShowcaseItem[] = [
    {
      id: "humanex",
      logoPath: "/assets/Home-page/our-products/logo/humanex.png",
      name: "Humanex",
      quote: "Our HR recruitment pipelines and candidate ATS scoring automated 80% of our manual screening workload. The security framework built into Devopstrio is unmatched.",
      authorName: "Sarah Jenkins",
      authorRole: "Chief People Officer, Global Tech Partners",
      products: [
        { name: "Talent Onboarding", icon: "Users" },
        { name: "HR Payroll Engine", icon: "DollarSign" },
        { name: "Performance Metrics", icon: "BarChart" }
      ],
      imagePath: "/assets/Home-page/our-products/humanex.png"
    },
    {
      id: "brio",
      logoPath: "/assets/Home-page/our-products/logo/brio.png",
      name: "Brio",
      quote: "Brio changed the game for our multi-channel marketing campaigns. The trigger-based emails and customer analytics helped us boost retention by 35% in just two quarters.",
      authorName: "David Miller",
      authorRole: "VP of Growth, SaaS Automation Group",
      products: [
        { name: "Marketing Automations", icon: "Mail" },
        { name: "Email Sequences", icon: "Layers" },
        { name: "Journey Maps", icon: "Map" }
      ],
      imagePath: "/assets/Home-page/our-products/brio.png"
    },
    {
      id: "safesign",
      logoPath: "/assets/Home-page/our-products/logo/safesign.png",
      name: "SafeSign",
      quote: "Securing document handshakes across our global offices required strict compliance validation. SafeSign's cryptographic architecture met every standard flawlessly.",
      authorName: "Marcus Chen",
      authorRole: "Head of Legal Operations, Securitas Corp",
      products: [
        { name: "Zero-Knowledge Signing", icon: "ShieldAlert" },
        { name: "Biometric Ledger", icon: "Key" },
        { name: "SSO Integration", icon: "Lock" }
      ],
      imagePath: "/assets/Home-page/our-products/safesign.png"
    },
    {
      id: "homela",
      logoPath: "/assets/Home-page/our-products/logo/homela.png",
      name: "Homela",
      quote: "Homela enabled us to coordinate rent escrows and tenancy agreements in real-time. Our user transaction speeds have increased threefold.",
      authorName: "Elena Rostova",
      authorRole: "Operations Lead, PropTech International",
      products: [
        { name: "Listings Registry", icon: "Home" },
        { name: "Rent Escrow Pipelines", icon: "Coins" },
        { name: "Tenant Portal", icon: "UserCheck" }
      ],
      imagePath: "/assets/Home-page/our-products/homela.png"
    },
    {
      id: "caresuite",
      logoPath: "/assets/Home-page/our-products/logo/Caresuite.png",
      name: "CareSuite",
      quote: "Patient telemetry and HIPAA-compliant records require strict database isolation. CareSuite gave us the safety we needed while keeping access quick and responsive.",
      authorName: "Dr. Amanda Ross",
      authorRole: "Director of Medical Informatics, HealthLink Networks",
      products: [
        { name: "EHR Database", icon: "Activity" },
        { name: "Telemetry Hub", icon: "Activity" },
        { name: "Patient Portal", icon: "Heart" }
      ],
      imagePath: "/assets/Home-page/our-products/caresuite.png"
    }
  ];

  const activeItem = showcaseItems.find((item) => item.id === selectedCategory) || showcaseItems[0];

  const getIcon = (name: string) => {
    switch (name) {
      case "Users": return <Users size={12} />;
      case "DollarSign": return <DollarSign size={12} />;
      case "BarChart": return <BarChart size={12} />;
      case "Mail": return <Mail size={12} />;
      case "Layers": return <Layers size={12} />;
      case "Map": return <Map size={12} />;
      case "ShieldAlert": return <ShieldAlert size={12} />;
      case "Key": return <Key size={12} />;
      case "Lock": return <Lock size={12} />;
      case "Home": return <Home size={12} />;
      case "Coins": return <Coins size={12} />;
      case "UserCheck": return <UserCheck size={12} />;
      case "Activity": return <Activity size={12} />;
      case "Heart": return <Heart size={12} />;
      default: return <Activity size={12} />;
    }
  };

  return (
    <section id="marketplace" className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-650/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full px-12 xl:px-8 relative z-10">

        {/* Header Section */}
        <div className="mb-12 text-left max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Code that's changing the game
          </h2>
          <p className="text-zinc-400 text-sm font-semibold leading-relaxed">
            See how development teams from early-stage startups to global enterprises are disrupting the status quo.
          </p>
        </div>

        {/* Dynamic active case study showcase container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-zinc-950/40 border border-white/[0.04] rounded-[24px] p-6 lg:p-10 mb-8 overflow-hidden relative group">
          {/* Ambient glow inside card */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-rose-500/[0.015] rounded-full blur-[100px] pointer-events-none" />

          {/* Left details panel - col-span-6 */}
          <div className="lg:col-span-6 flex flex-col justify-between z-10">
            <div>
              {/* Product Logo with white bg container */}
              <div className="inline-flex items-center justify-center bg-white rounded-xl px-4 py-3 mb-6 border border-white/10 shadow-[0_4px_20px_rgba(255,255,255,0.05)]">
                <img src={activeItem.logoPath}
                  alt={activeItem.name}
                  className="h-5 object-contain"
                loading="lazy" />
              </div>

              {/* Testimonial Quote */}
              <p className="text-sm md:text-base lg:text-lg font-medium text-white italic leading-relaxed mb-6">
                "{activeItem.quote}"
              </p>

              {/* Author / Client info */}
              <div className="mb-8">
                <h5 className="text-[11px] font-bold text-white uppercase tracking-wider">
                  {activeItem.authorName}
                </h5>
                <p className="text-[10px] text-zinc-500 font-semibold mt-0.5">
                  {activeItem.authorRole}
                </p>
              </div>

              {/* Linked Modules / Services */}
              <div className="mb-8">
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest block mb-3">
                  Products and services
                </span>
                <div className="flex flex-wrap gap-4">
                  {activeItem.products.map((p) => (
                    <div key={p.name} className="flex items-center gap-2 bg-white/[0.02] border border-white/[0.04] rounded-lg px-3 py-1.5">
                      <span className="text-rose-500">
                        {getIcon(p.icon)}
                      </span>
                      <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-wider">
                        {p.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Action */}
            <div>
              <button className="bg-rose-600 hover:bg-rose-500 text-white font-bold text-[10px] px-6 py-3.5 rounded-xl uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]">
                Explore Platform
              </button>
            </div>
          </div>

          {/* Right mockup view screen - col-span-6 */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[16/10] bg-zinc-900 border border-white/[0.04] h-full min-h-[300px] z-10">
            <img src={activeItem.imagePath}
              alt={activeItem.name}
              className="w-full h-full object-cover opacity-95 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            loading="lazy" />
            {/* Play Button Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <button className="w-12 h-12 rounded-full bg-rose-600 hover:bg-rose-500 flex items-center justify-center text-white border border-white/20 transition-all duration-300 shadow-[0_0_30px_rgba(244,63,94,0.4)] hover:scale-105">
                <svg
                  className="w-4 h-4 fill-current ml-0.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Tab Bar selector */}
        <div className="grid grid-cols-2 md:grid-cols-5 border border-white/[0.03] bg-[#0a0a0a]/60 rounded-[20px] overflow-hidden">
          {showcaseItems.map((item) => {
            const isActive = selectedCategory === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCategory(item.id)}
                className={`flex items-center justify-center p-6 border-r border-white/[0.03] last:border-r-0 hover:bg-white/[0.015] transition-all duration-300 relative ${isActive ? "bg-white/[0.01]" : ""
                  }`}
              >
                {/* Logo wrapper */}
                <div className="flex items-center justify-center bg-white rounded-lg p-2.5 max-w-[120px] w-full aspect-[3/1] shadow-sm">
                  <img src={item.logoPath}
                    alt={item.name}
                    className={`h-5 object-contain filter transition-all duration-300 ${isActive ? "grayscale-0 opacity-100 scale-105" : "grayscale opacity-40 hover:opacity-75"
                      }`}
                  loading="lazy" />
                </div>
                {/* Underline accent */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-rose-500" />
                )}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
