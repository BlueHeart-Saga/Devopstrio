import { CapabilityPageData } from "./types";

export const devopsCapabilities: Record<string, CapabilityPageData> = {
  "continuous-delivery-cicd": {
    slug: "continuous-delivery-cicd",
    pillarSlug: "devops-toolchain",
    pillarName: "DevOps Toolchain",
    title: "Continuous Delivery (CI/CD)",
    tag: "Pipeline Automation",
    badge: "GitHub Actions, GitLab CI & Automated Security Gates",
    subtitle: "Accelerate software delivery velocity from git push to production. Built on ephemeral container runners, smart caching, matrix builds, and automated policy gates.",
    metrics: [
      { val: "< 8min", label: "Average Pipeline Duration", sub: "Distributed caching & parallelism" },
      { val: "100%", label: "Automated Test Enforcement", sub: "Zero unverified code in main" },
      { val: "0", label: "Hardcoded CI/CD Secrets", sub: "OIDC short-lived credentials" },
      { val: "20x", label: "Deployment Frequency", sub: "Continuous production delivery" }
    ],
    capabilities: [
      {
        id: "ephemeral-runner-clusters",
        title: "Ephemeral Auto-Scaling Runner Clusters",
        tag: "Runner Infrastructure",
        badge: "Kubernetes Action Runners",
        latencyBadge: "< 10s Runner Warmup",
        desc: "Executes CI/CD pipelines inside isolated, single-use Kubernetes containers that scale from zero to hundreds of concurrent jobs on demand and self-destruct after completion.",
        stats: [
          "Eliminates noisy neighbor build slowdowns and persistent state leakage",
          "Auto-scaling runner pools powered by Kubernetes Action Runner Controller (ARC)",
          "Spot instance runner scheduling reducing pipeline cloud compute bills by 65%"
        ],
        terminal: {
          command: "arc_controller.scale({ queued_workflows: 48, runner_image: 'node20-go-runner' })",
          status: "SPAWNED 48 EPHEMERAL PODS",
          logs: [
            { type: "comment", text: "// Scaling Kubernetes Action Runner Controller (ARC)" },
            { type: "step", text: "> launched 48 isolated container runners on spot nodes" },
            { type: "step", text: "> warmed Docker layer caches via shared local SSD volumes" },
            { type: "success", text: "> all 48 queued jobs started execution in 8.4 seconds" }
          ]
        }
      },
      {
        id: "distributed-caching-matrix",
        title: "Distributed Build Caching & Parallel Matrix Execution",
        tag: "Speed Optimization",
        badge: "Turborepo & Gradle Cache",
        latencyBadge: "70% Faster Builds",
        desc: "Slashes build times across massive monorepos using remote distributed computation caches, dependency graph pruning, and parallel test execution matrices.",
        stats: [
          "Remote caching ensuring identical code targets are compiled once and shared across all devs",
          "Test sharding distributing thousands of test cases across 16 parallel runner nodes",
          "Smart monorepo change detection executing pipelines only for modified packages"
        ],
        terminal: {
          command: "turbo.run({ target: 'build test', filter: '...[origin/main]' })",
          status: "CACHE HIT: 18/22 TASKS",
          logs: [
            { type: "comment", text: "// Querying remote S3 distributed build cache" },
            { type: "step", text: "> 18 packages unchanged: restored compiled artifacts from cache (0.8s)" },
            { type: "step", text: "> compiled 4 modified packages across parallel worker threads" },
            { type: "success", text: "> pipeline finished in 1m 42s (saved 14 minutes of build time)" }
          ]
        }
      },
      {
        id: "oidc-zero-secret-auth",
        title: "OIDC Cloud Authentication & Secretless CI",
        tag: "Pipeline Security",
        badge: "Zero Static Secrets",
        latencyBadge: "Short-Lived STS Tokens",
        desc: "Eliminates high-risk static cloud credentials stored in CI/CD settings. Authenticates pipelines to AWS, Azure, and GCP using cryptographic OpenID Connect (OIDC) federation.",
        stats: [
          "Zero permanent AWS access keys or Azure client secrets stored in repository settings",
          "Short-lived (15-minute) cryptographic tokens scoped strictly to branch and repository",
          "Completely closes the primary attack vector for supply chain credential leaks"
        ],
        terminal: {
          command: "aws-actions/configure-aws-credentials@v4",
          status: "OIDC TOKEN ASSUMED (AWS_STS)",
          logs: [
            { type: "comment", text: "// Performing OpenID Connect federation handshake" },
            { type: "step", text: "> validated GitHub Actions cryptographic JWT token signature" },
            { type: "step", text: "> verified claim: repo:devopstrio/core-api:ref:refs/heads/main" },
            { type: "success", text: "> issued temporary 15-minute STS credentials for deployment" }
          ]
        }
      },
      {
        id: "automated-quality-security-gates",
        title: "Automated SAST & Quality Gate Enforcement",
        tag: "Shift-Left Security",
        badge: "SonarQube & Trivy",
        latencyBadge: "Zero Unchecked Merges",
        desc: "Injects automated static application security testing (SAST), software composition analysis (SCA), and test coverage gates directly into pull request checks.",
        stats: [
          "Blocks pull request merges if SonarQube test coverage falls below 80%",
          "Automated secret detection (Gitleaks) blocking accidental API key commits instantly",
          "Container vulnerability scanning with Trivy gating promotion to staging registries"
        ],
        terminal: {
          command: "security_gate.evaluate({ pr: 412, author: 'dev_team' })",
          status: "PULL REQUEST GATES PASSED",
          logs: [
            { type: "comment", text: "// Running automated pull request security checks" },
            { type: "step", text: "> gitleaks: zero secrets or private keys detected (clean)" },
            { type: "step", text: "> sonarqube: code coverage 88.4% | technical debt: 0 days" },
            { type: "success", text: "> pull request approved for automated merge to main" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Git Push", tag: "Branch Trigger", desc: "Developer pushes code; webhook triggers ephemeral Kubernetes runner pod.", iconName: "GitBranch" },
      { step: "02", title: "OIDC Auth", tag: "Short-Lived Token", desc: "Pipeline acquires short-lived cloud credentials via cryptographic OIDC tokens.", iconName: "Lock" },
      { step: "03", title: "Parallel Build", tag: "Remote Caching", desc: "Builds code and restores cached artifacts from distributed S3 storage.", iconName: "Zap" },
      { step: "04", title: "Security Gates", tag: "SAST & Tests", desc: "Executes unit tests, SAST code scans, and container vulnerability gates.", iconName: "ShieldCheck" },
      { step: "05", title: "Continuous Deploy", tag: "Automated Delivery", desc: "Promotes signed artifacts to production registries and notifies team on Slack.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Zap", title: "Sub-8 Minute Pipeline Execution", tags: ["Remote Caching", "Parallel Sharding", "Turborepo"], desc: "Slash painful 45-minute build times down to minutes using distributed caching, parallel test matrices, and incremental compilation." },
      { iconName: "Server", title: "Ephemeral Auto-Scaling Runners", tags: ["Kubernetes ARC", "Spot Instances", "Self-Destructing"], desc: "Run builds on isolated, single-use container runners that launch in seconds and self-destruct after completion, cutting cloud spend by 65%." },
      { iconName: "Lock", title: "Secretless OIDC Cloud Federation", tags: ["AWS OIDC", "Azure Federated Credentials", "No Static Keys"], desc: "Eliminate static cloud credentials from your CI repositories. Authenticate to AWS, Azure, and GCP using ephemeral short-lived tokens." },
      { iconName: "ShieldCheck", title: "Automated Shift-Left Security", tags: ["SonarQube", "Gitleaks", "Trivy SAST"], desc: "Catch security vulnerabilities, leaked API secrets, and code quality issues automatically before pull requests can be merged into main." },
      { iconName: "Workflow", title: "Reusable Pipeline Templates", tags: ["GitHub Actions Workflows", "GitLab CI Includes", "Governance"], desc: "Standardize CI/CD pipelines across dozens of engineering repositories with centrally governed, reusable pipeline templates and compliance rules." },
      { iconName: "Activity", title: "Pipeline Metrics & DORA Telemetry", tags: ["Deployment Frequency", "Lead Time for Changes", "DORA Metrics"], desc: "Track organizational engineering velocity with automated DORA metrics measuring deployment frequency, change failure rates, and lead time." }
    ],
    techStack: [
      { category: "CI/CD Platforms", items: ["GitHub Actions Enterprise", "GitLab CI/CD", "Azure Pipelines", "Jenkins Server", "CircleCI"] },
      { category: "Runner Orchestration", items: ["Actions Runner Controller (ARC)", "Kubernetes Runners", "AWS Spot Instances", "Docker Buildx"] },
      { category: "Build Caching & Monorepos", items: ["Turborepo", "Nx Monorepo", "Bazel", "Gradle Enterprise", "sccache"] },
      { category: "Security & Secret Gates", items: ["Gitleaks", "SonarQube SAST", "Snyk", "Trivy", "Sigstore Cosign"] },
      { category: "Cloud Authentication", items: ["AWS STS (OIDC)", "Azure Federated Identity", "GCP Workload Identity Federation"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Fragile Pipelines & Static Secrets",
      beforePoints: [
        "Shared static Jenkins servers clogged with build queues and state contamination.",
        "Permanent AWS admin secret keys stored in plain text inside CI repository settings.",
        "Painful 45-minute build times causing developer frustration and delayed releases.",
        "Unchecked code merged directly to main without automated test or security gates."
      ],
      afterTitle: "Devopstrio Modern CI/CD Platform",
      afterPoints: [
        "Ephemeral auto-scaling runners launching in seconds and destroying themselves after use.",
        "100% secretless OIDC authentication issuing temporary, short-lived cloud credentials.",
        "Sub-8-minute pipelines powered by distributed caching and parallel test sharding.",
        "Strict automated security gates blocking code flaws, secrets, and CVEs automatically."
      ]
    },
    faqs: [
      { q: "Why should we transition away from permanent AWS access keys in CI/CD?", a: "Static access keys stored in CI settings are a primary target for attackers. If a repository or developer account is breached, those keys can be stolen and used indefinitely. OIDC (OpenID Connect) issues ephemeral credentials that expire after 15 minutes and can only be used by the specific approved repository branch, eliminating the risk." },
      { q: "How does Actions Runner Controller (ARC) reduce CI/CD infrastructure costs?", a: "ARC runs on Kubernetes and monitors your GitHub Actions job queue. When jobs are waiting, it launches ephemeral runner pods on cheap cloud Spot instances. When queues clear, it scales down to zero pods. Teams typically save 60-70% compared to paying for static dedicated VMs." },
      { q: "What is Remote Build Caching and how does it save developer time?", a: "Tools like Turborepo or Gradle hash your source files and task inputs. If an exact set of files was already compiled by a teammate or a previous CI run, the build engine downloads the finished compiled artifact directly from an S3 bucket in milliseconds instead of re-compiling." },
      { q: "How do you prevent broken builds from blocking the main production branch?", a: "We configure protected branch rules requiring all pull requests to pass automated CI tests, SonarQube quality gates, and code review approvals before GitHub or GitLab allows the merge button to unlock." },
      { q: "Can we migrate our legacy Jenkins pipelines to modern GitHub Actions or GitLab CI?", a: "Yes. We specialize in decomposing monolithic Jenkinsfiles into modular, reusable GitHub Actions or GitLab CI workflows, translating complex build matrices and integrating modern containerized runners." }
    ]
  },

  "declarative-infrastructure-as-code": {
    slug: "declarative-infrastructure-as-code",
    pillarSlug: "devops-toolchain",
    pillarName: "DevOps Toolchain",
    title: "Declarative Infrastructure as Code (IaC)",
    tag: "Cloud Automation",
    badge: "Terraform, OpenTofu, Ansible & Terragrunt",
    subtitle: "Manage 100% of cloud resources through code. Built on Terraform, OpenTofu, Terragrunt, policy-as-code security, and automated state drift detection across multi-cloud environments.",
    metrics: [
      { val: "100%", label: "Declarative Code Coverage", sub: "Zero manual cloud console clicks" },
      { val: "< 10min", label: "Environment Spin-up Time", sub: "Complete sandbox provisioning" },
      { val: "0", label: "Unchecked Configuration Drift", sub: "Automated drift reconciliation" },
      { val: "68%", label: "Code Reusability Ratio", sub: "Modularized Terragrunt patterns" }
    ],
    capabilities: [
      {
        id: "modular-terragrunt-architecture",
        title: "DRY Terraform & OpenTofu Architecture (Terragrunt)",
        tag: "IaC Architecture",
        badge: "Don't Repeat Yourself",
        latencyBadge: "Zero Code Duplication",
        desc: "Organizes enterprise cloud infrastructure into modular, reusable components using Terragrunt, keeping backend configurations, provider blocks, and remote state locks completely DRY.",
        stats: [
          "Eliminates copy-pasting Terraform code between dev, staging, and prod environments",
          "Centralized remote state locking with S3 and DynamoDB preventing concurrent state corruption",
          "Automated dependency resolution deploying VPCs, EKS clusters, and databases in sequence"
        ],
        terminal: {
          command: "terragrunt.run_all.apply({ environment: 'production-eu' })",
          status: "INFRASTRUCTURE APPLIED (32 MODULES)",
          logs: [
            { type: "comment", text: "// Resolving module dependency graph" },
            { type: "step", text: "> step 1: provisioned base VPC networking and Transit Gateway" },
            { type: "step", text: "> step 2: deployed EKS 1.30 Kubernetes cluster with Karpenter" },
            { type: "step", text: "> step 3: provisioned RDS PostgreSQL multi-AZ database" },
            { type: "success", text: "> 100% of infrastructure declared in code; state locked securely" }
          ]
        }
      },
      {
        id: "policy-as-code-guardrails",
        title: "Policy-as-Code Security Guardrails (Trivy & OPA)",
        tag: "Shift-Left Security",
        badge: "OPA & tfsec",
        latencyBadge: "Pre-Flight Validation",
        desc: "Validates infrastructure code against CIS Benchmarks, SOC2 compliance, and enterprise cost policies during CI before any cloud resources can be modified or created.",
        stats: [
          "Blocks public S3 buckets, unrestricted 0.0.0.0/0 security groups, and unencrypted disks",
          "Automated Infracost estimates predicting cloud invoice changes directly on pull requests",
          "OPA Rego and Checkov policies preventing costly infrastructure misconfigurations"
        ],
        terminal: {
          command: "checkov.scan({ directory: './terraform', framework: 'terraform' })",
          status: "PASSED: 124 CHECKS (0 VIOLATIONS)",
          logs: [
            { type: "comment", text: "// Running automated CIS Benchmark compliance scan" },
            { type: "step", text: "> CKV_AWS_19: S3 bucket encrypted with customer-managed KMS (PASSED)" },
            { type: "step", text: "> CKV_AWS_260: security group restricts port 22 SSH ingress (PASSED)" },
            { type: "success", text: "> infracost: estimated monthly change +£42.00 (within budget)" }
          ]
        }
      },
      {
        id: "automated-state-drift-detection",
        title: "Automated State Drift Detection & Remediation",
        tag: "Governance",
        badge: "Continuous Reconciliation",
        latencyBadge: "Hourly Drift Scans",
        desc: "Detects unauthorized out-of-band manual changes made in cloud web consoles, alerting security teams and automatically reconciling infrastructure back to the approved Git state.",
        stats: [
          "Hourly automated drift evaluation running non-destructive terraform plan routines",
          "Alerts dispatched to Slack and PagerDuty if manual modifications are detected",
          "Automated pipeline remediation reconciling live infrastructure back to Git commits"
        ],
        terminal: {
          command: "drift_sentinel.scan({ cloud_account: 'aws-production-core' })",
          status: "DRIFT DETECTED: EC2_SECURITY_GROUP",
          logs: [
            { type: "comment", text: "// Inspecting live cloud resources vs Terraform state" },
            { type: "step", text: "> manual change detected: port 8080 added via web console" },
            { type: "info", text: "> dispatched Slack alert #cloud-security: 'Unauthorized drift detected'" },
            { type: "success", text: "> auto-remediation: reconciled security group back to Git commit" }
          ]
        }
      },
      {
        id: "configuration-management-ansible",
        title: "Immutable OS Hardening & Configuration Management",
        tag: "OS Hardening",
        badge: "Ansible & Packer",
        latencyBadge: "CIS Level 2 Hardened",
        desc: "Builds hardened golden machine images (AMIs) using HashiCorp Packer and Ansible playbooks, ensuring underlying operating systems strictly satisfy CIS Level 2 standards.",
        stats: [
          "Automated monthly patching and kernel updates baking fresh golden AMIs",
          "Automated audit daemon (auditd) configuration and centralized syslog forwarding",
          "Zero manual SSH server management; all host configurations enforced via code"
        ],
        terminal: {
          command: "packer.build({ template: 'ubuntu_cis_hardened.pkr.hcl' })",
          status: "GOLDEN AMI BAKED (ami-08149f10a)",
          logs: [
            { type: "comment", text: "// Applying Ansible CIS Level 2 hardening playbook" },
            { type: "step", text: "> disabled legacy root login, enabled SSH certificate authority" },
            { type: "step", text: "> configured automated auditd file monitoring rules" },
            { type: "success", text: "> registered hardened golden image across 4 AWS regions" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Code Commit", tag: "Terragrunt HCL", desc: "Engineer modifies declarative infrastructure modules in Git.", iconName: "Code2" },
      { step: "02", title: "Security Gate", tag: "Checkov / OPA", desc: "Automated scan tests HCL for open security groups, unencrypted storage, and leaks.", iconName: "ShieldCheck" },
      { step: "03", title: "Cost Estimate", tag: "Infracost", desc: "Infracost comments projected monthly cost changes directly on the pull request.", iconName: "Zap" },
      { step: "04", title: "Peer Approval", tag: "Git Review", desc: "Senior cloud architect reviews terraform plan output and merges PR.", iconName: "CheckCircle2" },
      { step: "05", title: "Automated Apply", tag: "Terraform Apply", desc: "CI runner acquires state lock and applies infrastructure changes to the cloud.", iconName: "Server" }
    ],
    featureCards: [
      { iconName: "Code2", title: "DRY Modular Architecture", tags: ["Terragrunt", "Terraform Modules", "OpenTofu"], desc: "Maintain clean, reusable infrastructure code without duplicating configuration blocks across development, staging, and production environments." },
      { iconName: "ShieldCheck", title: "Automated Policy-as-Code Guardrails", tags: ["Checkov", "tfsec", "CIS Benchmarks"], desc: "Block insecure cloud configurations automatically before deployment, ensuring no unencrypted disks or open security groups ever deploy." },
      { iconName: "Zap", title: "Pull Request Cloud Cost Projections", tags: ["Infracost", "FinOps", "Budget Guard"], desc: "See the exact dollar impact of infrastructure changes directly in pull request comments before code is approved and provisioned." },
      { iconName: "RefreshCw", title: "Automated Drift Detection & Healing", tags: ["Drift Alarms", "State Locking", "Auto-Remediation"], desc: "Detect and overwrite unauthorized manual web console modifications automatically, keeping live cloud environments 100% true to Git." },
      { iconName: "Server", title: "Hardened Golden Image Pipelines", tags: ["Packer", "Ansible", "CIS Level 2"], desc: "Build automated, pre-hardened VM images (AMIs) with security agents, kernel patches, and monitoring pre-installed and certified." },
      { iconName: "Lock", title: "Cryptographic State Locking", tags: ["S3 WORM", "DynamoDB Locks", "State Encryption"], desc: "Safeguard infrastructure state files with server-side encryption, versioning, and atomic locking to prevent state corruption during concurrent applies." }
    ],
    techStack: [
      { category: "Infrastructure Orchestration", items: ["Terraform", "OpenTofu", "Terragrunt", "Pulumi", "AWS CDK"] },
      { category: "Configuration Management", items: ["Ansible Core", "HashiCorp Packer", "Cloud-Init", "Chef"] },
      { category: "Security & Policy-as-Code", items: ["Checkov", "tfsec", "Open Policy Agent (OPA)", "Trivy for IaC"] },
      { category: "Cost & FinOps", items: ["Infracost", "Vantage", "CloudHealth"] },
      { category: "State Storage & Locking", items: ["Amazon S3 / DynamoDB", "Azure Blob Storage", "Terraform Cloud"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Manual Console Clicks & Drift",
      beforePoints: [
        "Engineers clicking around in the AWS web console with zero audit records or documentation.",
        "Fear of touching infrastructure because nobody knows who created which server.",
        "Dev and Prod environments drifting apart, leading to unpredictable production outages.",
        "Accidentally opening S3 buckets to the public internet through manual human error."
      ],
      afterTitle: "Devopstrio Declarative IaC Platform",
      afterPoints: [
        "100% of cloud resources declared in version-controlled, peer-reviewed Git repositories.",
        "Ability to spin up complete identical staging and disaster recovery environments in 10 minutes.",
        "Automated drift detection reconciling out-of-band manual changes back to code.",
        "Strict Policy-as-Code guardrails preventing security misconfigurations before deployment."
      ]
    },
    faqs: [
      { q: "What is the difference between Terraform and OpenTofu?", a: "OpenTofu is an open-source, community-governed fork of Terraform created under the Linux Foundation following HashiCorp's license change to BSL. It is 100% backward-compatible with existing Terraform configurations, provider plugins, and modules." },
      { q: "Why should we use Terragrunt alongside Terraform?", a: "Terraform is great for defining single modules, but managing multiple environments (dev, stage, prod across multiple AWS accounts) often leads to thousands of lines of copy-pasted boilerplate code. Terragrunt keeps your configurations DRY (Don't Repeat Yourself), automatically handles remote state locks, and manages module execution dependencies." },
      { q: "What happens if someone manually changes a server setting in the AWS console?", a: "Our automated drift detection runs scheduled `plan` checks. When an out-of-band change is detected, an alert is dispatched to your security channel, and an automated reconciliation pipeline can overwrite the manual modification back to the approved Git state." },
      { q: "How does Infracost help control cloud spending?", a: "Infracost integrates into pull request workflows. It parses your modified Terraform files and posts a comment showing the exact monthly cost breakdown before and after the change (e.g., '+2x t4g.medium instances: +$48.20/month'), allowing managers to catch expensive changes before provisioning." },
      { q: "Can we import our existing, manually created cloud resources into Terraform?", a: "Yes. Using tools like `terraformer` and native `terraform import` blocks, we reverse-engineer existing cloud architectures into clean, modularized code files without causing any downtime to active production systems." }
    ]
  },

  "gitops-deployments": {
    slug: "gitops-deployments",
    pillarSlug: "devops-toolchain",
    pillarName: "DevOps Toolchain",
    title: "GitOps Deployments",
    tag: "Continuous Operations",
    badge: "ArgoCD, Flux v2 & Kubernetes Reconciliation",
    subtitle: "Operate Kubernetes clusters with declarative GitOps loops. Use Git as the single source of truth for all workloads, with automated drift correction, canary rollouts, and instant disaster recovery.",
    metrics: [
      { val: "100%", label: "Git Single Source of Truth", sub: "All cluster state declared in Git" },
      { val: "< 15s", label: "Sync & Reconciliation Speed", sub: "ArgoCD continuous control loop" },
      { val: "0 min", label: "Cluster Rebuild Duration", sub: "Complete one-click disaster recovery" },
      { val: "0", label: "Direct Cluster Write Access", sub: "Zero human kubectl access required" }
    ],
    capabilities: [
      {
        id: "argocd-control-loops",
        title: "ArgoCD Continuous Reconciliation Loops",
        tag: "GitOps Engine",
        badge: "Automated Self-Healing",
        latencyBadge: "< 15s Sync Interval",
        desc: "Continuously compares live cluster state against the declared state in Git. Automatically applies updates on commit merges and self-heals clusters if rogue drift occurs.",
        stats: [
          "Eliminates the need for CI pipelines to hold high-privilege cluster admin credentials",
          "Automated self-healing immediately reverting unauthorized manual kubectl modifications",
          "Visual web UI displaying full live application topology and pod health diagnostics"
        ],
        terminal: {
          command: "argocd.app.get({ app_name: 'payment-microservice' })",
          status: "HEALTH: HEALTHY | SYNC: SYNCED",
          logs: [
            { type: "comment", text: "// Running live cluster reconciliation loop" },
            { type: "step", text: "> desired state commit: 89f41a0 (branch: main)" },
            { type: "step", text: "> live state: 12 replicas running on EKS node pool 'arm64'" },
            { type: "success", text: "> cluster matches git repository 100% | zero drift detected" }
          ]
        }
      },
      {
        id: "progressive-canary-rollouts",
        title: "Progressive Delivery with Argo Rollouts",
        tag: "Release Safety",
        badge: "Automated Rollouts",
        latencyBadge: "Zero Downtime Cutover",
        desc: "Executes sophisticated canary releases with automated metric analysis. Gradually shifts live traffic (5% -> 25% -> 50% -> 100%) while inspecting error rates in Prometheus.",
        stats: [
          "Automated rollbacks triggered within seconds if latency spikes or HTTP 5xx errors occur",
          "Integrates with Service Meshes (Istio, Linkerd) and Ingress Controllers for smooth traffic split",
          "Completely removes the risk of bad code releases impacting your entire customer base"
        ],
        terminal: {
          command: "kubectl argo rollouts get rollout payment-api",
          status: "STEP 3/4: 50% CANARY TRAFFIC",
          logs: [
            { type: "comment", text: "// Evaluating Prometheus AnalysisTemplate metrics" },
            { type: "step", text: "> analysis query: http_error_rate < 0.05% (actual: 0.00%)" },
            { type: "step", text: "> analysis query: latency_p99 < 50ms (actual: 18.2ms)" },
            { type: "success", text: "> health checks passed: advancing traffic step to 100%" }
          ]
        }
      },
      {
        id: "one-click-disaster-recovery",
        title: "One-Click Cluster Disaster Recovery",
        tag: "High Availability",
        badge: "Cluster Rebuilds",
        latencyBadge: "< 10min Total Rebuild",
        desc: "Enables instant disaster recovery. If an entire cloud region or Kubernetes cluster is lost, a replacement cluster connects to Git and recreates all services in minutes.",
        stats: [
          "Zero manual post-mortem configurations; Git holds 100% of cluster specifications",
          "Cross-cluster replication verifying staging and production environments match",
          "Dramatically reduces Recovery Time Objective (RTO) and Recovery Point Objective (RPO)"
        ],
        terminal: {
          command: "argocd.cluster.bootstrap({ cluster: 'eks-backup-eu-central-1' })",
          status: "RECOVERED 142 MICROSERVICES",
          logs: [
            { type: "comment", text: "// Bootstrapping replacement cluster from Git repository" },
            { type: "step", text: "> deployed ingress controllers, cert-manager, and monitoring" },
            { type: "step", text: "> synchronized 142 microservice applications in parallel" },
            { type: "success", text: "> cluster fully restored and certified healthy in 7m 42s" }
          ]
        }
      },
      {
        id: "secret-management-sealed-secrets",
        title: "Git-Safe Secret Management (Sealed Secrets & Vault)",
        tag: "Secret Operations",
        badge: "Asymmetric Encryption",
        latencyBadge: "Git-Safe Secrets",
        desc: "Encrypts Kubernetes secrets asymmetrically into Git-safe custom resources (Bitnami Sealed Secrets) or synchronizes credentials dynamically from HashiCorp Vault.",
        stats: [
          "Enables secrets to be safely committed and version-controlled directly in public/private Git",
          "Only the specific target cluster controller possesses the private key to decrypt secrets",
          "Automated secret rotation and dynamic database credential injection via Vault"
        ],
        terminal: {
          command: "kubeseal --format=yaml < db-secret.yaml > sealed-secret.yaml",
          status: "SECRET ASYMMETRICALLY ENCRYPTED",
          logs: [
            { type: "comment", text: "// Encrypting sensitive database password with cluster public key" },
            { type: "step", text: "> encrypted payload safe to commit to Git repository" },
            { type: "step", text: "> cluster SealedSecrets controller will decrypt into native K8s secret" },
            { type: "success", text: "> zero plaintext credentials exposed in CI or Git logs" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Git Merge", tag: "Main Branch", desc: "Developers merge manifest updates or new image tags to the Git repository.", iconName: "GitBranch" },
      { step: "02", title: "Drift Scan", tag: "Continuous Loop", desc: "ArgoCD detects divergence between Git commit state and live Kubernetes pods.", iconName: "RefreshCw" },
      { step: "03", title: "Canary Rollout", tag: "Argo Rollouts", desc: "Traffic is gradually shifted to candidate pods while monitoring error rates.", iconName: "Workflow" },
      { step: "04", title: "Prometheus Gate", tag: "Health Analysis", desc: "Rollout automatically promotes or rolls back based on live telemetry.", iconName: "Activity" },
      { step: "05", title: "Sync Certified", tag: "Cluster Parity", desc: "Live cluster state certified 100% identical to Git source of truth.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Workflow", title: "Git as Single Source of Truth", tags: ["ArgoCD", "Flux v2", "Declarative K8s"], desc: "Manage every Kubernetes deployment, ingress rule, and configmap in Git. Any manual changes made in the cluster are auto-reconciled back to code." },
      { iconName: "Activity", title: "Progressive Canary Rollouts", tags: ["Argo Rollouts", "Prometheus Gates", "Zero-Downtime"], desc: "Safely introduce updates by shifting a fraction of live traffic to canary pods, automatically rolling back in seconds if error rates spike." },
      { iconName: "RefreshCw", title: "One-Click Disaster Recovery", tags: ["Instant Rebuilds", "RTO < 10min", "Cluster Bootstrapping"], desc: "Recover from catastrophic cluster losses in minutes. Point a new Kubernetes cluster at your Git repo and watch the entire platform rebuild itself." },
      { iconName: "Lock", title: "Git-Safe Secret Encryption", tags: ["Sealed Secrets", "HashiCorp Vault", "External Secrets"], desc: "Safely store encrypted secrets directly inside your Git repositories, with decryption performed exclusively inside the target Kubernetes cluster." },
      { iconName: "ShieldCheck", title: "Zero Human Cluster Access", tags: ["No kubectl Prod", "Audit Compliance", "Least Privilege"], desc: "Eliminate security risks by revoking human write permissions to production clusters. All changes must pass through reviewed, audited Git pull requests." },
      { iconName: "Sliders", title: "Multi-Cluster Fleet Synchronization", tags: ["ApplicationSets", "Cross-Cluster Sync", "Multi-Region"], desc: "Deploy changes simultaneously across dozens of regional clusters using ArgoCD ApplicationSets, ensuring total fleet consistency." }
    ],
    techStack: [
      { category: "GitOps Engines", items: ["ArgoCD", "Flux v2", "Fleet", "Jenkins X"] },
      { category: "Progressive Delivery", items: ["Argo Rollouts", "Flagger", "Istio Traffic Shifting", "Linkerd"] },
      { category: "Secret Management", items: ["Bitnami Sealed Secrets", "External Secrets Operator (ESO)", "HashiCorp Vault", "AWS Secrets Manager"] },
      { category: "Templating & Packaging", items: ["Helm v3", "Kustomize", "Jsonnet", "ytt"] },
      { category: "Observability & Metrics", items: ["Prometheus", "Datadog", "Grafana", "Argo CD Notifications"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Push-Based CI & Manual kubectl",
      beforePoints: [
        "CI pipelines holding high-privilege cluster admin credentials that risk catastrophic leaks.",
        "Engineers manually running `kubectl edit` in production, creating untracked configuration drift.",
        "Rebuilding a destroyed cluster taking days of stressful manual guesswork and troubleshooting.",
        "All-or-nothing deployments where a bug immediately crashes 100% of user traffic."
      ],
      afterTitle: "Devopstrio Declarative GitOps Platform",
      afterPoints: [
        "Pull-based ArgoCD loops running inside the cluster with zero external credentials exposed.",
        "100% of cluster state declared in Git; unauthorized manual changes auto-healed instantly.",
        "One-click disaster recovery rebuilding entire multi-tenant clusters in under 10 minutes.",
        "Progressive canary rollouts automatically testing new versions on live traffic with auto-rollback."
      ]
    },
    faqs: [
      { q: "Why is Pull-based GitOps more secure than traditional Push-based CI/CD?", a: "In push-based CI/CD, your external CI server (e.g., GitHub Actions) must store full administrative credentials to your production Kubernetes cluster, creating an enormous attack surface. In GitOps (pull-based), an agent (ArgoCD) runs inside your cluster and pulls updates from Git. No external service ever holds access keys to your cluster." },
      { q: "What happens if a developer manually edits a pod or deployment using kubectl?", a: "ArgoCD continuously monitors the cluster. Within seconds of an unauthorized manual edit, ArgoCD flags the application as 'OutOfSync' and, if configured in self-heal mode, immediately overwrites the manual changes to restore the exact state declared in Git." },
      { q: "How do you store sensitive passwords and API keys in Git safely?", a: "We utilize tools like Bitnami Sealed Secrets or the External Secrets Operator (ESO). With Sealed Secrets, you encrypt the secret using the cluster's public key; it is completely safe to commit to Git because only the private key inside the cluster can decrypt it." },
      { q: "How does Argo Rollouts automatically decide when to roll back a canary release?", a: "Argo Rollouts executes automated `AnalysisTemplates` during the rollout. It queries your monitoring system (Prometheus, Datadog) to verify metrics like HTTP 5xx error rate and p99 latency. If metrics breach defined failure thresholds, it immediately shifts 100% of traffic back to the stable version." },
      { q: "Can GitOps manage non-Kubernetes cloud resources like databases and VPCs?", a: "Yes. By pairing GitOps with Crossplane or the AWS ACK controllers, custom Kubernetes manifests can declare cloud databases (RDS), storage buckets (S3), and network routes, managing full cloud infrastructure through the exact same GitOps workflow." }
    ]
  },

  "release-automation": {
    slug: "release-automation",
    pillarSlug: "devops-toolchain",
    pillarName: "DevOps Toolchain",
    title: "Release Automation",
    tag: "Delivery Engineering",
    badge: "Semantic Versioning, Feature Flags & Blue-Green",
    subtitle: "Eliminate release day stress. Automate semantic versioning, changelog compilation, blue-green cutovers, and feature flag management for frictionless, continuous production deployments.",
    metrics: [
      { val: "0 sec", label: "Cutover Downtime", sub: "Blue-green traffic routing" },
      { val: "100%", label: "Semantic Version Precision", sub: "Automated SemVer 2.0" },
      { val: "< 1s", label: "Feature Flag Toggle Latency", sub: "Edge-distributed flags" },
      { val: "95%", label: "Release Overhead Reduction", sub: "Automated release notes" }
    ],
    capabilities: [
      {
        id: "blue-green-cutovers",
        title: "Zero-Downtime Blue-Green Traffic Cutovers",
        tag: "Release Strategy",
        badge: "Instant Cutover",
        latencyBadge: "Zero Downtime",
        desc: "Maintains two identical production environments (Blue and Green). Deploys new releases to Green, tests thoroughly, and instantly switches ingress traffic with zero user downtime.",
        stats: [
          "Zero downtime during deployment, ensuring customer transactions are never dropped",
          "Instant one-second rollback by simply switching the load balancer router pointer back to Blue",
          "Automated database backward compatibility ensuring both versions run against shared schemas"
        ],
        terminal: {
          command: "traffic_router.switch_target({ from: 'blue-v1', to: 'green-v2' })",
          status: "TRAFFIC SWITCHED TO GREEN (100%)",
          logs: [
            { type: "comment", text: "// Updating AWS ALB / NGINX ingress routing weights" },
            { type: "step", text: "> pre-flight synthetic smoke tests passed 100% on Green environment" },
            { type: "step", text: "> switched traffic pointer to Green (version 2.4.0)" },
            { type: "success", text: "> zero dropped TCP sessions; Blue environment placed on warm standby" }
          ]
        }
      },
      {
        id: "feature-flag-management",
        title: "Dynamic Feature Flagging & Dark Launches",
        tag: "Progressive Delivery",
        badge: "LaunchDarkly & Unleash",
        latencyBadge: "< 5ms Flag Evaluation",
        desc: "Decouples code deployment from feature release. Deploy features dark into production and toggle them on dynamically for specific beta customer cohorts in milliseconds.",
        stats: [
          "Enables instant kill-switch deactivation of buggy features without redeploying code",
          "Targeted beta rollouts based on user email, company tier, or geographical region",
          "Edge-cached feature flag evaluations with sub-5 millisecond response times"
        ],
        terminal: {
          command: "feature_flags.evaluate({ flag: 'new_checkout_ui', user_tier: 'enterprise_beta' })",
          status: "FLAG: ENABLED (COHORT MATCH)",
          logs: [
            { type: "comment", text: "// Evaluating LaunchDarkly / Unleash targeting rules" },
            { type: "step", text: "> rule matched: enterprise beta group enrolled in 20% rollout" },
            { type: "step", text: "> kill-switch armed: auto-trips if client error rate exceeds 0.2%" },
            { type: "success", text: "> dynamic feature rendered without code deployment" }
          ]
        }
      },
      {
        id: "semantic-release-changelogs",
        title: "Automated SemVer & Release Changelogs",
        tag: "Release Governance",
        badge: "Semantic Release",
        latencyBadge: "Zero Human Overhead",
        desc: "Inspects conventional git commit messages (feat, fix, perf, chore) to automatically determine the next semantic version number (MAJOR.MINOR.PATCH) and generate changelogs.",
        stats: [
          "Eliminates human errors in version numbering across microservice repositories",
          "Automated generation of clean, formatted Markdown release notes and GitHub Releases",
          "Automated publishing of versioned packages to npm, PyPI, Maven, and Docker registries"
        ],
        terminal: {
          command: "semantic-release.publish({ branch: 'main' })",
          status: "PUBLISHED VERSION 2.4.1",
          logs: [
            { type: "comment", text: "// Analyzing conventional commits since last tag v2.4.0" },
            { type: "step", text: "> commit: 'fix(auth): resolve token refresh loop' -> PATCH release" },
            { type: "step", text: "> created git tag v2.4.1 and compiled CHANGELOG.md" },
            { type: "success", text: "> published versioned npm package and GitHub release notes" }
          ]
        }
      },
      {
        id: "automated-smoke-testing",
        title: "Automated Post-Deployment Smoke Testing",
        tag: "Validation",
        badge: "Synthetic Verification",
        latencyBadge: "< 60s Smoke Suite",
        desc: "Executes synthetic browser and API transaction suites immediately post-cutover, verifying login flows, database connectivity, and payment processing before signing off.",
        stats: [
          "Automated Playwright and k6 smoke test suites running against live production",
          "Simulates real user journeys without committing live credit card charges",
          "Automatically triggers deployment rollbacks if any synthetic smoke test fails"
        ],
        terminal: {
          command: "smoke_test_runner.execute({ target_env: 'production', suite: 'critical_path' })",
          status: "18/18 SMOKE TESTS PASSED",
          logs: [
            { type: "comment", text: "// Running synthetic post-deployment health validation" },
            { type: "step", text: "> test: user_authentication_flow (PASSED in 340ms)" },
            { type: "step", text: "> test: checkout_cart_calculation (PASSED in 180ms)" },
            { type: "success", text: "> production certified healthy: release signed off automatically" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Conventional Commit", tag: "Git Message", desc: "Developers merge commits adhering to Conventional Commits standards.", iconName: "Code2" },
      { step: "02", title: "SemVer Calculation", tag: "Semantic Release", desc: "Pipeline computes next version number and drafts formatted changelog notes.", iconName: "FileCheck" },
      { step: "03", title: "Staging Deploy", tag: "Blue-Green Pool", desc: "Deploys candidate build to the isolated Green staging environment.", iconName: "Server" },
      { step: "04", title: "Synthetic Smoke", tag: "Playwright Suite", desc: "Executes automated end-to-end smoke tests against the Green environment.", iconName: "ShieldCheck" },
      { step: "05", title: "Traffic Switch", tag: "ALB Router", desc: "Instantly switches production traffic pointer to the new release with zero downtime.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "RefreshCw", title: "Zero-Downtime Blue-Green Cutovers", tags: ["Blue-Green", "ALB Ingress", "Instant Rollback"], desc: "Deploy new releases to an identical parallel environment and switch traffic in a single second, completely eliminating downtime and deployment maintenance windows." },
      { iconName: "Zap", title: "Dynamic Feature Flag Management", tags: ["LaunchDarkly", "Unleash", "Dark Launches"], desc: "Decouple code deployment from feature release. Turn features on or off instantly for specific customer cohorts without deploying new code." },
      { iconName: "FileCheck", title: "Automated Semantic Versioning", tags: ["SemVer 2.0", "Conventional Commits", "Changelog Gen"], desc: "Automate version bumping and changelog generation based on git commit history, eliminating human versioning errors and release documentation overhead." },
      { iconName: "Activity", title: "Automated Post-Cutover Smoke Tests", tags: ["Playwright", "Synthetic Testing", "Auto-Rollback"], desc: "Verify critical user journeys automatically post-deployment, immediately reverting the release if any unexpected errors or latency regressions occur." },
      { iconName: "Sliders", title: "Instant Kill-Switch Capabilities", tags: ["Safety Kill-Switch", "Error Tripping", "Zero Latency"], desc: "Arm customer-facing features with instant kill-switches that automatically disable a broken feature the instant error rates spike in production." },
      { iconName: "Lock", title: "Audit-Ready Release Governance", tags: ["Compliance Audits", "Release Sign-off", "SOC2 Controls"], desc: "Maintain complete, immutable records of every release, including test reports, approving engineers, and exact commit hashes for external audits." }
    ],
    techStack: [
      { category: "Release Orchestration", items: ["Semantic Release", "Release Drafter", "Fastlane", "GitHub Releases"] },
      { category: "Feature Flagging", items: ["LaunchDarkly", "Unleash", "Flagsmith", "PostHog Feature Flags"] },
      { category: "Traffic Routing & Ingress", items: ["AWS ALB / Route 53", "NGINX Ingress Controller", "Traefik", "Cloudflare"] },
      { category: "Synthetic & Smoke Testing", items: ["Playwright", "Cypress", "k6", "Postman / Newman"] },
      { category: "Notifications & Audit", items: ["Slack Bolt API", "PagerDuty", "Datadog Events", "Jira Integration"] }
    ],
    beforeVsAfter: {
      beforeTitle: "High-Stress Weekend Releases",
      beforePoints: [
        "Scheduling dreaded late-night maintenance windows that take applications offline.",
        "Manual version bumping leading to conflicting Git tags and missing changelogs.",
        "A single critical bug in a new feature requiring an emergency multi-hour rollback.",
        "Discovering broken payment flows only after frustrated customers report them."
      ],
      afterTitle: "Devopstrio Release Automation",
      afterPoints: [
        "Zero-downtime blue-green cutovers executed continuously during normal business hours.",
        "Automated semantic versioning and changelog generation on every merged pull request.",
        "Instant feature flag kill-switches disabling buggy code in under one second.",
        "Automated synthetic smoke tests verifying critical workflows before releases are finalized."
      ]
    },
    faqs: [
      { q: "What is the difference between Blue-Green Deployment and Canary Deployment?", a: "In Blue-Green deployment, you maintain two full environments and switch 100% of user traffic from Blue to Green all at once after verifying Green is healthy. In Canary deployment, you gradually shift a small percentage of live traffic (e.g., 5% -> 25% -> 100%) to the new version while monitoring real-time error rates." },
      { q: "How do Feature Flags prevent deployment emergencies?", a: "By wrapping new features in feature flags, code can be deployed safely into production in a 'dark' (disabled) state. If a feature causes an issue when toggled on, engineers flip the flag off in a management console in milliseconds, instantly resolving the customer issue without needing to redeploy or roll back code." },
      { q: "How does Semantic Release determine the version number?", a: "It analyzes Conventional Commit messages. Commits tagged with `fix:` trigger a PATCH bump (1.0.1). Commits tagged with `feat:` trigger a MINOR bump (1.1.0). Commits with `BREAKING CHANGE:` trigger a MAJOR bump (2.0.0). All version tags and changelog notes are generated automatically." },
      { q: "How do you handle database migrations during a Blue-Green deployment?", a: "We enforce the 'Expand and Contract' database migration pattern. All database changes must be backward-compatible (expanding schemas with nullable columns or triggers). This ensures that both the old Blue version and the new Green version can query the database simultaneously without crashing." },
      { q: "What happens if a post-deployment smoke test fails?", a: "Our release automation script detects the test failure, halts the promotion pipeline, triggers an immediate load balancer failover back to the stable Blue environment, and posts an alert to your incident response Slack channel." }
    ]
  },

  "telemetry-monitoring": {
    slug: "telemetry-monitoring",
    pillarSlug: "devops-toolchain",
    pillarName: "DevOps Toolchain",
    title: "Telemetry & Monitoring",
    tag: "Full-Stack Observability",
    badge: "OpenTelemetry, Prometheus & Grafana",
    subtitle: "Achieve deep, unified visibility across metrics, logs, and distributed traces. Built on OpenTelemetry standards, Prometheus, Grafana, and intelligent anomaly alerting with zero vendor lock-in.",
    metrics: [
      { val: "100%", label: "OpenTelemetry Standardized", sub: "Zero proprietary agent lock-in" },
      { val: "< 15s", label: "Incident Detection Time", sub: "Real-time Prometheus alerting" },
      { val: "Petabyte", label: "Log Ingestion Capacity", sub: "Distributed ClickHouse / Loki" },
      { val: "85%", label: "Mean Time to Resolution (MTTR) Cut", sub: "Correlated distributed traces" }
    ],
    capabilities: [
      {
        id: "opentelemetry-unified-instrumentation",
        title: "Vendor-Neutral OpenTelemetry (OTel) Instrumentation",
        tag: "Standards-Based Observability",
        badge: "OpenTelemetry Standard",
        latencyBadge: "< 1% CPU Overhead",
        desc: "Instruments distributed applications using open-source OpenTelemetry standards, routing unified metrics, logs, and traces to any backend (Grafana, Datadog, Honeycomb) with zero code rewrites.",
        stats: [
          "Vendor-neutral instrumentation protecting against steep proprietary monitoring price hikes",
          "Automated auto-instrumentation for Go, Java, Python, Node.js, and .NET services",
          "OpenTelemetry Collector managing sampling rates, PII scrubbers, and metric aggregations"
        ],
        terminal: {
          command: "otel_collector.status({ pipeline: 'traces-metrics-logs' })",
          status: "OTEL COLLECTOR ACTIVE (0 DROPS)",
          logs: [
            { type: "comment", text: "// Processing unified telemetry stream" },
            { type: "step", text: "> receiver: OTLP gRPC endpoint listening on port 4317" },
            { type: "step", text: "> processor: memory_limiter + tail_sampling (100% errors, 5% happy path)" },
            { type: "success", text: "> exporter: routed metrics to Prometheus, traces to Tempo" }
          ]
        }
      },
      {
        id: "distributed-tracing-bottlenecks",
        title: "End-to-End Distributed Tracing & APM",
        tag: "Performance Debugging",
        badge: "Grafana Tempo & Jaeger",
        latencyBadge: "Microsecond Precision",
        desc: "Traces individual customer transactions across dozens of microservices, message queues, and database queries to instantly identify the exact line of code causing latency spikes.",
        stats: [
          "Visual waterfall timelines pinpointing slow database queries and network hops",
          "Tail-based sampling capturing 100% of error traces while sampling high-volume success paths",
          "Correlates trace IDs automatically with application logs and Kubernetes pod metrics"
        ],
        terminal: {
          command: "tempo.get_trace({ trace_id: '4bf92f3577b34da6a3ce929d0e0e4736' })",
          status: "TRACE COMPILED (12 SPANS)",
          logs: [
            { type: "comment", text: "// Analyzing distributed transaction timeline" },
            { type: "step", text: "> span 1: api-gateway (total latency: 420ms)" },
            { type: "step", text: "> span 2: checkout-service -> calling postgres" },
            { type: "success", text: "> root cause identified: unindexed SQL query in span 4 (duration: 395ms)" }
          ]
        }
      },
      {
        id: "intelligent-slos-alerting",
        title: "SLO-Based Error Budget Alerting",
        tag: "Incident Management",
        badge: "Prometheus & Alertmanager",
        latencyBadge: "Zero Alert Fatigue",
        desc: "Replaces noisy threshold alerts with Service Level Objective (SLO) error budget burn-rate alerting, paging engineers only when genuine customer-impacting degradation occurs.",
        stats: [
          "Multi-window, multi-burn-rate alerting compliant with Google SRE best practices",
          "Automated incident dispatch to PagerDuty and Opsgenie with runbook link attachments",
          "Drastically reduces alert fatigue by eliminating transient spike notifications"
        ],
        terminal: {
          command: "alertmanager.evaluate({ slo: 'checkout_availability_99.9' })",
          status: "BURN RATE: 14.2x (CRITICAL PAGING)",
          logs: [
            { type: "comment", text: "// Calculating 1-hour and 6-hour error budget burn rates" },
            { type: "step", text: "> error budget consuming at 14.2x normal rate (> 14x threshold)" },
            { type: "step", text: "> budget exhaustion projected in 2.8 hours" },
            { type: "success", text: "> dispatched high-priority page to SRE On-Call with runbook link" }
          ]
        }
      },
      {
        id: "centralized-high-speed-logging",
        title: "Petabyte Structured Logging & Indexing",
        tag: "Log Management",
        badge: "Grafana Loki & ClickHouse",
        latencyBadge: "Sub-Second Log Search",
        desc: "Ingests terabytes of structured JSON application logs per day, indexing only metadata labels to dramatically reduce indexing compute and storage expenses.",
        stats: [
          "Grafana Loki indexes metadata labels, cutting log storage costs by up to 75% vs Elasticsearch",
          "LogQL queries filtering millions of log lines in seconds using familiar PromQL syntax",
          "Automated log scrubbing masking sensitive credit card and API key patterns before ingestion"
        ],
        terminal: {
          command: "loki.query({ logql: '{app=\"billing\"} |= \"failed to charge\" | json' })",
          status: "SEARCH COMPLETED IN 410ms",
          logs: [
            { type: "comment", text: "// Searching through 4.8 TB of logs from last 2 hours" },
            { type: "step", text: "> filtered by namespace: production | container: billing-api" },
            { type: "step", text: "> found 42 matching log entries with stack traces" },
            { type: "success", text: "> clicked trace_id to jump directly to correlated distributed trace" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "OTel Instrument", tag: "App Code", desc: "Applications emit standardized traces, metrics, and logs via OpenTelemetry SDKs.", iconName: "Code2" },
      { step: "02", title: "Collector Agent", tag: "OTel Collector", desc: "Local daemon aggregates telemetry, redacts PII, and applies sampling policies.", iconName: "Server" },
      { step: "03", title: "Storage Routing", tag: "Prometheus / Loki", desc: "Routes metrics to Prometheus/Thanos, logs to Loki, and traces to Tempo.", iconName: "Database" },
      { step: "04", title: "SLO Burn Engine", tag: "Alertmanager", desc: "Evaluates error budget consumption rates to detect real customer impact.", iconName: "Activity" },
      { step: "05", title: "Unified Dashboard", tag: "Grafana Enterprise", desc: "Correlates metrics, logs, and traces into single-pane-of-glass incident dashboards.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Activity", title: "OpenTelemetry Vendor Neutrality", tags: ["OpenTelemetry", "OTel Collector", "No Vendor Lock-in"], desc: "Instrument your systems once using open standards. Switch between Grafana, Datadog, New Relic, or AWS CloudWatch without touching application code." },
      { iconName: "Zap", title: "End-to-End Distributed Tracing", tags: ["Grafana Tempo", "Jaeger", "Latency Waterfall"], desc: "Visualize the exact journey of a customer request across microservices, identifying database bottlenecks and slow network hops in seconds." },
      { iconName: "ShieldCheck", title: "SLO Error Budget Alerting", tags: ["Google SRE Standards", "Burn Rate Alerting", "No Alert Fatigue"], desc: "Stop waking engineers up for meaningless CPU blips. Page on-call teams only when real-world user error budgets are genuinely burning." },
      { iconName: "Database", title: "Cost-Effective Log Management", tags: ["Grafana Loki", "ClickHouse Logs", "75% Cost Reduction"], desc: "Store and query terabytes of application logs economically by indexing only metadata labels, slashing log storage bills by up to 75%." },
      { iconName: "Sliders", title: "Automated PII Log Scrubbing", tags: ["Regex Scrubbers", "GDPR Compliance", "Data Masking"], desc: "Automatically detect and redact sensitive credit card numbers, passwords, and private tokens at the collector level before logs are stored." },
      { iconName: "Workflow", title: "Single-Pane-of-Glass Dashboards", tags: ["Grafana Dashboards", "Correlated Views", "Incident Runbooks"], desc: "Navigate seamlessly from a metric spike to the exact log lines and distributed traces with a single click in unified Grafana dashboards." }
    ],
    techStack: [
      { category: "Instrumentation Standards", items: ["OpenTelemetry (OTel)", "OpenTracing", "W3C Trace Context", "OTLP Protocol"] },
      { category: "Metrics & Time Series", items: ["Prometheus", "Thanos (Long-Term Storage)", "VictoriaMetrics", "Cortex"] },
      { category: "Distributed Tracing", items: ["Grafana Tempo", "Jaeger", "Zipkin", "AWS X-Ray"] },
      { category: "Log Aggregation", items: ["Grafana Loki", "Elasticsearch / OpenSearch", "ClickHouse", "Fluentbit"] },
      { category: "Dashboards & Alerting", items: ["Grafana Enterprise", "Alertmanager", "PagerDuty", "Opsgenie"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Siloed Logs & Endless Alert Fatigue",
      beforePoints: [
        "Proprietary monitoring vendors charging astronomical, unpredictable monthly fees.",
        "Engineers overwhelmed by hundreds of meaningless alerts that everyone ignores.",
        "Spending hours guessing which microservice caused a 500 error across distributed systems.",
        "Sensitive customer credit card numbers accidentally leaking into plaintext log files."
      ],
      afterTitle: "Devopstrio Unified Observability Platform",
      afterPoints: [
        "100% open-standard OpenTelemetry architecture with zero proprietary vendor lock-in.",
        "SLO burn-rate alerting paging engineers only when genuine customer impact occurs.",
        "Correlated distributed tracing pinpointing exact bottleneck lines of code in seconds.",
        "Automated collector scrubbing sanitizing PII before telemetry data ever reaches disks."
      ]
    },
    faqs: [
      { q: "Why is OpenTelemetry (OTel) preferred over proprietary agents like Datadog or New Relic?", a: "Proprietary agents tie your code to a single vendor. If their prices increase, migrating away requires rewriting instrumentation across all your applications. OpenTelemetry is a vendor-neutral CNCF standard supported by all major providers. You instrument once with OTel, and can export data to any backend via configuration." },
      { q: "How does Distributed Tracing work across multiple microservices?", a: "When an ingress request enters your system, the API gateway assigns it a unique Trace ID (using the W3C Trace Context standard). As that request calls other microservices, database servers, and message queues, the Trace ID is forwarded in HTTP/gRPC headers. A tracing backend (like Tempo) pieces these spans together into an interactive visual timeline." },
      { q: "What is 'Alert Fatigue' and how does SLO-based alerting solve it?", a: "Alert fatigue happens when engineers receive dozens of non-actionable alerts every day (e.g., 'CPU at 85% for 2 minutes'), causing them to ignore alerts entirely. SLO burn-rate alerting ignores CPU blips and alerts only when user-facing availability or latency budgets are depleting at an alarming rate." },
      { q: "Why is Grafana Loki so much cheaper than Elasticsearch for log storage?", a: "Elasticsearch builds full-text inverted indexes on every single word inside every log message, requiring massive amounts of RAM and high-speed disk storage. Grafana Loki only indexes metadata labels (like `app=checkout` and `env=prod`), storing raw compressed log streams in cheap object storage (like S3)." },
      { q: "Can we monitor serverless functions and Kubernetes clusters simultaneously?", a: "Yes. The OpenTelemetry Collector and Prometheus exporters capture telemetry seamlessly across AWS Lambda serverless functions, Kubernetes pod clusters, managed databases, and on-premise bare-metal servers into unified Grafana dashboards." }
    ]
  }
};
