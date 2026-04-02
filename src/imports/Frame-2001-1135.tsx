import imgImage from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";
import { motion } from 'motion/react';

function TextBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[54px] items-start relative shrink-0 w-full" data-name="Text block">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[72px] relative shrink-0 text-[64px] tracking-[-1.2px] w-full">Visual Examples</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[42px] relative shrink-0 text-[26px] w-full">By breaking down content into smaller units, paragraphs help convey information in a clear and digestible manner, allowing readers to grasp concepts more effectively.</p>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[27px] items-start left-[108px] not-italic pr-[32px] text-black top-1/2 w-[546px]" data-name="Left content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[36px] relative shrink-0 text-[26px] tracking-[1px] uppercase w-full">Introductions</p>
      <TextBlock />
    </div>
  );
}

function OldUXProcess() {
  return (
    <div className="absolute left-[108px] top-[240px] flex flex-col gap-8">
      <div className="flex items-start gap-8">
        {/* Figma Silo */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gray-100 border-4 border-gray-400 rounded-xl w-[200px] h-[140px] flex flex-col items-center justify-center p-4 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-600 text-white text-xs font-bold rounded-full">
              Designers
            </div>
            <div className="text-xl font-bold text-gray-700 mb-1">Figma</div>
            <div className="text-[10px] text-gray-500 text-center">Designing in isolation</div>
            <motion.div
              className="absolute inset-0 border-4 border-gray-400 rounded-xl"
              animate={{
                borderColor: ["#9CA3AF", "#6B7280", "#9CA3AF"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          {/* Lock icon overlay */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Slow Handoff Arrow */}
        <motion.div 
          className="flex flex-col items-center justify-center gap-1 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-[10px] text-red-600 font-bold">Slow</div>
          <motion.div
            animate={{
              x: [0, 8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
              <path d="M2 10H58M58 10L48 2M58 10L48 18" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3"/>
            </svg>
          </motion.div>
          <div className="text-[9px] text-gray-500">Handoff</div>
        </motion.div>

        {/* Engineering Silo */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-gray-100 border-4 border-gray-400 rounded-xl w-[200px] h-[140px] flex flex-col items-center justify-center p-4 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-600 text-white text-xs font-bold rounded-full">
              Engineers
            </div>
            <div className="text-xl font-bold text-gray-700 mb-1">Code</div>
            <div className="text-[10px] text-gray-500 text-center">Building from scratch</div>
            <motion.div
              className="absolute bottom-2 left-1/2 -translate-x-1/2 text-red-600 text-[10px] font-bold"
              animate={{
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ⏱️ Weeks
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Label */}
      <motion.div 
        className="text-sm font-bold text-red-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        The Old Way: Siloed, slow, stuck in Figma
      </motion.div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full" data-name="Frame">
      <div className="absolute h-[1080px] left-[684px] top-0 w-[1236px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[42px] left-[1020px] not-italic text-[26px] text-black top-[calc(50%-9px)] whitespace-nowrap">Visuals that tell the AI enabled future clearly</p>
      <LeftContent />
      <OldUXProcess />
    </div>
  );
}