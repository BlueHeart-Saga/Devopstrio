import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function AzureCloudPage() {
  return (
    <EcosystemPageLayout
      title="Microsoft Azure Services"
      category="Cloud Ecosystem"
      categoryUrl="/ecosystem/cloud"
      badge="Cloud Services"
      subtitle="Complete Azure cloud modernization, setup of AKS clusters, Active Directory configurations, and Azure DevOps integration pipelines."
      stats={[
        { value: "120+", label: "Azure Deployments" },
        { value: "4.8/5", label: "Client Satisfaction" },
        { value: "Gold", label: "Alliance Status" },
        { value: "24/7", label: "Managed SRE Ops" }
      ]}
      details={[
        {
          title: "AKS & Containerization",
          description: "Deploying secure, isolated, and multi-tenant AKS clusters pre-configured with Azure Policy and Azure Monitor.",
          items: [
            "Private AKS cluster network configurations with egress routing",
            "Azure Active Directory pod-identity integration templates",
            "Automatic node scaling using Azure Virtual Machine Scale Sets"
          ]
        },
        {
          title: "Azure Governance & DevOps",
          description: "Setting up automated infrastructure pipelines using Azure DevOps and monitoring compliance across resources.",
          items: [
            "Custom Azure Policy definitions mapping resource standards",
            "CI/CD release pipelines with automated validation gates",
            "Application Insights dashboards telemetry setups"
          ]
        }
      ]}
      ctaText="Request an Azure Solution Call"
    />
  );
}
