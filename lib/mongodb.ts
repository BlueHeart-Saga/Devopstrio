import { MongoClient, type MongoClientOptions } from "mongodb";

const MONGO_URI = process.env.MONGO_URI || "";
const DB_NAME = process.env.DB_NAME || "podcast";

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable inside .env");
}

// Direct MongoDB connection options for Azure Cosmos DB
const clientOptions: MongoClientOptions = {
  serverSelectionTimeoutMS: 10000,   // 10s timeout
  connectTimeoutMS: 10000,
  socketTimeoutMS: 30000,
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
  clientPromise = createClientPromise();
}

export async function connectToDatabase() {
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  return { client, db };
}

export default clientPromise;
