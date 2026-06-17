"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { insightsApi } from "@/lib/insightsApi";

interface NavCard {
  number: string;
  title: string;
  description: string;
  slug: string;
  image: string;
  accentColor: string;
  tag: string;
}

const STATIC_METADATA: Record<string, {
  description: string;
  image: string;
  accentColor: string;
  tag: string;
}> = {
  "blogs": {
    description: "Thought leadership, industry insights, and strategic perspectives on global tech and cloud engineering.",
    image: "/assets/Industries-page/industriescard/Banking and finance.png",
    accentColor: "#f97316",
    tag: "EDITORIAL"
  },
  "case-studies": {
    description: "Real-world success stories, digital transformation journeys, and metric-driven talent acquisition solutions.",
    image: "/assets/Industries-page/industriescard/Healthcare & Life Sciences.png",
    accentColor: "#3b82f6",
    tag: "CASE STUDY"
  },
  "awards": {
    description: "Celebrating our team's recognition, benchmark excellence, and engineering milestones.",
    image: "/assets/Industries-page/industriescard/Manufacturing.png",
    accentColor: "#a855f7",
    tag: "AWARDS"
  },
  "events": {
    description: "Upcoming webinars, leadership roundtables, and international staffing conferences by Devopstrio.",
    image: "/assets/Industries-page/industriescard/Media & Entertainment.png",
    accentColor: "#f43f5e",
    tag: "EVENTS"
  },
  "impact-metrics": {
    description: "Quantitative analysis, scalability benchmarks, cost-optimization metrics, and measurable business value.",
    image: "/assets/Industries-page/industriescard/Telecommunications.png",
    accentColor: "#06b6d4",
    tag: "METRICS"
  },
  "team-culture": {
    description: "Discover the collaborative, inclusive, and high-performance culture that drives Devopstrio.",
    image: "/assets/Industries-page/industriescard/Government & Public Sector.png",
    accentColor: "#10b981",
    tag: "CULTURE"
  },
  "celebrations": {
    description: "Behind-the-scenes looks at our team celebrations, social impact, and core value expressions.",
    image: "/assets/Industries-page/industriescard/Retail & E-Commerce.png",
    accentColor: "#ec4899",
    tag: "CULTURE"
  },
  "white-papers": {
    description: "In-depth research papers, architectural blueprints, and compliance frameworks by senior engineers.",
    image: "/assets/Industries-page/industriescard/Education.png",
    accentColor: "#6366f1",
    tag: "RESEARCH"
  },
  "clients": {
    description: "Stories of collaboration, digital transformation journeys, and how we empower our clients.",
    image: "/assets/Home-page/industries/Financial-Services.png",
    accentColor: "#f97316",
    tag: "CLIENTS"
  }
};

const FALLBACK_IMAGES = [
  "/assets/Industries-page/industriescard/Banking and finance.png",
  "/assets/Industries-page/industriescard/Healthcare & Life Sciences.png",
  "/assets/Industries-page/industriescard/Manufacturing.png",
  "/assets/Industries-page/industriescard/Retail & E-Commerce.png",
];
const FALLBACK_COLORS = ["#f97316", "#3b82f6", "#a855f7", "#f43f5e", "#06b6d4", "#10b981"];

export function InsightsNavigationCards() {
  const [categories, setCategories] = useState<NavCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      try {
        setLoading(true);
        const allPosts = await insightsApi.getAllPosts(100);
        const uniqueCatsMap = new Map<string, { name: string; slug: string }>();
        allPosts.forEach((post) => {
          if (post.category?.slug) {
            uniqueCatsMap.set(post.category.slug.toLowerCase(), {
              name: post.category.name,
              slug: post.category.slug,
            });
          }
        });

        const list = Array.from(uniqueCatsMap.values());
        const mappedList: NavCard[] = list.map((cat, idx) => {
          const staticMatch = STATIC_METADATA[cat.slug.toLowerCase()];
          return {
            number: String(idx + 1).padStart(2, "0"),
            title: cat.name,
            description: staticMatch?.description || `Explore our publications and architectural design blueprints under ${cat.name}.`,
            slug: cat.slug,
            image: staticMatch?.image || FALLBACK_IMAGES[idx % FALLBACK_IMAGES.length],
            accentColor: staticMatch?.accentColor || FALLBACK_COLORS[idx % FALLBACK_COLORS.length],
            tag: staticMatch?.tag || "INSIGHTS"
          };
        });

        setCategories(mappedList);
      } catch (err) {
        console.error("Failed to load categories:", err);
      } finally {
        setLoading(false);
      }
    }
    loadCategories();
  }, []);

  return (
    <section className="bg-black text-white py-24 border-t border-zinc-900 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.04),transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 relative z-10">

        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              BROWSE MORE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              Explore Other <span className="text-rose-500">Sectors & Channels</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Navigate directly to strategic perspectives curated specifically for adjacent organizational verticals.
            </p>
          </div>
        </Reveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {loading ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="rounded-[20px] overflow-hidden bg-zinc-950/60 border border-white/5 animate-pulse"
              >
                <div className="h-44 bg-zinc-900" />
                <div className="p-5 space-y-3">
                  <div className="w-16 h-3 bg-zinc-800 rounded" />
                  <div className="w-32 h-5 bg-zinc-800 rounded" />
                  <div className="w-full h-3 bg-zinc-850 rounded" />
                  <div className="w-4/5 h-3 bg-zinc-850 rounded" />
                </div>
              </div>
            ))
          ) : categories.length === 0 ? (
            <div className="col-span-full py-10 text-center text-zinc-500 font-mono text-xs uppercase tracking-wider">
              No categories found.
            </div>
          ) : (
            categories.map((item, idx) => (
              <Reveal key={item.slug} delay={idx * 0.04}>
                <Link
                  href={`/insights/${item.slug}`}
                  className="group relative flex flex-col rounded-[20px] overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(0,0,0,0.6)] bg-zinc-950"
                  style={{ "--accent": item.accentColor } as React.CSSProperties}
                >
                  {/* Cover Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                    {/* Accent color top line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-80"
                      style={{ background: item.accentColor }}
                    />
                    {/* Tag badge top-right */}
                    <span
                      className="absolute top-3 right-3 text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full backdrop-blur-md border"
                      style={{
                        color: item.accentColor,
                        borderColor: `${item.accentColor}40`,
                        background: `${item.accentColor}15`,
                      }}
                    >
                      {item.tag}
                    </span>
                    {/* Number badge bottom-left */}
                    <span className="absolute bottom-3 left-4 font-mono text-[10px] font-bold text-white/40">
                      / {item.number}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-rose-400 transition-colors duration-250">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-zinc-400 leading-relaxed font-light line-clamp-3 flex-1">
                      {item.description}
                    </p>

                    {/* Footer CTA row */}
                    <div
                      className="flex items-center justify-between mt-4 pt-3 border-t border-white/5 text-[10px] font-bold uppercase tracking-wider transition-colors duration-250"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      <span className="group-hover:text-white transition-colors">Explore Section</span>
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center border border-white/10 group-hover:border-rose-500/60 group-hover:bg-rose-500/10 transition-all duration-300"
                      >
                        <ArrowUpRight size={11} className="group-hover:text-rose-400 transition-colors" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
