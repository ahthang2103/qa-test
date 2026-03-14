'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = ['about', 'services', 'contact'] as const;

export default function Header() {
  const t = useTranslations('Header');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/next.svg"
            alt="Logo"
            width={80}
            height={16}
            className="dark:invert"
            priority
          />
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-8 sm:flex">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {t(item)}
              </Link>
            ))}
          </nav>

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
