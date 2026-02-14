import { MatchCard } from '@/components/match-card';
import { SectionBlock } from '@/components/section-block';
import { completedMatches, liveMatches, upcomingMatches } from '@/lib/services/mock-data';
import { buildSportsEventJsonLd } from '@/lib/seo/schema';

export default function HomePage() {
  const jsonLd = buildSportsEventJsonLd(liveMatches[0]);

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SectionBlock title="🔴 Live Matches">
        <div className="grid gap-4 md:grid-cols-2">
          {liveMatches.map((match) => <MatchCard key={match.id} match={match} />)}
        </div>
      </SectionBlock>

      <SectionBlock title="⏭ Upcoming Schedule">
        <div className="grid gap-4 md:grid-cols-2">
          {upcomingMatches.map((match) => <MatchCard key={match.id} match={match} />)}
        </div>
      </SectionBlock>

      <SectionBlock title="✅ Recently Finished">
        <div className="grid gap-4 md:grid-cols-2">
          {completedMatches.map((match) => <MatchCard key={match.id} match={match} />)}
        </div>
      </SectionBlock>

      <SectionBlock title="🏆 Featured Tournaments">
        <ul className="grid gap-2 text-sm md:grid-cols-3">
          {['PSL', 'IPL', 'BBL', 'BPL', 'ICC T20 World Cup', 'ODI World Cup', 'Champions Trophy', 'Asia Cup', 'The Ashes', 'Tri-Series', 'Bilateral Series'].map((name) => (
            <li key={name} className="rounded border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">{name}</li>
          ))}
        </ul>
      </SectionBlock>
    </div>
  );
}
