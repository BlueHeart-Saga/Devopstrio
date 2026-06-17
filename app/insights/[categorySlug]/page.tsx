"use client";

import React, { useState, useEffect } from "react";
import { BookOpen } from "lucide-react";
import { insightsApi, TransformedPost } from "@/lib/insightsApi";

import { CategoryHero } from "@/sections/insights/CategoryHero";
import { CategoryFeatured } from "@/sections/insights/CategoryFeatured";
import { CategoryList } from "@/sections/insights/CategoryList";
import { InsightsNavigationCards } from "@/components/insights/InsightsNavigationCards";
import { FAQ } from "@/components/services/FAQ";
import { CTA } from "@/components/services/CTA";

const INSIGHTS_FAQS = [
  {
    q: "How frequently are Devopstrio insights and engineering articles updated?",
    a: "Our SRE, Cloud Architecture, and DevOps engineering teams publish deep-dives, post-mortems, and technology benchmarks weekly, capturing learnings from live client implementations."
  },
  {
    q: "Can I request a deep-dive or whitepaper on a specific technology stack?",
    a: "Yes! We welcome community and client suggestions. You can submit requests via our contact form to cover specific Kubernetes, IaC, or GenAI integration architectures."
  },
  {
    q: "Are the architecture patterns and blueprints shared in your blogs production-ready?",
    a: "While our whitepapers and blogs outline industry-standard best practices, architectures should be tailored to your specific scale, security, and workload parameters."
  },
  {
    q: "How does Devopstrio calculate the metrics presented in your case studies?",
    a: "Metrics are gathered directly from real-world telemetry dashboards and financial reporting tools, comparing pre-migration benchmarks to post-deployment outputs."
  },
  {
    q: "Can I use or reference Devopstrio's technical diagrams in my own work?",
    a: "Yes, our content is open for attribution under standard educational usage. Please attribute diagrams and technical checklists to Devopstrio."
  },
  {
    q: "How are Devopstrio case studies structured for client confidentiality?",
    a: "We prioritize client privacy. Case studies use sanitized architectural diagrams, anonymized metrics, or generic industry profiles unless explicit client approval is obtained."
  },
  {
    q: "Who authors the publications and whitepapers on the Devopstrio portal?",
    a: "Every post is written directly by our practitioners—active platform developers, Senior SRE specialists, and Tech Leads working on real engineering challenges."
  },
  {
    q: "Does Devopstrio offer training or custom workshops based on the blogs?",
    a: "Absolutely. We translate our written insights into tailored engineering workshops, training sessions, and design audits for enterprise cloud migrations."
  },
  {
    q: "How can I register for the upcoming webinars and industry conferences?",
    a: "Simply visit our Events category channel and select the specific webinar or roundtable card to register online and receive invite coordinates."
  },
  {
    q: "Where can I find the downloadable PDFs of your whitepapers and engineering briefs?",
    a: "Within individual whitepaper and deep-dive detail pages, look for the glassmorphic Document Reader panel to view or download high-fidelity PDF blueprints."
  }
];

interface CategoryPageProps {
  params: Promise<{
    categorySlug: string;
  }>;
}

export default function CategoryLandingPage({ params }: CategoryPageProps) {
  const resolvedParams = React.use(params);
  const categorySlug = resolvedParams.categorySlug;

  const [posts, setPosts] = useState<TransformedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    async function loadCategoryData() {
      try {
        setLoading(true);
        const allPosts = await insightsApi.getAllPosts(100);
        
        // Filter posts by category
        const filtered = allPosts.filter(
          (p) => p.category && p.category.slug === categorySlug
        );
        setPosts(filtered);

        if (filtered.length > 0) {
          setCategoryName(filtered[0].category.name);
        } else {
          // Format category slug nicely as fallback name
          const fallback = categorySlug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          setCategoryName(fallback);
        }
      } catch (err) {
        console.error("Failed to load category posts:", err);
      } finally {
        setLoading(false);
      }
    }
    loadCategoryData();
  }, [categorySlug]);

  // Sort posts: featured first, then by views descending
  const sortedPosts = [...posts].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return (b.views || 0) - (a.views || 0);
  });

  // Select top posts (up to 5) for featured carousel
  const featuredPosts = sortedPosts.slice(0, 5);

  // Remaining posts for the list below
  const listPosts = posts.filter((p) => !featuredPosts.some((f) => f.id === p.id));
  const adjacentPosts = listPosts.length > 0 ? listPosts : posts;

  return (
    <main className="min-h-screen bg-black text-white pb-16">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(206,36,83,0.04),transparent_70%)] pointer-events-none" />

      <CategoryHero 
        categoryName={categoryName} 
        categorySlug={categorySlug} 
      />

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-zinc-500">
          <div className="w-8 h-8 rounded-full border-2 border-zinc-800 border-t-rose-600 animate-spin mb-4" />
          <span className="text-xs font-mono uppercase tracking-widest">Loading Publications...</span>
        </div>
      ) : posts.length === 0 ? (
        <div className="max-w-site mx-auto px-6 text-center py-20 border border-dashed border-zinc-900 rounded-3xl">
          <BookOpen className="mx-auto text-zinc-700 mb-4" size={32} />
          <h3 className="text-sm font-semibold text-zinc-400 mb-1">No publications found</h3>
          <p className="text-xs text-zinc-550">We haven&apos;t published any articles in this category yet.</p>
        </div>
      ) : (
        <div className="space-y-12">
          <CategoryFeatured 
            posts={featuredPosts} 
            categorySlug={categorySlug} 
          />
          <CategoryList 
            posts={adjacentPosts} 
            categorySlug={categorySlug} 
          />
        </div>
      )}

      {/* Navigation section for all other insights channels */}
      <InsightsNavigationCards />
      <FAQ faqs={INSIGHTS_FAQS} />
      <CTA 
        ctaTitle="Harness our engineering" 
        ctaHighlight="expertise" 
        ctaDesc="Partner with Devopstrio's world-class platform specialists to build, automate, and scale your digital assets with confidence." 
        ctaBtnText="Connect With Experts" 
        backLink="/insights" 
      />
    </main>
  );
}
