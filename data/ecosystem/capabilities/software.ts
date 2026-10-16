import { CapabilityPageData } from "./types";

export const softwareCapabilities: Record<string, CapabilityPageData> = {
  "high-throughput-backends": {
    slug: "high-throughput-backends",
    pillarSlug: "software-engineering",
    pillarName: "Software Engineering",
    title: "High-Throughput Backends",
    tag: "Distributed Systems",
    badge: "Sub-Millisecond APIs & Reactive Microservices",
    subtitle: "Architect ultra-fast, resilient backend systems handling millions of concurrent requests. Built on Go, Rust, Java Spring Boot, and Node.js with non-blocking I/O and event-driven architectures.",
    metrics: [
      { val: "< 5ms", label: "p99 API Latency", sub: "Optimized non-blocking I/O" },
      { val: "250k+", label: "Req / Sec per Node", sub: "Go & Rust compiled backends" },
      { val: "99.999%", label: "Uptime Availability", sub: "Resilient circuit breaking" },
      { val: "0 ms", label: "Connection Pool Starvation", sub: "HikariCP & pgBouncer" }
    ],
    capabilities: [
      {
        id: "event-driven-architecture",
        title: "Event-Driven CQRS & Event Sourcing",
        tag: "System Design",
        badge: "Kafka & EventStore",
        latencyBadge: "< 4ms Event Bus",
        desc: "Decouples read and write workloads using Command Query Responsibility Segregation (CQRS) and event sourcing, delivering extreme read scalability and complete transactional auditability.",
        stats: [
          "Immutable event logs capturing every state change with zero data mutation",
          "Materialized read views tailored specifically for millisecond client querying",
          "Sub-10ms event propagation via high-throughput Apache Kafka clusters"
        ],
        terminal: {
          command: "event_bus.dispatch({ aggregate: 'OrderAggregate', cmd: 'PLACE_ORDER' })",
          status: "EVENT COMMITTED: ORDER_PLACED_v2",
          logs: [
            { type: "comment", text: "// Appending immutable domain event to stream" },
            { type: "step", text: "> validated domain invariants: inventory reserved, credit verified" },
            { type: "step", text: "> appended event #19402 to stream: 'orders-uk-tenant'" },
            { type: "success", text: "> read-model projection updated in Redis cache (1.8ms)" }
          ]
        }
      },
      {
        id: "grpc-protobuf-microservices",
        title: "High-Speed gRPC & Protobuf Inter-Service RPCs",
        tag: "Microservice Protocols",
        badge: "HTTP/2 Binary Streaming",
        latencyBadge: "7x Faster Than JSON",
        desc: "Replaces heavy JSON REST APIs with strongly-typed, binary gRPC protocols over HTTP/2, reducing network bandwidth by up to 70% and accelerating inter-service calls.",
        stats: [
          "Strict contract-first protocol buffers (.proto) enforcing schema compatibility",
          "Full bidirectional streaming supporting real-time market data and telemetry",
          "Automated client SDK generation for TypeScript, Python, Go, and Java"
        ],
        terminal: {
          command: "grpc_client.StreamMarketQuotes({ symbol: 'GBP_USD', depth: 20 })",
          status: "STREAM CONNECTED (HTTP/2)",
          logs: [
            { type: "comment", text: "// Multiplexing binary protobuf packets over single TCP link" },
            { type: "step", text: "> payload size: 42 bytes (vs 380 bytes in JSON)" },
            { type: "info", text: "> streaming 10,000 quote ticks per second with zero serialization lag" },
            { type: "success", text: "> client CPU utilization: reduced by 64%" }
          ]
        }
      },
      {
        id: "database-connection-pooling",
        title: "Reactive Database Pooling & Query Optimization",
        tag: "Data Access",
        badge: "pgBouncer & HikariCP",
        latencyBadge: "< 1ms Pool Acquisition",
        desc: "Eliminates database connection starvation under heavy surges using pgBouncer connection pooling, read replicas, and query index optimization.",
        stats: [
          "Pools thousands of client connections into lightweight server worker loops",
          "Automated slow-query detection and explain-plan index recommendations",
          "Distributed Redis caching intercepting up to 80% of repetitive SQL queries"
        ],
        terminal: {
          command: "pool_monitor.check_status({ target: 'primary-postgres' })",
          status: "POOL HEALTHY | 0 QUEUED WAITING",
          logs: [
            { type: "comment", text: "// Analyzing HikariCP connection telemetry" },
            { type: "step", text: "> active connections: 24 / 50 | idle: 26" },
            { type: "step", text: "> average query execution: 3.2ms | p99: 8.4ms" },
            { type: "success", text: "> zero connection timeouts across 12,000 concurrent web requests" }
          ]
        }
      },
      {
        id: "circuit-breakers-resilience",
        title: "Resilience Patterns & Circuit Breaking",
        tag: "Fault Tolerance",
        badge: "Resilience4j & Envoy",
        latencyBadge: "Sub-Second Isolation",
        desc: "Prevents cascading microservice outages using automated circuit breakers, rate limiters, bulkhead isolation, and exponential backoff retries.",
        stats: [
          "Circuit breakers trip automatically if third-party API error rates exceed 10%",
          "Graceful fallback responses keeping core user checkouts functioning during partner downtime",
          "Token bucket rate limiting defending against malicious DDoS traffic surges"
        ],
        terminal: {
          command: "circuit_breaker.evaluate({ service: 'payment_gateway_stripe' })",
          status: "STATE: CLOSED (HEALTHY)",
          logs: [
            { type: "comment", text: "// Monitoring rolling error window (last 100 calls)" },
            { type: "step", text: "> successful calls: 99.4% | timeout threshold: 2000ms" },
            { type: "info", text: "> fallback cache configured: ready to serve offline vouchers if tripped" },
            { type: "success", text: "> zero cascade propagation to upstream checkout services" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "API Gateway", tag: "Envoy / Kong", desc: "Terminates TLS, validates JWT tokens, and enforces rate limits in sub-milliseconds.", iconName: "Lock" },
      { step: "02", title: "Schema Validation", tag: "Protobuf / Zod", desc: "Validates incoming payloads against strict typed schemas before business execution.", iconName: "FileCheck" },
      { step: "03", title: "Business Logic", tag: "Go / Rust Core", desc: "Executes clean architecture domain logic with non-blocking concurrency.", iconName: "Cpu" },
      { step: "04", title: "Async Event Bus", tag: "Kafka / RabbitMQ", desc: "Publishes domain events asynchronously to decouple heavy processing.", iconName: "Workflow" },
      { step: "05", title: "Data Persistence", tag: "Postgres & Redis", desc: "Commits transactions to pooled relational stores and invalidates stale caches.", iconName: "Database" }
    ],
    featureCards: [
      { iconName: "Zap", title: "Compiled Low-Latency Microservices", tags: ["Go (Golang)", "Rust", "Java Spring Boot"], desc: "Build backend microservices that compile directly to native machine code, achieving sub-millisecond response times and minimal memory footprints." },
      { iconName: "Workflow", title: "Event-Driven CQRS Architecture", tags: ["Apache Kafka", "EventStore", "Async Messaging"], desc: "Separate read and write paths with event sourcing, enabling infinite horizontal read scaling and immutable audit logs for all transactions." },
      { iconName: "Activity", title: "High-Performance gRPC Communication", tags: ["Protobuf", "HTTP/2", "Binary RPC"], desc: "Connect internal microservices with binary gRPC protocols that consume 70% less bandwidth than standard REST and eliminate JSON serialization overhead." },
      { iconName: "Database", title: "High-Concurrency Database Pooling", tags: ["pgBouncer", "HikariCP", "Redis Cache"], desc: "Support massive concurrent traffic surges without crashing databases, utilizing intelligent connection pooling and multi-layer caching." },
      { iconName: "ShieldCheck", title: "Circuit Breaking & Bulkheads", tags: ["Resilience4j", "Envoy", "Graceful Degradation"], desc: "Protect backend ecosystems from cascading failures with automated circuit breakers that isolate failing third-party APIs in milliseconds." },
      { iconName: "Sliders", title: "Distributed Tracing & APM", tags: ["OpenTelemetry", "Jaeger", "Datadog APM"], desc: "Trace every request across dozens of microservices with distributed OpenTelemetry headers, pinpointing bottlenecks in seconds." }
    ],
    techStack: [
      { category: "Backend Languages", items: ["Go (Golang)", "Rust (Tokio)", "Java (Spring Boot / Quarkus)", "Node.js (Fastify / NestJS)", "Python (FastAPI)"] },
      { category: "Messaging & Event Streaming", items: ["Apache Kafka", "RabbitMQ", "AWS SQS/SNS", "Redis Pub/Sub", "NATS.io"] },
      { category: "Databases & Caching", items: ["PostgreSQL", "Redis Enterprise", "MongoDB", "Cassandra / ScyllaDB", "pgBouncer"] },
      { category: "API Protocols & Gateways", items: ["gRPC / Protobuf", "GraphQL (Apollo)", "REST / OpenAPI", "Kong Gateway", "Envoy Proxy"] },
      { category: "Resilience & Telemetry", items: ["Resilience4j", "OpenTelemetry", "Prometheus", "Jaeger Tracing", "Grafana"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Monolithic & Synchronous Bottlenecks",
      beforePoints: [
        "Heavy monolithic architectures where a slow database query locks all server threads.",
        "JSON payloads consuming excessive bandwidth and CPU cycles during inter-service calls.",
        "Database connection exhaustion crashing web servers during marketing traffic spikes.",
        "A single failing third-party API triggering a cascade that downs the entire application."
      ],
      afterTitle: "Devopstrio High-Throughput Backends",
      afterPoints: [
        "Non-blocking, event-driven microservices processing 250,000+ requests per second.",
        "Binary gRPC protocols delivering sub-millisecond communication with 70% less bandwidth.",
        "pgBouncer connection pooling supporting thousands of concurrent users with zero starvation.",
        "Automated circuit breakers isolating failures and serving graceful fallback responses."
      ]
    },
    faqs: [
      { q: "Why do you recommend Go and Rust for high-throughput backend services?", a: "Go and Rust compile directly to native machine code with zero virtual machine overhead. Go offers exceptional concurrency through lightweight goroutines, while Rust provides zero-cost abstractions and guaranteed memory safety without a garbage collector, ensuring rock-solid sub-5ms p99 latency." },
      { q: "What is the primary benefit of CQRS over standard CRUD architectures?", a: "In standard CRUD, read and write operations fight for the same database tables and locks. CQRS separates writes (commands) from reads (queries). Writes update the source of truth, which asynchronously projects optimized, denormalized read views in Redis or Elasticsearch for instant querying." },
      { q: "How does gRPC improve performance compared to standard REST JSON APIs?", a: "gRPC uses Protocol Buffers (a compact binary format) rather than verbose human-readable JSON text, and runs over HTTP/2 (which multiplexes multiple requests over a single TCP connection). This eliminates handshake overhead, cuts payload size by up to 70%, and speeds up CPU serialization." },
      { q: "How do you prevent database connection pool exhaustion during traffic surges?", a: "We place dedicated connection poolers like pgBouncer in front of PostgreSQL, configured in transaction pooling mode. This allows thousands of frontend client requests to share a small, highly optimized pool of 50-100 real database connections, preventing connection saturation." },
      { q: "What happens when an external payment gateway goes down?", a: "Our circuit breakers detect the elevated failure rate and immediately 'trip' open. Instead of letting user requests hang and consume server threads, the system instantly executes a fallback logic (e.g., queuing the transaction asynchronously or offering an alternative payment method) without downtime." }
    ]
  },

  "responsive-edge-frontends": {
    slug: "responsive-edge-frontends",
    pillarSlug: "software-engineering",
    pillarName: "Software Engineering",
    title: "Responsive Edge Frontends",
    tag: "Modern Web",
    badge: "Next.js, Server Components & Global Edge Caching",
    subtitle: "Build ultra-responsive, accessible web applications delivering instant Core Web Vitals. Powered by React, Next.js Server Components, Tailwind CSS, and global edge delivery.",
    metrics: [
      { val: "100", label: "Lighthouse Performance Score", sub: "Optimized Core Web Vitals" },
      { val: "< 0.8s", label: "Largest Contentful Paint (LCP)", sub: "Server-side streaming" },
      { val: "0 ms", label: "Cumulative Layout Shift (CLS)", sub: "Strict aspect-ratio layouts" },
      { val: "< 50ms", label: "Time to First Byte (TTFB)", sub: "Global Edge CDN caching" }
    ],
    capabilities: [
      {
        id: "server-components-streaming",
        title: "React Server Components & Selective Streaming",
        tag: "Rendering Architecture",
        badge: "Next.js App Router",
        latencyBadge: "Zero Client JS Bloat",
        desc: "Renders complex page layouts on the server, streaming dynamic widgets via Suspense boundaries to deliver instantaneous initial page loads with zero client-side JavaScript bloat.",
        stats: [
          "Zero bundle size overhead for server-only dependencies and data-fetching logic",
          "Selective hydration activating interactive buttons without blocking page display",
          "Automated static generation (SSG) with Incremental Static Regeneration (ISR)"
        ],
        terminal: {
          command: "next.build({ mode: 'standalone', optimize_server_components: true })",
          status: "BUILD COMPLETE (LCP 0.62s)",
          logs: [
            { type: "comment", text: "// Compiling React Server Components tree" },
            { type: "step", text: "> static routes: 84 compiled into global edge HTML cache" },
            { type: "step", text: "> dynamic widgets: wrapped in React Suspense streams" },
            { type: "success", text: "> client bundle: reduced from 420 KB -> 58 KB total JS" }
          ]
        }
      },
      {
        id: "global-edge-cdn-routing",
        title: "Global Edge Caching & Middleware",
        tag: "Edge Delivery",
        badge: "Cloudflare & Vercel Edge",
        latencyBadge: "< 35ms Edge TTFB",
        desc: "Executes lightweight authentication, geolocation routing, and personalized A/B test experiments on edge servers located milliseconds away from end users.",
        stats: [
          "Edge middleware running in V8 isolates without cold-start latency",
          "Dynamic localized content delivery (currency, language, pricing) at the edge",
          "Stale-While-Revalidate caching serving fresh content with instantaneous response"
        ],
        terminal: {
          command: "edge_middleware.execute({ geo: 'GB', request: '/pricing' })",
          status: "EDGE SERVED (TTFB 22ms)",
          logs: [
            { type: "comment", text: "// Running edge routing logic in London LHR node" },
            { type: "step", text: "> localized currency override: GBP (£) applied" },
            { type: "step", text: "> cache hit: serving SWR pre-rendered page from edge storage" },
            { type: "success", text: "> time-to-first-byte: 22ms total network transfer" }
          ]
        }
      },
      {
        id: "core-web-vitals-optimization",
        title: "Automated Core Web Vitals Optimization",
        tag: "Performance Engineering",
        badge: "100 Lighthouse SLA",
        latencyBadge: "0 Cumulative Layout Shift",
        desc: "Enforces strict performance budgets, automated AVIF/WebP image optimization, font preloading, and CSS layout locks to guarantee perfect Google Lighthouse scores.",
        stats: [
          "Automated next/image optimization converting images to AVIF on the fly",
          "Zero cumulative layout shift (CLS) using intrinsic aspect ratio containers",
          "Next.js font optimization self-hosting Google fonts with zero layout flashes"
        ],
        terminal: {
          command: "lighthouse.audit({ url: 'https://devopstrio.co.uk' })",
          status: "SCORES: 100/100/100/100",
          logs: [
            { type: "comment", text: "// Running automated Chrome headless audit" },
            { type: "step", text: "> LCP (Largest Contentful Paint): 0.72s (PASSED)" },
            { type: "step", text: "> FID / INP (Interaction to Next Paint): 18ms (PASSED)" },
            { type: "success", text: "> CLS (Cumulative Layout Shift): 0.000 (PERFECT)" }
          ]
        }
      },
      {
        id: "accessibility-design-systems",
        title: "Accessible Enterprise Design Systems",
        tag: "UI Engineering",
        badge: "WCAG 2.1 AAA Compliant",
        latencyBadge: "Full Keyboard Navigation",
        desc: "Builds cohesive, themeable enterprise UI component libraries using Tailwind CSS and Radix UI primitives with complete WCAG 2.1 AAA accessibility.",
        stats: [
          "Full keyboard navigation, screen reader ARIA labels, and focus trap management",
          "Tokens-based design system supporting dark/light mode and white-label theming",
          "Storybook documentation and automated visual regression testing via Chromatic"
        ],
        terminal: {
          command: "axe.test({ suite: 'design_system_components' })",
          status: "ACCESSIBILITY: 0 VIOLATIONS",
          logs: [
            { type: "comment", text: "// Running automated WCAG 2.1 AAA accessibility audit" },
            { type: "step", text: "> verified color contrast ratios: >= 7.0:1 across dark theme" },
            { type: "step", text: "> ARIA live regions and keyboard focus order validated" },
            { type: "success", text: "> 100% compliant with European Accessibility Act (EAA)" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Edge Ingress", tag: "V8 Middleware", desc: "Edge middleware validates auth tokens, inspects geolocation, and routes requests in <20ms.", iconName: "Globe" },
      { step: "02", title: "Server Render", tag: "React Server Components", desc: "Renders server components on node clusters, streaming dynamic HTML chunks immediately.", iconName: "Cpu" },
      { step: "03", title: "Asset Optimization", tag: "Next Image & Fonts", desc: "Transforms image assets to AVIF format and preloads critical system fonts.", iconName: "Zap" },
      { step: "04", title: "Hydration", tag: "Selective Hydrate", desc: "Selectively hydrates interactive React buttons without blocking document display.", iconName: "Workflow" },
      { step: "05", title: "Telemetry Audit", tag: "Real-User Monitoring", desc: "Tracks Core Web Vitals telemetry from real users and emits performance alarms.", iconName: "Activity" }
    ],
    featureCards: [
      { iconName: "Zap", title: "React Server Components Streaming", tags: ["Next.js App Router", "React 19", "Suspense"], desc: "Render content on the server and stream widgets incrementally, delivering instant page loads with minimal client-side JavaScript." },
      { iconName: "Globe", title: "Global Edge CDN Caching", tags: ["Cloudflare Workers", "Vercel Edge", "Sub-50ms TTFB"], desc: "Cache static HTML and execute personalized routing directly on global edge servers located milliseconds away from your visitors." },
      { iconName: "Activity", title: "Flawless Core Web Vitals", tags: ["Lighthouse 100", "LCP < 0.8s", "Zero CLS"], desc: "Pass Google Core Web Vitals with flying colors, boosting organic search rankings and maximizing user conversion rates." },
      { iconName: "Sliders", title: "Automated Image & Asset Optimization", tags: ["AVIF / WebP", "Intrinsic Sizing", "Font Preloading"], desc: "Automatically compress images down to next-generation formats and preload fonts to eliminate annoying page layout shifts." },
      { iconName: "ShieldCheck", title: "Enterprise WCAG 2.1 AAA Accessibility", tags: ["Radix UI", "Screen Reader Friendly", "ARIA Labels"], desc: "Ensure your digital experiences are completely accessible to all users, with rigorous keyboard navigation and full regulatory compliance." },
      { iconName: "Workflow", title: "Design System Component Libraries", tags: ["Tailwind CSS", "Storybook", "Framer Motion"], desc: "Build scalable, branded design systems with reusable components that accelerate development across your entire engineering team." }
    ],
    techStack: [
      { category: "Frontend Frameworks", items: ["Next.js (App Router)", "React 19", "TypeScript", "Vue / Nuxt 3", "Remix"] },
      { category: "Styling & UI Primitives", items: ["Tailwind CSS", "Radix UI Primitives", "shadcn/ui", "Framer Motion", "Lucide Icons"] },
      { category: "Edge & CDN Infrastructure", items: ["Vercel Edge Network", "Cloudflare Workers", "AWS CloudFront", "Fastly"] },
      { category: "Testing & Quality", items: ["Playwright", "Cypress", "Storybook", "Lighthouse CI", "Axe Core"] },
      { category: "State & Data Fetching", items: ["TanStack Query (React Query)", "Zustand", "SWR", "Zod Validation"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Bloated SPAs & Sluggish Load Times",
      beforePoints: [
        "Massive multi-megabyte JavaScript bundles causing 5-second blank white screens.",
        "Images loading un-sized, causing chaotic layout shifts that frustrate users.",
        "Poor Core Web Vitals scores penalizing your organic Google search rankings.",
        "Inaccessible component code creating significant legal and compliance liabilities."
      ],
      afterTitle: "Devopstrio Responsive Edge Frontends",
      afterPoints: [
        "Lightweight Server Components streaming instant HTML in under 800 milliseconds.",
        "Automated AVIF optimization and zero-CLS layout locks for buttery-smooth scrolling.",
        "Flawless 100 Lighthouse performance metrics powering top-tier SEO rankings.",
        "Full WCAG 2.1 AAA accessibility compliance with complete keyboard and screen reader support."
      ]
    },
    faqs: [
      { q: "What is the difference between Server-Side Rendering (SSR) and React Server Components (RSC)?", a: "Standard SSR renders the HTML on the server, but still sends the full JavaScript bundle for that entire page to the browser to hydrate it. React Server Components never send their JavaScript to the client at all—they execute only on the server, resulting in vastly smaller bundle sizes and faster mobile performance." },
      { q: "How do Core Web Vitals directly impact our business and SEO?", a: "Google uses Core Web Vitals (LCP, INP, CLS) as a direct search ranking factor. Sites that score in the 'Good' threshold rank higher in search results, experience lower bounce rates, and typically see an 8-20% increase in checkout conversions." },
      { q: "Can we migrate our existing React Single Page Application (SPA) to Next.js?", a: "Yes. We execute phased migrations, wrapping legacy components inside client boundaries while moving data-fetching and layout structures to modern Server Components, delivering immediate performance gains without requiring a total rewrite." },
      { q: "How does edge middleware differ from traditional backend middleware?", a: "Traditional middleware runs on a centralized origin server (e.g., in AWS us-east-1). Edge middleware runs in lightweight V8 isolates on hundreds of CDN nodes worldwide (e.g., in London, Tokyo, New York), executing auth checks and redirects in under 20 milliseconds." },
      { q: "What tools do you use to test frontend accessibility automatically?", a: "We integrate Axe-core and Lighthouse CI directly into automated pull request workflows, blocking any code change that introduces color contrast failures, missing ARIA tags, or broken keyboard navigation." }
    ]
  },

  "tamper-proof-integrations": {
    slug: "tamper-proof-integrations",
    pillarSlug: "software-engineering",
    pillarName: "Software Engineering",
    title: "Tamper-Proof Integrations",
    tag: "Secure API Bridges",
    badge: "mTLS, Webhook Signatures & Zero-Trust APIs",
    subtitle: "Establish cryptographically secure integrations between external vendors, payment processors, and enterprise partners with HMAC signing, mutual TLS, and automated replay attack defense.",
    metrics: [
      { val: "100%", label: "Cryptographic Verification", sub: "HMAC SHA-256 signatures" },
      { val: "0", label: "Replay Attack Success", sub: "Nonce & timestamp validation" },
      { val: "< 4ms", label: "Webhook Ingestion Latency", sub: "Decoupled async queues" },
      { val: "99.999%", label: "Delivery Reliability", sub: "Exponential backoff retries" }
    ],
    capabilities: [
      {
        id: "hmac-webhook-verification",
        title: "Cryptographic HMAC Webhook Verification",
        tag: "Payload Integrity",
        badge: "HMAC-SHA256",
        latencyBadge: "< 2ms Verification",
        desc: "Validates incoming third-party webhooks (Stripe, Twilio, Salesforce, banking rails) using cryptographic HMAC-SHA256 signatures, ensuring payloads have not been forged or altered in transit.",
        stats: [
          "Constant-time string comparison preventing cryptographic timing attacks",
          "Timestamp window verification blocking stale or intercepted payloads",
          "Automated secret rotation supporting zero-downtime dual-key migration"
        ],
        terminal: {
          command: "security_gateway.verify_webhook({ header: 'Stripe-Signature', payload: raw_bytes })",
          status: "SIGNATURE VERIFIED (HMAC-SHA256)",
          logs: [
            { type: "comment", text: "// Running cryptographic payload signature verification" },
            { type: "step", text: "> computed HMAC digest: sha256=8f102a... matching header" },
            { type: "step", text: "> timestamp: within 60s tolerance window (current drift: 1.2s)" },
            { type: "success", text: "> payload provenance: authenticated from Stripe verified IP pool" }
          ]
        }
      },
      {
        id: "idempotency-replay-protection",
        title: "Idempotency Gates & Replay Attack Defense",
        tag: "Data Consistency",
        badge: "Idempotency Keys",
        latencyBadge: "Zero Duplicate Charges",
        desc: "Guarantees that network retries, duplicate webhook deliveries, and malicious replay attacks never execute duplicate business transactions or double-charge customer credit cards.",
        stats: [
          "Redis-backed atomic locks on idempotency keys (SETNX with automatic TTL)",
          "Cached historical execution responses returned immediately on identical retries",
          "Cryptographic nonce tracking guaranteeing single-execution semantics"
        ],
        terminal: {
          command: "idempotency_gate.process({ key: 'txn_idem_894102', action: 'CHARGE_CARD' })",
          status: "DUPLICATE DETECTED -> RETURNING_CACHED",
          logs: [
            { type: "comment", text: "// Inspecting atomic idempotency lock in Redis" },
            { type: "step", text: "> key already locked by initial request 420ms ago" },
            { type: "step", text: "> prevented redundant £850.00 charge on customer payment card" },
            { type: "success", text: "> returned original transaction confirmation receipt to client" }
          ]
        }
      },
      {
        id: "mtls-zero-trust-bridges",
        title: "Mutual TLS (mTLS) Partner Bridges",
        tag: "B2B Security",
        badge: "x509 Client Certificates",
        latencyBadge: "Hardware Enforced",
        desc: "Enforces two-way cryptographic authentication between your backend and institutional banking, defense, and healthcare partners using dedicated x509 client certificates.",
        stats: [
          "Both client and server authenticate each other simultaneously over TLS 1.3",
          "Automated certificate lifecycle management and automated CRL revocation checks",
          "Strict IP whitelisting combined with hardware-backed KMS cryptographic keys"
        ],
        terminal: {
          command: "mtls_tunnel.connect({ partner: 'Bank_Consortium_Core', port: 8443 })",
          status: "MUTUAL TLS 1.3 ESTABLISHED",
          logs: [
            { type: "comment", text: "// Performing reciprocal x509 certificate handshake" },
            { type: "step", text: "> server cert: validated against Enterprise Root CA" },
            { type: "step", text: "> client cert: verified by partner gateway (Subject: CN=devopstrio-b2b)" },
            { type: "success", text: "> cipher: TLS_AES_256_GCM_SHA384 active" }
          ]
        }
      },
      {
        id: "async-dead-letter-queues",
        title: "Resilient Ingestion & Dead-Letter Queues (DLQ)",
        tag: "Reliable Delivery",
        badge: "Kafka & RabbitMQ DLQ",
        latencyBadge: "Zero Dropped Events",
        desc: "Decouples webhook ingestion from backend processing using high-speed queues, ensuring that downstream database maintenance never results in dropped partner webhooks.",
        stats: [
          "Sub-5ms HTTP 200 acknowledgment buffering incoming payloads directly to queue",
          "Exponential backoff retries (1m, 5m, 30m, 2h) for transient failures",
          "Dead-Letter Queues (DLQ) with automated alerting and manual replay consoles"
        ],
        terminal: {
          command: "webhook_ingest.buffer({ event: 'invoice.paid', queue: 'billing-inbound' })",
          status: "ENQUEUED IN 3.4ms",
          logs: [
            { type: "comment", text: "// Buffering event to durable Kafka partition" },
            { type: "step", text: "> sent immediate HTTP 200 ACK to vendor webhook server" },
            { type: "step", text: "> downstream worker pool processing events asynchronously" },
            { type: "success", text: "> zero drop rate maintained during database maintenance window" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "mTLS Handshake", tag: "Two-Way Auth", desc: "Validates client and server x509 certificates over TLS 1.3 before accepting bytes.", iconName: "Lock" },
      { step: "02", title: "HMAC Check", tag: "Signature Match", desc: "Computes cryptographic HMAC hash to verify payload has not been modified.", iconName: "ShieldCheck" },
      { step: "03", title: "Idempotency Lock", tag: "Redis SETNX", desc: "Checks idempotency key to prevent replay attacks and duplicate executions.", iconName: "Key" },
      { step: "04", title: "Async Buffer", tag: "Kafka Stream", desc: "Buffers payload to durable event stream and returns instant HTTP 200 ACK.", iconName: "Workflow" },
      { step: "05", title: "Worker Dispatch", tag: "DLQ & Retries", desc: "Worker processes the event with exponential backoff and dead-letter queues.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Lock", title: "HMAC-SHA256 Payload Verification", tags: ["HMAC", "Timing Attack Safe", "Signature Audit"], desc: "Guarantee that incoming webhooks from payment gateways and SaaS partners are 100% authentic and have not been intercepted or manipulated." },
      { iconName: "Key", title: "Idempotency & Replay Defense", tags: ["Idempotency Keys", "Redis Locks", "Single Execution"], desc: "Prevent duplicate charges and erratic double-submissions using atomic idempotency locks that safely absorb accidental network retries." },
      { iconName: "ShieldCheck", title: "B2B Mutual TLS (mTLS) Bridges", tags: ["x509 Certificates", "TLS 1.3", "Zero Trust"], desc: "Connect with banking and healthcare partners over encrypted mTLS tunnels that require cryptographic certificate verification from both ends." },
      { iconName: "Workflow", title: "Decoupled Webhook Ingestion", tags: ["Kafka Buffers", "Sub-5ms ACK", "High Concurrency"], desc: "Acknowledge partner webhooks in milliseconds, buffering payloads into durable message streams so backend spikes never cause dropped events." },
      { iconName: "RefreshCw", title: "Automated Dead-Letter Queues (DLQ)", tags: ["Exponential Retries", "Dead-Letter Queue", "Replay Tool"], desc: "Safeguard against transient API outages with automated exponential backoff retries and visual management consoles for replaying failed webhooks." },
      { iconName: "Activity", title: "Audit Trail & Cryptographic Nonces", tags: ["Immutable Logs", "Nonce Checks", "Audit Compliance"], desc: "Maintain tamper-evident audit logs of every payload exchanged across enterprise boundaries, satisfying strict financial and SOC2 audits." }
    ],
    techStack: [
      { category: "Security & Cryptography", items: ["OpenSSL 3.0", "HashiCorp Vault", "AWS KMS", "Sigstore", "Bouncy Castle"] },
      { category: "API Gateways & Proxies", items: ["Kong Enterprise", "Envoy Proxy", "Apigee", "Cloudflare API Shield"] },
      { category: "Queueing & Ingestion", items: ["Apache Kafka", "RabbitMQ", "Redis Streams", "AWS SQS"] },
      { category: "Identity & Tokens", items: ["OAuth 2.0 (mTLS)", "JWT / PASETO", "SPIFFE", "OIDC"] },
      { category: "Monitoring & Auditing", items: ["Datadog Webhook APM", "OpenTelemetry", "Splunk SIEM", "Elasticsearch"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Unsigned Webhooks & Replay Flaws",
      beforePoints: [
        "Blindly accepting incoming webhooks without verifying sender HMAC signatures.",
        "Network timeouts causing double-charges because APIs lack idempotency gates.",
        "Plaintext or standard one-way TLS vulnerable to spoofing and man-in-the-middle attacks.",
        "Downstream server restarts causing dropped partner webhooks with zero recovery mechanism."
      ],
      afterTitle: "Devopstrio Tamper-Proof Integrations",
      afterPoints: [
        "Cryptographic HMAC-SHA256 signature verification filtering forged payloads in <2ms.",
        "Atomic idempotency locks guaranteeing strict single-execution semantics on all events.",
        "Mutual TLS (mTLS) tunnels enforcing reciprocal certificate verification on every call.",
        "Durable asynchronous message queues buffering payloads with automated DLQ retries."
      ]
    },
    faqs: [
      { q: "Why is constant-time comparison necessary when verifying HMAC signatures?", a: "Standard string equality checks (`a === b`) stop evaluating at the first mismatching character, leaking subtle timing differences that allow skilled attackers to guess signatures byte-by-byte. Constant-time comparison ensures the check takes the exact same duration regardless of where errors occur, eliminating timing attacks." },
      { q: "What is an Idempotency Key and how does it prevent double charges?", a: "An idempotency key is a unique token generated by the client for a specific operation. When our API gateway receives a request, it checks whether that key has already been processed. If so, it skips execution and returns the original result, ensuring a user is never charged twice if their network dropped." },
      { q: "What is the difference between standard TLS and Mutual TLS (mTLS)?", a: "In standard TLS, only the client verifies the identity of the server (e.g., your browser verifying google.com). In Mutual TLS, both the client and the server must present valid, pre-registered x509 cryptographic certificates to each other before any data can flow." },
      { q: "How do you handle webhooks when our downstream backend is temporarily down for maintenance?", a: "Our edge ingestion layer immediately buffers the validated webhook payload into an asynchronous message queue (like Kafka) and sends an HTTP 200 response to the vendor. Once maintenance concludes, worker consumers drain the queue with zero data loss." },
      { q: "What happens if a partner sends webhooks with an expired or rotated secret?", a: "Our webhook validation gateway supports dual-secret verification windows. During key rotation periods, payloads signed with either the old secret or the new secret are accepted, allowing zero-downtime key rotation." }
    ]
  },

  "cross-platform-mobile-apps": {
    slug: "cross-platform-mobile-apps",
    pillarSlug: "software-engineering",
    pillarName: "Software Engineering",
    title: "Cross-Platform Mobile Apps",
    tag: "Mobile Engineering",
    badge: "React Native & Flutter with Native Performance",
    subtitle: "Deliver 60/120 FPS native mobile experiences on iOS and Android from a single unified codebase. Built with React Native, Flutter, offline-first SQLite sync, and automated CI/CD app store pipelines.",
    metrics: [
      { val: "60/120 FPS", label: "Smooth Animation Fidelity", sub: "Skia & Metal accelerated" },
      { val: "95%", label: "Codebase Sharing", sub: "Between iOS and Android" },
      { val: "100%", label: "Offline-First Capability", sub: "CRDT / SQLite replication" },
      { val: "< 15min", label: "OTA Patch Deployment", sub: "Over-the-air hot updates" }
    ],
    capabilities: [
      {
        id: "react-native-new-architecture",
        title: "React Native New Architecture (Fabric & TurboModules)",
        tag: "Runtime Performance",
        badge: "C++ JSI Direct Execution",
        latencyBadge: "Zero Bridge Overhead",
        desc: "Leverages React Native's New Architecture (Fabric renderer and TurboModules), invoking native iOS (Swift/Metal) and Android (Kotlin) code directly via C++ JSI without the asynchronous bridge.",
        stats: [
          "Synchronous UI measurements eliminating layout flickering during fast scrolling",
          "Direct memory sharing between JavaScript and C++ with zero JSON serialization",
          "Smooth 120Hz ProMotion display rendering across native gestures and transitions"
        ],
        terminal: {
          command: "app_runtime.profile({ architecture: 'NEW_ARCH_FABRIC' })",
          status: "RENDERING AT 120 FPS",
          logs: [
            { type: "comment", text: "// Inspecting C++ JSI direct native bindings" },
            { type: "step", text: "> Fabric renderer: active on iOS Metal / Android Vulkan" },
            { type: "step", text: "> TurboModules: 18 native modules invoked with zero bridge lag" },
            { type: "success", text: "> frame drop rate: 0.00% across complex list virtualization" }
          ]
        }
      },
      {
        id: "offline-first-data-sync",
        title: "Offline-First Local Storage & Conflict-Free Sync",
        tag: "Data Resilience",
        badge: "WatermelonDB & CRDTs",
        latencyBadge: "Instant Local Writes",
        desc: "Enables users to create, edit, and navigate application data in airplane mode or spotty connectivity, reconciling updates automatically using Conflict-Free Replicated Data Types (CRDTs).",
        stats: [
          "Local SQLite / WatermelonDB storage delivering sub-5ms instant write latency",
          "Background synchronization engine resolving multi-device data conflicts automatically",
          "Delta sync protocol transferring only modified record bytes over mobile networks"
        ],
        terminal: {
          command: "sync_engine.reconcile({ local_db: 'watermelondb', network: 'ONLINE' })",
          status: "SYNC COMPLETE (48 MUTATIONS)",
          logs: [
            { type: "comment", text: "// Reconnecting after 45 minutes of offline airplane mode" },
            { type: "step", text: "> pushed 12 local offline transactions to cloud backend" },
            { type: "step", text: "> resolved 2 concurrent conflicts using CRDT vector clocks" },
            { type: "success", text: "> local and remote data stores 100% synchronized" }
          ]
        }
      },
      {
        id: "ota-hot-updates",
        title: "Over-the-Air (OTA) Hot Code Updates",
        tag: "Continuous Delivery",
        badge: "Expo Updates & CodePush",
        latencyBadge: "< 15m Global Patch",
        desc: "Deploys critical bug fixes, UI enhancements, and feature patches directly to user devices in minutes, bypassing lengthy App Store and Google Play review delays.",
        stats: [
          "Instant distribution of JavaScript and asset bundles without app store resubmissions",
          "Canary OTA rollouts targeting 5% of users with automated rollback on crash spikes",
          "Cryptographic bundle signatures ensuring updates cannot be intercepted or tampered"
        ],
        terminal: {
          command: "eas.update({ branch: 'production', message: 'fix_checkout_currency_rounding' })",
          status: "OTA UPDATE PUBLISHED",
          logs: [
            { type: "comment", text: "// Generating signed production JS bundle" },
            { type: "step", text: "> bundle size: 3.4 MB (brotli compressed)" },
            { type: "step", text: "> signed digest: sha256=4a19b... with EAS KMS key" },
            { type: "success", text: "> live on user devices: 84,000 installs patched in 12 minutes" }
          ]
        }
      },
      {
        id: "automated-mobile-cicd",
        title: "Automated Fastlane & App Store Publishing",
        tag: "DevOps & CI/CD",
        badge: "Fastlane & EAS Build",
        latencyBadge: "Hands-Free Releases",
        desc: "Automates iOS provisioning profiles, TestFlight builds, Google Play track releases, screenshot generation, and compliance checks from a single CI pipeline.",
        stats: [
          "Automated code signing and provisioning profile management via Fastlane Match",
          "Cloud build farms compiling iOS and Android binaries concurrently",
          "Automated end-to-end device testing on real hardware using Maestro and Appium"
        ],
        terminal: {
          command: "fastlane.deploy_release({ track: 'internal_testing', bump_version: 'patch' })",
          status: "DEPLOYED TO TESTFLIGHT & PLAY TRACK",
          logs: [
            { type: "comment", text: "// Running automated build and signing matrix" },
            { type: "step", text: "> iOS: compiled .ipa with Apple Distribution Certificate" },
            { type: "step", text: "> Android: compiled .aab with Google Play App Signing key" },
            { type: "success", text: "> published to 450 internal enterprise beta testers" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Shared Code", tag: "React Native / Flutter", desc: "Write 95%+ of UI and business logic once in TypeScript or Dart.", iconName: "Code2" },
      { step: "02", title: "Local DB Write", tag: "WatermelonDB", desc: "Saves user actions instantly to local encrypted SQLite storage.", iconName: "Database" },
      { step: "03", title: "Background Sync", tag: "CRDT Protocol", desc: "Synchronizes pending local mutations with cloud servers in the background.", iconName: "RefreshCw" },
      { step: "04", title: "Automated Build", tag: "Fastlane & EAS", desc: "Compiles signed IPA and AAB binaries on cloud build runners.", iconName: "Workflow" },
      { step: "05", title: "Instant OTA", tag: "Hot Patching", desc: "Pushes emergency bug fixes directly to user devices in minutes without App Store delays.", iconName: "Zap" }
    ],
    featureCards: [
      { iconName: "Zap", title: "60/120 FPS Native Performance", tags: ["Fabric Engine", "JSI C++ Bindings", "ProMotion 120Hz"], desc: "Achieve fluid 60 and 120 FPS performance on iOS and Android with direct C++ JSI bindings that eliminate the legacy JavaScript bridge." },
      { iconName: "Database", title: "Offline-First Data Architecture", tags: ["WatermelonDB", "SQLite", "CRDT Sync"], desc: "Allow mobile users to navigate and edit data seamlessly with zero internet connection, auto-reconciling changes when connectivity restores." },
      { iconName: "RefreshCw", title: "Over-the-Air (OTA) Hot Updates", tags: ["Expo Updates", "CodePush", "Bypass App Stores"], desc: "Push urgent bug fixes and design updates directly to active user phones in minutes without waiting days for Apple or Google approval." },
      { iconName: "Workflow", title: "Automated Store Publishing CI/CD", tags: ["Fastlane", "TestFlight", "Google Play Tracks"], desc: "Fully automate provisioning profiles, code signing, screenshots, and dual-store submissions with a single Git commit." },
      { iconName: "Lock", title: "Hardware-Backed Mobile Security", tags: ["Keychain & Keystore", "Biometric Auth", "Jailbreak Detection"], desc: "Protect enterprise mobile data using hardware security enclaves, biometric FaceID authentication, and real-time root/jailbreak detection." },
      { iconName: "Activity", title: "Real-Device Testing & Telemetry", tags: ["Maestro E2E", "Sentry Mobile", "Crashlytics"], desc: "Test complex user flows automatically across hundreds of physical device form factors, with real-time crash alerting in production." }
    ],
    techStack: [
      { category: "Mobile Frameworks", items: ["React Native (New Architecture)", "Flutter (Dart)", "Expo SDK", "Swift / SwiftUI", "Kotlin / Jetpack Compose"] },
      { category: "Offline & Local Storage", items: ["WatermelonDB", "SQLite / OP-SQLite", "MMKV Storage", "Realm"] },
      { category: "CI/CD & App Store Delivery", items: ["Fastlane", "Expo Application Services (EAS)", "GitHub Actions", "Bitrise"] },
      { category: "Testing & Automation", items: ["Maestro Mobile", "Appium", "Detox", "Jest Native"] },
      { category: "Security & Monitoring", items: ["Sentry for Mobile", "Firebase Crashlytics", "React Native Keychain", "Appdome"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Duplicate Native Codebases",
      beforePoints: [
        "Maintaining two completely separate engineering teams for iOS (Swift) and Android (Kotlin).",
        "Feature rollouts delayed by months due to divergent platform release schedules.",
        "Applications crashing or freezing completely when users enter tunnels or lose 5G signal.",
        "Waiting up to a week for Apple App Store reviews just to fix a critical single-line bug."
      ],
      afterTitle: "Devopstrio Cross-Platform Architecture",
      afterPoints: [
        "Single unified codebase sharing 95%+ logic across iOS and Android with native performance.",
        "Simultaneous feature releases ensuring all mobile customers receive updates in tandem.",
        "Offline-first architecture enabling full application productivity in zero-connectivity environments.",
        "Over-the-Air hot updates pushing urgent bug patches to all user devices in under 15 minutes."
      ]
    },
    faqs: [
      { q: "Is cross-platform mobile as fast as native iOS and Android?", a: "With React Native's New Architecture (Fabric and C++ JSI) and Flutter's Impeller rendering engine, cross-platform applications render at a smooth 60 or 120 FPS, matching pure native apps. They invoke native platform widgets directly without the latency of legacy asynchronous bridges." },
      { q: "How much code can genuinely be shared between iOS and Android?", a: "Typically 90% to 95% of application logic, data stores, UI styling, and network code is completely shared. Platform-specific code is reserved only for deep hardware features (like custom Bluetooth peripherals, ARKit, or specialized background geofencing)." },
      { q: "What is an OTA (Over-the-Air) update and does Apple allow it?", a: "Yes. Apple and Google both permit Over-the-Air updates (via tools like Expo Updates) as long as the update fixes bugs or updates existing features without changing the core nature of the application as originally approved." },
      { q: "How does offline-first storage handle concurrent edits from multiple devices?", a: "We implement Conflict-Free Replicated Data Types (CRDTs) and vector clocks. When an offline device reconnects, the sync protocol deterministically merges edits at the field level, ensuring zero data loss and no overwriting of colleagues' work." },
      { q: "How do you test on real mobile devices automatically?", a: "Our CI/CD pipeline compiles native binaries and runs Maestro end-to-end tests across cloud device farms containing real physical iPhones, iPads, Samsung, and Google Pixel devices, catching hardware-specific UI bugs before public store release." }
    ]
  }
};
