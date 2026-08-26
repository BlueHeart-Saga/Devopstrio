"use client";

import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "Humanex",
    industry: "HRTech · People Ops",
    href: "/ecosystem/platforms-solutions/saas-platforms/humanex",
    logo: "/webp/assets/Home-page/our-products/logo/humanex.webp",
  },
  {
    name: "Homela",
    industry: "PropTech · Real Estate",
    href: "/ecosystem/platforms-solutions/saas-platforms/homela",
    logo: "/webp/assets/Home-page/our-products/logo/homela.webp",
  },
  {
    name: "Brio",
    industry: "FinTech · Payments",
    href: "/ecosystem/platforms-solutions/saas-platforms/brio",
    logo: "/webp/assets/Home-page/our-products/logo/brio.webp",
  },
  {
    name: "Safesign",
    industry: "LegalTech · eSign",
    href: "/ecosystem/platforms-solutions/saas-platforms/safesign",
    logo: "/webp/assets/Home-page/our-products/logo/safesign.webp",
  },
  {
    name: "Campix",
    industry: "MarTech · Campaigns",
    href: "/ecosystem/platforms-solutions/saas-platforms/campix",
    logo: "/webp/assets/Home-page/our-products/logo/Campix.webp",
  },
  {
    name: "Caresuite",
    industry: "HealthTech · Clinical",
    href: "/ecosystem/platforms-solutions/saas-platforms/caresuite",
    logo: "/webp/assets/Home-page/our-products/logo/Caresuite.webp",
  },
  {
    name: "Justivon",
    industry: "Legal & Enterprise",
    href: "/ecosystem/platforms-solutions/saas-platforms/justivon",
    logo: "/webp/assets/Home-page/our-products/logo/Justivon.webp",
  },
  {
    name: "Prestivo",
    industry: "Lending & Finance",
    href: "/ecosystem/platforms-solutions/saas-platforms/prestivo",
    logo: "/webp/assets/Home-page/our-products/logo/Prestivo.webp",
  },
];

export function PlatformPortfolio() {
  return (
    <section id="portfolio" className="w-full py-24 bg-black text-white border-b border-zinc-900/60 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 xl:px-8 relative z-10">
        <Reveal className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-2xl font-semibold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            PRODUCT PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            Proprietary SaaS <span className="text-rose-500">Platforms</span>
          </h2>
        </Reveal>

        {/* Borderless Cards Grid with Bright Original Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((prod, idx) => (
            <Reveal key={prod.name} delay={idx * 0.04} className="h-full">
              <Link
                href={prod.href}
                className="group relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-zinc-950/40 hover:bg-zinc-900/60 transition-all duration-500 hover:-translate-y-2 cursor-pointer backdrop-blur-md overflow-hidden min-h-[220px] text-center border-0 shadow-lg"
              >
                {/* Top Right Arrow Icon */}
                <ArrowUpRight
                  size={18}
                  className="absolute top-4 right-4 text-zinc-600 group-hover:text-rose-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                />

                {/* Big Clean Icon Image Container (No circle border, No box bg, Original Bright Color Logo) */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center p-2 mb-4 transition-transform duration-500 group-hover:scale-110">
                  <img
                    src={prod.logo}
                    alt={prod.name}
                    className="w-full h-full object-contain drop-shadow-lg transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Product Name */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white group-hover:text-rose-400 transition-colors">
                  {prod.name}
                </h3>

                {/* Industry Subtitle */}
                <span className="text-sm sm:text-base font-semibold text-zinc-300 mt-1">
                  {prod.industry}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlatformPortfolio;
