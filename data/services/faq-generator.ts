import { FAQItem } from "./types";

// 10 Detailed FAQs for each of the 10 Service Categories
const serviceFaqs: Record<string, FAQItem[]> = {
  "ai-data-innovation": [
    {
      q: "How does Devopstrio guarantee data privacy for enterprise AI models?",
      a: "We deploy all models within single-tenant, private VPC boundaries on AWS Bedrock or Azure OpenAI. We sign strict enterprise agreements guaranteeing that your proprietary datasets and queries are never logged, cached, or utilized for public training."
    },
    {
      q: "What model sizes and architectures do you support?",
      a: "We support a wide array of architectures, ranging from compact, edge-ready open-weights models (like Llama-3 8B, Mistral 7B) to massive state-of-the-art closed enterprise models (like GPT-4o, Claude 3.5 Sonnet, Gemini Pro)."
    },
    {
      q: "How do you handle unstructured data ingestion for vector search?",
      a: "We build automated extract-transform-load (ETL) pipelines that ingest PDFs, Word docs, HTML, and audio recordings, normalize them to clean JSON, slice them using semantic chunking, and run them through high-throughput embedding models."
    },
    {
      q: "How do you monitor and prevent LLM hallucinations?",
      a: "We deploy dual guardrails: structured prompt templates with strict system instructions, and real-time validation layers (such as LangChain Guardrails) that score model outputs against source database facts before rendering them."
    },
    {
      q: "What is the average deployment timeline for an autonomous AI agent workflow?",
      a: "Initial proof-of-concepts are ready in 3-4 weeks. Fully integrated production agents featuring self-healing retry logic, database syncs, and human-in-the-loop validation dashboards typically take 8-12 weeks."
    },
    {
      q: "Can we fine-tune open-weight models on our proprietary datasets?",
      a: "Yes. We configure dedicated GPU clusters and set up training scripts for parameter-efficient fine-tuning (PEFT) using Low-Rank Adaptation (LoRA) and QLoRA to align open-weight models with your corporate voice."
    },
    {
      q: "How do you handle rate-limiting and token cost optimization?",
      a: "We configure semantic caching layers (like Redis or GPTCache) that intercept matching queries, preventing redundant LLM calls. We also set up token-bucket rate limiters per user to keep monthly API costs predictable."
    },
    {
      q: "Do your AI solutions integrate with legacy SQL databases?",
      a: "Yes. We construct secure semantic query layers that translate natural language into SQL queries. These queries are audited against schemas and run inside read-only sandbox database connections to protect database state."
    },
    {
      q: "How do you address bias and safety compliance in AI workflows?",
      a: "We insert toxicity classifiers, prompt injection detectors, and output filters to intercept and block any policy-violating queries or replies before they affect end users."
    },
    {
      q: "What support SLAs do you offer for production AI systems?",
      a: "We provide 24/7 active runtime monitoring, model performance tracking, and incident escalation protocols. For critical production blockages, our engineers guarantee a response within 15 minutes."
    }
  ],
  "cloud-services": [
    {
      q: "What cloud providers does Devopstrio support?",
      a: "We support the three major public clouds: Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP), in addition to hybrid setups involving private on-premise hypervisors."
    },
    {
      q: "How does your team help optimize monthly cloud expenditure?",
      a: "We run deep FinOps audits, configure resource tagging, set up automated scale-down policies for non-production workloads, resize over-provisioned instances, and allocate reserved instances or savings plans."
    },
    {
      q: "What is your approach to zero-downtime cloud migration?",
      a: "We utilize multi-region replication, continuous database sync, and blue-green DNS routing configurations (using Cloudflare or Route 53) to migrate live production workloads with absolutely zero service interruptions."
    },
    {
      q: "How do you ensure compliance with regional data residency laws?",
      a: "We deploy cloud infrastructure solely within your designated geographic regions and configure cloud policy engines to block any cross-border data replication or unauthorized network access."
    },
    {
      q: "Do you support containerized deployment on Kubernetes?",
      a: "Yes. We specialize in configuring managed Kubernetes environments (EKS, AKS, GKE) built with auto-scaling compute groups, Karpenter, and secure private networking frameworks."
    },
    {
      q: "How do you handle cloud security and posture management?",
      a: "We integrate automated security scanners (like Wiz, Prisma Cloud, and ScoutSuite) that continuously audit cloud resource configurations against CIS benchmarks and flag misconfigurations instantly."
    },
    {
      q: "What is a secure landing zone and why is it important?",
      a: "A landing zone is an automated multi-account configuration that enforces baseline identity policies, centralized logging, and strict network boundaries before workloads are deployed."
    },
    {
      q: "How do you design for cloud high availability and disaster recovery?",
      a: "We deploy active-active multi-region configurations, automate database backups, and run periodic disaster recovery simulations to ensure RTO and RPO metrics remain under 15 minutes."
    },
    {
      q: "Can you modernize legacy VMs into serverless components?",
      a: "Yes. We analyze application logic, isolate stateless tasks, and refactor compute layers to serverless runtimes like AWS Lambda, Google Cloud Run, or Azure Container Apps."
    },
    {
      q: "What monitoring stacks do you deploy in cloud environments?",
      a: "We orchestrate unified dashboard monitoring using Prometheus, Grafana, OpenTelemetry, Datadog, or cloud-native monitors like AWS CloudWatch and Azure Monitor."
    }
  ],
  "devops-automation": [
    {
      q: "How do you design and construct CI/CD pipelines?",
      a: "We build modular pipelines using GitHub Actions, GitLab CI, or Jenkins. Pipelines feature parallel job executors, automated testing phases, security linting, container builds, and canary deployment rollouts."
    },
    {
      q: "What IaC tools do you specialize in?",
      a: "We write clean, dry, and versioned Infrastructure as Code configurations using Terraform, OpenTofu, Ansible, Pulumi, Packer, and AWS CloudFormation."
    },
    {
      q: "How do you support GitOps workflows?",
      a: "We deploy ArgoCD or Flux inside Kubernetes clusters to reconcile active running state directly with git repository configurations, preventing manual configuration drift."
    },
    {
      q: "What is your approach to platform engineering?",
      a: "We build internal developer portals (IDPs) using Spotify's Backstage, enabling developer teams to deploy pre-configured microservices, databases, and environments on-demand with one click."
    },
    {
      q: "How do you integrate security checks into pipelines (DevSecOps)?",
      a: "We insert SAST checks (SonarQube), dependency scanners (Snyk, Trivy), and secret detectors (TruffleHog) into the git commit and build stages, blocking builds containing critical issues."
    },
    {
      q: "Can you help us reduce pipeline execution times?",
      a: "Yes. We implement container build-caching, parallel testing frameworks, thin alpine base images, and local container registries to optimize pipeline speeds."
    },
    {
      q: "How do you manage infrastructure drift?",
      a: "We schedule daily automated dry-runs that compare current live configurations with git repository states, raising alerts and blocking merges if drift is detected."
    },
    {
      q: "What is your approach to Secrets Management?",
      a: "We configure HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault, injecting secrets dynamically into compute runtimes at execution time to avoid storing passwords in git."
    },
    {
      q: "How do you define SLIs, SLOs, and Error Budgets?",
      a: "We collaborate with your product owners to define user-centric reliability goals. We set up SLIs in Datadog or Prometheus and trigger alerts when error budgets are near exhaustion."
    },
    {
      q: "Do you provide post-mortem incident documentation?",
      a: "Yes. We conduct blameless post-mortems for production incidents, detailing the failure timeline, root cause analysis (RCA), and listing concrete action items to prevent recurrence."
    }
  ],
  "cybersecurity": [
    {
      q: "What security compliance frameworks do you support?",
      a: "We prepare and audit infrastructure to meet SOC-2 Type II, ISO 27001, HIPAA, PCI-DSS, and GDPR standards, implementing baseline policies and continuous evidence collection."
    },
    {
      q: "How do you implement Zero Trust architectures?",
      a: "We configure strict Identity & Access Management (IAM), adapt single sign-on (SSO), configure micro-segmentation, and enforce end-to-end encryption for data in transit and at rest."
    },
    {
      q: "Do you perform manual penetration testing?",
      a: "Yes. Our certified ethical hackers perform black-box and white-box pentesting on your APIs, web applications, and network infrastructure, delivering detailed vulnerability reports."
    },
    {
      q: "How do you manage vulnerability patching without downtime?",
      a: "We coordinate automated patching schedules, utilize container hot-swaps, and run workloads in HA configurations to roll out security patches with zero disruption."
    },
    {
      q: "What is your approach to Cloud Security Posture Management (CSPM)?",
      a: "We deploy active scanning agents that continuously check database accessibility, port exposure, and IAM policies, instantly alerting security leads of deviations."
    },
    {
      q: "How do you protect databases from SQL injection and leaks?",
      a: "We enforce prepared SQL statements, place databases behind private subnets, restrict access using Bastion hosts, and encrypt files using KMS keys."
    },
    {
      q: "What logging and auditing trails do you set up?",
      a: "We capture centralized, immutable audit logs using AWS CloudTrail, Azure Activity Logs, and Syslog, feeding them to a secure SIEM for real-time alerting."
    },
    {
      q: "How do you handle Okta and Active Directory integrations?",
      a: "We configure enterprise IAM integrations using SAML 2.0 and OIDC protocols, establishing granular role mappings and Multi-Factor Authentication (MFA)."
    },
    {
      q: "What is your Incident Response (IR) protocol?",
      a: "We establish a dedicated IR retainer team, prepare runtime containment playbooks (like isolating nodes), and configure automated alert routing to Slack or PagerDuty."
    },
    {
      q: "How do you secure container images from vulnerabilities?",
      a: "We enforce image scanning in the container registry, block deployments of images containing critical CVEs, and configure minimal distroless base images."
    }
  ],
  "software-development": [
    {
      q: "What programming languages and frameworks do you use?",
      a: "Our core stack includes TypeScript, React, Next.js, Node.js, Python, Go, and Rust. We choose the optimal runtime based on performance, scalability, and lifecycle needs."
    },
    {
      q: "How do you ensure application performance under heavy load?",
      a: "We build stateless backend architectures, implement Redis caching, optimize database indexes, and compile assets for fast CDN delivery."
    },
    {
      q: "Do you build microservices or monolithic applications?",
      a: "We design based on project scale. We start with modular monoliths to speed up delivery, refactoring to event-driven microservices using gRPC and Kafka as scaling demands increase."
    },
    {
      q: "How do you handle API documentation and compatibility?",
      a: "We follow API-first design principles, writing strict OpenAPI (Swagger) specifications, enforcing semantic versioning, and running integration checks."
    },
    {
      q: "What database systems do you recommend?",
      a: "We recommend PostgreSQL for relational transactions, MongoDB or DynamoDB for flexible schemas, and Redis for low-latency session caching."
    },
    {
      q: "How do you approach frontend state management?",
      a: "We use context APIs and lightweight state managers (Zustand, Redux Toolkit) in React, keeping state management close to the UI components for fast rendering."
    },
    {
      q: "Do you write unit and end-to-end tests?",
      a: "Yes. We enforce a minimum of 80% test coverage using Jest/Vitest for unit testing and Playwright or Cypress for automated end-to-end browser flows."
    },
    {
      q: "How do you secure APIs from abuse and DDoS?",
      a: "We place APIs behind Cloudflare WAF, configure rate limiters (e.g., token bucket algorithm), and validate JWT claims on every request."
    },
    {
      q: "Can you help refactor legacy codebases?",
      a: "Yes. We analyze legacy systems, design strangler-fig migration paths, write regression tests, and decouple modules without stopping active operations."
    },
    {
      q: "What agile development practices do you follow?",
      a: "We run two-week sprints, coordinate daily stand-ups, prioritize tickets in Jira or GitHub Projects, and conduct sprint reviews to ensure alignment."
    }
  ],
  "digital-transformation": [
    {
      q: "What is Devopstrio's role in digital transformation?",
      a: "We act as your engineering partner, converting manual workflows into modern cloud-native systems, automating processes, and migrating legacy IT setups."
    },
    {
      q: "How do you evaluate our company's current technology maturity?",
      a: "We run discovery sessions, audit existing systems, map data flows, and deliver a detailed maturity scorecard highlighting technical debt and bottlenecks."
    },
    {
      q: "How do you minimize risk when replacing legacy core systems?",
      a: "We migrate systems in phases using parallel runs, API abstraction layers, and feature flags, maintaining fallback paths in case of issues."
    },
    {
      q: "What is your approach to Robotic Process Automation (RPA)?",
      a: "We build automation flows using API integrations, serverless workflows, and optical character recognition (OCR) rather than fragile GUI recording tools."
    },
    {
      q: "How do you manage internal team alignment during a transformation?",
      a: "We run technical workshops, write comprehensive documentation, and pair-program with your internal engineers to ensure smooth hand-off and adoption."
    },
    {
      q: "Can you help transition our organization to Agile and DevOps?",
      a: "Yes. We coach engineering managers, configure CI/CD systems, and help restructure teams to improve collaboration and velocity."
    },
    {
      q: "How do you calculate the ROI of digital transformation projects?",
      a: "We track metrics like deployment frequency, lead time for changes, monthly cloud hosting costs, and reduction in manual processing hours."
    },
    {
      q: "What cloud migration options do you recommend?",
      a: "We recommend refactoring workloads to utilize serverless compute and managed databases over simple lift-and-shift VM migrations."
    },
    {
      q: "How do you build omnichannel customer portals?",
      a: "We design responsive React web applications and Flutter mobile apps backed by unified API layers and headless content management systems (CMS)."
    },
    {
      q: "How do you ensure data synchronization during migrations?",
      a: "We set up real-time CDC (Change Data Capture) pipelines that sync data between legacy databases and modern cloud lakehouses during transitions."
    }
  ],
  "data-engineering": [
    {
      q: "What data warehousing solutions do you implement?",
      a: "We design and optimize data platforms using Snowflake, Databricks, Google BigQuery, and Amazon Redshift, matching the storage engine to your query workloads."
    },
    {
      q: "How do you build scalable ETL and ELT pipelines?",
      a: "We build data pipelines using Apache Spark, dbt, Apache Airflow, and Prefect, separating ingestion from transformation for scale and debugging."
    },
    {
      q: "How do you support real-time data streaming?",
      a: "We set up event-streaming platforms using Apache Kafka, AWS Kinesis, or Apache Flink, enabling processing of telemetry and transactions."
    },
    {
      q: "What is a data lakehouse and do we need one?",
      a: "A lakehouse combines the cheap storage of a data lake with the structure and transactions of a data warehouse, utilizing delta-lake formats on object storage."
    },
    {
      q: "How do you ensure data quality and schema validation?",
      a: "We write automated data assertions using Great Expectations or dbt tests, quarantine corrupt records, and configure schema registries."
    },
    {
      q: "What is your approach to data cataloging and lineage?",
      a: "We deploy metadata tools like Apache Atlas or OpenMetadata to trace data transformations from source database to final reporting dashboard."
    },
    {
      q: "How do you secure sensitive data inside data platforms?",
      a: "We configure role-based access control (RBAC), set up column-level masking, encrypt files with customer-managed keys, and sanitize PII."
    },
    {
      q: "Can you help optimize slow and expensive SQL queries?",
      a: "Yes. We audit query execution plans, partition large tables, configure clustering keys, and set up caching layers to reduce database load."
    },
    {
      q: "How do you handle data backfills and historical migrations?",
      a: "We write idempotent, partitioned pipeline jobs that process historical segments in parallel without affecting active daily pipelines."
    },
    {
      q: "What data formats do you recommend for high-performance analytics?",
      a: "We store analytical datasets in columnar formats like Apache Parquet or ORC, optimizing files for compressed, low-cost storage."
    }
  ],
  "managed-services": [
    {
      q: "What is included in Devopstrio's Managed Services?",
      a: "We provide 24/7 incident response, system monitoring, cloud cost management, operating system patching, database tuning, and backups."
    },
    {
      q: "What SLAs do you guarantee for response times?",
      a: "Our standard SLA guarantees a response within 15 minutes for critical P1 outages, 1 hour for P2 system issues, and 4 hours for non-critical requests."
    },
    {
      q: "How do you monitor our infrastructure?",
      a: "We deploy monitoring agents that track CPU, memory, disk, network, and application health, feeding metrics into our centralized pager system."
    },
    {
      q: "Do we retain control over our cloud account credentials?",
      a: "Yes. All infrastructure runs in your own cloud accounts. You grant our engineers access via secure cross-account IAM roles, which you can revoke at any time."
    },
    {
      q: "How do you handle backups and restore validation?",
      a: "We schedule daily snapshots, replicate backups to isolated accounts, and run automated recovery tests to verify backup integrity."
    },
    {
      q: "What is your process for patching and system maintenance?",
      a: "We apply security patches monthly during scheduled maintenance windows, using blue-green deployments to minimize service interruption."
    },
    {
      q: "How do you handle database administration and tuning?",
      a: "We manage index rebuilding, configure autovacuum thresholds, adjust buffer sizes, and monitor replication lag to keep databases responsive."
    },
    {
      q: "Do you assist with security incidents and containment?",
      a: "Yes. Our on-call engineers follow containment playbooks, isolating compromised hosts, rotating credentials, and assisting with forensics."
    },
    {
      q: "What reporting do you provide?",
      a: "We deliver monthly operations reports detailing system uptime, incident history, resource utilization, and cost-reduction opportunities."
    },
    {
      q: "How do you handle escalations to our internal team?",
      a: "We establish clear escalation paths, contacting your designated leads via PagerDuty, Slack, or phone only if an incident requires internal input."
    }
  ],
  "qa-testing": [
    {
      q: "What testing automation frameworks do you use?",
      a: "We build regression test suites using Playwright, Cypress, Selenium, and Appium, writing test scripts in TypeScript, JavaScript, or Python."
    },
    {
      q: "How do you perform load and performance testing?",
      a: "We simulate heavy traffic loads using k6 or Apache JMeter, running virtual users against API endpoints and databases to find bottlenecks."
    },
    {
      q: "Do you integrate QA testing into our CI/CD pipelines?",
      a: "Yes. We configure testing stages to run automatically on every pull request, blocking merges if tests fail or if code coverage decreases."
    },
    {
      q: "What is 'Shift-Left' testing and how do you implement it?",
      a: "Shift-Left testing involves running tests earlier in the development lifecycle. We implement it by writing unit tests and API checks during the coding phase."
    },
    {
      q: "Do you perform manual exploratory testing?",
      a: "Yes. While we prioritize automation, we also run manual exploratory tests to check user flows and identify edge cases."
    },
    {
      q: "How do you handle dynamic test data generation?",
      a: "We build database seeding scripts and integrate mock API responses to supply tests with reliable data without exposing customer information."
    },
    {
      q: "What code coverage metrics do you target?",
      a: "We target a minimum of 80% code coverage, focusing tests on critical business logic, security checkpoints, and transaction pathways."
    },
    {
      q: "How do you test native mobile applications?",
      a: "We use Appium and run tests across real device clouds (like AWS Device Farm) to validate application performance on different OS versions."
    },
    {
      q: "Do you test APIs and web service contracts?",
      a: "Yes. We run schema validation tests on REST, GraphQL, and gRPC endpoints to verify request and response contract compliance."
    },
    {
      q: "How do you document and track bugs?",
      a: "We document bugs with detailed reproduction steps, video recordings, and console logs, tracking progress inside Jira or GitHub Issues."
    }
  ],
  "it-consulting": [
    {
      q: "What IT consulting services does Devopstrio offer?",
      a: "We provide technology audits, cloud architecture designs, disaster recovery planning, compliance consulting, and cost optimization audits."
    },
    {
      q: "How do you design a technology migration roadmap?",
      a: "We evaluate your existing systems, map dependencies, outline target architectures, estimate budgets, and plan phased rollouts to minimize risk."
    },
    {
      q: "Can you help our company choose between cloud vendors?",
      a: "Yes. We run comparative analyses analyzing pricing, feature availability, geographical regional support, and migration complexity."
    },
    {
      q: "What is your approach to IT cost optimization?",
      a: "We analyze software licensing, find idle server capacity, optimize database sizes, and consolidate redundant SaaS subscriptions."
    },
    {
      q: "How do you assist with compliance and audit readiness?",
      a: "We audit your security configurations against SOC-2 or ISO 27001 requirements, write policy drafts, and set up compliance tracking."
    },
    {
      q: "Do you help with system integration designs?",
      a: "Yes. We design APIs, choose middleware platforms (like MuleSoft or Kafka), and build data sync frameworks to connect your systems."
    },
    {
      q: "How long does a standard IT assessment take?",
      a: "A standard IT assessment takes 2-4 weeks, including system discovery, stakeholder interviews, and delivering our final recommendations."
    },
    {
      q: "Can you design a high-availability disaster recovery plan?",
      a: "Yes. We define RTO and RPO targets, design replication topologies, draft failover guides, and coordinate disaster recovery drills."
    },
    {
      q: "What experience does your consulting team have?",
      a: "Our consultants are certified solutions architects with experience leading enterprise infrastructure migrations and digital transformations."
    },
    {
      q: "How do you handle knowledge transfer to our team?",
      a: "We deliver system runbooks, record training workshops, and pair-program with your engineers during the project hand-off phase."
    }
  ]
};

// Generates 10 Custom FAQs for a specific Capability by interpolating its Title
export function generateFaqsForCapability(serviceSlug: string, capabilityTitle: string): FAQItem[] {
  return [
    {
      q: `What makes Devopstrio's approach to ${capabilityTitle} unique?`,
      a: `We combine deep automation, certified engineers, and pre-built Infrastructure as Code (IaC) modules to deliver ${capabilityTitle} solutions rapidly, ensuring complete data security and system observability.`
    },
    {
      q: `How do you measure success and performance for ${capabilityTitle} deployments?`,
      a: `We track key metrics including deployment lead times, system latency, SLA compliance, compute efficiency, and security scanning pass rates to ensure measurable value.`
    },
    {
      q: `What security controls are built into your ${capabilityTitle} configurations?`,
      a: `We implement least-privilege access controls, configure automated secrets rotation, set up network firewalls, and run continuous vulnerability scans across all compute layers.`
    },
    {
      q: `Can this ${capabilityTitle} solution integrate with our legacy on-premise setups?`,
      a: `Yes. We build secure API adapters, data sync pipelines, and hybrid network bridges (like site-to-site VPNs or Direct Connect) to connect modern ${capabilityTitle} components to your legacy infrastructure.`
    },
    {
      q: `How do you handle scaling and traffic spikes for ${capabilityTitle} workloads?`,
      a: `We configure horizontal pod autoscaling (HPA) and load balancing rules that automatically scale resources up or down depending on CPU, memory, or request volume.`
    },
    {
      q: `What is the average timeline to roll out ${capabilityTitle}?`,
      a: `A typical rollout takes 4 to 8 weeks, depending on system complexity, integration requirements, and the maturity of existing codebases.`
    },
    {
      q: `Do you provide training and hand-off documentation for our team?`,
      a: `Yes. We deliver complete architectural blueprints, configuration runbooks, and run hands-on workshops with your engineers to ensure a smooth transition.`
    },
    {
      q: `How do we track performance telemetry and latency for ${capabilityTitle}?`,
      a: `We configure OpenTelemetry instrumentation and export traces, logs, and metrics to central dashboards in Grafana or Datadog for real-time visibility.`
    },
    {
      q: `What compliance frameworks are supported under this ${capabilityTitle}?`,
      a: `Our configurations align with SOC-2, ISO 27001, HIPAA, and GDPR compliance baselines, implementing standard encryption and audit logging features.`
    },
    {
      q: `What cost optimizations can we expect with ${capabilityTitle}?`,
      a: `Clients typically see a 30% to 50% reduction in manual operations overhead, improved resource utilization, and lower hosting costs through auto-scaling and caching.`
    }
  ];
}

// Intercepts and ensures a ServiceCategory has exactly 10 FAQs
export function getEnrichedServiceFaqs(serviceSlug: string): FAQItem[] {
  return serviceFaqs[serviceSlug] || serviceFaqs["ai-data-innovation"];
}
