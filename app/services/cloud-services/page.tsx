import { ServicePageLayout } from "@/components/ServicePageLayout";

export default function CloudServicesSubPage() {
  return (
    <ServicePageLayout
      title="Cloud Services"
      badge="Cloud Platforms"
      subtitle="Comprehensive multi-cloud migrations, high-availability cluster setups, zero-downtime database moves, and cost-control FinOps integrations."
      stats={[
        { value: "300+", label: "Cloud Migrations" },
        { value: "99.99%", label: "System Uptime" },
        { value: "35%+", label: "Operating Cost Saved" },
        { value: "40+", label: "Certified Engineers" }
      ]}
      capabilities={[
        {
          title: "Multi-Cloud Migrations",
          description: "Transitioning legacy physical datacenters and virtual machines into AWS, Microsoft Azure, and GCP without service interruptions.",
          items: [
            "Secure cloud landing zone configurations with integrated compliance guards",
            "Zero-downtime database replication scripts with active synchronization",
            "Application containerization setups for cloud-native runtime environments"
          ]
        },
        {
          title: "Governance & FinOps",
          description: "Enforcing infrastructure compliance policies and analyzing costs in real-time to avoid resource leakages.",
          items: [
            "Auto-scheduling of non-production instances during off-hours",
            "Automatic guardrail setting using AWS SCPs / Azure Policies",
            "Resource resizing recommendations based on actual telemetry logs"
          ]
        }
      ]}
      ctaText="Consult with our Cloud Architects"
    />
  );
}
