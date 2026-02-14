import { NextRequest, NextResponse } from 'next/server';

const WINDOW_MS = 60_000;
const LIMIT = 120;
const bucket = new Map<string, { count: number; resetAt: number }>();

export function middleware(request: NextRequest) {
  const ip = request.ip ?? 'unknown';
  const now = Date.now();
  const current = bucket.get(ip);

  if (!current || current.resetAt < now) {
    bucket.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return NextResponse.next();
  }

  if (current.count >= LIMIT) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  current.count += 1;
  bucket.set(ip, current);
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*']
};
