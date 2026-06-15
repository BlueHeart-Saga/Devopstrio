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
    title: "Next-generation Ledger &",
    highlightedWord: "Banking Solutions",
    subtitle: "Building secure transactional ledgers, AI-driven fraud classification layers, and audited payment pathways under SOC-2 guidelines.",
    bgImage: "/assets/Industries-page/herocard/finance.png"
  },
  overview: {
    heading: "Resilient financial platforms designed for transaction volume and security",
    desc1: "We construct transaction-safe databases, real-time ledgers, and automated payment gateways. Our architectures isolate critical data, run prompt PII mask filters, and utilize composite indices for lightning-fast reads.",
    desc2: "We coordinate closely with bank operators and card systems to deploy private API nodes that scale under major transaction volumes while maintaining 100% data audit integrity."
  },
  challenges: [
    {
      title: "High-Frequency Ledger Lock Prevention",
      desc: "Preventing transactional deadlocks and account balance deviations when millions of debit/credit executions fire simultaneously."
    },
    {
      title: "Automated Real-Time Fraud Scoring",
      desc: "Analyzing swipes against historic profiles within milliseconds to block card compromises without rejecting legitimate users."
    },
    {
      title: "PII Field Isolation & Tokenization",
      desc: "Safely encrypting social security numbers, address variables, and bank balances to satisfy strict audit controls."
    }
  ],
  solutions: [
    {
      title: "Active-Active Multi-Region Ledgers",
      desc: "Databases spread across geographic regions with synchronous replication cycles, preventing data loss during datacenter failures."
    },
    {
      title: "Streaming ML Fraud Classifiers",
      desc: "Integrating Kafka message lines with Python ML inference clusters to screen charges within a tight 35ms response window."
    },
    {
      title: "Dynamic Encryption Filters",
      desc: "Using database triggers and application middleware to isolate, decrypt, and tokenise fields as they ingress."
    }
  ],
  capabilities: [
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
  ],
  useCases: [
    {
      title: "Dynamic Credit Scoring",
      result: "92% faster loan approval decision loops via real-time customer data aggregation."
    },
    {
      title: "Transaction Ledger Auditing",
      result: "Zero account balance deviations across 40 million monthly payments."
    }
  ],
  techs: [
    {
      name: "PostgreSQL / Aurora",
      desc: "Relational database write-nodes configured with row-level locks and secondary read pools."
    },
    {
      name: "Kafka Streaming Pipelines",
      desc: "Real-time telemetry transport streams feeding fraud classification servers."
    },
    {
      name: "FastAPI / Python",
      desc: "Lightweight APIs connecting web apps with model processors."
    }
  ],
  outcomes: [
    {
      value: "35ms",
      label: "Fraud-check Speed",
      desc: "Average transaction scoring times."
    },
    {
      value: "10M+",
      label: "Daily Transactions",
      desc: "Secure transactions completed without latency spikes."
    },
    {
      value: "99.999%",
      label: "Ledger Uptime",
      desc: "Target system reliability figures."
    }
  ],
  caseStudy: {
    title: "Deploying real-time fraud check pipelines for national digital bank.",
    desc: "We engineered and integrated a Kafka-driven fraud analysis pipeline that evaluates card swipe coordinates and purchase value parameters against custom XGBoost models. The system scores transactions inside a 35ms window, blocking compromises immediately.",
    metrics: [
      { value: "35ms", label: "Fraud Check latency" },
      { value: "10M+", label: "Daily Transactions" },
      { value: "99.999%", label: "Node Uptime" }
    ],
    highlights: [
      "Constructed low-overhead Python model endpoints",
      "Setup Docker containers inside private AWS subnets",
      "Trained model to capture 99.4% of unauthorized swipes"
    ]
  },
  compliance: [
    {
      title: "PCI-DSS Level 1 Alignments",
      desc: "Encrypted storage filters, quarterly vulnerability scans, and strict tokenized credit caches."
    },
    {
      title: "SOC-2 Type II Certification",
      desc: "Strict security control configurations, full developer access tracking, and daily backups."
    }
  ],
  whyChoose: [
    {
      title: "Enterprise Grade Ledgers",
      desc: "Our database schemas prevent double-spending and ledger drift under high concurrency."
    },
    {
      title: "Rigorous Compliance Checks",
      desc: "All financial modules are pre-audited to satisfy federal financial protection standards."
    },
    {
      title: "24/7 Security Responses",
      desc: "Automated alert relays notify on-call reliability engineers on transaction failures."
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
      title: "Optimizing PostgreSQL Concurrency",
      desc: "How we configured row-level locking parameters to prevent transactional deadlocks during peak processing volumes.",
      link: "/insights"
    },
    {
      title: "Designing Real-Time Fraud Streams",
      desc: "A technical review of our Kafka message flow that routes swipes to prediction nodes under 35ms.",
      link: "/insights"
    }
  ],
  cta: {
    ctaTitle: "Build your secure",
    ctaHighlight: "Fintech ledger",
    ctaDesc: "Book a dedicated workspace mapping session with our principal fintech solutions architect to design transaction-safe databases.",
    ctaBtnText: "Consult Fintech Architect"
  },
  faqs: [
    {
      q: "How do you guarantee transaction consistency?",
      a: "We enforce ACID transactions inside PostgreSQL database engines. We use selective row lock triggers and isolation parameters to prevent double-spending or account balance drifts."
    },
    {
      q: "What payment gateways do you integrate with?",
      a: "We build custom handlers for Stripe, Adyen, Apple Pay, and direct bank transfers utilizing secure webhook callbacks."
    }
  ]
};

export default function BankingFinancePage() {
  const mappedOverviewChallenges = data.challenges.map(c => c.title);
  const mappedCompliance = data.compliance.map(c => `${c.title}: ${c.desc}`);

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      
      {/* 1. Hero */}
      <IndustryHero
        industryName="Banking & Finance"
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
        image={data.hero.bgImage}
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
      <IndustryOutcomes outcomes={data.outcomes} />

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
