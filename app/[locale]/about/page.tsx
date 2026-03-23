import { useTranslations } from 'next-intl';

// Utils
import { customGenerateMetadata } from '@/app/utils/pages';

// Constants
import { ROUTES } from '@/app/constants/routes';

// Components
import { PageLinks } from '@/app/components/PageLinks';

export const generateMetadata = () => customGenerateMetadata(ROUTES.ABOUT);

const experienceItems = ['wisewires', 'fptAcademy', 'ltsGroup'] as const;
const skillItems = ['Jira', 'SQL', 'ISTQB'] as const;

const About = () => {
  const t = useTranslations('AboutPage');

  return (
    <div className="w-full max-w-2xl py-12">
      <h1 className="mb-10 text-2xl font-semibold">{t('title')}</h1>

      {/* Profile */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold">{t('profile.title')}</h2>
        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
          <dt className="text-black/40">{t('profile.labelName')}</dt>
          <dd>{t('profile.name')}</dd>

          <dt className="text-black/40">{t('profile.labelBirthYear')}</dt>
          <dd>{t('profile.birthYear')}</dd>

          <dt className="text-black/40">{t('profile.labelHometown')}</dt>
          <dd>{t('profile.hometown')}</dd>
        </dl>
      </section>

      {/* Goals */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold">{t('goals.title')}</h2>
        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
          <dt className="text-black/40">{t('goals.labelShortTerm')}</dt>
          <dd>{t('goals.shortTerm')}</dd>

          <dt className="text-black/40">{t('goals.labelLongTerm')}</dt>
          <dd>{t('goals.longTerm')}</dd>
        </dl>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold">{t('skills.title')}</h2>
        <ul className="list-disc space-y-1.5 pl-5 text-sm">
          {skillItems.map((key) => (
            <li key={key}>{t(`skills.items.${key}`)}</li>
          ))}
        </ul>
      </section>

      {/* Experience Timeline */}
      <section className="mb-10">
        <h2 className="mb-6 text-lg font-semibold">{t('experienceTitle')}</h2>
        <div className="relative border-l-2 border-black/10 pl-8">
          {experienceItems.map((key) => (
            <div key={key} className="relative mb-10 last:mb-0">
              <div className="absolute -left-10.25 top-1 h-4 w-4 rounded-full border-2 border-black/20 bg-white" />

              <span className="text-sm font-medium text-black/40">
                {t(`experience.${key}.period`)}
              </span>

              <h3 className="mt-1 text-base font-semibold">
                {t(`experience.${key}.company`)}
              </h3>

              <p className="mt-0.5 text-sm text-black/50">
                {t(`experience.${key}.role`)}
              </p>

              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-black/70">
                {Array.from({ length: 10 }, (_, index) => index).map((index) => {
                  const taskKey = `experience.${key}.tasks.${index}`;
                  if (!t.has(taskKey)) return null;

                  return <li key={index}>{t(taskKey)}</li>;
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <PageLinks exclude="/about" />
    </div>
  );
};

export default About;