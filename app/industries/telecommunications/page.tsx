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
    title: "Cloud-native &",
    highlightedWord: "Telecom Networks",
    subtitle: "Configuring high-bandwidth network monitors, automated customer billing databases, and 5G edge telemetry nodes.",
    bgImage: "/assets/Industries-page/herocard/Telecommunication.png"
  },
  overview: {
    heading: "Carrier-grade software architectures for high-throughput networks",
    desc1: "We build cloud-native network orchestrations, robust OSS/BSS platforms, and high-frequency telecom billing databases. Our services process millions of simultaneous call and data event records without performance lag.",
    desc2: "Our engineering teams deploy secure API nodes that manage user accounts, coordinate network routing tables, and track 5G telemetry feeds under strict carrier parameters."
  },
  challenges: [
    {
      title: "CDR Database Locking",
      desc: "Preventing write bottlenecks when millions of Call Detail Records (CDRs) hit logging systems concurrently during peak hours."
    },
    {
      title: "5G Node Routing Latency",
      desc: "Routing edge telemetry packages across distributed cell-site nodes without causing transmission latency."
    },
    {
      title: "OSS/BSS Database Sync",
      desc: "Keeping client billing balances and mobile data plans synchronized across isolated core platforms."
    }
  ],
  solutions: [
    {
      title: "Distributed Cassandra Ledgers",
      desc: "Deploying multi-region Cassandra databases to write CDR event records with zero single-point failures."
    },
    {
      title: "Go-Native Edge Routers",
      desc: "Configuring lightweight compiled Go processors on cell tower gateway units to stream metrics in under 15ms."
    },
    {
      title: "Kafka Event Synchronization",
      desc: "Using Kafka streaming buses to synchronize account balances across billing and usage engines."
    }
  ],
  capabilities: [
    {
      title: "Cloud-Native Network",
      desc: "Architecting Kubernetes cluster environments to manage dynamic service scaling and cell tower metrics."
    },
    {
      title: "Event Record Billing",
      desc: "Creating low-latency databases to write and score user data transactions without system lag."
    },
    {
      title: "Edge Telemetry",
      desc: "Deploying telemetry transport lines collecting real-time bandwidth metrics from cell site routers."
    }
  ],
  useCases: [
    {
      title: "High-Volume CDR Log Ingest",
      result: "Logged 500 million transaction events daily with zero database lockouts."
    },
    {
      title: "5G Telemetry Edge Feeds",
      result: "Reduced routing coordinate latencies down to under 15ms globally."
    }
  ],
  techs: [
    {
      name: "Kubernetes / EKS",
      desc: "Dynamic node scaling engines handling traffic spikes across cellular networks."
    },
    {
      name: "Apache Cassandra",
      desc: "Distributed databases writing call records with zero single points of failure."
    },
    {
      name: "Go Programming",
      desc: "Lightweight network microservices compiled for rapid memory execution."
    }
  ],
  outcomes: [
    {
      value: "<15ms",
      label: "Edge Routing Latency",
      desc: "Speed of telemetry signal collection."
    },
    {
      value: "500M+",
      label: "CDR Records Daily",
      desc: "Billing transaction capacity."
    },
    {
      value: "99.999%",
      label: "Network Uptime",
      desc: "Target carrier reliability metrics."
    }
  ],
  caseStudy: {
    title: "High-throughput call record engine for national cellular carrier.",
    desc: "We engineered a distributed database system utilizing Cassandra and Go to log cellular data records (CDRs) in real-time. The platform securely writes 500M daily records, serving billing pipelines without downtime.",
    metrics: [
      { value: "<15ms", label: "Edge Speed" },
      { value: "500M+", label: "CDR Records/Day" },
      { value: "99.999%", label: "Carrier Uptime" }
    ],
    highlights: [
      "Eliminated database query delays on user billing dashboards",
      "Deployed autoscaling cellular telemetry nodes on AWS",
      "Enabled real-time data usage warning triggers for mobile users"
    ]
  },
  compliance: [
    {
      title: "GDPR Telecom Mandates",
      desc: "Tokenizing customer phone locations, masking user call lists, and enforcing automated data retention periods."
    },
    {
      title: "ISO 27001 Protections",
      desc: "Enforcing strict network firewall setups and continuous threat assessment monitoring."
    }
  ],
  whyChoose: [
    {
      title: "Carrier-Grade Performance",
      desc: "We build network backends designed to support high volume mobile traffic peaks."
    },
    {
      title: "Low-Latency Edge Ingest",
      desc: "We optimize Go/Rust service components to parse and route telemetry signals under 15ms."
    },
    {
      title: "High Data Redundancy",
      desc: "Cassandra nodes mirror records across datacenters, preventing packet losses."
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
      title: "Designing carrier-grade CDR pipelines",
      desc: "A deep dive into Cassandra data partitions and caching models for telecom networks.",
      link: "/insights"
    },
    {
      title: "Optimizing 5G cell site telemetry",
      desc: "How we configured lightweight Go microservices to route tower logs to core databases.",
      link: "/insights"
    }
  ],
  cta: {
    ctaTitle: "Modernize your cellular",
    ctaHighlight: "Network backend",
    ctaDesc: "Consult with our principal telecom network architect to optimize your billing databases and 5G telemetry logs.",
    ctaBtnText: "Consult Telecom Architect"
  },
  faqs: [
    {
      q: "How do you ensure billing data consistency?",
      a: "We run distributed databases with strict consistency parameters, writing redundant copies of data across isolated physical zones to prevent packet losses."
    },
    {
      q: "Do you support 5G network integration?",
      a: "Yes. We develop cloud-native network functions (CNFs) that coordinate with edge servers to balance data loads dynamically."
    }
  ]
};

export default function TelecommunicationsPage() {
  const mappedOverviewChallenges = data.challenges.map(c => c.title);
  const mappedCompliance = data.compliance.map(c => `${c.title}: ${c.desc}`);

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      
      {/* 1. Hero */}
      <IndustryHero
        industryName="Telecommunications"
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
