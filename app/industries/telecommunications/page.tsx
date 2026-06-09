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
  "CDR database locking",
  "5G node routing latency",
  "OSS/BSS database synchronization"
];

const focusAreas = [
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
];

const compliances = [
  "GDPR Telecom Regulations: Tokenizing customer phone locations, masking user call lists, and enforcing automated data retention periods.",
  "ISO 27001 Security: Enforcing strict network firewall setups and continuous threat assessment monitoring."
];

const techs = [
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
];

const metrics = [
  {
    value: "<15ms",
    label: "Edge telemetry routing latency"
  },
  {
    value: "500M+",
    label: "Billing events processed daily"
  },
  {
    value: "99.999%",
    label: "Telecom service uptime"
  }
];

const caseStudyHighlights = [
  "Eliminated database query delays on user billing dashboards",
  "Deployed autoscaling cellular telemetry nodes on AWS",
  "Enabled real-time data usage warning triggers for mobile users"
];

const faqs = [
  {
    q: "How do you ensure billing data consistency?",
    a: "We run distributed databases with strict consistency parameters, writing redundant copies of data across isolated physical zones to prevent packet losses."
  },
  {
    q: "Do you support 5G network integration?",
    a: "Yes. We develop cloud-native network functions (CNFs) that coordinate with edge servers to balance data loads dynamically."
  }
];

export default function TelecommunicationsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <IndustryHero
        industryName="Telecommunications"
        title="Cloud-native &"
        highlightedWord="Telecom Networks"
        subtitle="Configuring high-bandwidth network monitors, automated customer billing databases, and 5G edge telemetry nodes."
        bgImage="/assets/Home-page/industries/Telecom.png"
      />

      <SectionNavbar sections={subSections} />

      <IndustryOverview
        overviewHeading="Carrier-grade software architectures for high-throughput networks"
        overviewDesc1="We build cloud-native network orchestrations, robust OSS/BSS platforms, and high-frequency telecom billing databases. Our services process millions of simultaneous call and data event records without performance lag."
        overviewDesc2="Our engineering teams deploy secure API nodes that manage user accounts, coordinate network routing tables, and track 5G telemetry feeds under strict carrier parameters."
        challenges={challenges}
      />

      <IndustryFocusAreas focusAreas={focusAreas} />

      <IndustryCompliance compliances={compliances} />

      <IndustryTechStack techs={techs} />

      <IndustryCaseStudy
        caseStudyTitle="High-throughput call record engine for national cellular carrier."
        caseStudyDesc="We engineered a distributed database system utilizing Cassandra and Go to log cellular data records (CDRs) in real-time. The platform securely writes 500M daily records, serving billing pipelines without downtime."
        metrics={metrics}
        caseStudyHighlights={caseStudyHighlights}
      />

      <IndustryFAQ faqs={faqs} />

      <IndustryCTA
        ctaTitle="Modernize your cellular"
        ctaHighlight="Network backend"
        ctaDesc="Consult with our principal telecom network architect to optimize your billing databases and 5G telemetry logs."
        ctaBtnText="Consult Telecom Architect"
      />
    </main>
  );
}
