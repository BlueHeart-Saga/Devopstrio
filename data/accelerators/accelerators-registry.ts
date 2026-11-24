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
          "title": "Control plane",
          "deliverables": "Registry and policy",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Identity",
          "deliverables": "Agent identities",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Reporting",
          "deliverables": "Agent risk dashboard",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Policies",
          "deliverables": "Tiered policies.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Reporting",
          "deliverables": "Monthly agent risk report.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Interviews",
          "deliverables": "Business view",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Technical review",
          "deliverables": "Evidence",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Report",
          "deliverables": "Gaps and plan",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Scoring",
          "deliverables": "Evidence-based scores.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Plan",
          "deliverables": "Two-track plan.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Usage",
          "deliverables": "Adoption data",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Reporting",
          "deliverables": "Value by department",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Measures",
          "deliverables": "Agreed value measures.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Licence Optimisation",
          "deliverables": "Monthly licence review.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Capacity",
          "deliverables": "Compute and storage",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Storage",
          "deliverables": "Lakehouses",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Governance",
          "deliverables": "Ownership and catalogue",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Domains",
          "deliverables": "Domain-based workspaces.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Security",
          "deliverables": "Secure by default.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Agent",
          "deliverables": "Conversation",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Channels",
          "deliverables": "Customer access",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "CRM",
          "deliverables": "History",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Single Brain",
          "deliverables": "Build once, publish everywhere.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Handover",
          "deliverables": "Context-preserving handover.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Copilot",
          "deliverables": "AI coding assistance",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Security",
          "deliverables": "Code and secret scanning",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Metrics",
          "deliverables": "Adoption and impact",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Policy Setup",
          "deliverables": "Central policy configuration.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Measuring Impact",
          "deliverables": "Baseline and impact report.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Sources",
          "deliverables": "Policy documents",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Index",
          "deliverables": "Searchable policy content",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Interface",
          "deliverables": "Staff questions",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Content Control",
          "deliverables": "Approved-only indexing.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Escalation",
          "deliverables": "Clear handover to HR.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Copilots",
          "deliverables": "Role experiences",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Data",
          "deliverables": "Business data",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Role Scenarios",
          "deliverables": "Scenario-led setup.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Integration",
          "deliverables": "Permission-aware integration.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Workspaces",
          "deliverables": "Experimentation and training",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Registry",
          "deliverables": "Shared models",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Pipelines",
          "deliverables": "Automation",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Project Template",
          "deliverables": "Templated projects.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Promotion",
          "deliverables": "Registry-based promotion.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Discovery",
          "deliverables": "Use cases",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Sizing",
          "deliverables": "Business case",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Scoring",
          "deliverables": "Four-factor scoring.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Business Case",
          "deliverables": "Funded first wave.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Capture",
          "deliverables": "Shelf images",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Edge",
          "deliverables": "Local inference",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Models",
          "deliverables": "Gap detection",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Privacy",
          "deliverables": "Privacy by design.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Alerts",
          "deliverables": "Actionable tasks.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Agent",
          "deliverables": "Monitoring and proposals",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Data",
          "deliverables": "Stock and sales",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Approval",
          "deliverables": "Planner approval",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Exception Focus",
          "deliverables": "Exception-based planning.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Proposals",
          "deliverables": "Explained proposals.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Web app",
          "deliverables": "Chat interface",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "History",
          "deliverables": "Conversation storage",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Models",
          "deliverables": "Chat models",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "User Experience",
          "deliverables": "Web and Teams front ends.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Data Handling",
          "deliverables": "Short, configurable retention.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Agent",
          "deliverables": "Understand and respond",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Tools",
          "deliverables": "Customer and order data",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Channel",
          "deliverables": "Email handling",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Automation Limits",
          "deliverables": "Agreed automation boundary.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Vulnerability",
          "deliverables": "Protective handover.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Visibility",
          "deliverables": "AI data use",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Controls",
          "deliverables": "Block risky sharing",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Policies",
          "deliverables": "Tailored recommended policies.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Response",
          "deliverables": "Coach, then block.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Agent",
          "deliverables": "Research and briefing",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Tools",
          "deliverables": "Data sources",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Brief Template",
          "deliverables": "Standard brief format.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Sources",
          "deliverables": "Cited external facts.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Identity",
          "deliverables": "Agent identities",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Controls",
          "deliverables": "Access governance",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Identity Model",
          "deliverables": "One identity per agent.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Reviews",
          "deliverables": "Quarterly access reviews.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Agent",
          "deliverables": "Guidance and tasks",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Tools",
          "deliverables": "Tasks and requests",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Channel",
          "deliverables": "New starter access",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Onboarding Journey",
          "deliverables": "Scheduled journey.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Manager View",
          "deliverables": "Progress dashboard.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Discovery",
          "deliverables": "Find existing agents",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Assessment",
          "deliverables": "Readiness score",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Discovery",
          "deliverables": "Complete agent inventory.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Readiness Score",
          "deliverables": "Five-area score and plan.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Connectors",
          "deliverables": "External content",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Agents",
          "deliverables": "Role-specific experiences",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "APIs",
          "deliverables": "Actions",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Connector Design",
          "deliverables": "Permission-aware connectors.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Role Agents",
          "deliverables": "Role-based agents.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Generator",
          "deliverables": "Draft content",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Product data",
          "deliverables": "Facts for grounding",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Workflow",
          "deliverables": "Review and approval",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Grounding",
          "deliverables": "Fact-grounded drafts.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Approval Workflow",
          "deliverables": "Human approval before publishing.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Product data",
          "deliverables": "Attributes and images",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Generator",
          "deliverables": "Titles and descriptions",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Publishing",
          "deliverables": "Write back approved text",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Batch Generation",
          "deliverables": "Event-driven batches.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Quality Checks",
          "deliverables": "Automated checks then review.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Sources",
          "deliverables": "Regulations and guidance",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Index",
          "deliverables": "Section-level index",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Interface",
          "deliverables": "Research and Q&A",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Section-Level Indexing",
          "deliverables": "Structure-aware chunking.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Change Monitoring",
          "deliverables": "Automatic change detection.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Repository",
          "deliverables": "Approved content",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Search",
          "deliverables": "Semantic search",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Content Governance",
          "deliverables": "Owned, dated content.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Reuse",
          "deliverables": "Shared with bid tools.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Agent",
          "deliverables": "Matching and explanation",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Data",
          "deliverables": "Transactions",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Approval",
          "deliverables": "Approve adjustments",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Matching",
          "deliverables": "Rules first, agent for exceptions.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Audit Trail",
          "deliverables": "Complete audit trail.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Source control",
          "deliverables": "Prompts and test sets",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Evaluation",
          "deliverables": "Quality and safety",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Pipelines",
          "deliverables": "Release gates",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Regression Testing",
          "deliverables": "Regression gate.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Feedback Loop",
          "deliverables": "Growing test sets.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Compute",
          "deliverables": "GPU capacity",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Scheduling",
          "deliverables": "Fair sharing",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Serving",
          "deliverables": "Self-hosted models",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Sharing",
          "deliverables": "Quota with burst.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Self-Hosted Models",
          "deliverables": "Gateway for all models.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Edge",
          "deliverables": "Line inference",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Training",
          "deliverables": "Model improvement",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Integration",
          "deliverables": "Quality records",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Edge First",
          "deliverables": "Edge inference.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Learning Loop",
          "deliverables": "Operator feedback loop.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Sources",
          "deliverables": "Articles and tickets",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Index",
          "deliverables": "Knowledge index",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Interface",
          "deliverables": "Agent and user access",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Ticket Mining",
          "deliverables": "Summarised ticket knowledge.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Knowledge Gaps",
          "deliverables": "Gap reporting.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Intake",
          "deliverables": "Claim documents",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Agent",
          "deliverables": "Checks and recommendation",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Tools",
          "deliverables": "Cover and history",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Recommendation",
          "deliverables": "Handler decides.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Fraud Signals",
          "deliverables": "Flag, don't decide.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Labels",
          "deliverables": "Classify content",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "DLP",
          "deliverables": "Restrict processing",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Insight",
          "deliverables": "Monitor AI data use",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Taxonomy",
          "deliverables": "Simple taxonomy with defaults.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Copilot DLP",
          "deliverables": "Label-based exclusion.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Extraction",
          "deliverables": "Clauses, parties, dates",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Analysis",
          "deliverables": "Compare with playbook",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Register",
          "deliverables": "Contract data and obligations",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Playbook",
          "deliverables": "Playbook-based scoring.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Obligation Tracking",
          "deliverables": "Automated reminders.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Tracing",
          "deliverables": "Run history",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Audit",
          "deliverables": "Data access logs",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Dashboards",
          "deliverables": "Operational view",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Trace Standard",
          "deliverables": "Common trace standard.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Investigations",
          "deliverables": "Searchable audit trail.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Ingestion",
          "deliverables": "Sensor data",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Models",
          "deliverables": "Health scores",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Action",
          "deliverables": "Work orders",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Health Score",
          "deliverables": "Explained health scores.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Work Orders",
          "deliverables": "Draft work orders.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Voice",
          "deliverables": "Speech in and out",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Agent",
          "deliverables": "Conversation",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Telephony",
          "deliverables": "Call handling",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Containment",
          "deliverables": "Resolve or route with context.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Identity",
          "deliverables": "Verified actions only.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Capture",
          "deliverables": "Document intake",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Extraction",
          "deliverables": "Field extraction",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Validation",
          "deliverables": "Checks against master data",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Review",
          "deliverables": "Exception handling",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Confidence Thresholds",
          "deliverables": "Straight-through with exceptions.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
        },
        {
          "title": "Integration",
          "deliverables": "API integration.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Agent",
          "deliverables": "Conversation and actions",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Tools",
          "deliverables": "Fulfil requests",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Channel",
          "deliverables": "User access",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Request Catalogue",
          "deliverables": "Start with top ten requests.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Approvals",
          "deliverables": "Manager approval for access.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Source control",
          "deliverables": "Solution versions",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Pipelines",
          "deliverables": "Promotion",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Testing",
          "deliverables": "Conversation tests",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Solution Packaging",
          "deliverables": "Solution per agent.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Release Approval",
          "deliverables": "Two-party approval.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Agent",
          "deliverables": "Conversation",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Data",
          "deliverables": "Business records",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Security",
          "deliverables": "User-context access.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Actions",
          "deliverables": "Reuse business processes.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Workspaces",
          "deliverables": "Engineering and ML",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Governance",
          "deliverables": "Access and lineage",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Storage",
          "deliverables": "Delta tables",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Network",
          "deliverables": "Private Databricks.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Unity Catalog",
          "deliverables": "Central governance.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Assessment tooling",
          "deliverables": "Configuration evidence",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Report",
          "deliverables": "Prioritised results",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Assessment Scope",
          "deliverables": "Seven-area review.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Remediation",
          "deliverables": "Prioritised backlog.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Mail access",
          "deliverables": "Read and draft emails",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Classifier",
          "deliverables": "Category, urgency, draft",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Routing",
          "deliverables": "Move to team folders",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Classification",
          "deliverables": "Confidence-based routing.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Drafts",
          "deliverables": "Draft only, never auto-send.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Workflow",
          "deliverables": "Request and approval",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Registry",
          "deliverables": "Agent records",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Lifecycle Stages",
          "deliverables": "Six-stage lifecycle.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Retirement",
          "deliverables": "Automatic suspension.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Agent",
          "deliverables": "Conversation",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Knowledge",
          "deliverables": "Policies",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Actions",
          "deliverables": "Transactions",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Topics",
          "deliverables": "Data-driven topic list.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Transactions",
          "deliverables": "Simple transactions first.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Discovery",
          "deliverables": "AI inventory",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Assessment",
          "deliverables": "Findings",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Coverage",
          "deliverables": "Six-area review.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Prioritisation",
          "deliverables": "Risk-ranked plan.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Gateway",
          "deliverables": "Policy enforcement",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Safety",
          "deliverables": "Prompt Shields, filters",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "PII",
          "deliverables": "Detection and masking",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Layered Controls",
          "deliverables": "Defence in depth.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Masking",
          "deliverables": "Mask by default.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Data",
          "deliverables": "Inputs",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Model",
          "deliverables": "Recommendations",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Serving",
          "deliverables": "Low-latency API",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Consent",
          "deliverables": "Consent-aware serving.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Testing",
          "deliverables": "A/B tested releases.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Orchestrator",
          "deliverables": "Coordinates agents",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Runtime",
          "deliverables": "Hosts agents",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Shared services",
          "deliverables": "Memory and tools",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Orchestration Patterns",
          "deliverables": "Template patterns.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Shared Services",
          "deliverables": "Platform services for agents.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Evaluation",
          "deliverables": "Quality and safety",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Fairness",
          "deliverables": "Group outcomes",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Evidence",
          "deliverables": "Results history",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Metrics",
          "deliverables": "Use-case-specific metrics.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Thresholds",
          "deliverables": "Evaluation gate.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Catalogue",
          "deliverables": "Data products and glossary",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Classification",
          "deliverables": "Sensitive data",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Data Products",
          "deliverables": "Product-based governance.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Access Requests",
          "deliverables": "Governed access.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Data",
          "deliverables": "Sales and drivers",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Models",
          "deliverables": "Forecasting",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Output",
          "deliverables": "Forecasts",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Granularity",
          "deliverables": "Store-week forecasts.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Accuracy Tracking",
          "deliverables": "Continuous accuracy reporting.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Stream",
          "deliverables": "Transactions",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Scoring",
          "deliverables": "Fraud scores",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Cases",
          "deliverables": "Investigation",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Scoring",
          "deliverables": "Rules plus ML.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Investigation",
          "deliverables": "Explained cases.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Budgets",
          "deliverables": "Alerts",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Quotas",
          "deliverables": "Token limits",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Policy",
          "deliverables": "SKU restrictions",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Thresholds",
          "deliverables": "Three alert levels.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Hard Limits",
          "deliverables": "Hard limits in non-production.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "People",
          "deliverables": "Expertise",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Process",
          "deliverables": "Consistent delivery",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Platform",
          "deliverables": "Shared services",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Operating Model",
          "deliverables": "Hub-and-spoke CoE.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Enablement",
          "deliverables": "Enablement programme.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Policy",
          "deliverables": "Residency and control enforcement",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Keys",
          "deliverables": "Customer-managed keys",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Evidence",
          "deliverables": "Audit reporting",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Residency Controls",
          "deliverables": "Deny-by-default outside the UK.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Key Management",
          "deliverables": "Customer-managed keys throughout.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Agent",
          "deliverables": "Guidance and request creation",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Tools",
          "deliverables": "Requests and supplier checks",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Policy Engine",
          "deliverables": "Rules as data.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Request Creation",
          "deliverables": "User confirms before submit.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Agent",
          "deliverables": "Conversation",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Knowledge",
          "deliverables": "Answers",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Actions",
          "deliverables": "Tickets",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Self-Help",
          "deliverables": "Guided fixes.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Escalation",
          "deliverables": "Context-rich handover.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "SIEM",
          "deliverables": "Detection and response",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Playbooks",
          "deliverables": "Automated containment",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Detections",
          "deliverables": "AI detection pack.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Response",
          "deliverables": "Automated containment.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Ingestion",
          "deliverables": "Live events",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Store",
          "deliverables": "Time-series data",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Actions",
          "deliverables": "Automated responses",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Event Model",
          "deliverables": "Common event schema.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Actions",
          "deliverables": "Event-driven actions.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Catalog",
          "deliverables": "Data and AI assets",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Vector search",
          "deliverables": "Retrieval indexes",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Asset Types",
          "deliverables": "One catalogue for AI assets.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Grants",
          "deliverables": "Group-based access.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Platform",
          "deliverables": "Channels and routing",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "AI",
          "deliverables": "Assist and summaries",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Reporting",
          "deliverables": "Service metrics",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Routing",
          "deliverables": "Intent-based routing.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Agent Assist",
          "deliverables": "Copilot assist.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Inventory",
          "deliverables": "Apps, flows, agents",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Controls",
          "deliverables": "Governance",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Community",
          "deliverables": "Maker support",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Environment Strategy",
          "deliverables": "Three-tier environments.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Maker Support",
          "deliverables": "Maker enablement programme.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Chat",
          "deliverables": "Staff AI chat",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Controls",
          "deliverables": "Shadow AI control",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Configuration",
          "deliverables": "Policy-aligned settings.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Shadow AI",
          "deliverables": "Sanctioned tools only.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Records",
          "deliverables": "Published records",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Source",
          "deliverables": "Technical details",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Drafting",
          "deliverables": "Plain-language records.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Maintenance",
          "deliverables": "Change-triggered updates.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Monitoring",
          "deliverables": "Quality and drift",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Alerts",
          "deliverables": "Notifications",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Signals",
          "deliverables": "Six signal types.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Response",
          "deliverables": "Defined response.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Data",
          "deliverables": "Inputs",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Model",
          "deliverables": "Elasticity and optimisation",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Approval",
          "deliverables": "Manager sign-off",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Guardrails",
          "deliverables": "Rule-bound recommendations.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Approval",
          "deliverables": "Human approval.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Transcription",
          "deliverables": "Live transcript",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Assist",
          "deliverables": "Suggestions and summaries",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "CRM",
          "deliverables": "Saved notes",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Suggestions",
          "deliverables": "Real-time suggestions.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Summaries",
          "deliverables": "Approved summaries.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Transcription",
          "deliverables": "Call transcripts",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Scoring",
          "deliverables": "QA and compliance",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Reporting",
          "deliverables": "Coaching insight",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Scorecards",
          "deliverables": "Existing scorecards.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Coaching",
          "deliverables": "Coaching-focused output.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Metering",
          "deliverables": "Token usage",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Costs",
          "deliverables": "Billing data",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Reporting",
          "deliverables": "Chargeback reports",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Allocation Rules",
          "deliverables": "Usage-based allocation.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Reports",
          "deliverables": "Monthly chargeback.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Data",
          "deliverables": "Usage",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Capacity",
          "deliverables": "Reserved throughput",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Routing",
          "deliverables": "Spillover",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Sizing",
          "deliverables": "Baseline plus spillover.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Review",
          "deliverables": "Monthly review.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "AI gateway",
          "deliverables": "Single entry point for models",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Backends",
          "deliverables": "Load-balanced model pool",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Metrics",
          "deliverables": "Token use per application",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Gateway Policies",
          "deliverables": "Reusable policy fragments.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Onboarding Applications",
          "deliverables": "One API product per application.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Ingestion",
          "deliverables": "Extract text and layout",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Summariser",
          "deliverables": "Section and final summaries",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Summary Templates",
          "deliverables": "Configurable templates per document type.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Review",
          "deliverables": "Side-by-side review.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Answer library",
          "deliverables": "Past answers and content",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Drafting",
          "deliverables": "Question-by-question drafts",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Output",
          "deliverables": "Formatted proposal",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Answer Library",
          "deliverables": "Curated answer library.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Drafting Flow",
          "deliverables": "Draft with sources and gaps flagged.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Semantic layer",
          "deliverables": "Business definitions",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Query agent",
          "deliverables": "Question to query",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Interface",
          "deliverables": "Chat with results",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Semantic Model",
          "deliverables": "Governed semantic layer.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Transparency",
          "deliverables": "Explainable answers.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Agent",
          "deliverables": "Triage and diagnosis",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Tools",
          "deliverables": "Diagnostics and fixes",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Channel",
          "deliverables": "On-call collaboration",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Diagnosis",
          "deliverables": "Automated incident summary.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Remediation",
          "deliverables": "Approved runbooks only.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Coding agent",
          "deliverables": "Automated changes",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Pipelines",
          "deliverables": "Build, test, scan",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Security",
          "deliverables": "Scanning",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Work Types",
          "deliverables": "Low-risk work first.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Guardrails",
          "deliverables": "Same controls as people.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Reports",
          "deliverables": "Oversharing insight",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Reviews",
          "deliverables": "Owner attestation",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Controls",
          "deliverables": "Hide from Copilot",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Prioritisation",
          "deliverables": "Risk-ranked remediation.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Ongoing Hygiene",
          "deliverables": "Continuous hygiene.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Protection",
          "deliverables": "Threat detection",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Posture",
          "deliverables": "Misconfigurations",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "SIEM",
          "deliverables": "Alert handling",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Rollout",
          "deliverables": "Policy-driven enablement.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Tuning",
          "deliverables": "Tuned before go-live.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Inventory",
          "deliverables": "Systems and use cases",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Assessment",
          "deliverables": "Risk categories",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Classification",
          "deliverables": "Act-aligned classification.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Obligations",
          "deliverables": "Obligation plan per system.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Rules",
          "deliverables": "Checks",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Pipelines",
          "deliverables": "Enforcement",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Reporting",
          "deliverables": "Quality scores",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Critical Elements",
          "deliverables": "Critical data first.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Circuit Breaker",
          "deliverables": "Stop bad data early.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Translation",
          "deliverables": "Document and text translation",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Glossary",
          "deliverables": "Approved terminology",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Terminology",
          "deliverables": "Managed glossaries.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Workflow",
          "deliverables": "Risk-based review.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Crawler",
          "deliverables": "Public content",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Assistant",
          "deliverables": "Answers",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Front end",
          "deliverables": "Public access",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Public Grounding",
          "deliverables": "Public content only.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Handover",
          "deliverables": "Seamless human handover.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Agent",
          "deliverables": "Customer conversation",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Channels",
          "deliverables": "Public access",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Actions",
          "deliverables": "Transactions",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Authentication",
          "deliverables": "Sign-in for personal data.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Handover",
          "deliverables": "Seamless handover.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Data",
          "deliverables": "Usage evidence",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Model",
          "deliverables": "Licence scenarios",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Segmentation",
          "deliverables": "Usage-based segments.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Recommendation",
          "deliverables": "Costed licence plan.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Automated",
          "deliverables": "Attack simulation",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Manual",
          "deliverables": "Business abuse cases",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Evidence",
          "deliverables": "Stored results",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Test Library",
          "deliverables": "OWASP plus custom tests.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Retest",
          "deliverables": "Fix and retest.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Source",
          "deliverables": "Current estate",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Target",
          "deliverables": "Unified platform",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Wave Planning",
          "deliverables": "Wave-based migration.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Validation",
          "deliverables": "Reconciled cut-over.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Transcription",
          "deliverables": "Speech to text",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Notes",
          "deliverables": "Structured notes and actions",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Integration",
          "deliverables": "Write to case system",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Note Structure",
          "deliverables": "Fixed structure per service.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Review and Save",
          "deliverables": "Human approval before saving.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Sources",
          "deliverables": "Technical content",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Index",
          "deliverables": "Text and diagram search",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "App",
          "deliverables": "Field access",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Safety Content",
          "deliverables": "Verbatim safety content.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Offline Use",
          "deliverables": "Offline cache.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Tool gateway",
          "deliverables": "Expose and secure MCP tools",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "MCP servers",
          "deliverables": "Tool implementations",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Registry",
          "deliverables": "Tool catalogue",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Tool Design",
          "deliverables": "Narrow, least-privilege tools.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Catalogue",
          "deliverables": "Central tool catalogue.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Discovery",
          "deliverables": "SaaS AI usage",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Azure",
          "deliverables": "Unapproved AI resources",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "App Governance",
          "deliverables": "Three-tier app status.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Alternatives",
          "deliverables": "Block with alternatives.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Register",
          "deliverables": "Use-case records",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Reporting",
          "deliverables": "Portfolio view",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Data Model",
          "deliverables": "Standard record.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Gatekeeping",
          "deliverables": "Register before build.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Agent",
          "deliverables": "Question answering",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Data",
          "deliverables": "Governed data",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Curation",
          "deliverables": "Curated sources only.",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Testing",
          "deliverables": "Accuracy test set.",
          "notIncluded": "Organisational policy and DPIA authoring"
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
          "title": "Training",
          "deliverables": "Custom models",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Data",
          "deliverables": "Training sets",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Evaluation",
          "deliverables": "Comparison",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Decision Gate",
          "deliverables": "Fine-tune as last resort.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Comparison",
          "deliverables": "Evidence-based choice.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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
          "title": "Data",
          "deliverables": "Customer data",
          "notIncluded": "Changes to the platform landing zone (hub, identity, management)"
        },
        {
          "title": "Model",
          "deliverables": "Churn scores",
          "notIncluded": "Licences and Azure consumption costs"
        },
        {
          "title": "Action",
          "deliverables": "Retention tasks",
          "notIncluded": "Data cleansing or migration of source content"
        },
        {
          "title": "Explainability",
          "deliverables": "Explained scores.",
          "notIncluded": "Organisational policy and DPIA authoring"
        },
        {
          "title": "Feedback",
          "deliverables": "Closed loop.",
          "notIncluded": "Support after the hypercare period (available as a managed service)"
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