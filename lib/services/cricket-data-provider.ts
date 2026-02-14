import { liveMatches } from '@/lib/services/mock-data';

export interface CricketFeedProvider {
  getLiveMatch(matchId: string): Promise<typeof liveMatches[number] | null>;
}

export class CricketApiProvider implements CricketFeedProvider {
  async getLiveMatch(matchId: string) {
    const apiKey = process.env.CRICKET_API_KEY;
    if (!apiKey) return liveMatches.find((item) => item.id === matchId) ?? null;

    // Placeholder integration layer: connect your official provider SDK/API here.
    return liveMatches.find((item) => item.id === matchId) ?? null;
  }
}
