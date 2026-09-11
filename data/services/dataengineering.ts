import { ServiceCategory, CapabilityDetail } from "./types";

export const dataengineeringService: ServiceCategory = {
  slug: "data-engineering",
  title: "Data Engineering",
  badge: "Data Platforms",
  subtitle: "Build modern cloud data lakes, high-throughput streaming pipelines, automated ETL flows, and governed warehousing solutions.",
  overviewHeading: "Robust data architectures designed for analytical precision",
  overviewDesc1: "We build structured data pipelines, configure data warehouses, and set up analytics engines. Our pipelines process billions of data records daily without delays.",
  overviewDesc2: "We construct secure data lake partitions, enforce column-level encryption keys, and automate database quality checks to prevent pipeline failures.",
  stats: [
    { value: "50TB+", label: "Data Volumes Managed" },
    { value: "<10s", label: "Real-time Query Latency" },
    { value: "100M+", label: "Daily Data Records" },
    { value: "100%", label: "Pipeline Quality Met" }
  ],
  capabilities: [
    {
      slug: "data-warehousing",
      title: "Data Warehousing & Lakes",
      description: "Designing scalable analytical databases using Snowflake, BigQuery, or Amazon Redshift.",
      items: ["Optimized dimensional database schemas", "Data partition and clustering rules", "Secure role-based column access policies"],
      href: "/services/data-engineering/data-warehousing"
    },
    {
      slug: "real-time-data-processing",
      title: "Real-Time Streaming Pipelines",
      description: "Constructing low-latency streaming pipelines using Apache Kafka, Flink, and Spark Streaming.",
      items: ["Real-time event capture lines", "In-memory database aggregation scripts", "Automated anomaly alert triggers"],
      href: "/services/data-engineering/real-time-data-processing"
    },
    {
      slug: "data-pipeline-orchestration",
      title: "Automated ETL/ELT & Orchestration",
      description: "Building resilient data ingestion pipelines with dbt, Airflow, and Dagster.",
      items: ["Automated data transformation models", "Continuous data quality tests", "DAG dependency scheduling"],
      href: "/services/devops-automation/platform-engineering"
    },
    {
      slug: "machine-learning-data-prep",
      title: "Feature Stores & AI Data Platforms",
      description: "Pre-processing high-dimensional feature stores for enterprise ML training and inference.",
      items: ["Real-time vector embeddings", "Feature store synchronization", "Data versioning & lineage"],
      href: "/services/ai-data-innovation/machine-learning-engineering"
    },
    {
      slug: "cloud-data-governance",
      title: "Data Governance & Compliance",
      description: "End-to-end data lineage, cataloging, automated masking, and GDPR/SOC-2 compliance guardrails.",
      items: ["Automated PII data masking", "Metadata catalog integration", "Audit logging & access controls"],
      href: "/services/cybersecurity/compliance-governance"
    },
    {
      slug: "cloud-analytics-infra",
      title: "Cloud Analytics & BI Infrastructure",
      description: "High-performance business intelligence foundations delivering sub-second reporting.",
      items: ["Semantic reporting layers", "Interactive analytics dashboards", "Automated executive KPI delivery"],
      href: "/services/cloud-services/cloud-architecture"
    }
  ],
  outcomes: [
    "Instant dashboard loading speeds for corporate analyst teams",
    "Clean, deduplicated databases ready for machine learning models",
    "Guaranteed database column safety with selective access rules"
  ],
  industries: [
    "E-commerce: Real-time inventory levels and customer purchase streams",
    "Telecom: Cellular call log analytics databases",
    "Finance: High-volume transaction audit records"
  ],
  techStack: [
    { name: "Snowflake / BigQuery", desc: "Enterprise cloud analytical databases." },
    { name: "Apache Spark / Kafka", desc: "High-speed streaming and batch processing engines." },
    { name: "dbt (data build tool)", desc: "Declarative SQL transformation pipelines." }
  ],
  deliveryFramework: [
    "Phase 1: Source Data Audits & Schema Mapping",
    "Phase 2: ETL Pipeline Integration & Warehouse Setup",
    "Phase 3: Data Quality Checks & Telemetry Logs"
  ],
  caseStudies: [
    {
      title: "Consolidating customer metrics database for global telecom provider.",
      desc: "We engineered a Cassandra and Kafka streaming database that consolidates 500M daily cell log updates, updating analytical dashboards in under 10 seconds.",
      highlights: [
        "Eliminated duplicate database records",
        "Setup secure column-level encryption keys",
        "Reduced query processing delays by 75%"
      ]
    }
  ],
  faqs: [
    {
      q: "How do you enforce database quality controls?",
      a: "We configure automated dbt tests and Great Expectations checks into our pipelines, quarantining records that fail schema parameters."
    },
    {
      q: "What is your approach to data warehouse security?",
      a: "We implement multi-factor login checks, private network routing, and restrict database column visibility to specific employee roles."
    }
  ],
  ctaTitle: "Scale your analytical",
  ctaHighlight: "Data engines",
  ctaDesc: "Request a consult with our data architects to design your cloud data lake layouts and clean your database pipelines.",
  ctaBtnText: "Consult Data Architect"
};

export const dataengineeringCapabilities: Record<string, CapabilityDetail> = {
  "data-warehousing": {
    slug: "data-warehousing",
    title: "Data Warehousing",
    heroSubtitle: "Design analytical cloud databases using Snowflake, Google BigQuery, or Amazon Redshift.",
    challenge: "Enterprise analytics suffer from database silos, slow SQL queries, and sky-rocketing monthly database storage bills.",
    solution: "We build consolidated dimensional database schemas, configure partition clusters, and write optimized SQL queries.",
    features: [
      "Dimensional schema layouts (Star / Snowflake structures)",
      "Automated partition and clustering settings",
      "Dynamic column and row-level database access rules"
    ],
    benefits: [
      "Drastic reductions in SQL query response times",
      "Lower monthly cloud database storage bills",
      "Single source of truth for business intelligence tools"
    ],
    deliveryApproach: [
      "Data Audit: Listing database tables and source systems.",
      "Schema Design: Building dimensional tables and write schemas.",
      "ETL Connection: Routing source data to the warehouse using dbt."
    ],
    techStack: [
      { name: "Snowflake", desc: "Scalable cloud data warehousing platform." },
      { name: "dbt (data build tool)", desc: "Declarative database transformation pipeline." },
      { name: "Fivetran", desc: "Automated data connector service." }
    ],
    caseStudy: {
      title: "Consolidating sales analytics databases for retail provider.",
      desc: "We consolidated 14 sales databases into a single Snowflake data warehouse, cutting search response delays by 85%.",
      metrics: [
        { value: "85%", label: "Reduction in query search delays" },
        { value: "14", label: "Siloed databases consolidated" },
        { value: "40%", label: "Saved in monthly storage bills" }
      ]
    },
    faqs: [
      {
        q: "How do you control data warehouse costs?",
        a: "We configure warehouse auto-suspend rules, optimize clustering keys, and prune unused query tasks."
      },
      {
        q: "Do you support data sharing capabilities?",
        a: "Yes. We set up secure data share permissions inside Snowflake, allowing partners to access query results without copying databases."
      }
    ]
  }
};
