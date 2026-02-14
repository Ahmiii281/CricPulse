# CricPulse

CricPulse is a production-oriented SaaS platform for real-time cricket coverage with SEO-first text commentary, live scores, player statistics, tournament hubs, legal streaming links, and monetization surfaces.

## Product Capabilities
- Google-style real-time text commentary pages.
- Live, upcoming, and completed match tracking.
- Coverage model for IPL, PSL, BBL, BPL, ICC events, Asia Cup, The Ashes, tri-series, bilateral series, and global domestic leagues.
- Player profiles with format-specific statistics.
- Tournament pages with fixtures, points table, results, and team stats.
- Legal official streaming links with disclaimers and affiliate-ready fields.
- SaaS architecture foundations: tenants, RBAC, JWT auth, rate-limited APIs, analytics tracking, admin console.

## Stack
- **Frontend:** Next.js App Router, React, Tailwind CSS
- **Backend:** Next.js route handlers (API), WebSocket layer abstraction
- **Database:** PostgreSQL + Prisma schema (Supabase/RDS compatible)
- **Infra:** Redis cache abstraction, CDN-friendly architecture

## Quick Start
```bash
npm install
npm run dev
```

Set environment variables (see `.env.example`) before running migrations.

## Documentation
- [Architecture](docs/architecture.md)
- [API Reference](docs/api.md)
- [Deployment Guide](docs/deployment.md)
- [SEO & Monetization](docs/seo-and-growth.md)
