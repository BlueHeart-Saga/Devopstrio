import { CapabilityPageData } from "./types";

export const dataCapabilities: Record<string, CapabilityPageData> = {
  "data-lakes-storage": {
    slug: "data-lakes-storage",
    pillarSlug: "data-engineering",
    pillarName: "Data Engineering",
    title: "Data Lakes Storage",
    tag: "Lakehouse Architecture",
    badge: "Apache Iceberg & Delta Lake Open Standards",
    subtitle: "Consolidate petabyte-scale enterprise data into a unified, high-performance lakehouse. Powered by Apache Iceberg, Delta Lake, object storage cost optimization, and ACID transactions.",
    metrics: [
      { val: "Petabyte", label: "Scalable Data Capacity", sub: "Distributed object storage" },
      { val: "10x", label: "Query Acceleration", sub: "Parquet columnar partitioning" },
      { val: "100%", label: "ACID Transaction Guarantees", sub: "Zero corrupted writes" },
      { val: "62%", label: "Storage Cost Reduction", sub: "Intelligent tiering & compression" }
    ],
    capabilities: [
      {
        id: "iceberg-delta-formats",
        title: "Open Table Formats (Apache Iceberg & Delta)",
        tag: "Table Formats",
        badge: "ACID Transactions",
        latencyBadge: "Zero Data Corruption",
        desc: "Brings relational database guarantees to cheap object storage. Enforces atomic ACID transactions, schema evolution, and time-travel querying on Amazon S3 and Azure Data Lake.",
        stats: [
          "Eliminates dirty reads and incomplete writes during concurrent pipeline execution",
          "Time-travel historical rollbacks allowing analysts to query data snapshots from any point in time",
          "Full vendor neutrality querying simultaneously via Spark, Trino, Snowflake, and DuckDB"
        ],
        terminal: {
          command: "iceberg.table.query({ table: 'telemetry_events', as_of: '2026-06-01T10:00:00Z' })",
          status: "TIME-TRAVEL QUERY SUCCESS",
          logs: [
            { type: "comment", text: "// Reading historical Iceberg metadata snapshot #90124" },
            { type: "step", text: "> snapshot isolation: read 4,800 Parquet data files" },
            { type: "step", text: "> schema version: v3 (schema evolution handled automatically)" },
            { type: "success", text: "> returned 14.8M rows with exact historical state reproducibility" }
          ]
        }
      },
      {
        id: "smart-partitioning-pruning",
        title: "Intelligent Partitioning & Partition Pruning",
        tag: "Query Optimization",
        badge: "Columnar Storage",
        latencyBadge: "90% Less Data Scanned",
        desc: "Organizes raw data into optimized columnar Parquet files with hidden partitioning and min/max statistics, skipping up to 90% of data files during analytical queries.",
        stats: [
          "Hidden partitioning abstracting complex date/hour directory hierarchies from end users",
          "Dictionary encoding and Zstandard compression shrinking storage footprints by over 60%",
          "Min/Max column indexing enabling instant data file skipping on query execution"
        ],
        terminal: {
          command: "trino.execute({ sql: 'SELECT sum(amount) FROM sales WHERE region = \"UK\"' })",
          status: "QUERIED 1.2 TB IN 1.4s",
          logs: [
            { type: "comment", text: "// Evaluating Iceberg metadata manifests" },
            { type: "step", text: "> total table size: 48 TB (48,000 files)" },
            { type: "step", text: "> partition pruning: skipped 46,800 files based on min/max stats" },
            { type: "success", text: "> scanned only 1.2 TB (scanned 2.5% of total dataset)" }
          ]
        }
      },
      {
        id: "multi-tier-lifecycle",
        title: "Automated Lifecycle & Storage Tiering",
        tag: "FinOps Storage",
        badge: "S3 Glacier & Cold Tier",
        latencyBadge: "Automated Compaction",
        desc: "Automatically compacts small fragmented files in the background and transitions aged data partitions to low-cost archival tiers (S3 Glacier / Azure Archive).",
        stats: [
          "Automated small-file compaction merging tiny JSON/Parquet files to optimize read I/O",
          "Policy-driven tiering migrating raw logs older than 90 days to cold archive storage",
          "Reduces total enterprise lakehouse storage costs by up to 62%"
        ],
        terminal: {
          command: "lakehouse_lifecycle.run_maintenance({ pool: 'analytics_raw_lake' })",
          status: "COMPACTION & TIERING COMPLETE",
          logs: [
            { type: "comment", text: "// Running automated compaction job" },
            { type: "step", text: "> compacted 14,200 small files into 120 optimized 512MB Parquet files" },
            { type: "step", text: "> transitioned 8.4 TB historical 2025 partitions to S3 Glacier" },
            { type: "success", text: "> estimated ongoing cost reduction: £4,200 / month" }
          ]
        }
      },
      {
        id: "data-mesh-cataloging",
        title: "Enterprise Data Cataloging & LakeFS Versioning",
        tag: "Data Governance",
        badge: "Git-like Data Versioning",
        latencyBadge: "Branching for Data",
        desc: "Provides Git-like branching, merging, and rollbacks for data lake buckets using LakeFS, allowing engineers to test breaking ETL changes on isolated data branches.",
        stats: [
          "Zero-copy data branching creating instant isolated copies of petabyte buckets",
          "Automated schema validation pre-merge hooks blocking dirty data from production",
          "Unified data catalog integrating with AWS Glue, Apache Polaris, and Unity Catalog"
        ],
        terminal: {
          command: "lakefs.branch.create({ repo: 'production-lake', branch: 'feature/etl-v2' })",
          status: "BRANCH CREATED (ZERO-COPY)",
          logs: [
            { type: "comment", text: "// Creating virtual data branch from production head" },
            { type: "step", text: "> branch pointer: points to commit #891a2 (1.4 PB data)" },
            { type: "step", text: "> zero storage duplicated: metadata pointers only" },
            { type: "success", text: "> staging ETL pipeline ready for isolated dry-run execution" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Raw Ingestion", tag: "Bronze Zone", desc: "Ingests raw JSON, CSV, and streaming payloads into immutable object storage.", iconName: "Database" },
      { step: "02", title: "Compaction", tag: "Small File Merge", desc: "Merges fragmented files into optimized 512MB Parquet blocks in the background.", iconName: "Layers" },
      { step: "03", title: "Format Conversion", tag: "Silver Zone", desc: "Converts raw datasets into Apache Iceberg / Delta Lake tables with schema enforcement.", iconName: "RefreshCw" },
      { step: "04", title: "Metadata Indexing", tag: "Min/Max Stats", desc: "Indexes column statistics and partition manifests for fast pruning.", iconName: "Search" },
      { step: "05", title: "Unified Access", tag: "Gold Delivery", desc: "Exposes curated lakehouse data simultaneously to Trino, Snowflake, and AI frameworks.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Database", title: "Open Table Formats (Iceberg & Delta)", tags: ["Apache Iceberg", "Delta Lake", "ACID Guarantees"], desc: "Achieve ACID transactions and schema evolution on cheap cloud object storage, eliminating vendor lock-in with fully open table formats." },
      { iconName: "Zap", title: "Sub-Second Query Pruning", tags: ["Parquet", "Min/Max Stats", "Hidden Partitioning"], desc: "Skip over 90% of irrelevant files during analytical queries using intelligent partition pruning and columnar metadata manifests." },
      { iconName: "Sliders", title: "Git-Like Data Versioning", tags: ["LakeFS", "Zero-Copy Branches", "Time Travel"], desc: "Create instant zero-copy branches of your entire data lake to test transformation code safely without duplicating underlying storage bytes." },
      { iconName: "Activity", title: "Small File Auto-Compaction", tags: ["File Compaction", "ZSTD Compression", "I/O Optimization"], desc: "Automatically merge streaming small-file fragments into large, performant columnar chunks to keep analytical query speeds blistering." },
      { iconName: "Lock", title: "Automated Lifecycle Tiering", tags: ["S3 Glacier", "Cold Storage", "FinOps Savings"], desc: "Cut storage expenses by over 60% by automatically transitioning older, rarely accessed historical datasets to cost-effective archival tiers." },
      { iconName: "Workflow", title: "Multi-Engine Lakehouse Querying", tags: ["Trino", "DuckDB", "Apache Spark"], desc: "Query your centralized data lake simultaneously using Apache Spark for batch ETL, Trino for BI dashboards, and DuckDB for local analytics." }
    ],
    techStack: [
      { category: "Open Table Formats", items: ["Apache Iceberg", "Delta Lake", "Apache Hudi"] },
      { category: "Query & Compute Engines", items: ["Trino", "Apache Spark", "DuckDB", "Presto", "ClickHouse"] },
      { category: "Object Storage & Versioning", items: ["Amazon S3", "Azure Data Lake Storage (ADLS Gen2)", "Google Cloud Storage", "LakeFS", "MinIO"] },
      { category: "Catalogs & Metastores", items: ["Apache Polaris", "AWS Glue Data Catalog", "Databricks Unity Catalog", "Project Nessie"] },
      { category: "Data Governance", items: ["Apache Ranger", "OpenMetadata", "Immuta", "Collibra"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Chaotic Data Swamps",
      beforePoints: [
        "Unorganized folders of millions of tiny JSON and CSV files causing queries to crawl.",
        "Corrupted data caused by failed pipeline writes that leave half-written files behind.",
        "Skyrocketing cloud storage invoices with zero lifecycle management on aged logs.",
        "Proprietary formats locking your enterprise data into expensive closed ecosystems."
      ],
      afterTitle: "Devopstrio Modern Data Lakehouse",
      afterPoints: [
        "Structured Apache Iceberg tables providing atomic ACID reliability on object storage.",
        "Optimized Parquet files and automated compaction speeding up queries by 10x.",
        "Automated lifecycle tiering slashing long-term storage bills by up to 62%.",
        "100% open standards allowing any modern query engine to access data simultaneously."
      ]
    },
    faqs: [
      { q: "What is the difference between a traditional Data Lake and a modern Lakehouse?", a: "A traditional data lake is just a collection of unorganized files in cloud storage, which suffers from slow queries, lack of transactional consistency, and corruptions during failed writes. A Lakehouse adds an open table format (like Apache Iceberg) on top, bringing ACID transactions, schema enforcement, and indexing to object storage." },
      { q: "Why is Apache Iceberg becoming the enterprise standard for data lakes?", a: "Iceberg abstracts physical file paths from queries, provides reliable multi-writer ACID transactions, supports seamless schema evolution (renaming or dropping columns without rewriting data), and is supported natively by AWS, Snowflake, Databricks, and Google Cloud." },
      { q: "What is the 'Small File Problem' and how do you solve it?", a: "Streaming pipelines often write thousands of tiny 50KB files to S3 every hour. When query engines read millions of small files, network metadata overhead causes queries to grind to a halt. We solve this by running automated background compaction jobs that merge small files into optimal 512MB Parquet blocks." },
      { q: "How does time-travel querying work in an Iceberg lakehouse?", a: "Every commit to an Iceberg table generates an immutable metadata snapshot. By passing a timestamp or snapshot ID to your query engine, you can read the exact state of the data lake at that historical point in time, enabling flawless auditability and debugging." },
      { q: "Can we connect tools like PowerBI and Tableau directly to the Data Lake?", a: "Yes. Using distributed SQL query engines like Trino or ClickHouse placed on top of Iceberg tables, business intelligence tools can query petabyte datasets directly in sub-seconds without copying data into proprietary data warehouses." }
    ]
  },

  "modern-warehousing-schemas": {
    slug: "modern-warehousing-schemas",
    pillarSlug: "data-engineering",
    pillarName: "Data Engineering",
    title: "Modern Warehousing Schemas",
    tag: "Data Modeling",
    badge: "dbt Core, Snowflake & Dimensional Modeling",
    subtitle: "Design modular, high-performance data warehouse models. From Kimball dimensional star schemas and dbt transformations to automated testing, semantic layers, and column pruning.",
    metrics: [
      { val: "8x", label: "Dashboard Query Speedup", sub: "Optimized dimensional star schemas" },
      { val: "100%", label: "Tested Data Models", sub: "Automated dbt test assertions" },
      { val: "< 15min", label: "End-to-End Warehousing Run", sub: "Incremental dbt compilation" },
      { val: "54%", label: "Warehouse Compute Cost Cut", sub: "Micro-partition pruning" }
    ],
    capabilities: [
      {
        id: "kimball-dimensional-modeling",
        title: "Kimball Dimensional Star & Snowflake Modeling",
        tag: "Warehouse Architecture",
        badge: "Star Schema",
        latencyBadge: "Sub-Second Joins",
        desc: "Structures enterprise data into clean fact and dimension tables, optimizing complex business aggregation queries for sub-second dashboard performance.",
        stats: [
          "Slowly Changing Dimensions (SCD Type 2) tracking historical attribute changes accurately",
          "Conformed dimensions ensuring cross-departmental alignment on revenue and customer counts",
          "Denormalized marts eliminating expensive multi-table relational joins during reporting"
        ],
        terminal: {
          command: "dbt.run({ select: 'marts.finance.fact_revenue_daily', full_refresh: false })",
          status: "MODEL COMPILED & RUN (32s)",
          logs: [
            { type: "comment", text: "// Executing incremental dimensional transformation" },
            { type: "step", text: "> processed 1.4M new transaction events from bronze layer" },
            { type: "step", text: "> updated dimension: dim_customer (handled 42 SCD Type 2 changes)" },
            { type: "success", text: "> fact_revenue_daily updated: 0 duplicate keys detected" }
          ]
        }
      },
      {
        id: "dbt-transformation-testing",
        title: "Modular dbt Transformations & Automated Tests",
        tag: "Analytics Engineering",
        badge: "dbt Core & SQLFluff",
        latencyBadge: "100% Test Coverage",
        desc: "Transforms SQL into software engineering. Manages transformations with version control, Jinja macros, dependency DAGs, and automated data quality assertions.",
        stats: [
          "Automated tests asserting unique keys, not-null constraints, and foreign key integrity",
          "Incremental model compilation processing only newly appended records",
          "Automated interactive documentation and visual lineage DAG generation"
        ],
        terminal: {
          command: "dbt.test({ select: 'marts.finance.*' })",
          status: "148 TESTS PASSED (0 FAILURES)",
          logs: [
            { type: "comment", text: "// Running data quality integrity checks" },
            { type: "step", text: "> assert_unique: customer_id (PASSED)" },
            { type: "step", text: "> assert_not_null: total_order_amount (PASSED)" },
            { type: "step", text: "> assert_accepted_values: currency IN ('GBP', 'EUR', 'USD') (PASSED)" },
            { type: "success", text: "> all 148 automated warehouse assertions verified clean" }
          ]
        }
      },
      {
        id: "micro-partition-clustering",
        title: "Snowflake Clustering & Micro-Partition Optimization",
        tag: "Warehouse FinOps",
        badge: "Cluster Keys",
        latencyBadge: "Zero Full-Table Scans",
        desc: "Configures optimal cluster keys and search optimization services on Snowflake and BigQuery, preventing expensive full-table scans and cutting warehouse compute spend.",
        stats: [
          "Dynamic cluster keys aligning physical storage with primary filter predicates",
          "Automated warehouse auto-suspend and auto-resume policies preventing idle spend",
          "Query profile analysis identifying and rewriting high-spill queries"
        ],
        terminal: {
          command: "snowflake.analyze_query({ query_id: '01b49a20-4821-4f10' })",
          status: "OPTIMIZED (98% PRUNING)",
          logs: [
            { type: "comment", text: "// Inspecting Snowflake execution plan" },
            { type: "step", text: "> partitions total: 14,200 | partitions scanned: 28" },
            { type: "step", text: "> memory spill to remote disk: 0 bytes (was 42 GB)" },
            { type: "success", text: "> query execution time slashed from 84s -> 2.1s" }
          ]
        }
      },
      {
        id: "universal-semantic-layer",
        title: "Universal Semantic & Metrics Layer",
        tag: "Business Intelligence",
        badge: "Cube.js & dbt Semantic",
        latencyBadge: "Single Source of Truth",
        desc: "Defines business metrics (e.g., 'Monthly Recurring Revenue', 'Active Users') once in a central semantic layer, guaranteeing identical figures across PowerBI, Tableau, and ad-hoc SQL.",
        stats: [
          "Eliminates discrepancies between marketing, sales, and finance dashboards",
          "Pre-aggregations and sub-second SQL caching for interactive dashboard widgets",
          "Role-based column and row-level data access control enforced automatically"
        ],
        terminal: {
          command: "semantic_layer.query({ metric: 'net_revenue_retention', timeframe: '2026-Q2' })",
          status: "METRIC SERVED: 118.4%",
          logs: [
            { type: "comment", text: "// Evaluating standardized dbt semantic definition" },
            { type: "step", text: "> applied central business rule: exclude one-time setup fees" },
            { type: "step", text: "> pre-aggregation cache hit in Redis (response time: 8ms)" },
            { type: "success", text: "> identical metric served to PowerBI, Tableau, and internal API" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Raw Staging", tag: "Staging Views", desc: "Cleans raw JSON types and standardizes naming conventions in staging models.", iconName: "Database" },
      { step: "02", title: "Intermediate", tag: "Business Logic", desc: "Joins entities, resolves deduplications, and applies corporate business rules.", iconName: "Workflow" },
      { step: "03", title: "Dimensional Marts", tag: "Star Schema", desc: "Builds denormalized fact and dimension tables optimized for reporting queries.", iconName: "Layers" },
      { step: "04", title: "Quality Testing", tag: "dbt Test Suite", desc: "Executes automated data quality assertions before promoting models to production.", iconName: "ShieldCheck" },
      { step: "05", title: "Semantic Serving", tag: "BI Dashboards", desc: "Serves standardized metrics to PowerBI, Tableau, and AI analytics in sub-seconds.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Layers", title: "Kimball Dimensional Star Schemas", tags: ["Fact Tables", "Dimension Tables", "SCD Type 2"], desc: "Structure your business data into intuitive, lightning-fast star schemas that empower non-technical analysts to build reports without complex joins." },
      { iconName: "Code2", title: "dbt Core Transformation Framework", tags: ["dbt Core", "Version Control", "Lineage DAGs"], desc: "Treat data modeling like software engineering with modular SQL models, automated documentation, Git version control, and CI/CD pipelines." },
      { iconName: "ShieldCheck", title: "Automated Data Quality Assertions", tags: ["Schema Tests", "Not-Null Tests", "Referential Integrity"], desc: "Catch dirty data before business stakeholders see it. Automatically assert unique keys, valid ranges, and referential constraints on every run." },
      { iconName: "Sliders", title: "Micro-Partition Pruning & FinOps", tags: ["Snowflake Clustering", "BigQuery Partitions", "Cost Cut"], desc: "Cut warehouse compute expenses in half by establishing optimal clustering keys that allow query engines to bypass 95%+ of table data." },
      { iconName: "Activity", title: "Universal Semantic Metrics Layer", tags: ["dbt Semantic Layer", "Cube.js", "Single Metric Definition"], desc: "Define critical KPIs once in code, ensuring that marketing, finance, and product teams never argue over divergent revenue calculations again." },
      { iconName: "Zap", title: "Incremental Model Processing", tags: ["Incremental Models", "CDC Processing", "Fast Execution"], desc: "Only transform new and updated data records instead of re-processing entire multi-terabyte tables, slashing warehousing execution times to minutes." }
    ],
    techStack: [
      { category: "Cloud Data Warehouses", items: ["Snowflake Enterprise", "Google BigQuery", "AWS Redshift Serverless", "Databricks SQL"] },
      { category: "Transformation & Modeling", items: ["dbt Core / dbt Cloud", "SQLFluff", "Dataform", "Coalesce"] },
      { category: "Semantic & BI Layers", items: ["Cube.js", "dbt Semantic Layer", "Lightdash", "Preset / Superset"] },
      { category: "Data Quality & Testing", items: ["dbt-expectations", "Great Expectations", "Elementary Data", "Soda SQL"] },
      { category: "BI Tools & Consumables", items: ["PowerBI", "Tableau", "Looker", "Hex"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Spaghetti SQL & Disputed Numbers",
      beforePoints: [
        "Thousands of chaotic un-versioned SQL scripts running with zero documentation.",
        "Marketing and Finance reporting conflicting revenue numbers on identical quarters.",
        "Slow, un-clustered queries running for 10 minutes and blowing through cloud budgets.",
        "Dirty data slipping into C-suite dashboards unnoticed until customers complain."
      ],
      afterTitle: "Devopstrio Modern Data Warehousing",
      afterPoints: [
        "Modular, Git-versioned dbt models with automated interactive lineage graphs.",
        "Centralized semantic layer enforcing a single authoritative source of truth for all metrics.",
        "Optimized star schemas and clustering keys delivering sub-2-second dashboard responses.",
        "Comprehensive automated test assertions verifying 100% of data integrity on every build."
      ]
    },
    faqs: [
      { q: "Why is dbt (data build tool) essential for modern data teams?", a: "dbt brings software engineering best practices to data analytics. It replaces sprawling, un-versioned SQL scripts with modular, reusable models version-controlled in Git, with automated testing, documentation, and lineage graphs built in." },
      { q: "What is the difference between Star Schema and Snowflake Schema?", a: "A Star Schema denormalizes dimension tables (e.g., combining city, state, and country into one dim_customer table) to minimize joins and maximize query speed. A Snowflake Schema normalizes dimension tables into multiple sub-tables. For modern analytical warehouses like Snowflake and BigQuery, Star Schemas are heavily preferred for speed and simplicity." },
      { q: "What is SCD Type 2 and why is it important?", a: "Slowly Changing Dimension Type 2 (SCD2) tracks the historical evolution of entity attributes over time by adding valid_from and valid_to timestamp columns. If a customer moves from London to Manchester, SCD2 allows you to report on their historical purchases under London while attributing future purchases to Manchester." },
      { q: "How do you control runaway Snowflake compute costs?", a: "We set up automated resource monitors, auto-suspend warehouses after 60 seconds of inactivity, implement strict query timeouts, optimize clustering keys to eliminate remote disk spills, and use incremental dbt models to process only fresh delta records." },
      { q: "What is a Semantic Layer and why should we use one?", a: "A semantic layer acts as an abstraction between your data warehouse and your visualization tools. By defining metrics (like 'Gross Margin' or 'Active Accounts') in the semantic layer, any tool—whether PowerBI, Tableau, or a Python script—will calculate the metric identically using the exact same verified logic." }
    ]
  },

  "real-time-streaming-event-buses": {
    slug: "real-time-streaming-event-buses",
    pillarSlug: "data-engineering",
    pillarName: "Data Engineering",
    title: "Real-Time Streaming Event Buses",
    tag: "Event Streaming",
    badge: "Apache Kafka, Flink & Redpanda",
    subtitle: "Stream, process, and analyze millions of events per second with sub-millisecond latency. Built on Apache Kafka, Apache Flink, Schema Registry, and distributed event-driven microservices.",
    metrics: [
      { val: "1M+", label: "Events / Sec Throughput", sub: "Distributed partitioned clusters" },
      { val: "< 3ms", label: "End-to-End Latency", sub: "Redpanda / Kafka kernel bypass" },
      { val: "99.999%", label: "Message Delivery SLA", sub: "Strict exactly-once semantics" },
      { val: "0", label: "Schema Breaking Changes", sub: "Confluent Schema Registry" }
    ],
    capabilities: [
      {
        id: "high-throughput-kafka-clusters",
        title: "High-Throughput Kafka & Redpanda Clusters",
        tag: "Message Broker",
        badge: "Kraft & Zero-Copy",
        latencyBadge: "< 3ms Broker Latency",
        desc: "Deploys high-throughput event brokers using Apache Kafka (KRaft mode) and Redpanda, leveraging Linux kernel zero-copy transfer and NVMe storage for extreme streaming throughput.",
        stats: [
          "KRaft consensus eliminating legacy ZooKeeper operational dependencies",
          "Partitions distributed across multiple Availability Zones with min.insync.replicas",
          "Automated partition balancing and self-healing cluster rebalancing"
        ],
        terminal: {
          command: "kafka-topics.describe({ topic: 'payments-processed-stream' })",
          status: "ONLINE | 32 PARTITIONS | 3 REPLICAS",
          logs: [
            { type: "comment", text: "// Inspecting cluster broker topology" },
            { type: "step", text: "> ISR (In-Sync Replicas): 3/3 active across all 32 partitions" },
            { type: "step", text: "> current ingestion rate: 42,000 msgs/sec (throughput: 124 MB/s)" },
            { type: "success", text: "> zero under-replicated partitions | consumer lag: 0 msgs" }
          ]
        }
      },
      {
        id: "stream-processing-flink",
        title: "Stateful Stream Processing (Apache Flink)",
        tag: "Real-Time Compute",
        badge: "Event-Time Windowing",
        latencyBadge: "Sub-Second Processing",
        desc: "Executes continuous stateful computations, sliding window aggregations, and complex event pattern matching over live data streams using Apache Flink.",
        stats: [
          "Event-time windowing handling late-arriving and out-of-order event streams seamlessly",
          "RocksDB state backend storing gigabytes of state with incremental checkpointing",
          "Strict exactly-once processing guarantees across heterogeneous data sinks"
        ],
        terminal: {
          command: "flink.job.submit({ job: 'fraud_velocity_detection.jar' })",
          status: "JOB RUNNING (PARALLELISM: 16)",
          logs: [
            { type: "comment", text: "// Processing sliding 5-minute transaction windows" },
            { type: "step", text: "> watermarks aligned: tracking event-time with 2s allowed lateness" },
            { type: "step", text: "> state snapshot: 14.2 GB saved to S3 checkpoint store" },
            { type: "success", text: "> detected and flagged 4 velocity fraud attempts in real time" }
          ]
        }
      },
      {
        id: "schema-registry-governance",
        title: "Strict Schema Governance & Avro Registry",
        tag: "Contract Enforcement",
        badge: "Confluent Schema Registry",
        latencyBadge: "Zero Schema Drifts",
        desc: "Prevents breaking API and payload changes by enforcing strict schema contracts (Apache Avro and Protobuf) on every message published to the event bus.",
        stats: [
          "Enforces BACKWARD and FULL schema compatibility modes automatically",
          "Blocks non-compliant message payloads at the producer level before publishing",
          "Automated typed client code generation for Go, Java, Python, and TypeScript"
        ],
        terminal: {
          command: "schema_registry.register({ subject: 'order-events-value', schema: order_v3.avsc })",
          status: "COMPATIBILITY CHECK PASSED (v3)",
          logs: [
            { type: "comment", text: "// Verifying Avro schema evolution rules" },
            { type: "step", text: "> checked compatibility mode: FULL_TRANSITIVE against v1 and v2" },
            { type: "step", text: "> new field 'loyalty_points_earned' contains default value" },
            { type: "success", text: "> registered schema ID #892: safe for downstream consumers" }
          ]
        }
      },
      {
        id: "change-data-capture-debezium",
        title: "Real-Time Change Data Capture (Debezium)",
        tag: "Database Streaming",
        badge: "Zero-Overhead CDC",
        latencyBadge: "< 100ms DB-to-Stream",
        desc: "Captures row-level database inserts, updates, and deletes directly from PostgreSQL, MySQL, and Oracle write-ahead logs (WAL) without touching application code.",
        stats: [
          "Zero query overhead on source production databases via direct transaction log reading",
          "Guarantees that database mutations and event notifications never fall out of sync",
          "Automated schema change translation emitting full before/after mutation payloads"
        ],
        terminal: {
          command: "debezium.status({ connector: 'postgres-customer-cdc' })",
          status: "CDC RUNNING (LAG: 18ms)",
          logs: [
            { type: "comment", text: "// Reading PostgreSQL logical replication slot" },
            { type: "step", text: "> captured 14,000 row modifications over past 60 seconds" },
            { type: "step", text: "> transformed WAL records into Avro formatted CDC events" },
            { type: "success", text: "> published to topic 'cdc.public.customers' with exact ordering" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Log Capture", tag: "Debezium CDC", desc: "Captures transactional inserts and updates directly from database write-ahead logs.", iconName: "Database" },
      { step: "02", title: "Schema Check", tag: "Avro Registry", desc: "Validates payload structure against registered Avro contracts before publishing.", iconName: "ShieldCheck" },
      { step: "03", title: "Event Ingestion", tag: "Kafka / Redpanda", desc: "Appends events to immutable, partitioned logs across multi-AZ broker clusters.", iconName: "Workflow" },
      { step: "04", title: "Stream Processing", tag: "Apache Flink", desc: "Performs sliding window aggregations and fraud detection on live streams.", iconName: "Cpu" },
      { step: "05", title: "Sink Fanout", tag: "Real-Time Sinks", desc: "Streams processed records to Elasticsearch, Snowflake, and live notification websockets.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Zap", title: "Sub-3ms Streaming Throughput", tags: ["Apache Kafka", "Redpanda", "Zero-Copy"], desc: "Process millions of events per second with sub-3ms latency, built on multi-AZ clustered brokers with automated self-healing." },
      { iconName: "Cpu", title: "Stateful Stream Processing", tags: ["Apache Flink", "Sliding Windows", "RocksDB State"], desc: "Execute complex pattern detection, sliding temporal aggregations, and live stream joins using Apache Flink with exactly-once guarantees." },
      { iconName: "ShieldCheck", title: "Strict Schema Contract Governance", tags: ["Confluent Schema Registry", "Avro", "Protobuf"], desc: "Eliminate downstream consumer breaks by enforcing backward and forward schema compatibility rules on all incoming messages." },
      { iconName: "RefreshCw", title: "Real-Time Change Data Capture (CDC)", tags: ["Debezium", "PostgreSQL WAL", "Zero Query Load"], desc: "Stream database mutations instantly from transaction logs into your event bus without polling databases or adding application code." },
      { iconName: "Lock", title: "Exactly-Once Processing Semantics", tags: ["Transactional Producers", "Idempotence", "No Duplicates"], desc: "Guarantee that every financial transaction and critical business event is processed exactly once, eliminating duplicate counts and data loss." },
      { iconName: "Activity", title: "Lag & Partition Telemetry", tags: ["Kafka Exporter", "Prometheus", "Consumer Lag Alarms"], desc: "Monitor consumer group lag in real-time, with automated alerts triggering autoscaling before consumer backlogs impact users." }
    ],
    techStack: [
      { category: "Event Brokers", items: ["Apache Kafka (KRaft)", "Redpanda", "AWS Kinesis", "Azure Event Hubs"] },
      { category: "Stream Processing Engines", items: ["Apache Flink", "Kafka Streams", "Apache Spark Streaming", "Bytewax"] },
      { category: "Change Data Capture (CDC)", items: ["Debezium", "Kafka Connect", "Striim", "AWS DMS"] },
      { category: "Schema Governance", items: ["Confluent Schema Registry", "Apache Avro", "Protocol Buffers", "JSON Schema"] },
      { category: "Monitoring & Management", items: ["AKHQ", "Kafdrop", "Confluent Control Center", "Prometheus", "Grafana"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Batch ETL & Overnight Synchronization",
      beforePoints: [
        "Waiting for overnight batch jobs to run before seeing daily sales numbers.",
        "Producers making breaking JSON field changes that silently crash downstream consumers.",
        "Database polling scripts adding heavy load and lock contention on primary OLTP databases.",
        "Network glitches causing duplicate event processing and double-counting errors."
      ],
      afterTitle: "Devopstrio Real-Time Event Architecture",
      afterPoints: [
        "Sub-second event streaming delivering live telemetry and instant business dashboards.",
        "Strict Schema Registry governance automatically blocking incompatible payload changes.",
        "Log-based Change Data Capture (Debezium) streaming mutations with zero database load.",
        "Strict exactly-once semantics guaranteeing absolute precision across every transaction."
      ]
    },
    faqs: [
      { q: "What is the difference between Apache Kafka and traditional message queues like RabbitMQ?", a: "RabbitMQ is a traditional message broker designed for task distribution; messages are acknowledged and deleted once consumed. Kafka is a distributed, append-only commit log: events are retained immutably for days or years, allowing multiple independent consumer services to read from the log at their own pace and replay historical streams on demand." },
      { q: "What is Change Data Capture (CDC) and how does it prevent database slowdowns?", a: "Traditional data synchronization polls the database using queries like `SELECT * WHERE updated_at > yesterday`, which can lock tables and cause severe latency. CDC reads the database's internal write-ahead binary log (WAL) directly from disk with zero SQL overhead, streaming changes in sub-100ms." },
      { q: "How do you prevent a producer from publishing breaking payload changes?", a: "We place Confluent Schema Registry in the pipeline. Producers must register their Avro or Protobuf schemas with the registry. If a developer attempts to publish a message that removes a required field or changes a data type, the broker immediately rejects the message before it enters the stream." },
      { q: "What is Apache Flink and why use it over Kafka Streams?", a: "While Kafka Streams is great for simple microservice-level transformations, Apache Flink is a distributed stream processing engine built for massive stateful computations (like complex event processing, sliding window aggregations across millions of events, and stream-to-stream joins) with true sub-second latency." },
      { q: "How do you manage Kafka without ZooKeeper (KRaft)?", a: "Modern Kafka versions (3.3+) use KRaft (Kafka Raft Metadata mode), which integrates the consensus protocol directly into Kafka itself. This eliminates the operational headache of maintaining a separate ZooKeeper cluster, simplifies administration, and speeds up cluster metadata recovery." }
    ]
  },

  "analytics-processing": {
    slug: "analytics-processing",
    pillarSlug: "data-engineering",
    pillarName: "Data Engineering",
    title: "Analytics Processing",
    tag: "Distributed Compute",
    badge: "Apache Spark, Ray & ClickHouse",
    subtitle: "Accelerate big data analytics, feature computation, and interactive OLAP dashboards. Execute petabyte-scale distributed compute using Apache Spark, Ray Core, and ClickHouse columnar engines.",
    metrics: [
      { val: "100x", label: "Interactive Query Speedup", sub: "ClickHouse vectorized execution" },
      { val: "Petabyte", label: "Scalable Data Processing", sub: "Distributed Apache Spark clusters" },
      { val: "< 50ms", label: "Sub-Second User Analytics", sub: "Real-time user engagement queries" },
      { val: "60%", label: "Compute Cluster Cost Reduction", sub: "Spot autoscaling & Ray Core" }
    ],
    capabilities: [
      {
        id: "vectorized-olap-clickhouse",
        title: "Vectorized Real-Time OLAP (ClickHouse)",
        tag: "Interactive Analytics",
        badge: "Vectorized SIMD Execution",
        latencyBadge: "< 50ms Response",
        desc: "Powers sub-second customer-facing analytics dashboards across billions of telemetry rows using ClickHouse's vectorized SIMD execution and sparse primary keys.",
        stats: [
          "Processes hundreds of millions of rows per second per server core using SIMD instructions",
          "Real-time materialized views pre-aggregating metrics at ingestion time",
          "Compresses storage footprints by up to 80% using ZSTD and Gorilla codecs"
        ],
        terminal: {
          command: "clickhouse-client.query({ sql: 'SELECT count(), sum(bytes) FROM telemetry' })",
          status: "PROCESSED 1.4B ROWS IN 28ms",
          logs: [
            { type: "comment", text: "// Executing vectorized SIMD aggregation on ClickHouse" },
            { type: "step", text: "> scanned 1,420,000,000 rows (uncompressed: 42 GB)" },
            { type: "step", text: "> memory usage: 120 MB | CPU cores utilized: 32" },
            { type: "success", text: "> execution completed in 28.4ms (throughput: 50B rows/sec)" }
          ]
        }
      },
      {
        id: "distributed-spark-processing",
        title: "Petabyte Distributed Batch Compute (Apache Spark)",
        tag: "Big Data Processing",
        badge: "Spark 3.5 & Adaptive Query",
        latencyBadge: "Adaptive Partitioning",
        desc: "Transforms and aggregates massive petabyte datasets using Apache Spark with Adaptive Query Execution (AQE), dynamic partition coalescing, and GPU acceleration.",
        stats: [
          "Adaptive Query Execution (AQE) dynamically optimizing shuffle partitions at runtime",
          "Spot instance worker pools running on Kubernetes (Spark-on-k8s) reducing cloud compute bills",
          "Direct integration with Delta Lake and Apache Iceberg open table formats"
        ],
        terminal: {
          command: "spark-submit.deploy({ app: 'aggregate_monthly_telemetry.py', executors: 64 })",
          status: "JOB COMPLETED (1.8 PB PROCESSED)",
          logs: [
            { type: "comment", text: "// Running distributed Spark 3.5 cluster" },
            { type: "step", text: "> AQE: coalesced 2,000 shuffle partitions down to 142 optimal tasks" },
            { type: "step", text: "> resolved data skew automatically via split skewed partition rules" },
            { type: "success", text: "> batch ETL run completed in 34 minutes with zero OOM errors" }
          ]
        }
      },
      {
        id: "ray-core-ai-feature-compute",
        title: "Distributed Python & AI Compute (Ray Core)",
        tag: "Data Science Acceleration",
        badge: "Ray Data & Train",
        latencyBadge: "Zero SerDe Overhead",
        desc: "Scales Python data science and machine learning data transformations across distributed clusters without requiring heavy PySpark translation layers.",
        stats: [
          "Distributed Ray Data streaming batches directly into PyTorch and HuggingFace pipelines",
          "Zero-copy shared memory plasma store eliminating expensive Python serialization",
          "Seamless scaling from a single laptop to 1,000 cloud GPU/CPU nodes"
        ],
        terminal: {
          command: "ray.data.read_parquet('s3://data-pool/').map_batches(compute_embeddings)",
          status: "RAY PIPELINE RUNNING",
          logs: [
            { type: "comment", text: "// Scaling Python batch execution across 16 worker nodes" },
            { type: "step", text: "> zero-copy memory store active: zero pickling latency" },
            { type: "step", text: "> processed 4.2M image features directly into GPU tensor buffers" },
            { type: "success", text: "> execution speedup: 8.4x faster than traditional Celery/PySpark" }
          ]
        }
      },
      {
        id: "streaming-analytics-aggregation",
        title: "Continuous Materialized Aggregations",
        tag: "Near-Real-Time Data",
        badge: "Materialize & RisingWave",
        latencyBadge: "< 200ms Freshness",
        desc: "Maintains continuously updated materialized views over high-velocity event streams, serving up-to-the-second analytical metrics with zero warehouse re-querying.",
        stats: [
          "Differential dataflow engines updating only the mathematical delta of aggregates",
          "Direct SQL querying over live streaming data with sub-200ms data freshness",
          "Eliminates repetitive full-table dashboard scans by serving pre-computed live views"
        ],
        terminal: {
          command: "streaming_engine.query({ view: 'live_user_conversion_funnel' })",
          status: "FRESHNESS: 120ms (DELTA UPDATED)",
          logs: [
            { type: "comment", text: "// Serving real-time materialized funnel aggregation" },
            { type: "step", text: "> incoming transaction delta integrated in 18ms" },
            { type: "step", text: "> memory state: incremental update applied with zero full re-scan" },
            { type: "success", text: "> live conversion rate: 4.82% served directly to frontend API" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Batch / Stream Ingress", tag: "S3 & Kafka", desc: "Ingests petabyte batch files and live streaming event streams concurrently.", iconName: "Database" },
      { step: "02", title: "Distributed Compute", tag: "Spark & Ray", desc: "Executes distributed transformations, joins, and feature extractions across worker nodes.", iconName: "Cpu" },
      { step: "03", title: "Vectorized Ingest", tag: "ClickHouse Loader", desc: "Loads structured columnar data into ClickHouse with automated ZSTD compression.", iconName: "Zap" },
      { step: "04", title: "Continuous Aggregation", tag: "Materialized Views", desc: "Maintains real-time rollup views on ingestion, pre-calculating primary metrics.", iconName: "RefreshCw" },
      { step: "05", title: "Interactive Dashboards", tag: "Sub-50ms Serving", desc: "Serves live analytical queries to customer-facing dashboards and reporting tools.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Zap", title: "Sub-50ms Vectorized ClickHouse OLAP", tags: ["ClickHouse", "SIMD Vectorization", "Columnar Storage"], desc: "Power responsive client-facing analytics dashboards over billions of rows, running aggregations in milliseconds using SIMD hardware acceleration." },
      { iconName: "Cpu", title: "Petabyte-Scale Apache Spark Compute", tags: ["Apache Spark 3.5", "Adaptive Query", "Spark on K8s"], desc: "Process massive batch ETL workloads across scalable Kubernetes clusters with automated data skew mitigation and memory optimization." },
      { iconName: "Workflow", title: "Distributed Python with Ray Core", tags: ["Ray Core", "Ray Data", "Zero Serialization"], desc: "Scale complex Python data engineering, feature generation, and AI workloads across clusters without the overhead of JVM bridges." },
      { iconName: "RefreshCw", title: "Continuous Materialized Views", tags: ["RisingWave", "Materialize", "Sub-Second Freshness"], desc: "Keep critical business metrics constantly fresh in memory using differential dataflow engines that update only the changed data delta." },
      { iconName: "Sliders", title: "Cost-Effective Spot Compute Pools", tags: ["Spot Instances", "Kubernetes Karpenter", "Auto-Pruning"], desc: "Cut big data compute bills by up to 60% by scheduling batch processing jobs on ephemeral spot instances with automated checkpoint recovery." },
      { iconName: "Activity", title: "Real-Time Ad-Hoc SQL Querying", tags: ["Trino", "Presto", "DuckDB"], desc: "Enable data analysts and data scientists to run interactive ad-hoc exploratory SQL queries across petabytes of object storage in seconds." }
    ],
    techStack: [
      { category: "OLAP & Columnar Databases", items: ["ClickHouse Enterprise", "Apache Druid", "StarRocks", "DuckDB"] },
      { category: "Distributed Compute Engines", items: ["Apache Spark", "Ray Core / Ray Data", "Trino", "Dask"] },
      { category: "Streaming & Materialization", items: ["RisingWave", "Materialize", "Apache Flink", "Bifrost"] },
      { category: "Cluster Orchestration", items: ["Spark-on-Kubernetes", "KubeRay", "AWS EMR Serverless", "Databricks"] },
      { category: "Storage & File Formats", items: ["Apache Parquet", "ORC", "Apache Iceberg", "Amazon S3", "MinIO"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Sluggish Queries & Failed Batch Jobs",
      beforePoints: [
        "Traditional relational databases grinding to a halt when queried across millions of rows.",
        "Overnight Spark batch jobs crashing due to out-of-memory errors on un-tuned data skew.",
        "Engineers struggling with clumsy JVM wrappers just to scale simple Python data scripts.",
        "Users waiting 30 seconds for analytics dashboards to load, causing frustrating churn."
      ],
      afterTitle: "Devopstrio Analytics Processing Platform",
      afterPoints: [
        "Vectorized ClickHouse OLAP queries executing across billions of rows in under 50ms.",
        "Adaptive Spark execution auto-resolving data skew and dynamic partition sizing.",
        "Native distributed Ray Core scaling Python data pipelines seamlessly across 100+ nodes.",
        "Instant interactive customer dashboards powered by continuously updating materialized views."
      ]
    },
    faqs: [
      { q: "Why is ClickHouse so much faster than traditional relational databases for analytics?", a: "Relational databases (like PostgreSQL) store data row-by-row, requiring them to read every single column off disk even if your query only needs one. ClickHouse stores data column-by-column, utilizes vector SIMD CPU instructions to process multiple values per clock cycle, and applies extreme compression (often 80%+), resulting in 100x faster analytical aggregations." },
      { q: "What is the difference between Apache Spark and Ray Core?", a: "Apache Spark is built on the JVM and excels at structured SQL, table joins, and relational data transformations. Ray is a native Python distributed execution framework built in C++ that excels at Python-native tasks like unstructured data processing, machine learning feature pipelines, and reinforcement learning." },
      { q: "How does Adaptive Query Execution (AQE) prevent Spark OOM errors?", a: "In legacy Spark, shuffle partition counts had to be guessed in advance. If partitions were too small, memory ran out (OOM). AQE dynamically inspects data size after every stage, automatically coalescing small partitions and splitting skewed data partitions at runtime to guarantee smooth completion." },
      { q: "Can we use ClickHouse as our primary transactional database?", a: "No. ClickHouse is optimized for high-volume append and analytical reads (OLAP). It is not designed for frequent single-row transactional updates or complex transactional locks (OLTP). The standard architecture streams transactional data from PostgreSQL or Kafka into ClickHouse for analytics." },
      { q: "How does distributed compute run economically on cloud infrastructure?", a: "By running on Kubernetes with spot instance orchestrators (like Karpenter). Because big data frameworks like Spark and Ray are designed to handle worker node termination gracefully, workloads run on spot instances at 60-70% lower cost than reserved cloud VMs." }
    ]
  },

  "data-compliance-governance": {
    slug: "data-compliance-governance",
    pillarSlug: "data-engineering",
    pillarName: "Data Engineering",
    title: "Data Compliance & Governance",
    tag: "Data Security",
    badge: "GDPR, HIPAA & Automated Data Lineage",
    subtitle: "Automate regulatory data governance, privacy compliance, and access auditing. From automated PII cataloging and column masking to end-to-end data lineage and right-to-be-forgotten deletion.",
    metrics: [
      { val: "100%", label: "GDPR & HIPAA Compliance", sub: "Automated privacy controls" },
      { val: "< 24h", label: "Right-to-be-Forgotten SLA", sub: "Automated multi-system deletion" },
      { val: "0", label: "Unauthorized PII Exposures", sub: "Dynamic column masking" },
      { val: "Full", label: "Column-Level Lineage", sub: "OpenMetadata & dbt integration" }
    ],
    capabilities: [
      {
        id: "automated-pii-classification",
        title: "Automated PII Discovery & Classification",
        tag: "Data Privacy",
        badge: "ML-Based Discovery",
        latencyBadge: "Continuous Discovery",
        desc: "Continuously scans data lakes, warehouses, and databases to automatically tag sensitive PII (credit cards, passport numbers, email addresses, medical records) with machine learning classifiers.",
        stats: [
          "ML-driven pattern recognition detecting structured and unstructured PII",
          "Automated sensitivity classification tags: Public, Internal, Confidential, Restricted",
          "Alerts security teams immediately when unmasked PII appears in non-compliant buckets"
        ],
        terminal: {
          command: "pii_scanner.inspect({ target: 'warehouse_landing_zone', rules: 'GDPR_EU' })",
          status: "SCAN COMPLETE (14 TABLES SCANNED)",
          logs: [
            { type: "comment", text: "// Running neural PII token recognition" },
            { type: "step", text: "> detected [PII_EMAIL]: column 'customer_contact' in table 'web_leads'" },
            { type: "step", text: "> detected [PII_IBAN]: column 'account_num' in table 'payments_raw'" },
            { type: "success", text: "> automatically applied tags: CONFIDENTIAL_RESTRICTED & GDPR_PII" }
          ]
        }
      },
      {
        id: "dynamic-column-masking",
        title: "Role-Based Dynamic Column & Row Masking",
        tag: "Access Control",
        badge: "Immuta & Apache Ranger",
        latencyBadge: "Zero Performance Overhead",
        desc: "Dynamically redacts or hashes sensitive data columns based on user identity, ensuring analysts can run aggregations while masking confidential customer details.",
        stats: [
          "Dynamic masking: emails masked as 'a***@domain.com' and credit cards as '****-****-****-1234'",
          "Row-level security filtering rows based on analyst region (e.g., UK analysts see only UK records)",
          "Enforced transparently at the query engine level without duplicating underlying tables"
        ],
        terminal: {
          command: "security_policy.enforce({ role: 'junior_analyst', table: 'dim_customers' })",
          status: "POLICY ENFORCED (MASKING ACTIVE)",
          logs: [
            { type: "comment", text: "// Evaluating role-based access attributes" },
            { type: "step", text: "> column 'national_insurance_number': MASKED WITH SHA-256 HASH" },
            { type: "step", text: "> column 'date_of_birth': TRUNCATED TO YEAR ONLY" },
            { type: "success", text: "> query executed cleanly: zero plain-text PII returned" }
          ]
        }
      },
      {
        id: "automated-rtbf-erasure",
        title: "Automated Right-to-be-Forgotten (RTBF) Erasure",
        tag: "Regulatory Automation",
        badge: "GDPR Article 17",
        latencyBadge: "< 24h SLA",
        desc: "Orchestrates complex GDPR 'Right to Erasure' requests across distributed lakehouses, immutable storage, relational databases, and CRM platforms with full audit sign-off.",
        stats: [
          "Executes targeted partition rewrites in Apache Iceberg and Delta Lake without downtime",
          "Automated multi-system cascade: deletes records in PostgreSQL, Snowflake, and Salesforce",
          "Generates cryptographic audit certificates proving compliance without storing deleted PII"
        ],
        terminal: {
          command: "gdpr_orchestrator.erase_subject({ subject_id: 'usr_891042', legal_ref: 'RTBF-2026-89' })",
          status: "ERASURE COMPLETED (5 SYSTEMS)",
          logs: [
            { type: "comment", text: "// Running coordinated multi-system deletion pipeline" },
            { type: "step", text: "> deleted user records from OLTP PostgreSQL database" },
            { type: "step", text: "> executed Iceberg table compaction rewrite on 2 Parquet partitions" },
            { type: "step", text: "> scrubbed user profile from CRM and customer support history" },
            { type: "success", text: "> generated immutable compliance audit token: SHA256-PROOF-9821" }
          ]
        }
      },
      {
        id: "end-to-end-data-lineage",
        title: "End-to-End Column-Level Data Lineage",
        tag: "Data Lineage",
        badge: "OpenMetadata & OpenLineage",
        latencyBadge: "Automated Extraction",
        desc: "Tracks the complete lifecycle of data elements from raw operational database entry through transformations, dbt models, and BI dashboard visual metrics.",
        stats: [
          "Interactive visual DAG displaying exact column-to-column transformation origins",
          "Impact analysis: alerts downstream teams before breaking schema changes are deployed",
          "Automated metadata extraction from dbt, Snowflake, Airflow, and Tableau"
        ],
        terminal: {
          command: "lineage.trace({ target: 'dashboard.finance.annual_ebitda', column: 'ebitda_val' })",
          status: "LINEAGE TRACED (7 HOPS)",
          logs: [
            { type: "comment", text: "// Parsing column-level transformation DAG" },
            { type: "step", text: "> source: cdc_postgres.public.orders.amount (origin: 2024)" },
            { type: "step", text: "> dbt_model: stg_orders -> int_revenue -> fact_finance_monthly" },
            { type: "step", text: "> metric: calculated via dbt semantic model #42" },
            { type: "success", text: "> 100% complete governance lineage verified for audit" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Continuous Scan", tag: "ML Classifier", desc: "Continuously scans data stores to detect and classify sensitive PII attributes.", iconName: "Search" },
      { step: "02", title: "Catalog & Tag", tag: "Data Governance", desc: "Tags assets with regulatory classifications (GDPR, HIPAA, PCI-DSS).", iconName: "Database" },
      { step: "03", title: "Dynamic Masking", tag: "Policy Enforcement", desc: "Redacts and masks sensitive data columns dynamically based on user identity.", iconName: "Lock" },
      { step: "04", title: "Lineage Tracing", tag: "OpenLineage", desc: "Extracts column-level lineage from SQL queries and dbt pipelines.", iconName: "Workflow" },
      { step: "05", title: "Audit & Erasure", tag: "Compliance Sign-off", desc: "Orchestrates GDPR deletion requests and generates verifiable compliance certificates.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Search", title: "Automated PII Discovery & Tagging", tags: ["ML Classification", "GDPR Scanning", "Zero Leakage"], desc: "Detect sensitive credit cards, national identifiers, and medical records across your entire data landscape with automated ML discovery scanners." },
      { iconName: "Lock", title: "Dynamic Column & Row Masking", tags: ["Immuta", "Apache Ranger", "Role-Based Masking"], desc: "Mask sensitive fields dynamically at query time based on user permissions, allowing analysts to run aggregates without exposing raw customer PII." },
      { iconName: "RefreshCw", title: "Automated Right-to-be-Forgotten", tags: ["GDPR Article 17", "Iceberg Rewrites", "Multi-System Sync"], desc: "Automate complex customer deletion requests across databases, object storage, and SaaS tools with verifiable audit certificates." },
      { iconName: "Workflow", title: "Column-Level Data Lineage", tags: ["OpenMetadata", "OpenLineage", "dbt Lineage"], desc: "Visually trace every number on an executive dashboard back to the exact source database table and transformation SQL that generated it." },
      { iconName: "ShieldCheck", title: "HIPAA & SOC2 Compliance Controls", tags: ["Encryption at Rest", "Immutable Audit Logs", "KMS"], desc: "Ensure your data platform strictly satisfies HIPAA, SOC2 Type II, and ISO 27001 mandates with hardware-backed encryption and immutable logs." },
      { iconName: "Activity", title: "Access Auditing & Anomaly Alerts", tags: ["Audit Trails", "Exfiltration Alarms", "SIEM Export"], desc: "Track every query executed across your enterprise data assets, with real-time alerts flagging abnormal mass data exports or unauthorized access." }
    ],
    techStack: [
      { category: "Data Governance Platforms", items: ["OpenMetadata", "Atlan", "Collibra", "Alation", "Apache Atlas"] },
      { category: "Access Control & Masking", items: ["Immuta", "Privacera", "Apache Ranger", "Snowflake Masking Policies"] },
      { category: "Data Lineage Standards", items: ["OpenLineage", "Marquez", "dbt Artifacts", "Spline"] },
      { category: "Privacy & Compliance", items: ["OneTrust", "Transcend", "BigID", "AWS Macie"] },
      { category: "Encryption & Secrets", items: ["HashiCorp Vault", "AWS KMS", "Azure Key Vault", "Google Cloud KMS"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Blind Exposures & Manual Compliance",
      beforePoints: [
        "Un-encrypted customer credit cards and passport scans sitting exposed in S3 buckets.",
        "Manual GDPR deletion requests taking weeks of engineering time across multiple silos.",
        "Zero understanding of where numbers on executive reporting dashboards originated.",
        "Developers and external contractors having unrestricted access to unmasked customer data."
      ],
      afterTitle: "Devopstrio Automated Data Governance",
      afterPoints: [
        "Continuous automated discovery identifying and classifying 100% of sensitive PII.",
        "Automated Right-to-be-Forgotten deletion cascading across all databases in <24 hours.",
        "End-to-end column-level lineage tracking transformations from raw input to dashboard.",
        "Dynamic column masking and row-level security redacting PII based on analyst roles."
      ]
    },
    faqs: [
      { q: "How does dynamic data masking work without duplicating data?", a: "Dynamic masking is implemented at the database engine or proxy layer (such as Snowflake masking policies or Immuta). The underlying data remains securely encrypted in storage. When a user runs a query, the engine inspects their role: administrators see raw data, while analysts see masked values (like `****-****-****-1234`)." },
      { q: "How do you fulfill GDPR 'Right to Erasure' requests in an immutable data lake?", a: "Modern open table formats (like Apache Iceberg or Delta Lake) allow targeted partition rewrites. When an erasure request arrives, an automated job queries only the files containing that user's records, deletes the row, writes new Parquet files, commits a new snapshot, and compacts historical versions." },
      { q: "What is column-level data lineage and why do auditors require it?", a: "Table-level lineage only shows that Table B was built from Table A. Column-level lineage traces the exact mathematical derivation of individual columns (e.g., showing that `net_profit` was calculated as `revenue - tax - refunds`). Auditors require this to guarantee that financial and compliance metrics are calculated accurately." },
      { q: "Can automated PII scanners find sensitive information inside free-text notes?", a: "Yes. In addition to regex pattern matching (for format-specific data like credit cards or UK National Insurance numbers), we deploy Natural Language Processing Named Entity Recognition (NER) models that detect names, addresses, and medical conditions inside messy free-text customer support notes." },
      { q: "How do you ensure data access compliance during external SOC2 audits?", a: "Our platform aggregates query access logs, policy definitions, and cryptographic deletion certificates into an immutable audit dashboard. Auditors can inspect complete access history, proving that unprivileged users were barred from accessing sensitive customer records." }
    ]
  }
};
