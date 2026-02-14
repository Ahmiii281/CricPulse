import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Sync queued for provider ingestion workers.' }, { status: 202 });
}
