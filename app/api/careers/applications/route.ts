import { NextResponse } from "next/server";
import { getStoredApplications, createStoredApplication } from "@/lib/applicationsStore";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const applications = await getStoredApplications();
    return NextResponse.json(applications);
  } catch (error: any) {
    console.error("Failed to fetch applications:", error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newApp = await createStoredApplication(body);
    return NextResponse.json(newApp, { status: 201 });
  } catch (error: any) {
    console.error("Failed to create application:", error);
    return NextResponse.json({ error: "Failed to store application" }, { status: 500 });
  }
}
