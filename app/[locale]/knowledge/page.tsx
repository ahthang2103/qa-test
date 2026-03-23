import { useTranslations } from 'next-intl';

// Components
import { PageLinks } from '@/app/components/PageLinks';

const KnowledgePage = () => {
  const t = useTranslations('KnowledgePage');

  return (
    <div className="w-full max-w-2xl py-12">
      <h1 className="mb-6 text-2xl font-semibold">{t('title')}</h1>
      <p className="text-sm text-black/60">{t('placeholder')}</p>
      <PageLinks exclude="/knowledge" />
    </div>
  );
};

export default KnowledgePage;