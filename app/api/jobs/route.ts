import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const jobs = await db.collection("jobs").find().sort({ created_at: -1 }).toArray();

    const formatted = jobs.map((j) => ({
      id: j._id.toString(),
      title: j.title,
      category: j.category,
      location: j.location,
      type: j.type,
      experience: j.experience,
      desc: j.desc,
      status: j.status,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { db } = await connectToDatabase();

    const newJob = {
      title: body.title || "",
      category: body.category || "",
      location: body.location || "",
      type: body.type || "Full-Time",
      experience: body.experience || "Intermediate (3-5 Years)",
      desc: body.desc || "",
      status: body.status || "active",
      created_at: new Date(),
    };

    const result = await db.collection("jobs").insertOne(newJob);

    return NextResponse.json(
      { id: result.insertedId.toString(), ...newJob },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to create job:", error);
    return NextResponse.json({ error: "Failed to create job" }, { status: 500 });
  }
}
