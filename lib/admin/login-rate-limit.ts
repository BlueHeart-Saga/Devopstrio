import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// In-memory fallback map strictly for development environments
interface AttemptRecord {
  count: number;
  resetAt: number;
}
const localAttemptMap = new Map<string, AttemptRecord>();

let redisRateLimiter: Ratelimit | null = null;
let redisClient: Redis | null = null;

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  try {
    redisClient = Redis.fromEnv();
    redisRateLimiter = new Ratelimit({
      redis: redisClient,
      limiter: Ratelimit.slidingWindow(5, "10 m"), // 5 attempts per 10 minutes
      prefix: "devopstrio:admin:login",
    });
  } catch (err) {
    console.error("Failed to initialize Upstash Redis rate limiter:", err);
  }
}

/**
 * Check login attempt rate limit.
 * In production:
 * - Redis configuration is MANDATORY. If Redis is unconfigured or unreachable, authentication fails closed.
 * - This prevents brute-force credential stuffing and distributed attacks.
 * In development:
 * - Falls back to an in-memory sliding window limiter if Redis is not configured.
 */
export async function checkLoginRateLimit(identifier: string): Promise<{ success: boolean; remaining: number }> {
  const isProduction = process.env.NODE_ENV === "production";

  if (redisRateLimiter) {
    try {
      const result = await redisRateLimiter.limit(identifier);
      return { success: result.success, remaining: result.remaining };
    } catch (err) {
      console.error("Redis rate limit verification failed:", err);
      // Fail closed in production if Redis communication fails
      if (isProduction) {
        return { success: false, remaining: 0 };
      }
    }
  } else if (isProduction) {
    // In production, running without Redis rate limiting is forbidden
    console.error("CRITICAL: Redis is required in production for login rate limiting but is not configured.");
    return { success: false, remaining: 0 };
  }

  // Development-only in-memory rate limiter fallback (5 attempts per 10 minutes)
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const maxAttempts = 5;

  const record = localAttemptMap.get(identifier);

  if (!record || now > record.resetAt) {
    localAttemptMap.set(identifier, { count: 1, resetAt: now + windowMs });
    return { success: true, remaining: maxAttempts - 1 };
  }

  if (record.count >= maxAttempts) {
    return { success: false, remaining: 0 };
  }

  record.count += 1;
  return { success: true, remaining: maxAttempts - record.count };
}

/**
 * Reset login attempt count on successful authentication
 */
export async function resetLoginRateLimit(identifier: string): Promise<void> {
  localAttemptMap.delete(identifier);
  if (redisClient) {
    try {
      await redisClient.del(`devopstrio:admin:login:${identifier}`);
    } catch (err) {
      console.warn("Failed to reset Redis rate limit key:", err);
    }
  }
}
