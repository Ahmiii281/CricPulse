import Link from 'next/link';
import { MatchSummary } from '@/types/domain';

export function MatchCard({ match }: { match: MatchSummary }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <p className="text-xs font-semibold uppercase tracking-wide text-accent-700">{match.tournament}</p>
      <h3 className="mt-1 text-lg font-semibold">{match.teams[0]} vs {match.teams[1]}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300">{match.venue}</p>
      <p className="mt-2 text-sm">{match.score.runs}/{match.score.wickets} ({match.score.overs})</p>
      {match.target ? <p className="text-xs text-slate-500">Target: {match.target}</p> : null}
      <Link href={`/live/${match.id}`} className="mt-3 inline-block text-sm font-medium text-accent-700">
        View Live Text Commentary →
      </Link>
    </article>
  );
}
