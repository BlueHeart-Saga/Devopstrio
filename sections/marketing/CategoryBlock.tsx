"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MarketingResourceItem, SectionConfig, SECTIONS, INITIAL_LIMIT } from "./config";
import { MarketingCard } from "./MarketingCard";
import { DownloadCard } from "./DownloadCard";
import { LatestCard } from "./LatestCard";

const GRID = "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3";
const labelFor = (category: string) =>
  SECTIONS.find((s) => s.category === category && !s.derived)?.navLabel ?? category;

export function CategoryBlock({
  section,
  items,
  forceExpand,
  onDownload,
  onPreview,
  onLocate,
  revealId,
  highlightId,
}: {
  section: SectionConfig;
  items: MarketingResourceItem[];
  forceExpand: boolean;
  onDownload: (i: MarketingResourceItem) => void;
  onPreview?: (i: MarketingResourceItem) => void;
  onLocate?: (i: MarketingResourceItem) => void;
  revealId?: string | null;
  highlightId?: string | null;
}) {
  const Icon = section.icon;
  const layout = section.layout ?? "default";
  const isShowcase = layout !== "default";

  const isRevealed = !!revealId && items.some((i) => i.id === revealId);
  const visible = forceExpand || isRevealed ? items : items.slice(0, INITIAL_LIMIT);
  const hidden = items.length - INITIAL_LIMIT;
  const showExplore = section.exploreLink && (!isShowcase || hidden > 0);

  return (
    <section id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-36 border-b border-zinc-900/80 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-1.5 flex items-center gap-2.5">
              <div className="rounded-lg border border-rose-500/20 bg-rose-500/10 p-2 text-rose-500">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h2 id={`${section.id}-title`} className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {section.title}
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">{section.subtitle}</p>
          </div>
          {showExplore && (
            <Link href={section.exploreLink!} className="group inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-rose-400 transition-colors hover:text-rose-300">
              {section.exploreLabel || "Explore all"}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          )}
        </div>

        <div className={GRID}>
          {visible.map((item) =>
            layout === "downloads" ? (
              <DownloadCard
                key={item.id}
                item={item}
                onDownload={onDownload}
                onPreview={onPreview || (() => {})}
              />
            ) : layout === "latest" ? (
              <LatestCard
                key={item.id}
                item={item}
                categoryLabel={labelFor(item.category)}
                onLocate={onLocate || (() => {})}
              />
            ) : (
              <MarketingCard
                key={item.id}
                item={item}
                onDownload={onDownload}
                onPreview={onPreview}
                anchorId={`${section.id}-card-${item.id}`}
                highlighted={highlightId === item.id}
                showPreview={true}
              />
            )
          )}
        </div>

        {hidden > 0 && section.exploreLink && !forceExpand && (
          <div className="mt-8 flex justify-center">
            <Link
              href={section.exploreLink}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-6 py-2.5 text-xs font-semibold text-zinc-300 transition hover:border-rose-500/50 hover:text-white"
            >
              Show {hidden} more <ChevronRight className="h-4 w-4 text-rose-400" aria-hidden />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
