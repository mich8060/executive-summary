import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface SectionDividerProps {
  number: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: 'blue' | 'green' | 'red' | 'purple' | 'yellow' | 'indigo' | 'orange';
}

const colorMap = {
  blue: '#1BA5DE',
  green: '#7FBD4D',
  red: '#FE8C31',
  purple: '#1BA5DE',
  yellow: '#FE8C31',
  indigo: '#1BA5DE',
  orange: '#FE8C31',
};

export function SectionDivider({ number, title, subtitle, icon: Icon, color }: SectionDividerProps) {
  const brandColor = colorMap[color];

  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      <div className="h-full flex items-center justify-center px-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div 
              className="w-24 h-24 rounded-3xl flex items-center justify-center"
              style={{ backgroundColor: `${brandColor}20`, border: `3px solid ${brandColor}` }}
            >
              <Icon className="w-12 h-12" style={{ color: brandColor }} />
            </div>
          </motion.div>

          {/* Section Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-4"
          >
            <span 
              className="font-inter font-bold text-7xl tracking-tight"
              style={{ color: brandColor, fontFeatureSettings: "'salt', 'ss03', 'ss04', 'cv01', 'cv02', 'lnum', 'pnum'" }}
            >
              0{number}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-inter font-bold text-6xl mb-4 text-black tracking-tight"
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-inter text-3xl text-gray-600 max-w-3xl mx-auto tracking-tight"
          >
            {subtitle}
          </motion.p>

          {/* Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 h-2 rounded-full mx-auto"
            style={{ width: '350px', backgroundColor: brandColor }}
          />
        </motion.div>
      </div>
    </div>
  );
}