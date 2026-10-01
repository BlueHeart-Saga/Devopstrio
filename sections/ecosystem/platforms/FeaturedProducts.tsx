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
  link: string;
}

export function FeaturedProducts() {
  const products: ProductCard[] = [
    {
      name: "Humanex",
      tagline: "Recruitment & Workforce Management Platform",
      desc: "Enterprise platform streamlining candidate sourcing, assessment scoring, onboarding workflows, and workforce telemetry analytics.",
      logo: "/webp/assets/Home-page/our-products/logo/humanex.webp",
      image: "/webp/assets/Home-page/our-products/humanex.webp",
      link: "/ecosystem/platforms-solutions/saas-platforms/humanex"
    },
    {
      name: "Brio",
      tagline: "AI-Powered Marketing & Content Platform",
      desc: "Unified analytics solution providing predictive attribution models, intelligent asset scheduling, and automated copy generators.",
      logo: "/webp/assets/Home-page/our-products/logo/brio.webp",
      image: "/webp/assets/Home-page/our-products/brio.webp",
      link: "/ecosystem/platforms-solutions/saas-platforms/brio"
    },
    {
      name: "eSigniva",
      tagline: "Electronic Signature & Digital Trust Platform",
      desc: "Cryptographically secured document e-signature software providing tamper-proof audit trails and compliance reports.",
      logo: "/webp/assets/Home-page/our-products/logo/safesign.webp",
      image: "/webp/assets/Home-page/our-products/safesign.webp",
      link: "/ecosystem/platforms-solutions/saas-platforms/esigniva"
    },
    {
      name: "CareSuite",
      tagline: "Healthcare Operations Management Platform",
      desc: "HIPAA-compliant medical workflow suite coordinating patient consultation queues, video consult rooms, and secure charts.",
      logo: "/webp/assets/Home-page/our-products/logo/Caresuite.webp",
      image: "/webp/assets/Home-page/our-products/caresuite.webp",
      link: "/ecosystem/platforms-solutions/saas-platforms/caresuite"
    },
    {
      name: "Homela",
      tagline: "Property & Accommodation Management Platform",
      desc: "PropTech workspace connecting tenants, managers, and service groups, automating ticket tracking and payment updates.",
      logo: "/webp/assets/Home-page/our-products/logo/homela.webp",
      image: "/webp/assets/Home-page/our-products/homela.webp",
      link: "/ecosystem/platforms-solutions/saas-platforms/homela"
    },
    {
      name: "Campix",
      tagline: "Smart Campus & Institution Management Platform",
      desc: "Comprehensive campus operations ecosystem connecting students, faculty, administration, hostel, transport, and academic workflows in real time.",
      logo: "/webp/assets/Home-page/our-products/logo/Campix.webp",
      image: "/webp/assets/landingpage-campix/hero.webp",
      link: "/ecosystem/platforms-solutions/saas-platforms/campix"
    },
    {
      name: "Justivon",
      tagline: "Legal Practice & Case Intelligence Platform",
      desc: "Comprehensive legal operations platform managing case dockets, client billing, document discovery, and compliance workflows.",
      logo: "/webp/assets/Home-page/our-products/logo/Justivon.webp",
      image: "/webp/assets/Home-page/our-products/justivon.webp",
      link: "/ecosystem/platforms-solutions/saas-platforms/justivon"
    },
    {
      name: "Prestivo",
      tagline: "Financial Advisory & Wealth Intelligence Platform",
      desc: "Intelligent wealth management and portfolio analytics platform built for financial institutions, advisors, and corporate clients.",
      logo: "/webp/assets/Home-page/our-products/logo/Prestivo.webp",
      image: "/webp/assets/Home-page/our-products/prestivo.webp",
      link: "/ecosystem/platforms-solutions/saas-platforms/prestivo"
    }
  ];

  return (
    <section id="showcase" className="w-full py-24 bg-[#020202] border-b border-zinc-900/60 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-rose-650/[0.02] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 xl:px-8 relative z-10">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight mb-5 text-white">
            Featured Products <span className="text-rose-500">Showcase</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl border border-white/[0.05] bg-zinc-950/60 p-6 backdrop-blur-xl transition-all duration-500 hover:border-rose-500/20 hover:bg-zinc-900/40"
            >
              {/* Inner ambient glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                {/* Header (Logo & Link) */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center p-1 bg-zinc-900/80 border border-white/[0.05]">
                      <Image
                        src={prod.logo}
                        alt={`${prod.name} logo`}
                        fill
                        unoptimized
                        className="object-contain p-1"
                      />
                    </div>
                  </div>
                  <Link href={prod.link}>
                    <ArrowUpRight size={14} className="text-zinc-500 hover:text-rose-500 transition-colors cursor-pointer" />
                  </Link>
                </div>

                {/* Title & Description */}
                <Link href={prod.link} className="inline-block">
                  <h3 className="text-xl md:text-2xl font-semibold text-white uppercase tracking-wider mb-2 mt-1 hover:text-rose-400 group-hover:text-rose-400 transition-colors">
                    {prod.name}
                  </h3>
                </Link>

                {/* Image Wrapper */}
                <Link
                  href={prod.link}
                  className="block relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.03] group-hover:border-rose-500/15 bg-zinc-900/40 transition-all duration-500"
                >
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
