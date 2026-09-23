import { ServiceCategory, CapabilityDetail } from "./types";

export const testingService: ServiceCategory = {
  slug: "qa-testing",
  title: "QA & Testing",
  badge: "Quality Engineering",
  subtitle: "Implement automated UI testing, load and performance validations, API checks, and continuous integration gates.",
  overviewHeading: "High-coverage test automation pipelines built for speed",
  overviewDesc1: "We build automated test suites, run load validations, and set up quality check gates. Our test suites check code modifications automatically before releases.",
  overviewDesc2: "We construct secure mock test databases, run performance checks under traffic spikes, and automate compliance audits to guarantee software quality.",
  stats: [
    { value: "98%", label: "Test Automation Coverage" },
    { value: "<5m", label: "Test Execution Time" },
    { value: "10k+", label: "Daily Test Scenarios" },
    { value: "0", label: "Production Regression Outages" }
  ],
  capabilities: [
    {
      slug: "test-automation",
      title: "End-to-End Test Automation",
      description: "Writing scalable, resilient automated UI and functional test scenarios using Playwright, Cypress, and Selenium.",
      items: [
        "End-to-end user journey validations",
        "Cross-browser and headless execution runs",
        "Parallelized distributed test runners"
      ],
      href: "/services/qa-testing/test-automation"
    },
    {
      slug: "performance-testing",
      title: "Performance & Stress Testing",
      description: "Simulating high-concurrency peak traffic loads using k6, Locust, and JMeter to discover system limits and bottlenecks.",
      items: [
        "Distributed high-concurrency load simulations",
        "Database connection pool & deadlock profiling",
        "P99 latency & memory leak isolation"
      ],
      href: "/services/qa-testing/performance-testing"
    },
    {
      slug: "security-testing",
      title: "Security & Vulnerability Testing",
      description: "Integrating automated SAST, DAST, dependency vulnerability scanning, and OWASP Top 10 security validations.",
      items: [
        "Automated SAST and DAST vulnerability scans",
        "Dynamic API penetration testing suites",
        "Dependency CVE & software supply chain audits"
      ],
      href: "/services/qa-testing/security-testing"
    },
    {
      slug: "api-testing",
      title: "API & Contract Testing",
      description: "Validating REST, GraphQL, and gRPC endpoints for functional accuracy, backward compatibility, and Pact schema contracts.",
      items: [
        "Consumer-driven Pact contract testing",
        "Automated OpenAPI schema validation",
        "Virtual mock servers for isolated testing"
      ],
      href: "/services/qa-testing/api-testing"
    },
    {
      slug: "mobile-app-testing",
      title: "Mobile Application Testing",
      description: "Automated and real-device testing for iOS and Android across multiple OS versions, screen resolutions, and network conditions.",
      items: [
        "Real device cloud farm automated executions",
        "Deep biometric & payment flow validations",
        "Network latency & battery consumption profiling"
      ],
      href: "/services/qa-testing/mobile-app-testing"
    },
    {
      slug: "functional-testing",
      title: "Functional & Regression Testing",
      description: "Comprehensive functional verification and automated regression suites ensuring zero defect leakage to production.",
      items: [
        "Automated regression suite execution",
        "Structured UAT test scenarios & tracking",
        "Zero-defect release validation sign-offs"
      ],
      href: "/services/qa-testing/functional-testing"
    },
    {
      slug: "continuous-testing",
      title: "Continuous Testing & CI/CD Gates",
      description: "Embedding automated quality gates, branch coverage enforcement, and smoke tests directly into developer pipelines.",
      items: [
        "Automated PR merge blocking quality gates",
        "Instant smoke & regression feedback loops",
        "Code coverage & static analysis enforcement"
      ],
      href: "/services/qa-testing/continuous-testing"
    },
    {
      slug: "quality-engineering",
      title: "Quality Engineering & Shift-Left QA",
      description: "Transforming testing culture with shift-left strategies, test data management, and proactive quality engineering architectures.",
      items: [
        "Shift-left quality architecture consulting",
        "Synthetic test data generation pipelines",
        "Enterprise QA governance & metric dashboards"
      ],
      href: "/services/qa-testing/quality-engineering"
    }
  ],
  outcomes: [
    "Accelerated software release cycles with fast test runs",
    "Early detection of software errors before production deployments",
    "Complete visibility of test coverage metrics on custom dashboards"
  ],
  industries: [
    "E-commerce: Cart transaction load validations",
    "Finance: Ledger calculation validation testing",
    "Healthcare: Patient portal form audits"
  ],
  techStack: [
    { name: "Playwright / Cypress", desc: "Automated browser testing engines." },
    { name: "k6 / JMeter", desc: "Performance and load validation tools." },
    { name: "SonarQube", desc: "Static code analyzer and test coverage tracker." }
  ],
  deliveryFramework: [
    "Phase 1: Test Plan Design & Path Auditing",
    "Phase 2: Test Script Writing & CI/CD Integration",
    "Phase 3: Load Validation Testing & Quality Gates"
  ],
  caseStudies: [
    {
      title: "Automated testing pipeline for e-commerce checkout flow.",
      desc: "We wrote automated browser tests using Playwright and load validation scenarios using k6. The check runs run automatically on GitHub Actions, cutting release cycles by 65%.",
      highlights: [
        "Setup 150+ automated browser scenarios",
        "Measured system limits up to 10k concurrent users",
        "Reduced regression errors in production to zero"
      ]
    }
  ],
  faqs: [
    {
      q: "How do you handle dynamic database testing?",
      a: "We write seed scripts to spin up ephemeral database instances during test runs, cleaning them up automatically after tests finish."
    },
    {
      q: "Do you test mobile application interfaces?",
      a: "Yes. We write automated mobile test suites using Appium, verifying layouts across iOS and Android simulators."
    }
  ],
  ctaTitle: "Automate your software",
  ctaHighlight: "Quality pipelines",
  ctaDesc: "Schedule an assessment with our QA leads to review your test coverage metrics and set up automated validation runs.",
  ctaBtnText: "Request Quality Audit"
};

export const testingCapabilities: Record<string, CapabilityDetail> = {
  "test-automation": {
    slug: "test-automation",
    title: "Test Automation",
    heroSubtitle: "Write automated user path scenarios, configure cross-browser validation runs, and set up CI/CD test gates.",
    challenge: "Manual browser testing slows down release cycles, limits code path validations, and allows regression errors to escape to production.",
    solution: "We build automated test suites utilizing Playwright, running browser tests in parallel with every pull request.",
    features: [
      "End-to-end browser user flow tests with automatic retries",
      "Parallel script runs on cloud container pools",
      "Test report generation with video capture logs"
    ],
    benefits: [
      "Accelerated software release cycle speeds",
      "Early detection of visual layout anomalies",
      "Higher confidence in code modifications"
    ],
    deliveryApproach: [
      "Scenario Mapping: Listing critical user pathways and validations.",
      "Script Construction: Writing clean, selector-safe test files.",
      "CI/CD Integration: Connecting tests to git pull requests."
    ],
    techStack: [
      { name: "Playwright", desc: "Fast, modern browser automation tool." },
      { name: "GitHub Actions", desc: "Workflow orchestration engine." },
      { name: "Allure Report", desc: "Visual test run report generator." }
    ],
    caseStudy: {
      title: "Automating checkout flow validations for online catalog.",
      desc: "We wrote Playwright scenarios for shopping cart actions, cutting release check cycles from 4 hours of manual testing to 4 minutes of automated runs.",
      metrics: [
        { value: "4 min", label: "Automated run duration" },
        { value: "0", label: "Regression errors in production" },
        { value: "98%", label: "Checkout path test coverage" }
      ]
    },
    faqs: [
      {
        q: "How do you handle API key authorizations in tests?",
        a: "We store test tokens inside secure environment files, retrieving them dynamically before browser runs."
      },
      {
        q: "Do you support visual snapshot testing?",
        a: "Yes. We configure visual check tests to compare screen layouts against reference design images automatically."
      }
    ]
  }
};
