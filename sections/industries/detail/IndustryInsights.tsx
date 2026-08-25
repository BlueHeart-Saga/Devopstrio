"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { insightsApi } from "@/lib/insightsApi";

interface InsightItem {
  title: string;
  desc: string;
  link: string;
  image?: string;
}

interface IndustryInsightsProps {
  insights: InsightItem[];
}

const defaultImages = [
  "/webp/assets/Home-page/arch-design.webp",
  "/webp/assets/Home-page/arch-life.webp",
  "/webp/assets/Home-page/biz-envisioning.webp",
  "/webp/assets/Home-page/biz-life.webp",
  "/webp/assets/Home-page/rapid-prototype.webp",
  "/webp/assets/Home-page/rapid-life.webp",
  "/webp/assets/Home-page/sol-envisioning.webp",
  "/webp/assets/Home-page/sol-life.webp"
];

const defaultExtraInsights: InsightItem[] = [
  {
    title: "Kubernetes Autoscaling Under Flash Load",
    desc: "A quantitative analysis of Karpenter latency against standard cluster autoscalers during peak-hour debit request surges.",
    link: "/insights",
    image: "/webp/assets/Home-page/arch-life.webp"
  },
  {
    title: "Securing Edge API Proxies with OAuth2",
    desc: "A framework guide on implementing zero-trust border gateways and token validation brokers inside private subnet boundaries.",
    link: "/insights",
    image: "/webp/assets/Home-page/sol-life.webp"
  },
  {
    title: "Comparing GitOps CD Pull vs Push Delivery",
    desc: "A review of synchronization times, drift alert limits, and security properties of ArgoCD against standard runner push systems.",
    link: "/insights",
    image: "/webp/assets/Home-page/rapid-life.webp"
  },
  {
    title: "Optimizing PostgreSQL Concurrency Indexes",
    desc: "Configuring multi-column transaction locks and index buffers to handle high concurrent writes under strict ACID mandates.",
    link: "/insights",
    image: "/webp/assets/Home-page/biz-life.webp"
  },
  {
    title: "Architecting Microservices Service Mesh",
    desc: "Measuring the CPU overhead, network latency, and mutual TLS certificate rotation limits of Istio against Linkerd.",
    link: "/insights",
    image: "/webp/assets/Home-page/arch-design.webp"
  }
];

export function IndustryInsights({ insights }: IndustryInsightsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [backendInsights, setBackendInsights] = useState<InsightItem[]>([]);

  useEffect(() => {
    async function fetchInsights() {
      try {
        const posts = await insightsApi.getAllPosts(15);
        if (posts && posts.length > 0) {
          const mapped = posts.map(post => ({
            title: post.title,
            desc: post.excerpt || "Read more about this technology update on Devopstrio.",
            link: `/insights/${post.category.slug}/${post.id}`,
            image: post.image || undefined
          }));
          setBackendInsights(mapped);
        }
      } catch (e) {
        console.error("Failed to load backend insights:", e);
      }
    }
    fetchInsights();
  }, []);

  // Show only backend insights
  const uniqueInsights: InsightItem[] = [];
  const titlesSeen = new Set<string>();

  backendInsights.forEach(item => {
    const titleKey = item.title.toLowerCase().trim();
    if (!titlesSeen.has(titleKey)) {
      titlesSeen.add(titleKey);
      uniqueInsights.push(item);
    }
  });

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 374; // Card width (350px) + gap (24px)
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="insights" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      {/* Hide Scrollbar Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .hide-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}} />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10 text-left">

        {/* Section Header with Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans">
              Featured industry <span className="text-[#E11D48] font-semibold">research papers</span>
            </h2>
          </Reveal>

          {/* Navigation Controls */}
          <Reveal className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-full border border-white/5 bg-[#0b0b0c] hover:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-full border border-white/5 bg-[#0b0b0c] hover:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300"
            >
              <ArrowUpRight size={16} />
            </button>
          </Reveal>
        </div>

        {/* Horizontal Slider List */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 pt-4 snap-x snap-mandatory relative"
        >
          {uniqueInsights.map((ins, idx) => {
            const displayImage = ins.image || defaultImages[idx % defaultImages.length];

            return (
              <Reveal key={idx} delay={idx * 0.05} className="flex-shrink-0 snap-start">
                <Link
                  href={ins.link}
                  className="group block w-[320px] sm:w-[350px] aspect-[3/4] bg-[#0b0b0c] border border-white/10 rounded-[24px] p-6 hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-300 relative overflow-hidden cursor-pointer"
                >

                  {/* Subtle Inner Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                  <div className="flex flex-col h-full justify-between relative z-10">

                    <div>
                      {/* Double-bordered Image showcasing topic */}
                      <div className="relative w-full aspect-[16/10] rounded-[16px] border border-white/10 p-0.5 bg-zinc-950 overflow-hidden group-hover:border-rose-500/20 transition-all duration-300 mb-6">
                        <img src={displayImage}
                          alt={ins.title}
                          className="w-full h-full object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-[1.03] select-none pointer-events-none"
                        loading="lazy" />
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-semibold text-white mb-2 leading-snug group-hover:text-[#E11D48] transition-colors duration-300">
                        {ins.title}
                      </h4>
                    </div>

                    <div>
                      {/* Description */}
                      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal line-clamp-3">
                        {ins.desc}
                      </p>

                      {/* Read Article Indicator Footer */}
                      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-zinc-400 group-hover:text-white transition-colors duration-300">
                        <span className="text-xs uppercase font-semibold tracking-wider">
                          Read Article
                        </span>
                        <span className="text-xs font-semibold flex items-center gap-1">
                          Learn More <ArrowUpRight size={12} />
                        </span>
                      </div>
                    </div>

                  </div>

                </Link>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
