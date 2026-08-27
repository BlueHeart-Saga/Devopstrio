
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
// import { IndustryTechStack } from "@/sections/industries/detail/IndustryTechStack";
// import { IndustryOutcomes } from "@/sections/industries/detail/IndustryOutcomes";
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
  // { id: "tech-stack", label: "Tech Stack" },
  // { id: "outcomes", label: "Outcomes" },
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
    bgImage: "/webp/assets/Industries-page/herocard/Manufaturing.webp"
  },
  overview: {
    heading: "Integrated asset tracking and real-time telemetry systems",
    desc1: <>We build manufacturing telemetry databases and supply chain tracking hubs. Our codebases process IoT temperature metrics, predict assembly line halts, and isolate warehouse inventory updates using our <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">product engineering projects</Link>.</>,
    desc2: <>Our services connect hardware sensors with <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">cloud dashboards</Link>, offering real-time plant monitors, automated vendor re-orders, and equipment safety triggers.</>
  },
  challenges: [
    {
      title: "IoT Telemetry Packet Drops",
      desc: <>Preventing packet loss and data gaps when factory sensors send millions of telemetry events using <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">edge buffers</Link>.</>
    },
    {
      title: "Legacy Machine Integration Barriers",
      desc: <>Interfacing modern cloud dashboards with legacy PLCs utilizing non-standard industrial protocols through our <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">custom API adapters</Link>.</>
    },
    {
      title: "Supply Chain Coordinate Latency",
      desc: <>Updating inventory counts and shipping locations in real-time across regional <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">warehouse nodes</Link>.</>
    }
  ],
  solutions: [
    {
      title: "AMQP Edge Spooling Buffers",
      desc: <>Configuring edge gateways with local AMQP message queues to spool telemetry data under <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">high-availability setups</Link>.</>
    },
    {
      title: "Modbus/OPC-UA API Adapters",
      desc: <>Deploying containerized Go processors at the edge to translate legacy hardware protocols into <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">clean JSON payloads</Link>.</>
    },
    {
      title: "Time-Series Stream Aggregators",
      desc: <>Using InfluxDB clusters to compile incoming tracking feeds and calculate routing speeds under <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">50ms latency metrics</Link>.</>
    }
  ],
  capabilities: [
    {
      title: "Predictive Maintenance",
      desc: <>Sensors monitoring machine heat and vibration frequency, warning engineers before breakdowns occur via <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">predictive alerts</Link>.</>
    },
    {
      title: "Supply Chain Tracking",
      desc: <>Real-time GPS routing grids tracking freight trucks, containers, and inventory levels utilizing <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">IoT tracking pipelines</Link>.</>
    },
    {
      title: "Factory IoT Hubs",
      desc: <>Secure message brokers bridging hardware metrics with cloud databases under <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">encrypted data channels</Link>.</>
    }
  ],
  useCases: [
    {
      title: "Assembly Line Monitoring",
      result: <>Reduced automotive assembly line downtime by 38% via time-series temperature alerts integrated with <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">SRE tools</Link>.</>
    },
    {
      title: "Auto Parts Re-Ordering",
      result: <>Automated warehouse logistics parts orders directly matching telemetry alerts using <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">automated workflows</Link>.</>
    }
  ],
  techs: [
    {
      name: "MQTT / AMQP Brokers",
      desc: <>Low-overhead data brokers routing sensory inputs to <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">cloud collectors</Link>.</>
    },
    {
      name: "InfluxDB / TimeSeries",
      desc: <>Optimized databases designed to log billions of hardware coordinate updates inside <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">managed database setups</Link>.</>
    },
    {
      name: "Go / Rust microservices",
      desc: <>High-speed data ingestion scripts handling telemetry feeds without memory leaks using <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">optimized backend services</Link>.</>
    }
  ],
  outcomes: [
    {
      value: "38%",
      label: "Downtime Reduction",
      desc: <>Fewer assembly line stops via <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">SRE management</Link>.</>
    },
    {
      value: "<50ms",
      label: "Telemetry Latency",
      desc: <>Real-time hardware alerts using <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">IoT telemetry</Link>.</>
    },
    {
      value: "100M+",
      label: "Daily events",
      desc: <>Secure telemetry metrics processed daily inside <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">highly guarded network layers</Link>.</>
    }
  ],
  caseStudy: {
    title: "Real-time IoT maintenance pipeline for automotive assembly plant.",
    desc: <>We engineered a time-series database system that checks temperature and torque metrics across 200 assembly machines. The platform triggers automatic warnings, allowing engineers to fix machines before lines stall under <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">proactive SRE</Link>.</>,
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
      desc: <>Rigorous version control setups, automated testing <Link href="/services/devops-automation" className="text-[#E11D48] hover:underline">pipelines</Link>, and roll-back triggers.</>
    },
    {
      title: "Isolated Network Schemes",
      desc: <>Private network nodes isolating factory equipment access from public web pages under <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">strict firewall setups</Link>.</>
    }
  ],
  whyChoose: [
    {
      title: "Edge Computing Expertise",
      desc: <>We deploy high-performance Go/Rust routines directly on factory floor gateways using <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">native drivers</Link>.</>
    },
    {
      title: "Multi-Protocol Support",
      desc: <>Seamlessly link legacy OPC-UA and Modbus telemetry lines to <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">AWS IoT Core</Link>.</>
    },
    {
      title: "Robust Offline Caching",
      desc: <>Edge nodes cache telemetry locally, preventing loss when plant networks drop under <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">resilient storage models</Link>.</>
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
    ctaDesc: <>Consult with our principal <Link href="/contact#contact-form" className="text-[#E11D48] hover:underline">industrial solutions architect</Link> to review your machinery logs and supply chain data.</>,
    ctaBtnText: "Request Industrial Audit"
  },
  faqs: [
    {
      q: "Can you connect to older industrial PLCs?",
      a: <>Yes. We use standard IoT gateways and custom translators to bridge older Modbus/OPC-UA industrial controllers with secure <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">cloud APIs</Link>.</>
    },
    {
      q: "How do you secure factory floor data?",
      a: <>We run hardware data through private VPN tunnels to virtual clouds, enforcing strict <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">firewall rules</Link> that block public internet ingress.</>
    }
  ]
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${data.hero.title} ${data.hero.highlightedWord} | Devopstrio`,
    description: data.hero.subtitle,
    alternates: {
      canonical: `https://devopstrio.co.uk/industries/manufacturing`
    }
  };
}

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
      {/* <IndustryTechStack techs={data.techs} /> */}

      {/* 8. Business Outcomes */}
      {/* <IndustryOutcomes outcomes={[
        { value: data.outcomes[0].value, label: data.outcomes[0].label, desc: data.outcomes[0].desc },
        { value: data.outcomes[1].value, label: data.outcomes[1].label, desc: data.outcomes[1].desc },
        { value: data.outcomes[2].value, label: data.outcomes[2].label, desc: data.outcomes[2].desc }
      ]} /> */}

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
