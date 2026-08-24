import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/Schemas";

// Section Components
import { InternshipHero } from "@/sections/about/internship/InternshipHero";
import { InternshipPillars } from "@/sections/about/internship/InternshipPillars";
import { WhyInternship } from "@/sections/about/internship/WhyInternship";
import { InternshipTracks } from "@/sections/about/internship/InternshipTracks";
import { LearningJourney } from "@/sections/about/internship/LearningJourney";
import { WhatInternsWorkOn } from "@/sections/about/internship/WhatInternsWorkOn";
import { MentorshipBenefits } from "@/sections/about/internship/MentorshipBenefits";
import { SuccessStories } from "@/sections/about/internship/SuccessStories";
import { ApplicationForm } from "@/sections/about/internship/ApplicationForm";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";

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

      {/* 2. 3 Pillars Section: LEARN, BUILD, GROW */}
      <InternshipPillars />

      {/* 3. Why Our Global Internship & What You'll Experience */}
      <WhyInternship />

      {/* 4. Internship Tracks & Tech Stack */}
      <InternshipTracks />

      {/* 5. Learning Journey (Roadmap) */}
      <LearningJourney />

      {/* 6. What Interns Will Work On (3D CardSwap SaaS Platforms Showcase) */}
      {/* <WhatInternsWorkOn /> */}

      {/* 7. Mentorship & Benefits (Clean 60/40 Split List View) */}
      {/* <MentorshipBenefits /> */}

      {/* 8. Success Stories & Testimonials */}
      <SuccessStories />

      {/* 9. Application Form & Bottom Submission */}
      <ApplicationForm />

      {/* 10. Representative CTA */}
      <RepresentativeCTA
        title="Ready To Launch Your Career In"
        highlightText="Cloud & AI Engineering?"
        description="Join Devopstrio's Global Internship Program. Work alongside principal architects, co-develop production systems, and accelerate your engineering journey."
        primaryBtnText="EXPLORE OPEN ROLES"
        primaryBtnHref="/careers"
        secondaryBtnText="EXPLORE OUR CULTURE"
        secondaryBtnHref="/about/our-culture-people"
      />
    </main>
  );
}
