
import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { AwardsHero } from "@/sections/about/awards-recognition/AwardsHero";
import { AwardsPillars } from "@/sections/about/awards-recognition/AwardsPillars";
import { RecognitionHighlights } from "@/sections/about/awards-recognition/RecognitionHighlights";
import { RecognitionTimeline } from "@/sections/about/awards-recognition/RecognitionTimeline";
import { RecognitionCategories } from "@/sections/about/awards-recognition/RecognitionCategories";
import { WhyRecognitionMatters } from "@/sections/about/awards-recognition/WhyRecognitionMatters";
import { PeopleBehindRecognition } from "@/sections/about/awards-recognition/PeopleBehindRecognition";
import { AwardsCTA } from "@/sections/about/awards-recognition/AwardsCTA";
import { AllCertifications } from "@/sections/about/partnerships-certifications/AllCertifications";
import { Achievements } from "@/sections/about/Achievements";
import { AwardsList } from "@/sections/about/AwardsList";
import { MetricsStats } from "@/sections/about/MetricsStats";

export const metadata: Metadata = {
  title: "Awards, Recognition & Engineering Milestones | Devopstrio",
  description: "Explore the industry awards, engineering milestones, and external recognition received by Devopstrio.",
  alternates: {
    canonical: "https://devopstrio.co.uk/about/awards-recognition"
  }
};

import { FAQ } from "@/components/services/FAQ";
import { FAQSchema } from "@/components/seo/Schemas";

const awardsFaqs = [
  {
    q: "What industry awards and accolades has Devopstrio received?",
    a: "Devopstrio has been recognized across multiple international technology platforms, winning Top Cloud Consultancy, SRE Team of the Year, and MSP Excellence accolades for delivering zero-downtime enterprise transformations.",
    proof: "✓ Winner: MSP Channel Awards 2026 · Data Centre World Finalist"
  },
  {
    q: "What compliance and quality certifications does Devopstrio hold?",
    a: "We maintain ISO 9001 quality management standards, ISO 27001 information security certification, Cyber Essentials Plus accreditation, and Crown Commercial Service (CCS) supplier status in the UK.",
    tags: ["ISO 27001", "ISO 9001", "Cyber Essentials Plus", "UK G-Cloud CCS"]
  },
  {
    q: "How does external recognition validate Devopstrio's client outcomes?",
    a: "Our awards highlight verifiable engineering achievements including 35%+ cloud cost reduction for global enterprises, sub-10ms AI latency optimizations, and zero-downtime cloud-native database migrations.",
    proof: "✓ Verifiable 35%+ FinOps Savings & Sub-10ms AI Pipelines"
  },
  {
    q: "What hyperscale partner certifications do Devopstrio engineers possess?",
    a: "Our core engineering pod holds AWS Certified Solutions Architect Professional, Azure Solutions Architect Expert, Google Cloud Professional Cloud Architect, and CKS/CKA Kubernetes certifications.",
    tags: ["AWS Solutions Architect Pro", "Azure Expert", "CKA / CKS Kubernetes"]
  }
];

export default function AwardsRecognitionPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "About Us", item: "/about/company-overview" },
        { name: "Awards & Recognition", item: "/about/awards-recognition" }
      ]} />
      <FAQSchema faqs={awardsFaqs} />
      
      {/* 1) Hero Section */}
      <AwardsHero />

      {/* 2) Pillars Section: Achievement, Excellence, Impact */}
      <AwardsPillars />

      {/* AwardsList (Certifications, Compliance, Industry Validation) */}
      <div className="bg-black border-t border-zinc-900/60">
        <AwardsList />
      </div>

      {/* Complete Awards Gallery Grid */}
      <div className="bg-zinc-950 border-t border-zinc-900 pb-12">
        <AllCertifications />
      </div>

      {/* Achievements (Innovation & Capabilities) */}
      <div className="bg-black pt-2 sm:pt-4">
        <Achievements />
      </div>

      <PeopleBehindRecognition />

      {/* 3) Awards & Recognition Highlights */}
      <RecognitionHighlights />

      {/* 4) Recognition Timeline / Journey section */}
      <RecognitionTimeline />

      {/* 5) Recognition categories section */}
      <RecognitionCategories />

      {/* 6) "Why this matters to clients and partners" section */}
      <WhyRecognitionMatters />

      {/* PREVIOUS SECTION: MetricsStats (By the Numbers) */}
      <div className="bg-black border-t border-zinc-900/60 pb-12">
        <MetricsStats />
      </div>

      {/* 7) Awards FAQ Section */}
      <FAQ faqs={awardsFaqs} title="Awards & Recognitions" highlight="FAQs" />

      {/* 8) Final CTA */}
      <AwardsCTA />
    </main>
  );
}
