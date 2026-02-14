import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/tournaments', label: 'Tournaments' },
  { href: '/players/virat-kohli', label: 'Players' },
  { href: '/admin', label: 'Admin' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-accent-700 dark:text-accent-500">CricPulse</Link>
        <nav className="flex items-center gap-4">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm hover:text-accent-700">
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
