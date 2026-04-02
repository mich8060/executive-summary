import { motion } from 'motion/react';
import { CHGLogo } from '@/app/components/CHGLogo';
import { ThemeBar } from '@/app/components/ThemeBar';

export function Slide01() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-20 py-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CHGLogo />
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl"
          >
            <p className="font-inter font-medium text-xl tracking-wider uppercase mb-8 text-black">
              2026 Strategy & Roadmap
            </p>
            
            <h1 className="font-inter font-bold text-[110px] leading-[110px] tracking-tight mb-6 text-black" style={{ fontFeatureSettings: "'salt', 'ss03', 'ss04', 'cv01', 'cv02', 'lnum', 'pnum'" }}>
              Unlock $5M+
            </h1>
            
            <h2 className="font-inter font-bold text-5xl mb-4 text-black tracking-tight">
              From Your Design System
            </h2>
            
            <p className="font-inter text-3xl text-black mb-12 max-w-4xl leading-tight tracking-tight">
              Proven ROI. Clear path forward. One critical decision stands between you and millions in value.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-10"
            >
              <div className="text-center">
                <div className="font-inter font-bold text-5xl text-[#7FBD4D] mb-2" style={{ fontFeatureSettings: "'salt', 'ss03', 'ss04', 'cv01', 'cv02', 'lnum', 'pnum'" }}>$4.98M</div>
                <div className="font-inter text-lg text-gray-600">Proven Value</div>
              </div>
              
              <div className="w-px h-12 bg-gray-300"></div>
              
              <div className="text-center">
                <div className="font-inter font-bold text-5xl text-[#FE8C31] mb-2" style={{ fontFeatureSettings: "'salt', 'ss03', 'ss04', 'cv01', 'cv02', 'lnum', 'pnum'" }}>10-15%</div>
                <div className="font-inter text-lg text-gray-600">Currently Captured</div>
              </div>
              
              <div className="w-px h-12 bg-gray-300"></div>
              
              <div className="text-center">
                <div className="font-inter font-bold text-5xl text-[#1BA5DE] mb-2" style={{ fontFeatureSettings: "'salt', 'ss03', 'ss04', 'cv01', 'cv02', 'lnum', 'pnum'" }}>9 Months</div>
                <div className="font-inter text-lg text-gray-600">To Full Value</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom - ThemeBar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <ThemeBar />
        </motion.div>
      </div>
    </div>
  );
}