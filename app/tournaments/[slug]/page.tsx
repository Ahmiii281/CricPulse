export default function TournamentDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold capitalize">{params.slug.replaceAll('-', ' ')}</h1>
      <section className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="font-semibold">Fixtures</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">Upcoming fixtures with venue and start times.</p>
      </section>
      <section className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="font-semibold">Points Table</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">Auto-updated standings, net run rate, and qualification scenarios.</p>
      </section>
      <section className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="font-semibold">Results & Team Stats</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">Team form, top run scorers, wicket takers, and match outcomes.</p>
      </section>
    </div>
  );
}
