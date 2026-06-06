import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function MicrosoftPartnershipPage() {
  return (
    <EcosystemPageLayout
      title="Microsoft Partnership"
      category="Partnerships"
      categoryUrl="/ecosystem/partnerships"
      badge="Gold Partner"
      subtitle="Certified Microsoft Gold Partner status driving Azure migrations, Microsoft 365 automations, Active Directory syncs, and hybrid cloud setups."
      stats={[
        { value: "120+", label: "Azure Deployments" },
        { value: "85+", label: "Certified Architects" },
        { value: "Gold", label: "Certification Level" },
        { value: "15+", label: "Years Co-Engineering" }
      ]}
      details={[
        {
          title: "Azure Cloud Infrastructure",
          description: "Designing landing zones, setting up ExpressRoute connectivity, and optimizing AKS configurations for enterprise workloads.",
          items: [
            "Secure Azure Landing Zone configurations with automated compliance guards",
            "Azure Active Directory integrations with custom authorization policies",
            "Migrating legacy VM workloads into AKS clusters"
          ]
        },
        {
          title: "Enterprise Integrations",
          description: "Connecting Office 365, Teams, and Power BI datasets with backend ERP systems and database warehouses.",
          items: [
            "Workflow automation using Microsoft Power Automate pipelines",
            "Power BI dashboards connecting to multi-source enterprise logs",
            "Microsoft Security Center threat monitoring configurations"
          ]
        }
      ]}
      ctaText="Request an Azure Architect Call"
    />
  );
}
