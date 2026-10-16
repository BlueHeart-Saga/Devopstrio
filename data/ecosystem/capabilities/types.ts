export interface CapabilityTerminalLog {
  type: "comment" | "step" | "success" | "info";
  text: string;
}

export interface CapabilityPillarSubItem {
  id: string;
  title: string;
  tag: string;
  badge: string;
  latencyBadge: string;
  desc: string;
  stats: string[];
  terminal: {
    command: string;
    status: string;
    logs: CapabilityTerminalLog[];
  };
}

export interface CapabilityPipelineStage {
  step: string;
  title: string;
  tag: string;
  desc: string;
  iconName?: string;
}

export interface CapabilityFeatureCard {
  iconName?: string;
  title: string;
  tags: string[];
  desc: string;
}

export interface CapabilityTechStackGroup {
  category: string;
  items?: string[];
  tools?: string[];
}

export interface CapabilityFaq {
  q: string;
  a: string;
}

export interface CapabilityPageData {
  slug: string;
  pillarSlug: string;
  pillarName: string;
  title: string;
  tag: string;
  badge: string;
  subtitle: string;
  tagline?: string;
  description?: string;
  primaryMetric?: { value: string; label: string; detail: string };
  heroStats?: { label: string; value: string; detail: string }[];
  terminalCommand?: string;
  terminalOutput?: string[];
  metrics: { val: string; label: string; sub: string }[];
  capabilities: CapabilityPillarSubItem[];
  pipelineStages: CapabilityPipelineStage[];
  featureCards: CapabilityFeatureCard[];
  techStack: CapabilityTechStackGroup[];
  beforeVsAfter: {
    beforeTitle: string;
    beforePoints: string[];
    afterTitle: string;
    afterPoints: string[];
  };
  faqs: CapabilityFaq[];
}
