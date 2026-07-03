import os
import re

pages = {
    "aws": {
        "file": r"c:\Sagadevan\Devopstrio\app\ecosystem\partnerships\aws\page.tsx",
        "color": "amber-500",
        "name": "AWS",
        "description": "Proven credentials validating our capability to construct secure, high-performance AWS cloud architectures, data pipelines, and serverless applications.",
        "certs": """
const certifications = [
  { name: "AWS Certified Solutions Architect", image: "/assets/ecosystem/aws-awards/Group 1000008904.png" },
  { name: "AWS Certified Developer Associate", image: "/assets/ecosystem/aws-awards/Group 1000008905.png" },
  { name: "AWS Certified SysOps Administrator", image: "/assets/ecosystem/aws-awards/Group 1000008906.png" },
  { name: "AWS Certified Data Engineer", image: "/assets/ecosystem/aws-awards/Group 1000008907.png" },
  { name: "AWS Certified Security Specialty", image: "/assets/ecosystem/aws-awards/image 118.png" },
  { name: "AWS Certified Database Specialty", image: "/assets/ecosystem/aws-awards/image 119-Photoroom 1.png" },
  { name: "AWS Certified Machine Learning", image: "/assets/ecosystem/aws-awards/image 119-Photoroom 2.png" }
];
"""
    },
    "cisco": {
        "file": r"c:\Sagadevan\Devopstrio\app\ecosystem\partnerships\cisco\page.tsx",
        "color": "sky-500",
        "name": "Cisco",
        "description": "Proven credentials validating our capability to construct secure, high-performance Cisco networks, routing protocols, and firewalls.",
        "certs": """
const certifications = [
  { name: "CCNA - Certified Network Associate", image: "/assets/ecosystem/Cisco_Awards/image 187.png" },
  { name: "CCNP Enterprise - Certified Network Professional", image: "/assets/ecosystem/Cisco_Awards/image 188.png" },
  { name: "CCIE - Certified Internetwork Expert", image: "/assets/ecosystem/Cisco_Awards/image 189.png" },
  { name: "Cisco Certified DevNet Associate", image: "/assets/ecosystem/Cisco_Awards/image 190.png" },
  { name: "Cisco Certified DevNet Professional", image: "/assets/ecosystem/Cisco_Awards/image 191.png" },
  { name: "Cisco CyberOps Certified Associate", image: "/assets/ecosystem/Cisco_Awards/image 192.png" },
  { name: "Cisco Gold Integrator Partner Award", image: "/assets/ecosystem/Cisco_Awards/image 193.png" }
];
"""
    },
    "google-cloud": {
        "file": r"c:\Sagadevan\Devopstrio\app\ecosystem\partnerships\google-cloud\page.tsx",
        "color": "rose-500",
        "name": "Google Cloud",
        "description": "Proven credentials validating our capability to construct secure, high-performance GCP data architectures, Kubernetes clusters, and AI models.",
        "certs": """
const certifications = [
  { name: "GCP Professional Cloud Architect", image: "/assets/ecosystem/GCP-award/image 130.png" },
  { name: "GCP Professional Data Engineer", image: "/assets/ecosystem/GCP-award/image 131.png" },
  { name: "GCP Professional Cloud Developer", image: "/assets/ecosystem/GCP-award/image 132.png" },
  { name: "GCP Professional Security Engineer", image: "/assets/ecosystem/GCP-award/image 133.png" },
  { name: "GCP Professional Network Engineer", image: "/assets/ecosystem/GCP-award/image 134.png" },
  { name: "GCP Professional DevOps Engineer", image: "/assets/ecosystem/GCP-award/image 135.png" },
  { name: "Google Cloud Partner Advantage", image: "/assets/ecosystem/GCP-award/image 136.png" }
];
"""
    },
    "microsoft": {
        "file": r"c:\Sagadevan\Devopstrio\app\ecosystem\partnerships\microsoft\page.tsx",
        "color": "blue-500",
        "name": "Microsoft",
        "description": "Proven credentials validating our capability to construct secure, high-performance Azure cloud environments, data lakes, and enterprise workspaces.",
        "certs": """
const certifications = [
  { name: "Azure Solutions Architect Expert", image: "/assets/ecosystem/microsofr-awards/Group 1000008903.png" },
  { name: "Azure Developer Associate", image: "/assets/ecosystem/microsofr-awards/image 123.png" },
  { name: "Azure Administrator Associate", image: "/assets/ecosystem/microsofr-awards/image 124.png" },
  { name: "Azure Security Engineer", image: "/assets/ecosystem/microsofr-awards/image 125.png" },
  { name: "Azure Data Engineer Associate", image: "/assets/ecosystem/microsofr-awards/image 126.png" },
  { name: "DevOps Engineer Expert", image: "/assets/ecosystem/microsofr-awards/image 127.png" },
  { name: "Microsoft Solutions Partner", image: "/assets/ecosystem/microsofr-awards/image 128.png" }
];
"""
    },
    "oracle": {
        "file": r"c:\Sagadevan\Devopstrio\app\ecosystem\partnerships\oracle\page.tsx",
        "color": "rose-500",
        "name": "Oracle",
        "description": "Proven credentials validating our capability to construct secure, high-performance Oracle database architectures, OCI deployments, and enterprise applications.",
        "certs": """
const certifications = [
  { name: "OCI Architect Professional", image: "/assets/ecosystem/ORACLE_Awards/Group 1000008908.png" },
  { name: "OCI Developer Associate", image: "/assets/ecosystem/ORACLE_Awards/Group 1000008909.png" },
  { name: "Oracle DB Migration Professional", image: "/assets/ecosystem/ORACLE_Awards/image 154.png" },
  { name: "Autonomous Database Professional", image: "/assets/ecosystem/ORACLE_Awards/image 155.png" },
  { name: "Oracle Cloud Security Professional", image: "/assets/ecosystem/ORACLE_Awards/image 156.png" },
  { name: "Oracle Cloud Operations", image: "/assets/ecosystem/ORACLE_Awards/image 157.png" },
  { name: "Oracle PartnerNetwork Recognized", image: "/assets/ecosystem/ORACLE_Awards/image 158.png" }
];
"""
    },
    "sap": {
        "file": r"c:\Sagadevan\Devopstrio\app\ecosystem\partnerships\sap\page.tsx",
        "color": "amber-500",
        "name": "SAP",
        "description": "Proven credentials validating our capability to construct secure, high-performance SAP ERP modernizations, analytics environments, and business workflows.",
        "certs": """
const certifications = [
  { name: "SAP Technology Associate", image: "/assets/ecosystem/Sap_Awards/Group 1000008910.png" },
  { name: "SAP Development Associate", image: "/assets/ecosystem/Sap_Awards/image 180.png" },
  { name: "SAP Application Associate", image: "/assets/ecosystem/Sap_Awards/image 181.png" },
  { name: "SAP Integration Associate", image: "/assets/ecosystem/Sap_Awards/image 183.png" },
  { name: "SAP Enterprise Architect", image: "/assets/ecosystem/Sap_Awards/image 185.png" },
  { name: "SAP Technology Professional", image: "/assets/ecosystem/Sap_Awards/image 186.png" },
  { name: "SAP Recognized Expertise", image: "/assets/ecosystem/Sap_Awards/image 194-Photoroom 1.png" }
];
"""
    },
    "servicenow": {
        "file": r"c:\Sagadevan\Devopstrio\app\ecosystem\partnerships\servicenow\page.tsx",
        "color": "emerald-500",
        "name": "ServiceNow",
        "description": "Proven credentials validating our capability to construct secure, high-performance ServiceNow workflows, ITSM portals, and enterprise integrations.",
        "certs": """
const certifications = [
  { name: "Certified System Administrator", image: "/assets/ecosystem/Servicenow_Aards/image 164.png" },
  { name: "Certified Application Developer", image: "/assets/ecosystem/Servicenow_Aards/image 165.png" },
  { name: "Implementation Specialist - ITSM", image: "/assets/ecosystem/Servicenow_Aards/image 166.png" },
  { name: "Implementation Specialist - HRSD", image: "/assets/ecosystem/Servicenow_Aards/image 167.png" },
  { name: "Implementation Specialist - CSM", image: "/assets/ecosystem/Servicenow_Aards/image 168.png" },
  { name: "Implementation Specialist - SecOps", image: "/assets/ecosystem/Servicenow_Aards/image 169.png" },
  { name: "ServiceNow Elite Partner", image: "/assets/ecosystem/Servicenow_Aards/image 170.png" }
];
"""
    }
}

for key, data in pages.items():
    filepath = data["file"]
    
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    color_match = re.search(r'<span className="(text-[a-z]+-\d+)[^"]*">Questions</span>', content)
    color = data["color"]
    if color_match:
        color_class = color_match.group(1)
        color = color_class.replace("text-", "")
        
    if "CREDENTIALED EXPERT TEAM" in content:
        print(f"Skipping {key} - Certifications section already exists.")
        continue
        
    # Insert certs below imports (before the first const or function)
    # Finding `const ` or `export default function`
    import_end = content.find('const ')
    if import_end == -1:
        import_end = content.find('export default function')
        
    content = content[:import_end] + data["certs"] + "\n" + content[import_end:]
    
    # Wait, the screenshot actually uses text-rose-500 for the title/eyebrow!
    # Let's use exactly text-rose-500 for "CREDENTIALED EXPERT TEAM" and "Experts" to match the image,
    # but the hover color on the card uses the page's brand color.
    jsx = f'''
      {{/* CERTIFICATIONS */}}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              CREDENTIALED EXPERT TEAM
            </span>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
              Certified {data["name"]} <span className="text-rose-500">Experts</span>
            </h2>
            <p className="text-zinc-300 text-sm md:text-base font-semibold">
              {data["description"]}
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 select-none">
            {{certifications.map((cert) => (
              <div
                key={{cert.name}}
                className="flex flex-col items-center justify-center bg-[#060606] border border-zinc-900 hover:border-{color}/30 rounded-2xl p-6 transition-all duration-300 text-center gap-4 group min-h-[160px]"
              >
                <div className="w-full h-14 md:h-16 flex items-center justify-center mb-2">
                  <img
                    src={{cert.image}}
                    alt={{cert.name}}
                    className="max-h-full max-w-full object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-[10px] md:text-xs font-bold text-white group-hover:text-{color} transition-colors leading-snug">
                  {{cert.name}}
                </h4>
              </div>
            ))}}
          </div>
        </div>
      </section>
'''
    # Find any of these sections to insert before: FAQ ACCORDION, RELATED ECOSYSTEM PAGES, FINAL CTA, RELATED ECOSYSTEM, FAQ
    match = re.search(r'(\{\/\*.*\b(FAQ|RELATED ECOSYSTEM|FINAL CTA)\b.*\*\/\})', content)
    
    if match:
        insert_jsx_pos = match.start()
        content = content[:insert_jsx_pos] + jsx + "\n" + content[insert_jsx_pos:]
    else:
        print(f"Could not find insert point for JSX in {key}")
        
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
        
    print(f"Successfully updated {key}")

