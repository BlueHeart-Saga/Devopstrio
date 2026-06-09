import { EcosystemDomain, EcosystemSubpageDetail } from "./types";

export const researchDomain: EcosystemDomain = {
  slug: "research-future-tech",
  title: "Research & Future Tech",
  badge: "Future Architecture",
  subtitle: "Positioning enterprises for the next era of computing with Agentic AI, Autonomous Enterprises, and Edge AI.",
  overviewHeading: "Next-generation software systems designed for the autonomous enterprise",
  overviewDesc1: "We research tomorrow's systems today. Our developers experiment with decentralized ledger security, autonomous prompt routing, and energy-efficient cloud scheduling.",
  overviewDesc2: "We build secure prototype systems, preparing organizations for emerging technologies before they disrupt markets.",
  stats: [
    { value: "3+", label: "Research Programs" },
    { value: "12+", label: "Autonomous Agent Demos" },
    { value: "95%+", label: "Energy Efficiency Gain" },
    { value: "Future", label: "Ready Blueprint" }
  ],
  subpages: [
    { slug: "agentic-ai", title: "Agentic AI", description: "Stateful agent networks, autonomous prompt execution, and API adapters." }
  ],
  benefits: [
    "Early access to prototypes demonstrating next-generation business logic",
    "Pre-release software evaluation reports de-risking adoptions",
    "Direct contact with emerging technology research networks"
  ],
  faqs: [
    { q: "How do you test agentic safety?", a: "We run mock environments with strict API boundaries, verifying agent decisions before production runs." },
    { q: "What is your focus in quantum computing?", a: "We study quantum-safe encryption algorithms to protect client databases from future threats." }
  ],
  ctaTitle: "Prepare for autonomous",
  ctaHighlight: "Technology futures",
  ctaDesc: "Request a research briefing with our team to explore future technology adoptions for your enterprise.",
  ctaBtnText: "Consult Research Director"
};

export const researchSubpages: Record<string, EcosystemSubpageDetail> = {
  "agentic-ai": {
    slug: "agentic-ai",
    title: "Agentic AI Research",
    heroSubtitle: "Deploy stateful agent networks capable of autonomous decision-making and secure database updates.",
    challenge: "Traditional API connections break when encountering dynamic database schemas, requiring continuous developer intervention.",
    solution: "We build stateful agent networks that capture schema changes and adapt queries dynamically using LangGraph.",
    features: [
      "Stateful agent networks adapting queries dynamically",
      "Secrets protection rules preventing key leakage",
      "Self-correcting query retry loops"
    ],
    benefits: [
      "90% reduction in API connection breakage rates",
      "Continuous process execution without developer intervention",
      "Safe transaction processing under strict limits"
    ],
    techStack: [
      { name: "LangGraph", desc: "Advanced state graph coordination tool." },
      { name: "Python / PyTorch", desc: "Neural processing language and libraries." },
      { name: "PostgreSQL", desc: "Relational database server host." }
    ],
    caseStudy: {
      title: "Autonomous shipping coordinator for regional freight provider.",
      desc: "We deployed an autonomous agent network that schedules cargo shipments, resolving address anomalies and updating database ledgers automatically.",
      metrics: [
        { value: "90%", label: "Triage automation success" },
        { value: "<5s", label: "Average query response delay" },
        { value: "100%", label: "Compliance audit score" }
      ]
    },
    faqs: [
      { q: "How do you limit agent permissions?", a: "We connect agents to read-only databases, requiring human approval for writes." },
      { q: "What safeguards prevent runaway loop cycles?", a: "We configure maximum iteration thresholds and block queries exceeding set budgets." }
    ]
  }
};
