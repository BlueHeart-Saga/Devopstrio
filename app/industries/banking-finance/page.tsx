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
  "High-frequency ledger lock prevention",
  "Automated real-time fraud scoring",
  "PII field isolation & tokenization"
];

const focusAreas = [
  {
    title: "High-Frequency Ledgers",
    desc: "Building database schemas that process thousands of debit/credit executions per second without table deadlocks."
  },
  {
    title: "Real-time Fraud Checks",
    desc: "AI pipelines that score incoming card swipes against user historical profiles in under 35ms."
  },
  {
    title: "Open Banking APIs",
    desc: "Standardized secure endpoints facilitating automated credit scoring and bank-to-bank transfers."
  }
];

const compliances = [
  "PCI-DSS Level 1: Encrypted storage filters, quarterly vulnerabilities scans, and strict tokenized credit caches.",
  "SOC-2 Type II Audit: Strict security control configurations, full developer git access tracking, and daily backups."
];

const techs = [
  {
    name: "PostgreSQL / Amazon Aurora",
    desc: "Relational write-nodes configured with row-level locks and secondary read pools."
  },
  {
    name: "Kafka Streaming Pipelines",
    desc: "Real-time telemetry transport streams feeding fraud classification servers."
  },
  {
    name: "FastAPI / Python",
    desc: "Lightweight APIs connecting web apps with model processors."
  }
];

const metrics = [
  {
    value: "35ms",
    label: "Average fraud-check speed"
  },
  {
    value: "10M+",
    label: "Transactions processed daily"
  },
  {
    value: "99.999%",
    label: "Transaction node uptime"
  }
];

const caseStudyHighlights = [
  "Constructed low-overhead Python model endpoints",
  "Setup Docker containers inside private AWS subnets",
  "Trained model to capture 99.4% of unauthorized swipes"
];

const faqs = [
  {
    q: "How do you guarantee transaction consistency?",
    a: "We enforce ACID transactions inside PostgreSQL database engines. We use selective row lock triggers and isolation parameters to prevent double-spending or account balance drifts."
  },
  {
    q: "What payment gateways do you integrate with?",
    a: "We build custom handlers for Stripe, Adyen, Apple Pay, and direct bank transfers utilizing secure webhook callbacks."
  }
];

export default function BankingFinancePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <IndustryHero
        industryName="Banking & Finance"
        title="Next-generation Ledger &"
        highlightedWord="Banking Solutions"
        subtitle="Building secure transactional ledgers, AI-driven fraud classification layers, and audited payment pathways under SOC-2 guidelines."
        bgImage="/assets/Home-page/industries/Financial-Services.png"
      />

      <SectionNavbar sections={subSections} />

      <IndustryOverview
        overviewHeading="Resilient financial platforms designed for transaction volume and security"
        overviewDesc1="We construct transaction-safe databases, real-time ledgers, and automated payment gateways. Our architectures isolate critical data, run prompt PII mask filters, and utilize composite indices for lightning-fast reads."
        overviewDesc2="We coordinate closely with bank operators and card systems to deploy private API nodes that scale under major transaction volumes while maintaining 100% data audit integrity."
        challenges={challenges}
      />

      <IndustryFocusAreas focusAreas={focusAreas} />

      <IndustryCompliance compliances={compliances} />

      <IndustryTechStack techs={techs} />

      <IndustryCaseStudy
        caseStudyTitle="Deploying real-time fraud check pipelines for national digital bank."
        caseStudyDesc="We engineered and integrated a Kafka-driven fraud analysis pipeline that evaluates card swipe coordinates and purchase value parameters against custom XGBoost models. The system scores transactions inside a 35ms window, blocking compromises immediately."
        metrics={metrics}
        caseStudyHighlights={caseStudyHighlights}
      />

      <IndustryFAQ faqs={faqs} />

      <IndustryCTA
        ctaTitle="Build your secure"
        ctaHighlight="Fintech ledger"
        ctaDesc="Book a dedicated workspace mapping session with our principal fintech solutions architect to design transaction-safe databases."
        ctaBtnText="Consult Fintech Architect"
      />
    </main>
  );
}
