import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function CloudSolutionsSubPage() {
  return (
    <EcosystemPageLayout
      title="Cloud Solutions"
      category="Platforms & Solutions"
      categoryUrl="/ecosystem/platforms-solutions"
      badge="Solutions"
      subtitle="Secure Landing Zones, automated multi-account management structures, and real-time FinOps cost-savings intelligence."
      stats={[
        { value: "30%+", label: "Cost Savings" },
        { value: "100%", label: "Cloud Compliance" },
        { value: "24/7", label: "FinOps Telemetry" },
        { value: "12+", label: "Hardened Landing Zones" }
      ]}
      details={[
        {
          title: "Multi-Account Landing Zones",
          description: "Configuring secure, isolated, and standardized AWS/Azure/GCP organization account environments with pre-defined governance policies.",
          items: [
            "Infrastructure-as-Code setups for AWS Organizations/Azure Management Groups",
            "Automatic guardrails and policy enforcement (AWS SCPs / Azure Policies)",
            "Centralized transit gateway networking and secure bastion host setups"
          ]
        },
        {
          title: "FinOps Cost Optimization Platforms",
          description: "Visualizing cloud expenditures in real-time, matching resources against actual utilization metrics, and automating cost savings.",
          items: [
            "Real-time cost anomaly alarms and resource utilization logs",
            "Auto-scheduling of non-production instances during off-hours",
            "Recommendations for reserved instances and savings plans alignment"
          ]
        }
      ]}
      ctaText="Request a Cloud Solutions Call"
    />
  );
}
