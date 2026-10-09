/**
 * Devopstrio Admin Account Provisioning & MFA Seeder
 * 
 * Usage:
 *   npx tsx scripts/create-admin.ts
 *   npx tsx scripts/create-admin.ts --force (to overwrite existing accounts)
 */

import argon2 from "argon2";
import { MongoClient } from "mongodb";
import { generateTotpSecret, encryptTotpSecret, generateTotpUri } from "../lib/admin/mfa";
import qrcode from "qrcode";
import * as crypto from "crypto";
import * as path from "path";
import * as fs from "fs";

// Simple env loader
function loadEnvFile(filePath: string) {
  if (fs.existsSync(filePath)) {
    const lines = fs.readFileSync(filePath, "utf-8").split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx > 0) {
        const key = trimmed.substring(0, eqIdx).trim();
        const val = trimmed.substring(eqIdx + 1).trim().replace(/^["']|["']$/g, "");
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

loadEnvFile(path.resolve(process.cwd(), ".env.local"));
loadEnvFile(path.resolve(process.cwd(), ".env"));

interface AdminProvisionSpec {
  username: string;
  name: string;
  email: string;
  role: "SUPER_ADMIN" | "HR_ADMIN" | "MARKETING_ADMIN";
  envPasswordKey: string;
}

const DEFAULT_ADMIN_SPECS: AdminProvisionSpec[] = [
  {
    username: "superadmin",
    name: "Super Administrator",
    email: "admin@devopstrio.co.uk",
    role: "SUPER_ADMIN",
    envPasswordKey: "INITIAL_SUPERADMIN_PASSWORD",
  },
  {
    username: "hr.admin",
    name: "HR Administrator",
    email: "hr@devopstrio.co.uk",
    role: "HR_ADMIN",
    envPasswordKey: "INITIAL_HRADMIN_PASSWORD",
  },
  {
    username: "marketing.admin",
    name: "Marketing Administrator",
    email: "marketing@devopstrio.co.uk",
    role: "MARKETING_ADMIN",
    envPasswordKey: "INITIAL_MKTGADMIN_PASSWORD",
  },
];

function generateSecureRandomPassword(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%^&*";
  const bytes = crypto.randomBytes(16);
  let pass = "";
  for (let i = 0; i < 16; i++) {
    pass += chars[bytes[i] % chars.length];
  }
  return pass;
}

async function main() {
  const forceOverwrite = process.argv.includes("--force") || process.argv.includes("-f");

  console.log("=================================================");
  console.log(" 🛡️  DEVOPSTRIO ADMIN PROVISIONING & MFA SEEDER");
  console.log("=================================================\n");

  const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
  const dbName = process.env.MONGODB_DB || process.env.DB_NAME || "devopstrio";

  let client: MongoClient | null = null;
  let db: any = null;

  if (mongoUri) {
    try {
      console.log(`Connecting to MongoDB database '${dbName}'...`);
      client = new MongoClient(mongoUri);
      await client.connect();
      db = client.db(dbName);
      console.log("✅ Successfully connected to MongoDB.\n");

      // Ensure unique indexes on admin_users
      await db.collection("admin_users").createIndex({ username: 1 }, { unique: true });
      await db.collection("admin_users").createIndex({ email: 1 }, { unique: true });
      console.log("✅ Ensured unique indexes on `username` and `email`.\n");
    } catch (dbErr) {
      console.warn("⚠️ Could not connect to live MongoDB, generating credentials locally only.\n", dbErr);
    }
  } else {
    console.log("ℹ️ No MONGODB_URI found. Generating credentials locally...\n");
  }

  for (const spec of DEFAULT_ADMIN_SPECS) {
    console.log(`-------------------------------------------------`);
    console.log(`🔑 Provisioning Account: [${spec.role}] ${spec.username}`);
    console.log(`-------------------------------------------------`);

    // Check if account already exists in DB
    if (db && !forceOverwrite) {
      const existingUser = await db.collection("admin_users").findOne({ username: spec.username });
      if (existingUser) {
        console.log(`ℹ️ Account '${spec.username}' already exists in MongoDB.`);
        console.log(`   (Skipping to prevent credential overwrite. Use --force to reset).\n`);
        continue;
      }
    }

    // Determine password from environment variable or generate strong password
    const password = process.env[spec.envPasswordKey] || generateSecureRandomPassword();

    const passwordHash = await argon2.hash(password, {
      type: argon2.argon2id,
      memoryCost: 65536,
      timeCost: 3,
      parallelism: 1,
    });

    const totpSecret = generateTotpSecret();
    const totpSecretEncrypted = encryptTotpSecret(totpSecret);
    const totpUri = generateTotpUri(spec.username, totpSecret, "Devopstrio Admin");

    console.log(`Username:       ${spec.username}`);
    console.log(`Email:          ${spec.email}`);
    console.log(`Role:           ${spec.role}`);
    console.log(`Assigned Pass:  ${password}`);
    console.log(`TOTP Secret:    ${totpSecret}`);
    console.log(`TOTP Auth URI:  ${totpUri}`);

    try {
      const qrCodeAscii = await qrcode.toString(totpUri, { type: "terminal", small: true });
      console.log("\n📱 Scan this QR Code in Google Authenticator / Microsoft Authenticator / 1Password:\n");
      console.log(qrCodeAscii);
    } catch (qrErr) {
      console.log("(QR terminal rendering skipped)");
    }

    if (db) {
      const now = new Date();
      await db.collection("admin_users").updateOne(
        { username: spec.username },
        {
          $set: {
            username: spec.username,
            name: spec.name,
            email: spec.email,
            role: spec.role,
            passwordHash,
            totpSecretEncrypted,
            isActive: true,
            mfaEnabled: true,
            sessionVersion: 1,
            updatedAt: now,
          },
          $setOnInsert: {
            createdAt: now,
          },
        },
        { upsert: true }
      );
      console.log(`✅ Account [${spec.username}] saved to MongoDB admin_users.\n`);
    }
  }

  if (client) {
    await client.close();
    console.log("🔒 MongoDB connection closed.");
  }

  console.log("\n=================================================");
  console.log(" 🎉 PROVISIONING PROCESS FINISHED");
  console.log("=================================================\n");
}

main().catch((err) => {
  console.error("Provisioning failed:", err);
  process.exit(1);
});
