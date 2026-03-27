import { customGenerateMetadata } from '@/app/utils/pages';
import { PageLinks } from '@/app/components/PageLinks';
import { Link } from '@/i18n/navigation';
import {
  ISTQB_CHAPTERS,
  getHubCopy,
  getUiLabels,
  resolveChapter,
} from './_data/chapters';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const copy = getHubCopy(locale);

  return customGenerateMetadata({
    PATH: '/knowledge/istqb',
    TITLE: copy.metaTitle,
    LABEL_KEY: '',
  });
};

export default async function ISTQBHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const labels = getUiLabels(locale);
  const hub = getHubCopy(locale);
  const chapters = ISTQB_CHAPTERS.map((chapter) => resolveChapter(chapter, locale));

  return (
    <div className="w-full max-w-4xl py-12">
      <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-black/50">
        <Link href="/knowledge" className="transition hover:text-black">
          {labels.knowledgeHome}
        </Link>
        <span>/</span>
        <span className="text-black">{labels.istqbHub}</span>
      </div>

      <header className="mb-8 rounded-2xl border border-black/10 p-6">
        <p className="text-sm text-black/50">{hub.badge}</p>
        <h1 className="mt-2 text-3xl font-semibold">{hub.title}</h1>
        <p className="mt-3 leading-7 text-black/60">{hub.description}</p>
      </header>

      <section className="mb-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-black/10 p-6">
          <h2 className="text-xl font-semibold">{hub.indexSectionsTitle}</h2>
          <ul className="mt-4 space-y-3 pl-5 text-black/70">
            {hub.indexSections.map((item) => (
              <li key={item} className="list-disc leading-7">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-black/10 p-6">
          <h2 className="text-xl font-semibold">{hub.howToUseTitle}</h2>
          <ul className="mt-4 space-y-3 pl-5 text-black/70">
            {hub.howToUse.map((item) => (
              <li key={item} className="list-disc leading-7">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold">{hub.chaptersTitle}</h2>
          <span className="text-sm text-black/50">{hub.totalTime}</span>
        </div>

        <div className="grid gap-4">
          {chapters.map((chapter) => (
            <Link
              key={chapter.slug}
              href={`/knowledge/istqb/${chapter.slug}`}
              className="rounded-2xl border border-black/10 p-6 transition hover:border-black/20"
            >
              <div className="flex flex-wrap items-center gap-2 text-sm text-black/50">
                <span>
                  {labels.chapter} {chapter.number}
                </span>
                <span>•</span>
                <span>
                  {labels.studyTime}: {chapter.studyMinutes} {labels.minutes}
                </span>
              </div>

              <h3 className="mt-2 text-xl font-semibold">{chapter.title}</h3>
              <p className="mt-2 leading-7 text-black/60">{chapter.overview}</p>

              <ul className="mt-4 space-y-2 pl-5 text-sm text-black/70">
                {chapter.learningObjectives.slice(0, 3).map((objective) => (
                  <li key={objective} className="list-disc leading-7">
                    {objective}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-black/10 p-6">
        <h2 className="text-xl font-semibold">{hub.extraSectionsTitle}</h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {hub.extraSections.map((item) => (
            <div key={item.title} className="rounded-xl bg-black/[0.02] p-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-black/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <PageLinks exclude="/knowledge" />
    </div>
  );
}