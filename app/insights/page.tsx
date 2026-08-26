"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { insightsApi, TransformedPost } from "@/lib/insightsApi";
import { Reveal } from "@/components/ui/Reveal";

import { InsightsTopHero } from "@/sections/insights/InsightsTopHero";
import { InsightsHero } from "@/sections/insights/InsightsHero";

// Dynamic Imports for Heavy Below-The-Fold Sections to Reduce Initial JS Payload
const FeaturedHighlights = dynamic(() => import("@/sections/insights/FeaturedHighlights").then((mod) => mod.FeaturedHighlights));
const InsightsJourney = dynamic(() => import("@/sections/insights/InsightsJourney").then((mod) => mod.InsightsJourney));
const InsightsLibrary = dynamic(() => import("@/sections/insights/InsightsLibrary").then((mod) => mod.InsightsLibrary));
const InsightsNavigationCards = dynamic(() => import("@/components/insights/InsightsNavigationCards").then((mod) => mod.InsightsNavigationCards));
const FAQ = dynamic(() => import("@/components/services/FAQ").then((mod) => mod.FAQ));
const CTA = dynamic(() => import("@/components/services/CTA").then((mod) => mod.CTA));
const NewsletterSubscription = dynamic(() => import("@/components/NewsletterSubscription").then((mod) => mod.NewsletterSubscription));

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

export default function InsightsLandingPage() {
  const [posts, setPosts] = useState<TransformedPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Load initial data
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const allPosts = await insightsApi.getAllPosts();
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
      {/* <section className="pt-16 pb-4 md:pb-8 text-center relative bg-[#030303]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4 text-white">
            Insights & <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Publications</span>
          </h1>
          <p className="text-zinc-400 font-medium max-w-xl mx-auto">
            Deep-dives, post-mortems, and cloud-native blueprints written by SRE and platform specialists.
          </p>
        </Reveal>
      </section> */}

      {/* Structured Insights Sections */}
      <InsightsTopHero />
      {/* <InsightsHero /> */}
      <FeaturedHighlights posts={posts} />
      {/* <InsightsJourney /> */}
      <InsightsLibrary posts={posts} loading={loading} />
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
