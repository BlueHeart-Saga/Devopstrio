const fs = require('fs');

const pages = [
  {
    path: 'app/ecosystem/technology-stack/artificial-intelligence/page.tsx',
    badge: 'Next-Generation AI Solutions',
    titleLine1: 'Enterprise <br />',
    titleLine2: 'Artificial Intelligence',
    subtitle: 'Unleash the power of cognitive computing. We engineer autonomous agent ecosystems, high-performance semantic search, and state-of-the-art generative models to transform your business operations.'
  },
  {
    path: 'app/ecosystem/technology-stack/cloud-native/page.tsx',
    badge: 'Cloud-Native Architecture',
    titleLine1: 'Cloud-Native <br />',
    titleLine2: 'Excellence',
    subtitle: 'Architect borderless scalability. We design resilient microservices, deploy ultra-secure service meshes, and orchestrate seamless multi-cloud environments that power global enterprises.'
  },
  {
    path: 'app/ecosystem/technology-stack/cybersecurity/page.tsx',
    badge: 'Enterprise Security & Trust',
    titleLine1: 'Zero-Trust <br />',
    titleLine2: 'Cybersecurity',
    subtitle: 'Fortify your digital frontiers. We implement military-grade security frameworks, intelligent identity platforms, and automated compliance protocols to keep your enterprise impenetrable.'
  },
  {
    path: 'app/ecosystem/technology-stack/data-engineering/page.tsx',
    badge: 'Data Intelligence Platform',
    titleLine1: 'Advanced Data <br />',
    titleLine2: 'Engineering',
    subtitle: 'Transform raw data into strategic assets. We build hyper-scalable architectures, real-time streaming pipelines, and unified lakehouses that drive intelligent, data-led decisions.'
  },
  {
    path: 'app/ecosystem/technology-stack/devops-toolchain/page.tsx',
    badge: 'Continuous Delivery & Automation',
    titleLine1: 'Next-Gen <br />',
    titleLine2: 'DevOps',
    subtitle: 'Accelerate your software delivery lifecycle. We engineer frictionless CI/CD pipelines, robust GitOps engines, and comprehensive observability stacks for ultimate operational agility.'
  },
  {
    path: 'app/ecosystem/technology-stack/software-engineering/page.tsx',
    badge: 'Product & Platform Engineering',
    titleLine1: 'Elite Software <br />',
    titleLine2: 'Engineering',
    subtitle: 'Crafting flawless digital experiences. We architect stunning Next.js interfaces, lightning-fast backend APIs, and meticulously tested microservices that scale effortlessly.'
  }
];

for (const p of pages) {
  let content = fs.readFileSync(p.path, 'utf8');

  // 1. Add LightRays import if missing
  if (!content.includes('import LightRays from "@/components/ui/LightRays";')) {
    content = content.replace(
      'import { Hero } from "@/components/services/Hero";',
      'import { Hero } from "@/components/services/Hero";\nimport LightRays from "@/components/ui/LightRays";'
    );
  }

  // 2. Increase dotRadius to 3
  content = content.replace(/dotRadius:\s*[\d.]+/, 'dotRadius: 3');

  // 3. Update Hero content
  content = content.replace(/badge="[^"]*"/, `badge="${p.badge}"`);
  content = content.replace(/subtitle="[^"]*"/, `subtitle="${p.subtitle}"`);
  
  // replace title
  const titleRegex = /title=\{\s*<>\s*[^<]*<br \/>\s*<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">\s*[^<]*\s*<\/span>\s*<\/>\s*\}/m;
  const newTitle = `title={
          <>
            ${p.titleLine1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              ${p.titleLine2}
            </span>
          </>
        }`;
  
  content = content.replace(titleRegex, newTitle);

  fs.writeFileSync(p.path, content, 'utf8');
  console.log('Updated ' + p.path);
}
