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
  "Federal compliance locks",
  "Legacy server data migration",
  "High citizen volume traffic peaks"
];

const focusAreas = [
  {
    title: "Citizen Web Portals",
    desc: "Building clean, accessible user interfaces where citizens apply for services and renew documents."
  },
  {
    title: "Secure Cloud Migration",
    desc: "Moving legacy on-premise mainframe databases to encrypted government cloud subnets."
  },
  {
    title: "System Audit Trails",
    desc: "Deploying secure read-only logs that track every employee edit and data query."
  }
];

const compliances = [
  "NIST SP 800-53 Standards: Enforcing federal information security controls and routine vulnerability checks.",
  "FedRAMP Alignment: Setting up cloud architectures inside government-approved AWS GovCloud subnets."
];

const techs = [
  {
    name: "AWS GovCloud",
    desc: "Isolated government cloud zones ensuring local physical host controls."
  },
  {
    name: "Next.js / React",
    desc: "Highly accessible, lightweight frontends optimized for screen readers and slow connections."
  },
  {
    name: "PostgreSQL / Row Isolation",
    desc: "Relational databases with row-level security ensuring strict data partition separations."
  }
];

const metrics = [
  {
    value: "100%",
    label: "Compliance check audits passed"
  },
  {
    value: "65%",
    label: "Decrease in portal load times"
  },
  {
    value: "0",
    label: "Unauthorized data events"
  }
];

const caseStudyHighlights = [
  "Transferred legacy mainframe files without data losses",
  "Configured strict multi-factor access protocols for employees",
  "Aligned entire system with federal NIST security guidelines"
];

const faqs = [
  {
    q: "Do you host databases inside federal GovCloud spaces?",
    a: "Yes. We deploy applications and data inside AWS GovCloud or Microsoft Azure Government environments depending on agency needs."
  },
  {
    q: "How do you ensure web accessibility for disabled citizens?",
    a: "We develop frontends that strictly adhere to WCAG 2.1 AA standards, utilizing semantic HTML, proper contrast, and keyboard navigation testing."
  }
];

export default function GovernmentPublicSectorPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <IndustryHero
        industryName="Government & Public Sector"
        title="Secure Gov-Tech &"
        highlightedWord="Public Operations"
        subtitle="Migrating public services to secure cloud infrastructures, building citizen access portals, and aligning with federal safety parameters."
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
      />

      <SectionNavbar sections={subSections} />

      <IndustryOverview
        overviewHeading="Compliant public systems and secure database migration paths"
        overviewDesc1="We build public-facing information portals, secure citizen record directories, and automated form processing systems. Our architectures utilize strict access rules, isolate data files, and log every system change."
        overviewDesc2="Our development teams migrate outdated government servers to secure cloud spaces, reducing operational costs while improving portal access times and data backup safety."
        challenges={challenges}
      />

      <IndustryFocusAreas focusAreas={focusAreas} />

      <IndustryCompliance compliances={compliances} />

      <IndustryTechStack techs={techs} />

      <IndustryCaseStudy
        caseStudyTitle="Secure mainframe database migration for county records office."
        caseStudyDesc="We migrated 4.5M citizen property documents from outdated office servers to AWS GovCloud. The setup includes automated daily backup scripts and strict access roles, cutting query response times by 80%."
        metrics={metrics}
        caseStudyHighlights={caseStudyHighlights}
      />

      <IndustryFAQ faqs={faqs} />

      <IndustryCTA
        ctaTitle="Modernize your civic"
        ctaHighlight="Cloud systems"
        ctaDesc="Consult with our principal gov-tech solutions architect to evaluate your legacy databases and cloud security."
        ctaBtnText="Consult Gov-Tech Architect"
      />
    </main>
  );
}
