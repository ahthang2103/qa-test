'use client';

// Constants
import { APP_INFORMATION } from '@/app/constants/app';

export const Footer = () => {
  return (
    <footer className="w-full border-t border-blue-200/60">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-6 sm:px-6">
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
          &copy; {new Date().getFullYear()} {APP_INFORMATION.NAME}
        </p>
      </div>
    </footer>
  );
};
