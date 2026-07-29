import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb";
import { BlobServiceClient } from "@azure/storage-blob";

export const dynamic = 'force-dynamic';

const AZURE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING || "";
const AZURE_CONTAINER = process.env.AZURE_STORAGE_CONTAINER || "devopstrio";

// Helper to check if an image URL is used by other events
async function isImageUrlUsedElsewhere(db: any, url: string, excludeEventId: ObjectId | string | number) {
  let excludeQuery: any;
  if (excludeEventId instanceof ObjectId) {
    excludeQuery = { _id: { $ne: excludeEventId } };
  } else {
    excludeQuery = { $and: [{ _id: { $ne: excludeEventId } }, { id: { $ne: excludeEventId } }] };
  }

  const count = await db.collection("events").countDocuments({
    ...excludeQuery,
    "images.src": url
  });
  return count > 0;
}

// Helper to delete a blob from Azure Storage and clean up its metadata in MongoDB
async function cleanupBlob(db: any, url: string) {
  try {
    // Delete from images collection in DB
    await db.collection("images").deleteOne({ url });

    if (!AZURE_CONNECTION_STRING) return;

    const parsedUrl = new URL(url);
    const pathname = decodeURIComponent(parsedUrl.pathname);
    const containerPrefix = `/${AZURE_CONTAINER}/`;
    let blobName = "";
    
    if (pathname.startsWith(containerPrefix)) {
      blobName = pathname.substring(containerPrefix.length);
    } else {
      const parts = pathname.split("/");
      const containerIndex = parts.indexOf(AZURE_CONTAINER);
      if (containerIndex !== -1 && containerIndex < parts.length - 1) {
        blobName = parts.slice(containerIndex + 1).join("/");
      }
    }

    if (blobName) {
      console.log(`Deleting unused blob: ${blobName}`);
      const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_CONNECTION_STRING);
      const containerClient = blobServiceClient.getContainerClient(AZURE_CONTAINER);
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      await blockBlobClient.deleteIfExists();
    }
  } catch (error) {
    console.error(`Failed to clean up blob for URL ${url}:`, error);
  }
}

// Helper to parse query ID supporting both ObjectId and legacy numbers
function getQueryId(id: string): { query: Record<string, any>; parsedId: ObjectId | number | string } {
  if (ObjectId.isValid(id)) {
    const objId = new ObjectId(id);
    return { query: { _id: objId }, parsedId: objId };
  }
  
  const numericId = parseInt(id);
  if (!isNaN(numericId)) {
    return { query: { $or: [{ id: numericId }, { _id: numericId as any }] }, parsedId: numericId };
  }
  
  return { query: { id: id }, parsedId: id };
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { db } = await connectToDatabase();
    
    const { query, parsedId } = getQueryId(id);
    const existingEvent = await db.collection("events").findOne(query);
    if (!existingEvent) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    // Cleanup images that have been removed
    const existingImages: any[] = existingEvent.images || [];
    const newImages: any[] = body.images || [];
    const newImageUrls = new Set(newImages.map(img => img.src));

    for (const oldImg of existingImages) {
      if (oldImg.src && !newImageUrls.has(oldImg.src)) {
        const isUsed = await isImageUrlUsedElsewhere(db, oldImg.src, parsedId);
        if (!isUsed) {
          await cleanupBlob(db, oldImg.src);
        }
      }
    }

    // Update document
    const updateData = {
      eventName: body.eventName,
      year: body.year,
      images: newImages,
      updated_at: new Date()
    };

    await db.collection("events").updateOne(query, { $set: updateData });

    const updatedEvent = {
      id: existingEvent._id.toString(),
      ...updateData
    };

    return NextResponse.json(updatedEvent);
  } catch (error) {
    console.error("Failed to update event in database:", error);
    return NextResponse.json({ error: "Failed to update event" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const { db } = await connectToDatabase();
    
    const { query, parsedId } = getQueryId(id);
    const existingEvent = await db.collection("events").findOne(query);
    if (!existingEvent) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    // Cleanup all images in this event if not used elsewhere
    const images: any[] = existingEvent.images || [];
    for (const img of images) {
      if (img.src) {
        const isUsed = await isImageUrlUsedElsewhere(db, img.src, parsedId);
        if (!isUsed) {
          await cleanupBlob(db, img.src);
        }
      }
    }

    // Delete event document
    await db.collection("events").deleteOne(query);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete event from database:", error);
    return NextResponse.json({ error: "Failed to delete event" }, { status: 500 });
  }
}
