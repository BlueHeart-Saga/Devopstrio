import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");
  
  if (!q) {
    return NextResponse.json([]);
  }

  try {
    // We proxy this request through the backend to avoid CORS and set a proper User-Agent
    const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=5`, {
      headers: {
        "User-Agent": "DevopstrioAdmin/1.0 (Contact: admin@devopstrio.com)",
        "Accept-Language": "en-US,en;q=0.9"
      }
    });
    
    if (!res.ok) {
      throw new Error(`Nominatim responded with ${res.status}`);
    }
    
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Location suggest error:", error);
    return NextResponse.json([], { status: 500 });
  }
}
