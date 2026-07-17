const fs = require('fs');
const path = require('path');

const products = ['artificial-intelligence', 'cloud-native', 'cybersecurity', 'data-engineering', 'devops-toolchain', 'software-engineering'];

for (const prod of products) {
  const filePath = path.join(process.cwd(), 'app', 'ecosystem', 'technology-stack', prod, 'page.tsx');
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf8');

  // Add import if not exists
  if (!content.includes('import LightRays from')) {
    content = content.replace(/(import React.*?;\n)/, `$1import LightRays from "@/components/ui/LightRays";\n`);
  }

  // Replace old mesh with new mesh and LightRays
  // The old string is exactly:
  // <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
  
  const oldStr = `<div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />`;
  
  const newStr = `<div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
      
      {/* LightRays effect */}
      <div className="absolute inset-x-0 top-0 h-[800px] pointer-events-none z-0 mix-blend-screen opacity-70">
        <LightRays
          raysOrigin="top-center"
          raysColor="#e11d48"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>`;

  if (content.includes(oldStr)) {
    // Only replace the FIRST occurrence (in the hero, not the footer)
    content = content.replace(oldStr, newStr);
    fs.writeFileSync(filePath, content);
    console.log(`Updated rays in ${prod}`);
  } else {
    console.log(`Could not find mesh div in ${prod}`);
  }
}
