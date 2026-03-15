import type { Plan } from '../components/PlanCard';

export const PLANS: Plan[] = [
  {
    id: '1',
    title: 'Software Testing Fundamentals',
    description:
      'Learn the core concepts of software testing: types of testing, test lifecycle, defect management, and basic QA principles.',
    period: 'Mar 2026 – Apr 2026',
    topics: ['Test Basics', 'Test Lifecycle', 'Bug Reporting'],
    status: 'in-progress',
  },
  {
    id: '2',
    title: 'Manual Testing & Test Case Design',
    description:
      'Practice writing effective test cases, test plans, and test reports. Explore black-box and white-box testing techniques.',
    period: 'Apr 2026 – May 2026',
    topics: ['Test Cases', 'Black-box', 'White-box'],
    status: 'planned',
  },
  {
    id: '3',
    title: 'API Testing with Postman',
    description:
      'Get hands-on with REST APIs using Postman: sending requests, writing assertions, and organizing test collections.',
    period: 'May 2026 – Jun 2026',
    topics: ['REST API', 'Postman', 'JSON'],
    status: 'planned',
  },
];
