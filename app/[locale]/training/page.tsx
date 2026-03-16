// Utils
import { customGenerateMetadata } from '@/app/utils/pages';

// Constants
import { ROUTES } from '@/app/constants/routes';

// Components
import { PageLinks } from '@/app/components/PageLinks';
import { TrainingContent } from './components/TrainingContent';

export const generateMetadata = () => customGenerateMetadata(ROUTES.TRAINING);

const Training = () => {
  return (
    <>
      <TrainingContent />
      <PageLinks exclude="/training" />
    </>
  );
};

export default Training;
