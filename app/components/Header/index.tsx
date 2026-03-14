'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

// i18n
import { Link } from '@/i18n/navigation';

// Components
import { LanguageSwitcher } from '../LanguageSwitcher';
import { Logo } from '../Logo';

const navItems = [
  { key: 'about', href: '/about' },
  { key: 'education', href: '/training' },
  { key: 'practices', href: '/practices' },
] as const;

export const Header = () => {
  const t = useTranslations('Header');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/20 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2.5">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className="text-sm font-medium transition-opacity duration-300 hover:opacity-50"
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        {/* Right side: icons + language */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/havynguyen23"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-300 hover:opacity-50"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <LanguageSwitcher />

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 transition-opacity duration-300 hover:opacity-50 md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="border-t border-blue-200/60 px-4 pb-3 pt-2 md:hidden dark:border-blue-800/60">
          {navItems.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium transition-opacity duration-300 hover:opacity-50"
            >
              {t(key)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};
