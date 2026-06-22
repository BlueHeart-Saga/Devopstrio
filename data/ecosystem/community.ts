import { EcosystemDomain, EcosystemSubpageDetail } from "./types";

export const communityDomain: EcosystemDomain = {
  slug: "community-talent-network",
  title: "Community & Talent Network",
  badge: "Global Talent Ecosystem",
  subtitle: "Sourcing, training, and connecting world-class software engineers, SRE architects, and cloud specialists.",
  overviewHeading: "A global ecosystem of top-tier engineering talent and continuous innovation",
  overviewDesc1: "We are more than just an engineering firm. We are a global community. Through our talent network, we bridge the gap between enterprise technology needs and elite engineering professionals.",
  overviewDesc2: "From university partnerships to open-source contributions and deep certification tracks, we cultivate the next generation of technological leaders.",
  stats: [
    { value: "50k+", label: "Global Community Members" },
    { value: "10k+", label: "Vetted Engineers" },
    { value: "25+", label: "Academic Partnerships" },
    { value: "500+", label: "Open-Source Projects" }
  ],
  subpages: [
    { slug: "engineering-community", title: "Engineering Community", description: "Global network of architects, developers, and cloud specialists." },
    { slug: "university-programs", title: "University Programs", description: "Bridging academia and enterprise through research and internships." },
    { slug: "talent-network", title: "Global Talent Network", description: "Connecting organizations with highly skilled, pre-vetted engineers." },
    { slug: "open-source-contributions", title: "Open Source Innovation", description: "Contributing reusable technologies to the global developer ecosystem." },
    { slug: "certification-programs", title: "Certification Programs", description: "Helping engineers validate expertise and advance careers." }
  ],
  benefits: [
    "Rapid team scaling with vetted cloud and database leads",
    "Continuous software optimizations from community contributions",
    "Access to localized hiring pools in the UK, US, and India"
  ],
  faqs: [
    { q: "How do you vet developers in your network?", a: "We run comprehensive code reviews, system design interviews, and background integrity checks." },
    { q: "Do you contribute to open source software?", a: "Yes, our team actively maintains modules for Terraform, Kubernetes, and Node.js." }
  ],
  ctaTitle: "Scale your engineering",
  ctaHighlight: "Talent corridors",
  ctaDesc: "Contact our team to discuss how we can help you source and onboard senior developers for your projects.",
  ctaBtnText: "Consult Talent Lead"
};

export const communitySubpages: Record<string, EcosystemSubpageDetail> = {
  "engineering-community": {
    slug: "engineering-community",
    title: "Engineering Community Program",
    heroSubtitle: "Sponsor developer events, contribute to open source projects, and train the next generation of cloud architects.",
    challenge: "Traditional hiring fails to find developers who understand complex cloud security and database scaling guidelines.",
    solution: "We run training academies, support local university programs, and manage open-source code registries.",
    features: [
      "Open-source software registries and developer modules",
      "Localized technology meetups and hackathons",
      "Advanced training academies and certification tracks"
    ],
    benefits: [
      "Vetted pool of developers ready for project onboarding",
      "Continuous optimization of software modules through community testing",
      "Strong employer brand attracting high-caliber engineers"
    ],
    techStack: [
      { name: "GitHub", desc: "Open-source codebase host and collaborative registry." },
      { name: "Terraform Registry", desc: "Public directory for reusable cloud modules." },
      { name: "Meetup / Eventbrite", desc: "Event organization and ticketing portals." }
    ],
    caseStudy: {
      title: "Talent onboarding for global SaaS provider.",
      desc: "We helped a SaaS client onboard 12 vetted Kubernetes engineers in under 2 weeks, reducing project onboarding delays by 75%.",
      metrics: [
        { value: "12", label: "Vetted engineers onboarded" },
        { value: "<2 weeks", label: "Team scaling duration" },
        { value: "75%", label: "Reduction in onboarding delays" }
      ]
    },
    faqs: [
      { q: "Do you run university internship programs?", a: "Yes, we partner with top universities to offer annual internships and mentoring." },
      { q: "What open-source repositories do you maintain?", a: "We maintain custom provider modules for Terraform and Helm charts for Kubernetes setups." }
    ]
  },
  "university-programs": {
    slug: "university-programs",
    title: "University Programs",
    heroSubtitle: "Collaborate with university computer science departments to train students and run research labs.",
    challenge: "University curriculums often lack hands-on training with modern cloud infrastructure tools like Kubernetes and Terraform.",
    solution: "We sponsor annual university hackathons, offer guest lectures, and provide mentoring schedules.",
    features: [
      "Sponsored university hackathons and coding awards",
      "Guest lectures on cloud architecture and SRE practices",
      "Student internship programs providing real-world project work"
    ],
    benefits: [
      "Early discovery of talented graduate developers",
      "Academic verification of new software ideas and prototypes",
      "Closer links with local computer science research labs"
    ],
    techStack: [
      { name: "GitHub Classroom", desc: "Git repository management for educational assignments." },
      { name: "Slack Communities", desc: "Virtual classrooms and student mentoring chat channels." },
      { name: "Azure for Students", desc: "Cloud resource credits for university classes." }
    ],
    caseStudy: {
      title: "Graduate developer recruiting for cloud software vendor.",
      desc: "Partnered with 4 universities to recruit and train 15 graduate developers, placing them on core project teams.",
      metrics: [
        { value: "4", label: "Partner university departments" },
        { value: "15", label: "Graduate developers hired" },
        { value: "90%", label: "Onboarding success rate" }
      ]
    },
    faqs: [
      { q: "Can university students apply for internships?", a: "Yes, we post student internship openings on our careers portal every spring." },
      { q: "Do you offer scholarship support?", a: "Yes, we offer financial awards for outstanding computer science students at partner universities." }
    ]
  },
  "open-source-contributions": {
    slug: "open-source-contributions",
    title: "Open Source Contributions",
    heroSubtitle: "Contribute security patches and maintain reusable modules for Terraform and Helm.",
    challenge: "Proprietary software companies rely on open-source code without contributing back, leading to package obsolescence.",
    solution: "We allocate dedicated developer hours to write patches for popular libraries and publish modular packages.",
    features: [
      "Public repositories for reusable Terraform cloud modules",
      "Continuous code patches for core Kubernetes operators",
      "Public Helm charts packaging container configurations"
    ],
    benefits: [
      "Improved safety and performance of core open-source libraries",
      "Direct technical feedback from developers worldwide",
      "Clear positioning as technical leaders in the ecosystem"
    ],
    techStack: [
      { name: "Git / GitHub", desc: "Source control host and pull request dashboard." },
      { name: "Terraform Registry", desc: "Directory hosting public cloud modules." },
      { name: "Artifact Hub", desc: "Public repository for Helm charts." }
    ],
    caseStudy: {
      title: "Terraform module library creation for multi-cloud deployments.",
      desc: "Created and published 8 Terraform modules for secure database setups, which have been downloaded over 20,000 times.",
      metrics: [
        { value: "8", label: "Published public cloud modules" },
        { value: "20,000+", label: "Public module downloads logged" },
        { value: "100%", label: "Open source license compliance" }
      ]
    },
    faqs: [
      { q: "Can we use your modules in commercial projects?", a: "Yes, all our public modules are distributed under open licenses like MIT or Apache 2.0." },
      { q: "How can we report bugs in your modules?", a: "You can open issues or submit pull requests directly on our public GitHub repositories." }
    ]
  },
  "talent-network": {
    slug: "talent-network",
    title: "Talent Network",
    heroSubtitle: "Connect with vetted SRE engineers and cloud architects to scale teams rapidly.",
    challenge: "Recruiting senior cloud engineers in competitive markets is slow, taking months to hire single candidates.",
    solution: "We build a database of pre-vetted engineers, enabling teams to select candidates and onboard them in days.",
    features: [
      "Database of certified software and cloud engineers",
      "Automated skill matching profiles based on resume parses",
      "Pre-vetted code challenges checking system design skills"
    ],
    benefits: [
      "Candidate sourcing delays reduced from months to under a week",
      "Guaranteed technical quality via our rigorous vetting checks",
      "Flexible hiring models matching project timelines"
    ],
    techStack: [
      { name: "Hiring Portal", desc: "Recruiter database search dashboard." },
      { name: "Coderbyte", desc: "Vetting environment running code challenges." },
      { name: "LinkedIn Recruiter", desc: "Sourcing interface connecting talent pools." }
    ],
    caseStudy: {
      title: "DevOps engineering team build for fintech customer.",
      desc: "Used our talent network database to source, interview, and onboard 6 senior DevOps developers in 10 days.",
      metrics: [
        { value: "6", label: "Senior developers hired" },
        { value: "10 days", label: "Hiring and onboarding duration" },
        { value: "100%", label: "Technical trial success rate" }
      ]
    },
    faqs: [
      { q: "What skills do you vet in your talent network?", a: "We vet coding (Python, Go), cloud platforms (AWS, Azure), Kubernetes, and security guidelines." },
      { q: "Are candidates available for remote contracts?", a: "Yes, we support remote, hybrid, and onsite hiring models globally." }
    ]
  },
  "certification-programs": {
    slug: "certification-programs",
    title: "Certification Programs",
    heroSubtitle: "Sponsor cloud training tracks and run SRE certification study groups.",
    challenge: "Rapidly changing cloud platforms lead to outdated skills and configuration errors in active systems.",
    solution: "We run structured study cohorts, sponsor exam costs, and reward engineers who earn new credentials.",
    features: [
      "Cloud platform certificate study modules",
      "Exam cost sponsorships for verified developers",
      "Practical sandbox labs testing real-world cloud scaling"
    ],
    benefits: [
      "Guaranteed high competency levels across the engineering team",
      "Reduced system configuration drift via certified practices",
      "Improved hiring brand attracting ambitious engineers"
    ],
    techStack: [
      { name: "AWS Academy", desc: "AWS curriculum and certification study files." },
      { name: "Microsoft Learn", desc: "Azure training courses and sandbox tools." },
      { name: "Linux Foundation", desc: "Kubernetes CKAD/CKA certificate runtime." }
    ],
    caseStudy: {
      title: "Kubernetes certification training for platform team.",
      desc: "Ran a 6-week CKA exam study cohort for 10 platform developers, achieving a 100% first-attempt pass rate.",
      metrics: [
        { value: "10", label: "Certified Kubernetes Administrators (CKA)" },
        { value: "100%", label: "First-attempt exam pass rate" },
        { value: "6 weeks", label: "Cohort study program duration" }
      ]
    },
    faqs: [
      { q: "What certificates do you recommend for SREs?", a: "We recommend AWS Certified DevOps Engineer, Azure DevOps Engineer Expert, and CKA." },
      { q: "Do you sponsor certifications for external network members?", a: "Yes, we sponsor exams for top contributors in our open-source repositories." }
    ]
  }
};
