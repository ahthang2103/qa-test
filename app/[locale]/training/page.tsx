// Utils
import { customGenerateMetadata } from '@/app/utils/page';

// Constants
import { ROUTES } from '@/app/constants/routes';

import { TrainingContent } from './components/TrainingContent';

export const generateMetadata = () => customGenerateMetadata(ROUTES.TRAINING);

const Training = () => {
  return (
    <>
      <TrainingContent />
    </>
  );
};

export default Training;
