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
  "IoT telemetry packet drops",
  "Legacy machine integration barriers",
  "Supply chain coordinate latency"
];

const focusAreas = [
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
];

const compliances = [
  "ISO 9001 Quality Standards: Rigorous version control setups, automated testing pipelines, and roll-back triggers.",
  "SOC-2 Security Controls: Private network nodes isolating factory equipment access from public web pages."
];

const techs = [
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
];

const metrics = [
  {
    value: "38%",
    label: "Reduction in downtime"
  },
  {
    value: "<50ms",
    label: "IoT telemetry latency"
  },
  {
    value: "100M+",
    label: "Daily hardware events"
  }
];

const caseStudyHighlights = [
  "Connected legacy PLCs to AWS IoT Core nodes",
  "Reduced plant-wide maintenance downtime by 38%",
  "Setup secure automated parts re-ordering scripts"
];

const faqs = [
  {
    q: "Can you connect to older industrial PLCs?",
    a: "Yes. We use standard IoT gateways and custom translators to bridge older Modbus/OPC-UA industrial controllers with secure cloud APIs."
  },
  {
    q: "How do you secure factory floor data?",
    a: "We run hardware data through private VPN tunnels to virtual clouds, enforcing strict firewall rules that block public internet ingress."
  }
];

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <IndustryHero
        industryName="Manufacturing"
        title="Smart factories &"
        highlightedWord="Industrial Automation"
        subtitle="Deploying predictive machine maintenance metrics, automated supply chain forecasting filters, and industrial IoT monitoring systems."
        bgImage="/assets/Home-page/industries/Logistics.png"
      />

      <SectionNavbar sections={subSections} />

      <IndustryOverview
        overviewHeading="Integrated asset tracking and real-time telemetry systems"
        overviewDesc1="We build manufacturing telemetry databases and supply chain tracking hubs. Our codebases process IoT temperature metrics, predict assembly line halts, and isolate warehouse inventory updates."
        overviewDesc2="Our services connect hardware sensors with cloud dashboards, offering real-time plant monitors, automated vendor re-orders, and equipment safety triggers."
        challenges={challenges}
      />

      <IndustryFocusAreas focusAreas={focusAreas} />

      <IndustryCompliance compliances={compliances} />

      <IndustryTechStack techs={techs} />

      <IndustryCaseStudy
        caseStudyTitle="Real-time IoT maintenance pipeline for automotive assembly plant."
        caseStudyDesc="We engineered a time-series database system that checks temperature and torque metrics across 200 assembly machines. The platform triggers automatic warnings, allowing engineers to fix machines before lines stall."
        metrics={metrics}
        caseStudyHighlights={caseStudyHighlights}
      />

      <IndustryFAQ faqs={faqs} />

      <IndustryCTA
        ctaTitle="Upgrade your plant"
        ctaHighlight="IoT infrastructure"
        ctaDesc="Consult with our principal industrial solutions architect to review your machinery logs and supply chain data."
        ctaBtnText="Request Industrial Audit"
      />
    </main>
  );
}
