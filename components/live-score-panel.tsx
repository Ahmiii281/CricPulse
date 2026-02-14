'use client';

import { useEffect, useState } from 'react';
import { MatchSummary } from '@/types/domain';

export function LiveScorePanel({ match }: { match: MatchSummary }) {
  const [snapshot, setSnapshot] = useState(match);

  useEffect(() => {
    let mounted = true;
    const interval = setInterval(async () => {
      const response = await fetch(`/api/matches/live?matchId=${match.id}`, { cache: 'no-store' });
      if (!response.ok || !mounted) return;
      const data = await response.json();
      setSnapshot(data.match);
    }, 5000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [match.id]);

  return (
    <section className="grid gap-4 rounded-lg border border-accent-500/40 bg-white p-4 md:grid-cols-3 dark:bg-slate-900">
      <div>
        <p className="text-xs uppercase text-slate-500">Score</p>
        <p className="text-3xl font-bold">{snapshot.score.runs}/{snapshot.score.wickets}</p>
        <p>{snapshot.score.overs} overs</p>
      </div>
      <div>
        <p className="text-xs uppercase text-slate-500">Run Rate</p>
        <p className="text-2xl font-semibold">{(snapshot.score.runs / Number(snapshot.score.overs.split('.')[0] || 1)).toFixed(2)}</p>
        <p className="text-sm">Required RR: 9.8</p>
      </div>
      <div>
        <p className="text-xs uppercase text-slate-500">Match Context</p>
        <p className="font-medium">Partnership: 62 (34)</p>
        <p className="text-sm">Toss: MI elected to bat</p>
        <p className="text-sm">Umpires: K. Nair, R. Menon</p>
      </div>
    </section>
  );
}
