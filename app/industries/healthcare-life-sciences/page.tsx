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
  "EHR file integration loops",
  "Sensor telemetry scale checks",
  "PII anonymization requirements"
];

const focusAreas = [
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
];

const compliances = [
  "HIPAA compliance guidelines: KMS key encryption at rest, private subnets, detailed developer logs, and tokenized authorization.",
  "GDPR Personal Protections: Enforcing absolute right-to-be-forgotten database routines and user consent cookies."
];

const techs = [
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
];

const metrics = [
  {
    value: "100%",
    label: "HIPAA compliance audit score"
  },
  {
    value: "<100ms",
    label: "FHIR API query latency"
  },
  {
    value: "50k+",
    label: "Active monitored wearables"
  }
];

const caseStudyHighlights = [
  "Configured serverless AWS Lambda telemetry cleansers",
  "Maintained a zero-downtime integration with clinical databases",
  "Passed rigorous third-party HIPAA validation checks"
];

const faqs = [
  {
    q: "How do you guarantee HIPAA compliance?",
    a: "We construct our cloud environments using AWS CloudFormation templates. We enforce encrypted databases, private API gateways, hourly database snapshots, and restrict code deployment access to certified developers."
  },
  {
    q: "Do you integrate with Epic and Cerner EHRs?",
    a: "Yes. We build custom API adapters utilizing the FHIR standard and HL7 protocols to query and update patient files securely."
  }
];

export default function HealthcareLifeSciencesPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <IndustryHero
        industryName="Healthcare & Life Sciences"
        title="HIPAA-compliant &"
        highlightedWord="Healthcare Systems"
        subtitle="Building clinical dashboard portals, real-time wearable telemetry collectors, and AI-driven medical record sanitizers under tight medical guidelines."
        bgImage="/assets/Home-page/industries/Healthcare.png"
      />

      <SectionNavbar sections={subSections} />

      <IndustryOverview
        overviewHeading="Secure patient record ecosystems and real-time medical data pipelines"
        overviewDesc1="We build clinical software systems and sensor database managers. All of our codebases operate inside isolated subnets with custom KMS data encryption keys, preventing unauthorized database reads."
        overviewDesc2="Our services connect medical records systems with modern interfaces, facilitating real-time patient charts, automatic scheduler checks, and secure sensor data parsing."
        challenges={challenges}
      />

      <IndustryFocusAreas focusAreas={focusAreas} />

      <IndustryCompliance compliances={compliances} />

      <IndustryTechStack techs={techs} />

      <IndustryCaseStudy
        caseStudyTitle="Deploying secure remote patient monitoring portal for national hospital group."
        caseStudyDesc="We developed a secure Next.js portal that coordinates real-time data from 50k patient pulse-oximeter devices. The system translates sensory signals, parses telemetry anomalies, and generates urgent reports for on-call nurses under FHIR standards."
        metrics={metrics}
        caseStudyHighlights={caseStudyHighlights}
      />

      <IndustryFAQ faqs={faqs} />

      <IndustryCTA
        ctaTitle="Build your secure"
        ctaHighlight="Healthcare portal"
        ctaDesc="Book a developer demand session with our principal healthcare systems engineer to discuss compliance audits."
        ctaBtnText="Consult Healthcare Engineer"
      />
    </main>
  );
}
