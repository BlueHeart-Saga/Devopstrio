"use client";

import React from "react";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { IndustryHero } from "@/sections/industries/detail/IndustryHero";
import { IndustryOverview } from "@/sections/industries/detail/IndustryOverview";
import { IndustryFocusAreas } from "@/sections/industries/detail/IndustryFocusAreas";
import { IndustryCompliance } from "@/sections/industries/detail/IndustryCompliance";
import { IndustryTechStack } from "@/sections/industries/detail/IndustryTechStack";
import { IndustryCaseStudy } from "@/sections/industries/detail/IndustryCaseStudy";
import { IndustryFAQ } from "@/sections/industries/detail/IndustryFAQ";
import { IndustryCTA } from "@/sections/industries/detail/IndustryCTA";

const subSections = [
  { id: "overview", label: "Overview" },
  { id: "focus-areas", label: "Focus Areas" },
  { id: "compliance", label: "Compliance" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "case-study", label: "Case Study" },
  { id: "faq", label: "FAQ" },
  { id: "engage", label: "Engage" }
];

const challenges = [
  "Cart concurrency lockouts",
  "Peak sales volume scalability",
  "Omni-channel stock sync latency"
];

const focusAreas = [
  {
    title: "Headless Storefronts",
    desc: "Constructing fast, SEO-optimized frontends utilizing Next.js linked with GraphQL catalog endpoints."
  },
  {
    title: "High-Volume Carts",
    desc: "Creating in-memory Redis checkout states preventing double-reservations of limited stock during flash sales."
  },
  {
    title: "Recommendation Loops",
    desc: "Deploying vector search databases suggesting relevant products based on user viewing histories."
  }
];

const compliances = [
  "PCI-DSS Level 1: Encrypted customer payment details, tokenized checkout workflows, and secure webhook logs.",
  "GDPR & CCPA Data Controls: Consent trackers, isolated user databases, and swift data deletion triggers."
];

const techs = [
  {
    name: "Next.js / React",
    desc: "Fast server-rendered interfaces designed for maximum user conversion."
  },
  {
    name: "Redis Enterprise",
    desc: "In-memory stock checking systems ensuring real-time reservation speeds."
  },
  {
    name: "GraphQL / Apollo",
    desc: "Flexible data fetching queries optimizing backend load for mobile shoppers."
  }
];

const metrics = [
  {
    value: "<80ms",
    label: "Cart addition latency"
  },
  {
    value: "99.99%",
    label: "Uptime during peak promo events"
  },
  {
    value: "4.2x",
    label: "Conversion rate improvement"
  }
];

const caseStudyHighlights = [
  "Decoupled web catalog from database queries using Redis caches",
  "Setup serverless GraphQL gateways",
  "Increased overall conversion metrics by 28%"
];

const faqs = [
  {
    q: "How do you protect databases during flash sales?",
    a: "We write active reservation queues to in-memory Redis caches, allowing the main database to receive structured, throttled writes, preventing server lockups."
  },
  {
    q: "Which headless CMS platforms do you support?",
    a: "We integrate with Contentful, Sanity, Shopify Plus, and Strapi depending on your product editing workflows."
  }
];

export default function RetailEcommercePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <IndustryHero
        industryName="Retail & E-Commerce"
        title="Omni-channel &"
        highlightedWord="E-Commerce Engines"
        subtitle="Implementing high-speed checkout engines, real-time personalization pipelines, and intelligent inventory analytics."
        bgImage="/assets/Home-page/industries/Manufacturing-Retail.png"
      />

      <SectionNavbar sections={subSections} />

      <IndustryOverview
        overviewHeading="Scalable e-commerce platforms designed for peak traffic and conversion"
        overviewDesc1="We build custom headless storefronts, scalable cart runtimes, and real-time recommendation engines. Our setups process hundreds of catalog operations per second with Redis cache buffers."
        overviewDesc2="Our services connect online shopping portals with ERP databases, facilitating real-time stock counts, multi-currency pricing layers, and robust payment routing hooks."
        challenges={challenges}
      />

      <IndustryFocusAreas focusAreas={focusAreas} />

      <IndustryCompliance compliances={compliances} />

      <IndustryTechStack techs={techs} />

      <IndustryCaseStudy
        caseStudyTitle="Rebuilding the storefront architecture for global apparel brand."
        caseStudyDesc="We re-engineered a legacy e-commerce platform into a headless React application powered by Next.js and Redis. The setup easily sustained a 3x traffic spike during holiday sales, with cart load times dropping to under 80ms."
        metrics={metrics}
        caseStudyHighlights={caseStudyHighlights}
      />

      <IndustryFAQ faqs={faqs} />

      <IndustryCTA
        ctaTitle="Launch your scalable"
        ctaHighlight="E-Commerce engine"
        ctaDesc="Consult with our principal e-commerce solution architect to design a high-conversion checkout pipeline."
        ctaBtnText="Consult E-Commerce Architect"
      />
    </main>
  );
}
