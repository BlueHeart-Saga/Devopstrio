import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function AWSCloudServicesPage() {
  return (
    <EcosystemPageLayout
      title="Amazon Web Services"
      category="Cloud Ecosystem"
      categoryUrl="/ecosystem/cloud"
      badge="Cloud Services"
      subtitle="Hardened AWS Cloud deployments, EKS container orchestrations, serverless Lambda integrations, and multi-region SRE operations."
      stats={[
        { value: "200+", label: "AWS Deployments" },
        { value: "Advanced", label: "Alliance Level" },
        { value: "99.99%", label: "Uptime Achieved" },
        { value: "24/7", label: "Support & SRE" }
      ]}
      details={[
        {
          title: "EKS Cluster Blueprints",
          description: "Deploying high-performance, secure EKS clusters using hardened Terraform modules with unified security policies.",
          items: [
            "AWS EKS clusters with custom VPC configurations",
            "Automatic Horizontal Pod Autoscaler (HPA) settings",
            "Integrated Prometheus and Grafana telemetry systems"
          ]
        },
        {
          title: "AWS Serverless & Migration",
          description: "Building event-driven architectures with AWS Lambda, DynamoDB, API Gateway, and migrating legacy VM systems.",
          items: [
            "Lambda microservices configurations with memory optimization",
            "API Gateway routing with OAuth2 validation templates",
            "AWS Secrets Manager integration caching database credentials"
          ]
        }
      ]}
      ctaText="Request an AWS Architect Call"
    />
  );
}
