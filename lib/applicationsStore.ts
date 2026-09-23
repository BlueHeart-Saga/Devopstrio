import fs from "fs";
import path from "path";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "./mongodb";

export interface CandidateApplication {
  id: string;
  name: string;
  email: string;
  phone?: string;
  jobTitle: string;
  location?: string;
  type?: string;
  experience?: string;
  resume?: string;
  portfolio?: string;
  note?: string;
  status: "new" | "reviewed" | "shortlisted" | "rejected";
  created_at: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const APPLICATIONS_FILE = path.join(DATA_DIR, "job_applications.json");

function ensureApplicationsFile(): CandidateApplication[] {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(APPLICATIONS_FILE)) {
      fs.writeFileSync(APPLICATIONS_FILE, JSON.stringify([], null, 2), "utf-8");
      return [];
    }
    const data = fs.readFileSync(APPLICATIONS_FILE, "utf-8");
    return JSON.parse(data || "[]");
  } catch (err) {
    console.warn("Local job_applications.json read warning:", err);
    return [];
  }
}

function writeApplicationsFile(apps: CandidateApplication[]) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(APPLICATIONS_FILE, JSON.stringify(apps, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to write job_applications.json:", err);
  }
}

export async function getStoredApplications(): Promise<CandidateApplication[]> {
  // 1. Try MongoDB if available
  try {
    const { db } = await connectToDatabase();
    const mongoApps = await db.collection("job_applications").find().sort({ created_at: -1 }).toArray();
    if (mongoApps && mongoApps.length > 0) {
      const formatted: CandidateApplication[] = mongoApps.map((a) => ({
        id: a._id.toString(),
        name: a.name || "",
        email: a.email || "",
        phone: a.phone || "",
        jobTitle: a.jobTitle || "General Application",
        location: a.location || "",
        type: a.type || "",
        experience: a.experience || "",
        resume: a.resume || "",
        portfolio: a.portfolio || "",
        note: a.note || "",
        status: a.status || "new",
        created_at: a.created_at ? new Date(a.created_at).toISOString() : new Date().toISOString(),
      }));
      writeApplicationsFile(formatted);
      return formatted;
    }
  } catch (err) {
    // MongoDB offline / not configured
  }

  // 2. Fallback to local JSON
  return ensureApplicationsFile();
}

export async function createStoredApplication(appData: Partial<CandidateApplication>): Promise<CandidateApplication> {
  const localApps = ensureApplicationsFile();
  const id = `app-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  const now = new Date();

  const newApp: CandidateApplication = {
    id,
    name: appData.name || "",
    email: appData.email || "",
    phone: appData.phone || "",
    jobTitle: appData.jobTitle || "General Engineering Application",
    location: appData.location || "",
    type: appData.type || "",
    experience: appData.experience || "",
    resume: appData.resume || "",
    portfolio: appData.portfolio || "",
    note: appData.note || "",
    status: "new",
    created_at: now.toISOString(),
  };

  // 1. Save to local JSON first
  localApps.unshift(newApp);
  writeApplicationsFile(localApps);

  // 2. Dual write to MongoDB if configured
  try {
    const { db } = await connectToDatabase();
    const mongoRes = await db.collection("job_applications").insertOne({
      ...newApp,
      created_at: now,
    });
    if (mongoRes?.insertedId) {
      newApp.id = mongoRes.insertedId.toString();
      localApps[0].id = newApp.id;
      writeApplicationsFile(localApps);
    }
  } catch (err) {
    console.warn("MongoDB job application insert skipped (saved locally):", err);
  }

  return newApp;
}

export async function deleteStoredApplication(id: string): Promise<boolean> {
  const localApps = ensureApplicationsFile();
  const filtered = localApps.filter((a) => a.id !== id);
  writeApplicationsFile(filtered);

  try {
    const { db } = await connectToDatabase();
    if (ObjectId.isValid(id)) {
      await db.collection("job_applications").deleteOne({ _id: new ObjectId(id) });
    }
  } catch (err) {
    console.warn("MongoDB delete application skipped:", err);
  }

  return true;
}
