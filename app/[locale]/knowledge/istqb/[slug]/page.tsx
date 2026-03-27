import { notFound } from 'next/navigation';
import { customGenerateMetadata } from '@/app/utils/pages';
import {
  ISTQB_CHAPTERS,
  getChapterBySlug,
  getUiLabels,
  resolveChapter,
} from '../_data/chapters';
import { ChapterPage } from '../_components/ChapterPage';

export const generateStaticParams = () =>
  ISTQB_CHAPTERS.map((chapter) => ({
    slug: chapter.slug,
  }));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) => {
  const { locale, slug } = await params;
  const chapter = getChapterBySlug(slug);

  if (!chapter) {
    return customGenerateMetadata();
  }

  const resolved = resolveChapter(chapter, locale);

  return customGenerateMetadata({
    PATH: `/knowledge/istqb/${slug}`,
    TITLE: resolved.title,
    LABEL_KEY: '',
  });
};

export default async function ISTQBChapterRoute({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const chapter = getChapterBySlug(slug);

  if (!chapter) {
    notFound();
  }

  const currentIndex = ISTQB_CHAPTERS.findIndex((item) => item.slug === slug);
  const previousRaw = currentIndex > 0 ? ISTQB_CHAPTERS[currentIndex - 1] : null;
  const nextRaw =
    currentIndex < ISTQB_CHAPTERS.length - 1
      ? ISTQB_CHAPTERS[currentIndex + 1]
      : null;

  const resolvedChapter = resolveChapter(chapter, locale);
  const previousChapter = previousRaw
    ? resolveChapter(previousRaw, locale)
    : null;
  const nextChapter = nextRaw ? resolveChapter(nextRaw, locale) : null;
  const labels = getUiLabels(locale);

  return (
    <ChapterPage
      chapter={resolvedChapter}
      labels={labels}
      previousChapter={
        previousChapter
          ? { slug: previousChapter.slug, title: previousChapter.title }
          : null
      }
      nextChapter={
        nextChapter
          ? { slug: nextChapter.slug, title: nextChapter.title }
          : null
      }
    />
  );
}