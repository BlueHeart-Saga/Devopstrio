import os
import re

pages = {
    "cisco": {
        "file": r"c:\Sagadevan\Devopstrio\app\ecosystem\partnerships\cisco\page.tsx",
        "color": "sky-500",
        "name": "Cisco",
        "description": "Proven credentials validating our capability to construct secure, high-performance Cisco networks, routing protocols, and firewalls.",
    },
    "google-cloud": {
        "file": r"c:\Sagadevan\Devopstrio\app\ecosystem\partnerships\google-cloud\page.tsx",
        "color": "rose-500",
        "name": "Google Cloud",
        "description": "Proven credentials validating our capability to construct secure, high-performance GCP data architectures, Kubernetes clusters, and AI models.",
    },
    "oracle": {
        "file": r"c:\Sagadevan\Devopstrio\app\ecosystem\partnerships\oracle\page.tsx",
        "color": "rose-500",
        "name": "Oracle",
        "description": "Proven credentials validating our capability to construct secure, high-performance Oracle database architectures, OCI deployments, and enterprise applications.",
    },
    "sap": {
        "file": r"c:\Sagadevan\Devopstrio\app\ecosystem\partnerships\sap\page.tsx",
        "color": "amber-500",
        "name": "SAP",
        "description": "Proven credentials validating our capability to construct secure, high-performance SAP ERP modernizations, analytics environments, and business workflows.",
    },
    "servicenow": {
        "file": r"c:\Sagadevan\Devopstrio\app\ecosystem\partnerships\servicenow\page.tsx",
        "color": "emerald-500",
        "name": "ServiceNow",
        "description": "Proven credentials validating our capability to construct secure, high-performance ServiceNow workflows, ITSM portals, and enterprise integrations.",
    }
}

for key, data in pages.items():
    filepath = data["file"]
    
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    if "CREDENTIALED EXPERT TEAM" in content:
        print(f"Skipping {key} - Certifications JSX already exists.")
        continue
        
    color = data["color"]
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
    
    ret_idx = content.find('return (')
    if ret_idx == -1:
        print(f"Could not find return statement in {key}")
        continue
        
    search_area = content[ret_idx:]
    # Find the first comment that marks a section to insert before
    match = re.search(r'(\{\/\*\s*\d*\.?\s*(?:FAQ|RELATED|TECHNOLOGY ECOSYSTEM|DELIVERY FRAMEWORK|FUTURE OF|BUSINESS VALUE|CUSTOMER SUCCESS|INNOVATION LAB)\b.*\*\/\})', search_area, re.IGNORECASE)
    
    if match:
        insert_jsx_pos = ret_idx + match.start()
        content = content[:insert_jsx_pos] + jsx + "\n" + content[insert_jsx_pos:]
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Successfully updated {key}")
    else:
        print(f"Could not find insert point for JSX in {key}")
