"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

interface ProductCard {
  name: string;
  tagline: string;
  desc: string;
  logo: string;
  image: string;
}

export function FeaturedProducts() {
  const products: ProductCard[] = [
    {
      name: "Humanex",
      tagline: "Recruitment & Workforce Management Platform",
      desc: "Enterprise platform streamlining candidate sourcing, assessment scoring, onboarding workflows, and workforce telemetry analytics.",
      logo: "/assets/Home-page/our-products/logo/humanex.png",
      image: "/assets/Home-page/our-products/humanex.png"
    },
    {
      name: "Brio",
      tagline: "AI-Powered Marketing & Content Platform",
      desc: "Unified analytics solution providing predictive attribution models, intelligent asset scheduling, and automated copy generators.",
      logo: "/assets/Home-page/our-products/logo/brio.png",
      image: "/assets/Home-page/our-products/brio.png"
    },
    {
      name: "SafeSign",
      tagline: "Electronic Signature & Digital Trust Platform",
      desc: "Cryptographically secured document e-signature software providing tamper-proof audit trails and compliance reports.",
      logo: "/assets/Home-page/our-products/logo/safesign.png",
      image: "/assets/Home-page/our-products/safesign.png"
    },
    {
      name: "CareSuite",
      tagline: "Healthcare Operations Management Platform",
      desc: "HIPAA-compliant medical workflow suite coordinating patient consultation queues, video consult rooms, and secure charts.",
      logo: "/assets/Home-page/our-products/logo/Caresuite.png",
      image: "/assets/Home-page/our-products/caresuite.png"
    },
    {
      name: "Homela",
      tagline: "Property & Accommodation Management Platform",
      desc: "PropTech workspace connecting tenants, managers, and service groups, automating ticket tracking and payment updates.",
      logo: "/assets/Home-page/our-products/logo/homela.png",
      image: "/assets/Home-page/our-products/homela.png"
    },
    {
      name: "Campix",
      tagline: "Campaign & Marketing Automation Platform",
      desc: "Omnichannel campaigns manager tracking impression goals, user acquisitions paths, and conversion budgets on one canvas.",
      logo: "/assets/Home-page/our-products/logo/Campix.png",
      image: "/assets/Home-page/our-products/campix.png"
    }
  ];

  return (
    <section id="showcase" className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-rose-650/[0.02] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            CORE IP CATALOG
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Featured Products <span className="text-rose-500">Showcase</span>
          </h2>
          <p className="text-zinc-400 text-sm font-semibold">
            Proprietary SaaS platforms and digital products engineered by Devopstrio for rapid deployment.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod) => (
            <div
              key={prod.name}
              className="bg-zinc-950/60 border border-white/[0.04] hover:border-rose-500/35 rounded-3xl p-6 transition-all duration-500 relative group overflow-hidden flex flex-col justify-between h-full hover:shadow-[0_12px_40px_rgba(244,63,94,0.06)]"
            >
              {/* Corner Ambient Mesh */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-rose-600/[0.03] blur-[40px] rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-100" />
              
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.04]">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center overflow-hidden transition-all duration-300 relative group-hover:bg-white/[0.04] group-hover:border-white/[0.1]">
                    <div className="relative w-6 h-6">
                      <Image
                        src={prod.logo}
                        alt={`${prod.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <Link href={`/contact?product=${encodeURIComponent(prod.name)}`}>
                    <ArrowUpRight size={14} className="text-zinc-500 hover:text-rose-500 transition-colors cursor-pointer" />
                  </Link>
                </div>

                {/* Title & Description */}
                <h3 className="text-base font-bold text-white uppercase tracking-wider mb-1 mt-1 group-hover:text-rose-400 transition-colors">
                  {prod.name}
                </h3>
                <span className="block text-xs font-semibold text-rose-500 mb-3">
                  {prod.tagline}
                </span>
                <p className="text-[11px] text-zinc-400 font-semibold leading-relaxed mb-6">
                  {prod.desc}
                </p>

                {/* Image Wrapper */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.03] group-hover:border-rose-500/15 bg-zinc-900/40 transition-all duration-500">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
