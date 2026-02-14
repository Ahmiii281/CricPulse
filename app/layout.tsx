import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'CricPulse | Real-time Cricket Coverage',
  description: 'Google-style live cricket text commentary, live scores, player stats, and official streaming links.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
