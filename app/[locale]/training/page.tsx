import { useTranslations } from 'next-intl';

// Components
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';

const Training = () => {
  const t = useTranslations('TrainingPage');

  return (
    <div className="flex min-h-screen flex-col font-google-sans">
      <Header />

      <main className="flex flex-1 flex-col items-center px-6">
        <div className="w-full max-w-2xl py-12">
          <h1 className="mb-6 text-2xl font-semibold">{t('title')}</h1>
          <p className="text-black/60">{t('placeholder')}</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Training;
