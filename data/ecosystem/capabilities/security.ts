import { CapabilityPageData } from "./types";

export const securityCapabilities: Record<string, CapabilityPageData> = {
  "security-assessments": {
    slug: "security-assessments",
    pillarSlug: "cybersecurity",
    pillarName: "Cybersecurity",
    title: "Security Assessments",
    tag: "Threat Intelligence",
    badge: "Cloud Penetration Testing & Perimeter Audits",
    subtitle: "Identify exploitable vulnerabilities before adversaries do. Comprehensive cloud security posture management (CSPM), network penetration testing, and red team threat simulations.",
    metrics: [
      { val: "100%", label: "Attack Surface Discovery", sub: "External & internal perimeter mapping" },
      { val: "0", label: "Critical Vulnerabilities Unmitigated", sub: "Risk-based remediation playbooks" },
      { val: "CIS v8", label: "Benchmark Compliance", sub: "AWS, Azure & GCP hardening" },
      { val: "24/7", label: "Continuous Posture Evaluation", sub: "Automated CSPM security scans" }
    ],
    capabilities: [
      {
        id: "cloud-penetration-testing",
        title: "Cloud & API Penetration Testing",
        tag: "Offensive Security",
        badge: "CREST & OSCP Certified",
        latencyBadge: "Zero Production Impact",
        desc: "Executes rigorous manual and automated penetration testing across multi-cloud environments, Kubernetes clusters, and authenticated REST/GraphQL APIs.",
        stats: [
          "Identifies complex business logic bypasses that automated vulnerability scanners miss",
          "Tests IAM privilege escalation paths and multi-tenant lateral movement vectors",
          "Delivers executive summary and technical remediation code snippets with proof-of-concept"
        ],
        terminal: {
          command: "redteam.pentest({ target: 'api.devopstrio.co.uk', scope: 'AUTH_API_V3' })",
          status: "ASSESSMENT COMPLETE (0 CRITICAL)",
          logs: [
            { type: "comment", text: "// Running authenticated API penetration test" },
            { type: "step", text: "> tested 148 endpoints for BOLA/IDOR object-level authorization" },
            { type: "step", text: "> simulated JWT token forgery and key confusion attack vectors" },
            { type: "success", text: "> zero privilege escalation paths found; report compiled" }
          ]
        }
      },
      {
        id: "continuous-cspm-scanning",
        title: "Continuous Cloud Security Posture Management (CSPM)",
        tag: "Posture Governance",
        badge: "Wiz & Prisma Cloud",
        latencyBadge: "Hourly Configuration Audit",
        desc: "Continuously audits cloud infrastructure across AWS, Azure, and GCP against CIS Benchmarks, NIST CSF, and ISO 27001 standards to prevent misconfigurations.",
        stats: [
          "Detects publicly accessible S3 buckets, open security groups, and unencrypted databases",
          "Correlates toxic combinations of vulnerabilities, network exposures, and high-privilege IAM",
          "Automated Slack alerting with one-click Terraform auto-remediation snippets"
        ],
        terminal: {
          command: "cspm.scan_environment({ cloud: 'aws', framework: 'CIS_AWS_V3' })",
          status: "COMPLIANCE SCORE: 98.4%",
          logs: [
            { type: "comment", text: "// Evaluating cloud resource configurations" },
            { type: "step", text: "> audited 420 cloud assets across 4 production VPCs" },
            { type: "step", text: "> detected 1 medium risk: unattached EBS volume missing KMS tag" },
            { type: "success", text: "> toxic risk combinations: 0 detected | perimeter secure" }
          ]
        }
      },
      {
        id: "attack-surface-management",
        title: "External Attack Surface Management (EASM)",
        tag: "Perimeter Defense",
        badge: "Continuous Asset Discovery",
        latencyBadge: "Real-Time Recon",
        desc: "Continuously maps all internet-facing domains, IP blocks, SSL certificates, and cloud storage buckets to identify rogue shadow IT assets and abandoned endpoints.",
        stats: [
          "Discovers forgotten development subdomains and abandoned staging APIs before attackers find them",
          "Monitors domain reputations, DNS hijacking risks, and expiring SSL/TLS certificates",
          "Sub-minute alerts when new internet-facing services are launched in corporate cloud accounts"
        ],
        terminal: {
          command: "easm.discover_perimeter({ root_domain: 'devopstrio.co.uk' })",
          status: "PERIMETER MAPPED (42 HOSTS)",
          logs: [
            { type: "comment", text: "// Running passive & active DNS asset reconnaissance" },
            { type: "step", text: "> discovered 42 active subdomains across Cloudflare and AWS Route53" },
            { type: "step", text: "> validated SSL certificates: 100% valid with TLS 1.3 enforced" },
            { type: "success", text: "> zero exposed administrative ports (RDP, SSH, Redis) detected" }
          ]
        }
      },
      {
        id: "threat-modeling-strides",
        title: "Architectural Threat Modeling (STRIDE)",
        tag: "Secure Architecture",
        badge: "STRIDE Framework",
        latencyBadge: "Design-Phase Security",
        desc: "Evaluates system architecture diagrams before code is written, systematically identifying threat vectors (Spoofing, Tampering, Repudiation, Information Disclosure, DoS, Elevation of Privilege).",
        stats: [
          "Embeds security architects directly into software design sprints",
          "Identifies structural attack vectors in microservice topologies and third-party data flows",
          "Generates prioritized risk registers and actionable mitigation blueprints"
        ],
        terminal: {
          command: "threat_model.evaluate({ architecture_dag: 'payment_gateway_v2.json' })",
          status: "THREAT REGISTER COMPILED",
          logs: [
            { type: "comment", text: "// Applying STRIDE security taxonomy analysis" },
            { type: "step", text: "> analyzed trust boundaries between public Ingress and Payment Worker" },
            { type: "step", text: "> identified mitigation: enforce mTLS on internal event bus" },
            { type: "success", text: "> mitigation blueprint generated and linked to Jira epic" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Asset Discovery", tag: "EASM Scan", desc: "Maps all internet-facing endpoints, cloud accounts, and IP ranges.", iconName: "Search" },
      { step: "02", title: "Vulnerability Scan", tag: "CSPM / Nessus", desc: "Scans cloud configurations and network ports against CIS Benchmarks.", iconName: "Shield" },
      { step: "03", title: "Manual Pentest", tag: "Ethical Hacking", desc: "CREST-certified engineers attempt realistic business logic and auth exploits.", iconName: "Terminal" },
      { step: "04", title: "Risk Scoring", tag: "CVSS v3.1", desc: "Scores findings by business criticality, exploitability, and exposure.", iconName: "Activity" },
      { step: "05", title: "Remediation", tag: "IaC PR Fixes", desc: "Delivers direct Terraform PRs and verifies fixes with automated re-scans.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Shield", title: "Cloud Penetration Testing", tags: ["CREST Certified", "OWASP Top 10", "Zero Downtime"], desc: "Expose complex business logic bugs, auth flaws, and privilege escalation vulnerabilities with rigorous ethical hacking assessments." },
      { iconName: "Activity", title: "Continuous CSPM Auditing", tags: ["Wiz", "Prisma Cloud", "CIS Benchmarks"], desc: "Continuously scan multi-cloud configurations across AWS, Azure, and GCP, catching open storage buckets and insecure network rules in real-time." },
      { iconName: "Search", title: "External Attack Surface Mapping", tags: ["EASM", "Shadow IT", "DNS Monitoring"], desc: "Discover rogue shadow IT assets, expired certificates, and forgotten staging domains across your organization before adversaries locate them." },
      { iconName: "Layers", title: "STRIDE Threat Modeling", tags: ["STRIDE", "Architecture Review", "Shift-Left"], desc: "Analyze application architecture diagrams before code is built to eliminate fundamental security and privacy flaws at the design stage." },
      { iconName: "Lock", title: "Automated Remediation Code", tags: ["Terraform PRs", "Fast Fixes", "Actionable Guidance"], desc: "Don't just receive 200-page PDF reports. Receive direct Terraform and Kubernetes pull requests that remediate identified vulnerabilities immediately." },
      { iconName: "ShieldCheck", title: "Regulatory Compliance Readiness", tags: ["SOC2 Type II", "ISO 27001", "PCI-DSS 4.0"], desc: "Verify that your cloud environments strictly satisfy compliance mandates, with verifiable penetration testing certificates for enterprise auditors." }
    ],
    techStack: [
      { category: "Cloud Security (CSPM)", items: ["Wiz", "Palo Alto Prisma Cloud", "Orca Security", "AWS Security Hub"] },
      { category: "Penetration Testing Tools", items: ["Burp Suite Professional", "Metasploit", "OWASP ZAP", "Nmap", "Wireshark"] },
      { category: "Attack Surface Recon", items: ["Amass", "Shodan", "Censys", "ProjectDiscovery (Subfinder/Nuclei)"] },
      { category: "Vulnerability Scanning", items: ["Tenable Nessus", "Qualys VMDR", "OpenVAS", "Trivy"] },
      { category: "Threat Modeling", items: ["OWASP Threat Dragon", "Microsoft Threat Modeling Tool", "IriusRisk"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Annual Checkbox Audits",
      beforePoints: [
        "Running a single annual vulnerability scan that misses 11 months of new cloud exposures.",
        "Receiving dense 150-page PDF reports with zero actionable code guidance for developers.",
        "Rogue shadow IT staging servers sitting on the public web with default credentials.",
        "Security teams seen as a bottleneck that halts releases right before go-live."
      ],
      afterTitle: "Devopstrio Continuous Security Assessments",
      afterPoints: [
        "Continuous 24/7 CSPM monitoring scanning cloud infrastructure every single hour.",
        "Actionable remediation code and direct pull requests fixing issues in minutes.",
        "Complete attack surface discovery mapping 100% of public domains and cloud endpoints.",
        "Design-phase STRIDE threat modeling eliminating security flaws before code is even written."
      ]
    },
    faqs: [
      { q: "How often should our enterprise conduct penetration testing?", a: "Industry best practices (and standards like SOC2 and PCI-DSS) require annual penetration tests, as well as testing after any significant infrastructure or architectural change. In addition to manual penetration tests, continuous automated CSPM scanning should run 24/7." },
      { q: "Will penetration testing cause downtime to our live production systems?", a: "No. Our certified ethical hackers strictly adhere to non-destructive rules of engagement. Testing can be coordinated during off-peak hours or executed against an identical staging environment to guarantee zero disruption to your business." },
      { q: "What is the difference between vulnerability scanning and penetration testing?", a: "Vulnerability scanning is an automated script looking for known outdated software versions (CVEs). Penetration testing involves skilled human ethical hackers chaining together subtle business logic flaws, permission oversights, and API bugs that automated scanners are incapable of detecting." },
      { q: "What is a 'toxic risk combination' in cloud security?", a: "A single misconfiguration (like an outdated web package) might be low risk. But when combined with a public internet IP and an overly permissive IAM role with S3 write access, it forms a 'toxic combination' that allows an attacker to breach your core data lake. Modern CSPMs prioritize these lethal multi-step attack paths." },
      { q: "Do you provide proof of remediation after we fix the discovered bugs?", a: "Yes. Once your engineering team applies the fixes, we conduct a free re-test verification and issue an official signed Attestation of Penetration Testing report that you can provide directly to your clients, insurance carriers, and compliance auditors." }
    ]
  },

  "devsecops-pipelines": {
    slug: "devsecops-pipelines",
    pillarSlug: "cybersecurity",
    pillarName: "Cybersecurity",
    title: "DevSecOps Pipelines",
    tag: "Shift-Left Security",
    badge: "Automated SAST, DAST, SCA & Secret Scanning",
    subtitle: "Embed security seamlessly into every pull request. Automated static analysis, software composition analysis, dynamic container testing, and cryptographic image signing.",
    metrics: [
      { val: "0", label: "Production Secret Leaks", sub: "Pre-commit & CI secret gates" },
      { val: "< 3min", label: "Security Scan Pipeline Overhead", sub: "Delta incremental scanning" },
      { val: "100%", label: "Container SBOM Generation", sub: "CycloneDX / SPDX standards" },
      { val: "88%", label: "Vulnerability Remediation Velocity", sub: "Automated pull request fixes" }
    ],
    capabilities: [
      {
        id: "sast-code-analysis",
        title: "Static Application Security Testing (SAST)",
        tag: "Code Scanning",
        badge: "Semgrep & SonarQube",
        latencyBadge: "Pull Request Delta Scans",
        desc: "Scans source code on every pull request for SQL injection, cross-site scripting (XSS), insecure deserialization, and memory safety flaws using Semgrep and SonarQube.",
        stats: [
          "Custom enterprise rules enforcing organization-specific secure coding standards",
          "Scans only modified code lines (delta scans) to prevent slowing down developer velocity",
          "Inline PR comments providing developers with exact, copy-pasteable code fixes"
        ],
        terminal: {
          command: "semgrep.scan({ target: 'src/', config: 'p/security-audit' })",
          status: "PULL REQUEST SCAN PASSED (0 ERRORS)",
          logs: [
            { type: "comment", text: "// Running semantic AST security pattern matching" },
            { type: "step", text: "> scanned 42 files across Go, TypeScript, and Python in 4.2s" },
            { type: "step", text: "> rule: sql-injection-risk: verified all queries use prepared statements" },
            { type: "success", text: "> 100% clean: zero OWASP Top 10 security regressions found" }
          ]
        }
      },
      {
        id: "sca-dependency-governance",
        title: "Software Composition Analysis (SCA) & SBOM",
        tag: "Supply Chain",
        badge: "Snyk & Dependency-Check",
        latencyBadge: "Zero Vulnerable Packages",
        desc: "Inspects open-source dependencies (npm, PyPI, Maven, Go modules) for known CVEs, malicious packages, and incompatible software licenses before deployment.",
        stats: [
          "Generates cryptographically signed Software Bill of Materials (SBOM) on every build",
          "Automated Dependabot/Renovate PRs upgrading vulnerable packages automatically",
          "Blocks high-risk open-source copyleft licenses (like GPL-3.0) from entering proprietary apps"
        ],
        terminal: {
          command: "snyk.test({ all_projects: true, severity_threshold: 'high' })",
          status: "DEPENDENCY SCAN PASSED",
          logs: [
            { type: "comment", text: "// Checking package manifests against Snyk vulnerability database" },
            { type: "step", text: "> analyzed 482 direct and transitive third-party dependencies" },
            { type: "step", text: "> verified license compliance: MIT, Apache-2.0, BSD only" },
            { type: "success", text: "> zero critical or high vulnerabilities detected in supply chain" }
          ]
        }
      },
      {
        id: "secret-detection-prevent",
        title: "Pre-Commit & CI/CD Secret Detection",
        tag: "Credential Protection",
        badge: "Gitleaks & Trufflehog",
        latencyBadge: "< 1s Pre-Commit Hook",
        desc: "Stops API keys, private certificates, AWS credentials, and database passwords from ever entering Git repositories using pre-commit hooks and CI scanner tripwires.",
        stats: [
          "Runs locally via pre-commit hooks, rejecting git commits before they leave developer laptops",
          "Scans full git commit history detecting historical secrets that were deleted but remain in git logs",
          "Automated immediate secret revocation webhooks if an active key is ever detected"
        ],
        terminal: {
          command: "gitleaks.detect({ source: './git-repo', verbose: true })",
          status: "ZERO SECRETS LEAKED",
          logs: [
            { type: "comment", text: "// Scanning unpushed commits and staged files" },
            { type: "step", text: "> evaluated 140 regex rules covering AWS, Stripe, GitHub, OpenAI keys" },
            { type: "step", text: "> verified entropy analysis: zero high-entropy secret patterns" },
            { type: "success", text: "> commit approved for push to remote repository" }
          ]
        }
      },
      {
        id: "dast-dynamic-fuzzing",
        title: "Dynamic Application Security Testing (DAST)",
        tag: "Runtime Testing",
        badge: "OWASP ZAP & StackHawk",
        latencyBadge: "Live Endpoint Testing",
        desc: "Attacks live staging environments dynamically, injecting SQL payloads, cross-site scripting fuzzing, and header manipulations to verify runtime defenses.",
        stats: [
          "Automated DAST execution triggered automatically upon deployment to staging environments",
          "Validates security headers (Content-Security-Policy, HSTS, X-Frame-Options)",
          "Reports actionable reproduction curl commands for any discovered runtime vulnerability"
        ],
        terminal: {
          command: "dast_runner.scan({ target_url: 'https://staging.internal.api', openapi: 'spec.json' })",
          status: "DAST RUN COMPLETE (0 VULNERABILITIES)",
          logs: [
            { type: "comment", text: "// Executing dynamic API fuzzing against OpenAPI endpoints" },
            { type: "step", text: "> fuzzed 84 endpoints with 14,200 malicious payload permutations" },
            { type: "step", text: "> verified CORS origin policies and strict HSTS security headers" },
            { type: "success", text: "> zero runtime injection or authentication bypass flaws discovered" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Pre-Commit Hook", tag: "Gitleaks", desc: "Blocks accidental commits containing API keys or private certificates locally.", iconName: "Lock" },
      { step: "02", title: "SAST Code Scan", tag: "Semgrep / SonarQube", desc: "Analyzes pull request code diffs for security vulnerabilities and code flaws.", iconName: "Code2" },
      { step: "03", title: "SCA Supply Chain", tag: "Snyk / Trivy", desc: "Inspects third-party open-source dependencies for known CVEs and licenses.", iconName: "Database" },
      { step: "04", title: "DAST Runtime", tag: "OWASP ZAP", desc: "Attacks running staging environments with automated dynamic payload fuzzing.", iconName: "Activity" },
      { step: "05", title: "Signed Artifact", tag: "Sigstore Cosign", desc: "Cryptographically signs container digest and attaches SBOM before deployment.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Code2", title: "Automated Pull Request SAST", tags: ["Semgrep", "SonarQube", "Inline Fixes"], desc: "Catch security flaws directly within developer pull request reviews with actionable inline comments and copy-pasteable code fixes." },
      { iconName: "Database", title: "Supply Chain & SBOM Security", tags: ["Snyk", "CycloneDX", "License Compliance"], desc: "Audit every open-source package inside your containers, generating signed Software Bill of Materials documents that satisfy federal standards." },
      { iconName: "Lock", title: "Pre-Commit Secret Prevention", tags: ["Gitleaks", "TruffleHog", "Zero Leaks"], desc: "Block API keys, tokens, and database passwords from ever leaving developer laptops with lightning-fast pre-commit scanning hooks." },
      { iconName: "Activity", title: "Dynamic Runtime DAST Fuzzing", tags: ["OWASP ZAP", "StackHawk", "API Fuzzing"], desc: "Test running staging microservices dynamically against thousands of attack vectors, validating that firewall and runtime headers operate properly." },
      { iconName: "Zap", title: "Sub-3 Minute Pipeline Overhead", tags: ["Delta Scanning", "PR Caching", "Developer Velocity"], desc: "Never let security slow down releases. Our incremental scanners inspect only modified code files, finishing scans in minutes." },
      { iconName: "ShieldCheck", title: "Cryptographic Image Attestation", tags: ["Sigstore Cosign", "SLSA Level 3", "Provenance"], desc: "Sign every production container image cryptographically to guarantee that only code built by your approved CI pipeline can run in Kubernetes." }
    ],
    techStack: [
      { category: "SAST (Static Analysis)", items: ["Semgrep", "SonarQube Enterprise", "Checkmarx", "CodeQL"] },
      { category: "SCA (Supply Chain)", items: ["Snyk Open Source", "Trivy", "OWASP Dependency-Check", "Socket.dev"] },
      { category: "Secret Scanning", items: ["Gitleaks", "TruffleHog", "GitHub Secret Scanning", "1Password CLI"] },
      { category: "DAST (Dynamic Analysis)", items: ["OWASP ZAP", "StackHawk", "Nuclei", "Burp Suite CI"] },
      { category: "Signing & Provenance", items: ["Sigstore Cosign", "In-Toto Attestations", "SLSA Framework"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Bolted-On Late Security",
      beforePoints: [
        "Discovering critical vulnerabilities right before a scheduled production go-live.",
        "Leaked API keys committed to public GitHub repositories requiring emergency rotations.",
        "Zero awareness of vulnerable third-party open-source packages in production containers.",
        "Developers viewing security as an obstruction that slows down product feature shipping."
      ],
      afterTitle: "Devopstrio Automated DevSecOps",
      afterPoints: [
        "Automated security scans running seamlessly inside every developer pull request in <3 mins.",
        "Pre-commit hooks intercepting and blocking secret leaks before they leave local laptops.",
        "Automated SCA and SBOM generation tracking 100% of open-source software dependencies.",
        "Developers empowered with copy-pasteable code fixes, fostering an engineering security culture."
      ]
    },
    faqs: [
      { q: "What is the difference between SAST and DAST in a CI/CD pipeline?", a: "SAST (Static Application Security Testing) analyzes raw source code without executing it, catching syntax flaws, SQL injection patterns, and logic bugs in pull requests. DAST (Dynamic Application Security Testing) attacks the running application from the outside, testing live HTTP endpoints, authentication headers, and network behavior." },
      { q: "Will automated security scans slow down our developers' pull requests?", a: "No. We implement delta scanning and caching (via tools like Semgrep and Trivy). Rather than re-scanning millions of lines of unchanged code, the scanner inspects only the specific lines changed in the pull request, completing scans in under 3 minutes." },
      { q: "How do you prevent false positives from annoying developers?", a: "We curate and tune rule sets specifically to your technology stack, disabling noisy or low-confidence heuristics. High-severity blocking rules are reserved only for genuine, verifiable security flaws (like raw SQL concatenation or hardcoded private keys)." },
      { q: "What happens if a developer commits an API key by accident?", a: "Our pre-commit hooks (Gitleaks) block the commit locally before it leaves the developer's computer. If someone bypasses the local hook, the CI server catches the key, fails the build, blocks the merge, and can trigger automated key invalidation webhooks." },
      { q: "What is SLSA (Supply-chain Levels for Software Artifacts)?", a: "SLSA is a security framework created by Google to prevent software supply chain tampering. By integrating SLSA Level 3 practices, our pipelines cryptographically sign builds with Cosign, proving that production container images were built from an un-tampered Git commit by an approved CI runner." }
    ]
  },

  "identity-access-management": {
    slug: "identity-access-management",
    pillarSlug: "cybersecurity",
    pillarName: "Cybersecurity",
    title: "Identity & Access Management (IAM)",
    tag: "Access Governance",
    badge: "Okta, Keycloak & Zero-Trust SSO",
    subtitle: "Centralize enterprise authentication, authorization, and lifecycle management. Built on Okta, Keycloak, passkey biometric MFA, fine-grained RBAC/ABAC, and least-privilege cloud roles.",
    metrics: [
      { val: "100%", label: "MFA Enforcement", sub: "Phishing-resistant FIDO2 passkeys" },
      { val: "0", label: "Orphaned Employee Accounts", sub: "Automated SCIM deprovisioning" },
      { val: "< 1hr", label: "JIT Temporary Privilege Window", sub: "Just-in-Time access elevation" },
      { val: "Full", label: "Cross-Cloud Role Federation", sub: "AWS, Azure & GCP unified IAM" }
    ],
    capabilities: [
      {
        id: "sso-federation-passkeys",
        title: "Enterprise SSO & FIDO2 Phishing-Resistant MFA",
        tag: "Authentication",
        badge: "WebAuthn & Passkeys",
        latencyBadge: "< 2s Single Sign-On",
        desc: "Unifies enterprise authentication across all corporate web applications and developer tools with single sign-on (SSO), SAML 2.0 / OIDC federation, and hardware-backed FIDO2 passkeys.",
        stats: [
          "Eliminates SMS and authenticator app OTPs vulnerable to adversary-in-the-middle phishing",
          "Seamless hardware-backed biometric login using TouchID, Windows Hello, and YubiKeys",
          "Adaptive risk-based authentication prompting for step-up verification during anomalous logins"
        ],
        terminal: {
          command: "auth_gateway.authenticate({ user: 'sarah.cfo@enterprise.com', method: 'WEBAUTHN' })",
          status: "AUTHENTICATED (FIDO2 PASSED)",
          logs: [
            { type: "comment", text: "// Processing cryptographic WebAuthn assertion" },
            { type: "step", text: "> validated hardware YubiKey 5C signature against public key" },
            { type: "step", text: "> risk engine: IP, device fingerprint, and geolocation normal" },
            { type: "success", text: "> issued short-lived OIDC session token (valid 8 hours)" }
          ]
        }
      },
      {
        id: "scim-automated-lifecycle",
        title: "Automated SCIM Employee Onboarding & Deprovisioning",
        tag: "Identity Lifecycle",
        badge: "SCIM 2.0 Protocol",
        latencyBadge: "Instant Revocation",
        desc: "Synchronizes user identities automatically from your HR software (Workday, BambooHR, HiBob) to all cloud services via SCIM, instantly revoking access the second an employee departs.",
        stats: [
          "Zero orphaned accounts left active after employee departure, eliminating insider threat risks",
          "Automated role provisioning assigning new hires to exact GitHub, AWS, and Slack groups on Day 1",
          "Bi-directional user directory synchronization maintaining real-time employee status"
        ],
        terminal: {
          command: "scim_controller.deprovision_user({ email: 'ex_employee@enterprise.com' })",
          status: "ACCESS REVOKED (14 PLATFORMS)",
          logs: [
            { type: "comment", text: "// Triggering automated employee departure workflow" },
            { type: "step", text: "> revoked active SSO session tokens in Okta / Keycloak" },
            { type: "step", text: "> removed from GitHub Enterprise organization and AWS IAM roles" },
            { type: "success", text: "> suspended Google Workspace, Slack, and Salesforce accounts (0.4s)" }
          ]
        }
      },
      {
        id: "just-in-time-cloud-access",
        title: "Just-In-Time (JIT) Cloud Privileged Access",
        tag: "Least Privilege",
        badge: "Temporary Elevation",
        latencyBadge: "< 60m Ephemeral Access",
        desc: "Enforces true least privilege by granting production cloud access only on-demand with automated peer approvals and strict time-to-live expiration windows.",
        stats: [
          "Developers hold zero permanent production cloud credentials or SSH keys",
          "Temporary role assumption (e.g., 60 minutes) requested via Slack and approved by senior leads",
          "Full session recording and audit logging capturing every command executed during elevation"
        ],
        terminal: {
          command: "access_broker.request_jit({ role: 'AWS_Production_Breakglass', duration: '60m' })",
          status: "APPROVED BY LEAD SRE (EXPIRES 14:30)",
          logs: [
            { type: "comment", text: "// Elevating temporary production access" },
            { type: "step", text: "> approval received from @sre-lead in #jit-approvals" },
            { type: "step", text: "> assumed temporary AWS STS role (SessionToken issued)" },
            { type: "success", text: "> session termination timer started: auto-revokes in 60 minutes" }
          ]
        }
      },
      {
        id: "fine-grained-rbac-abac",
        title: "Fine-Grained Authorization (RBAC & ABAC)",
        tag: "Authorization Engine",
        badge: "OpenFGA & Cedar",
        latencyBadge: "< 5ms Policy Check",
        desc: "Implements Google Zanzibar-inspired relationship-based access control (ReBAC) and attribute-based access control (ABAC), managing complex multi-tenant resource permissions.",
        stats: [
          "Sub-5ms authorization checks evaluating user roles, project membership, and IP geography",
          "Decouples permission logic from application code, centralizing authorization rules",
          "Easily models complex permissions like 'Editor on Folder X gives View access to Document Y'"
        ],
        terminal: {
          command: "openfga.check({ user: 'usr_892', relation: 'can_edit', object: 'document_412' })",
          status: "ALLOWED: TRUE",
          logs: [
            { type: "comment", text: "// Evaluating relationship graph in OpenFGA" },
            { type: "step", text: "> user is member of team 'Finance_UK'" },
            { type: "step", text: "> team 'Finance_UK' is editor of parent workspace 'Q2_Budget'" },
            { type: "success", text: "> authorization check evaluated in 2.8ms" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "FIDO2 Auth", tag: "Passkey Verification", desc: "User authenticates using hardware biometric credentials (YubiKey / TouchID).", iconName: "Key" },
      { step: "02", title: "Adaptive Risk", tag: "Context Engine", desc: "Risk engine evaluates IP address, device security posture, and anomalous behavior.", iconName: "ShieldCheck" },
      { step: "03", title: "SCIM Provision", tag: "Directory Sync", desc: "Synchronizes user group memberships and attribute roles from HR directory.", iconName: "RefreshCw" },
      { step: "04", title: "JIT Elevation", tag: "Temporary STS", desc: "Grants short-lived, approved administrative cloud permissions on-demand.", iconName: "Lock" },
      { step: "05", title: "Audit Log", tag: "SIEM Ingestion", desc: "Streams cryptographic authentication and authorization events to centralized SIEM.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Key", title: "FIDO2 Phishing-Resistant MFA", tags: ["WebAuthn", "Passkeys", "YubiKey"], desc: "Eliminate credential theft and SMS interception attacks by deploying phishing-resistant biometric FIDO2 passkeys across your entire workforce." },
      { iconName: "RefreshCw", title: "Automated SCIM Employee Lifecycle", tags: ["SCIM 2.0", "Workday Sync", "Zero Orphan Accounts"], desc: "Automate user onboarding and termination. Revoke access across all cloud applications in seconds when an employee departs." },
      { iconName: "Lock", title: "Just-In-Time (JIT) Cloud Access", tags: ["Temporary Elevation", "No Static Keys", "Slack Approvals"], desc: "Enforce least privilege by eliminating permanent production permissions. Grant short-lived administrative access only when requested and approved." },
      { iconName: "Sliders", title: "Fine-Grained Authorization (OpenFGA)", tags: ["OpenFGA", "Zanzibar Model", "ReBAC / ABAC"], desc: "Decouple access rules from your application code using centralized relationship-based authorization engines that resolve permissions in <5ms." },
      { iconName: "Globe", title: "Cross-Cloud Role Federation", tags: ["AWS IAM", "Azure Entra ID", "OIDC Federation"], desc: "Federate access across AWS, Azure, and Google Cloud with unified single sign-on, ensuring consistent security boundaries across multi-cloud environments." },
      { iconName: "Activity", title: "Privileged Access Session Recording", tags: ["Teleport", "Audit Recording", "Full Replay"], desc: "Record every SSH terminal session, database query, and Kubernetes command executed by engineers during privileged access sessions for complete compliance." }
    ],
    techStack: [
      { category: "Identity Providers (IdP)", items: ["Okta Enterprise", "Keycloak", "Microsoft Entra ID (Azure AD)", "Ping Identity"] },
      { category: "Privileged Access Management (PAM)", items: ["Teleport", "HashiCorp Boundary", "CyberArk", "Apono JIT"] },
      { category: "Authorization Engines", items: ["OpenFGA (Fine-Grained)", "Ory Keto", "Permit.io", "AWS Cedar"] },
      { category: "Protocols & Standards", items: ["OIDC / OAuth 2.0", "SAML 2.0", "SCIM 2.0", "FIDO2 / WebAuthn"] },
      { category: "Directory & HR Sync", items: ["Workday", "BambooHR", "Active Directory (LDAP)", "Google Workspace"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Sprawling Passwords & Permanent Access",
      beforePoints: [
        "Employees using weak, reused passwords vulnerable to credential stuffing attacks.",
        "Departed employees maintaining active cloud accounts weeks after termination.",
        "Developers holding permanent 24/7 administrator access to production databases.",
        "Scattered, inconsistent authorization logic hardcoded directly inside microservices."
      ],
      afterTitle: "Devopstrio Modern IAM Platform",
      afterPoints: [
        "Phishing-resistant FIDO2 biometric authentication stopping credential theft cold.",
        "Automated SCIM deprovisioning revoking 100% of access the second an employee leaves.",
        "Just-in-Time ephemeral role assumption granting temporary access only with approval.",
        "Centralized OpenFGA authorization engine enforcing sub-5ms permissions checks."
      ]
    },
    faqs: [
      { q: "Why are SMS and mobile authenticator apps no longer considered secure for MFA?", a: "Adversaries now use automated 'Adversary-in-the-Middle' (AiTM) proxy kits that steal session cookies and intercept 6-digit OTP codes in real time. FIDO2 / WebAuthn passkeys are cryptographically bound to the browser's exact domain URL, making phishing mathematically impossible." },
      { q: "What is SCIM and why is it critical for enterprise security?", a: "SCIM (System for Cross-domain Identity Management) is an open standard that connects your HR software (like Workday) with your corporate identity provider. When an employee is marked as terminated in HR, SCIM automatically suspends their accounts in AWS, GitHub, Slack, and Google in seconds, eliminating insider threats." },
      { q: "How does Just-In-Time (JIT) access work for production debugging?", a: "Engineers have zero permanent write access to production. When an incident occurs, an engineer types `/access request prod-db` in Slack with a ticket number. A lead approves the request, and the broker grants a temporary 60-minute cloud role that automatically revokes itself once the window expires." },
      { q: "Can we use Keycloak instead of commercial tools like Okta?", a: "Yes. Keycloak is a powerful, open-source, CNCF-maintained identity provider that supports SSO, SAML, OIDC, and multi-tenancy. We frequently deploy and manage hardened Keycloak clusters on Kubernetes for clients requiring air-gapped on-premise authentication." },
      { q: "What is Google Zanzibar and how does OpenFGA use it?", a: "Zanzibar is Google's global authorization system powering Google Drive and YouTube. OpenFGA is the open-source implementation. Instead of simple role checks, it models relationships (e.g., 'User A is a member of Team B, which has read access to Folder C'), answering complex permission checks in sub-5ms." }
    ]
  },

  "compliance-audits": {
    slug: "compliance-audits",
    pillarSlug: "cybersecurity",
    pillarName: "Cybersecurity",
    title: "Compliance Audits",
    tag: "Regulatory Governance",
    badge: "SOC 2 Type II, ISO 27001, HIPAA & PCI-DSS 4.0",
    subtitle: "Accelerate audit readiness and achieve continuous compliance. Automated evidence collection, policy documentation, vendor risk management, and audit-ready infrastructure.",
    metrics: [
      { val: "100%", label: "Audit Pass Rate", sub: "SOC2 Type II & ISO 27001" },
      { val: "80%", label: "Manual Evidence Time Saved", sub: "Automated API integrations" },
      { val: "< 60 days", label: "Average Time to Certification", sub: "Fast-track compliance roadmap" },
      { val: "24/7", label: "Continuous Control Monitoring", sub: "Automated drift alerts" }
    ],
    capabilities: [
      {
        id: "automated-evidence-collection",
        title: "Automated Continuous Evidence Collection",
        tag: "Audit Automation",
        badge: "Vanta & Drata Integration",
        latencyBadge: "Real-Time Evidence Pull",
        desc: "Connects directly to your cloud accounts, GitHub, identity providers, and HR tools to automatically harvest cryptographic compliance evidence 24 hours a day.",
        stats: [
          "Replaces hundreds of hours of painful manual screenshot taking before annual audits",
          "Monitors employee laptop encryption, MFA enforcement, and background check verification",
          "Automated alerts sent to IT managers the instant any compliance control begins to fail"
        ],
        terminal: {
          command: "compliance_agent.collect_evidence({ framework: 'SOC2_TYPE_II' })",
          status: "EVIDENCE HARVESTED (100% HEALTH)",
          logs: [
            { type: "comment", text: "// Querying automated compliance integration APIs" },
            { type: "step", text: "> AWS: verified 100% of S3 buckets enforce KMS encryption at rest" },
            { type: "step", text: "> GitHub: verified branch protection rules enforce peer reviews" },
            { type: "success", text: "> uploaded signed evidence bundle to auditor portal (0 human clicks)" }
          ]
        }
      },
      {
        id: "soc2-type-2-readiness",
        title: "SOC 2 Type II & ISO 27001 Accelerator",
        tag: "Certifications",
        badge: "Fast-Track Compliance",
        latencyBadge: "Certified in < 60 Days",
        desc: "Fast-tracks SOC 2 Type II and ISO 27001 certification with battle-tested information security policies, employee training modules, and auditor-approved architecture templates.",
        stats: [
          "Pre-written, auditor-approved Information Security Policy (InfoSec) templates",
          "Establishes formal incident response, business continuity, and disaster recovery procedures",
          "Connects your team directly with accredited auditing firms for streamlined assessments"
        ],
        terminal: {
          command: "auditor_portal.verify_readiness({ framework: 'ISO_27001_2022' })",
          status: "READINESS SCORE: 100% (AUDIT READY)",
          logs: [
            { type: "comment", text: "// Evaluating Annex A security controls" },
            { type: "step", text: "> A.8.1: user endpoint devices encrypted with FileVault / BitLocker" },
            { type: "step", text: "> A.8.28: secure coding practices & SAST PR gates verified" },
            { type: "success", text: "> Stage 1 certification audit scheduled with accredited registrar" }
          ]
        }
      },
      {
        id: "pci-dss-pci4-readiness",
        title: "PCI-DSS v4.0 Payment Card Compliance",
        tag: "Financial Security",
        badge: "PCI-DSS v4.0 Standard",
        latencyBadge: "Zero Scope Sprawl",
        desc: "Isolates cardholder data environments (CDE) using network micro-segmentation, tokenization, and strict encryption, minimizing your PCI scope and simplifying annual assessments.",
        stats: [
          "Reduces PCI scope by offloading card ingestion to tokenized iframe architectures",
          "Enforces quarterly external vulnerability scans (ASV) and quarterly internal pentests",
          "Full compliance with the stringent requirements of the new PCI-DSS v4.0 mandate"
        ],
        terminal: {
          command: "pci_scanner.verify_cde_isolation({ vpc_id: 'vpc-cde-payment-core' })",
          status: "CDE ISOLATION: VALIDATED",
          logs: [
            { type: "comment", text: "// Inspecting Cardholder Data Environment boundary rules" },
            { type: "step", text: "> ingress firewall: blocked all direct database access from public web" },
            { type: "step", text: "> TLS 1.3 cipher suite enforced across all external payment endpoints" },
            { type: "success", text: "> Report on Compliance (RoC) evidence package ready for QSA" }
          ]
        }
      },
      {
        id: "vendor-third-party-risk",
        title: "Automated Third-Party Vendor Risk Management",
        tag: "Supply Chain Risk",
        badge: "Vendor Assessment",
        latencyBadge: "Continuous Risk Score",
        desc: "Automates security assessments for third-party SaaS vendors and suppliers, tracking their SOC 2 reports, security postures, and data processing agreements in a single dashboard.",
        stats: [
          "Automated questionnaires mapping third-party data processing boundaries",
          "Continuous vendor risk scoring tracking security incidents and credential breaches",
          "Automated renewal reminders requesting updated annual SOC 2 reports from partners"
        ],
        terminal: {
          command: "vendor_risk.evaluate({ vendor: 'third_party_analytics_vendor' })",
          status: "RISK LEVEL: LOW (SOC2 CURRENT)",
          logs: [
            { type: "comment", text: "// Auditing vendor security posture and certifications" },
            { type: "step", text: "> verified active SOC 2 Type II report (audit period: 2025-2026)" },
            { type: "step", text: "> Data Processing Addendum (DPA) with standard contractual clauses active" },
            { type: "success", text: "> vendor approved for enterprise customer data ingestion" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "API Integration", tag: "Vanta / Drata", desc: "Connects compliance automation platform to AWS, GitHub, Okta, and HR software.", iconName: "RefreshCw" },
      { step: "02", title: "Gap Analysis", tag: "Policy Matrix", desc: "Identifies failing controls, missing policies, and unencrypted hardware.", iconName: "Search" },
      { step: "03", title: "Remediation", tag: "Auto-Fixes", desc: "Applies technical fixes (MFA, disk encryption, Terraform controls) automatically.", iconName: "ShieldCheck" },
      { step: "04", title: "Continuous Scan", tag: "Daily Monitoring", desc: "Monitors systems continuously to catch compliance drift before auditors inspect.", iconName: "Activity" },
      { step: "05", title: "Auditor Sign-Off", tag: "Final Report", desc: "Auditors inspect verified evidence in the portal and issue the final compliance certificate.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "RefreshCw", title: "Automated Evidence Collection", tags: ["Vanta", "Drata", "Zero Screenshots"], desc: "Eliminate stressful spreadsheet checklists. Automatically gather cryptographic compliance evidence from your cloud tools 24/7." },
      { iconName: "ShieldCheck", title: "SOC 2 Type II Fast-Track", tags: ["SOC 2 Type II", "Trust Services Criteria", "CPA Approved"], desc: "Achieve clean SOC 2 Type II certification in under 60 days with pre-approved policy templates and streamlined auditor coordination." },
      { iconName: "Globe", title: "ISO 27001:2022 Certification", tags: ["ISO 27001", "Annex A Controls", "Global Standard"], desc: "Build an enterprise Information Security Management System (ISMS) that unlocks lucrative international enterprise and public-sector tenders." },
      { iconName: "Lock", title: "PCI-DSS v4.0 Scope Reduction", tags: ["Tokenization", "CDE Isolation", "PCI v4.0"], desc: "Minimize your payment card compliance scope by tokenizing sensitive card data, slashing audit overhead and security exposure." },
      { iconName: "Activity", title: "Continuous Control Monitoring", tags: ["Drift Alerts", "Automated Remediation", "Slack Alarms"], desc: "Receive immediate notifications the moment an employee disables laptop encryption or an unencrypted S3 bucket is launched." },
      { iconName: "FileCheck", title: "Vendor Risk Management", tags: ["Third-Party Audits", "SOC 2 Tracking", "Supply Chain"], desc: "Automate security evaluations of your third-party SaaS vendors, maintaining compliance with enterprise vendor risk management standards." }
    ],
    techStack: [
      { category: "Compliance Automation", items: ["Vanta", "Drata", "Sprinto", "Secureframe", "OneTrust"] },
      { category: "Security Frameworks", items: ["SOC 2 Type II (AICPA)", "ISO/IEC 27001:2022", "HIPAA Security Rule", "PCI-DSS v4.0", "NIST CSF"] },
      { category: "Endpoint Compliance", items: ["Kandji (macOS)", "Jamf Pro", "Microsoft Intune", "Kolide Fleet"] },
      { category: "Identity & Device Auth", items: ["Okta Verify", "Google Workspace", "Azure AD Entra ID", "Duo Security"] },
      { category: "Auditor Networks", items: ["BDO", "Schellman", "A-LIGN", "Prescient Security", "Coalfire"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Manual Spreadsheets & Audit Chaos",
      beforePoints: [
        "Engineers spending weeks taking manual screenshots of cloud settings for auditors.",
        "Disorganized policies copied from the internet that fail basic auditor scrutiny.",
        "Missing out on lucrative six-figure enterprise deals due to lacking a SOC 2 report.",
        "Failing annual audit renewals because controls quietly drifted out of compliance months ago."
      ],
      afterTitle: "Devopstrio Automated Compliance",
      afterPoints: [
        "100% automated evidence collection harvesting cryptographic proof via API continuously.",
        "Auditor-certified policy templates and controls built specifically for modern cloud stacks.",
        "Accelerated certification timeline delivering clean SOC 2 and ISO reports in under 60 days.",
        "24/7 continuous monitoring alerting teams to compliance drift before auditors ever notice."
      ]
    },
    faqs: [
      { q: "What is the difference between SOC 2 Type I and SOC 2 Type II?", a: "SOC 2 Type I verifies that your security controls are designed properly at a single point in time. SOC 2 Type II observes those controls over a 3 to 12-month evaluation window, proving that your policies (like access reviews, MFA, and automated backups) actually operate effectively in the real world." },
      { q: "How much time does automated compliance (Vanta/Drata) save?", a: "Automated compliance platforms connect directly to your AWS, GitHub, Okta, and HR systems, harvesting evidence automatically. This eliminates over 80% of the manual labor previously required for compliance, allowing teams to achieve certification in weeks instead of months." },
      { q: "What is the new PCI-DSS v4.0 and how does it affect our application?", a: "PCI-DSS v4.0 replaces version 3.2.1 and introduces stricter requirements for multi-factor authentication, automated payment page script tampering defense (detecting Magecart attacks), and continuous security governance. We isolate cardholder data environments (CDE) to minimize the scope of these requirements." },
      { q: "Can a startup or small team realistically achieve SOC 2 and ISO 27001?", a: "Yes. By using our cloud-native templates, automated landing zones, and compliance software integrations, companies with as few as 5 to 10 employees achieve clean SOC 2 Type II and ISO 27001 reports routinely, unlocking massive enterprise customer contracts." },
      { q: "How do you handle employee laptop compliance?", a: "We integrate lightweight Mobile Device Management (MDM) tools like Kandji or Microsoft Intune that enforce disk encryption (FileVault/BitLocker), screen lock timeouts, and OS auto-updates automatically, streaming compliance proof directly into your audit dashboard." }
    ]
  },

  "zero-trust-architectures": {
    slug: "zero-trust-architectures",
    pillarSlug: "cybersecurity",
    pillarName: "Cybersecurity",
    title: "Zero Trust Architectures",
    tag: "Network Security",
    badge: "Never Trust, Always Verify & Micro-Segmentation",
    subtitle: "Eliminate vulnerable corporate VPNs and trust-based perimeter networks. Enforce continuous identity verification, micro-segmentation, and device health posture checks across every connection.",
    metrics: [
      { val: "0", label: "Legacy Corporate VPNs", sub: "Replaced with Cloudflare Zero Trust" },
      { val: "100%", label: "mTLS Encrypted Connections", sub: "Micro-segmented pod traffic" },
      { val: "< 10ms", label: "Edge Policy Evaluation", sub: "Distributed SASE architecture" },
      { val: "0", label: "Lateral Movement Risk", sub: "Strict least-privilege networking" }
    ],
    capabilities: [
      {
        id: "sase-vpn-replacement",
        title: "Secure Access Service Edge (SASE) & VPN Replacement",
        tag: "Secure Remote Access",
        badge: "Cloudflare Access & Zscaler",
        latencyBadge: "< 10ms Edge Routing",
        desc: "Replaces slow, vulnerable legacy VPN tunnels with Secure Access Service Edge (SASE) and Zero Trust Network Access (ZTNA), routing remote employees through secure edge proxies.",
        stats: [
          "Eliminates vulnerable exposed VPN concentrator IPs from public internet port scans",
          "Context-aware access policies evaluating device health, OS version, and user location",
          "Accelerates remote developer connection speeds by routing over private global edge networks"
        ],
        terminal: {
          command: "ztna_gateway.evaluate_connection({ user: 'dev_lead', resource: 'staging-k8s' })",
          status: "ACCESS GRANTED (SASE EDGE)",
          logs: [
            { type: "comment", text: "// Evaluating Zero Trust device health posture" },
            { type: "step", text: "> validated FIDO2 MFA token + CrowdStrike device health telemetry" },
            { type: "step", text: "> disk encryption: verified active | OS version: verified patched" },
            { type: "success", text: "> established encrypted WireGuard tunnel to staging cluster (latency: 8.2ms)" }
          ]
        }
      },
      {
        id: "kubernetes-micro-segmentation",
        title: "Micro-Segmentation & eBPF Network Policies",
        tag: "Lateral Movement Defense",
        badge: "Cilium Network Policies",
        latencyBadge: "Hardware eBPF Speed",
        desc: "Stops attacker lateral movement cold. Enforces strict zero-trust network policies inside Kubernetes clusters using Cilium eBPF, blocking unauthorized pod-to-pod communication.",
        stats: [
          "Default-deny network policy architecture blocking all cross-namespace communication",
          "Fine-grained Layer 7 policy enforcement (e.g., frontend can only call `POST /checkout`)",
          "Near-zero CPU latency overhead running directly inside the Linux kernel via eBPF"
        ],
        terminal: {
          command: "cilium.policy.enforce({ namespace: 'payments', mode: 'DEFAULT_DENY' })",
          status: "ZERO-TRUST MICRO-SEGMENTATION ACTIVE",
          logs: [
            { type: "comment", text: "// Enforcing kernel-level eBPF network boundaries" },
            { type: "step", text: "> allowed: ingress from 'api-gateway' on port 8080 (L7 POST /pay only)" },
            { type: "step", text: "> blocked & alerted: lateral connection attempt from 'untrusted-workload'" },
            { type: "success", text: "> lateral attack path terminated in kernel in < 0.1ms" }
          ]
        }
      },
      {
        id: "continuous-device-posture",
        title: "Continuous Device Health & Posture Verification",
        tag: "Endpoint Integrity",
        badge: "EDR Integration",
        latencyBadge: "Continuous Health Check",
        desc: "Continuously checks that employee laptops and mobile devices have active endpoint protection (CrowdStrike / Defender), encrypted hard drives, and current security patches.",
        stats: [
          "Instantly revokes cloud session tokens if malware or unauthorized software is detected",
          "Prevents unmanaged personal devices from accessing sensitive enterprise production databases",
          "Automated compliance reporting feeding directly into SOC2 and ISO audit platforms"
        ],
        terminal: {
          command: "device_posture.check({ agent_id: 'macbook_m3_pro_dev41' })",
          status: "POSTURE HEALTHY (TRUSTED)",
          logs: [
            { type: "comment", text: "// Querying local EDR security telemetry" },
            { type: "step", text: "> CrowdStrike Falcon sensor: active (zero active detections)" },
            { type: "step", text: "> FileVault encryption: active (XTS-AES 128)" },
            { type: "success", text: "> device certified compliant: granted access to internal code repos" }
          ]
        }
      },
      {
        id: "software-defined-perimeter",
        title: "Software-Defined Perimeter & Ephemeral Mesh",
        tag: "Zero-Trust Infrastructure",
        badge: "Tailscale & WireGuard",
        latencyBadge: "Point-to-Point Mesh",
        desc: "Connects distributed servers, Kubernetes nodes, and developer workstations into a private, point-to-point encrypted WireGuard mesh with zero exposed public IP ports.",
        stats: [
          "Servers have zero open public firewall ports, completely invisible to internet port scanners",
          "Direct point-to-point WireGuard mesh routing delivering maximum throughput and minimum latency",
          "Automated key exchange and ACL management tied to your central identity provider"
        ],
        terminal: {
          command: "tailscale.status({ mesh_network: 'enterprise-prod-mesh' })",
          status: "MESH ACTIVE (480 NODES)",
          logs: [
            { type: "comment", text: "// Inspecting WireGuard point-to-point connections" },
            { type: "step", text: "> zero public SSH or RDP ports open to the public internet" },
            { type: "step", text: "> direct peer-to-peer WireGuard tunnels negotiated via DERP" },
            { type: "success", text: "> end-to-end encryption enforced across 100% of internal transit" }
          ]
        }
      }
    ],
    pipelineStages: [
      { step: "01", title: "Identity & MFA", tag: "FIDO2 WebAuthn", desc: "User authenticates with phishing-resistant biometric passkeys.", iconName: "Key" },
      { step: "02", title: "Device Posture", tag: "CrowdStrike EDR", desc: "Verifies device encryption, OS patches, and endpoint security health.", iconName: "ShieldCheck" },
      { step: "03", title: "Context Gate", tag: "Cloudflare SASE", desc: "Evaluates user location, role, and request context at edge proxy.", iconName: "Globe" },
      { step: "04", title: "mTLS Tunnel", tag: "WireGuard Mesh", desc: "Establishes short-lived, encrypted point-to-point network tunnel.", iconName: "Lock" },
      { step: "05", title: "Micro-Segment", tag: "eBPF Policy", desc: "Cilium eBPF enforces least-privilege pod-to-pod network boundaries.", iconName: "CheckCircle2" }
    ],
    featureCards: [
      { iconName: "Globe", title: "Secure Access Service Edge (SASE)", tags: ["Cloudflare Access", "Zscaler", "VPN Replacement"], desc: "Eliminate legacy corporate VPNs. Route remote employees through secure edge proxies that authenticate users and check device health in milliseconds." },
      { iconName: "Lock", title: "Kubernetes eBPF Micro-Segmentation", tags: ["Cilium eBPF", "Network Policies", "Default Deny"], desc: "Isolate microservices with kernel-level eBPF network policies that block lateral movement, preventing attackers from pivoting between compromised pods." },
      { iconName: "ShieldCheck", title: "Continuous Device Health Verification", tags: ["CrowdStrike", "Device Posture", "Zero Trust"], desc: "Continuously verify employee laptop health before granting access, revoking session tokens instantly if malware or unencrypted disks are detected." },
      { iconName: "Zap", title: "Software-Defined Perimeter (SDP)", tags: ["Tailscale", "WireGuard Mesh", "Zero Open Ports"], desc: "Make your production servers completely invisible to the internet. Connect internal nodes via encrypted WireGuard mesh networks with zero open public ports." },
      { iconName: "Activity", title: "Never Trust, Always Verify", tags: ["Context-Aware", "Ephemeral Tokens", "Zero-Trust Principles"], desc: "Never assume a request is safe because it originated from an internal network. Every single API call and packet is authenticated and authorized." },
      { iconName: "Sliders", title: "Fine-Grained Layer 7 Access Control", tags: ["L7 Policies", "HTTP Method Filtering", "mTLS"], desc: "Enforce network policies down to HTTP verbs and URL paths (e.g., microservice A can only invoke `GET /orders` on microservice B)." }
    ],
    techStack: [
      { category: "SASE & ZTNA Gateways", items: ["Cloudflare One (Zero Trust)", "Zscaler Private Access", "Palo Alto Prisma Access"] },
      { category: "Mesh Networking", items: ["Tailscale (WireGuard)", "Twingate", "NetBird", "AWS Verified Access"] },
      { category: "Container Micro-Segmentation", items: ["Cilium eBPF", "Calico Enterprise", "Istio Ambient Mesh"] },
      { category: "Endpoint Security & Posture", items: ["CrowdStrike Falcon", "Microsoft Defender for Endpoint", "SentinelOne"] },
      { category: "Identity & Context", items: ["Okta FastPass", "Microsoft Entra Private Access", "Google BeyondCorp"] }
    ],
    beforeVsAfter: {
      beforeTitle: "Permissive Castle-and-Moat VPNs",
      beforePoints: [
        "Once connected to the corporate VPN, an attacker has open lateral access to everything.",
        "Publicly exposed VPN gateway IPs targeted by ransomware and zero-day exploits.",
        "Slow, congested VPN connections that developers hate and constantly bypass.",
        "Unmanaged personal laptops connecting to sensitive internal production databases."
      ],
      afterTitle: "Devopstrio Zero Trust Architecture",
      afterPoints: [
        "Complete micro-segmentation: compromising a web pod provides zero access to databases.",
        "Servers completely hidden behind SASE edge proxies with zero open public ports.",
        "Lightning-fast point-to-point WireGuard mesh routing delivering native 10Gbps speeds.",
        "Continuous device posture verification barring unmanaged or compromised laptops."
      ]
    },
    faqs: [
      { q: "What is the core philosophy of Zero Trust Architecture?", a: "Traditional security uses a 'castle-and-moat' model: anyone inside the office network or on the VPN is trusted. Zero Trust operates under the assumption of 'never trust, always verify'. Every single request—even between two internal microservices—must verify its identity, device health, and authorization." },
      { q: "Why are enterprises replacing legacy VPNs with Cloudflare Access or Zscaler?", a: "Legacy VPNs expose an IP address to the public internet, suffer from throughput bottlenecks, and grant broad network access upon login. Modern ZTNA (Zero Trust Network Access) acts as an invisible edge proxy: applications have no public IP, and users only access specific authorized web apps without being placed on the network." },
      { q: "How does micro-segmentation stop ransomware and lateral movement?", a: "If an attacker compromises a frontend container, their next move is usually to scan the internal network to compromise databases. With Cilium eBPF micro-segmentation, kernel-level network rules block the frontend from talking to anything other than its specific designated API port, stopping lateral spread immediately." },
      { q: "How do point-to-point WireGuard meshes (like Tailscale) improve performance?", a: "Traditional VPNs route all traffic through a central bottleneck server (e.g., in your primary data center). Tailscale uses direct peer-to-peer WireGuard tunnels between machines. If a developer in London accesses a server in London, traffic flows directly point-to-point with minimal latency." },
      { q: "Can Zero Trust be implemented incrementally without disrupting employees?", a: "Yes. We implement Zero Trust in phases: Phase 1 replaces legacy VPNs with ZTNA for internal web dashboards; Phase 2 introduces device posture checks; Phase 3 implements Kubernetes eBPF micro-segmentation inside clusters, ensuring zero business interruption." }
    ]
  }
};
