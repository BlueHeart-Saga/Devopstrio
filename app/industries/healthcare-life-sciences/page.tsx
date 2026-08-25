
import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/Schemas";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import Link from "next/link";

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
    bgImage: "/webp/assets/Industries-page/herocard/healthcare.webp"
  },
  overview: {
    heading: "Secure patient record ecosystems and real-time medical data pipelines",
    desc1: <>We build clinical software systems and sensor database managers under our <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">product engineering projects</Link>. All of our codebases operate inside isolated subnets with custom KMS data encryption keys, preventing unauthorized database reads.</>,
    desc2: <>Our services connect medical records systems with modern interfaces, facilitating real-time patient charts, automatic scheduler checks, and secure <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">sensor data parsing</Link>.</>
  },
  challenges: [
    {
      title: "EHR File Integration Loops",
      desc: <>Interfacing with legacy clinical record platforms (Epic, Cerner) using complex SOAP and HL7 transport envelopes under our <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">EHR integration services</Link>.</>
    },
    {
      title: "Sensor Telemetry Scale Checks",
      desc: <>Managing high-velocity data streams from thousands of patient telemetry monitors concurrently with our <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">cloud streaming tools</Link>.</>
    },
    {
      title: "PII Anonymization Requirements",
      desc: <>Scrubbing patient names, locations, and birthdays from doctor reports before sending data to analytics engines under <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">PII protection mandates</Link>.</>
    }
  ],
  solutions: [
    {
      title: "FHIR-Standard Translation Layer",
      desc: <>Setting up secure RESTful microservice routes that convert raw legacy payloads to <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">HL7 FHIR formats</Link>.</>
    },
    {
      title: "Streaming Sensor Accumulators",
      desc: <>Using <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">AWS Kinesis</Link> to catch, clean, and write sensor readings to TimeStream databases under 100ms.</>
    },
    {
      title: "NLP Clinical Redactors",
      desc: <>Deploying Python NLP text processors that scan records and mask identified <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">PII fields</Link> before export.</>
    }
  ],
  capabilities: [
    {
      title: "EHR Portals",
      desc: <>Constructing modern interfaces that fetch and update clinical records from legacy SOAP/FHIR backends utilizing <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">Next.js portals</Link>.</>
    },
    {
      title: "Telemetry Ingest",
      desc: <>Processing live temperature, pulse, and oxygen sensor data streams from medical wear devices via <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">streaming pipelines</Link>.</>
    },
    {
      title: "Medical Text Parsing",
      desc: <>Using NLP classifiers to anonymize patient names and addresses from clinical reports under <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">data anonymization rules</Link>.</>
    }
  ],
  useCases: [
    {
      title: "Remote Wearables Hub",
      result: <>Processed live data streams from 50k active patient wearables with 100% database write validation under <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">automated data pipelines</Link>.</>
    },
    {
      title: "Clinical Report Masker",
      result: <>Anonymized 1.2 million clinical records with 99.8% precision before study export with <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">HIPAA-validated scripts</Link>.</>
    }
  ],
  techs: [
    {
      name: "Next.js / TypeScript",
      desc: <>Safe and highly responsive front-end pages designed for administrative computers under <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">Next.js and TypeScript</Link>.</>
    },
    {
      name: "Amazon RDS PostgreSQL",
      desc: <>Encrypted relational database instances hosting patient directory metrics inside <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">AWS RDS</Link>.</>
    },
    {
      name: "FHIR APIs / HL7 Brokers",
      desc: <>Specialized protocol translators linking new systems to legacy clinical networks with <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">FHIR APIs</Link>.</>
    }
  ],
  outcomes: [
    {
      value: "100%",
      label: "HIPAA Compliance Score",
      desc: <>Rigorous <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">HIPAA audits</Link> passed.</>
    },
    {
      value: "<100ms",
      label: "FHIR Query Latency",
      desc: <>Fast clinical database fetches through <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">optimized query caches</Link>.</>
    },
    {
      value: "50k+",
      label: "Monitored Devices",
      desc: <>Real-time wearable telemetry flows over <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">scalable event hubs</Link>.</>
    }
  ],
  caseStudy: {
    title: "Deploying secure remote patient monitoring portal for national hospital group.",
    desc: <>We developed a secure Next.js portal that coordinates real-time data from 50k patient pulse-oximeter devices. The system translates sensory signals, parses telemetry anomalies, and generates urgent reports for on-call nurses under <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">FHIR standards</Link>.</>,
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
      desc: <>KMS database encryption, <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">isolated subnets</Link>, detailed developer logs, and tokenized authorization routes.</>
    },
    {
      title: "GDPR Information Privacy",
      desc: <>Enforcing absolute database deletion routes and <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">data privacy safeguards</Link>.</>
    }
  ],
  whyChoose: [
    {
      title: "HIPAA Certified Architects",
      desc: <>All of our engineers hold cloud certifications and are trained in medical <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">security policies</Link>.</>
    },
    {
      title: "FHIR-Native Interoperability",
      desc: <>We map legacy datasets to modern <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">HL7 standards</Link> right from inception.</>
    },
    {
      title: "Automated Data Safeguards",
      desc: <>Continuous system logs track all administrative access requests and database queries under <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">SOC2 audit setups</Link>.</>
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
    ctaDesc: <>Book a developer demand session with our principal <Link href="/contact#contact-form" className="text-[#E11D48] hover:underline">healthcare systems engineer</Link> to discuss compliance audits.</>,
    ctaBtnText: "Consult Healthcare Engineer"
  },
  faqs: [
    {
      q: "How do you guarantee HIPAA compliance?",
      a: <>We construct our cloud environments using AWS CloudFormation templates. We enforce encrypted databases, private <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">API gateways</Link>, hourly database snapshots, and restrict code deployment access to certified developers.</>
    },
    {
      q: "Do you integrate with Epic and Cerner EHRs?",
      a: <>Yes. We build custom API adapters utilizing the FHIR standard and HL7 protocols to query and update <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">patient files securely</Link>.</>
    }
  ]
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${data.hero.title} ${data.hero.highlightedWord}`,
    description: data.hero.subtitle,
    alternates: {
      canonical: `/industries/healthcare-life-sciences`
    }
  };
}

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

      {/* 12. Insights */}
      <IndustryInsights insights={data.insights} />

      {/* 13. Related Services */}
      <IndustryRelatedServices relatedServices={data.relatedServices} />

      {/* 14. FAQ */}
      <IndustryFAQ faqs={data.faqs} />

      {/* 15. CTA */}
      <IndustryCTA
        ctaTitle={data.cta.ctaTitle}
        ctaHighlight={data.cta.ctaHighlight}
        ctaDesc={data.cta.ctaDesc}
        ctaBtnText={data.cta.ctaBtnText}
      />

    </main>
  );
}
