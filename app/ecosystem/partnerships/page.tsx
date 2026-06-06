import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function PartnershipsHubPage() {
  return (
    <EcosystemPageLayout
      title="Technology Partnerships"
      category="Overview"
      badge="Alliances"
      subtitle="Connecting with world-class technology providers to deliver certified cloud infrastructure integrations, enterprise automation platforms, and secure network architectures."
      stats={[
        { value: "7+", label: "Strategic Partners" },
        { value: "500+", label: "Certified Engineers" },
        { value: "99.9%", label: "SLA Integration Success" },
        { value: "1200+", label: "Hardened Integrations" }
      ]}
      details={[
        {
          title: "Public Cloud Providers",
          description: "Premier level engineering and architecture credentials to ensure enterprise applications are secure and auto-scalable.",
          items: [
            "Microsoft Gold Partner (Azure Infrastructure & App Dev)",
            "AWS Advanced Tier Partner (Serverless, Containerization, SRE)",
            "Google Cloud Premier Partner (BigQuery, Vertex AI, GKE)"
          ]
        },
        {
          title: "Enterprise Systems",
          description: "Integrating transactional systems and databases into central automation, monitoring, and compliance panels.",
          items: [
            "Oracle Database modernizations and GoldenGate replications",
            "ServiceNow Elite integrations for ITSM/ITOM workflow orchestrations",
            "SAP ERP migrations and S/4HANA cloud transitions"
          ]
        }
      ]}
      ctaText="Connect with our Alliances Team"
    />
  );
}
