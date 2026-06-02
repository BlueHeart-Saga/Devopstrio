"use client";

import React from "react";
import { IndustryDetailTemplate } from "@/components/ui/IndustryDetailTemplate";

export default function LogisticsPage() {
  return (
    <IndustryDetailTemplate
      industryName="Logistics"
      title="Supply chain &"
      highlightedWord="Logistics Systems"
      subtitle="Deploying low-latency geographic routing calculators, real-time vehicle fleet monitors, and automated warehouse inventory databases."
      overviewHeading="Intelligent routing and high-capacity inventory pipelines"
      overviewDesc1="We construct geographical routing platforms and telemetry collectors. Our database systems ingest live GPS coordinates, calculate traffic delays, and dispatch optimized routing tables to delivery drivers."
      overviewDesc2="Our services integrate with physical warehouse scanners and barcode databases to manage inventory logs, providing real-time stock indicators across distributed supply chain yards."
      heroImage="/assets/herocard/industriespage.png"
      challenges={[
        "High-frequency GPS tracking load",
        "Multi-stop routing path latency",
        "Warehouse scanning conflicts"
      ]}
      focusAreas={[
        {
          title: "Route Optimizers",
          desc: "Mathematical pathfinding engines that calculate optimal delivery routes across hundreds of stops."
        },
        {
          title: "Fleet Telemetry",
          desc: "Processing live coordinate metrics from active trucks using high-frequency MQTT brokers."
        },
        {
          title: "Inventory Managers",
          desc: "Scaling relational database tables to log barcode checks from multiple scanning machines."
        }
      ]}
      compliances={[
        "ISO 9001 Quality Standards: Enforcing strict database tracking parameters and detailed code deployment pipelines.",
        "SOC-2 Audit Alignment: Isolate client coordinate logs and encrypt transaction archives."
      ]}
      techs={[
        {
          name: "Node.js / Express",
          desc: "Core API layer choice for fast network event handling."
        },
        {
          name: "Redis Spatial Indexes",
          desc: "In-memory storage designed for querying vehicle coordinates near targets."
        },
        {
          name: "PostgreSQL / PostGIS",
          desc: "Relational database mapping extensions for geometric shapes and road tracks."
        }
      ]}
      metrics={[
        {
          value: "100ms",
          label: "Average route calculation speed"
        },
        {
          value: "100k+",
          label: "Active tracked fleet vehicles"
        },
        {
          value: "99.9%",
          label: "Inventory check accuracy"
        }
      ]}
      caseStudyTitle="Autonomous routing engine for national courier service."
      caseStudyDesc="We built a real-time routing portal that updates delivery paths for 100k+ drivers. The platform queries traffic events, processes spatial coordinate data inside Postgres PostGIS, and lowers fuel consumption metrics by 18%."
      caseStudyHighlights={[
        "Replaced legacy single-core pathfinding modules",
        "Integrated coordinate data streams with React dashboard widgets",
        "Achieved a 99.9% database availability during high-traffic holidays"
      ]}
      faqs={[
        {
          q: "Can your system process GPS updates in real-time?",
          a: "Yes. We configure lightweight MQTT brokers that receive coordinate packets from truck boxes, batching database updates to prevent write locking."
        },
        {
          q: "Do you support offline mobile routing?",
          a: "Yes. Our mobile API layouts sync coordinate indexes to local SQLite caches on drivers' phones, switching back to server sync once cellular connection returns."
        }
      ]}
      ctaTitle="Streamline your supply"
      ctaHighlight="Logistics chain"
      ctaDesc="Collaborate with our supply chain engineers to design optimized database and fleet tracking systems."
      ctaBtnText="Request Logistics Audit"
    />
  );
}
