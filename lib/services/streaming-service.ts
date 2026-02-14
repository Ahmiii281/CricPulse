const providers: Record<string, { platform: string; url: string }[]> = {
  IN: [{ platform: 'JioCinema', url: 'https://www.jiocinema.com/sports' }],
  PK: [{ platform: 'A Sports', url: 'https://asports.tv' }],
  AU: [{ platform: 'Kayo Sports', url: 'https://kayosports.com.au' }],
  GB: [{ platform: 'Sky Sports', url: 'https://www.skysports.com/cricket' }]
};

export function getLegalStreamingLinks(countryCode: string) {
  return providers[countryCode.toUpperCase()] ?? [];
}
