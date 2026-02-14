import { NextRequest, NextResponse } from 'next/server';
import { CricketApiProvider } from '@/lib/services/cricket-data-provider';

const provider = new CricketApiProvider();

export async function GET(request: NextRequest) {
  const matchId = request.nextUrl.searchParams.get('matchId');
  if (!matchId) {
    return NextResponse.json({ error: 'matchId required' }, { status: 400 });
  }

  const match = await provider.getLiveMatch(matchId);
  if (!match) {
    return NextResponse.json({ error: 'match not found' }, { status: 404 });
  }

  return NextResponse.json({ match });
}
