"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { insightsApi, TransformedPost } from "@/lib/insightsApi";

interface LeadershipInsight {
  id: string;
  slug: string;
  category: string;
  categorySlug: string;
  title: string;
  image: string;
}

const defaultLeadershipInsights: LeadershipInsight[] = [
  {
    id: "lead-insight-1",
    slug: "complexity-tax-multi-cloud-finops",
    category: "Cloud & FinOps",
    categorySlug: "blogs",
    title: "The Complexity Tax: Navigating Multi-Cloud Architecture & FinOps",
    image: "/webp/assets/Home-page/arch-design.webp",
  },
  {
    id: "lead-insight-2",
    slug: "energy-risk-sustainability-infrastructure",
    category: "Sustainability & Risk",
    categorySlug: "white-paper",
    title: "Energy, Risk and Competitiveness: The Real Sustainability Conversation",
    image: "/webp/assets/Home-page/biz-life.webp",
  },
  {
    id: "lead-insight-3",
    slug: "hidden-spend-saas-cloud-visibility",
    category: "Cost Governance",
    categorySlug: "case-studies",
    title: "The Spend You Can't See: Uncovering Hidden SaaS and Multi-Cloud Overhead",
    image: "/webp/assets/Home-page/sol-life.webp",
  },
  {
    id: "lead-insight-4",
    slug: "adoption-assurance-organizational-change",
    category: "Transformation",
    categorySlug: "blogs",
    title: "Adoption Insurance: How to Ensure Organizational Platform Changes Actually Stick",
    image: "/webp/assets/Home-page/rapid-life.webp",
  },
  {
    id: "lead-insight-5",
    slug: "external-procurement-credibility-framework",
    category: "Enterprise Strategy",
    categorySlug: "white-paper",
    title: "Why External Challenge Can Strengthen Procurement & Delivery Credibility",
    image: "/webp/assets/Home-page/arch-life.webp",
  },
  {
    id: "lead-insight-6",
    slug: "rapid-strategy-stress-test-go-to-market",
    category: "Business Agility",
    categorySlug: "case-studies",
    title: "Case Study: A Rapid Strategy Stress Test to Accelerate a Go-to-Market Engine",
    image: "/webp/assets/Home-page/sol-envisioning.webp",
  },
  {
    id: "lead-insight-7",
    slug: "digital-transformation-people-over-tech",
    category: "Leadership & Culture",
    categorySlug: "blogs",
    title: "Your Digital Transformation Isn't Failing Because of the Tech — It's Culture",
    image: "/webp/assets/Home-page/rapid-prototype.webp",
  },
  {
    id: "lead-insight-8",
    slug: "5-ai-use-cases-90-days",
    category: "AI & Cognitive Strategy",
    categorySlug: "our-offerings",
    title: "5 Enterprise AI Use Cases You Can Stand Up in 90 Days",
    image: "/webp/assets/Home-page/biz-envisioning.webp",
  },
  {
    id: "lead-insight-9",
    slug: "internal-developer-platforms-velocity",
    category: "Platform Engineering",
    categorySlug: "white-paper",
    title: "From Legacy Ops to Internal Developer Platforms: Engineering at Scale",
    image: "/webp/assets/Home-page/arch-design.webp",
  },
];

export const LeadershipIndustryInsights: React.FC = () => {
  const [insightsList, setInsightsList] = useState<LeadershipInsight[]>(defaultLeadershipInsights);

  useEffect(() => {
    async function fetchLiveInsights() {
      try {
        const posts = await insightsApi.getAllPosts(9);
        if (posts && posts.length >= 3) {
          const mapped: LeadershipInsight[] = posts.slice(0, 9).map((p, idx) => ({
            id: p.id,
            slug: p.slug || p.id,
            category: p.category?.name || defaultLeadershipInsights[idx % defaultLeadershipInsights.length].category,
            categorySlug: p.category?.slug || defaultLeadershipInsights[idx % defaultLeadershipInsights.length].categorySlug,
            title: p.title,
            image: p.image || defaultLeadershipInsights[idx % defaultLeadershipInsights.length].image,
          }));
          // If fewer than 9 from API, fill remaining with defaults
          if (mapped.length < 9) {
            const combined = [...mapped, ...defaultLeadershipInsights.slice(mapped.length, 9)];
            setInsightsList(combined);
          } else {
            setInsightsList(mapped);
          }
        }
      } catch {
        // Fallback to defaultLeadershipInsights seamlessly
      }
    }
    fetchLiveInsights();
  }, []);

  return (
    <section className="py-20 sm:py-28 bg-black text-white relative overflow-hidden font-sans">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-12 relative z-10 text-left">
        
        {/* Section Header: Styled after reference "Industry insights" */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-3">
              Industry <span className="text-rose-500 font-semibold">Insights</span>
            </h2>
            <div className="w-20 h-1 bg-rose-600 mx-auto rounded-full mt-3" />
          </div>
        </Reveal>

        {/* 3x3 Publications Grid using the exact CategoryList card template */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {insightsList.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.04} className="h-full">
              <Link
                href={`/insights/${item.categorySlug}/${item.slug}`}
                className="flex flex-col bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-3 group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-[0_20px_40px_rgba(225,29,72,0.08)] text-left h-full"
              >
                {/* Inset Image Container */}
                <div className="w-full h-48 md:h-56 overflow-hidden rounded-2xl mb-5 bg-zinc-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>

                {/* Content Area */}
                <div className="px-1 pb-1 flex flex-col flex-1">
                  {/* Category Pill Badge */}
                  <div className="mb-3">
                    <span className="text-xs font-semibold tracking-widest text-rose-500 uppercase block">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-semibold text-xl md:text-2xl leading-snug group-hover:text-rose-400 transition-colors mb-3 line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Footer CTA */}
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-rose-950 border border-rose-900 group-hover:bg-rose-600 group-hover:border-rose-500 flex items-center justify-center transition-all duration-300 shadow-md">
                        <ChevronRight size={14} className="text-rose-500 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-semibold text-zinc-200 group-hover:text-rose-400 tracking-wide transition-colors">
                        Read article
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Reference Bottom Action Button: SHOW MORE */}
        <Reveal>
          <div className="text-center mt-16 pt-4">
            <Link
              href="/insights"
              className="inline-flex items-center justify-center px-10 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-purple-600 hover:from-red-500 hover:to-purple-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-rose-950/30 active:scale-95"
            >
              <span>SHOW MORE</span>
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default LeadershipIndustryInsights;
