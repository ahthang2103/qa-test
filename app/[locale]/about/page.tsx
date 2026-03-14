import { useTranslations } from 'next-intl';

const timelineItems = ['university', 'highSchool', 'middleSchool'] as const;

const About = () => {
  const t = useTranslations('AboutPage');

  return (
    <div className="w-full max-w-2xl py-12">
      <h1 className="mb-2 text-2xl font-semibold">{t('title')}</h1>
      <h2 className="mb-8 text-lg text-black/50">{t('subtitle')}</h2>

      <div className="relative border-l-2 border-black/10 pl-8">
        {timelineItems.map((key) => (
          <div key={key} className="relative mb-10 last:mb-0">
            <div className="absolute -left-10.25 top-1 h-4 w-4 rounded-full border-2 border-black/20 bg-white" />
            <span className="text-sm font-medium text-black/40">
              {t(`education.${key}.period`)}
            </span>
            <h3 className="mt-1 text-base font-semibold">
              {t(`education.${key}.school`)}
            </h3>
            {t.has(`education.${key}.location`) && (
              <p className="mt-0.5 text-sm text-black/50">
                {t(`education.${key}.location`)}
              </p>
            )}
            {t.has(`education.${key}.description`) && (
              <p className="mt-0.5 text-sm text-black/50">
                {t(`education.${key}.description`)}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
