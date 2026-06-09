import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata = {
  title: "DevOps & Automation Services | Devopstrio",
  description: "Accelerate software delivery with GitOps CI/CD pipelines, Infrastructure as Code (IaC), Kubernetes, platform engineering, and 24/7 site reliability engineering.",
};

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
          id: "cicd-implementation",
          title: "CI/CD Implementation",
          description: "Accelerating delivery cycles with automated build, test, and release verification pipelines.",
          items: [
            "Git-triggered workflows using GitHub Actions and GitLab CI",
            "Dynamic testing environment provisioning on pipeline run",
            "Fast feedback loops with built-in Slack and MS Teams alerts"
          ]
        },
        {
          id: "platform-engineering",
          title: "Platform Engineering",
          description: "Building Internal Developer Platforms (IDPs) to enable developer self-service.",
          items: [
            "Golden paths definition using Backstage and ArgoCD",
            "Standardized application templates for fast bootstrapping",
            "Centralized access control and infrastructure provisioning interfaces"
          ]
        },
        {
          id: "infrastructure-as-code",
          title: "Infrastructure as Code",
          description: "Provisioning multi-cloud resources declaratively using industry-standard tools.",
          items: [
            "Reusable infrastructure modules using HashiCorp Terraform",
            "Configuration management and environment setup with Ansible and Packer",
            "State file security and drift detection mechanisms"
          ]
        },
        {
          id: "kubernetes-services",
          title: "Kubernetes Services",
          description: "Designing, securing, and maintaining enterprise Kubernetes clusters.",
          items: [
            "Multi-tenant cluster design with network policies (Calico)",
            "Automatic scaling using Karpenter and KEDA",
            "Service mesh integration (Istio) for secure service-to-service communication"
          ]
        },
        {
          id: "devsecops",
          title: "DevSecOps",
          description: "Injecting automated security checks directly into the continuous integration flow.",
          items: [
            "Static Application Security Testing (SAST) with SonarQube",
            "Software Composition Analysis (SCA) using Snyk and Trivy",
            "Dynamic Application Security Testing (DAST) in staging environments"
          ]
        },
        {
          id: "sre",
          title: "Site Reliability Engineering (SRE)",
          description: "Combining software engineering with operations to build ultra-scalable systems.",
          items: [
            "Defining Service Level Indicators (SLIs) and Service Level Objectives (SLOs)",
            "Automating error budget alerts and incident mitigation playbooks",
            "Blameless post-mortem analysis and reliability engineering"
          ]
        },
        {
          id: "release-automation",
          title: "Release Automation",
          description: "Managing complex release cycles and deployment strategies with minimal user intervention.",
          items: [
            "Canary and Blue-Green deployments with Argo Rollouts",
            "Automated rollback triggers based on Prometheus error rates",
            "Multi-environment configuration management with Kustomize"
          ]
        },
        {
          id: "monitoring-observability",
          title: "Monitoring & Observability",
          description: "Gaining absolute visibility into system health, query performance, and user transactions.",
          items: [
            "Distributed tracing using OpenTelemetry and Jaeger",
            "Centralized log aggregation with ELK stack and Grafana Loki",
            "Custom metric dashboards using Prometheus and Grafana"
          ]
        }
      ]}
      ctaText="Hire DevOps Engineers"
    />
  );
}
