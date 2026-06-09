import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata = {
  title: "Software Development Services | Devopstrio",
  description: "Accelerate your product release cycle with custom enterprise applications, web development, native and cross-platform mobile apps, SaaS, and API/microservices architectures.",
};

export default function SoftwareDevelopmentPage() {
  return (
    <ServicePageLayout
      title="Software Development"
      badge="Application Engineering"
      subtitle="Designing high-performance enterprise applications, responsive web portals, scalable SaaS platforms, and distributed microservices architectures."
      stats={[
        { value: "120+", label: "Completed Projects" },
        { value: "10M+", label: "Active Users" },
        { value: "99.9%", label: "SLA Adherence" },
        { value: "10+", label: "Years Experience" }
      ]}
      capabilities={[
        {
          id: "enterprise-application-development",
          title: "Enterprise Application Development",
          description: "Engineering robust, highly scalable software systems to support business-critical operations.",
          items: [
            "Monolith splitting and multi-layered software designs",
            "Database schema optimization for high-throughput writing",
            "High-availability deployments with custom load balancers"
          ]
        },
        {
          id: "web-application-development",
          title: "Web Application Development",
          description: "Crafting responsive, high-performance web interfaces with rich user experiences.",
          items: [
            "Dynamic frontend development using React and Next.js",
            "Server-side rendering (SSR) and static site generation (SSG)",
            "Accessibility compliance (WCAG 2.1 AA) and modern SEO layouts"
          ]
        },
        {
          id: "mobile-application-development",
          title: "Mobile Application Development",
          description: "Building native and cross-platform mobile apps for iOS and Android.",
          items: [
            "Cross-platform development using Flutter and React Native",
            "Native iOS/Android engineering for hardware-level integrations",
            "CI/CD pipeline automation for App Store and Google Play publishing"
          ]
        },
        {
          id: "saas-product-development",
          title: "SaaS Product Development",
          description: "Building multi-tenant cloud applications with integrated billing, telemetry, and provisioning.",
          items: [
            "Multi-tenant database isolation strategies (shared vs. database-per-tenant)",
            "Stripe and custom subscription billing system integrations",
            "Enterprise client onboarding and SSO integrations"
          ]
        },
        {
          id: "api-development-integration",
          title: "API Development & Integration",
          description: "Designing clean, well-documented API gateways and integrating third-party services.",
          items: [
            "RESTful and GraphQL API design with OpenAPI/Swagger specifications",
            "High-performance gRPC setups for internal microservice communication",
            "API gateway configuration (Kong/Apigee) for rate limiting and authorization"
          ]
        },
        {
          id: "microservices-architecture",
          title: "Microservices Architecture",
          description: "Decoupling complex systems into independent, loosely coupled services.",
          items: [
            "Event-driven architecture using Apache Kafka and RabbitMQ",
            "Service-to-service communication security and request retries",
            "Distributed transactions and saga pattern implementation"
          ]
        },
        {
          id: "product-engineering",
          title: "Product Engineering",
          description: "Transforming product concepts into production-ready software solutions.",
          items: [
            "Rapid prototyping and Minimum Viable Product (MVP) iterations",
            "Agile sprints and feature roadmap execution",
            "User experience testing and performance feedback integration"
          ]
        },
        {
          id: "application-modernization",
          title: "Application Modernization",
          description: "Upgrading legacy applications to modern frameworks, databases, and architectures.",
          items: [
            "Legacy code refactoring and migration to cloud-native stacks",
            "Database modernization (monolithic SQL to distributed SQL/NoSQL)",
            "Zero-downtime database and code cutover playbooks"
          ]
        }
      ]}
      ctaText="Hire Software Engineers"
    />
  );
}
