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
    <section className="relative py-12 px-6">
      <div className="max-w-site mx-auto relative z-10 text-left">
        {/* Back Navigation Link */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-555 hover:text-rose-500 transition-colors mb-8 group"
        >
          <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> BACK TO INSIGHTS HUB
        </Link>

        <Reveal>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#ce2453] to-[#e79e57]"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase bg-gradient-to-r from-[#ce2453] to-[#e79e57] bg-clip-text text-transparent">
              Category Archive
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
            Category: <span className="font-semibold text-rose-500">{categoryName}</span>
          </h1>
          <p className="text-zinc-550 text-xs font-mono mb-12">
            Viewing all publications grouped under &apos;{categorySlug}&apos;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
