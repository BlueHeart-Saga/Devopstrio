import { ServicePageLayout } from "@/components/ServicePageLayout";

export default function QATestingPage() {
  return (
    <ServicePageLayout
      title="QA & Testing"
      badge="Quality Assurance"
      subtitle="Writing automated end-to-end testing scripts, conducting load tests, checking API security compliance, and integrating tests in CI/CD."
      stats={[
        { value: "95%+", label: "Automation Coverage" },
        { value: "10k+", label: "Tests Executed Daily" },
        { value: "0", label: "Critical Escapes" },
        { value: "Playwright", label: "Primary Framework" }
      ]}
      capabilities={[
        {
          title: "Automated & Functional Testing",
          description: "Configuring end-to-end tests that validate browser layout, API responses, database operations, and mobile user paths.",
          items: [
            "End-to-End browser test automation using Playwright and Cypress",
            "Performance and API load tests using k6 and Apache JMeter",
            "Functional manual verification scripts for legacy business modules"
          ]
        },
        {
          title: "Security & Continuous QA Pipelines",
          description: "Setting up security vulnerability checks and running tests automatically on code commit.",
          items: [
            "Integrating automated test runs inside GitHub Actions/GitLab CI/CD",
            "API endpoint input validation and security scans (OWASP ZAP)",
            "Automated test report generation and Slack notification hook setups"
          ]
        }
      ]}
      ctaText="Hire QA Automation Engineers"
    />
  );
}
