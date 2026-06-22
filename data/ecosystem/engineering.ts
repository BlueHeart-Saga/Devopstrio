import { EcosystemDomain, EcosystemSubpageDetail } from "./types";

export const engineeringDomain: EcosystemDomain = {
  slug: "engineering-excellence",
  title: "Engineering Excellence Framework",
  badge: "Architecture Standards",
  subtitle: "Building Scalable, Secure and Reliable Digital Platforms Through Modern Engineering Practices.",
  overviewHeading: "High-quality software standards built for reliability",
  overviewDesc1: "We define clean architecture standards, mandate high unit test coverage, and automate secrets checks. Our pipelines prevent configuration errors before code hits production.",
  overviewDesc2: "We build self-service developer templates, reducing setup times while maintaining absolute security compliance.",
  stats: [
    { value: "99.95%", label: "Availability" },
    { value: "500+", label: "Deployments Monthly" },
    { value: "80%", label: "Automated Operations" },
    { value: "100%", label: "Security-First Development" }
  ],
  subpages: [
    { slug: "engineering-culture", title: "Engineering Culture", description: "Creating an environment where innovation, ownership and continuous learning thrive." },
    { slug: "software-engineering", title: "Software Engineering", description: "Clean architectures, modular monoliths, and domain-driven design layouts." },
    { slug: "platform-engineering", title: "Platform Engineering", description: "Self-service developer portals, automated cluster creation, and golden paths." },
    { slug: "site-reliability-engineering", title: "Site Reliability Engineering", description: "SLO definition, distributed monitoring, and automated incident response." },
    { slug: "devsecops", title: "DevSecOps", description: "Continuous SAST checks, secrets management, and compliance automation." },
    { slug: "quality-engineering", title: "Quality Engineering", description: "Automated end-to-end testing, browser tests, and continuous quality gates." }
  ],
  benefits: [
    "Zero database credentials committed to code repositories",
    "Rapid release cycles utilizing automated CI/CD pipelines",
    "Highly readable, modular codebases that are easy to update"
  ],
  faqs: [
    { q: "How do you enforce code standards?", a: "We run automated linter checks and unit tests on every pull request, blocking builds that fail." },
    { q: "What test coverage do you mandate?", a: "We target a minimum of 90% test coverage on all custom business logic modules." }
  ],
  ctaTitle: "Upgrade your codebase",
  ctaHighlight: "Quality standards",
  ctaDesc: "Request a code review with our senior architects to identify security and scalability gaps.",
  ctaBtnText: "Consult Technical Lead"
};

export const engineeringSubpages: Record<string, EcosystemSubpageDetail> = {
  "engineering-culture": {
    slug: "engineering-culture",
    title: "Engineering Culture",
    heroSubtitle: "Creating an environment where innovation, ownership and continuous learning thrive.",
    challenge: "Traditional organizations struggle with silos and low developer productivity.",
    solution: "We build an engineering culture focused on autonomy, mastery, and purpose.",
    features: ["Ownership Mindset", "Customer First", "Continuous Improvement"],
    benefits: ["High retention", "Faster delivery", "Innovation"],
    techStack: [],
    caseStudy: {
      title: "Building an engineering culture.",
      desc: "Transformed an enterprise IT department into a high-performing product engineering organization.",
      metrics: []
    },
    faqs: []
  },
  "software-engineering": {
    slug: "software-engineering",
    title: "Software Engineering",
    heroSubtitle: "Design clean, decoupled software architectures optimized for scaling and easy updates.",
    challenge: "Obsolete monolithic systems suffer from database locks, tight coupling, and complicated release schedules.",
    solution: "We build clean architectures, isolate domain models, use API gateways, and write stateless microservices.",
    features: [
      "Decoupled microservice architectures and API gateways",
      "Stateless application servers scaling dynamically",
      "Clean domain-driven code layouts"
    ],
    benefits: [
      "Lower application hosting and database costs",
      "Accelerated development speed through modular code",
      "No database lockups during traffic spikes"
    ],
    techStack: [
      { name: "Docker / Kubernetes", desc: "Standardized microservice container environments." },
      { name: "Go Lang", desc: "High-speed backend programming language." },
      { name: "Kong Gateway", desc: "Security and routing proxy for APIs." }
    ],
    caseStudy: {
      title: "Monolith decomposition for national logistics network.",
      desc: "We decomposed a monolithic shipping ledger into Go microservices, reducing database deadlock occurrences to zero.",
      metrics: [
        { value: "0", label: "Database deadlocks encountered" },
        { value: "4.8x", label: "Release cycle acceleration" },
        { value: "40%", label: "Monthly cloud bill savings" }
      ]
    },
    faqs: [
      { q: "Do you support microservices transitions?", a: "Yes, we analyze application dependencies and migrate modules to microservices in phases." },
      { q: "How do you protect microservice APIs?", a: "We enforce mutual TLS encryption and authenticate calls via API gateways." }
    ]
  },
  "platform-engineering": {
    slug: "platform-engineering",
    title: "Platform Engineering",
    heroSubtitle: "Establish Backstage catalogs and create developer self-service templates.",
    challenge: "Development groups experience high friction waiting for DevOps teams to manually create cloud projects and networks.",
    solution: "We configure Backstage developer portals that automate repository generation and provision secure cloud sandboxes.",
    features: [
      "Backstage developer catalog templates",
      "Automated Terraform workspace generation",
      "Centralized project cost tracking tools"
    ],
    benefits: [
      "Developer onboarding duration reduced from weeks to minutes",
      "Pre-configured security policies enforced on every setup",
      "Elimination of repetitive manual infrastructure tasks"
    ],
    techStack: [
      { name: "Backstage Portal", desc: "Open developer self-service platform." },
      { name: "Terraform Cloud", desc: "Automated cloud workspace creator." },
      { name: "ArgoCD Rollouts", desc: "GitOps deployment automation operator." }
    ],
    caseStudy: {
      title: "Developer self-service platform for software vendor.",
      desc: "Deployed a custom Backstage portal template, allowing 300 engineers to spin up sandboxes on-demand and reducing tickets.",
      metrics: [
        { value: "300+", label: "Active developer users" },
        { value: "85%", label: "Fewer infrastructure tickets logged" },
        { value: "<10m", label: "Sandbox environment creation time" }
      ]
    },
    faqs: [
      { q: "What is Backstage?", a: "Backstage is an open-source framework created by Spotify that consolidates developer tools and catalogs." },
      { q: "How are resources shut down to save cost?", a: "We script auto-cleanup tasks that delete sandbox namespaces after 48 hours of inactivity." }
    ]
  },
  "site-reliability-engineering": {
    slug: "site-reliability-engineering",
    title: "Site Reliability Engineering",
    heroSubtitle: "Track system health metrics and automate incident escalation routines.",
    challenge: "Production outages are detected late by customers, and on-call engineers lack access to logs.",
    solution: "We define precise SLIs/SLOs, configure distributed tracing dashboards, and set up automated call schedules.",
    features: [
      "OpenTelemetry distributed application tracing",
      "Grafana SLO tracking panels auditing latency",
      "PagerDuty incident response schedule setups"
    ],
    benefits: [
      "Outages detected and resolved before customer impact",
      "Clear metrics reporting overall service reliability",
      "Minimized fatigue on developers through smart alerts"
    ],
    techStack: [
      { name: "OpenTelemetry", desc: "Distributed tracing and telemetry parser." },
      { name: "Grafana", desc: "Telemetry charts and SLO audit panel." },
      { name: "PagerDuty", desc: "Automated team on-call page system." }
    ],
    caseStudy: {
      title: "Observability overhaul for digital payment grid.",
      desc: "Configured OpenTelemetry logs across 80 payment microservices, identifying routing bottlenecks and maintaining stability.",
      metrics: [
        { value: "80", label: "Instrumented payment microservices" },
        { value: "99.99%", label: "Uptime maintained during peaks" },
        { value: "<2m", label: "Average incident detection time" }
      ]
    },
    faqs: [
      { q: "What is the difference between SLA and SLO?", a: "An SLA is the business contract promising uptime to customers, while an SLO is the SRE target to prevent violations." },
      { q: "Do you build custom alert dashboards?", a: "Yes, we build Grafana views plotting system health and error budgets." }
    ]
  },
  devsecops: {
    slug: "devsecops",
    title: "DevSecOps",
    heroSubtitle: "Audit code libraries inside pipelines and scan server configurations.",
    challenge: "Vulnerable packages and loose cloud network rules are merged to production due to lack of checks.",
    solution: "We add SAST checks and image scans to continuous integration steps, blocking insecure builds.",
    features: [
      "Trivy image vulnerability scans checking build outputs",
      "Snyk static code analysis (SAST) blocking pull requests",
      "Automated secrets checks verifying commit files"
    ],
    benefits: [
      "No security flaws merged into main codebases",
      "Pre-certified configurations passing auditor checks",
      "Real-time alerts identifying vulnerable active nodes"
    ],
    techStack: [
      { name: "Trivy", desc: "Vulnerability scanner checking build images." },
      { name: "Snyk SAST", desc: "Developer security tool checking code." },
      { name: "HashiCorp Vault", desc: "Secure runtime credentials manager." }
    ],
    caseStudy: {
      title: "DevSecOps pipeline for healthcare technology platform.",
      desc: "Configured vulnerability scans across 40 software repositories, blocking insecure builds and passing HIPAA audits.",
      metrics: [
        { value: "40", label: "Audited repositories" },
        { value: "0", label: "Critical exploits in production" },
        { value: "100%", label: "HIPAA compliance score" }
      ]
    },
    faqs: [
      { q: "Does DevSecOps slow down developers?", a: "We cache scan steps, keeping pipeline checks under 2 minutes so developers face no delays." },
      { q: "How do you secure server credentials?", a: "We fetch passwords dynamically from HashiCorp Vault at startup, storing no keys in files." }
    ]
  },
  "quality-engineering": {
    slug: "quality-engineering",
    title: "Quality Engineering",
    heroSubtitle: "Build automated browser tests and execute simulated heavy traffic loads.",
    challenge: "Manual web page testing delays releases, and unverified software fails under heavy user loads.",
    solution: "We write Playwright end-to-end browser tests and run k6 load simulation scripts inside pipelines.",
    features: [
      "Playwright end-to-end browser testing scripts",
      "k6 load testing pipelines simulating thousands of users",
      "Visual regression tests auditing styling layouts"
    ],
    benefits: [
      "100% confidence that page features function on all devices",
      "Identified system bottlenecks before marketing campaigns",
      "No manual quality assurance verification required before releases"
    ],
    techStack: [
      { name: "Playwright", desc: "Fast browser testing and automation framework." },
      { name: "k6 by Grafana", desc: "Declarative load testing utility." },
      { name: "Lighthouse CI", desc: "Core Web Vitals performance checker." }
    ],
    caseStudy: {
      title: "Load testing and browser automation for ticket seller.",
      desc: "Wrote k6 scripts simulating 10,000 users booking tickets in parallel, identifying database locks and optimizing indexing.",
      metrics: [
        { value: "10,000", label: "Simulated parallel booking users" },
        { value: "0", label: "Page failures during checkout peak" },
        { value: "100%", label: "Browser testing automation" }
      ]
    },
    faqs: [
      { q: "Do you run tests on real devices?", a: "Yes, we integrate browser tests with services like BrowserStack to verify layouts on phones and tablets." },
      { q: "How are tests coordinated inside pipelines?", a: "Tests execute automatically on every merge request, blocking deployment if errors are logged." }
    ]
  }
};
