import { MongoClient, MongoClientOptions } from "mongodb";
import dns from "dns";

// Set public DNS servers to resolve Azure Cosmos DB mongodb+srv SRV records reliably
try {
  dns.setServers(["8.8.8.8", "1.1.1.1", "8.8.4.4"]);
} catch (e) {
  // Ignore in environments that disallow custom DNS configuration
}

const MONGO_URI = process.env.MONGO_URI || "";
const DB_NAME = process.env.DB_NAME || "podcast";

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable inside .env");
}

// Serverless-safe MongoDB connection options
// - No custom DNS resolution (crashes in Vercel/Edge)
// - Short timeouts for cold-start serverless environments
// - TLS enabled by default for Atlas / Cosmos DB srv URIs
const clientOptions: MongoClientOptions = {
  serverSelectionTimeoutMS: 10000,   // 10s - allows time on cold start
  connectTimeoutMS: 10000,
  socketTimeoutMS: 30000,
  maxPoolSize: 10,
  minPoolSize: 0,
  maxIdleTimeMS: 30000,
  // For Azure Cosmos DB with mongodb+srv:// URIs, the driver
  // handles SRV resolution internally without the Node dns module.
  tls: MONGO_URI.startsWith("mongodb+srv://") ? true : undefined,
  retryWrites: false,   // Cosmos DB does not support retryWrites
};

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient>;

function createClientPromise(): Promise<MongoClient> {
  const client = new MongoClient(MONGO_URI, clientOptions);
  return client.connect();
}

if (process.env.NODE_ENV === "development") {
  // In development, reuse the global promise across HMR reloads
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = createClientPromise();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production (serverless), create a new connection per instance.
  // The MongoClient pool handles re-use within the same warm instance.
  clientPromise = createClientPromise();
}

export async function connectToDatabase() {
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  return { client, db };
}

export default clientPromise;
