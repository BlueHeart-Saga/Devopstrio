import { GlobalCountry, CountryCode } from "./types";

export const globalCountries: Record<CountryCode, GlobalCountry> = {
  uk: {
    code: "uk",
    slug: "uk",
    name: "United Kingdom",
    formalName: "United Kingdom of Great Britain and Northern Ireland",
    capital: "London",
    primaryTimezone: "Europe/London (GMT/BST)",
    primaryLanguage: "English (en-GB)",
    currency: "GBP (£)",
    overviewHeading: "UK-Wide Enterprise Cloud, DevOps & AI Engineering",
    description: "Devopstrio delivers 24/7 managed cloud, DevOps platform automation, Zero-Trust cybersecurity, and Generative AI solutions across the United Kingdom. Headquartered in London with nationwide enterprise delivery.",
    metaTitle: "UK Enterprise Cloud, DevOps & AI Engineering Hub | Devopstrio",
    metaDescription: "Devopstrio delivers enterprise cloud-native architecture, 24/7 SRE automation, Zero-Trust cybersecurity, and production-grade Generative AI across the United Kingdom.",
    canonicalPath: "/locations/uk",
    stats: [
      { value: "<15m", label: "P1 Incident SLA" },
      { value: "24/7/365", label: "UK-Managed SRE" },
      { value: "100%", label: "UK Data Residency" },
      { value: "ISO 27001", label: "Certified Practice" }
    ],
    verifiedOffices: [
      {
        city: "London",
        type: "headquarters",
        address: {
          buildingName: "Global Headquarters",
          streetAddress: "128 City Road",
          locality: "London",
          postalCode: "EC1V 2NX",
          country: "United Kingdom",
          telephone: "+441784640216",
          email: "info@devopstrioglobal.com",
          googleMapsUrl: "https://www.google.com/maps/place/Devopstrio+Ltd/@51.5272749,-0.0913978,646m/data=!3m2!1e3!4b1!4m6!3m5!1s0x48761de53ed821b3:0x76b8b1beb8ae8846!8m2!3d51.5272749!4d-0.0888229!16s%2Fg%2F11xl88t9lx?entry=ttu"
        }
      },
      {
        city: "London",
        type: "support-office",
        address: {
          buildingName: "5th Floor",
          streetAddress: "167-169 Great Portland Street",
          locality: "London",
          postalCode: "W1W 5PF",
          country: "United Kingdom",
          telephone: "+44 (0) 20 7183 0124",
          email: "info@devopstrioglobal.com"
        }
      }
    ]
  },

  india: {
    code: "india",
    slug: "india",
    name: "India",
    formalName: "Republic of India",
    capital: "New Delhi",
    primaryTimezone: "Asia/Kolkata (IST, UTC+05:30)",
    primaryLanguage: "English (en-IN)",
    currency: "INR (₹)",
    overviewHeading: "India Enterprise Cloud, DevOps & AI Engineering Centers",
    description: "Devopstrio delivers 24/7 cloud engineering, automated DevOps pipelines, Zero-Trust security, and enterprise AI innovation across India. Operating major delivery and corporate centers in Bengaluru, Chennai, and Thoothukudi with nationwide coverage.",
    metaTitle: "India Enterprise Cloud, DevOps & AI Solutions | Devopstrio",
    metaDescription: "Devopstrio delivers enterprise multi-cloud migrations, 24/7 SRE monitoring, Azure/AWS consulting, and Generative AI across Bengaluru, Chennai, Hyderabad, Mumbai, and Delhi NCR.",
    canonicalPath: "/locations/india",
    stats: [
      { value: "24/7/365", label: "Global SRE Operations" },
      { value: "ISO 27001", label: "Certified Delivery Centers" },
      { value: "<15m", label: "Critical Incident Response" },
      { value: "CMMI & SOC-2", label: "Enterprise Security Alignment" }
    ],
    verifiedOffices: [
      {
        city: "Bengaluru",
        type: "corporate-office",
        address: {
          buildingName: "Embassy Golf Links Business Park",
          streetAddress: "Embassy Golf Links Business Park, Off Intermediate Ring Road",
          locality: "Bengaluru",
          regionOrState: "Karnataka",
          postalCode: "560071",
          country: "India",
          telephone: "+91 80 4123 4567",
          email: "info@devopstrioglobal.com",
          googleMapsUrl: "https://maps.app.goo.gl/vdAe8XAb242GweER9"
        }
      },
      {
        city: "Chennai",
        type: "operations-center",
        address: {
          buildingName: "Ground Floor, Primus Building",
          streetAddress: "Door No. SP-7A, Guindy Industrial Estate, SIDCO Industrial Estate",
          locality: "Chennai",
          regionOrState: "Tamil Nadu",
          postalCode: "600032",
          country: "India",
          telephone: "+91 44 6123 4567",
          email: "info@devopstrioglobal.com",
          googleMapsUrl: "https://maps.app.goo.gl/8pytBuRQstcSHqtR7"
        }
      },
      {
        city: "Thoothukudi",
        type: "operations-center",
        address: {
          buildingName: "Rajeev Colony",
          streetAddress: "4/367, Rajeev Colony, Pasuvanthanai",
          locality: "Thoothukudi",
          regionOrState: "Tamil Nadu",
          postalCode: "628718",
          country: "India",
          telephone: "+91 46 1234 5678",
          email: "info@devopstrioglobal.com",
          googleMapsUrl: "https://maps.app.goo.gl/gsrJPp7h2zbzQTPP9"
        }
      }
    ]
  },

  us: {
    code: "us",
    slug: "us",
    name: "United States",
    formalName: "United States of America",
    capital: "Washington, D.C.",
    primaryTimezone: "America/New_York (EST/EDT, CST, MST, PST)",
    primaryLanguage: "English (en-US)",
    currency: "USD ($)",
    overviewHeading: "US Enterprise Cloud Architecture, Managed IT & DevOps Consulting",
    description: "Devopstrio provides enterprise cloud modernization, 24/7 follow-the-sun managed SRE, Zero-Trust compliance, and AI solutions across North America. Operating our sub-regional technology office in Mt. Juliet, Tennessee with nationwide coverage.",
    metaTitle: "USA Enterprise Cloud, DevOps & AI Solutions | Devopstrio",
    metaDescription: "Devopstrio delivers 24/7 managed cloud services, AWS/Azure architecture, Kubernetes automation, and enterprise AI across Nashville, Austin, Dallas, New York, Seattle, and Atlanta.",
    canonicalPath: "/locations/us",
    stats: [
      { value: "24/7/365", label: "Follow-The-Sun SRE" },
      { value: "SOC-2 Type II", label: "Verified Compliance" },
      { value: "<15m", label: "P1 SLA Incident Triage" },
      { value: "HIPAA / FedRAMP", label: "Readiness Frameworks" }
    ],
    verifiedOffices: [
      {
        city: "Mt. Juliet",
        type: "sub-regional-office",
        address: {
          buildingName: "Sub-Regional Office",
          streetAddress: "522 Aventura Dr",
          locality: "Mt. Juliet",
          regionOrState: "Tennessee",
          postalCode: "37122",
          country: "United States",
          telephone: "+1 (615) 555-0199",
          email: "info@devopstrioglobal.com",
          googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=522+Aventura+Dr,+Mt+Juliet,+Tennessee+37122+United+States"
        }
      }
    ]
  }
};
