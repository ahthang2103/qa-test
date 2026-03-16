'use client';

import { useLocale, useTranslations } from 'next-intl';

// Constants
import { APP_INFORMATION } from '@/app/constants/app';

export const Footer = () => {
  const t = useTranslations('Footer');
  const locale = useLocale();
  const name = locale === 'vi' ? APP_INFORMATION.NAME_IN_VIETNAMESE : APP_INFORMATION.NAME;

  return (
    <footer className="w-full border-t border-black/20 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-6 sm:px-6">
        <p className="text-center text-xs text-gray-500">
          {t('copyright', { year: new Date().getFullYear(), name })}
        </p>
      </div>
    </footer>
  );
};
