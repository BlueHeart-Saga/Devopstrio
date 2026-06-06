import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function CloudEcosystemPage() {
  return (
    <EcosystemPageLayout
      title="Cloud Ecosystem"
      category="Overview"
      badge="Cloud Hub"
      subtitle="Complete cloud modernization, transition infrastructure, landing zone setups, and cost governance across major public cloud partners."
      stats={[
        { value: "3+", label: "Public Clouds" },
        { value: "300+", label: "Enterprise Migrations" },
        { value: "40%+", label: "Operating Cost Reduced" },
        { value: "99.99%", label: "Uptime Guaranteed" }
      ]}
      details={[
        {
          title: "Multi-Cloud Architectures & Migration",
          description: "Designing landing zone structures, containerizing microservices, and orchestrating serverless applications on AWS, Azure, and GCP.",
          items: [
            "Zero-downtime database and asset migration pipelines",
            "Multi-region high-availability configurations",
            "Hardened Kubernetes orchestrations (EKS, AKS, GKE)"
          ]
        },
        {
          title: "Cloud Governance & FinOps",
          description: "Enforcing infrastructure compliance policies and analyzing costs in real-time to prevent resource leaks.",
          items: [
            "Automatic guardrails and policy enforcement dashboard setups",
            "Auto-scheduling of non-production instances during off-hours",
            "Detailed usage reports and cost optimization suggestions"
          ]
        }
      ]}
      ctaText="Review Our Cloud Services"
    />
  );
}
