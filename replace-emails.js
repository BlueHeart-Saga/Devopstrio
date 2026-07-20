const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace href="mailto:info@devopstrioglobal.com"
  content = content.replace(/href="mailto:info@devopstrioglobal\.com"/g, 'href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}');
  // Replace href="mailto:info@devopstrio.com"
  content = content.replace(/href="mailto:info@devopstrio\.com"/g, 'href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}');
  
  // Replace >info@devopstrioglobal.com<
  content = content.replace(/>info@devopstrioglobal\.com</g, '>{process.env.NEXT_PUBLIC_CONTACT_EMAIL}<');
  // Replace >info@devopstrio.com<
  content = content.replace(/>info@devopstrio\.com</g, '>{process.env.NEXT_PUBLIC_CONTACT_EMAIL}<');
  
  // Replace string property in objects, e.g. href: "mailto:info@devopstrioglobal.com"
  content = content.replace(/href:\s*"mailto:info@devopstrioglobal\.com"/g, 'href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`');
  content = content.replace(/href:\s*"mailto:info@devopstrio\.com"/g, 'href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`');

  // Replace >INFO@DEVOPSTRIOGLOBAL.COM< if any
  content = content.replace(/>INFO@DEVOPSTRIOGLOBAL\.COM</g, '>{process.env.NEXT_PUBLIC_CONTACT_EMAIL?.toUpperCase()}<');
  content = content.replace(/"INFO@DEVOPSTRIOGLOBAL\.COM"/g, 'process.env.NEXT_PUBLIC_CONTACT_EMAIL?.toUpperCase() || ""');

  // legal@devopstrio.com
  content = content.replace(/href="mailto:legal@devopstrio\.com"/g, 'href={`mailto:${process.env.NEXT_PUBLIC_LEGAL_EMAIL}`}');
  content = content.replace(/>legal@devopstrio\.com</g, '>{process.env.NEXT_PUBLIC_LEGAL_EMAIL}<');
  
  // privacy@devopstrio.com
  content = content.replace(/href="mailto:privacy@devopstrio\.com"/g, 'href={`mailto:${process.env.NEXT_PUBLIC_PRIVACY_EMAIL}`}');
  content = content.replace(/>privacy@devopstrio\.com</g, '>{process.env.NEXT_PUBLIC_PRIVACY_EMAIL}<');
  
  // dpo@devopstrio.com
  content = content.replace(/href="mailto:dpo@devopstrio\.com"/g, 'href={`mailto:${process.env.NEXT_PUBLIC_DPO_EMAIL}`}');
  content = content.replace(/>dpo@devopstrio\.com</g, '>{process.env.NEXT_PUBLIC_DPO_EMAIL}<');
  
  // trust@devopstrio.com
  content = content.replace(/href="mailto:trust@devopstrio\.com"/g, 'href={`mailto:${process.env.NEXT_PUBLIC_TRUST_EMAIL}`}');
  content = content.replace(/>trust@devopstrio\.com</g, '>{process.env.NEXT_PUBLIC_TRUST_EMAIL}<');

  // internship@devopstrioglobal.com
  content = content.replace(/href="mailto:internship@devopstrioglobal\.com"/g, 'href={`mailto:${process.env.NEXT_PUBLIC_INTERNSHIP_EMAIL}`}');
  content = content.replace(/>internship@devopstrioglobal\.com</g, '>{process.env.NEXT_PUBLIC_INTERNSHIP_EMAIL}<');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated: ' + filePath);
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      processFile(filePath);
    }
  }
}

walkDir(path.join(__dirname, 'app'));
walkDir(path.join(__dirname, 'components'));
walkDir(path.join(__dirname, 'sections'));

console.log("Done");
