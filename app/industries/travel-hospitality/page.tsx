"use client";

import React from "react";
import { IndustryDetailTemplate } from "@/components/ui/IndustryDetailTemplate";

export default function TravelHospitalityPage() {
  return (
    <IndustryDetailTemplate
      industryName="Travel & Hospitality"
      title="High-frequency &"
      highlightedWord="Travel Systems"
      subtitle="Building transactional room/flight booking engines, customer package recommendation models, and customer service chatbots."
      overviewHeading="Scalable booking portals and customized recommendation engines"
      overviewDesc1="We construct transaction-safe travel booking systems and real-time support trackers. Our systems scale to handle thousands of concurrent queries during travel season without catalog lags."
      overviewDesc2="Our services connect flight API aggregators with clean frontends, offering smooth package builders, dynamic room bookings, and automated reservation receipts."
      heroImage="/assets/herocard/industriespage.png"
      challenges={[
        "Seasonal search query spikes",
        "Multi-source flight database lag",
        "Dynamic pricing update checks"
      ]}
      focusAreas={[
        {
          title: "Booking Engines",
          desc: "Transactional check-in systems that process payment authorizations and generate boarding files."
        },
        {
          title: "Package Recommenders",
          desc: "Cognitive filters that match hotel amenities and flight schedules to guest profile patterns."
        },
        {
          title: "Support Chatbots",
          desc: "Automated help agents that handle itinerary changes and cancellation claims."
        }
      ]}
      compliances={[
        "PCI-DSS Compliance: Secure credit card token handling, isolated server clusters, and detailed database check logs.",
        "GDPR Personal Protection: Safe user account deletion matrices and encrypted credential storage."
      ]}
      techs={[
        {
          name: "Next.js / TailwindCSS",
          desc: "Sleek front-end web pages featuring fast content loading speeds."
        },
        {
          name: "Redis Session Caches",
          desc: "Memory clusters that store user packages and search filters during bookings."
        },
        {
          name: "Node.js / Express",
          desc: "API endpoints configured with rate limits to prevent script abuse."
        }
      ]}
      metrics={[
        {
          value: "30%",
          label: "Increase in booking rates"
        },
        {
          value: "<2s",
          label: "Average page load speeds"
        },
        {
          value: "99.95%",
          label: "Booking gateway uptime"
        }
      ]}
      caseStudyTitle="Custom packaging system for international resort operator."
      caseStudyDesc="We engineered a dynamic packaging engine that allows users to customize resort stays, flight routes, and local tour guides. The system caches partner hotel databases inside Redis, lowering booking query times under 2 seconds."
      caseStudyHighlights={[
        "Setup dynamic hotel catalog caching",
        "Reduced partner database check latency",
        "Lowered checkout abandonments by 30%"
      ]}
      faqs={[
        {
          q: "How do you handle partner database connections?",
          a: "We connect to third-party GDS (Global Distribution System) services using asynchronous API brokers, logging errors separately to prevent page hangs."
        },
        {
          q: "Can users modify booking details automatically?",
          a: "Yes. We integrate with secure customer portal portals where users can self-cancel or update travel dates using automated change workflows."
        }
      ]}
      ctaTitle="Modernize your travel"
      ctaHighlight="Booking portal"
      ctaDesc="Book a developer scoping session to evaluate your current database integrations and catalog speeds."
      ctaBtnText="Request Booking Demo"
    />
  );
}
