import { ROUTES } from '@/app/constants/routes';
import type { PlanStatus } from '../components/PlanCard';

export type PlanStaticData = {
  id: string;
  status: PlanStatus;
  slug?: string;
};

export const PLANS: PlanStaticData[] = [
  { id: '0', status: 'in-progress', slug: ROUTES.TESTER_PLAN.PATH.split('/').pop() },
];
