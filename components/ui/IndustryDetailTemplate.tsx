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

export interface IndustryFocusArea {
  title: string;
  desc: string;
}

export interface IndustryTech {
  name: string;
  desc: string;
}

export interface IndustryMetric {
  value: string;
  label: string;
}

export interface IndustryFAQItem {
  q: string;
  a: string;
}

export interface IndustryDetailProps {
  industryName: string;
  title: string;
  highlightedWord: string;
  subtitle: string;
  overviewHeading: string;
  overviewDesc1: string;
  overviewDesc2: string;
  heroImage: string;
  challenges: string[];
  focusAreas: IndustryFocusArea[];
  compliances: string[];
  techs: IndustryTech[];
  metrics: IndustryMetric[];
  caseStudyTitle: string;
  caseStudyDesc: string;
  caseStudyHighlights: string[];
  faqs: IndustryFAQItem[];
  ctaTitle: string;
  ctaHighlight: string;
  ctaDesc: string;
  ctaBtnText: string;
}

export function IndustryDetailTemplate({
  industryName,
  title,
  highlightedWord,
  subtitle,
  overviewHeading,
  overviewDesc1,
  overviewDesc2,
  heroImage,
  challenges,
  focusAreas,
  compliances,
  techs,
  metrics,
  caseStudyTitle,
  caseStudyDesc,
  caseStudyHighlights,
  faqs,
  ctaTitle,
  ctaHighlight,
  ctaDesc,
  ctaBtnText
}: IndustryDetailProps) {
  
  const subSections = [
    { id: "overview", label: "Overview" },
    { id: "focus-areas", label: "Focus Areas" },
    { id: "compliance", label: "Compliance" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "case-study", label: "Case Study" },
    { id: "faq", label: "FAQ" },
    { id: "engage", label: "Engage" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16">
      
      {/* 1. Hero Section */}
      <IndustryHero
        industryName={industryName}
        title={title}
        highlightedWord={highlightedWord}
        subtitle={subtitle}
        bgImage={heroImage}
      />

      {/* 2. Section Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 3. Overview Section */}
      <IndustryOverview
        overviewHeading={overviewHeading}
        overviewDesc1={overviewDesc1}
        overviewDesc2={overviewDesc2}
        challenges={challenges}
      />

      {/* 4. Focus Areas Grid */}
      <IndustryFocusAreas focusAreas={focusAreas} />

      {/* 5. Compliance & Audits */}
      <IndustryCompliance compliances={compliances} />

      {/* 6. Tech Stack Section */}
      <IndustryTechStack techs={techs} />

      {/* 7. Case Study Section */}
      <IndustryCaseStudy
        caseStudyTitle={caseStudyTitle}
        caseStudyDesc={caseStudyDesc}
        metrics={metrics}
        caseStudyHighlights={caseStudyHighlights}
      />

      {/* 8. FAQ Section */}
      <IndustryFAQ faqs={faqs} />

      {/* 9. CTA Section */}
      <IndustryCTA
        ctaTitle={ctaTitle}
        ctaHighlight={ctaHighlight}
        ctaDesc={ctaDesc}
        ctaBtnText={ctaBtnText}
      />

    </main>
  );
}
