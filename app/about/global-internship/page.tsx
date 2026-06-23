import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

// Section Components
import { InternshipHero } from "@/sections/about/internship/InternshipHero";
import { InternshipTracks } from "@/sections/about/internship/InternshipTracks";
import { LearningJourney } from "@/sections/about/internship/LearningJourney";
import { WhatInternsWorkOn } from "@/sections/about/internship/WhatInternsWorkOn";
import { MentorshipBenefits } from "@/sections/about/internship/MentorshipBenefits";
import { DesignBanner } from "@/sections/about/internship/DesignBanner";
import { SuccessStories } from "@/sections/about/internship/SuccessStories";
import { OpenPositions } from "@/sections/about/internship/OpenPositions";
import { ApplicationForm } from "@/sections/about/internship/ApplicationForm";

export const metadata: Metadata = {
  title: "Global Engineering Internship Program | Careers & Mentorship",
  description:
    "Launch your technology career with Devopstrio. Work alongside cloud architects, AI engineers, and DevOps specialists on real-world projects.",
  alternates: {
    canonical: "/about/global-internship",
  },
  openGraph: {
    title: "Global Engineering Internship Program | Careers & Mentorship",
    description:
      "Launch your technology career with Devopstrio. Work alongside cloud architects, AI engineers, and DevOps specialists on real-world projects.",
    type: "website",
  },
};

export default function GlobalInternshipPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "About Us", item: "/about/company-overview" },
          { name: "Global Internship Program", item: "/about/global-internship" },
        ]}
      />

      {/* 1. Hero & Stats Overview */}
      <InternshipHero />

      {/* 2. Internship Tracks & Tech Stack */}
      <InternshipTracks />

      {/* 3. Learning Journey (Roadmap with Animations) */}
      <LearningJourney />

      {/* 4. What Interns Will Work On (Projects & Tasks) */}
      <WhatInternsWorkOn />

      {/* 5. Mentorship & Benefits */}
      <MentorshipBenefits />

      {/* 6. Custom Design Callout Banner */}
      <DesignBanner />

      {/* 7. Success Stories & Testimonials */}
      <SuccessStories />

      {/* 8. Active Opportunities & FAQ */}
      <OpenPositions />

      {/* 9. Application Form & Bottom Signature Email block */}
      <ApplicationForm />
    </main>
  );
}
