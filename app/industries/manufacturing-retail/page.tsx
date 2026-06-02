"use client";

import React from "react";
import { IndustryDetailTemplate } from "@/components/ui/IndustryDetailTemplate";

export default function ManufacturingRetailPage() {
  return (
    <IndustryDetailTemplate
      industryName="Manufacturing & Retail"
      title="Supply chain &"
      highlightedWord="Manufacturing Retail"
      subtitle="Implementing predictive machine maintenance metrics, automated inventory tracking logs, and retail forecasting filters."
      overviewHeading="Predictive inventory systems and hardware telemetry trackers"
      overviewDesc1="We construct manufacturing telemetry databases and retail demand forecasting engines. Our codebases process barcode checks, predict inventory drops, and isolate warehouse billing operations."
      overviewDesc2="Our services connect device scanners with secure cloud subnets, offering real-time stock dashboards, automated vendor re-orders, and machine temperature fail-safes."
      heroImage="/assets/herocard/industriespage.png"
      challenges={[
        "Warehouse barcode concurrency",
        "Predictive re-order delay paths",
        "Factory node access security"
      ]}
      focusAreas={[
        {
          title: "Predictive Maintenance",
          desc: "Real-time sensory monitors that map machine heat and vibration, scheduling checks to avoid assembly lines halts."
        },
        {
          title: "Inventory Automation",
          desc: "Secure database tables logging barcodes updates from remote scanning hubs without database locks."
        },
        {
          title: "Demand Forecasters",
          desc: "Cognitive models that analyze historical retail orders, projecting inventory parameters for upcoming cycles."
        }
      ]}
      compliances={[
        "ISO 9001 Quality Standards: Detailed change validation controls, automated build verification, and rollback systems.",
        "SOC-2 Audit Alignment: Encrypted vendor transactions and isolated user access lists."
      ]}
      techs={[
        {
          name: "Next.js / TypeScript",
          desc: "Modern dashboard pages designed for warehouse manager computers."
        },
        {
          name: "Amazon RDS PostgreSQL",
          desc: "Relational databases configured with multi-AZ write nodes and backups."
        },
        {
          name: "Redis Enterprise Cache",
          desc: "In-memory cache structures designed to catalog active stock metrics."
        }
      ]}
      metrics={[
        {
          value: "92%",
          label: "Factory downtime reduced"
        },
        {
          value: "80%",
          label: "Query response time cut"
        },
        {
          value: "10M+",
          label: "Stock items cataloged daily"
        }
      ]}
      caseStudyTitle="Autonomous inventory forecasting for global retail chain."
      caseStudyDesc="We engineered a forecasting database system that evaluates stock levels across 400+ retail stores. The engine runs mathematical regressions inside PostgreSQL, lowering inventory storage costs by 22%."
      caseStudyHighlights={[
        "Replaced slow legacy stock databases",
        "Integrated dynamic re-order thresholds",
        "Achieved a 92% reduction in store out-of-stock events"
      ]}
      faqs={[
        {
          q: "How do you connect to factory floor machines?",
          a: "We develop low-level message brokers using MQTT and AMQP protocols to bridge physical hardware sensors with secure cloud endpoints."
        },
        {
          q: "Are customer order records stored safely?",
          a: "Yes. Order histories are encrypted at rest under KMS keys, isolated inside private VPC databases with strict database access roles."
        }
      ]}
      ctaTitle="Automate your factory"
      ctaHighlight="Retail pipelines"
      ctaDesc="Book a developer demand session with our principal solutions architect to evaluate your inventory systems and factory logs."
      ctaBtnText="Request Industrial Audit"
    />
  );
}
