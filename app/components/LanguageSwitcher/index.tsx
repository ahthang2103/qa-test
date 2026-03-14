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
    <div className="ml-2 flex items-center rounded-full border border-gray-200">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`rounded-full px-3 py-0.5 text-xs font-medium transition-opacity ${
            loc === locale ? 'bg-black text-white' : 'hover:opacity-50'
          }`}
        >
          {localeLabels[loc] ?? loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
