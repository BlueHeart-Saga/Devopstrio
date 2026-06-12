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
    title: "HIPAA-compliant &",
    highlightedWord: "Healthcare Systems",
    subtitle: "Building clinical dashboard portals, real-time wearable telemetry collectors, and AI-driven medical record sanitizers under tight medical guidelines.",
    bgImage: "/assets/Industries-page/herocard/healthcare.png"
  },
  overview: {
    heading: "Secure patient record ecosystems and real-time medical data pipelines",
    desc1: "We build clinical software systems and sensor database managers. All of our codebases operate inside isolated subnets with custom KMS data encryption keys, preventing unauthorized database reads.",
    desc2: "Our services connect medical records systems with modern interfaces, facilitating real-time patient charts, automatic scheduler checks, and secure sensor data parsing."
  },
  challenges: [
    {
      title: "EHR File Integration Loops",
      desc: "Interfacing with legacy clinical record platforms (Epic, Cerner) using complex SOAP and HL7 transport envelopes."
    },
    {
      title: "Sensor Telemetry Scale Checks",
      desc: "Managing high-velocity data stream streams from thousands of patient telemetry monitors concurrently."
    },
    {
      title: "PII Anonymization Requirements",
      desc: "Scrubbing patient names, locations, and birthdays from doctor reports before sending data to analytics engines."
    }
  ],
  solutions: [
    {
      title: "FHIR-Standard Translation Layer",
      desc: "Setting up secure RESTful microservice routes that convert raw legacy payloads to HL7 FHIR formats."
    },
    {
      title: "Streaming Sensor Accumulators",
      desc: "Using AWS Kinesis to catch, clean, and write sensor readings to TimeStream databases under 100ms."
    },
    {
      title: "NLP Clinical Redactors",
      desc: "Deploying Python NLP text processors that scan records and mask identified PII fields before export."
    }
  ],
  capabilities: [
    {
      title: "EHR Portals",
      desc: "Constructing modern interfaces that fetch and update clinical records from legacy SOAP/FHIR backends."
    },
    {
      title: "Telemetry Ingest",
      desc: "Processing live temperature, pulse, and oxygen sensor data streams from medical wear devices."
    },
    {
      title: "Medical Text Parsing",
      desc: "Using NLP classifiers to anonymize patient names and addresses from clinical reports."
    }
  ],
  useCases: [
    {
      title: "Remote Wearables Hub",
      result: "Processed live data streams from 50k active patient wearables with 100% database write validation."
    },
    {
      title: "Clinical Report Masker",
      result: "Anonymized 1.2 million clinical records with 99.8% precision before study export."
    }
  ],
  techs: [
    {
      name: "Next.js / TypeScript",
      desc: "Safe and highly responsive front-end pages designed for administrative computers."
    },
    {
      name: "Amazon RDS PostgreSQL",
      desc: "Encrypted relational database instances hosting patient directory metrics."
    },
    {
      name: "FHIR APIs / HL7 Brokers",
      desc: "Specialized protocol translators linking new systems to legacy clinical networks."
    }
  ],
  outcomes: [
    {
      value: "100%",
      label: "HIPAA Compliance Score",
      desc: "Rigorous certification checks passed."
    },
    {
      value: "<100ms",
      label: "FHIR Query Latency",
      desc: "Fast clinical database fetches."
    },
    {
      value: "50k+",
      label: "Monitored Devices",
      desc: "Real-time wearable telemetry flows."
    }
  ],
  caseStudy: {
    title: "Deploying secure remote patient monitoring portal for national hospital group.",
    desc: "We developed a secure Next.js portal that coordinates real-time data from 50k patient pulse-oximeter devices. The system translates sensory signals, parses telemetry anomalies, and generates urgent reports for on-call nurses under FHIR standards.",
    metrics: [
      { value: "100%", label: "HIPAA Audit" },
      { value: "<100ms", label: "Query Speed" },
      { value: "50k+", label: "Wearables Configured" }
    ],
    highlights: [
      "Configured serverless AWS Lambda telemetry cleansers",
      "Maintained a zero-downtime integration with clinical databases",
      "Passed rigorous third-party HIPAA validation checks"
    ]
  },
  compliance: [
    {
      title: "HIPAA Security Compliance",
      desc: "KMS database encryption, isolated subnets, detailed developer logs, and tokenized authorization routes."
    },
    {
      title: "GDPR Information Privacy",
      desc: "Enforcing absolute database deletion routes and student data safeguards."
    }
  ],
  whyChoose: [
    {
      title: "HIPAA Certified Architects",
      desc: "All of our engineers hold cloud certifications and are trained in medical security policies."
    },
    {
      title: "FHIR-Native Interoperability",
      desc: "We map legacy datasets to modern HL7 standards right from inception."
    },
    {
      title: "Automated Data Safeguards",
      desc: "Continuous system logs track all administrative access requests and database queries."
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
      title: "Interfacing with FHIR APIs",
      desc: "How we configured microservices to translate legacy SOAP payloads into clean FHIR schemas.",
      link: "/insights"
    },
    {
      title: "Enforcing HIPAA database keys",
      desc: "A technical guide to implementing KMS envelope encryption on medical record databases.",
      link: "/insights"
    }
  ],
  cta: {
    ctaTitle: "Build your secure",
    ctaHighlight: "Healthcare portal",
    ctaDesc: "Book a developer demand session with our principal healthcare systems engineer to discuss compliance audits.",
    ctaBtnText: "Consult Healthcare Engineer"
  },
  faqs: [
    {
      q: "How do you guarantee HIPAA compliance?",
      a: "We construct our cloud environments using AWS CloudFormation templates. We enforce encrypted databases, private API gateways, hourly database snapshots, and restrict code deployment access to certified developers."
    },
    {
      q: "Do you integrate with Epic and Cerner EHRs?",
      a: "Yes. We build custom API adapters utilizing the FHIR standard and HL7 protocols to query and update patient files securely."
    }
  ]
};

export default function HealthcareLifeSciencesPage() {
  const mappedOverviewChallenges = data.challenges.map(c => c.title);
  const mappedCompliance = data.compliance.map(c => `${c.title}: ${c.desc}`);

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      
      {/* 1. Hero */}
      <IndustryHero
        industryName="Healthcare & Life Sciences"
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
