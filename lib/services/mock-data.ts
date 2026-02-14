import { CommentaryEvent, MatchSummary, PlayerProfile } from '@/types/domain';

export const liveMatches: MatchSummary[] = [
  {
    id: 'ipl-2026-001',
    tournament: 'IPL 2026',
    teams: ['Mumbai Indians', 'Chennai Super Kings'],
    status: 'LIVE',
    score: { runs: 174, wickets: 4, overs: '18.3' },
    target: 192,
    startTime: new Date().toISOString(),
    venue: 'Wankhede Stadium, Mumbai'
  }
];

export const upcomingMatches: MatchSummary[] = [
  {
    id: 'psl-2026-011',
    tournament: 'PSL 2026',
    teams: ['Lahore Qalandars', 'Karachi Kings'],
    status: 'UPCOMING',
    score: { runs: 0, wickets: 0, overs: '0.0' },
    startTime: new Date(Date.now() + 1000 * 60 * 60 * 5).toISOString(),
    venue: 'Gaddafi Stadium, Lahore'
  }
];

export const completedMatches: MatchSummary[] = [
  {
    id: 'ashes-2026-002',
    tournament: 'The Ashes',
    teams: ['Australia', 'England'],
    status: 'COMPLETED',
    score: { runs: 321, wickets: 9, overs: '50.0' },
    startTime: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    venue: 'MCG, Melbourne'
  }
];

export const commentary: CommentaryEvent[] = [
  {
    id: 'c1',
    over: '18.3',
    text: 'Slower ball outside off, guided for a single to deep point.',
    batsman: 'Suryakumar Yadav',
    bowler: 'Deepak Chahar',
    runs: 1,
    isBoundary: false
  },
  {
    id: 'c2',
    over: '18.2',
    text: 'FOUR! Opens the face late and beats short third with precision.',
    batsman: 'Suryakumar Yadav',
    bowler: 'Deepak Chahar',
    runs: 4,
    isBoundary: true
  }
];

export const featuredPlayers: PlayerProfile[] = [
  {
    id: 'virat-kohli',
    name: 'Virat Kohli',
    role: 'Top-order batter',
    country: 'India',
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=500&auto=format&fit=crop',
    bio: 'Modern batting icon known for consistency across formats and chase mastery.',
    stats: [
      { format: 'TEST', matches: 113, runs: 8848, wickets: 0, average: 49.2 },
      { format: 'ODI', matches: 295, runs: 13906, wickets: 4, average: 58.1 },
      { format: 'T20I', matches: 117, runs: 4037, wickets: 0, average: 51.1 }
    ],
    recentPerformances: ['76 (44) vs AUS', '102* (95) vs SA', '58 (39) vs NZ']
  }
];
