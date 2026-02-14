import { NextRequest, NextResponse } from 'next/server';
import { getLegalStreamingLinks } from '@/lib/services/streaming-service';
import { legalStreamingDisclaimer } from '@/lib/legal/disclaimer';

export async function GET(request: NextRequest) {
  const country = request.nextUrl.searchParams.get('country') ?? 'IN';
  return NextResponse.json({
    country,
    links: getLegalStreamingLinks(country),
    disclaimer: legalStreamingDisclaimer
  });
}
