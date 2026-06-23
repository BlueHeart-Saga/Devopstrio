import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

// Life-at-Devopstrio sections
import { LifeHero } from "@/sections/about/life/LifeHero";
import { CultureManifesto } from "@/sections/about/life/CultureManifesto";
import { LifeMomentsGallery } from "@/sections/about/life/LifeMomentsGallery";
import { EngineeringCulture } from "@/sections/about/life/EngineeringCulture";
import { JourneyTimeline } from "@/sections/about/life/JourneyTimeline";
import { EmployeeStoriesSection } from "@/sections/about/life/EmployeeStoriesSection";
import { LearningGrowth } from "@/sections/about/life/LearningGrowth";
import { BenefitsWellbeing } from "@/sections/about/life/BenefitsWellbeing";
import { AwardsRecognition } from "@/sections/about/life/AwardsRecognition";
import { CommunityImpact } from "@/sections/about/life/CommunityImpact";
import { OpenPositionsPreview } from "@/sections/about/life/OpenPositionsPreview";
import { LifeFinalCTA } from "@/sections/about/life/LifeFinalCTA";

export const metadata: Metadata = {
  title: "Life at Devopstrio | Culture, Careers & Innovation",
  description:
    "Discover what it's like to work at Devopstrio — a culture of innovation, ownership, continuous learning, and global collaboration in AI, Cloud, and DevOps.",
  alternates: {
    canonical: "/about/life-at-devopstrio",
  },
  openGraph: {
    title: "Life at Devopstrio | Culture, Careers & Innovation",
    description:
      "Join a world-class team building AI, Cloud, and DevOps solutions. Explore our culture, career paths, benefits, and open positions.",
    type: "website",
  },
};

export default function LifeAtDevopstrioPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "About Us", item: "/about/company-overview" },
          { name: "Life at Devopstrio", item: "/about/life-at-devopstrio" },
        ]}
      />

      {/* 1. Hero */}
      <LifeHero />

      {/* 2. Culture Manifesto */}
      <CultureManifesto />

      {/* 3. Life Moments Gallery */}
      <LifeMomentsGallery />

      {/* 4. Engineering Culture */}
      <EngineeringCulture />

      {/* 5. Journey Timeline */}
      <JourneyTimeline />

      {/* 6. Employee Stories */}
      <EmployeeStoriesSection />

      {/* 7. Learning & Growth */}
      <LearningGrowth />

      {/* 8. Benefits & Wellbeing */}
      <BenefitsWellbeing />

      {/* 9. Awards & Recognition */}
      <AwardsRecognition />

      {/* 10. Community Impact */}
      <CommunityImpact />

      {/* 11. Open Positions Preview */}
      <OpenPositionsPreview />

      {/* 12. Final CTA */}
      <LifeFinalCTA />
    </main>
  );
}
