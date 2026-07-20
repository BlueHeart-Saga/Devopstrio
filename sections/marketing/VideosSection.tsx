"use client";

import React from "react";
import { Video, Sparkles } from "lucide-react";
import ChromaGrid, { ChromaItem } from "@/components/ui/ChromaGrid";

export function VideosSection({
  videos,
  getTypeBadge,
  onPreview,
}: {
  videos: any[];
  getTypeBadge: (type: string) => React.ReactNode;
  onPreview: (item: any) => void;
}) {
  const chromaItems: ChromaItem[] = videos.map((item, idx) => ({
    image: item.image || `/assets/common/09ff7846bc8c9998745688779c09f88d 1.png`,
    title: item.title,
    subtitle: item.description || "Product walkthroughs, webinars, and technical demos.",
    handle: item.size || "HD Video",
    location: item.updated ? `Updated ${item.updated}` : "Devopstrio Media",
    borderColor: idx % 2 === 0 ? "#f43f5e" : "#e11d48",
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
    <section id="videos-webinars" className="scroll-mt-36 space-y-6">
      
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <Video className="w-6 h-6 text-rose-500" />
            Videos & Technical Webinars
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Product walkthroughs, webinars, technical demos, and executive keynotes with spotlight reveal. Click any video to play.
          </p>
        </div>
      </div>

      {/* Unified ChromaGrid Showcase Container */}
      <div className="relative w-full rounded-3xl p-6 bg-zinc-950/80 border border-rose-500/20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        
        <div className="flex items-center gap-2 text-xs font-mono text-rose-400 bg-black/60 px-3 py-1 rounded-full border border-rose-500/30 w-fit mb-6 backdrop-blur-md z-10 relative">
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          <span>ChromaGrid Spotlight &bull; Showing {displayItems.length} Video Demos &bull; Click to Watch</span>
        </div>

        <ChromaGrid
          items={displayItems}
          radius={320}
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
