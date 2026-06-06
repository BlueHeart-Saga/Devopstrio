"use client";

import React from "react";
import { IndustryDetailTemplate } from "@/components/ui/IndustryDetailTemplate";

export default function ManufacturingPage() {
  return (
    <IndustryDetailTemplate
      industryName="Manufacturing"
      title="Smart factories &"
      highlightedWord="Industrial Automation"
      subtitle="Deploying predictive machine maintenance metrics, automated supply chain forecasting filters, and industrial IoT monitoring systems."
      overviewHeading="Integrated asset tracking and real-time telemetry systems"
      overviewDesc1="We build manufacturing telemetry databases and supply chain tracking hubs. Our codebases process IoT temperature metrics, predict assembly line halts, and isolate warehouse inventory updates."
      overviewDesc2="Our services connect hardware sensors with cloud dashboards, offering real-time plant monitors, automated vendor re-orders, and equipment safety triggers."
      heroImage="/assets/Home-page/industries/Logistics.png"
      challenges={[
        "IoT telemetry packet drops",
        "Legacy machine integration barriers",
        "Supply chain coordinate latency"
      ]}
      focusAreas={[
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
      ]}
      compliances={[
        "ISO 9001 Quality Standards: Rigorous version control setups, automated testing pipelines, and roll-back triggers.",
        "SOC-2 Security Controls: Private network nodes isolating factory equipment access from public web pages."
      ]}
      techs={[
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
      ]}
      metrics={[
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
      ]}
      caseStudyTitle="Real-time IoT maintenance pipeline for automotive assembly plant."
      caseStudyDesc="We engineered a time-series database system that checks temperature and torque metrics across 200 assembly machines. The platform triggers automatic warnings, allowing engineers to fix machines before lines stall."
      caseStudyHighlights={[
        "Connected legacy PLCs to AWS IoT Core nodes",
        "Reduced plant-wide maintenance downtime by 38%",
        "Setup secure automated parts re-ordering scripts"
      ]}
      faqs={[
        {
          q: "Can you connect to older industrial PLCs?",
          a: "Yes. We use standard IoT gateways and custom translators to bridge older Modbus/OPC-UA industrial controllers with secure cloud APIs."
        },
        {
          q: "How do you secure factory floor data?",
          a: "We run hardware data through private VPN tunnels to virtual clouds, enforcing strict firewall rules that block public internet ingress."
        }
      ]}
      ctaTitle="Upgrade your plant"
      ctaHighlight="IoT infrastructure"
      ctaDesc="Consult with our principal industrial solutions architect to review your machinery logs and supply chain data."
      ctaBtnText="Request Industrial Audit"
    />
  );
}
