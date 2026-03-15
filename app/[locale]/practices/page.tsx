import { useTranslations } from 'next-intl';

// Utils
import { customGenerateMetadata } from '@/app/utils/page';

// Constants
import { ROUTES } from '@/app/constants/routes';

// Components
import { PageLinks } from '@/app/components/PageLinks';

export const generateMetadata = () => customGenerateMetadata(ROUTES.PRACTICES);

const Practices = () => {
  const t = useTranslations('PracticesPage');

  return (
    <div className="w-full max-w-2xl py-12">
      <h1 className="mb-6 text-2xl font-semibold">{t('title')}</h1>
      <p className="text-black/60">{t('empty')}</p>
      <PageLinks exclude="/practices" />
    </div>
  );
};

export default Practices;
