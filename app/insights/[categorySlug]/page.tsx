import React from "react";
import { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { insightsApi, TransformedPost } from "@/lib/insightsApi";

import { CategoryHero } from "@/sections/insights/CategoryHero";
import { CategoryFeatured } from "@/sections/insights/CategoryFeatured";
import { CategoryList } from "@/sections/insights/CategoryList";
import { InsightsNavigationCards } from "@/components/insights/InsightsNavigationCards";
import { FAQ } from "@/components/services/FAQ";
import { CTA } from "@/components/services/CTA";
import { NewsletterSubscription } from "@/components/NewsletterSubscription";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

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

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  
  let categoryName = categorySlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  try {
    const allPosts = await insightsApi.getAllPosts();
    const filtered = allPosts.filter(
      (p) => p.category && p.category.slug === categorySlug
    );
    if (filtered.length > 0) {
      categoryName = filtered[0].category.name;
    }
  } catch (e) {}

  return {
    title: `${categoryName} Publications`,
    description: `Read technical deep-dives, industry briefs, and case studies about ${categoryName.toLowerCase()} on the Devopstrio portal.`,
    alternates: {
      canonical: `/insights/${categorySlug}`
    }
  };
}

export default async function CategoryLandingPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;

  let posts: TransformedPost[] = [];
  let categoryName = "";

  try {
    const allPosts = await insightsApi.getAllPosts();
    posts = allPosts.filter(
      (p) => p.category && p.category.slug === categorySlug
    );

    if (posts.length > 0) {
      categoryName = posts[0].category.name;
    } else {
      categoryName = categorySlug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }
  } catch (err) {
    console.error("Failed to load category posts:", err);
  }

  // Sort posts: featured first, then by date descending
  const sortedPosts = [...posts].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Insights", item: "/insights" },
    { name: categoryName, item: `/insights/${categorySlug}` }
  ];

  return (
    <main className="min-h-screen bg-black text-white pb-16">
      <BreadcrumbSchema items={breadcrumbs} />
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(206,36,83,0.04),transparent_70%)] pointer-events-none" />

      <CategoryHero 
        categoryName={categoryName} 
        categorySlug={categorySlug} 
      />

      {posts.length === 0 ? (
        <div className="max-w-site mx-auto px-6 text-center py-20 border border-dashed border-zinc-900 rounded-3xl">
          <BookOpen className="mx-auto text-zinc-700 mb-4" size={32} />
          <h3 className="text-sm font-semibold text-zinc-400 mb-1">No publications found</h3>
          <p className="text-xs text-zinc-550">We haven&apos;t published any articles in this category yet.</p>
        </div>
      ) : (
        <div className="space-y-12">
          <CategoryFeatured 
            posts={sortedPosts} 
            categorySlug={categorySlug} 
          />
          <CategoryList 
            posts={sortedPosts} 
            categorySlug={categorySlug} 
          />
        </div>
      )}

      {/* Navigation section for all other insights channels */}
      <InsightsNavigationCards />
      <NewsletterSubscription className="my-20" />
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

