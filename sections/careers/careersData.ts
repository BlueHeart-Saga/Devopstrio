export interface Job {
  id: string;
  title: string;
  category: string;
  location: string;
  type: string;
  experience: string;
  desc: string;
}

export const openPositionsData: Job[] = [
  {
    id: "sre-azure-arch",
    title: "Senior Azure Cloud Architect",
    category: "Cloud Engineering",
    location: "London, UK / Hybrid",
    type: "Full-Time",
    experience: "8+ Years",
    desc: "Lead the design and migration of enterprise banking mainframes to secure, compliant Azure Landing Zones."
  },
  {
    id: "devops-lead-k8s",
    title: "Lead DevOps Engineer (Kubernetes & ArgoCD)",
    category: "DevOps",
    location: "Bangalore, India / Remote",
    type: "Full-Time",
    experience: "6+ Years",
    desc: "Configure automated GitOps continuous deployment workflows across multi-tenant Kubernetes clusters."
  },
  {
    id: "ai-rag-developer",
    title: "Senior AI Research & RAG Developer",
    category: "AI & Data",
    location: "New York, US / Hybrid",
    type: "Full-Time",
    experience: "5+ Years",
    desc: "Develop advanced retrieval-augmented generation search frameworks and semantic routers using Qdrant."
  },
  {
    id: "sec-engineer",
    title: "Zero-Trust Cybersecurity Specialist",
    category: "Cybersecurity",
    location: "Chennai, India / Hybrid",
    type: "Full-Time",
    experience: "5+ Years",
    desc: "Deploy Cilium eBPF network microsegmentation and manage HashiCorp Vault secrets registries."
  },
  {
    id: "golang-microservices",
    title: "Senior Go / Microservices Developer",
    category: "Software Engineering",
    location: "Thoothukudi, India / Remote",
    type: "Full-Time",
    experience: "4+ Years",
    desc: "Construct high-performance, stateless APIs and serverless ledger modules for digital retail platforms."
  },
  {
    id: "product-manager-cloud",
    title: "Enterprise Product Manager - Cloud Management",
    category: "Product Development",
    location: "London, UK / Hybrid",
    type: "Full-Time",
    experience: "7+ Years",
    desc: "Own the product roadmap for our cost optimization and FinOps dashboard platform products."
  },
  {
    id: "digital-consultant",
    title: "Principal Digital Strategy Consultant",
    category: "Consulting",
    location: "New York, US / Hybrid",
    type: "Full-Time",
    experience: "10+ Years",
    desc: "Advise Fortune 500 boards on digital transformation roadmaps, cloud migrations, and security postures."
  },
  {
    id: "sales-director",
    title: "Director of Enterprise Sales - Cloud & AI",
    category: "Sales & Marketing",
    location: "London, UK / Remote",
    type: "Full-Time",
    experience: "8+ Years",
    desc: "Drive new client partnerships and solution consulting sales across European logistics sectors."
  },
  {
    id: "ops-lead",
    title: "Global IT Operations Lead",
    category: "Operations",
    location: "Bangalore, India / Hybrid",
    type: "Full-Time",
    experience: "6+ Years",
    desc: "Supervise our follow-the-sun SRE support schedules and manage enterprise SLA monitoring systems."
  }
];

export const categories = [
  "All",
  "Cloud Engineering",
  "AI & Data",
  "DevOps",
  "Cybersecurity",
  "Software Engineering",
  "Product Development",
  "Consulting",
  "Sales & Marketing",
  "Operations"
];

export const cultureValues = [
  {
    title: "Innovation",
    desc: "Always exploring new ideas, frameworks, and next-gen technologies to solve complex problems.",
    icon: "💡"
  },
  {
    title: "Ownership",
    desc: "Empowered decision-making. We trust our engineers to take the lead and deliver their best.",
    icon: "🎯"
  },
  {
    title: "Collaboration",
    desc: "One global team. We break down silos to co-engineer unified architectures across oceans.",
    icon: "🤝"
  },
  {
    title: "Excellence",
    desc: "Setting high engineering standards in code quality, security audits, and deployment stability.",
    icon: "⭐"
  },
  {
    title: "Learning",
    desc: "Continuous growth mindset. We sponsor certificates, run study groups, and celebrate learning.",
    icon: "📚"
  },
  {
    title: "Integrity",
    desc: "Total trust and transparency with our team members and clients in every engagement.",
    icon: "🛡️"
  }
];

export const lifeImages = [
  { title: "Team Collaboration", desc: "Co-designing secure landing zones." },
  { title: "AI Research Lab", desc: "Tuning semantic graph routers." },
  { title: "Global Alliances Hub", desc: "Collaborating with Microsoft partners." },
  { title: "Engineering Summit", desc: "SREs sharing uptime logs." },
  { title: "University Hackathon", desc: "Mentoring next-gen cloud talent." },
  { title: "GitOps Launchpad", desc: "Celebrating zero secrets leaks." },
  { title: "SRE Operations Center", desc: "Monitoring latency budgets 24/7." }
];

export const benefits = [
  { icon: "🏥", name: "Health & Wellness", desc: "Comprehensive medical cover and mental health care." },
  { icon: "📚", name: "Learning Budget", desc: "Sponsored cloud certifications and study guides." },
  { icon: "🏠", name: "Hybrid Working", desc: "Flexible schedules combining home office and modern spaces." },
  { icon: "🌎", name: "Global Mobility", desc: "Opportunities to work from our UK, US, and India locations." },
  { icon: "🏖", name: "Flexible Leave", desc: "Generous time off to rest, recharge, and enjoy life." },
  { icon: "🏆", name: "Recognition Programs", desc: "Performance rewards and team achievement milestones." },
  { icon: "💰", name: "Competitive Salary", desc: "Premium payouts, annual bonuses, and equity options." },
  { icon: "🚀", name: "Career Advancement", desc: "Structured progression tracks and architecture mentoring." }
];

export const hiringSteps = [
  { num: "01", name: "Application", desc: "Submit your details or join our talent network." },
  { num: "02", name: "Screening", desc: "A brief conversation with our recruiters about your goals." },
  { num: "03", name: "Technical Review", desc: "A system design dialogue and coding review with architects." },
  { num: "04", name: "Structured Interview", desc: "Discussing team alignment, operational goals, and values." },
  { num: "05", name: "Strategic Offer", desc: "Competitive compensation proposal and onboarding details." },
  { num: "06", name: "Welcome to Devopstrio", desc: "Join our global team and launch your co-engineering career." }
];

export const employeeStories = [
  {
    name: "Sarah Jenkins",
    role: "Senior Cloud Infrastructure Architect",
    photoBg: "bg-gradient-to-tr from-rose-500 to-indigo-600",
    image: "/assets/careers/careers_testimonial people/Sarah Jenkins.png",
    story: "Joining Devopstrio allowed me to transition from legacy maintenance to building zero-trust landing zones for national infrastructure. The learning support here is unmatched—I earned three AWS certificates in my first year."
  },
  {
    name: "Anand Sharma",
    role: "Lead DevOps Specialist",
    photoBg: "bg-gradient-to-tr from-emerald-500 to-teal-600",
    image: "/assets/careers/careers_testimonial people/Anand Sharma.png",
    story: "At Devopstrio, we operate as one team. I design Kubernetes architectures in Bangalore, collaborate with our UK strategy lead, and launch container pipelines for clients in New York. Ownership is real here."
  },
  {
    name: "Eleanor Vance",
    role: "AI & Data Engineer",
    photoBg: "bg-gradient-to-tr from-pink-500 to-orange-500",
    image: "/assets/careers/careers_testimonial people/Eleanor Vance.png",
    story: "We don't build standard chatbots. We prototype custom semantic routers and state graphs in our Innovation Labs. It's exciting to work in a company where engineering is the primary strategic focus."
  }
];
