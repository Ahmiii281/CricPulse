# CricPulse Architecture

## High-level system design
1. **Web App (Next.js)** serves SSR pages for SEO and fast first paint.
2. **Live Data Ingestion Service** consumes official score providers and normalizes feed events.
3. **Real-time Fanout Layer** publishes updates via WebSockets + optional SSE fallback.
4. **PostgreSQL** stores multi-tenant product data (users, matches, commentary, tournaments, affiliates).
5. **Redis** handles cache, hot match snapshots, and distributed rate-limit counters.
6. **CDN + Edge** caches static assets and pre-rendered tournament/player pages.

## Multi-tenant model
- Tenant-scoped core tables: users, tournaments, matches.
- Row-level authorization using `tenantId` checks in repository layer.
- Subscription-ready `Tenant.plan` for future feature gating.

## Scalability notes
- Horizontal scale by splitting workloads:
  - API + SSR nodes (stateless)
  - Ingestion workers
  - WebSocket broker nodes
- Cache strategy:
  - Live score snapshots (TTL 3-8 seconds)
  - Tournament standings cache (TTL 60 seconds)
  - Player profile cache (TTL 1 hour)
- Peak traffic strategy for World Cups:
  - aggressive CDN caching for non-live routes
  - Redis pub/sub for match room fanout
  - queue-based processing for provider webhook bursts

## Security & compliance
- JWT-based auth, password hashing, RBAC.
- API rate limiting middleware.
- GDPR foundations: user preference storage and user-scoped export/delete workflow placeholders.
- Strict legal streaming disclaimers and official provider link policy.
