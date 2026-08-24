
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
  title: "Awards, Recognition & Milestones | Devopstrio",
  description: "Explore the industry awards, engineering milestones, and external recognition received by Devopstrio.",
  alternates: {
    canonical: "/about/awards-recognition"
  }
};

export default function AwardsRecognitionPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "About Us", item: "/about/company-overview" },
        { name: "Awards & Recognition", item: "/about/awards-recognition" }
      ]} />
      
      {/* 1) Hero Section */}
      <AwardsHero />

      {/* 2) Pillars Section: Achievement, Excellence, Impact */}
      <AwardsPillars />


       {/* PREVIOUS SECTION: AwardsList (Certifications, Compliance, Industry Validation) */}
      <div className="bg-black border-t border-zinc-900/60">
        <AwardsList />
      </div>

     

      {/* Complete Awards Gallery Grid (From Partnerships page) */}
      {/* <div className="bg-zinc-950 border-t border-zinc-900 pb-12">
        <AllCertifications />
      </div> */}

       {/* PREVIOUS SECTION: Achievements (Innovation & Capabilities) */}
      <div className="bg-black pt-2 sm:pt-4">
        <Achievements />
      </div>

      {/* 2) Intro section — "What recognition means to us" */}
      {/* <RecognitionIntro /> */}

      <PeopleBehindRecognition />

      {/* 3) Awards & Recognition Highlights */}
      <RecognitionHighlights />

      {/* 4) Recognition Timeline / Journey section */}
      <RecognitionTimeline />

      {/* 5) Recognition categories section */}
      {/* <RecognitionCategories /> */}

      {/* 6) "Why this matters to clients and partners" section */}
      {/* <WhyRecognitionMatters /> */}

      {/* PREVIOUS SECTION: MetricsStats (By the Numbers) */}
      <div className="bg-black border-t border-zinc-900/60 pb-12">
        <MetricsStats />
      </div>

      {/* 7) Culture / people recognition strip */}
     

      {/* 8) Final CTA */}
      <AwardsCTA />

    </main>
  );
}
