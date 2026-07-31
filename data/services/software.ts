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
      slug: "microservices-architecture",
      title: "Microservices & API Development",
      description: "Developing scalable, stateless backend services and secure API gateways.",
      items: ["High-speed Go and Rust backend scripts", "GraphQL and REST API endpoints", "Message queue database integrations"]
    },
    {
      slug: "web-app-development",
      title: "Web App Development",
      description: "Custom web applications that simplify operations, improve user experience, and scale in the UK.",
      items: ["User-first responsive web design", "High-performance API and tool integrations", "Flexible cloud architecture & ongoing maintenance"]
    },
    {
      slug: "saas-product-development",
      title: "SaaS Product Development",
      description: "Turn-key SaaS product engineering from MVP concepts to scalable multi-tenant platforms.",
      items: ["Product strategy & user-centred UI design", "Scalable multi-tenant microservices", "Seamless integrations & subscription billing"]
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
  },
  "web-app-development": {
    slug: "web-app-development",
    title: "Web App Development",
    metaTitle: "Web App Development Services in UK | Custom Web Apps",
    metaDescription: "Build custom web applications with our Web App Development Services in UK. We create secure, scalable, and user-friendly solutions tailored to your business needs.",
    heroSubtitle: "Our Web App Development Services in the UK help businesses create reliable web applications that support everyday operations, improve customer experiences, and grow with changing business needs.",
    challenge: "Outdated software systems slow down business operations, poor user experiences reduce customer engagement, and growing enterprises require scalable web applications.",
    solution: "Our Web App Development Services in the UK focus on creating custom web applications that simplify daily tasks, improve user experiences, and support long-term business growth. We deliver secure, scalable, and high-performing applications that adapt as your requirements evolve.",
    features: [
      "User-First Design: Built for intuitive user experiences and high engagement",
      "Fast Performance: Quick loading speed across desktop and mobile devices",
      "Reliable Security: Protects business and customer data under compliance standards",
      "System Integration: Works seamlessly with your existing tools and APIs",
      "Flexible Architecture: Built to scale as your business grows",
      "Long-Term Support: Continuous updates, enhancements, and technical maintenance"
    ],
    benefits: [
      "Business Impact: Applications that help teams work faster and smarter",
      "User Experience: Simple, intuitive experiences your customers enjoy using",
      "Long-Term Value: Flexible solutions that grow as your business evolves"
    ],
    deliveryApproach: [
      "Scoping & Design: Defining user journeys, component wireframes, and system integration points.",
      "Agile Engineering: Building clean React/Next.js interfaces and high-performance backend APIs.",
      "Testing & Cloud Deployment: Automated unit/integration tests and zero-downtime deployment."
    ],
    techStack: [
      { name: "Next.js / React", desc: "Server-side rendered web frontend framework." },
      { name: "Node.js / Go", desc: "High-throughput API microservices backend." },
      { name: "PostgreSQL / Redis", desc: "Reliable transactional database and memory caching." }
    ],
    caseStudy: {
      title: "Web App Development Services That Deliver in UK",
      desc: "Helped UK startups, SMEs, and enterprises build web applications that integrate seamlessly with existing systems and deliver reliable digital experiences.",
      metrics: [
        { value: "<100ms", label: "Average Front-End Query Speed" },
        { value: "99.99%", label: "Application SLA Uptime" },
        { value: "45%", label: "Operational Efficiency Gain" }
      ]
    },
    faqs: [
      {
        q: "Why choose Web App Development Services in the UK?",
        a: "Our Web App Development Services in the UK create custom web applications tailored to your exact workflows, enhancing daily productivity, customer satisfaction, and scalability."
      },
      {
        q: "How do you ensure web application security?",
        a: "We implement OWASP security controls, data encryption at rest and in transit, OAuth2/OIDC identity management, and automated vulnerability scanning."
      }
    ]
  },
  "saas-product-development": {
    slug: "saas-product-development",
    title: "SaaS Product Development",
    metaTitle: "SaaS Product Development in UK | Custom SaaS Services",
    metaDescription: "Build innovative software with our SaaS Product Development in UK. We create custom SaaS platforms that improve user experience, support business growth, and adapt to changing needs.",
    heroSubtitle: "From early-stage startups to established businesses, our SaaS Product Development in the UK focuses on building software products that are practical, easy to manage, and ready for growth.",
    challenge: "Legacy systems make it difficult to add new features, slow application performance impacts user experience, and rising maintenance costs reduce time for product improvements.",
    solution: "Our SaaS Product Development in UK helps businesses shape product concepts into functional platforms with intuitive user journeys. Whether building a subscription platform, customer portal, or cloud business app, we provide the flexibility to build around your product vision.",
    features: [
      "Product Strategy: Clear planning from day one to guide product roadmap execution",
      "User-Centred Design: Interface layouts built around real customer needs",
      "Scalable Development: Cloud-native microservice architecture supporting growing demand",
      "Seamless Integrations: Integrates smoothly with your existing tools and APIs",
      "Reliable Performance: Consistent speed, low latency, and system stability",
      "Continuous Improvements: Ongoing feature enhancements based on user feedback"
    ],
    benefits: [
      "Performance: Designed for consistent speed under high multi-tenant request volumes",
      "Reliability: Built to support everyday workloads with a strong technical foundation",
      "Technical Advantage: Modern architecture with unlimited room for feature expansion"
    ],
    deliveryApproach: [
      "Product Strategy & Blueprint: Defining customer personas, multi-tenant tiers, and MVP scope.",
      "Multi-Tenant SaaS Engineering: Building isolated data layers, subscription billing, and auth workflows.",
      "GitOps Release & Analytics: Deploying continuous delivery pipelines and user telemetry trackers."
    ],
    techStack: [
      { name: "Next.js / TypeScript", desc: "Frontend SaaS dashboard and customer portal." },
      { name: "Go / Kubernetes", desc: "Multi-tenant backend microservices and auto-scaling pods." },
      { name: "Stripe API / PostgreSQL", desc: "Subscription billing engine and multi-tenant database schema." }
    ],
    caseStudy: {
      title: "SaaS Product Development for Growing Businesses in UK",
      desc: "Helped UK businesses shape product concepts into scalable subscription platforms, customer portals, and cloud-based applications built for long-term growth.",
      metrics: [
        { value: "10x", label: "Multi-Tenant Scaling Capacity" },
        { value: "99.99%", label: "Platform Availability SLA" },
        { value: "3x", label: "Faster Release Speed" }
      ]
    },
    faqs: [
      {
        q: "What types of SaaS products do you develop?",
        a: "We build multi-tenant subscription platforms, enterprise customer portals, B2B SaaS applications, financial tools, and industry-specific cloud software."
      },
      {
        q: "How do you handle multi-tenant data isolation?",
        a: "We implement strict tenant isolation at the API and database levels, utilizing schema segregation or tenant ID encryption to ensure complete privacy."
      }
    ]
  }
};
