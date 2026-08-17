import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

// Section Components
import { InternshipHero } from "@/sections/about/internship/InternshipHero";
import { WhyInternship } from "@/sections/about/internship/WhyInternship";
import { InternshipTracks } from "@/sections/about/internship/InternshipTracks";
import { LearningJourney } from "@/sections/about/internship/LearningJourney";
import { WhatInternsWorkOn } from "@/sections/about/internship/WhatInternsWorkOn";
import { MentorshipBenefits } from "@/sections/about/internship/MentorshipBenefits";
import { SuccessStories } from "@/sections/about/internship/SuccessStories";
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

      {/* 2. Why Our Global Internship & What You'll Experience */}
      <WhyInternship />

      {/* 3. Internship Tracks & Tech Stack */}
      <InternshipTracks />

      {/* 4. Learning Journey (Roadmap) */}
      <LearningJourney />

      {/* 5. What Interns Will Work On (3D CardSwap SaaS Platforms Showcase) */}
      <WhatInternsWorkOn />

      {/* 6. Mentorship & Benefits (Clean 60/40 Split List View) */}
      <MentorshipBenefits />

      {/* 7. Success Stories & Testimonials */}
      <SuccessStories />

      {/* 8. Application Form & Bottom Submission */}
      <ApplicationForm />
    </main>
  );
}
