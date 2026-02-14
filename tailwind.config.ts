import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#fff7ed',
          500: '#f97316',
          700: '#c2410c'
        }
      }
    }
  },
  plugins: []
};

export default config;
