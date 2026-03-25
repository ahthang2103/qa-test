'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { PageLinks } from '@/app/components/PageLinks';

const tabs = [
  { key: 'istqb', labelKey: 'tabs.istqb' },
  { key: 'korean', labelKey: 'tabs.korean' },
] as const;

const istqbToc = [
  {
    key: 'intro',
    titleKey: 'istqb.sections.intro.title',
    items: [
      'istqb.sections.intro.items.0',
      'istqb.sections.intro.items.1',
      'istqb.sections.intro.items.2',
      'istqb.sections.intro.items.3',
      'istqb.sections.intro.items.4',
      'istqb.sections.intro.items.5',
      'istqb.sections.intro.items.6',
      'istqb.sections.intro.items.7',
      'istqb.sections.intro.items.8',
      'istqb.sections.intro.items.9',
      'istqb.sections.intro.items.10',
    ],
  },
  {
    key: 'fundamentals',
    titleKey: 'istqb.sections.fundamentals.title',
    items: [
      'istqb.sections.fundamentals.items.0',
      'istqb.sections.fundamentals.items.1',
      'istqb.sections.fundamentals.items.2',
      'istqb.sections.fundamentals.items.3',
      'istqb.sections.fundamentals.items.4',
      'istqb.sections.fundamentals.items.5',
      'istqb.sections.fundamentals.items.6',
      'istqb.sections.fundamentals.items.7',
      'istqb.sections.fundamentals.items.8',
      'istqb.sections.fundamentals.items.9',
      'istqb.sections.fundamentals.items.10',
      'istqb.sections.fundamentals.items.11',
      'istqb.sections.fundamentals.items.12',
      'istqb.sections.fundamentals.items.13',
      'istqb.sections.fundamentals.items.14',
      'istqb.sections.fundamentals.items.15',
      'istqb.sections.fundamentals.items.16',
      'istqb.sections.fundamentals.items.17',
    ],
  },
  {
    key: 'lifecycle',
    titleKey: 'istqb.sections.lifecycle.title',
    items: [
      'istqb.sections.lifecycle.items.0',
      'istqb.sections.lifecycle.items.1',
      'istqb.sections.lifecycle.items.2',
      'istqb.sections.lifecycle.items.3',
      'istqb.sections.lifecycle.items.4',
      'istqb.sections.lifecycle.items.5',
      'istqb.sections.lifecycle.items.6',
      'istqb.sections.lifecycle.items.7',
      'istqb.sections.lifecycle.items.8',
      'istqb.sections.lifecycle.items.9',
      'istqb.sections.lifecycle.items.10',
      'istqb.sections.lifecycle.items.11',
    ],
  },
  {
    key: 'static',
    titleKey: 'istqb.sections.static.title',
    items: [
      'istqb.sections.static.items.0',
      'istqb.sections.static.items.1',
      'istqb.sections.static.items.2',
      'istqb.sections.static.items.3',
      'istqb.sections.static.items.4',
      'istqb.sections.static.items.5',
      'istqb.sections.static.items.6',
      'istqb.sections.static.items.7',
      'istqb.sections.static.items.8',
      'istqb.sections.static.items.9',
    ],
  },
  {
    key: 'analysis',
    titleKey: 'istqb.sections.analysis.title',
    items: [
      'istqb.sections.analysis.items.0',
      'istqb.sections.analysis.items.1',
      'istqb.sections.analysis.items.2',
      'istqb.sections.analysis.items.3',
      'istqb.sections.analysis.items.4',
      'istqb.sections.analysis.items.5',
      'istqb.sections.analysis.items.6',
      'istqb.sections.analysis.items.7',
      'istqb.sections.analysis.items.8',
      'istqb.sections.analysis.items.9',
      'istqb.sections.analysis.items.10',
      'istqb.sections.analysis.items.11',
      'istqb.sections.analysis.items.12',
      'istqb.sections.analysis.items.13',
      'istqb.sections.analysis.items.14',
      'istqb.sections.analysis.items.15',
      'istqb.sections.analysis.items.16',
      'istqb.sections.analysis.items.17',
    ],
  },
  {
    key: 'managing',
    titleKey: 'istqb.sections.managing.title',
    items: [
      'istqb.sections.managing.items.0',
      'istqb.sections.managing.items.1',
      'istqb.sections.managing.items.2',
      'istqb.sections.managing.items.3',
      'istqb.sections.managing.items.4',
      'istqb.sections.managing.items.5',
      'istqb.sections.managing.items.6',
      'istqb.sections.managing.items.7',
      'istqb.sections.managing.items.8',
      'istqb.sections.managing.items.9',
      'istqb.sections.managing.items.10',
      'istqb.sections.managing.items.11',
      'istqb.sections.managing.items.12',
      'istqb.sections.managing.items.13',
      'istqb.sections.managing.items.14',
      'istqb.sections.managing.items.15',
      'istqb.sections.managing.items.16',
      'istqb.sections.managing.items.17',
    ],
  },
  {
    key: 'tools',
    titleKey: 'istqb.sections.tools.title',
    items: [
      'istqb.sections.tools.items.0',
      'istqb.sections.tools.items.1',
    ],
  },
  {
    key: 'references',
    titleKey: 'istqb.sections.references.title',
    items: [],
  },
  {
    key: 'appendixA',
    titleKey: 'istqb.sections.appendixA.title',
    items: [],
  },
  {
    key: 'appendixB',
    titleKey: 'istqb.sections.appendixB.title',
    items: [],
  },
  {
    key: 'appendixC',
    titleKey: 'istqb.sections.appendixC.title',
    items: [],
  },
  {
    key: 'index',
    titleKey: 'istqb.sections.index.title',
    items: [],
  },
] as const;

const KnowledgePage = () => {
  const [activeTab, setActiveTab] = useState<'istqb' | 'korean'>('istqb');
  const t = useTranslations('KnowledgePage');

  return (
    <div className="mx-auto w-full max-w-4xl py-12">
      <div className="mb-10 border-b border-black/10">
        <div className="flex items-center justify-center gap-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`relative pb-3 text-base font-medium transition ${
                  isActive ? 'text-black' : 'text-black/50 hover:text-black'
                }`}
              >
                {t(tab.labelKey)}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-black" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="min-h-[320px]">
        {activeTab === 'istqb' && (
          <section className="space-y-8">
            <div>
              <h1 className="text-2xl font-semibold">{t('istqb.title')}</h1>
              <p className="mt-2 text-sm text-black/50">{t('istqb.description')}</p>
            </div>

            <div className="space-y-6">
              {istqbToc.map((chapter) => (
                <div key={chapter.key} className="rounded-xl border border-black/10 p-5">
                  <div className="mb-3">
                    <Link href="#" className="text-lg font-semibold text-black hover:underline">
                      {t(chapter.titleKey)}
                    </Link>
                  </div>

                  {chapter.items.length > 0 && (
                    <ul className="space-y-2 pl-5 text-sm text-black/70">
                      {chapter.items.map((itemKey) => (
                        <li key={itemKey} className="list-disc">
                          <Link href="#" className="hover:underline">
                            {t(itemKey)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'korean' && (
          <section className="space-y-4 text-sm leading-7 text-black/70">
            <h2 className="text-xl font-semibold text-black">{t('korean.title')}</h2>
            <p>{t('korean.p1')}</p>
            <p>{t('korean.p2')}</p>
          </section>
        )}
      </div>

      <PageLinks exclude="/knowledge" />
    </div>
  );
};

export default KnowledgePage;