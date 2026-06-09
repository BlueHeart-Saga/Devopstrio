import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata = {
  title: "Data Engineering Services | Devopstrio",
  description: "Build scalable data warehouses, lakehouses, high-performance ETL/ELT pipelines, real-time data streaming architectures, and master data governance with Devopstrio.",
};

export default function DataEngineeringPage() {
  return (
    <ServicePageLayout
      title="Data Engineering"
      badge="Data Core"
      subtitle="Designing high-volume data lakehouses, implementing real-time event-streaming pipelines, and setting up centralized data warehouses for enterprise analytics."
      stats={[
        { value: "5PB+", label: "Data Processed" },
        { value: "99.99%", label: "Pipeline Reliability" },
        { value: "<10s", label: "Real-Time Latency" },
        { value: "100%", label: "Schema Validation" }
      ]}
      capabilities={[
        {
          id: "data-platform-development",
          title: "Data Platform Development",
          description: "Building cohesive data backends to store, clean, and process massive datasets.",
          items: [
            "Distributed data warehouse configuration",
            "Columnar database design optimized for analytical queries",
            "Multi-tier storage configurations (hot, warm, cold data)"
          ]
        },
        {
          id: "data-warehousing",
          title: "Data Warehousing",
          description: "Implementing scalable data warehouses like Snowflake, Databricks, and Google BigQuery.",
          items: [
            "Custom SQL schemas and data clustering strategies",
            "Data materialization and view optimization for sub-second dashboards",
            "Integration with data catalog tools for governance"
          ]
        },
        {
          id: "data-lakes-lakehouse",
          title: "Data Lakes & Lakehouse",
          description: "Merging the structure of databases with the cheap storage of object stores.",
          items: [
            "Lakehouse architectures built with Apache Iceberg and Delta Lake",
            "Partitioning strategies for high-performance parquet reads",
            "Unified metadata catalog configurations (AWS Glue/Hive Metastore)"
          ]
        },
        {
          id: "etl-elt-pipelines",
          title: "ETL/ELT Pipelines",
          description: "Automated extraction, transformation, and loading of raw data into analytical repositories.",
          items: [
            "Pipeline orchestration using Apache Airflow and Prefect",
            "Data transformations with dbt (data build tool)",
            "Incremental loading logic preventing redundant data processing"
          ]
        },
        {
          id: "real-time-data-processing",
          title: "Real-Time Data Processing",
          description: "Processing data events immediately as they occur for instant analytics.",
          items: [
            "Streaming applications built on Apache Spark Streaming and Flink",
            "Real-time schema validation with Schema Registry",
            "Low-latency event stores like Apache Druid"
          ]
        },
        {
          id: "data-quality-management",
          title: "Data Quality Management",
          description: "Continuous monitoring and validation of data files to prevent bad inputs from breaking reports.",
          items: [
            "Data quality assertions using Great Expectations",
            "Real-time anomaly detection in streaming pipelines",
            "Automated alerting and quarantining of corrupted datasets"
          ]
        },
        {
          id: "master-data-management",
          title: "Master Data Management",
          description: "Consolidating and deduplicating core business data across multiple source systems.",
          items: [
            "Custom record matching and deduplication algorithms",
            "Golden record creation and conflict resolution schemas",
            "Real-time synchronization of master data to source systems"
          ]
        },
        {
          id: "big-data-engineering",
          title: "Big Data Engineering",
          description: "Managing and analyzing multi-terabyte datasets using distributed compute clusters.",
          items: [
            "Apache Hadoop and Spark cluster optimization",
            "Distributed storage management with HDFS and Amazon S3",
            "Large-scale parallel search setups using Elasticsearch"
          ]
        }
      ]}
      ctaText="Consult with our Data Engineers"
    />
  );
}
