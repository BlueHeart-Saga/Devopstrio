export interface EditorialContent {
  slug: string;
  eyebrowNumber: string;
  eyebrowTopic: string;
  headingPrefix: string;
  headingHighlight: string;
  headingSuffix?: string;
  paragraph1: string;
  quote: string;
  paragraph2Intro: string;
  linkText: string;
  linkHref: string;
  paragraph2Outro: string;
  photoConcept: {
    figureNum: string;
    title: string;
    subtitle: string;
    visualFocus: string;
    description: string;
    imageSrc?: string;
  };
}

export const servicesEditorialData: Record<string, EditorialContent> = {
  "ai-consulting": {
    slug: "ai-consulting",
    eyebrowNumber: "01",
    eyebrowTopic: "AI CONSULTING",
    headingPrefix: "Turning AI Ambition into ",
    headingHighlight: "Practical Business Decisions",
    headingSuffix: "",
    paragraph1:
      "Enterprise leaders across the UK are eager to unlock the competitive potential of artificial intelligence, yet too many initiatives stall at the proof-of-concept stage. Without clear architectural alignment and rigorous commercial viability assessments, pilot projects consume valuable engineering bandwidth without delivering measurable business value.",
    quote:
      "Enterprise AI strategy succeeds when operational value dictates the technical architecture, not speculative model enthusiasm.",
    paragraph2Intro:
      "Bridging executive intent with technical execution demands an independent advisory approach. By conducting rigorous data readiness audits, evaluating governance frameworks, and aligning generative models with existing workflows, our ",
    linkText: "strategic AI consulting",
    linkHref: "/services/ai-consulting",
    paragraph2Outro:
      " guides organisations to make confident, de-risked technology investments.",
    photoConcept: {
      imageSrc: "/webp/assets/editorial/editorial-ai-consulting.png",
      figureNum: "FIGURE 01",
      title: "Executive AI Strategy & Governance",
      subtitle: "Strategic Advisory & Readiness",
      visualFocus: "Advisory, decision-making and AI readiness",
      description:
        "Two consultants reviewing an AI adoption strategy or architecture plan with a business stakeholder.",
    },
  },
  "ai-modernization": {
    slug: "ai-modernization",
    eyebrowNumber: "02",
    eyebrowTopic: "AI MODERNISATION",
    headingPrefix: "Modernising Existing Systems for an ",
    headingHighlight: "AI-Ready Future",
    headingSuffix: "",
    paragraph1:
      "Decades of core business logic reside within monolithic databases, legacy ERPs, and tightly coupled enterprise applications. Attempting to bolt modern intelligence onto brittle, un-instrumented architectures creates immediate data bottlenecks and severe security vulnerabilities.",
    quote:
      "Modernisation is not about discarding established software; it is about liberating proprietary enterprise data from architectural paralysis.",
    paragraph2Intro:
      "Transitioning mission-critical platforms into modular, AI-ready assets requires surgical decoupling. Through event-driven streaming, automated microservice extraction, and modern API layering, our ",
    linkText: "legacy modernisation",
    linkHref: "/services/ai-modernization",
    paragraph2Outro:
      " services transform static transaction hubs into scalable foundations for autonomous workflows.",
    photoConcept: {
      imageSrc: "/webp/assets/editorial/editorial-ai-modernization.png",
      figureNum: "FIGURE 01",
      title: "Application Architecture Transformation",
      subtitle: "Legacy Transformation & Engineering",
      visualFocus:
        "Legacy transformation, application architecture and engineering",
      description:
        "Engineers examining a legacy application architecture alongside a proposed modern system design.",
    },
  },
  "cloud-services": {
    slug: "cloud-services",
    eyebrowNumber: "03",
    eyebrowTopic: "CLOUD SERVICES",
    headingPrefix: "Building Reliable Cloud Foundations for ",
    headingHighlight: "Modern Business",
    headingSuffix: "",
    paragraph1:
      "Modern cloud engineering demands far more than basic server hosting. Rapid enterprise growth often yields sprawling multi-cloud environments fraught with configuration drift, opaque billing spikes, and regional latency bottlenecks that hinder business agility.",
    quote:
      "Resilient cloud infrastructure balances automated elasticity with strict architectural discipline and verifiable cost governance.",
    paragraph2Intro:
      "Achieving sustained infrastructure reliability requires purpose-built engineering. By architecting sovereign UK landing zones, configuring secure multi-region failovers, and enforcing proactive FinOps practices, our ",
    linkText: "cloud services",
    linkHref: "/services/cloud-services",
    paragraph2Outro:
      " ensure mission-critical systems operate with optimal performance and predictable expenditure.",
    photoConcept: {
      imageSrc: "/webp/assets/editorial/editorial-cloud-services.png",
      figureNum: "FIGURE 01",
      title: "Multi-Region Cloud Topology",
      subtitle: "Infrastructure, Migration & Scalability",
      visualFocus: "Cloud infrastructure, migration and scalability",
      description:
        "Cloud architects reviewing cloud infrastructure, network topology or deployment architecture.",
    },
  },
  "managed-services": {
    slug: "managed-services",
    eyebrowNumber: "04",
    eyebrowTopic: "MANAGED SERVICES",
    headingPrefix: "Keeping Business Technology ",
    headingHighlight: "Reliable, Secure and Supported",
    headingSuffix: "",
    paragraph1:
      "In an always-on global economy, unexpected infrastructure outages or silent service degradations directly threaten customer retention and revenue. Traditional reactive helpdesks that wait for tickets to be raised can no longer protect modern digital services.",
    quote:
      "World-class operations prevent incidents before end-users notice them through continuous telemetry and proactive SRE oversight.",
    paragraph2Intro:
      "Maintaining continuous operational resilience requires around-the-clock vigilance. By combining predictive anomaly detection with dedicated site reliability engineers, our ",
    linkText: "managed services",
    linkHref: "/services/managed-services",
    paragraph2Outro:
      " protect mission-critical workflows with stringent uptime SLAs and rapid automated remediation.",
    photoConcept: {
      imageSrc: "/webp/assets/editorial/editorial-managed-services.png",
      figureNum: "FIGURE 01",
      title: "24/7 Enterprise Operations Command",
      subtitle: "Monitoring, Support & Continuity",
      visualFocus: "Monitoring, managed support and operational continuity",
      description:
        "IT operations engineers monitoring infrastructure health, service tickets and operational dashboards.",
    },
  },
  "devops-automation": {
    slug: "devops-automation",
    eyebrowNumber: "05",
    eyebrowTopic: "DEVOPS & AUTOMATION",
    headingPrefix: "Making Software Delivery ",
    headingHighlight: "Faster, Safer and More Consistent",
    headingSuffix: "",
    paragraph1:
      "Friction between product development and infrastructure teams remains one of the greatest impediments to enterprise innovation. Manual approvals, inconsistent staging environments, and high-risk releases drain morale and delay critical software go-to-market timelines.",
    quote:
      "Continuous automation is not merely about deployment speed; it is the ultimate guardrail against human error and operational fatigue.",
    paragraph2Intro:
      "Eliminating delivery friction demands systematic orchestration. By implementing immutable GitOps pipelines, infrastructure as code, and automated security scanning gates, our ",
    linkText: "DevOps and automation",
    linkHref: "/services/devops-automation",
    paragraph2Outro:
      " engineering empowers product teams to release code with high velocity and total release confidence.",
    photoConcept: {
      imageSrc: "/webp/assets/editorial/editorial-devops-automation.png",
      figureNum: "FIGURE 01",
      title: "Continuous Integration & Deployment Pipeline",
      subtitle: "Continuous Delivery & Automation",
      visualFocus: "Continuous delivery, automation and engineering teamwork",
      description:
        "DevOps engineers reviewing CI/CD pipelines, deployment processes or infrastructure automation.",
    },
  },
  "cybersecurity": {
    slug: "cybersecurity",
    eyebrowNumber: "06",
    eyebrowTopic: "CYBERSECURITY",
    headingPrefix: "Protecting Business Systems in a ",
    headingHighlight: "Changing Threat Landscape",
    headingSuffix: "",
    paragraph1:
      "As enterprise workloads expand across hybrid cloud networks and distributed remote teams, perimeter-based defences are fundamentally obsolete. Sophisticated ransomware, supply-chain exploits, and strict UK GDPR compliance mandates demand an uncompromising defensive posture.",
    quote:
      "Effective enterprise cybersecurity assumes breach, enforcing granular zero-trust verification across every identity, API and data endpoint.",
    paragraph2Intro:
      "Protecting business data requires continuous vigilance and proactive threat hunting. By embedding Zero Trust architecture, threat intelligence monitoring, and automated vulnerability management into your core workflows, our ",
    linkText: "cybersecurity practice",
    linkHref: "/services/cybersecurity",
    paragraph2Outro:
      " safeguards institutional reputation and operational continuity.",
    photoConcept: {
      imageSrc: "/webp/assets/editorial/editorial-cybersecurity.png",
      figureNum: "FIGURE 01",
      title: "Zero Trust Threat Intelligence & Defence",
      subtitle: "Risk Assessment & Security Operations",
      visualFocus: "Risk assessment, security operations and protection",
      description:
        "Security analysts assessing security alerts, access controls or vulnerability findings.",
    },
  },
  "software-development": {
    slug: "software-development",
    eyebrowNumber: "07",
    eyebrowTopic: "SOFTWARE DEVELOPMENT",
    headingPrefix: "Engineering Software Around ",
    headingHighlight: "Real Business Requirements",
    headingSuffix: "",
    paragraph1:
      "Off-the-shelf software packages often compel growing businesses to compromise their unique commercial workflows, while poorly architected custom systems quickly accumulate crippling technical debt and fragile dependencies.",
    quote:
      "Superior enterprise software harmonises domain-driven architecture with clean, maintainable engineering and intuitive user experience.",
    paragraph2Intro:
      "Creating lasting digital products requires disciplined engineering practices. From distributed microservices to responsive frontend interfaces, our ",
    linkText: "custom software development",
    linkHref: "/services/software-development",
    paragraph2Outro:
      " builds high-performance, fault-tolerant web and mobile platforms engineered specifically to power your core operational goals.",
    photoConcept: {
      imageSrc: "/webp/assets/editorial/editorial-software-development.png",
      figureNum: "FIGURE 01",
      title: "Full-Stack System Architecture & Code Review",
      subtitle: "Custom Engineering & Collaboration",
      visualFocus: "Custom software engineering, collaboration and product development",
      description:
        "Developers reviewing application code, UI designs or software architecture together.",
    },
  },
  "digital-transformation": {
    slug: "digital-transformation",
    eyebrowNumber: "08",
    eyebrowTopic: "DIGITAL TRANSFORMATION",
    headingPrefix: "Connecting People, Processes and Technology for ",
    headingHighlight: "Better Business Outcomes",
    headingSuffix: "",
    paragraph1:
      "Technology investments fail when introduced without deep empathy for daily operational workflows. Replacing analogue processes with fragmented digital tools frequently introduces new frustrations, employee resistance, and disconnected data silos.",
    quote:
      "Technology alone never transforms an enterprise; sustainable evolution happens when digital workflows augment human capability.",
    paragraph2Intro:
      "Successful transformation unites cultural adoption with pragmatic engineering. By mapping existing bottlenecks, modernising customer journeys, and orchestrating change management alongside technical delivery, our ",
    linkText: "digital transformation consulting",
    linkHref: "/services/digital-transformation",
    paragraph2Outro:
      " turns complex legacy operations into agile, customer-centric engines.",
    photoConcept: {
      imageSrc: "/webp/assets/editorial/editorial-digital-transformation.png",
      figureNum: "FIGURE 01",
      title: "Cross-Functional Operational Blueprinting",
      subtitle: "Business Change & Process Improvement",
      visualFocus: "Business change, process improvement and collaboration",
      description:
        "A cross-functional team mapping current processes and planning technology improvements in a workshop.",
    },
  },
  "data-engineering": {
    slug: "data-engineering",
    eyebrowNumber: "09",
    eyebrowTopic: "DATA SERVICES",
    headingPrefix: "Turning Complex Business Data into ",
    headingHighlight: "Trusted Information",
    headingSuffix: "",
    paragraph1:
      "Modern enterprises accumulate massive volumes of transactional, customer, and telemetry data, yet vital insights remain locked within disparate silos. Conflicting reporting metrics and unvalidated data pipelines paralyse executive decision-making and hinder AI adoption.",
    quote:
      "Analytics and artificial intelligence are only as credible as the hygiene, lineage and reliability of the data pipelines feeding them.",
    paragraph2Intro:
      "Building a dependable information backbone requires modern pipeline engineering. By designing real-time streaming architectures, implementing strict schema validation, and unifying lakehouse platforms, our ",
    linkText: "data engineering services",
    linkHref: "/services/data-engineering",
    paragraph2Outro:
      " transform raw enterprise data into verifiable, audit-ready intelligence.",
    photoConcept: {
      imageSrc: "/webp/assets/editorial/editorial-data-engineering.png",
      figureNum: "FIGURE 01",
      title: "Data Lakehouse Pipeline & Lineage Mapping",
      subtitle: "Data Engineering, Governance & Analytics",
      visualFocus: "Data engineering, integration, governance and analytics",
      description:
        "Data engineers reviewing data pipelines, database models or analytics workflows.",
    },
  },
  "qa-testing": {
    slug: "qa-testing",
    eyebrowNumber: "10",
    eyebrowTopic: "QA & TESTING",
    headingPrefix: "Building Confidence into ",
    headingHighlight: "Every Software Release",
    headingSuffix: "",
    paragraph1:
      "Undetected software bugs and performance bottlenecks discovered in production destroy user trust and demand costly emergency hotfixes. Relying on rushed manual testing before major releases creates dangerous blind spots in complex distributed systems.",
    quote:
      "Software quality cannot be inspected into a system at the eleventh hour; it must be engineered into every commit across the entire lifecycle.",
    paragraph2Intro:
      "Establishing release confidence requires a shift-left testing strategy. By integrating automated end-to-end regression suites, API contract validation, and rigorous performance load profiling into your delivery pipeline, our ",
    linkText: "QA and software testing",
    linkHref: "/services/qa-testing",
    paragraph2Outro:
      " practice guarantees stability across every user touchpoint.",
    photoConcept: {
      imageSrc: "/webp/assets/editorial/editorial-qa-testing.png",
      figureNum: "FIGURE 01",
      title: "Automated Test Suite & Regression Telemetry",
      subtitle: "Quality Assurance & Release Readiness",
      visualFocus: "Quality assurance, testing and release readiness",
      description:
        "QA engineers testing a web or mobile application, reviewing test cases and investigating defects.",
    },
  },
  "it-consulting": {
    slug: "it-consulting",
    eyebrowNumber: "11",
    eyebrowTopic: "IT CONSULTING",
    headingPrefix: "Making Better Technology Decisions for ",
    headingHighlight: "Long-Term Business Growth",
    headingSuffix: "",
    paragraph1:
      "Selecting the wrong technology stack, entering misaligned multi-year vendor lock-ins, or misallocating IT capital expenditure can constrain business agility for years. Enterprise leaders need clear, vendor-neutral advisory to guide complex architectural decisions.",
    quote:
      "Strategic IT consulting cuts through vendor hype, ensuring every technology investment directly supports long-term operational resilience.",
    paragraph2Intro:
      "Navigating the evolving technology landscape requires senior architectural leadership. From comprehensive IT health audits to technology roadmap governance and legacy rationalisation, our ",
    linkText: "strategic IT consulting",
    linkHref: "/services/it-consulting",
    paragraph2Outro:
      " provides the clarity needed to invest confidently in sustainable growth.",
    photoConcept: {
      imageSrc: "/webp/assets/editorial/editorial-it-consulting.png",
      figureNum: "FIGURE 01",
      title: "Enterprise Technology Roadmap & Capital Strategy",
      subtitle: "Technology Advisory & Strategic Architecture",
      visualFocus: "Technology advisory, architecture and investment planning",
      description:
        "A senior IT consultant discussing infrastructure planning, technology strategy or an IT roadmap with business stakeholders.",
    },
  },
};
