"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ecosystemDomains } from "@/data/ecosystem";

const bgWaves: Record<string, string> = {
  "partnerships": "/assets/ecosystem/bg-transformation.png",
  "innovation-labs": "/assets/ecosystem/bg-ai.png",
  "platforms-solutions": "/assets/ecosystem/bg-software.png",
  "technology-stack": "/assets/ecosystem/bg-devops.png",
  "global-delivery": "/assets/ecosystem/bg-managed.png",
  "engineering-excellence": "/assets/ecosystem/bg-testing.png",
  "accelerators-frameworks": "/assets/ecosystem/bg-cloud.png",
  "community-talent-network": "/assets/ecosystem/bg-case-study.png",
};

export function EcosystemPillars() {
  const domainsList = Object.values(ecosystemDomains);
  const [activeTab, setActiveTab] = useState(domainsList[0]?.slug || "partnerships");

  // Auto cycle tabs every 6 seconds
  useEffect(() => {
    if (domainsList.length === 0) return;
    const timer = setTimeout(() => {
      const currentIndex = domainsList.findIndex((dom) => dom.slug === activeTab);
      const nextIndex = (currentIndex + 1) % domainsList.length;
      setActiveTab(domainsList[nextIndex].slug);
    }, 6000);

    return () => clearTimeout(timer);
  }, [activeTab, domainsList]);

  // Smooth scroll active tab pill into view horizontally without page scroll
  useEffect(() => {
    const container = document.getElementById("ecosystem-tab-pills-container");
    const activeEl = document.getElementById(`ecosystem-tab-pill-${activeTab}`);
    if (container && activeEl) {
      const containerRect = container.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      const relativeLeft = activeRect.left - containerRect.left + container.scrollLeft;
      const targetScrollLeft = relativeLeft - (containerRect.width / 2) + (activeRect.width / 2);

      container.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  const selectedDomain = domainsList.find((dom) => dom.slug === activeTab) || domainsList[0];

  if (!selectedDomain) return null;

  return (
    <section id="pillars" className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* Header Section */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ECOSYSTEM PILLARS
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Core <span className="text-rose-500">ecosystem domains</span>
            </h2>
            <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed">
              Explore co-engineered software platforms, active innovation labs, and joint technology alliance networks.
            </p>
          </div>
        </Reveal>

        {/* Tab Pills Selector */}
        <div id="ecosystem-tab-pills-container" className="flex items-center gap-2 mb-12 pb-4 overflow-x-auto scrollbar-hide scroll-smooth -mx-6 px-6 md:mx-0 md:px-0 border-b border-zinc-900/60">
          {domainsList.map((dom) => (
            <button
              key={dom.slug}
              id={`ecosystem-tab-pill-${dom.slug}`}
              onClick={() => setActiveTab(dom.slug)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 border ${activeTab === dom.slug
                ? "bg-rose-600 border-rose-600 text-white shadow-[0_4px_20px_rgba(225,29,72,0.35)]"
                : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900/50 hover:border-zinc-800"
                }`}
            >
              {dom.badge || dom.title}
            </button>
          ))}
        </div>

        {/* Pillars Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">

          {/* Left Tall Card (Col 1) */}
          <Reveal className="lg:col-span-1 h-full">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-rose-500/30 p-8 flex flex-col justify-between h-full min-h-[480px] bg-gradient-to-br from-zinc-950/90 via-[#0a0506]/90 to-[#0f0709]/90 group/tall backdrop-blur-md transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {/* Internal decorative glowing meshes */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />

              {/* Dynamic Abstract Wave Backgrounds with Crossfade */}
              {domainsList.map((dom) => (
                <img
                  key={dom.slug}
                  src={bgWaves[dom.slug]}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none transition-opacity duration-700 ease-in-out ${activeTab === dom.slug ? "opacity-35" : "opacity-0"}`}
                />
              ))}

              {/* Card top details */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight mb-4 group-hover/tall:text-rose-400 transition-colors">
                  Explore {selectedDomain.title}
                </h3>
                <p className="text-zinc-100 text-xs font-semibold leading-relaxed">
                  {selectedDomain.subtitle}
                </p>
              </div>

              {/* Card bottom button */}
              <div className="relative z-10 mt-8">
                <Link
                  href={`/ecosystem/${selectedDomain.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 transition-all duration-300 shadow-[0_4px_15px_rgba(225,29,72,0.25)] hover:shadow-[0_4px_25px_rgba(225,29,72,0.45)] w-fit group/btn"
                >
                  Explore Pillar{" "}
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right Capabilities Grid (Col 2-4) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedDomain.subpages.slice(0, 6).map((subpage, idx) => (
              <Reveal key={subpage.slug} delay={idx * 0.04} className="h-full">
                <div className="group/card flex flex-col justify-between bg-zinc-950/30 border border-white/5 hover:border-rose-500/20 hover:bg-zinc-950/60 rounded-2xl p-6 transition-all duration-300 min-h-[220px] h-full relative overflow-hidden backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">

                  {/* Subtle color highlight glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Text details */}
                  <div>
                    <h4 className="text-base font-semibold text-rose-500 group-hover:text-rose-400 transition-colors mb-2">
                      {subpage.title}
                    </h4>
                    <p className="text-[12px] text-zinc-200 font-semibold leading-relaxed mb-6">
                      {subpage.description}
                    </p>
                  </div>

                  {/* Link action details */}
                  <Link
                    href={`/ecosystem/${selectedDomain.slug}/${subpage.slug}`}
                    className="inline-flex items-center gap-2.5 group/link mt-auto w-fit"
                  >
                    <span className="w-7 h-7 rounded-full bg-rose-600/10 group-hover/link:bg-rose-600 text-rose-500 group-hover/link:text-white flex items-center justify-center transition-all duration-300">
                      <ChevronRight
                        size={12}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                      />
                    </span>
                    <span className="text-[12px] font-semibold text-zinc-400 group-hover/link:text-zinc-200 transition-colors">
                      Explore solution
                    </span>
                  </Link>

                </div>
              </Reveal>
            ))}
          </div>

        </div>

        {/* Full Size Integrated Ecosystem Image without border, blending into the dark theme */}
        <Reveal delay={0.2} className="mt-12 w-full">
          <div className="relative w-full overflow-hidden rounded-3xl bg-[#030303] flex items-center justify-center">
            {/* Blending gradients to merge the image edges smoothly into the background theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent pointer-events-none z-10" />
            <img
              src="/assets/ecosystem/domains/ecosysytem. 1.png"
              alt="Ecosystem Alliance Map"
              className="w-full h-auto object-contain select-none pointer-events-none z-0"
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
