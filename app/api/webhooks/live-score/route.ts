import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const signature = request.headers.get('x-provider-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 401 });
  }

  const payload = await request.json();
  // Validate + enqueue payload for async processing.
  return NextResponse.json({ accepted: true, payloadType: payload?.type ?? 'unknown' }, { status: 202 });
}
