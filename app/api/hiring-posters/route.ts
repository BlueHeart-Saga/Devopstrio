import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const posters = await db.collection("hiring_posters").find().sort({ created_at: -1 }).toArray();

    const formatted = posters.map((p) => ({
      id: p._id.toString(),
      role: p.role,
      location: p.location,
      type: p.type,
      status: p.status,
      req: p.req,
      accent: p.accent,
      date: p.date,
      image: p.image || "",
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Failed to fetch hiring posters:", error);
    return NextResponse.json({ error: "Failed to fetch hiring posters" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { db } = await connectToDatabase();

    const newPoster = {
      role: body.role || "",
      location: body.location || "",
      type: body.type || "Full-Time",
      status: body.status || "active",
      req: body.req || "",
      accent: body.accent || "from-rose-500 to-red-600",
      date: body.date || "",
      image: body.image || "",
      created_at: new Date(),
    };

    const result = await db.collection("hiring_posters").insertOne(newPoster);

    return NextResponse.json(
      { id: result.insertedId.toString(), ...newPoster },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to create hiring poster:", error);
    return NextResponse.json({ error: "Failed to create hiring poster" }, { status: 500 });
  }
}
