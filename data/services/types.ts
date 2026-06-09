export interface TechItem {
  name: string;
  desc: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudy {
  title: string;
  desc: string;
  metrics?: Metric[];
  highlights?: string[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface ServiceCapabilityInfo {
  slug: string;
  title: string;
  description: string;
  items?: string[];
}

export interface CapabilityDetail {
  slug: string;
  title: string;
  heroSubtitle: string;
  challenge: string;
  solution: string;
  features: string[];
  benefits: string[];
  deliveryApproach: string[];
  techStack: TechItem[];
  caseStudy: CaseStudy;
  faqs: FAQItem[];
}

export interface ServiceCategory {
  slug: string;
  title: string;
  badge: string;
  subtitle: string;
  overviewHeading: string;
  overviewDesc1: string;
  overviewDesc2: string;
  stats: Metric[];
  capabilities: ServiceCapabilityInfo[];
  outcomes: string[];
  industries: string[];
  techStack: TechItem[];
  deliveryFramework: string[];
  caseStudies: CaseStudy[];
  faqs: FAQItem[];
  ctaTitle: string;
  ctaHighlight: string;
  ctaDesc: string;
  ctaBtnText: string;
}
