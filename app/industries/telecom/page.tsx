"use client";

import React from "react";
import { IndustryDetailTemplate } from "@/components/ui/IndustryDetailTemplate";

export default function TelecomPage() {
  return (
    <IndustryDetailTemplate
      industryName="Telecom"
      title="High-throughput telemetry &"
      highlightedWord="Telecom Networks"
      subtitle="Managing high-bandwidth network monitors, automated customer billing databases, and 5G edge telemetry nodes."
      overviewHeading="Resilient telecom infrastructures and high-capacity network monitors"
      overviewDesc1="We construct network monitoring software and high-frequency billing database managers. Our codebases process packet logs, analyze routing spikes, and isolate user database structures."
      overviewDesc2="Our services connect 5G edge antennas with safe database centers, offering real-time network charts, automatic balance logs, and secure endpoint authentication."
      heroImage="/assets/herocard/industriespage.png"
      challenges={[
        "High packet log write speeds",
        "Real-time billing synchronization",
        "Edge subnet security access"
      ]}
      focusAreas={[
        {
          title: "Network Monitors",
          desc: "Real-time dashboard engines that capture telemetry and signal degradation across thousands of antenna nodes."
        },
        {
          title: "Billing Engines",
          desc: "Transactional databases designed to calculate data usage and process automated billing receipts."
        },
        {
          title: "5G Telemetry",
          desc: "High-frequency streaming collectors that ingest sensor telemetry logs from edge cell hubs."
        }
      ]}
      compliances={[
        "ISO 27001 Security Standard: Standardized database encryption parameters, automated access audits, and rollback loops.",
        "SOC-2 Audit Alignment: Isolated cell node logs and secure database encryption."
      ]}
      techs={[
        {
          name: "Next.js / TypeScript",
          desc: "Secure and highly interactive dashboard pages for network engineers."
        },
        {
          name: "Amazon RDS PostgreSQL",
          desc: "Relational database instances configured with row-level locks and read pools."
        },
        {
          name: "Kafka / InfluxDB",
          desc: "High-speed time-series databases designed for logger parameters storage."
        }
      ]}
      metrics={[
        {
          value: "99.999%",
          label: "Network monitor availability"
        },
        {
          value: "<5ms",
          label: "Telemetry database query speed"
        },
        {
          value: "2M+",
          label: "Ingested logger metrics daily"
        }
      ]}
      caseStudyTitle="5G telemetry logger pipeline for global telecom operator."
      caseStudyDesc="We engineered a Kafka-driven time-series log pipeline that collects telemetry updates from 12k cell towers. The platform maps logs inside InfluxDB, flagging signal failures to field technicians under 5 milliseconds."
      caseStudyHighlights={[
        "Replaced slow relational telemetry databases",
        "Integrated with automated Slack notification channels",
        "Reduced technician response latency by 50%"
      ]}
      faqs={[
        {
          q: "How do you handle cell tower logger load spikes?",
          a: "We construct distributed Kafka broker clusters that buffer incoming log metrics, allowing database writes to complete asynchronously without dropping records."
        },
        {
          q: "Are user billing tables isolated from logs?",
          a: "Yes. Billing databases operate inside separate private subnets with strict authorization access, isolated from the network telemetry systems."
        }
      ]}
      ctaTitle="Secure your network"
      ctaHighlight="Telecom systems"
      ctaDesc="Book a developer demand session with our principal telecom solutions architect to review your billing and network monitoring plans."
      ctaBtnText="Request Telecom Audit"
    />
  );
}
