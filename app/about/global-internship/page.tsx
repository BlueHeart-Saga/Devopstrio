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
  title: "Global Engineering Internship Program | Devopstrio",
  description:
    "Launch your technology career with Devopstrio. Work alongside cloud architects, AI engineers, and DevOps specialists on real-world projects.",
  alternates: {
    canonical: "https://devopstrio.co.uk/about/global-internship",
  },
  openGraph: {
    title: "Global Engineering Internship Program | Careers & Mentorship",
    description:
      "Launch your technology career with Devopstrio. Work alongside cloud architects, AI engineers, and DevOps specialists on real-world projects.",
    type: "website",
  },
};

import { FAQ } from "@/components/services/FAQ";
import { FAQSchema } from "@/components/seo/Schemas";

const internshipFaqs = [
  {
    q: "Who is eligible for Devopstrio's Global Internship Program?",
    a: "The program is open to final-year computer science/engineering undergraduates, recent graduates, and early-career career-changers with strong fundamentals in programming, Linux systems, cloud concepts, or data structures.",
    proof: "✓ 12-Week Intensive Bootcamp & Real-World Projects"
  },
  {
    q: "What tracks are available in the Devopstrio Internship Program?",
    a: "We offer specialized tracks in Cloud Architecture (AWS/Azure/GCP), DevOps & GitOps Automation, AI & Data Engineering (LLMs/RAG/MLOps), Cybersecurity & IAM, and Modern Web Development (Next.js/Node/Go).",
    tags: ["Cloud Track", "DevOps Track", "AI & Data Track", "Cybersecurity Track"]
  },
  {
    q: "Is the internship remote or in-person?",
    a: "We offer both hybrid internships at our delivery centers (London, Chennai, Bangalore) and fully remote international cohorts with continuous 1-on-1 virtual mentorship.",
    proof: "✓ Flexible Hybrid & Remote Cohorts Available"
  },
  {
    q: "Does the internship lead to full-time employment at Devopstrio?",
    a: "Yes. Top-performing interns receive priority full-time employment offers as Junior Cloud Architects, DevOps Engineers, or Software Engineers upon program completion.",
    proof: "✓ High Conversion Rate to Full-Time Engineering Roles"
  }
];

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
      <FAQSchema faqs={internshipFaqs} />

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

      {/* 6. What Interns Will Work On */}
      <WhatInternsWorkOn />

      {/* 7. Mentorship & Benefits */}
      <MentorshipBenefits />

      {/* 8. Success Stories & Testimonials */}
      <SuccessStories />

      {/* 9. Application Form & Bottom Submission */}
      <ApplicationForm />

      {/* 10. Internship FAQs */}
      <FAQ faqs={internshipFaqs} title="Global Internship" highlight="FAQs" />

      {/* 11. Representative CTA */}
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
