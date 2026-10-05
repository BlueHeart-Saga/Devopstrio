import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, resourceNeeded, comments, website } = body;

    // Honeypot check
    if (website) {
      return NextResponse.json({ success: true, message: 'Request received' });
    }

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    console.log('[Marketing Request Received]:', {
      name,
      email,
      company,
      resourceNeeded,
      comments,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Custom collateral request received successfully',
    });
  } catch (error: any) {
    console.error('Failed to process marketing request:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
