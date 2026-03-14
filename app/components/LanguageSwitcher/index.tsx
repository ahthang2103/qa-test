'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const localeLabels: Record<string, string> = {
  vi: 'VI',
  en: 'EN',
};

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className="ml-2 flex items-center rounded-full border border-blue-100/50 dark:border-blue-800/30">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`rounded-full px-3 py-0.5 text-xs font-medium transition-colors ${
            loc === locale
              ? 'bg-blue-600 text-white dark:bg-blue-500'
              : 'text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
          }`}
        >
          {localeLabels[loc] ?? loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
