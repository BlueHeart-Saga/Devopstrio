import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function GoogleCloudPartnershipPage() {
  return (
    <EcosystemPageLayout
      title="Google Cloud Partnership"
      category="Partnerships"
      categoryUrl="/ecosystem/partnerships"
      badge="Premier Partner"
      subtitle="Google Cloud Premier Partner certifications driving data lakes, Vertex AI integrations, GKE setups, and real-time streaming analysis."
      stats={[
        { value: "80+", label: "GCP Solutions" },
        { value: "45+", label: "Certified Cloud Devs" },
        { value: "Premier", label: "Alliance Level" },
        { value: "100%", label: "BigQuery Optimization" }
      ]}
      details={[
        {
          title: "Vertex AI & Machine Learning",
          description: "Setting up MLOps pipelines on GCP, fine-tuning LLMs, and performing semantic search optimizations.",
          items: [
            "MLOps workflows built using Kubeflow and Vertex AI Pipelines",
            "Custom LLM fine-tuning scripts utilizing TPU accelerators",
            "Vector database deployments on Google Cloud Memorystore"
          ]
        },
        {
          title: "GKE & Data Platforms",
          description: "Deploying high-performance Google Kubernetes Engine (GKE) clusters and designing BigQuery analytics environments.",
          items: [
            "Multi-region GKE clusters with automated network security policies",
            "BigQuery real-time data warehouse partitioning strategies",
            "Pub/Sub event streaming pipelines with Dataflow processing"
          ]
        }
      ]}
      ctaText="Connect with a GCP Specialist"
    />
  );
}
