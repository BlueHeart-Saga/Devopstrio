import { GlobalRegionOrState, GlobalLocation } from "./types";

export const indiaStates: Record<string, GlobalRegionOrState> = {
  karnataka: {
    id: "karnataka",
    countryCode: "india",
    slug: "karnataka",
    name: "Karnataka",
    abbreviation: "KA",
    capital: "Bengaluru",
    description: "India's premier technology and R&D capital, housing Silicon Valley of India, premier aerospace hubs, biotechnology parks, and leading multinational IT enterprises.",
    metaTitle: "Enterprise Cloud, DevOps and AI Services Karnataka | Devopstrio",
    metaDescription: "Devopstrio delivers 24/7 managed cloud, Kubernetes platform engineering, and enterprise AI across Karnataka. Corporate office located in Embassy Golf Links, Bengaluru.",
    keyIndustries: ["Information Technology", "Aerospace and Defence", "Biotechnology", "Fintech and SaaS", "Electronics Manufacturing"],
    techCorridors: ["Outer Ring Road Tech Corridor", "Electronic City", "Whitefield IT Hub", "Manyata Tech Park"],
    cityIds: ["bengaluru", "mysuru", "mangaluru", "hubballi-dharwad", "belagavi"],
    publicationStatus: "published"
  },

  "tamil-nadu": {
    id: "tamil-nadu",
    countryCode: "india",
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    abbreviation: "TN",
    capital: "Chennai",
    description: "A manufacturing powerhouse and premier SaaS development state, featuring massive automotive clusters, data centers, electronics assembly corridors, and deep tech talent.",
    metaTitle: "Enterprise Cloud and DevOps Services Tamil Nadu | Devopstrio",
    metaDescription: "Devopstrio provides 24/7 cloud operations and enterprise DevOps across Tamil Nadu. Operating our primary Technology and Operations Center in Guindy Industrial Estate, Chennai.",
    keyIndustries: ["Automotive and EV", "Software as a Service (SaaS)", "Electronics Hardware", "Fintech and Banking BPO", "Textiles and Engineering"],
    techCorridors: ["Old Mahabalipuram Road (OMR)", "Guindy Industrial Corridor", "Mount-Poonamallee High Road", "TIDEL Park Coimbatore"],
    cityIds: ["chennai", "coimbatore", "madurai", "tiruchirappalli", "salem", "tiruppur", "erode", "hosur", "vellore", "thoothukudi", "tirunelveli"],
    publicationStatus: "published"
  },

  telangana: {
    id: "telangana",
    countryCode: "india",
    slug: "telangana",
    name: "Telangana",
    abbreviation: "TS",
    capital: "Hyderabad",
    description: "Dynamic technology and life sciences hub featuring HITEC City, Genome Valley, major cloud hyperscaler data center campuses, and vibrant product engineering firms.",
    metaTitle: "Enterprise Cloud, AI and DevOps Services Telangana | Devopstrio",
    metaDescription: "Devopstrio delivers AWS/Azure cloud architecture, automated CI/CD pipelines, and enterprise data platforms across Hyderabad and Telangana.",
    keyIndustries: ["Pharma and Life Sciences", "Cloud and IT Services", "Financial Technology", "Aerospace and Defence", "Semiconductors"],
    techCorridors: ["HITEC City Cyber Corridor", "Financial District Gachibowli", "Genome Valley", "Aerospace Park Adibatla"],
    cityIds: ["hyderabad", "secunderabad", "warangal"],
    publicationStatus: "published"
  },

  maharashtra: {
    id: "maharashtra",
    countryCode: "india",
    slug: "maharashtra",
    name: "Maharashtra",
    abbreviation: "MH",
    capital: "Mumbai",
    description: "India's commercial and financial powerhouse, connecting Mumbai's banking capital with Pune's automotive, IT engineering, and product development corridors.",
    metaTitle: "Enterprise Cloud and DevOps Modernisation Maharashtra | Devopstrio",
    metaDescription: "Devopstrio provides 24/7 follow-the-sun cloud management, Zero-Trust compliance, and platform reliability across Mumbai, Pune, and Maharashtra.",
    keyIndustries: ["Banking and Financial Services (BFSI)", "Automotive and Manufacturing", "Pharmaceuticals", "Media and Entertainment", "Fintech"],
    techCorridors: ["Bandra Kurla Complex (BKC)", "Hinjewadi IT Park Pune", "Magarpatta Cybercity", "Mindspace Airoli"],
    cityIds: ["mumbai", "pune", "navi-mumbai", "thane", "nagpur", "nashik"],
    publicationStatus: "published"
  },

  "delhi-ncr": {
    id: "delhi-ncr",
    countryCode: "india",
    slug: "delhi-ncr",
    name: "Delhi NCR",
    abbreviation: "DL-NCR",
    capital: "New Delhi",
    description: "India's premier National Capital Region encompassing corporate headquarters, government ministries, and the high-density tech corridors of Gurugram (Cyber City) and Noida (Sector 62).",
    metaTitle: "Enterprise Cloud, DevOps and AI Consulting Delhi NCR | Devopstrio",
    metaDescription: "Devopstrio delivers enterprise multi-cloud migrations, Zero-Trust security, and automated SRE operations across New Delhi, Gurugram, and Noida.",
    keyIndustries: ["Public Sector and Government", "Fintech and E-Commerce", "Telecom and Networking", "Consulting and Professional Services", "Media"],
    techCorridors: ["Cyber City Gurugram", "Golf Course Road Extension", "Noida Expressway Tech Zone", "Okhla Industrial Area"],
    cityIds: ["delhi-ncr", "new-delhi", "gurugram", "noida", "greater-noida", "ghaziabad", "faridabad"],
    publicationStatus: "published"
  },

  kerala: {
    id: "kerala",
    countryCode: "india",
    slug: "kerala",
    name: "Kerala",
    abbreviation: "KL",
    capital: "Thiruvananthapuram",
    description: "A fast-growing IT export and digital services state powered by Technopark in Thiruvananthapuram and Infopark in Kochi, excelling in cloud modernization and maritime logistics tech.",
    metaTitle: "Enterprise Cloud and Software Development Kerala | Devopstrio",
    metaDescription: "Devopstrio provides 24/7 cloud consulting, microservices modernization, and automated SRE support across Kochi, Thiruvananthapuram, and Kerala.",
    keyIndustries: ["IT and Software Exports", "Tourism and Maritime Logistics", "Healthcare and Telemedicine", "Fintech"],
    techCorridors: ["Infopark Kakkanad Kochi", "Technopark Kazhakkoottam", "Cyberpark Kozhikode"],
    cityIds: ["kochi", "thiruvananthapuram", "kozhikode", "thrissur"],
    publicationStatus: "published"
  },

  // Research Candidates (States and UTs)
  "andhra-pradesh": {
    id: "andhra-pradesh",
    countryCode: "india",
    slug: "andhra-pradesh",
    name: "Andhra Pradesh",
    abbreviation: "AP",
    capital: "Amaravati",
    description: "Emerging IT and industrial corridor connecting Visakhapatnam's coastal IT hub with electronics manufacturing zones.",
    metaTitle: "Enterprise Cloud Services Andhra Pradesh | Devopstrio",
    metaDescription: "Devopstrio technology services research coverage across Andhra Pradesh.",
    keyIndustries: ["Pharmaceuticals", "Ports and Logistics", "IT Services", "Automotive"],
    cityIds: ["visakhapatnam", "vijayawada", "guntur", "tirupati"],
    publicationStatus: "research"
  },

  gujarat: {
    id: "gujarat",
    countryCode: "india",
    slug: "gujarat",
    name: "Gujarat",
    abbreviation: "GJ",
    capital: "Gandhinagar",
    description: "Industrial growth engine and financial technology center featuring GIFT City (Gujarat International Finance Tec-City).",
    metaTitle: "Enterprise Cloud Services Gujarat | Devopstrio",
    metaDescription: "Devopstrio technology services research coverage across Gujarat.",
    keyIndustries: ["Chemicals and Petrochemicals", "Fintech and Banking (GIFT City)", "Manufacturing", "Textiles"],
    cityIds: ["ahmedabad", "surat", "vadodara", "rajkot", "gandhinagar"],
    publicationStatus: "research"
  },

  "west-bengal": {
    id: "west-bengal",
    countryCode: "india",
    slug: "west-bengal",
    name: "West Bengal",
    abbreviation: "WB",
    capital: "Kolkata",
    description: "Commercial and IT gateway to Eastern India featuring Salt Lake Sector V and New Town tech clusters.",
    metaTitle: "Enterprise Cloud Services West Bengal | Devopstrio",
    metaDescription: "Devopstrio technology services research coverage across West Bengal.",
    keyIndustries: ["Information Technology", "Financial Services", "Heavy Engineering", "Logistics"],
    cityIds: ["kolkata", "howrah", "siliguri"],
    publicationStatus: "research"
  },

  "uttar-pradesh": {
    id: "uttar-pradesh",
    countryCode: "india",
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    abbreviation: "UP",
    capital: "Lucknow",
    description: "Major northern industrial state featuring IT defense corridors and emerging tier-2 tech hubs.",
    metaTitle: "Enterprise Cloud Services Uttar Pradesh | Devopstrio",
    metaDescription: "Devopstrio technology services research coverage across Uttar Pradesh.",
    keyIndustries: ["Manufacturing", "IT and Electronics", "Agri-tech", "Defence Industrial Corridor"],
    cityIds: ["lucknow", "kanpur", "varanasi", "prayagraj"],
    publicationStatus: "research"
  },

  rajasthan: {
    id: "rajasthan",
    countryCode: "india",
    slug: "rajasthan",
    name: "Rajasthan",
    abbreviation: "RJ",
    capital: "Jaipur",
    description: "Leading state for renewable energy, tourism tech, and Jaipur's Mahindra World City IT special economic zone.",
    metaTitle: "Enterprise Cloud Services Rajasthan | Devopstrio",
    metaDescription: "Devopstrio technology services research coverage across Rajasthan.",
    keyIndustries: ["Renewable Energy", "Textiles", "IT Services", "Minerals"],
    cityIds: ["jaipur", "jodhpur", "udaipur"],
    publicationStatus: "research"
  },

  "punjab-and-chandigarh": {
    id: "punjab-and-chandigarh",
    countryCode: "india",
    slug: "punjab-and-chandigarh",
    name: "Punjab and Chandigarh",
    abbreviation: "PB-CH",
    capital: "Chandigarh",
    description: "Northern innovation cluster connecting Chandigarh Capital Region and Mohali's IT City.",
    metaTitle: "Enterprise Cloud Services Punjab and Chandigarh | Devopstrio",
    metaDescription: "Devopstrio technology services research coverage across Punjab and Chandigarh.",
    keyIndustries: ["Agriculture and Food Processing", "IT and BPO", "Manufacturing", "Pharmaceuticals"],
    cityIds: ["chandigarh", "mohali", "ludhiana", "amritsar", "jalandhar"],
    publicationStatus: "research"
  },

  "madhya-pradesh": {
    id: "madhya-pradesh",
    countryCode: "india",
    slug: "madhya-pradesh",
    name: "Madhya Pradesh",
    abbreviation: "MP",
    capital: "Bhopal",
    description: "Central India growth corridor anchored by Indore's Super Corridor IT SEZ and pharmaceutical clusters.",
    metaTitle: "Enterprise Cloud Services Madhya Pradesh | Devopstrio",
    metaDescription: "Devopstrio technology services research coverage across Madhya Pradesh.",
    keyIndustries: ["Automotive", "Textiles", "Information Technology", "Pharmaceuticals"],
    cityIds: ["indore", "bhopal", "gwalior"],
    publicationStatus: "research"
  },

  odisha: {
    id: "odisha",
    countryCode: "india",
    slug: "odisha",
    name: "Odisha",
    abbreviation: "OD",
    capital: "Bhubaneswar",
    description: "Eastern India's fast-rising educational and IT capital anchored by Infocity and Infovalley in Bhubaneswar.",
    metaTitle: "Enterprise Cloud Services Odisha | Devopstrio",
    metaDescription: "Devopstrio technology services research coverage across Odisha.",
    keyIndustries: ["Metals and Mining", "IT Services", "Petrochemicals", "Ports"],
    cityIds: ["bhubaneswar", "cuttack", "rourkela"],
    publicationStatus: "research"
  }
};

export const indiaLocations: Record<string, GlobalLocation> = {
  // 1. Bengaluru (Published - Corporate Office)
  bengaluru: {
    id: "in-bengaluru",
    countryCode: "india",
    slug: "bengaluru",
    displayName: "Bengaluru",
    stateOrRegionId: "karnataka",
    metroArea: "Bengaluru Urban",
    nearbyLocationIds: ["mysuru", "hosur"],
    locationType: "major-city",
    coverageStatus: "active",
    officeStatus: "corporate-office",
    verifiedAddress: {
      buildingName: "Embassy Golf Links Business Park",
      streetAddress: "Embassy Golf Links Business Park, Off Intermediate Ring Road",
      locality: "Bengaluru",
      regionOrState: "Karnataka",
      postalCode: "560071",
      country: "India",
      telephone: "+91 80 4123 4567",
      email: "info@devopstrioglobal.com",
      googleMapsUrl: "https://maps.app.goo.gl/vdAe8XAb242GweER9"
    },
    verifiedCoordinates: { latitude: 12.9513, longitude: 77.6439 },
    servicesAvailable: ["cloud-managed-services", "kubernetes-services", "generative-ai-solutions", "ai-consulting", "cicd-implementation"],
    publicationStatus: "published",
    shortDescription: "India's primary technology and AI hub. Devopstrio operates our Corporate Office at Embassy Golf Links Business Park, delivering 24/7 cloud management, Kubernetes orchestration, and enterprise AI engineering.",
    metaTitle: "Enterprise Cloud, DevOps and AI Bengaluru | Devopstrio",
    metaDescription: "Devopstrio's Bengaluru Corporate Office delivers 24/7 managed cloud, EKS/AKS Kubernetes platforms, Azure services, and production AI consulting.",
    economicProfile: {
      dominantIndustries: ["SaaS and Cloud Software", "Enterprise AI and Deep Tech", "FinTech and Payments", "E-Commerce Logistics"],
      techHubDescription: "Home to India's highest concentration of unicorn startups, multinational global capability centers (GCCs), and deep tech research labs.",
      keyClusters: ["Outer Ring Road Tech Parks", "Electronic City", "Whitefield EPIP Zone", "Embassy Golf Links"]
    },
    deliveryHighlights: [
      "Physical Corporate Office in Embassy Golf Links Business Park, Bengaluru",
      "Direct certified partner engineering across Azure, AWS, and GCP Indian sovereign regions",
      "Follow-the-sun 24/7 SRE monitoring with contractual P1 critical triage SLAs",
      "SOC-2 Type II, ISO 27001, and Indian Digital Personal Data Protection (DPDP) aligned"
    ]
  },

  // 2. Chennai (Published - Operations Center)
  chennai: {
    id: "in-chennai",
    countryCode: "india",
    slug: "chennai",
    displayName: "Chennai",
    stateOrRegionId: "tamil-nadu",
    metroArea: "Chennai Metropolitan Area",
    nearbyLocationIds: ["coimbatore", "hosur", "vellore"],
    locationType: "major-city",
    coverageStatus: "active",
    officeStatus: "operations-center",
    verifiedAddress: {
      buildingName: "Ground Floor, Primus Building",
      streetAddress: "Door No. SP-7A, Guindy Industrial Estate, SIDCO Industrial Estate",
      locality: "Chennai",
      regionOrState: "Tamil Nadu",
      postalCode: "600032",
      country: "India",
      telephone: "+91 44 6123 4567",
      email: "info@devopstrioglobal.com",
      googleMapsUrl: "https://maps.app.goo.gl/8pytBuRQstcSHqtR7"
    },
    verifiedCoordinates: { latitude: 13.0067, longitude: 80.2038 },
    servicesAvailable: ["cloud-managed-services", "cicd-implementation", "software-development", "penetration-testing"],
    publicationStatus: "published",
    shortDescription: "SaaS capital of India and electronics hardware corridor. Devopstrio operates our primary Technology and Operations Center in Guindy Industrial Estate, Chennai.",
    metaTitle: "Enterprise Cloud, DevOps and Software Development Chennai | Devopstrio",
    metaDescription: "Devopstrio's Chennai Operations Center delivers 24/7 cloud management, automated CI/CD pipelines, Zero-Trust security, and enterprise software engineering.",
    economicProfile: {
      dominantIndustries: ["B2B SaaS and Enterprise Software", "Automotive and Electric Vehicles", "Banking and FinTech BPO", "Electronics Manufacturing"],
      techHubDescription: "Premier SaaS hub powering global enterprise product architectures, sub-sea cable landing data centers, and mission-critical engineering units.",
      keyClusters: ["Guindy Industrial Estate", "OMR IT Express Corridor", "DLF Cybercity Porur", "Siruseri IT SEZ"]
    },
    deliveryHighlights: [
      "Technology and Operations Center at Guindy Industrial Estate, SIDCO, Chennai",
      "High-throughput automated CI/CD pipeline modernization and GitOps workflows",
      "CREST and Cyber Essentials aligned penetration testing and vulnerability auditing",
      "24/7 network operations center (NOC) and round-the-clock incident containment"
    ]
  },

  // 3. Hyderabad (Published - Remote / Onshore Delivery)
  hyderabad: {
    id: "in-hyderabad",
    countryCode: "india",
    slug: "hyderabad",
    displayName: "Hyderabad",
    stateOrRegionId: "telangana",
    metroArea: "Hyderabad Metropolitan Development Area",
    nearbyLocationIds: ["secunderabad", "warangal"],
    locationType: "major-city",
    coverageStatus: "active",
    officeStatus: "remote-delivery",
    verifiedCoordinates: { latitude: 17.3850, longitude: 78.4867 },
    servicesAvailable: ["cloud-managed-services", "data-warehousing", "generative-ai-solutions", "cloud-migration"],
    publicationStatus: "published",
    shortDescription: "Fast-growing global capability center capital and life sciences hub. Devopstrio delivers enterprise multi-cloud migrations, lakehouse analytics, and automated DevOps for Hyderabad enterprises.",
    metaTitle: "Enterprise Cloud, Data and AI Consulting Hyderabad | Devopstrio",
    metaDescription: "Devopstrio delivers AWS/Azure cloud architecture, data platform modernization, and Generative AI solutions across Hyderabad and HITEC City.",
    economicProfile: {
      dominantIndustries: ["Biopharma and Genomics", "Enterprise Cloud Infrastructure", "Financial Services GCCs", "Aerospace and Defence"],
      techHubDescription: "Anchored by HITEC City and Gachibowli Financial District, hosting massive hyperscale cloud data centers from Microsoft, Amazon, and Google.",
      keyClusters: ["HITEC City", "Gachibowli Financial District", "Madhapur Tech Zone", "Genome Valley"]
    },
    deliveryHighlights: [
      "Enterprise AWS and Microsoft Azure architecture led by certified principal architects",
      "Modern data lakehouse engineering supporting high-volume analytics workloads",
      "Sovereign data hosting in Hyderabad cloud availability zones",
      "Full compliance with Indian DPDP Act and global SOC-2 Type II standards"
    ]
  },

  // 4. Mumbai (Published - Remote / Onshore Delivery)
  mumbai: {
    id: "in-mumbai",
    countryCode: "india",
    slug: "mumbai",
    displayName: "Mumbai",
    stateOrRegionId: "maharashtra",
    metroArea: "Mumbai Metropolitan Region",
    nearbyLocationIds: ["navi-mumbai", "thane", "pune"],
    locationType: "capital",
    coverageStatus: "active",
    officeStatus: "remote-delivery",
    verifiedCoordinates: { latitude: 19.0760, longitude: 72.8777 },
    servicesAvailable: ["cloud-managed-services", "penetration-testing", "digital-transformation", "zero-trust-architecture"],
    publicationStatus: "published",
    shortDescription: "Financial and banking capital of India. Devopstrio architects Zero-Trust security, RBI-compliant cloud landing zones, and 24/7 managed SRE for Mumbai's tier-1 institutions.",
    metaTitle: "Enterprise Cloud, Cybersecurity and DevOps Mumbai | Devopstrio",
    metaDescription: "Devopstrio delivers 24/7 financial cloud management, penetration testing, and Zero-Trust architecture for BFSI and enterprise clients in Mumbai.",
    economicProfile: {
      dominantIndustries: ["Banking, Financial Services and Insurance (BFSI)", "FinTech Exchanges", "Media and Entertainment", "Corporate Headquarters"],
      techHubDescription: "India's financial nerve center with stringent regulatory requirements from RBI, SEBI, and IRDAI for data residency, security, and uptime.",
      keyClusters: ["Bandra Kurla Complex (BKC)", "Nariman Point", "Lower Parel Commercial Hub", "Mindspace Malad"]
    },
    deliveryHighlights: [
      "Rigorous compliance with Reserve Bank of India (RBI) and SEBI cloud security mandates",
      "Rapid P1 incident response backed by 24/7 follow-the-sun SRE operations",
      "CREST-aligned penetration testing and Zero-Trust identity federation",
      "Financial data isolation within Mumbai AWS (ap-south-1) and Azure Central India"
    ]
  },

  // 5. Pune (Published - Remote / Onshore Delivery)
  pune: {
    id: "in-pune",
    countryCode: "india",
    slug: "pune",
    displayName: "Pune",
    stateOrRegionId: "maharashtra",
    metroArea: "Pune Metropolitan Region",
    nearbyLocationIds: ["mumbai", "navi-mumbai"],
    locationType: "major-city",
    coverageStatus: "active",
    officeStatus: "remote-delivery",
    verifiedCoordinates: { latitude: 18.5204, longitude: 73.8567 },
    servicesAvailable: ["cloud-managed-services", "platform-engineering", "cicd-implementation", "saas-product-development"],
    publicationStatus: "published",
    shortDescription: "Automotive engineering and IT innovation hub. Devopstrio delivers internal developer platforms, GitOps automation, and 24/7 cloud management for Pune engineering firms.",
    metaTitle: "Enterprise DevOps, Platform Engineering and Cloud Pune | Devopstrio",
    metaDescription: "Devopstrio provides automated CI/CD pipelines, Kubernetes platform engineering, and 24/7 managed cloud services across Pune tech parks.",
    economicProfile: {
      dominantIndustries: ["Automotive and Industrial Tech", "Software Engineering and SaaS", "Financial Technology", "Biomedical Engineering"],
      techHubDescription: "Major product engineering and automotive electronics corridor, recognized for top-tier software talent and enterprise developer communities.",
      keyClusters: ["Hinjewadi Rajiv Gandhi Infotech Park", "Magarpatta Cybercity", "EON Free Zone Kharadi", "Talwade IT Park"]
    },
    deliveryHighlights: [
      "Internal Developer Platform (IDP) and Backstage developer portal implementations",
      "Automated multi-stage CI/CD pipelines with zero-downtime blue/green deployment",
      "24/7 SRE cluster monitoring and container cost optimization (FinOps)",
      "Hybrid-cloud direct connect architecture between factories and AWS/Azure"
    ]
  },

  // 6. Delhi NCR (Published - Remote / Onshore Delivery)
  "delhi-ncr": {
    id: "in-delhi-ncr",
    countryCode: "india",
    slug: "delhi-ncr",
    displayName: "Delhi NCR",
    stateOrRegionId: "delhi-ncr",
    metroArea: "National Capital Region (Delhi, Gurugram, Noida)",
    nearbyLocationIds: ["faridabad", "ghaziabad"],
    locationType: "major-city",
    coverageStatus: "active",
    officeStatus: "remote-delivery",
    verifiedCoordinates: { latitude: 28.6139, longitude: 77.2090 },
    servicesAvailable: ["cloud-migration", "zero-trust-architecture", "generative-ai-solutions", "cloud-managed-services"],
    publicationStatus: "published",
    shortDescription: "National Capital Region connecting New Delhi, Cyber City Gurugram, and Sector 62 Noida. Devopstrio provides enterprise cloud modernization, Zero-Trust compliance, and Gen AI solutions.",
    metaTitle: "Enterprise Cloud, DevOps and AI Solutions Delhi NCR | Devopstrio",
    metaDescription: "Devopstrio delivers multi-cloud migrations, Zero-Trust cybersecurity, and production AI consulting across Gurugram, Noida, and New Delhi.",
    economicProfile: {
      dominantIndustries: ["E-Commerce and Quick Commerce", "Fintech and Consumer Internet", "Government and Public Infrastructure", "Telecom and Networking"],
      techHubDescription: "Dense cross-state economic corridor housing corporate headquarters in Gurugram, IT delivery centers in Noida, and central governance in New Delhi.",
      keyClusters: ["Cyber City and DLF Phase 2 Gurugram", "Sector 62 and 126 Noida Expressway", "Okhla Industrial Area", "Aerocity Tech Hub"]
    },
    deliveryHighlights: [
      "Cross-state multi-cloud landing zones with sovereign Delhi-area data residency",
      "Zero-Trust cybersecurity architecture aligned with Indian CERT-In guidelines",
      "Production-ready Generative AI agents deployed within private enterprise VPCs",
      "24/7 follow-the-sun incident desks with contractual SLA commitments"
    ]
  },

  // 7. Coimbatore (Published - Remote / Onshore Delivery)
  coimbatore: {
    id: "in-coimbatore",
    countryCode: "india",
    slug: "coimbatore",
    displayName: "Coimbatore",
    stateOrRegionId: "tamil-nadu",
    metroArea: "Coimbatore Metropolitan Area",
    nearbyLocationIds: ["chennai", "tiruppur", "erode", "salem"],
    locationType: "tech-hub",
    coverageStatus: "active",
    officeStatus: "remote-delivery",
    verifiedCoordinates: { latitude: 11.0168, longitude: 76.9558 },
    servicesAvailable: ["software-development", "saas-product-development", "cloud-managed-services"],
    publicationStatus: "published",
    shortDescription: "Manchester of South India and booming B2B SaaS hub. Devopstrio delivers enterprise application modernization, multi-tenant cloud architectures, and managed IT services.",
    metaTitle: "SaaS and Enterprise Cloud Services Coimbatore | Devopstrio",
    metaDescription: "Devopstrio provides multi-tenant SaaS engineering, cloud modernization, and 24/7 managed infrastructure across Coimbatore and TIDEL Park.",
    economicProfile: {
      dominantIndustries: ["Industrial Engineering and Pumps", "B2B SaaS Products", "Automotive Ancillaries", "Textile Technology"],
      techHubDescription: "Rapidly expanding software engineering center renowned for high-retention technical talent, SaaS startups, and manufacturing IoT solutions.",
      keyClusters: ["TIDEL Park Coimbatore", "CHIL SEZ Saravanampatti", "Peelamedu Tech Zone"]
    },
    deliveryHighlights: [
      "Scalable multi-tenant SaaS architecture design with database isolation",
      "Automated container deployment and cloud cost governance",
      "Direct collaboration with Chennai Operations Center for round-the-clock SRE",
      "High-reliability industrial IoT telemetry pipelines on AWS and Azure"
    ]
  },

  // 8. Kochi (Published - Remote / Onshore Delivery)
  kochi: {
    id: "in-kochi",
    countryCode: "india",
    slug: "kochi",
    displayName: "Kochi",
    stateOrRegionId: "kerala",
    metroArea: "Kochi Metropolitan Region",
    nearbyLocationIds: ["thiruvananthapuram", "kozhikode", "thrissur"],
    locationType: "tech-hub",
    coverageStatus: "active",
    officeStatus: "remote-delivery",
    verifiedCoordinates: { latitude: 9.9312, longitude: 76.2673 },
    servicesAvailable: ["cloud-managed-services", "cloud-migration", "devops-automation"],
    publicationStatus: "published",
    shortDescription: "Kerala's commercial capital and submarine cable gateway. Devopstrio provides high-availability cloud migration, automated CI/CD, and 24/7 managed SRE for Kochi enterprises.",
    metaTitle: "Enterprise Cloud, DevOps and SRE Consulting Kochi | Devopstrio",
    metaDescription: "Devopstrio delivers 24/7 managed cloud services, container modernization, and automated SRE support across Infopark Kochi.",
    economicProfile: {
      dominantIndustries: ["IT and Offshore Software Services", "Maritime Logistics and Port Tech", "FinTech and Digital Payments", "Healthcare IT"],
      techHubDescription: "Coastal technology gateway featuring Infopark and SmartCity, benefiting from direct international undersea fiber connectivity.",
      keyClusters: ["Infopark Kakkanad Phase 1 and 2", "SmartCity Kochi", "Kaloor Digital District"]
    },
    deliveryHighlights: [
      "Low-latency cloud architectures leveraging direct international gateway fiber",
      "Automated multi-region disaster recovery and continuous database replication",
      "24/7 follow-the-sun SRE incident triage and performance optimization",
      "Enterprise compliance with Indian and international data privacy regulations"
    ]
  },

  // Thoothukudi (Operations Center in registry)
  thoothukudi: {
    id: "in-thoothukudi",
    countryCode: "india",
    slug: "thoothukudi",
    displayName: "Thoothukudi",
    stateOrRegionId: "tamil-nadu",
    nearbyLocationIds: ["tirunelveli", "madurai"],
    locationType: "city",
    coverageStatus: "active",
    officeStatus: "operations-center",
    verifiedAddress: {
      buildingName: "Rajeev Colony",
      streetAddress: "4/367, Rajeev Colony, Pasuvanthanai",
      locality: "Thoothukudi",
      regionOrState: "Tamil Nadu",
      postalCode: "628718",
      country: "India",
      telephone: "+91 46 1234 5678",
      email: "info@devopstrioglobal.com",
      googleMapsUrl: "https://maps.app.goo.gl/gsrJPp7h2zbzQTPP9"
    },
    verifiedCoordinates: { latitude: 8.7642, longitude: 78.1348 },
    servicesAvailable: ["cloud-managed-services"],
    publicationStatus: "published",
    shortDescription: "Devopstrio operations center supporting round-the-clock follow-the-sun technical monitoring and SRE operations.",
    economicProfile: {
      dominantIndustries: ["Port and Maritime", "Energy and Power", "Engineering Support"],
      techHubDescription: "Regional operations center location for distributed engineering delivery.",
      keyClusters: ["Pasuvanthanai", "VOC Port Zone"]
    }
  },

  // Research Candidates (Draft/Research status)
  mysuru: {
    id: "in-mysuru",
    countryCode: "india",
    slug: "mysuru",
    displayName: "Mysuru",
    stateOrRegionId: "karnataka",
    nearbyLocationIds: ["bengaluru"],
    locationType: "city",
    coverageStatus: "scheduled",
    officeStatus: "service-area",
    servicesAvailable: ["cloud-managed-services"],
    publicationStatus: "research",
    shortDescription: "Heritage city with emerging electronics and software delivery parks.",
    economicProfile: { dominantIndustries: ["IT Services", "Electronics"], techHubDescription: "Satellite IT corridor to Bengaluru.", keyClusters: ["Hebbal Electronic City"] }
  },
  mangaluru: {
    id: "in-mangaluru",
    countryCode: "india",
    slug: "mangaluru",
    displayName: "Mangaluru",
    stateOrRegionId: "karnataka",
    nearbyLocationIds: ["bengaluru"],
    locationType: "city",
    coverageStatus: "scheduled",
    officeStatus: "service-area",
    servicesAvailable: ["cloud-managed-services"],
    publicationStatus: "research",
    shortDescription: "Coastal Karnataka financial and education tech hub.",
    economicProfile: { dominantIndustries: ["Banking", "Petrochemicals", "IT"], techHubDescription: "Coastal IT park corridor.", keyClusters: ["Mudipu IT SEZ"] }
  },
  "navi-mumbai": {
    id: "in-navi-mumbai",
    countryCode: "india",
    slug: "navi-mumbai",
    displayName: "Navi Mumbai",
    stateOrRegionId: "maharashtra",
    nearbyLocationIds: ["mumbai", "thane"],
    locationType: "city",
    coverageStatus: "active",
    officeStatus: "service-area",
    servicesAvailable: ["cloud-managed-services"],
    publicationStatus: "research",
    shortDescription: "Major hyperscale data center capital of India.",
    economicProfile: { dominantIndustries: ["Data Centers", "IT Parks"], techHubDescription: "TTC Industrial Area and Airoli data corridors.", keyClusters: ["Airoli Knowledge Park"] }
  },
  thane: {
    id: "in-thane",
    countryCode: "india",
    slug: "thane",
    displayName: "Thane",
    stateOrRegionId: "maharashtra",
    nearbyLocationIds: ["mumbai", "navi-mumbai"],
    locationType: "city",
    coverageStatus: "active",
    officeStatus: "service-area",
    servicesAvailable: ["cloud-managed-services"],
    publicationStatus: "research",
    shortDescription: "High-density corporate IT and BFSI operations corridor.",
    economicProfile: { dominantIndustries: ["BFSI Operations", "IT Parks"], techHubDescription: "Ghodbunder Road IT zone.", keyClusters: ["Wagle Estate"] }
  },
  secunderabad: {
    id: "in-secunderabad",
    countryCode: "india",
    slug: "secunderabad",
    displayName: "Secunderabad",
    stateOrRegionId: "telangana",
    nearbyLocationIds: ["hyderabad"],
    locationType: "city",
    coverageStatus: "active",
    officeStatus: "service-area",
    servicesAvailable: ["cloud-managed-services"],
    publicationStatus: "research",
    shortDescription: "Twin city to Hyderabad with defense and industrial tech focus.",
    economicProfile: { dominantIndustries: ["Defence", "Railways", "Electronics"], techHubDescription: "Industrial and telecom corridor.", keyClusters: ["Bolarum"] }
  },
  kolkata: {
    id: "in-kolkata",
    countryCode: "india",
    slug: "kolkata",
    displayName: "Kolkata",
    stateOrRegionId: "west-bengal",
    nearbyLocationIds: ["howrah"],
    locationType: "major-city",
    coverageStatus: "scheduled",
    officeStatus: "service-area",
    servicesAvailable: ["cloud-managed-services"],
    publicationStatus: "research",
    shortDescription: "Commercial and IT gateway of Eastern India.",
    economicProfile: { dominantIndustries: ["IT Services", "Financial Services"], techHubDescription: "Salt Lake Sector V and New Town tech clusters.", keyClusters: ["Salt Lake Sector V"] }
  },
  ahmedabad: {
    id: "in-ahmedabad",
    countryCode: "india",
    slug: "ahmedabad",
    displayName: "Ahmedabad",
    stateOrRegionId: "gujarat",
    nearbyLocationIds: ["gandhinagar"],
    locationType: "major-city",
    coverageStatus: "scheduled",
    officeStatus: "service-area",
    servicesAvailable: ["cloud-managed-services"],
    publicationStatus: "research",
    shortDescription: "Commercial center connecting to GIFT City.",
    economicProfile: { dominantIndustries: ["Fintech", "Manufacturing"], techHubDescription: "SG Highway IT corridor.", keyClusters: ["SG Highway"] }
  },
  chandigarh: {
    id: "in-chandigarh",
    countryCode: "india",
    slug: "chandigarh",
    displayName: "Chandigarh",
    stateOrRegionId: "punjab-and-chandigarh",
    nearbyLocationIds: ["mohali"],
    locationType: "tech-hub",
    coverageStatus: "scheduled",
    officeStatus: "service-area",
    servicesAvailable: ["cloud-managed-services"],
    publicationStatus: "research",
    shortDescription: "Northern regional innovation and startup center.",
    economicProfile: { dominantIndustries: ["IT and BPO", "Agri-Tech"], techHubDescription: "Rajiv Gandhi Chandigarh Technology Park.", keyClusters: ["IT Park Kishangarh"] }
  },
  lucknow: {
    id: "in-lucknow",
    countryCode: "india",
    slug: "lucknow",
    displayName: "Lucknow",
    stateOrRegionId: "uttar-pradesh",
    nearbyLocationIds: ["kanpur"],
    locationType: "city",
    coverageStatus: "scheduled",
    officeStatus: "service-area",
    servicesAvailable: ["cloud-managed-services"],
    publicationStatus: "research",
    shortDescription: "Capital of Uttar Pradesh with growing IT City SEZ.",
    economicProfile: { dominantIndustries: ["Government", "IT Services"], techHubDescription: "Chak Ganjaria IT City.", keyClusters: ["Sultanpur Road IT City"] }
  },
  jaipur: {
    id: "in-jaipur",
    countryCode: "india",
    slug: "jaipur",
    displayName: "Jaipur",
    stateOrRegionId: "rajasthan",
    nearbyLocationIds: ["jodhpur"],
    locationType: "city",
    coverageStatus: "scheduled",
    officeStatus: "service-area",
    servicesAvailable: ["cloud-managed-services"],
    publicationStatus: "research",
    shortDescription: "Pink City tech cluster anchored by Mahindra World City.",
    economicProfile: { dominantIndustries: ["IT Services", "Fintech BPO"], techHubDescription: "Mahindra World City SEZ.", keyClusters: ["Sitapura Industrial Area"] }
  },
  indore: {
    id: "in-indore",
    countryCode: "india",
    slug: "indore",
    displayName: "Indore",
    stateOrRegionId: "madhya-pradesh",
    nearbyLocationIds: ["bhopal"],
    locationType: "city",
    coverageStatus: "scheduled",
    officeStatus: "service-area",
    servicesAvailable: ["cloud-managed-services"],
    publicationStatus: "research",
    shortDescription: "Commercial and IT capital of Madhya Pradesh.",
    economicProfile: { dominantIndustries: ["Pharmaceuticals", "IT Services"], techHubDescription: "Super Corridor IT SEZ.", keyClusters: ["Super Corridor"] }
  },
  bhubaneswar: {
    id: "in-bhubaneswar",
    countryCode: "india",
    slug: "bhubaneswar",
    displayName: "Bhubaneswar",
    stateOrRegionId: "odisha",
    nearbyLocationIds: ["cuttack"],
    locationType: "city",
    coverageStatus: "scheduled",
    officeStatus: "service-area",
    servicesAvailable: ["cloud-managed-services"],
    publicationStatus: "research",
    shortDescription: "Eastern educational and software export capital.",
    economicProfile: { dominantIndustries: ["IT Services", "Metals"], techHubDescription: "Infocity and Infovalley.", keyClusters: ["Infocity Chandrasekharpur"] }
  }
};
