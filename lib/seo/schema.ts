import { MatchSummary } from '@/types/domain';

export function buildSportsEventJsonLd(match: MatchSummary) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: `${match.teams[0]} vs ${match.teams[1]}`,
    sport: 'Cricket',
    eventStatus: match.status,
    location: {
      '@type': 'Place',
      name: match.venue
    },
    startDate: match.startTime,
    competitor: match.teams.map((team) => ({ '@type': 'SportsTeam', name: team }))
  };
}
