export interface Metric {
  value: string;
  label: string;
}

export interface TechItem {
  name: string;
  desc: string;
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

export interface EcosystemSubpageInfo {
  slug: string;
  title: string;
  description: string;
  icon?: string;
}

export interface EcosystemSubpageDetail {
  slug: string;
  title: string;
  heroSubtitle: string;
  challenge: string;
  solution: string;
  features: string[];
  benefits: string[];
  techStack: TechItem[];
  caseStudy: CaseStudy;
  faqs: FAQItem[];
}

export interface EcosystemDomain {
  slug: string;
  title: string;
  badge: string;
  subtitle: string;
  overviewHeading: string;
  overviewDesc1: string;
  overviewDesc2: string;
  stats: Metric[];
  subpages: EcosystemSubpageInfo[];
  benefits: string[];
  techStack?: TechItem[];
  caseStudies?: CaseStudy[];
  faqs: FAQItem[];
  ctaTitle: string;
  ctaHighlight: string;
  ctaDesc: string;
  ctaBtnText: string;
}
