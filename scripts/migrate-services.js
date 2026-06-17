const fs = require('fs');
const path = require('path');

const services = [
  'ai-data-innovation',
  'cloud-services',
  'devops-automation',
  'cybersecurity',
  'software-development',
  'digital-transformation',
  'data-engineering',
  'managed-services',
  'qa-testing',
  'it-consulting'
];

const serviceTemplatePath = path.join('scripts', 'service-template.txt');
const capabilityTemplatePath = path.join('scripts', 'capability-template.txt');

const serviceTemplate = fs.readFileSync(serviceTemplatePath, 'utf8');
const capabilityTemplate = fs.readFileSync(capabilityTemplatePath, 'utf8');

services.forEach(service => {
  const serviceDir = path.join('app', 'services', service);
  if (!fs.existsSync(serviceDir)) {
    fs.mkdirSync(serviceDir, { recursive: true });
  }

  // Create Service Category page.tsx
  const serviceContent = serviceTemplate.replace(/__SERVICE__/g, service);
  fs.writeFileSync(path.join(serviceDir, 'page.tsx'), serviceContent);

  // Create Capability [capability] directory
  const capabilityDir = path.join(serviceDir, '[capability]');
  if (!fs.existsSync(capabilityDir)) {
    fs.mkdirSync(capabilityDir, { recursive: true });
  }

  // Create Capability page.tsx
  const capabilityContent = capabilityTemplate.replace(/__SERVICE__/g, service);
  fs.writeFileSync(path.join(capabilityDir, 'page.tsx'), capabilityContent);
});

console.log('Successfully generated separate domain-based category and capability pages for all 10 services.');
