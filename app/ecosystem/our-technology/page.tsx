import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function OurTechnologyPage() {
  return (
    <EcosystemPageLayout
      title="Our Technology Stack"
      category="Technology"
      badge="Stack"
      subtitle="Modern languages, cloud runtimes, orchestration engines, and framework templates that form our co-engineering core."
      stats={[
        { value: "5+", label: "Programming Languages" },
        { value: "12+", label: "Frameworks Supported" },
        { value: "100%", label: "IaC Automations" },
        { value: "Zero", label: "Legacy Monoliths" }
      ]}
      details={[
        {
          title: "Modern Programming Stack",
          description: "Building microservices, analytical engines, and real-time streaming tools using highly performant runtime languages.",
          items: [
            "Go (Golang) and Python for highly performant microservices and AI pipelines",
            "TypeScript, React, Next.js, and Tailwind CSS for modern responsive UIs",
            "Java, C# (.NET Core), and Node.js for legacy and enterprise APIs"
          ]
        },
        {
          title: "Infrastructure & Automation",
          description: "Declarative infrastructure management, automated CI/CD pipelines, and secure cloud credentials setups.",
          items: [
            "HashiCorp Terraform and Ansible for automated resource provisioning",
            "Kubernetes, Docker, and Helm for containerized runtime environments",
            "GitHub Actions, GitLab CI, and Azure DevOps for automated builds"
          ]
        }
      ]}
      ctaText="Review Our Tech Stack"
    />
  );
}
