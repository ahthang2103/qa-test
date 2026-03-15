'use client';

import { useState, useEffect, useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

// i18n
import { useRouter, usePathname } from '@/i18n/navigation';

import { diaryEntries } from '../entries/index';
import { Outline } from './Outline';

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr + 'T00:00:00');
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const TrainingContent = () => {
  const t = useTranslations('TrainingPage');
  const locale = useLocale();
  const entries = diaryEntries[locale] ?? [];
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const dateParam = searchParams.get('date');
  const defaultDate =
    (dateParam && entries.find((e) => e.date === dateParam)?.date) ??
    entries[entries.length - 1]?.date ??
    '';

  const [activeDate, setActiveDate] = useState(defaultDate);
  const [isVisible, setIsVisible] = useState(true);
  const [copied, setCopied] = useState(false);
  const pendingDate = useRef(activeDate);

  const handleSelect = (date: string) => {
    if (date === activeDate) return;
    pendingDate.current = date;
    setIsVisible(false);
    router.replace(`${pathname}?date=${date}`, { scroll: false });
  };

  useEffect(() => {
    if (!isVisible) {
      const timeout = setTimeout(() => {
        setActiveDate(pendingDate.current);
        setIsVisible(true);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  const handleShare = async () => {
    const url = window.location.href;
    const title = selectedEntry?.title ?? t('title');

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // User cancelled or share failed — do nothing
      }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const outlineItems = [...entries].reverse().map((entry) => ({
    date: entry.date,
    label: formatDate(entry.date),
  }));

  const selectedEntry = entries.find((e) => e.date === activeDate);

  return (
    <div className="flex w-full max-w-4xl gap-8 py-12">
      <Outline
        items={outlineItems}
        activeDate={activeDate}
        onSelect={handleSelect}
      />

      <div className="w-full max-w-2xl">
        <h1 className="mb-10 text-2xl font-semibold">{t('title')}</h1>

        {!selectedEntry ? (
          <p className="text-black/60">{t('placeholder')}</p>
        ) : (
          <div
            className={`relative border-l-2 border-black/10 pl-8 transition-opacity duration-150 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative mb-12 last:mb-0">
              <div className="absolute -left-10.25 top-1 h-4 w-4 rounded-full border-2 border-black/20 bg-white" />

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-black/40">
                  {formatDate(selectedEntry.date)}
                </span>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs text-blue-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
                >
                  {copied ? t('copied') : t('share')}
                </button>
              </div>

              <h3 className="mt-1 text-base font-semibold">
                {selectedEntry.title}
              </h3>

              <div className="diary-content mt-3 text-sm leading-relaxed text-black/70">
                {selectedEntry.content}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
