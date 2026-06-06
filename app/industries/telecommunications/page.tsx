"use client";

import React from "react";
import { IndustryDetailTemplate } from "@/components/ui/IndustryDetailTemplate";

export default function TelecommunicationsPage() {
  return (
    <IndustryDetailTemplate
      industryName="Telecommunications"
      title="Cloud-native &"
      highlightedWord="Telecom Networks"
      subtitle="Configuring high-bandwidth network monitors, automated customer billing databases, and 5G edge telemetry nodes."
      overviewHeading="Carrier-grade software architectures for high-throughput networks"
      overviewDesc1="We build cloud-native network orchestrations, robust OSS/BSS platforms, and high-frequency telecom billing databases. Our services process millions of simultaneous call and data event records without performance lag."
      overviewDesc2="Our engineering teams deploy secure API nodes that manage user accounts, coordinate network routing tables, and track 5G telemetry feeds under strict carrier parameters."
      heroImage="/assets/Home-page/industries/Telecom.png"
      challenges={[
        "CDR database locking",
        "5G node routing latency",
        "OSS/BSS database synchronization"
      ]}
      focusAreas={[
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
      ]}
      compliances={[
        "GDPR Telecom Regulations: Tokenizing customer phone locations, masking user call lists, and enforcing automated data retention periods.",
        "ISO 27001 Security: Enforcing strict network firewall setups and continuous threat assessment monitoring."
      ]}
      techs={[
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
      ]}
      metrics={[
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
      ]}
      caseStudyTitle="High-throughput call record engine for national cellular carrier."
      caseStudyDesc="We engineered a distributed database system utilizing Cassandra and Go to log cellular data records (CDRs) in real-time. The platform securely writes 500M daily records, serving billing pipelines without downtime."
      caseStudyHighlights={[
        "Eliminated database query delays on user billing dashboards",
        "Deployed autoscaling cellular telemetry nodes on AWS",
        "Enabled real-time data usage warning triggers for mobile users"
      ]}
      faqs={[
        {
          q: "How do you ensure billing data consistency?",
          a: "We run distributed databases with strict consistency parameters, writing redundant copies of data across isolated physical zones to prevent packet losses."
        },
        {
          q: "Do you support 5G network integration?",
          a: "Yes. We develop cloud-native network functions (CNFs) that coordinate with edge servers to balance data loads dynamically."
        }
      ]}
      ctaTitle="Modernize your cellular"
      ctaHighlight="Network backend"
      ctaDesc="Consult with our principal telecom network architect to optimize your billing databases and 5G telemetry logs."
      ctaBtnText="Consult Telecom Architect"
    />
  );
}
