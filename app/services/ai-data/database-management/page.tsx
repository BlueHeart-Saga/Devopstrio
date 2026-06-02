"use client";

import React from "react";
import { ServiceDetailTemplate } from "@/components/ui/ServiceDetailTemplate";

export default function DatabaseManagementPage() {
  return (
    <ServiceDetailTemplate
      categoryName="AI & Data / Subservice"
      title="Transactional & Scalable"
      highlightedWord="Database Creation"
      subtitle="Building secure database architectures with advanced scaling, backup, and high-performance querying practices."
      overviewHeading="Construct resilient database foundations designed for future loads"
      overviewDesc1="We design relational and non-relational database systems. Our architectures feature automated primary-secondary replication, automated failover groups, private subnet isolation, and fine-tuned indexing schedules."
      overviewDesc2="Whether migrating a large transactional database to PostgreSQL on Amazon RDS, or scaling Redis memory clusters to cache high-frequency read requests, we follow top performance and backup safety standards."
      heroImage="/assets/herocard/insightspage.png"
      benefits={[
        "High-performance query tuning",
        "Multi-region replication",
        "Private AWS RDS setups",
        "Automated failover clusters"
      ]}
      capabilities={[
        {
          title: "Database Migration",
          desc: "Transferring terabyte-scale legacy databases to modern cloud services with minimal write locking."
        },
        {
          title: "Query Index Tuning",
          desc: "Auditing query logs, analyzing execution plans, and structuring composite indices to lower database load."
        },
        {
          title: "High Availability Design",
          desc: "Configuring multi-AZ write nodes and read-only secondary replicas."
        },
        {
          title: "NoSQL Scaling",
          desc: "Designing fast cache and search indices using Redis clusters and Elasticsearch shards."
        }
      ]}
      techs={[
        {
          name: "PostgreSQL / Amazon RDS",
          desc: "Relational engine choice for transaction safety and JSON query extensions."
        },
        {
          name: "Redis Enterprise Cache",
          desc: "In-memory cache structures to reduce database reads."
        },
        {
          name: "MongoDB / Cassandra",
          desc: "Scalable document and column store configurations."
        },
        {
          name: "AWS DMS / PgDump",
          desc: "Specialized utility programs used to transfer datasets with zero data loss."
        }
      ]}
      process={[
        {
          step: "01",
          title: "Schema Review",
          desc: "Analyze table structures, foreign keys, and indexes for potential scaling blocks."
        },
        {
          step: "02",
          title: "Migration Dry Run",
          desc: "Test dataset transfers inside staging accounts to measure write lock times."
        },
        {
          step: "03",
          title: "Infrastructure Setup",
          desc: "Write Terraform configs to spin up secure private subnets, security groups, and RDS nodes."
        },
        {
          step: "04",
          title: "Data Sync",
          desc: "Sync production tables continuously using change data capture (CDC) pipelines."
        },
        {
          step: "05",
          title: "Switchover & Verification",
          desc: "Execute dns routing changes during quiet hours, validating query metrics."
        }
      ]}
      metrics={[
        {
          value: "80%",
          label: "Average query latency cut"
        },
        {
          value: "99.999%",
          label: "Failover uptime validation"
        },
        {
          value: "5TB+",
          label: "Data safely migrated"
        }
      ]}
      caseStudyTitle="Zero-downtime database migration for high-frequency e-commerce portal."
      caseStudyDesc="We migrated a 4.5 Terabyte transactional MySQL database to a multi-region PostgreSQL cluster on Amazon RDS. By integrating AWS Database Migration Service (DMS), we completed the cutover with only 12 seconds of read-only mode."
      caseStudyHighlights={[
        "Configured active CDC synchronization streams",
        "Refactored complex legacy stored procedures into clean database functions",
        "Improved query load response times by 80%"
      ]}
      faqs={[
        {
          q: "How do you guarantee data integrity during a migration?",
          a: "We run continuous checksum validations across source and destination tables. We compare row hashes in batches before and after the cutover to ensure zero data mutations."
        },
        {
          q: "Do you support backup encryption?",
          a: "Yes. All backups are encrypted using custom KMS keys, stored in secure S3 buckets with write-once-read-many (WORM) policies to prevent ransomware deletion."
        }
      ]}
      ctaTitle="Secure your foundation with modern"
      ctaHighlight="Database scaling"
      ctaDesc="Get in touch with our database engineers to audit your current indexes, replication parameters, and backup plans."
      ctaBtnText="Request Database Audit"
    />
  );
}
