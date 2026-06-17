import { FAQItem } from "./types";

const domainFaqs: Record<string, FAQItem[]> = {
  "partnerships": [
    {
      q: "What tier of partnerships does Devopstrio hold with AWS, Microsoft, and Google Cloud?",
      a: "We are an Advanced Consulting Partner with AWS, a Gold Cloud Platform Partner with Microsoft, and a Premier Integration Partner with Google Cloud. These tiers grant our engineers direct access to advanced support, beta feature pilots, and co-funding programs."
    },
    {
      q: "How do your strategic partnerships benefit clients directly?",
      a: "Our partnerships allow us to pass on significant benefits, including pilot credits, direct access to enterprise support engineering teams, proof-of-concept funding, and custom SaaS pricing models."
    },
    {
      q: "Do you assist in transitioning licenses to Cloud Marketplace billing?",
      a: "Yes. We help clients purchase, manage, and consolidate software licenses through AWS Marketplace, Azure Marketplace, and GCP Marketplace, aligning spend with your committed cloud consumption plans."
    },
    {
      q: "How does Devopstrio handle cross-platform multi-cloud alliances?",
      a: "We act as a neutral technology advisor, orchestrating solutions that combine components across cloud boundaries (e.g., running workloads on AWS while utilizing BigQuery on GCP for real-time analytics)."
    },
    {
      q: "What certifications do your engineering teams hold?",
      a: "Our team holds over 100 certifications across AWS (Solutions Architect Professional, DevOps Engineer Professional, Security Specialty), Azure (Solutions Architect, DevOps Engineer), and GCP (Professional Cloud Architect, Professional Data Engineer)."
    },
    {
      q: "Do you have dedicated partner managers within the major cloud providers?",
      a: "Yes. We have assigned Partner Development Managers (PDMs) at AWS, Microsoft, and Google who assist in accelerating service tickets and securing pilot resources."
    },
    {
      q: "How do your partnerships ensure security compliance?",
      a: "We build our solutions on top of AWS and Azure compliance-certified landing zones, ensuring all deployments meet SOC-2, ISO 27001, and HIPAA benchmarks."
    },
    {
      q: "Can we run joint proof-of-concept projects with cloud vendor funding?",
      a: "Yes. We regularly qualify enterprise clients for cloud provider programs (such as AWS MAP or Azure Migration Program) that can cover up to 50% of migration or modernization costs."
    },
    {
      q: "How do you stay updated on new cloud releases?",
      a: "Our partner status grants us access to preview features, private betas, and direct training workshops from cloud product teams."
    },
    {
      q: "Do you offer post-migration partnership audits?",
      a: "Yes. We run Well-Architected Framework Reviews (WAFR) with cloud architects to optimize performance and reduce spend after deployment."
    }
  ],
  "innovation-labs": [
    {
      q: "What is the primary objective of Devopstrio's Innovation Labs?",
      a: "Our Innovation Labs focus on research and development, testing new tools, building open-source plugins, and building custom accelerators for AI, serverless architectures, and advanced security configurations."
    },
    {
      q: "Can clients collaborate directly with the Innovation Labs?",
      a: "Yes. We offer co-innovation workshops where your team and our lab engineers build custom proofs-of-concept (PoCs) to solve complex business problems."
    },
    {
      q: "What research areas are currently active in the labs?",
      a: "Active projects include multi-agent AI workflows, semantic database caching, WASM runtimes at the edge, and zero-trust mesh architectures."
    },
    {
      q: "How do innovations transfer from the lab to production applications?",
      a: "We package successful lab projects into reusable accelerators, Helm charts, and terraform modules, ensuring they can be safely integrated into client systems."
    },
    {
      q: "What open-source contributions have come from your labs?",
      a: "We contribute to Kubernetes operators, Backstage templates, Terraform modules, and maintain custom developer utilities in the public domain."
    },
    {
      q: "How do the labs validate the security of new technologies?",
      a: "Every new tool or architecture goes through security scanning, vulnerability checks, and sandbox tests before being approved for client projects."
    },
    {
      q: "Do you host hackathons or technology workshops?",
      a: "Yes. We host quarterly engineering hackathons and regular workshops with partner organizations to drive collaboration and explore emerging tech."
    },
    {
      q: "What compute resources support the Innovation Labs?",
      a: "We maintain dedicated GPU clusters, private cloud sandboxes, and multi-tenant testbeds to simulate complex enterprise workloads."
    },
    {
      q: "How do the labs help reduce technical debt?",
      a: "We build automated refactoring templates and linting rules that identify legacy code patterns and help upgrade codebases efficiently."
    },
    {
      q: "Can we license custom intellectual property built in the labs?",
      a: "Our lab accelerators are typically licensed under open-source or permissive commercial terms, allowing clients to modify and build upon them."
    }
  ],
  "platforms-solutions": [
    {
      q: "What pre-built platforms does Devopstrio provide?",
      a: "We deliver pre-built infrastructure patterns, internal developer portals (IDPs) based on Backstage, centralized monitoring panels, and data ingestion pipelines."
    },
    {
      q: "Are these platforms customizable for our specific business needs?",
      a: "Yes. Our platforms are built as modular templates, allowing us to adapt identity systems, cloud providers, and workflows to match your requirements."
    },
    {
      q: "How do your platforms integrate with existing developer tools?",
      a: "We support integrations with standard Git systems (GitHub, GitLab, Bitbucket), CI engines, and single sign-on (SSO) providers."
    },
    {
      q: "What is Platform Engineering and why is it important?",
      a: "Platform Engineering provides developer self-service portals, reducing manual tasks, aligning environments, and speeding up deployment times."
    },
    {
      q: "Do these solutions run inside our own cloud accounts?",
      a: "Yes. All platforms and infrastructure templates are deployed directly into your AWS, Azure, or GCP accounts, giving you full control and ownership."
    },
    {
      q: "How do you handle upgrades for deployed platform templates?",
      a: "We maintain our platforms as versioned Git repositories. Upgrades are rolled out via pull requests to your platform repository, keeping updates visible and controlled."
    },
    {
      q: "What cost optimization features are built into your platforms?",
      a: "Our templates include automated scale-down for dev environments, resource tags, and cost dashboards to identify waste."
    },
    {
      q: "Do your platforms support multi-tenant microservices?",
      a: "Yes. Our Kubernetes and container platforms feature network isolation, namespace resource limits, and ingress routing for secure multi-tenancy."
    },
    {
      q: "What monitoring tools are included out-of-the-box?",
      a: "We package Prometheus, Grafana, Loki, and OpenTelemetry configurations to provide instant dashboards for application and infrastructure health."
    },
    {
      q: "What level of support do you provide for custom platforms?",
      a: "We offer ongoing platform maintenance SLAs, including upgrade support, patch management, and incident response."
    }
  ],
  "technology-stack": [
    {
      q: "What technologies make up Devopstrio's core stack?",
      a: "We specialize in Cloud (AWS, Azure, GCP), Containers (Docker, Kubernetes), IaC (Terraform, Ansible), Backends (Node.js, Go, Python), and Frontends (React, Next.js)."
    },
    {
      q: "How do you select the right technologies for our project?",
      a: "We analyze performance requirements, team skills, maintenance costs, and integration needs to select the optimal stack."
    },
    {
      q: "Do you support legacy stacks like Java, .NET, or mainframe integrations?",
      a: "Yes. We build API gateways and data pipelines to integrate legacy backend systems with modern cloud-native frontends and microservices."
    },
    {
      q: "How do you ensure technology stacks stay secure and up-to-date?",
      a: "We integrate automated scanning tools (like Dependabot, Snyk, and Trivy) into pipelines to track and update outdated packages."
    },
    {
      q: "Do you specialize in serverless or container-based runtimes?",
      a: "We work with both. We choose serverless (AWS Lambda, Cloud Run) for variable workloads, and containers (EKS, GKE) for high-throughput microservices."
    },
    {
      q: "What database technologies do you recommend?",
      a: "We recommend PostgreSQL or MySQL for transactions, MongoDB or DynamoDB for document storage, and Redis for caching."
    },
    {
      q: "How do you implement modern frontend architectures?",
      a: "We build responsive interfaces using React, Next.js, and Tailwind CSS, focusing on performance, accessibility, and search engine optimization."
    },
    {
      q: "What programming languages do you use for high-performance microservices?",
      a: "We write performance-critical components in Go and Rust to optimize memory usage and achieve fast execution times."
    },
    {
      q: "How do you handle API communications between microservices?",
      a: "We use gRPC and Protocol Buffers for fast, typed internal communications, and REST or GraphQL for client-facing interfaces."
    },
    {
      q: "Do you support infrastructure automation on private clouds?",
      a: "Yes. We configure Terraform and Ansible to automate deployments on private virtualization platforms like VMware and OpenStack."
    }
  ],
  "global-delivery": [
    {
      q: "How is Devopstrio's Global Delivery Network structured?",
      a: "We operate a follow-the-sun model with engineering hubs in North America, Europe, and Asia-Pacific, ensuring continuous coverage and regional compliance."
    },
    {
      q: "How do you coordinate engineering tasks across different time zones?",
      a: "We use structured hand-off protocols, shared issue boards, automated test validation, and daily stand-ups to ensure smooth collaboration."
    },
    {
      q: "What security measures protect customer data in global offices?",
      a: "We enforce strict access controls, secure VPN connections, multi-factor authentication (MFA), and use virtual desktop interfaces (VDIs) to prevent local data storage."
    },
    {
      q: "Do you support hybrid remote and on-premise delivery teams?",
      a: "Yes. We can place technical leads on-site at your offices while scaling development and operations support from our global delivery centers."
    },
    {
      q: "How do you guarantee quality consistency across different teams?",
      a: "We enforce shared coding standards, mandatory peer reviews, automated security checks, and run internal training audits."
    },
    {
      q: "What is your onboarding timeline for a new delivery team?",
      a: "We can onboard teams in 2 to 4 weeks, setting up communication channels, security access, and matching your sprint schedules."
    },
    {
      q: "Do your engineers speak English fluently?",
      a: "Yes. All our global engineers undergo language and communication testing, ensuring smooth collaboration with your internal teams."
    },
    {
      q: "How do you manage project delivery risks?",
      a: "We assign dedicated project managers, establish clear key performance indicators (KPIs), and run weekly reviews to track progress."
    },
    {
      q: "Can you scale team sizes up or down based on project needs?",
      a: "Yes. Our global resource pool allows us to scale teams to handle peak workloads and scale down during maintenance phases."
    },
    {
      q: "What project management frameworks do you support?",
      a: "We adapt to your preferred methods, supporting Scrum, Kanban, and hybrid Agile frameworks."
    }
  ],
  "engineering-excellence": [
    {
      q: "What does Engineering Excellence mean at Devopstrio?",
      a: "Engineering Excellence focuses on writing clean code, building automated test suites, optimizing system performance, and maintaining comprehensive documentation."
    },
    {
      q: "How do you evaluate and improve existing codebases?",
      a: "We perform static analysis, trace SQL queries, run security scans, and deliver a detailed plan to address technical debt."
    },
    {
      q: "What automated testing benchmarks do you enforce?",
      a: "We target a minimum of 80% test coverage using unit tests, integration tests, and end-to-end browser automation suites."
    },
    {
      q: "How do you manage configuration drift in production systems?",
      a: "We enforce git-driven changes via GitOps tools (like ArgoCD) that automatically reconcile live resources with versioned code configurations."
    },
    {
      q: "What is your approach to system reliability and SRE?",
      a: "We set up Service Level Indicators (SLIs), Service Level Objectives (SLOs), and establish error budgets to balance new features with system stability."
    },
    {
      q: "How do you document APIs and system architectures?",
      a: "We maintain live OpenAPI schemas, write clear markdown documents in git repositories, and generate interactive flow diagrams."
    },
    {
      q: "Do you run training sessions for client engineering teams?",
      a: "Yes. We conduct workshops, run pair-programming sessions, and host code reviews to share best practices with your team."
    },
    {
      q: "How do you secure code against credential leaks?",
      a: "We integrate secret scanning tools (like TruffleHog) into build pipelines to block commits that contain API keys or passwords."
    },
    {
      q: "What is your process for reviewing system architecture?",
      a: "We review designs against security, reliability, cost, performance, and operational standards to ensure robust systems."
    },
    {
      q: "How do you measure developer velocity and efficiency?",
      a: "We track DORA metrics (deployment frequency, lead time for changes, mean time to recover, change failure rate) to measure team output."
    }
  ],
  "accelerators-frameworks": [
    {
      q: "What are Devopstrio's accelerators and frameworks?",
      a: "They are pre-tested, reusable modules, IaC configurations, Helm charts, and project templates that speed up cloud-native deployments."
    },
    {
      q: "How much time can we save by using these accelerators?",
      a: "Clients typically save 40% to 60% of initial setup time, allowing teams to focus on business logic rather than basic infrastructure."
    },
    {
      q: "Are these frameworks proprietary or open-source?",
      a: "We offer a mix of open-source libraries and commercial templates, licensing them to ensure you retain ownership of the deployed solutions."
    },
    {
      q: "How do you keep accelerators secure and updated?",
      a: "We update our base templates monthly to include the latest security patches, tool updates, and cloud provider features."
    },
    {
      q: "Do you have accelerators for data pipelines and AI?",
      a: "Yes. We maintain templates for ingestion, vector database setups, and secure enterprise LLM configurations."
    },
    {
      q: "Can we integrate these modules with our existing Terraform state?",
      a: "Yes. Our modules follow clean input/output standards, making them easy to plug into your existing Terraform or OpenTofu setups."
    },
    {
      q: "What landing zone frameworks do you support?",
      a: "We maintain multi-account landing zone templates for AWS, Azure, and GCP that enforce organization rules, security, and logging."
    },
    {
      q: "How do you support developer onboarding with these templates?",
      a: "We configure starter templates that spin up local developer environments with all database, cache, and build dependencies in one click."
    },
    {
      q: "Do you offer compliance-certified infrastructure blueprints?",
      a: "Yes. We have blueprints pre-configured to meet SOC-2, HIPAA, PCI-DSS, and ISO 27001 requirements."
    },
    {
      q: "Can we request custom accelerators for our internal teams?",
      a: "Yes. We can design and package custom templates to help standardize configurations across your engineering groups."
    }
  ],
  "community-talent-network": [
    {
      q: "What is the Devopstrio Community & Talent Network?",
      a: "It is an active network of vetted engineering specialists, technical writers, open-source developers, and partner leads."
    },
    {
      q: "How do you vet and select engineers for the network?",
      a: "We run coding tests, system design reviews, security background checks, and evaluate past enterprise projects."
    },
    {
      q: "Can we hire talent directly from your network?",
      a: "Yes. We support staff augmentation and contract-to-hire options to help you scale your engineering teams."
    },
    {
      q: "What open-source communities do you support?",
      a: "We participate in CNCF working groups, sponsor local meetups, and contribute code to key infrastructure projects."
    },
    {
      q: "How do you keep your talent pool trained on new tools?",
      a: "We run ongoing certification bootcamps, security training, and lab workshops to keep our network at the forefront of technology."
    },
    {
      q: "Do you support university outreach and training programs?",
      a: "Yes. We run internships and university partnerships to train and onboard the next generation of cloud engineers."
    },
    {
      q: "What is your global sourcing capability?",
      a: "We source specialists from North America, Europe, and Asia, matching talent to your language, timezone, and project needs."
    },
    {
      q: "How do you ensure talent remains compliant with security requirements?",
      a: "All network engineers undergo background screening, sign non-disclosure agreements, and complete security compliance training."
    },
    {
      q: "Do you provide mentoring for our internal junior engineers?",
      a: "Yes. Our senior consultants can pair-program with and mentor your team members during projects."
    },
    {
      q: "How do we get started with your talent network?",
      a: "Contact us with your technical requirements, and our team will match you with vetted specialists within 48 hours."
    }
  ]
};

export function generateFaqsForSubpage(domainSlug: string, subpageTitle: string): FAQItem[] {
  return [
    {
      q: `What is the role of ${subpageTitle} in the Devopstrio ecosystem?`,
      a: `In our ${domainSlug.replace(/-/g, " ")} model, ${subpageTitle} provides standardized tools, best practices, and integration patterns to help clients scale and secure their workloads.`
    },
    {
      q: `How does ${subpageTitle} integrate with existing enterprise systems?`,
      a: `We build secure connectors, API layers, and database bridges to integrate ${subpageTitle} capabilities with your legacy infrastructure.`
    },
    {
      q: `What security controls protect data within ${subpageTitle}?`,
      a: `We implement least-privilege IAM roles, encrypt data at rest and in transit, and run automated vulnerability scans across all compute resources.`
    },
    {
      q: `What is the average timeline to configure and deploy ${subpageTitle}?`,
      a: `A standard deployment takes 3 to 6 weeks, depending on system complexity, security requirements, and team readiness.`
    },
    {
      q: `Do you provide monitoring dashboards for ${subpageTitle} metrics?`,
      a: `Yes. We configure Grafana and Datadog dashboards to track resource usage, response times, and alert on system errors.`
    },
    {
      q: `How do you handle scaling and capacity management for ${subpageTitle}?`,
      a: `We configure auto-scaling rules that automatically adjust resources based on CPU usage, memory load, and traffic volume.`
    },
    {
      q: `What documentation and hand-off runbooks do you deliver?`,
      a: `We provide complete architecture blueprints, setup guides, code repositories, and host training sessions with your internal engineers.`
    },
    {
      q: `How does ${subpageTitle} help optimize cloud hosting costs?`,
      a: `We build auto-scaling policies, use spot instances where appropriate, and optimize queries to minimize compute and database costs.`
    },
    {
      q: `What compliance frameworks are supported under ${subpageTitle}?`,
      a: `Our setups align with SOC-2, HIPAA, ISO 27001, and GDPR standards, implementing standard audit logs and encryption.`
    },
    {
      q: `What post-deployment support do you offer for ${subpageTitle}?`,
      a: `We offer 24/7 monitoring, incident response SLAs, and regular updates to keep your systems running smoothly and securely.`
    }
  ];
}

export function getEnrichedDomainFaqs(domainSlug: string): FAQItem[] {
  return domainFaqs[domainSlug] || domainFaqs["partnerships"];
}
