# SEO & Monetization Strategy

## SEO
- Dynamic match URLs: `/live/[matchId]`
- SSR for match, tournament, and player pages.
- SportsEvent schema markup embedded on homepage and live routes.
- Unique titles/descriptions per entity page.
- Auto sitemap generation using `next-sitemap`.

## Monetization
- Google AdSense slot definitions in `lib/monetization/ad-slots.ts`.
- Affiliate-ready legal streaming provider model with country targeting.
- Sponsored tournament modules and native banners.

## Compliance
- No pirated stream links.
- Display legal disclaimer near streaming links.
- Respect third-party API terms and caching limits.
