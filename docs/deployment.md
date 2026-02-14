# Deployment Guide

## Recommended production topology
- **Frontend/App API:** Vercel
- **Background workers + socket service:** Railway / AWS ECS Fargate
- **Database:** Supabase PostgreSQL (or AWS RDS)
- **Cache:** Upstash Redis / Elasticache

## Steps
1. Provision PostgreSQL and Redis.
2. Set environment variables from `.env.example`.
3. Run schema migration:
   ```bash
   npx prisma migrate deploy
   ```
4. Deploy Next.js app to Vercel.
5. Deploy ingestion workers and websocket fanout service to Railway/AWS.
6. Configure custom domain + CDN + TLS.
7. Enable logging + uptime checks + alerting.

## Operational checklist
- Configure WAF and bot filtering.
- Add autoscaling policies.
- Configure backup and retention for database.
- Track Core Web Vitals and API p95 latency.
