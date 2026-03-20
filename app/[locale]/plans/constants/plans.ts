// Constants
import { ROUTES } from '@/app/constants/routes';

// Components
import type { PlanStatus } from '../components/PlanCard';

export type PlanStaticData = {
  id: string;
  status: PlanStatus;
  slug?: string;
};

export const PLANS: PlanStaticData[] = [
  {
    id: '0',
    status: 'in-progress',
    slug: ROUTES.TESTER_PLAN.PATH.split('/').pop(),
  },
  {
    id: '1',
    status: 'in-progress',
    slug: ROUTES.CSS_PLAN.PATH.split('/').pop(),
  },
  { id: '2', status: 'planned', slug: ROUTES.JS_PLAN.PATH.split('/').pop() },
  {
    id: '3',
    status: 'completed',
    slug: ROUTES.HTML_PLAN.PATH.split('/').pop(),
  },
];
