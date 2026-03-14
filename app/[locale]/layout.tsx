import type { Viewport } from 'next';
import { Fleur_De_Leah } from 'next/font/google';
import localFont from 'next/font/local';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

// Global styles
import '../globals.css';

// Utils
import { customGenerateMetadata } from '../utils/page';

// Constants
import { ROUTES } from '../constants/routes';

const fleurDeLeah = Fleur_De_Leah({
  variable: '--font-fleur-de-leah',
  subsets: ['latin'],
  weight: ['400'],
});

const googleSansFlex = localFont({
  src: [
    { path: '../fonts/GoogleSansFlex_24pt-Regular.ttf', weight: '400' },
    { path: '../fonts/GoogleSansFlex_24pt-Medium.ttf', weight: '500' },
    { path: '../fonts/GoogleSansFlex_24pt-SemiBold.ttf', weight: '600' },
    { path: '../fonts/GoogleSansFlex_24pt-Bold.ttf', weight: '700' },
  ],
  variable: '--font-google-sans-flex',
});

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${fleurDeLeah.variable} ${googleSansFlex.variable} antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}

export const generateMetadata = () => customGenerateMetadata(ROUTES.HOME);

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
