import { PageLinks } from '@/app/components/PageLinks';
import { Link } from '@/i18n/navigation';
import type { ResolvedChapter, UiLabels } from '../_data/chapters';

type NavChapter = Pick<ResolvedChapter, 'slug' | 'title'> | null;

type ChapterPageProps = {
  chapter: ResolvedChapter;
  labels: UiLabels;
  previousChapter: NavChapter;
  nextChapter: NavChapter;
};

export const ChapterPage = ({
  chapter,
  labels,
  previousChapter,
  nextChapter,
}: ChapterPageProps) => {
  return (
    <div className="w-full max-w-4xl py-12">
      <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-black/50">
        <Link href="/knowledge" className="transition hover:text-black">
          {labels.knowledgeHome}
        </Link>
        <span>/</span>
        <Link href="/knowledge/istqb" className="transition hover:text-black">
          {labels.istqbHub}
        </Link>
        <span>/</span>
        <span className="text-black">{chapter.title}</span>
      </div>

      <header className="mb-10 rounded-2xl border border-black/10 p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-black/50">
          <span>
            {labels.chapter} {chapter.number}
          </span>
          <span>•</span>
          <span>
            {labels.studyTime}: {chapter.studyMinutes} {labels.minutes}
          </span>
        </div>

        <h1 className="text-3xl font-semibold">{chapter.title}</h1>
        <p className="mt-3 leading-7 text-black/60">{chapter.overview}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {chapter.keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/60"
            >
              {keyword}
            </span>
          ))}
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="self-start rounded-2xl border border-black/10 p-4 lg:sticky lg:top-24">
          <h2 className="mb-3 text-sm font-semibold">{labels.onThisPage}</h2>

          <ul className="space-y-2 text-sm text-black/60">
            <li>
              <a href="#learning-objectives" className="transition hover:text-black">
                {labels.learningObjectives}
              </a>
            </li>

            {chapter.sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="transition hover:text-black"
                >
                  {section.title}
                </a>
              </li>
            ))}

            <li>
              <a href="#exam-focus" className="transition hover:text-black">
                {labels.examFocus}
              </a>
            </li>
            <li>
              <a href="#quick-summary" className="transition hover:text-black">
                {labels.quickSummary}
              </a>
            </li>
          </ul>
        </aside>

        <div className="space-y-8">
          <section
            id="learning-objectives"
            className="rounded-2xl border border-black/10 p-6"
          >
            <h2 className="mb-4 text-2xl font-semibold">
              {labels.learningObjectives}
            </h2>

            <ul className="space-y-3 pl-5 text-black/70">
              {chapter.learningObjectives.map((item) => (
                <li key={item} className="list-disc leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {chapter.sections.map((section) => (
            <section
              id={section.id}
              key={section.id}
              className="rounded-2xl border border-black/10 p-6"
            >
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <p className="mt-3 leading-7 text-black/60">{section.summary}</p>

              <ul className="mt-4 space-y-3 pl-5 text-black/70">
                {section.bullets.map((item) => (
                  <li key={item} className="list-disc leading-7">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section
            id="exam-focus"
            className="rounded-2xl border border-black/10 p-6"
          >
            <h2 className="mb-4 text-2xl font-semibold">{labels.examFocus}</h2>

            <ul className="space-y-3 pl-5 text-black/70">
              {chapter.examFocus.map((item) => (
                <li key={item} className="list-disc leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section
            id="quick-summary"
            className="rounded-2xl border border-black/10 p-6"
          >
            <h2 className="mb-4 text-2xl font-semibold">
              {labels.quickSummary}
            </h2>

            <ul className="space-y-3 pl-5 text-black/70">
              {chapter.recap.map((item) => (
                <li key={item} className="list-disc leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <nav className="flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-6">
            {previousChapter ? (
              <Link
                href={`/knowledge/istqb/${previousChapter.slug}`}
                className="rounded-full border border-black/10 px-4 py-2 text-sm transition hover:border-black/20"
              >
                ← {previousChapter.title}
              </Link>
            ) : (
              <span />
            )}

            <Link
              href="/knowledge/istqb"
              className="rounded-full border border-black/10 px-4 py-2 text-sm transition hover:border-black/20"
            >
              {labels.backToHub}
            </Link>

            {nextChapter ? (
              <Link
                href={`/knowledge/istqb/${nextChapter.slug}`}
                className="rounded-full border border-black/10 px-4 py-2 text-sm transition hover:border-black/20"
              >
                {nextChapter.title} →
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </div>

      <PageLinks exclude="/knowledge" />
    </div>
  );
};