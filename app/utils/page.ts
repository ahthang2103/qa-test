import { Metadata } from 'next';
import { APP_INFORMATION } from '../constants/app';

type Route = {
  PATH: string;
  TITLE: string;
};

export const customGenerateMetadata = (route?: Route): Metadata => {
  const title = route
    ? `${APP_INFORMATION.NAME} | ${route.TITLE}`
    : APP_INFORMATION.NAME;
  const description =
    route?.TITLE ?? `${APP_INFORMATION.NAME} - ${APP_INFORMATION.BIO}`;

  return {
    title,
    description,
    keywords: APP_INFORMATION.KEYWORDS,
    openGraph: {
      title,
      description,
      siteName: APP_INFORMATION.NAME,
      type: 'website',
      images: [
        {
          url: 'https://fast.image.delivery/papwvgf.png?source=image.delivery',
        },
      ],
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
        { url: '/favicon-64x64.ico', sizes: '64x64', type: 'image/x-icon' },
        { url: '/icon-192x192.jpg', sizes: '192x192', type: 'image/jpeg' },
        { url: '/icon-512x512.jpg', sizes: '512x512', type: 'image/jpeg' },
      ],
      apple: [
        { url: '/apple-touch-icon.jpg', sizes: '180x180', type: 'image/jpeg' },
        {
          url: '/apple-touch-icon-precomposed.jpg',
          sizes: '180x180',
          type: 'image/jpeg',
        },
      ],
    },
  };
};
