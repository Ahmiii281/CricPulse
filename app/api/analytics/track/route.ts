import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({ ok: true, captured: body.event ?? 'unknown' }, { status: 201 });
}
