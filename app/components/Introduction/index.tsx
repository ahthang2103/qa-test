'use client';

import { useTranslations } from 'next-intl';

export const Introduction = () => {
  const t = useTranslations('Introduction');

  const bold = (chunks: React.ReactNode) => <strong>{chunks}</strong>;

  return (
    <section
      id="about"
      className="mx-auto w-full max-w-3xl space-y-6 py-12 text-base leading-relaxed"
    >
      <p>{t.rich('p1', { bold })}</p>
      <p>{t('p2')}</p>
      <p>{t('p3')}</p>
      <p>{t.rich('p4', { bold })}</p>

      <ul className="list-disc space-y-1 pl-6">
        <li>{t('li1')}</li>
        <li>{t('li2')}</li>
        <li>{t('li3')}</li>
      </ul>

      <p>
        {t.rich('p5', {
          bold,
          link: (chunks) => (
            <a
              href="https://www.facebook.com/share/p/1AdpF9AoJ1/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {chunks}
            </a>
          ),
        })}
      </p>
      <p>{t('p6')}</p>
      <p>{t('p7')}</p>
      <p>{t('p8')}</p>
      <p>{t('p9')}</p>
    </section>
  );
};
