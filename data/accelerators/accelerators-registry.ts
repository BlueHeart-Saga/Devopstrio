/**
 * Devopstrio AI Landing Zone Accelerator — Central Offering Registry
 * 
 * Authoritative typed registry for all 100 enterprise offerings.
 * Reconciled directly against the repository on disk.
 * Exactly 6 pilot offerings published; 94 draft offerings.
 */

export type EngagementType =
  | "Implementation"
  | "Assessment"
  | "Adoption"
  | "Advisory"
  | "Workshop"
  | "Accelerator";

export type PublicationStatus = "draft" | "published";
export type IacValidationStatus = "not validated" | "validated";

export interface SourceReferences {
  readme?: string | null;
  hld?: string | null;
  lld?: string | null;
  sow?: string | null;
  wbs?: string | null;
}

export interface OfferingScopeRow {
  title: string;
  deliverables: string;
  notIncluded?: string;
}

export interface OfferingScenario {
  title: string;
  scenario: string;
}

export interface DeliveryPhase {
  name: string;
  duration: string;
  activities: string;
}

export interface OfferingFaq {
  question: string;
  answer: string;
}

export interface OfferingDetails {
  overview: {
    businessChallenge: string[];
    targetAudience: string;
  };
  scope: OfferingScopeRow[];
  applications: OfferingScenario[];
  engagement: {
    timeline: string;
    phases: DeliveryPhase[];
    prerequisites: string[];
    faqs: OfferingFaq[];
  };
}

export interface AcceleratorOffering {
  code: string;
  title: string;
  slug: string;
  domain: string;
  domainClean: string;
  engagementType: EngagementType;
  duration: string;
  iacAssetAvailability: boolean;
  iacValidationStatus: IacValidationStatus;
  heroKicker: string;
  heroDescription: string;
  sourceRefs: SourceReferences;
  publicationStatus: PublicationStatus;
  details?: OfferingDetails;
}

export const acceleratorOfferings: AcceleratorOffering[] = 
[
  {
    "code": "001",
    "title": "Copilot Pilot and Adoption Programme",
    "slug": "copilot-pilot-and-adoption-programme",
    "domain": "07 Microsoft 365 Copilot",
    "engagementType": "Adoption",
    "duration": "6–12 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/001-copilot-pilot-and-adoption-programme/02-IaC/README.md",
      "hld": "Offerings/001-copilot-pilot-and-adoption-programme/01-Design/HLD-001-Copilot_Pilot_and_Adoption_Programme.docx",
      "lld": "Offerings/001-copilot-pilot-and-adoption-programme/01-Design/LLD-001-Copilot_Pilot_and_Adoption_Programme.docx",
      "sow": "Offerings/001-copilot-pilot-and-adoption-programme/03-Sales-and-Delivery-Kit/001 - Statement of Work.docx",
      "wbs": "Offerings/001-copilot-pilot-and-adoption-programme/03-Sales-and-Delivery-Kit/001 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Microsoft 365 Copilot",
    "heroKicker": "Microsoft 365 Copilot",
    "heroDescription": "Run a structured Copilot pilot and adoption programme with champions, training and value tracking.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Organisations investing in Microsoft 365 Copilot often experience low employee adoption, underused licences, or security hesitations stemming from unverified SharePoint permissions and years of legacy oversharing.",
          "Without a deliberate, structured adoption strategy, users treat Copilot as a conventional search tool rather than an intelligent assistant, failing to integrate generative prompts into core departmental workflows.",
          "The Copilot Pilot and Adoption Programme delivers a structured framework combining user readiness, champions network coaching, sensitivity label verification, and Viva Insights telemetry to demonstrate tangible operational productivity."
        ],
        "targetAudience": "Heads of Modern Workplace, Digital Transformation Directors, Change Management Leads, and IT Operations Managers."
      },
      "scope": [
        {
          "title": "Adoption Governance & Cohort Selection",
          "deliverables": "Definition of cross-functional pilot cohorts (e.g. Legal, HR, Sales), baseline productivity metrics, and executive sponsor engagement charters.",
          "notIncluded": "Direct purchase or provisioning of Microsoft 365 licensing agreements."
        },
        {
          "title": "Technical Readiness & Data Safeguards",
          "deliverables": "Verification of tenant prerequisites, modern authentication, update channel cadence, and sensitivity label visibility.",
          "notIncluded": "Tenant-wide manual content remediation or legacy file share migrations."
        },
        {
          "title": "Champions Network & Masterclasses",
          "deliverables": "Establishment of a department champions network, role-specific prompt engineering clinics, and self-service learning modules.",
          "notIncluded": "Mandatory organisation-wide technical training for non-pilot staff."
        },
        {
          "title": "Usage Analytics & Value Tracking",
          "deliverables": "Deployment and configuration of the Viva Insights Copilot Dashboard tracking weekly active usage, task completion hours, and sentiment surveys.",
          "notIncluded": "Custom software development for bespoke analytics platforms outside Microsoft 365."
        },
        {
          "title": "Scale-Out Blueprint & Handover",
          "deliverables": "Consolidated business value findings, executive readout deck, licence reallocation guidelines, and full enterprise scale-out plan.",
          "notIncluded": "Post-hypercare managed IT service desk support."
        }
      ],
      "applications": [
        {
          "title": "Targeted Corporate Function Pilot",
          "scenario": "A professional services organisation rolling out Copilot across 150 legal, procurement, and commercial finance staff to streamline contract analysis and meeting synthesis."
        },
        {
          "title": "Enterprise Champions Model",
          "scenario": "A distributed global workforce activating trained departmental champions who mentor regional teams, share vetted prompt templates, and accelerate self-sustaining adoption."
        }
      ],
      "engagement": {
        "timeline": "About 12 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Agree pilot objectives, success criteria, cohort selection, and baseline survey design."
          },
          {
            "name": "Readiness",
            "duration": "2–3 weeks",
            "activities": "Validate tenant settings, prep champions network, and publish role-specific training materials."
          },
          {
            "name": "Pilot",
            "duration": "3–4 weeks",
            "activities": "Launch cohort access, host weekly prompt hygiene clinics, and monitor early telemetry."
          },
          {
            "name": "Scale",
            "duration": "3 weeks",
            "activities": "Execute phased wave rollouts, capture sentiment feedback, and refine prompt libraries."
          },
          {
            "name": "Sustain",
            "duration": "1 week",
            "activities": "Deliver final executive readout, licence reallocation model, and sustainment roadmap."
          }
        ],
        "prerequisites": [
          "Active Microsoft 365 E3 or E5 tenant with required Copilot licenses assigned to pilot participants.",
          "Enterprise adoption of Microsoft Teams, Exchange Online, OneDrive, and SharePoint Online.",
          "Executive sponsorship and commitment from designated departmental champions.",
          "Access to Viva Insights administrator roles for adoption telemetry reporting."
        ],
        "faqs": [
          {
            "question": "How do we prevent Copilot from surfacing sensitive HR or financial files to unauthorized users?",
            "answer": "Copilot strictly respects existing Microsoft 365 permissions and sensitivity labels. During the Readiness phase, we verify your data governance posture to highlight oversharing risks before pilot users begin querying data."
          },
          {
            "question": "How do we measure whether the pilot was commercially worthwhile?",
            "answer": "We track both quantitative telemetry via Viva Insights (meeting hours saved, email drafting velocity, weekly active usage) and qualitative stakeholder sentiment to deliver an executive business case for broad rollout."
          },
          {
            "question": "Can this programme be tailored for specific business departments?",
            "answer": "Yes. We configure specialized prompt clinics and scenario playbooks tailored specifically for departments such as Legal, Marketing, Engineering, or Human Resources."
          }
        ]
      }
    }
  },
  {
    "code": "002",
    "title": "Microsoft 365 Copilot Readiness Assessment",
    "slug": "microsoft-365-copilot-readiness-assessment",
    "domain": "07 Microsoft 365 Copilot",
    "engagementType": "Assessment",
    "duration": "2–3 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/002-microsoft-365-copilot-readiness-assessment/02-IaC/README.md",
      "hld": "Offerings/002-microsoft-365-copilot-readiness-assessment/01-Design/HLD-002-Microsoft_365_Copilot_Readiness_Assessment.docx",
      "lld": "Offerings/002-microsoft-365-copilot-readiness-assessment/01-Design/LLD-002-Microsoft_365_Copilot_Readiness_Assessment.docx",
      "sow": "Offerings/002-microsoft-365-copilot-readiness-assessment/03-Sales-and-Delivery-Kit/002 - Statement of Work.docx",
      "wbs": "Offerings/002-microsoft-365-copilot-readiness-assessment/03-Sales-and-Delivery-Kit/002 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Microsoft 365 Copilot",
    "heroKicker": "Microsoft 365 Copilot",
    "heroDescription": "Assess the organisation's Microsoft 365 tenant for Copilot readiness: permissions, data protection, licensing and adoption.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Before enabling Microsoft 365 Copilot, enterprise IT leaders must address critical security and compliance questions regarding internal oversharing, open SharePoint links, and unlabelled confidential data.",
          "Because Copilot indexes and surfaces all content a user has permission to access, legacy permissions such as 'Everyone except external users' can unintentionally expose executive salaries, acquisition notes, or personal data in search results.",
          "The Microsoft 365 Copilot Readiness Assessment evaluates your tenant across identity, permissions, Microsoft Purview information protection, and licensing, providing a prioritised remediation roadmap prior to general enablement."
        ],
        "targetAudience": "Chief Information Security Officers (CISOs), Data Protection Officers (DPOs), M365 Administrators, and Compliance Officers."
      },
      "scope": [
        {
          "title": "Tenant Identity & Prerequisites Audit",
          "deliverables": "Verification of Entra ID licensing, conditional access policies, multi-factor authentication enforcement, and Microsoft 365 Apps update channels.",
          "notIncluded": "Implementation of new external identity federations."
        },
        {
          "title": "SharePoint & OneDrive Oversharing Discovery",
          "deliverables": "Automated discovery of broad access permissions, public groups, anonymous sharing links, and open organizational sites.",
          "notIncluded": "Manual restructuring of individual user folder trees."
        },
        {
          "title": "Purview Information Protection & DLP Review",
          "deliverables": "Assessment of sensitivity label taxonomy, auto-labeling rules, data loss prevention (DLP) policies, and encrypted content handling.",
          "notIncluded": "Drafting of corporate data retention legal policies."
        },
        {
          "title": "Licensing & Capacity Gap Analysis",
          "deliverables": "Evaluation of base licences (E3/E5/Business Premium), add-on prerequisites, and target user allocation mapping.",
          "notIncluded": "Direct license transaction brokering."
        },
        {
          "title": "Executive Findings & Remediation Roadmap",
          "deliverables": "Comprehensive readiness report, risk-ranked remediation matrix (Critical/High/Medium), and executive presentation.",
          "notIncluded": "Direct remediation engineering during the assessment phase."
        }
      ],
      "applications": [
        {
          "title": "Pre-Enablement Security Cleansing",
          "scenario": "A financial advisory firm auditing 5,000 SharePoint sites to detect unrestricted access to client advisory files prior to procuring 800 Copilot licenses."
        },
        {
          "title": "Purview Sensitivity Label Alignment",
          "scenario": "A multinational corporation evaluating its sensitivity label taxonomy to ensure confidential intellectual property is automatically barred from Copilot summaries."
        }
      ],
      "engagement": {
        "timeline": "About 3 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Mobilise",
            "duration": "2–3 days",
            "activities": "Agree assessment scope, confirm stakeholder access, and issue initial data collection scripts."
          },
          {
            "name": "Discover",
            "duration": "1 week",
            "activities": "Execute tenant diagnostic scripts, interview administrators, and capture permission telemetry."
          },
          {
            "name": "Analyse",
            "duration": "1 week",
            "activities": "Score findings against Microsoft CAF baselines, model oversharing risk, and categorize gaps."
          },
          {
            "name": "Report",
            "duration": "3–4 days",
            "activities": "Present assessment findings, deliver prioritised remediation matrix, and host executive readout."
          }
        ],
        "prerequisites": [
          "Global Reader or equivalent read-only administrative access to Microsoft Entra ID and M365 admin centers.",
          "SharePoint Administrator and Purview Compliance Administrator read permissions for diagnostic script execution.",
          "Availability of tenant administrators for structured discovery interviews.",
          "Access to current SharePoint site inventories and sensitivity label documentation."
        ],
        "faqs": [
          {
            "question": "Does this assessment require intrusive agent software on user machines?",
            "answer": "No. The assessment runs non-intrusively via read-only PowerShell diagnostics, Graph API queries, and tenant configuration inspections without impacting end users."
          },
          {
            "question": "What happens if the assessment reveals widespread permission oversharing?",
            "answer": "The final deliverable includes a prioritised remediation matrix detailing exactly which sites, groups, and links require remediation before activating Copilot licenses."
          },
          {
            "question": "Can Devopstrio assist with remediating the discovered issues?",
            "answer": "Yes. We offer companion implementation accelerators, including Offering 071 (SharePoint Governance Remediation) and Offering 020 (Purview DSPM for AI), to execute remediation rapidly."
          }
        ]
      }
    }
  },
  {
    "code": "003",
    "title": "Agent 365 Deployment and Governance Setup",
    "slug": "agent-365-deployment-and-governance-setup",
    "domain": "05 Agent Governance",
    "engagementType": "Implementation",
    "duration": "6–8 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/003-agent-365-deployment-and-governance-setup/02-IaC/README.md",
      "hld": "Offerings/003-agent-365-deployment-and-governance-setup/01-Design/HLD-003-Agent_365_Deployment_and_Governance_Setup.docx",
      "lld": "Offerings/003-agent-365-deployment-and-governance-setup/01-Design/LLD-003-Agent_365_Deployment_and_Governance_Setup.docx",
      "sow": "Offerings/003-agent-365-deployment-and-governance-setup/03-Sales-and-Delivery-Kit/003 - Statement of Work.docx",
      "wbs": "Offerings/003-agent-365-deployment-and-governance-setup/03-Sales-and-Delivery-Kit/003 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Agent Governance",
    "heroKicker": "Agent Governance",
    "heroDescription": "Configure Microsoft Agent 365 as the organisation's agent control plane, with policies, approvals and reporting.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises adopting this capability face significant hurdles: agents are being built in several tools with no inventory.",
          "Compounding this friction: owners leave and agents become orphaned; and agent access to data is not reviewed.",
          "The Agent 365 Deployment and Governance Setup engagement delivers a structured implementation blueprint designed to resolve these Agent Governance operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CIO / CISO and Identity and Access Lead / Microsoft 365 Architect teams, particularly in financial services, public sector, healthcare."
      },
      "scope": [
        {
          "title": "Agent 365 Control Plane & Registry",
          "deliverables": "Configuration of Microsoft Agent 365 as the single agent inventory with mandatory ownership, purpose, platform, data classification, risk tier, and review date metadata, restricting publishing rights to approved makers.",
          "notIncluded": "Building individual custom or Copilot Studio agents."
        },
        {
          "title": "Entra ID Agent Identity & Access Governance",
          "deliverables": "Provisioning pattern for dedicated Entra agent or managed identities per agent, Conditional Access policies limiting resources and locations, and quarterly owner-attested access reviews with automatic removal on non-response.",
          "notIncluded": "Changes to the underlying platform landing zone identity subscription."
        },
        {
          "title": "Tiered Approval & Lifecycle Workflow",
          "deliverables": "Implementation of risk-tiered approval routing (self-approval for low risk, AI CoE for medium risk, AI governance board for high risk) and lifecycle state transitions from request and publication through suspension and retirement.",
          "notIncluded": "Authoring of organisational AI policy, DPIA, or equality impact assessment documents."
        },
        {
          "title": "Purview Audit & Leadership Risk Reporting",
          "deliverables": "Configuration of Microsoft Purview data security and audit logging for agent interactions, alongside a Power BI agent risk dashboard and monthly reporting covering agent count, usage, and risk posture.",
          "notIncluded": "Data cleansing, source content migration, or ongoing managed service operations post-hypercare."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Deployment",
          "scenario": "An organisation deploying standard 003 Agent 365 Deployment And Governance Setup patterns across regulated enterprise subscriptions to ensure compliance and technical consistency."
        },
        {
          "title": "Multi-Departmental Agent Governance Rollout",
          "scenario": "Coordinated deployment of Agent 365 Deployment and Governance Setup across enterprise divisions, enabling cross-functional units to operationalise Agent Governance workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 6–8 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "004",
    "title": "AI Readiness Assessment",
    "slug": "ai-readiness-assessment",
    "domain": "15 AI Strategy & Readiness",
    "engagementType": "Assessment",
    "duration": "2–3 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/004-ai-readiness-assessment/02-IaC/README.md",
      "hld": "Offerings/004-ai-readiness-assessment/01-Design/HLD-004-AI_Readiness_Assessment.docx",
      "lld": "Offerings/004-ai-readiness-assessment/01-Design/LLD-004-AI_Readiness_Assessment.docx",
      "sow": "Offerings/004-ai-readiness-assessment/03-Sales-and-Delivery-Kit/004 - Statement of Work.docx",
      "wbs": "Offerings/004-ai-readiness-assessment/03-Sales-and-Delivery-Kit/004 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "AI Strategy & Readiness",
    "heroKicker": "AI Strategy & Readiness",
    "heroDescription": "Assess the organisation's readiness for AI across strategy, data, platform, security, skills and governance.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises adopting this capability face significant hurdles: many ai ideas, no clear priorities.",
          "Compounding this friction: unknown readiness across data, platform and skills; and no business case for ai investment.",
          "The AI Readiness Assessment engagement delivers a structured assessment blueprint designed to resolve these AI Strategy & Readiness operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CEO / CIO / Transformation Director and Enterprise Architect / Head of Data teams, particularly in all industries."
      },
      "scope": [
        {
          "title": "Stakeholder Discovery & Use-Case Alignment",
          "deliverables": "Facilitated interviews and workshops with business, IT, and data leaders to establish strategic priorities, candidate AI use cases, and organisational skills baseline.",
          "notIncluded": "Design or build of production AI workloads."
        },
        {
          "title": "CAF-Aligned Technical & Data Readiness Review",
          "deliverables": "Read-only technical review of the existing Azure Landing Zone against AI Landing Zone requirements, alongside quality and access assessment of data sources for priority use cases.",
          "notIncluded": "Changes to platform landing zone subscriptions, data cleansing, or source content migration."
        },
        {
          "title": "Evidence-Based Maturity Scoring & Gap Register",
          "deliverables": "Objective maturity evaluation across strategy, platform, data, security, skills, and governance, producing a findings register with supporting evidence and ranked risks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Prioritised Roadmap & Executive Business Case",
          "deliverables": "Two-track 90-day and 12-month remediation roadmap, top-three first-wave use-case plan, and executive presentation ready for funding review.",
          "notIncluded": "Post-assessment implementation or ongoing managed services."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Deployment",
          "scenario": "An organisation deploying standard 004 Ai Readiness Assessment patterns across regulated enterprise subscriptions to ensure compliance and technical consistency."
        },
        {
          "title": "Multi-Departmental AI Strategy & Readiness Rollout",
          "scenario": "Coordinated deployment of AI Readiness Assessment across enterprise divisions, enabling cross-functional units to operationalise AI Strategy & Readiness workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 2–3 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Mobilise",
            "duration": "1–2 weeks",
            "activities": "Agree scope, stakeholders and access."
          },
          {
            "name": "Discover",
            "duration": "1 week",
            "activities": "Interviews, workshops and technical evidence gathering."
          },
          {
            "name": "Analyse",
            "duration": "1–2 weeks",
            "activities": "Score findings, identify gaps and options."
          },
          {
            "name": "Report",
            "duration": "1 week",
            "activities": "Present findings, prioritised recommendations and roadmap."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "005",
    "title": "Copilot Analytics and ROI",
    "slug": "copilot-analytics-and-roi",
    "domain": "07 Microsoft 365 Copilot",
    "engagementType": "Implementation",
    "duration": "3–4 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/005-copilot-analytics-and-roi/02-IaC/README.md",
      "hld": "Offerings/005-copilot-analytics-and-roi/01-Design/HLD-005-Copilot_Analytics_and_ROI.docx",
      "lld": "Offerings/005-copilot-analytics-and-roi/01-Design/LLD-005-Copilot_Analytics_and_ROI.docx",
      "sow": "Offerings/005-copilot-analytics-and-roi/03-Sales-and-Delivery-Kit/005 - Statement of Work.docx",
      "wbs": "Offerings/005-copilot-analytics-and-roi/03-Sales-and-Delivery-Kit/005 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Microsoft 365 Copilot",
    "heroKicker": "Microsoft 365 Copilot",
    "heroDescription": "Measure Copilot adoption, usage and business impact to guide licence decisions and prove return on investment.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises adopting this capability face significant hurdles: years of oversharing in sharepoint and teams.",
          "Compounding this friction: limited sensitivity labelling; and licences purchased but usage is low.",
          "The Copilot Analytics and ROI engagement delivers a structured implementation blueprint designed to resolve these Microsoft 365 Copilot operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CIO / Chief People Officer and Microsoft 365 Lead / Information Governance Lead teams, particularly in professional services, public sector, financial services."
      },
      "scope": [
        {
          "title": "SharePoint Oversharing & Access Remediation Setup",
          "deliverables": "Configuration of weekly SharePoint Data Access Governance reports, site access review workflows, and Restricted Content Discovery on high-risk sites prior to wider rollout.",
          "notIncluded": "Tenant-wide manual content cleansing or migration of legacy file shares."
        },
        {
          "title": "Purview Sensitivity Labelling & Copilot DLP",
          "deliverables": "Configuration of Microsoft Purview sensitivity label taxonomy, simulation-first auto-labelling, DSPM for AI coaching policies, and DLP rules excluding Highly Confidential content from Copilot processing.",
          "notIncluded": "Authoring of organisational data classification policies or formal DPIA documents."
        },
        {
          "title": "Copilot Usage Telemetry & Power BI ROI Reporting",
          "deliverables": "Configuration of the Microsoft 365 Copilot Dashboard and Viva Insights alongside custom Power BI reports combining adoption telemetry with agreed departmental value measures.",
          "notIncluded": "Building Azure AI workloads or custom Copilot extensions and agents."
        },
        {
          "title": "Entra Conditional Access & Licence Reallocation Model",
          "deliverables": "Group-based Copilot licensing, Conditional Access policies enforcing MFA and compliant devices, and a monthly inactive-licence identification and reallocation process.",
          "notIncluded": "Procurement of Microsoft 365 licences or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Deployment",
          "scenario": "An organisation deploying standard 005 Copilot Analytics And Roi patterns across regulated enterprise subscriptions to ensure compliance and technical consistency."
        },
        {
          "title": "Multi-Departmental Microsoft 365 Copilot Rollout",
          "scenario": "Coordinated deployment of Copilot Analytics and ROI across enterprise divisions, enabling cross-functional units to operationalise Microsoft 365 Copilot workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3–4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "006",
    "title": "Microsoft Fabric Data Foundation for AI",
    "slug": "microsoft-fabric-data-foundation-for-ai",
    "domain": "10 Data & AI Platform",
    "engagementType": "Implementation",
    "duration": "8–10 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/006-microsoft-fabric-data-foundation-for-ai/02-IaC/README.md",
      "hld": "Offerings/006-microsoft-fabric-data-foundation-for-ai/01-Design/HLD-006-Microsoft_Fabric_Data_Foundation_for_AI.docx",
      "lld": "Offerings/006-microsoft-fabric-data-foundation-for-ai/01-Design/LLD-006-Microsoft_Fabric_Data_Foundation_for_AI.docx",
      "sow": "Offerings/006-microsoft-fabric-data-foundation-for-ai/03-Sales-and-Delivery-Kit/006 - Statement of Work.docx",
      "wbs": "Offerings/006-microsoft-fabric-data-foundation-for-ai/03-Sales-and-Delivery-Kit/006 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Data & AI Platform",
    "heroKicker": "Data & AI Platform",
    "heroDescription": "Build a governed Microsoft Fabric data foundation that supplies trusted data to AI applications, agents and reports.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises adopting this capability face significant hurdles: data sits in many systems with unclear ownership.",
          "Compounding this friction: data quality is unknown; and each ai project extracts data by hand.",
          "The Microsoft Fabric Data Foundation for AI engagement delivers a structured implementation blueprint designed to resolve these Data & AI Platform operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Chief Data Officer / CFO and Head of Data / Data Architect teams, particularly in retail, manufacturing, financial services."
      },
      "scope": [
        {
          "title": "Fabric Landing Zone & Private Network Foundation",
          "deliverables": "Infrastructure-as-code deployment (Terraform or Bicep) of a spoke VNet peered to the hub, private endpoints, private Storage Account with shared keys disabled, Key Vault, and Log Analytics monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone connectivity, identity, or management subscriptions."
        },
        {
          "title": "Domain Workspaces & Medallion OneLake Lakehouses",
          "deliverables": "Provisioning of Microsoft Fabric capacity and domain-aligned workspaces with workspace identities enabled, structuring OneLake lakehouses across bronze, silver, and gold layers.",
          "notIncluded": "Migration of all legacy data warehouses outside agreed priority AI use cases."
        },
        {
          "title": "Purview Data Catalogue, Lineage & Access Governance",
          "deliverables": "Integration of Microsoft Purview to catalogue data products, assign business domain owners, track end-to-end lineage, and enforce Entra ID role-based access controls.",
          "notIncluded": "Source system data cleansing or authoring of organisational data governance policies."
        },
        {
          "title": "Policy Guardrails & Operational Handover",
          "deliverables": "Assignment of the Devopstrio AI Landing Zone policy initiative (Audit in non-production, Deny in production), budget alerts, and handover of operational runbooks.",
          "notIncluded": "Ongoing managed service operations or 24/7 support after the hypercare period."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Deployment",
          "scenario": "An organisation deploying standard 006 Microsoft Fabric Data Foundation For Ai patterns across regulated enterprise subscriptions to ensure compliance and technical consistency."
        },
        {
          "title": "Multi-Departmental Data & AI Platform Rollout",
          "scenario": "Coordinated deployment of Microsoft Fabric Data Foundation for AI across enterprise divisions, enabling cross-functional units to operationalise Data & AI Platform workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 8–10 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "007",
    "title": "AI Landing Zone Implementation",
    "slug": "ai-landing-zone-implementation",
    "domain": "01 AI Landing Zone",
    "engagementType": "Implementation",
    "duration": "6–8 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/007-ai-landing-zone-implementation/02-IaC/README.md",
      "hld": "Offerings/007-ai-landing-zone-implementation/01-Design/HLD-007-AI_Landing_Zone_Implementation.docx",
      "lld": "Offerings/007-ai-landing-zone-implementation/01-Design/LLD-007-AI_Landing_Zone_Implementation.docx",
      "sow": "Offerings/007-ai-landing-zone-implementation/03-Sales-and-Delivery-Kit/007 - Statement of Work.docx",
      "wbs": "Offerings/007-ai-landing-zone-implementation/03-Sales-and-Delivery-Kit/007 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "AI Landing Zone",
    "heroKicker": "AI Landing Zone",
    "heroDescription": "Deploy the core AI landing zone as code: an AI Hub, a workload subscription pattern and AI guardrails on top of the organisation's existing Azure Landing Zone.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Many enterprise AI initiatives begin as isolated proof-of-concepts provisioned in standalone subscriptions. While rapid in initial prototyping, these environments frequently rely on public model endpoints, hardcoded API credentials, and unvetted egress routes that circumvent enterprise security perimeters.",
          "Without a standardised landing zone topology, central platform and security teams face severe blind spots regarding resource provisioning, data egress, and model consumption costs. As sensitive workloads emerge, security and risk functions understandably intervene to pause deployments until robust controls are demonstrated.",
          "The Devopstrio AI Landing Zone Implementation establishes a governed, secure cloud foundation as repeatable infrastructure-as-code. It extends the customer's existing Azure Landing Zone with an AI Hub, dedicated workload subscription patterns, and rigorous Azure Policy guardrails aligned with the Microsoft Cloud Adoption Framework."
        ],
        "targetAudience": "Enterprise Architects, Cloud Platform Engineers, Security Architects, and Heads of AI Infrastructure."
      },
      "scope": [
        {
          "title": "Architecture Design & Baseline Review",
          "deliverables": "High-Level Design (HLD) and Low-Level Design (LLD) detailing subscription boundaries, IP address planning, and private DNS integration.",
          "notIncluded": "Redesign or restructuring of the customer's existing core Azure platform landing zone."
        },
        {
          "title": "AI Hub & Workload Subscriptions",
          "deliverables": "Modular infrastructure-as-code deployment of the AI Hub architecture, Key Vaults, and managed identity configurations.",
          "notIncluded": "Procurement of third-party SaaS model licenses or cloud subscription consumption charges."
        },
        {
          "title": "Network Perimeter & Private Connectivity",
          "deliverables": "Hub-spoke network peering, Azure Firewall routing rules, Private Endpoints for AI Foundry/Azure OpenAI, and central private DNS zone linking.",
          "notIncluded": "Physical WAN infrastructure provisioning or on-premises firewall hardware management."
        },
        {
          "title": "Policy Baseline & Continuous Governance",
          "deliverables": "Custom and built-in Azure Policy definitions enforcing encryption in transit, customer-managed keys (CMK), diagnostic logging, and disabling public network access.",
          "notIncluded": "Formal organizational DPIA authoring or enterprise-wide regulatory policy drafting."
        },
        {
          "title": "CI/CD Pipeline Automation & Handover",
          "deliverables": "Automated deployment pipelines (GitHub Actions / Azure DevOps), validation scripts, as-built documentation, and engineering handover walkthroughs.",
          "notIncluded": "Ongoing 24/7 hypercare support past the agreed operational stabilization phase."
        }
      ],
      "applications": [
        {
          "title": "Regulated Financial Services Ingestion",
          "scenario": "A tier-one banking institution establishing an enterprise AI development hub where all Azure OpenAI endpoints are strictly resolved via Private Endpoints with zero internet exposure, fulfilling strict regulatory compliance standards."
        },
        {
          "title": "Multi-Tenant Enterprise AI Vending",
          "scenario": "A global conglomerate providing self-service subscription provisioning for independent business units, ensuring each data science team receives a pre-governed sandbox with central policy guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 8 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1 week",
            "activities": "Mobilise team, confirm scope, agree IP allocations and sign off HLD."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & Pilot",
            "duration": "3–4 weeks",
            "activities": "Deploy workload services, execute network isolation tests, and run validation pilot."
          },
          {
            "name": "Production",
            "duration": "1 week",
            "activities": "Promote to production, enforce Deny policies, and deliver operational runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare monitoring, configuration tuning, and engineering knowledge transfer."
          }
        ],
        "prerequisites": [
          "An operational Azure Landing Zone with hub-spoke networking, central egress routing, and Private DNS resolution in place.",
          "Microsoft Entra ID tenant access with permissions to create subscriptions, management group policy assignments, and role definitions.",
          "Pre-allocated non-overlapping CIDR blocks for AI hub and spoke virtual network subnets.",
          "Active subscription with Azure OpenAI / AI Foundry service quota approvals in target regions."
        ],
        "faqs": [
          {
            "question": "How does this implementation align with our existing Azure Landing Zone?",
            "answer": "The implementation deploys directly on top of your existing Cloud Adoption Framework (CAF) landing zone, integrating seamlessly with your connectivity hub, central firewall, and Private DNS architecture without disrupting existing workloads."
          },
          {
            "question": "Can this pattern support multiple business units with different budgets?",
            "answer": "Yes. The workload subscription vending pattern provisions discrete spoke subscriptions for each team, allowing individual cost attribution, budget alerts, and role-based access controls while enforcing central security policies."
          },
          {
            "question": "What happens after the 8-week implementation is complete?",
            "answer": "The engagement concludes with complete as-built documentation, infrastructure-as-code repository handover, and knowledge transfer sessions to empower your internal cloud platform team to operate and vend AI environments independently."
          }
        ]
      }
    }
  },
  {
    "code": "008",
    "title": "Omnichannel Customer Service Chatbot",
    "slug": "omnichannel-customer-service-chatbot",
    "domain": "13 Contact Centre AI",
    "engagementType": "Implementation",
    "duration": "4–6 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/008-omnichannel-customer-service-chatbot/02-IaC/README.md",
      "hld": "Offerings/008-omnichannel-customer-service-chatbot/01-Design/HLD-008-Omnichannel_Customer_Service_Chatbot.docx",
      "lld": "Offerings/008-omnichannel-customer-service-chatbot/01-Design/LLD-008-Omnichannel_Customer_Service_Chatbot.docx",
      "sow": "Offerings/008-omnichannel-customer-service-chatbot/03-Sales-and-Delivery-Kit/008 - Statement of Work.docx",
      "wbs": "Offerings/008-omnichannel-customer-service-chatbot/03-Sales-and-Delivery-Kit/008 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Contact Centre AI",
    "heroKicker": "Contact Centre AI",
    "heroDescription": "Provide one AI assistant across web chat, WhatsApp and messaging channels for customer service.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises adopting this capability face significant hurdles: touch-tone menus frustrate customers.",
          "Compounding this friction: qa samples only a small share of calls; and agents write notes by hand after every call.",
          "The Omnichannel Customer Service Chatbot engagement delivers a structured implementation blueprint designed to resolve these Contact Centre AI operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Customer Service Director and Contact Centre Technology Lead teams, particularly in retail, utilities, financial services."
      },
      "scope": [
        {
          "title": "Private AI Landing Zone & Gateway Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of a spoke VNet (with private endpoint, internal APIM, and Container Apps subnets), Key Vault, Microsoft Foundry, Azure AI Search, Azure AI Content Safety, and central monitoring.",
          "notIncluded": "Modifications to the existing platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Single-Brain Omnichannel Assistant",
          "deliverables": "Configuration of a unified assistant in Copilot Studio and Microsoft Foundry published across web chat, WhatsApp, and SMS with channel-specific formatting and consistent grounded responses.",
          "notIncluded": "Replacement of the existing telephony platform or contact centre infrastructure."
        },
        {
          "title": "CRM Integration & Context-Preserving Handover",
          "deliverables": "Secure API integration with Dynamics 365 or existing CRM/telephony platforms to log conversations and transfer full interaction context to human agents on escalation.",
          "notIncluded": "Data cleansing or migration of legacy CRM records."
        },
        {
          "title": "Transcript Redaction, Guardrails & Handover",
          "deliverables": "Automated personal and payment data redaction from call transcripts, Prompt Shields content filtering, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Deployment",
          "scenario": "An organisation deploying standard 008 Omnichannel Customer Service Chatbot patterns across regulated enterprise subscriptions to ensure compliance and technical consistency."
        },
        {
          "title": "Multi-Departmental Contact Centre AI Rollout",
          "scenario": "Coordinated deployment of Omnichannel Customer Service Chatbot across enterprise divisions, enabling cross-functional units to operationalise Contact Centre AI workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "009",
    "title": "AI Envisioning Workshop",
    "slug": "ai-envisioning-workshop",
    "domain": "15 AI Strategy & Readiness",
    "engagementType": "Workshop",
    "duration": "1–2 days",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/009-ai-envisioning-workshop/02-IaC/README.md",
      "hld": "Offerings/009-ai-envisioning-workshop/01-Design/HLD-009-AI_Envisioning_Workshop.docx",
      "lld": "Offerings/009-ai-envisioning-workshop/01-Design/LLD-009-AI_Envisioning_Workshop.docx",
      "sow": "Offerings/009-ai-envisioning-workshop/03-Sales-and-Delivery-Kit/009 - Statement of Work.docx",
      "wbs": "Offerings/009-ai-envisioning-workshop/03-Sales-and-Delivery-Kit/009 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "AI Strategy & Readiness",
    "heroKicker": "AI Strategy & Readiness",
    "heroDescription": "Help leaders understand what AI can do for the organisation and agree a shortlist of opportunities.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprise leadership teams frequently recognize the transformative potential of artificial intelligence but grapple with hundreds of uncoordinated ideas, conflicting priorities, and unclear commercial returns.",
          "Without a structured envisioning and prioritisation process, organizations risk investing in fragmented proof-of-concepts that fail to scale or address genuine business bottlenecks.",
          "The AI Envisioning Workshop brings senior business, operational, and technology leaders together to explore high-impact AI capabilities, evaluate organizational readiness, and establish an actionable 90-day pilot roadmap."
        ],
        "targetAudience": "Chief Executive Officers, Chief Information Officers, Heads of Digital Transformation, Enterprise Architects, and Business Line Directors."
      },
      "scope": [
        {
          "title": "Art of the Possible Sector Briefing",
          "deliverables": "Tailored presentations and demonstrations showcasing enterprise AI patterns relevant to the customer's industry sector.",
          "notIncluded": "Production deployment of custom software during the workshop."
        },
        {
          "title": "Cross-Functional Pain Point Discovery",
          "deliverables": "Structured interactive ideation sessions capturing operational bottlenecks, customer experience hurdles, and manual friction points.",
          "notIncluded": "Exhaustive time-and-motion studies across internal departments."
        },
        {
          "title": "Feasibility & Value Scoring Matrix",
          "deliverables": "Objective scoring of candidate use cases against strategic value, implementation feasibility, data readiness, and regulatory risk.",
          "notIncluded": "Detailed data engineering or ETL pipeline development."
        },
        {
          "title": "Prioritised Opportunity Shortlist",
          "deliverables": "Selection of the top 3–5 candidate opportunities with defined business sponsors and operational scope boundaries.",
          "notIncluded": "Binding vendor commercial commitments."
        },
        {
          "title": "90-Day Pilot Implementation Roadmap",
          "deliverables": "High-level target architectural pattern, indicative resource requirements, and milestone plan for first production pilot.",
          "notIncluded": "Detailed low-level engineering design documents."
        }
      ],
      "applications": [
        {
          "title": "Executive AI Strategy Alignment",
          "scenario": "A retail banking leadership team establishing strategic consensus on whether to prioritize customer-facing conversational assistants or internal document extraction."
        },
        {
          "title": "Pre-Investment Business Case",
          "scenario": "A manufacturing enterprise evaluating 15 proposed predictive maintenance ideas to select the single highest-value pilot before securing board capital funding."
        }
      ],
      "engagement": {
        "timeline": "About 1–2 days of focused workshops (total engagement delivered across 1–2 weeks).",
        "phases": [
          {
            "name": "Prepare",
            "duration": "1 day",
            "activities": "Agree workshop objectives, identify attendees, and tailor industry sector demonstrations."
          },
          {
            "name": "Deliver",
            "duration": "1 day",
            "activities": "Execute interactive workshop sessions, facilitate use case ideation, and run scoring exercises."
          },
          {
            "name": "Report",
            "duration": "1 day",
            "activities": "Synthesise findings, compile opportunity shortlist, and deliver 90-day execution roadmap."
          }
        ],
        "prerequisites": [
          "Executive sponsorship to mandate cross-functional leadership attendance.",
          "Participation of key business line heads and IT/Enterprise Architecture leads.",
          "Overview of current enterprise cloud platform and primary enterprise data sources.",
          "Pre-workshop completion of brief stakeholder expectation surveys."
        ],
        "faqs": [
          {
            "question": "Who should attend the envisioning sessions?",
            "answer": "We recommend a balanced cohort including executive sponsors (CIO/CDO), departmental heads experiencing operational friction, and lead architects who understand enterprise data systems."
          },
          {
            "question": "What is the primary deliverable at the end of the workshop?",
            "answer": "You receive an executive summary detailing your ranked use-case matrix, high-level solution architectures for top candidates, and an actionable 90-day pilot execution plan."
          },
          {
            "question": "How do you score and rank different AI use cases?",
            "answer": "Use cases are scored objectively across four distinct axes: commercial business value, implementation feasibility, data readiness, and ethical/regulatory risk."
          }
        ]
      }
    }
  },
  {
    "code": "010",
    "title": "Developer Productivity with GitHub Copilot",
    "slug": "developer-productivity-with-github-copilot",
    "domain": "02 Generative AI Applications",
    "engagementType": "Adoption",
    "duration": "4 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/010-developer-productivity-with-github-copilot/02-IaC/README.md",
      "hld": "Offerings/010-developer-productivity-with-github-copilot/01-Design/HLD-010-Developer_Productivity_with_GitHub_Copilot.docx",
      "lld": "Offerings/010-developer-productivity-with-github-copilot/01-Design/LLD-010-Developer_Productivity_with_GitHub_Copilot.docx",
      "sow": "Offerings/010-developer-productivity-with-github-copilot/03-Sales-and-Delivery-Kit/010 - Statement of Work.docx",
      "wbs": "Offerings/010-developer-productivity-with-github-copilot/03-Sales-and-Delivery-Kit/010 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Generative AI Applications",
    "heroKicker": "Generative AI Applications",
    "heroDescription": "Roll out GitHub Copilot to engineering teams with the right policies, training and measurement of impact.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises adopting this capability face significant hurdles: staff use public ai tools with company data.",
          "Compounding this friction: proofs of concept are built without logging, evaluation or safety controls; and teams rebuild the same plumbing for every use case.",
          "The Developer Productivity with GitHub Copilot engagement delivers a structured adoption blueprint designed to resolve these Generative AI Applications operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Business Unit Director and Head of Engineering / AI Lead teams, particularly in professional services, public sector, retail."
      },
      "scope": [
        {
          "title": "GitHub Copilot Organisation & Policy Setup",
          "deliverables": "Configuration of GitHub Copilot Business or Enterprise settings including public-code suggestion blocking, repository content exclusions for secrets and regulated code, approved model restrictions, and Entra ID group seat sync.",
          "notIncluded": "Procurement of GitHub Copilot or GitHub Advanced Security licences."
        },
        {
          "title": "Repository Security & Code Guardrails",
          "deliverables": "Enablement of GitHub Advanced Security controls across target repositories: CodeQL code scanning, secret scanning with push protection, Dependabot security updates, and branch protection rules.",
          "notIncluded": "Remediation of pre-existing application vulnerabilities across legacy codebases."
        },
        {
          "title": "Champions Network & Engineering Enablement",
          "deliverables": "Structured four-week adoption programme comprising pilot cohort onboarding, engineering champions coaching, secure AI coding guidance, and team-specific prompting guides.",
          "notIncluded": "Custom IDE plugin development or mandatory training for non-engineering staff."
        },
        {
          "title": "Productivity Telemetry & Impact Reporting",
          "deliverables": "Configuration of Copilot Metrics API and GitHub Insights reporting in Power BI to track active users, suggestion acceptance rate, pull request cycle time, and security alert trends.",
          "notIncluded": "Deployment of Azure AI Foundry workloads or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Deployment",
          "scenario": "An organisation deploying standard 010 Developer Productivity With Github Copilot patterns across regulated enterprise subscriptions to ensure compliance and technical consistency."
        },
        {
          "title": "Multi-Departmental Generative AI Applications Rollout",
          "scenario": "Coordinated deployment of Developer Productivity with GitHub Copilot across enterprise divisions, enabling cross-functional units to operationalise Generative AI Applications workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Agree goals, scenarios, success measures and pilot groups."
          },
          {
            "name": "Readiness",
            "duration": "1–2 weeks",
            "activities": "Prepare technical readiness, training and champions."
          },
          {
            "name": "Pilot",
            "duration": "2–4 weeks",
            "activities": "Run the pilot, support users and measure usage."
          },
          {
            "name": "Scale",
            "duration": "1–2 weeks",
            "activities": "Roll out in waves using pilot learnings."
          },
          {
            "name": "Sustain",
            "duration": "1 week",
            "activities": "Embed champions and measurement; hand over."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "011",
    "title": "HR and Policy Knowledge Assistant",
    "slug": "hr-and-policy-knowledge-assistant",
    "domain": "03 RAG & Document Intelligence",
    "engagementType": "Implementation",
    "duration": "4–5 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/011-hr-and-policy-knowledge-assistant/02-IaC/README.md",
      "hld": "Offerings/011-hr-and-policy-knowledge-assistant/01-Design/HLD-011-HR_and_Policy_Knowledge_Assistant.docx",
      "lld": "Offerings/011-hr-and-policy-knowledge-assistant/01-Design/LLD-011-HR_and_Policy_Knowledge_Assistant.docx",
      "sow": "Offerings/011-hr-and-policy-knowledge-assistant/03-Sales-and-Delivery-Kit/011 - Statement of Work.docx",
      "wbs": "Offerings/011-hr-and-policy-knowledge-assistant/03-Sales-and-Delivery-Kit/011 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "RAG & Document Intelligence",
    "heroKicker": "RAG & Document Intelligence",
    "heroDescription": "Answer staff questions about HR policies, benefits and procedures, with citations to the current policy documents.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises adopting this capability face significant hurdles: knowledge is spread across sharepoint, file shares and systems.",
          "Compounding this friction: keyword search returns too many or wrong results; and manual keying of document data is slow and error-prone.",
          "The HR and Policy Knowledge Assistant engagement delivers a structured implementation blueprint designed to resolve these RAG & Document Intelligence operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Head of Operations / Knowledge Management Lead and Solution Architect / Data Lead teams, particularly in legal and professional services, insurance, public sector."
      },
      "scope": [
        {
          "title": "Private RAG Infrastructure & AI Gateway",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet, internal API Management AI gateway, Microsoft Foundry, Azure AI Search, Container Apps, Storage Account, Key Vault, and central monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Version-Controlled HR Policy Ingestion Pipeline",
          "deliverables": "Document ingestion pipeline connecting to the SharePoint HR site using Azure AI Document Intelligence, indexing approved policies with version dates while automatically excluding superseded documents and restricted labels.",
          "notIncluded": "Cleansing, rewriting, or migration of legacy HR policy documents."
        },
        {
          "title": "Security-Trimmed Retrieval & Citation Engine",
          "deliverables": "Configuration of Azure AI Search with semantic ranking, document access-control list (ACL) storage, incremental permission sync, and mandatory source document citations.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Teams Staff Interface & HR Escalation Routing",
          "deliverables": "Deployment of the staff-facing Microsoft Teams interface with automated routing of personal, sensitive, or case-specific employee queries directly to HR channels, plus operational handover.",
          "notIncluded": "Post-hypercare managed support or generative applications without retrieval."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Deployment",
          "scenario": "An organisation deploying standard 011 Hr And Policy Knowledge Assistant patterns across regulated enterprise subscriptions to ensure compliance and technical consistency."
        },
        {
          "title": "Multi-Departmental RAG & Document Intelligence Rollout",
          "scenario": "Coordinated deployment of HR and Policy Knowledge Assistant across enterprise divisions, enabling cross-functional units to operationalise RAG & Document Intelligence workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–5 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "012",
    "title": "Role-Based Copilots (Sales, Service, Finance)",
    "slug": "role-based-copilots-sales-service-finance",
    "domain": "07 Microsoft 365 Copilot",
    "engagementType": "Implementation",
    "duration": "4–6 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/012-role-based-copilots-sales-service-finance/02-IaC/README.md",
      "hld": "Offerings/012-role-based-copilots-sales-service-finance/01-Design/HLD-012-Role_Based_Copilots_Sales_Service_Finance.docx",
      "lld": "Offerings/012-role-based-copilots-sales-service-finance/01-Design/LLD-012-Role_Based_Copilots_Sales_Service_Finance.docx",
      "sow": "Offerings/012-role-based-copilots-sales-service-finance/03-Sales-and-Delivery-Kit/012 - Statement of Work.docx",
      "wbs": "Offerings/012-role-based-copilots-sales-service-finance/03-Sales-and-Delivery-Kit/012 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Microsoft 365 Copilot",
    "heroKicker": "Microsoft 365 Copilot",
    "heroDescription": "Deploy role-specific Copilot experiences for sales, service and finance teams, connected to CRM and ERP data.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: years of oversharing in sharepoint and teams.",
          "Without a validated delivery methodology: limited sensitivity labelling; and licences purchased but usage is low.",
          "The Role-Based Copilots (Sales, Service, Finance) engagement delivers a structured implementation blueprint designed to resolve these Microsoft 365 Copilot operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CIO / Chief People Officer and Microsoft 365 Lead / Information Governance Lead teams, particularly in professional services, public sector, financial services."
      },
      "scope": [
        {
          "title": "SharePoint Oversharing & Purview Data Readiness",
          "deliverables": "Assessment and remediation of SharePoint oversharing using SharePoint Advanced Management and Purview reports, alongside sensitivity label and Copilot DLP configuration.",
          "notIncluded": "Tenant-wide manual file migration or legacy data cleansing."
        },
        {
          "title": "Role-Based Copilot Setup (Sales, Service, Finance)",
          "deliverables": "Deployment and configuration of Microsoft 365 Copilot role experiences and role-specific prompts tailored to Sales, Customer Service, and Finance workflows.",
          "notIncluded": "Custom Azure AI Foundry applications or bespoke autonomous agents."
        },
        {
          "title": "Permission-Aware CRM & ERP Integration",
          "deliverables": "Connection of role-based Copilots to live Dynamics 365, Salesforce, and ERP data sources via supported connectors while strictly preserving existing CRM and ERP user permissions.",
          "notIncluded": "Rebuilding core CRM/ERP schemas or custom third-party connector engineering."
        },
        {
          "title": "Staged Role Rollout & Per-Role Adoption Tracking",
          "deliverables": "Conditional Access enforcement for Copilot users, staged pilot and wave rollout, per-role usage measurement, and operational handover.",
          "notIncluded": "Procurement of M365/Dynamics licences or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 012 Role Based Copilots Sales Service Finance pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Microsoft 365 Copilot Rollout",
          "scenario": "Coordinated deployment of Role-Based Copilots (Sales, Service, Finance) across enterprise divisions, enabling cross-functional units to operationalise Microsoft 365 Copilot workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "013",
    "title": "MLOps Platform on Azure Machine Learning",
    "slug": "mlops-platform-on-azure-machine-learning",
    "domain": "11 MLOps & LLMOps",
    "engagementType": "Implementation",
    "duration": "6–8 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/013-mlops-platform-on-azure-machine-learning/02-IaC/README.md",
      "hld": "Offerings/013-mlops-platform-on-azure-machine-learning/01-Design/HLD-013-MLOps_Platform_on_Azure_Machine_Learning.docx",
      "lld": "Offerings/013-mlops-platform-on-azure-machine-learning/01-Design/LLD-013-MLOps_Platform_on_Azure_Machine_Learning.docx",
      "sow": "Offerings/013-mlops-platform-on-azure-machine-learning/03-Sales-and-Delivery-Kit/013 - Statement of Work.docx",
      "wbs": "Offerings/013-mlops-platform-on-azure-machine-learning/03-Sales-and-Delivery-Kit/013 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "MLOps & LLMOps",
    "heroKicker": "MLOps & LLMOps",
    "heroDescription": "Set up an MLOps platform on Azure Machine Learning so models are trained, deployed and monitored consistently.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises adopting this capability face significant hurdles: models are deployed by hand from notebooks.",
          "Compounding this friction: prompts are not versioned or tested; and nobody notices when model quality drifts.",
          "The MLOps Platform on Azure Machine Learning engagement delivers a structured implementation blueprint designed to resolve these MLOps & LLMOps operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Chief Data Officer / Head of Analytics and ML Engineering Lead / Platform Engineer teams, particularly in financial services, retail, manufacturing."
      },
      "scope": [
        {
          "title": "Private MLOps Landing Zone Infrastructure",
          "deliverables": "Infrastructure-as-code deployment (Terraform or Bicep) of spoke VNet, private Azure Machine Learning workspaces per environment with managed outbound networking, dedicated ML storage, Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Shared Model, Prompt & Environment Registry",
          "deliverables": "Configuration of a shared Azure Machine Learning registry to version, approve, and promote models, prompts, environments, and evaluation datasets across dev, test, and production.",
          "notIncluded": "Training foundation models from scratch."
        },
        {
          "title": "Automated CI/CD Training & Release Pipelines",
          "deliverables": "Implementation of Azure DevOps or GitHub Actions pipelines automating model training, evaluation gates, security checks, and reversible deployment, paired with templated project structures.",
          "notIncluded": "Building domain-specific ML models or cleansing upstream feature datasets."
        },
        {
          "title": "GPU Quotas, Drift Monitoring & Handover",
          "deliverables": "Configuration of scale-to-zero compute clusters with team quotas, data and prediction drift monitors with owner alerts, Deny-mode Azure Policies, and operational runbooks.",
          "notIncluded": "GPU capacity procurement or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Deployment",
          "scenario": "An organisation deploying standard 013 Mlops Platform On Azure Machine Learning patterns across regulated enterprise subscriptions to ensure compliance and technical consistency."
        },
        {
          "title": "Multi-Departmental MLOps & LLMOps Rollout",
          "scenario": "Coordinated deployment of MLOps Platform on Azure Machine Learning across enterprise divisions, enabling cross-functional units to operationalise MLOps & LLMOps workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 6–8 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "014",
    "title": "AI Use-Case Discovery and Business Case",
    "slug": "ai-use-case-discovery-and-business-case",
    "domain": "15 AI Strategy & Readiness",
    "engagementType": "Assessment",
    "duration": "3–4 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/014-ai-use-case-discovery-and-business-case/02-IaC/README.md",
      "hld": "Offerings/014-ai-use-case-discovery-and-business-case/01-Design/HLD-014-AI_Use_Case_Discovery_and_Business_Case.docx",
      "lld": "Offerings/014-ai-use-case-discovery-and-business-case/01-Design/LLD-014-AI_Use_Case_Discovery_and_Business_Case.docx",
      "sow": "Offerings/014-ai-use-case-discovery-and-business-case/03-Sales-and-Delivery-Kit/014 - Statement of Work.docx",
      "wbs": "Offerings/014-ai-use-case-discovery-and-business-case/03-Sales-and-Delivery-Kit/014 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "AI Strategy & Readiness",
    "heroKicker": "AI Strategy & Readiness",
    "heroDescription": "Identify, size and prioritise AI use cases and build a business case for the first wave.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises adopting this capability face significant hurdles: many ai ideas, no clear priorities.",
          "Compounding this friction: unknown readiness across data, platform and skills; and no business case for ai investment.",
          "The AI Use-Case Discovery and Business Case engagement delivers a structured assessment blueprint designed to resolve these AI Strategy & Readiness operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CEO / CIO / Transformation Director and Enterprise Architect / Head of Data teams, particularly in all industries."
      },
      "scope": [
        {
          "title": "Cross-Business Use-Case Discovery",
          "deliverables": "Facilitated discovery workshops across business areas and review of process data to build a structured inventory of candidate AI use cases.",
          "notIncluded": "Design or build of production AI solutions."
        },
        {
          "title": "Four-Factor Feasibility & Readiness Scoring",
          "deliverables": "Objective scoring of candidate use cases against business value, technical feasibility, data readiness (quality and access), and regulatory/DPIA risk.",
          "notIncluded": "Source data cleansing, migration, or changes to platform landing zone infrastructure."
        },
        {
          "title": "Value & Cost Sizing Model",
          "deliverables": "Collaborative estimation of implementation effort, Azure consumption drivers, and conservative benefit assumptions reviewed alongside finance and business owners.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or binding commercial procurement."
        },
        {
          "title": "First-Wave Plan & Fundable Business Case",
          "deliverables": "Selection of the top three use cases for the first 90-day wave, a 90-day and 12-month delivery roadmap, and an executive business case presentation.",
          "notIncluded": "Post-assessment implementation or ongoing managed services."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Deployment",
          "scenario": "An organisation deploying standard 014 Ai Use Case Discovery And Business Case patterns across regulated enterprise subscriptions to ensure compliance and technical consistency."
        },
        {
          "title": "Multi-Departmental AI Strategy & Readiness Rollout",
          "scenario": "Coordinated deployment of AI Use-Case Discovery and Business Case across enterprise divisions, enabling cross-functional units to operationalise AI Strategy & Readiness workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3–4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Mobilise",
            "duration": "1–2 weeks",
            "activities": "Agree scope, stakeholders and access."
          },
          {
            "name": "Discover",
            "duration": "1 week",
            "activities": "Interviews, workshops and technical evidence gathering."
          },
          {
            "name": "Analyse",
            "duration": "1–2 weeks",
            "activities": "Score findings, identify gaps and options."
          },
          {
            "name": "Report",
            "duration": "1 week",
            "activities": "Present findings, prioritised recommendations and roadmap."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "015",
    "title": "Responsible AI Governance Framework",
    "slug": "responsible-ai-governance-framework",
    "domain": "09 Responsible AI & Compliance",
    "engagementType": "Advisory",
    "duration": "4–6 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/015-responsible-ai-governance-framework/02-IaC/README.md",
      "hld": "Offerings/015-responsible-ai-governance-framework/01-Design/HLD-015-Responsible_AI_Governance_Framework.docx",
      "lld": "Offerings/015-responsible-ai-governance-framework/01-Design/LLD-015-Responsible_AI_Governance_Framework.docx",
      "sow": "Offerings/015-responsible-ai-governance-framework/03-Sales-and-Delivery-Kit/015 - Statement of Work.docx",
      "wbs": "Offerings/015-responsible-ai-governance-framework/03-Sales-and-Delivery-Kit/015 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Responsible AI & Compliance",
    "heroKicker": "Responsible AI & Compliance",
    "heroDescription": "Establish the organisation's responsible AI governance: principles, roles, review board, processes and tooling.",
    "details": {
      "overview": {
        "businessChallenge": [
          "As enterprise adoption of generative AI and machine learning accelerates, organizations face escalating scrutiny from regulatory bodies, audit committees, and customer stakeholders regarding ethical use and safety.",
          "Without a formal governance framework, teams develop AI workloads in departmental silos without consistent risk classification, model evaluation records, or accountability structures.",
          "The Responsible AI Governance Framework establishes a practical, risk-proportionate governance model: defining ethical principles, operating procedures, review board charters, and automated testing evidence aligned with international standards."
        ],
        "targetAudience": "Chief Risk Officers, General Counsels, Data Protection Officers, Heads of AI Ethics, and Technology Compliance Leads."
      },
      "scope": [
        {
          "title": "Governance Principles & Operational Policy",
          "deliverables": "Ethical AI principles tailored to the enterprise, acceptable use guidelines, and policy definitions aligned with NIST AI RMF and ISO 42001.",
          "notIncluded": "Legal representation or formal statutory compliance certifications."
        },
        {
          "title": "AI Use-Case Register & Risk Rubric",
          "deliverables": "Standardised inventory register capturing all internal and external AI workloads, with tiered risk classifications (Low/Medium/High/Unacceptable).",
          "notIncluded": "Manual audit of non-AI operational legacy databases."
        },
        {
          "title": "AI Review Board Charter & Escalation Paths",
          "deliverables": "Terms of reference, stakeholder membership RACI, meeting cadences, and stage-gate approval workflows for new AI project inception.",
          "notIncluded": "Staffing external voting members for the customer's internal board."
        },
        {
          "title": "Evaluation Evidence & Transparency Standards",
          "deliverables": "Standardized evaluation scorecards for bias, toxicity, model accuracy, and prompt injection resilience testing.",
          "notIncluded": "Manual penetration testing of third-party proprietary foundation model backends."
        },
        {
          "title": "Operating Model Handover & Training",
          "deliverables": "Practical compliance checklists for development teams, executive briefings, and operational handover documentation.",
          "notIncluded": "Ongoing outsourced review board administration."
        }
      ],
      "applications": [
        {
          "title": "EU AI Act & Global Regulatory Preparedness",
          "scenario": "A multinational enterprise mapping customer-facing predictive scoring and generative models against high-risk regulatory obligations."
        },
        {
          "title": "Cross-Functional Review Board Setup",
          "scenario": "A healthcare provider establishing a multidisciplinary governance committee (Clinical, Legal, Engineering) to evaluate AI diagnostic assistants before clinical pilots."
        }
      ],
      "engagement": {
        "timeline": "About 6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1 week",
            "activities": "Mobilise team, align on regulatory exposure, and sign off governance framework charter."
          },
          {
            "name": "Foundation",
            "duration": "1 week",
            "activities": "Draft ethical principles, risk classification rubrics, and review board terms of reference."
          },
          {
            "name": "Build & Pilot",
            "duration": "2–3 weeks",
            "activities": "Pilot the governance process on 2–3 active AI initiatives; refine evaluation scorecards."
          },
          {
            "name": "Production",
            "duration": "1 week",
            "activities": "Publish organizational policy, operationalize the AI register, and formalize review board."
          },
          {
            "name": "Stabilise",
            "duration": "3–4 days",
            "activities": "Hypercare support during initial review cycles and compliance handover."
          }
        ],
        "prerequisites": [
          "Executive risk sponsor (CRO, CISO, or General Counsel) engaged to champion policy adoption.",
          "Participation of cross-functional representatives from Legal, Risk, Engineering, and Security.",
          "Initial inventory of planned or active generative AI proof-of-concepts across business units.",
          "Access to existing corporate data governance and information security policies."
        ],
        "faqs": [
          {
            "question": "Will this framework create burdensome bureaucracy that slows down engineering?",
            "answer": "No. The framework is strictly risk-proportionate: low-risk internal productivity tools undergo streamlined self-service reviews, reserving rigorous scrutiny for high-risk customer-facing models."
          },
          {
            "question": "How does this framework align with emerging regulations like the EU AI Act?",
            "answer": "Our framework aligns directly with the EU AI Act risk tiers, NIST AI Risk Management Framework (RMF 1.0), and ISO/IEC 42001, ensuring your documentation satisfies external regulatory audits."
          },
          {
            "question": "What tools are used to track the AI use-case register?",
            "answer": "The register is designed to integrate into your existing enterprise governance tooling—such as Microsoft Purview, ServiceNow, Power Apps, or secure Jira boards—avoiding proprietary vendor lock-in."
          }
        ]
      }
    }
  },
  {
    "code": "016",
    "title": "Shelf and Stock Monitoring with Vision AI",
    "slug": "shelf-and-stock-monitoring-with-vision-ai",
    "domain": "12 Predictive & Vision AI",
    "engagementType": "Implementation",
    "duration": "8 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/016-shelf-and-stock-monitoring-with-vision-ai/02-IaC/README.md",
      "hld": "Offerings/016-shelf-and-stock-monitoring-with-vision-ai/01-Design/HLD-016-Shelf_and_Stock_Monitoring_with_Vision_AI.docx",
      "lld": "Offerings/016-shelf-and-stock-monitoring-with-vision-ai/01-Design/LLD-016-Shelf_and_Stock_Monitoring_with_Vision_AI.docx",
      "sow": "Offerings/016-shelf-and-stock-monitoring-with-vision-ai/03-Sales-and-Delivery-Kit/016 - Statement of Work.docx",
      "wbs": "Offerings/016-shelf-and-stock-monitoring-with-vision-ai/03-Sales-and-Delivery-Kit/016 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Predictive & Vision AI",
    "heroKicker": "Predictive & Vision AI",
    "heroDescription": "Use cameras and vision AI to detect empty shelves, misplaced items and pricing errors in stores.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: forecasts rely on spreadsheets and judgement.",
          "Without a validated delivery methodology: sensor and camera data is stored but not used; and pilots do not reach production.",
          "The Shelf and Stock Monitoring with Vision AI engagement delivers a structured implementation blueprint designed to resolve these Predictive & Vision AI operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Supply Chain Director and Head of Data Science / OT Lead teams, particularly in retail, manufacturing, utilities and logistics."
      },
      "scope": [
        {
          "title": "Private Vision & MLOps Cloud Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet, Azure AI Vision, Azure Machine Learning workspace, Event Hubs namespace, private Storage Account, Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Purchase, physical installation, or cabling of store cameras and edge hardware."
        },
        {
          "title": "Edge Inference & Privacy-by-Design Pipeline",
          "deliverables": "Configuration of Azure IoT Edge / Arc local inference patterns for store cameras with automated people-blurring, exclusion rules, and limited image retention aligned to DPIA controls.",
          "notIncluded": "Authoring of organisational privacy policies, store signage, or formal DPIA documents."
        },
        {
          "title": "Shelf-Gap & Pricing Error Detection Models",
          "deliverables": "Training, evaluation, and deployment of custom computer vision models in Azure Machine Learning to detect empty shelves, misplaced items, and pricing discrepancies.",
          "notIncluded": "Changes to the platform landing zone hub or legacy ERP/POS system replacement."
        },
        {
          "title": "Store Alerting Integration & Handover",
          "deliverables": "Integration of actionable restocking and pricing alerts to store staff devices via Event Hubs, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Post-hypercare managed service operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 016 Shelf And Stock Monitoring With Vision Ai pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Predictive & Vision AI Rollout",
          "scenario": "Coordinated deployment of Shelf and Stock Monitoring with Vision AI across enterprise divisions, enabling cross-functional units to operationalise Predictive & Vision AI workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 8 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "017",
    "title": "Supply Chain and Inventory Agent",
    "slug": "supply-chain-and-inventory-agent",
    "domain": "04 Custom AI Agents",
    "engagementType": "Implementation",
    "duration": "8 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/017-supply-chain-and-inventory-agent/02-IaC/README.md",
      "hld": "Offerings/017-supply-chain-and-inventory-agent/01-Design/HLD-017-Supply_Chain_and_Inventory_Agent.docx",
      "lld": "Offerings/017-supply-chain-and-inventory-agent/01-Design/LLD-017-Supply_Chain_and_Inventory_Agent.docx",
      "sow": "Offerings/017-supply-chain-and-inventory-agent/03-Sales-and-Delivery-Kit/017 - Statement of Work.docx",
      "wbs": "Offerings/017-supply-chain-and-inventory-agent/03-Sales-and-Delivery-Kit/017 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Custom AI Agents",
    "heroKicker": "Custom AI Agents",
    "heroDescription": "Monitor stock levels, forecast shortages and propose replenishment orders for planners to approve.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: processes span several systems and hand-offs.",
          "Without a validated delivery methodology: early agent experiments use shared accounts and direct keys; and no tracing or approval steps for actions taken by ai.",
          "The Supply Chain and Inventory Agent engagement delivers a structured implementation blueprint designed to resolve these Custom AI Agents operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Head of Shared Services and Head of Engineering / Integration Architect teams, particularly in financial services, retail and logistics, public sector."
      },
      "scope": [
        {
          "title": "Private Agentic Landing Zone Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Cosmos DB serverless, Fabric capacity, Key Vault, and central monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Inventory & Demand Forecasting Integration",
          "deliverables": "Integration of the agent runtime with ERP inventory and sales data, supplier lead-time feeds, Microsoft Fabric, and demand forecasting model outputs through allow-listed API Management tools.",
          "notIncluded": "Cleansing or migration of legacy ERP databases."
        },
        {
          "title": "Replenishment Proposal & Planner Approval Workflow",
          "deliverables": "Build of the Supply Chain and Inventory Agent on Foundry Agent Service to detect stock-out risks and raise explained replenishment proposals in ERP workflows or Microsoft Teams for mandatory human planner approval.",
          "notIncluded": "Unattended autonomous purchase order execution without human sign-off."
        },
        {
          "title": "Agent Identity, Guardrails & Handover",
          "deliverables": "Dedicated Entra agent identity with least-privilege RBAC, Prompt Shields and tool allow-listing, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 017 Supply Chain And Inventory Agent pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Custom AI Agents Rollout",
          "scenario": "Coordinated deployment of Supply Chain and Inventory Agent across enterprise divisions, enabling cross-functional units to operationalise Custom AI Agents workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 8 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "018",
    "title": "Enterprise Chat Assistant (Private ChatGPT)",
    "slug": "enterprise-chat-assistant-private-chatgpt",
    "domain": "02 Generative AI Applications",
    "engagementType": "Implementation",
    "duration": "4–6 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/018-enterprise-chat-assistant-private-chatgpt/02-IaC/README.md",
      "hld": "Offerings/018-enterprise-chat-assistant-private-chatgpt/01-Design/HLD-018-Enterprise_Chat_Assistant_Private_ChatGPT.docx",
      "lld": "Offerings/018-enterprise-chat-assistant-private-chatgpt/01-Design/LLD-018-Enterprise_Chat_Assistant_Private_ChatGPT.docx",
      "sow": "Offerings/018-enterprise-chat-assistant-private-chatgpt/03-Sales-and-Delivery-Kit/018 - Statement of Work.docx",
      "wbs": "Offerings/018-enterprise-chat-assistant-private-chatgpt/03-Sales-and-Delivery-Kit/018 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Generative AI Applications",
    "heroKicker": "Generative AI Applications",
    "heroDescription": "Give staff a secure, private chat assistant on Azure OpenAI, so they stop pasting company data into public AI tools.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: staff use public ai tools with company data.",
          "Without a validated delivery methodology: proofs of concept are built without logging, evaluation or safety controls; and teams rebuild the same plumbing for every use case.",
          "The Enterprise Chat Assistant (Private ChatGPT) engagement delivers a structured implementation blueprint designed to resolve these Generative AI Applications operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Business Unit Director and Head of Engineering / AI Lead teams, particularly in professional services, public sector, retail."
      },
      "scope": [
        {
          "title": "Private Chat Landing Zone Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Azure AI Content Safety, Cosmos DB serverless, Storage Account, Key Vault, and central monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Enterprise Chat Web & Teams Interface",
          "deliverables": "Deployment of a private chat web application (and Teams front-end option) on Container Apps with Microsoft Entra ID single sign-on, file upload support, and clear AI-generated content notices.",
          "notIncluded": "Retrieval-augmented generation over internal SharePoint or enterprise document repositories."
        },
        {
          "title": "AI Gateway Rate Limits & Conversation History",
          "deliverables": "Configuration of an internal API Management AI gateway enforcing per-user usage and token quotas, alongside private Cosmos DB conversation history storage with configurable short retention limits.",
          "notIncluded": "Model fine-tuning or autonomous agent actions against back-office systems."
        },
        {
          "title": "Content Safety, Audit Logging & Handover",
          "deliverables": "Enablement of Azure AI Content Safety with Prompt Shields, restricted-access audit logging in Log Analytics, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 018 Enterprise Chat Assistant Private Chatgpt pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Generative AI Applications Rollout",
          "scenario": "Coordinated deployment of Enterprise Chat Assistant (Private ChatGPT) across enterprise divisions, enabling cross-functional units to operationalise Generative AI Applications workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "019",
    "title": "Customer Service Email Agent",
    "slug": "customer-service-email-agent",
    "domain": "04 Custom AI Agents",
    "engagementType": "Implementation",
    "duration": "6 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/019-customer-service-email-agent/02-IaC/README.md",
      "hld": "Offerings/019-customer-service-email-agent/01-Design/HLD-019-Customer_Service_Email_Agent.docx",
      "lld": "Offerings/019-customer-service-email-agent/01-Design/LLD-019-Customer_Service_Email_Agent.docx",
      "sow": "Offerings/019-customer-service-email-agent/03-Sales-and-Delivery-Kit/019 - Statement of Work.docx",
      "wbs": "Offerings/019-customer-service-email-agent/03-Sales-and-Delivery-Kit/019 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Custom AI Agents",
    "heroKicker": "Custom AI Agents",
    "heroDescription": "Read customer emails, gather information from back-office systems and prepare responses or resolve simple requests.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: processes span several systems and hand-offs.",
          "Without a validated delivery methodology: early agent experiments use shared accounts and direct keys; and no tracing or approval steps for actions taken by ai.",
          "The Customer Service Email Agent engagement delivers a structured implementation blueprint designed to resolve these Custom AI Agents operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Head of Shared Services and Head of Engineering / Integration Architect teams, particularly in financial services, retail and logistics, public sector."
      },
      "scope": [
        {
          "title": "Private Email Agent Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Azure AI Search, Cosmos DB serverless, Key Vault, and central monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Shared Mailbox & CRM Email Channel Integration",
          "deliverables": "Integration of the agent with shared customer service mailboxes and CRM queues to ingest inbound emails, classify intent, and draft or send responses.",
          "notIncluded": "Data cleansing or migration of historical email archives or CRM records."
        },
        {
          "title": "Read-Only Back-Office Lookups & Automation Boundaries",
          "deliverables": "Configuration of Foundry Agent Service with allow-listed read-only CRM and order-system API tools via internal API Management to ground responses and resolve agreed simple requests automatically.",
          "notIncluded": "Copilot Studio low-code agents or unrestricted write actions in back-office systems."
        },
        {
          "title": "Complaint & Vulnerable-Customer Routing + Handover",
          "deliverables": "Detection rules routing complaints, vulnerable customers, and out-of-bounds cases directly to human staff, alongside dedicated Entra agent identity, Prompt Shields, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 019 Customer Service Email Agent pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Custom AI Agents Rollout",
          "scenario": "Coordinated deployment of Customer Service Email Agent across enterprise divisions, enabling cross-functional units to operationalise Custom AI Agents workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "020",
    "title": "Purview DSPM for AI",
    "slug": "purview-dspm-for-ai",
    "domain": "08 AI Security",
    "engagementType": "Implementation",
    "duration": "3–4 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/020-purview-dspm-for-ai/02-IaC/README.md",
      "hld": "Offerings/020-purview-dspm-for-ai/01-Design/HLD-020-Purview_DSPM_for_AI.docx",
      "lld": "Offerings/020-purview-dspm-for-ai/01-Design/LLD-020-Purview_DSPM_for_AI.docx",
      "sow": "Offerings/020-purview-dspm-for-ai/03-Sales-and-Delivery-Kit/020 - Statement of Work.docx",
      "wbs": "Offerings/020-purview-dspm-for-ai/03-Sales-and-Delivery-Kit/020 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "AI Security",
    "heroKicker": "AI Security",
    "heroDescription": "Use Purview Data Security Posture Management for AI to see and control sensitive data in AI prompts and responses.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: AI services are not covered by specific threat detection.",
          "Without a validated delivery methodology: staff use unsanctioned ai tools; and no red-team testing before ai goes live.",
          "The Purview DSPM for AI engagement delivers a structured implementation blueprint designed to resolve these AI Security operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CISO and Security Architect / SOC Lead teams, particularly in financial services, public sector, healthcare."
      },
      "scope": [
        {
          "title": "Purview DSPM for AI Discovery & Monitoring",
          "deliverables": "Enablement of Microsoft Purview Data Security Posture Management (DSPM) for AI with recommended policies to monitor sensitive data exposure across Copilot and third-party AI interactions.",
          "notIncluded": "Security remediation for Microsoft 365 Copilot SharePoint content permissions."
        },
        {
          "title": "Endpoint & Browser DLP for Third-Party AI",
          "deliverables": "Configuration of Purview endpoint and browser Data Loss Prevention (DLP) policies covering third-party generative AI websites with coach-then-block enforcement.",
          "notIncluded": "Deployment of Azure PaaS infrastructure or changes to the platform landing zone."
        },
        {
          "title": "Insider Risk & Defender for Cloud AI Signals",
          "deliverables": "Integration of AI activity signals into Microsoft Purview Insider Risk Management alongside Defender for Cloud AI posture discovery and threat protection enablement.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "SOC Playbooks & Operational Handover",
          "deliverables": "Delivery of AI security incident triage guidance for SOC analysts, configuration acceptance log, and knowledge transfer.",
          "notIncluded": "Ongoing 24/7 managed SOC operations post-hypercare."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 020 Purview Dspm For Ai pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental AI Security Rollout",
          "scenario": "Coordinated deployment of Purview DSPM for AI across enterprise divisions, enabling cross-functional units to operationalise AI Security workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3–4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "021",
    "title": "Sales Account Research Agent",
    "slug": "sales-account-research-agent",
    "domain": "04 Custom AI Agents",
    "engagementType": "Implementation",
    "duration": "4–6 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/021-sales-account-research-agent/02-IaC/README.md",
      "hld": "Offerings/021-sales-account-research-agent/01-Design/HLD-021-Sales_Account_Research_Agent.docx",
      "lld": "Offerings/021-sales-account-research-agent/01-Design/LLD-021-Sales_Account_Research_Agent.docx",
      "sow": "Offerings/021-sales-account-research-agent/03-Sales-and-Delivery-Kit/021 - Statement of Work.docx",
      "wbs": "Offerings/021-sales-account-research-agent/03-Sales-and-Delivery-Kit/021 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Custom AI Agents",
    "heroKicker": "Custom AI Agents",
    "heroDescription": "Prepare account briefs for sales teams from CRM data, public information and past interactions.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: processes span several systems and hand-offs.",
          "Without a validated delivery methodology: early agent experiments use shared accounts and direct keys; and no tracing or approval steps for actions taken by ai.",
          "The Sales Account Research Agent engagement delivers a structured implementation blueprint designed to resolve these Custom AI Agents operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Head of Shared Services and Head of Engineering / Integration Architect teams, particularly in financial services, retail and logistics, public sector."
      },
      "scope": [
        {
          "title": "Private Agentic Infrastructure & Gateway",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Cosmos DB serverless, Key Vault, and central monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Permission-Aware CRM & Web Research Tools",
          "deliverables": "Integration of Dynamics 365 or Salesforce APIs respecting the signing-in user's CRM permissions, paired with allow-listed approved web search tools via internal API Management.",
          "notIncluded": "Unrestricted internet scraping or cleansing of legacy CRM account records."
        },
        {
          "title": "Sales Account Research Agent & Brief Publishing",
          "deliverables": "Build of the Foundry Agent Service workflow generating standardised account briefs with cited external facts and saving approved briefs back to the CRM record.",
          "notIncluded": "Copilot Studio low-code agents or autonomous customer outreach."
        },
        {
          "title": "Agent Identity, Guardrails & Handover",
          "deliverables": "Dedicated Entra agent identity, Prompt Shields content filtering, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 021 Sales Account Research Agent pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Custom AI Agents Rollout",
          "scenario": "Coordinated deployment of Sales Account Research Agent across enterprise divisions, enabling cross-functional units to operationalise Custom AI Agents workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "022",
    "title": "Agent Identity and Access Management",
    "slug": "agent-identity-and-access-management",
    "domain": "05 Agent Governance",
    "engagementType": "Implementation",
    "duration": "4–5 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/022-agent-identity-and-access-management/02-IaC/README.md",
      "hld": "Offerings/022-agent-identity-and-access-management/01-Design/HLD-022-Agent_Identity_and_Access_Management.docx",
      "lld": "Offerings/022-agent-identity-and-access-management/01-Design/LLD-022-Agent_Identity_and_Access_Management.docx",
      "sow": "Offerings/022-agent-identity-and-access-management/03-Sales-and-Delivery-Kit/022 - Statement of Work.docx",
      "wbs": "Offerings/022-agent-identity-and-access-management/03-Sales-and-Delivery-Kit/022 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Agent Governance",
    "heroKicker": "Agent Governance",
    "heroDescription": "Give every agent its own Entra identity with least-privilege access, Conditional Access and regular reviews.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: Agents are being built in several tools with no inventory.",
          "Without a validated delivery methodology: owners leave and agents become orphaned; and Agent access to data is not reviewed.",
          "The Agent Identity and Access Management engagement delivers a structured implementation blueprint designed to resolve these Agent Governance operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CIO / CISO and Identity and Access Lead / Microsoft 365 Architect teams, particularly in financial services, public sector, healthcare."
      },
      "scope": [
        {
          "title": "Supporting Security Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet, Private Endpoints, Microsoft Foundry, Premium Key Vault, and Log Analytics monitoring for governed agent identity patterns.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Dedicated Entra Agent Identity Model",
          "deliverables": "Implementation of a one-identity-per-agent architecture using Microsoft Entra Agent ID or managed identities, eliminating shared service accounts and embedded secrets.",
          "notIncluded": "Building individual custom or Copilot Studio agents."
        },
        {
          "title": "Conditional Access & Quarterly Access Reviews",
          "deliverables": "Configuration of Conditional Access policies for agent sign-ins where supported alongside automated quarterly owner-attested access reviews for agent permissions.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Agent 365 & Purview Audit Alignment",
          "deliverables": "Integration with Microsoft Agent 365 inventory ownership and Purview audit logging, plus handover of identity lifecycle runbooks.",
          "notIncluded": "Post-hypercare managed identity operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 022 Agent Identity And Access Management pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Agent Governance Rollout",
          "scenario": "Coordinated deployment of Agent Identity and Access Management across enterprise divisions, enabling cross-functional units to operationalise Agent Governance workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–5 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "023",
    "title": "HR Onboarding Agent",
    "slug": "hr-onboarding-agent",
    "domain": "04 Custom AI Agents",
    "engagementType": "Implementation",
    "duration": "6 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/023-hr-onboarding-agent/02-IaC/README.md",
      "hld": "Offerings/023-hr-onboarding-agent/01-Design/HLD-023-HR_Onboarding_Agent.docx",
      "lld": "Offerings/023-hr-onboarding-agent/01-Design/LLD-023-HR_Onboarding_Agent.docx",
      "sow": "Offerings/023-hr-onboarding-agent/03-Sales-and-Delivery-Kit/023 - Statement of Work.docx",
      "wbs": "Offerings/023-hr-onboarding-agent/03-Sales-and-Delivery-Kit/023 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Custom AI Agents",
    "heroKicker": "Custom AI Agents",
    "heroDescription": "Guide new starters through onboarding: tasks, equipment, accounts, training and first-week questions.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: processes span several systems and hand-offs.",
          "Without a validated delivery methodology: early agent experiments use shared accounts and direct keys; and no tracing or approval steps for actions taken by ai.",
          "The HR Onboarding Agent engagement delivers a structured implementation blueprint designed to resolve these Custom AI Agents operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Head of Shared Services and Head of Engineering / Integration Architect teams, particularly in financial services, retail and logistics, public sector."
      },
      "scope": [
        {
          "title": "Private Agentic Infrastructure & Gateway",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Cosmos DB serverless, Key Vault, and central monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "HR System & ITSM Tool Integration",
          "deliverables": "Allow-listed API Management integrations connecting the agent to HR onboarding task records and ITSM workflows for equipment and account requests.",
          "notIncluded": "Rebuilding core HRIS or ITSM platforms or migrating historical employee records."
        },
        {
          "title": "Teams New-Starter Journey & Manager Progress View",
          "deliverables": "Configuration of the HR Onboarding Agent delivering scheduled new-starter guidance in Microsoft Teams alongside a manager visibility view of onboarding task completion.",
          "notIncluded": "Autonomous provisioning of privileged access without human approval."
        },
        {
          "title": "Agent Identity, Guardrails & Handover",
          "deliverables": "Dedicated Entra agent identity, Prompt Shields content filtering, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational HR policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 023 Hr Onboarding Agent pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Custom AI Agents Rollout",
          "scenario": "Coordinated deployment of HR Onboarding Agent across enterprise divisions, enabling cross-functional units to operationalise Custom AI Agents workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "024",
    "title": "Agent 365 Readiness Assessment",
    "slug": "agent-365-readiness-assessment",
    "domain": "05 Agent Governance",
    "engagementType": "Assessment",
    "duration": "3 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/024-agent-365-readiness-assessment/02-IaC/README.md",
      "hld": "Offerings/024-agent-365-readiness-assessment/01-Design/HLD-024-Agent_365_Readiness_Assessment.docx",
      "lld": "Offerings/024-agent-365-readiness-assessment/01-Design/LLD-024-Agent_365_Readiness_Assessment.docx",
      "sow": "Offerings/024-agent-365-readiness-assessment/03-Sales-and-Delivery-Kit/024 - Statement of Work.docx",
      "wbs": "Offerings/024-agent-365-readiness-assessment/03-Sales-and-Delivery-Kit/024 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Agent Governance",
    "heroKicker": "Agent Governance",
    "heroDescription": "Assess the organisation's readiness to govern agents at scale with Microsoft Agent 365, covering licences, identity, data protection and processes.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: Agents are being built in several tools with no inventory.",
          "Without a validated delivery methodology: owners leave and agents become orphaned; and Agent access to data is not reviewed.",
          "The Agent 365 Readiness Assessment engagement delivers a structured assessment blueprint designed to resolve these Agent Governance operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CIO / CISO and Identity and Access Lead / Microsoft 365 Architect teams, particularly in financial services, public sector, healthcare."
      },
      "scope": [
        {
          "title": "Cross-Platform Agent Discovery",
          "deliverables": "Read-only discovery across Power Platform admin centre, Microsoft 365 admin centre, Agent 365, Microsoft Foundry, Defender, and Microsoft Graph to compile a complete inventory of existing and shadow agents.",
          "notIncluded": "Building or remediating individual custom or Copilot Studio agents."
        },
        {
          "title": "Five-Area Governance Readiness Evaluation",
          "deliverables": "Structured technical and workshop review across Inventory, Identity, Data, Threat Protection, and Process domains mapped to Microsoft Agent 365 capabilities.",
          "notIncluded": "Changes to platform landing zone subscriptions or Azure network infrastructure."
        },
        {
          "title": "Identity, Purview & Defender Configuration Review",
          "deliverables": "Read-only inspection of Entra ID sign-in and app registration reports, Purview audit logs, and Defender posture settings for agent identities and data access.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Costed Governance Roadmap & Handover",
          "deliverables": "Findings register with supporting evidence, ranked risks, and a costed implementation plan (quick wins, 90 days, 12 months) presented to leadership.",
          "notIncluded": "Post-assessment implementation or ongoing managed services."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 024 Agent 365 Readiness Assessment pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Agent Governance Rollout",
          "scenario": "Coordinated deployment of Agent 365 Readiness Assessment across enterprise divisions, enabling cross-functional units to operationalise Agent Governance workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Mobilise",
            "duration": "1–2 weeks",
            "activities": "Agree scope, stakeholders and access."
          },
          {
            "name": "Discover",
            "duration": "1 week",
            "activities": "Interviews, workshops and technical evidence gathering."
          },
          {
            "name": "Analyse",
            "duration": "1–2 weeks",
            "activities": "Score findings, identify gaps and options."
          },
          {
            "name": "Report",
            "duration": "1 week",
            "activities": "Present findings, prioritised recommendations and roadmap."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "025",
    "title": "Microsoft 365 Copilot Extensibility (Agents and Connectors)",
    "slug": "microsoft-365-copilot-extensibility-agents-and-connectors",
    "domain": "06 Copilot Studio Agents",
    "engagementType": "Implementation",
    "duration": "4–6 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/025-microsoft-365-copilot-extensibility-agents-and-connectors/02-IaC/README.md",
      "hld": "Offerings/025-microsoft-365-copilot-extensibility-agents-and-connectors/01-Design/HLD-025-Microsoft_365_Copilot_Extensibility_Agents_and_Connectors.docx",
      "lld": "Offerings/025-microsoft-365-copilot-extensibility-agents-and-connectors/01-Design/LLD-025-Microsoft_365_Copilot_Extensibility_Agents_and_Connectors.docx",
      "sow": "Offerings/025-microsoft-365-copilot-extensibility-agents-and-connectors/03-Sales-and-Delivery-Kit/025 - Statement of Work.docx",
      "wbs": "Offerings/025-microsoft-365-copilot-extensibility-agents-and-connectors/03-Sales-and-Delivery-Kit/025 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Copilot Studio Agents",
    "heroKicker": "Copilot Studio Agents",
    "heroDescription": "Extend Microsoft 365 Copilot with declarative agents and Copilot connectors so it can use the organisation's line-of-business data.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: one shared power platform environment with weak data loss prevention.",
          "Without a validated delivery methodology: Agents published without testing or ownership; and makers connect to unapproved data sources.",
          "The Microsoft 365 Copilot Extensibility (Agents and Connectors) engagement delivers a structured implementation blueprint designed to resolve these Copilot Studio Agents operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Head of Digital Workplace / HR Director and Power Platform Lead / Microsoft 365 Architect teams, particularly in public sector, retail, education."
      },
      "scope": [
        {
          "title": "Power Platform Managed Environments & API Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Key Vault, and Log Analytics alongside separate dev, test, and production Power Platform Managed Environments with DLP policies.",
          "notIncluded": "Power Apps or Power Automate solutions that do not include agents."
        },
        {
          "title": "ACL-Trimmed Microsoft 365 Copilot Connectors",
          "deliverables": "Configuration of Microsoft 365 Copilot connectors indexing external business content with access-control lists (ACLs) so answers respect source system permissions.",
          "notIncluded": "Pro-code autonomous agents built on Azure Foundry Agent Service."
        },
        {
          "title": "Role-Specific Declarative Agents & APIM Plugins",
          "deliverables": "Build of declarative Copilot agents for priority roles consuming internal API Management-hosted API plugins over private VNet connectivity where supported.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Maker Governance & Operational Handover",
          "deliverables": "Support model defining maker guardrails, Deny-mode Azure Policies, operational runbooks, and knowledge transfer.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 025 Microsoft 365 Copilot Extensibility Agents And Connectors pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Copilot Studio Agents Rollout",
          "scenario": "Coordinated deployment of Microsoft 365 Copilot Extensibility (Agents and Connectors) across enterprise divisions, enabling cross-functional units to operationalise Copilot Studio Agents workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "026",
    "title": "Marketing and Product Content Generation",
    "slug": "marketing-and-product-content-generation",
    "domain": "02 Generative AI Applications",
    "engagementType": "Implementation",
    "duration": "4 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/026-marketing-and-product-content-generation/02-IaC/README.md",
      "hld": "Offerings/026-marketing-and-product-content-generation/01-Design/HLD-026-Marketing_and_Product_Content_Generation.docx",
      "lld": "Offerings/026-marketing-and-product-content-generation/01-Design/LLD-026-Marketing_and_Product_Content_Generation.docx",
      "sow": "Offerings/026-marketing-and-product-content-generation/03-Sales-and-Delivery-Kit/026 - Statement of Work.docx",
      "wbs": "Offerings/026-marketing-and-product-content-generation/03-Sales-and-Delivery-Kit/026 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Generative AI Applications",
    "heroKicker": "Generative AI Applications",
    "heroDescription": "Generate product descriptions, campaign copy and social posts in the organisation's brand voice, with human review before publishing.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: staff use public ai tools with company data.",
          "Without a validated delivery methodology: proofs of concept are built without logging, evaluation or safety controls; and teams rebuild the same plumbing for every use case.",
          "The Marketing and Product Content Generation engagement delivers a structured implementation blueprint designed to resolve these Generative AI Applications operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Business Unit Director and Head of Engineering / AI Lead teams, particularly in professional services, public sector, retail."
      },
      "scope": [
        {
          "title": "Private Content Generation Landing Zone",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Azure AI Content Safety, Storage Account, Key Vault, and central monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Brand-Grounded Draft Generator",
          "deliverables": "Configuration of an Azure OpenAI content generator on Microsoft Foundry grounded in approved brand guidelines and product facts from your PIM or product catalogue.",
          "notIncluded": "Enterprise-wide document RAG or autonomous action agents."
        },
        {
          "title": "Safety, Brand Checks & Human Approval Workflow",
          "deliverables": "Implementation of automated content-safety and brand-guideline checks paired with a Power Automate or app review workflow ensuring zero content is published to CMS or PIM without human approval.",
          "notIncluded": "Model fine-tuning unless separately agreed, or cleansing of legacy PIM catalogues."
        },
        {
          "title": "Audit Logging, Guardrails & Handover",
          "deliverables": "Restricted-access prompt/response audit logging, AI-generated content labelling, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 026 Marketing And Product Content Generation pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Generative AI Applications Rollout",
          "scenario": "Coordinated deployment of Marketing and Product Content Generation across enterprise divisions, enabling cross-functional units to operationalise Generative AI Applications workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "027",
    "title": "Retail Product Description Generator",
    "slug": "retail-product-description-generator",
    "domain": "02 Generative AI Applications",
    "engagementType": "Implementation",
    "duration": "3–4 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/027-retail-product-description-generator/02-IaC/README.md",
      "hld": "Offerings/027-retail-product-description-generator/01-Design/HLD-027-Retail_Product_Description_Generator.docx",
      "lld": "Offerings/027-retail-product-description-generator/01-Design/LLD-027-Retail_Product_Description_Generator.docx",
      "sow": "Offerings/027-retail-product-description-generator/03-Sales-and-Delivery-Kit/027 - Statement of Work.docx",
      "wbs": "Offerings/027-retail-product-description-generator/03-Sales-and-Delivery-Kit/027 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Generative AI Applications",
    "heroKicker": "Generative AI Applications",
    "heroDescription": "Generate SEO-friendly product titles and descriptions at scale from product attributes and images.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: staff use public ai tools with company data.",
          "Without a validated delivery methodology: proofs of concept are built without logging, evaluation or safety controls; and teams rebuild the same plumbing for every use case.",
          "The Retail Product Description Generator engagement delivers a structured implementation blueprint designed to resolve these Generative AI Applications operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Business Unit Director and Head of Engineering / AI Lead teams, particularly in professional services, public sector, retail."
      },
      "scope": [
        {
          "title": "Private Vision-Capable Generation Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Storage Account, Key Vault, and central monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "PIM Attribute & Product Image Ingestion",
          "deliverables": "Integration with your Product Information Management (PIM) system to ingest verified product attributes and product images for multimodal grounding.",
          "notIncluded": "Cleansing or photography of legacy product catalogue assets."
        },
        {
          "title": "Channel-Templated & Batch Description Generator",
          "deliverables": "Configuration of vision-capable Azure OpenAI generation using channel-specific templates controlling tone and length, with event-driven batch generation triggered when new products are added.",
          "notIncluded": "Enterprise document RAG, autonomous agents, or model fine-tuning."
        },
        {
          "title": "Approval Write-Back, Guardrails & Handover",
          "deliverables": "Controlled write-back of approved titles and descriptions to PIM or e-commerce APIs, restricted audit logging, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 027 Retail Product Description Generator pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Generative AI Applications Rollout",
          "scenario": "Coordinated deployment of Retail Product Description Generator across enterprise divisions, enabling cross-functional units to operationalise Generative AI Applications workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3–4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "028",
    "title": "Regulatory and Legal Research Assistant",
    "slug": "regulatory-and-legal-research-assistant",
    "domain": "03 RAG & Document Intelligence",
    "engagementType": "Implementation",
    "duration": "4–6 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/028-regulatory-and-legal-research-assistant/02-IaC/README.md",
      "hld": "Offerings/028-regulatory-and-legal-research-assistant/01-Design/HLD-028-Regulatory_and_Legal_Research_Assistant.docx",
      "lld": "Offerings/028-regulatory-and-legal-research-assistant/01-Design/LLD-028-Regulatory_and_Legal_Research_Assistant.docx",
      "sow": "Offerings/028-regulatory-and-legal-research-assistant/03-Sales-and-Delivery-Kit/028 - Statement of Work.docx",
      "wbs": "Offerings/028-regulatory-and-legal-research-assistant/03-Sales-and-Delivery-Kit/028 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "RAG & Document Intelligence",
    "heroKicker": "RAG & Document Intelligence",
    "heroDescription": "Search regulations, guidance and internal interpretations, and answer compliance questions with precise citations.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: knowledge is spread across sharepoint, file shares and systems.",
          "Without a validated delivery methodology: keyword search returns too many or wrong results; and manual keying of document data is slow and error-prone.",
          "The Regulatory and Legal Research Assistant engagement delivers a structured implementation blueprint designed to resolve these RAG & Document Intelligence operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Head of Operations / Knowledge Management Lead and Solution Architect / Data Lead teams, particularly in legal and professional services, insurance, public sector."
      },
      "scope": [
        {
          "title": "Private Regulatory RAG Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Azure AI Search, Container Apps, Storage Account, Key Vault, and central monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Section-Level Regulatory & Interpretation Indexing",
          "deliverables": "Structure-aware ingestion using Azure AI Document Intelligence to index regulator websites and legal libraries at section level, indexing internal compliance-approved interpretations separately with clear labels.",
          "notIncluded": "Cleansing or migration of legacy legal archives."
        },
        {
          "title": "Security-Trimmed Research & Citation Interface",
          "deliverables": "Web-based Q&A interface with Azure AI Search semantic ranking, document ACL security trimming, change monitoring, and answers distinguishing exact regulation citations from approved internal interpretations.",
          "notIncluded": "Generative applications without retrieval or legal advice sign-off."
        },
        {
          "title": "Guardrails, Evaluation & Handover",
          "deliverables": "Prompt Shields content filtering, retrieval citation verification, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 028 Regulatory And Legal Research Assistant pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental RAG & Document Intelligence Rollout",
          "scenario": "Coordinated deployment of Regulatory and Legal Research Assistant across enterprise divisions, enabling cross-functional units to operationalise RAG & Document Intelligence workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "029",
    "title": "Tender and RFP Content Library",
    "slug": "tender-and-rfp-content-library",
    "domain": "03 RAG & Document Intelligence",
    "engagementType": "Implementation",
    "duration": "3–4 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/029-tender-and-rfp-content-library/02-IaC/README.md",
      "hld": "Offerings/029-tender-and-rfp-content-library/01-Design/HLD-029-Tender_and_RFP_Content_Library.docx",
      "lld": "Offerings/029-tender-and-rfp-content-library/01-Design/LLD-029-Tender_and_RFP_Content_Library.docx",
      "sow": "Offerings/029-tender-and-rfp-content-library/03-Sales-and-Delivery-Kit/029 - Statement of Work.docx",
      "wbs": "Offerings/029-tender-and-rfp-content-library/03-Sales-and-Delivery-Kit/029 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "RAG & Document Intelligence",
    "heroKicker": "RAG & Document Intelligence",
    "heroDescription": "Build a searchable, governed library of approved company content, case studies and certifications for sales and bid teams.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: knowledge is spread across sharepoint, file shares and systems.",
          "Without a validated delivery methodology: keyword search returns too many or wrong results; and manual keying of document data is slow and error-prone.",
          "The Tender and RFP Content Library engagement delivers a structured implementation blueprint designed to resolve these RAG & Document Intelligence operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Head of Operations / Knowledge Management Lead and Solution Architect / Data Lead teams, particularly in legal and professional services, insurance, public sector."
      },
      "scope": [
        {
          "title": "Private Search & Embedding Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint subnet), Microsoft Foundry embedding deployments, Azure AI Search, Storage Account, Key Vault, and central monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Metadata-Governed SharePoint Content Repository",
          "deliverables": "Structuring of the SharePoint tender and RFP repository with mandatory owner, topic, and review-date metadata so content governance is enforced at source.",
          "notIncluded": "Rewriting or cleansing historical tender responses."
        },
        {
          "title": "Semantic Search & Expiry Filtering",
          "deliverables": "Configuration of Azure AI Search with semantic ranking, Document Intelligence extraction, document ACL security trimming, and automatic hiding of expired or unreviewed content.",
          "notIncluded": "Generative applications without retrieval or full CRM bid-management replacement."
        },
        {
          "title": "Guardrails, Evaluation & Handover",
          "deliverables": "Source-citation verification, Deny-mode Azure Policy enforcement, operational runbooks, and knowledge transfer.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 029 Tender And Rfp Content Library pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental RAG & Document Intelligence Rollout",
          "scenario": "Coordinated deployment of Tender and RFP Content Library across enterprise divisions, enabling cross-functional units to operationalise RAG & Document Intelligence workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3–4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "030",
    "title": "Finance Reconciliation Agent",
    "slug": "finance-reconciliation-agent",
    "domain": "04 Custom AI Agents",
    "engagementType": "Implementation",
    "duration": "8 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/030-finance-reconciliation-agent/02-IaC/README.md",
      "hld": "Offerings/030-finance-reconciliation-agent/01-Design/HLD-030-Finance_Reconciliation_Agent.docx",
      "lld": "Offerings/030-finance-reconciliation-agent/01-Design/LLD-030-Finance_Reconciliation_Agent.docx",
      "sow": "Offerings/030-finance-reconciliation-agent/03-Sales-and-Delivery-Kit/030 - Statement of Work.docx",
      "wbs": "Offerings/030-finance-reconciliation-agent/03-Sales-and-Delivery-Kit/030 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Custom AI Agents",
    "heroKicker": "Custom AI Agents",
    "heroDescription": "Match transactions across bank statements, ledgers and invoices, explain mismatches and prepare adjustments for approval.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: processes span several systems and hand-offs.",
          "Without a validated delivery methodology: early agent experiments use shared accounts and direct keys; and no tracing or approval steps for actions taken by ai.",
          "The Finance Reconciliation Agent engagement delivers a structured implementation blueprint designed to resolve these Custom AI Agents operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Head of Shared Services and Head of Engineering / Integration Architect teams, particularly in financial services, retail and logistics, public sector."
      },
      "scope": [
        {
          "title": "Private Financial Agent Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Cosmos DB serverless, Storage Account, Key Vault, and central monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Read-Only ERP & Bank Feed Integration",
          "deliverables": "Integration of the agent with ERP ledgers and bank statement feeds strictly through allow-listed read-only tools published on internal API Management.",
          "notIncluded": "Cleansing of legacy general ledger records or ERP platform upgrades."
        },
        {
          "title": "Rules-First Matching & Exception Explanation",
          "deliverables": "Build of the Finance Reconciliation Agent on Foundry Agent Service combining deterministic matching rules with AI exception analysis and full reasoning audit trails.",
          "notIncluded": "Autonomous posting of journal adjustments without human finance approval."
        },
        {
          "title": "Finance Approval Workflow & Handover",
          "deliverables": "Power Automate or ERP approval workflow routing proposed adjustments to finance controllers, dedicated Entra agent identity, Deny-mode policies, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 030 Finance Reconciliation Agent pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Custom AI Agents Rollout",
          "scenario": "Coordinated deployment of Finance Reconciliation Agent across enterprise divisions, enabling cross-functional units to operationalise Custom AI Agents workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 8 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "031",
    "title": "LLMOps and Evaluation Pipeline",
    "slug": "llmops-and-evaluation-pipeline",
    "domain": "11 MLOps & LLMOps",
    "engagementType": "Implementation",
    "duration": "4 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/031-llmops-and-evaluation-pipeline/02-IaC/README.md",
      "hld": "Offerings/031-llmops-and-evaluation-pipeline/01-Design/HLD-031-LLMOps_and_Evaluation_Pipeline.docx",
      "lld": "Offerings/031-llmops-and-evaluation-pipeline/01-Design/LLD-031-LLMOps_and_Evaluation_Pipeline.docx",
      "sow": "Offerings/031-llmops-and-evaluation-pipeline/03-Sales-and-Delivery-Kit/031 - Statement of Work.docx",
      "wbs": "Offerings/031-llmops-and-evaluation-pipeline/03-Sales-and-Delivery-Kit/031 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "MLOps & LLMOps",
    "heroKicker": "MLOps & LLMOps",
    "heroDescription": "Bring software discipline to generative AI: versioned prompts, automated evaluation and controlled releases.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: models are deployed by hand from notebooks.",
          "Without a validated delivery methodology: prompts are not versioned or tested; and nobody notices when model quality drifts.",
          "The LLMOps and Evaluation Pipeline engagement delivers a structured implementation blueprint designed to resolve these MLOps & LLMOps operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Chief Data Officer / Head of Analytics and ML Engineering Lead / Platform Engineer teams, particularly in financial services, retail, manufacturing."
      },
      "scope": [
        {
          "title": "Private Evaluation Landing Zone Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint subnet), Microsoft Foundry account and project, private Storage Account, Premium Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Versioned Prompts & Golden Test Sets",
          "deliverables": "Structuring of Git source control for prompt templates, model configurations, and curated evaluation datasets so every change is repeatable, reviewed, and reversible.",
          "notIncluded": "Training foundation models from scratch or authoring domain-specific test datasets."
        },
        {
          "title": "Automated Foundry Evaluation & Regression Gates",
          "deliverables": "Configuration of Microsoft Foundry evaluation pipelines measuring groundedness, relevance, safety, and regression thresholds on every pull request.",
          "notIncluded": "Building end-user generative applications or custom UI front ends."
        },
        {
          "title": "CI/CD Release Pipelines & Drift Monitoring",
          "deliverables": "GitHub Actions or Azure DevOps release pipelines enforcing evaluation gates prior to promotion, continuous quality/cost telemetry, Deny-mode policies, and operational runbooks.",
          "notIncluded": "Post-hypercare managed service operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 031 Llmops And Evaluation Pipeline pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental MLOps & LLMOps Rollout",
          "scenario": "Coordinated deployment of LLMOps and Evaluation Pipeline across enterprise divisions, enabling cross-functional units to operationalise MLOps & LLMOps workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "032",
    "title": "GPU and AI Compute Platform",
    "slug": "gpu-and-ai-compute-platform",
    "domain": "11 MLOps & LLMOps",
    "engagementType": "Implementation",
    "duration": "6–8 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/032-gpu-and-ai-compute-platform/02-IaC/README.md",
      "hld": "Offerings/032-gpu-and-ai-compute-platform/01-Design/HLD-032-GPU_and_AI_Compute_Platform.docx",
      "lld": "Offerings/032-gpu-and-ai-compute-platform/01-Design/LLD-032-GPU_and_AI_Compute_Platform.docx",
      "sow": "Offerings/032-gpu-and-ai-compute-platform/03-Sales-and-Delivery-Kit/032 - Statement of Work.docx",
      "wbs": "Offerings/032-gpu-and-ai-compute-platform/03-Sales-and-Delivery-Kit/032 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "MLOps & LLMOps",
    "heroKicker": "MLOps & LLMOps",
    "heroDescription": "Provide shared GPU compute on AKS or Azure Machine Learning for training, fine-tuning and self-hosted models.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: models are deployed by hand from notebooks.",
          "Without a validated delivery methodology: prompts are not versioned or tested; and nobody notices when model quality drifts.",
          "The GPU and AI Compute Platform engagement delivers a structured implementation blueprint designed to resolve these MLOps & LLMOps operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Chief Data Officer / Head of Analytics and ML Engineering Lead / Platform Engineer teams, particularly in financial services, retail, manufacturing."
      },
      "scope": [
        {
          "title": "Private GPU Compute & AKS/AML Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint and AKS subnets), private AKS cluster with scale-to-zero GPU node pools, private Azure Machine Learning workspace, dedicated ML storage, Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Fair-Share Scheduling & Team Quotas",
          "deliverables": "Configuration of Kueue job queueing, priority classes, and AML workspace compute quotas to share GPU capacity fairly across data science and AI teams.",
          "notIncluded": "Azure GPU quota procurement or training foundation models from scratch."
        },
        {
          "title": "Self-Hosted Model Serving (KAITO / vLLM)",
          "deliverables": "Deployment of KAITO or vLLM inference serving patterns on AKS GPU pools with gateway integration, scale-to-zero idle controls, and private network isolation.",
          "notIncluded": "Building domain-specific ML models or end-user applications."
        },
        {
          "title": "Team Chargeback, Guardrails & Handover",
          "deliverables": "Per-team usage and cost attribution telemetry, Deny-mode Azure Policy enforcement, operational runbooks, and knowledge transfer.",
          "notIncluded": "Post-hypercare managed service operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 032 Gpu And Ai Compute Platform pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental MLOps & LLMOps Rollout",
          "scenario": "Coordinated deployment of GPU and AI Compute Platform across enterprise divisions, enabling cross-functional units to operationalise MLOps & LLMOps workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 6–8 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "033",
    "title": "Visual Quality Inspection",
    "slug": "visual-quality-inspection",
    "domain": "12 Predictive & Vision AI",
    "engagementType": "Implementation",
    "duration": "8 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/033-visual-quality-inspection/02-IaC/README.md",
      "hld": "Offerings/033-visual-quality-inspection/01-Design/HLD-033-Visual_Quality_Inspection.docx",
      "lld": "Offerings/033-visual-quality-inspection/01-Design/LLD-033-Visual_Quality_Inspection.docx",
      "sow": "Offerings/033-visual-quality-inspection/03-Sales-and-Delivery-Kit/033 - Statement of Work.docx",
      "wbs": "Offerings/033-visual-quality-inspection/03-Sales-and-Delivery-Kit/033 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Predictive & Vision AI",
    "heroKicker": "Predictive & Vision AI",
    "heroDescription": "Detect product defects on production lines with vision AI to improve quality and reduce waste.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: forecasts rely on spreadsheets and judgement.",
          "Without a validated delivery methodology: sensor and camera data is stored but not used; and pilots do not reach production.",
          "The Visual Quality Inspection engagement delivers a structured implementation blueprint designed to resolve these Predictive & Vision AI operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Supply Chain Director and Head of Data Science / OT Lead teams, particularly in retail, manufacturing, utilities and logistics."
      },
      "scope": [
        {
          "title": "Private Cloud Vision & MLOps Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint subnet), Azure AI Vision, Azure Machine Learning workspace, Event Hubs namespace, private Storage Account, Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Purchase or physical installation of factory cameras, lighting, or edge GPU appliances."
        },
        {
          "title": "Edge-First Line Inference Pipeline",
          "deliverables": "Configuration of Azure IoT Edge local inference on line-side GPU devices so defect detection runs at production line speed without cloud latency.",
          "notIncluded": "Changes to the platform landing zone hub or PLC/line hardware modification."
        },
        {
          "title": "Cloud Retraining Loop & Operator Feedback",
          "deliverables": "Streaming of defect images and telemetry via private Event Hubs into Azure Machine Learning for continuous model retraining and operator-feedback-driven improvement.",
          "notIncluded": "Replacing core Manufacturing Execution Systems (MES)."
        },
        {
          "title": "MES Integration, Guardrails & Handover",
          "deliverables": "Integration of inspection quality records with the MES API, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 033 Visual Quality Inspection pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Predictive & Vision AI Rollout",
          "scenario": "Coordinated deployment of Visual Quality Inspection across enterprise divisions, enabling cross-functional units to operationalise Predictive & Vision AI workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 8 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "034",
    "title": "IT Knowledge Base Assistant",
    "slug": "it-knowledge-base-assistant",
    "domain": "03 RAG & Document Intelligence",
    "engagementType": "Implementation",
    "duration": "3–4 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/034-it-knowledge-base-assistant/02-IaC/README.md",
      "hld": "Offerings/034-it-knowledge-base-assistant/01-Design/HLD-034-IT_Knowledge_Base_Assistant.docx",
      "lld": "Offerings/034-it-knowledge-base-assistant/01-Design/LLD-034-IT_Knowledge_Base_Assistant.docx",
      "sow": "Offerings/034-it-knowledge-base-assistant/03-Sales-and-Delivery-Kit/034 - Statement of Work.docx",
      "wbs": "Offerings/034-it-knowledge-base-assistant/03-Sales-and-Delivery-Kit/034 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "RAG & Document Intelligence",
    "heroKicker": "RAG & Document Intelligence",
    "heroDescription": "Help service desk staff and users find answers in IT knowledge articles and past tickets.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: knowledge is spread across sharepoint, file shares and systems.",
          "Without a validated delivery methodology: keyword search returns too many or wrong results; and manual keying of document data is slow and error-prone.",
          "The IT Knowledge Base Assistant engagement delivers a structured implementation blueprint designed to resolve these RAG & Document Intelligence operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Head of Operations / Knowledge Management Lead and Solution Architect / Data Lead teams, particularly in legal and professional services, insurance, public sector."
      },
      "scope": [
        {
          "title": "Private IT Knowledge RAG Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Azure AI Search, Container Apps, Storage Account, Key Vault, and central monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "ITSM Article & Resolved Ticket Ingestion",
          "deliverables": "Document Intelligence extraction and ingestion pipeline indexing ServiceNow or Jira Service Management knowledge articles and summarised resolved tickets with source citation metadata.",
          "notIncluded": "Cleansing or migration of legacy ITSM ticket histories."
        },
        {
          "title": "Security-Trimmed Search & Teams/ITSM Interface",
          "deliverables": "Private Azure AI Search with semantic ranking and document ACL security trimming, surfacing cited IT answers in Microsoft Teams and the ITSM portal alongside knowledge-gap reporting to knowledge managers.",
          "notIncluded": "Generative applications without retrieval or autonomous ticket execution."
        },
        {
          "title": "Guardrails, Evaluation & Handover",
          "deliverables": "Prompt Shields content filtering, retrieval quality testing, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 034 It Knowledge Base Assistant pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental RAG & Document Intelligence Rollout",
          "scenario": "Coordinated deployment of IT Knowledge Base Assistant across enterprise divisions, enabling cross-functional units to operationalise RAG & Document Intelligence workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3–4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "035",
    "title": "Insurance Claims Processing Agent",
    "slug": "insurance-claims-processing-agent",
    "domain": "04 Custom AI Agents",
    "engagementType": "Implementation",
    "duration": "8–10 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/035-insurance-claims-processing-agent/02-IaC/README.md",
      "hld": "Offerings/035-insurance-claims-processing-agent/01-Design/HLD-035-Insurance_Claims_Processing_Agent.docx",
      "lld": "Offerings/035-insurance-claims-processing-agent/01-Design/LLD-035-Insurance_Claims_Processing_Agent.docx",
      "sow": "Offerings/035-insurance-claims-processing-agent/03-Sales-and-Delivery-Kit/035 - Statement of Work.docx",
      "wbs": "Offerings/035-insurance-claims-processing-agent/03-Sales-and-Delivery-Kit/035 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Custom AI Agents",
    "heroKicker": "Custom AI Agents",
    "heroDescription": "Speed up claims handling by extracting claim details, checking policies, flagging fraud indicators and preparing decisions for handlers.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: processes span several systems and hand-offs.",
          "Without a validated delivery methodology: early agent experiments use shared accounts and direct keys; and no tracing or approval steps for actions taken by ai.",
          "The Insurance Claims Processing Agent engagement delivers a structured implementation blueprint designed to resolve these Custom AI Agents operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Head of Shared Services and Head of Engineering / Integration Architect teams, particularly in financial services, retail and logistics, public sector."
      },
      "scope": [
        {
          "title": "Private Claims Agent Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Azure AI Document Intelligence, Cosmos DB serverless, Storage Account, Key Vault, and central monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Claim Document Intake & Evidence Extraction",
          "deliverables": "Automated intake pipeline using private Azure AI Document Intelligence to extract structured facts and supporting evidence from claim submissions.",
          "notIncluded": "Cleansing or migration of legacy claims archives."
        },
        {
          "title": "Policy-Check Agent & Fraud Signal Flagging",
          "deliverables": "Foundry Agent Service workflow checking policy cover and claims history via allow-listed internal APIM tools, compiling evidence-backed recommendations and flagging fraud indicators for human claims handlers.",
          "notIncluded": "Autonomous claim settlement or irreversible payout decisions without handler approval."
        },
        {
          "title": "Agent Identity, Guardrails & Handover",
          "deliverables": "Dedicated Entra agent identity, Prompt Shields content filtering, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 035 Insurance Claims Processing Agent pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Custom AI Agents Rollout",
          "scenario": "Coordinated deployment of Insurance Claims Processing Agent across enterprise divisions, enabling cross-functional units to operationalise Custom AI Agents workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 8–10 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "036",
    "title": "Purview Data Protection for Copilot",
    "slug": "purview-data-protection-for-copilot",
    "domain": "07 Microsoft 365 Copilot",
    "engagementType": "Implementation",
    "duration": "4–6 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/036-purview-data-protection-for-copilot/02-IaC/README.md",
      "hld": "Offerings/036-purview-data-protection-for-copilot/01-Design/HLD-036-Purview_Data_Protection_for_Copilot.docx",
      "lld": "Offerings/036-purview-data-protection-for-copilot/01-Design/LLD-036-Purview_Data_Protection_for_Copilot.docx",
      "sow": "Offerings/036-purview-data-protection-for-copilot/03-Sales-and-Delivery-Kit/036 - Statement of Work.docx",
      "wbs": "Offerings/036-purview-data-protection-for-copilot/03-Sales-and-Delivery-Kit/036 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Microsoft 365 Copilot",
    "heroKicker": "Microsoft 365 Copilot",
    "heroDescription": "Configure sensitivity labels, DLP and DSPM for AI so Copilot respects the organisation's data protection rules.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: years of oversharing in sharepoint and teams.",
          "Without a validated delivery methodology: limited sensitivity labelling; and licences purchased but usage is low.",
          "The Purview Data Protection for Copilot engagement delivers a structured implementation blueprint designed to resolve these Microsoft 365 Copilot operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CIO / Chief People Officer and Microsoft 365 Lead / Information Governance Lead teams, particularly in professional services, public sector, financial services."
      },
      "scope": [
        {
          "title": "Sensitivity Label Taxonomy & Default Labelling",
          "deliverables": "Configuration of a clear Microsoft Purview Information Protection sensitivity label taxonomy (Public, General, Confidential, Highly Confidential) with default labelling and encryption settings.",
          "notIncluded": "Deployment of Azure AI PaaS workloads or custom Copilot extensions."
        },
        {
          "title": "Purview DLP for Microsoft 365 Copilot",
          "deliverables": "Implementation of Purview Data Loss Prevention policies excluding Highly Confidential labelled content from Microsoft 365 Copilot processing, paired with simulation-first auto-labelling.",
          "notIncluded": "Tenant-wide manual content migration or legacy file share cleansing."
        },
        {
          "title": "DSPM for AI & SharePoint Oversharing Checks",
          "deliverables": "Enablement of Purview DSPM for AI reporting, SharePoint Data Access Governance oversharing reports, and Entra Conditional Access baselines for Copilot cohorts.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Wave Rollout Governance & Handover",
          "deliverables": "Staged rollout entry criteria, Copilot Dashboard usage/value tracking alignment, configuration acceptance log, and handover runbooks.",
          "notIncluded": "Post-hypercare managed service operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 036 Purview Data Protection For Copilot pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Microsoft 365 Copilot Rollout",
          "scenario": "Coordinated deployment of Purview Data Protection for Copilot across enterprise divisions, enabling cross-functional units to operationalise Microsoft 365 Copilot workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "037",
    "title": "Contract Analysis and Review",
    "slug": "contract-analysis-and-review",
    "domain": "03 RAG & Document Intelligence",
    "engagementType": "Implementation",
    "duration": "5–6 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/037-contract-analysis-and-review/02-IaC/README.md",
      "hld": "Offerings/037-contract-analysis-and-review/01-Design/HLD-037-Contract_Analysis_and_Review.docx",
      "lld": "Offerings/037-contract-analysis-and-review/01-Design/LLD-037-Contract_Analysis_and_Review.docx",
      "sow": "Offerings/037-contract-analysis-and-review/03-Sales-and-Delivery-Kit/037 - Statement of Work.docx",
      "wbs": "Offerings/037-contract-analysis-and-review/03-Sales-and-Delivery-Kit/037 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "RAG & Document Intelligence",
    "heroKicker": "RAG & Document Intelligence",
    "heroDescription": "Extract key terms, risks and obligations from contracts and compare them against the organisation's standard positions.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: knowledge is spread across sharepoint, file shares and systems.",
          "Without a validated delivery methodology: keyword search returns too many or wrong results; and manual keying of document data is slow and error-prone.",
          "The Contract Analysis and Review engagement delivers a structured implementation blueprint designed to resolve these RAG & Document Intelligence operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Head of Operations / Knowledge Management Lead and Solution Architect / Data Lead teams, particularly in legal and professional services, insurance, public sector."
      },
      "scope": [
        {
          "title": "Private Contract Intelligence Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Azure AI Search, Azure AI Document Intelligence, Cosmos DB serverless, Storage Account, Key Vault, and central monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Clause, Party & Obligation Extraction",
          "deliverables": "Processing of contracts via private Azure AI Document Intelligence and a clause extraction model to capture parties, key dates, clauses, and post-signature obligations.",
          "notIncluded": "Cleansing or migration of legacy physical contract archives."
        },
        {
          "title": "Playbook Comparison & Risk Flagging",
          "deliverables": "Azure OpenAI analysis on Microsoft Foundry comparing extracted clauses against your legal playbook of standard positions and flagging deviations for legal review with source citations.",
          "notIncluded": "Automated contract execution or replacement of qualified legal sign-off."
        },
        {
          "title": "Contract Register, Obligation Alerts & Handover",
          "deliverables": "Structured contract register storing extracted data with automated obligation reminders, ACL-trimmed search, Deny-mode Azure Policies, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 037 Contract Analysis And Review pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental RAG & Document Intelligence Rollout",
          "scenario": "Coordinated deployment of Contract Analysis and Review across enterprise divisions, enabling cross-functional units to operationalise RAG & Document Intelligence workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 5–6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "038",
    "title": "Agent Observability and Audit",
    "slug": "agent-observability-and-audit",
    "domain": "05 Agent Governance",
    "engagementType": "Implementation",
    "duration": "4 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/038-agent-observability-and-audit/02-IaC/README.md",
      "hld": "Offerings/038-agent-observability-and-audit/01-Design/HLD-038-Agent_Observability_and_Audit.docx",
      "lld": "Offerings/038-agent-observability-and-audit/01-Design/LLD-038-Agent_Observability_and_Audit.docx",
      "sow": "Offerings/038-agent-observability-and-audit/03-Sales-and-Delivery-Kit/038 - Statement of Work.docx",
      "wbs": "Offerings/038-agent-observability-and-audit/03-Sales-and-Delivery-Kit/038 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Agent Governance",
    "heroKicker": "Agent Governance",
    "heroDescription": "Monitor what agents do, what data they touch and what it costs, with audit trails for investigations.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: Agents are being built in several tools with no inventory.",
          "Without a validated delivery methodology: owners leave and agents become orphaned; and Agent access to data is not reviewed.",
          "The Agent Observability and Audit engagement delivers a structured implementation blueprint designed to resolve these Agent Governance operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CIO / CISO and Identity and Access Lead / Microsoft 365 Architect teams, particularly in financial services, public sector, healthcare."
      },
      "scope": [
        {
          "title": "Private Telemetry & Foundry Foundation",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint subnet), Log Analytics workspace, workspace-based Application Insights, Microsoft Foundry, Premium Key Vault, and policy guardrails across up to two environments.",
          "notIncluded": "Building individual custom or Copilot Studio agents."
        },
        {
          "title": "OpenTelemetry Agent Run Tracing",
          "deliverables": "Standardised OpenTelemetry tracing pattern capturing end-to-end agent runs, tool invocations, token consumption, and latency into Application Insights and Microsoft Foundry tracing.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Purview Agent Data Access Audit",
          "deliverables": "Configuration of Microsoft Purview audit logging to capture data access by registered agents and link telemetry to Agent 365 ownership records.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Operational & Anomaly Dashboards",
          "deliverables": "Azure Monitor workbooks visualising agent quality, cost, latency, and behavioural anomalies to support security investigations, plus operational runbooks.",
          "notIncluded": "Post-hypercare managed SOC operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 038 Agent Observability And Audit pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Agent Governance Rollout",
          "scenario": "Coordinated deployment of Agent Observability and Audit across enterprise divisions, enabling cross-functional units to operationalise Agent Governance workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "039",
    "title": "Predictive Maintenance",
    "slug": "predictive-maintenance",
    "domain": "12 Predictive & Vision AI",
    "engagementType": "Implementation",
    "duration": "8 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/039-predictive-maintenance/02-IaC/README.md",
      "hld": "Offerings/039-predictive-maintenance/01-Design/HLD-039-Predictive_Maintenance.docx",
      "lld": "Offerings/039-predictive-maintenance/01-Design/LLD-039-Predictive_Maintenance.docx",
      "sow": "Offerings/039-predictive-maintenance/03-Sales-and-Delivery-Kit/039 - Statement of Work.docx",
      "wbs": "Offerings/039-predictive-maintenance/03-Sales-and-Delivery-Kit/039 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Predictive & Vision AI",
    "heroKicker": "Predictive & Vision AI",
    "heroDescription": "Predict equipment failures from sensor and maintenance data so work can be planned before breakdowns.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: forecasts rely on spreadsheets and judgement.",
          "Without a validated delivery methodology: sensor and camera data is stored but not used; and pilots do not reach production.",
          "The Predictive Maintenance engagement delivers a structured implementation blueprint designed to resolve these Predictive & Vision AI operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Supply Chain Director and Head of Data Science / OT Lead teams, particularly in retail, manufacturing, utilities and logistics."
      },
      "scope": [
        {
          "title": "Private IoT & MLOps Cloud Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint subnet), Azure Machine Learning workspace, Event Hubs namespace, private Storage Account, Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Purchase or physical installation of industrial sensors, gateways, or PLCs."
        },
        {
          "title": "Time-Series Sensor Ingestion Pipeline",
          "deliverables": "Configuration of private IoT Hub / Event Hubs and Eventstreams ingestion to stream and persist equipment telemetry as structured time-series data.",
          "notIncluded": "Changes to the platform landing zone hub or historical OT database migration."
        },
        {
          "title": "Anomaly & Failure Scoring Models",
          "deliverables": "Development and deployment of explainable anomaly detection and failure prediction models in Azure Machine Learning covering scheduled batch and real-time managed endpoints.",
          "notIncluded": "Training foundation models or modifying physical plant control loops directly."
        },
        {
          "title": "Maintenance Work-Order Integration & Handover",
          "deliverables": "Alert integration generating actionable work orders in your maintenance management system (CMMS/EAM), Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 039 Predictive Maintenance pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Predictive & Vision AI Rollout",
          "scenario": "Coordinated deployment of Predictive Maintenance across enterprise divisions, enabling cross-functional units to operationalise Predictive & Vision AI workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 8 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "040",
    "title": "AI Voice Agent",
    "slug": "ai-voice-agent",
    "domain": "13 Contact Centre AI",
    "engagementType": "Implementation",
    "duration": "6–8 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/040-ai-voice-agent/02-IaC/README.md",
      "hld": "Offerings/040-ai-voice-agent/01-Design/HLD-040-AI_Voice_Agent.docx",
      "lld": "Offerings/040-ai-voice-agent/01-Design/LLD-040-AI_Voice_Agent.docx",
      "sow": "Offerings/040-ai-voice-agent/03-Sales-and-Delivery-Kit/040 - Statement of Work.docx",
      "wbs": "Offerings/040-ai-voice-agent/03-Sales-and-Delivery-Kit/040 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Contact Centre AI",
    "heroKicker": "Contact Centre AI",
    "heroDescription": "Replace touch-tone menus with a natural-language voice agent that resolves simple requests and routes the rest.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: touch-tone menus frustrate customers.",
          "Without a validated delivery methodology: qa samples only a small share of calls; and Agents write notes by hand after every call.",
          "The AI Voice Agent engagement delivers a structured implementation blueprint designed to resolve these Contact Centre AI operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Customer Service Director and Contact Centre Technology Lead teams, particularly in retail, utilities, financial services."
      },
      "scope": [
        {
          "title": "Private Voice AI Landing Zone Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Azure AI Speech, Key Vault, and central monitoring across up to two environments.",
          "notIncluded": "Replacement of the existing telephony platform or changes to the platform landing zone hub."
        },
        {
          "title": "Azure AI Speech & Voice Live Conversation",
          "deliverables": "Configuration of private Azure AI Speech and Voice Live natural-language conversation flows integrated with your existing telephony or Azure Communication Services.",
          "notIncluded": "Procurement of SIP trunks or telecom carrier contracts."
        },
        {
          "title": "Shared Back-Office Tools & Context-Preserving Transfer",
          "deliverables": "Connection of the voice agent to shared digital-channel back-office APIs via internal API Management with verified caller identity checks and context-preserving handover to human agents.",
          "notIncluded": "Cleansing of legacy CRM records or bespoke contact-centre hardware upgrades."
        },
        {
          "title": "Transcript Redaction, AI Disclosure & Handover",
          "deliverables": "Automated caller AI disclosure, personal and payment data redaction from call recordings and transcripts, Prompt Shields, Deny-mode policies, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 040 Ai Voice Agent pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Contact Centre AI Rollout",
          "scenario": "Coordinated deployment of AI Voice Agent across enterprise divisions, enabling cross-functional units to operationalise Contact Centre AI workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 6–8 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "041",
    "title": "Intelligent Document Processing (Invoices and Forms)",
    "slug": "intelligent-document-processing-invoices-and-forms",
    "domain": "03 RAG & Document Intelligence",
    "engagementType": "Implementation",
    "duration": "4–6 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/041-intelligent-document-processing-invoices-and-forms/02-IaC/README.md",
      "hld": "Offerings/041-intelligent-document-processing-invoices-and-forms/01-Design/HLD-041-Intelligent_Document_Processing_Invoices_and_Forms.docx",
      "lld": "Offerings/041-intelligent-document-processing-invoices-and-forms/01-Design/LLD-041-Intelligent_Document_Processing_Invoices_and_Forms.docx",
      "sow": "Offerings/041-intelligent-document-processing-invoices-and-forms/03-Sales-and-Delivery-Kit/041 - Statement of Work.docx",
      "wbs": "Offerings/041-intelligent-document-processing-invoices-and-forms/03-Sales-and-Delivery-Kit/041 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "RAG & Document Intelligence",
    "heroKicker": "RAG & Document Intelligence",
    "heroDescription": "Automate data extraction from invoices, forms and claims, with validation and human review of exceptions.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: knowledge is spread across sharepoint, file shares and systems.",
          "Without a validated delivery methodology: keyword search returns too many or wrong results; and manual keying of document data is slow and error-prone.",
          "The Intelligent Document Processing (Invoices and Forms) engagement delivers a structured implementation blueprint designed to resolve these RAG & Document Intelligence operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Head of Operations / Knowledge Management Lead and Solution Architect / Data Lead teams, particularly in legal and professional services, insurance, public sector."
      },
      "scope": [
        {
          "title": "Private Document Processing Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint and Container Apps subnets), Azure AI Document Intelligence, Microsoft Foundry, Container Apps, private Storage Account, Key Vault, and central monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Multi-Channel Document Intake & Field Extraction",
          "deliverables": "Automated intake from email, upload portals, or scanners using prebuilt and custom Azure AI Document Intelligence models alongside GPT-4o to extract structured invoice and form fields.",
          "notIncluded": "Procurement of physical scanning hardware or cleansing of legacy ERP master data."
        },
        {
          "title": "Business-Rule Validation & Confidence Routing",
          "deliverables": "Validation of extracted fields against business rules and ERP master data, enabling straight-through API integration above confidence thresholds and routing low-confidence fields to a human review queue.",
          "notIncluded": "Autonomous posting of unvalidated financial exceptions."
        },
        {
          "title": "Auditability, Guardrails & Handover",
          "deliverables": "Private network isolation, Entra-only authentication, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 041 Intelligent Document Processing Invoices And Forms pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental RAG & Document Intelligence Rollout",
          "scenario": "Coordinated deployment of Intelligent Document Processing (Invoices and Forms) across enterprise divisions, enabling cross-functional units to operationalise RAG & Document Intelligence workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "042",
    "title": "IT Service Desk Agent",
    "slug": "it-service-desk-agent",
    "domain": "04 Custom AI Agents",
    "engagementType": "Implementation",
    "duration": "6–8 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/042-it-service-desk-agent/02-IaC/README.md",
      "hld": "Offerings/042-it-service-desk-agent/01-Design/HLD-042-IT_Service_Desk_Agent.docx",
      "lld": "Offerings/042-it-service-desk-agent/01-Design/LLD-042-IT_Service_Desk_Agent.docx",
      "sow": "Offerings/042-it-service-desk-agent/03-Sales-and-Delivery-Kit/042 - Statement of Work.docx",
      "wbs": "Offerings/042-it-service-desk-agent/03-Sales-and-Delivery-Kit/042 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Custom AI Agents",
    "heroKicker": "Custom AI Agents",
    "heroDescription": "Resolve common IT requests automatically, such as password help, access requests and software installs, and raise tickets for the rest.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: processes span several systems and hand-offs.",
          "Without a validated delivery methodology: early agent experiments use shared accounts and direct keys; and no tracing or approval steps for actions taken by ai.",
          "The IT Service Desk Agent engagement delivers a structured implementation blueprint designed to resolve these Custom AI Agents operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Head of Shared Services and Head of Engineering / Integration Architect teams, particularly in financial services, retail and logistics, public sector."
      },
      "scope": [
        {
          "title": "Private Service Desk Agent Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Cosmos DB serverless, Key Vault, and central monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Top-Ten Request Catalogue & Teams Channel",
          "deliverables": "Configuration of the IT Service Desk Agent on Foundry Agent Service accessible via Microsoft Teams to handle the top ten routine IT requests end to end.",
          "notIncluded": "Copilot Studio low-code agents or replacement of the underlying ITSM platform."
        },
        {
          "title": "Allow-Listed ITSM, Graph & Intune Actions",
          "deliverables": "Publication of allow-listed ITSM, Microsoft Graph, and Intune API tools behind internal API Management, logging every conversation as an ITSM ticket and enforcing manager approval for access changes.",
          "notIncluded": "Unattended privileged role assignments or unrestricted administrative actions."
        },
        {
          "title": "Agent Identity, Guardrails & Handover",
          "deliverables": "Dedicated Entra agent identity, Prompt Shields content filtering, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 042 It Service Desk Agent pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Custom AI Agents Rollout",
          "scenario": "Coordinated deployment of IT Service Desk Agent across enterprise divisions, enabling cross-functional units to operationalise Custom AI Agents workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 6–8 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "043",
    "title": "Copilot Studio ALM and Release Pipelines",
    "slug": "copilot-studio-alm-and-release-pipelines",
    "domain": "06 Copilot Studio Agents",
    "engagementType": "Accelerator",
    "duration": "3 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/043-copilot-studio-alm-and-release-pipelines/02-IaC/README.md",
      "hld": "Offerings/043-copilot-studio-alm-and-release-pipelines/01-Design/HLD-043-Copilot_Studio_ALM_and_Release_Pipelines.docx",
      "lld": "Offerings/043-copilot-studio-alm-and-release-pipelines/01-Design/LLD-043-Copilot_Studio_ALM_and_Release_Pipelines.docx",
      "sow": "Offerings/043-copilot-studio-alm-and-release-pipelines/03-Sales-and-Delivery-Kit/043 - Statement of Work.docx",
      "wbs": "Offerings/043-copilot-studio-alm-and-release-pipelines/03-Sales-and-Delivery-Kit/043 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Copilot Studio Agents",
    "heroKicker": "Copilot Studio Agents",
    "heroDescription": "Introduce source control, automated testing and release pipelines for Copilot Studio agents.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises adopting this capability face significant hurdles: one shared power platform environment with weak data loss prevention.",
          "Compounding this friction: agents published without testing or ownership; and makers connect to unapproved data sources.",
          "The Copilot Studio ALM and Release Pipelines engagement delivers a structured accelerator blueprint designed to resolve these Copilot Studio Agents operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Head of Digital Workplace / HR Director and Power Platform Lead / Microsoft 365 Architect teams, particularly in public sector, retail, education."
      },
      "scope": [
        {
          "title": "Source Control & Solution Packaging Pattern",
          "deliverables": "Configuration of Azure DevOps or GitHub repositories per business area with a standardised one-managed-solution-per-agent packaging model for Copilot Studio agents.",
          "notIncluded": "Deployment of Azure AI Foundry pro-code workloads or non-agent Power Apps."
        },
        {
          "title": "Power Platform Managed Environments & DLP",
          "deliverables": "Structuring of separate development, test, and production Power Platform Managed Environments with environment-level Data Loss Prevention policies and private VNet connectivity where available.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Automated Promotion Pipelines & Deployment Settings",
          "deliverables": "Implementation of Power Platform pipelines promoting solutions from dev through test to production with environment-specific deployment settings files for connection references and two-party release approvals.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Automated Conversation Testing & Handover",
          "deliverables": "Configuration of the Copilot Studio test framework to run automated conversation regression tests prior to release, plus handover runbooks.",
          "notIncluded": "Post-hypercare managed service operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Deployment",
          "scenario": "An organisation deploying standard 043 Copilot Studio Alm And Release Pipelines patterns across regulated enterprise subscriptions to ensure compliance and technical consistency."
        },
        {
          "title": "Multi-Departmental Copilot Studio Agents Rollout",
          "scenario": "Coordinated deployment of Copilot Studio ALM and Release Pipelines across enterprise divisions, enabling cross-functional units to operationalise Copilot Studio Agents workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Confirm scope, environment and prerequisites."
          },
          {
            "name": "Deploy",
            "duration": "2–4 weeks",
            "activities": "Deploy the accelerator modules as code and configure them."
          },
          {
            "name": "Validate",
            "duration": "1–2 weeks",
            "activities": "Test, tune and document; train the customer team."
          },
          {
            "name": "Handover",
            "duration": "1 week",
            "activities": "Hand over code, documentation and next steps."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "044",
    "title": "Dataverse and Business Data Agent",
    "slug": "dataverse-and-business-data-agent",
    "domain": "06 Copilot Studio Agents",
    "engagementType": "Implementation",
    "duration": "4–5 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/044-dataverse-and-business-data-agent/02-IaC/README.md",
      "hld": "Offerings/044-dataverse-and-business-data-agent/01-Design/HLD-044-Dataverse_and_Business_Data_Agent.docx",
      "lld": "Offerings/044-dataverse-and-business-data-agent/01-Design/LLD-044-Dataverse_and_Business_Data_Agent.docx",
      "sow": "Offerings/044-dataverse-and-business-data-agent/03-Sales-and-Delivery-Kit/044 - Statement of Work.docx",
      "wbs": "Offerings/044-dataverse-and-business-data-agent/03-Sales-and-Delivery-Kit/044 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Copilot Studio Agents",
    "heroKicker": "Copilot Studio Agents",
    "heroDescription": "Build agents that answer questions and take actions on Dataverse and Dynamics 365 data, respecting security roles.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: one shared power platform environment with weak data loss prevention.",
          "Without a validated delivery methodology: Agents published without testing or ownership; and makers connect to unapproved data sources.",
          "The Dataverse and Business Data Agent engagement delivers a structured implementation blueprint designed to resolve these Copilot Studio Agents operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Head of Digital Workplace / HR Director and Power Platform Lead / Microsoft 365 Architect teams, particularly in public sector, retail, education."
      },
      "scope": [
        {
          "title": "Power Platform Environment & Governance Setup",
          "deliverables": "Configuration of separate development, test, and production Power Platform Managed Environments with DLP policies and Git solution packaging for Copilot Studio agents.",
          "notIncluded": "Pro-code Azure Foundry agents or Power Apps without agents."
        },
        {
          "title": "Dataverse & Dynamics 365 Conversational Agent",
          "deliverables": "Build of a Copilot Studio agent grounded in Dataverse and Dynamics 365 business records with user-context access enforcement.",
          "notIncluded": "Changes to the platform landing zone or cleansing of legacy Dynamics 365 records."
        },
        {
          "title": "Security-Role Enforcement & Business Process Actions",
          "deliverables": "Configuration of Dataverse security roles ensuring users only access entitled records, alongside actions invoking existing approved business processes.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Dataverse Audit Logging & Handover",
          "deliverables": "Enablement of Dataverse audit logging for all agent interactions and data access, Power Platform release pipeline setup, and operational handover.",
          "notIncluded": "Post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 044 Dataverse And Business Data Agent pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Copilot Studio Agents Rollout",
          "scenario": "Coordinated deployment of Dataverse and Business Data Agent across enterprise divisions, enabling cross-functional units to operationalise Copilot Studio Agents workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–5 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "045",
    "title": "Azure Databricks Lakehouse for AI",
    "slug": "azure-databricks-lakehouse-for-ai",
    "domain": "10 Data & AI Platform",
    "engagementType": "Implementation",
    "duration": "8–10 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/045-azure-databricks-lakehouse-for-ai/02-IaC/README.md",
      "hld": "Offerings/045-azure-databricks-lakehouse-for-ai/01-Design/HLD-045-Azure_Databricks_Lakehouse_for_AI.docx",
      "lld": "Offerings/045-azure-databricks-lakehouse-for-ai/01-Design/LLD-045-Azure_Databricks_Lakehouse_for_AI.docx",
      "sow": "Offerings/045-azure-databricks-lakehouse-for-ai/03-Sales-and-Delivery-Kit/045 - Statement of Work.docx",
      "wbs": "Offerings/045-azure-databricks-lakehouse-for-ai/03-Sales-and-Delivery-Kit/045 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Data & AI Platform",
    "heroKicker": "Data & AI Platform",
    "heroDescription": "Deploy a secure Azure Databricks lakehouse with Unity Catalog to support data engineering, machine learning and AI agents.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: data sits in many systems with unclear ownership.",
          "Without a validated delivery methodology: data quality is unknown; and each ai project extracts data by hand.",
          "The Azure Databricks Lakehouse for AI engagement delivers a structured implementation blueprint designed to resolve these Data & AI Platform operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Chief Data Officer / CFO and Head of Data / Data Architect teams, particularly in retail, manufacturing, financial services."
      },
      "scope": [
        {
          "title": "VNet-Injected Databricks Landing Zone",
          "deliverables": "Infrastructure-as-code deployment (Terraform or Bicep) of spoke VNet (private endpoint and Databricks host/container subnets), Premium Azure Databricks workspaces per environment with VNet injection and no public IP, ADLS Gen2 storage, Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Unity Catalog Governance & Medallion Lakehouse",
          "deliverables": "Configuration of Unity Catalog metastore and per-environment catalogues governing all Delta tables and ML models across bronze, silver, and gold medallion layers.",
          "notIncluded": "Migration of all legacy data warehouses outside agreed priority AI use cases."
        },
        {
          "title": "Cluster Cost Policies & Private Connectivity",
          "deliverables": "Implementation of Databricks cluster policies controlling compute sizing and auto-termination, NoAzureDatabricksRules NSGs, Private Link access, and Entra-only storage authentication.",
          "notIncluded": "Source system data cleansing or authoring of organisational data policies."
        },
        {
          "title": "Policy Guardrails & Operational Handover",
          "deliverables": "Assignment of the Devopstrio AI Landing Zone policy initiative (Audit in dev/test, Deny in prod), monthly budget alerts, and operational runbooks.",
          "notIncluded": "Post-hypercare managed service operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 045 Azure Databricks Lakehouse For Ai pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Data & AI Platform Rollout",
          "scenario": "Coordinated deployment of Azure Databricks Lakehouse for AI across enterprise divisions, enabling cross-functional units to operationalise Data & AI Platform workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 8–10 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "046",
    "title": "AI Landing Zone Health Check",
    "slug": "ai-landing-zone-health-check",
    "domain": "01 AI Landing Zone",
    "engagementType": "Assessment",
    "duration": "2 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/046-ai-landing-zone-health-check/02-IaC/README.md",
      "hld": "Offerings/046-ai-landing-zone-health-check/01-Design/HLD-046-AI_Landing_Zone_Health_Check.docx",
      "lld": "Offerings/046-ai-landing-zone-health-check/01-Design/LLD-046-AI_Landing_Zone_Health_Check.docx",
      "sow": "Offerings/046-ai-landing-zone-health-check/03-Sales-and-Delivery-Kit/046 - Statement of Work.docx",
      "wbs": "Offerings/046-ai-landing-zone-health-check/03-Sales-and-Delivery-Kit/046 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "AI Landing Zone",
    "heroKicker": "AI Landing Zone",
    "heroDescription": "Review an existing AI estate or landing zone against Microsoft guidance and the Devopstrio reference design, and produce a prioritised remediation plan.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: AI pilots run in isolated subscriptions with public endpoints and API keys.",
          "Without a validated delivery methodology: no shared gateway, quotas or cost visibility for ai; and security and data protection teams block ai because controls are unclear.",
          "The AI Landing Zone Health Check engagement delivers a structured assessment blueprint designed to resolve these AI Landing Zone operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CIO / Head of Digital and Head of Cloud Platform / Enterprise Architect teams, particularly in public sector, financial services, retail."
      },
      "scope": [
        {
          "title": "Read-Only AI Landing Zone Telemetry Discovery",
          "deliverables": "Non-intrusive read-only inspection across your Azure AI subscriptions using Azure Resource Graph queries, Azure Advisor, Defender for Cloud secure score, and Azure Policy compliance exports.",
          "notIncluded": "Modifications to live landing zone subscriptions, networking, or workloads."
        },
        {
          "title": "Five-Area CAF & Well-Architected Review",
          "deliverables": "Structured technical evaluation across Strategy, Platform, Security, Operations, and Governance against Microsoft Cloud Adoption Framework (CAF) AI scenario and Well-Architected guidance.",
          "notIncluded": "Microsoft 365 Copilot assessments or custom foundation model training."
        },
        {
          "title": "Risk-Prioritised Findings Register & Power BI View",
          "deliverables": "Consolidated findings register backed by configuration evidence, ranked operational risks, and an interactive Power BI health-check summary.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Actionable Remediation Backlog & IaC Guidance",
          "deliverables": "Prioritised remediation roadmap (quick wins, 90 days, 12 months) structured as ready-to-execute backlog items and recommended IaC pattern changes.",
          "notIncluded": "Hands-on implementation of remediation changes or ongoing managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 046 Ai Landing Zone Health Check pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental AI Landing Zone Rollout",
          "scenario": "Coordinated deployment of AI Landing Zone Health Check across enterprise divisions, enabling cross-functional units to operationalise AI Landing Zone workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 2 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Mobilise",
            "duration": "1–2 weeks",
            "activities": "Agree scope, stakeholders and access."
          },
          {
            "name": "Discover",
            "duration": "1 week",
            "activities": "Interviews, workshops and technical evidence gathering."
          },
          {
            "name": "Analyse",
            "duration": "1–2 weeks",
            "activities": "Score findings, identify gaps and options."
          },
          {
            "name": "Report",
            "duration": "1 week",
            "activities": "Present findings, prioritised recommendations and roadmap."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "047",
    "title": "Email Triage and Response Drafting",
    "slug": "email-triage-and-response-drafting",
    "domain": "02 Generative AI Applications",
    "engagementType": "Implementation",
    "duration": "4 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/047-email-triage-and-response-drafting/02-IaC/README.md",
      "hld": "Offerings/047-email-triage-and-response-drafting/01-Design/HLD-047-Email_Triage_and_Response_Drafting.docx",
      "lld": "Offerings/047-email-triage-and-response-drafting/01-Design/LLD-047-Email_Triage_and_Response_Drafting.docx",
      "sow": "Offerings/047-email-triage-and-response-drafting/03-Sales-and-Delivery-Kit/047 - Statement of Work.docx",
      "wbs": "Offerings/047-email-triage-and-response-drafting/03-Sales-and-Delivery-Kit/047 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Generative AI Applications",
    "heroKicker": "Generative AI Applications",
    "heroDescription": "Classify incoming emails to shared mailboxes, route them to the right team and draft replies for staff to check.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: staff use public ai tools with company data.",
          "Without a validated delivery methodology: proofs of concept are built without logging, evaluation or safety controls; and teams rebuild the same plumbing for every use case.",
          "The Email Triage and Response Drafting engagement delivers a structured implementation blueprint designed to resolve these Generative AI Applications operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Business Unit Director and Head of Engineering / AI Lead teams, particularly in professional services, public sector, retail."
      },
      "scope": [
        {
          "title": "Private Email Triage Landing Zone",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Premium Key Vault, and central monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Microsoft Graph Shared Mailbox Integration",
          "deliverables": "Integration with shared mailboxes via Microsoft Graph to ingest inbound emails, route classified messages to designated team folders via Logic Apps, and save draft replies back to the mailbox.",
          "notIncluded": "Autonomous email sending without human review or legacy mailbox migration."
        },
        {
          "title": "Confidence-Based Classification & Draft-Only Replies",
          "deliverables": "Azure OpenAI classification of category and urgency with confidence-based routing thresholds and draft-only reply generation clearly marked for staff review.",
          "notIncluded": "Enterprise document RAG, autonomous agents, or model fine-tuning."
        },
        {
          "title": "Audit Logging, Guardrails & Handover",
          "deliverables": "Prompt Shields content filtering, restricted-access prompt/response audit logs, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 047 Email Triage And Response Drafting pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Generative AI Applications Rollout",
          "scenario": "Coordinated deployment of Email Triage and Response Drafting across enterprise divisions, enabling cross-functional units to operationalise Generative AI Applications workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "048",
    "title": "Agent Registry and Lifecycle Management",
    "slug": "agent-registry-and-lifecycle-management",
    "domain": "05 Agent Governance",
    "engagementType": "Implementation",
    "duration": "4 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/048-agent-registry-and-lifecycle-management/02-IaC/README.md",
      "hld": "Offerings/048-agent-registry-and-lifecycle-management/01-Design/HLD-048-Agent_Registry_and_Lifecycle_Management.docx",
      "lld": "Offerings/048-agent-registry-and-lifecycle-management/01-Design/LLD-048-Agent_Registry_and_Lifecycle_Management.docx",
      "sow": "Offerings/048-agent-registry-and-lifecycle-management/03-Sales-and-Delivery-Kit/048 - Statement of Work.docx",
      "wbs": "Offerings/048-agent-registry-and-lifecycle-management/03-Sales-and-Delivery-Kit/048 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Agent Governance",
    "heroKicker": "Agent Governance",
    "heroDescription": "Set up the process and tooling to request, approve, publish, review and retire agents.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: Agents are being built in several tools with no inventory.",
          "Without a validated delivery methodology: owners leave and agents become orphaned; and Agent access to data is not reviewed.",
          "The Agent Registry and Lifecycle Management engagement delivers a structured implementation blueprint designed to resolve these Agent Governance operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CIO / CISO and Identity and Access Lead / Microsoft 365 Architect teams, particularly in financial services, public sector, healthcare."
      },
      "scope": [
        {
          "title": "Agent Request & Risk-Tiered Approval Workflow",
          "deliverables": "Configuration of a structured intake and approval workflow (Power Automate or ServiceNow) capturing agent purpose, platform, data classification, risk tier, and named owner before publishing.",
          "notIncluded": "Building individual custom or Copilot Studio agents."
        },
        {
          "title": "Central Agent Registry (Agent 365 / Dataverse)",
          "deliverables": "Setup of Microsoft Agent 365 and Dataverse as the single agent inventory with mandatory ownership and review-date metadata, restricting publishing rights to approved makers.",
          "notIncluded": "Deployment of Azure PaaS infrastructure or changes to the platform landing zone."
        },
        {
          "title": "Six-Stage Lifecycle & Automated Suspension",
          "deliverables": "Implementation of the six-stage lifecycle (Requested, Approved, Published, Under Review, Suspended, Retired) with quarterly owner attestations and automatic suspension when unowned or unused for 90 days.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Entra Identity Governance & Handover",
          "deliverables": "Integration with per-agent Entra identities, Conditional Access, Purview audit logging, and handover of lifecycle operational runbooks.",
          "notIncluded": "Post-hypercare managed service operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 048 Agent Registry And Lifecycle Management pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Agent Governance Rollout",
          "scenario": "Coordinated deployment of Agent Registry and Lifecycle Management across enterprise divisions, enabling cross-functional units to operationalise Agent Governance workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "049",
    "title": "HR Self-Service Agent in Teams",
    "slug": "hr-self-service-agent-in-teams",
    "domain": "06 Copilot Studio Agents",
    "engagementType": "Implementation",
    "duration": "4 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/049-hr-self-service-agent-in-teams/02-IaC/README.md",
      "hld": "Offerings/049-hr-self-service-agent-in-teams/01-Design/HLD-049-HR_Self_Service_Agent_in_Teams.docx",
      "lld": "Offerings/049-hr-self-service-agent-in-teams/01-Design/LLD-049-HR_Self_Service_Agent_in_Teams.docx",
      "sow": "Offerings/049-hr-self-service-agent-in-teams/03-Sales-and-Delivery-Kit/049 - Statement of Work.docx",
      "wbs": "Offerings/049-hr-self-service-agent-in-teams/03-Sales-and-Delivery-Kit/049 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Copilot Studio Agents",
    "heroKicker": "Copilot Studio Agents",
    "heroDescription": "Build a Copilot Studio agent in Teams that answers HR questions and completes simple HR transactions.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: one shared power platform environment with weak data loss prevention.",
          "Without a validated delivery methodology: Agents published without testing or ownership; and makers connect to unapproved data sources.",
          "The HR Self-Service Agent in Teams engagement delivers a structured implementation blueprint designed to resolve these Copilot Studio Agents operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Head of Digital Workplace / HR Director and Power Platform Lead / Microsoft 365 Architect teams, particularly in public sector, retail, education."
      },
      "scope": [
        {
          "title": "Power Platform Managed Environments & ALM",
          "deliverables": "Configuration of separate development, test, and production Power Platform Managed Environments with DLP policies, Git solution packaging, and Power Platform release pipelines.",
          "notIncluded": "Pro-code Azure Foundry agents or Power Apps without agents."
        },
        {
          "title": "HR Policy Knowledge & Data-Driven Topics",
          "deliverables": "Build of a Copilot Studio HR self-service agent in Microsoft Teams grounded in approved SharePoint HR policy libraries across a data-driven topic list.",
          "notIncluded": "Cleansing or rewriting of legacy SharePoint HR policy documents."
        },
        {
          "title": "Authenticated HR Transactions & Case Escalation",
          "deliverables": "Integration with HR system connectors enabling simple self-service transactions with mandatory user authentication for personal requests and automatic HR case creation for unresolved questions.",
          "notIncluded": "Changes to the platform landing zone or replacement of core HRIS platforms."
        },
        {
          "title": "Conversation Testing & Operational Handover",
          "deliverables": "Automated Copilot Studio conversation testing, environment deployment settings files, and handover runbooks.",
          "notIncluded": "Authoring of organisational HR policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 049 Hr Self Service Agent In Teams pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Copilot Studio Agents Rollout",
          "scenario": "Coordinated deployment of HR Self-Service Agent in Teams across enterprise divisions, enabling cross-functional units to operationalise Copilot Studio Agents workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "050",
    "title": "AI Security Posture Assessment",
    "slug": "ai-security-posture-assessment",
    "domain": "08 AI Security",
    "engagementType": "Assessment",
    "duration": "2–3 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/050-ai-security-posture-assessment/02-IaC/README.md",
      "hld": "Offerings/050-ai-security-posture-assessment/01-Design/HLD-050-AI_Security_Posture_Assessment.docx",
      "lld": "Offerings/050-ai-security-posture-assessment/01-Design/LLD-050-AI_Security_Posture_Assessment.docx",
      "sow": "Offerings/050-ai-security-posture-assessment/03-Sales-and-Delivery-Kit/050 - Statement of Work.docx",
      "wbs": "Offerings/050-ai-security-posture-assessment/03-Sales-and-Delivery-Kit/050 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "AI Security",
    "heroKicker": "AI Security",
    "heroDescription": "Assess the security of the organisation's AI estate against Microsoft and OWASP guidance and produce a prioritised plan.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: AI services are not covered by specific threat detection.",
          "Without a validated delivery methodology: staff use unsanctioned ai tools; and no red-team testing before ai goes live.",
          "The AI Security Posture Assessment engagement delivers a structured assessment blueprint designed to resolve these AI Security operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CISO and Security Architect / SOC Lead teams, particularly in financial services, public sector, healthcare."
      },
      "scope": [
        {
          "title": "Defender for Cloud AI-SPM Discovery",
          "deliverables": "Read-only discovery of AI subscriptions, model endpoints, and workloads using Defender for Cloud AI Security Posture Management (AI-SPM), Sentinel/Defender alerts, and PyRIT / AI red-teaming results.",
          "notIncluded": "Modifications to live Azure AI workloads or platform landing zone subscriptions."
        },
        {
          "title": "Six-Domain AI Security Baseline Review",
          "deliverables": "Structured technical evaluation across Identity, Network, Data, Models, Applications, and Monitoring against Zero Trust and Devopstrio AI security baselines.",
          "notIncluded": "Microsoft 365 Copilot content permission remediation."
        },
        {
          "title": "Priority AI Workload Threat Modelling",
          "deliverables": "Facilitated threat modelling over priority AI applications and agent workflows covering prompt injection, tool misuse, data leakage, and credential exposure.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Risk-Ranked Findings & Remediation Roadmap",
          "deliverables": "Consolidated findings register with supporting evidence, ranked security risks, and a prioritised remediation roadmap presented to security and engineering leadership.",
          "notIncluded": "Hands-on implementation of security fixes or ongoing managed SOC support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 050 Ai Security Posture Assessment pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental AI Security Rollout",
          "scenario": "Coordinated deployment of AI Security Posture Assessment across enterprise divisions, enabling cross-functional units to operationalise AI Security workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 2–3 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Mobilise",
            "duration": "1–2 weeks",
            "activities": "Agree scope, stakeholders and access."
          },
          {
            "name": "Discover",
            "duration": "1 week",
            "activities": "Interviews, workshops and technical evidence gathering."
          },
          {
            "name": "Analyse",
            "duration": "1–2 weeks",
            "activities": "Score findings, identify gaps and options."
          },
          {
            "name": "Report",
            "duration": "1 week",
            "activities": "Present findings, prioritised recommendations and roadmap."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "051",
    "title": "Secure AI Gateway and Prompt Protection",
    "slug": "secure-ai-gateway-and-prompt-protection",
    "domain": "08 AI Security",
    "engagementType": "Implementation",
    "duration": "3 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/051-secure-ai-gateway-and-prompt-protection/02-IaC/README.md",
      "hld": "Offerings/051-secure-ai-gateway-and-prompt-protection/01-Design/HLD-051-Secure_AI_Gateway_and_Prompt_Protection.docx",
      "lld": "Offerings/051-secure-ai-gateway-and-prompt-protection/01-Design/LLD-051-Secure_AI_Gateway_and_Prompt_Protection.docx",
      "sow": "Offerings/051-secure-ai-gateway-and-prompt-protection/03-Sales-and-Delivery-Kit/051 - Statement of Work.docx",
      "wbs": "Offerings/051-secure-ai-gateway-and-prompt-protection/03-Sales-and-Delivery-Kit/051 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "AI Security",
    "heroKicker": "AI Security",
    "heroDescription": "Add security controls at the AI gateway: Prompt Shields, content filters, input validation and data masking.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: AI services are not covered by specific threat detection.",
          "Without a validated delivery methodology: staff use unsanctioned ai tools; and no red-team testing before ai goes live.",
          "The Secure AI Gateway and Prompt Protection engagement delivers a structured implementation blueprint designed to resolve these AI Security operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CISO and Security Architect / SOC Lead teams, particularly in financial services, public sector, healthcare."
      },
      "scope": [
        {
          "title": "Private Secure AI Gateway Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint and internal APIM subnets), internal API Management AI gateway, Microsoft Foundry, Azure AI Content Safety, Azure AI Language, Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Prompt Shields & Input/Document Screening",
          "deliverables": "Configuration of Azure AI Content Safety with Prompt Shields screening both user prompts and retrieved document inputs against jailbreak and indirect prompt-injection attacks.",
          "notIncluded": "Security remediation for Microsoft 365 Copilot SharePoint permissions."
        },
        {
          "title": "Automated PII Detection & Default Masking",
          "deliverables": "Integration of private Azure AI Language (TextAnalytics) at the gateway to detect and mask personal data by default before prompts reach foundation models.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Security Logging, Defender Alignment & Handover",
          "deliverables": "Logging and alerting of blocked requests to Log Analytics and Application Insights, Defender for Cloud AI posture alignment, Deny-mode policies, and operational runbooks.",
          "notIncluded": "Post-hypercare managed SOC operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 051 Secure Ai Gateway And Prompt Protection pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental AI Security Rollout",
          "scenario": "Coordinated deployment of Secure AI Gateway and Prompt Protection across enterprise divisions, enabling cross-functional units to operationalise AI Security workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "052",
    "title": "Personalised Recommendations",
    "slug": "personalised-recommendations",
    "domain": "12 Predictive & Vision AI",
    "engagementType": "Implementation",
    "duration": "6–8 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/052-personalised-recommendations/02-IaC/README.md",
      "hld": "Offerings/052-personalised-recommendations/01-Design/HLD-052-Personalised_Recommendations.docx",
      "lld": "Offerings/052-personalised-recommendations/01-Design/LLD-052-Personalised_Recommendations.docx",
      "sow": "Offerings/052-personalised-recommendations/03-Sales-and-Delivery-Kit/052 - Statement of Work.docx",
      "wbs": "Offerings/052-personalised-recommendations/03-Sales-and-Delivery-Kit/052 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Predictive & Vision AI",
    "heroKicker": "Predictive & Vision AI",
    "heroDescription": "Recommend products, content or next-best actions to customers across web, app and email.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: forecasts rely on spreadsheets and judgement.",
          "Without a validated delivery methodology: sensor and camera data is stored but not used; and pilots do not reach production.",
          "The Personalised Recommendations engagement delivers a structured implementation blueprint designed to resolve these Predictive & Vision AI operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Supply Chain Director and Head of Data Science / OT Lead teams, particularly in retail, manufacturing, utilities and logistics."
      },
      "scope": [
        {
          "title": "Private Recommendations & MLOps Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint and Container Apps subnets), Azure Machine Learning workspace, Azure AI Search, Container Apps, private Storage Account, Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Consent-Aware Behaviour & Catalogue Pipeline",
          "deliverables": "Ingestion and feature pipeline combining customer behaviour and product catalogue data while enforcing customer consent flags before model scoring.",
          "notIncluded": "Purchase or installation of in-store sensors or cleansing of legacy CRM databases."
        },
        {
          "title": "Recommendation Models & Low-Latency Serving API",
          "deliverables": "Training and deployment of explainable recommendation models in Azure Machine Learning and Azure AI Search served via low-latency Container Apps APIs behind Private Endpoints.",
          "notIncluded": "Rebuilding customer-facing e-commerce or mobile front ends."
        },
        {
          "title": "A/B Experimentation, Guardrails & Handover",
          "deliverables": "A/B testing framework measuring engagement and conversion impact, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 052 Personalised Recommendations pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Predictive & Vision AI Rollout",
          "scenario": "Coordinated deployment of Personalised Recommendations across enterprise divisions, enabling cross-functional units to operationalise Predictive & Vision AI workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 6–8 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "053",
    "title": "Multi-Agent Orchestration Platform",
    "slug": "multi-agent-orchestration-platform",
    "domain": "04 Custom AI Agents",
    "engagementType": "Implementation",
    "duration": "8–10 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/053-multi-agent-orchestration-platform/02-IaC/README.md",
      "hld": "Offerings/053-multi-agent-orchestration-platform/01-Design/HLD-053-Multi_Agent_Orchestration_Platform.docx",
      "lld": "Offerings/053-multi-agent-orchestration-platform/01-Design/LLD-053-Multi_Agent_Orchestration_Platform.docx",
      "sow": "Offerings/053-multi-agent-orchestration-platform/03-Sales-and-Delivery-Kit/053 - Statement of Work.docx",
      "wbs": "Offerings/053-multi-agent-orchestration-platform/03-Sales-and-Delivery-Kit/053 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Custom AI Agents",
    "heroKicker": "Custom AI Agents",
    "heroDescription": "Provide a shared platform where several specialised agents work together on complex processes, with common tools, memory and monitoring.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: processes span several systems and hand-offs.",
          "Without a validated delivery methodology: early agent experiments use shared accounts and direct keys; and no tracing or approval steps for actions taken by ai.",
          "The Multi-Agent Orchestration Platform engagement delivers a structured implementation blueprint designed to resolve these Custom AI Agents operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Head of Shared Services and Head of Engineering / Integration Architect teams, particularly in financial services, retail and logistics, public sector."
      },
      "scope": [
        {
          "title": "Private Multi-Agent Platform Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Azure AI Search, Azure AI Content Safety, Cosmos DB serverless, Container Apps, Key Vault, and central monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Agent Orchestration & Reusable Patterns",
          "deliverables": "Implementation of multi-agent orchestration using Microsoft Agent Framework or Foundry workflows with template patterns enabling teams to compose and reuse agent capabilities.",
          "notIncluded": "Copilot Studio low-code agents or enterprise-wide Agent 365 governance processes."
        },
        {
          "title": "Shared Memory, Search & Tool Gateway",
          "deliverables": "Provisioning of shared platform services—private Cosmos DB for shared agent memory/state, private Azure AI Search for shared retrieval, and internal API Management for allow-listed tools and MCP servers.",
          "notIncluded": "Building domain-specific line-of-business back-end APIs."
        },
        {
          "title": "End-to-End Tracing, Identities & Handover",
          "deliverables": "Linked end-to-end tracing across all orchestrated agent steps, per-agent Entra identities, Prompt Shields, Deny-mode Azure Policies, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 053 Multi Agent Orchestration Platform pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Custom AI Agents Rollout",
          "scenario": "Coordinated deployment of Multi-Agent Orchestration Platform across enterprise divisions, enabling cross-functional units to operationalise Custom AI Agents workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 8–10 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "054",
    "title": "Model Evaluation and Fairness Testing",
    "slug": "model-evaluation-and-fairness-testing",
    "domain": "09 Responsible AI & Compliance",
    "engagementType": "Implementation",
    "duration": "3–4 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/054-model-evaluation-and-fairness-testing/02-IaC/README.md",
      "hld": "Offerings/054-model-evaluation-and-fairness-testing/01-Design/HLD-054-Model_Evaluation_and_Fairness_Testing.docx",
      "lld": "Offerings/054-model-evaluation-and-fairness-testing/01-Design/LLD-054-Model_Evaluation_and_Fairness_Testing.docx",
      "sow": "Offerings/054-model-evaluation-and-fairness-testing/03-Sales-and-Delivery-Kit/054 - Statement of Work.docx",
      "wbs": "Offerings/054-model-evaluation-and-fairness-testing/03-Sales-and-Delivery-Kit/054 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Responsible AI & Compliance",
    "heroKicker": "Responsible AI & Compliance",
    "heroDescription": "Set up automated evaluation of AI quality, safety and fairness, with results stored as evidence.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: no central record of ai use cases.",
          "Without a validated delivery methodology: risk is not classified consistently; and no evidence of testing for auditors.",
          "The Model Evaluation and Fairness Testing engagement delivers a structured implementation blueprint designed to resolve these Responsible AI & Compliance operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Chief Risk Officer / General Counsel and Data Protection Officer / AI Lead teams, particularly in financial services, public sector, healthcare."
      },
      "scope": [
        {
          "title": "Private Evaluation & Evidence Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint subnet), Microsoft Foundry account and project, private Storage Account, Premium Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Quality, Safety & Fairness Evaluation Suites",
          "deliverables": "Configuration of Microsoft Foundry quality/safety evaluations alongside Fairlearn and custom group-outcome fairness tests tailored to use-case metrics.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or legal interpretation of regulations."
        },
        {
          "title": "Release-Gating Pipelines & Versioned Evidence",
          "deliverables": "Automated evaluation and red-teaming pipelines storing versioned results history in private Storage and surfacing compliance evidence in Power BI to gate production releases.",
          "notIncluded": "Building end-user generative applications or custom UI front ends."
        },
        {
          "title": "AI Register Alignment & Operational Handover",
          "deliverables": "Alignment with the AI use-case and model register (purpose, owner, risk tier), UK residency Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Post-hypercare managed service operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 054 Model Evaluation And Fairness Testing pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Responsible AI & Compliance Rollout",
          "scenario": "Coordinated deployment of Model Evaluation and Fairness Testing across enterprise divisions, enabling cross-functional units to operationalise Responsible AI & Compliance workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3–4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "055",
    "title": "Data Governance for AI with Microsoft Purview",
    "slug": "data-governance-for-ai-with-microsoft-purview",
    "domain": "10 Data & AI Platform",
    "engagementType": "Implementation",
    "duration": "4–6 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/055-data-governance-for-ai-with-microsoft-purview/02-IaC/README.md",
      "hld": "Offerings/055-data-governance-for-ai-with-microsoft-purview/01-Design/HLD-055-Data_Governance_for_AI_with_Microsoft_Purview.docx",
      "lld": "Offerings/055-data-governance-for-ai-with-microsoft-purview/01-Design/LLD-055-Data_Governance_for_AI_with_Microsoft_Purview.docx",
      "sow": "Offerings/055-data-governance-for-ai-with-microsoft-purview/03-Sales-and-Delivery-Kit/055 - Statement of Work.docx",
      "wbs": "Offerings/055-data-governance-for-ai-with-microsoft-purview/03-Sales-and-Delivery-Kit/055 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Data & AI Platform",
    "heroKicker": "Data & AI Platform",
    "heroDescription": "Use Microsoft Purview Unified Catalog to describe, classify and govern the data that AI uses.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: data sits in many systems with unclear ownership.",
          "Without a validated delivery methodology: data quality is unknown; and each ai project extracts data by hand.",
          "The Data Governance for AI with Microsoft Purview engagement delivers a structured implementation blueprint designed to resolve these Data & AI Platform operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Chief Data Officer / CFO and Head of Data / Data Architect teams, particularly in retail, manufacturing, financial services."
      },
      "scope": [
        {
          "title": "Purview Unified Catalog & Governance Domains",
          "deliverables": "Configuration of Microsoft Purview Unified Catalog structured into business governance domains with glossary terms and published AI data products.",
          "notIncluded": "Deployment of new Azure data lakehouse infrastructure or legacy warehouse migration."
        },
        {
          "title": "Automated Source Scanning & UK Classification",
          "deliverables": "Setup of weekly Microsoft Purview scans across AI data sources applying system classifications and custom UK sensitive-data identifiers.",
          "notIncluded": "Source-system data cleansing or authoring of organisational data policies."
        },
        {
          "title": "Lineage, Quality Rules & Governed Access",
          "deliverables": "Configuration of end-to-end lineage showing which AI workloads consume which data products, per-product data quality rules, and owner-approved access requests in Unified Catalog.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Operational Runbooks & Handover",
          "deliverables": "Configuration acceptance log, domain-owner onboarding guide, and knowledge transfer to data governance and engineering teams.",
          "notIncluded": "Post-hypercare managed service operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 055 Data Governance For Ai With Microsoft Purview pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Data & AI Platform Rollout",
          "scenario": "Coordinated deployment of Data Governance for AI with Microsoft Purview across enterprise divisions, enabling cross-functional units to operationalise Data & AI Platform workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "056",
    "title": "Retail Demand Forecasting",
    "slug": "retail-demand-forecasting",
    "domain": "12 Predictive & Vision AI",
    "engagementType": "Implementation",
    "duration": "6–8 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/056-retail-demand-forecasting/02-IaC/README.md",
      "hld": "Offerings/056-retail-demand-forecasting/01-Design/HLD-056-Retail_Demand_Forecasting.docx",
      "lld": "Offerings/056-retail-demand-forecasting/01-Design/LLD-056-Retail_Demand_Forecasting.docx",
      "sow": "Offerings/056-retail-demand-forecasting/03-Sales-and-Delivery-Kit/056 - Statement of Work.docx",
      "wbs": "Offerings/056-retail-demand-forecasting/03-Sales-and-Delivery-Kit/056 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Predictive & Vision AI",
    "heroKicker": "Predictive & Vision AI",
    "heroDescription": "Forecast product demand by store and channel to improve stock levels, staffing and promotions.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: forecasts rely on spreadsheets and judgement.",
          "Without a validated delivery methodology: sensor and camera data is stored but not used; and pilots do not reach production.",
          "The Retail Demand Forecasting engagement delivers a structured implementation blueprint designed to resolve these Predictive & Vision AI operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Supply Chain Director and Head of Data Science / OT Lead teams, particularly in retail, manufacturing, utilities and logistics."
      },
      "scope": [
        {
          "title": "Private Forecasting & MLOps Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint subnet), Azure Machine Learning workspace, private Storage Account, Premium Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Multi-Driver Feature & Demand Pipeline",
          "deliverables": "Integration of historical sales, promotions, seasonality, and external demand drivers from Fabric or Databricks into private Azure Machine Learning pipelines.",
          "notIncluded": "Cleansing of legacy ERP/POS transaction histories."
        },
        {
          "title": "Weekly Retrained & Explainable Forecasting Models",
          "deliverables": "Development of demand forecasting models in Azure Machine Learning with automated weekly retraining schedules and driver-level explainability for planners.",
          "notIncluded": "Training foundation models from scratch or replacing core ERP planning systems."
        },
        {
          "title": "Planning Tool Publishing, Guardrails & Handover",
          "deliverables": "Scheduled batch publishing of forecasts to planning tools and Power BI, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 056 Retail Demand Forecasting pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Predictive & Vision AI Rollout",
          "scenario": "Coordinated deployment of Retail Demand Forecasting across enterprise divisions, enabling cross-functional units to operationalise Predictive & Vision AI workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 6–8 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "057",
    "title": "Fraud and Anomaly Detection",
    "slug": "fraud-and-anomaly-detection",
    "domain": "12 Predictive & Vision AI",
    "engagementType": "Implementation",
    "duration": "8 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/057-fraud-and-anomaly-detection/02-IaC/README.md",
      "hld": "Offerings/057-fraud-and-anomaly-detection/01-Design/HLD-057-Fraud_and_Anomaly_Detection.docx",
      "lld": "Offerings/057-fraud-and-anomaly-detection/01-Design/LLD-057-Fraud_and_Anomaly_Detection.docx",
      "sow": "Offerings/057-fraud-and-anomaly-detection/03-Sales-and-Delivery-Kit/057 - Statement of Work.docx",
      "wbs": "Offerings/057-fraud-and-anomaly-detection/03-Sales-and-Delivery-Kit/057 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Predictive & Vision AI",
    "heroKicker": "Predictive & Vision AI",
    "heroDescription": "Detect suspicious transactions and behaviour in near real time for investigation.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: forecasts rely on spreadsheets and judgement.",
          "Without a validated delivery methodology: sensor and camera data is stored but not used; and pilots do not reach production.",
          "The Fraud and Anomaly Detection engagement delivers a structured implementation blueprint designed to resolve these Predictive & Vision AI operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Supply Chain Director and Head of Data Science / OT Lead teams, particularly in retail, manufacturing, utilities and logistics."
      },
      "scope": [
        {
          "title": "Private Streaming & MLOps Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint subnet), private Event Hubs namespace, Azure Machine Learning workspace, private Storage Account, Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Near-Real-Time Transaction Scoring Pipeline",
          "deliverables": "Streaming ingestion of transactions via private Event Hubs scored in near real time by explainable fraud and anomaly models deployed on AML managed endpoints.",
          "notIncluded": "Replacing core payment gateways or card-processing infrastructure."
        },
        {
          "title": "Investigator Case Creation & Feedback Retraining",
          "deliverables": "Routing of high-risk transactions with reason codes into your case management system for human investigation, feeding investigator outcomes back into AML retraining loops.",
          "notIncluded": "Autonomous account freezing without investigator or rule-engine controls."
        },
        {
          "title": "Guardrails, Monitoring & Handover",
          "deliverables": "False-positive/precision monitoring, Deny-mode Azure Policy enforcement, operational runbooks, and knowledge transfer.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 057 Fraud And Anomaly Detection pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Predictive & Vision AI Rollout",
          "scenario": "Coordinated deployment of Fraud and Anomaly Detection across enterprise divisions, enabling cross-functional units to operationalise Predictive & Vision AI workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 8 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "058",
    "title": "AI Budgets, Quotas and Guardrails",
    "slug": "ai-budgets-quotas-and-guardrails",
    "domain": "14 AI FinOps",
    "engagementType": "Implementation",
    "duration": "2–3 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/058-ai-budgets-quotas-and-guardrails/02-IaC/README.md",
      "hld": "Offerings/058-ai-budgets-quotas-and-guardrails/01-Design/HLD-058-AI_Budgets_Quotas_and_Guardrails.docx",
      "lld": "Offerings/058-ai-budgets-quotas-and-guardrails/01-Design/LLD-058-AI_Budgets_Quotas_and_Guardrails.docx",
      "sow": "Offerings/058-ai-budgets-quotas-and-guardrails/03-Sales-and-Delivery-Kit/058 - Statement of Work.docx",
      "wbs": "Offerings/058-ai-budgets-quotas-and-guardrails/03-Sales-and-Delivery-Kit/058 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "AI FinOps",
    "heroKicker": "AI FinOps",
    "heroDescription": "Put budgets, quotas and policy guardrails in place so AI spending cannot run away.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: AI costs appear only by subscription.",
          "Without a validated delivery methodology: no quotas or budgets for ai; and provisioned capacity is under-used or over-bought.",
          "The AI Budgets, Quotas and Guardrails engagement delivers a structured implementation blueprint designed to resolve these AI FinOps operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CFO / CIO and FinOps Lead / Cloud Platform Lead teams, particularly in all industries."
      },
      "scope": [
        {
          "title": "Private AI Gateway & Telemetry Foundation",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint and internal APIM subnets), internal API Management AI gateway, Microsoft Foundry, Premium Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or negotiation of Microsoft commercial agreements."
        },
        {
          "title": "Subscription & Application Budgets with Three-Level Alerts",
          "deliverables": "Configuration of Azure Cost Management budgets per AI subscription and application with automated alerts at 50%, 80%, and 100% spend thresholds and mandatory CAF cost-attribution tagging.",
          "notIncluded": "Building end-user AI applications or modifying enterprise billing agreements."
        },
        {
          "title": "Gateway Token Quotas & Chargeback Metrics",
          "deliverables": "Enforcement of per-application token limits at the internal API Management AI gateway (hard limits in non-production, agreed limits in production) with token-usage headers and team chargeback telemetry.",
          "notIncluded": "Authoring of organisational FinOps policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "SKU Guardrails & Operational Handover",
          "deliverables": "Azure Policy rules restricting unapproved high-cost model/compute SKUs, Deny-mode enforcement in production, monthly optimisation review playbook, and operational handover.",
          "notIncluded": "Post-hypercare managed FinOps operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 058 Ai Budgets Quotas And Guardrails pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental AI FinOps Rollout",
          "scenario": "Coordinated deployment of AI Budgets, Quotas and Guardrails across enterprise divisions, enabling cross-functional units to operationalise AI FinOps workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 2–3 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "059",
    "title": "AI Centre of Excellence Setup",
    "slug": "ai-centre-of-excellence-setup",
    "domain": "15 AI Strategy & Readiness",
    "engagementType": "Implementation",
    "duration": "6–8 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/059-ai-centre-of-excellence-setup/02-IaC/README.md",
      "hld": "Offerings/059-ai-centre-of-excellence-setup/01-Design/HLD-059-AI_Centre_of_Excellence_Setup.docx",
      "lld": "Offerings/059-ai-centre-of-excellence-setup/01-Design/LLD-059-AI_Centre_of_Excellence_Setup.docx",
      "sow": "Offerings/059-ai-centre-of-excellence-setup/03-Sales-and-Delivery-Kit/059 - Statement of Work.docx",
      "wbs": "Offerings/059-ai-centre-of-excellence-setup/03-Sales-and-Delivery-Kit/059 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "AI Strategy & Readiness",
    "heroKicker": "AI Strategy & Readiness",
    "heroDescription": "Set up an AI Centre of Excellence with the people, processes and platforms to scale AI across the organisation.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: many ai ideas, no clear priorities.",
          "Without a validated delivery methodology: unknown readiness across data, platform and skills; and no business case for ai investment.",
          "The AI Centre of Excellence Setup engagement delivers a structured implementation blueprint designed to resolve these AI Strategy & Readiness operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CEO / CIO / Transformation Director and Enterprise Architect / Head of Data teams, particularly in all industries."
      },
      "scope": [
        {
          "title": "AI CoE Operating Model, Roles & Funding Charter",
          "deliverables": "Definition of AI Centre of Excellence roles, decision rights, demand-intake governance, and funding/chargeback model tailored to your organisation.",
          "notIncluded": "Build of individual AI solutions or changes to platform landing zone subscriptions."
        },
        {
          "title": "Standardised Delivery Patterns & Shared Platform Blueprint",
          "deliverables": "Establishment of reusable architecture patterns, security/DPIA checklists, and shared AI Landing Zone onboarding standards for product teams.",
          "notIncluded": "Authoring of legal policies, formal DPIAs, or equality impact assessments."
        },
        {
          "title": "Internal Champions Network & Skills Programme",
          "deliverables": "Design and launch of an internal AI training curriculum, departmental champions network, and community-of-practice cadence to build lasting internal capability.",
          "notIncluded": "Mandatory organisation-wide HR compliance training."
        },
        {
          "title": "Readiness Alignment & CoE Handover",
          "deliverables": "Alignment of CoE backlog intake with CAF readiness checks and handover of CoE governance artefacts and operating playbooks.",
          "notIncluded": "Ongoing managed CoE staffing post-hypercare."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 059 Ai Centre Of Excellence Setup pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental AI Strategy & Readiness Rollout",
          "scenario": "Coordinated deployment of AI Centre of Excellence Setup across enterprise divisions, enabling cross-functional units to operationalise AI Strategy & Readiness workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 6–8 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "060",
    "title": "Sovereign and Regulated AI Landing Zone",
    "slug": "sovereign-and-regulated-ai-landing-zone",
    "domain": "01 AI Landing Zone",
    "engagementType": "Implementation",
    "duration": "8–10 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/060-sovereign-and-regulated-ai-landing-zone/02-IaC/README.md",
      "hld": "Offerings/060-sovereign-and-regulated-ai-landing-zone/01-Design/HLD-060-Sovereign_and_Regulated_AI_Landing_Zone.docx",
      "lld": "Offerings/060-sovereign-and-regulated-ai-landing-zone/01-Design/LLD-060-Sovereign_and_Regulated_AI_Landing_Zone.docx",
      "sow": "Offerings/060-sovereign-and-regulated-ai-landing-zone/03-Sales-and-Delivery-Kit/060 - Statement of Work.docx",
      "wbs": "Offerings/060-sovereign-and-regulated-ai-landing-zone/03-Sales-and-Delivery-Kit/060 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "AI Landing Zone",
    "heroKicker": "AI Landing Zone",
    "heroDescription": "Extend the AI landing zone for regulated or public-sector use, with strict UK data residency, customer-managed keys and evidence for auditors.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: AI pilots run in isolated subscriptions with public endpoints and API keys.",
          "Without a validated delivery methodology: no shared gateway, quotas or cost visibility for ai; and security and data protection teams block ai because controls are unclear.",
          "The Sovereign and Regulated AI Landing Zone engagement delivers a structured implementation blueprint designed to resolve these AI Landing Zone operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CIO / Head of Digital and Head of Cloud Platform / Enterprise Architect teams, particularly in public sector, financial services, retail."
      },
      "scope": [
        {
          "title": "Sovereign & Private AI Landing Zone Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint and internal APIM subnets), Microsoft Foundry, Azure AI Content Safety, internal API Management AI gateway, Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "UK-Only Residency & Deny-by-Default Guardrails",
          "deliverables": "Configuration of strict Azure Policy regulatory initiatives restricting all deployments and model endpoints exclusively to UK South and UK West regions (Audit in dev/test, Deny in prod).",
          "notIncluded": "Design and build of individual AI use-case applications or M365 Copilot."
        },
        {
          "title": "Customer-Managed Keys (CMK) & Zero Trust Controls",
          "deliverables": "Implementation of customer-managed key (CMK) encryption patterns using Key Vault / Managed HSM alongside disabled local authentication, Private Endpoints, and Prompt Shields.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or formal regulatory certifications."
        },
        {
          "title": "Regulatory Compliance Mapping & Handover",
          "deliverables": "Defender for Cloud regulatory compliance dashboards mapping technical controls to target UK frameworks, plus operational runbooks.",
          "notIncluded": "Post-hypercare managed service operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 060 Sovereign And Regulated Ai Landing Zone pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental AI Landing Zone Rollout",
          "scenario": "Coordinated deployment of Sovereign and Regulated AI Landing Zone across enterprise divisions, enabling cross-functional units to operationalise AI Landing Zone workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 8–10 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "061",
    "title": "Procurement and Purchase Request Agent",
    "slug": "procurement-and-purchase-request-agent",
    "domain": "04 Custom AI Agents",
    "engagementType": "Implementation",
    "duration": "6–8 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/061-procurement-and-purchase-request-agent/02-IaC/README.md",
      "hld": "Offerings/061-procurement-and-purchase-request-agent/01-Design/HLD-061-Procurement_and_Purchase_Request_Agent.docx",
      "lld": "Offerings/061-procurement-and-purchase-request-agent/01-Design/LLD-061-Procurement_and_Purchase_Request_Agent.docx",
      "sow": "Offerings/061-procurement-and-purchase-request-agent/03-Sales-and-Delivery-Kit/061 - Statement of Work.docx",
      "wbs": "Offerings/061-procurement-and-purchase-request-agent/03-Sales-and-Delivery-Kit/061 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Custom AI Agents",
    "heroKicker": "Custom AI Agents",
    "heroDescription": "Help staff raise compliant purchase requests, check suppliers and route approvals.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: processes span several systems and hand-offs.",
          "Without a validated delivery methodology: early agent experiments use shared accounts and direct keys; and no tracing or approval steps for actions taken by ai.",
          "The Procurement and Purchase Request Agent engagement delivers a structured implementation blueprint designed to resolve these Custom AI Agents operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Head of Shared Services and Head of Engineering / Integration Architect teams, particularly in financial services, retail and logistics, public sector."
      },
      "scope": [
        {
          "title": "Private Procurement Agent Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Cosmos DB serverless, Key Vault, and central monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Policy-as-Data & Preferred Supplier Checks",
          "deliverables": "Configuration of the Procurement and Purchase Request Agent on Foundry Agent Service to validate purchase intent against codified procurement policy thresholds and preferred supplier catalogues.",
          "notIncluded": "Cleansing of legacy supplier master data or ERP procurement module upgrades."
        },
        {
          "title": "Procurement API Request Creation & Delegation Routing",
          "deliverables": "Allow-listed procurement and ERP API tools behind internal API Management creating draft purchase requests with mandatory user confirmation before submission and routing approvals per existing delegation rules.",
          "notIncluded": "Unattended purchase order approval or Copilot Studio low-code agents."
        },
        {
          "title": "Agent Identity, Guardrails & Handover",
          "deliverables": "Dedicated Entra agent identity, Prompt Shields content filtering, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational procurement policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 061 Procurement And Purchase Request Agent pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Custom AI Agents Rollout",
          "scenario": "Coordinated deployment of Procurement and Purchase Request Agent across enterprise divisions, enabling cross-functional units to operationalise Custom AI Agents workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 6–8 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "062",
    "title": "Employee IT Helpdesk Agent in Teams",
    "slug": "employee-it-helpdesk-agent-in-teams",
    "domain": "06 Copilot Studio Agents",
    "engagementType": "Implementation",
    "duration": "4 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/062-employee-it-helpdesk-agent-in-teams/02-IaC/README.md",
      "hld": "Offerings/062-employee-it-helpdesk-agent-in-teams/01-Design/HLD-062-Employee_IT_Helpdesk_Agent_in_Teams.docx",
      "lld": "Offerings/062-employee-it-helpdesk-agent-in-teams/01-Design/LLD-062-Employee_IT_Helpdesk_Agent_in_Teams.docx",
      "sow": "Offerings/062-employee-it-helpdesk-agent-in-teams/03-Sales-and-Delivery-Kit/062 - Statement of Work.docx",
      "wbs": "Offerings/062-employee-it-helpdesk-agent-in-teams/03-Sales-and-Delivery-Kit/062 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Copilot Studio Agents",
    "heroKicker": "Copilot Studio Agents",
    "heroDescription": "Give staff a Copilot Studio agent in Teams for IT help, ticket status and common fixes.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: one shared power platform environment with weak data loss prevention.",
          "Without a validated delivery methodology: Agents published without testing or ownership; and makers connect to unapproved data sources.",
          "The Employee IT Helpdesk Agent in Teams engagement delivers a structured implementation blueprint designed to resolve these Copilot Studio Agents operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Head of Digital Workplace / HR Director and Power Platform Lead / Microsoft 365 Architect teams, particularly in public sector, retail, education."
      },
      "scope": [
        {
          "title": "Power Platform Managed Environments & ALM",
          "deliverables": "Configuration of separate development, test, and production Power Platform Managed Environments with DLP policies, Git solution packaging, and Power Platform release pipelines.",
          "notIncluded": "Pro-code Azure Foundry agents or Power Apps without agents."
        },
        {
          "title": "Teams Helpdesk Agent & Guided Self-Help",
          "deliverables": "Build of a Copilot Studio employee IT helpdesk agent in Microsoft Teams grounded in approved IT knowledge bases to deliver guided self-help fixes.",
          "notIncluded": "Cleansing or rewriting of legacy IT knowledge articles."
        },
        {
          "title": "ServiceNow / Jira Ticket Automation & Live Escalation",
          "deliverables": "Integration with ServiceNow or Jira Service Management connectors for automated ticket creation and status checks, with context-rich escalation to live IT analysts in Teams.",
          "notIncluded": "Changes to the platform landing zone or replacement of the core ITSM platform."
        },
        {
          "title": "Conversation Testing & Operational Handover",
          "deliverables": "Automated Copilot Studio conversation testing, environment deployment settings files, and handover runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 062 Employee It Helpdesk Agent In Teams pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Copilot Studio Agents Rollout",
          "scenario": "Coordinated deployment of Employee IT Helpdesk Agent in Teams across enterprise divisions, enabling cross-functional units to operationalise Copilot Studio Agents workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "063",
    "title": "Sentinel AI Threat Detection",
    "slug": "sentinel-ai-threat-detection",
    "domain": "08 AI Security",
    "engagementType": "Implementation",
    "duration": "3–4 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/063-sentinel-ai-threat-detection/02-IaC/README.md",
      "hld": "Offerings/063-sentinel-ai-threat-detection/01-Design/HLD-063-Sentinel_AI_Threat_Detection.docx",
      "lld": "Offerings/063-sentinel-ai-threat-detection/01-Design/LLD-063-Sentinel_AI_Threat_Detection.docx",
      "sow": "Offerings/063-sentinel-ai-threat-detection/03-Sales-and-Delivery-Kit/063 - Statement of Work.docx",
      "wbs": "Offerings/063-sentinel-ai-threat-detection/03-Sales-and-Delivery-Kit/063 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "AI Security",
    "heroKicker": "AI Security",
    "heroDescription": "Extend Microsoft Sentinel with AI-specific analytics, hunting queries and automated response playbooks.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: AI services are not covered by specific threat detection.",
          "Without a validated delivery methodology: staff use unsanctioned ai tools; and no red-team testing before ai goes live.",
          "The Sentinel AI Threat Detection engagement delivers a structured implementation blueprint designed to resolve these AI Security operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CISO and Security Architect / SOC Lead teams, particularly in financial services, public sector, healthcare."
      },
      "scope": [
        {
          "title": "Central AI Telemetry & Log Ingestion Foundation",
          "deliverables": "Infrastructure-as-code deployment of Log Analytics workspace, Application Insights, spoke VNet, and ingestion of AI workload diagnostic logs and Defender for Cloud AI alerts into Microsoft Sentinel across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "AI Misuse & Threat Analytics Rules",
          "deliverables": "Configuration of Microsoft Sentinel analytics rules detecting AI-specific misuse patterns, prompt-injection spikes, anomalous token consumption, and suspicious model/data access.",
          "notIncluded": "Security remediation for Microsoft 365 Copilot SharePoint permissions."
        },
        {
          "title": "Automated Logic Apps Containment Playbooks",
          "deliverables": "Implementation of Microsoft Sentinel SOAR playbooks on Logic Apps to automate initial containment actions (alert enrichment, key/access revocation, or team notification) for common AI incidents.",
          "notIncluded": "Authoring of organisational security policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "SOC Runbooks & Operational Handover",
          "deliverables": "Alignment with Defender for Cloud AI threat protection and Purview DSPM for AI signals, Deny-mode Azure Policies, SOC triage runbooks, and knowledge transfer.",
          "notIncluded": "24/7 managed SOC monitoring post-hypercare."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 063 Sentinel Ai Threat Detection pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental AI Security Rollout",
          "scenario": "Coordinated deployment of Sentinel AI Threat Detection across enterprise divisions, enabling cross-functional units to operationalise AI Security workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3–4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "064",
    "title": "Real-Time Intelligence for AI",
    "slug": "real-time-intelligence-for-ai",
    "domain": "10 Data & AI Platform",
    "engagementType": "Implementation",
    "duration": "6 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/064-real-time-intelligence-for-ai/02-IaC/README.md",
      "hld": "Offerings/064-real-time-intelligence-for-ai/01-Design/HLD-064-Real_Time_Intelligence_for_AI.docx",
      "lld": "Offerings/064-real-time-intelligence-for-ai/01-Design/LLD-064-Real_Time_Intelligence_for_AI.docx",
      "sow": "Offerings/064-real-time-intelligence-for-ai/03-Sales-and-Delivery-Kit/064 - Statement of Work.docx",
      "wbs": "Offerings/064-real-time-intelligence-for-ai/03-Sales-and-Delivery-Kit/064 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Data & AI Platform",
    "heroKicker": "Data & AI Platform",
    "heroDescription": "Stream operational events into Fabric Real-Time Intelligence so AI and alerts can act on live data.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: data sits in many systems with unclear ownership.",
          "Without a validated delivery methodology: data quality is unknown; and each ai project extracts data by hand.",
          "The Real-Time Intelligence for AI engagement delivers a structured implementation blueprint designed to resolve these Data & AI Platform operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Chief Data Officer / CFO and Head of Data / Data Architect teams, particularly in retail, manufacturing, financial services."
      },
      "scope": [
        {
          "title": "Private Streaming & Fabric Capacity Foundation",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint subnet), private Event Hubs namespace, Microsoft Fabric capacity, and Log Analytics monitoring across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Eventstreams & Common Event Schema Ingestion",
          "deliverables": "Configuration of Eventstreams and private Event Hubs to ingest live operational and telemetry events into a common event schema with Entra-only authentication.",
          "notIncluded": "Migration of all legacy data warehouses outside agreed real-time use cases."
        },
        {
          "title": "Eventhouse (KQL) Time-Series Store",
          "deliverables": "Provisioning of Microsoft Fabric Eventhouse (KQL) databases and domain-aligned workspaces storing and querying high-frequency time-series event data.",
          "notIncluded": "Source-system data cleansing or authoring of organisational data policies."
        },
        {
          "title": "Fabric Activator Rules & Operational Handover",
          "deliverables": "Configuration of Fabric Activator rules triggering automated alerts, workflows, and downstream AI agents as events occur, plus Deny-mode policies and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 064 Real Time Intelligence For Ai pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Data & AI Platform Rollout",
          "scenario": "Coordinated deployment of Real-Time Intelligence for AI across enterprise divisions, enabling cross-functional units to operationalise Data & AI Platform workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "065",
    "title": "Unity Catalog Governance and AI Assets",
    "slug": "unity-catalog-governance-and-ai-assets",
    "domain": "10 Data & AI Platform",
    "engagementType": "Implementation",
    "duration": "4 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/065-unity-catalog-governance-and-ai-assets/02-IaC/README.md",
      "hld": "Offerings/065-unity-catalog-governance-and-ai-assets/01-Design/HLD-065-Unity_Catalog_Governance_and_AI_Assets.docx",
      "lld": "Offerings/065-unity-catalog-governance-and-ai-assets/01-Design/LLD-065-Unity_Catalog_Governance_and_AI_Assets.docx",
      "sow": "Offerings/065-unity-catalog-governance-and-ai-assets/03-Sales-and-Delivery-Kit/065 - Statement of Work.docx",
      "wbs": "Offerings/065-unity-catalog-governance-and-ai-assets/03-Sales-and-Delivery-Kit/065 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Data & AI Platform",
    "heroKicker": "Data & AI Platform",
    "heroDescription": "Extend Unity Catalog to govern models, features, vector indexes and AI functions alongside data.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: data sits in many systems with unclear ownership.",
          "Without a validated delivery methodology: data quality is unknown; and each ai project extracts data by hand.",
          "The Unity Catalog Governance and AI Assets engagement delivers a structured implementation blueprint designed to resolve these Data & AI Platform operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Chief Data Officer / CFO and Head of Data / Data Architect teams, particularly in retail, manufacturing, financial services."
      },
      "scope": [
        {
          "title": "VNet-Injected Databricks & Storage Foundation",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint and Databricks host/container subnets), Premium Azure Databricks workspace with VNet injection and no public IP, private Storage Account, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Unity Catalog Governance for Models & AI Assets",
          "deliverables": "Extension of Unity Catalog metastore and per-environment catalogues to register and govern ML models, feature tables, prompts, and AI functions alongside medallion Delta tables.",
          "notIncluded": "Migration of all legacy data warehouses outside agreed AI use cases."
        },
        {
          "title": "Permission-Aware Databricks Vector Search",
          "deliverables": "Configuration of Databricks Vector Search retrieval indexes governed directly by Unity Catalog access permissions and end-to-end lineage linking data, features, and models.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Policy Guardrails & Operational Handover",
          "deliverables": "NoAzureDatabricksRules Private Link NSG isolation, Deny-mode Azure Policy enforcement, monthly budget alerts, and operational runbooks.",
          "notIncluded": "Post-hypercare managed service operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 065 Unity Catalog Governance And Ai Assets pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Data & AI Platform Rollout",
          "scenario": "Coordinated deployment of Unity Catalog Governance and AI Assets across enterprise divisions, enabling cross-functional units to operationalise Data & AI Platform workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "066",
    "title": "Dynamics 365 Contact Center AI",
    "slug": "dynamics-365-contact-center-ai",
    "domain": "13 Contact Centre AI",
    "engagementType": "Implementation",
    "duration": "8–10 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/066-dynamics-365-contact-center-ai/02-IaC/README.md",
      "hld": "Offerings/066-dynamics-365-contact-center-ai/01-Design/HLD-066-Dynamics_365_Contact_Center_AI.docx",
      "lld": "Offerings/066-dynamics-365-contact-center-ai/01-Design/LLD-066-Dynamics_365_Contact_Center_AI.docx",
      "sow": "Offerings/066-dynamics-365-contact-center-ai/03-Sales-and-Delivery-Kit/066 - Statement of Work.docx",
      "wbs": "Offerings/066-dynamics-365-contact-center-ai/03-Sales-and-Delivery-Kit/066 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Contact Centre AI",
    "heroKicker": "Contact Centre AI",
    "heroDescription": "Implement Dynamics 365 Contact Center with Copilot features for routing, self-service and agent assistance.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: touch-tone menus frustrate customers.",
          "Without a validated delivery methodology: qa samples only a small share of calls; and Agents write notes by hand after every call.",
          "The Dynamics 365 Contact Center AI engagement delivers a structured implementation blueprint designed to resolve these Contact Centre AI operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Customer Service Director and Contact Centre Technology Lead teams, particularly in retail, utilities, financial services."
      },
      "scope": [
        {
          "title": "Dynamics 365 Contact Centre Channel & Routing Setup",
          "deliverables": "Configuration of voice and digital channels in Dynamics 365 contact centre with intelligent intent-based routing and transparent AI disclosure with human handover.",
          "notIncluded": "Replacement of existing telephony carriers or changes to the platform landing zone."
        },
        {
          "title": "Copilot in Dynamics 365 Agent Assist & Summaries",
          "deliverables": "Enablement of Copilot in Dynamics 365 to provide real-time agent assistance, knowledge suggestions, and structured contact summaries.",
          "notIncluded": "Bespoke Azure AI Foundry custom agent development."
        },
        {
          "title": "Transcript Redaction & Retention Alignment",
          "deliverables": "Configuration of call recording and transcript retention settings with automated personal and payment data redaction aligned to UK GDPR and DPIA controls.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Power BI Service & AI Impact Reporting",
          "deliverables": "Delivery of Power BI dashboards tracking contact-centre service levels, wait-time reductions, and Copilot adoption impact, plus operational handover.",
          "notIncluded": "Post-hypercare managed contact-centre operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 066 Dynamics 365 Contact Center Ai pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Contact Centre AI Rollout",
          "scenario": "Coordinated deployment of Dynamics 365 Contact Center AI across enterprise divisions, enabling cross-functional units to operationalise Contact Centre AI workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 8–10 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "067",
    "title": "AI Subscription Vending",
    "slug": "ai-subscription-vending",
    "domain": "01 AI Landing Zone",
    "engagementType": "Accelerator",
    "duration": "2–3 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/067-ai-subscription-vending/02-IaC/README.md",
      "hld": "Offerings/067-ai-subscription-vending/01-Design/HLD-067-AI_Subscription_Vending.docx",
      "lld": "Offerings/067-ai-subscription-vending/01-Design/LLD-067-AI_Subscription_Vending.docx",
      "sow": "Offerings/067-ai-subscription-vending/03-Sales-and-Delivery-Kit/067 - Statement of Work.docx",
      "wbs": "Offerings/067-ai-subscription-vending/03-Sales-and-Delivery-Kit/067 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "AI Landing Zone",
    "heroKicker": "AI Landing Zone",
    "heroDescription": "Automate the creation of AI workload subscriptions so every new AI project starts with networking, policies, budgets and access already in place.",
    "details": {
      "overview": {
        "businessChallenge": [
          "As enterprise AI adoption scales, centralized cloud platform teams frequently become operational bottlenecks, manually configuring networking, identity, and security controls for each new data science project.",
          "Ad-hoc subscription creation leads to configuration drift, unmonitored egress points, inconsistent tag attribution, and unexpected consumption billing spikes.",
          "The AI Subscription Vending Accelerator automates the end-to-end creation of fully governed Azure AI workload subscriptions, ensuring every new project begins with private networking, policy guardrails, and budget caps pre-configured."
        ],
        "targetAudience": "Cloud Platform Engineers, Enterprise Architects, DevOps Leads, and Cloud FinOps Managers."
      },
      "scope": [
        {
          "title": "Standardised AI Spoke Archetypes",
          "deliverables": "Pre-architected subscription templates configured for AI development, training, and production inferencing workloads.",
          "notIncluded": "Re-engineering of existing production tenant billing agreements."
        },
        {
          "title": "Automated Network Peering & Routing",
          "deliverables": "Automated provisioning of spoke virtual networks, peering with central connectivity hubs, and private route table injection.",
          "notIncluded": "Provisioning physical ExpressRoute circuits or on-premises SD-WAN routers."
        },
        {
          "title": "Mandatory Governance & Policy Injection",
          "deliverables": "Automated policy assignment baseline enforcing private endpoint creation, encryption at rest, and mandatory resource tagging.",
          "notIncluded": "Ongoing remediation of third-party legacy subscriptions outside the vending scope."
        },
        {
          "title": "FinOps Budgets & Cost Controls",
          "deliverables": "Integrated Microsoft Cost Management budget caps, automatic alerting thresholds, and project-level chargeback tags.",
          "notIncluded": "Financial invoice payment or billing reconciliations."
        },
        {
          "title": "Self-Service Pipeline Workflow & Handover",
          "deliverables": "GitHub Actions or Azure DevOps pipeline modules triggering automated vending via parameter files or ServiceNow requests.",
          "notIncluded": "Custom ServiceNow portal frontend development."
        }
      ],
      "applications": [
        {
          "title": "Automated Data Science Onboarding",
          "scenario": "A pharmaceutical research organisation vending isolated, compliant AI sandbox subscriptions to research teams in under 30 minutes with zero manual platform effort."
        },
        {
          "title": "Multi-Environment Promotion Vending",
          "scenario": "An enterprise development team vending identical Dev, Test, and Prod AI subscriptions with automated policy enforcement and strict private endpoints."
        }
      ],
      "engagement": {
        "timeline": "About 3 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "2–3 days",
            "activities": "Confirm scope, subscription archetypes, IP subnet allocations, and policy baseline."
          },
          {
            "name": "Deploy",
            "duration": "1 week",
            "activities": "Deploy vending automation code (Bicep / Terraform), pipeline workflows, and network modules."
          },
          {
            "name": "Validate",
            "duration": "1 week",
            "activities": "Test automated subscription provisioning, verify policy enforcement, and train platform team."
          },
          {
            "name": "Handover",
            "duration": "2–3 days",
            "activities": "Deliver operational runbooks, vending parameter documentation, and project closure."
          }
        ],
        "prerequisites": [
          "An existing Azure Landing Zone with hub-spoke networking and central private DNS infrastructure.",
          "Microsoft Customer Agreement (MCA) or Enterprise Agreement (EA) billing permissions to programmatically create subscriptions.",
          "Available IP address pools allocated for vending spoke virtual networks.",
          "Azure DevOps or GitHub organisation with pipeline runners configured for infrastructure deployment."
        ],
        "faqs": [
          {
            "question": "Which Infrastructure-as-Code tooling is supported?",
            "answer": "The vending accelerator includes native modular templates written in both Azure Bicep and HashiCorp Terraform, integrating cleanly with your existing CI/CD pipelines."
          },
          {
            "question": "Can we customize the security baseline enforced on vended subscriptions?",
            "answer": "Yes. The vending engine parameterizes Azure Policy assignments, allowing you to configure custom naming conventions, allowed model SKUs, mandatory tags, and regional boundaries."
          },
          {
            "question": "How are budgets and cost limits enforced?",
            "answer": "Every provisioned subscription is automatically paired with an Azure Cost Management budget and automated alert recipients, ensuring immediate notification when consumption thresholds are reached."
          }
        ]
      }
    }
  },
  {
    "code": "068",
    "title": "Power Platform and Copilot Studio Governance (CoE)",
    "slug": "power-platform-and-copilot-studio-governance-coe",
    "domain": "06 Copilot Studio Agents",
    "engagementType": "Implementation",
    "duration": "5–6 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/068-power-platform-and-copilot-studio-governance-coe/02-IaC/README.md",
      "hld": "Offerings/068-power-platform-and-copilot-studio-governance-coe/01-Design/HLD-068-Power_Platform_and_Copilot_Studio_Governance_CoE.docx",
      "lld": "Offerings/068-power-platform-and-copilot-studio-governance-coe/01-Design/LLD-068-Power_Platform_and_Copilot_Studio_Governance_CoE.docx",
      "sow": "Offerings/068-power-platform-and-copilot-studio-governance-coe/03-Sales-and-Delivery-Kit/068 - Statement of Work.docx",
      "wbs": "Offerings/068-power-platform-and-copilot-studio-governance-coe/03-Sales-and-Delivery-Kit/068 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Copilot Studio Agents",
    "heroKicker": "Copilot Studio Agents",
    "heroDescription": "Set up a Centre of Excellence for Power Platform and Copilot Studio, with environments, DLP, monitoring and maker support.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: one shared power platform environment with weak data loss prevention.",
          "Without a validated delivery methodology: Agents published without testing or ownership; and makers connect to unapproved data sources.",
          "The Power Platform and Copilot Studio Governance (CoE) engagement delivers a structured implementation blueprint designed to resolve these Copilot Studio Agents operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Head of Digital Workplace / HR Director and Power Platform Lead / Microsoft 365 Architect teams, particularly in public sector, retail, education."
      },
      "scope": [
        {
          "title": "Power Platform CoE Starter Kit Deployment",
          "deliverables": "Deployment and configuration of the Power Platform CoE Starter Kit providing central IT visibility of all apps, flows, and Copilot Studio agents across the tenant.",
          "notIncluded": "Pro-code Azure Foundry agents or building individual business use-case agents."
        },
        {
          "title": "Three-Tier Managed Environments & DLP Strategy",
          "deliverables": "Implementation of a three-tier environment strategy (development, test, production) using Managed Environments and tiered Data Loss Prevention policies.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "ALM & Maker Onboarding Community",
          "deliverables": "Setup of maker onboarding workflows, Teams/SharePoint maker support hub, and Power Platform ALM pipelines with deployment settings and approvals.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Governance Runbooks & Handover",
          "deliverables": "Configuration acceptance log, maker enablement guide, and knowledge transfer to platform administrators.",
          "notIncluded": "Post-hypercare managed CoE administration."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 068 Power Platform And Copilot Studio Governance Coe pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Copilot Studio Agents Rollout",
          "scenario": "Coordinated deployment of Power Platform and Copilot Studio Governance (CoE) across enterprise divisions, enabling cross-functional units to operationalise Copilot Studio Agents workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 5–6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "069",
    "title": "Microsoft 365 Copilot Chat Rollout",
    "slug": "microsoft-365-copilot-chat-rollout",
    "domain": "07 Microsoft 365 Copilot",
    "engagementType": "Implementation",
    "duration": "2–3 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/069-microsoft-365-copilot-chat-rollout/02-IaC/README.md",
      "hld": "Offerings/069-microsoft-365-copilot-chat-rollout/01-Design/HLD-069-Microsoft_365_Copilot_Chat_Rollout.docx",
      "lld": "Offerings/069-microsoft-365-copilot-chat-rollout/01-Design/LLD-069-Microsoft_365_Copilot_Chat_Rollout.docx",
      "sow": "Offerings/069-microsoft-365-copilot-chat-rollout/03-Sales-and-Delivery-Kit/069 - Statement of Work.docx",
      "wbs": "Offerings/069-microsoft-365-copilot-chat-rollout/03-Sales-and-Delivery-Kit/069 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Microsoft 365 Copilot",
    "heroKicker": "Microsoft 365 Copilot",
    "heroDescription": "Roll out Microsoft 365 Copilot Chat with enterprise data protection to all staff as a safe, low-cost first step.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: years of oversharing in sharepoint and teams.",
          "Without a validated delivery methodology: limited sensitivity labelling; and licences purchased but usage is low.",
          "The Microsoft 365 Copilot Chat Rollout engagement delivers a structured implementation blueprint designed to resolve these Microsoft 365 Copilot operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CIO / Chief People Officer and Microsoft 365 Lead / Information Governance Lead teams, particularly in professional services, public sector, financial services."
      },
      "scope": [
        {
          "title": "Copilot Chat Enterprise Data Protection Setup",
          "deliverables": "Enablement of Microsoft 365 Copilot Chat with enterprise data protection across the workforce, configuring web grounding and approved-agent policies.",
          "notIncluded": "Deployment of Azure AI workloads or custom Copilot extensions."
        },
        {
          "title": "Shadow AI Monitoring & Blocking (Defender for Cloud Apps)",
          "deliverables": "Configuration of Defender for Cloud Apps policies to discover, monitor, and block unsanctioned public generative AI sites, guiding staff onto sanctioned Copilot Chat.",
          "notIncluded": "Procurement of M365/Defender licences or legacy file share migrations."
        },
        {
          "title": "Purview DLP, Labels & Conditional Access Alignment",
          "deliverables": "Verification of Purview sensitivity labels, Copilot DLP exclusions for Highly Confidential content, SharePoint oversharing reports, and Entra Conditional Access baselines.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Staged Rollout Waves & Handover",
          "deliverables": "Three-wave rollout plan (champions, low-risk teams, organisation-wide), usage and sentiment tracking setup, and operational handover.",
          "notIncluded": "Post-hypercare managed IT support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 069 Microsoft 365 Copilot Chat Rollout pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Microsoft 365 Copilot Rollout",
          "scenario": "Coordinated deployment of Microsoft 365 Copilot Chat Rollout across enterprise divisions, enabling cross-functional units to operationalise Microsoft 365 Copilot workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 2–3 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "070",
    "title": "Algorithmic Transparency for Public Sector",
    "slug": "algorithmic-transparency-for-public-sector",
    "domain": "09 Responsible AI & Compliance",
    "engagementType": "Implementation",
    "duration": "3 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/070-algorithmic-transparency-for-public-sector/02-IaC/README.md",
      "hld": "Offerings/070-algorithmic-transparency-for-public-sector/01-Design/HLD-070-Algorithmic_Transparency_for_Public_Sector.docx",
      "lld": "Offerings/070-algorithmic-transparency-for-public-sector/01-Design/LLD-070-Algorithmic_Transparency_for_Public_Sector.docx",
      "sow": "Offerings/070-algorithmic-transparency-for-public-sector/03-Sales-and-Delivery-Kit/070 - Statement of Work.docx",
      "wbs": "Offerings/070-algorithmic-transparency-for-public-sector/03-Sales-and-Delivery-Kit/070 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Responsible AI & Compliance",
    "heroKicker": "Responsible AI & Compliance",
    "heroDescription": "Help public bodies publish clear information about their algorithmic tools in line with the Algorithmic Transparency Recording Standard.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: no central record of ai use cases.",
          "Without a validated delivery methodology: risk is not classified consistently; and no evidence of testing for auditors.",
          "The Algorithmic Transparency for Public Sector engagement delivers a structured implementation blueprint designed to resolve these Responsible AI & Compliance operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Chief Risk Officer / General Counsel and Data Protection Officer / AI Lead teams, particularly in financial services, public sector, healthcare."
      },
      "scope": [
        {
          "title": "Algorithmic Transparency Template & Standard Setup",
          "deliverables": "Configuration of structured public-sector algorithmic transparency templates aligned to plain-language public explanation standards and UK GDPR accountability.",
          "notIncluded": "Deployment of Azure AI PaaS workloads or changes to the platform landing zone."
        },
        {
          "title": "AI Register Integration & Technical Sourcing",
          "deliverables": "Mapping of technical metadata (purpose, owner, risk tier, data sources, evaluation evidence) directly from the central AI use-case and model register into transparency records.",
          "notIncluded": "Legal interpretation of statutory regulations or authoring of formal DPIAs."
        },
        {
          "title": "Drafting of In-Scope Transparency Records",
          "deliverables": "Collaborative drafting of plain-language algorithmic transparency records for agreed in-scope public-sector AI tools and automated decision aids.",
          "notIncluded": "Building or modifying the underlying AI models or applications."
        },
        {
          "title": "Change-Triggered Review Process & Handover",
          "deliverables": "Definition of change-triggered review workflows ensuring records stay current whenever models, prompts, or data sources change, plus operational handover.",
          "notIncluded": "Post-hypercare managed publishing operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 070 Algorithmic Transparency For Public Sector pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Responsible AI & Compliance Rollout",
          "scenario": "Coordinated deployment of Algorithmic Transparency for Public Sector across enterprise divisions, enabling cross-functional units to operationalise Responsible AI & Compliance workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "071",
    "title": "Model Monitoring and Drift Detection",
    "slug": "model-monitoring-and-drift-detection",
    "domain": "11 MLOps & LLMOps",
    "engagementType": "Implementation",
    "duration": "3–4 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/071-model-monitoring-and-drift-detection/02-IaC/README.md",
      "hld": "Offerings/071-model-monitoring-and-drift-detection/01-Design/HLD-071-Model_Monitoring_and_Drift_Detection.docx",
      "lld": "Offerings/071-model-monitoring-and-drift-detection/01-Design/LLD-071-Model_Monitoring_and_Drift_Detection.docx",
      "sow": "Offerings/071-model-monitoring-and-drift-detection/03-Sales-and-Delivery-Kit/071 - Statement of Work.docx",
      "wbs": "Offerings/071-model-monitoring-and-drift-detection/03-Sales-and-Delivery-Kit/071 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "MLOps & LLMOps",
    "heroKicker": "MLOps & LLMOps",
    "heroDescription": "Monitor production models and generative AI for drift, quality, safety and cost, with alerts to owners.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: models are deployed by hand from notebooks.",
          "Without a validated delivery methodology: prompts are not versioned or tested; and nobody notices when model quality drifts.",
          "The Model Monitoring and Drift Detection engagement delivers a structured implementation blueprint designed to resolve these MLOps & LLMOps operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Chief Data Officer / Head of Analytics and ML Engineering Lead / Platform Engineer teams, particularly in financial services, retail, manufacturing."
      },
      "scope": [
        {
          "title": "Private Model Monitoring Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint subnet), private Azure Machine Learning workspace with managed network, dedicated ML storage, Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Six-Signal Drift & Generative Quality Monitoring",
          "deliverables": "Configuration of AML model monitoring and Foundry quality monitoring tracking data drift, prediction drift, feature attribution drift, data quality, generative quality sampling, and cost/latency signals.",
          "notIncluded": "Training foundation models from scratch or building end-user applications."
        },
        {
          "title": "Owner-Routed Azure Monitor Alerting",
          "deliverables": "Automated Azure Monitor alert rules routing degradation and drift notifications directly to named model owners with defined response playbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Guardrails & Operational Handover",
          "deliverables": "Deny-mode Azure Policy enforcement, monthly budget alerts, operational runbooks, and knowledge transfer.",
          "notIncluded": "Post-hypercare managed MLOps support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 071 Model Monitoring And Drift Detection pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental MLOps & LLMOps Rollout",
          "scenario": "Coordinated deployment of Model Monitoring and Drift Detection across enterprise divisions, enabling cross-functional units to operationalise MLOps & LLMOps workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3–4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "072",
    "title": "Dynamic Pricing and Markdown Optimisation",
    "slug": "dynamic-pricing-and-markdown-optimisation",
    "domain": "12 Predictive & Vision AI",
    "engagementType": "Implementation",
    "duration": "8 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/072-dynamic-pricing-and-markdown-optimisation/02-IaC/README.md",
      "hld": "Offerings/072-dynamic-pricing-and-markdown-optimisation/01-Design/HLD-072-Dynamic_Pricing_and_Markdown_Optimisation.docx",
      "lld": "Offerings/072-dynamic-pricing-and-markdown-optimisation/01-Design/LLD-072-Dynamic_Pricing_and_Markdown_Optimisation.docx",
      "sow": "Offerings/072-dynamic-pricing-and-markdown-optimisation/03-Sales-and-Delivery-Kit/072 - Statement of Work.docx",
      "wbs": "Offerings/072-dynamic-pricing-and-markdown-optimisation/03-Sales-and-Delivery-Kit/072 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Predictive & Vision AI",
    "heroKicker": "Predictive & Vision AI",
    "heroDescription": "Recommend prices and markdowns that balance margin, sell-through and competitiveness.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: forecasts rely on spreadsheets and judgement.",
          "Without a validated delivery methodology: sensor and camera data is stored but not used; and pilots do not reach production.",
          "The Dynamic Pricing and Markdown Optimisation engagement delivers a structured implementation blueprint designed to resolve these Predictive & Vision AI operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Supply Chain Director and Head of Data Science / OT Lead teams, particularly in retail, manufacturing, utilities and logistics."
      },
      "scope": [
        {
          "title": "Private Pricing & MLOps Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint subnet), Azure Machine Learning workspace, private Storage Account, Premium Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Sales, Stock & Competitor Data Pipeline",
          "deliverables": "Ingestion and feature-engineering pipeline combining historical sales, inventory positions, and competitor price feeds inside private Storage (Entra ID only).",
          "notIncluded": "Procurement of third-party competitor pricing feeds or legacy ERP cleansing."
        },
        {
          "title": "Elasticity & Rule-Bound Markdown Models",
          "deliverables": "Development of explainable price-elasticity and markdown optimisation models in Azure Machine Learning enforcing commercial pricing guardrails (margin floors, brand rules).",
          "notIncluded": "Autonomous live price updates without pricing-manager approval."
        },
        {
          "title": "Pricing Tool Approval Integration & Handover",
          "deliverables": "Integration publishing recommended prices to your pricing tool for mandatory manager sign-off before POS/e-commerce update, Deny-mode policies, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 072 Dynamic Pricing And Markdown Optimisation pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Predictive & Vision AI Rollout",
          "scenario": "Coordinated deployment of Dynamic Pricing and Markdown Optimisation across enterprise divisions, enabling cross-functional units to operationalise Predictive & Vision AI workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 8 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "073",
    "title": "Agent Assist and Call Summaries",
    "slug": "agent-assist-and-call-summaries",
    "domain": "13 Contact Centre AI",
    "engagementType": "Implementation",
    "duration": "4–6 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/073-agent-assist-and-call-summaries/02-IaC/README.md",
      "hld": "Offerings/073-agent-assist-and-call-summaries/01-Design/HLD-073-Agent_Assist_and_Call_Summaries.docx",
      "lld": "Offerings/073-agent-assist-and-call-summaries/01-Design/LLD-073-Agent_Assist_and_Call_Summaries.docx",
      "sow": "Offerings/073-agent-assist-and-call-summaries/03-Sales-and-Delivery-Kit/073 - Statement of Work.docx",
      "wbs": "Offerings/073-agent-assist-and-call-summaries/03-Sales-and-Delivery-Kit/073 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Contact Centre AI",
    "heroKicker": "Contact Centre AI",
    "heroDescription": "Give contact centre staff real-time knowledge suggestions and automatic call summaries.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: touch-tone menus frustrate customers.",
          "Without a validated delivery methodology: qa samples only a small share of calls; and Agents write notes by hand after every call.",
          "The Agent Assist and Call Summaries engagement delivers a structured implementation blueprint designed to resolve these Contact Centre AI operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Customer Service Director and Contact Centre Technology Lead teams, particularly in retail, utilities, financial services."
      },
      "scope": [
        {
          "title": "Private Real-Time Speech & RAG Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Azure AI Speech, Azure AI Search, Container Apps, Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Replacement of the existing telephony platform or changes to the platform landing zone hub."
        },
        {
          "title": "Live Call Transcription & Real-Time Knowledge Assist",
          "deliverables": "Integration of private Azure AI Speech live transcription driving real-time knowledge suggestions from private Azure AI Search during active customer calls.",
          "notIncluded": "Cleansing or rewriting of legacy knowledge articles."
        },
        {
          "title": "Structured Call Summaries & CRM Save-Back",
          "deliverables": "Generation of fixed-format post-call summaries via Microsoft Foundry for mandatory human agent review prior to saving to CRM via secure APIs.",
          "notIncluded": "Autonomous CRM record updates without agent confirmation."
        },
        {
          "title": "Transcript Redaction, Guardrails & Handover",
          "deliverables": "Automated personal and payment data redaction from transcripts, Prompt Shields, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 073 Agent Assist And Call Summaries pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Contact Centre AI Rollout",
          "scenario": "Coordinated deployment of Agent Assist and Call Summaries across enterprise divisions, enabling cross-functional units to operationalise Contact Centre AI workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "074",
    "title": "Call Analytics and Quality Assurance",
    "slug": "call-analytics-and-quality-assurance",
    "domain": "13 Contact Centre AI",
    "engagementType": "Implementation",
    "duration": "4–6 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/074-call-analytics-and-quality-assurance/02-IaC/README.md",
      "hld": "Offerings/074-call-analytics-and-quality-assurance/01-Design/HLD-074-Call_Analytics_and_Quality_Assurance.docx",
      "lld": "Offerings/074-call-analytics-and-quality-assurance/01-Design/LLD-074-Call_Analytics_and_Quality_Assurance.docx",
      "sow": "Offerings/074-call-analytics-and-quality-assurance/03-Sales-and-Delivery-Kit/074 - Statement of Work.docx",
      "wbs": "Offerings/074-call-analytics-and-quality-assurance/03-Sales-and-Delivery-Kit/074 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Contact Centre AI",
    "heroKicker": "Contact Centre AI",
    "heroDescription": "Analyse every call for quality, compliance and sentiment instead of sampling a few.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: touch-tone menus frustrate customers.",
          "Without a validated delivery methodology: qa samples only a small share of calls; and Agents write notes by hand after every call.",
          "The Call Analytics and Quality Assurance engagement delivers a structured implementation blueprint designed to resolve these Contact Centre AI operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Customer Service Director and Contact Centre Technology Lead teams, particularly in retail, utilities, financial services."
      },
      "scope": [
        {
          "title": "Private Call Analytics Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint subnet), private Azure AI Speech, Azure AI Language, Microsoft Foundry, private Storage Account, Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Replacement of existing telephony platforms or changes to the platform landing zone hub."
        },
        {
          "title": "Batch Call Transcription & PII/PCI Redaction",
          "deliverables": "Automated batch transcription of recorded calls via private Azure AI Speech paired with private Azure AI Language redaction of personal and payment data.",
          "notIncluded": "Procurement of call-recording storage hardware or legacy archive migration."
        },
        {
          "title": "Automated QA & Compliance Scorecard Evaluation",
          "deliverables": "Azure OpenAI evaluation on Microsoft Foundry scoring 100% of calls against your existing quality assurance and compliance scorecards to detect breaches rapidly.",
          "notIncluded": "Authoring of organisational QA policies, DPIAs, or HR disciplinary workflows."
        },
        {
          "title": "Coaching Power BI Dashboards & Handover",
          "deliverables": "Coaching-focused Power BI reporting surfacing compliance flags and agent coaching insights, Deny-mode Azure Policies, and operational runbooks.",
          "notIncluded": "Post-hypercare managed QA operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 074 Call Analytics And Quality Assurance pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Contact Centre AI Rollout",
          "scenario": "Coordinated deployment of Call Analytics and Quality Assurance across enterprise divisions, enabling cross-functional units to operationalise Contact Centre AI workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "075",
    "title": "AI Cost Visibility and Chargeback",
    "slug": "ai-cost-visibility-and-chargeback",
    "domain": "14 AI FinOps",
    "engagementType": "Implementation",
    "duration": "3–4 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/075-ai-cost-visibility-and-chargeback/02-IaC/README.md",
      "hld": "Offerings/075-ai-cost-visibility-and-chargeback/01-Design/HLD-075-AI_Cost_Visibility_and_Chargeback.docx",
      "lld": "Offerings/075-ai-cost-visibility-and-chargeback/01-Design/LLD-075-AI_Cost_Visibility_and_Chargeback.docx",
      "sow": "Offerings/075-ai-cost-visibility-and-chargeback/03-Sales-and-Delivery-Kit/075 - Statement of Work.docx",
      "wbs": "Offerings/075-ai-cost-visibility-and-chargeback/03-Sales-and-Delivery-Kit/075 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "AI FinOps",
    "heroKicker": "AI FinOps",
    "heroDescription": "Show who uses which AI services and what it costs, and allocate costs to teams.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: AI costs appear only by subscription.",
          "Without a validated delivery methodology: no quotas or budgets for ai; and provisioned capacity is under-used or over-bought.",
          "The AI Cost Visibility and Chargeback engagement delivers a structured implementation blueprint designed to resolve these AI FinOps operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CFO / CIO and FinOps Lead / Cloud Platform Lead teams, particularly in all industries."
      },
      "scope": [
        {
          "title": "Private AI Gateway & Telemetry Foundation",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint and internal APIM subnets), internal API Management AI gateway, Microsoft Foundry, private Storage Account, Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub or negotiation of Microsoft commercial agreements."
        },
        {
          "title": "Per-Application Gateway Token Metering",
          "deliverables": "Configuration of the internal API Management AI gateway to meter token consumption per calling application, team, and model deployment.",
          "notIncluded": "Building end-user generative AI applications."
        },
        {
          "title": "Cost Export Integration & Shared-Cost Allocation",
          "deliverables": "Automated combination of Azure Cost Management billing exports with APIM token metrics in private Storage, allocating shared AI infrastructure costs proportionally by usage.",
          "notIncluded": "Replacing core enterprise ERP general ledger or billing systems."
        },
        {
          "title": "Power BI Chargeback Reporting & Handover",
          "deliverables": "Monthly FinOps chargeback and showback Power BI dashboards attributing every AI cost to a team, application, and business case, plus Deny-mode policies and operational runbooks.",
          "notIncluded": "Authoring of organisational FinOps policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 075 Ai Cost Visibility And Chargeback pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental AI FinOps Rollout",
          "scenario": "Coordinated deployment of AI Cost Visibility and Chargeback across enterprise divisions, enabling cross-functional units to operationalise AI FinOps workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3–4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "076",
    "title": "Provisioned Throughput Optimisation",
    "slug": "provisioned-throughput-optimisation",
    "domain": "14 AI FinOps",
    "engagementType": "Assessment",
    "duration": "2–3 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/076-provisioned-throughput-optimisation/02-IaC/README.md",
      "hld": "Offerings/076-provisioned-throughput-optimisation/01-Design/HLD-076-Provisioned_Throughput_Optimisation.docx",
      "lld": "Offerings/076-provisioned-throughput-optimisation/01-Design/LLD-076-Provisioned_Throughput_Optimisation.docx",
      "sow": "Offerings/076-provisioned-throughput-optimisation/03-Sales-and-Delivery-Kit/076 - Statement of Work.docx",
      "wbs": "Offerings/076-provisioned-throughput-optimisation/03-Sales-and-Delivery-Kit/076 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "AI FinOps",
    "heroKicker": "AI FinOps",
    "heroDescription": "Analyse AI usage to choose the best mix of pay-as-you-go, provisioned throughput and reservations.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: AI costs appear only by subscription.",
          "Without a validated delivery methodology: no quotas or budgets for ai; and provisioned capacity is under-used or over-bought.",
          "The Provisioned Throughput Optimisation engagement delivers a structured assessment blueprint designed to resolve these AI FinOps operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CFO / CIO and FinOps Lead / Cloud Platform Lead teams, particularly in all industries."
      },
      "scope": [
        {
          "title": "Read-Only AI Usage & Billing Evidence Gathering",
          "deliverables": "Non-intrusive read-only collection of Azure Cost Management exports, API Management token metrics, Provisioned Throughput Unit (PTU) utilisation telemetry, and recent invoices.",
          "notIncluded": "Modifications to live production deployments or negotiation of Microsoft commercial agreements."
        },
        {
          "title": "Pay-As-You-Go vs. Provisioned Throughput Modelling",
          "deliverables": "Technical and commercial analysis of token demand profiles per model and application, comparing pay-as-you-go against baseline-plus-spillover PTU pricing scenarios.",
          "notIncluded": "Changes to platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Gateway Spillover Routing & Sizing Design",
          "deliverables": "Specification of API Management spillover routing patterns pairing right-sized provisioned throughput for steady baseline traffic with pay-as-you-go overflow.",
          "notIncluded": "Hands-on production deployment of new Azure resources (available as follow-on implementation)."
        },
        {
          "title": "Optimisation Roadmap & Monthly Review Cadence",
          "deliverables": "Findings register, five-area FinOps readiness evaluation, executive presentation, and a repeatable monthly capacity-review playbook.",
          "notIncluded": "Authoring of organisational FinOps policies, DPIAs, or ongoing managed FinOps operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 076 Provisioned Throughput Optimisation pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental AI FinOps Rollout",
          "scenario": "Coordinated deployment of Provisioned Throughput Optimisation across enterprise divisions, enabling cross-functional units to operationalise AI FinOps workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 2–3 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Mobilise",
            "duration": "1–2 weeks",
            "activities": "Agree scope, stakeholders and access."
          },
          {
            "name": "Discover",
            "duration": "1 week",
            "activities": "Interviews, workshops and technical evidence gathering."
          },
          {
            "name": "Analyse",
            "duration": "1–2 weeks",
            "activities": "Score findings, identify gaps and options."
          },
          {
            "name": "Report",
            "duration": "1 week",
            "activities": "Present findings, prioritised recommendations and roadmap."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "077",
    "title": "AI Gateway Accelerator (API Management)",
    "slug": "ai-gateway-accelerator-api-management",
    "domain": "01 AI Landing Zone",
    "engagementType": "Accelerator",
    "duration": "3–4 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/077-ai-gateway-accelerator-api-management/02-IaC/README.md",
      "hld": "Offerings/077-ai-gateway-accelerator-api-management/01-Design/HLD-077-AI_Gateway_Accelerator_API_Management.docx",
      "lld": "Offerings/077-ai-gateway-accelerator-api-management/01-Design/LLD-077-AI_Gateway_Accelerator_API_Management.docx",
      "sow": "Offerings/077-ai-gateway-accelerator-api-management/03-Sales-and-Delivery-Kit/077 - Statement of Work.docx",
      "wbs": "Offerings/077-ai-gateway-accelerator-api-management/03-Sales-and-Delivery-Kit/077 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "AI Landing Zone",
    "heroKicker": "AI Landing Zone",
    "heroDescription": "Put a central AI gateway in front of every model and tool, so the organisation can control access, apply token limits, balance load and meter usage in one place.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: AI pilots run in isolated subscriptions with public endpoints and API keys.",
          "Without a validated delivery methodology: no shared gateway, quotas or cost visibility for ai; and security and data protection teams block ai because controls are unclear.",
          "The AI Gateway Accelerator (API Management) engagement delivers a structured accelerator blueprint designed to resolve these AI Landing Zone operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CIO / Head of Digital and Head of Cloud Platform / Enterprise Architect teams, particularly in public sector, financial services, retail."
      },
      "scope": [
        {
          "title": "Internal AI Gateway & Foundry Infrastructure",
          "deliverables": "Infrastructure-as-code deployment (Terraform or Bicep) of spoke VNet (private endpoint and internal APIM subnets), internal API Management AI gateway, Microsoft Foundry, Premium Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Entra Token Authentication & Reusable Policy Fragments",
          "deliverables": "Configuration of Entra ID token authentication for callers, managed-identity model access (eliminating shared API keys), and reusable APIM policy fragments for token rate limits and metrics.",
          "notIncluded": "Design or build of individual downstream AI use-case applications."
        },
        {
          "title": "Multi-Deployment Load Balancing & Failover",
          "deliverables": "Configuration of load-balanced Microsoft Foundry model backend pools with automated failover, Prompt Shields, and content filtering across UK South regional deployments.",
          "notIncluded": "Training custom foundation models or Microsoft 365 Copilot."
        },
        {
          "title": "Self-Service App Onboarding & Handover",
          "deliverables": "One-API-product-per-application onboarding template, Deny-mode Azure Policy enforcement, monthly budget alerts, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 077 Ai Gateway Accelerator Api Management pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental AI Landing Zone Rollout",
          "scenario": "Coordinated deployment of AI Gateway Accelerator (API Management) across enterprise divisions, enabling cross-functional units to operationalise AI Landing Zone workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3–4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Confirm scope, environment and prerequisites."
          },
          {
            "name": "Deploy",
            "duration": "2–4 weeks",
            "activities": "Deploy the accelerator modules as code and configure them."
          },
          {
            "name": "Validate",
            "duration": "1–2 weeks",
            "activities": "Test, tune and document; train the customer team."
          },
          {
            "name": "Handover",
            "duration": "1 week",
            "activities": "Hand over code, documentation and next steps."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "078",
    "title": "Document Summarisation Service",
    "slug": "document-summarisation-service",
    "domain": "02 Generative AI Applications",
    "engagementType": "Implementation",
    "duration": "3–4 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/078-document-summarisation-service/02-IaC/README.md",
      "hld": "Offerings/078-document-summarisation-service/01-Design/HLD-078-Document_Summarisation_Service.docx",
      "lld": "Offerings/078-document-summarisation-service/01-Design/LLD-078-Document_Summarisation_Service.docx",
      "sow": "Offerings/078-document-summarisation-service/03-Sales-and-Delivery-Kit/078 - Statement of Work.docx",
      "wbs": "Offerings/078-document-summarisation-service/03-Sales-and-Delivery-Kit/078 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Generative AI Applications",
    "heroKicker": "Generative AI Applications",
    "heroDescription": "Summarise long documents such as reports, case files and minutes into consistent, reviewable summaries.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: staff use public ai tools with company data.",
          "Without a validated delivery methodology: proofs of concept are built without logging, evaluation or safety controls; and teams rebuild the same plumbing for every use case.",
          "The Document Summarisation Service engagement delivers a structured implementation blueprint designed to resolve these Generative AI Applications operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Business Unit Director and Head of Engineering / AI Lead teams, particularly in professional services, public sector, retail."
      },
      "scope": [
        {
          "title": "Private Document Summarisation Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Azure AI Document Intelligence, private Storage Account, Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Layout-Aware Ingestion & Sectioned Summarisation",
          "deliverables": "Ingestion pipeline using private Blob Storage and Azure AI Document Intelligence to extract text and layout, summarising long documents in sections before combining them into a unified summary.",
          "notIncluded": "Enterprise-wide document RAG search or autonomous action agents."
        },
        {
          "title": "Configurable Templates & Page-Number Citations",
          "deliverables": "Support for customer-specific summary templates and side-by-side review views linking every summary statement back to exact source page numbers with AI-generated disclosures.",
          "notIncluded": "Model fine-tuning unless separately agreed."
        },
        {
          "title": "Gateway Controls, Audit & Handover",
          "deliverables": "Internal API Management AI gateway routing, Prompt Shields content filtering, restricted-access audit logs, Deny-mode policies, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 078 Document Summarisation Service pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Generative AI Applications Rollout",
          "scenario": "Coordinated deployment of Document Summarisation Service across enterprise divisions, enabling cross-functional units to operationalise Generative AI Applications workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3–4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "079",
    "title": "Proposal and Bid Writing Assistant",
    "slug": "proposal-and-bid-writing-assistant",
    "domain": "02 Generative AI Applications",
    "engagementType": "Implementation",
    "duration": "4–6 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/079-proposal-and-bid-writing-assistant/02-IaC/README.md",
      "hld": "Offerings/079-proposal-and-bid-writing-assistant/01-Design/HLD-079-Proposal_and_Bid_Writing_Assistant.docx",
      "lld": "Offerings/079-proposal-and-bid-writing-assistant/01-Design/LLD-079-Proposal_and_Bid_Writing_Assistant.docx",
      "sow": "Offerings/079-proposal-and-bid-writing-assistant/03-Sales-and-Delivery-Kit/079 - Statement of Work.docx",
      "wbs": "Offerings/079-proposal-and-bid-writing-assistant/03-Sales-and-Delivery-Kit/079 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Generative AI Applications",
    "heroKicker": "Generative AI Applications",
    "heroDescription": "Help bid teams draft proposals and tender responses faster, using past winning answers and approved company content.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: staff use public ai tools with company data.",
          "Without a validated delivery methodology: proofs of concept are built without logging, evaluation or safety controls; and teams rebuild the same plumbing for every use case.",
          "The Proposal and Bid Writing Assistant engagement delivers a structured implementation blueprint designed to resolve these Generative AI Applications operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Business Unit Director and Head of Engineering / AI Lead teams, particularly in professional services, public sector, retail."
      },
      "scope": [
        {
          "title": "Private Bid Assistant Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Azure AI Search, Container Apps, private Storage Account, Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Curated Past-Response Answer Library",
          "deliverables": "Indexing of approved historical proposals and boilerplate responses into private Azure AI Search with metadata tags so drafts reuse only vetted content.",
          "notIncluded": "Cleansing or rewriting legacy unapproved proposal archives."
        },
        {
          "title": "Question-by-Question Drafting & Word Export",
          "deliverables": "Assistant workflow generating per-question proposal drafts with source citations, explicit flagging of information gaps, and formatted export to customer Word templates under bid-manager control.",
          "notIncluded": "Autonomous bid submission without human bid-manager review."
        },
        {
          "title": "Guardrails, Evaluation & Handover",
          "deliverables": "Internal API Management AI gateway, Prompt Shields content filtering, restricted audit logs, Deny-mode Azure Policies, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 079 Proposal And Bid Writing Assistant pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Generative AI Applications Rollout",
          "scenario": "Coordinated deployment of Proposal and Bid Writing Assistant across enterprise divisions, enabling cross-functional units to operationalise Generative AI Applications workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "080",
    "title": "Natural Language Reporting (Ask Your Data)",
    "slug": "natural-language-reporting-ask-your-data",
    "domain": "02 Generative AI Applications",
    "engagementType": "Implementation",
    "duration": "4–6 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/080-natural-language-reporting-ask-your-data/02-IaC/README.md",
      "hld": "Offerings/080-natural-language-reporting-ask-your-data/01-Design/HLD-080-Natural_Language_Reporting_Ask_Your_Data.docx",
      "lld": "Offerings/080-natural-language-reporting-ask-your-data/01-Design/LLD-080-Natural_Language_Reporting_Ask_Your_Data.docx",
      "sow": "Offerings/080-natural-language-reporting-ask-your-data/03-Sales-and-Delivery-Kit/080 - Statement of Work.docx",
      "wbs": "Offerings/080-natural-language-reporting-ask-your-data/03-Sales-and-Delivery-Kit/080 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Generative AI Applications",
    "heroKicker": "Generative AI Applications",
    "heroDescription": "Let business users ask questions of their data in plain English and get answers, tables and charts.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: staff use public ai tools with company data.",
          "Without a validated delivery methodology: proofs of concept are built without logging, evaluation or safety controls; and teams rebuild the same plumbing for every use case.",
          "The Natural Language Reporting (Ask Your Data) engagement delivers a structured implementation blueprint designed to resolve these Generative AI Applications operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Business Unit Director and Head of Engineering / AI Lead teams, particularly in professional services, public sector, retail."
      },
      "scope": [
        {
          "title": "Private Semantic & Query Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Microsoft Fabric capacity, Container Apps, Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Governed Semantic Model & Row-Level Security",
          "deliverables": "Structuring of a governed Fabric / Power BI semantic model with business metric definitions and strict Row-Level Security (RLS) enforced on every generated query.",
          "notIncluded": "Migration of all legacy data warehouses outside agreed reporting domains."
        },
        {
          "title": "Natural-Language Query Agent & Transparent SQL/DAX",
          "deliverables": "Configuration of a query agent on Fabric data agent / Foundry translating natural-language questions into governed queries and displaying the generated query alongside results in Teams or web chat.",
          "notIncluded": "Autonomous write-back to transactional ERP/CRM databases."
        },
        {
          "title": "Guardrails, Audit & Handover",
          "deliverables": "Internal API Management AI gateway, Prompt Shields content filtering, restricted audit logs, Deny-mode Azure Policies, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 080 Natural Language Reporting Ask Your Data pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Generative AI Applications Rollout",
          "scenario": "Coordinated deployment of Natural Language Reporting (Ask Your Data) across enterprise divisions, enabling cross-functional units to operationalise Generative AI Applications workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "081",
    "title": "SRE and Incident Response Agent",
    "slug": "sre-and-incident-response-agent",
    "domain": "04 Custom AI Agents",
    "engagementType": "Implementation",
    "duration": "6–8 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/081-sre-and-incident-response-agent/02-IaC/README.md",
      "hld": "Offerings/081-sre-and-incident-response-agent/01-Design/HLD-081-SRE_and_Incident_Response_Agent.docx",
      "lld": "Offerings/081-sre-and-incident-response-agent/01-Design/LLD-081-SRE_and_Incident_Response_Agent.docx",
      "sow": "Offerings/081-sre-and-incident-response-agent/03-Sales-and-Delivery-Kit/081 - Statement of Work.docx",
      "wbs": "Offerings/081-sre-and-incident-response-agent/03-Sales-and-Delivery-Kit/081 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Custom AI Agents",
    "heroKicker": "Custom AI Agents",
    "heroDescription": "Help operations teams triage alerts, gather diagnostics and suggest fixes during incidents.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: processes span several systems and hand-offs.",
          "Without a validated delivery methodology: early agent experiments use shared accounts and direct keys; and no tracing or approval steps for actions taken by ai.",
          "The SRE and Incident Response Agent engagement delivers a structured implementation blueprint designed to resolve these Custom AI Agents operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Head of Shared Services and Head of Engineering / Integration Architect teams, particularly in financial services, retail and logistics, public sector."
      },
      "scope": [
        {
          "title": "Private SRE Agent Landing Zone Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Microsoft Foundry, Cosmos DB serverless, Container Apps, Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Observability & Runbook Diagnostic Tools",
          "deliverables": "Allow-listed API Management integrations enabling the SRE agent to query Azure Monitor metrics, Log Analytics logs, and operational runbooks to produce automated incident diagnoses.",
          "notIncluded": "Rebuilding core ITSM platforms or replacing existing monitoring agents."
        },
        {
          "title": "Approved-Runbook Remediation & ITSM Timelines",
          "deliverables": "Build of the SRE and Incident Response Agent on Foundry Agent Service / Azure SRE Agent supporting Teams/ITSM collaboration, writing incident timelines to ITSM records, and requiring on-call engineer approval for any remediation.",
          "notIncluded": "Unattended production changes without explicit on-call human approval."
        },
        {
          "title": "Agent Identity, Guardrails & Handover",
          "deliverables": "Dedicated Entra agent identity, Prompt Shields content filtering, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 081 Sre And Incident Response Agent pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Custom AI Agents Rollout",
          "scenario": "Coordinated deployment of SRE and Incident Response Agent across enterprise divisions, enabling cross-functional units to operationalise Custom AI Agents workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 6–8 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "082",
    "title": "Agentic DevOps with GitHub Copilot",
    "slug": "agentic-devops-with-github-copilot",
    "domain": "04 Custom AI Agents",
    "engagementType": "Adoption",
    "duration": "4–6 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/082-agentic-devops-with-github-copilot/02-IaC/README.md",
      "hld": "Offerings/082-agentic-devops-with-github-copilot/01-Design/HLD-082-Agentic_DevOps_with_GitHub_Copilot.docx",
      "lld": "Offerings/082-agentic-devops-with-github-copilot/01-Design/LLD-082-Agentic_DevOps_with_GitHub_Copilot.docx",
      "sow": "Offerings/082-agentic-devops-with-github-copilot/03-Sales-and-Delivery-Kit/082 - Statement of Work.docx",
      "wbs": "Offerings/082-agentic-devops-with-github-copilot/03-Sales-and-Delivery-Kit/082 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Custom AI Agents",
    "heroKicker": "Custom AI Agents",
    "heroDescription": "Use GitHub Copilot coding agents and AI in pipelines to automate routine engineering work such as tests, fixes and documentation.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: processes span several systems and hand-offs.",
          "Without a validated delivery methodology: early agent experiments use shared accounts and direct keys; and no tracing or approval steps for actions taken by ai.",
          "The Agentic DevOps with GitHub Copilot engagement delivers a structured adoption blueprint designed to resolve these Custom AI Agents operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Head of Shared Services and Head of Engineering / Integration Architect teams, particularly in financial services, retail and logistics, public sector."
      },
      "scope": [
        {
          "title": "GitHub Copilot Coding Agent & PR-Only Guardrails",
          "deliverables": "Configuration of the GitHub Copilot coding agent operating strictly through pull requests, paired with branch protection, required human reviews, and no direct main-branch commits.",
          "notIncluded": "Procurement of GitHub Copilot or GitHub Advanced Security licences."
        },
        {
          "title": "GitHub Advanced Security & CI Gate Automation",
          "deliverables": "Enablement of CodeQL code scanning, secret scanning with push protection, Dependabot updates, and GitHub Actions CI checks running automatically on every AI-generated pull request.",
          "notIncluded": "Remediation of pre-existing vulnerabilities across legacy applications."
        },
        {
          "title": "Supporting Governance Infrastructure & Engineering Enablement",
          "deliverables": "Provisioning of supporting Log Analytics/App Insights telemetry and structured adoption workshops, engineering champions coaching, and review playbooks across pilot squads.",
          "notIncluded": "Changes to the platform landing zone hub or mandatory training for non-engineering staff."
        },
        {
          "title": "Throughput Telemetry & Operational Handover",
          "deliverables": "Measurement of pull request cycle time, acceptance rates, and security alert trends via Copilot Metrics API and GitHub Insights, plus handover runbooks.",
          "notIncluded": "Post-hypercare managed DevOps operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 082 Agentic Devops With Github Copilot pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Custom AI Agents Rollout",
          "scenario": "Coordinated deployment of Agentic DevOps with GitHub Copilot across enterprise divisions, enabling cross-functional units to operationalise Custom AI Agents workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Agree goals, scenarios, success measures and pilot groups."
          },
          {
            "name": "Readiness",
            "duration": "1–2 weeks",
            "activities": "Prepare technical readiness, training and champions."
          },
          {
            "name": "Pilot",
            "duration": "2–4 weeks",
            "activities": "Run the pilot, support users and measure usage."
          },
          {
            "name": "Scale",
            "duration": "1–2 weeks",
            "activities": "Roll out in waves using pilot learnings."
          },
          {
            "name": "Sustain",
            "duration": "1 week",
            "activities": "Embed champions and measurement; hand over."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "083",
    "title": "Oversharing Remediation with SharePoint Advanced Management",
    "slug": "oversharing-remediation-with-sharepoint-advanced-management",
    "domain": "07 Microsoft 365 Copilot",
    "engagementType": "Implementation",
    "duration": "4–8 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/083-oversharing-remediation-with-sharepoint-advanced-management/02-IaC/README.md",
      "hld": "Offerings/083-oversharing-remediation-with-sharepoint-advanced-management/01-Design/HLD-083-Oversharing_Remediation_with_SharePoint_Advanced_Management.docx",
      "lld": "Offerings/083-oversharing-remediation-with-sharepoint-advanced-management/01-Design/LLD-083-Oversharing_Remediation_with_SharePoint_Advanced_Management.docx",
      "sow": "Offerings/083-oversharing-remediation-with-sharepoint-advanced-management/03-Sales-and-Delivery-Kit/083 - Statement of Work.docx",
      "wbs": "Offerings/083-oversharing-remediation-with-sharepoint-advanced-management/03-Sales-and-Delivery-Kit/083 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Microsoft 365 Copilot",
    "heroKicker": "Microsoft 365 Copilot",
    "heroDescription": "Find and fix overshared SharePoint and OneDrive content before and during Copilot rollout.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: years of oversharing in sharepoint and teams.",
          "Without a validated delivery methodology: limited sensitivity labelling; and licences purchased but usage is low.",
          "The Oversharing Remediation with SharePoint Advanced Management engagement delivers a structured implementation blueprint designed to resolve these Microsoft 365 Copilot operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CIO / Chief People Officer and Microsoft 365 Lead / Information Governance Lead teams, particularly in professional services, public sector, financial services."
      },
      "scope": [
        {
          "title": "SharePoint Oversharing Discovery & Governance Reports",
          "deliverables": "Configuration of SharePoint Advanced Management Data Access Governance reports identifying broad sharing links, 'Everyone except external users' permissions, and overshared sites.",
          "notIncluded": "Deployment of Azure AI PaaS workloads or custom Copilot extensions."
        },
        {
          "title": "Site Owner Access Reviews & Restricted Discovery",
          "deliverables": "Activation of automated site access reviews sent to site owners and Restricted Content Discovery (RCD) hiding high-risk sites from Microsoft 365 Copilot until remediated.",
          "notIncluded": "Tenant-wide manual file migration or legacy file share cleansing."
        },
        {
          "title": "Purview Labels, Copilot DLP & Conditional Access",
          "deliverables": "Alignment of Microsoft Purview sensitivity labels, Copilot DLP exclusion for Highly Confidential content, DSPM for AI, and Entra Conditional Access baselines.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Continuous Hygiene Cadence & Handover",
          "deliverables": "Risk-ranked remediation playbook, staged rollout wave entry criteria, configuration acceptance log, and operational handover.",
          "notIncluded": "Post-hypercare managed M365 administration."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 083 Oversharing Remediation With Sharepoint Advanced Management pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Microsoft 365 Copilot Rollout",
          "scenario": "Coordinated deployment of Oversharing Remediation with SharePoint Advanced Management across enterprise divisions, enabling cross-functional units to operationalise Microsoft 365 Copilot workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–8 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "084",
    "title": "Defender for AI Deployment",
    "slug": "defender-for-ai-deployment",
    "domain": "08 AI Security",
    "engagementType": "Implementation",
    "duration": "3 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/084-defender-for-ai-deployment/02-IaC/README.md",
      "hld": "Offerings/084-defender-for-ai-deployment/01-Design/HLD-084-Defender_for_AI_Deployment.docx",
      "lld": "Offerings/084-defender-for-ai-deployment/01-Design/LLD-084-Defender_for_AI_Deployment.docx",
      "sow": "Offerings/084-defender-for-ai-deployment/03-Sales-and-Delivery-Kit/084 - Statement of Work.docx",
      "wbs": "Offerings/084-defender-for-ai-deployment/03-Sales-and-Delivery-Kit/084 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "AI Security",
    "heroKicker": "AI Security",
    "heroDescription": "Enable and tune Microsoft Defender for Cloud threat protection and posture management for AI workloads.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: AI services are not covered by specific threat detection.",
          "Without a validated delivery methodology: staff use unsanctioned ai tools; and no red-team testing before ai goes live.",
          "The Defender for AI Deployment engagement delivers a structured implementation blueprint designed to resolve these AI Security operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CISO and Security Architect / SOC Lead teams, particularly in financial services, public sector, healthcare."
      },
      "scope": [
        {
          "title": "AI Subscription Telemetry Foundation",
          "deliverables": "Infrastructure-as-code deployment of Log Analytics workspace, Application Insights, spoke VNet, and policy-driven enablement across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Defender for AI Services Threat Protection",
          "deliverables": "Policy-driven enablement of Microsoft Defender for Cloud threat protection for AI workloads across target AI subscriptions to detect prompt injection, credential abuse, and anomalous model activity.",
          "notIncluded": "Security remediation for Microsoft 365 Copilot SharePoint permissions."
        },
        {
          "title": "Defender CSPM AI Security Posture Management",
          "deliverables": "Configuration of Defender CSPM AI-SPM to continuously discover AI resources, surface misconfigurations, and align posture with Purview DSPM for AI.",
          "notIncluded": "Authoring of organisational security policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Sentinel Alert Integration, Tuning & Handover",
          "deliverables": "Connection of Defender AI alerts into Microsoft Sentinel, pre-go-live alert tuning to reduce noise, Deny-mode Azure Policies, and SOC runbooks.",
          "notIncluded": "24/7 managed SOC operations post-hypercare."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 084 Defender For Ai Deployment pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental AI Security Rollout",
          "scenario": "Coordinated deployment of Defender for AI Deployment across enterprise divisions, enabling cross-functional units to operationalise AI Security workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "085",
    "title": "EU AI Act Readiness",
    "slug": "eu-ai-act-readiness",
    "domain": "09 Responsible AI & Compliance",
    "engagementType": "Assessment",
    "duration": "4–6 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/085-eu-ai-act-readiness/02-IaC/README.md",
      "hld": "Offerings/085-eu-ai-act-readiness/01-Design/HLD-085-EU_AI_Act_Readiness.docx",
      "lld": "Offerings/085-eu-ai-act-readiness/01-Design/LLD-085-EU_AI_Act_Readiness.docx",
      "sow": "Offerings/085-eu-ai-act-readiness/03-Sales-and-Delivery-Kit/085 - Statement of Work.docx",
      "wbs": "Offerings/085-eu-ai-act-readiness/03-Sales-and-Delivery-Kit/085 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Responsible AI & Compliance",
    "heroKicker": "Responsible AI & Compliance",
    "heroDescription": "Assess the organisation's AI systems against the EU AI Act and prepare the controls and documentation required.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: no central record of ai use cases.",
          "Without a validated delivery methodology: risk is not classified consistently; and no evidence of testing for auditors.",
          "The EU AI Act Readiness engagement delivers a structured assessment blueprint designed to resolve these Responsible AI & Compliance operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Chief Risk Officer / General Counsel and Data Protection Officer / AI Lead teams, particularly in financial services, public sector, healthcare."
      },
      "scope": [
        {
          "title": "AI System Inventory & Use-Case Discovery",
          "deliverables": "Read-only review of existing AI registers, policies, evaluation results, and owner interviews to build a complete inventory of AI systems potentially in scope of the EU AI Act.",
          "notIncluded": "Design or build of production AI workloads or changes to platform landing zones."
        },
        {
          "title": "EU AI Act Risk-Category Classification",
          "deliverables": "Facilitated classification workshops mapping each inventoried AI system against EU AI Act risk tiers (prohibited, high-risk, limited-risk, minimal-risk) and GPAI obligations.",
          "notIncluded": "Formal legal interpretation or statutory legal opinions (which remain with Customer legal counsel)."
        },
        {
          "title": "Obligation Gap Register & Compliance Timeline",
          "deliverables": "Structured gap assessment against EU AI Act obligations (risk management, data governance, transparency, human oversight, logging) mapped to statutory enforcement deadlines.",
          "notIncluded": "Authoring of organisational legal policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Technical Documentation Templates & Roadmap",
          "deliverables": "Prepared Annex-aligned technical documentation templates, five-area readiness evaluation, and a prioritised compliance roadmap presented to leadership.",
          "notIncluded": "Post-assessment engineering implementation or ongoing managed compliance."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 085 Eu Ai Act Readiness pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Responsible AI & Compliance Rollout",
          "scenario": "Coordinated deployment of EU AI Act Readiness across enterprise divisions, enabling cross-functional units to operationalise Responsible AI & Compliance workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Mobilise",
            "duration": "1–2 weeks",
            "activities": "Agree scope, stakeholders and access."
          },
          {
            "name": "Discover",
            "duration": "1 week",
            "activities": "Interviews, workshops and technical evidence gathering."
          },
          {
            "name": "Analyse",
            "duration": "1–2 weeks",
            "activities": "Score findings, identify gaps and options."
          },
          {
            "name": "Report",
            "duration": "1 week",
            "activities": "Present findings, prioritised recommendations and roadmap."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "086",
    "title": "Data Quality for AI",
    "slug": "data-quality-for-ai",
    "domain": "10 Data & AI Platform",
    "engagementType": "Implementation",
    "duration": "4 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/086-data-quality-for-ai/02-IaC/README.md",
      "hld": "Offerings/086-data-quality-for-ai/01-Design/HLD-086-Data_Quality_for_AI.docx",
      "lld": "Offerings/086-data-quality-for-ai/01-Design/LLD-086-Data_Quality_for_AI.docx",
      "sow": "Offerings/086-data-quality-for-ai/03-Sales-and-Delivery-Kit/086 - Statement of Work.docx",
      "wbs": "Offerings/086-data-quality-for-ai/03-Sales-and-Delivery-Kit/086 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Data & AI Platform",
    "heroKicker": "Data & AI Platform",
    "heroDescription": "Measure and improve the quality of data used by AI, with rules, scores and alerts.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: data sits in many systems with unclear ownership.",
          "Without a validated delivery methodology: data quality is unknown; and each ai project extracts data by hand.",
          "The Data Quality for AI engagement delivers a structured implementation blueprint designed to resolve these Data & AI Platform operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Chief Data Officer / CFO and Head of Data / Data Architect teams, particularly in retail, manufacturing, financial services."
      },
      "scope": [
        {
          "title": "Purview Data Quality & Critical-Element Rules",
          "deliverables": "Configuration of Microsoft Purview data quality rules (and Great Expectations where applicable) targeting completeness, accuracy, validity, and freshness on critical AI data elements.",
          "notIncluded": "Migration of all legacy data warehouses outside agreed priority AI use cases."
        },
        {
          "title": "Pipeline Enforcement & Circuit-Breaker Controls",
          "deliverables": "Integration of automated quality checks into Microsoft Fabric or Data Factory pipelines with circuit-breaker logic that alerts data owners and pauses downstream AI loads on rule failure.",
          "notIncluded": "Source-system manual data cleansing or changes to platform landing zone subscriptions."
        },
        {
          "title": "Data Product Quality Scores in Unified Catalog",
          "deliverables": "Publication of automated quality scores per data product inside Microsoft Purview Unified Catalog alongside domain ownership and weekly source scans.",
          "notIncluded": "Authoring of organisational data governance policies, DPIAs, or equality impact assessments."
        },
        {
          "title": "Power BI Quality Reporting & Handover",
          "deliverables": "Power BI quality scorecards tracking trends and rule failures across critical data products, plus operational runbooks and handover.",
          "notIncluded": "Post-hypercare managed data operations."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 086 Data Quality For Ai pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Data & AI Platform Rollout",
          "scenario": "Coordinated deployment of Data Quality for AI across enterprise divisions, enabling cross-functional units to operationalise Data & AI Platform workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "087",
    "title": "Translation and Localisation Service",
    "slug": "translation-and-localisation-service",
    "domain": "02 Generative AI Applications",
    "engagementType": "Implementation",
    "duration": "3 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/087-translation-and-localisation-service/02-IaC/README.md",
      "hld": "Offerings/087-translation-and-localisation-service/01-Design/HLD-087-Translation_and_Localisation_Service.docx",
      "lld": "Offerings/087-translation-and-localisation-service/01-Design/LLD-087-Translation_and_Localisation_Service.docx",
      "sow": "Offerings/087-translation-and-localisation-service/03-Sales-and-Delivery-Kit/087 - Statement of Work.docx",
      "wbs": "Offerings/087-translation-and-localisation-service/03-Sales-and-Delivery-Kit/087 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Generative AI Applications",
    "heroKicker": "Generative AI Applications",
    "heroDescription": "Translate documents, web content and messages with Azure AI Translator and language models, keeping terminology consistent.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: staff use public ai tools with company data.",
          "Without a validated delivery methodology: proofs of concept are built without logging, evaluation or safety controls; and teams rebuild the same plumbing for every use case.",
          "The Translation and Localisation Service engagement delivers a structured implementation blueprint designed to resolve these Generative AI Applications operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Business Unit Director and Head of Engineering / AI Lead teams, particularly in professional services, public sector, retail."
      },
      "scope": [
        {
          "title": "Private Translation Landing Zone Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Azure AI Translator, Microsoft Foundry, Container Apps, private Storage Account, Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Custom Glossary & Terminology Enforcement",
          "deliverables": "Configuration of Azure AI Translator with Custom Translator glossaries so translations strictly adhere to approved organisational and sector terminology.",
          "notIncluded": "Authoring or linguistic verification of source glossaries."
        },
        {
          "title": "Layout-Preserving Translation & Optional Post-Editing",
          "deliverables": "Document and text translation pipeline preserving original document formatting alongside optional, risk-based Microsoft Foundry language-model post-editing and review workflows.",
          "notIncluded": "Enterprise document RAG or autonomous action agents."
        },
        {
          "title": "Gateway Controls, Audit & Handover",
          "deliverables": "Internal API Management AI gateway routing, Prompt Shields, restricted audit logs, Deny-mode Azure Policies, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 087 Translation And Localisation Service pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Generative AI Applications Rollout",
          "scenario": "Coordinated deployment of Translation and Localisation Service across enterprise divisions, enabling cross-functional units to operationalise Generative AI Applications workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "088",
    "title": "Customer FAQ Assistant for Websites",
    "slug": "customer-faq-assistant-for-websites",
    "domain": "03 RAG & Document Intelligence",
    "engagementType": "Implementation",
    "duration": "3–4 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/088-customer-faq-assistant-for-websites/02-IaC/README.md",
      "hld": "Offerings/088-customer-faq-assistant-for-websites/01-Design/HLD-088-Customer_FAQ_Assistant_for_Websites.docx",
      "lld": "Offerings/088-customer-faq-assistant-for-websites/01-Design/LLD-088-Customer_FAQ_Assistant_for_Websites.docx",
      "sow": "Offerings/088-customer-faq-assistant-for-websites/03-Sales-and-Delivery-Kit/088 - Statement of Work.docx",
      "wbs": "Offerings/088-customer-faq-assistant-for-websites/03-Sales-and-Delivery-Kit/088 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "RAG & Document Intelligence",
    "heroKicker": "RAG & Document Intelligence",
    "heroDescription": "Answer customer questions on the organisation's website using published content, with handover to a person when needed.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: knowledge is spread across sharepoint, file shares and systems.",
          "Without a validated delivery methodology: keyword search returns too many or wrong results; and manual keying of document data is slow and error-prone.",
          "The Customer FAQ Assistant for Websites engagement delivers a structured implementation blueprint designed to resolve these RAG & Document Intelligence operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Head of Operations / Knowledge Management Lead and Solution Architect / Data Lead teams, particularly in legal and professional services, insurance, public sector."
      },
      "scope": [
        {
          "title": "Private Web RAG & WAF Infrastructure",
          "deliverables": "Infrastructure-as-code deployment of spoke VNet (private endpoint, internal APIM, and Container Apps subnets), Azure Front Door with WAF, Microsoft Foundry, Azure AI Search, Container Apps, Storage Account, Key Vault, and Log Analytics across up to two environments.",
          "notIncluded": "Changes to the platform landing zone hub, identity, or management subscriptions."
        },
        {
          "title": "Public Web Page & Help Article Crawler",
          "deliverables": "Automated Azure Functions / AI Search indexer pipeline crawling and indexing only approved public website pages and help articles with source-page citations.",
          "notIncluded": "Indexing of internal/authenticated intranets or cleansing of outdated public web copy."
        },
        {
          "title": "WAF-Protected FAQ Assistant & Human Handover",
          "deliverables": "Website-embedded FAQ assistant protected by Azure Front Door WAF, routing unanswered or complex visitor enquiries seamlessly to live chat or a contact form.",
          "notIncluded": "Authenticated customer account transactions or backend CRM order writes."
        },
        {
          "title": "Guardrails, Evaluation & Handover",
          "deliverables": "Internal API Management AI gateway, Prompt Shields content filtering, Deny-mode Azure Policy enforcement, and operational runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 088 Customer Faq Assistant For Websites pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental RAG & Document Intelligence Rollout",
          "scenario": "Coordinated deployment of Customer FAQ Assistant for Websites across enterprise divisions, enabling cross-functional units to operationalise RAG & Document Intelligence workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3–4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "089",
    "title": "Customer-Facing Website Agent",
    "slug": "customer-facing-website-agent",
    "domain": "06 Copilot Studio Agents",
    "engagementType": "Implementation",
    "duration": "4–6 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/089-customer-facing-website-agent/02-IaC/README.md",
      "hld": "Offerings/089-customer-facing-website-agent/01-Design/HLD-089-Customer_Facing_Website_Agent.docx",
      "lld": "Offerings/089-customer-facing-website-agent/01-Design/LLD-089-Customer_Facing_Website_Agent.docx",
      "sow": "Offerings/089-customer-facing-website-agent/03-Sales-and-Delivery-Kit/089 - Statement of Work.docx",
      "wbs": "Offerings/089-customer-facing-website-agent/03-Sales-and-Delivery-Kit/089 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Copilot Studio Agents",
    "heroKicker": "Copilot Studio Agents",
    "heroDescription": "Deploy a Copilot Studio agent on the organisation's website for customer questions, bookings and handover to staff.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: one shared power platform environment with weak data loss prevention.",
          "Without a validated delivery methodology: Agents published without testing or ownership; and makers connect to unapproved data sources.",
          "The Customer-Facing Website Agent engagement delivers a structured implementation blueprint designed to resolve these Copilot Studio Agents operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Head of Digital Workplace / HR Director and Power Platform Lead / Microsoft 365 Architect teams, particularly in public sector, retail, education."
      },
      "scope": [
        {
          "title": "Power Platform Managed Environments & ALM",
          "deliverables": "Configuration of separate development, test, and production Power Platform Managed Environments with DLP policies, Git solution packaging, and Power Platform release pipelines.",
          "notIncluded": "Pro-code Azure Foundry agents or Power Apps without agents."
        },
        {
          "title": "Public Website & Omnichannel Copilot Studio Agent",
          "deliverables": "Build of a Copilot Studio customer-facing agent embedded on your public website and omnichannel chat, grounded in approved public web content with live-chat handover during opening hours.",
          "notIncluded": "Changes to the platform landing zone or cleansing of legacy website copy."
        },
        {
          "title": "Authenticated Booking & Order Connectors",
          "deliverables": "Integration with booking or order APIs requiring mandatory customer authentication before disclosing personal or account-specific information.",
          "notIncluded": "Rebuilding core e-commerce or booking back-end platforms."
        },
        {
          "title": "Conversation Testing & Operational Handover",
          "deliverables": "Automated Copilot Studio conversation testing, environment deployment settings files, and handover runbooks.",
          "notIncluded": "Authoring of organisational AI policies, DPIAs, or post-hypercare managed support."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 089 Customer Facing Website Agent pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Copilot Studio Agents Rollout",
          "scenario": "Coordinated deployment of Customer-Facing Website Agent across enterprise divisions, enabling cross-functional units to operationalise Copilot Studio Agents workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "090",
    "title": "Copilot Licensing and Cost Optimisation",
    "slug": "copilot-licensing-and-cost-optimisation",
    "domain": "07 Microsoft 365 Copilot",
    "engagementType": "Assessment",
    "duration": "2 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/090-copilot-licensing-and-cost-optimisation/02-IaC/README.md",
      "hld": "Offerings/090-copilot-licensing-and-cost-optimisation/01-Design/HLD-090-Copilot_Licensing_and_Cost_Optimisation.docx",
      "lld": "Offerings/090-copilot-licensing-and-cost-optimisation/01-Design/LLD-090-Copilot_Licensing_and_Cost_Optimisation.docx",
      "sow": "Offerings/090-copilot-licensing-and-cost-optimisation/03-Sales-and-Delivery-Kit/090 - Statement of Work.docx",
      "wbs": "Offerings/090-copilot-licensing-and-cost-optimisation/03-Sales-and-Delivery-Kit/090 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Microsoft 365 Copilot",
    "heroKicker": "Microsoft 365 Copilot",
    "heroDescription": "Review Microsoft 365 Copilot and AI licence use and recommend the right mix of licences, Copilot Chat and pay-as-you-go agents.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: years of oversharing in sharepoint and teams.",
          "Without a validated delivery methodology: limited sensitivity labelling; and licences purchased but usage is low.",
          "The Copilot Licensing and Cost Optimisation engagement delivers a structured assessment blueprint designed to resolve these Microsoft 365 Copilot operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CIO / Chief People Officer and Microsoft 365 Lead / Information Governance Lead teams, particularly in professional services, public sector, financial services."
      },
      "scope": [
        {
          "title": "Read-Only M365 Usage & Licence Telemetry Capture",
          "deliverables": "Non-intrusive read-only collection of Microsoft 365 usage reports, Copilot Dashboard telemetry, licence assignment reports, SharePoint Data Access Governance reports, and Purview label/DLP summaries.",
          "notIncluded": "Procurement of Microsoft 365 licences or negotiation of Microsoft commercial agreements."
        },
        {
          "title": "Role & Department Usage Segmentation",
          "deliverables": "Analysis of actual Copilot usage patterns by role and department, identifying inactive seats, high-value personas, and candidates for Copilot Chat or pay-as-you-go agents.",
          "notIncluded": "Changes to platform landing zone subscriptions or Azure AI workloads."
        },
        {
          "title": "Five-Area Readiness & Licence Scenario Modelling",
          "deliverables": "Excel and Power BI scenario modelling comparing full M365 Copilot licences, Copilot Chat, and pay-as-you-go agents alongside five-area readiness checks (Content access, Data protection, Identity, Licensing, Adoption readiness).",
          "notIncluded": "Hands-on tenant remediation or authoring of organisational AI policies and DPIAs."
        },
        {
          "title": "Costed Reallocation Plan & Executive Handover",
          "deliverables": "Actionable seat reallocation and phased purchasing timeline presented to IT and Finance leadership.",
          "notIncluded": "Ongoing managed licence administration post-assessment."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 090 Copilot Licensing And Cost Optimisation pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Microsoft 365 Copilot Rollout",
          "scenario": "Coordinated deployment of Copilot Licensing and Cost Optimisation across enterprise divisions, enabling cross-functional units to operationalise Microsoft 365 Copilot workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 2 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Mobilise",
            "duration": "1–2 weeks",
            "activities": "Agree scope, stakeholders and access."
          },
          {
            "name": "Discover",
            "duration": "1 week",
            "activities": "Interviews, workshops and technical evidence gathering."
          },
          {
            "name": "Analyse",
            "duration": "1–2 weeks",
            "activities": "Score findings, identify gaps and options."
          },
          {
            "name": "Report",
            "duration": "1 week",
            "activities": "Present findings, prioritised recommendations and roadmap."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "091",
    "title": "AI Red Teaming Service",
    "slug": "ai-red-teaming-service",
    "domain": "08 AI Security",
    "engagementType": "Assessment",
    "duration": "2–4 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/091-ai-red-teaming-service/02-IaC/README.md",
      "hld": "Offerings/091-ai-red-teaming-service/01-Design/HLD-091-AI_Red_Teaming_Service.docx",
      "lld": "Offerings/091-ai-red-teaming-service/01-Design/LLD-091-AI_Red_Teaming_Service.docx",
      "sow": "Offerings/091-ai-red-teaming-service/03-Sales-and-Delivery-Kit/091 - Statement of Work.docx",
      "wbs": "Offerings/091-ai-red-teaming-service/03-Sales-and-Delivery-Kit/091 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "AI Security",
    "heroKicker": "AI Security",
    "heroDescription": "Test AI applications and agents for prompt injection, data leakage, jailbreaks and unsafe behaviour before go-live.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: AI services are not covered by specific threat detection.",
          "Without a validated delivery methodology: staff use unsanctioned ai tools; and no red-team testing before ai goes live.",
          "The AI Red Teaming Service engagement delivers a structured assessment blueprint designed to resolve these AI Security operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CISO and Security Architect / SOC Lead teams, particularly in financial services, public sector, healthcare."
      },
      "scope": [
        {
          "title": "Threat Model & Red Team Scope",
          "deliverables": "Target AI application threat modelling, abuse-case definition with security and business stakeholders, and an OWASP LLM Top 10 plus custom test library.",
          "notIncluded": "Unauthorised testing against third-party external APIs or out-of-scope corporate systems."
        },
        {
          "title": "Automated & Manual Adversarial Testing",
          "deliverables": "Automated adversarial probing via Microsoft AI Red Teaming Agent and PyRIT alongside manual specialist testing for business-logic and multi-turn abuse.",
          "notIncluded": "Full-time continuous red team staffing after engagement handover."
        },
        {
          "title": "Release Evidence & Remediation Retest",
          "deliverables": "Microsoft Foundry evaluation evidence packs stored for release gating, prioritised remediation guidance, and targeted verification retesting after fixes.",
          "notIncluded": "Direct code refactoring of application source repositories by the testing team."
        },
        {
          "title": "Posture & Telemetry Correlation",
          "deliverables": "Cross-referencing findings against Defender for Cloud AI-SPM inventory and Sentinel or Defender alert streams to verify detection coverage.",
          "notIncluded": "24/7 SOC alert triage or ongoing incident response retainer."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 091 Ai Red Teaming Service pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental AI Security Rollout",
          "scenario": "Coordinated deployment of AI Red Teaming Service across enterprise divisions, enabling cross-functional units to operationalise AI Security workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 2–4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Mobilise",
            "duration": "1–2 weeks",
            "activities": "Agree scope, stakeholders and access."
          },
          {
            "name": "Discover",
            "duration": "1 week",
            "activities": "Interviews, workshops and technical evidence gathering."
          },
          {
            "name": "Analyse",
            "duration": "1–2 weeks",
            "activities": "Score findings, identify gaps and options."
          },
          {
            "name": "Report",
            "duration": "1 week",
            "activities": "Present findings, prioritised recommendations and roadmap."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "092",
    "title": "Data Platform Migration to Fabric",
    "slug": "data-platform-migration-to-fabric",
    "domain": "10 Data & AI Platform",
    "engagementType": "Implementation",
    "duration": "8–12 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/092-data-platform-migration-to-fabric/02-IaC/README.md",
      "hld": "Offerings/092-data-platform-migration-to-fabric/01-Design/HLD-092-Data_Platform_Migration_to_Fabric.docx",
      "lld": "Offerings/092-data-platform-migration-to-fabric/01-Design/LLD-092-Data_Platform_Migration_to_Fabric.docx",
      "sow": "Offerings/092-data-platform-migration-to-fabric/03-Sales-and-Delivery-Kit/092 - Statement of Work.docx",
      "wbs": "Offerings/092-data-platform-migration-to-fabric/03-Sales-and-Delivery-Kit/092 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Data & AI Platform",
    "heroKicker": "Data & AI Platform",
    "heroDescription": "Migrate existing Synapse, SQL or Power BI estates to Microsoft Fabric as the base for AI.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: data sits in many systems with unclear ownership.",
          "Without a validated delivery methodology: data quality is unknown; and each ai project extracts data by hand.",
          "The Data Platform Migration to Fabric engagement delivers a structured implementation blueprint designed to resolve these Data & AI Platform operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Chief Data Officer / CFO and Head of Data / Data Architect teams, particularly in retail, manufacturing, financial services."
      },
      "scope": [
        {
          "title": "Estate Assessment & Wave Plan",
          "deliverables": "Discovery of existing Synapse, SQL, and Power BI workloads, dependency mapping, and a domain-wave migration schedule to Microsoft Fabric.",
          "notIncluded": "Rewriting upstream ERP or operational source systems."
        },
        {
          "title": "Private Fabric & Storage Foundation",
          "deliverables": "Provisioning of scalable Microsoft Fabric capacity (F2 baseline), spoke VNet private endpoints, ZRS private storage with Entra ID-only access, and Log Analytics.",
          "notIncluded": "Procurement of non-Microsoft third-party data warehouse licences."
        },
        {
          "title": "Pipeline & Semantic Model Migration",
          "deliverables": "Wave-based migration of data pipelines, lakehouse tables, and semantic models into Fabric with parallel reconciliation checks.",
          "notIncluded": "Net-new BI report design beyond repointing and validating existing reports."
        },
        {
          "title": "Report Cutover & Decommission",
          "deliverables": "Repointing Power BI reports, automated data parity validation, and controlled decommissioning of legacy Synapse or SQL services after sign-off.",
          "notIncluded": "Long-term business data stewardship or ongoing report authoring."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 092 Data Platform Migration To Fabric pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Data & AI Platform Rollout",
          "scenario": "Coordinated deployment of Data Platform Migration to Fabric across enterprise divisions, enabling cross-functional units to operationalise Data & AI Platform workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 8–12 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Assess",
            "duration": "1–2 weeks",
            "activities": "Discover current estate, dependencies and migration waves."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Prepare target platform and governance."
          },
          {
            "name": "Migrate",
            "duration": "1–2 weeks",
            "activities": "Migrate workloads wave by wave and validate outputs."
          },
          {
            "name": "Cut-over",
            "duration": "1–2 weeks",
            "activities": "Switch users and decommission legacy services."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare and optimisation."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "093",
    "title": "Meeting and Case Notes Assistant",
    "slug": "meeting-and-case-notes-assistant",
    "domain": "02 Generative AI Applications",
    "engagementType": "Implementation",
    "duration": "3–4 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/093-meeting-and-case-notes-assistant/02-IaC/README.md",
      "hld": "Offerings/093-meeting-and-case-notes-assistant/01-Design/HLD-093-Meeting_and_Case_Notes_Assistant.docx",
      "lld": "Offerings/093-meeting-and-case-notes-assistant/01-Design/LLD-093-Meeting_and_Case_Notes_Assistant.docx",
      "sow": "Offerings/093-meeting-and-case-notes-assistant/03-Sales-and-Delivery-Kit/093 - Statement of Work.docx",
      "wbs": "Offerings/093-meeting-and-case-notes-assistant/03-Sales-and-Delivery-Kit/093 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Generative AI Applications",
    "heroKicker": "Generative AI Applications",
    "heroDescription": "Turn meeting recordings and case conversations into structured notes and actions in the organisation's systems.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: staff use public ai tools with company data.",
          "Without a validated delivery methodology: proofs of concept are built without logging, evaluation or safety controls; and teams rebuild the same plumbing for every use case.",
          "The Meeting and Case Notes Assistant engagement delivers a structured implementation blueprint designed to resolve these Generative AI Applications operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Business Unit Director and Head of Engineering / AI Lead teams, particularly in professional services, public sector, retail."
      },
      "scope": [
        {
          "title": "Private Speech & LLM Platform",
          "deliverables": "Deployment of spoke VNet subnets, private Azure AI Speech, private Microsoft Foundry (gpt-4o), internal APIM AI gateway, Container Apps, Key Vault, and private Storage.",
          "notIncluded": "Custom acoustic model training for proprietary hardware microphones."
        },
        {
          "title": "Consent & Fixed-Structure Drafting",
          "deliverables": "Explicit participant recording consent workflow and structured transcription-to-summary pipelines producing consistent case notes and action items.",
          "notIncluded": "Unattended autonomous recording without participant consent verification."
        },
        {
          "title": "Human-in-the-Loop Case Integration",
          "deliverables": "Review UI allowing practitioners to edit and approve drafted notes before API write-back to the target case management system.",
          "notIncluded": "Core schema redesign of the customer's underlying CRM or case database."
        },
        {
          "title": "Audit Logging & Operational Readiness",
          "deliverables": "Centralised call logging, consent audit trails, Key Vault secret rotation patterns, and operational handover runbooks.",
          "notIncluded": "Ongoing 24/7 Level-1 helpdesk support for end users."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 093 Meeting And Case Notes Assistant pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Generative AI Applications Rollout",
          "scenario": "Coordinated deployment of Meeting and Case Notes Assistant across enterprise divisions, enabling cross-functional units to operationalise Generative AI Applications workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3–4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "094",
    "title": "Field Engineer Technical Manuals Assistant",
    "slug": "field-engineer-technical-manuals-assistant",
    "domain": "03 RAG & Document Intelligence",
    "engagementType": "Implementation",
    "duration": "4–5 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/094-field-engineer-technical-manuals-assistant/02-IaC/README.md",
      "hld": "Offerings/094-field-engineer-technical-manuals-assistant/01-Design/HLD-094-Field_Engineer_Technical_Manuals_Assistant.docx",
      "lld": "Offerings/094-field-engineer-technical-manuals-assistant/01-Design/LLD-094-Field_Engineer_Technical_Manuals_Assistant.docx",
      "sow": "Offerings/094-field-engineer-technical-manuals-assistant/03-Sales-and-Delivery-Kit/094 - Statement of Work.docx",
      "wbs": "Offerings/094-field-engineer-technical-manuals-assistant/03-Sales-and-Delivery-Kit/094 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "RAG & Document Intelligence",
    "heroKicker": "RAG & Document Intelligence",
    "heroDescription": "Give field engineers quick answers from technical manuals, diagrams and service history on mobile devices.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: knowledge is spread across sharepoint, file shares and systems.",
          "Without a validated delivery methodology: keyword search returns too many or wrong results; and manual keying of document data is slow and error-prone.",
          "The Field Engineer Technical Manuals Assistant engagement delivers a structured implementation blueprint designed to resolve these RAG & Document Intelligence operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Head of Operations / Knowledge Management Lead and Solution Architect / Data Lead teams, particularly in legal and professional services, insurance, public sector."
      },
      "scope": [
        {
          "title": "Multimodal Manual Ingestion",
          "deliverables": "Document ingestion pipeline using Azure AI Document Intelligence and Azure AI Search with multimodal text and diagram indexing, semantic ranker, and ACL security trimming.",
          "notIncluded": "Digitisation of illegible handwritten paper archives or physical scanning."
        },
        {
          "title": "Safety-Critical Verbatim Grounding",
          "deliverables": "Private Microsoft Foundry (gpt-4o) and internal APIM AI gateway configured so safety warnings and procedures are quoted verbatim and never paraphrased.",
          "notIncluded": "Replacing certified regulatory safety sign-off processes."
        },
        {
          "title": "Field App & Offline Cache",
          "deliverables": "Container Apps backend paired with a Power Apps or mobile field interface featuring local offline caching for low-connectivity engineering sites.",
          "notIncluded": "Procurement or MDM provisioning of ruggedised field tablets."
        },
        {
          "title": "Security & Handover",
          "deliverables": "Spoke VNet isolation, Key Vault secret management, private Storage Account, and citation-accuracy verification packs.",
          "notIncluded": "Ongoing authoring or engineering revision of OEM technical manuals."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 094 Field Engineer Technical Manuals Assistant pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental RAG & Document Intelligence Rollout",
          "scenario": "Coordinated deployment of Field Engineer Technical Manuals Assistant across enterprise divisions, enabling cross-functional units to operationalise RAG & Document Intelligence workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–5 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "095",
    "title": "MCP Tool Gateway",
    "slug": "mcp-tool-gateway",
    "domain": "04 Custom AI Agents",
    "engagementType": "Accelerator",
    "duration": "4 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/095-mcp-tool-gateway/02-IaC/README.md",
      "hld": "Offerings/095-mcp-tool-gateway/01-Design/HLD-095-MCP_Tool_Gateway.docx",
      "lld": "Offerings/095-mcp-tool-gateway/01-Design/LLD-095-MCP_Tool_Gateway.docx",
      "sow": "Offerings/095-mcp-tool-gateway/03-Sales-and-Delivery-Kit/095 - Statement of Work.docx",
      "wbs": "Offerings/095-mcp-tool-gateway/03-Sales-and-Delivery-Kit/095 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Custom AI Agents",
    "heroKicker": "Custom AI Agents",
    "heroDescription": "Publish the organisation's business APIs as secure Model Context Protocol (MCP) tools that approved agents can use.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: processes span several systems and hand-offs.",
          "Without a validated delivery methodology: early agent experiments use shared accounts and direct keys; and no tracing or approval steps for actions taken by ai.",
          "The MCP Tool Gateway engagement delivers a structured accelerator blueprint designed to resolve these Custom AI Agents operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Head of Shared Services and Head of Engineering / Integration Architect teams, particularly in financial services, retail and logistics, public sector."
      },
      "scope": [
        {
          "title": "Internal MCP Gateway & Registry",
          "deliverables": "Deployment of an internal APIM Tool/MCP Gateway (Developer_1 or Premium_1) with managed identity, token metrics, and Azure API Center as the central tool catalogue.",
          "notIncluded": "Exposing unauthenticated MCP endpoints directly to the public internet."
        },
        {
          "title": "Least-Privilege MCP Server Hosting",
          "deliverables": "Spoke VNet isolation (snet-pe, snet-apim, snet-apps) and Container Apps or Azure Functions hosting narrow, least-privilege MCP servers backed by Key Vault.",
          "notIncluded": "Rewriting legacy backend enterprise systems that lack APIs."
        },
        {
          "title": "Per-Agent Allow-Listing & Audit",
          "deliverables": "Per-agent tool allow-list enforcement and structured call logging capturing both agent identity and end-user identity on every tool invocation.",
          "notIncluded": "Building custom end-user agent chat interfaces unrelated to tool governance."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 095 Mcp Tool Gateway pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Custom AI Agents Rollout",
          "scenario": "Coordinated deployment of MCP Tool Gateway across enterprise divisions, enabling cross-functional units to operationalise Custom AI Agents workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Confirm scope, environment and prerequisites."
          },
          {
            "name": "Deploy",
            "duration": "2–4 weeks",
            "activities": "Deploy the accelerator modules as code and configure them."
          },
          {
            "name": "Validate",
            "duration": "1–2 weeks",
            "activities": "Test, tune and document; train the customer team."
          },
          {
            "name": "Handover",
            "duration": "1 week",
            "activities": "Hand over code, documentation and next steps."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "096",
    "title": "Shadow AI Discovery and Control",
    "slug": "shadow-ai-discovery-and-control",
    "domain": "08 AI Security",
    "engagementType": "Implementation",
    "duration": "2–3 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/096-shadow-ai-discovery-and-control/02-IaC/README.md",
      "hld": "Offerings/096-shadow-ai-discovery-and-control/01-Design/HLD-096-Shadow_AI_Discovery_and_Control.docx",
      "lld": "Offerings/096-shadow-ai-discovery-and-control/01-Design/LLD-096-Shadow_AI_Discovery_and_Control.docx",
      "sow": "Offerings/096-shadow-ai-discovery-and-control/03-Sales-and-Delivery-Kit/096 - Statement of Work.docx",
      "wbs": "Offerings/096-shadow-ai-discovery-and-control/03-Sales-and-Delivery-Kit/096 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "AI Security",
    "heroKicker": "AI Security",
    "heroDescription": "Discover unsanctioned AI apps and services in use and bring them under control.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: AI services are not covered by specific threat detection.",
          "Without a validated delivery methodology: staff use unsanctioned ai tools; and no red-team testing before ai goes live.",
          "The Shadow AI Discovery and Control engagement delivers a structured implementation blueprint designed to resolve these AI Security operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "CISO and Security Architect / SOC Lead teams, particularly in financial services, public sector, healthcare."
      },
      "scope": [
        {
          "title": "SaaS AI Discovery & Classification",
          "deliverables": "Configuration of Microsoft Defender for Cloud Apps to discover shadow SaaS AI usage from network and endpoint telemetry and establish a three-tier status model (sanction, monitor, block with alternatives).",
          "notIncluded": "Procurement or licensing of third-party CASB or secure web gateway appliances."
        },
        {
          "title": "Subscription & Resource Guardrails",
          "deliverables": "Azure Policy assignments blocking provisioning of AI services outside approved landing-zone subscriptions alongside Defender for Cloud AI-SPM and threat protection.",
          "notIncluded": "Manual remediation of unmanaged personal devices outside corporate MDM."
        },
        {
          "title": "Telemetry & Governance Handover",
          "deliverables": "Log Analytics and Application Insights foundation for shadow AI dashboards, blocked-app coaching messages, and operational governance playbooks.",
          "notIncluded": "Ongoing legal or HR disciplinary policy enforcement."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 096 Shadow Ai Discovery And Control pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental AI Security Rollout",
          "scenario": "Coordinated deployment of Shadow AI Discovery and Control across enterprise divisions, enabling cross-functional units to operationalise AI Security workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 2–3 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "097",
    "title": "AI Use-Case Register and Risk Classification",
    "slug": "ai-use-case-register-and-risk-classification",
    "domain": "09 Responsible AI & Compliance",
    "engagementType": "Implementation",
    "duration": "3 weeks",
    "iacAssetAvailability": false,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/097-ai-use-case-register-and-risk-classification/02-IaC/README.md",
      "hld": "Offerings/097-ai-use-case-register-and-risk-classification/01-Design/HLD-097-AI_Use_Case_Register_and_Risk_Classification.docx",
      "lld": "Offerings/097-ai-use-case-register-and-risk-classification/01-Design/LLD-097-AI_Use_Case_Register_and_Risk_Classification.docx",
      "sow": "Offerings/097-ai-use-case-register-and-risk-classification/03-Sales-and-Delivery-Kit/097 - Statement of Work.docx",
      "wbs": "Offerings/097-ai-use-case-register-and-risk-classification/03-Sales-and-Delivery-Kit/097 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Responsible AI & Compliance",
    "heroKicker": "Responsible AI & Compliance",
    "heroDescription": "Create a central register of AI use cases with risk classification, owners and links to evidence.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: no central record of ai use cases.",
          "Without a validated delivery methodology: risk is not classified consistently; and no evidence of testing for auditors.",
          "The AI Use-Case Register and Risk Classification engagement delivers a structured implementation blueprint designed to resolve these Responsible AI & Compliance operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Chief Risk Officer / General Counsel and Data Protection Officer / AI Lead teams, particularly in financial services, public sector, healthcare."
      },
      "scope": [
        {
          "title": "Use-Case Register & Intake Form",
          "deliverables": "Deployment of a SharePoint and Power Apps register capturing AI use-case purpose, business owner, data classification, and lifecycle status.",
          "notIncluded": "Custom full-stack web application development outside Microsoft 365 / Power Platform."
        },
        {
          "title": "Weighted Risk Classification Engine",
          "deliverables": "Structured classification questionnaire with weighted scoring rules that automatically calculates each use case's risk tier.",
          "notIncluded": "External legal counsel sign-off on statutory regulatory interpretations."
        },
        {
          "title": "Build Gatekeeping & Portfolio View",
          "deliverables": "Pre-build governance gate linking high-risk tiers to required assessments and evaluations, plus a Power BI portfolio dashboard.",
          "notIncluded": "Automated provisioning of underlying Azure AI infrastructure from the register."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 097 Ai Use Case Register And Risk Classification pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Responsible AI & Compliance Rollout",
          "scenario": "Coordinated deployment of AI Use-Case Register and Risk Classification across enterprise divisions, enabling cross-functional units to operationalise Responsible AI & Compliance workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "098",
    "title": "Fabric Data Agents (Conversational Analytics)",
    "slug": "fabric-data-agents-conversational-analytics",
    "domain": "10 Data & AI Platform",
    "engagementType": "Implementation",
    "duration": "3–4 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/098-fabric-data-agents-conversational-analytics/02-IaC/README.md",
      "hld": "Offerings/098-fabric-data-agents-conversational-analytics/01-Design/HLD-098-Fabric_Data_Agents_Conversational_Analytics.docx",
      "lld": "Offerings/098-fabric-data-agents-conversational-analytics/01-Design/LLD-098-Fabric_Data_Agents_Conversational_Analytics.docx",
      "sow": "Offerings/098-fabric-data-agents-conversational-analytics/03-Sales-and-Delivery-Kit/098 - Statement of Work.docx",
      "wbs": "Offerings/098-fabric-data-agents-conversational-analytics/03-Sales-and-Delivery-Kit/098 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Data & AI Platform",
    "heroKicker": "Data & AI Platform",
    "heroDescription": "Create Fabric data agents that let business users ask questions of lakehouses, warehouses and semantic models in plain language.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: data sits in many systems with unclear ownership.",
          "Without a validated delivery methodology: data quality is unknown; and each ai project extracts data by hand.",
          "The Fabric Data Agents (Conversational Analytics) engagement delivers a structured implementation blueprint designed to resolve these Data & AI Platform operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Chief Data Officer / CFO and Head of Data / Data Architect teams, particularly in retail, manufacturing, financial services."
      },
      "scope": [
        {
          "title": "Curated Fabric Data Foundation",
          "deliverables": "Provisioning of spoke VNet private endpoints (snet-pe), scalable Microsoft Fabric capacity (F2 baseline), private Microsoft Foundry (gpt-4o), Key Vault, and Log Analytics.",
          "notIncluded": "Upstream enterprise ERP or CRM data-warehouse schema re-engineering."
        },
        {
          "title": "Data Agent Configuration & Tuning",
          "deliverables": "Configuration of Fabric Data Agents over curated semantic models and warehouses with domain instructions and verified example queries.",
          "notIncluded": "Autonomous write-back or transactional mutations to source databases."
        },
        {
          "title": "Accuracy Evaluation & Channel Rollout",
          "deliverables": "Curated accuracy test set validation and multi-channel publishing across Fabric, Microsoft Teams, and Copilot while preserving row-level data security.",
          "notIncluded": "End-user Microsoft 365 Copilot seat licensing."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 098 Fabric Data Agents Conversational Analytics pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Data & AI Platform Rollout",
          "scenario": "Coordinated deployment of Fabric Data Agents (Conversational Analytics) across enterprise divisions, enabling cross-functional units to operationalise Data & AI Platform workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 3–4 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "099",
    "title": "Model Fine-Tuning Service",
    "slug": "model-fine-tuning-service",
    "domain": "11 MLOps & LLMOps",
    "engagementType": "Implementation",
    "duration": "4–6 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/099-model-fine-tuning-service/02-IaC/README.md",
      "hld": "Offerings/099-model-fine-tuning-service/01-Design/HLD-099-Model_Fine_Tuning_Service.docx",
      "lld": "Offerings/099-model-fine-tuning-service/01-Design/LLD-099-Model_Fine_Tuning_Service.docx",
      "sow": "Offerings/099-model-fine-tuning-service/03-Sales-and-Delivery-Kit/099 - Statement of Work.docx",
      "wbs": "Offerings/099-model-fine-tuning-service/03-Sales-and-Delivery-Kit/099 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "MLOps & LLMOps",
    "heroKicker": "MLOps & LLMOps",
    "heroDescription": "Fine-tune models in Microsoft Foundry for the organisation's domain, with evaluation against base models and controlled deployment.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: models are deployed by hand from notebooks.",
          "Without a validated delivery methodology: prompts are not versioned or tested; and nobody notices when model quality drifts.",
          "The Model Fine-Tuning Service engagement delivers a structured implementation blueprint designed to resolve these MLOps & LLMOps operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "Chief Data Officer / Head of Analytics and ML Engineering Lead / Platform Engineer teams, particularly in financial services, retail, manufacturing."
      },
      "scope": [
        {
          "title": "Fine-Tuning Justification Gate",
          "deliverables": "Structured decision gate enforcing the 'fine-tune as last resort' rule by benchmarking prompt engineering and RAG baselines before committing compute.",
          "notIncluded": "Unvalidated model training without baseline comparison evidence."
        },
        {
          "title": "Training Data Preparation & Labelling",
          "deliverables": "Data curation workflow with owner sign-off, labelling tooling setup, and private ZRS Storage Account (Entra ID-only, no shared keys) inside a spoke VNet (snet-pe).",
          "notIncluded": "Manual data-entry annotation labour for large unlabelled corpora."
        },
        {
          "title": "Foundry Fine-Tuning & Release Gate",
          "deliverables": "Fine-tuning execution on Microsoft Foundry (gpt-4o), side-by-side evaluation comparing fine-tuned vs base models, Key Vault, Log Analytics, and standard release gating.",
          "notIncluded": "Pre-training foundation models from scratch."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 099 Model Fine Tuning Service pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental MLOps & LLMOps Rollout",
          "scenario": "Coordinated deployment of Model Fine-Tuning Service across enterprise divisions, enabling cross-functional units to operationalise MLOps & LLMOps workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 4–6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  },
  {
    "code": "100",
    "title": "Customer Churn Prediction",
    "slug": "customer-churn-prediction",
    "domain": "12 Predictive & Vision AI",
    "engagementType": "Implementation",
    "duration": "5–6 weeks",
    "iacAssetAvailability": true,
    "iacValidationStatus": "not validated",
    "sourceRefs": {
      "readme": "Offerings/100-customer-churn-prediction/02-IaC/README.md",
      "hld": "Offerings/100-customer-churn-prediction/01-Design/HLD-100-Customer_Churn_Prediction.docx",
      "lld": "Offerings/100-customer-churn-prediction/01-Design/LLD-100-Customer_Churn_Prediction.docx",
      "sow": "Offerings/100-customer-churn-prediction/03-Sales-and-Delivery-Kit/100 - Statement of Work.docx",
      "wbs": "Offerings/100-customer-churn-prediction/03-Sales-and-Delivery-Kit/100 - WBS.xlsx"
    },
    "publicationStatus": "published",
    "domainClean": "Predictive & Vision AI",
    "heroKicker": "Predictive & Vision AI",
    "heroDescription": "Predict which customers are likely to leave and suggest retention actions.",
    "details": {
      "overview": {
        "businessChallenge": [
          "Enterprises deploying this capability often struggle with operational friction: forecasts rely on spreadsheets and judgement.",
          "Without a validated delivery methodology: sensor and camera data is stored but not used; and pilots do not reach production.",
          "The Customer Churn Prediction engagement delivers a structured implementation blueprint designed to resolve these Predictive & Vision AI operational barriers and establish verifiable platform governance."
        ],
        "targetAudience": "COO / Supply Chain Director and Head of Data Science / OT Lead teams, particularly in retail, manufacturing, utilities and logistics."
      },
      "scope": [
        {
          "title": "Feature Engineering & ML Workspace",
          "deliverables": "Deployment of spoke VNet (snet-pe), Azure Machine Learning workspace (AllowOnlyApprovedOutbound, scale-to-zero compute, dedicated ML storage), private Storage, and Key Vault.",
          "notIncluded": "Replacing upstream Fabric or Databricks data-warehouse platforms."
        },
        {
          "title": "Explainable Churn Model Pipeline",
          "deliverables": "Training and scoring pipelines consuming transaction, engagement, and service data from Fabric/Databricks to generate churn scores with top explanatory drivers.",
          "notIncluded": "Autonomous customer contract cancellation or pricing changes without CRM workflows."
        },
        {
          "title": "CRM Publishing & Retention Tracking",
          "deliverables": "Integration publishing churn scores and top reasons into CRM alongside retention-action effectiveness tracking and Log Analytics/App Insights monitoring.",
          "notIncluded": "Execution of outbound marketing campaigns or call-centre staffing."
        }
      ],
      "applications": [
        {
          "title": "Enterprise Core Pattern Deployment",
          "scenario": "An enterprise deploying the 100 Customer Churn Prediction pattern across secure landing zone subscriptions with continuous monitoring and CAF baseline guardrails."
        },
        {
          "title": "Multi-Departmental Predictive & Vision AI Rollout",
          "scenario": "Coordinated deployment of Customer Churn Prediction across enterprise divisions, enabling cross-functional units to operationalise Predictive & Vision AI workloads under unified architectural guardrails."
        }
      ],
      "engagement": {
        "timeline": "About 5–6 weeks from kick-off, subject to customer dependencies.",
        "phases": [
          {
            "name": "Envision",
            "duration": "1–2 weeks",
            "activities": "Mobilise the team, confirm scope and use cases, run design workshops."
          },
          {
            "name": "Foundation",
            "duration": "1–2 weeks",
            "activities": "Deploy landing zone components as code in non-production; configure policy in Audit mode."
          },
          {
            "name": "Build & pilot",
            "duration": "2–4 weeks",
            "activities": "Build and integrate the solution; run evaluations, security tests and a pilot."
          },
          {
            "name": "Production",
            "duration": "1–2 weeks",
            "activities": "Promote to production, switch policies to Deny, hand over runbooks."
          },
          {
            "name": "Stabilise",
            "duration": "1 week",
            "activities": "Hypercare, tuning and knowledge transfer."
          }
        ],
        "prerequisites": [
          "Provide timely access to people, systems, environments and data",
          "Provide licences and Azure subscriptions required by the solution",
          "Make decisions and review deliverables within agreed timescales",
          "Manage internal communications and organisational change",
          "Ensure third parties cooperate where required"
        ],
        "faqs": [
          {
            "question": "What prerequisites are required before commencing this engagement?",
            "answer": "Active administrative access to the relevant cloud tenancy, confirmed subscription network topology, and designated technical stakeholders for weekly milestone reviews."
          },
          {
            "question": "How is technical governance maintained across delivery phases?",
            "answer": "All deployments follow Microsoft Cloud Adoption Framework guardrails, automated infrastructure-as-code validation, and continuous security telemetry logging."
          },
          {
            "question": "What documentation is delivered upon completion?",
            "answer": "A complete High-Level Design (HLD), Low-Level Design (LLD), operational runbooks, and handover session recordings for internal engineering teams."
          }
        ]
      }
    }
  }
];

/**
 * Helper functions
 */
export function getPublishedOfferings(): AcceleratorOffering[] {
  return acceleratorOfferings.filter((o) => o.publicationStatus === "published");
}

export function getOfferingBySlug(slug: string): AcceleratorOffering | undefined {
  return acceleratorOfferings.find((o) => o.slug === slug);
}

export function getOfferingsByDomain(domain: string): AcceleratorOffering[] {
  if (domain === "All") return acceleratorOfferings;
  return acceleratorOfferings.filter((o) => o.domainClean === domain || o.domain === domain);
}

export function getRegistryStats() {
  const total = acceleratorOfferings.length;
  const published = acceleratorOfferings.filter((o) => o.publicationStatus === "published").length;
  const draft = total - published;
  const withIac = acceleratorOfferings.filter((o) => o.iacAssetAvailability).length;
  const withoutIac = total - withIac;
  const domains = Array.from(new Set(acceleratorOfferings.map((o) => o.domainClean))).sort();
  
  const byType: Record<string, number> = {};
  acceleratorOfferings.forEach((o) => {
    byType[o.engagementType] = (byType[o.engagementType] || 0) + 1;
  });

  return {
    total,
    published,
    draft,
    withIac,
    withoutIac,
    domains,
    byType
  };
}