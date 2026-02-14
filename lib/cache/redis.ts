import Redis from 'ioredis';

let client: Redis | null = null;

export function getRedisClient() {
  if (!client) {
    client = new Redis(process.env.REDIS_URL ?? 'redis://localhost:6379', {
      maxRetriesPerRequest: 1,
      enableReadyCheck: false
    });
  }
  return client;
}
