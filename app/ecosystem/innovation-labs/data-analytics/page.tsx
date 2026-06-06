import { EcosystemPageLayout } from "@/components/EcosystemPageLayout";

export default function DataAnalyticsLabPage() {
  return (
    <EcosystemPageLayout
      title="Data & Analytics Lab"
      category="Innovation Labs"
      categoryUrl="/ecosystem/innovation-labs"
      badge="Research Lab"
      subtitle="Designing decentralized data product architectures, real-time event streaming systems, and optimized pipeline structures."
      stats={[
        { value: "12+", label: "Data Engineers" },
        { value: "10M+", label: "Events Streamed/Sec" },
        { value: "99.99%", label: "Pipeline Reliability" },
        { value: "8+", label: "Open Source Connectors" }
      ]}
      details={[
        {
          title: "Decentralized Data Mesh",
          description: "Engineering platforms that treat data as a localized product, defining clear ownership boundaries, access APIs, and schema contracts.",
          items: [
            "Data product registry platforms with automatic schema validation",
            "Federated access policies and fine-grained data column masking",
            "Metadata catalog integrations using Apache Atlas"
          ]
        },
        {
          title: "Low-Latency Event Streaming",
          description: "Optimizing streaming processing engines to compute analytics and detect anomalies on incoming data packets in real-time.",
          items: [
            "Kafka event streaming topologies with zero-loss packet configurations",
            "Real-time analytical pipelines using Apache Flink and Spark Streaming",
            "Dynamic pipeline auto-scaling rules based on queue backlogs"
          ]
        }
      ]}
      ctaText="Co-Innovate in Data Lab"
    />
  );
}
