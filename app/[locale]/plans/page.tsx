import { useTranslations } from 'next-intl';

// Utils
import { customGenerateMetadata } from '@/app/utils/page';

// Constants
import { ROUTES } from '@/app/constants/routes';
import { PLANS } from './constants/plans';

// Components
import { PageLinks } from '@/app/components/PageLinks';
import { PlanCard } from './components/PlanCard';

export const generateMetadata = () => customGenerateMetadata(ROUTES.PLANS);

const Plans = () => {
  const t = useTranslations('PlansPage');

  return (
    <div className="w-full max-w-2xl py-12">
      <h1 className="mb-6 text-2xl font-semibold">{t('title')}</h1>

      <div className="flex flex-col gap-4">
        {PLANS.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            statusLabel={t(`status.${plan.status}`)}
          />
        ))}
      </div>

      <PageLinks exclude="/plans" />
    </div>
  );
};

export default Plans;
