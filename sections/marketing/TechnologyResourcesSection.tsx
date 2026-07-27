"use client";

import React from "react";
import Link from "next/link";
import { Cpu, ChevronRight, Sparkles } from "lucide-react";
import ChromaGrid, { ChromaItem } from "@/components/ui/ChromaGrid";

export function TechnologyResourcesSection({
  techResources,
  getTypeBadge,
  onPreview,
  onDownload,
}: {
  techResources: any[];
  getTypeBadge: (type: string) => React.ReactNode;
  onPreview: (item: any) => void;
  onDownload: (item: any, e?: React.MouseEvent) => void;
}) {
  const chromaItems: ChromaItem[] = techResources.map((item, idx) => ({
    image: item.image || `/assets/common/09ff7846bc8c9998745688779c09f88d 1.png`,
    title: item.title,
    subtitle: item.description || "Reference architectures, deployment blueprints & playbooks.",
    handle: item.size || "Tech Spec",
    location: item.type ? `${item.type} Blueprint` : "Engineering Spec",
    borderColor: idx % 3 === 0 ? "#f43f5e" : idx % 3 === 1 ? "#e11d48" : "#be123c",
    gradient: idx % 2 === 0
      ? "linear-gradient(145deg, rgba(244,63,94,0.35), #09090b)"
      : "linear-gradient(180deg, rgba(225,29,72,0.35), #09090b)",
    rawItem: item,
  }));

  let displayItems = [...chromaItems];
  if (displayItems.length > 0 && displayItems.length < 6) {
    while (displayItems.length < 6) {
      displayItems.push(...chromaItems);
    }
    displayItems = displayItems.slice(0, 6);
  }

  return (
    <section id="technology-resources" className="scroll-mt-36 space-y-6">

      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Cpu className="w-6 h-6 text-rose-500" />
            Technology Blueprints & Stack Specifications
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Reference architectures, cloud deployment blueprints, and engineering playbooks with spotlight reveal. Click to preview.
          </p>
        </div>
        <Link
          href="/marketing/technology"
          className="text-xs font-semibold text-rose-500 hover:text-rose-400 flex items-center gap-1"
        >
          Explore Blueprints <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* ChromaGrid Spotlight Reveal Interactive Container */}
      <div className="relative w-full rounded-3xl p-6 bg-zinc-950/80 border border-rose-500/20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">

        <div className="flex items-center gap-2 text-xs font-mono text-rose-400 bg-black/60 px-3 py-1 rounded-full border border-rose-500/30 w-fit mb-6 backdrop-blur-md z-10 relative">
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          <span>ChromaGrid Spotlight Reveal &bull; Showing {displayItems.length} Enterprise Blueprints</span>
        </div>

        <ChromaGrid
          items={displayItems}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
          onCardClick={(item) => {
            if (item.rawItem) {
              onPreview(item.rawItem);
            }
          }}
        />
      </div>

    </section>
  );
}
