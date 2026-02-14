export default function AdminPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin Console</h1>
      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-semibold">Live Feed Health</h2>
          <p className="text-sm">Latency, ingest errors, provider uptime.</p>
        </article>
        <article className="rounded border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-semibold">Content Moderation</h2>
          <p className="text-sm">Validate editorial text snippets and sponsored placements.</p>
        </article>
        <article className="rounded border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-semibold">Tenants & Plans</h2>
          <p className="text-sm">Manage organizations, user limits, and upcoming premium tiers.</p>
        </article>
      </section>
    </div>
  );
}
