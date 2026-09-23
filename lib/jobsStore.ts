import fs from "fs";
import path from "path";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "./mongodb";

export interface StoredJob {
  id: string;
  title: string;
  category: string;
  location: string;
  type: string;
  experience: string;
  desc: string;
  skills?: string;
  status: string;
  jdUrl?: string;
  postedAt?: string;
  created_at?: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const JOBS_FILE = path.join(DATA_DIR, "jobs.json");

const INITIAL_DEFAULT_JOBS: StoredJob[] = [
  {
    id: "job-marketing-seo-analytics",
    title: "Marketing & SEO Analytics Specialist",
    category: "Marketing & Communication",
    location: "India - Chennai",
    type: "Full-Time",
    experience: "2+ Years",
    desc: "Develop and execute data-driven SEO, content optimization, and digital marketing analytics strategies to boost global online reach.",
    skills: "SEO, Google Analytics, Technical Writing, Performance Marketing, SEM",
    status: "active",
    jdUrl: "/Marketing_and_SEO_Analytics_JD.pdf",
    postedAt: "Recently"
  },
  {
    id: "job-bde-executive",
    title: "Business Development Executive",
    category: "Consulting & Strategy",
    location: "India - Chennai",
    type: "Full-Time",
    experience: "3+ Years",
    desc: "Drive key enterprise relationships, cloud solution sales, and strategic client acquisition for Devopstrio global engagements.",
    skills: "Enterprise Sales, Cloud Solutions, Client Relations, B2B Strategy",
    status: "active",
    jdUrl: "/Business_Development_Executive_JD.pdf",
    postedAt: "Recently"
  },
  {
    id: "job-devops-lead-k8s",
    title: "Lead DevOps Engineer (Kubernetes & ArgoCD)",
    category: "DevOps, GitOps & SRE",
    location: "India - Bengaluru / Bangalore",
    type: "Full-Time",
    experience: "6+ Years",
    desc: "Configure automated GitOps continuous deployment workflows across multi-tenant Kubernetes clusters.",
    skills: "Kubernetes, ArgoCD, Terraform, AWS, CI/CD, Helm",
    status: "active",
    postedAt: "Recently"
  },
  {
    id: "job-azure-cloud-arch",
    title: "Senior Azure Cloud Architect",
    category: "Cloud & Platform Engineering",
    location: "United Kingdom - London",
    type: "Full-Time",
    experience: "8+ Years",
    desc: "Lead the design and migration of enterprise banking mainframes to secure, compliant Azure Landing Zones.",
    skills: "Azure, Landing Zones, ARM/Bicep, Enterprise Migration, Zero-Trust",
    status: "active",
    postedAt: "Recently"
  },
  {
    id: "job-ai-rag-developer",
    title: "Senior AI Research & RAG Developer",
    category: "Artificial Intelligence (AI) & Data Science",
    location: "United States - New York",
    type: "Full-Time",
    experience: "5+ Years",
    desc: "Develop advanced retrieval-augmented generation search frameworks and semantic routers using Qdrant.",
    skills: "Python, LangChain, Qdrant, Vector DBs, OpenAI, FastEmbed",
    status: "active",
    postedAt: "Recently"
  },
  {
    id: "job-sec-engineer",
    title: "Zero-Trust Cybersecurity Specialist",
    category: "Cybersecurity & Zero-Trust",
    location: "India - Chennai",
    type: "Full-Time",
    experience: "5+ Years",
    desc: "Deploy Cilium eBPF network microsegmentation and manage HashiCorp Vault secrets registries.",
    skills: "Cilium, eBPF, HashiCorp Vault, SOC2, SIEM, Kubernetes Security",
    status: "active",
    postedAt: "Recently"
  },
  {
    id: "job-golang-microservices",
    title: "Senior Go / Microservices Developer",
    category: "Software & Microservices",
    location: "India - Pasuvanthanai",
    type: "Full-Time",
    experience: "4+ Years",
    desc: "Construct high-performance, stateless APIs and serverless ledger modules for digital retail platforms.",
    skills: "Go (Golang), gRPC, Kafka, Docker, Redis, Postgres",
    status: "active",
    postedAt: "Recently"
  },
  {
    id: "job-tuticorin-cloud",
    title: "Cloud Security & Compliance Analyst",
    category: "Cybersecurity & Zero-Trust",
    location: "India - Tuticorin / Thoothukudi",
    type: "Full-Time",
    experience: "3+ Years",
    desc: "Perform compliance audits, vulnerability assessments, and infrastructure security scanning across hybrid estates.",
    skills: "ISO 27001, AWS SecurityHub, SonarQube, Vulnerability Management",
    status: "active",
    postedAt: "Recently"
  }
];

function ensureJobsFile(): StoredJob[] {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(JOBS_FILE)) {
      fs.writeFileSync(JOBS_FILE, JSON.stringify(INITIAL_DEFAULT_JOBS, null, 2), "utf-8");
      return INITIAL_DEFAULT_JOBS;
    }
    const data = fs.readFileSync(JOBS_FILE, "utf-8");
    return JSON.parse(data || "[]");
  } catch (err) {
    console.warn("Local jobs.json read error, falling back to initial jobs:", err);
    return INITIAL_DEFAULT_JOBS;
  }
}

function writeJobsFile(jobs: StoredJob[]) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(JOBS_FILE, JSON.stringify(jobs, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to write jobs.json:", err);
  }
}

export async function getStoredJobs(): Promise<StoredJob[]> {
  // 1. Try MongoDB if available
  try {
    const { db } = await connectToDatabase();
    const mongoJobs = await db.collection("jobs").find().sort({ created_at: -1 }).toArray();
    if (mongoJobs && mongoJobs.length > 0) {
      const formatted: StoredJob[] = mongoJobs.map((j) => ({
        id: j._id.toString(),
        title: j.title || "",
        category: j.category || "Engineering",
        location: j.location || "Remote",
        type: j.type || "Full-Time",
        experience: j.experience || "Intermediate (3-5 Years)",
        desc: j.desc || "",
        skills: j.skills || j.requiredSkills || "",
        status: j.status || "active",
        jdUrl: j.jdUrl || undefined,
        postedAt: j.created_at ? new Date(j.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Recently",
      }));
      // Keep local file in sync
      writeJobsFile(formatted);
      return formatted;
    }
  } catch (err) {
    // MongoDB offline / not configured, proceed to local JSON
  }

  // 2. Read from local JSON
  return ensureJobsFile();
}

export async function createStoredJob(jobData: Partial<StoredJob>): Promise<StoredJob> {
  const localJobs = ensureJobsFile();
  const id = `job-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  const now = new Date();

  const newJob: StoredJob = {
    id,
    title: jobData.title || "",
    category: jobData.category || "Cloud & Platform Engineering",
    location: jobData.location || "India - Chennai",
    type: jobData.type || "Full-Time",
    experience: jobData.experience || "Intermediate (3-5 Years)",
    desc: jobData.desc || "",
    skills: jobData.skills || "",
    status: jobData.status || "active",
    jdUrl: jobData.jdUrl || "",
    postedAt: now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    created_at: now.toISOString(),
  };

  // 1. Save to local JSON first (instant persistence)
  localJobs.unshift(newJob);
  writeJobsFile(localJobs);

  // 2. Dual write to MongoDB if configured
  try {
    const { db } = await connectToDatabase();
    const mongoRes = await db.collection("jobs").insertOne({
      ...newJob,
      created_at: now,
    });
    if (mongoRes?.insertedId) {
      newJob.id = mongoRes.insertedId.toString();
      // Update local ID if mongo assigned one
      localJobs[0].id = newJob.id;
      writeJobsFile(localJobs);
    }
  } catch (err) {
    console.warn("MongoDB job insert skipped (saved locally):", err);
  }

  return newJob;
}

export async function updateStoredJob(id: string, updateData: Partial<StoredJob>): Promise<StoredJob | null> {
  const localJobs = ensureJobsFile();
  const index = localJobs.findIndex((j) => j.id === id);

  if (index !== -1) {
    localJobs[index] = {
      ...localJobs[index],
      ...updateData,
    };
    writeJobsFile(localJobs);
  }

  // Dual update MongoDB if configured
  try {
    const { db } = await connectToDatabase();
    if (ObjectId.isValid(id)) {
      await db.collection("jobs").updateOne(
        { _id: new ObjectId(id) },
        { $set: { ...updateData, updated_at: new Date() } }
      );
    }
  } catch (err) {
    console.warn("MongoDB job update skipped (updated locally):", err);
  }

  return index !== -1 ? localJobs[index] : null;
}

export async function deleteStoredJob(id: string): Promise<boolean> {
  const localJobs = ensureJobsFile();
  const filtered = localJobs.filter((j) => j.id !== id);
  writeJobsFile(filtered);

  // Dual delete MongoDB if configured
  try {
    const { db } = await connectToDatabase();
    if (ObjectId.isValid(id)) {
      await db.collection("jobs").deleteOne({ _id: new ObjectId(id) });
    }
  } catch (err) {
    console.warn("MongoDB job delete skipped (deleted locally):", err);
  }

  return true;
}
