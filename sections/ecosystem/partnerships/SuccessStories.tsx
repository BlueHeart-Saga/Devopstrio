"use client";

import React, { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { insightsApi, isPublishedPost } from "@/lib/insightsApi";

interface Tag {
  label: string;
  style: string;
}

interface Story {
  id: string;
  title: string;
  desc: string;
  image: string;
  tags: Tag[];
  buttonStyle: string;
  href: string;
}

const BUTTON_STYLES = [
  "bg-[#f5c697] text-zinc-950 hover:bg-[#e2b384]",
  "bg-[#b8e6c4] text-zinc-950 hover:bg-[#a2d4b0]",
  "bg-[#c6c4e9] text-zinc-950 hover:bg-[#b0aeaa]"
];

const TAG_COLOR_STYLES = [
  "bg-[#f5c697]/20 text-[#f5c697] border border-[#f5c697]/40",
  "bg-[#b8e6c4]/20 text-[#b8e6c4] border border-[#b8e6c4]/40",
  "bg-[#c6c4e9]/20 text-[#c6c4e9] border border-[#c6c4e9]/40",
  "bg-rose-500/20 text-rose-400 border border-rose-500/40",
  "bg-sky-500/20 text-sky-400 border border-sky-500/40"
];

const FALLBACK_IMAGES = [
  "/assets/Home-page/arch-life.png",
  "/assets/Home-page/biz-life.png",
  "/assets/Home-page/rapid-life.png"
];

const INITIAL_STORIES: Story[] = [
  {
    id: "initial-1",
    title: "AI-Driven Modernization of Insurance Claims Systems",
    desc: "Discover how Devopstrio co-engineered mission-critical automation and predictive intelligence for enterprise insurance claims.",
    image: "/assets/Home-page/arch-life.png",
    tags: [
      { label: "AI & ML", style: "bg-[#f5c697]/20 text-[#f5c697] border border-[#f5c697]/40" },
      { label: "MODERNIZATION", style: "bg-[#b8e6c4]/20 text-[#b8e6c4] border border-[#b8e6c4]/40" }
    ],
    buttonStyle: "bg-[#f5c697] text-zinc-950 hover:bg-[#e2b384]",
    href: "/insights/case-studies"
  },
  {
    id: "initial-2",
    title: "From frozen legacy to AI-powered velocity: transforming a global investment firm",
    desc: "End-to-end DevOps transformation and application modernisation accelerating software delivery across financial operations.",
    image: "/assets/Home-page/biz-life.png",
    tags: [
      { label: "DEVOPS", style: "bg-[#f5c697]/20 text-[#f5c697] border border-[#f5c697]/40" },
      { label: "FINTECH", style: "bg-[#c6c4e9]/20 text-[#c6c4e9] border border-[#c6c4e9]/40" }
    ],
    buttonStyle: "bg-[#b8e6c4] text-zinc-950 hover:bg-[#a2d4b0]",
    href: "/insights/case-studies"
  },
  {
    id: "initial-3",
    title: "Enhancing Institutional Banking Productivity with Agentic AI on AWS",
    desc: "Harnessing generative AI copilots and autonomous agentic workflows to multiply institutional banking operational throughput.",
    image: "/assets/Home-page/rapid-life.png",
    tags: [
      { label: "AGENTIC AI", style: "bg-[#f5c697]/20 text-[#f5c697] border border-[#f5c697]/40" },
      { label: "AWS CLOUD", style: "bg-[#b8e6c4]/20 text-[#b8e6c4] border border-[#b8e6c4]/40" }
    ],
    buttonStyle: "bg-[#c6c4e9] text-zinc-950 hover:bg-[#b0aeaa]",
    href: "/insights/case-studies"
  }
];

export function SuccessStories() {
  const [stories, setStories] = useState<Story[]>(INITIAL_STORIES);

  useEffect(() => {
    let isMounted = true;

    async function loadLatestCaseStudies() {
      try {
        const res = await insightsApi.getContent({ category_slug: "case-studies", limit: 6 });
        if (!isMounted || !res?.items || !Array.isArray(res.items)) return;

        const validItems = res.items
          .filter(isPublishedPost)
          .sort((a: any, b: any) => {
            const dateA = new Date(a.published_at || a.created_at || 0).getTime();
            const dateB = new Date(b.published_at || b.created_at || 0).getTime();
            return dateB - dateA;
          })
          .slice(0, 3);

        if (validItems.length === 0) return;

        const dynamicStories: Story[] = validItems.map((item: any, idx: number) => {
          const post = insightsApi.transformContent(item);

          const rawTags = (post.tags && post.tags.length > 0)
            ? post.tags
            : (item.tags && Array.isArray(item.tags) && item.tags.length > 0)
              ? item.tags
              : ["CASE STUDY", "ENTERPRISE"];

          const tags: Tag[] = rawTags.slice(0, 3).map((tag: string, tagIdx: number) => ({
            label: tag.toUpperCase(),
            style: TAG_COLOR_STYLES[tagIdx % TAG_COLOR_STYLES.length]
          }));

          const href = `/insights/case-studies/${post.slug || post.id}`;

          return {
            id: post.id || `story-${idx}`,
            title: post.title,
            desc: post.excerpt || "Discover how Devopstrio co-engineered mission-critical outcomes with enterprise partners.",
            image: post.image || FALLBACK_IMAGES[idx % FALLBACK_IMAGES.length],
            tags,
            buttonStyle: BUTTON_STYLES[idx % BUTTON_STYLES.length],
            href
          };
        });

        if (isMounted && dynamicStories.length > 0) {
          setStories(dynamicStories);
        }
      } catch (err) {
        console.error("Failed to load dynamic case studies in SuccessStories:", err);
      }
    }

    loadLatestCaseStudies();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="success-stories" className="w-full py-24 bg-black text-white border-b border-zinc-900/60 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 xl:px-8 relative z-10">
        
        {/* Section Heading */}
        <Reveal className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-4 text-white">
            Partner-Powered <span className="text-rose-500">Success Stories</span>
          </h2>
        </Reveal>

        {/* 3 Dynamic Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {stories.map((story, idx) => (
            <Reveal key={story.id} delay={idx * 0.1} className="h-full">
              <div className="group/card flex flex-col justify-between h-full bg-[#09090b] border border-zinc-900 hover:border-zinc-800 rounded-[32px] p-4 md:p-5 transition-all duration-300 shadow-2xl relative overflow-hidden">
                
                <div>
                  {/* Top Image Container with Concave Notched Corner & Floating Action Button */}
                  <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-6 bg-zinc-900">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Concave Notched Corner Overlay & Floating Action Button */}
                    <div className="absolute bottom-0 right-0 flex items-center justify-center pointer-events-auto">
                      
                      {/* Top-Right Concave Arc Transition */}
                      <svg className="absolute -top-4 right-0 w-4 h-4 text-[#09090b] fill-current" viewBox="0 0 16 16">
                        <path d="M16 0 A 16 16 0 0 0 0 16 L 16 16 Z" />
                      </svg>
                      
                      {/* Bottom-Left Concave Arc Transition */}
                      <svg className="absolute bottom-0 -left-4 w-4 h-4 text-[#09090b] fill-current" viewBox="0 0 16 16">
                        <path d="M16 0 A 16 16 0 0 0 0 16 L 16 16 Z" />
                      </svg>

                      {/* Cutout Corner Patch & Action Button */}
                      <div className="bg-[#09090b] pt-2 pl-2 rounded-tl-[20px]">
                        <Link
                          href={story.href}
                          className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover/card:scale-110 shadow-xl ${story.buttonStyle}`}
                          title={`Read case study: ${story.title}`}
                        >
                          <ArrowUpRight size={22} className="stroke-[2.5]" />
                        </Link>
                      </div>

                    </div>
                  </div>

                  {/* Card Content: Title & Description */}
                  <div className="px-2">
                    <Link href={story.href} className="block group/link">
                      <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2.5 group-hover/card:text-rose-400 group-hover/link:text-rose-400 transition-colors line-clamp-2">
                        {story.title}
                      </h3>
                    </Link>
                    <p className="text-sm md:text-base text-zinc-300 font-normal leading-relaxed mb-6 line-clamp-3">
                      {story.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Pill Tags */}
                <div className="px-2 pt-2 flex flex-wrap items-center gap-2">
                  {story.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`px-3.5 py-1.5 rounded-lg text-[11px] md:text-xs font-semibold uppercase tracking-wider ${tag.style}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        {/* Centered Bottom CTA Button */}
        <Reveal className="mt-14 text-center">
          <Link
            href="/insights/case-studies"
            className="inline-flex items-center gap-3 bg-zinc-950 border border-zinc-800 hover:bg-rose-600 hover:border-rose-500 text-white px-8 py-4 rounded-full font-semibold text-sm md:text-base tracking-wider uppercase transition-all duration-300 shadow-xl group/btn"
          >
            <span>View all cases</span>
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </Link>
        </Reveal>

      </div>
    </section>
  );
}
