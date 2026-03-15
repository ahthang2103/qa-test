import { useTranslations } from 'next-intl';

// Utils
import { customGenerateMetadata } from '@/app/utils/page';

// Constants
import { ROUTES } from '@/app/constants/routes';
import type { PlanStatus } from '../components/PlanCard';

// Components
import { Link } from '@/i18n/navigation';

export const generateMetadata = () => customGenerateMetadata(ROUTES.PLANS);

type Phase = {
  key: 'phase1' | 'phase2' | 'phase3' | 'phase4' | 'phase5' | 'phase6';
  number: number;
  status: PlanStatus;
};

const statusStyles: Record<PlanStatus, string> = {
  planned: 'border border-black/20 text-black/50',
  'in-progress': 'border border-amber-400 text-amber-600',
  completed: 'border border-green-400 text-green-600',
};

const PHASES: Phase[] = [
  { key: 'phase1', number: 1, status: 'in-progress' },
  { key: 'phase2', number: 2, status: 'planned' },
  { key: 'phase3', number: 3, status: 'planned' },
  { key: 'phase4', number: 4, status: 'planned' },
  { key: 'phase5', number: 5, status: 'planned' },
  { key: 'phase6', number: 6, status: 'planned' },
];

const TesterPlan = () => {
  const t = useTranslations('TesterPlanPage');
  const tPlans = useTranslations('PlansPage');

  return (
    <div className="w-full max-w-2xl py-12">
      <Link
        href="/plans"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-black/50 hover:text-black/80 transition-colors"
      >
        ← {t('backToPlans')}
      </Link>

      <h1 className="mt-4 mb-3 text-2xl font-semibold">{t('title')}</h1>
      <p className="mb-10 text-sm text-black/60 leading-relaxed">{t('overview')}</p>

      <h2 className="mb-5 text-base font-semibold">{t('roadmapTitle')}</h2>

      <div className="flex flex-col gap-4">
        {PHASES.map(({ key, number, status }) => (
          <div key={key} className="rounded-lg border border-black/10 p-5">
            <div className="mb-1 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-black/40">Phase {number}</span>
                <span className="text-xs text-black/30">·</span>
                <span className="text-xs text-black/40">{t(`${key}.period`)}</span>
              </div>
              <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[status]}`}>
                {tPlans(`status.${status}`)}
              </span>
            </div>

            <h3 className="mb-2 text-base font-semibold leading-snug">{t(`${key}.title`)}</h3>

            <p className="mb-4 text-sm text-black/60">{t(`${key}.goal`)}</p>

            <div className="flex flex-wrap gap-1.5">
              {(t.raw(`${key}.topics`) as string[]).map((topic) => (
                <span
                  key={topic}
                  className="rounded-full bg-black/5 px-2.5 py-0.5 text-xs text-black/60"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TesterPlan;
