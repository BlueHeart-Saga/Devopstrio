import { MongoClient, type MongoClientOptions } from "mongodb";

const MONGO_URI = process.env.MONGO_URI || "";
const DB_NAME = process.env.DB_NAME || "podcast";

// Direct MongoDB connection options for Azure Cosmos DB
const clientOptions: MongoClientOptions = {
  serverSelectionTimeoutMS: 4000,   // 4s timeout for fast fallback
  connectTimeoutMS: 4000,
  socketTimeoutMS: 10000,
  maxPoolSize: 10,
  minPoolSize: 0,
  maxIdleTimeMS: 30000,
  tls: true,
  retryWrites: false,   // Cosmos DB does not support retryWrites
};

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient> | null = null;

function createClientPromise(): Promise<MongoClient> | null {
  if (!MONGO_URI) return null;
  try {
    const client = new MongoClient(MONGO_URI, clientOptions);
    return client.connect();
  } catch (err) {
    console.warn("MongoDB client initialization warning:", err);
    return null;
  }
}

if (process.env.NODE_ENV === "development") {
  // In development, reuse the global promise across HMR reloads
  if (!global._mongoClientPromise && MONGO_URI) {
    global._mongoClientPromise = createClientPromise() || undefined;
  }
  clientPromise = global._mongoClientPromise || null;
} else if (MONGO_URI) {
  // In production (serverless), create a new connection per instance.
  clientPromise = createClientPromise();
}

export async function connectToDatabase() {
  if (!MONGO_URI) {
    throw new Error("MONGO_URI not configured");
  }
  if (!clientPromise) {
    const p = createClientPromise();
    if (!p) throw new Error("MONGO_URI not configured");
    clientPromise = p;
  }
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  return { client, db };
}

export default clientPromise;
