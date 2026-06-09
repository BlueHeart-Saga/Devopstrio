import { ServiceCategory, CapabilityDetail } from "./types";

export const softwareService: ServiceCategory = {
  slug: "software-development",
  title: "Software Development",
  badge: "Enterprise Software",
  subtitle: "Build modern headless applications, microservices backends, saas platforms, and API gateways optimized for scalability.",
  overviewHeading: "High-performance custom software systems designed to scale",
  overviewDesc1: "We build web frontends, backend microservices, and mobile applications. Our codebases focus on clean architectures, high test coverage, and fast page load times.",
  overviewDesc2: "We decoupling frontends from database backends utilizing Redis caching, serverless API routes, and GraphQL endpoints to optimize load times.",
  stats: [
    { value: "<80ms", label: "Front-end Query Speeds" },
    { value: "95%+", label: "Test Code Coverage" },
    { value: "12+", label: "SaaS Platforms Launched" },
    { value: "10M+", label: "Active Platform Users" }
  ],
  capabilities: [
    {
      slug: "enterprise-app-development",
      title: "Enterprise App Development",
      description: "Building responsive next-gen web frontends using React and Next.js framework.",
      items: ["Server-side rendered web dashboards", "State management systems", "Responsive mobile-first pages"]
    },
    {
      slug: "microservices",
      title: "Microservices & API Development",
      description: "Developing scalable, stateless backend services and secure API gateways.",
      items: ["High-speed Go and Rust backend scripts", "GraphQL and REST API endpoints", "Message queue database integrations"]
    }
  ],
  outcomes: [
    "Buttery-smooth user experiences with under 100ms loading speeds",
    "Scalable database queries handling concurrent user spikes",
    "Declarative API integration matching client system specs"
  ],
  industries: [
    "E-commerce: Headless cart frontends and checkout APIs",
    "Logistics: Real-time map routes and cargo tracking",
    "EdTech: Collaborative class portals and grade logs"
  ],
  techStack: [
    { name: "Next.js / TypeScript", desc: "Fast React framework for web apps." },
    { name: "Go / Node.js", desc: "Backend services handling high request loads." },
    { name: "PostgreSQL / Redis", desc: "Data layers for transactions and cache speed." }
  ],
  deliveryFramework: [
    "Phase 1: Architecture Blueprint & UX Layouts",
    "Phase 2: Agile Sprints & Automated Code Tests",
    "Phase 3: CI/CD Deployments & Load Tuning"
  ],
  caseStudies: [
    {
      title: "Rebuilding global storefront using Next.js and Redis.",
      desc: "We engineered a headless web storefront, replacing a legacy monolithic system. The portal load speeds dropped to 80ms, increasing purchase conversions.",
      highlights: [
        "Setup server-side rendering for catalog queries",
        "Integrated in-memory Redis checkout states",
        "Achieved 95% test code coverage"
      ]
    }
  ],
  faqs: [
    {
      q: "What coding standards do you enforce?",
      a: "We enforce strict ESLint rule checks, automated TypeScript typings, and run unit test scripts on every pull request."
    },
    {
      q: "How do you handle backend application scaling?",
      a: "We deploy our services as stateless Docker containers inside Kubernetes, configuring horizontal auto-scalers based on CPU metrics."
    }
  ],
  ctaTitle: "Co-develop your custom",
  ctaHighlight: "Software product",
  ctaDesc: "Book a meeting with our principal engineers to map out your application architecture and review your tech stack.",
  ctaBtnText: "Consult Software Engineer"
};

export const softwareCapabilities: Record<string, CapabilityDetail> = {
  "enterprise-app-development": {
    slug: "enterprise-app-development",
    title: "Enterprise App Development",
    heroSubtitle: "Build responsive, high-performance web applications using React, Next.js, and modern state frameworks.",
    challenge: "Monolithic front-end setups cause massive bundle sizes, slow page paint metrics, poor SEO scoring, and complicated deployment flows.",
    solution: "We build headless, component-driven web applications leveraging server-side rendering, code splitting, and edge content caching.",
    features: [
      "Headless architectures decoupling view components from backend logic",
      "Dynamic bundle splitting and component lazy-loading setups",
      "Global search engine optimization using structured schemas"
    ],
    benefits: [
      "Sub-second page loads on slow mobile connections",
      "High rankings on Google Lighthouse performance scores",
      "Standardized component code libraries for development speed"
    ],
    deliveryApproach: [
      "UX Prototype: Finalizing component designs and routing frameworks.",
      "Front-end Construction: Writing clean React views and state logic.",
      "Edge Integration: Deploying code to global CDN edges."
    ],
    techStack: [
      { name: "Next.js / React", desc: "Modern server-side rendering framework." },
      { name: "Tailwind CSS", desc: "Utility-first design styling." },
      { name: "Zustand / Redux Toolkit", desc: "Clean component state managers." }
    ],
    caseStudy: {
      title: "Headless web portal for global fashion catalog.",
      desc: "We developed a headless React platform utilizing Next.js, reducing content load times by 60% and improving sales conversions.",
      metrics: [
        { value: "60%", label: "Reduction in page load times" },
        { value: "28%", label: "Increase in customer checkout conversion" },
        { value: "100%", label: "Lighthouse SEO score" }
      ]
    },
    faqs: [
      {
        q: "Do you build mobile responsive views?",
        a: "Yes. All our front-end code is styled mobile-first, rendering across all mobile, tablet, and widescreen setups."
      },
      {
        q: "Can you connect with existing backend API gateways?",
        a: "Yes. We build clean API client wrappers that integrate with REST, GraphQL, or gRPC backend setups."
      }
    ]
  }
};
