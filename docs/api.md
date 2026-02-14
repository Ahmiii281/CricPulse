# API Documentation

## Authentication
### `POST /api/auth/login`
Authenticates user and returns access token.

Request:
```json
{ "email": "admin@cricpulse.com", "password": "admin123" }
```

Response:
```json
{ "accessToken": "<jwt>" }
```

## Live Matches
### `GET /api/matches/live?matchId=<id>`
Returns live match snapshot.

## Streaming Links
### `GET /api/streaming-links?country=IN`
Returns legal country-specific official streaming links and disclaimer.

## Webhooks
### `POST /api/webhooks/live-score`
Accepts provider score events (signed request).

## Analytics
### `POST /api/analytics/track`
Captures user/product analytics event.

## Admin
### `POST /api/admin/sync`
Queues a sync operation for score ingestion workers.
