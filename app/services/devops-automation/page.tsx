import { ServicePageLayout } from "@/components/ServicePageLayout";

export default function DevOpsAutomationPage() {
  return (
    <ServicePageLayout
      title="DevOps & Automation"
      badge="DevOps Core"
      subtitle="Standardizing GitOps pipelines, deploying infrastructure as code templates, containerizing microservices, and managing Kubernetes grids."
      stats={[
        { value: "5 min", label: "Cluster Boot Time" },
        { value: "100%", label: "GitOps Orchestrated" },
        { value: "150+", label: "IaC Templates" },
        { value: "99.99%", label: "Pipeline Success" }
      ]}
      capabilities={[
        {
          title: "CI/CD & GitOps Automation",
          description: "Building fast, secure pipelines with integrated scanning steps, automated testing, and blue-green releases.",
          items: [
            "Continuous deployment setups using ArgoCD and Flux frameworks",
            "Reusable GitHub Actions and GitLab CI pipeline workflows",
            "Image vulnerability checkouts using Snyk and Trivy"
          ]
        },
        {
          title: "Infrastructure as Code & Kubernetes",
          description: "Designing declarative infrastructure scripts and configuring production-ready Kubernetes environments.",
          items: [
            "IaC blueprints using HashiCorp Terraform and Pulumi",
            "Kubernetes configuration (EKS, AKS, GKE) with network isolation policies",
            "Service meshes setup (Istio/Linkerd) for internal traffic routing"
          ]
        }
      ]}
      ctaText="Hire DevOps Engineers"
    />
  );
}
