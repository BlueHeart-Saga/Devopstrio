import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function AWSPartnershipPage() {
  return (
    <EcosystemPageLayout
      title="AWS Partnership"
      category="Partnerships"
      categoryUrl="/ecosystem/partnerships"
      badge="Advanced Tier"
      subtitle="Hardened AWS architecture co-engineering for containerized orchestrations, serverless pipelines, and multi-region failover automation."
      stats={[
        { value: "200+", label: "AWS Implementations" },
        { value: "120+", label: "Certified Engineers" },
        { value: "Advanced", label: "Partner Tier" },
        { value: "99.99%", label: "Uptime Achieved" }
      ]}
      details={[
        {
          title: "Kubernetes & Containers on AWS",
          description: "Deploying production-ready EKS grids, setting up Fargate scaling profiles, and configuring App Mesh services.",
          items: [
            "AWS EKS clusters with custom VPC network segmentation",
            "Continuous deployment using AWS CodePipeline and Helm",
            "Hardened container registry (ECR) scanning systems"
          ]
        },
        {
          title: "Serverless & Microservices",
          description: "Building event-driven microservice architectures using Lambda, API Gateway, DynamoDB, and Cognito integrations.",
          items: [
            "Optimizing Lambda cold starts and memory allocation scripts",
            "API Gateway routing with custom OAuth2 authorization hooks",
            "Secure credentials caching using AWS Secrets Manager"
          ]
        }
      ]}
      ctaText="Request an AWS Consultant Call"
    />
  );
}
