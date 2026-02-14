'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('cricpulse-theme') as 'light' | 'dark' | null;
    const initial = stored ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const switchTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('cricpulse-theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');

    fetch('/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event: 'theme_changed', payload: { theme: next } })
    }).catch(() => undefined);
  };

  return (
    <button
      onClick={switchTheme}
      className="rounded-md border border-slate-300 px-3 py-1 text-sm dark:border-slate-700"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
