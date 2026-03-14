import { useLocale, useTranslations } from 'next-intl';
import { diaryEntries } from './entries/index';

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr + 'T00:00:00');
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const Training = () => {
  const t = useTranslations('TrainingPage');
  const locale = useLocale();
  const entries = diaryEntries[locale] ?? [];

  return (
    <div className="w-full max-w-2xl py-12">
      <h1 className="mb-10 text-2xl font-semibold">{t('title')}</h1>

      {entries.length === 0 ? (
        <p className="text-black/60">{t('placeholder')}</p>
      ) : (
        <div className="relative border-l-2 border-black/10 pl-8">
          {entries.map((entry, index) => (
            <div key={entry.date + index} className="relative mb-12 last:mb-0">
              <div className="absolute -left-10.25 top-1 h-4 w-4 rounded-full border-2 border-black/20 bg-white" />

              <span className="text-sm font-medium text-black/40">
                {formatDate(entry.date)}
              </span>
              <h3 className="mt-1 text-base font-semibold">{entry.title}</h3>

              <div className="diary-content mt-3 text-sm leading-relaxed text-black/70">
                {entry.content}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Training;
