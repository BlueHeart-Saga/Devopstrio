import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function GCPCloudServicesPage() {
  return (
    <EcosystemPageLayout
      title="Google Cloud Platform"
      category="Cloud Ecosystem"
      categoryUrl="/ecosystem/cloud"
      badge="Cloud Services"
      subtitle="Google Cloud Premier Partner integrations for Vertex AI pipeline setups, GKE configurations, and BigQuery analytics data meshes."
      stats={[
        { value: "80+", label: "GCP Solutions" },
        { value: "Premier", label: "Alliance Status" },
        { value: "100%", label: "BigQuery Tuning" },
        { value: "24/7", label: "SRE Operations" }
      ]}
      details={[
        {
          title: "Vertex AI & Machine Learning Pipelines",
          description: "Setting up MLOps pipelines on GCP, fine-tuning foundational models, and integrating vector semantic searches.",
          items: [
            "MLOps workflows utilizing Vertex AI and Kubeflow frameworks",
            "Custom LLM fine-tuning schedules with TPU accelerators",
            "Vector databases indexing systems on Cloud Memorystore"
          ]
        },
        {
          title: "GKE & Data Architectures",
          description: "Deploying high-availability Google Kubernetes Engine (GKE) clusters and designing BigQuery analytical environments.",
          items: [
            "Multi-region GKE configurations with security policy templates",
            "BigQuery data warehouse partitioning and clustering strategies",
            "Real-time event streaming architectures using Pub/Sub pipelines"
          ]
        }
      ]}
      ctaText="Connect with a GCP Architect"
    />
  );
}
