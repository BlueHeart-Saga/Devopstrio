/**
 * Utility mapper to associate service slugs and capability slugs
 * with their corresponding premium background images.
 */

const serviceBgMap: Record<string, string> = {
  "ai-data-innovation": "/webp/assets/Services-Page/services-hero/h1.webp",
  "cloud-services": "/webp/assets/Services-Page/services-hero/h2.webp",
  "devops-automation": "/webp/assets/Services-Page/services-hero/h3.webp",
  "cybersecurity": "/webp/assets/Services-Page/services-hero/h4.webp",
  "software-development": "/webp/assets/Services-Page/services-hero/h5.webp",
  "digital-transformation": "/webp/assets/Services-Page/services-hero/h6.webp",
  "data-engineering": "/webp/assets/Services-Page/services-hero/h7.webp",
  "managed-services": "/webp/assets/Services-Page/services-hero/h8.webp",
  "qa-testing": "/webp/assets/Services-Page/services-hero/h9.webp",
  "it-consulting": "/webp/assets/Services-Page/services-hero/h10.webp",
};

/**
 * Returns the corresponding image asset URL path for a service,
 * or capability within a service.
 */
export function getHeroBgImage(serviceSlug: string, capabilitySlug?: string): string {
  // Always return the main service image to avoid loading too many separate images
  return serviceBgMap[serviceSlug] || "/webp/assets/Services-Page/services-hero/h1.webp";
}

export interface ArchitectureStep {
  step: string;
  title: string;
  desc: string;
  icon: string;
  image: string;
}

export function getArchitectureSteps(serviceSlug: string, capabilityTitle: string): ArchitectureStep[] {
  const title = capabilityTitle;
  
  const stepImages = [
    "/webp/assets/services/usecase_integration.webp",
    "/webp/assets/services/usecase_security.webp",
    "/webp/assets/services/usecase_synergy.webp",
    "/webp/assets/services/usecase_governance.webp"
  ];

  const getBaseSteps = () => {
    switch (serviceSlug) {
      case "ai-data-innovation":
        return [
          { title: "Data Ingestion", desc: `Ingesting proprietary datasets, text corpuses, and token metrics for ${title}.`, icon: "Server" },
          { title: "Context Embedding", desc: "Generating high-dimensional semantic vectors and token embeddings using text-embedding models.", icon: "Compass" },
          { title: "Vector Retrieval", desc: "Executing low-latency similarity query scans against Pinecone, Qdrant, or Milvus index partitions.", icon: "Database" },
          { title: "Orchestration & Guard", desc: "Enforcing guardrail validation rules to block hallucinations before delivery.", icon: "ShieldCheck" }
        ];
      case "cloud-services":
        return [
          { title: "Global DNS Routing", desc: `Ingesting requests through CloudFront CDN caching edges and Route 53 DNS for ${title}.`, icon: "Server" },
          { title: "VPC Landing Zone", desc: "Evaluating traffic credentials and routing requests to isolated private subnets.", icon: "ShieldCheck" },
          { title: "Autoscaling Compute", desc: "Provisioning AKS container clusters using Karpenter scaling criteria and metrics.", icon: "Cpu" },
          { title: "APM Observability", desc: "Forwarding system performance metrics to Azure Monitor or Prometheus alarms.", icon: "BarChart3" }
        ];
      case "devops-automation":
        return [
          { title: "Trigger Ingestion", desc: `Git commit webhooks automatically invoke compilation runners for ${title}.`, icon: "Server" },
          { title: "Security Gateways", desc: "Running automated Snyk vulnerabilities checkups and SonarQube quality criteria.", icon: "ShieldCheck" },
          { title: "GitOps Sync", desc: "ArgoCD sync loops pull the verified image configuration to target Kubernetes clusters.", icon: "Database" },
          { title: "Observability Loops", desc: "Distributed OpenTelemetry traces map query payloads and latency to dashboards.", icon: "BarChart3" }
        ];
      case "cybersecurity":
        return [
          { title: "Threat Analysis", desc: `Auditing active client credentials and port exposures for ${title}.`, icon: "Server" },
          { title: "Zero Trust Validation", desc: "Verifying endpoint health and user access claims via adaptive MFA policies.", icon: "Key" },
          { title: "Cryptographic Protection", desc: "Enforcing TLS 1.3 transit tunnels and automated KMS database encryption.", icon: "Database" },
          { title: "SIEM & Quarantine", desc: "Detecting anomalous audit events and triggering quarantine isolation plays.", icon: "ShieldCheck" }
        ];
      case "software-development":
        return [
          { title: "API Gateway Routing", desc: `Processing client requests via secure API gateways and gRPC routing parameters for ${title}.`, icon: "Server" },
          { title: "Runtime Execution", desc: "Executing logic inside scalable Next.js serverless runtimes or Go service pods.", icon: "Settings" },
          { title: "Distributed Caching", desc: "Passing queries through Redis cache pools to minimize SQL database hits.", icon: "Database" },
          { title: "APM Profiling", desc: "Tracking application crash logs and database latency metrics.", icon: "BarChart3" }
        ];
      case "digital-transformation":
        return [
          { title: "Legacy Ingest", desc: `Ingesting active database tables from legacy mainframe data streams for ${title}.`, icon: "Server" },
          { title: "Serverless Decoupling", desc: "Running cloud functions to process data without loading core database threads.", icon: "Settings" },
          { title: "Data Harmonization", desc: "Loading parsed data records to standardized SQL cloud databases.", icon: "Database" },
          { title: "Migration Telemetry", desc: "Auditing transaction volumes and API success rates during cutover.", icon: "BarChart3" }
        ];
      case "data-engineering":
        return [
          { title: "Raw Stream Ingest", desc: `Consuming event payloads from Apache Kafka or AWS Kinesis streams for ${title}.`, icon: "Server" },
          { title: "Spark Processing", desc: "Filtering, cleaning, and partitioning raw JSON lines using Spark clusters.", icon: "Settings" },
          { title: "Lakehouse Storage", desc: "Storing refined records into Databricks delta tables or partitioned S3 tiers.", icon: "Database" },
          { title: "Quality Assertion", desc: "Executing Great Expectations rules to catch schema drift and log data metrics.", icon: "BarChart3" }
        ];
      case "managed-services":
        return [
          { title: "SLA Alert Ingest", desc: `Ingesting metric alarms from Datadog and PagerDuty for ${title}.`, icon: "Server" },
          { title: "Triage Dispatch", desc: "Routing alerts automatically to on-call infrastructure engineers.", icon: "ShieldCheck" },
          { title: "Automated Playbook", desc: "Executing predefined failovers and node restarters to restore uptime.", icon: "Settings" },
          { title: "Uptime Auditing", desc: "Logging recovery timeline statistics to monthly performance dashboards.", icon: "BarChart3" }
        ];
      case "qa-testing":
        return [
          { title: "Environment Provisioning", desc: `Deploying ephemeral testing sandbox preview environments for ${title}.`, icon: "Server" },
          { title: "E2E Script Execution", desc: "Running parallel Playwright web test runner threads across browser builds.", icon: "Settings" },
          { title: "API Payload Checks", desc: "Validating API responses against JSON schema contracts and database states.", icon: "Database" },
          { title: "Dashboard Logs", desc: "Publishing HTML run reports, execution logs, and tracing records.", icon: "BarChart3" }
        ];
      case "it-consulting":
        return [
          { title: "Client Discovery", desc: `Evaluating current IT stack setups and identifying engineering gaps for ${title}.`, icon: "Server" },
          { title: "Design Strategy", desc: "Drafting scalable future-state blueprints and zero-trust guidelines.", icon: "Compass" },
          { title: "Sandbox POC", desc: "Deploying proof-of-concept sandboxes to check options before rollout.", icon: "Settings" },
          { title: "Roadmap Handoff", desc: "Publishing step-by-step migration manuals and infrastructure runbooks.", icon: "BarChart3" }
        ];
      default:
        return [
          { title: "Scope Mapping", desc: `Defining system boundaries and architecture requirements for ${title}.`, icon: "Server" },
          { title: "Sandbox Testing", desc: "Setting up test configurations to validate integration variables.", icon: "Settings" },
          { title: "Automated Build", desc: "Creating automated CI/CD pipelines and infrastructure states.", icon: "Database" },
          { title: "Hand-off Review", desc: "Delivering operational blueprints, dashboards, and training runbooks.", icon: "BarChart3" }
        ];
    }
  };

  const steps = getBaseSteps();
  return steps.map((s, idx) => ({
    step: `STEP 0${idx + 1}`,
    title: s.title,
    desc: s.desc,
    icon: s.icon,
    image: stepImages[idx]
  }));
}
