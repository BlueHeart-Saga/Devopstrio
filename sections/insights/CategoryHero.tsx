"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface CategoryHeroProps {
  categoryName: string;
  categorySlug: string;
}

export function CategoryHero({ categoryName, categorySlug }: CategoryHeroProps) {
  return (
    <section className="relative w-full min-h-[40vh] flex items-center bg-[#030303] text-white pt-20 pb-16 lg:pt-20 lg:pb-16 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.04),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] aspect-square bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 relative z-10 text-left">
        {/* Back Navigation Link */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-rose-500 transition-colors mb-8 group"
        >
          <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> BACK TO INSIGHTS HUB
        </Link>

        <Reveal>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2.5px] w-6 bg-gradient-to-r from-red-600 to-rose-600"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
              Category Archive
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] text-white mb-4">
            Category: <span className="text-[#E11D48]">{categoryName}</span>
          </h1>
          <p className="text-zinc-500 text-xs sm:text-sm font-semibold">
            Viewing all publications grouped under &apos;{categorySlug}&apos;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
