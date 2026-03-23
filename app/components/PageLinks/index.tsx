'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const pages = [
  { key: 'about', href: '/about' },
  { key: 'training', href: '/training' },
  { key: 'practices', href: '/practices' },
  { key: 'knowledge', href: '/knowledge' },
  { key: 'plans', href: '/plans' },
] as const;

type PageHref = (typeof pages)[number]['href'];

interface PageLinksProps {
  exclude?: PageHref;
}

export const PageLinks = ({ exclude }: PageLinksProps) => {
  const t = useTranslations('PageLinks');
  const filtered = exclude ? pages.filter((p) => p.href !== exclude) : pages;
  const colsCls = filtered.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4';

  return (
    <section className="mx-auto w-full max-w-3xl py-12">
      <div className={`grid gap-4 sm:grid-cols-2 ${colsCls}`}>
        {filtered.map(({ key, href }) => (
          <Link
            key={key}
            href={href}
            className="group rounded-lg border border-black/10 p-5 transition-colors duration-200 hover:border-black/30 hover:bg-black/2"
          >
            <h3 className="mb-1 text-base font-semibold">
              {t(`${key}.title`)}
              <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1">
                &rarr;
              </span>
            </h3>
            <p className="text-sm text-black/50">{t(`${key}.description`)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
