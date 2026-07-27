import { MongoClient } from "mongodb";
import dns from "dns";

const MONGO_URI = process.env.MONGO_URI || "";
const DB_NAME = process.env.DB_NAME || "podcast";

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable inside .env");
}

// Resolves a mongodb+srv:// URI into a direct mongodb:// URI using public DNS resolvers
async function resolveDirectUri(srvUri: string): Promise<string> {
  if (!srvUri.startsWith("mongodb+srv://")) {
    return srvUri;
  }

  const match = srvUri.match(/^mongodb\+srv:\/\/([^:]+):([^@]+)@([^/?#]+)(.*)$/);
  if (!match) {
    return srvUri;
  }

  const [, username, password, host, rest] = match;
  const srvDomain = `_mongodb._tcp.${host}`;

  const resolver = new dns.Resolver();
  try {
    resolver.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);
  } catch (dnsErr) {
    console.warn("MongoDB client resolver: failed to set custom DNS servers:", dnsErr);
  }

  return new Promise((resolve) => {
    resolver.resolveSrv(srvDomain, (err, addresses) => {
      if (err || !addresses || addresses.length === 0) {
        console.warn("MongoDB client resolver: DNS SRV resolution failed, falling back to original SRV URI:", err);
        resolve(srvUri);
        return;
      }

      const primary = addresses[0];
      let directUri = `mongodb://${username}:${password}@${primary.name}:${primary.port}${rest || ""}`;

      // Ensure required parameters for direct SSL/TLS connections (e.g. to Azure Cosmos DB)
      const urlHasQuery = directUri.includes("?");
      const separator = urlHasQuery ? "&" : "?";

      if (!directUri.includes("tls=")) {
        directUri += `${separator}tls=true`;
      }
      if (!directUri.includes("authMechanism=")) {
        const sep = directUri.includes("?") ? "&" : "?";
        directUri += `${sep}authMechanism=SCRAM-SHA-256`;
      }
      if (!directUri.includes("retrywrites=")) {
        const sep = directUri.includes("?") ? "&" : "?";
        directUri += `${sep}retrywrites=false`;
      }

      resolve(directUri);
    });
  });
}

const globalWithMongo = global as any;

let clientPromise: Promise<MongoClient>;

async function initClient(): Promise<MongoClient> {
  const uri = await resolveDirectUri(MONGO_URI);
  console.log("MongoDB initClient - Connection URI resolved to:", uri.replace(/:[^@]+@/, ":****@"));
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
  return client.connect();
}

if (process.env.NODE_ENV === "development") {
  if (!globalWithMongo._mongoClientPromise) {
    globalWithMongo._mongoClientPromise = initClient();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  clientPromise = initClient();
}

export async function connectToDatabase() {
  console.log("MongoDB connectToDatabase requested...");
  const connectedClient = await clientPromise;
  const db = connectedClient.db(DB_NAME);
  return { client: connectedClient, db };
}

export default clientPromise;
