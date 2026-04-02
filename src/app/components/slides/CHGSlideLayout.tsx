import { motion } from 'motion/react';
import { CHGLogo } from '@/app/components/CHGLogo';
import { ThemeBar } from '@/app/components/ThemeBar';
import { ReactNode } from 'react';

interface CHGSlideLayoutProps {
  children: ReactNode;
  showLogo?: boolean;
  showThemeBar?: boolean;
}

export function CHGSlideLayout({ children, showLogo = true, showThemeBar = true }: CHGSlideLayoutProps) {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      <div className="relative z-10 h-full flex flex-col justify-between px-28 py-20">
        {/* Logo */}
        {showLogo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <CHGLogo />
          </motion.div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center">
          {children}
        </div>

        {/* Bottom - ThemeBar */}
        {showThemeBar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <ThemeBar />
          </motion.div>
        )}
      </div>
    </div>
  );
}
