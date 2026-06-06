import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function ServiceNowPartnershipPage() {
  return (
    <EcosystemPageLayout
      title="ServiceNow Partnership"
      category="Partnerships"
      categoryUrl="/ecosystem/partnerships"
      badge="Elite Partner"
      subtitle="Elite level engineering for ITSM, ITOM, automated Configuration Management Databases (CMDB), and custom workflow scripting."
      stats={[
        { value: "95+", label: "ITOM/ITSM Projects" },
        { value: "50+", label: "Certified Admins" },
        { value: "Elite", label: "Partner Tier" },
        { value: "4.8/5", label: "CSAT Feedback Score" }
      ]}
      details={[
        {
          title: "ITSM & ITOM Automations",
          description: "Configuring ServiceNow discovery schedules, mapping business services, and automating incident remediation workflows.",
          items: [
            "Discovery schedules with credentials-less and credentials-based protocols",
            "Service Mapping using runtime connection analysis models",
            "Automated alerting pipelines integrating Dynatrace/Datadog logs"
          ]
        },
        {
          title: "Custom Workflows & Integrations",
          description: "Exposing secure API endpoints and writing JavaScript scripts in Integration Hub to interact with third-party software.",
          items: [
            "Custom widgets and portal dashboards in Service Portal",
            "Integration Hub connections to AD, AWS, Azure, and JIRA systems",
            "Flow Designer scripts automating user onboarding processes"
          ]
        }
      ]}
      ctaText="Request a ServiceNow Specialist"
    />
  );
}
