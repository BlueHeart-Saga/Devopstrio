import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function DevOpsPlatformPage() {
  return (
    <EcosystemPageLayout
      title="DevOps Platform"
      category="Platforms & Solutions"
      categoryUrl="/ecosystem/platforms-solutions"
      badge="Solutions"
      subtitle="Hardened CI/CD pipeline structures, reusable Terraform modules, and production-ready Kubernetes setups."
      stats={[
        { value: "5 min", label: "Cluster Setup" },
        { value: "150+", label: "IaC Modules" },
        { value: "100%", label: "GitOps Automated" },
        { value: "99.99%", label: "Pipeline Success" }
      ]}
      details={[
        {
          title: "CI/CD Pipeline Accelerators",
          description: "Bootstrapping application pipelines under 5 minutes with integrated security checks, automated tests, and blue-green deployments.",
          items: [
            "GitHub Actions and GitLab CI reusable configuration templates",
            "Automatic container vulnerability scanning (Trivy/Snyk)",
            "Blue-green and Canary deployment configurations using ArgoCD"
          ]
        },
        {
          title: "Hardened Kubernetes Blueprints",
          description: "Deploying secure, isolated, and multi-tenant Kubernetes clusters pre-configured with SRE best practices.",
          items: [
            "Multi-tenant cluster configurations with strict namespace isolation",
            "Automatic Horizontal Pod Autoscaler (HPA) and node provisioning",
            "Integrated Prometheus, Grafana, and Loki logging stacks"
          ]
        }
      ]}
      ctaText="Request a DevOps Accelerator Call"
    />
  );
}
