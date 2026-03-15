import { APP_INFORMATION } from './app';

export const ROUTES = {
  HOME: {
    PATH: '/',
    TITLE: APP_INFORMATION.BIO,
    LABEL_KEY: 'home',
  },
  ABOUT: {
    PATH: '/about',
    TITLE: '',
    LABEL_KEY: 'about',
  },
  TRAINING: {
    PATH: '/training',
    TITLE: '',
    LABEL_KEY: 'education',
  },
  PRACTICES: {
    PATH: '/practices',
    TITLE: '',
    LABEL_KEY: 'practices',
  },
  PLANS: {
    PATH: '/plans',
    TITLE: '',
    LABEL_KEY: 'plans',
  },
  TESTER_PLAN: {
    PATH: '/plans/become-a-tester',
    TITLE: '',
    LABEL_KEY: 'plans',
  },
} as const;
