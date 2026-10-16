import { CapabilityPageData } from "./types";

export const platformCapabilities: Record<string, CapabilityPageData> = {
  "internal-developer-platforms": {
    slug: "internal-developer-platforms",
    pillarSlug: "platform-engineering",
    pillarName: "Platform Engineering",
    title: "Internal Developer Platforms (IDP)",
    tag: "Developer Experience",
    badge: "Spotify Backstage & Portal Automation",
    subtitle: "Empower engineering teams with a unified self-service platform. Centralize software catalogs, automated infrastructure provisioning, and API documentation into a single pane of glass.",
    metrics: [
      { val: "85%", label: "Onboarding Time Cut", sub: "From weeks down to hours" },
      { val: "0", label: "DevOps Ticket Bottlenecks", sub: "Self-service developer workflows" },
      { val: "100%", label: "Catalog Visibility", sub: "Unified service ownership" },
      { val: "4x", label: "Feature Velocity", sub: "Standardized scaffolding" }
    ],
    capabilities: [
      {
        id: "software-catalog-ownership",
        title: "Unified Software Catalog & Service Ownership",
        tag: "Service Registry",
        badge: "Spotify Backstage",
        latencyBadge: "Instant Lookup",
        desc: "Maintains a central, searchable catalog of all production microservices, libraries, databases, and APIs, showing exact team ownership, repository links, and live health metrics.",
        stats: [
          "Eliminates confusion over who owns which microservice during production incidents",
          "Automated ingestion of `catalog-info.yaml` manifests version-controlled in Git",
          "Displays live PagerDuty on-call schedules, Sentry error rates, and SonarQube quality scores"
        ],
        terminal: {
          command: "backstage.catalog.search({ service: 'payment-processing-api' })",
          status: "SERVICE LOCATED (OWNER: PAYMENTS POD)",
          logs: [
            { type: "comment", text: "// Reading centralized Backstage service catalog" },
            { type: "step", text: "> owner: @payments-engineering-squad (Slack: #payments-dev)" },
            { type: "step", text: "> live health: 12 pods healthy | PagerDuty on-call: @john.doe" },
            { type: "success", text: "> direct links: GitHub repo, API docs, Datadog dashboard" }
          ]
        }
      },
      {
        id: "self-service-scaffolding",
        title: "Self-Service Microservice Scaffolding",
        tag: "Golden Paths",
        badge: "Backstage Software Templates",
        latencyBadge: "< 3min Scaffolding",
        desc: "Empowers developers to spin up complete, production-ready microservices in minutes with pre-configured CI/CD pipelines, IAM boundaries, and Kubernetes manifests.",
        stats: [
          "Generates new Git repositories with approved framework boilerplate (FastAPI, Next.js, Go)",
          "Automatically provisions development databases, DNS records, and ArgoCD applications",
          "Enforces corporate security, linting, and architectural standards from Day 1"
        ],
        terminal: {
          command: "backstage.scaffold.create({ template: 'go-microservice-v2', name: 'pricing-engine' })",
          status: "SCAFFOLDING COMPLETE (2m 14s)",
          logs: [
            { type: "comment", text: "// Executing automated platform template workflow" },
            { type: "step", text: "> created GitHub repo: github.com/devopstrio/pricing-engine" },
            { type: "step", text: "> provisioned EKS namespace, ArgoCD application, and IAM role" },
            { type: "success", text: "> initial pipeline green: live on staging cluster in 2 minutes" }
          ]
        }
      },
      {
        id: "tech-docs-as-code",
        title: "Technical Documentation as Code (TechDocs)",
        tag: "Knowledge Base",
        badge: "Markdown in Git",
        latencyBadge: "Always Up-to-Date",
        desc: "Houses technical documentation directly alongside code in Git repositories, automatically compiling Markdown files into searchable documentation in the central portal.",
        stats: [
          "Eliminates stale, outdated Confluence pages that nobody maintains",
          "Automated compilation using MkDocs into fast, searchable HTML inside Backstage",
          "Keeps architectural decision records (ADRs) and API specs in sync with deployments"
        ],
        terminal: {
          command: "techdocs.compile({ repo: 'checkout-service', docs_dir: '/docs' })",
          status: "DOCUMENTATION COMPILED & INDEXED",
          logs: [
            { type: "comment", text: "// Processing Markdown files and OpenAPI specs" },
            { type: "step", text: "> compiled 24 Markdown guides and Swagger API interactive schema" },
            { type: "step", text: "> indexed full-text content in central Lunr / Elasticsearch search" },
            { type: "success", text: "> available instantly to 500+ engineers across the company" }
          ]
        }
      },
      {
        id: "scorecards-tech-radar",
        title: "Engineering Scorecards & Tech Radar",
        tag: "Quality Governance",
        badge: "Production Readiness",
        latencyBadge: "Continuous Scoring",
        desc: "Assesses every microservice against automated production readiness scorecards (test coverage, security scanning, logging standards) and manages technology adoption via Tech Radars.",
        stats: [
          "Automated grading: Bronze, Silver, Gold production readiness badges",
          "Visual Tech Radar guiding engineers on what tools to Adopt, Trial, Assess, or Hold",
          "Encourages healthy gamification to eliminate technical debt across squads"
        ],
        terminal: {
          command: "scorecards.evaluate({ service: 'pricing-engine' })",
          status: "SCORECARD: GOLD TIER (94/100)",
          logs: [
            { type: "comment", text: "// Evaluating automated production readiness checks" },
            { type: "step", text: "> test coverage: 88% (>= 80% required) -> PASSED" },
            { type: "step", text: "> security scanning: zero critical CVEs -> PASSED" },
            { type: "success", text: "> certified Gold Tier: approved for Tier-1 production traffic" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Select Template", tag: "Backstage Portal", desc: "Developer selects verified Golden Path template in the self-service UI.", iconName: "Terminal" },
      { step: "02", title: "Parameter Input", tag: "Form Inputs", desc: "Inputs service name, owning team, programming language, and database type.", iconName: "Sliders" },
      { step: "03", title: "Automated Setup", tag: "GitHub & Cloud", desc: "Scaffolding engine creates Git repository, CI/CD pipeline, and IAM roles.", iconName: "Workflow" },
      { step: "04", title: "GitOps Connect", tag: "ArgoCD", desc: "Connects application manifests to Kubernetes cluster via automated GitOps sync.", iconName: "RefreshCw" },
      { step: "05", title: "Catalog Register", tag: "Live in Catalog", desc: "Service appears in central software catalog with live health telemetry.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Terminal", title: "Centralized Software Catalog", tags: ["Backstage", "Service Registry", "Ownership"], desc: "Maintain a single source of truth for all microservices, APIs, and libraries, identifying owning teams and live health in seconds." },
      { iconName: "Zap", title: "Self-Service Golden Paths", tags: ["Software Templates", "Automated Scaffolding", "< 3min Setup"], desc: "Enable developers to create production-ready microservices with pre-baked CI/CD, security guardrails, and cloud infrastructure in minutes." },
      { iconName: "FileCheck", title: "Documentation as Code (TechDocs)", tags: ["Markdown in Git", "MkDocs", "Searchable"], desc: "Keep technical documentation living alongside code in Git, automatically compiling clean, searchable docs into the developer portal." },
      { iconName: "ShieldCheck", title: "Production Readiness Scorecards", tags: ["Gamified Quality", "Gold Badges", "Tech Debt"], desc: "Automate engineering quality governance with scorecards evaluating test coverage, security scans, and observability standards." },
      { iconName: "Layers", title: "Corporate Tech Radar", tags: ["Technology Standards", "Adopt / Hold", "Architecture"], desc: "Publish clear, interactive guidance on approved languages, frameworks, and databases to keep your technology landscape unified." },
      { iconName: "Activity", title: "Live Developer Telemetry", tags: ["Datadog", "Sentry", "PagerDuty Integration"], desc: "View real-time error rates, on-call rotations, and deployment status directly inside each microservice's catalog page." }
    ],
    techStack: [
      { category: "IDP Platforms", items: ["Spotify Backstage", "Port (getport.io)", "Cortex", "Compass by Atlassian"] },
      { category: "Scaffolding & Templates", items: ["Backstage Scaffolder", "Cookiecutter", "Yeoman", "Helm"] },
      { category: "Documentation Engines", items: ["TechDocs (MkDocs)", "Docusaurus", "Swagger / OpenAPI"] },
      { category: "Integrations & Plugins", items: ["GitHub / GitLab", "Kubernetes", "PagerDuty", "Sentry", "ArgoCD"] },
      { category: "Access & RBAC", items: ["GitHub OAuth", "Okta SSO", "Google Workspace", "Azure AD"] }
    ],
    beforeVsAfter: {
      beforeTitle: "DevOps Ticket Bottlenecks",
      beforePoints: [
        "Developers waiting 2 to 3 weeks for DevOps to manually provision a database and repo.",
        "Nobody knowing which team owns a failing microservice during middle-of-the-night outages.",
        "Stale, outdated Confluence documentation that nobody reads or updates.",
        "Engineering teams reinventing the wheel with divergent, un-vetted frameworks."
      ],
      afterTitle: "Devopstrio Internal Developer Platform",
      afterPoints: [
        "Developers spinning up verified, secure microservices independently in under 3 minutes.",
        "Centralized software catalog showing 100% of service ownership and on-call rotations.",
        "Documentation-as-code living alongside repositories, always fresh and searchable.",
        "Automated scorecards incentivizing teams to maintain high quality and zero technical debt."
      ]
    },
    faqs: [
      { q: "What is an Internal Developer Platform (IDP) and why does an enterprise need one?", a: "As engineering organizations grow past 30-50 developers, DevOps engineers become bottlenecks handling repetitive tickets for databases, repositories, and permissions. An IDP provides a self-service web portal (like Backstage) where developers can provision infrastructure and explore services independently using pre-approved templates." },
      { q: "What is Spotify Backstage and how do you customize it?", a: "Backstage is an open-source framework created by Spotify and donated to the CNCF. It is built in React and TypeScript. We customize Backstage by building tailored plugins, integrating your identity provider (Okta/Entra ID), connecting your CI/CD pipelines, and writing custom scaffolding templates." },
      { q: "How do Golden Paths balance developer autonomy with governance?", a: "Golden Paths provide a path of least resistance: if a developer uses the approved template, they get instant CI/CD, security scanning, and automated cloud infrastructure for free. Developers remain autonomous, but the organization ensures all services adhere to security, logging, and architectural standards." },
      { q: "How does TechDocs ensure documentation stays up-to-date?", a: "Traditional documentation wikis fail because engineers forget to visit external tools. TechDocs keeps documentation as simple Markdown files in the same Git repo as the code. When code is merged, CI automatically recompiles the docs into Backstage, ensuring documentation evolves in sync with code." },
      { q: "How long does it take to implement an IDP in an enterprise?", a: "We typically roll out an initial MVP in 4 to 6 weeks, connecting your core code repositories, identity provider, and deploying the first 2-3 Golden Path templates. Additional plugins and scorecards are iterated continuously based on developer feedback." }
    ]
  },

  "developer-self-service-portals": {
    slug: "developer-self-service-portals",
    pillarSlug: "platform-engineering",
    pillarName: "Platform Engineering",
    title: "Developer Self-Service Portals",
    tag: "Platform Automation",
    badge: "Port, Backstage & Automated Day-2 Ops",
    subtitle: "Empower developers with self-service cloud actions. Provision temporary preview environments, trigger database backups, and request access approvals without filing DevOps tickets.",
    metrics: [
      { val: "< 2min", label: "Self-Service Execution Time", sub: "Automated webhook triggers" },
      { val: "90%", label: "DevOps Ticket Volume Cut", sub: "Fewer manual infrastructure requests" },
      { val: "100%", label: "RBAC & Audit Logging", sub: "All actions recorded & authorized" },
      { val: "24/7", label: "Developer Autonomy", sub: "Zero timezone dependency" }
    ],
    capabilities: [
      {
        id: "day-2-operations-self-service",
        title: "Automated Day-2 Operational Actions",
        tag: "Self-Service Actions",
        badge: "One-Click Workflows",
        latencyBadge: "Instant Execution",
        desc: "Enables product developers to trigger routine Day-2 operational tasks (restarting pods, rolling back deployments, generating database sanitized dumps) with single-click UI buttons.",
        stats: [
          "Pre-validated parameterized inputs preventing accidental syntax or parameter errors",
          "Automated RBAC ensuring junior developers cannot restart production databases",
          "Integrates with GitHub Actions, ArgoCD, and AWS Lambda to execute workflows behind the scenes"
        ],
        terminal: {
          command: "portal.execute_action({ action: 'restart_microservice_pods', env: 'staging' })",
          status: "ACTION EXECUTED (3 PODS RESTARTED)",
          logs: [
            { type: "comment", text: "// Running authenticated self-service action" },
            { type: "step", text: "> validated user role: verified member of @core-team" },
            { type: "step", text: "> dispatched webhook to Kubernetes operator" },
            { type: "success", text: "> rolling restart completed in 14.2 seconds | audit logged" }
          ]
        }
      },
      {
        id: "database-sandbox-self-service",
        title: "Self-Service Database Sandboxes & Anonymization",
        tag: "Data Sandboxes",
        badge: "Ephemeral DBs",
        latencyBadge: "< 3min Database Fork",
        desc: "Allows developers to spin up isolated, lightweight database clones populated with sanitized, anonymized production-like data for accurate local feature testing.",
        stats: [
          "Automated PII scrubbing ensuring zero real customer data enters developer environments",
          "Copy-on-write storage snapshots spinning up 100GB database clones in under 3 minutes",
          "Automated 24-hour expiration terminating abandoned sandboxes to conserve cloud spend"
        ],
        terminal: {
          command: "sandbox_portal.create_db_fork({ source: 'prod-replica', anonymize: true })",
          status: "SANDBOX PROVISIONED (RDS POSTGRES)",
          logs: [
            { type: "comment", text: "// Creating copy-on-write database sandbox" },
            { type: "step", text: "> scrubbed user emails, phone numbers, and payment cards" },
            { type: "step", text: "> provisioned temporary isolated instance: sandbox-db-dev41" },
            { type: "success", text: "> connection string issued to developer (TTL: 24 hours)" }
          ]
        }
      },
      {
        id: "ephemeral-preview-environments",
        title: "On-Demand Ephemeral Preview Environments",
        tag: "Preview Envs",
        badge: "PR-Level Environments",
        latencyBadge: "< 5min Spin-Up",
        desc: "Automatically launches isolated preview environments for every pull request, allowing developers, QA, and product managers to test live features before merging.",
        stats: [
          "Unique preview URLs generated automatically and posted as pull request comments",
          "Automated teardown terminating preview infrastructure immediately when PR is closed or merged",
          "Shares baseline services while isolating pull request-specific microservice changes"
        ],
        terminal: {
          command: "preview_controller.deploy({ pr: 412, branch: 'feat/checkout-redesign' })",
          status: "PREVIEW LIVE: pr-412.preview.devopstrio.co.uk",
          logs: [
            { type: "comment", text: "// Provisioning lightweight isolated preview namespace" },
            { type: "step", text: "> deployed updated frontend container and mock payment API" },
            { type: "step", text: "> configured automated SSL certificate via cert-manager" },
            { type: "success", text: "> posted preview URL to GitHub PR for stakeholder review" }
          ]
        }
      },
      {
        id: "access-request-workflows",
        title: "Self-Service Access & Resource Requests",
        tag: "Approval Workflows",
        badge: "Slack & Portal Approvals",
        latencyBadge: "Zero Email Chains",
        desc: "Provides a streamlined portal where developers can request access to third-party tools, cloud environments, or new S3 buckets with automated multi-tier approval chains.",
        stats: [
          "Replaces chaotic email and Jira access requests with structured approval forms",
          "One-click Slack/Teams approval interactive cards for engineering managers",
          "Automated provisioning granting access immediately upon manager approval"
        ],
        terminal: {
          command: "access_portal.submit_request({ resource: 'snowflake_analytics_read' })",
          status: "SUBMITTED -> AWAITING_MANAGER",
          logs: [
            { type: "comment", text: "// Routing access request through approval matrix" },
            { type: "step", text: "> sent interactive Slack approval notification to @manager" },
            { type: "step", text: "> manager clicked 'Approve' in Slack (reason: 'Q2 analytics work')" },
            { type: "success", text: "> granted read-only Snowflake role automatically (0 human IT clicks)" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Select Action", tag: "Portal Catalog", desc: "Developer navigates to self-service portal and selects action card.", iconName: "Terminal" },
      { step: "02", title: "Parameter Validation", tag: "Typed Schema", desc: "Form inputs are validated against strict JSON schemas and permission checks.", iconName: "Sliders" },
      { step: "03", title: "Approval Gate", tag: "Manager Slack", desc: "High-impact actions route to Slack for one-click manager sign-off.", iconName: "ShieldCheck" },
      { step: "04", title: "Automated Runner", tag: "Webhook / Lambda", desc: "Platform engine provisions resource or executes operational task.", iconName: "Workflow" },
      { step: "05", title: "Status & Audit", tag: "Audit Logged", desc: "Developer receives confirmation link; action recorded in audit log.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Terminal", title: "One-Click Operational Day-2 Actions", tags: ["Pod Restarts", "Cache Clear", "No Ticket"], desc: "Empower developers to perform routine operational maintenance independently with guardrailed, pre-approved self-service actions." },
      { iconName: "Database", title: "Sanitized Database Sandboxes", tags: ["Data Masking", "Copy-on-Write", "Instant Clones"], desc: "Allow developers to fork production-like database sandboxes in minutes, populated with scrubbed data that complies with privacy rules." },
      { iconName: "Zap", title: "Pull Request Preview Environments", tags: ["Ephemeral Envs", "Unique URLs", "Auto-Teardown"], desc: "Test features live before merging. Automatically launch temporary, full-stack preview environments that self-destruct when PRs close." },
      { iconName: "Workflow", title: "Slack-Integrated Access Approvals", tags: ["Slack Approvals", "Zero IT Tickets", "JIT Access"], desc: "Streamline access requests with interactive Slack buttons that grant approved cloud permissions automatically upon manager sign-off." },
      { iconName: "Lock", title: "Granular RBAC Guardrails", tags: ["Permission Gates", "Safe Execution", "Least Privilege"], desc: "Ensure developers can only execute actions within their assigned squads and environments, completely eliminating accidental cross-team errors." },
      { iconName: "Activity", title: "Immutable Action Audit Trails", tags: ["SOC2 Compliance", "Audit Records", "Traceability"], desc: "Maintain complete, tamper-proof logs of every self-service action executed, recording who triggered what action, when, and with what parameters." }
    ],
    techStack: [
      { category: "Self-Service Platforms", items: ["Port (getport.io)", "Spotify Backstage", "Rundeck", "PagerDuty Process Automation"] },
      { category: "Preview Environments", items: ["vcluster (Virtual Clusters)", "Bunnyshell", "Uffizzi", "Kubernetes Namespaces"] },
      { category: "Workflow Automation", items: ["GitHub Actions Webhooks", "AWS Lambda", "Temporal.io", "Zapier / Make"] },
      { category: "Communication & Approvals", items: ["Slack Bolt API", "Microsoft Teams Webhooks", "PagerDuty"] },
      { category: "Database Forking", items: ["Neon Database Branching", "Supabase", "AWS Aurora Cloning"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Constant DevOps Interruption",
      beforePoints: [
        "DevOps engineers spending 40% of their week fulfilling manual ticket requests.",
        "Developers waiting days just to get a temporary database password or preview link.",
        "Manual commands executed in production with zero audit trail or parameter checking.",
        "Abandoned staging environments running indefinitely, wasting thousands in cloud spend."
      ],
      afterTitle: "Devopstrio Developer Self-Service",
      afterPoints: [
        "Developers self-serving 90% of routine operational actions independently in under 2 minutes.",
        "DevOps engineers freed from repetitive tickets to focus on strategic platform initiatives.",
        "Strict RBAC, parameter validation, and immutable audit logs on every single execution.",
        "Automated lifecycle timers terminating ephemeral preview environments upon PR merge."
      ]
    },
    faqs: [
      { q: "How do you prevent developers from breaking things with self-service actions?", a: "Every self-service action is strictly parameterized and guarded by RBAC. A developer cannot run arbitrary terminal commands; they can only click pre-approved buttons (e.g., 'Restart Pod') with validated drop-down choices. Actions in production require manager Slack approvals." },
      { q: "What is an ephemeral preview environment?", a: "An ephemeral environment is a temporary, isolated deployment spun up specifically for a single pull request. It allows product managers, QA engineers, and designers to click a live URL to test a feature before code is merged into main. When the PR closes, the environment is automatically deleted." },
      { q: "How do you keep database sandboxes compliant with GDPR?", a: "Our database cloning pipeline includes an automated sanitization step that replaces customer names, emails, passwords, and credit card numbers with synthetic dummy data before the database fork is handed over to developers." },
      { q: "Can self-service actions trigger workflows across multiple tools?", a: "Yes. When a developer clicks an action in the portal, it triggers an event that can orchestrate actions across GitHub Actions, Terraform, ArgoCD, and AWS Lambda simultaneously, providing a unified developer experience." },
      { q: "What is Port (getport.io) and how does it compare to Backstage?", a: "Backstage is an open-source framework that requires in-house software engineering to customize and maintain. Port is a SaaS-native Internal Developer Portal that provides customizable self-service actions, catalogs, and scorecards out of the box with zero infrastructure overhead." }
    ]
  },

  "golden-path-templates": {
    slug: "golden-path-templates",
    pillarSlug: "platform-engineering",
    pillarName: "Platform Engineering",
    title: "Golden Path Templates",
    tag: "Standardization",
    badge: "Verified Architectural Patterns & Scaffolding",
    subtitle: "Provide engineering squads with frictionless, opinionated paths to production. Pre-architected service templates with baked-in security, CI/CD, telemetry, and automated cloud infrastructure.",
    metrics: [
      { val: "100%", label: "Architectural Consistency", sub: "Standardized microservice patterns" },
      { val: "15 min", label: "Idea to First Production Deploy", sub: "Instant verified scaffolding" },
      { val: "0", label: "Missing Observability / Alerts", sub: "Pre-configured Grafana telemetry" },
      { val: "80%", label: "Initial Architecture Review Cut", sub: "Pre-approved security blueprints" }
    ],
    capabilities: [
      {
        id: "opinionated-service-templates",
        title: "Opinionated Multi-Language Service Scaffolding",
        tag: "Service Architecture",
        badge: "Go, Python, Node & Java",
        latencyBadge: "Production-Ready",
        desc: "Curates enterprise-grade boilerplate templates for Go, FastAPI, Next.js, and Spring Boot with standardized project structures, error handling, and health probes.",
        stats: [
          "Pre-configured directory structures adhering to clean architecture and DDD patterns",
          "Includes standardized database migration scripts (Flyway / Alembic / Goose)",
          "Pre-configured linter rules, formatters, and git pre-commit hooks"
        ],
        terminal: {
          command: "golden_path.scaffold({ type: 'fastapi-microservice', database: 'postgresql' })",
          status: "SCAFFOLDED WITH ZERO WARNINGS",
          logs: [
            { type: "comment", text: "// Generating opinionated Python FastAPI service" },
            { type: "step", text: "> configured Poetry package manager with strict dependency locks" },
            { type: "step", text: "> pre-configured Alembic database migrations and asyncpg connection pool" },
            { type: "success", text: "> Dockerfile distroless build tested: passed in 18 seconds" }
          ]
        }
      },
      {
        id: "baked-in-observability-telemetry",
        title: "Pre-Wired Observability & Alerting Templates",
        tag: "Day-1 Observability",
        badge: "OpenTelemetry Pre-Configured",
        latencyBadge: "Zero Configuration",
        desc: "Ensures every new microservice comes out of the box with OpenTelemetry tracing, Prometheus metrics endpoints, structured JSON logging, and pre-built Grafana dashboards.",
        stats: [
          "Developers never have to spend hours setting up Prometheus scrapers or log forwarders",
          "Pre-built Grafana dashboard templates automatically provisioned for every service",
          "Default SLO alerts paged directly to the owning team's Slack and PagerDuty"
        ],
        terminal: {
          command: "telemetry_bootstrapper.apply({ service_name: 'orders-worker' })",
          status: "OBSERVABILITY CONFIGURED",
          logs: [
            { type: "comment", text: "// Injecting standardized telemetry middleware" },
            { type: "step", text: "> instrumented OpenTelemetry auto-tracing on all HTTP routes" },
            { type: "step", text: "> provisioned service dashboard in Grafana: 'Orders Worker - SRE View'" },
            { type: "success", text: "> created Alertmanager rules: p99 latency > 200ms triggers Slack alert" }
          ]
        }
      },
      {
        id: "hardened-docker-k8s-manifests",
        title: "Hardened Container & Kubernetes Manifests",
        tag: "Infrastructure Scaffolding",
        badge: "Helm & Kustomize Blueprints",
        latencyBadge: "CIS Benchmark Hardened",
        desc: "Includes pre-configured, production-hardened Dockerfiles, Helm charts, and Kustomize manifests with optimal CPU/memory limits, readiness probes, and PodDisruptionBudgets.",
        stats: [
          "Multi-stage distroless Dockerfiles delivering sub-30MB container images",
          "Kubernetes manifests pre-configured with PodDisruptionBudgets ensuring zero-downtime cluster nodes",
          "Pre-configured Horizontal Pod Autoscaler (HPA) rules scaling pods based on CPU/traffic"
        ],
        terminal: {
          command: "k8s_blueprint.validate({ chart: './helm/service-chart' })",
          status: "MANIFESTS VALIDATED (100% COMPLIANT)",
          logs: [
            { type: "comment", text: "// Inspecting Helm chart security parameters" },
            { type: "step", text: "> verified: securityContext.runAsNonRoot = true" },
            { type: "step", text: "> verified: resource requests & limits declared for CPU and RAM" },
            { type: "success", text: "> Kyverno policy validation: passed with zero warnings" }
          ]
        }
      },
      {
        id: "automated-cicd-github-templates",
        title: "Automated CI/CD Workflows & OIDC Integration",
        tag: "Pipeline Scaffolding",
        badge: "GitHub Actions Blueprints",
        latencyBadge: "Plug-and-Play CI",
        desc: "Packages complete, battle-tested GitHub Actions and GitLab CI workflows with automated unit testing, SonarQube SAST, Trivy container scanning, and OIDC cloud deployment.",
        stats: [
          "Eliminates the risk of developers writing insecure or un-cached CI/CD pipelines",
          "Includes automated semantic release, changelog creation, and container registry publishing",
          "Pre-wired with short-lived OIDC role assumption for secure AWS/Azure deployments"
        ],
        terminal: {
          command: "workflow_generator.generate({ provider: 'github_actions', cloud: 'aws' })",
          status: "WORKFLOW GENERATED: .github/workflows/ci.yml",
          logs: [
            { type: "comment", text: "// Generating reusable enterprise workflow file" },
            { type: "step", text: "> added parallel test matrix with remote caching" },
            { type: "step", text: "> configured OIDC authentication to AWS ECR" },
            { type: "success", text: "> automated PR security gate wired and verified" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Select Template", tag: "FastAPI / Go / Next", desc: "Select verified architectural framework matching the project's requirements.", iconName: "Terminal" },
      { step: "02", title: "Generate Code", tag: "Clean Architecture", desc: "Generates project boilerplate with clean directory structure and dependencies.", iconName: "Code2" },
      { step: "03", title: "Inject Telemetry", tag: "OpenTelemetry", desc: "Pre-wires structured logging, Prometheus metrics, and distributed tracing.", iconName: "Activity" },
      { step: "04", title: "Bake Manifests", tag: "Helm & Docker", desc: "Packages hardened multi-stage Dockerfiles and validated Kubernetes charts.", iconName: "Layers" },
      { step: "05", title: "Pipeline Ready", tag: "CI/CD Green", desc: "Repository pushes to GitHub with green CI pipeline on Day 1.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Code2", title: "Multi-Language Golden Templates", tags: ["Go", "Python FastAPI", "Next.js", "Spring Boot"], desc: "Equip teams with production-hardened boilerplate templates featuring clean architecture, dependency injection, and strict typing." },
      { iconName: "Activity", title: "Pre-Wired Day-1 Observability", tags: ["OpenTelemetry", "Prometheus", "Grafana Dashboards"], desc: "Every new service launches with tracing, metrics endpoints, and pre-built Grafana dashboards already working from the very first commit." },
      { iconName: "Layers", title: "Hardened Kubernetes Manifests", tags: ["Helm", "Kustomize", "PodDisruptionBudget"], desc: "Eliminate deployment misconfigurations with pre-written Helm charts declaring readiness probes, resource limits, and auto-scalers." },
      { iconName: "Zap", title: "Turnkey CI/CD Pipelines", tags: ["GitHub Actions", "OIDC Security", "Fast Caching"], desc: "Ship with plug-and-play CI/CD workflows that run automated tests, vulnerability scans, and container signing without manual setup." },
      { iconName: "ShieldCheck", title: "Pre-Approved Security Architecture", tags: ["Fast-Track Reviews", "CIS Hardened", "Zero Vulnerabilities"], desc: "Bypass lengthy architecture review meetings. Services built on Golden Paths are pre-certified as compliant with enterprise security standards." },
      { iconName: "RefreshCw", title: "Automated Template Upgrades", tags: ["Renovate", "Template Sync", "Continuous Evolution"], desc: "Keep downstream services modern. When the platform team updates security libraries in a Golden Path, PRs automatically propagate to child repos." }
    ],
    techStack: [
      { category: "Templating Engines", items: ["Cookiecutter", "Copier", "Backstage Software Templates", "Yeoman"] },
      { category: "Language Runtimes", items: ["Python 3.12 (FastAPI)", "Go 1.23", "TypeScript (Node 20 / Next.js)", "Java 21 (Spring Boot)"] },
      { category: "Infrastructure Blueprints", items: ["Helm v3", "Kustomize", "Terraform Modules", "Docker Compose"] },
      { category: "CI/CD & Security", items: ["GitHub Actions", "GitLab CI", "SonarQube", "Trivy", "Gitleaks"] },
      { category: "Telemetry Templates", items: ["OpenTelemetry SDKs", "Prometheus Client", "Grafana JSON Dashboards"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Chaotic Copy-Paste Architecture",
      beforePoints: [
        "Developers copy-pasting outdated boilerplate code from random legacy projects.",
        "Dozens of different logging formats making centralized log searching a nightmare.",
        "Missing readiness probes causing downtime during routine Kubernetes node updates.",
        "Waiting weeks for InfoSec teams to approve custom, non-standard architectures."
      ],
      afterTitle: "Devopstrio Golden Path Architecture",
      afterPoints: [
        "Standardized, opinionated templates delivering production-ready services in 15 minutes.",
        "Unified structured logging and OpenTelemetry tracing pre-wired on Day 1.",
        "Hardened Kubernetes manifests with optimal resource limits and auto-healing probes.",
        "Instant InfoSec approval because services are built on pre-certified enterprise patterns."
      ]
    },
    faqs: [
      { q: "What is a 'Golden Path' in software engineering?", a: "A Golden Path is an opinionated, supported, and automated route to building and deploying software. It is not an enforced mandate that restricts developers, but rather the easiest, fastest, and most reliable way to ship software because all the security, CI/CD, and monitoring plumbing is solved for them." },
      { q: "How do Golden Paths speed up new service delivery?", a: "Historically, creating a new microservice took 1 to 2 weeks of setup: configuring Dockerfiles, setting up CI/CD, creating Kubernetes manifests, and configuring monitoring. A Golden Path template automates all of this, allowing an engineer to have a live, monitored service in production in 15 minutes." },
      { q: "What happens when security guidelines change? Do templates leave old services behind?", a: "We implement template synchronization tools (like Copier or Renovate). When the platform engineering team updates a library, adds a new security gate, or upgrades a base Docker image in the template, automated pull requests are dispatched to all downstream service repositories." },
      { q: "Can engineering teams customize their services beyond the Golden Path template?", a: "Yes. Golden Paths provide the foundational scaffolding (logging, metrics, Docker, CI). Developers have full freedom to write their custom business logic, choose database libraries, and add custom APIs within the standardized architecture." },
      { q: "How do you decide which programming languages to create Golden Paths for?", a: "We typically identify the 2 or 3 primary languages currently driving 90%+ of your enterprise applications (for example, TypeScript for frontends, Python for AI/data, and Go or Java for high-throughput backends) and build world-class templates for those first." }
    ]
  },

  "environment-automation": {
    slug: "environment-automation",
    pillarSlug: "platform-engineering",
    pillarName: "Platform Engineering",
    title: "Environment Automation",
    tag: "Infrastructure Lifecycles",
    badge: "vcluster, Ephemeral Sandboxes & Cloud Cost Controls",
    subtitle: "Automate the entire lifecycle of development, staging, and preview environments. Spin up lightweight, isolated Kubernetes environments on demand and auto-hibernate idle resources.",
    metrics: [
      { val: "< 60s", label: "Virtual Cluster Creation", sub: "vcluster lightweight isolation" },
      { val: "70%", label: "Staging Cloud Spend Cut", sub: "Automated off-hours hibernation" },
      { val: "0", label: "Staging Bottleneck Delays", sub: "Unlimited on-demand environments" },
      { val: "100%", label: "Environment Parity", sub: "Identical production manifests" }
    ],
    capabilities: [
      {
        id: "vcluster-virtual-clusters",
        title: "Virtual Kubernetes Clusters (vcluster)",
        tag: "Cluster Virtualization",
        badge: "vcluster Technology",
        latencyBadge: "< 60s Creation",
        desc: "Provisions fully isolated, multi-tenant virtual Kubernetes clusters running inside a single physical host cluster namespace, slashing cluster costs by over 70%.",
        stats: [
          "Each developer gets their own dedicated virtual API server and control plane in under a minute",
          "Developers can create CRDs, namespaces, and install Helm charts without admin permissions on the host",
          "Shares physical nodes and ingress controllers to minimize cloud compute and IP waste"
        ],
        terminal: {
          command: "vcluster.create({ name: 'dev-workspace-alex', namespace: 'team-checkout' })",
          status: "VIRTUAL CLUSTER READY (42s)",
          logs: [
            { type: "comment", text: "// Initializing virtual Kubernetes control plane" },
            { type: "step", text: "> deployed lightweight k3s virtual API server inside host namespace" },
            { type: "step", text: "> synchronized syncer controller: mapped virtual pods to host nodes" },
            { type: "success", text: "> kubeconfig generated: full virtual admin access granted to developer" }
          ]
        }
      },
      {
        id: "automated-off-hours-hibernation",
        title: "Automated Off-Hours Environment Hibernation",
        tag: "FinOps Automation",
        badge: "Kube-Green & Auto-Sleep",
        latencyBadge: "Zero Weekend Waste",
        desc: "Automatically scales down development, testing, and staging pods and nodes to zero replicas during nights and weekends, eliminating up to 70% of non-production cloud spend.",
        stats: [
          "Configurable schedules (e.g., active 08:00 - 19:00 Monday to Friday)",
          "One-click wake-up button in Slack or portal if developers need to work off-hours",
          "Safeguards against runaway cloud budgets caused by forgotten staging environments"
        ],
        terminal: {
          command: "kube_green.hibernate({ schedule: 'nights_and_weekends', namespace: 'staging' })",
          status: "HIBERNATION SCHEDULE ACTIVE",
          logs: [
            { type: "comment", text: "// Enforcing off-hours resource conservation policy" },
            { type: "step", text: "> scaled 142 staging deployments and statefulsets to 0 replicas (19:00)" },
            { type: "step", text: "> Karpenter drained and terminated 8 idle EC2 worker nodes" },
            { type: "success", text: "> saving £3,800 / month across development clusters" }
          ]
        }
      },
      {
        id: "data-sanitization-mocking",
        title: "Automated Database Seeding & Mock Services",
        tag: "Test Data Management",
        badge: "Synthetic Data & WireMock",
        latencyBadge: "Instant Test Data",
        desc: "Populates ephemeral environments automatically with synthetic, anonymized test data and pre-configured mock services for third-party APIs (Stripe, Twilio, Salesforce).",
        stats: [
          "Mock API stubs simulating edge errors, rate limits, and slow network responses",
          "Fast database seeders generating thousands of realistic relational records in seconds",
          "Guarantees that no real production secrets or PII ever exist in testing sandboxes"
        ],
        terminal: {
          command: "data_seeder.seed_environment({ env: 'preview-pr-412', size: 'medium' })",
          status: "DATA SEEDED (10,000 SYNTHETIC RECORDS)",
          logs: [
            { type: "comment", text: "// Generating synthetic test data with Faker" },
            { type: "step", text: "> populated 1,000 customers, 5,000 orders, 10,000 line items" },
            { type: "step", text: "> WireMock initialized: stubbed Stripe and SendGrid API endpoints" },
            { type: "success", text: "> environment fully operational for functional testing" }
          ]
        }
      },
      {
        id: "multi-environment-parity-sync",
        title: "Continuous Multi-Environment Parity Sync",
        tag: "Configuration Parity",
        badge: "Kustomize Overlays",
        latencyBadge: "Zero Configuration Drift",
        desc: "Maintains 100% architectural parity between development, staging, and production using Kustomize overlays and Helm values, eliminating 'works on my machine' surprises.",
        stats: [
          "Base manifests shared across all environments with environment-specific patch overlays",
          "Ensures staging runs the identical software versions, proxy rules, and ingress configs as production",
          "Catches configuration and permission discrepancies before code ever reaches production"
        ],
        terminal: {
          command: "kustomize.build({ overlay: 'overlays/staging' })",
          status: "PARITY VERIFIED (PRODUCTION EQUIVALENT)",
          logs: [
            { type: "comment", text: "// Validating staging overlay against production base" },
            { type: "step", text: "> validated 42 microservice manifests against common base" },
            { type: "step", text: "> environment differences confined strictly to replica counts & URLs" },
            { type: "success", text: "> zero architectural drift detected between staging and prod" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Trigger Event", tag: "PR / On-Demand", desc: "Pull request open or manual portal button triggers environment creation.", iconName: "Terminal" },
      { step: "02", title: "vcluster Spawn", tag: "Virtual Cluster", desc: "Spawns isolated virtual Kubernetes control plane inside host namespace in <60s.", iconName: "Layers" },
      { step: "03", title: "Deploy Manifests", tag: "GitOps Sync", desc: "Deploys application services using Kustomize environment overlays.", iconName: "Workflow" },
      { step: "04", title: "Seed Test Data", tag: "Synthetic Mocks", desc: "Seeds database with synthetic test data and configures third-party API mocks.", iconName: "Database" },
      { step: "05", title: "Auto-Teardown", tag: "TTL Expiration", desc: "Monitors activity and terminates environment automatically when PR merges.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Layers", title: "Virtual Kubernetes Clusters (vcluster)", tags: ["vcluster", "Sub-60s Creation", "70% Cost Cut"], desc: "Provide every engineer with their own dedicated, isolated virtual Kubernetes cluster in under a minute without the massive expense of separate physical clusters." },
      { iconName: "Sliders", title: "Automated Off-Hours Hibernation", tags: ["Kube-Green", "Auto-Sleep", "FinOps Savings"], desc: "Automatically shut down staging and dev environments at night and over weekends, instantly slashing non-production cloud infrastructure bills by 70%." },
      { iconName: "Zap", title: "Zero Staging Bottlenecks", tags: ["On-Demand Envs", "Infinite Scaling", "Fast Testing"], desc: "Never fight over a shared, broken staging environment again. Give every developer their own isolated sandbox to test features in parallel." },
      { iconName: "Database", title: "Synthetic Data & API Mocking", tags: ["WireMock", "Synthetic Seeding", "Zero PII"], desc: "Populate test environments instantly with realistic synthetic data and stubbed third-party APIs, testing edge cases without incurring external API fees." },
      { iconName: "CheckCircle2", title: "100% Dev-to-Prod Parity", tags: ["Kustomize Overlays", "Helm Values", "Identical Manifests"], desc: "Eliminate 'it worked on my machine' bugs forever by ensuring development and staging environments run identical manifests to production." },
      { iconName: "Activity", title: "Automated Lifecycle Teardown", tags: ["TTL Policies", "Zero Zombie Envs", "Cloud Hygiene"], desc: "Enforce strict Time-to-Live (TTL) policies that automatically decommission abandoned test environments, keeping cloud accounts lean and secure." }
    ],
    techStack: [
      { category: "Virtual Clustering", items: ["vcluster (Loft Labs)", "k3s", "vcluster Syncer", "KinD"] },
      { category: "Hibernation & FinOps", items: ["kube-green", "KEDA Auto-Stop", "AWS Instance Scheduler"] },
      { category: "Test Data & Mocking", items: ["WireMock", "MockServer", "Faker.js", "Synthea"] },
      { category: "Configuration Parity", items: ["Kustomize", "Helm v3", "ArgoCD ApplicationSets"] },
      { category: "DNS & Ingress", items: ["ExternalDNS", "cert-manager", "NGINX Ingress", "Traefik"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Shared, Broken Staging Environments",
      beforePoints: [
        "A single shared staging environment constantly broken by conflicting developer changes.",
        "Staging servers running 24/7/365 at full capacity, burning thousands in idle weekend costs.",
        "Developers testing code with stale, out-of-date data from three years ago.",
        "Massive configuration drift causing code that worked in staging to crash in production."
      ],
      afterTitle: "Devopstrio Automated Environments",
      afterPoints: [
        "On-demand virtual clusters (vcluster) created in under 60 seconds for every developer.",
        "Automated off-hours hibernation slashing non-production cloud spend by up to 70%.",
        "Realistic synthetic data seeders providing fresh test data with zero PII exposure.",
        "100% declarative Kustomize parity guaranteeing identical behavior between staging and prod."
      ]
    },
    faqs: [
      { q: "What is a virtual Kubernetes cluster (vcluster) and how does it save money?", a: "A physical Kubernetes cluster requires dedicated control plane nodes, multiple worker nodes, and cloud load balancers, costing hundreds of dollars per month per environment. A virtual cluster (vcluster) runs as a lightweight pod inside a shared host cluster. It creates an isolated Kubernetes API for the developer in under 60 seconds while sharing underlying physical compute, reducing costs by 70-80%." },
      { q: "How does automated hibernation work without annoying engineers?", a: "We configure schedules (e.g., scaling staging deployments to zero at 19:00). If an engineer needs to work late or on a weekend, they can click a single 'Wake Up' button in Slack or the developer portal, and the environment resumes in under 60 seconds." },
      { q: "Why should we use mock services instead of connecting to real third-party staging APIs?", a: "Third-party staging environments (like sandbox payment processors or SMS gateways) are notoriously flaky, rate-limited, and slow. By embedding automated mocks (like WireMock), tests run 10x faster, can simulate rare edge-case errors (like card declines or 504 timeouts) on demand, and never incur transaction fees." },
      { q: "How do you ensure developers don't leave dozens of environments running?", a: "Every environment created via our automation has an enforced Time-to-Live (TTL) tag. When an environment reaches its expiration (e.g., 24 hours) or the associated pull request is merged, automated cleanup controllers terminate all cloud resources automatically." },
      { q: "Can virtual clusters run different Kubernetes versions than the host?", a: "Yes. vcluster runs its own decoupled API server (such as k3s or vanilla Kubernetes). A host cluster running Kubernetes 1.28 can host virtual clusters running Kubernetes 1.29 or 1.30, allowing teams to test upcoming Kubernetes upgrades safely." }
    ]
  }
};
