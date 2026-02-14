import Link from 'next/link';

const tournaments = [
  'ipl', 'psl', 'bbl', 'bpl', 'icc-t20-world-cup', 'icc-odi-world-cup', 'champions-trophy', 'asia-cup', 'the-ashes', 'tri-series', 'bilateral-series'
];

export default function TournamentsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Global Tournaments & Leagues</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {tournaments.map((slug) => (
          <Link key={slug} href={`/tournaments/${slug}`} className="rounded border border-slate-200 bg-white p-4 capitalize dark:border-slate-800 dark:bg-slate-900">
            {slug.replaceAll('-', ' ')}
          </Link>
        ))}
      </div>
    </div>
  );
}
