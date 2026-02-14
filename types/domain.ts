export type MatchStatus = 'LIVE' | 'UPCOMING' | 'COMPLETED';

export interface Score {
  runs: number;
  wickets: number;
  overs: string;
}

export interface MatchSummary {
  id: string;
  tournament: string;
  teams: [string, string];
  status: MatchStatus;
  score: Score;
  target?: number;
  startTime: string;
  venue: string;
}

export interface CommentaryEvent {
  id: string;
  over: string;
  text: string;
  batsman: string;
  bowler: string;
  runs: number;
  isBoundary: boolean;
}

export interface PlayerProfile {
  id: string;
  name: string;
  role: string;
  country: string;
  imageUrl: string;
  bio: string;
  stats: {
    format: 'TEST' | 'ODI' | 'T20I';
    matches: number;
    runs: number;
    wickets: number;
    average: number;
  }[];
  recentPerformances: string[];
}
