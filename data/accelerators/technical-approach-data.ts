export interface ImplementationTechnicalData {
  kind: "Implementation";
  architectureTitle?: string;
  architectureSummary: string;
  componentGroups: {
    title: string;
    items: string[];
  }[];
  responsibilityIntro: string;
  responsibilityRows: {
    domain: string;
    customer: string;
    devopstrio: string;
  }[];
}

export interface AssessmentTechnicalData {
  kind: "Assessment";
  matrixIntro: string;
  matrixRows: {
    reviewArea: string;
    evidence: string;
    output: string;
  }[];
  methodologyIntro: string;
  methodologyTiers: {
    label: string;
    title: string;
    description: string;
  }[];
}

export interface AdoptionTechnicalData {
  kind: "Adoption";
  enablementIntro: string;
  enablementSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  measuresIntro: string;
  measuresRows: {
    dimension: string;
    focus: string;
    action: string;
  }[];
}

export interface AcceleratorTechnicalData {
  kind: "Accelerator";
  configIntro: string;
  standardComponents: {
    title: string;
    items: string[];
  };
  customerConfiguration: {
    title: string;
    items: string[];
  };
  workflowIntro: string;
  workflowRows: {
    stage: string;
    operation: string;
    validationGate: string;
  }[];
}

export type TechnicalApproachData =
  | ImplementationTechnicalData
  | AssessmentTechnicalData
  | AdoptionTechnicalData
  | AcceleratorTechnicalData;

export const technicalApproachByCode: Record<string, TechnicalApproachData> = {
  "003": {
    "kind": "Implementation",
    "architectureTitle": "Target Configuration & Control-Plane Boundaries",
    "architectureSummary": "This engagement configures SaaS and identity control-plane settings across Microsoft Agent 365, Microsoft Entra ID, Microsoft Purview, and Power BI within the existing tenant, with no new Azure infrastructure deployed. Every registered agent receives a dedicated identity governed by Conditional Access and quarterly attestation, while all agent interactions are audited through Purview and surfaced in Power BI.",
    "componentGroups": [
      {
        "title": "Control Plane (Agent 365)",
        "items": [
          "Single agent inventory recording owner, purpose, platform, data classification, risk tier, and review date",
          "Publishing rights restricted to approved maker groups",
          "Tiered approval routing across Low, Medium (AI CoE), and High (AI Governance Board) risk tiers",
          "Six-state lifecycle workflow: Requested, Approved, Published, Under Review, Suspended (90 days unused or unowned), and Retired"
        ]
      },
      {
        "title": "Identity & Access (Entra ID)",
        "items": [
          "Dedicated Entra agent identity or managed identity assigned per agent",
          "Conditional Access policies constraining agent identities by resource and location",
          "Quarterly owner-attested access reviews with automatic removal on non-response",
          "Zero standing administrative roles permitted for agent identities"
        ]
      },
      {
        "title": "Audit & Risk Reporting",
        "items": [
          "Microsoft Purview data security and audit logging across agent interactions",
          "Power BI agent risk dashboard tracking active inventory, usage, and risk tier distribution",
          "Monthly executive risk reporting aligned to UK GDPR and internal AI governance",
          "Configuration acceptance log recording verified settings and signed exceptions"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries divide tenant access, policy ownership, and ongoing governance between your information security and M365 teams and Devopstrio configuration specialists.",
    "responsibilityRows": [
      {
        "domain": "Tenant & Licensing",
        "customer": "Provide Microsoft Entra ID tenant access, Agent 365, Entra, and Purview licences, and named owners for existing agents.",
        "devopstrio": "Validate licence prerequisites and configure Agent 365 registry, policies, and reporting within the existing tenant."
      },
      {
        "domain": "Risk Tiers & Policy Decisions",
        "customer": "Approve risk-tier thresholds, approved maker groups, and organisational AI policy or DPIA content.",
        "devopstrio": "Translate approved risk tiers and lifecycle rules into Agent 365 approval workflows and Conditional Access controls."
      },
      {
        "domain": "Identity & Access Reviews",
        "customer": "Information security and DPO approve Conditional Access policies; agent owners complete quarterly access attestations.",
        "devopstrio": "Configure per-agent identity patterns, Conditional Access policies, and automated quarterly access review schedules."
      },
      {
        "domain": "Reporting & Handover",
        "customer": "Accept configuration log items, sign off the closure report, and operate governance processes after handover.",
        "devopstrio": "Deliver Power BI risk dashboards, operational runbooks, and knowledge transfer to platform and governance teams."
      }
    ]
  },
  "004": {
    "kind": "Assessment",
    "matrixIntro": "The assessment evaluates six core readiness domains using read-only technical inspection, structured stakeholder interviews, and a five-level maturity scale (Initial through Optimised) aligned to the Cloud Adoption Framework AI scenario.",
    "matrixRows": [
      {
        "reviewArea": "Strategy",
        "evidence": "Stakeholder interviews, business objectives, and candidate use-case inventory.",
        "output": "Prioritised use-case shortlist (top three for first 90 days) and funded business case outline."
      },
      {
        "reviewArea": "Platform",
        "evidence": "Read-only Azure Landing Zone review covering hub-and-spoke networking, DNS, and subscription topology.",
        "output": "Platform gap register against AI Landing Zone requirements and target architecture options."
      },
      {
        "reviewArea": "Data",
        "evidence": "Read-only data source inventory assessing quality, ownership, lineage, and access controls for priority use cases.",
        "output": "Data readiness findings and prerequisite remediation actions per priority use case."
      },
      {
        "reviewArea": "Security",
        "evidence": "Read-only review of Entra ID controls, private networking posture, encryption, and Azure Policy assignments.",
        "output": "Security control gap list and Zero Trust alignment recommendations."
      },
      {
        "reviewArea": "Skills",
        "evidence": "Organisational skills survey and engineering/change team capability interviews.",
        "output": "Capability gap summary and targeted training and enablement recommendations."
      },
      {
        "reviewArea": "Governance",
        "evidence": "Review of existing AI policies, DPIA workflows, cost attribution, and model oversight processes.",
        "output": "Governance maturity findings and operational oversight recommendations."
      }
    ],
    "methodologyIntro": "Delivered across four structured phases—Mobilise, Discover, Analyse, and Report—combining read-only technical telemetry with stakeholder evidence to eliminate self-assessment bias.",
    "methodologyTiers": [
      {
        "label": "Workstream 01",
        "title": "Read-Only Evidence Gathering",
        "description": "Collects Azure environment configuration exports, data source inventories, skills survey responses, and structured interviews without modifying live workloads."
      },
      {
        "label": "Workstream 02",
        "title": "CAF Maturity & Risk Analysis",
        "description": "Evaluates each of the six domains against the five-level maturity baseline and ranks identified risks by operational likelihood and impact."
      },
      {
        "label": "Workstream 03",
        "title": "Two-Track Roadmap & Handover",
        "description": "Translates findings into quick wins, a 90-day plan to the first production use case, and a 12-month capability roadmap with effort and owners."
      }
    ]
  },
  "005": {
    "kind": "Implementation",
    "architectureTitle": "Target M365 Telemetry & Data Protection Architecture",
    "architectureSummary": "This engagement configures Microsoft 365, Microsoft Purview, Microsoft Entra ID, Viva Insights, and Power BI within your existing tenant, with no Azure infrastructure deployed. Data access governance and Purview DLP protect sensitive content at the source, while Viva Insights and Power BI aggregate adoption and departmental value metrics without exposing individual user activity.",
    "componentGroups": [
      {
        "title": "Data Governance & Purview",
        "items": [
          "Weekly SharePoint Data Access Governance reports for sharing links and broad-access sites",
          "Site owner access reviews (10-working-day response) and Restricted Content Discovery on high-risk sites",
          "Purview sensitivity labels with DLP rules excluding Highly Confidential content from Copilot",
          "DSPM for AI monitoring and simulation-first auto-labelling for UK financial and personal data"
        ]
      },
      {
        "title": "Identity & Wave Licensing",
        "items": [
          "Group-based Copilot licensing aligned to three staged rollout waves",
          "Entra Conditional Access requiring MFA and compliant or hybrid-joined devices for Copilot users",
          "Blocking of legacy authentication and exclusion of guest accounts from Copilot licensing",
          "Approved-only agent governance and pay-as-you-go billing policy configuration"
        ]
      },
      {
        "title": "Analytics & ROI Reporting",
        "items": [
          "Microsoft 365 Copilot Dashboard and Viva Insights configured with aggregate privacy thresholds",
          "Custom Power BI reports combining active usage, assisted hours, and departmental value proxies",
          "Bi-weekly user sentiment tracking aligned to rollout wave entry criteria",
          "Monthly licence utilisation reporting flagging inactive seats for reallocation after 60 days"
        ]
      }
    ],
    "responsibilityIntro": "Clear operational responsibilities separate tenant policy approval and site remediation from technical configuration and dashboard delivery.",
    "responsibilityRows": [
      {
        "domain": "M365 Tenant & Licensing",
        "customer": "Provide M365 E3/E5 and Copilot licences, tenant admin access, and agreed departmental value proxies.",
        "devopstrio": "Configure Copilot Dashboard, Viva Insights, group-based licensing, and custom Power BI ROI reports."
      },
      {
        "domain": "SharePoint & Oversharing",
        "customer": "Provide site owners to complete access reviews within 10 working days and remediate flagged permissions.",
        "devopstrio": "Configure Data Access Governance reports, Restricted Content Discovery, and site review workflows."
      },
      {
        "domain": "Purview & Conditional Access",
        "customer": "Approve sensitivity label taxonomy, DLP exclusions, DPIA decisions, and Conditional Access policies.",
        "devopstrio": "Implement Purview labels, Copilot DLP rules, DSPM for AI policies, and Entra Conditional Access controls."
      },
      {
        "domain": "Rollout & Licence Governance",
        "customer": "Manage internal communications, champions network, and ongoing monthly licence reallocations.",
        "devopstrio": "Deliver staged wave entry criteria, configuration log, operational runbooks, and team handover."
      }
    ]
  },
  "006": {
    "kind": "Implementation",
    "architectureTitle": "Target Fabric & Private Landing Zone Architecture",
    "architectureSummary": "The solution deploys a dedicated spoke Virtual Network peered to the enterprise hub, isolating Microsoft Fabric capacity, OneLake lakehouses, and private Storage behind Private Endpoints with Entra ID authentication and zero shared keys. Microsoft Purview governs data product ownership and lineage across bronze, silver, and gold layers, while Azure Policy enforces network and location guardrails.",
    "componentGroups": [
      {
        "title": "Spoke Network & Security",
        "items": [
          "Dedicated spoke Virtual Network with Private Endpoint subnet peered to the central hub",
          "Platform UDR egress routing via Azure Firewall and hub DNS Private Resolver resolution",
          "Private Storage Account (StorageV2, ZRS, TLS 1.2+, shared keys disabled, infrastructure encryption)",
          "Devopstrio AI Policy initiative enforcing private endpoints, UK regions, and CAF tags (Audit to Deny)"
        ]
      },
      {
        "title": "Fabric & Medallion Storage",
        "items": [
          "Microsoft Fabric capacity deployed via IaC and scaled per workload demand",
          "Domain-based Fabric workspaces per environment with workspace identities enabled",
          "OneLake lakehouses structured into bronze (raw), silver (validated), and gold (AI-ready) layers",
          "Private links and outbound access protection configured where supported"
        ]
      },
      {
        "title": "Governance & Observability",
        "items": [
          "Microsoft Purview data catalogue tracking data product owners, quality rules, and lineage",
          "Entra ID group RBAC with PIM-eligible privileged admin access and Security Reader visibility",
          "Log Analytics workspace (90-day retention) and workspace-based Application Insights",
          "Monthly consumption budget alerts at 50%, 80%, and 100% spend thresholds"
        ]
      }
    ],
    "responsibilityIntro": "Delivery boundaries separate existing hub networking and domain data ownership from IaC deployment, Fabric configuration, and Purview integration.",
    "responsibilityRows": [
      {
        "domain": "Platform Hub & Connectivity",
        "customer": "Maintain hub VNet, Azure Firewall, DNS Private Resolver, and connectivity to source systems.",
        "devopstrio": "Deploy spoke VNet, Private Endpoints, NSGs, and hub peering configuration via Terraform or Bicep."
      },
      {
        "domain": "Fabric & Medallion Pipelines",
        "customer": "Confirm Fabric vs. Databricks platform choice, identify initial source systems, and assign domain data owners.",
        "devopstrio": "Provision Fabric capacity, domain workspaces, and bronze/silver/gold OneLake lakehouse structure."
      },
      {
        "domain": "Identity & Data Governance",
        "customer": "Approve Entra ID groups, PIM policies, DPIA, and data classification standards.",
        "devopstrio": "Configure workspace identities, RBAC assignments, Purview cataloguing, and Azure Policy guardrails."
      },
      {
        "domain": "CI/CD & Operations",
        "customer": "Provide Azure DevOps or GitHub runners, review phase gates, and assume operational ownership post-handover.",
        "devopstrio": "Deliver IaC pipelines, monitoring alerts, operational runbooks, and knowledge transfer."
      }
    ]
  },
  "008": {
    "kind": "Implementation",
    "architectureTitle": "Target Omnichannel AI & Contact Centre Architecture",
    "architectureSummary": "The solution deploys into a spoke Virtual Network segmented into private endpoint, internal API Management, and Container Apps subnets. Customer messages from web chat, WhatsApp, and SMS enter the assistant runtime, route exclusively through the internal AI gateway to Microsoft Foundry models and Azure AI Search over Private Endpoints, and log redacted transcripts to CRM via secure APIs.",
    "componentGroups": [
      {
        "title": "Network & AI Gateway",
        "items": [
          "Spoke VNet with dedicated subnets for Private Endpoints, internal API Management, and Container Apps",
          "Internal API Management AI gateway enforcing token limits, metrics, and managed-identity model access",
          "All PaaS services restricted to Private Endpoints with public network access and local keys disabled",
          "Azure Policy initiative enforcing private networking and UK residency (Audit in dev/test, Deny in prod)"
        ]
      },
      {
        "title": "Assistant & Safety Runtime",
        "items": [
          "Microsoft Foundry account and project hosting regional GPT-4o and embedding deployments",
          "Azure AI Search with semantic ranking grounding responses in approved service knowledge",
          "Azure AI Content Safety with Prompt Shields and automated PII/payment transcript redaction",
          "Container Apps environment with internal ingress hosting integration and channel formatting services"
        ]
      },
      {
        "title": "Channels, CRM & Observability",
        "items": [
          "Single assistant published across web chat, WhatsApp, and SMS with AI disclosure notices",
          "Secure API integration with Dynamics 365 or existing CRM/telephony for context handover",
          "Premium Key Vault (RBAC, purge protection) and central Log Analytics / Application Insights",
          "Monthly budget alerts and automated service health notifications"
        ]
      }
    ],
    "responsibilityIntro": "Responsibilities are divided across contact centre platform APIs, channel rules, and private Azure AI infrastructure deployment.",
    "responsibilityRows": [
      {
        "domain": "Telephony & Channels",
        "customer": "Maintain existing telephony platform, provide channel accounts (WhatsApp/SMS), and expose integration APIs.",
        "devopstrio": "Configure omnichannel assistant publishing, channel formatting, and CRM context-preserving handover."
      },
      {
        "domain": "Azure AI Infrastructure",
        "customer": "Maintain hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke address spaces.",
        "devopstrio": "Deploy Foundry, AI Search, Content Safety, internal APIM gateway, Container Apps, and Key Vault via IaC."
      },
      {
        "domain": "Privacy & Compliance",
        "customer": "Approve DPIA, transcript retention policies, and payment-card masking/pause-and-resume rules.",
        "devopstrio": "Implement Prompt Shields, automated transcript redaction, Entra managed identities, and Azure Policy guardrails."
      },
      {
        "domain": "Testing & Handover",
        "customer": "Supply real call/chat samples for accuracy testing and accept phase gates.",
        "devopstrio": "Execute evaluation and security tests, promote to production, and deliver runbooks and knowledge transfer."
      }
    ]
  },
  "010": {
    "kind": "Adoption",
    "enablementIntro": "The four-week adoption path pairs strict GitHub repository guardrails with team-based onboarding, champions coaching, and wave-based scaling so engineering teams adopt GitHub Copilot safely without introducing insecure code.",
    "enablementSteps": [
      {
        "step": "01",
        "title": "Envision & Policy Baseline",
        "description": "Agree engineering goals, pilot cohorts, success measures, and GitHub organisation policies including public-code blocking and repository exclusions."
      },
      {
        "step": "02",
        "title": "Readiness & Security Guardrails",
        "description": "Enable CodeQL, secret scanning push protection, Dependabot, and branch protection; prepare team guides and onboard engineering champions."
      },
      {
        "step": "03",
        "title": "Pilot Execution & Coaching",
        "description": "Sync seats via Entra ID groups, support pilot developers with champions clinics, and capture baseline acceptance and PR cycle-time telemetry."
      },
      {
        "step": "04",
        "title": "Wave Scale-Out & Sustain",
        "description": "Roll out across remaining engineering squads using pilot learnings, embed champions practices, and hand over ongoing metrics dashboards."
      }
    ],
    "measuresIntro": "Impact is measured objectively using the GitHub Copilot Metrics API, GitHub Insights, and GitHub Advanced Security telemetry surfaced in Power BI.",
    "measuresRows": [
      {
        "dimension": "Active Users & Acceptance Rate",
        "focus": "Proportion of assigned seats actively using Copilot and suggestion acceptance rate via Copilot Metrics API.",
        "action": "Target refresher clinics or reallocate unused seats across engineering teams."
      },
      {
        "dimension": "Pull Request Cycle Time",
        "focus": "Changes in PR creation, review, and merge lead times tracked through GitHub Insights.",
        "action": "Assess workflow bottlenecks and refine team-specific prompting and review practices."
      },
      {
        "dimension": "Security & Code Quality Alerts",
        "focus": "CodeQL findings, blocked secret pushes, and Dependabot alerts via GitHub Advanced Security overview.",
        "action": "Reinforce secure AI coding standards and tune repository content exclusions where needed."
      }
    ]
  },
  "011": {
    "kind": "Implementation",
    "architectureTitle": "Target Security-Trimmed HR RAG Architecture",
    "architectureSummary": "Staff queries enter via a Microsoft Teams app hosted in Container Apps within an isolated spoke Virtual Network. All model calls route through an internal API Management AI gateway to Microsoft Foundry, while Azure AI Search enforces document-level ACL security trimming and version-date filtering over SharePoint HR policies extracted via Document Intelligence.",
    "componentGroups": [
      {
        "title": "Ingestion & Security Trimming",
        "items": [
          "Read-only ingestion identity reading current approved policies from SharePoint HR sites",
          "Azure AI Document Intelligence extraction with consistent chunking and embedding",
          "Purview sensitivity label checks excluding restricted documents and superseded policy versions",
          "Azure AI Search storing document ACLs with incremental permission sync and semantic ranking"
        ]
      },
      {
        "title": "AI Gateway & Model Runtime",
        "items": [
          "Internal API Management AI gateway enforcing token limits and managed-identity model calls",
          "Microsoft Foundry account and project hosting regional GPT-4o and text-embedding-3-large models",
          "Prompt Shields and content filters enforcing citation-backed answers and HR escalation rules",
          "Private Storage Account (ZRS, Entra ID only) and Premium Key Vault (RBAC, purge protection)"
        ]
      },
      {
        "title": "Network, Interface & Audit",
        "items": [
          "Spoke VNet with isolated subnets for Private Endpoints, internal APIM, and Container Apps",
          "Teams app interface routing personal or sensitive employee cases to human HR channels",
          "All PaaS resources restricted to Private Endpoints with local authentication disabled",
          "Log Analytics (90-day retention), Application Insights, and Audit-to-Deny Azure Policy guardrails"
        ]
      }
    ],
    "responsibilityIntro": "Responsibilities distinguish HR policy ownership and SharePoint labelling from private Azure RAG deployment and permission-sync engineering.",
    "responsibilityRows": [
      {
        "domain": "HR Content & Sensitivity Labels",
        "customer": "Maintain current approved HR policies in SharePoint, apply Purview sensitivity labels, and define HR escalation channels.",
        "devopstrio": "Build version-aware ingestion, label exclusion rules, and automated personal-query routing to HR."
      },
      {
        "domain": "Azure Landing Zone & Network",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and provide read access for the ingestion identity.",
        "devopstrio": "Deploy spoke VNet, Private Endpoints, internal APIM gateway, Foundry, AI Search, and Container Apps via IaC."
      },
      {
        "domain": "Security & Access Control",
        "customer": "Approve Entra ID groups, DPIA, and security-trimming validation criteria.",
        "devopstrio": "Configure ACL-based security trimming in AI Search, managed identities, and Deny-mode Azure Policies."
      },
      {
        "domain": "Pilot & Operational Handover",
        "customer": "Coordinate HR pilot testers, sign off phase gates, and manage ongoing policy updates.",
        "devopstrio": "Run retrieval and security evaluations, promote to production, and hand over operational runbooks."
      }
    ]
  },
  "012": {
    "kind": "Implementation",
    "architectureTitle": "Target Role-Based Copilot & CRM/ERP Architecture",
    "architectureSummary": "This engagement configures Microsoft 365 Copilot role experiences, permission-aware connectors to Dynamics 365, Salesforce, and ERP systems, Microsoft Purview DLP, and Entra Conditional Access within your existing tenant, with no Azure infrastructure deployed.",
    "componentGroups": [
      {
        "title": "Role Copilots & Business Data",
        "items": [
          "Role-specific Microsoft 365 Copilot agents configured for Sales, Service, and Finance teams",
          "Live, permission-aware connectors to Dynamics 365, Salesforce, and ERP platforms",
          "Role-specific prompt libraries embedded into daily Outlook, Teams, and Office workflows",
          "Strict inheritance of underlying CRM and ERP record-level access controls"
        ]
      },
      {
        "title": "Data Protection & Oversharing Controls",
        "items": [
          "SharePoint Data Access Governance reports and Restricted Content Discovery on high-risk sites",
          "Purview sensitivity labels with Copilot DLP excluding Highly Confidential content",
          "DSPM for AI monitoring and simulation-first auto-labelling for financial and personal data",
          "Site owner access reviews completed prior to each department wave"
        ]
      },
      {
        "title": "Identity, Waves & Role Telemetry",
        "items": [
          "Entra Conditional Access requiring MFA and compliant or hybrid-joined devices",
          "Group-based licensing across staged waves (champions, low-risk teams, wider business)",
          "Per-role adoption, assisted hours, and sentiment tracking via Copilot Dashboard",
          "Monthly inactive-licence identification for seat reallocation"
        ]
      }
    ],
    "responsibilityIntro": "Responsibilities align CRM/ERP data stewardship and role sponsorship with tenant configuration, connector integration, and adoption tracking.",
    "responsibilityRows": [
      {
        "domain": "CRM, ERP & Licensing",
        "customer": "Provide M365 Copilot and role licences, CRM/ERP admin access, and clean pilot data in Dynamics/Salesforce/ERP.",
        "devopstrio": "Validate connector capabilities and configure Sales, Service, and Finance Copilot integrations."
      },
      {
        "domain": "Data Governance & Purview",
        "customer": "Approve sensitivity label taxonomy, DPIA decisions, and complete site owner permission reviews.",
        "devopstrio": "Configure SharePoint governance reports, Purview sensitivity labels, Copilot DLP, and DSPM for AI."
      },
      {
        "domain": "Identity & Access",
        "customer": "Approve Entra ID user groups and Conditional Access security baselines.",
        "devopstrio": "Implement group-based licensing and Conditional Access policies for Copilot cohorts."
      },
      {
        "domain": "Role Enablement & Handover",
        "customer": "Nominate role champions, manage internal communications, and own ongoing licence governance.",
        "devopstrio": "Configure role-specific prompts, per-role usage reporting, and deliver handover runbooks."
      }
    ]
  },
  "013": {
    "kind": "Implementation",
    "architectureTitle": "Target Private MLOps Architecture on Azure Machine Learning",
    "architectureSummary": "Each environment receives a private Azure Machine Learning workspace inside a spoke Virtual Network with managed network isolation (AllowOnlyApprovedOutbound) and Private Endpoints for workspace APIs, notebooks, storage, and Key Vault. A shared AML registry governs model and prompt promotion across environments via automated CI/CD pipelines.",
    "componentGroups": [
      {
        "title": "Private ML Workspaces & Compute",
        "items": [
          "Azure Machine Learning workspaces per environment with public network access disabled",
          "Managed virtual network enforcing AllowOnlyApprovedOutbound egress controls",
          "Scale-to-zero training and inference compute clusters with per-team quota limits",
          "Dedicated ML storage account and private Storage Account behind Private Endpoints"
        ]
      },
      {
        "title": "Registry & CI/CD Automation",
        "items": [
          "Shared AML registry versioning models, prompts, curated environments, and evaluation datasets",
          "Azure DevOps or GitHub Actions pipelines for automated training, evaluation, and promotion",
          "Templated ML project repositories enforcing repeatable, reversible release gates",
          "Premium Key Vault (RBAC, purge protection) storing pipeline and workspace secrets"
        ]
      },
      {
        "title": "Governance, Cost & Drift Monitoring",
        "items": [
          "Entra ID group RBAC with PIM-eligible admin access and zero standing owner privileges",
          "Data and prediction drift monitors alerting model owners on quality degradation",
          "Log Analytics (90-day retention) and Application Insights capturing all workspace diagnostics",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget threshold alerts"
        ]
      }
    ],
    "responsibilityIntro": "Responsibilities separate GPU quota approvals and feature data supply from private AML infrastructure, registry setup, and CI/CD pipeline delivery.",
    "responsibilityRows": [
      {
        "domain": "Platform Network & Quotas",
        "customer": "Maintain hub VNet/DNS, request GPU quota approvals, and provide pipeline runner agents.",
        "devopstrio": "Deploy spoke VNet, Private Endpoints, private AML workspaces, and managed network rules via IaC."
      },
      {
        "domain": "Feature Data & Models",
        "customer": "Supply feature data from the data platform and provide data science leads to adopt templates.",
        "devopstrio": "Configure shared AML registry, project templates, and compute auto-shutdown/quota guardrails."
      },
      {
        "domain": "CI/CD & Evaluation Gates",
        "customer": "Provide Azure DevOps or GitHub organisation access and approve release gate criteria.",
        "devopstrio": "Build automated training, evaluation, and registry-based promotion pipelines."
      },
      {
        "domain": "Monitoring & Operations",
        "customer": "Assign model owners to respond to drift alerts and operate workspaces after handover.",
        "devopstrio": "Configure drift monitoring, Log Analytics diagnostics, Deny-mode policies, and runbooks."
      }
    ]
  },
  "014": {
    "kind": "Assessment",
    "matrixIntro": "The engagement combines business-line discovery workshops with read-only technical and data checks to score candidate use cases across four factors and build a finance-credible first-wave business case.",
    "matrixRows": [
      {
        "reviewArea": "Use-Case Discovery",
        "evidence": "Stakeholder interviews, business-area workshops, and operational process documentation.",
        "output": "Structured longlist of candidate AI use cases with named business owners."
      },
      {
        "reviewArea": "Data & Platform Feasibility",
        "evidence": "Read-only Azure Landing Zone review and data source inventory for candidate use cases.",
        "output": "Technical feasibility findings, data readiness gaps, and prerequisite dependencies."
      },
      {
        "reviewArea": "Value & Cost Sizing",
        "evidence": "Process volume metrics, conservative benefit assumptions, and Azure/delivery cost drivers.",
        "output": "Finance-reviewed value and cost model for shortlisted use cases."
      },
      {
        "reviewArea": "Risk & Governance Fit",
        "evidence": "UK GDPR, DPIA scope, data classification, and responsible AI policy alignment checks.",
        "output": "Regulatory risk profile and governance prerequisites per candidate use case."
      }
    ],
    "methodologyIntro": "Delivered across four phases—Mobilise, Discover, Analyse, and Report—limiting the first 90-day wave to the top three highest-value, feasible use cases.",
    "methodologyTiers": [
      {
        "label": "Stage 01",
        "title": "Structured Discovery & Evidence",
        "description": "Gathers candidate use cases from business leads alongside read-only platform and data evidence to ground feasibility in real environment state."
      },
      {
        "label": "Stage 02",
        "title": "Four-Factor Scoring & Sizing",
        "description": "Scores candidates across value, feasibility, data readiness, and regulatory risk, pairing conservative benefit estimates with finance review."
      },
      {
        "label": "Stage 03",
        "title": "First-Wave Plan & Business Case",
        "description": "Selects up to three priority use cases for the first 90 days and delivers an executive-ready, funded implementation roadmap."
      }
    ]
  },
  "016": {
    "kind": "Implementation",
    "architectureTitle": "Target Edge-to-Cloud Vision AI Architecture",
    "architectureSummary": "Store camera feeds are processed locally at the edge via Azure IoT Edge / Arc with automated people-blurring before telemetry and exception events stream into a private Event Hubs namespace. Custom vision models trained in a private Azure Machine Learning workspace and Azure AI Vision run behind Private Endpoints inside a spoke VNet with Entra ID authentication.",
    "componentGroups": [
      {
        "title": "Edge Capture & Privacy Controls",
        "items": [
          "Store camera feeds processed locally on Azure IoT Edge / Arc runtime",
          "On-device people blurring and exclusion filters prior to cloud transmission",
          "Limited image retention policies supporting UK GDPR and store privacy requirements",
          "Private Event Hubs namespace (Standard, Entra ID only, TLS 1.2+) ingesting edge events"
        ]
      },
      {
        "title": "Vision AI & MLOps Platform",
        "items": [
          "Azure AI Vision (ComputerVision S0) with local authentication and public access disabled",
          "Azure Machine Learning workspace (managed network) for custom shelf-gap model training",
          "Scale-to-zero compute clusters and dedicated ML storage behind Private Endpoints",
          "Private Storage Account (ZRS, shared keys disabled) for curated training datasets"
        ]
      },
      {
        "title": "Store Alerts & Landing Zone Security",
        "items": [
          "Event-driven alert routing delivering actionable tasks to store staff devices",
          "Spoke VNet with Private Endpoints and hub DNS Private Resolver integration",
          "Premium Key Vault (RBAC, purge protection) and central Log Analytics / Application Insights",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate physical camera infrastructure and store privacy governance from edge-to-cloud Vision AI deployment.",
    "responsibilityRows": [
      {
        "domain": "Store Cameras & Edge Hardware",
        "customer": "Procure, install, and maintain store cameras, edge compute hardware, and store network connectivity.",
        "devopstrio": "Configure Azure IoT Edge / Arc inference containers, people-blurring pipelines, and Event Hubs ingestion."
      },
      {
        "domain": "Privacy & DPIA Governance",
        "customer": "Complete DPIA, deploy in-store customer/staff signage, and approve image retention periods.",
        "devopstrio": "Implement privacy-by-design blurring, short retention controls, and Entra ID / Private Endpoint isolation."
      },
      {
        "domain": "Vision Models & Azure IaC",
        "customer": "Provide pilot store sample imagery and operational POS/planogram reference data.",
        "devopstrio": "Deploy AML, Azure AI Vision, Event Hubs, Storage, and Key Vault via IaC and tune gap-detection models."
      },
      {
        "domain": "Store Rollout & Handover",
        "customer": "Coordinate pilot store staff, validate alert workflows, and operate post-handover.",
        "devopstrio": "Integrate store-device alerts, switch policies to Deny, and deliver operational runbooks."
      }
    ]
  },
  "017": {
    "kind": "Implementation",
    "architectureTitle": "Target Supply Chain Agent Architecture",
    "architectureSummary": "The Supply Chain and Inventory Agent runs on Foundry Agent Service and Container Apps inside a segmented spoke Virtual Network. It accesses ERP, Fabric, and forecasting APIs strictly through allow-listed tools on an internal API Management AI gateway using a dedicated Entra identity, persisting state in private Cosmos DB and routing every replenishment order to planners for approval.",
    "componentGroups": [
      {
        "title": "Agent Runtime & Gateway",
        "items": [
          "Foundry Agent Service and Container Apps environment (internal ingress) hosting agent logic",
          "Microsoft Foundry account and project running regional GPT-4o with Prompt Shields",
          "Internal API Management AI gateway exposing strictly allow-listed ERP and forecast tools",
          "Dedicated Entra agent identity enforcing least-privilege access without shared keys"
        ]
      },
      {
        "title": "Data, State & Forecasting",
        "items": [
          "Microsoft Fabric capacity and ERP connectors supplying live stock, sales, and lead-time data",
          "Integration with upstream demand forecasting model outputs",
          "Private Cosmos DB serverless (Entra ID only) persisting agent state and audit trails",
          "Explained replenishment order proposals with stock-out risk rationale"
        ]
      },
      {
        "title": "Approval, Network & Controls",
        "items": [
          "Human-in-the-loop planner approval workflow via ERP approval queues or Microsoft Teams",
          "Spoke VNet with Private Endpoints for Foundry, Cosmos DB, and Premium Key Vault",
          "Log Analytics (90-day retention) and Application Insights tracing every agent run",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate ERP/API availability and planner governance from private agentic infrastructure and tool-integration delivery.",
    "responsibilityRows": [
      {
        "domain": "ERP, Forecast Data & APIs",
        "customer": "Provide ERP/WMS APIs, daily supplier lead-time feeds, and upstream forecast data access.",
        "devopstrio": "Publish allow-listed ERP and Fabric tools through the internal API Management AI gateway."
      },
      {
        "domain": "Azure Agent Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, internal APIM, Container Apps, Cosmos DB, Fabric capacity, and Key Vault via IaC."
      },
      {
        "domain": "Agent Identity & Approvals",
        "customer": "Assign named business owner, approve Entra agent identity permissions, and review planner approval thresholds.",
        "devopstrio": "Configure dedicated Entra identity, Prompt Shields, tool allow-lists, and human-in-the-loop approval flows."
      },
      {
        "domain": "Pilot & Operational Handover",
        "customer": "Engage supply chain planners in pilot validation and assume ownership post-handover.",
        "devopstrio": "Execute evaluation and security tests, enforce Deny-mode policies, and deliver operational runbooks."
      }
    ]
  },
  "018": {
    "kind": "Implementation",
    "architectureTitle": "Target Private Enterprise Chat Architecture",
    "architectureSummary": "Authenticated users access the chat interface hosted on Container Apps via Microsoft Entra ID single sign-on inside a segmented spoke Virtual Network. Prompts route through an internal API Management AI gateway enforcing per-user quotas to Microsoft Foundry and Azure AI Content Safety over Private Endpoints, with conversation history stored in private Cosmos DB under strict retention limits.",
    "componentGroups": [
      {
        "title": "Chat Front End & SSO",
        "items": [
          "Container Apps environment (internal ingress) hosting web and Teams chat interface",
          "Microsoft Entra ID single sign-on ensuring all sessions remain within the customer tenant",
          "File upload support and explicit UI disclosure for AI-generated responses",
          "Private Storage Account (ZRS, Entra ID only, no shared keys) supporting session uploads"
        ]
      },
      {
        "title": "AI Gateway, Models & Safety",
        "items": [
          "Internal API Management AI gateway enforcing per-user token limits and usage attribution",
          "Microsoft Foundry account and project hosting regional Azure OpenAI chat models",
          "Azure AI Content Safety with Prompt Shields filtering jailbreaks and unsafe outputs",
          "Zero direct model calls; all inference authenticated via managed identities"
        ]
      },
      {
        "title": "History, Audit & Guardrails",
        "items": [
          "Private Cosmos DB serverless (Entra ID only) storing conversation history with short retention limits",
          "Premium Key Vault (RBAC, purge protection) and Private Endpoints for all PaaS services",
          "Prompt and response audit logs in Log Analytics restricted to authorised reviewers",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate tenant identity/policy governance and user guidance from private chat platform deployment and gateway controls.",
    "responsibilityRows": [
      {
        "domain": "Platform Hub & Entra SSO",
        "customer": "Maintain hub VNet/DNS, approve Entra ID app registration, and configure Conditional Access.",
        "devopstrio": "Deploy spoke VNet, Private Endpoints, internal APIM gateway, Container Apps, and Entra SSO integration."
      },
      {
        "domain": "Model Access & Quotas",
        "customer": "Confirm approved chat models, per-user token limits, and monthly consumption budgets.",
        "devopstrio": "Configure Microsoft Foundry deployments, APIM rate-limiting policies, and token metrics."
      },
      {
        "domain": "Data Retention & Safety",
        "customer": "Approve conversation retention limits, DLP guidance, and DPIA requirements.",
        "devopstrio": "Implement Cosmos DB TTL retention, Azure AI Content Safety Prompt Shields, and restricted audit logs."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Manage internal communications to transition staff off public AI tools and sign off phase gates.",
        "devopstrio": "Run security and evaluation checks, promote to production with Deny policies, and deliver runbooks."
      }
    ]
  },
  "019": {
    "kind": "Implementation",
    "architectureTitle": "Target Customer Service Email Agent Architecture",
    "architectureSummary": "Inbound emails from shared mailboxes or CRM enter the Container Apps and Foundry Agent Service runtime within a segmented spoke Virtual Network. The agent grounds responses using private Azure AI Search and read-only CRM/order APIs allow-listed behind an internal API Management AI gateway, routing complaints and vulnerable customers directly to staff.",
    "componentGroups": [
      {
        "title": "Email Channel & Agent Runtime",
        "items": [
          "Shared mailbox and CRM integration ingesting inbound customer enquiries",
          "Foundry Agent Service and Container Apps (internal ingress) orchestrating triage and response drafting",
          "Dedicated Entra agent identity with least-privilege permissions and zero shared keys",
          "Configurable automation boundaries resolving only pre-approved simple requests"
        ]
      },
      {
        "title": "Grounding & Allow-Listed Tools",
        "items": [
          "Internal API Management AI gateway exposing read-only CRM and order-system lookup tools",
          "Microsoft Foundry (GPT-4o, text-embedding-3-large) with Prompt Shields and content filtering",
          "Private Azure AI Search grounding replies in approved service policies and knowledge",
          "Private Cosmos DB serverless (Entra ID only) recording agent run state and audit traces"
        ]
      },
      {
        "title": "Safeguards, Network & Monitoring",
        "items": [
          "Automated detection rules escalating complaints and vulnerable customers to human staff",
          "Spoke VNet with Private Endpoints for Foundry, AI Search, Cosmos DB, and Key Vault",
          "Log Analytics (90-day retention) and Application Insights tracing every email handling run",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate mailbox/CRM API provisioning and vulnerability policy rules from private agentic infrastructure and tool-gateway delivery.",
    "responsibilityRows": [
      {
        "domain": "Mailbox, CRM & Order APIs",
        "customer": "Provide shared mailbox access, CRM/order system read-only APIs, and define vulnerable-customer/complaint rules.",
        "devopstrio": "Integrate email channels, publish allow-listed read-only tools in APIM, and implement escalation routing."
      },
      {
        "domain": "Azure Agent Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, internal APIM, AI Search, Cosmos DB, Container Apps, and Key Vault via IaC."
      },
      {
        "domain": "Identity & Safety Controls",
        "customer": "Approve Entra agent identity roles, DPIA, and automated resolution boundaries.",
        "devopstrio": "Configure dedicated Entra identity, Prompt Shields, tool allow-lists, and response sampling telemetry."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Sample drafted/automated email responses during pilot and accept phase gates.",
        "devopstrio": "Execute evaluation and security tests, enforce Deny-mode policies, and deliver operational runbooks."
      }
    ]
  },
  "020": {
    "kind": "Implementation",
    "architectureTitle": "Target AI Data Security Posture & DLP Architecture",
    "architectureSummary": "This engagement configures Microsoft Purview DSPM for AI, endpoint and browser DLP, Insider Risk Management, and Defender for Cloud AI posture controls within your existing Microsoft 365 and Azure tenant, with no new Azure workload infrastructure deployed.",
    "componentGroups": [
      {
        "title": "Purview DSPM for AI",
        "items": [
          "DSPM for AI enabled with tailored recommended posture policies",
          "Continuous visibility of sensitive data types in prompts and responses",
          "Activity explorer and audit trails for Microsoft 365 Copilot and external AI tools",
          "Integration of AI usage signals into Insider Risk Management"
        ]
      },
      {
        "title": "Endpoint & Browser DLP",
        "items": [
          "Browser and endpoint DLP policies covering third-party generative AI sites",
          "Graduated coach-then-block user enforcement for sensitive data pastes and uploads",
          "Alignment with existing Purview sensitivity labels and UK GDPR rules",
          "Policy simulation mode before production enforcement"
        ]
      },
      {
        "title": "Posture & Incident Response",
        "items": [
          "Defender for Cloud AI security posture management discovering AI resources",
          "Defender for Cloud threat protection enabled across AI subscriptions",
          "SOC triage playbooks for prompt-injection and data-leakage alerts",
          "Configuration log and closure sign-off"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate Microsoft 365/Purview policy sign-off and SOC operations from DSPM and DLP configuration delivery.",
    "responsibilityRows": [
      {
        "domain": "Tenant & Licensing",
        "customer": "Provide Purview, Defender for Cloud, and endpoint management licences alongside tenant admin access.",
        "devopstrio": "Validate prerequisites and configure DSPM for AI, endpoint/browser DLP, and Defender AI posture."
      },
      {
        "domain": "DLP & Risk Thresholds",
        "customer": "Approve blocked third-party AI sites, coach-vs-block thresholds, and DPIA requirements.",
        "devopstrio": "Implement tailored Purview DLP rules, Insider Risk AI indicators, and simulation testing."
      },
      {
        "domain": "SOC & Incident Handling",
        "customer": "Provide SOC team participation and own ongoing alert triage after handover.",
        "devopstrio": "Deliver AI incident handling playbooks, configuration log, and operational handover."
      }
    ]
  },
  "021": {
    "kind": "Implementation",
    "architectureTitle": "Target Sales Account Research Agent Architecture",
    "architectureSummary": "The agent runs on Foundry Agent Service and Container Apps inside a segmented spoke Virtual Network. It reads CRM accounts under the user's permissions and queries approved web search tools exclusively through an internal API Management AI gateway over Private Endpoints, storing run state in private Cosmos DB and writing cited briefs back to the CRM record.",
    "componentGroups": [
      {
        "title": "Agent Runtime & AI Gateway",
        "items": [
          "Foundry Agent Service and Container Apps environment (internal ingress) orchestrating research",
          "Microsoft Foundry account and project hosting regional GPT-4o with Prompt Shields",
          "Internal API Management AI gateway exposing allow-listed CRM and web-search tools",
          "Dedicated Entra agent identity with least-privilege access and zero shared keys"
        ]
      },
      {
        "title": "CRM & External Research",
        "items": [
          "Dynamics 365 or Salesforce API integration enforcing user-delegated CRM permissions",
          "Approved external search connectors returning cited public account facts",
          "Standardised brief template formatting and write-back to target CRM account records",
          "Private Cosmos DB serverless (Entra ID only) persisting agent run traces"
        ]
      },
      {
        "title": "Network, Secrets & Guardrails",
        "items": [
          "Spoke VNet with dedicated subnets for Private Endpoints, internal APIM, and Container Apps",
          "Premium Key Vault (RBAC, purge protection) and central Log Analytics / Application Insights",
          "All PaaS services isolated on Private Endpoints with local authentication disabled",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate CRM API access and brief-template approval from private agentic infrastructure and tool-gateway delivery.",
    "responsibilityRows": [
      {
        "domain": "CRM & Search Sources",
        "customer": "Provide Dynamics 365 or Salesforce API access, user permission model, and approved brief template.",
        "devopstrio": "Configure permission-aware CRM tools, approved web-search connectors, and brief write-back."
      },
      {
        "domain": "Azure Agent Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, internal APIM gateway, Container Apps, Cosmos DB, and Key Vault via IaC."
      },
      {
        "domain": "Identity & Safety Controls",
        "customer": "Assign named agent owner, approve Entra agent identity permissions, and sign off DPIA.",
        "devopstrio": "Configure dedicated Entra identity, Prompt Shields, tool allow-lists, and audit tracing."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Coordinate sales pilot users to review brief accuracy and accept phase gates.",
        "devopstrio": "Run evaluation and security tests, switch policies to Deny, and deliver operational runbooks."
      }
    ]
  },
  "022": {
    "kind": "Implementation",
    "architectureTitle": "Target Agent Identity & Access Governance Architecture",
    "architectureSummary": "Each agent receives a distinct Microsoft Entra Agent ID or managed identity governed by Conditional Access and quarterly owner-attested access reviews, backed by a private Foundry and Key Vault landing zone with zero shared keys and full diagnostic export to Log Analytics.",
    "componentGroups": [
      {
        "title": "Entra Agent Identity Controls",
        "items": [
          "One dedicated Entra agent identity or managed identity provisioned per agent",
          "Elimination of shared secrets, API keys, and standing privileged admin roles",
          "Agent access to data aligned to human least-privilege authorisation rules",
          "Alignment with Microsoft Agent 365 inventory and named agent ownership"
        ]
      },
      {
        "title": "Conditional Access & Reviews",
        "items": [
          "Entra Conditional Access policies constraining agent sign-ins where supported",
          "Automated quarterly access reviews requiring owner attestation of agent permissions",
          "Purview data security and audit logging covering agent identity interactions",
          "Azure Policy guardrails enforcing Entra-only authentication (Audit to Deny)"
        ]
      },
      {
        "title": "Private Azure Landing Zone",
        "items": [
          "Spoke VNet with Private Endpoint subnet peered to the enterprise hub",
          "Microsoft Foundry account and project with local authentication disabled",
          "Premium Key Vault (RBAC, purge protection) and central Log Analytics / Application Insights",
          "Monthly budget threshold alerts and resource tagging enforcement"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate tenant identity approvals and ongoing owner attestations from IaC deployment and Entra control configuration.",
    "responsibilityRows": [
      {
        "domain": "Entra Tenant & Ownership",
        "customer": "Provide Entra ID tenant access, required licences, and named owners for every registered agent.",
        "devopstrio": "Design and configure per-agent Entra identity patterns and Agent 365 ownership mapping."
      },
      {
        "domain": "Conditional Access & Reviews",
        "customer": "Approve Conditional Access policies; agent owners execute quarterly permission attestations.",
        "devopstrio": "Configure Conditional Access baselines, quarterly access review schedules, and Purview audit rules."
      },
      {
        "domain": "Private Azure Foundation",
        "customer": "Operate hub VNet, Azure Firewall, and DNS Private Resolver.",
        "devopstrio": "Deploy spoke VNet, Private Endpoints, Foundry, Key Vault, and Deny-mode policies via IaC."
      },
      {
        "domain": "Handover & Operations",
        "customer": "Sign off configuration log and operate ongoing identity governance after handover.",
        "devopstrio": "Deliver operational runbooks, diagnostic dashboards, and knowledge transfer."
      }
    ]
  },
  "023": {
    "kind": "Implementation",
    "architectureTitle": "Target HR Onboarding Agent Architecture",
    "architectureSummary": "New starters interact with the HR Onboarding Agent via Microsoft Teams backed by Foundry Agent Service and Container Apps in a segmented spoke Virtual Network. HR task reads and ITSM equipment/account requests route through allow-listed API Management tools using a dedicated Entra identity, with onboarding state tracked in private Cosmos DB.",
    "componentGroups": [
      {
        "title": "Teams Channel & Agent Runtime",
        "items": [
          "Microsoft Teams channel delivering scheduled onboarding guidance to new starters",
          "Foundry Agent Service and Container Apps (internal ingress) orchestrating onboarding journeys",
          "Microsoft Foundry (GPT-4o) with Prompt Shields and content filtering",
          "Manager progress view surfacing onboarding task completion status"
        ]
      },
      {
        "title": "HR & ITSM Tool Integration",
        "items": [
          "Internal API Management AI gateway publishing allow-listed HR and ITSM APIs",
          "Read integration to HR system onboarding tasks and milestone schedules",
          "Controlled ITSM ticket creation for equipment and standard account requests",
          "Private Cosmos DB serverless (Entra ID only) storing journey state and audit traces"
        ]
      },
      {
        "title": "Identity, Network & Guardrails",
        "items": [
          "Dedicated Entra agent identity with least-privilege access and human approval gates",
          "Spoke VNet with Private Endpoints for Foundry, Cosmos DB, and Premium Key Vault",
          "Log Analytics (90-day retention) and Application Insights tracing every run",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate HR/ITSM API access and onboarding content ownership from private agentic infrastructure and workflow delivery.",
    "responsibilityRows": [
      {
        "domain": "HR & ITSM Systems",
        "customer": "Provide HR onboarding task data, ITSM API access, and approved new-starter journey schedules.",
        "devopstrio": "Publish allow-listed HR and ITSM tools in APIM and build Teams onboarding workflows."
      },
      {
        "domain": "Azure Agent Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, internal APIM, Container Apps, Cosmos DB, and Key Vault via IaC."
      },
      {
        "domain": "Identity & Approvals",
        "customer": "Assign named business owner, approve Entra agent identity permissions, and sign off DPIA.",
        "devopstrio": "Configure dedicated Entra identity, Prompt Shields, and approval gates for ITSM requests."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Coordinate HR and manager pilot cohort and accept phase gates.",
        "devopstrio": "Execute evaluation and security tests, switch policies to Deny, and deliver runbooks."
      }
    ]
  },
  "024": {
    "kind": "Assessment",
    "matrixIntro": "The assessment uses read-only queries across Power Platform, Microsoft 365, Entra ID, Purview, and Defender alongside stakeholder workshops to evaluate five agent-governance domains against Agent 365 capabilities.",
    "matrixRows": [
      {
        "reviewArea": "Inventory",
        "evidence": "Read-only Power Platform admin centre, Agent 365, Foundry, and Microsoft Graph agent discovery.",
        "output": "Consolidated agent inventory identifying active, unowned, and shadow agents."
      },
      {
        "reviewArea": "Identity",
        "evidence": "Read-only Entra ID sign-in logs, app registrations, and agent credential/role assignments.",
        "output": "Agent identity gap register covering shared secrets, Conditional Access, and access reviews."
      },
      {
        "reviewArea": "Data",
        "evidence": "Read-only Purview audit exports, sensitivity label coverage, and agent data-connector permissions.",
        "output": "Data boundary findings and Purview audit alignment recommendations."
      },
      {
        "reviewArea": "Threat Protection",
        "evidence": "Defender for Cloud / Defender posture settings and agent runtime security controls.",
        "output": "Threat protection gap list and monitoring recommendations."
      },
      {
        "reviewArea": "Process",
        "evidence": "Stakeholder workshops reviewing maker approvals, risk tiering, and lifecycle retirement.",
        "output": "Target Agent 365 governance workflow and costed implementation roadmap."
      }
    ],
    "methodologyIntro": "Delivered across four phases—Mobilise, Discover, Analyse, and Report—combining automated read-only tenant discovery with governance workshops.",
    "methodologyTiers": [
      {
        "label": "Phase 01",
        "title": "Read-Only Agent Discovery",
        "description": "Gathers agent inventories and configuration evidence from Power Platform, M365, Entra ID, Purview, and Defender without altering tenant settings."
      },
      {
        "label": "Phase 02",
        "title": "Five-Domain Maturity Analysis",
        "description": "Evaluates Inventory, Identity, Data, Threat Protection, and Process controls on the five-level maturity scale and ranks operational risks."
      },
      {
        "label": "Phase 03",
        "title": "Costed Agent 365 Plan",
        "description": "Maps findings to Agent 365 capabilities and delivers a prioritised quick-wins, 90-day, and 12-month governance roadmap."
      }
    ]
  },
  "025": {
    "kind": "Implementation",
    "architectureTitle": "Target Copilot Extensibility & Managed Environment Architecture",
    "architectureSummary": "Microsoft 365 Copilot declarative agents and ACL-trimmed Copilot connectors integrate with enterprise APIs through an internal API Management gateway and Container Apps inside a segmented spoke Virtual Network, governed across separate dev, test, and production Power Platform Managed Environments with DLP policies.",
    "componentGroups": [
      {
        "title": "Copilot Agents & Connectors",
        "items": [
          "Microsoft 365 Copilot connectors indexing external business repositories with ACL enforcement",
          "Role-specific declarative agents grounded in Microsoft 365 and connector data",
          "Strict inheritance of source-system user permissions at query time",
          "Controlled publishing to approved business maker and user groups"
        ]
      },
      {
        "title": "Power Platform & API Gateway",
        "items": [
          "Separate dev, test, and production Power Platform Managed Environments",
          "Environment-level DLP policies restricting unapproved external connectors",
          "Internal API Management gateway publishing governed API plugins over VNet connectivity",
          "Container Apps environment (internal ingress) hosting custom plugin adapters"
        ]
      },
      {
        "title": "Security, Network & Audit",
        "items": [
          "Spoke VNet with Private Endpoints, Premium Key Vault (RBAC, purge protection), and NSGs",
          "Entra ID authentication with local keys and public PaaS access disabled",
          "Log Analytics (90-day retention) and Application Insights telemetry",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate Power Platform licensing and business-system API ownership from connector, declarative agent, and internal APIM delivery.",
    "responsibilityRows": [
      {
        "domain": "Power Platform & M365",
        "customer": "Provide M365 Copilot and Power Platform licences, maker groups, and target external content sources.",
        "devopstrio": "Configure dev/test/prod Managed Environments, environment DLP, Copilot connectors, and declarative agents."
      },
      {
        "domain": "Azure API & Network",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and expose back-office APIs.",
        "devopstrio": "Deploy spoke VNet, internal APIM gateway, Container Apps adapters, and Key Vault via IaC."
      },
      {
        "domain": "Security & Compliance",
        "customer": "Approve ACL mapping, connector DLP rules, and DPIA requirements.",
        "devopstrio": "Enforce ACL trimming on connectors, managed identities, and Deny-mode Azure Policies."
      },
      {
        "domain": "Handover & Maker Support",
        "customer": "Adopt maker governance model and support business makers after handover.",
        "devopstrio": "Deliver deployment pipelines, operational runbooks, and maker enablement handover."
      }
    ]
  },
  "026": {
    "kind": "Implementation",
    "architectureTitle": "Target Brand-Grounded Content Generation Architecture",
    "architectureSummary": "Marketing and product teams trigger draft generation from a Container Apps / Power Automate workflow inside a spoke Virtual Network. Requests route through an internal API Management AI gateway to Microsoft Foundry and Azure AI Content Safety over Private Endpoints, grounding drafts in PIM facts and brand rules before human approval and CMS/PIM export.",
    "componentGroups": [
      {
        "title": "Generator & Content Safety",
        "items": [
          "Microsoft Foundry account and project running regional GPT-4o behind Private Endpoints",
          "Internal API Management AI gateway enforcing token quotas and managed-identity calls",
          "Azure AI Content Safety with Prompt Shields and brand-compliance validation checks",
          "Private Storage Account (ZRS, Entra ID only) storing brand guidelines and exemplar assets"
        ]
      },
      {
        "title": "PIM Grounding & Approval Flow",
        "items": [
          "Integration with PIM or product catalogue supplying verified product attributes",
          "Power Automate or Container Apps review workflow mandating human sign-off prior to publishing",
          "Controlled export of approved copy back to CMS or PIM systems",
          "Explicit AI-generated metadata/disclosure on drafted outputs"
        ]
      },
      {
        "title": "Network, Secrets & Audit",
        "items": [
          "Spoke VNet with Private Endpoints, internal APIM, and Container Apps subnets",
          "Premium Key Vault (RBAC, purge protection) and zero local authentication",
          "Prompt and response audit logs in Log Analytics restricted to authorised reviewers",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate brand-guideline ownership, PIM access, and editorial sign-off from private Azure OpenAI and workflow deployment.",
    "responsibilityRows": [
      {
        "domain": "Brand Guidelines & PIM",
        "customer": "Provide approved brand guidelines, exemplar copy, and PIM/CMS API access.",
        "devopstrio": "Configure PIM fact grounding, brand-check prompts, and approved-copy export connectors."
      },
      {
        "domain": "Azure AI Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, internal APIM, Content Safety, Container Apps, Storage, and Key Vault via IaC."
      },
      {
        "domain": "Editorial Approval & Safety",
        "customer": "Assign editorial reviewers to approve drafts and sign off DPIA requirements.",
        "devopstrio": "Implement human-approval workflow gates, Prompt Shields, and restricted audit logs."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Evaluate draft quality with marketing teams and accept phase gates.",
        "devopstrio": "Execute evaluation and security tests, enforce Deny policies, and deliver runbooks."
      }
    ]
  },
  "027": {
    "kind": "Implementation",
    "architectureTitle": "Target Multimodal Product Description Architecture",
    "architectureSummary": "Product attributes and images from the PIM trigger batch or on-demand generation in Container Apps inside a segmented spoke Virtual Network. Requests route through an internal API Management AI gateway to vision-capable GPT-4o on Microsoft Foundry over Private Endpoints, applying channel templates before writing approved copy back to PIM or e-commerce APIs.",
    "componentGroups": [
      {
        "title": "PIM Ingestion & Batch Trigger",
        "items": [
          "Event-driven batch pipeline triggered when new SKUs or product attributes enter PIM",
          "Multimodal input combining structured product specifications with product imagery",
          "Private Storage Account (ZRS, Entra ID only, no shared keys) staging batch inputs/outputs",
          "Controlled write-back of approved titles and descriptions to PIM or e-commerce APIs"
        ]
      },
      {
        "title": "Vision-Capable AI Gateway",
        "items": [
          "Internal API Management AI gateway enforcing token quotas and managed-identity calls",
          "Microsoft Foundry account and project hosting vision-capable regional GPT-4o",
          "Channel-specific prompt templates controlling length, formatting, and brand tone",
          "Prompt Shields and content filtering applied on every model deployment"
        ]
      },
      {
        "title": "Network, Identity & Audit",
        "items": [
          "Spoke VNet with Private Endpoints, internal APIM, and Container Apps subnets",
          "Premium Key Vault (RBAC, purge protection) and zero local authentication",
          "Restricted audit logging in Log Analytics and Application Insights",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate PIM data quality, channel templates, and editorial sign-off from private multimodal Azure OpenAI deployment.",
    "responsibilityRows": [
      {
        "domain": "PIM & E-Commerce Systems",
        "customer": "Provide PIM and e-commerce API access, product images, and channel-specific copy templates.",
        "devopstrio": "Build PIM/image ingestion, channel-template generation, and approved-text write-back."
      },
      {
        "domain": "Azure AI Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, internal APIM, Container Apps, Storage, and Key Vault via IaC."
      },
      {
        "domain": "Quality & Compliance",
        "customer": "Approve accuracy thresholds, AI-generated disclosure rules, and DPIA requirements.",
        "devopstrio": "Configure Prompt Shields, restricted prompt/response audit logs, and Deny-mode policies."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Review batch output quality with merchandising teams and accept phase gates.",
        "devopstrio": "Run evaluation and security tests, promote to production, and deliver runbooks."
      }
    ]
  },
  "028": {
    "kind": "Implementation",
    "architectureTitle": "Target Section-Level Regulatory RAG Architecture",
    "architectureSummary": "Legal and compliance users query a web application on Container Apps inside a segmented spoke Virtual Network. Model calls route through an internal API Management AI gateway to Microsoft Foundry, while Azure AI Search performs semantic ranking with document ACL trimming across separate section-level regulatory and internal interpretation indexes.",
    "componentGroups": [
      {
        "title": "Structure-Aware Ingestion",
        "items": [
          "Ingestion pipelines reading regulator publications and internal legal repositories",
          "Azure AI Document Intelligence preserving section-level regulatory hierarchy",
          "Automated change monitoring detecting regulatory updates for re-indexing",
          "Separate, labelled indexing of compliance-approved internal interpretations"
        ]
      },
      {
        "title": "Security-Trimmed Search & Models",
        "items": [
          "Private Azure AI Search with semantic ranking and document ACL security trimming",
          "Microsoft Foundry (GPT-4o, text-embedding-3-large) behind Private Endpoints",
          "Internal API Management AI gateway enforcing quotas and managed-identity calls",
          "Answers citing exact regulation sections alongside approved internal interpretations"
        ]
      },
      {
        "title": "Network, Interface & Audit",
        "items": [
          "Container Apps web interface (internal ingress) within a segmented spoke VNet",
          "Private Storage Account (ZRS, Entra ID only) and Premium Key Vault (RBAC, purge protection)",
          "Log Analytics (90-day retention) and Application Insights telemetry",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate regulatory source selection and compliance interpretation sign-off from section-level RAG infrastructure delivery.",
    "responsibilityRows": [
      {
        "domain": "Regulatory & Legal Content",
        "customer": "Specify target regulator sources, approve internal interpretations, and apply Purview sensitivity labels.",
        "devopstrio": "Configure section-aware Document Intelligence ingestion, change monitoring, and dual-index separation."
      },
      {
        "domain": "Azure RAG Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, internal APIM, AI Search, Container Apps, Storage, and Key Vault via IaC."
      },
      {
        "domain": "Security & Access Control",
        "customer": "Approve Entra ID access groups, ACL permissions, and DPIA requirements.",
        "devopstrio": "Implement query-time ACL security trimming, Prompt Shields, and Deny-mode Azure Policies."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Validate citation accuracy with legal/compliance reviewers and accept phase gates.",
        "devopstrio": "Execute retrieval evaluations, promote to production, and deliver operational runbooks."
      }
    ]
  },
  "029": {
    "kind": "Implementation",
    "architectureTitle": "Target Private Tender Search & Embedding Architecture",
    "architectureSummary": "Approved tender and RFP documents in SharePoint—tagged with owners and review dates—are extracted via Azure AI Document Intelligence, embedded via private Microsoft Foundry, and indexed in private Azure AI Search. All PaaS services sit behind Private Endpoints in a spoke Virtual Network with query-time ACL security trimming and automatic exclusion of expired content.",
    "componentGroups": [
      {
        "title": "SharePoint Source Governance",
        "items": [
          "SharePoint tender repository structured with owner, category, and review-date metadata",
          "Purview sensitivity label checks during ingestion to exclude restricted files",
          "Automated filtering excluding expired content beyond its review date from search results",
          "Incremental permission sync maintaining alignment with SharePoint ACLs"
        ]
      },
      {
        "title": "Embedding & Semantic Search",
        "items": [
          "Private Azure AI Search (Standard SKU, semantic ranker enabled) behind Private Endpoints",
          "Microsoft Foundry regional text-embedding-3-large deployment with local keys disabled",
          "Azure AI Document Intelligence extraction with consistent chunking and source citations",
          "Query-time ACL security trimming ensuring bid teams only see entitled content"
        ]
      },
      {
        "title": "Private Network & Guardrails",
        "items": [
          "Spoke VNet with Private Endpoint subnet peered to the central hub",
          "Private Storage Account (ZRS, Entra ID only) and Premium Key Vault (RBAC, purge protection)",
          "Log Analytics (90-day retention) and Application Insights telemetry",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate SharePoint content ownership and review-date hygiene from private AI Search and embedding infrastructure delivery.",
    "responsibilityRows": [
      {
        "domain": "SharePoint & Content Hygiene",
        "customer": "Maintain approved tender content in SharePoint, assign content owners, and keep review dates current.",
        "devopstrio": "Configure metadata-aware ingestion, expiry filtering, and label-exclusion rules."
      },
      {
        "domain": "Azure Search Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and provide ingestion read access.",
        "devopstrio": "Deploy spoke VNet, Private Endpoints, AI Search, Foundry embeddings, Storage, and Key Vault via IaC."
      },
      {
        "domain": "Security & Access Control",
        "customer": "Approve Entra ID groups, Purview labels, and DPIA requirements.",
        "devopstrio": "Implement ACL-trimmed search indexes, Entra-only authentication, and Deny-mode policies."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Validate search relevance with bid and sales teams and accept phase gates.",
        "devopstrio": "Execute search quality evaluations, promote to production, and deliver runbooks."
      }
    ]
  },
  "030": {
    "kind": "Implementation",
    "architectureTitle": "Target Finance Reconciliation Agent Architecture",
    "architectureSummary": "The Finance Reconciliation Agent runs on Foundry Agent Service and Container Apps inside a segmented spoke Virtual Network. Using a dedicated Entra identity, it reads ERP and bank feed transactions through read-only tools on an internal API Management AI gateway, logs all matching rationale in private Cosmos DB, and routes proposed adjustments to finance via Power Automate or ERP approval workflows.",
    "componentGroups": [
      {
        "title": "Agent & Matching Engine",
        "items": [
          "Foundry Agent Service and Container Apps (internal ingress) running rules-first reconciliation",
          "Microsoft Foundry (GPT-4o) explaining unmatched exceptions with Prompt Shields enabled",
          "Dedicated Entra agent identity with least-privilege access and zero shared keys",
          "Complete reasoning and matching audit trail logged for financial audit review"
        ]
      },
      {
        "title": "Read-Only Tools & Approvals",
        "items": [
          "Internal API Management AI gateway exposing strictly read-only ERP and bank-feed tools",
          "Power Automate or ERP workflow routing proposed adjustments for mandatory finance sign-off",
          "Zero direct ledger posting capability granted to the agent identity",
          "Private Cosmos DB serverless (Entra ID only) persisting exception cases and audit logs"
        ]
      },
      {
        "title": "Network, Storage & Guardrails",
        "items": [
          "Spoke VNet with Private Endpoints, internal APIM, and Container Apps subnets",
          "Private Storage Account (ZRS, Entra ID only) and Premium Key Vault (RBAC, purge protection)",
          "Log Analytics (90-day retention) and Application Insights telemetry",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate ERP/bank-feed access and finance approval authority from private agentic infrastructure and workflow delivery.",
    "responsibilityRows": [
      {
        "domain": "ERP & Bank Feeds",
        "customer": "Provide read-only ERP and bank-feed APIs alongside deterministic reconciliation rules.",
        "devopstrio": "Publish allow-listed read-only tools in APIM and build rules-plus-agent exception matching."
      },
      {
        "domain": "Azure Agent Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, internal APIM, Container Apps, Cosmos DB, Storage, and Key Vault via IaC."
      },
      {
        "domain": "Approvals & Auditability",
        "customer": "Assign named finance owner, approve Entra identity permissions, and review proposed adjustments.",
        "devopstrio": "Configure Power Automate/ERP approval gates, Prompt Shields, and immutable reasoning audit logs."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Validate reconciliation accuracy with finance controllers and accept phase gates.",
        "devopstrio": "Execute evaluation and security tests, switch policies to Deny, and deliver runbooks."
      }
    ]
  },
  "031": {
    "kind": "Implementation",
    "architectureTitle": "Target LLMOps & Evaluation Pipeline Architecture",
    "architectureSummary": "Prompts, model configurations, and golden test sets are versioned in Git and evaluated automatically by GitHub Actions or Azure DevOps pipelines against private Microsoft Foundry deployments (GPT-4o and embeddings) behind Private Endpoints, blocking promotion on quality or safety regressions and exporting continuous telemetry to Log Analytics.",
    "componentGroups": [
      {
        "title": "Source Control & Versioning",
        "items": [
          "Git repositories versioning prompts, system instructions, model parameters, and golden test sets",
          "Pull-request review workflows ensuring repeatable, auditable, and reversible prompt changes",
          "Private Storage Account (ZRS, Entra ID only, no shared keys) archiving evaluation artefacts",
          "Premium Key Vault (RBAC, purge protection) storing pipeline secrets securely"
        ]
      },
      {
        "title": "Foundry Evaluation & Safety",
        "items": [
          "Microsoft Foundry account and project behind Private Endpoints (local keys disabled)",
          "Automated quality, groundedness, and Prompt Shields safety evaluations",
          "Regression comparison against baseline prompt/model scores before promotion",
          "Consistent regional model deployments (GPT-4o, text-embedding-3-large)"
        ]
      },
      {
        "title": "CI/CD Gates & Monitoring",
        "items": [
          "Azure DevOps or GitHub Actions pipelines enforcing automated evaluation release gates",
          "Spoke VNet with Private Endpoints and hub DNS Private Resolver integration",
          "Log Analytics (90-day retention) and Application Insights tracking quality and cost trends",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate prompt/dataset ownership and pipeline runners from private Foundry evaluation setup and CI/CD gate engineering.",
    "responsibilityRows": [
      {
        "domain": "Source Control & Test Sets",
        "customer": "Provide Git organisation, pipeline runner agents, and domain golden test cases.",
        "devopstrio": "Structure prompt/test-set repositories and configure automated Foundry evaluation suites."
      },
      {
        "domain": "Azure Foundry Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, private Storage, Key Vault, and Log Analytics via Terraform or Bicep."
      },
      {
        "domain": "Release Gates & Governance",
        "customer": "Approve quality/safety gate thresholds and production promotion criteria.",
        "devopstrio": "Implement CI/CD regression gates, Entra managed identities, and Deny-mode Azure Policies."
      },
      {
        "domain": "Monitoring & Handover",
        "customer": "Own ongoing prompt releases and monitor quality drift alerts post-handover.",
        "devopstrio": "Configure evaluation dashboards, budget alerts, operational runbooks, and handover."
      }
    ]
  },
  "032": {
    "kind": "Implementation",
    "architectureTitle": "Target Governed GPU & Self-Hosted Model Compute Architecture",
    "architectureSummary": "An Azure Kubernetes Service (AKS) cluster with overlay pod networking and scale-to-zero GPU node pools operates alongside a private Azure Machine Learning workspace (AllowOnlyApprovedOutbound) inside a segmented spoke Virtual Network. Kueue and AML quotas govern fair-share scheduling, while KAITO/vLLM serve self-hosted models behind Private Endpoints.",
    "componentGroups": [
      {
        "title": "GPU Compute & AKS",
        "items": [
          "AKS cluster with overlay pod network in a dedicated spoke subnet",
          "GPU node pools configured to scale to zero when idle to control compute spend",
          "Private Azure Machine Learning workspace with managed network (AllowOnlyApprovedOutbound)",
          "Dedicated ML storage and Private Endpoints for AML APIs, notebooks, and Key Vault"
        ]
      },
      {
        "title": "Scheduling & Model Serving",
        "items": [
          "Kueue queueing and priority classes enforcing fair GPU sharing across teams",
          "Per-team AML compute quotas and budget guardrails",
          "KAITO and vLLM serving patterns for governed self-hosted open-weight models",
          "Consistent gateway exposure and TLS 1.2+ encryption"
        ]
      },
      {
        "title": "Cost Attribution & Security",
        "items": [
          "Usage and consumption telemetry enabling per-team GPU cost chargeback",
          "Entra ID RBAC with PIM-eligible platform admin access and zero shared keys",
          "Log Analytics (90-day retention) and Application Insights workspace diagnostics",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate Azure GPU quota requests and team priority policies from AKS/AML infrastructure, Kueue scheduling, and KAITO/vLLM delivery.",
    "responsibilityRows": [
      {
        "domain": "GPU Quotas & Hub Network",
        "customer": "Request Azure GPU capacity reservations/quotas and maintain hub VNet, firewall, and DNS.",
        "devopstrio": "Deploy spoke VNet, AKS cluster, scale-to-zero GPU node pools, and private AML workspace via IaC."
      },
      {
        "domain": "Fair-Share & Serving",
        "customer": "Approve team quota allocations, priority classes, and approved self-hosted model list.",
        "devopstrio": "Configure Kueue scheduling, AML quotas, and KAITO/vLLM serving patterns."
      },
      {
        "domain": "Security & Chargeback",
        "customer": "Approve Entra ID team groups, DPIA, and internal chargeback tagging taxonomy.",
        "devopstrio": "Implement private endpoints, CAF tagging enforcement, Deny-mode policies, and cost dashboards."
      },
      {
        "domain": "Handover & Operations",
        "customer": "Manage ongoing team onboarding and GPU capacity reviews post-handover.",
        "devopstrio": "Deliver IaC pipelines, operational runbooks, and platform team handover."
      }
    ]
  },
  "033": {
    "kind": "Implementation",
    "architectureTitle": "Target Edge-to-Cloud Visual Quality Inspection Architecture",
    "architectureSummary": "Line-side GPU devices running Azure IoT Edge execute real-time defect inference without impacting line speed, publishing quality records to the MES API and streaming defect images via private Event Hubs into a spoke Virtual Network hosting Azure AI Vision and a private Azure Machine Learning workspace for continuous retraining.",
    "componentGroups": [
      {
        "title": "Line-Side Edge Inference",
        "items": [
          "Azure IoT Edge deployed on factory-floor GPU devices for low-latency line inference",
          "Local defect classification preserving manufacturing line speed and resilience",
          "Direct integration of inspection outcomes with Manufacturing Execution System (MES) APIs",
          "Selective upload of defect imagery and operator feedback for model improvement"
        ]
      },
      {
        "title": "Cloud Ingestion & Retraining",
        "items": [
          "Private Event Hubs namespace (Standard, Entra ID only, TLS 1.2+) ingesting defect telemetry",
          "Azure AI Vision (ComputerVision S0) and private Azure Machine Learning workspace (managed network)",
          "Scale-to-zero AML compute clusters and dedicated ML storage for retraining pipelines",
          "Private Storage Account (ZRS, shared keys disabled) archiving labelled defect datasets"
        ]
      },
      {
        "title": "Network, Identity & Controls",
        "items": [
          "Spoke VNet with Private Endpoints for AML, Vision, Event Hubs, Storage, and Key Vault",
          "Premium Key Vault (RBAC, purge protection) and zero local authentication",
          "Log Analytics (90-day retention) and Application Insights workspace diagnostics",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate factory camera/edge hardware and MES endpoints from edge inference containers and private cloud retraining infrastructure.",
    "responsibilityRows": [
      {
        "domain": "Factory Hardware & MES",
        "customer": "Procure and mount cameras/edge GPU devices, maintain plant network, and expose MES APIs.",
        "devopstrio": "Configure Azure IoT Edge inference containers and MES quality-record integration."
      },
      {
        "domain": "Cloud Vision & MLOps",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and provide initial labelled defect samples.",
        "devopstrio": "Deploy AML, Azure AI Vision, Event Hubs, Storage, and Key Vault via IaC and build retraining loops."
      },
      {
        "domain": "Security & Privacy",
        "customer": "Approve DPIA, plant OT/IT boundary controls, and Entra ID access groups.",
        "devopstrio": "Enforce Private Endpoints, Entra-only auth, managed identities, and Deny-mode Azure Policies."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Validate defect-detection accuracy on pilot production lines and accept phase gates.",
        "devopstrio": "Tune edge/cloud models, promote to production, and deliver operational runbooks."
      }
    ]
  },
  "034": {
    "kind": "Implementation",
    "architectureTitle": "Target IT Knowledge Base RAG Architecture",
    "architectureSummary": "IT staff and end users query the assistant through Microsoft Teams or the ITSM portal backed by Container Apps inside a segmented spoke Virtual Network. Model calls route through an internal API Management AI gateway to Microsoft Foundry, while private Azure AI Search performs semantic ranking and ACL security trimming across ITSM knowledge articles and summarised resolved tickets.",
    "componentGroups": [
      {
        "title": "ITSM Ingestion & Gap Reporting",
        "items": [
          "Connectors indexing approved knowledge articles and summarised resolved tickets from ServiceNow or Jira Service Management",
          "Azure AI Document Intelligence extraction with consistent chunking and embedding",
          "Document ACL storage with incremental permission sync",
          "Automated reporting of unanswered queries and knowledge gaps to IT knowledge managers"
        ]
      },
      {
        "title": "Semantic Search & Models",
        "items": [
          "Private Azure AI Search with semantic ranking and query-time ACL security trimming",
          "Microsoft Foundry (GPT-4o, text-embedding-3-large) behind Private Endpoints",
          "Internal API Management AI gateway enforcing quotas and managed-identity calls",
          "Mandatory article or ticket citations included in every generated response"
        ]
      },
      {
        "title": "Network, Interface & Audit",
        "items": [
          "Container Apps runtime (internal ingress) serving Teams and ITSM portal integrations",
          "Private Storage Account (ZRS, Entra ID only) and Premium Key Vault (RBAC, purge protection)",
          "Log Analytics (90-day retention) and Application Insights telemetry",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate ITSM knowledge curation and ticket access from private RAG infrastructure and gap-reporting delivery.",
    "responsibilityRows": [
      {
        "domain": "ITSM Knowledge & Tickets",
        "customer": "Provide ServiceNow or Jira Service Management API access, Purview labels, and knowledge manager owners.",
        "devopstrio": "Build article/ticket ingestion, ticket summarisation indexing, and knowledge-gap reporting."
      },
      {
        "domain": "Azure RAG Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, internal APIM, AI Search, Container Apps, Storage, and Key Vault via IaC."
      },
      {
        "domain": "Security & Access Control",
        "customer": "Approve Entra ID groups, ACL mapping, and DPIA requirements.",
        "devopstrio": "Implement ACL-trimmed search, Prompt Shields, managed identities, and Deny-mode policies."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Validate answer accuracy with service desk analysts and accept phase gates.",
        "devopstrio": "Run retrieval evaluations, promote to production, and deliver operational runbooks."
      }
    ]
  },
  "035": {
    "kind": "Implementation",
    "architectureTitle": "Target Insurance Claims Processing Agent Architecture",
    "architectureSummary": "Inbound claim documents are parsed via private Azure AI Document Intelligence and processed by Foundry Agent Service and Container Apps inside a segmented spoke Virtual Network. Using a dedicated Entra identity, the agent queries policy cover and claims history through allow-listed API Management tools, logs evidence in private Cosmos DB, and presents recommendations and fraud flags for final handler decision.",
    "componentGroups": [
      {
        "title": "Claim Intake & Evidence",
        "items": [
          "Private Azure AI Document Intelligence extracting structured claim evidence",
          "Private Storage Account (ZRS, Entra ID only, no shared keys) holding claim documents",
          "Private Cosmos DB serverless (Entra ID only) recording extracted evidence and run traces",
          "Structured evidence citations attached to every handler recommendation"
        ]
      },
      {
        "title": "Agent Runtime & Policy Tools",
        "items": [
          "Foundry Agent Service and Container Apps (internal ingress) orchestrating claim checks",
          "Internal API Management AI gateway exposing allow-listed policy and claims-system APIs",
          "Microsoft Foundry (GPT-4o) with Prompt Shields and content filtering",
          "Consistent fraud-signal flagging without autonomous claim rejection or payout"
        ]
      },
      {
        "title": "Identity, Network & Controls",
        "items": [
          "Dedicated Entra agent identity with least-privilege permissions and human decision gates",
          "Spoke VNet with Private Endpoints for Foundry, Document Intelligence, Cosmos DB, Storage, and Key Vault",
          "Log Analytics (90-day retention) and Application Insights tracing every run",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate core policy/claims APIs and handler decision authority from private Document Intelligence and agentic infrastructure delivery.",
    "responsibilityRows": [
      {
        "domain": "Policy & Claims Systems",
        "customer": "Provide policy-administration and claims-system APIs alongside fraud-indicator rules.",
        "devopstrio": "Publish allow-listed policy/claims tools in APIM and build evidence-extraction pipelines."
      },
      {
        "domain": "Azure Agent Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, Document Intelligence, internal APIM, Container Apps, Cosmos DB, and Key Vault via IaC."
      },
      {
        "domain": "Identity & Decision Controls",
        "customer": "Assign named business owner, approve Entra agent identity permissions, and sign off DPIA.",
        "devopstrio": "Configure dedicated Entra identity, Prompt Shields, fraud flagging, and handler review gates."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Validate recommendations with claims handlers during pilot and accept phase gates.",
        "devopstrio": "Run evaluation and security tests, enforce Deny-mode policies, and deliver runbooks."
      }
    ]
  },
  "036": {
    "kind": "Implementation",
    "architectureTitle": "Target Purview Information Protection & Copilot DLP Architecture",
    "architectureSummary": "This engagement configures Microsoft Purview Information Protection, Purview DLP for Copilot, DSPM for AI, SharePoint Advanced Management, and Entra Conditional Access within your existing Microsoft 365 tenant, with no new Azure infrastructure deployed.",
    "componentGroups": [
      {
        "title": "Sensitivity Labels & Encryption",
        "items": [
          "Four-tier taxonomy (Public, General, Confidential, Highly Confidential) with default document labelling",
          "Header/footer markings and group-based encryption on Confidential and Highly Confidential labels",
          "Simulation-first auto-labelling across SharePoint and OneDrive for UK financial and personal data",
          "Restricted Content Discovery and weekly Data Access Governance oversharing reports"
        ]
      },
      {
        "title": "Copilot DLP & DSPM for AI",
        "items": [
          "Purview DLP for Microsoft 365 Copilot excluding Highly Confidential items from processing",
          "DSPM for AI recommended policies monitoring sensitive data exposure across Copilot and external AI",
          "User coaching and audit trails supporting UK GDPR accountability",
          "Site owner access reviews with 10-working-day remediation cadence"
        ]
      },
      {
        "title": "Identity & Wave Controls",
        "items": [
          "Entra Conditional Access requiring MFA and compliant or hybrid-joined devices for Copilot users",
          "Legacy authentication blocked and guest accounts excluded from Copilot licensing",
          "Three-wave rollout gates paired with Copilot Dashboard usage and sentiment tracking",
          "Configuration acceptance log and closure sign-off"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate taxonomy approval and site owner remediation from Purview label, DLP, and DSPM configuration delivery.",
    "responsibilityRows": [
      {
        "domain": "Taxonomy & Licensing",
        "customer": "Provide M365 E3/E5 and Purview licences, tenant access, and approve the sensitivity label taxonomy.",
        "devopstrio": "Configure sensitivity labels, default labelling rules, and simulation-first auto-labelling."
      },
      {
        "domain": "Copilot DLP & Oversharing",
        "customer": "Approve Highly Confidential exclusion scope and coordinate site owners for SharePoint access reviews.",
        "devopstrio": "Implement Copilot DLP policies, DSPM for AI reporting, and Data Access Governance reports."
      },
      {
        "domain": "Identity & Handover",
        "customer": "Approve Entra Conditional Access policies, DPIA decisions, and operate ongoing reviews post-handover.",
        "devopstrio": "Configure Conditional Access baselines, rollout wave gates, and operational runbooks."
      }
    ]
  },
  "037": {
    "kind": "Implementation",
    "architectureTitle": "Target Contract Analysis & Playbook Review Architecture",
    "architectureSummary": "Contracts are ingested into private Storage and parsed via private Azure AI Document Intelligence inside a segmented spoke Virtual Network. Container Apps orchestrate clause comparison through an internal API Management AI gateway to Microsoft Foundry and ACL-trimmed Azure AI Search against your legal playbook, persisting contract register metadata and obligation reminders in private Cosmos DB / Dataverse.",
    "componentGroups": [
      {
        "title": "Extraction & Clause Modelling",
        "items": [
          "Private Azure AI Document Intelligence extracting clauses, parties, dates, and obligations",
          "Private Storage Account (ZRS, Entra ID only, no shared keys) holding source contract files",
          "Consistent chunking and embedding indexed into private Azure AI Search with semantic ranking",
          "Document ACL storage enforcing query-time security trimming per legal team"
        ]
      },
      {
        "title": "Playbook Analysis & Register",
        "items": [
          "Microsoft Foundry (GPT-4o, text-embedding-3-large) comparing clauses against standard playbook positions",
          "Internal API Management AI gateway enforcing token quotas and managed-identity calls",
          "Private Cosmos DB serverless / Dataverse register storing extracted obligations and risk flags",
          "Automated post-signature obligation tracking and renewal reminders"
        ]
      },
      {
        "title": "Network, Safety & Controls",
        "items": [
          "Spoke VNet with Private Endpoints, internal APIM, and Container Apps subnets",
          "Prompt Shields content filtering and mandatory source-document clause citations",
          "Premium Key Vault (RBAC, purge protection) and Log Analytics (90-day retention)",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate legal playbook ownership and contract repository access from private extraction, analysis, and register delivery.",
    "responsibilityRows": [
      {
        "domain": "Legal Playbook & Contracts",
        "customer": "Provide legal playbook standard positions, sample contracts, and Purview sensitivity labels.",
        "devopstrio": "Configure Document Intelligence clause extraction, playbook comparison prompts, and citation output."
      },
      {
        "domain": "Azure AI Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, Document Intelligence, AI Search, internal APIM, Cosmos DB, and Key Vault via IaC."
      },
      {
        "domain": "Register & Security",
        "customer": "Approve Entra ID legal access groups, Dataverse/SQL integration targets, and DPIA.",
        "devopstrio": "Implement ACL-trimmed search, contract register storage, obligation reminders, and Deny policies."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Validate flagged clause deviations with legal reviewers and accept phase gates.",
        "devopstrio": "Execute accuracy and security tests, promote to production, and deliver runbooks."
      }
    ]
  },
  "038": {
    "kind": "Implementation",
    "architectureTitle": "Target Agent Observability & Audit Architecture",
    "architectureSummary": "Agent runs emit standardised OpenTelemetry traces into workspace-based Application Insights and Log Analytics (90-day retention) alongside Microsoft Purview data-access audit logs, backed by private Microsoft Foundry and Key Vault resources behind Private Endpoints with Azure Monitor workbooks surfacing quality, cost, and anomaly investigations.",
    "componentGroups": [
      {
        "title": "OpenTelemetry & Run Tracing",
        "items": [
          "Common OpenTelemetry trace standard capturing prompts, tool calls, and run outcomes",
          "Workspace-based Application Insights (local auth disabled) and Foundry run tracing",
          "Central Log Analytics workspace (90-day retention) aggregating all diagnostic logs",
          "Attribution of token consumption and cost per agent and team"
        ]
      },
      {
        "title": "Purview Audit & Investigations",
        "items": [
          "Microsoft Purview audit capturing agent data access and interaction trails",
          "Searchable investigation views aligned to Agent 365 inventory and named owners",
          "Azure Monitor workbooks highlighting quality drops, cost spikes, and anomalous tool use",
          "Alert rules notifying platform and security owners on service health or budget thresholds"
        ]
      },
      {
        "title": "Private Landing Zone Controls",
        "items": [
          "Spoke VNet with Private Endpoints for Microsoft Foundry and Premium Key Vault",
          "Entra ID authentication with local keys and public PaaS access disabled",
          "Devopstrio AI Policy initiative (Audit to Deny) enforcing residency and diagnostics",
          "Monthly budget threshold alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate agent ownership and security investigation processes from observability infrastructure, trace schemas, and workbook delivery.",
    "responsibilityRows": [
      {
        "domain": "Agent Inventory & Telemetry",
        "customer": "Provide list of target agents, named owners, and Purview/Entra tenant access.",
        "devopstrio": "Define OpenTelemetry trace standard and integrate Foundry, Application Insights, and Purview audit."
      },
      {
        "domain": "Azure Monitoring Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and central Log Analytics governance.",
        "devopstrio": "Deploy spoke VNet, Private Endpoints, Log Analytics, App Insights, Foundry, and Key Vault via IaC."
      },
      {
        "domain": "Dashboards & Handover",
        "customer": "Approve anomaly alert thresholds, DPIA requirements, and operate investigations post-handover.",
        "devopstrio": "Deliver Azure Monitor workbooks, Deny-mode policies, operational runbooks, and handover."
      }
    ]
  },
  "039": {
    "kind": "Implementation",
    "architectureTitle": "Target Predictive Maintenance & Time-Series Architecture",
    "architectureSummary": "Equipment sensor telemetry streams through IoT Hub and private Event Hubs into a spoke Virtual Network hosting a private Storage Account and Azure Machine Learning workspace (AllowOnlyApprovedOutbound). Explainable anomaly and failure models score asset health via scheduled batch or real-time managed endpoints and raise maintenance work orders via API.",
    "componentGroups": [
      {
        "title": "Sensor & Time-Series Ingestion",
        "items": [
          "IoT Hub and private Event Hubs namespace (Standard, Entra ID only) ingesting sensor streams",
          "Structured time-series storage in private Storage Account (ZRS, shared keys disabled)",
          "Ingestion-stage data quality checks handling noisy or incomplete sensor feeds",
          "TLS 1.2+ encryption in transit and private network isolation"
        ]
      },
      {
        "title": "AML Scoring & Explainability",
        "items": [
          "Private Azure Machine Learning workspace with managed network (AllowOnlyApprovedOutbound)",
          "Scale-to-zero compute clusters training anomaly and remaining-useful-life models",
          "Scheduled batch scoring and real-time managed endpoints behind Private Endpoints",
          "Explainable health scores and contributing sensor indicators for maintenance engineers"
        ]
      },
      {
        "title": "Work Orders & Landing Zone",
        "items": [
          "Automated alert integration creating work orders via maintenance system (CMMS) API",
          "Spoke VNet with Private Endpoints for AML, Event Hubs, Storage, and Key Vault",
          "Log Analytics (90-day retention) and Application Insights telemetry",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate plant sensor hardware and CMMS maintenance rules from private telemetry ingestion and AML predictive model delivery.",
    "responsibilityRows": [
      {
        "domain": "Sensors & Maintenance System",
        "customer": "Operate plant sensors/IoT gateways, supply historical maintenance data, and expose CMMS APIs.",
        "devopstrio": "Configure Event Hubs time-series ingestion and automated CMMS work-order creation."
      },
      {
        "domain": "Azure MLOps Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy AML, Event Hubs, Storage, Key Vault, and Log Analytics via Terraform or Bicep."
      },
      {
        "domain": "Models & Governance",
        "customer": "Validate failure thresholds with reliability engineers and approve DPIA/OT boundaries.",
        "devopstrio": "Build explainable anomaly/failure models, managed endpoints, and Deny-mode policies."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Evaluate early-warning accuracy on pilot assets and accept phase gates.",
        "devopstrio": "Tune scoring thresholds, promote to production, and deliver operational runbooks."
      }
    ]
  },
  "040": {
    "kind": "Implementation",
    "architectureTitle": "Target Private AI Voice Agent Architecture",
    "architectureSummary": "Inbound calls enter through Azure Communication Services or existing telephony APIs into Container Apps inside a segmented spoke Virtual Network. Private Azure AI Speech and Voice Live handle real-time speech, routing reasoning through an internal API Management AI gateway to Microsoft Foundry and shared back-office tools, while redacting personal/payment data and transferring full context to human agents.",
    "componentGroups": [
      {
        "title": "Speech & Telephony Integration",
        "items": [
          "Private Azure AI Speech (SpeechServices) and Voice Live behind Private Endpoints",
          "Secure API integration with Azure Communication Services, Dynamics 365, or existing telephony",
          "Upfront AI disclosure and effortless escalation path to human contact-centre agents",
          "Context-preserving call transfer passing conversation summary and caller intent"
        ]
      },
      {
        "title": "Agent Gateway & Verified Actions",
        "items": [
          "Internal API Management AI gateway routing calls to Microsoft Foundry (GPT-4o)",
          "Reuse of shared digital-channel back-office tools with verified caller identity checks",
          "Container Apps runtime (internal ingress) managing real-time voice orchestration",
          "Prompt Shields and content filtering active on all model deployments"
        ]
      },
      {
        "title": "Privacy, Network & Audit",
        "items": [
          "Automated redaction of personal and payment card data from call transcripts",
          "Spoke VNet with Private Endpoints, internal APIM, and Container Apps subnets",
          "Premium Key Vault (RBAC, purge protection) and Log Analytics (90-day retention)",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate telephony carrier/PBX infrastructure and compliance retention rules from private Speech, Foundry, and orchestration delivery.",
    "responsibilityRows": [
      {
        "domain": "Telephony & Call Routing",
        "customer": "Maintain existing telephony platform/SIP trunks and expose call-transfer/recording APIs.",
        "devopstrio": "Configure Voice Live / Speech integration, caller verification flows, and context-preserving handover."
      },
      {
        "domain": "Azure Voice Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Azure AI Speech, Foundry, internal APIM, Container Apps, and Key Vault via IaC."
      },
      {
        "domain": "Privacy & Compliance",
        "customer": "Approve DPIA, call-recording retention policy, and payment-card masking/DTMF rules.",
        "devopstrio": "Implement transcript PII/PCI redaction, Prompt Shields, managed identities, and Deny policies."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Provide sample call recordings/accents for speech tuning and accept phase gates.",
        "devopstrio": "Validate speech accuracy and containment, promote to production, and deliver runbooks."
      }
    ]
  },
  "041": {
    "kind": "Implementation",
    "architectureTitle": "Target Intelligent Document Processing Architecture",
    "architectureSummary": "Invoices and forms arrive from email, upload, or scanner channels into a private Storage Account inside a spoke Virtual Network. Container Apps orchestrate field extraction via private Azure AI Document Intelligence and Microsoft Foundry (GPT-4o), validating outputs against master data and routing low-confidence items to a human review queue before downstream ERP API submission.",
    "componentGroups": [
      {
        "title": "Intake & Field Extraction",
        "items": [
          "Multi-channel document intake from shared mailboxes, web uploads, and scanners",
          "Private Storage Account (ZRS, Entra ID only, no shared keys) staging inbound documents",
          "Private Azure AI Document Intelligence (FormRecognizer) prebuilt and custom extraction models",
          "Microsoft Foundry (GPT-4o) supporting complex layout and unstructured field normalisation"
        ]
      },
      {
        "title": "Validation & Exception Queue",
        "items": [
          "Container Apps processing services (internal ingress) running deterministic business-rule checks",
          "Master-data cross-verification (supplier IDs, PO numbers, totals, tax rules)",
          "Confidence-threshold routing sending high-confidence records straight through via API",
          "Human exception review queue isolating low-confidence or mismatched fields"
        ]
      },
      {
        "title": "Network, Identity & Controls",
        "items": [
          "Spoke VNet with Private Endpoints for Foundry, Document Intelligence, Storage, and Key Vault",
          "Premium Key Vault (RBAC, purge protection) and zero local authentication",
          "Log Analytics (90-day retention) and Application Insights tracking extraction accuracy",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate master-data/ERP endpoints and exception reviewers from private Document Intelligence and validation pipeline delivery.",
    "responsibilityRows": [
      {
        "domain": "Document Sources & Master Data",
        "customer": "Provide sample invoices/forms, intake mailbox/scanner feeds, and ERP master-data APIs.",
        "devopstrio": "Configure multi-channel intake, custom Document Intelligence models, and validation rules."
      },
      {
        "domain": "Azure Processing Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Document Intelligence, Foundry, Container Apps, Storage, and Key Vault via IaC."
      },
      {
        "domain": "Exception Review & Security",
        "customer": "Approve confidence thresholds, assign exception reviewers, and sign off DPIA.",
        "devopstrio": "Implement confidence routing queues, Entra managed identities, and Deny-mode policies."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Validate extraction accuracy on live document batches and accept phase gates.",
        "devopstrio": "Run accuracy and security tests, promote to production, and deliver runbooks."
      }
    ]
  },
  "042": {
    "kind": "Implementation",
    "architectureTitle": "Target IT Service Desk Agent Architecture",
    "architectureSummary": "Staff interact with the IT Service Desk Agent in Microsoft Teams, backed by Foundry Agent Service and Container Apps inside a segmented spoke Virtual Network. Using a dedicated Entra identity, the agent executes allow-listed ITSM, Microsoft Graph, and Intune tools via an internal API Management AI gateway, logs every interaction as a ticket, and enforces manager approval before access changes.",
    "componentGroups": [
      {
        "title": "Teams Channel & Agent Runtime",
        "items": [
          "Microsoft Teams channel providing conversational self-service for top-ten IT requests",
          "Foundry Agent Service and Container Apps (internal ingress) orchestrating fulfilment",
          "Microsoft Foundry (GPT-4o) with Prompt Shields and content filtering",
          "Mandatory ITSM ticket creation or update for every user conversation"
        ]
      },
      {
        "title": "Allow-Listed IT Tools & Approvals",
        "items": [
          "Internal API Management AI gateway publishing allow-listed ITSM, Graph, and Intune APIs",
          "Dedicated Entra agent identity with least-privilege permissions and zero shared keys",
          "Mandatory manager-approval workflow gate prior to any access or group change",
          "Private Cosmos DB serverless (Entra ID only) persisting run state and audit traces"
        ]
      },
      {
        "title": "Network, Secrets & Guardrails",
        "items": [
          "Spoke VNet with Private Endpoints for Foundry, Cosmos DB, and Premium Key Vault",
          "Log Analytics (90-day retention) and Application Insights tracing every agent run",
          "Devopstrio AI Policy initiative (Audit to Deny) enforcing private networking and residency",
          "Monthly budget threshold alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate ITSM/Intune API access and request-catalogue approval from private agentic infrastructure and tool-gateway delivery.",
    "responsibilityRows": [
      {
        "domain": "ITSM, Graph & Intune APIs",
        "customer": "Provide ITSM API credentials/endpoints, confirm top-ten request catalogue, and approve Graph/Intune scopes.",
        "devopstrio": "Publish allow-listed ITSM, Graph, and Intune tools in APIM and build fulfilment workflows."
      },
      {
        "domain": "Azure Agent Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, internal APIM, Container Apps, Cosmos DB, and Key Vault via IaC."
      },
      {
        "domain": "Identity & Approval Gates",
        "customer": "Assign named business owner, approve Entra agent identity permissions, and sign off DPIA.",
        "devopstrio": "Configure dedicated Entra identity, Prompt Shields, manager-approval gates, and ticket logging."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Coordinate service-desk pilot users and accept phase gates.",
        "devopstrio": "Execute evaluation and security tests, enforce Deny policies, and deliver runbooks."
      }
    ]
  },
  "043": {
    "kind": "Accelerator",
    "configIntro": "The Copilot Studio ALM accelerator standardises Git solution packaging, Power Platform Managed Environments, and automated conversation test gates while parameterising repository boundaries, connection references, and release approvers per business area.",
    "standardComponents": {
      "title": "Standardised ALM & Environment Controls",
      "items": [
        "Separate dev, test, and production Power Platform Managed Environments",
        "One managed solution per Copilot Studio agent stored in Git source control",
        "Environment-level Data Loss Prevention (DLP) policies across all stages",
        "Power Platform pipelines orchestrating repeatable dev → test → prod promotion",
        "Automated Copilot Studio conversation test framework executed before release"
      ]
    },
    "customerConfiguration": {
      "title": "Customer-Specific Parameters & Ownership",
      "items": [
        "Azure DevOps or GitHub repositories mapped per business area",
        "Environment deployment settings files for customer connection references and variables",
        "Named two-party release approvers for test and production gates",
        "Business maker group permissions and environment DLP connector allow-lists",
        "Private VNet connectivity configuration for Azure integrations where available"
      ]
    },
    "workflowIntro": "Every Copilot Studio agent change moves through four gated ALM stages from maker export to approved production release.",
    "workflowRows": [
      {
        "stage": "1. Solution Export & Commit",
        "operation": "Package agent components into a single solution and commit unpacked source to Azure DevOps or GitHub.",
        "validationGate": "Pull-request review and solution-checker static validation."
      },
      {
        "stage": "2. Conversation Test Gate",
        "operation": "Execute automated Copilot Studio conversation tests against target intents and fallback behaviours.",
        "validationGate": "Zero critical conversation-test regressions before test promotion."
      },
      {
        "stage": "3. Test Promotion & Settings",
        "operation": "Deploy managed solution to test environment using environment-specific connection reference settings.",
        "validationGate": "DLP compliance check and UAT sign-off."
      },
      {
        "stage": "4. Production Release & Handover",
        "operation": "Promote managed solution to production via Power Platform pipeline with full audit trail.",
        "validationGate": "Mandatory two-party release approval and operational handover log."
      }
    ]
  },
  "044": {
    "kind": "Implementation",
    "architectureTitle": "Target Dataverse & Business Data Agent Architecture",
    "architectureSummary": "This engagement configures Copilot Studio agents, Dataverse security roles, Dataverse audit logging, and Power Platform Managed Environments (dev, test, prod) within your existing Dynamics 365 and Power Platform tenant, with no new Azure workload infrastructure deployed.",
    "componentGroups": [
      {
        "title": "Copilot Studio & Business Actions",
        "items": [
          "Copilot Studio conversational agent packaged as a managed solution per environment",
          "User-context integration with Dataverse and Dynamics 365 business records",
          "Agent actions invoking existing approved business processes and workflows",
          "Automated conversation testing prior to test/production promotion"
        ]
      },
      {
        "title": "Dataverse Security & Audit",
        "items": [
          "Strict enforcement of Dataverse security roles so users only see entitled Dynamics records",
          "Dataverse audit logging capturing agent queries, record reads, and process actions",
          "Environment-level DLP policies restricting unapproved external connectors",
          "Private VNet connectivity for Azure extensions where supported"
        ]
      },
      {
        "title": "ALM & Managed Environments",
        "items": [
          "Separate dev, test, and production Power Platform Managed Environments",
          "Azure DevOps or GitHub source control with environment deployment settings files",
          "Power Platform release pipelines with approval gates",
          "Configuration acceptance log and maker handover"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate Dynamics 365/Dataverse data hygiene and security-role ownership from Copilot Studio and ALM configuration delivery.",
    "responsibilityRows": [
      {
        "domain": "Dataverse & Dynamics 365",
        "customer": "Provide Power Platform and Dynamics 365 licences, target business processes, and Dataverse security roles.",
        "devopstrio": "Configure Copilot Studio agent, Dataverse record grounding, and business-process action flows."
      },
      {
        "domain": "Environments & ALM",
        "customer": "Provide Azure DevOps or GitHub repository and approve release gate owners.",
        "devopstrio": "Set up dev/test/prod Managed Environments, DLP policies, and Power Platform pipelines."
      },
      {
        "domain": "Audit & Handover",
        "customer": "Approve DPIA requirements and own ongoing business maker support after handover.",
        "devopstrio": "Enable Dataverse audit logging, execute conversation tests, and deliver handover runbooks."
      }
    ]
  },
  "045": {
    "kind": "Implementation",
    "architectureTitle": "Target VNet-Injected Azure Databricks & Unity Catalog Architecture",
    "architectureSummary": "Premium Azure Databricks workspaces deploy with VNet injection (no public IP) and NoAzureDatabricksRules NSGs inside a spoke Virtual Network peered to the enterprise hub. Unity Catalog governs data and model access across bronze, silver, and gold Delta tables on private ADLS Gen2 storage behind Private Endpoints.",
    "componentGroups": [
      {
        "title": "Private Databricks & VNet Injection",
        "items": [
          "Premium Azure Databricks workspaces per environment with VNet injection and no public IPs",
          "Public network access disabled with NoAzureDatabricksRules NSG isolation",
          "Cluster policies enforcing compute sizing, auto-termination, and cost attribution",
          "Spoke VNet peered to central hub with Azure Firewall egress and hub DNS Private Resolver"
        ]
      },
      {
        "title": "Unity Catalog & Medallion ADLS",
        "items": [
          "Unity Catalog metastore with environment-isolated catalogues governing data and models",
          "Medallion Delta lakehouse structure (bronze, silver, gold) on private ADLS Gen2 storage",
          "Storage Account with ZRS replication, TLS 1.2+, infrastructure encryption, and shared keys disabled",
          "Centralised lineage, data ownership, and auditable access controls"
        ]
      },
      {
        "title": "Identity, Guardrails & Monitoring",
        "items": [
          "Entra ID group RBAC with PIM-eligible admin access and Premium Key Vault (RBAC, purge protection)",
          "Log Analytics (90-day retention) and Application Insights workspace diagnostics",
          "Devopstrio AI Policy initiative (Audit to Deny) enforcing private endpoints and UK residency",
          "Monthly consumption budget alerts at 50%, 80%, and 100% thresholds"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate hub networking and source data ownership from VNet-injected Databricks, Unity Catalog, and policy deployment.",
    "responsibilityRows": [
      {
        "domain": "Platform Hub & Data Sources",
        "customer": "Maintain hub VNet, Azure Firewall, DNS Private Resolver, and provide connectivity to source systems.",
        "devopstrio": "Deploy spoke VNet, Private Endpoints, VNet-injected Databricks workspaces, and ADLS Gen2 via IaC."
      },
      {
        "domain": "Unity Catalog & Medallion",
        "customer": "Assign domain data owners, approve catalogue taxonomy, and identify initial AI datasets.",
        "devopstrio": "Configure Unity Catalog metastore/catalogues, medallion structure, and cluster cost policies."
      },
      {
        "domain": "Security & Governance",
        "customer": "Approve Entra ID groups, PIM rules, DPIA, and data classification policies.",
        "devopstrio": "Enforce Entra-only storage access, Key Vault RBAC, Private Link, and Deny-mode Azure Policies."
      },
      {
        "domain": "CI/CD & Handover",
        "customer": "Provide pipeline runners, review phase gates, and operate platform post-handover.",
        "devopstrio": "Deliver Terraform/Bicep pipelines, budget alerts, operational runbooks, and handover."
      }
    ]
  },
  "046": {
    "kind": "Assessment",
    "matrixIntro": "The health check uses read-only Azure Resource Graph, Azure Advisor, Defender for Cloud, and Azure Policy exports alongside architecture reviews to evaluate five landing zone domains against CAF and Well-Architected baselines.",
    "matrixRows": [
      {
        "reviewArea": "Strategy",
        "evidence": "Landing zone documentation, workload onboarding patterns, and AI gateway adoption review.",
        "output": "Assessment of self-service onboarding alignment and strategic platform gaps."
      },
      {
        "reviewArea": "Platform",
        "evidence": "Read-only Azure Resource Graph queries covering hub-spoke peering, Private Endpoints, DNS, and model deployments.",
        "output": "Platform architecture findings register and IaC alignment recommendations."
      },
      {
        "reviewArea": "Security",
        "evidence": "Defender for Cloud secure score, Entra ID/managed identity posture, Content Safety/Prompt Shields, and key settings.",
        "output": "Risk-ranked security gap list and Zero Trust remediation backlog items."
      },
      {
        "reviewArea": "Operations",
        "evidence": "Azure Advisor telemetry, Log Analytics diagnostics, alerting coverage, and budget/quota controls.",
        "output": "Operational readiness findings and monitoring/cost-control recommendations."
      },
      {
        "reviewArea": "Governance",
        "evidence": "Azure Policy compliance exports (Audit/Deny effects), resource tagging, and UK data residency checks.",
        "output": "Policy compliance scorecard and prioritised governance remediation plan."
      }
    ],
    "methodologyIntro": "Delivered across four phases—Mobilise, Discover, Analyse, and Report—combining automated read-only Azure telemetry with targeted architect interviews.",
    "methodologyTiers": [
      {
        "label": "Phase 01",
        "title": "Read-Only Telemetry Capture",
        "description": "Executes read-only Resource Graph, Azure Advisor, Defender for Cloud, and Azure Policy queries without touching production workloads."
      },
      {
        "label": "Phase 02",
        "title": "CAF & Well-Architected Scoring",
        "description": "Evaluates Strategy, Platform, Security, Operations, and Governance on the five-level maturity scale and ranks risks by likelihood and impact."
      },
      {
        "label": "Phase 03",
        "title": "Backlog & IaC Remediation Plan",
        "description": "Delivers a Power BI findings view, quick wins, 90-day and 12-month roadmaps, and concrete IaC change recommendations."
      }
    ]
  },
  "047": {
    "kind": "Implementation",
    "architectureTitle": "Target Email Triage & Draft-Only Response Architecture",
    "architectureSummary": "Inbound emails from shared mailboxes are read via Microsoft Graph and orchestrated by Logic Apps and Container Apps inside a segmented spoke Virtual Network. Classification and draft-generation calls route through an internal API Management AI gateway to Microsoft Foundry (GPT-4o) over Private Endpoints, moving emails to team folders and saving drafts without auto-sending.",
    "componentGroups": [
      {
        "title": "Graph Mail & Routing",
        "items": [
          "Microsoft Graph integration reading shared mailboxes with least-privilege permissions",
          "Logic Apps orchestration moving triaged emails into team folders by category and urgency",
          "Confidence-based routing thresholds escalating ambiguous messages to triage leads",
          "Draft-only mode saving suggested replies in the mailbox without automatic sending"
        ]
      },
      {
        "title": "AI Gateway & Classification",
        "items": [
          "Internal API Management AI gateway enforcing token quotas and managed-identity calls",
          "Microsoft Foundry account and project running regional GPT-4o behind Private Endpoints",
          "Container Apps runtime (internal ingress) executing classification and drafting prompts",
          "Prompt Shields and content filtering active on every deployment"
        ]
      },
      {
        "title": "Network, Secrets & Audit",
        "items": [
          "Spoke VNet with Private Endpoints, internal APIM, and Container Apps subnets",
          "Premium Key Vault (RBAC, purge protection) and zero local authentication",
          "Restricted-access prompt/response audit logs in Log Analytics and Application Insights",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate shared mailbox access, routing taxonomy, and staff draft review from private Azure OpenAI and Graph integration delivery.",
    "responsibilityRows": [
      {
        "domain": "Mailboxes & Triage Rules",
        "customer": "Provide shared mailbox access, Microsoft Graph permissions, and team folder/urgency taxonomy.",
        "devopstrio": "Configure Graph mail ingestion, Logic Apps folder routing, and confidence thresholds."
      },
      {
        "domain": "Azure AI Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, internal APIM, Container Apps, and Key Vault via Terraform or Bicep."
      },
      {
        "domain": "Safety & Draft Governance",
        "customer": "Approve DPIA, AI-generated draft disclosure, and ensure staff review all replies before sending.",
        "devopstrio": "Enforce draft-only mailbox behaviour, Prompt Shields, and restricted audit logging."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Validate classification accuracy and draft quality with operations teams and accept phase gates.",
        "devopstrio": "Execute evaluation and security tests, enforce Deny policies, and deliver runbooks."
      }
    ]
  },
  "048": {
    "kind": "Implementation",
    "architectureTitle": "Target Agent Registry & Six-Stage Lifecycle Architecture",
    "architectureSummary": "This engagement configures Microsoft Agent 365, Power Automate or ServiceNow intake workflows, Dataverse records, Entra ID access reviews, and Microsoft Purview audit within your existing tenant, with no new Azure infrastructure deployed.",
    "componentGroups": [
      {
        "title": "Intake & Approval Workflow",
        "items": [
          "Power Automate or ServiceNow request form capturing purpose, data classification, and risk tier",
          "Tiered approval routing: self-approval (Low), AI CoE (Medium), and AI Governance Board (High)",
          "Publishing rights restricted exclusively to approved maker groups",
          "Mandatory named business owner recorded before any agent reaches Published state"
        ]
      },
      {
        "title": "Registry & Lifecycle States",
        "items": [
          "Microsoft Agent 365 / Dataverse single inventory with owner and review-date metadata",
          "Six lifecycle states: Requested, Approved, Published, Under Review, Suspended, and Retired",
          "Quarterly owner-attested access and ownership reviews",
          "Automatic suspension after 90 days of inactivity or loss of a named owner"
        ]
      },
      {
        "title": "Identity & Audit Controls",
        "items": [
          "One Entra agent identity or managed identity per registered agent with zero standing admin roles",
          "Conditional Access policy constraining agent identities by resource and location",
          "Purview data security and audit logging across agent interactions",
          "Configuration acceptance log and closure sign-off"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate maker approval authorities and quarterly owner attestations from workflow, registry, and Entra review configuration.",
    "responsibilityRows": [
      {
        "domain": "Tenant & Workflow Tooling",
        "customer": "Provide Agent 365, Power Platform/ServiceNow, Entra, and Purview licences alongside tenant access.",
        "devopstrio": "Configure request intake workflows, Agent 365/Dataverse registry, and lifecycle transitions."
      },
      {
        "domain": "Risk Tiers & Attestations",
        "customer": "Approve risk-tier criteria; agent owners complete quarterly attestations and retirement decisions.",
        "devopstrio": "Implement tiered approval routing, automated quarterly review reminders, and 90-day suspension rules."
      },
      {
        "domain": "Identity & Handover",
        "customer": "Approve Conditional Access policies, DPIA decisions, and operate lifecycle governance post-handover.",
        "devopstrio": "Configure Entra access reviews, Purview audit alignment, and operational runbooks."
      }
    ]
  },
  "049": {
    "kind": "Implementation",
    "architectureTitle": "Target Copilot Studio HR Self-Service Teams Architecture",
    "architectureSummary": "This engagement configures a Copilot Studio agent published to Microsoft Teams, grounded in SharePoint HR policies and connected to HR system connectors across dev, test, and production Power Platform Managed Environments, with no new Azure workload infrastructure deployed.",
    "componentGroups": [
      {
        "title": "Teams Agent & HR Knowledge",
        "items": [
          "Copilot Studio agent published to Microsoft Teams for 24/7 staff HR Q&A",
          "Data-driven topic catalogue grounded in approved SharePoint HR policy sites",
          "Automatic HR case creation when questions remain unresolved",
          "Automated conversation testing validated prior to production release"
        ]
      },
      {
        "title": "Authenticated HR Transactions",
        "items": [
          "HR system connector integration starting with simple routine transactions",
          "Mandatory Entra user authentication before accessing personal HR records",
          "Strict adherence to user-context permissions",
          "Private VNet connectivity for Azure extensions where available"
        ]
      },
      {
        "title": "Managed Environments & ALM",
        "items": [
          "Separate dev, test, and production Power Platform Managed Environments",
          "Environment-level Data Loss Prevention (DLP) policies across all stages",
          "Managed solution packaging in Azure DevOps or GitHub with deployment settings files",
          "Power Platform release pipelines with approval gates"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate SharePoint HR content, HRIS connector access, and maker ownership from Copilot Studio and ALM delivery.",
    "responsibilityRows": [
      {
        "domain": "HR Content & Connectors",
        "customer": "Provide approved SharePoint HR policies, HR system connector access, and priority topic list.",
        "devopstrio": "Build Copilot Studio topics, SharePoint grounding, authenticated HR transactions, and case escalation."
      },
      {
        "domain": "Environments & ALM",
        "customer": "Provide Power Platform licences, Git repository, and approve release gate owners.",
        "devopstrio": "Configure dev/test/prod Managed Environments, DLP policies, and Power Platform pipelines."
      },
      {
        "domain": "Security & Handover",
        "customer": "Approve authentication flows, DPIA requirements, and support HR makers post-handover.",
        "devopstrio": "Execute conversation tests, document configuration log, and deliver handover runbooks."
      }
    ]
  },
  "050": {
    "kind": "Assessment",
    "matrixIntro": "The assessment combines read-only Defender for Cloud AI-SPM, Sentinel/Defender telemetry, and application threat models to evaluate six AI security domains against Zero Trust baselines.",
    "matrixRows": [
      {
        "reviewArea": "Identity",
        "evidence": "Read-only review of Entra ID, managed identities, local-auth/key settings, and agent permissions.",
        "output": "Identity posture findings and least-privilege remediation actions."
      },
      {
        "reviewArea": "Network",
        "evidence": "Read-only inspection of Private Endpoints, public-network-access flags, NSGs, and AI gateway routing.",
        "output": "Network isolation gap list and private-connectivity recommendations."
      },
      {
        "reviewArea": "Data",
        "evidence": "Read-only Purview DSPM/DLP alignment, encryption/CMK settings, and RAG ACL trimming checks.",
        "output": "Data leakage risk findings and protection recommendations."
      },
      {
        "reviewArea": "Models",
        "evidence": "Model deployment residency checks, Prompt Shields/content filter config, and PyRIT red-team outputs.",
        "output": "Model safety findings and prompt-injection mitigation plan."
      },
      {
        "reviewArea": "Applications",
        "evidence": "Priority AI workload threat models covering tool allow-lists, input validation, and human approval gates.",
        "output": "Application-level threat model findings and ranked mitigations."
      },
      {
        "reviewArea": "Monitoring",
        "evidence": "Read-only review of Defender for Cloud AI alerts, Sentinel playbooks, and Log Analytics diagnostics.",
        "output": "SOC visibility gaps and AI incident-response recommendations."
      }
    ],
    "methodologyIntro": "Delivered across four phases—Mobilise, Discover, Analyse, and Report—using read-only security telemetry and structured threat-modelling workshops.",
    "methodologyTiers": [
      {
        "label": "Phase 01",
        "title": "AI-SPM & Alert Discovery",
        "description": "Collects read-only Defender for Cloud AI-SPM inventories, Sentinel/Defender alerts, and red-team test outputs without altering production environments."
      },
      {
        "label": "Phase 02",
        "title": "Threat Modelling & Baseline Scoring",
        "description": "Conducts threat modelling on priority AI workloads and scores all six security domains on the five-level maturity scale."
      },
      {
        "label": "Phase 03",
        "title": "Risk-Ranked Remediation Plan",
        "description": "Delivers an evidence-backed findings register and a prioritised quick-wins, 90-day, and 12-month security roadmap."
      }
    ]
  },
  "051": {
    "kind": "Implementation",
    "architectureTitle": "Target Defence-in-Depth AI Gateway & Prompt Protection Architecture",
    "architectureSummary": "All model traffic enters an internal API Management AI gateway inside a segmented spoke Virtual Network. Before reaching Microsoft Foundry (GPT-4o) over Private Endpoints, requests pass through private Azure AI Content Safety (Prompt Shields) and private Azure AI Language for default PII detection and masking, with all blocked requests logged to Log Analytics.",
    "componentGroups": [
      {
        "title": "Internal AI Gateway (APIM)",
        "items": [
          "Internal-mode API Management gateway in a dedicated subnet enforcing central policy",
          "Managed-identity authentication to backend Foundry models (zero API keys)",
          "Token rate limits, per-application metrics, and TLS 1.2+ enforcement",
          "Structured logging and alerting on every blocked or throttled request"
        ]
      },
      {
        "title": "Prompt Shields & PII Masking",
        "items": [
          "Private Azure AI Content Safety screening user prompts and document inputs via Prompt Shields",
          "Private Azure AI Language (TextAnalytics) detecting and masking personal data by default",
          "Microsoft Foundry (GPT-4o) with local authentication and public access disabled",
          "Layered defence-in-depth pipeline blocking attacks before model inference"
        ]
      },
      {
        "title": "Network, Policy & Posture",
        "items": [
          "Spoke VNet with Private Endpoints for Foundry, Content Safety, Language, and Key Vault",
          "Premium Key Vault (RBAC, purge protection) and central Log Analytics (90-day retention)",
          "Alignment with Defender for Cloud AI threat protection and Purview DSPM for AI",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate hub networking, PII masking rules, and SOC incident response from private AI gateway and Prompt Protection delivery.",
    "responsibilityRows": [
      {
        "domain": "Platform Hub & Applications",
        "customer": "Maintain hub VNet, Azure Firewall, DNS Private Resolver, and onboard consuming AI apps.",
        "devopstrio": "Deploy spoke VNet, internal APIM, Foundry, Content Safety, Language, and Key Vault via IaC."
      },
      {
        "domain": "Safety & PII Rules",
        "customer": "Approve PII entity categories for default masking, content-filter thresholds, and DPIA.",
        "devopstrio": "Configure APIM policy chains, Prompt Shields, PII masking, and blocked-request alerts."
      },
      {
        "domain": "Security Operations & Handover",
        "customer": "Connect alerts to SOC workflows, validate red-team tests, and operate post-handover.",
        "devopstrio": "Execute prompt-injection tests, enforce Deny policies, and deliver operational runbooks."
      }
    ]
  },
  "052": {
    "kind": "Implementation",
    "architectureTitle": "Target Consent-Aware Personalised Recommendations Architecture",
    "architectureSummary": "Customer behaviour and product catalogue datasets with consent flags are ingested into private Storage and indexed in private Azure AI Search inside a segmented spoke Virtual Network. Models trained in a private Azure Machine Learning workspace (AllowOnlyApprovedOutbound) serve low-latency recommendations through Container Apps APIs with built-in A/B experimentation telemetry.",
    "componentGroups": [
      {
        "title": "Consent-Aware Data & Search",
        "items": [
          "Behavioural event and product catalogue pipelines enforcing customer consent flags",
          "Private Storage Account (ZRS, Entra ID only, no shared keys) holding curated datasets",
          "Private Azure AI Search (Standard SKU, semantic ranker) supporting hybrid item retrieval",
          "Strict UK data residency and TLS 1.2+ encryption"
        ]
      },
      {
        "title": "AML Training & Low-Latency API",
        "items": [
          "Private Azure Machine Learning workspace with managed network (AllowOnlyApprovedOutbound)",
          "Scale-to-zero compute clusters for scheduled batch and model retraining",
          "Container Apps serving runtime (internal ingress) delivering low-latency recommendations",
          "Built-in A/B testing hooks and telemetry comparing recommendation impact"
        ]
      },
      {
        "title": "Network, Identity & Controls",
        "items": [
          "Spoke VNet with Private Endpoints for AML, AI Search, Storage, and Key Vault",
          "Premium Key Vault (RBAC, purge protection) and zero local authentication",
          "Log Analytics (90-day retention) and Application Insights tracking latency and conversion",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate consent-management platforms, catalogue feeds, and front-end integration from private ML and serving API delivery.",
    "responsibilityRows": [
      {
        "domain": "Behaviour, Catalogue & Consent",
        "customer": "Provide behavioural and catalogue feeds with authoritative customer consent flags.",
        "devopstrio": "Build consent-filtering ingestion pipelines and AI Search item indexing."
      },
      {
        "domain": "Azure ML & Serving Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy AML, AI Search, Container Apps, Storage, and Key Vault via Terraform or Bicep."
      },
      {
        "domain": "A/B Testing & Compliance",
        "customer": "Approve DPIA, consent rules, and integrate recommendations API into digital channels.",
        "devopstrio": "Configure A/B testing telemetry, Entra managed identities, and Deny-mode policies."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Evaluate A/B engagement uplift during pilot and accept phase gates.",
        "devopstrio": "Tune recommendation models, promote to production, and deliver runbooks."
      }
    ]
  },
  "053": {
    "kind": "Implementation",
    "architectureTitle": "Target Multi-Agent Orchestration Platform Architecture",
    "architectureSummary": "Orchestrated multi-agent workflows run on Microsoft Agent Framework / Foundry workflows inside Container Apps within a segmented spoke Virtual Network. Agents share governed platform services—Cosmos DB memory, Azure AI Search retrieval, Azure AI Content Safety, and allow-listed tools/MCP servers via internal API Management—using dedicated Entra identities and linked end-to-end traces.",
    "componentGroups": [
      {
        "title": "Orchestrator & Agent Runtime",
        "items": [
          "Microsoft Agent Framework or Foundry workflows coordinating multi-step agent hand-offs",
          "Container Apps environment (internal ingress) hosting orchestrated agent services",
          "Reusable orchestration templates supporting human approval gates on irreversible actions",
          "Linked end-to-end distributed tracing across every agent and sub-agent step"
        ]
      },
      {
        "title": "Shared Memory, Search & Gateway",
        "items": [
          "Internal API Management AI gateway publishing allow-listed APIs and MCP servers per agent",
          "Private Cosmos DB serverless (Entra ID only) providing shared agent memory and state",
          "Private Azure AI Search providing shared enterprise retrieval services",
          "Microsoft Foundry and Azure AI Content Safety (Prompt Shields) behind Private Endpoints"
        ]
      },
      {
        "title": "Identity, Network & Controls",
        "items": [
          "Dedicated Entra identity per agent with least-privilege RBAC and zero shared keys",
          "Spoke VNet with Private Endpoints, internal APIM, and Container Apps subnets",
          "Premium Key Vault (RBAC, purge protection) and Log Analytics (90-day retention)",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate hub networking, domain APIs, and agent ownership from shared multi-agent orchestration platform delivery.",
    "responsibilityRows": [
      {
        "domain": "Platform Hub & Domain APIs",
        "customer": "Operate hub VNet/DNS and provide target business-system APIs or MCP endpoints.",
        "devopstrio": "Deploy spoke VNet, internal APIM, Foundry, Container Apps, Cosmos DB, AI Search, and Content Safety via IaC."
      },
      {
        "domain": "Orchestration & Shared Services",
        "customer": "Confirm priority multi-agent workflow patterns and named business owners.",
        "devopstrio": "Implement Agent Framework / Foundry workflows, shared memory schemas, and end-to-end tracing."
      },
      {
        "domain": "Identity & Safety Controls",
        "customer": "Approve per-agent Entra identities, tool allow-lists, human approval gates, and DPIA.",
        "devopstrio": "Configure least-privilege agent RBAC, Prompt Shields, and Deny-mode Azure Policies."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Validate multi-agent workflows with engineering teams and accept phase gates.",
        "devopstrio": "Execute evaluation and security tests, promote to production, and deliver runbooks."
      }
    ]
  },
  "054": {
    "kind": "Implementation",
    "architectureTitle": "Target Model Evaluation & Fairness Evidence Architecture",
    "architectureSummary": "Automated evaluation and fairness pipelines run against private Microsoft Foundry deployments behind Private Endpoints inside a spoke Virtual Network. Fairlearn and Foundry evaluators score quality, safety, and group fairness metrics, archiving versioned evidence in private Storage (ZRS, Entra ID only) to gate releases and feed Power BI transparency dashboards.",
    "componentGroups": [
      {
        "title": "Foundry & Fairness Evaluation",
        "items": [
          "Microsoft Foundry account and project (GPT-4o) behind Private Endpoints with keys disabled",
          "Automated Foundry quality and safety evaluations plus Prompt Shields verification",
          "Fairlearn and custom group-outcome fairness tests detecting disparate impact",
          "Use-case-specific evaluation metrics mapped to risk classification"
        ]
      },
      {
        "title": "Evidence Archive & Release Gates",
        "items": [
          "Private Storage Account (ZRS, Entra ID only, no shared keys) retaining versioned results",
          "Release-gating pipeline checks blocking promotion on quality or fairness regressions",
          "Power BI transparency dashboards presenting pre- and post-release evidence",
          "Alignment with AI use-case and model register metadata (owner, purpose, risk tier)"
        ]
      },
      {
        "title": "Network, Policy & Monitoring",
        "items": [
          "Spoke VNet with Private Endpoints for Foundry, Storage, and Premium Key Vault",
          "Azure Policy enforcing UK South/UK West data residency (Audit to Deny)",
          "Log Analytics (90-day retention) and Application Insights telemetry",
          "Monthly budget threshold alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate protected-attribute/fairness policy definitions and use-case datasets from private Foundry evaluation and evidence-pipeline delivery.",
    "responsibilityRows": [
      {
        "domain": "Datasets & Fairness Criteria",
        "customer": "Provide evaluation datasets, define relevant demographic/group attributes, and approve fairness thresholds.",
        "devopstrio": "Configure Foundry quality/safety suites, Fairlearn fairness tests, and release-gate checks."
      },
      {
        "domain": "Azure Evaluation Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, private Storage, Key Vault, and Log Analytics via Terraform or Bicep."
      },
      {
        "domain": "Governance & Handover",
        "customer": "Approve legal/DPIA compliance thresholds and manage high-risk release sign-offs post-handover.",
        "devopstrio": "Deliver Power BI evidence dashboards, Deny-mode residency policies, and operational runbooks."
      }
    ]
  },
  "055": {
    "kind": "Implementation",
    "architectureTitle": "Target Purview Unified Catalog & AI Data Governance Architecture",
    "architectureSummary": "This engagement configures Microsoft Purview Unified Catalog, automated source scanning, custom UK classifications, data product quality rules, and lineage tracking across your existing AI data estates, with no new Azure workload infrastructure deployed.",
    "componentGroups": [
      {
        "title": "Unified Catalog & Data Products",
        "items": [
          "Governance domains structured per business area in Microsoft Purview Unified Catalog",
          "Data products published with named owners, descriptions, glossary terms, and access policies",
          "Data quality rules defined and tracked per AI data product",
          "Self-service access request workflows routed to data product owners for approval"
        ]
      },
      {
        "title": "Scanning & UK Classification",
        "items": [
          "Weekly automated scans across storage, lakehouse, and database sources used by AI",
          "Microsoft system classifications paired with custom UK personal/financial identifiers",
          "Alignment with sensitivity labels and Entra ID access controls",
          "Identification of sensitive datasets prior to RAG or ML ingestion"
        ]
      },
      {
        "title": "AI Lineage & Governance Handover",
        "items": [
          "End-to-end lineage mapping showing which AI models and apps consume each data product",
          "Auditable access history supporting UK GDPR and internal AI governance",
          "Configuration acceptance log and domain-owner operating guide",
          "Knowledge transfer to data stewards and platform teams"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate domain data stewardship and source credentials from Purview Unified Catalog, scanning, and lineage configuration.",
    "responsibilityRows": [
      {
        "domain": "Domains & Data Owners",
        "customer": "Provide Purview licences, define business governance domains, and assign data product owners.",
        "devopstrio": "Configure Unified Catalog domains, glossary terms, data product templates, and access workflows."
      },
      {
        "domain": "Scanning & Classifications",
        "customer": "Provide read-only scan credentials/network reachability to target data sources.",
        "devopstrio": "Configure weekly source scans, UK classification rules, quality rules, and lineage tracking."
      },
      {
        "domain": "Governance & Handover",
        "customer": "Approve access-request policies, DPIA requirements, and operate stewardship post-handover.",
        "devopstrio": "Deliver configuration acceptance log, steward runbooks, and knowledge transfer."
      }
    ]
  },
  "056": {
    "kind": "Implementation",
    "architectureTitle": "Target Private Retail Demand Forecasting Architecture",
    "architectureSummary": "Historical sales, promotion, seasonality, and external driver datasets from Fabric or Databricks feed a private Azure Machine Learning workspace (AllowOnlyApprovedOutbound) behind Private Endpoints in a spoke Virtual Network. Scale-to-zero compute clusters retrain models weekly, publishing explainable batch forecasts to planning tools and Power BI.",
    "componentGroups": [
      {
        "title": "Demand Data & Feature Store",
        "items": [
          "Integration with Fabric or Databricks supplying sales history, promotions, and seasonality",
          "Private Storage Account (ZRS, Entra ID only, no shared keys) staging curated training sets",
          "Feature validation checks handling promotional spikes and missing store feeds",
          "Strict UK data residency and TLS 1.2+ encryption"
        ]
      },
      {
        "title": "AML Forecasting & Explainability",
        "items": [
          "Private Azure Machine Learning workspace with managed network (AllowOnlyApprovedOutbound)",
          "Scale-to-zero compute clusters executing automated weekly model retraining",
          "Scheduled batch scoring producing SKU/store-level demand forecasts",
          "Driver-level feature attribution explaining forecast movements to retail planners"
        ]
      },
      {
        "title": "Publishing, Network & Controls",
        "items": [
          "Forecast outputs published to downstream planning tools and Power BI dashboards",
          "Spoke VNet with Private Endpoints for AML, Storage, and Premium Key Vault",
          "Log Analytics (90-day retention) and Application Insights tracking forecast accuracy",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate historical sales/promotion data supply and planner adoption from private AML pipeline and forecast-publishing delivery.",
    "responsibilityRows": [
      {
        "domain": "Sales & Driver Data",
        "customer": "Provide historical sales, promotional calendars, external drivers, and planning-tool target schemas.",
        "devopstrio": "Build feature ingestion, weekly AML retraining pipelines, and planning-tool forecast exports."
      },
      {
        "domain": "Azure MLOps Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy AML, private Storage, Key Vault, and Log Analytics via Terraform or Bicep."
      },
      {
        "domain": "Validation & Handover",
        "customer": "Benchmark forecast accuracy against legacy methods with planners and accept phase gates.",
        "devopstrio": "Deliver explainability views, Deny-mode policies, operational runbooks, and handover."
      }
    ]
  },
  "057": {
    "kind": "Implementation",
    "architectureTitle": "Target Near-Real-Time Fraud & Anomaly Detection Architecture",
    "architectureSummary": "Transaction events stream through a private Event Hubs namespace inside a spoke Virtual Network to an Azure Machine Learning managed endpoint (AllowOnlyApprovedOutbound) behind Private Endpoints. Explainable risk scores trigger investigator cases in case management, while investigator dispositions feed private Storage to retrain models.",
    "componentGroups": [
      {
        "title": "Transaction Stream & Storage",
        "items": [
          "Private Event Hubs namespace (Standard, Entra ID only, TLS 1.2+) ingesting transaction streams",
          "Private Storage Account (ZRS, Entra ID only, no shared keys) archiving events and outcomes",
          "Ingestion schema validation protecting downstream scoring reliability",
          "Zero public network endpoints across streaming and storage resources"
        ]
      },
      {
        "title": "Real-Time Scoring & Retraining",
        "items": [
          "Private Azure Machine Learning workspace with managed network (AllowOnlyApprovedOutbound)",
          "Real-time managed endpoints scoring transactions with low latency",
          "Explainable fraud-indicator reason codes minimising unnecessary customer blocks",
          "Automated retraining loop incorporating confirmed investigator dispositions"
        ]
      },
      {
        "title": "Case Routing & Controls",
        "items": [
          "High-score threshold alerts creating prioritised cases in case management",
          "Spoke VNet with Private Endpoints for AML, Event Hubs, Storage, and Key Vault",
          "Log Analytics (90-day retention) and Application Insights monitoring drift and latency",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate transaction-feed connectivity and fraud investigator operations from private Event Hubs and AML scoring delivery.",
    "responsibilityRows": [
      {
        "domain": "Transaction Feeds & Cases",
        "customer": "Provide live/historical transaction feeds, fraud labels, and case management APIs.",
        "devopstrio": "Configure Event Hubs ingestion, case-creation integration, and investigator-feedback loops."
      },
      {
        "domain": "Azure MLOps Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy AML, Event Hubs, private Storage, Key Vault, and Log Analytics via IaC."
      },
      {
        "domain": "Thresholds & Governance",
        "customer": "Approve risk-score thresholds, false-positive tolerances, and DPIA requirements.",
        "devopstrio": "Build explainable scoring endpoints, drift monitoring, and Deny-mode Azure Policies."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Validate precision/recall with fraud investigators during pilot and accept phase gates.",
        "devopstrio": "Tune scoring thresholds, promote to production, and deliver operational runbooks."
      }
    ]
  },
  "058": {
    "kind": "Implementation",
    "architectureTitle": "Target AI Budgets, Token Quotas & SKU Guardrails Architecture",
    "architectureSummary": "All model traffic passes through an internal API Management AI gateway inside a spoke Virtual Network to private Microsoft Foundry deployments. APIM enforces per-application token-per-minute quotas and emits token metrics per calling app, while Azure Cost Management budgets and Azure Policy restrict expensive SKUs and enforce mandatory cost-centre tags.",
    "componentGroups": [
      {
        "title": "Gateway Token Quotas (APIM)",
        "items": [
          "Internal API Management AI gateway routing all calls via managed identity to Foundry",
          "Per-application subscription keys enforcing token-per-minute limits and remaining-token headers",
          "Hard token caps in non-production and agreed service-level quotas in production",
          "Per-team and per-model token consumption metrics exported for chargeback"
        ]
      },
      {
        "title": "Budgets & SKU Policy Guardrails",
        "items": [
          "Azure Cost Management budgets configured per AI subscription and application resource group",
          "Three-tier actual-spend alerting at 50%, 80%, and 100% thresholds to budget owners",
          "Azure Policy restricting unapproved high-cost SKUs and enforcing CAF CostCentre/Owner tags",
          "Audit-mode validation in dev/test transitioning to Deny mode in production"
        ]
      },
      {
        "title": "Private Network & Observability",
        "items": [
          "Spoke VNet with Private Endpoints for Foundry and Premium Key Vault",
          "Log Analytics (90-day retention) and Application Insights aggregating token and cost logs",
          "Monthly capacity right-sizing and optimisation review dashboards",
          "Zero local authentication or public PaaS endpoints"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate commercial billing agreements and budget-owner escalation from gateway quota, budget, and SKU-policy implementation.",
    "responsibilityRows": [
      {
        "domain": "Commercials & Cost Taxonomy",
        "customer": "Provide billing agreement, approve CostCentre/Owner tag taxonomy, and nominate budget contacts.",
        "devopstrio": "Configure Azure Cost Management budgets, 50/80/100% alert rules, and CAF tag policies."
      },
      {
        "domain": "AI Gateway & Quotas",
        "customer": "Approve per-application token quotas (non-prod hard caps vs. prod limits) and SKU allow-lists.",
        "devopstrio": "Deploy internal APIM, Foundry, and Key Vault via IaC and configure token-limit/metric policies."
      },
      {
        "domain": "Optimisation & Handover",
        "customer": "Review monthly optimisation reports and own quota-exception approvals post-handover.",
        "devopstrio": "Deliver chargeback dashboards, Deny-mode SKU policies, operational runbooks, and handover."
      }
    ]
  },
  "059": {
    "kind": "Implementation",
    "architectureTitle": "Target AI Centre of Excellence Operating & Platform Model",
    "architectureSummary": "This engagement establishes the people, governance processes, and reusable landing-zone patterns for an internal AI Centre of Excellence—connecting business demand intake, architecture/security review gates, and champions enablement to your shared AI platform without deploying new workload-specific infrastructure.",
    "componentGroups": [
      {
        "title": "People & Champions Community",
        "items": [
          "Defined CoE core roles (AI Lead, Architecture, Security/DPO, Platform, Change) and RACI",
          "Departmental champions network connecting business units to CoE standards",
          "Role-based training pathways and regular internal community-of-practice sessions",
          "Clear escalation paths from local experiments to governed engineering delivery"
        ]
      },
      {
        "title": "Intake & Governance Process",
        "items": [
          "Standardised use-case intake, four-factor prioritisation, and funding-gate process",
          "Proportionate risk-tier review aligned to UK GDPR, DPIA, and responsible AI controls",
          "Reusable architecture decision records and security baseline checklists",
          "Consistent lifecycle tracking from discovery through pilot and production handover"
        ]
      },
      {
        "title": "Shared Platform Standards",
        "items": [
          "CAF-aligned AI Landing Zone onboarding patterns for self-service team consumption",
          "Standardised CI/CD, evaluation, and observability expectations across teams",
          "Cost attribution and budget-monitoring standards per team and use case",
          "CoE operating playbook and handover kit"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate executive sponsorship, internal staffing, and policy sign-off from CoE operating-model design and enablement launch.",
    "responsibilityRows": [
      {
        "domain": "Sponsorship & CoE Staffing",
        "customer": "Nominate CoE lead, cross-functional members, and departmental champions.",
        "devopstrio": "Define CoE charter, roles/RACI, funding model, and community-of-practice structure."
      },
      {
        "domain": "Intake & Standards",
        "customer": "Approve intake stage-gates, risk thresholds, and platform onboarding standards.",
        "devopstrio": "Deliver intake workflows, reusable architecture patterns, and CAF readiness checklists."
      },
      {
        "domain": "Training & Handover",
        "customer": "Coordinate internal communications and run ongoing CoE governance after handover.",
        "devopstrio": "Launch initial training/community sessions and hand over CoE operating playbooks."
      }
    ]
  },
  "060": {
    "kind": "Implementation",
    "architectureTitle": "Target Sovereign & Regulated UK AI Landing Zone Architecture",
    "architectureSummary": "All AI services—Microsoft Foundry, Azure AI Content Safety, internal API Management AI gateway, and Key Vault—are deployed exclusively into UK South (with UK West recovery) inside a spoke Virtual Network with Private Endpoints, customer-managed key encryption, and Deny-mode Azure Policy initiatives mapped to Defender for Cloud regulatory compliance.",
    "componentGroups": [
      {
        "title": "UK Residency & Policy Controls",
        "items": [
          "Azure Policy restricting resource and regional model deployments strictly to UK South and UK West",
          "Deny-mode enforcement blocking public network access and local key authentication",
          "Explicit exception workflow required for any Data Zone or Global model deployment",
          "Mandatory CAF tagging and production delete resource locks"
        ]
      },
      {
        "title": "CMK, AI Gateway & Safety",
        "items": [
          "Customer-managed keys (CMK) protecting AI and storage data via Premium Key Vault / Managed HSM",
          "Internal API Management AI gateway routing all model calls via managed identity",
          "Microsoft Foundry (GPT-4o, text-embedding-3-large) and Azure AI Content Safety with Prompt Shields",
          "Zero direct model calls or shared API keys"
        ]
      },
      {
        "title": "Compliance Evidence & Network",
        "items": [
          "Defender for Cloud regulatory compliance dashboards mapping controls to UK frameworks",
          "Spoke VNet with Private Endpoints and hub Azure Firewall / DNS Private Resolver integration",
          "Log Analytics (90-day retention) and Application Insights diagnostic audit trails",
          "Monthly budget alerts and operational runbooks"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate regulatory framework selection, DPIA approval, and key-lifecycle governance from sovereign IaC and compliance-mapping delivery.",
    "responsibilityRows": [
      {
        "domain": "Regulatory & Key Governance",
        "customer": "Specify target regulatory frameworks, approve DPIA/residency rules, and govern CMK key policies.",
        "devopstrio": "Configure UK-only Azure Policy initiatives, CMK integration, and Defender compliance mapping."
      },
      {
        "domain": "Azure Sovereign Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, internal APIM, Content Safety, Key Vault, and Log Analytics via IaC."
      },
      {
        "domain": "Verification & Handover",
        "customer": "Review compliance evidence with InfoSec/DPO and accept phase gates.",
        "devopstrio": "Validate Deny-mode policy enforcement, deliver audit evidence packs, and hand over runbooks."
      }
    ]
  },
  "061": {
    "kind": "Implementation",
    "architectureTitle": "Target Procurement & Purchase Request Agent Architecture",
    "architectureSummary": "Requesters interact with the Procurement and Purchase Request Agent backed by Foundry Agent Service and Container Apps inside a segmented spoke Virtual Network. Using a dedicated Entra identity, the agent checks policy-as-data thresholds and preferred suppliers via allow-listed API Management tools, records state in private Cosmos DB, and creates procurement requests only after explicit user confirmation.",
    "componentGroups": [
      {
        "title": "Agent Runtime & Policy Engine",
        "items": [
          "Foundry Agent Service and Container Apps (internal ingress) guiding purchase requests",
          "Procurement policy thresholds and preferred-supplier rules encoded as structured data",
          "Microsoft Foundry (GPT-4o) with Prompt Shields and content filtering",
          "Mandatory user confirmation step prior to submitting any purchase request"
        ]
      },
      {
        "title": "Procurement Tools & Approvals",
        "items": [
          "Internal API Management AI gateway exposing allow-listed procurement and ERP APIs",
          "Automated request creation aligned to existing financial delegation-of-authority rules",
          "Private Cosmos DB serverless (Entra ID only) persisting request context and audit traces",
          "Full end-to-end tracing of policy checks and supplier recommendations"
        ]
      },
      {
        "title": "Identity, Network & Guardrails",
        "items": [
          "Dedicated Entra agent identity with least-privilege permissions and zero shared keys",
          "Spoke VNet with Private Endpoints for Foundry, Cosmos DB, and Premium Key Vault",
          "Log Analytics (90-day retention) and Application Insights telemetry",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate procurement policy rules, supplier catalogues, and ERP APIs from private agentic infrastructure and workflow delivery.",
    "responsibilityRows": [
      {
        "domain": "Procurement Policy & ERP APIs",
        "customer": "Provide procurement threshold rules, preferred supplier lists, delegation matrix, and ERP APIs.",
        "devopstrio": "Codify policy-as-data checks and publish allow-listed procurement/supplier tools in APIM."
      },
      {
        "domain": "Azure Agent Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, internal APIM, Container Apps, Cosmos DB, and Key Vault via IaC."
      },
      {
        "domain": "Identity & Approvals",
        "customer": "Assign named business owner, approve Entra agent identity permissions, and sign off DPIA.",
        "devopstrio": "Configure dedicated Entra identity, Prompt Shields, user confirmation, and delegation routing."
      },
      {
        "domain": "Pilot & Handover",
        "customer": "Validate request accuracy and routing with procurement leads and accept phase gates.",
        "devopstrio": "Execute evaluation and security tests, enforce Deny policies, and deliver runbooks."
      }
    ]
  },
  "062": {
    "kind": "Implementation",
    "architectureTitle": "Target Copilot Studio IT Helpdesk Teams Architecture",
    "architectureSummary": "This engagement configures a Copilot Studio agent published to Microsoft Teams, grounded in your IT knowledge base and connected to ServiceNow or Jira Service Management across dev, test, and production Power Platform Managed Environments, with no new Azure workload infrastructure deployed.",
    "componentGroups": [
      {
        "title": "Teams Helpdesk & Knowledge",
        "items": [
          "Copilot Studio conversational agent published directly in Microsoft Teams",
          "Grounding in approved IT knowledge articles for guided self-help resolutions",
          "Context-rich escalation transferring conversation history to live IT analysts in Teams",
          "Automated conversation testing validated prior to production release"
        ]
      },
      {
        "title": "ITSM Connectors & Actions",
        "items": [
          "ServiceNow or Jira Service Management connectors for automated ticket creation",
          "Self-service ticket status lookups respecting user permissions",
          "Private VNet connectivity for Azure extensions where available",
          "Environment-level DLP policies restricting unapproved external connectors"
        ]
      },
      {
        "title": "Managed Environments & ALM",
        "items": [
          "Separate dev, test, and production Power Platform Managed Environments",
          "Managed solution packaging in Azure DevOps or GitHub with deployment settings files",
          "Power Platform release pipelines with approval gates",
          "Configuration acceptance log and IT maker handover"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate IT knowledge base maintenance, ITSM connector credentials, and analyst escalation queues from Copilot Studio and ALM delivery.",
    "responsibilityRows": [
      {
        "domain": "IT Knowledge & ITSM",
        "customer": "Provide IT knowledge base access, ServiceNow/Jira connector credentials, and analyst escalation queues.",
        "devopstrio": "Build Copilot Studio helpdesk topics, guided self-help, ticket automation, and Teams escalation."
      },
      {
        "domain": "Environments & ALM",
        "customer": "Provide Power Platform licences, Git repository, and approve release gate owners.",
        "devopstrio": "Configure dev/test/prod Managed Environments, DLP policies, and Power Platform pipelines."
      },
      {
        "domain": "Governance & Handover",
        "customer": "Approve DPIA requirements and support IT makers post-handover.",
        "devopstrio": "Execute conversation tests, document configuration log, and deliver handover runbooks."
      }
    ]
  },
  "063": {
    "kind": "Implementation",
    "architectureTitle": "Target Sentinel AI Threat Detection & SOAR Architecture",
    "architectureSummary": "AI workload diagnostic logs, gateway telemetry, and Defender for Cloud AI alerts stream into a central Log Analytics workspace (90-day retention) connected to Microsoft Sentinel. Custom analytics rules detect AI misuse patterns and trigger automated Logic Apps containment playbooks, requiring no Private Endpoints for the SIEM control plane itself.",
    "componentGroups": [
      {
        "title": "SIEM Ingestion & Telemetry",
        "items": [
          "Log Analytics workspace (PerGB2018, 90-day retention) and workspace-based Application Insights",
          "Ingestion of AI gateway, Foundry, and Defender for Cloud AI workload threat alerts",
          "Correlation with Purview DSPM for AI sensitive-data signals",
          "Entra ID authentication with local authentication disabled"
        ]
      },
      {
        "title": "AI Analytics & Detection Pack",
        "items": [
          "Sentinel analytics rules detecting prompt-injection waves and content-safety blocks",
          "Anomalous token-usage, model-enumeration, and unapproved-endpoint detections",
          "Aligned incident severity classification for SOC triage workflows",
          "Tested detection scenarios verified before production handover"
        ]
      },
      {
        "title": "Automated Containment & Guardrails",
        "items": [
          "Logic Apps SOAR playbooks automating initial AI incident containment and enrichment",
          "Structured SOC escalation and notification to named AI workload owners",
          "Devopstrio AI Policy initiative (Audit to Deny) enforcing UK residency and diagnostics",
          "Monthly consumption budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate existing SOC processes and Defender/Sentinel licensing from AI detection pack and Logic Apps playbook delivery.",
    "responsibilityRows": [
      {
        "domain": "Sentinel & Log Sources",
        "customer": "Provide Microsoft Sentinel workspace access, Defender for Cloud AI licences, and target AI log sources.",
        "devopstrio": "Deploy Log Analytics/App Insights foundation via IaC and connect AI log and Defender alert streams."
      },
      {
        "domain": "Analytics & Containment",
        "customer": "Approve automated containment actions (e.g. token/key suspension) and SOC severity thresholds.",
        "devopstrio": "Implement Sentinel AI analytics rules and Logic Apps containment playbooks."
      },
      {
        "domain": "SOC Testing & Handover",
        "customer": "Participate in tabletop incident simulation and operate SOC triage post-handover.",
        "devopstrio": "Validate detection rules, enforce Deny policies, and deliver SOC runbooks."
      }
    ]
  },
  "064": {
    "kind": "Implementation",
    "architectureTitle": "Target Fabric Real-Time Intelligence & Activator Architecture",
    "architectureSummary": "Live event producers stream into a private Event Hubs namespace (Standard, Entra ID only) behind a Private Endpoint inside a spoke Virtual Network, feeding Microsoft Fabric Eventstreams and Eventhouse (KQL) databases on dedicated Fabric capacity. Fabric Activator evaluates real-time conditions to trigger automated actions and downstream AI agents.",
    "componentGroups": [
      {
        "title": "Live Event Ingestion",
        "items": [
          "Private Event Hubs namespace (Standard, Entra ID only, TLS 1.2+) behind Private Endpoints",
          "Microsoft Fabric Eventstreams transforming and routing live events to a common schema",
          "Ingestion validation ensuring reliable downstream alerting",
          "Zero public network endpoints on Event Hubs"
        ]
      },
      {
        "title": "Eventhouse (KQL) & Fabric",
        "items": [
          "Microsoft Fabric capacity (scalable SKU) hosting domain-aligned workspaces",
          "Fabric Eventhouse (KQL) storing and querying high-volume time-series data",
          "Workspace identities enabled with private links and outbound protection where available",
          "Purview or medallion governance alignment for trusted AI data consumption"
        ]
      },
      {
        "title": "Activator Actions & Guardrails",
        "items": [
          "Fabric Activator rules triggering automated notifications, workflows, and AI agents",
          "Spoke VNet with Private Endpoint subnet and central Log Analytics (90-day retention)",
          "Devopstrio AI Policy initiative (Audit to Deny) enforcing UK residency and diagnostics",
          "Monthly budget alerts at 50%, 80%, and 100% spend thresholds"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate upstream event producers and action-target owners from private Event Hubs, Eventhouse, and Activator delivery.",
    "responsibilityRows": [
      {
        "domain": "Event Producers & Schemas",
        "customer": "Provide upstream event streams, common schema requirements, and domain workspace owners.",
        "devopstrio": "Configure private Event Hubs, Eventstreams, and common event ingestion pipelines."
      },
      {
        "domain": "Fabric & Network Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy spoke VNet, Private Endpoints, Fabric capacity, and Eventhouse (KQL) via IaC."
      },
      {
        "domain": "Activator Rules & Handover",
        "customer": "Approve automated action thresholds, DPIA requirements, and operate rules post-handover.",
        "devopstrio": "Implement Fabric Activator triggers, Deny-mode policies, and deliver operational runbooks."
      }
    ]
  },
  "065": {
    "kind": "Implementation",
    "architectureTitle": "Target Unity Catalog AI Asset & Vector Search Architecture",
    "architectureSummary": "A Premium Azure Databricks workspace deploys with VNet injection (no public IP) and Private Endpoints inside a spoke Virtual Network alongside private Storage (Entra ID only). Unity Catalog governs Delta tables, feature stores, registered models, AI functions, and Databricks Vector Search indexes with unified permissions and end-to-end lineage.",
    "componentGroups": [
      {
        "title": "Unity Catalog AI Governance",
        "items": [
          "Unity Catalog metastore with environment-isolated catalogues for data and AI assets",
          "Central registration and governance of ML models, feature tables, and AI functions",
          "End-to-end lineage connecting source tables, features, vector indexes, and models",
          "Centralised, auditable access policies across data and AI artefacts"
        ]
      },
      {
        "title": "Databricks Vector Search & Lakehouse",
        "items": [
          "Databricks Vector Search indexes inheriting Unity Catalog access controls",
          "Medallion (bronze, silver, gold) Delta tables stored on private ADLS/Storage",
          "Private Storage Account (ZRS, TLS 1.2+, shared keys disabled, infrastructure encryption)",
          "VNet-injected Databricks workspace with public network access disabled"
        ]
      },
      {
        "title": "Network, Policy & Monitoring",
        "items": [
          "Spoke VNet with Private Endpoints and NoAzureDatabricksRules Private Link NSGs",
          "Log Analytics (90-day retention) and Application Insights workspace diagnostics",
          "Devopstrio AI Policy initiative (Audit to Deny) enforcing UK residency and diagnostics",
          "Monthly budget threshold alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate domain data/model ownership and hub networking from VNet-injected Databricks and Unity Catalog AI governance delivery.",
    "responsibilityRows": [
      {
        "domain": "Platform Hub & AI Assets",
        "customer": "Maintain hub VNet/DNS and identify initial datasets, models, and vector-search use cases.",
        "devopstrio": "Deploy VNet-injected Databricks, Private Endpoints, and private Storage via Terraform or Bicep."
      },
      {
        "domain": "Unity Catalog & Vector Search",
        "customer": "Approve catalogue taxonomy, data/model owners, and Unity Catalog permission groups.",
        "devopstrio": "Configure Unity Catalog model/function registration, lineage, and Vector Search indexes."
      },
      {
        "domain": "Compliance & Handover",
        "customer": "Approve DPIA requirements and manage ongoing AI asset governance post-handover.",
        "devopstrio": "Enforce Deny-mode Azure Policies, deliver operational runbooks, and conduct handover."
      }
    ]
  },
  "066": {
    "kind": "Implementation",
    "architectureTitle": "Target Dynamics 365 Contact Centre AI Architecture",
    "architectureSummary": "This engagement configures Dynamics 365 contact centre, Copilot in Dynamics 365, intelligent intent-based routing, transcript redaction, and Power BI service reporting within your existing Microsoft tenant, with no new Azure workload infrastructure deployed.",
    "componentGroups": [
      {
        "title": "Channels & Intent Routing",
        "items": [
          "Voice and digital channel configuration in Dynamics 365 contact centre",
          "Intelligent intent-based routing reducing customer wait times",
          "Upfront AI disclosure and seamless escalation paths to human agents",
          "Secure API integration with existing telephony platforms where retained"
        ]
      },
      {
        "title": "Copilot Assist & Redaction",
        "items": [
          "Copilot in Dynamics 365 contact centre delivering real-time agent assistance and drafted replies",
          "Automated structured post-contact summaries for agent review",
          "Automated personal and payment card redaction across call transcripts",
          "Configurable recording and transcript retention aligned to policy"
        ]
      },
      {
        "title": "Reporting & Handover",
        "items": [
          "Power BI dashboards tracking queue SLAs, handle times, and AI-assist impact",
          "Role-based access controls across contact-centre supervisors and agents",
          "Configuration acceptance log and closure sign-off",
          "Operational runbooks and team knowledge transfer"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate Dynamics 365 licensing, telephony carrier links, and supervisor governance from contact centre AI configuration.",
    "responsibilityRows": [
      {
        "domain": "Dynamics 365 & Telephony",
        "customer": "Provide Dynamics 365 contact centre and Copilot licences, tenant access, and telephony integration.",
        "devopstrio": "Configure voice/digital channels, intent-based routing, and Copilot agent-assist features."
      },
      {
        "domain": "Privacy & Redaction",
        "customer": "Approve DPIA, transcript retention schedules, and payment-redaction rules.",
        "devopstrio": "Implement transcript PII/PCI redaction settings and AI disclosure prompts."
      },
      {
        "domain": "Reporting & Handover",
        "customer": "Validate service-level metrics with contact-centre leads and operate post-handover.",
        "devopstrio": "Deliver Power BI service/AI dashboards, configuration log, and handover runbooks."
      }
    ]
  },
  "068": {
    "kind": "Implementation",
    "architectureTitle": "Target Power Platform & Copilot Studio CoE Architecture",
    "architectureSummary": "This engagement deploys the Power Platform CoE Starter Kit, three-tier Managed Environments, tiered DLP policies, Power Platform ALM pipelines, and a Teams/SharePoint maker support hub within your existing Microsoft tenant, with no new Azure infrastructure deployed.",
    "componentGroups": [
      {
        "title": "CoE Inventory & Monitoring",
        "items": [
          "CoE Starter Kit ingesting tenant-wide inventory of Power Apps, flows, and agents",
          "Owner tracking, usage telemetry, and orphaned-asset identification",
          "Automated compliance and maker-attestation notifications",
          "Executive visibility without blocking business-led innovation"
        ]
      },
      {
        "title": "Environments, DLP & ALM",
        "items": [
          "Three-tier Managed Environments strategy separating dev, test, and production",
          "Tiered DLP policies governing connector combinations per environment tier",
          "Git-backed solution packaging and Power Platform release pipelines with approvals",
          "Private VNet connectivity for Azure extensions where available"
        ]
      },
      {
        "title": "Maker Enablement Community",
        "items": [
          "Structured maker onboarding process with guardrails and templates",
          "Teams and SharePoint maker community hub for guidance and peer support",
          "Clear escalation path from citizen makers to central platform engineering",
          "Configuration acceptance log and handover runbooks"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate tenant admin licensing and maker community leadership from CoE Starter Kit, environment, and DLP delivery.",
    "responsibilityRows": [
      {
        "domain": "Tenant & Environment Strategy",
        "customer": "Provide Power Platform admin access, licences, and approve three-tier environment rules.",
        "devopstrio": "Deploy CoE Starter Kit, Managed Environments, and tiered DLP policies."
      },
      {
        "domain": "ALM & Maker Onboarding",
        "customer": "Provide Git repository access and nominate internal CoE/maker champions.",
        "devopstrio": "Configure Power Platform ALM pipelines, maker onboarding flows, and Teams/SharePoint hub."
      },
      {
        "domain": "Governance & Handover",
        "customer": "Approve DPIA requirements and operate CoE governance processes post-handover.",
        "devopstrio": "Deliver configuration acceptance log, operational runbooks, and admin handover."
      }
    ]
  },
  "069": {
    "kind": "Implementation",
    "architectureTitle": "Target Enterprise Copilot Chat & Shadow AI Control Architecture",
    "architectureSummary": "This engagement configures Microsoft 365 Copilot Chat with enterprise data protection, Defender for Cloud Apps shadow-AI controls, Purview sensitivity/DLP baselines, and Entra Conditional Access within your existing tenant, with no new Azure infrastructure deployed.",
    "componentGroups": [
      {
        "title": "Copilot Chat & Grounding Policy",
        "items": [
          "Microsoft 365 Copilot Chat enabled for all staff with enterprise data protection",
          "Web grounding and approved-agent settings aligned to organisational risk policy",
          "Entra Conditional Access enforcing MFA and compliant or hybrid-joined devices",
          "Blocking of legacy authentication and guest access controls"
        ]
      },
      {
        "title": "Shadow AI & Purview Controls",
        "items": [
          "Defender for Cloud Apps policies monitoring and blocking unsanctioned public AI sites",
          "Purview sensitivity labels with Copilot DLP excluding Highly Confidential content",
          "DSPM for AI monitoring and SharePoint Data Access Governance oversharing checks",
          "Site access reviews on flagged SharePoint repositories"
        ]
      },
      {
        "title": "Staged Rollout & Telemetry",
        "items": [
          "Three-wave rollout: IT/champions, low-risk business areas, and organisation-wide",
          "Copilot Dashboard tracking active usage and assisted hours",
          "User sentiment tracking and champions feedback loop",
          "Configuration acceptance log and operational handover"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate tenant licensing, blocked-site policy decisions, and internal comms from Copilot Chat and Defender configuration.",
    "responsibilityRows": [
      {
        "domain": "M365 & Defender Licensing",
        "customer": "Provide M365 and Defender for Cloud Apps licences, tenant access, and web-grounding policy.",
        "devopstrio": "Configure Copilot Chat enterprise data protection, web grounding, and Defender shadow-AI policies."
      },
      {
        "domain": "Purview & Conditional Access",
        "customer": "Approve sensitivity label taxonomy, Conditional Access policies, and DPIA decisions.",
        "devopstrio": "Align Purview Copilot DLP, DSPM for AI, SharePoint reports, and Conditional Access."
      },
      {
        "domain": "Rollout & Handover",
        "customer": "Manage staff communications, champions network, and ongoing governance post-handover.",
        "devopstrio": "Deliver wave entry criteria, usage tracking setup, and operational runbooks."
      }
    ]
  },
  "070": {
    "kind": "Implementation",
    "architectureTitle": "Target Algorithmic Transparency & Register-Sourced Architecture",
    "architectureSummary": "This engagement establishes plain-language Algorithmic Transparency Record templates, register-to-record metadata mapping from your AI use-case register, and change-triggered review workflows within your existing governance tooling, with no new Azure infrastructure deployed.",
    "componentGroups": [
      {
        "title": "Transparency Templates & Drafting",
        "items": [
          "Standardised Algorithmic Transparency Record templates in plain language",
          "Structured sections covering tool purpose, decision impact, human oversight, and fairness",
          "Collaborative drafting and compliance review for agreed in-scope AI tools",
          "Publication-ready format supporting public accountability"
        ]
      },
      {
        "title": "AI Register Metadata Sourcing",
        "items": [
          "Direct traceability from AI use-case and model register entries (owner, purpose, risk tier)",
          "Inclusion of evaluation, red-teaming, and data-provenance summaries",
          "Alignment with UK GDPR and responsible AI governance gates",
          "Versioned record history supporting audit and FOI requests"
        ]
      },
      {
        "title": "Change-Triggered Maintenance",
        "items": [
          "Review triggers linked to model retraining, prompt updates, or scope changes",
          "Named record owners accountable for periodic and change-driven sign-off",
          "Configuration acceptance log and governance workflow documentation",
          "Knowledge transfer to AI governance and communications teams"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate legal/policy sign-off, public publication approval, and register ownership from transparency template and record delivery.",
    "responsibilityRows": [
      {
        "domain": "AI Register & In-Scope Tools",
        "customer": "Provide AI use-case register entries, technical system owners, and legal/policy reviewers.",
        "devopstrio": "Map register metadata to transparency templates and draft records for in-scope tools."
      },
      {
        "domain": "Compliance & Sign-Off",
        "customer": "Provide legal interpretation, DPIA alignment, and final approval for public publication.",
        "devopstrio": "Ensure plain-language clarity, technical accuracy, and traceability to evaluation evidence."
      },
      {
        "domain": "Maintenance & Handover",
        "customer": "Publish approved records and operate change-triggered reviews post-handover.",
        "devopstrio": "Deliver transparency templates, change-review runbooks, and governance handover."
      }
    ]
  },
  "071": {
    "kind": "Implementation",
    "architectureTitle": "Target Model Monitoring & Six-Signal Drift Detection Architecture",
    "architectureSummary": "A private Azure Machine Learning workspace (AllowOnlyApprovedOutbound) and Foundry quality evaluators monitor production ML and generative endpoints inside a spoke Virtual Network behind Private Endpoints. Six signal types feed central Log Analytics (90-day retention) and Application Insights, triggering Azure Monitor alerts to named model owners.",
    "componentGroups": [
      {
        "title": "Six-Signal Drift & Quality",
        "items": [
          "AML model monitoring tracking data drift, prediction drift, and feature-attribution drift",
          "Automated data-quality checks on live inference inputs",
          "Scheduled generative AI output sampling and quality scoring",
          "Continuous token cost and latency telemetry"
        ]
      },
      {
        "title": "Private AML & Storage",
        "items": [
          "Private Azure Machine Learning workspace with managed network (AllowOnlyApprovedOutbound)",
          "Scale-to-zero monitoring compute clusters and dedicated ML storage behind Private Endpoints",
          "Premium Key Vault (RBAC, purge protection) with local authentication disabled",
          "Baseline reference datasets versioned for drift comparison"
        ]
      },
      {
        "title": "Owner Alerts & Guardrails",
        "items": [
          "Azure Monitor alert rules routing drift/quality incidents to named model owners",
          "Defined response playbooks (investigate, rollback, or trigger retraining)",
          "Log Analytics (90-day retention) and workspace-based Application Insights",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate production model endpoints, baseline datasets, and owner incident response from private monitoring and alerting delivery.",
    "responsibilityRows": [
      {
        "domain": "Production Models & Baselines",
        "customer": "Provide production model inference logs, training baselines, and named model owners.",
        "devopstrio": "Configure six-signal AML drift monitors and generative quality sampling pipelines."
      },
      {
        "domain": "Azure Monitoring Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy AML, ML storage, Key Vault, Log Analytics, and App Insights via IaC."
      },
      {
        "domain": "Alerting & Handover",
        "customer": "Approve drift thresholds, DPIA requirements, and act on owner alerts post-handover.",
        "devopstrio": "Configure Azure Monitor owner alerts, Deny-mode policies, and response runbooks."
      }
    ]
  },
  "072": {
    "kind": "Implementation",
    "architectureTitle": "Target Rule-Bound Dynamic Pricing & Markdown Architecture",
    "architectureSummary": "Sales, stock, and competitor pricing feeds land in a private Storage Account (ZRS, Entra ID only) inside a spoke Virtual Network and feed a private Azure Machine Learning workspace (AllowOnlyApprovedOutbound) behind Private Endpoints. Elasticity and markdown models generate rule-bound recommendations exported to your pricing tool for mandatory human manager approval.",
    "componentGroups": [
      {
        "title": "Pricing Inputs & Feature Store",
        "items": [
          "Ingestion of historical sales, stock-on-hand, and competitor price datasets",
          "Private Storage Account (ZRS, Entra ID only, no shared keys) staging pricing features",
          "Data quality checks flagging incomplete SKU or competitor records",
          "Strict UK data residency and TLS 1.2+ encryption"
        ]
      },
      {
        "title": "Elasticity & Guardrail Models",
        "items": [
          "Private Azure Machine Learning workspace with managed network (AllowOnlyApprovedOutbound)",
          "Scale-to-zero compute clusters estimating price elasticity by product and segment",
          "Optimisation engine enforcing commercial margin floors and markdown rules",
          "Explainable margin vs. sell-through rationale for pricing managers"
        ]
      },
      {
        "title": "Manager Approval & Controls",
        "items": [
          "Export of recommendations to pricing tool requiring explicit manager approval before publish",
          "Spoke VNet with Private Endpoints for AML, Storage, and Premium Key Vault",
          "Log Analytics (90-day retention) and Application Insights telemetry",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate commercial pricing rules, competitor feeds, and manager sign-off from private AML elasticity and optimisation delivery.",
    "responsibilityRows": [
      {
        "domain": "Pricing Data & Rules",
        "customer": "Supply sales, stock, and competitor pricing feeds alongside commercial margin/markdown rules.",
        "devopstrio": "Build feature pipelines, price-elasticity models, and rule-bound markdown optimisation."
      },
      {
        "domain": "Azure MLOps Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy AML, private Storage, Key Vault, and Log Analytics via Terraform or Bicep."
      },
      {
        "domain": "Approval & Handover",
        "customer": "Integrate pricing tool approval workflow, validate pilot margin impact, and accept phase gates.",
        "devopstrio": "Configure pricing-tool export, Deny-mode policies, and deliver operational runbooks."
      }
    ]
  },
  "073": {
    "kind": "Implementation",
    "architectureTitle": "Target Real-Time Agent Assist & Call Summaries Architecture",
    "architectureSummary": "Live call audio streams into private Azure AI Speech inside a segmented spoke Virtual Network. Container Apps orchestrate real-time knowledge suggestions via private Azure AI Search and fixed-format call summaries via an internal API Management AI gateway to Microsoft Foundry (GPT-4o), redacting PII/payment data and saving agent-approved summaries to CRM.",
    "componentGroups": [
      {
        "title": "Live Speech & Redaction",
        "items": [
          "Private Azure AI Speech (SpeechServices) generating live call transcripts",
          "Automated redaction of personal and payment card data from transcripts",
          "Secure API integration with Dynamics 365 or existing contact-centre telephony",
          "Retention controls aligned to UK GDPR and contact-centre policy"
        ]
      },
      {
        "title": "Real-Time Assist & Summaries",
        "items": [
          "Private Azure AI Search (semantic ranker) surfacing real-time knowledge suggestions",
          "Microsoft Foundry (GPT-4o, text-embedding-3-large) behind Private Endpoints",
          "Internal API Management AI gateway enforcing quotas and managed-identity calls",
          "Fixed-format call summaries requiring agent review before CRM save-back"
        ]
      },
      {
        "title": "Network, Runtime & Audit",
        "items": [
          "Container Apps runtime (internal ingress) within a segmented spoke VNet",
          "Premium Key Vault (RBAC, purge protection) and zero local authentication",
          "Log Analytics (90-day retention) and Application Insights telemetry",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate telephony audio streams, CRM APIs, and knowledge ownership from private Speech, Search, and Foundry delivery.",
    "responsibilityRows": [
      {
        "domain": "Telephony, CRM & Knowledge",
        "customer": "Provide live call audio/telephony APIs, CRM write-back APIs, and approved knowledge content.",
        "devopstrio": "Configure live Speech transcription, real-time Search suggestions, and CRM summary write-back."
      },
      {
        "domain": "Azure AI Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Speech, Foundry, AI Search, internal APIM, Container Apps, and Key Vault via IaC."
      },
      {
        "domain": "Privacy & Handover",
        "customer": "Approve DPIA, transcript redaction/retention rules, and validate summaries with agents.",
        "devopstrio": "Implement PII/PCI redaction, Prompt Shields, Deny policies, and operational runbooks."
      }
    ]
  },
  "074": {
    "kind": "Implementation",
    "architectureTitle": "Target 100%-Coverage Call Analytics & QA Architecture",
    "architectureSummary": "Call recordings land in a private Storage Account (ZRS, Entra ID only) inside a spoke Virtual Network and are batch-transcribed via private Azure AI Speech. Private Azure AI Language redacts personal and payment data before Microsoft Foundry (GPT-4o) evaluates every transcript against QA and compliance scorecards, feeding coaching Power BI dashboards.",
    "componentGroups": [
      {
        "title": "Batch Speech & Redaction",
        "items": [
          "Private Storage Account (ZRS, Entra ID only, no shared keys) staging call recordings",
          "Private Azure AI Speech (SpeechServices) executing batch transcription",
          "Private Azure AI Language (TextAnalytics) redacting personal and payment data",
          "Retention controls aligned to contact-centre compliance policy"
        ]
      },
      {
        "title": "Automated QA & Compliance Scoring",
        "items": [
          "Microsoft Foundry (GPT-4o) behind Private Endpoints with local keys disabled",
          "Automated scoring of 100% of calls against customer QA and compliance scorecards",
          "Rapid flagging of compliance breaches and vulnerable-customer indicators",
          "Prompt Shields and content filtering active on all deployments"
        ]
      },
      {
        "title": "Coaching Insights & Controls",
        "items": [
          "Coaching-focused Power BI dashboards for QA leads and team managers",
          "Spoke VNet with Private Endpoints for Speech, Language, Foundry, Storage, and Key Vault",
          "Log Analytics (90-day retention) and Application Insights diagnostics",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate call-recording feeds, QA scorecards, and supervisor coaching from private Speech, Language, and Foundry delivery.",
    "responsibilityRows": [
      {
        "domain": "Recordings & QA Scorecards",
        "customer": "Provide call-recording feeds, existing QA/compliance scorecards, and breach definitions.",
        "devopstrio": "Build batch Speech transcription, PII/PCI redaction, and automated scorecard scoring."
      },
      {
        "domain": "Azure AI Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Speech, Language, Foundry, private Storage, Key Vault, and Log Analytics via IaC."
      },
      {
        "domain": "Coaching & Handover",
        "customer": "Approve DPIA, validate scoring calibration with QA leads, and operate coaching post-handover.",
        "devopstrio": "Deliver coaching Power BI dashboards, Deny-mode policies, and operational runbooks."
      }
    ]
  },
  "075": {
    "kind": "Implementation",
    "architectureTitle": "Target AI Cost Visibility & Chargeback Architecture",
    "architectureSummary": "All model traffic passes through an internal API Management AI gateway inside a spoke Virtual Network to private Microsoft Foundry deployments. APIM emits per-application token metrics into Log Analytics, which combine with Azure Cost Management billing exports in private Storage (ZRS, Entra ID only) to power monthly Power BI chargeback dashboards.",
    "componentGroups": [
      {
        "title": "AI Gateway Token Metering",
        "items": [
          "Internal API Management AI gateway authenticating to Foundry via managed identity",
          "Per-application subscription keys metering prompt and completion token usage",
          "Non-production token quotas and production capacity tracking",
          "Mandatory CAF tags (CostCentre, Owner, Workload) enforced on AI resources"
        ]
      },
      {
        "title": "Cost Exports & Allocation",
        "items": [
          "Automated Azure Cost Management billing exports landed in private Storage (Entra ID only)",
          "Proportional allocation rules distributing shared gateway/platform costs by token usage",
          "Integration of token metrics with actual Azure spend per team and business case",
          "Early-warning budget alerts at 50%, 80%, and 100% thresholds"
        ]
      },
      {
        "title": "Chargeback BI & Network",
        "items": [
          "Power BI chargeback/showback reports tailored for Finance and engineering owners",
          "Spoke VNet with Private Endpoints for Foundry, Storage, and Premium Key Vault",
          "Log Analytics (90-day retention) and Application Insights telemetry",
          "Devopstrio AI Policy initiative (Audit to Deny) enforcing UK residency"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate commercial billing agreements, cost-centre ownership, and FinOps governance from gateway metering and chargeback BI delivery.",
    "responsibilityRows": [
      {
        "domain": "Cost Taxonomy & Billing Exports",
        "customer": "Provide Azure Cost Management export access, CostCentre/Owner tags, and Finance allocation rules.",
        "devopstrio": "Configure Cost Management exports to private Storage and build proportional allocation logic."
      },
      {
        "domain": "AI Gateway & Metering",
        "customer": "Operate hub VNet/DNS and onboard calling AI applications to APIM subscription keys.",
        "devopstrio": "Deploy internal APIM, Foundry, Storage, and Key Vault via IaC with token-metering policies."
      },
      {
        "domain": "Chargeback BI & Handover",
        "customer": "Validate monthly chargeback views with Finance and operate FinOps reviews post-handover.",
        "devopstrio": "Deliver Power BI chargeback dashboards, Deny-mode policies, and operational runbooks."
      }
    ]
  },
  "076": {
    "kind": "Assessment",
    "matrixIntro": "The assessment uses read-only Cost Management exports, API Management token metrics, PTU utilisation data, and invoices to model baseline-plus-spillover throughput sizing across five operational domains.",
    "matrixRows": [
      {
        "reviewArea": "Usage & Token Demand",
        "evidence": "Read-only API Management token metrics and per-application request/latency logs.",
        "output": "Baseline vs. peak token demand profiles per model and calling application."
      },
      {
        "reviewArea": "Provisioned Capacity Utilisation",
        "evidence": "Read-only PTU utilisation telemetry and regional quota availability.",
        "output": "Right-sized PTU baseline recommendations and over/under-provisioning findings."
      },
      {
        "reviewArea": "Pricing & Commercial Scenarios",
        "evidence": "Read-only Azure Cost Management exports and historical AI invoices.",
        "output": "Scenario comparison of pay-as-you-go vs. reserved PTU plus spillover economics."
      },
      {
        "reviewArea": "Gateway Spillover Routing",
        "evidence": "Existing API Management backend policies, retry logic, and latency targets.",
        "output": "Target APIM spillover routing specification maintaining SLA targets during bursts."
      },
      {
        "reviewArea": "FinOps Governance",
        "evidence": "Stakeholder interviews covering budget alerts, quotas, and monthly review cadence.",
        "output": "Monthly capacity-review playbook and prioritised optimisation roadmap."
      }
    ],
    "methodologyIntro": "Delivered across four phases—Mobilise, Discover, Analyse, and Report—grounding commercial PTU sizing decisions in actual gateway and billing telemetry.",
    "methodologyTiers": [
      {
        "label": "Phase 01",
        "title": "Read-Only Telemetry & Billing Capture",
        "description": "Collects Cost Management exports, APIM token metrics, PTU utilisation, and invoices without altering live traffic."
      },
      {
        "label": "Phase 02",
        "title": "Baseline + Spillover Modelling",
        "description": "Analyses hourly/daily demand curves to size reserved PTU capacity for steady baseline load and model pay-as-you-go spillover."
      },
      {
        "label": "Phase 03",
        "title": "Spillover Spec & Monthly Cadence",
        "description": "Delivers APIM spillover routing recommendations, an executive business case, and a monthly optimisation review process."
      }
    ]
  },
  "077": {
    "kind": "Accelerator",
    "configIntro": "The AI Gateway Accelerator standardises internal API Management security, Entra ID authentication, load-balanced Foundry backends, and token-metering policy fragments while parameterising spoke networking, per-app token limits, and onboarding products.",
    "standardComponents": {
      "title": "Standardised Gateway & Security Baseline",
      "items": [
        "Internal-mode API Management gateway in a dedicated spoke subnet",
        "Entra ID token authentication for callers and managed identity to Foundry models",
        "Reusable APIM policy fragments enforcing token limits and emitting token metrics",
        "Load-balanced Foundry model backend pools with Prompt Shields and content filtering",
        "Private Endpoints for Foundry and Premium Key Vault with Deny-mode Azure Policy"
      ]
    },
    "customerConfiguration": {
      "title": "Customer-Specific Parameters & Onboarding",
      "items": [
        "Spoke VNet address spaces and hub Azure Firewall / DNS Private Resolver targets",
        "Per-application API Management products and token-per-minute quota thresholds",
        "Approved regional model deployments (UK South) and Data Zone exceptions if any",
        "CAF taxonomy tags (CostCentre, Owner, Workload) and monthly budget alert contacts",
        "Entra ID RBAC groups and PIM-eligible platform admin approvals"
      ]
    },
    "workflowIntro": "The accelerator deploys and validates the central AI gateway across four gated stages before onboarding consuming AI applications.",
    "workflowRows": [
      {
        "stage": "1. Network & Foundry Deploy",
        "operation": "Provision spoke VNet, Private Endpoints, Key Vault, Foundry, and internal APIM via Terraform or Bicep.",
        "validationGate": "Private DNS resolution and public-network-access Deny check."
      },
      {
        "stage": "2. Policy Fragment & Pool Setup",
        "operation": "Apply reusable APIM policy fragments, Entra token validation, and load-balanced Foundry backends.",
        "validationGate": "Managed-identity inference and Prompt Shields verification."
      },
      {
        "stage": "3. App Product Onboarding",
        "operation": "Onboard initial pilot application as an API product with per-app token rate limits and metrics.",
        "validationGate": "Token quota throttling and Log Analytics metric export test."
      },
      {
        "stage": "4. Production Gate & Handover",
        "operation": "Switch Azure Policies to Deny mode, enable prod delete locks, and hand over onboarding runbooks.",
        "validationGate": "Security review sign-off and closure report acceptance."
      }
    ]
  },
  "078": {
    "kind": "Implementation",
    "architectureTitle": "Target Layout-Aware Document Summarisation Architecture",
    "architectureSummary": "Documents land in a private Storage Account (ZRS, Entra ID only) inside a segmented spoke Virtual Network and are parsed by private Azure AI Document Intelligence to preserve layout and page numbers. Container Apps / serverless orchestrators chunk long documents and route sectioned summarisation calls through an internal API Management AI gateway to Microsoft Foundry (GPT-4o) over Private Endpoints.",
    "componentGroups": [
      {
        "title": "Document Ingestion & Layout",
        "items": [
          "Private Storage Account (ZRS, Entra ID only, no shared keys) staging source documents",
          "Private Azure AI Document Intelligence (FormRecognizer) extracting text, tables, and page numbers",
          "Section-by-section chunking strategy handling long multi-page reports cleanly",
          "Strict preservation of page-level provenance metadata"
        ]
      },
      {
        "title": "Summariser & Templates",
        "items": [
          "Container Apps runtime (internal ingress) orchestrating map-reduce summarisation",
          "Internal API Management AI gateway enforcing quotas and managed-identity calls",
          "Microsoft Foundry (GPT-4o) with Prompt Shields and configurable summary templates",
          "Side-by-side review output linking summary points to source page numbers"
        ]
      },
      {
        "title": "Network, Secrets & Audit",
        "items": [
          "Spoke VNet with Private Endpoints for Foundry, Document Intelligence, Storage, and Key Vault",
          "Premium Key Vault (RBAC, purge protection) and zero local authentication",
          "Restricted-access audit logs in Log Analytics and Application Insights",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate source document repositories and summary templates from private Document Intelligence and Foundry summarisation delivery.",
    "responsibilityRows": [
      {
        "domain": "Documents & Templates",
        "customer": "Provide sample document types, approved summary templates, and target storage/DMS triggers.",
        "devopstrio": "Configure Document Intelligence extraction, sectioned summarisation, and page-citation links."
      },
      {
        "domain": "Azure AI Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, Document Intelligence, internal APIM, Container Apps, Storage, and Key Vault via IaC."
      },
      {
        "domain": "Compliance & Handover",
        "customer": "Approve DPIA, AI-generated content markings, and validate summary quality with reviewers.",
        "devopstrio": "Implement Prompt Shields, restricted audit logs, Deny policies, and operational runbooks."
      }
    ]
  },
  "079": {
    "kind": "Implementation",
    "architectureTitle": "Target Proposal & Bid Writing Assistant Architecture",
    "architectureSummary": "Curated past proposal answers are embedded via Microsoft Foundry and indexed with metadata in private Azure AI Search inside a segmented spoke Virtual Network. Bid teams use a Container Apps service routing through an internal API Management AI gateway to generate cited, gap-flagged question drafts exported into Word templates.",
    "componentGroups": [
      {
        "title": "Curated Answer Library",
        "items": [
          "Private Storage Account (ZRS, Entra ID only, no shared keys) holding approved past responses",
          "Private Azure AI Search (Standard SKU, semantic ranker) indexing vetted Q&A pairs with metadata",
          "Source attribution preserving winning-bid and subject-matter-owner references",
          "Zero unapproved or expired boilerplate surfaced in search results"
        ]
      },
      {
        "title": "Drafting Flow & Word Export",
        "items": [
          "Container Apps runtime (internal ingress) parsing tender questions and orchestrating drafts",
          "Internal API Management AI gateway routing to Microsoft Foundry (GPT-4o, embeddings)",
          "Question-by-question drafting citing sources and flagging missing evidence gaps",
          "Structured export to customer Word templates for final bid-manager editing"
        ]
      },
      {
        "title": "Network, Safety & Audit",
        "items": [
          "Spoke VNet with Private Endpoints for Foundry, AI Search, Storage, and Key Vault",
          "Prompt Shields content filtering and explicit AI-generated draft labelling",
          "Premium Key Vault (RBAC, purge protection) and Log Analytics (90-day retention)",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate curated bid library content, Word templates, and editorial sign-off from private AI Search and drafting delivery.",
    "responsibilityRows": [
      {
        "domain": "Answer Library & Templates",
        "customer": "Provide approved past proposal content, metadata taxonomy, and branded Word templates.",
        "devopstrio": "Build metadata-indexed AI Search answer library, gap-flagging prompts, and Word export."
      },
      {
        "domain": "Azure AI Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, AI Search, internal APIM, Container Apps, Storage, and Key Vault via IaC."
      },
      {
        "domain": "Governance & Handover",
        "customer": "Approve DPIA, ensure bid-manager review of final text, and accept phase gates.",
        "devopstrio": "Implement Prompt Shields, restricted audit logs, Deny policies, and operational runbooks."
      }
    ]
  },
  "080": {
    "kind": "Implementation",
    "architectureTitle": "Target Governed Natural Language Reporting Architecture",
    "architectureSummary": "Business users ask questions in Teams or web chat backed by Container Apps inside a segmented spoke Virtual Network. Requests route through an internal API Management AI gateway to Microsoft Foundry (GPT-4o) to translate questions against a governed Microsoft Fabric / Power BI semantic model enforcing Row-Level Security and showing generated queries alongside answers.",
    "componentGroups": [
      {
        "title": "Governed Semantic Layer",
        "items": [
          "Microsoft Fabric capacity hosting governed Fabric / Power BI semantic models",
          "Authoritative business KPI definitions preventing conflicting metric calculations",
          "Strict Row-Level Security (RLS) enforced per signing-in Entra user on every query",
          "Zero direct unapproved table access bypassing the semantic layer"
        ]
      },
      {
        "title": "Query Agent & Transparency",
        "items": [
          "Container Apps interface (internal ingress) serving Teams and web chat experiences",
          "Internal API Management AI gateway routing to Microsoft Foundry (GPT-4o)",
          "Natural-language-to-query generation displaying the exact query alongside results",
          "Prompt Shields and explicit AI-generated answer disclosure"
        ]
      },
      {
        "title": "Network, Secrets & Audit",
        "items": [
          "Spoke VNet with Private Endpoints for Foundry and Premium Key Vault (RBAC, purge protection)",
          "Entra ID authentication with local keys and public PaaS access disabled",
          "Log Analytics (90-day retention) and Application Insights query audit logs",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate business KPI definitions, semantic-model data ownership, and RLS rules from private Foundry and Fabric query-agent delivery.",
    "responsibilityRows": [
      {
        "domain": "Semantic Model & RLS",
        "customer": "Provide authoritative business metric definitions, Fabric/Power BI datasets, and Entra RLS groups.",
        "devopstrio": "Configure governed semantic layer, RLS enforcement, and query-explanation output."
      },
      {
        "domain": "Azure AI Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, internal APIM, Container Apps, Fabric capacity, and Key Vault via IaC."
      },
      {
        "domain": "Security & Handover",
        "customer": "Approve DPIA, validate query accuracy with analysts, and accept phase gates.",
        "devopstrio": "Implement Prompt Shields, restricted audit logs, Deny policies, and operational runbooks."
      }
    ]
  },
  "081": {
    "kind": "Implementation",
    "architectureTitle": "Target SRE & Incident Response Agent Architecture",
    "architectureSummary": "When alerts fire, the SRE and Incident Response Agent runs on Foundry Agent Service and Container Apps inside a segmented spoke Virtual Network. Using a dedicated Entra identity, it queries Azure Monitor, Log Analytics, and runbooks through allow-listed API Management tools, persists incident timelines in private Cosmos DB and ITSM, and executes approved runbooks only after on-call sign-off.",
    "componentGroups": [
      {
        "title": "Diagnosis & On-Call Channel",
        "items": [
          "Foundry Agent Service / Azure SRE Agent and Container Apps (internal ingress)",
          "Automated incident triage summarising root-cause signals in Microsoft Teams and ITSM",
          "Structured incident timeline written directly to ITSM incident records",
          "Microsoft Foundry (GPT-4o) with Prompt Shields and content filtering"
        ]
      },
      {
        "title": "Allow-Listed Diagnostics & Runbooks",
        "items": [
          "Internal API Management AI gateway exposing allow-listed Monitor, Log Analytics, and ITSM tools",
          "Read-only diagnostic queries paired with pre-approved remediation runbooks",
          "Mandatory on-call human approval gate before executing any production change",
          "Private Cosmos DB serverless (Entra ID only) persisting run state and trace logs"
        ]
      },
      {
        "title": "Identity, Network & Controls",
        "items": [
          "Dedicated Entra agent identity with least-privilege permissions and zero shared keys",
          "Spoke VNet with Private Endpoints for Foundry, Cosmos DB, and Premium Key Vault",
          "Log Analytics (90-day retention) and Application Insights telemetry",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate production runbook approval, on-call governance, and ITSM endpoints from private SRE agentic infrastructure delivery.",
    "responsibilityRows": [
      {
        "domain": "Observability, Runbooks & ITSM",
        "customer": "Provide approved remediation runbooks, Azure Monitor/Log Analytics scopes, and ITSM APIs.",
        "devopstrio": "Publish allow-listed diagnostic and runbook tools in APIM and build ITSM timeline logging."
      },
      {
        "domain": "Azure Agent Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, internal APIM, Container Apps, Cosmos DB, and Key Vault via IaC."
      },
      {
        "domain": "Approvals & Handover",
        "customer": "Assign named owner, approve Entra agent identity permissions, and run on-call pilot.",
        "devopstrio": "Configure on-call approval gates, Prompt Shields, Deny policies, and runbooks."
      }
    ]
  },
  "082": {
    "kind": "Adoption",
    "enablementIntro": "The adoption programme combines strict GitHub pull-request and Advanced Security gates with squad-level coaching so engineering teams use the Copilot coding agent safely without lowering code quality.",
    "enablementSteps": [
      {
        "step": "01",
        "title": "PR-Only Policy & Repo Hardening",
        "description": "Configure branch protection, required human reviewers, CodeQL scanning, and secret-push protection so coding agents act only through audited pull requests."
      },
      {
        "step": "02",
        "title": "Pilot Squad & Champions Setup",
        "description": "Onboard pilot engineering squads via Entra ID seat sync, establish baseline PR cycle times, and coach departmental champions."
      },
      {
        "step": "03",
        "title": "Agentic Workflow Clinics",
        "description": "Run practical clinics on issue-to-PR delegation, prompt hygiene, test generation, and human review checklists for AI-authored diffs."
      },
      {
        "step": "04",
        "title": "Wave Rollout & Telemetry Handover",
        "description": "Scale across additional engineering teams using pilot findings and hand over ongoing throughput and security metrics."
      }
    ],
    "measuresIntro": "Engineering throughput and code-quality guardrails are tracked continuously through the Copilot Metrics API, GitHub Insights, and GitHub Advanced Security.",
    "measuresRows": [
      {
        "dimension": "PR Cycle Time & Throughput",
        "focus": "Lead time from issue assignment to PR review and merge via GitHub Insights.",
        "action": "Identify review bottlenecks and refine squad-level coding-agent task scoping."
      },
      {
        "dimension": "Active Usage & Acceptance",
        "focus": "Seat activation, PR merge rates, and suggestion acceptance via Copilot Metrics API.",
        "action": "Target coaching clinics or reallocate unused seats across engineering squads."
      },
      {
        "dimension": "Security & Scan Pass Rate",
        "focus": "CodeQL, secret-scanning, and CI status checks on AI-generated pull requests.",
        "action": "Enforce branch-protection gates and update repository coding instructions."
      }
    ]
  },
  "083": {
    "kind": "Implementation",
    "architectureTitle": "Target SharePoint Advanced Management & Oversharing Control Architecture",
    "architectureSummary": "This engagement configures SharePoint Advanced Management Data Access Governance reports, site owner access reviews, Restricted Content Discovery, Purview sensitivity/DLP rules, and Entra Conditional Access within your existing Microsoft 365 tenant, with no new Azure infrastructure deployed.",
    "componentGroups": [
      {
        "title": "Oversharing Discovery & RCD",
        "items": [
          "Weekly SharePoint Data Access Governance reports flagging broad sharing links and EEEU access",
          "Restricted Content Discovery (RCD) hiding unverified high-risk sites from Copilot search",
          "Risk-ranked site remediation backlog prioritised by sensitivity and exposure",
          "Optional Restricted SharePoint Search allow-list during initial pilot"
        ]
      },
      {
        "title": "Owner Attestation & Purview",
        "items": [
          "Automated site access reviews requiring site-owner attestation within 10 working days",
          "Purview sensitivity labels with Copilot DLP excluding Highly Confidential content",
          "DSPM for AI monitoring and simulation-first auto-labelling for sensitive data",
          "Continuous permission-hygiene schedule preventing future drift"
        ]
      },
      {
        "title": "Identity & Staged Rollout",
        "items": [
          "Entra Conditional Access enforcing MFA and compliant or hybrid-joined devices",
          "Three-wave rollout gates ensuring high-risk sites are remediated before expansion",
          "Copilot Dashboard active-usage and licence reallocation tracking",
          "Configuration acceptance log and operational handover"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate site-owner permission decisions and taxonomy approval from SharePoint Advanced Management and Purview configuration.",
    "responsibilityRows": [
      {
        "domain": "SharePoint & Site Owners",
        "customer": "Provide M365/SAM licences and ensure site owners complete access reviews within 10 working days.",
        "devopstrio": "Configure Data Access Governance reports, site access reviews, and Restricted Content Discovery."
      },
      {
        "domain": "Purview & Conditional Access",
        "customer": "Approve sensitivity label taxonomy, Copilot DLP exclusions, and Conditional Access policies.",
        "devopstrio": "Implement Purview labels, Copilot DLP, DSPM for AI, and Conditional Access baselines."
      },
      {
        "domain": "Hygiene & Handover",
        "customer": "Approve DPIA requirements and operate ongoing site-review cadences post-handover.",
        "devopstrio": "Deliver risk-ranked remediation playbooks, wave gates, and operational runbooks."
      }
    ]
  },
  "084": {
    "kind": "Implementation",
    "architectureTitle": "Target Defender for AI & Sentinel Integration Architecture",
    "architectureSummary": "Microsoft Defender for Cloud threat protection for AI workloads and Defender CSPM AI-SPM are enabled across AI subscriptions, feeding tuned alerts and posture findings into central Log Analytics (90-day retention) and Microsoft Sentinel, requiring no Private Endpoints for the SaaS security plane.",
    "componentGroups": [
      {
        "title": "Defender Threat Protection",
        "items": [
          "Policy-driven enablement of Defender for AI workloads across AI subscriptions",
          "Runtime detection of prompt-injection attempts, sensitive-data exposure, and abuse",
          "Correlation with Purview DSPM for AI data-sensitivity signals",
          "Pre-go-live alert tuning reducing false-positive SOC noise"
        ]
      },
      {
        "title": "AI Security Posture (AI-SPM)",
        "items": [
          "Defender CSPM AI-SPM discovering Foundry, OpenAI, and ML resources automatically",
          "Attack-path and misconfiguration visibility (public endpoints, local keys, missing filters)",
          "Prioritised posture recommendations aligned to Zero Trust baselines",
          "Continuous compliance tracking across dev, test, and production"
        ]
      },
      {
        "title": "Sentinel & Landing Zone",
        "items": [
          "Automated alert streaming from Defender for Cloud into Microsoft Sentinel",
          "Log Analytics workspace (90-day retention) and Application Insights foundation via IaC",
          "Devopstrio AI Policy initiative (Audit to Deny) enforcing UK residency and diagnostics",
          "SOC response runbooks and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate Azure subscription governance and SOC incident response from Defender for AI, AI-SPM, and Sentinel connector delivery.",
    "responsibilityRows": [
      {
        "domain": "Subscriptions & Licensing",
        "customer": "Provide AI subscription scope, Defender for Cloud / CSPM licences, and Sentinel workspace access.",
        "devopstrio": "Deploy telemetry foundation via IaC and enable policy-driven Defender for AI and AI-SPM."
      },
      {
        "domain": "Alert Tuning & Sentinel",
        "customer": "Approve SOC severity mappings and participate in alert-tuning workshops.",
        "devopstrio": "Connect Defender AI alerts to Sentinel and tune detection thresholds prior to go-live."
      },
      {
        "domain": "Governance & Handover",
        "customer": "Approve DPIA requirements and manage ongoing posture remediation post-handover.",
        "devopstrio": "Enforce Deny-mode Azure Policies, deliver SOC runbooks, and conduct handover."
      }
    ]
  },
  "085": {
    "kind": "Assessment",
    "matrixIntro": "The assessment reviews your AI use-case inventory, policies, evaluation artefacts, and system-owner evidence across five governance domains to classify systems and map EU AI Act obligation gaps.",
    "matrixRows": [
      {
        "reviewArea": "AI System Inventory & Classification",
        "evidence": "Read-only AI use-case register, system documentation, and owner interviews.",
        "output": "Classified AI system inventory mapped to EU AI Act risk categories."
      },
      {
        "reviewArea": "Governance & Human Oversight",
        "evidence": "Existing AI policies, approval stage-gates, and named-owner accountability records.",
        "output": "Gap register covering risk management, human oversight, and governance deadlines."
      },
      {
        "reviewArea": "Data & Technical Documentation",
        "evidence": "Training/evaluation dataset lineage, Purview/Unity Catalog records, and system specs.",
        "output": "Prepared technical documentation templates and data-governance gap actions."
      },
      {
        "reviewArea": "Evaluation, Testing & Logging",
        "evidence": "Read-only model evaluation, fairness, red-teaming results, and audit log retention.",
        "output": "Evidence-readiness findings against high-risk testing and record-keeping duties."
      },
      {
        "reviewArea": "Transparency & Platform Controls",
        "evidence": "User AI-disclosure notices, UK/EU residency policies, and Azure Policy baselines.",
        "output": "Prioritised obligation plan per system (quick wins, 90 days, and deadline milestones)."
      }
    ],
    "methodologyIntro": "Delivered across four phases—Mobilise, Discover, Analyse, and Report—pairing technical evidence review with risk-classification workshops.",
    "methodologyTiers": [
      {
        "label": "Phase 01",
        "title": "Inventory & Evidence Capture",
        "description": "Gathers AI register records, policies, evaluation artefacts, and system-owner interviews without modifying live environments."
      },
      {
        "label": "Phase 02",
        "title": "Act-Aligned Risk Classification",
        "description": "Runs classification workshops with system owners and compliance leads to assign risk tiers and score five readiness domains."
      },
      {
        "label": "Phase 03",
        "title": "Obligation Plan & Templates",
        "description": "Delivers technical documentation templates, an obligation gap register, and a deadline-driven compliance roadmap."
      }
    ]
  },
  "086": {
    "kind": "Implementation",
    "architectureTitle": "Target Pipeline Data Quality & Circuit-Breaker Architecture",
    "architectureSummary": "This engagement configures Microsoft Purview Unified Catalog data quality rules, Great Expectations / Fabric or Data Factory pipeline gates, owner alerting, and Power BI quality scorecards across your existing data estate, preventing poor-quality data from reaching AI models without deploying new standalone Azure compute.",
    "componentGroups": [
      {
        "title": "Quality Rules & Critical Elements",
        "items": [
          "Critical data elements prioritised first for high-impact AI use cases",
          "Purview data quality rules and Great Expectations checks for completeness, accuracy, and freshness",
          "Weekly Purview scans and custom UK sensitive-data classifications",
          "Domain-based data product definitions with named stewards"
        ]
      },
      {
        "title": "Pipeline Circuit Breakers",
        "items": [
          "Automated quality gates embedded inside Fabric or Azure Data Factory pipelines",
          "Circuit-breaker behaviour pausing downstream AI/lakehouse loads when critical thresholds fail",
          "Immediate owner alerts identifying failing rules and affected data products",
          "Audit trail of quality gate passes and blocked runs"
        ]
      },
      {
        "title": "Catalogue Scores & BI Reporting",
        "items": [
          "Published data quality scores per data product in Purview Unified Catalog",
          "Power BI quality dashboards tracking completeness, freshness, and remediation trends",
          "Governed access requests routed to data product owners",
          "Configuration acceptance log and steward handover runbooks"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate source data ownership and rule thresholds from Purview quality configuration, pipeline circuit breakers, and Power BI reporting.",
    "responsibilityRows": [
      {
        "domain": "Data Products & Thresholds",
        "customer": "Provide Purview/Fabric licences, nominate data product owners, and define critical quality thresholds.",
        "devopstrio": "Configure Purview Unified Catalog domains, quality rules, and Great Expectations checks."
      },
      {
        "domain": "Pipeline Circuit Breakers",
        "customer": "Provide access to target Fabric or Data Factory pipelines and approve pause-on-failure rules.",
        "devopstrio": "Embed automated quality gates, circuit-breaker pauses, and owner alerting."
      },
      {
        "domain": "Reporting & Handover",
        "customer": "Approve DPIA requirements and remediate flagged source-data issues post-handover.",
        "devopstrio": "Deliver Power BI quality scorecards, configuration log, and operational runbooks."
      }
    ]
  },
  "087": {
    "kind": "Implementation",
    "architectureTitle": "Target Layout-Preserving Translation & Custom Glossary Architecture",
    "architectureSummary": "Documents and text enter a private Storage Account (ZRS, Entra ID only) inside a segmented spoke Virtual Network and are translated by private Azure AI Translator using Custom Translator glossaries to preserve layout and terminology. Optional risk-based post-editing routes through an internal API Management AI gateway to Microsoft Foundry (GPT-4o) behind Private Endpoints.",
    "componentGroups": [
      {
        "title": "Translator & Custom Glossaries",
        "items": [
          "Private Azure AI Translator (TextTranslation) behind Private Endpoints",
          "Custom Translator managed glossaries enforcing approved organisational terminology",
          "Document translation preserving original layout, tables, and formatting",
          "Private Storage Account (ZRS, Entra ID only, no shared keys) staging source/target files"
        ]
      },
      {
        "title": "Optional LLM Post-Editing",
        "items": [
          "Container Apps orchestration (internal ingress) supporting risk-based review workflows",
          "Internal API Management AI gateway routing optional post-editing to Microsoft Foundry (GPT-4o)",
          "Prompt Shields and content filtering active on all model deployments",
          "Explicit AI-generated translation disclosure for reviewers"
        ]
      },
      {
        "title": "Network, Secrets & Audit",
        "items": [
          "Spoke VNet with Private Endpoints for Translator, Foundry, Storage, and Key Vault",
          "Premium Key Vault (RBAC, purge protection) and zero local authentication",
          "Restricted audit logging in Log Analytics (90-day retention) and Application Insights",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate approved terminology glossaries and human linguistic sign-off from private Translator and Foundry delivery.",
    "responsibilityRows": [
      {
        "domain": "Glossaries & Content",
        "customer": "Provide approved terminology glossaries, sample document formats, and risk-tier review rules.",
        "devopstrio": "Configure Custom Translator glossaries, layout-preserving translation, and post-editing flows."
      },
      {
        "domain": "Azure AI Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Translator, Foundry, internal APIM, Container Apps, Storage, and Key Vault via IaC."
      },
      {
        "domain": "Compliance & Handover",
        "customer": "Approve DPIA, validate translation quality with language leads, and accept phase gates.",
        "devopstrio": "Implement Prompt Shields, restricted audit logs, Deny policies, and operational runbooks."
      }
    ]
  },
  "088": {
    "kind": "Implementation",
    "architectureTitle": "Target WAF-Protected Public Website FAQ RAG Architecture",
    "architectureSummary": "Public website visitors interact with the FAQ widget through Azure Front Door with Web Application Firewall (WAF) into Container Apps inside a segmented spoke Virtual Network. The assistant grounds answers strictly in crawled public web content via private Azure AI Search and routes model calls through an internal API Management AI gateway to Microsoft Foundry (GPT-4o), escalating unanswered questions to live chat or contact forms.",
    "componentGroups": [
      {
        "title": "Public Crawler & Search Index",
        "items": [
          "Azure Functions / AI Search indexer crawling strictly allow-listed public web pages and help articles",
          "Azure AI Document Intelligence extraction preserving clean section structure and URL citations",
          "Private Azure AI Search (Standard SKU, semantic ranker) with zero private internal data",
          "Private Storage Account (ZRS, Entra ID only, no shared keys)"
        ]
      },
      {
        "title": "WAF Front End & AI Gateway",
        "items": [
          "Azure Front Door with WAF protecting the public-facing chat endpoint from abuse",
          "Container Apps runtime (internal ingress) hosting the web chat API and escalation logic",
          "Internal API Management AI gateway enforcing rate limits and managed-identity calls to Foundry",
          "Seamless handover of unanswered enquiries to live chat or web contact forms"
        ]
      },
      {
        "title": "Safety, Network & Audit",
        "items": [
          "Microsoft Foundry (GPT-4o, embeddings) with Prompt Shields and content filtering",
          "Spoke VNet with Private Endpoints for Foundry, AI Search, Storage, and Key Vault",
          "Log Analytics (90-day retention) and Application Insights telemetry",
          "Devopstrio AI Policy initiative (Audit to Deny) and monthly budget alerts"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate public website content ownership, DNS/Front Door domains, and live-chat targets from private RAG and WAF delivery.",
    "responsibilityRows": [
      {
        "domain": "Website, DNS & Live Chat",
        "customer": "Provide public URL allow-lists, custom domain/TLS records, and live-chat or contact-form endpoints.",
        "devopstrio": "Configure public web crawler, Front Door WAF rules, and seamless human escalation."
      },
      {
        "domain": "Azure RAG Infrastructure",
        "customer": "Operate hub VNet, Azure Firewall, DNS Private Resolver, and approve workload spoke subnets.",
        "devopstrio": "Deploy Foundry, AI Search, internal APIM, Container Apps, Storage, and Key Vault via IaC."
      },
      {
        "domain": "Safety & Handover",
        "customer": "Approve DPIA, AI disclosure wording, and validate answer quality before public launch.",
        "devopstrio": "Implement Prompt Shields, Deny policies, rate limits, and operational runbooks."
      }
    ]
  },
  "089": {
    "kind": "Implementation",
    "architectureTitle": "Target Copilot Studio Website & Omnichannel Agent Architecture",
    "architectureSummary": "This engagement configures a Copilot Studio customer-facing agent published to your website and omnichannel chat, combining public-content grounding, authenticated booking/order API actions, and opening-hours live-chat handover across dev, test, and production Power Platform Managed Environments, with no new Azure infrastructure deployed.",
    "componentGroups": [
      {
        "title": "Public Channels & Handover",
        "items": [
          "Copilot Studio agent embedded on public website and omnichannel messaging",
          "Grounding in approved public web pages and help articles",
          "Seamless handover to live human chat agents during business opening hours",
          "Automated conversation testing validated prior to production release"
        ]
      },
      {
        "title": "Authenticated Transactions",
        "items": [
          "Mandatory customer sign-in triggered before any account-specific lookup or action",
          "Controlled connectors to booking and order-management APIs",
          "Protection of customer personal data aligned to UK GDPR",
          "Private VNet connectivity for Azure extensions where available"
        ]
      },
      {
        "title": "Managed Environments & ALM",
        "items": [
          "Separate dev, test, and production Power Platform Managed Environments",
          "Environment-level Data Loss Prevention (DLP) policies across all stages",
          "Managed solution packaging in Azure DevOps or GitHub with deployment settings files",
          "Power Platform release pipelines with approval gates"
        ]
      }
    ],
    "responsibilityIntro": "Operational boundaries separate website embedding, customer identity provider, and booking/order APIs from Copilot Studio and ALM delivery.",
    "responsibilityRows": [
      {
        "domain": "Website, Auth & APIs",
        "customer": "Provide website embed access, customer authentication provider, and booking/order APIs.",
        "devopstrio": "Build Copilot Studio agent, authenticated transaction flows, and live-chat handover."
      },
      {
        "domain": "Environments & ALM",
        "customer": "Provide Power Platform licences, Git repository, and approve release gate owners.",
        "devopstrio": "Configure dev/test/prod Managed Environments, DLP policies, and Power Platform pipelines."
      },
      {
        "domain": "Compliance & Handover",
        "customer": "Approve DPIA, AI disclosure wording, and support makers post-handover.",
        "devopstrio": "Execute conversation tests, document configuration log, and deliver handover runbooks."
      }
    ]
  },
  "090": {
    "kind": "Assessment",
    "matrixIntro": "The assessment uses read-only Microsoft 365, Copilot Dashboard, SharePoint Advanced Management, Purview, and licence telemetry to evaluate five readiness and optimisation domains.",
    "matrixRows": [
      {
        "reviewArea": "Content Access",
        "evidence": "Read-only SharePoint Advanced Management Data Access Governance oversharing reports.",
        "output": "Site exposure findings and readiness prerequisites prior to licence expansion."
      },
      {
        "reviewArea": "Data Protection",
        "evidence": "Read-only Microsoft Purview sensitivity label coverage and Copilot DLP policy reports.",
        "output": "Data protection gap register ensuring sensitive content is excluded appropriately."
      },
      {
        "reviewArea": "Identity",
        "evidence": "Read-only review of Entra ID licensing groups, Conditional Access, and guest exclusions.",
        "output": "Identity and group-based licensing alignment recommendations."
      },
      {
        "reviewArea": "Licensing",
        "evidence": "Read-only Microsoft 365 usage, Copilot Dashboard active-user metrics, and seat reports.",
        "output": "Usage-based segmentation and Excel/Power BI licence-mix scenarios (full vs. Chat vs. PAYG)."
      },
      {
        "reviewArea": "Adoption Readiness",
        "evidence": "Stakeholder interviews covering champions, training coverage, and departmental workflows.",
        "output": "Costed seat reallocation and timed renewal/expansion roadmap."
      }
    ],
    "methodologyIntro": "Delivered across four phases—Mobilise, Discover, Analyse, and Report—grounding commercial licence recommendations in observed tenant usage.",
    "methodologyTiers": [
      {
        "label": "Phase 01",
        "title": "Read-Only Telemetry Capture",
        "description": "Exports Copilot Dashboard usage, licence assignments, SAM oversharing, and Purview reports without altering tenant settings."
      },
      {
        "label": "Phase 02",
        "title": "Segmentation & Scenario Modelling",
        "description": "Segments roles by actual usage in Excel/Power BI and scores all five readiness areas on the five-level maturity scale."
      },
      {
        "label": "Phase 03",
        "title": "Reallocation & Timing Plan",
        "description": "Delivers a costed licence-mix recommendation, inactive-seat reallocation plan, and executive presentation."
      }
    ]
  },
  "091": {
    "kind": "Assessment",
    "matrixIntro": "The AI Red Teaming Service evaluates live and pre-release AI workloads across six architecture domains, correlating automated adversarial probes with manual abuse-case testing and security telemetry.",
    "matrixRows": [
      {
        "reviewArea": "Identity & Access Controls",
        "evidence": "Entra ID app registrations, managed identity scopes, role assignments, and privilege-escalation test outcomes.",
        "output": "Identity boundary findings and least-privilege remediation actions."
      },
      {
        "reviewArea": "Network & Endpoint Exposure",
        "evidence": "Private endpoint configurations, API gateway routing rules, and external ingress surface checks.",
        "output": "Network exposure register and ingress hardening recommendations."
      },
      {
        "reviewArea": "Data & Grounding Safety",
        "evidence": "RAG retrieval ACLs, indirect prompt-injection probes, and sensitive data exfiltration test transcripts.",
        "output": "Grounding isolation assessment and data-leakage mitigation plan."
      },
      {
        "reviewArea": "Model & Prompt Resilience",
        "evidence": "PyRIT and Microsoft AI Red Teaming Agent adversarial runs against OWASP and custom jailbreak libraries.",
        "output": "Foundry evaluation evidence pack and guardrail tuning targets."
      },
      {
        "reviewArea": "Application & Business Logic",
        "evidence": "Application threat models and manual specialist probing of tool calls, output handling, and abuse scenarios.",
        "output": "Prioritised vulnerability register with reproducible proof-of-concept steps."
      },
      {
        "reviewArea": "Monitoring & Posture Telemetry",
        "evidence": "Defender for Cloud AI-SPM inventory, Sentinel and Defender alert logs, and post-fix verification retest results.",
        "output": "Detection-gap summary and signed-off release-readiness verdict."
      }
    ],
    "methodologyIntro": "Testing combines automated adversarial frameworks with specialist human red teaming so both known prompt-attack patterns and domain-specific abuse cases are verified.",
    "methodologyTiers": [
      {
        "label": "Tier 01 — Automated",
        "title": "PyRIT & AI Red Teaming Agent",
        "description": "Executes repeatable multi-turn probing against OWASP and custom attack libraries, logging results directly into Microsoft Foundry evaluations."
      },
      {
        "label": "Tier 02 — Specialist",
        "title": "Manual Business-Abuse Testing",
        "description": "Security specialists test domain-specific abuse cases, indirect injection chains, and tool-use boundaries that automated scanners miss."
      },
      {
        "label": "Tier 03 — Verification",
        "title": "Evidence & Fix Retesting",
        "description": "Packages Foundry evaluation artefacts as release evidence and retests remediated controls to confirm closure before production sign-off."
      }
    ]
  },
  "092": {
    "kind": "Implementation",
    "architectureTitle": "Private Fabric Migration Target Architecture",
    "architectureSummary": "Built on CAF-aligned patterns requiring validation in your environment, the target platform consolidates Synapse, SQL, and Power BI workloads onto scalable Microsoft Fabric capacity (F2 baseline) paired with ZRS private storage and Entra ID-only authentication inside a spoke VNet.",
    "componentGroups": [
      {
        "title": "Fabric Compute & Data Storage",
        "items": [
          "Scalable Microsoft Fabric capacity (F2 baseline) hosting Lakehouse, Warehouse, and Data Engineering workloads",
          "Private Azure Storage Account with Zone-Redundant Storage (ZRS), Entra ID-only access, and shared keys disabled",
          "Domain-aligned workspace structure supporting wave-by-wave cutover and parallel reconciliation"
        ]
      },
      {
        "title": "Network Isolation & Observability",
        "items": [
          "Dedicated spoke VNet with private endpoint subnet (snet-pe) for storage and platform connectivity",
          "Log Analytics workspace and Application Insights collecting pipeline execution, query, and capacity telemetry",
          "Structured validation checks confirming report parity before legacy service retirement"
        ]
      }
    ],
    "responsibilityIntro": "Migration delivery is partitioned between customer data-domain ownership and Devopstrio platform engineering across infrastructure, cutover, and decommissioning.",
    "responsibilityRows": [
      {
        "domain": "Source Access & Domain Sign-Off",
        "customer": "Provide access to legacy Synapse, SQL, and Power BI estates and sign off reconciled wave outputs.",
        "devopstrio": "Catalogue dependencies, sequence domain waves, and execute data parity validation."
      },
      {
        "domain": "Fabric & Private Infrastructure",
        "customer": "Approve Azure subscription landing zone, Fabric capacity SKU, and network peering boundaries.",
        "devopstrio": "Deploy Fabric capacity, private ZRS storage, spoke VNet endpoints, and monitoring foundations."
      },
      {
        "domain": "Cutover & Decommissioning",
        "customer": "Confirm business readiness for report cutover and approve legacy resource retirement.",
        "devopstrio": "Repoint Power BI datasets, verify refresh SLAs, and decommission retired legacy services."
      }
    ]
  },
  "093": {
    "kind": "Implementation",
    "architectureTitle": "Private Speech-to-Case Assistant Architecture",
    "architectureSummary": "Designed to keep sensitive meeting audio and case notes off public endpoints using CAF-aligned patterns requiring validation in your environment, this architecture routes transcription and gpt-4o summarisation through an internal APIM AI gateway inside a segmented spoke VNet.",
    "componentGroups": [
      {
        "title": "Speech, Model & Gateway Layer",
        "items": [
          "Private Azure AI Speech (SpeechServices) for diarised transcription with mandatory consent gating",
          "Private Microsoft Foundry (gpt-4o) generating fixed-structure case notes and action lists",
          "Internal API Management (APIM) AI gateway mediating model traffic, quotas, and telemetry"
        ]
      },
      {
        "title": "Application Host, Network & Security",
        "items": [
          "Segmented spoke VNet with dedicated subnets for private endpoints (snet-pe), APIM (snet-apim), and Container Apps (snet-apps)",
          "Container Apps hosting the consent workflow, human-review editor, and validated case-system API write-back",
          "Private Azure Storage Account and Key Vault isolating audio artefacts, secrets, and audit logs"
        ]
      }
    ],
    "responsibilityIntro": "Clear operational boundaries ensure participant consent and clinical or legal case accuracy remain under customer governance.",
    "responsibilityRows": [
      {
        "domain": "Consent Policy & Case Schema",
        "customer": "Define legal recording consent wording, note templates, and target case-system API credentials.",
        "devopstrio": "Implement consent checks, structured prompt templates, and human-review write-back flows."
      },
      {
        "domain": "Private AI & Network Stack",
        "customer": "Provide spoke VNet address space and approve private endpoint DNS integration.",
        "devopstrio": "Provision Speech, Foundry, internal APIM, Container Apps, Key Vault, and private Storage."
      },
      {
        "domain": "Review & Quality Governance",
        "customer": "Review and approve every drafted note prior to case commit and monitor user adoption.",
        "devopstrio": "Configure diagnostic logging, latency dashboards, and operational handover documentation."
      }
    ]
  },
  "094": {
    "kind": "Implementation",
    "architectureTitle": "Field Manuals Multimodal RAG Architecture",
    "architectureSummary": "Built on CAF-aligned patterns requiring validation in your environment, the solution combines Azure AI Document Intelligence with multimodal Azure AI Search and private gpt-4o behind an internal APIM gateway so field engineers receive exact safety quotes and diagram references online or via offline cache.",
    "componentGroups": [
      {
        "title": "Multimodal Indexing & Safety Grounding",
        "items": [
          "Azure AI Document Intelligence (FormRecognizer) extracting structured sections, tables, and technical diagrams",
          "Azure AI Search with multimodal text-and-diagram indexing, semantic ranker, and ACL security trimming",
          "Private Microsoft Foundry (gpt-4o) instructed to quote safety-critical sections verbatim without paraphrasing"
        ]
      },
      {
        "title": "Field Delivery, Network & Secrets",
        "items": [
          "Spoke VNet with isolated subnets (snet-pe, snet-apim, snet-apps) and internal APIM AI gateway",
          "Container Apps orchestration API serving a Power Apps or mobile client with offline cache synchronisation",
          "Private Azure Storage Account and Key Vault securing manual corpora, extracted diagrams, and API keys"
        ]
      }
    ],
    "responsibilityIntro": "Engineering safety accuracy relies on customer-curated manuals paired with strict retrieval and verbatim citation controls.",
    "responsibilityRows": [
      {
        "domain": "Manual Corpus & Safety Rules",
        "customer": "Supply authoritative OEM manuals, ACL group mappings, and safety-section tagging rules.",
        "devopstrio": "Build Document Intelligence extraction, multimodal index schemas, and verbatim citation prompts."
      },
      {
        "domain": "Private Platform & Field App",
        "customer": "Approve mobile/Power Apps distribution policies and spoke VNet connectivity.",
        "devopstrio": "Deploy Search, Foundry, internal APIM, Container Apps, Storage, Key Vault, and offline sync."
      },
      {
        "domain": "Accuracy & Safety Verification",
        "customer": "Validate retrieved answers and safety quotes against approved field procedures.",
        "devopstrio": "Run citation-fidelity test suites and deliver operations and re-indexing runbooks."
      }
    ]
  },
  "095": {
    "kind": "Accelerator",
    "configIntro": "The MCP Tool Gateway separates repeatable infrastructure and gateway policies from customer-specific tool schemas, agent allow-lists, and backend APIs.",
    "standardComponents": {
      "title": "Standard Accelerator Components",
      "items": [
        "Spoke VNet layout with dedicated snet-pe, snet-apim, and snet-apps subnets",
        "Internal APIM Tool/MCP Gateway (Developer_1/Premium_1) with managed identity and token metrics",
        "Azure API Center central tool catalogue and schema registry",
        "Container Apps / Functions reference host for narrow least-privilege MCP servers and Key Vault"
      ]
    },
    "customerConfiguration": {
      "title": "Customer-Specific Configuration",
      "items": [
        "Target backend API connections, OAuth/managed identity scopes, and secret references",
        "Per-agent tool allow-lists defining which agents may invoke specific MCP operations",
        "Dual-identity (agent + user) audit log sink and retention mapping in Log Analytics",
        "Environment-specific DNS zones and internal VNet peering routes"
      ]
    },
    "workflowIntro": "Every agent tool request traverses a four-stage gateway pipeline before reaching any downstream enterprise system.",
    "workflowRows": [
      {
        "stage": "01 — Discovery",
        "operation": "Agents query Azure API Center to discover approved MCP server endpoints and schemas.",
        "validationGate": "Only registered and lifecycle-approved tools appear in the catalogue."
      },
      {
        "stage": "02 — Mediation",
        "operation": "Internal APIM MCP Gateway authenticates the caller and checks per-agent tool allow-lists.",
        "validationGate": "Requests lacking valid managed identity or allow-list permission are rejected."
      },
      {
        "stage": "03 — Execution",
        "operation": "Narrow MCP server on Container Apps or Functions invokes the backend using Key Vault credentials.",
        "validationGate": "Parameter schemas and least-privilege scopes constrain backend mutations."
      },
      {
        "stage": "04 — Telemetry",
        "operation": "Gateway emits structured audit records containing both agent identity, user identity, and token metrics.",
        "validationGate": "Audit trail completeness verified against security monitoring queries."
      }
    ]
  },
  "096": {
    "kind": "Implementation",
    "architectureTitle": "Shadow AI Discovery & Policy Control Architecture",
    "architectureSummary": "Built on CAF-aligned patterns requiring validation in your environment, this implementation pairs Defender for Cloud Apps discovery with Azure Policy subscription guardrails and Defender for Cloud AI-SPM to bring unmanaged SaaS and Azure AI usage under central visibility.",
    "componentGroups": [
      {
        "title": "SaaS Discovery & Three-Tier Control",
        "items": [
          "Microsoft Defender for Cloud Apps ingesting network and endpoint telemetry to surface shadow AI tools",
          "Three-tier governance taxonomy: Sanctioned (approved), Monitored (tracked), and Blocked (redirected to approved internal alternatives)",
          "User-facing coaching and alternative guidance for blocked consumer AI endpoints"
        ]
      },
      {
        "title": "Cloud AI Guardrails & Telemetry",
        "items": [
          "Azure Policy definitions denying AI resource deployment outside approved subscriptions",
          "Microsoft Defender for Cloud AI Security Posture Management (AI-SPM) and threat protection",
          "Log Analytics workspace and Application Insights consolidating posture and discovery telemetry"
        ]
      }
    ],
    "responsibilityIntro": "Controlling shadow AI requires joint execution between customer security/endpoint teams and Devopstrio cloud governance engineers.",
    "responsibilityRows": [
      {
        "domain": "Endpoint Signals & App Taxonomy",
        "customer": "Provide Defender endpoint/proxy log feeds and ratify sanctioned vs blocked AI tool lists.",
        "devopstrio": "Configure Defender for Cloud Apps discovery policies, tags, and three-tier workflows."
      },
      {
        "domain": "Azure Policy & AI-SPM",
        "customer": "Designate approved AI landing-zone subscriptions and policy exemption processes.",
        "devopstrio": "Deploy Azure Policy guardrails, Defender AI-SPM, and Log Analytics foundations."
      },
      {
        "domain": "Ongoing Review & Exceptions",
        "customer": "Review newly discovered AI apps periodically and approve exception requests.",
        "devopstrio": "Deliver discovery dashboards, alert rules, and governance operating procedures."
      }
    ]
  },
  "097": {
    "kind": "Implementation",
    "architectureTitle": "M365 AI Use-Case Register & Risk Gate Architecture",
    "architectureSummary": "Designed to establish central AI portfolio visibility without custom cloud infrastructure, the register runs natively on SharePoint, Power Apps, and Power BI to classify risk tiers and enforce pre-build assessment gates.",
    "componentGroups": [
      {
        "title": "Intake, Scoring & Gatekeeping",
        "items": [
          "SharePoint list data store capturing use-case purpose, accountable owner, data sensitivity, and stage",
          "Power Apps intake and weighted risk-classification questionnaire calculating deterministic risk tiers",
          "Pre-build gatekeeping links connecting each risk tier to mandatory security, privacy, and evaluation checks"
        ]
      },
      {
        "title": "Executive Portfolio Reporting",
        "items": [
          "Power BI portfolio view aggregating active use cases by business unit, risk tier, and approval status",
          "Role-based access controls aligning edit permissions to use-case owners and AI governance reviewers",
          "Audit-ready change history tracking classification updates and gate sign-offs"
        ]
      }
    ],
    "responsibilityIntro": "The register operates within the customer's Microsoft 365 tenant, with governance thresholds owned by customer risk leadership.",
    "responsibilityRows": [
      {
        "domain": "Risk Criteria & Governance Roles",
        "customer": "Approve risk-weighting criteria, tier thresholds, and governance board reviewers.",
        "devopstrio": "Configure the weighted questionnaire logic, SharePoint schema, and gatekeeping rules."
      },
      {
        "domain": "Power Platform & BI Deployment",
        "customer": "Provide Microsoft 365 tenant environment, Power Apps/Power BI licensing, and SharePoint site.",
        "devopstrio": "Build and deploy the Power Apps intake UI, SharePoint lists, and Power BI portfolio report."
      },
      {
        "domain": "Adoption & Portfolio Hygiene",
        "customer": "Mandate register entry prior to AI project funding and run periodic portfolio reviews.",
        "devopstrio": "Deliver administrator guides, user intake walkthroughs, and handover documentation."
      }
    ]
  },
  "098": {
    "kind": "Implementation",
    "architectureTitle": "Conversational Fabric Data Agents Architecture",
    "architectureSummary": "Built on CAF-aligned patterns requiring validation in your environment, the solution pairs curated Microsoft Fabric semantic models with Fabric Data Agents and private Foundry (gpt-4o) so natural-language analytics in Fabric, Teams, and Copilot inherit existing data security.",
    "componentGroups": [
      {
        "title": "Semantic Models & Data Agents",
        "items": [
          "Scalable Microsoft Fabric capacity (F2 baseline) hosting curated semantic models and warehouses",
          "Fabric Data Agents configured with business-domain instructions, schema scoping, and example queries",
          "Security inheritance ensuring conversational responses respect existing Fabric and workspace permissions"
        ]
      },
      {
        "title": "Model Integration, Network & Monitoring",
        "items": [
          "Private Microsoft Foundry (gpt-4o) and Key Vault integrated inside a spoke VNet (snet-pe)",
          "Multi-channel delivery across Fabric, Microsoft Teams, and Copilot experiences",
          "Log Analytics and Application Insights tracking query latency, usage, and accuracy test-set outcomes"
        ]
      }
    ],
    "responsibilityIntro": "Accurate conversational analytics depends on curated business definitions from data owners paired with agent tuning and evaluation.",
    "responsibilityRows": [
      {
        "domain": "Semantic Models & Test Questions",
        "customer": "Provide curated semantic models, KPI definitions, and ground-truth validation questions.",
        "devopstrio": "Configure Fabric Data Agents, author system instructions, and curate example query sets."
      },
      {
        "domain": "Infrastructure & Channel Access",
        "customer": "Approve Fabric capacity, spoke VNet endpoints, and Teams/Copilot publishing permissions.",
        "devopstrio": "Deploy Fabric capacity, Foundry integration, Key Vault, and monitoring workspaces."
      },
      {
        "domain": "Accuracy Validation",
        "customer": "Review test-set SQL/DAX outputs and sign off business readiness.",
        "devopstrio": "Execute accuracy test suites, tune agent instructions, and hand over governance runbooks."
      }
    ]
  },
  "099": {
    "kind": "Implementation",
    "architectureTitle": "Governed Model Fine-Tuning Architecture",
    "architectureSummary": "Built on CAF-aligned patterns requiring validation in your environment, this pipeline enforces a baseline justification gate before executing gpt-4o fine-tuning in Microsoft Foundry over private Entra ID-authenticated ZRS storage.",
    "componentGroups": [
      {
        "title": "Fine-Tuning & Evaluation Pipeline",
        "items": [
          "Decision gate verifying measurable gains over prompting and RAG baselines before fine-tuning begins",
          "Microsoft Foundry (gpt-4o) fine-tuning jobs and automated base-vs-tuned evaluation runs",
          "Standard release gate requiring evaluation and safety thresholds prior to deployment"
        ]
      },
      {
        "title": "Private Storage, Network & Observability",
        "items": [
          "Private Azure Storage Account (ZRS, Entra ID-only, shared keys disabled) isolating training datasets",
          "Spoke VNet with private endpoint subnet (snet-pe) and Key Vault for credential governance",
          "Log Analytics and Application Insights capturing job telemetry and endpoint evaluation metrics"
        ]
      }
    ],
    "responsibilityIntro": "Dataset ownership and domain quality sign-off remain with the customer, while Devopstrio builds the governed training and evaluation pipeline.",
    "responsibilityRows": [
      {
        "domain": "Dataset Ownership & Labelling",
        "customer": "Supply domain datasets, approve training splits, and validate output quality criteria.",
        "devopstrio": "Configure labelling workflows, dataset validation checks, and private ZRS storage."
      },
      {
        "domain": "Foundry & Network Foundation",
        "customer": "Approve fine-tuning compute quotas, spoke VNet endpoints, and model release criteria.",
        "devopstrio": "Provision Foundry fine-tuning environment, Key Vault, and monitoring baselines."
      },
      {
        "domain": "Comparative Evaluation & Gate",
        "customer": "Review base-vs-fine-tuned benchmark reports and authorise production promotion.",
        "devopstrio": "Run comparative Foundry evaluations, document release evidence, and hand over runbooks."
      }
    ]
  },
  "100": {
    "kind": "Implementation",
    "architectureTitle": "Private Explainable Churn Prediction Architecture",
    "architectureSummary": "Built on CAF-aligned patterns requiring validation in your environment, the platform trains and scores explainable churn models inside an Azure Machine Learning workspace configured with AllowOnlyApprovedOutbound and scale-to-zero compute, publishing scores and top drivers to CRM.",
    "componentGroups": [
      {
        "title": "Azure ML & Explainable Scoring",
        "items": [
          "Azure Machine Learning workspace with AllowOnlyApprovedOutbound isolation and scale-to-zero compute",
          "Feature pipelines ingesting transaction, engagement, and service history from Fabric or Databricks",
          "Explainable scoring outputs publishing churn probabilities and top contributing reasons to CRM"
        ]
      },
      {
        "title": "Private Storage, Security & Telemetry",
        "items": [
          "Dedicated ML storage plus private Azure Storage Account and Key Vault inside spoke VNet (snet-pe)",
          "Retention-action outcome tracking closing the loop between predictions and campaign results",
          "Log Analytics and Application Insights monitoring pipeline runs, drift signals, and CRM sync health"
        ]
      }
    ],
    "responsibilityIntro": "Model accuracy and retention ROI depend on clean customer-supplied feature history and CRM workflow ownership.",
    "responsibilityRows": [
      {
        "domain": "Source Data & Retention Actions",
        "customer": "Provide Fabric/Databricks feature access, CRM target fields, and retention playbooks.",
        "devopstrio": "Build feature pipelines, explainable churn models, and CRM score-publishing integration."
      },
      {
        "domain": "Secure Azure ML Foundation",
        "customer": "Approve outbound allow-lists, spoke VNet endpoints, and CRM integration credentials.",
        "devopstrio": "Provision Azure ML workspace, scale-to-zero compute, private Storage, Key Vault, and monitoring."
      },
      {
        "domain": "Outcome & Drift Governance",
        "customer": "Track commercial retention-action outcomes and approve retraining cadence.",
        "devopstrio": "Configure drift telemetry, retention-tracking metrics, and ML operations runbooks."
      }
    ]
  }
};

export function getTechnicalApproachData(code: string): TechnicalApproachData | undefined {
  return technicalApproachByCode[code];
}
