import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata = {
  title: "QA & Testing Services | Devopstrio",
  description: "Ensure flawless application delivery with automated end-to-end testing, performance load testing, secure API testing, mobile device verification, and robust continuous quality engineering.",
};

export default function QATestingPage() {
  return (
    <ServicePageLayout
      title="QA & Testing"
      badge="Quality Assurance"
      subtitle="Writing automated end-to-end user tests, performing application load tests, validating REST/GraphQL APIs, and running continuous integration verification."
      stats={[
        { value: "95%+", label: "Test Coverage" },
        { value: "10k+", label: "Automated Executions" },
        { value: "0", label: "Production Regression" },
        { value: "5x", label: "Deployment Confidence" }
      ]}
      capabilities={[
        {
          id: "test-automation",
          title: "Test Automation",
          description: "Designing script-based testing flows to verify user pathways automatically.",
          items: [
            "End-to-end user path testing using Playwright and Cypress frameworks",
            "Component and integration test suites using Jest and Vitest",
            "Cross-browser testing matrices in cloud environments"
          ]
        },
        {
          id: "performance-testing",
          title: "Performance Testing",
          description: "Simulating massive load to identify API latency bottlenecks and database locking.",
          items: [
            "Large-scale load testing scripts written in k6 and Apache JMeter",
            "Peak traffic simulations modeling user spikes and behaviors",
            "Database lock and query speed analysis under heavy concurrent loads"
          ]
        },
        {
          id: "security-testing",
          title: "Security Testing",
          description: "Continuous verification that security rules, authorization controls, and encryption are working.",
          items: [
            "Automated vulnerability scans of staging and preview environments",
            "Checking code dependencies for known security flaws (Snyk, Dependabot)",
            "API access control validation tests to prevent authorization bypasses"
          ]
        },
        {
          id: "api-testing",
          title: "API Testing",
          description: "Validating payload structures, response codes, and rate limits.",
          items: [
            "Postman and Newman integration inside automated build pipelines",
            "Payload schema validation tests checking JSON contracts",
            "Boundary value and input validation testing for security hardening"
          ]
        },
        {
          id: "mobile-application-testing",
          title: "Mobile Application Testing",
          description: "Verifying app responsiveness and logic across real iOS and Android devices.",
          items: [
            "Automated app runs using Appium on cloud device browser farms",
            "Mobile memory leakage and crash log evaluations",
            "Offline-first synchronization testing under varying network conditions"
          ]
        },
        {
          id: "functional-testing",
          title: "Functional Testing",
          description: "Ensuring specific business requirements match software executions.",
          items: [
            "Feature-by-feature test scenarios with clear inputs and outputs",
            "Regression test cycles before major environment updates",
            "User Acceptance Testing (UAT) dashboard management and feedback loops"
          ]
        },
        {
          id: "continuous-testing",
          title: "Continuous Testing",
          description: "Embedding test suites directly into the CI/CD pipeline.",
          items: [
            "Block-on-fail pipeline rules preventing broken code from reaching staging",
            "Parallel test executions minimizing build and release durations",
            "Automated code coverage reports generation (Codecov, SonarQube)"
          ]
        },
        {
          id: "quality-engineering",
          title: "Quality Engineering",
          description: "Establishing guidelines and quality standards early in the software design phase.",
          items: [
            "Shift-left testing methodologies coaching and workshop orchestration",
            "Development standards auditing and strict code review guidelines",
            "Testing metrics dashboards checking defect escape ratios"
          ]
        }
      ]}
      ctaText="Hire QA Engineers"
    />
  );
}
