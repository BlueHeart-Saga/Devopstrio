"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Heart, Users2, Landmark, Factory, ShoppingCart, GraduationCap, Laptop, Landmark as GovIcon } from "lucide-react";

interface IndustryItem {
  name: string;
  icon: React.ReactNode;
  desc: string;
  image: string;
}

export function IndustriesServed() {
  const industries: IndustryItem[] = [
    {
      name: "Healthcare",
      icon: <Heart size={14} />,
      desc: "HIPAA-compliant telemedicine platforms and EHR system integrations.",
      image: "/webp/assets/Home-page/industries/healthcaree.webp"
    },
    {
      name: "Recruitment",
      icon: <Users2 size={14} />,
      desc: "Enterprise workforce tracking, ATS scoring, and candidate analytics.",
      image: "/webp/assets/Home-page/industries/telecommunicationn.webp"
    },
    {
      name: "Finance",
      icon: <Landmark size={14} />,
      desc: "Secure transaction pipelines, PCI compliance, and multi-gateway routing.",
      image: "/webp/assets/Home-page/industries/bankifinance.webp"
    },
    {
      name: "Manufacturing",
      icon: <Factory size={14} />,
      desc: "Industrial IoT dashboards, tracking systems, and supply chains sync.",
      image: "/webp/assets/Home-page/industries/manufacturingg.webp"
    },
    {
      name: "Retail & E-Commerce",
      icon: <ShoppingCart size={14} />,
      desc: "High-speed multi-tenant inventory networks and custom checkouts.",
      image: "/webp/assets/Home-page/industries/retailecommerce.webp"
    },
    {
      name: "Education",
      icon: <GraduationCap size={14} />,
      desc: "Remote learning hubs, user onboarding databases, and course managers.",
      image: "/webp/assets/Home-page/industries/educationn.webp"
    },
    {
      name: "Technology",
      icon: <Laptop size={14} />,
      desc: "Developer self-service portals, API tools, and microservice hosts.",
      image: "/webp/assets/Home-page/industries/mediaentertainment.webp"
    },
    {
      name: "Government",
      icon: <GovIcon size={14} />,
      desc: "Strict secure spaces compliance, portal sites, and auditing trails.",
      image: "/webp/assets/Home-page/industries/governmentsector.webp"
    }
  ];

  return (
    <section id="industries" className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-rose-650/[0.015] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <Reveal className="mb-16 text-left">
          {/* <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            VERTICAL ALIGNMENT
          </span> */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
            Industries Using Our <span className="text-rose-500">Platforms</span>
          </h2>
          {/* <p className="text-zinc-400 text-sm font-semibold max-w-2xl">
            Our technology frameworks and SaaS assets are configured to match specific legal and operational demands across eight core industries.
          </p> */}
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <Reveal key={ind.name} delay={idx * 0.05} className="h-full">
              <div className="group flex flex-col bg-zinc-950/60 border border-white/[0.04] hover:border-rose-500/25 rounded-[24px] overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_rgba(244,63,94,0.04)] p-3 h-full">
                
                {/* Image Wrapper */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[18px] bg-zinc-900 border border-white/[0.03] mb-4">
                  <img src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy" />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 text-rose-500">
                    {ind.icon}
                  </div>
                </div>

                {/* Details */}
                <div className="px-3 pb-3 flex flex-col flex-1">
                  <h3 className="font-semibold text-base md:text-lg uppercase tracking-wider text-white mb-2 group-hover:text-rose-400 transition-colors duration-300">
                    {ind.name}
                  </h3>
                  {/* <p className="text-[11px] text-zinc-400 leading-relaxed font-semibold">
                    {ind.desc}
                  </p> */}
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
