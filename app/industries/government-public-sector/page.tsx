"use client";

import React from "react";
import { SectionNavbar } from "@/components/ui/SectionNavbar";

// Component imports
import { IndustryHero } from "@/sections/industries/detail/IndustryHero";
import { IndustryOverview } from "@/sections/industries/detail/IndustryOverview";
import { IndustryChallenges } from "@/sections/industries/detail/IndustryChallenges";
import { IndustrySolutions } from "@/sections/industries/detail/IndustrySolutions";
import { IndustryFocusAreas } from "@/sections/industries/detail/IndustryFocusAreas";
import { IndustryUseCases } from "@/sections/industries/detail/IndustryUseCases";
import { IndustryTechStack } from "@/sections/industries/detail/IndustryTechStack";
import { IndustryOutcomes } from "@/sections/industries/detail/IndustryOutcomes";
import { IndustryCaseStudy } from "@/sections/industries/detail/IndustryCaseStudy";
import { IndustryCompliance } from "@/sections/industries/detail/IndustryCompliance";
import { IndustryWhyChoose } from "@/sections/industries/detail/IndustryWhyChoose";
import { IndustryRelatedServices } from "@/sections/industries/detail/IndustryRelatedServices";
import { IndustryInsights } from "@/sections/industries/detail/IndustryInsights";
import { IndustryFAQ } from "@/sections/industries/detail/IndustryFAQ";
import { IndustryCTA } from "@/sections/industries/detail/IndustryCTA";

const subSections = [
  { id: "overview", label: "Overview" },
  { id: "challenges", label: "Challenges" },
  { id: "solutions", label: "Solutions" },
  { id: "capabilities", label: "Capabilities" },
  { id: "use-cases", label: "Use Cases" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "outcomes", label: "Outcomes" },
  { id: "case-study", label: "Case Study" },
  { id: "compliance", label: "Compliance" },
  { id: "why-choose", label: "Why Choose Us" },
  { id: "faq", label: "FAQ" }
];

const data = {
  hero: {
    title: "Secure Gov-Tech &",
    highlightedWord: "Public Operations",
    subtitle: "Migrating public services to secure cloud infrastructures, building citizen access portals, and aligning with federal safety parameters.",
    bgImage: "/assets/Industries-page/herocard/public.png"
  },
  overview: {
    heading: "Compliant public systems and secure database migration paths",
    desc1: "We build public-facing information portals, secure citizen record directories, and automated form processing systems. Our architectures utilize strict access rules, isolate data files, and log every system change.",
    desc2: "Our development teams migrate outdated government servers to secure cloud spaces, reducing operational costs while improving portal access times and data backup safety."
  },
  challenges: [
    {
      title: "Federal Compliance Locks",
      desc: "Meeting complex Gov-Cloud mandates, NIST standards, and ensuring all host assets stay inside state borders."
    },
    {
      title: "Legacy Server Data Migration",
      desc: "Safely shifting decades of citizen records from legacy on-premise hardware to cloud databases without data loss."
    },
    {
      title: "High Citizen Volume Traffic Peaks",
      desc: "Configuring public forms to absorb immense traffic surges during tax seasons or benefit applications."
    }
  ],
  solutions: [
    {
      title: "Isolated Gov-Cloud Hosting",
      desc: "Deploying applications inside AWS GovCloud or Azure Government zones with restricted admin controls."
    },
    {
      title: "Schema Mapping & Validation",
      desc: "Using script-driven migration pipelines to format, clean, and verify relational records as they migrate."
    },
    {
      title: "Dynamic Load Balancers",
      desc: "Integrating autoscaling pod groups that dynamically scale out based on current API requests."
    }
  ],
  capabilities: [
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
  ],
  useCases: [
    {
      title: "County Record Modernization",
      result: "Migrated 4.5 million legal documents to Gov-Cloud with zero loss."
    },
    {
      title: "Citizen Application Ingress",
      result: "Reduced form processing cycles from 14 business days down to 8 minutes."
    }
  ],
  techs: [
    {
      name: "AWS GovCloud",
      desc: "Isolated government cloud zones ensuring local physical host controls."
    },
    {
      name: "Next.js / React",
      desc: "Highly accessible, lightweight frontends optimized for screen readers and slow connections."
    },
    {
      name: "PostgreSQL / Row Security",
      desc: "Relational databases with row-level security ensuring strict data partition separations."
    }
  ],
  outcomes: [
    {
      value: "100%",
      label: "Audit Pass Rate",
      desc: "NIST and FedRAMP compliance standard verification status."
    },
    {
      value: "65%",
      label: "Load Time Reduction",
      desc: "Portal load time enhancements."
    },
    {
      value: "0",
      label: "Security Violations",
      desc: "Protected citizen records against data disclosures."
    }
  ],
  caseStudy: {
    title: "Secure mainframe database migration for county records office.",
    desc: "We migrated 4.5M citizen property documents from outdated office servers to AWS GovCloud. The setup includes automated daily backup scripts and strict access roles, cutting query response times by 80%.",
    metrics: [
      { value: "100%", label: "Audit Success" },
      { value: "65%", label: "Speed Boost" },
      { value: "0", label: "Breach Incident" }
    ],
    highlights: [
      "Transferred legacy mainframe files without data losses",
      "Configured strict multi-factor access protocols for employees",
      "Aligned entire system with federal NIST security guidelines"
    ]
  },
  compliance: [
    {
      title: "NIST SP 800-53 Standard Compliance",
      desc: "Enforcing federal information security controls and routine vulnerability checks."
    },
    {
      title: "FedRAMP Cloud Alignments",
      desc: "Setting up cloud architectures inside government-approved AWS GovCloud subnets."
    }
  ],
  whyChoose: [
    {
      title: "Accessibility Standards First",
      desc: "Our web platforms strictly follow WCAG guidelines to support all citizens."
    },
    {
      title: "FedRAMP-Aligned Architectures",
      desc: "We deploy secure partitions matching state and federal cloud security regulations."
    },
    {
      title: "Detailed Audit Logs",
      desc: "Immutable ledger tracking ensures every transaction and database edit is accounted for."
    }
  ],
  relatedServices: [
    { title: "Cloud Platform Engineering", href: "/services/cloud-platform-engineering" },
    { title: "DevOps & Release Automation", href: "/services/devops-automation" },
    { title: "Product Engineering", href: "/services/product-engineering" },
    { title: "Site Reliability Engineering", href: "/services/sre-operations" }
  ],
  insights: [
    {
      title: "Adhering to WCAG AA Guidelines",
      desc: "Best practices to design and test accessible government web platforms for all citizens.",
      link: "/insights"
    },
    {
      title: "Hosting databases in AWS GovCloud",
      desc: "A technical breakdown of host security controls and IAM requirements insideGovCloud partitions.",
      link: "/insights"
    }
  ],
  cta: {
    ctaTitle: "Modernize your civic",
    ctaHighlight: "Cloud systems",
    ctaDesc: "Consult with our principal gov-tech solutions architect to evaluate your legacy databases and cloud security.",
    ctaBtnText: "Consult Gov-Tech Architect"
  },
  faqs: [
    {
      q: "Do you host databases inside federal GovCloud spaces?",
      a: "Yes. We deploy applications and data inside AWS GovCloud or Microsoft Azure Government environments depending on agency needs."
    },
    {
      q: "How do you ensure web accessibility for disabled citizens?",
      a: "We develop frontends that strictly adhere to WCAG 2.1 AA standards, utilizing semantic HTML, proper contrast, and keyboard navigation testing."
    }
  ]
};

export default function GovernmentPublicSectorPage() {
  const mappedOverviewChallenges = data.challenges.map(c => c.title);
  const mappedCompliance = data.compliance.map(c => `${c.title}: ${c.desc}`);

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      
      {/* 1. Hero */}
      <IndustryHero
        industryName="Government & Public Sector"
        title={data.hero.title}
        highlightedWord={data.hero.highlightedWord}
        subtitle={data.hero.subtitle}
        bgImage={data.hero.bgImage}
      />

      {/* Sticky Secondary Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 2. Overview */}
      <IndustryOverview
        overviewHeading={data.overview.heading}
        overviewDesc1={data.overview.desc1}
        overviewDesc2={data.overview.desc2}
        challenges={mappedOverviewChallenges}
      />

      {/* 3. Challenges We Solve */}
      <IndustryChallenges challenges={data.challenges} />

      {/* 4. Solutions We Deliver */}
      <IndustrySolutions solutions={data.solutions} />

      {/* 5. Core Capabilities */}
      <IndustryFocusAreas focusAreas={data.capabilities} />

      {/* 6. Use Cases */}
      <IndustryUseCases useCases={data.useCases} />

      {/* 7. Technology Stack */}
      <IndustryTechStack techs={data.techs} />

      {/* 8. Business Outcomes */}
      <IndustryOutcomes outcomes={[
        { value: data.outcomes[0].value, label: data.outcomes[0].label, desc: data.outcomes[0].desc },
        { value: data.outcomes[1].value, label: data.outcomes[1].label, desc: data.outcomes[1].desc },
        { value: data.outcomes[2].value, label: data.outcomes[2].label, desc: data.outcomes[2].desc }
      ]} />

      {/* 9. Success Stories */}
      <IndustryCaseStudy
        caseStudyTitle={data.caseStudy.title}
        caseStudyDesc={data.caseStudy.desc}
        metrics={data.caseStudy.metrics}
        caseStudyHighlights={data.caseStudy.highlights}
      />

      {/* 10. Compliance & Security */}
      <IndustryCompliance compliances={mappedCompliance} />

      {/* 11. Why Devopstrio */}
      <IndustryWhyChoose whyChoose={data.whyChoose} />

      {/* 12. Related Services */}
      <IndustryRelatedServices relatedServices={data.relatedServices} />

      {/* 13. Insights */}
      <IndustryInsights insights={data.insights} />

      {/* 14. FAQ */}
      <IndustryFAQ faqs={data.faqs} />

      {/* CTA */}
      <IndustryCTA
        ctaTitle={data.cta.ctaTitle}
        ctaHighlight={data.cta.ctaHighlight}
        ctaDesc={data.cta.ctaDesc}
        ctaBtnText={data.cta.ctaBtnText}
      />

    </main>
  );
}
