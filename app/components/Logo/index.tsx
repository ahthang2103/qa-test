import { VT323 } from 'next/font/google';
import { APP_INFORMATION } from '@/app/constants/app';

// Cấu hình font (font này chỉ có weight 400)
const pixelFont = VT323({ 
  weight: '400', 
  subsets: ['latin'],
});

export const Logo = () => {
  return (
    <div className="flex flex-col">
      {/* Thay font-fleur bằng pixelFont.className */}
      <span className={`${pixelFont.className} text-4xl text-blue-500`}>
        {APP_INFORMATION.NAME_IN_VIETNAMESE}
      </span>
    </div>
  );
};