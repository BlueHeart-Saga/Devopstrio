import { Metadata } from "next";

interface MetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage
}: MetadataInput): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devopstrio.co.uk";
  
  // Normalize the path so it starts with a leading slash and matches canonical structure
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${baseUrl}${cleanPath}`;
  
  // Format the title to include the company brand consistently
  const displayTitle = title.includes("|") ? title : `${title} | Devopstrio`;

  const defaultKeywords = [
    "Devopstrio",
    "DevOps Consulting UK",
    "Platform Engineering Services",
    "Cloud Engineering Services",
    "Cloud Migration Services",
    "Azure Consulting Services",
    "AWS Consulting Services",
    "GCP Cloud Consulting",
    "Kubernetes Services",
    "Terraform Consulting",
    "DevSecOps Services",
    "Managed DevOps Services",
    "AI Consulting Services",
    "Generative AI Development",
    "Generative AI Consulting UK",
    "LLM Enterprise Application",
    "Vector Database Integration",
    "Data Engineering Services",
    "Business Intelligence Services",
    "Cybersecurity Consulting",
    "Cloud Security Services",
    "Digital Transformation Services",
    "Site Reliability Engineering",
    "Infrastructure as Code Services",
    "Enterprise Software Development",
    "MLOps Engineering",
    "IT Advisory Services UK",
    "SRE Automation",
    "Cloud Architecture",
    "Enterprise Software Solutions",
    "Data Governance"
  ];
  
  const mergedKeywords = keywords
    ? [...new Set([...keywords, ...defaultKeywords])]
    : defaultKeywords;

  const image = ogImage || `${baseUrl}/webp/apple-touch-icon.webp`;

  return {
    title: displayTitle,
    description: description,
    keywords: mergedKeywords.join(", "),
    alternates: {
      canonical: canonicalUrl,
      types: {
        "application/rss+xml": [
          { url: `${baseUrl}/feed.xml`, title: "Devopstrio Insights Feed" }
        ]
      }
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: canonicalUrl,
      siteName: "Devopstrio",
      title: displayTitle,
      description: description,
      images: [
        {
          url: image,
          width: ogImage ? 1200 : 180,
          height: ogImage ? 630 : 180,
          alt: title
        }
      ]
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title: displayTitle,
      description: description,
      images: [image]
    }
  };
}

export function getMetadataFromPath(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) {
    // Root page metadata
    return {
      title: "Enterprise AI Consulting, Cloud & Product Engineering Services",
      description: "Devopstrio delivers professional consulting, cloud-native architecture, SRE automation, cybersecurity, and production-grade generative AI engineering for global enterprises.",
      keywords: ["Enterprise AI", "Cloud Engineering", "SRE Automation", "Cybersecurity", "Devopstrio", "Platform Engineering", "DevSecOps Consulting", "IT Consulting"]
    };
  }

  // Capitalize and clean helper
  const cleanSegment = (str: string) => {
    const acronyms: Record<string, string> = {
      "ai": "AI",
      "aws": "AWS",
      "sap": "SAP",
      "iac": "IaC",
      "cicd": "CI/CD",
      "sre": "SRE",
      "soc": "SOC",
      "gdpr": "GDPR",
      "devsecops": "DevSecOps",
      "csr": "CSR"
    };

    return str
      .split("-")
      .map(word => acronyms[word.toLowerCase()] || (word.charAt(0).toUpperCase() + word.slice(1)))
      .join(" ");
  };

  const leafSegment = cleanSegment(parts[parts.length - 1]);
  
  let title = leafSegment;
  let description = `Professional ${leafSegment} consulting and systems engineering services. Devopstrio designs, modernizes, and scales high-performance, compliant architectures for enterprises.`;
  let keywords = [leafSegment, "Devopstrio", "Enterprise Engineering", "IT Advisory", "Professional Consulting"];

  if (parts[0] === "ecosystem") {
    const category = parts[1] ? cleanSegment(parts[1]) : "Ecosystem";
    if (parts.length > 2) {
      title = `Professional ${leafSegment} Solutions | ${category} Hub`;
      description = `Explore professional ${leafSegment} capabilities under our ${category} practice area at Devopstrio. We engineer compliant, scalable frameworks for complex operations.`;
      keywords.push(category, "Ecosystem Alliance", "Framework Acceleration");
    } else {
      title = `Enterprise ${category} Hub & Engineering Ecosystem`;
      description = `Discover our strategic ${category} capabilities, frameworks, and integration plans designed to accelerate modernization and engineering velocity.`;
      keywords.push("Ecosystem Hub", "Enterprise Integrations");
    }
  } else if (parts[0] === "services") {
    if (parts.length > 2) {
      const category = cleanSegment(parts[1]);
      title = `Professional ${leafSegment} Services | ${category}`;
      description = `Architect secure, high-availability setups with Devopstrio's professional ${leafSegment} consultants and engineers. Custom SLAs and compliance guaranteed.`;
      keywords.push(category, "Practice Services", "Solution Architect");
    } else {
      title = `Professional ${leafSegment} Solutions & Tech Advisory`;
      description = `Explore enterprise-grade, professional ${leafSegment} consulting services. We help migrate, modernize, and automate mission-critical systems.`;
      keywords.push("Solutions", "IT Migration");
    }
  } else if (parts[0] === "industries") {
    title = `Professional ${leafSegment} Industry Solutions`;
    description = `Transform and digitize your operations with Devopstrio's professional ${leafSegment} technology platforms and regulatory-compliant runtimes.`;
    keywords.push("Industry Vertical", "Regulatory Compliance", "Enterprise Platform");
  } else if (parts[0] === "about") {
    title = `${leafSegment} | Enterprise Leadership & Strategy`;
    description = `Learn about our professional leadership team, SRE delivery presence, strategic alliances, and sustainability guidelines at Devopstrio.`;
    keywords.push("About Us", "Company Culture", "Corporate Governance");
  }

  // Exact matching for main hub entry points
  if (parts[0] === "services" && parts.length === 1) {
    title = "Professional IT Consulting & Enterprise Engineering Services";
    description = "Scale your infrastructure with professional IT consulting and engineering services. Practice areas include Cognitive AI, container orchestration, SRE, and compliance.";
    keywords = ["Services", "AI Pipelines", "Container Grids", "Platform Engineering", "Professional Services"];
  } else if (parts[0] === "industries" && parts.length === 1) {
    title = "Enterprise Technology Solutions & Compliant Platforms by Industry";
    description = "Professional IT solutions and compliant cloud infrastructure tailored for banking, financial markets, healthcare, manufacturing, and global commerce.";
    keywords = ["Industries", "Banking Tech", "Healthcare Tech", "Retail Tech", "Regulatory Runtimes"];
  } else if (parts[0] === "ecosystem" && parts.length === 1) {
    title = "Global Technology Partnerships, Accelerators & Innovation Labs";
    description = "Discover our professional partner alliances with AWS, Microsoft, and Google Cloud, alongside custom frameworks, R&D labs, and delivery networks.";
    keywords = ["Ecosystem", "Innovation Labs", "Strategic Partnerships", "Accelerators", "Alliances"];
  } else if (parts[0] === "insights" && parts.length === 1) {
    title = "Technical Publications, Case Studies & Engineering Insights";
    description = "Read expert case studies, deep-dive SRE articles, and technology publications authored by Devopstrio's principal systems architects.";
    keywords = ["Insights", "Blogs", "Tech Publications", "Case Studies", "Whitepapers"];
  } else if (parts[0] === "contact") {
    title = "Contact Our Principal Solutions Architects & Advisory Teams";
    description = "Get in touch with Devopstrio's professional consulting team. Secure a technical advisory session to scope your enterprise cloud or AI modernization.";
    keywords = ["Contact Us", "Scope Project", "Consultation", "Tech Advisory"];
  } else if (parts[0] === "careers") {
    title = "Careers at Devopstrio | Join our Professional Engineering Network";
    description = "Explore active career opportunities. Join an elite global network of systems architects, SRE engineers, and AI innovators building compliant runtimes.";
    keywords = ["Careers", "Jobs", "Engineering Openings", "Hiring", "IT Careers"];
  }

  return { title, description, keywords };
}
