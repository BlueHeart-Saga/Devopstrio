import { ServicePageLayout } from "@/components/ServicePageLayout";

export default function DataEngineeringPage() {
  return (
    <ServicePageLayout
      title="Data Engineering"
      badge="Data Grids"
      subtitle="Designing decentralized data product registries, building low-latency ETL pipelines, setting up warehouses, and streaming event logs."
      stats={[
        { value: "10M+", label: "Events Streamed/Sec" },
        { value: "99.99%", label: "Pipeline Uptime" },
        { value: "80+", label: "Data Connections" },
        { value: "12+", label: "Data Experts" }
      ]}
      capabilities={[
        {
          title: "ETL Pipelines & Lakehouse",
          description: "Building automated data cleaning, partitioning, and validation schemas to feed analytical warehouses.",
          items: [
            "ETL pipelines using Apache Airflow, Prefect, and dbt models",
            "Data Lakehouse structures unifying structured and raw data",
            "Automatic data column masking and schema contract checking"
          ]
        },
        {
          title: "Real-Time Event Streaming",
          description: "Optimizing streaming processing engines to capture anomalies and update dashboards in real-time.",
          items: [
            "Low-latency event messaging setups using Apache Kafka and Redpanda",
            "Real-time stream computations using Apache Flink and Spark",
            "Continuous telemetry dashboard synchronization pipelines"
          ]
        }
      ]}
      ctaText="Consult with our Data Engineers"
    />
  );
}
