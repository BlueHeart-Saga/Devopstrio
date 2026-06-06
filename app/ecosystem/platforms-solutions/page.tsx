import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function PlatformsSolutionsPage() {
  return (
    <EcosystemPageLayout
      title="Platforms & Solutions"
      category="Overview"
      badge="Solutions"
      subtitle="Hardened enterprise frameworks, automated cloud landing zones, and compliance-safeguarded pipelines designed to accelerate scaling and engineering operations."
      stats={[
        { value: "4+", label: "Core Platforms" },
        { value: "150+", label: "Reusable IaC Blueprints" },
        { value: "90%", label: "Bootstrap Time Reduced" },
        { value: "SOC2", label: "Compliance Certified" }
      ]}
      details={[
        {
          title: "AI Solutions Platform",
          description: "Pre-built modules for deploying semantic search, orchestrating multi-agent tasks, and conducting customer sentiment audits.",
          items: [
            "Autonomous enterprise worker agents for workflow tasking",
            "Semantic query assistant tools connecting to internal datastores",
            "AI recruiter pipelines automatically screening applicant resumes"
          ]
        },
        {
          title: "DevOps & Cloud Blueprints",
          description: "Bootstrap cloud configurations under 5 minutes with our hardened, infrastructure-as-code libraries.",
          items: [
            "Terraform landing zone architectures with integrated security policies",
            "Hardened Kubernetes deployment blueprints ready for production",
            "FinOps telemetry frameworks visualizing real-time resource costs"
          ]
        },
        {
          title: "Security & Compliance Dashboards",
          description: "Continuous monitoring systems mapping infrastructure components against regulatory compliance audits.",
          items: [
            "Continuous compliance scanning for SOC2, ISO27001, and HIPAA",
            "Central threat detection panels with automated alert response scripts",
            "Dynamic dependency updates and vulnerability tracking dashboards"
          ]
        }
      ]}
      ctaText="Review Our Solutions Suite"
    />
  );
}
