import Image from 'next/image';
import { featuredPlayers } from '@/lib/services/mock-data';

export default function PlayerProfilePage({ params }: { params: { playerId: string } }) {
  const player = featuredPlayers.find((item) => item.id === params.playerId) ?? featuredPlayers[0];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-4 md:flex-row dark:border-slate-800 dark:bg-slate-900">
        <Image src={player.imageUrl} alt={player.name} width={180} height={180} className="rounded-md object-cover" />
        <div>
          <h1 className="text-2xl font-bold">{player.name}</h1>
          <p>{player.role} • {player.country}</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{player.bio}</p>
        </div>
      </div>

      <section className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-2 text-xl font-semibold">Career Stats</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {player.stats.map((stat) => (
            <article key={stat.format} className="rounded border border-slate-200 p-3 dark:border-slate-700">
              <p className="font-semibold">{stat.format}</p>
              <p>Matches: {stat.matches}</p>
              <p>Runs: {stat.runs}</p>
              <p>Wickets: {stat.wickets}</p>
              <p>Average: {stat.average}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
