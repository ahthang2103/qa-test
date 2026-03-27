import { notFound } from 'next/navigation';
import { customGenerateMetadata } from '@/app/utils/pages';
import { IstqbChapterTemplate } from '../_components/IstqbChapterTemplate';
import {
  REMAINING_ISTQB_CHAPTERS,
  getRemainingChapterBySlug,
  getRemainingChapterUi,
  resolveRemainingChapter,
} from '../_data/remainingChapters';

export const generateStaticParams = () =>
  REMAINING_ISTQB_CHAPTERS.map((chapter) => ({
    slug: chapter.slug,
  }));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) => {
  const { locale, slug } = await params;
  const chapter = getRemainingChapterBySlug(slug);

  if (!chapter) {
    return customGenerateMetadata();
  }

  const resolved = resolveRemainingChapter(chapter, locale);

  return customGenerateMetadata({
    PATH: `/knowledge/istqb/${slug}`,
    TITLE: resolved.shortTitle,
    LABEL_KEY: '',
  });
};

export default async function RemainingIstqbChapterPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const chapter = getRemainingChapterBySlug(slug);

  if (!chapter) {
    notFound();
  }

  const currentIndex = REMAINING_ISTQB_CHAPTERS.findIndex(
    (item) => item.slug === slug
  );

  const previousRaw =
    slug === 'chapter-2-testing-throughout-the-sdlc'
      ? {
        slug: 'chapter-1-fundamentals-of-testing',
        shortTitle: {
          vi: 'Kiến thức nền tảng về kiểm thử',
          en: 'Fundamentals of Testing',
        },
      }
      : currentIndex > 0
        ? REMAINING_ISTQB_CHAPTERS[currentIndex - 1]
        : null;

  const nextRaw =
    currentIndex < REMAINING_ISTQB_CHAPTERS.length - 1
      ? REMAINING_ISTQB_CHAPTERS[currentIndex + 1]
      : null;

  const resolved = resolveRemainingChapter(chapter, locale);
  const labels = getRemainingChapterUi(locale);

  const previous =
    previousRaw &&
      'studyMinutes' in previousRaw
      ? {
        href: `/knowledge/istqb/${previousRaw.slug}`,
        label: resolveRemainingChapter(previousRaw, locale).shortTitle,
      }
      : previousRaw
        ? {
          href: `/knowledge/istqb/${previousRaw.slug}`,
          label:
            locale === 'vi'
              ? previousRaw.shortTitle.vi
              : previousRaw.shortTitle.en,
        }
        : null;

  const next = nextRaw
    ? {
      href: `/knowledge/istqb/${nextRaw.slug}`,
      label: resolveRemainingChapter(nextRaw, locale).shortTitle,
    }
    : null;

  return (
    <IstqbChapterTemplate
      chapter={resolved}
      labels={labels}
      previous={previous}
      next={next}
    />
  );
}