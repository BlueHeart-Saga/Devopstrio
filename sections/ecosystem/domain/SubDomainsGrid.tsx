"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Globe, Database, Cpu, Shield, HelpCircle, Layers, Activity, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface SubpageInfo {
  slug: string;
  title: string;
  description: string;
}

interface SubDomainsGridProps {
  title: string;
  slug: string;
  subpages: SubpageInfo[];
}

const bgWaves: Record<string, string> = {
  "partnerships": "/webp/assets/services/bg-cloud.webp",
  "innovation-labs": "/webp/assets/services/bg-ai.webp",
  "platforms-solutions": "/webp/assets/services/bg-software.webp",
  "technology-stack": "/webp/assets/services/bg-devops.webp",
  "global-delivery": "/webp/assets/services/bg-managed.webp",
  "engineering-excellence": "/webp/assets/services/bg-testing.webp",
  "accelerators-frameworks": "/webp/assets/services/bg-transformation.webp",
  "community-talent-network": "/webp/assets/services/bg-consulting.webp",
};

// Function to map subpage slugs to representative premium icons
function getIconForSubpage(slug: string) {
  const lowercaseSlug = slug.toLowerCase();
  if (
    lowercaseSlug.includes("ai") || 
    lowercaseSlug.includes("agent") || 
    lowercaseSlug.includes("learning") || 
    lowercaseSlug.includes("intel")
  ) {
    return <Cpu size={16} />;
  }
  if (
    lowercaseSlug.includes("cloud") || 
    lowercaseSlug.includes("aws") || 
    lowercaseSlug.includes("azure") || 
    lowercaseSlug.includes("gcp") || 
    lowercaseSlug.includes("google") || 
    lowercaseSlug.includes("microsoft") || 
    lowercaseSlug.includes("oracle") || 
    lowercaseSlug.includes("cisco")
  ) {
    return <Globe size={16} />;
  }
  if (
    lowercaseSlug.includes("data") || 
    lowercaseSlug.includes("lake") || 
    lowercaseSlug.includes("warehouse") || 
    lowercaseSlug.includes("stream") || 
    lowercaseSlug.includes("sap")
  ) {
    return <Database size={16} />;
  }
  if (
    lowercaseSlug.includes("security") || 
    lowercaseSlug.includes("audit") || 
    lowercaseSlug.includes("posture") || 
    lowercaseSlug.includes("secops") || 
    lowercaseSlug.includes("compliance")
  ) {
    return <Shield size={16} />;
  }
  if (
    lowercaseSlug.includes("platform") || 
    lowercaseSlug.includes("infrastructure") || 
    lowercaseSlug.includes("iac") || 
    lowercaseSlug.includes("architecture") || 
    lowercaseSlug.includes("framework")
  ) {
    return <Layers size={16} />;
  }
  if (
    lowercaseSlug.includes("support") || 
    lowercaseSlug.includes("monitoring") || 
    lowercaseSlug.includes("sre") || 
    lowercaseSlug.includes("delivery") || 
    lowercaseSlug.includes("operations")
  ) {
    return <Activity size={16} />;
  }
  return <HelpCircle size={16} />;
}

export function SubDomainsGrid({ title, slug, subpages }: SubDomainsGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(subpages.length / cardsPerPage);

  // Reset page when slug (active domain) changes
  useEffect(() => {
    setCurrentPage(1);
  }, [slug]);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const paginatedSubpages = subpages.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900/60 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-left">
        <Reveal className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            SUBPAGES & RESOURCES
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Explore <span className="text-rose-500">{title}</span> specializations
          </h2>
          <p className="text-zinc-200 text-base md:text-lg font-semibold leading-relaxed mt-2 max-w-2xl">
            Choose a specialization below to view detailed requirements, workflows, frameworks, and case studies.
          </p>
        </Reveal>

        {/* Categories Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Left Tall Card */}
          <Reveal className="lg:col-span-1 h-full">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-rose-500/30 p-8 flex flex-col justify-between h-full min-h-[480px] bg-gradient-to-br from-zinc-950/90 via-[#0a0506]/90 to-[#0f0709]/90 group/tall backdrop-blur-md transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              {/* Internal decorative glowing meshes */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover/tall:scale-110" />
              
              <img src={bgWaves[slug] || "/webp/assets/services/bg-ai.webp"}
                alt=""
                className="absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none opacity-35 transition-opacity duration-700 ease-in-out"
              loading="lazy" />
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight mb-4 group-hover/tall:text-rose-400 transition-colors">
                  Accelerate integration with {title}
                </h3>
                <p className="text-zinc-100 text-xs font-semibold leading-relaxed">
                  Unlock specialized capabilities, custom tools, and frameworks designed to run compliance-first workloads across the global ecosystem.
                </p>
              </div>
              
              <div className="relative z-10 mt-8">
                <Link
                  href={`/ecosystem/${slug}`}
                  className="gap-2 w-fit inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5"
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

          {/* Right Capabilities Grid */}
          <div className="lg:col-span-3 flex flex-col justify-between min-h-[480px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedSubpages.map((sub, idx) => (
                <Reveal key={sub.slug} delay={idx * 0.04} className="h-full">
                  <Link
                    href={`/ecosystem/${slug}/${sub.slug}`}
                    className="group/card flex flex-col justify-between h-full bg-zinc-950/30 border border-white/5 hover:border-rose-500/20 hover:bg-zinc-950/60 rounded-2xl p-6 transition-all duration-300 min-h-[220px] relative overflow-hidden backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] cursor-pointer"
                  >
                    {/* Subtle color highlight glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 via-rose-600/0 to-rose-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div>
                      <div className="flex items-center justify-between mb-5 border-b border-zinc-900/60 pb-4">
                        <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-rose-500 group-hover/card:bg-rose-950/20 transition-all duration-300">
                          {getIconForSubpage(sub.slug)}
                        </div>
                      </div>

                      <h3 className="text-base font-semibold text-rose-500 group-hover/card:text-rose-400 transition-colors mb-2">
                        {sub.title}
                      </h3>

                      <p className="text-[12px] text-zinc-200 font-semibold leading-relaxed mb-6">
                        {sub.description}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2.5 group/link mt-auto w-fit">
                      <span className="w-7 h-7 rounded-full bg-rose-600/10 group-hover/link:bg-rose-600 text-rose-500 group-hover/link:text-white flex items-center justify-center transition-all duration-300">
                        <ChevronRight
                          size={12}
                          className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                        />
                      </span>
                      <span className="text-[12px] font-semibold text-zinc-400 group-hover/link:text-zinc-200 transition-colors">
                        Read Documentation
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8 w-full">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-8 h-8 rounded-xl text-xs font-semibold border transition-all duration-300 ${
                      currentPage === i + 1
                        ? "bg-rose-600 border-rose-600 text-white shadow-[0_4px_15px_rgba(225,29,72,0.3)]"
                        : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-900/50 hover:border-zinc-800"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase border border-zinc-850 hover:border-zinc-750 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  Next
                </button>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
