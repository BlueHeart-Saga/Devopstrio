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
    title: "Smart factories &",
    highlightedWord: "Industrial Automation",
    subtitle: "Deploying predictive machine maintenance metrics, automated supply chain forecasting filters, and industrial IoT monitoring systems.",
    bgImage: "/assets/Industries-page/herocard/manufacturing.png"
  },
  overview: {
    heading: "Integrated asset tracking and real-time telemetry systems",
    desc1: "We build manufacturing telemetry databases and supply chain tracking hubs. Our codebases process IoT temperature metrics, predict assembly line halts, and isolate warehouse inventory updates.",
    desc2: "Our services connect hardware sensors with cloud dashboards, offering real-time plant monitors, automated vendor re-orders, and equipment safety triggers."
  },
  challenges: [
    {
      title: "IoT Telemetry Packet Drops",
      desc: "Preventing packet loss and data gaps when factory sensors send millions of telemetry events over unstable local networks."
    },
    {
      title: "Legacy Machine Integration Barriers",
      desc: "Interfacing modern cloud dashboards with legacy PLCs utilizing non-standard industrial protocols."
    },
    {
      title: "Supply Chain Coordinate Latency",
      desc: "Updating inventory counts and shipping locations in real-time across regional warehouse nodes."
    }
  ],
  solutions: [
    {
      title: "AMQP Edge Spooling Buffers",
      desc: "Configuring edge gateways with local AMQP message queues to spool telemetry data during internet drops."
    },
    {
      title: "Modbus/OPC-UA API Adapters",
      desc: "Deploying containerized Go processors at the edge to translate legacy hardware protocols to clean JSON payloads."
    },
    {
      title: "Time-Series Stream Aggregators",
      desc: "Using InfluxDB clusters to compile incoming tracking feeds and calculate routing speeds under 50ms."
    }
  ],
  capabilities: [
    {
      title: "Predictive Maintenance",
      desc: "Sensors monitoring machine heat and vibration frequency, warning engineers before breakdowns occur."
    },
    {
      title: "Supply Chain Tracking",
      desc: "Real-time GPS routing grids tracking freight trucks, containers, and inventory levels."
    },
    {
      title: "Factory IoT Hubs",
      desc: "Secure message brokers bridging hardware metrics with cloud databases under low network bandwidth."
    }
  ],
  useCases: [
    {
      title: "Assembly Line Monitoring",
      result: "Reduced automotive assembly line downtime by 38% via time-series temperature alerts."
    },
    {
      title: "Auto Parts Re-Ordering",
      result: "Automated warehouse logistics parts orders directly matching telemetry alerts."
    }
  ],
  techs: [
    {
      name: "MQTT / AMQP Brokers",
      desc: "Low-overhead data brokers routing sensory inputs to cloud collectors."
    },
    {
      name: "InfluxDB / TimeSeries",
      desc: "Optimized databases designed to log billions of hardware coordinate updates."
    },
    {
      name: "Go / Rust microservices",
      desc: "High-speed data ingestion scripts handling telemetry feeds without memory leaks."
    }
  ],
  outcomes: [
    {
      value: "38%",
      label: "Downtime Reduction",
      desc: "Fewer assembly line stops."
    },
    {
      value: "<50ms",
      label: "Telemetry Latency",
      desc: "Real-time hardware alerts."
    },
    {
      value: "100M+",
      label: "Daily events",
      desc: "Secure telemetry metrics processed daily."
    }
  ],
  caseStudy: {
    title: "Real-time IoT maintenance pipeline for automotive assembly plant.",
    desc: "We engineered a time-series database system that checks temperature and torque metrics across 200 assembly machines. The platform triggers automatic warnings, allowing engineers to fix machines before lines stall.",
    metrics: [
      { value: "38%", label: "Downtime Cut" },
      { value: "<50ms", label: "IoT Speed" },
      { value: "100M+", label: "Daily Signals" }
    ],
    highlights: [
      "Connected legacy PLCs to AWS IoT Core nodes",
      "Reduced plant-wide maintenance downtime by 38%",
      "Setup secure automated parts re-ordering scripts"
    ]
  },
  compliance: [
    {
      title: "ISO 9001 Alignment",
      desc: "Rigorous version control setups, automated testing pipelines, and roll-back triggers."
    },
    {
      title: "Isolated Network Schemes",
      desc: "Private network nodes isolating factory equipment access from public web pages."
    }
  ],
  whyChoose: [
    {
      title: "Edge Computing Expertise",
      desc: "We deploy high-performance Go/Rust routines directly on factory floor gateways."
    },
    {
      title: "Multi-Protocol Support",
      desc: "Seamlessly link legacy OPC-UA and Modbus telemetry lines to AWS IoT Core."
    },
    {
      title: "Robust Offline Caching",
      desc: "Edge nodes cache telemetry locally, preventing loss when plant networks drop."
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
      title: "Bridging Legacy PLCs with Cloud APIs",
      desc: "A technical walkthrough of translating Modbus registers into clean JSON streams.",
      link: "/insights"
    },
    {
      title: "Configuring Edge Telemetry Caches",
      desc: "How we implemented AMQP local caches to prevent industrial telemetry data gaps.",
      link: "/insights"
    }
  ],
  cta: {
    ctaTitle: "Upgrade your plant",
    ctaHighlight: "IoT infrastructure",
    ctaDesc: "Consult with our principal industrial solutions architect to review your machinery logs and supply chain data.",
    ctaBtnText: "Request Industrial Audit"
  },
  faqs: [
    {
      q: "Can you connect to older industrial PLCs?",
      a: "Yes. We use standard IoT gateways and custom translators to bridge older Modbus/OPC-UA industrial controllers with secure cloud APIs."
    },
    {
      q: "How do you secure factory floor data?",
      a: "We run hardware data through private VPN tunnels to virtual clouds, enforcing strict firewall rules that block public internet ingress."
    }
  ]
};

export default function ManufacturingPage() {
  const mappedOverviewChallenges = data.challenges.map(c => c.title);
  const mappedCompliance = data.compliance.map(c => `${c.title}: ${c.desc}`);

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      
      {/* 1. Hero */}
      <IndustryHero
        industryName="Manufacturing"
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
