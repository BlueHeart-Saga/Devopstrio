"use client";

import React, { useState, useEffect } from "react";
import { insightsApi, TransformedPost } from "@/lib/insightsApi";
import { Reveal } from "@/components/ui/Reveal";

import { InsightsHero } from "@/sections/insights/InsightsHero";
import { FeaturedHighlights } from "@/sections/insights/FeaturedHighlights";
import { InsightsJourney } from "@/sections/insights/InsightsJourney";
import { InsightsLibrary } from "@/sections/insights/InsightsLibrary";

export default function InsightsLandingPage() {
  const [posts, setPosts] = useState<TransformedPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Load initial data
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const allPosts = await insightsApi.getAllPosts(100);
        setPosts(allPosts || []);
      } catch (err) {
        console.error("Failed to load insights publications:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      
      {/* Cinematic Hero Title Header */}
      <section className="pt-16 pb-4 md:pb-8 text-center relative bg-[#030303]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4 text-white">
            Insights & <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Publications</span>
          </h1>
          <p className="text-zinc-400 font-medium max-w-xl mx-auto">
            Deep-dives, post-mortems, and cloud-native blueprints written by SRE and platform specialists.
          </p>
        </Reveal>
      </section>

      {/* Structured Insights Sections */}
      <InsightsHero />
      <FeaturedHighlights posts={posts} />
      <InsightsJourney />
      <InsightsLibrary posts={posts} loading={loading} />
      
    </main>
  );
}
