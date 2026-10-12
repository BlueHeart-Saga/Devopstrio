import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";
import { authenticator } from "otplib";
import { Redis } from "@upstash/redis";
import { connectToDatabase } from "@/lib/mongodb";

// Allow 1 step (±30s) window for server clock synchronization
authenticator.options = {
  window: 1,
  step: 30,
};

let redisClient: Redis | null = null;
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  try {
    redisClient = Redis.fromEnv();
  } catch (err) {
    console.error("Failed to initialize Upstash Redis for MFA replay protection:", err);
  }
}

/**
 * Retrieve the dedicated 32-byte MFA encryption key.
 * Strictly requires MFA_ENCRYPTION_KEY as a 64-character hex string.
 * Fails closed without any fallback to AUTH_SECRET or default keys.
 */
export function getEncryptionKey(): Buffer {
  const keyHex = process.env.MFA_ENCRYPTION_KEY?.trim();

  if (!keyHex) {
    throw new Error("MFA_ENCRYPTION_KEY is required and must be configured in environment variables.");
  }

  if (!/^[0-9a-fA-F]{64}$/.test(keyHex)) {
    throw new Error("MFA_ENCRYPTION_KEY must be a valid 64-character hex string (32 bytes for AES-256-GCM).");
  }

  return Buffer.from(keyHex, "hex");
}

/**
 * Encrypt a plain Base32 TOTP secret using AES-256-GCM
 */
export function encryptTotpSecret(secret: string): string {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", getEncryptionKey(), iv);

  const encrypted = Buffer.concat([
    cipher.update(secret, "utf8"),
    cipher.final(),
  ]);

  return [
    iv.toString("hex"),
    cipher.getAuthTag().toString("hex"),
    encrypted.toString("hex"),
  ].join(".");
}

/**
 * Decrypt an AES-256-GCM encrypted TOTP secret.
 * Requires proper format iv.tag.ciphertext.
 */
export function decryptTotpSecret(encoded: string): string {
  const parts = encoded.split(".");
  if (parts.length !== 3) {
    throw new Error("Invalid MFA encrypted secret payload format.");
  }

  const [ivHex, tagHex, dataHex] = parts;

  if (!ivHex || !tagHex || !dataHex) {
    throw new Error("Invalid MFA encrypted secret payload fields.");
  }

  const decipher = createDecipheriv(
    "aes-256-gcm",
    getEncryptionKey(),
    Buffer.from(ivHex, "hex")
  );

  decipher.setAuthTag(Buffer.from(tagHex, "hex"));

  return Buffer.concat([
    decipher.update(Buffer.from(dataHex, "hex")),
    decipher.final(),
  ]).toString("utf8");
}

/**
 * Generate a new random base32 TOTP secret
 */
export function generateTotpSecret(): string {
  return authenticator.generateSecret();
}

/**
 * Generate standard otpauth:// URI for QR code generation
 */
export function generateTotpUri(username: string, secret: string, issuer = "Devopstrio Admin"): string {
  return authenticator.keyuri(username, issuer, secret);
}

/**
 * In-memory fallback replay cache for local development without Redis/MongoDB
 */
const localUsedTokensCache = new Map<string, number>();

function cleanLocalExpiredTokens(): void {
  const now = Date.now();
  for (const [key, expiresAt] of localUsedTokensCache.entries()) {
    if (now > expiresAt) {
      localUsedTokensCache.delete(key);
    }
  }
}

/**
 * Atomically check and mark a token as used to prevent replay attacks across multiple instances.
 * 1. Checks Upstash Redis if configured (using atomic SET with NX and EX 90).
 * 2. Falls back to atomic MongoDB upsert with TTL index if Redis is not configured.
 * 3. Falls back to local in-memory cache in development.
 */
export async function consumeTotpToken(username: string, token: string): Promise<boolean> {
  const normalizedUser = username.toLowerCase();
  const tokenKey = `devopstrio:mfa:used:${normalizedUser}:${token}`;
  const ttlSeconds = 90;

  // 1. Upstash Redis atomic SET NX
  if (redisClient) {
    try {
      const setResult = await redisClient.set(tokenKey, "1", { nx: true, ex: ttlSeconds });
      // Returns "OK" if key was set (token was fresh), null if already existed (token replayed)
      return setResult === "OK";
    } catch (err) {
      console.error("Redis atomic token replay check failed:", err);
      if (process.env.NODE_ENV === "production") {
        return false; // Fail closed in production
      }
    }
  }

  // 2. Shared MongoDB atomic collection check
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection("admin_used_totp_tokens");

    // Ensure TTL index exists (expiresAfterSeconds: 0 on expiresAt field)
    await collection.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }).catch(() => {});
    await collection.createIndex({ tokenKey: 1 }, { unique: true }).catch(() => {});

    const expiresAt = new Date(Date.now() + ttlSeconds * 1000);
    // Atomic insert: if duplicate tokenKey exists, throws duplicate key error
    await collection.insertOne({
      tokenKey,
      username: normalizedUser,
      token,
      expiresAt,
      createdAt: new Date(),
    });

    return true; // Token successfully consumed
  } catch (dbErr: any) {
    // If duplicate key error (code 11000), token was already consumed (replay)
    if (dbErr?.code === 11000) {
      return false;
    }
    // If DB is unreachable and in development, fall back to memory
    if (process.env.NODE_ENV !== "production") {
      cleanLocalExpiredTokens();
      if (localUsedTokensCache.has(tokenKey)) {
        return false;
      }
      localUsedTokensCache.set(tokenKey, Date.now() + ttlSeconds * 1000);
      return true;
    }
    return false; // Fail closed in production
  }
}

/**
 * Verify a 6-digit TOTP token against an encrypted TOTP secret.
 * Decrypts secret with AES-256-GCM, validates 6 digits, and enforces atomic shared replay protection.
 */
export async function verifyTotp(encryptedSecret: string, token: string, username?: string): Promise<boolean> {
  const cleanToken = token.replace(/\s+/g, "").trim();
  if (!/^\d{6}$/.test(cleanToken)) {
    return false;
  }

  const raw = (encryptedSecret || "").trim();
  if (!raw) {
    return false;
  }

  try {
    const plainSecret = decryptTotpSecret(raw);
    const isValid = authenticator.check(cleanToken, plainSecret);
    if (!isValid) {
      return false;
    }

    if (username) {
      const consumed = await consumeTotpToken(username, cleanToken);
      if (!consumed) {
        return false; // Token was replayed or rejected by atomic store
      }
    }

    return true;
  } catch {
    return false;
  }
}
