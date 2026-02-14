import { commentary, liveMatches } from '@/lib/services/mock-data';
import { LiveScorePanel } from '@/components/live-score-panel';

export default function LiveMatchPage({ params }: { params: { matchId: string } }) {
  const match = liveMatches.find((item) => item.id === params.matchId) ?? liveMatches[0];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{match.teams[0]} vs {match.teams[1]}</h1>
      <LiveScorePanel match={match} />

      <section className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-3 text-xl font-semibold">Ball-by-Ball Text Commentary</h2>
        <ul className="space-y-2">
          {commentary.map((event) => (
            <li key={event.id} className="rounded border border-slate-200 p-3 text-sm dark:border-slate-700">
              <p className="font-semibold">Over {event.over}</p>
              <p>{event.text}</p>
              <p className="text-xs text-slate-500">{event.batsman} vs {event.bowler}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
