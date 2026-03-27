import { PageLinks } from '@/app/components/PageLinks';
import { Link } from '@/i18n/navigation';

type VisualItem = {
    title: string;
    text: string;
};

type VisualGroup = {
    title: string;
    items: VisualItem[];
};

type Section = {
    id: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
    visuals?: VisualGroup[];
    example?: {
        title: string;
        text: string;
    };
};

type ResolvedChapter = {
    slug: string;
    number: number;
    title: string;
    shortTitle: string;
    studyMinutes: number;
    intro: string;
    introNote: string;
    toc: { id: string; label: string }[];
    learningObjectives: string[];
    keywords: string[];
    sections: Section[];
    examFocus: string[];
    summary: string[];
};

type UiLabels = {
    knowledgeHome: string;
    istqbHub: string;
    chapter: string;
    studyTime: string;
    minutes: string;
    onThisPage: string;
    learningObjectives: string;
    importantKeywords: string;
    examFocus: string;
    quickSummary: string;
    backToHub: string;
    nextChapter: string;
    previousChapter: string;
};

type NavChapter = {
    href: string;
    label: string;
} | null;

type Props = {
    chapter: ResolvedChapter;
    labels: UiLabels;
    previous: NavChapter;
    next: NavChapter;
};

export const IstqbChapterTemplate = ({
    chapter,
    labels,
    previous,
    next,
}: Props) => {
    return (
        <div className="w-full max-w-5xl py-12">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-black/50">
                <Link href="/knowledge" className="transition hover:text-black">
                    {labels.knowledgeHome}
                </Link>
                <span>/</span>
                <Link href="/knowledge/istqb" className="transition hover:text-black">
                    {labels.istqbHub}
                </Link>
                <span>/</span>
                <span className="text-black">{chapter.shortTitle}</span>
            </div>

            <header className="rounded-3xl border border-black/10 bg-gradient-to-br from-white to-black/[0.02] p-8">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-black/50">
                    <span>
                        {labels.chapter} {chapter.number}
                    </span>
                    <span>•</span>
                    <span>
                        {labels.studyTime}: {chapter.studyMinutes} {labels.minutes}
                    </span>
                </div>

                <h1 className="max-w-3xl text-3xl font-semibold leading-tight">
                    {chapter.title}
                </h1>

                <p className="mt-4 max-w-4xl leading-8 text-black/65">{chapter.intro}</p>
                <p className="mt-3 max-w-4xl rounded-2xl bg-black/[0.03] p-4 text-sm leading-7 text-black/60">
                    {chapter.introNote}
                </p>
            </header>

            <div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr]">
                <aside className="self-start rounded-2xl border border-black/10 p-5 lg:sticky lg:top-24">
                    <h2 className="mb-4 text-sm font-semibold">{labels.onThisPage}</h2>
                    <ul className="space-y-2 text-sm text-black/60">
                        <li>
                            <a href="#learning-objectives" className="transition hover:text-black">
                                {labels.learningObjectives}
                            </a>
                        </li>
                        <li>
                            <a href="#keywords" className="transition hover:text-black">
                                {labels.importantKeywords}
                            </a>
                        </li>

                        {chapter.toc.map((item) => (
                            <li key={item.id}>
                                <a href={`#${item.id}`} className="transition hover:text-black">
                                    {item.label}
                                </a>
                            </li>
                        ))}

                        <li>
                            <a href="#exam-focus" className="transition hover:text-black">
                                {labels.examFocus}
                            </a>
                        </li>
                        <li>
                            <a href="#summary" className="transition hover:text-black">
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
                        <h2 className="text-2xl font-semibold">{labels.learningObjectives}</h2>
                        <ul className="mt-4 space-y-3 pl-5 text-black/70">
                            {chapter.learningObjectives.map((item) => (
                                <li key={item} className="list-disc leading-7">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="keywords" className="rounded-2xl border border-black/10 p-6">
                        <h2 className="text-2xl font-semibold">{labels.importantKeywords}</h2>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {chapter.keywords.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/60"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </section>

                    {chapter.sections.map((section) => (
                        <section
                            key={section.id}
                            id={section.id}
                            className="rounded-2xl border border-black/10 p-6"
                        >
                            <h2 className="text-2xl font-semibold">{section.title}</h2>

                            {section.paragraphs.map((text) => (
                                <p key={text} className="mt-4 leading-8 text-black/65">
                                    {text}
                                </p>
                            ))}

                            {section.bullets && section.bullets.length > 0 && (
                                <ul className="mt-4 space-y-3 pl-5 text-black/70">
                                    {section.bullets.map((item) => (
                                        <li key={item} className="list-disc leading-7">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {section.visuals?.map((visual) => (
                                <div
                                    key={visual.title}
                                    className="mt-6 rounded-2xl border border-dashed border-black/10 p-5"
                                >
                                    <h3 className="mb-4 text-lg font-semibold">{visual.title}</h3>
                                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                                        {visual.items.map((item) => (
                                            <div
                                                key={item.title}
                                                className="rounded-2xl border border-black/10 bg-black/[0.02] p-4"
                                            >
                                                <h4 className="font-semibold">{item.title}</h4>
                                                <p className="mt-2 text-sm leading-7 text-black/65">
                                                    {item.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {section.example && (
                                <div className="mt-6 rounded-2xl bg-black/[0.03] p-5">
                                    <h3 className="text-lg font-semibold">{section.example.title}</h3>
                                    <p className="mt-3 leading-8 text-black/65">
                                        {section.example.text}
                                    </p>
                                </div>
                            )}
                        </section>
                    ))}

                    <section
                        id="exam-focus"
                        className="rounded-2xl border border-black/10 p-6"
                    >
                        <h2 className="text-2xl font-semibold">{labels.examFocus}</h2>
                        <ul className="mt-4 space-y-3 pl-5 text-black/70">
                            {chapter.examFocus.map((item) => (
                                <li key={item} className="list-disc leading-7">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="summary" className="rounded-2xl border border-black/10 p-6">
                        <h2 className="text-2xl font-semibold">{labels.quickSummary}</h2>
                        <ul className="mt-4 space-y-3 pl-5 text-black/70">
                            {chapter.summary.map((item) => (
                                <li key={item} className="list-disc leading-7">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <nav className="flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-6">
                        {previous ? (
                            <Link
                                href={previous.href}
                                className="rounded-full border border-black/10 px-4 py-2 text-sm transition hover:border-black/20"
                            >
                                ← {previous.label}
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

                        {next ? (
                            <Link
                                href={next.href}
                                className="rounded-full border border-black/10 px-4 py-2 text-sm transition hover:border-black/20"
                            >
                                {next.label} →
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