/**
 * SMTP Diagnostic Script
 * 
 * Usage:
 *   npx tsx scripts/test-smtp.ts
 */

import nodemailer from "nodemailer";
import * as fs from "fs";
import * as path from "path";

// Load .env.local if present
function loadEnv() {
  const envPath = path.resolve(process.cwd(), ".env.local");
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, "utf-8").split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx > 0) {
        const key = trimmed.substring(0, eqIdx).trim();
        const val = trimmed.substring(eqIdx + 1).trim().replace(/^["']|["']$/g, "");
        if (!process.env[key]) process.env[key] = val;
      }
    }
  }
}

loadEnv();

async function main() {
  console.log("=========================================");
  console.log(" 📧 DEVOPSTRIO SMTP DIAGNOSTIC TEST");
  console.log("=========================================\n");

  const smtpServer = process.env.SMTP_SERVER || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const smtpUser = process.env.SMTP_USER || "devopstrioglobal@gmail.com";
  const smtpPass = process.env.SMTP_PASS;

  console.log(`Server: ${smtpServer}`);
  console.log(`Port:   ${smtpPort}`);
  console.log(`User:   ${smtpUser}`);
  console.log(`Pass:   ${smtpPass ? "[Configured: " + smtpPass.length + " chars]" : "[NOT SET - Missing SMTP_PASS]"}\n`);

  if (!smtpPass) {
    console.error("❌ ERROR: SMTP_PASS is missing in your environment or .env.local file.");
    console.log("👉 Add SMTP_PASS=your-16-char-app-password to your .env.local file.");
    process.exit(1);
  }

  const transporter = nodemailer.createTransport({
    host: smtpServer,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  console.log("⏳ Connecting to SMTP server and verifying credentials...");
  try {
    await transporter.verify();
    console.log("✅ SUCCESS! SMTP credentials and connection verified successfully.");
    console.log("Your mail server is accepting connections.\n");
  } catch (err: any) {
    console.error("❌ FAILED: Unable to authenticate with mail server.\n");
    console.error("Error Code:", err.code);
    console.error("Error Message:", err.message);
    if (err.response) {
      console.error("Server Response:", err.response);
    }
    console.log("\n--- Troubleshooting Guidance ---");
    if (err.code === "EAUTH" || err.message?.includes("535")) {
      console.log("• Gmail rejected the credentials (Error 535 / EAUTH).");
      console.log("  1. Make sure 2-Step Verification is ON in your Google Account.");
      console.log("  2. Go to https://myaccount.google.com/apppasswords and create a NEW App Password.");
      console.log("  3. Make sure to remove any spaces in the 16-character password.");
      console.log("  4. Google may have suspended the account/app password after the GitHub leak alert.");
    } else if (err.code === "ETIMEDOUT" || err.code === "ECONNECTION") {
      console.log("• Connection timed out. Try changing SMTP_PORT to 465 (with SSL) or 587.");
    }
    process.exit(1);
  }
}

main();
