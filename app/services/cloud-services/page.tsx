import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata = {
  title: "Cloud Services | Devopstrio",
  description: "Accelerate your multi-cloud migrations, governance, and architecture on AWS, Microsoft Azure, and GCP. Partner with Devopstrio for FinOps and managed cloud solutions.",
};

export default function CloudServicesSubPage() {
  return (
    <ServicePageLayout
      title="Cloud Services"
      badge="Cloud Platforms"
      subtitle="Comprehensive multi-cloud migrations, high-availability cluster setups, zero-downtime database moves, and cost-control FinOps integrations."
      stats={[
        { value: "300+", label: "Cloud Migrations" },
        { value: "99.99%", label: "System Uptime" },
        { value: "35%+", label: "Operating Cost Saved" },
        { value: "40+", label: "Certified Engineers" }
      ]}
      capabilities={[
        {
          id: "cloud-strategy-consulting",
          title: "Cloud Strategy & Consulting",
          description: "Designing tailored cloud architecture blueprints, vendor evaluation, and cloud readiness roadmaps.",
          items: [
            "Multi-cloud migration feasibility and ROI analysis dashboards",
            "Technical vendor selection matrices (AWS vs. Azure vs. GCP)",
            "Cloud architecture audits focusing on reliability and scalability"
          ]
        },
        {
          id: "cloud-migration",
          title: "Cloud Migration",
          description: "Re-hosting, re-platforming, and refactoring workloads to public and hybrid clouds with zero downtime.",
          items: [
            "Live VM migrations using AWS Application Migration Service",
            "Database replication with active sync using Azure Database Migration Service",
            "Automated cutover playbooks minimizing business disruptions"
          ]
        },
        {
          id: "azure-services",
          title: "Azure Services",
          description: "Deploying enterprise-grade solutions on Microsoft Azure infrastructure.",
          items: [
            "Enterprise Landing Zones built with Azure Bicep and ARM templates",
            "Container orchestration using Azure Kubernetes Service (AKS)",
            "App Services and Serverless Function App deployments"
          ]
        },
        {
          id: "aws-services",
          title: "AWS Services",
          description: "Architecting and managing scalable, secure infrastructures on Amazon Web Services.",
          items: [
            "Declarative deployments using AWS CloudFormation and Terraform",
            "Containerized microservices on AWS Elastic Kubernetes Service (EKS) and ECS",
            "Serverless backends with AWS Lambda, API Gateway, and DynamoDB"
          ]
        },
        {
          id: "google-cloud-services",
          title: "Google Cloud Services",
          description: "Designing data-centric and AI-ready infrastructures on Google Cloud Platform.",
          items: [
            "Scalable container environments with Google Kubernetes Engine (GKE) autopilot",
            "Large-scale data warehouse setups using Google BigQuery",
            "Vertex AI integration for model development and pipelines"
          ]
        },
        {
          id: "cloud-security",
          title: "Cloud Security",
          description: "Hardening cloud perimeters, identity federation, and configuration drift detection.",
          items: [
            "IAM policy guardrails using SCPs and Azure Policies",
            "Cloud Security Posture Management (CSPM) using Wiz and Prisma Cloud",
            "Encryption key management using AWS KMS and HashiCorp Vault"
          ]
        },
        {
          id: "cloud-managed-services",
          title: "Cloud Managed Services",
          description: "24/7 outsourced management of cloud environments, patching, and resource allocation.",
          items: [
            "Continuous operating system patching and vulnerability remediation",
            "Active backup routines with automated restore validation",
            "Incident response SLAs for cloud outages"
          ]
        },
        {
          id: "finops-cost-optimization",
          title: "FinOps & Cost Optimization",
          description: "Analyzing cloud spend, managing commitments, and pruning underutilized resources.",
          items: [
            "Real-time cloud spend dashboard integrations",
            "Reserved Instance and Savings Plan optimization algorithms",
            "Auto-scaling rules matching compute capacity to live traffic metrics"
          ]
        }
      ]}
      ctaText="Consult with our Cloud Architects"
    />
  );
}
