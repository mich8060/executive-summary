import { motion } from 'motion/react';
import { Code, Users, Hammer, Puzzle, MoveRight } from 'lucide-react';

export function JourneyPathSideBySideSlide() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white px-[109px] py-[83px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-[40px]"
      >
        <p className="font-medium italic leading-[48px] text-[#cfcfcf] text-[40px] tracking-[-0.6px] mb-[16px]">
          The Path Forward
        </p>
        <h2 className="font-bold leading-[72px] text-black text-[64px] tracking-[-1.2px]">
          Required Dependencies
        </h2>
        <p className="font-normal leading-[36px] text-[#4a5565] text-[24px] mt-[16px]">
          Both Phase 1 and Phase 2 must be in place before we can build the system.
        </p>
      </motion.div>

      {/* Journey Flow - Prerequisites + Execution */}
      <div className="relative">
        {/* Top Row: Prerequisites (Phase 1 & 2) */}
        <div className="flex items-start gap-[32px] mb-[40px] justify-center">
          {/* Phase 1: React */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-[380px] bg-gradient-to-br from-[rgba(127,189,77,0.12)] to-[rgba(127,189,77,0.02)] border-2 border-[#7fbd4d] rounded-[20px] p-[24px] relative"
          >
            {/* Number Badge */}
            <div className="absolute top-[-16px] left-[24px] bg-[#7fbd4d] rounded-full size-[48px] flex items-center justify-center shadow-lg">
              <span className="font-extrabold text-white text-[28px]">1</span>
            </div>

            {/* Icon */}
            <div className="bg-[#7fbd4d] rounded-[12px] p-[10px] inline-flex mb-[12px] mt-[20px]">
              <Code className="size-6 text-white" />
            </div>
            
            <h3 className="font-bold leading-[28px] text-black text-[22px] mb-[8px]">
              React Adoption
            </h3>
            
            <p className="font-semibold leading-[20px] text-[#7fbd4d] text-[14px] mb-[12px]">
              PREREQUISITE
            </p>

            <div className="space-y-[8px] mb-[16px]">
              <p className="font-normal leading-[20px] text-[#364153] text-[14px]">
                • LM already on React
              </p>
              <p className="font-normal leading-[20px] text-[#364153] text-[14px]">
                • Modern component architecture
              </p>
              <p className="font-normal leading-[20px] text-[#364153] text-[14px]">
                • Enables shared code
              </p>
              <p className="font-normal leading-[20px] text-[#364153] text-[14px]">
                • PDE/CP planning same
              </p>
            </div>

            <div className="bg-[#7fbd4d] rounded-[8px] px-[12px] py-[6px] inline-block">
              <p className="font-bold leading-[20px] text-white text-[14px]">
                ✓ Complete
              </p>
            </div>
          </motion.div>

          {/* Phase 2: Team */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-[380px] bg-gradient-to-br from-[rgba(27,165,222,0.12)] to-[rgba(27,165,222,0.02)] border-2 border-[#1ba5de] rounded-[20px] p-[24px] relative"
          >
            {/* Number Badge */}
            <div className="absolute top-[-16px] left-[24px] bg-[#1ba5de] rounded-full size-[48px] flex items-center justify-center shadow-lg">
              <span className="font-extrabold text-white text-[28px]">2</span>
            </div>

            {/* Icon */}
            <div className="bg-[#1ba5de] rounded-[12px] p-[10px] inline-flex mb-[12px] mt-[20px]">
              <Users className="size-6 text-white" />
            </div>
            
            <h3 className="font-bold leading-[28px] text-black text-[22px] mb-[8px]">
              Design System Team
            </h3>
            
            <p className="font-semibold leading-[20px] text-[#1ba5de] text-[14px] mb-[12px]">
              PREREQUISITE
            </p>

            <div className="space-y-[8px] mb-[16px]">
              <p className="font-normal leading-[20px] text-[#364153] text-[14px]">
                • Embed designer in LM
              </p>
              <p className="font-normal leading-[20px] text-[#364153] text-[14px]">
                • Secure eng capacity
              </p>
              <p className="font-normal leading-[20px] text-[#364153] text-[14px]">
                • Cross-product alignment
              </p>
              <p className="font-normal leading-[20px] text-[#364153] text-[14px]">
                • Dedicated ownership
              </p>
            </div>

            <div className="bg-[#1ba5de] rounded-[8px] px-[12px] py-[6px] inline-block">
              <p className="font-bold leading-[20px] text-white text-[14px]">
                Immediate Need
              </p>
            </div>
          </motion.div>
        </div>

        {/* Converging Arrows with "BOTH REQUIRED" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center mb-[32px]"
        >
          {/* Arrows pointing down and converging */}
          <div className="flex items-center justify-center gap-[120px] relative h-[60px]">
            {/* Left arrow from Phase 1 */}
            <div className="w-[2px] h-[60px] bg-[#7fbd4d] absolute left-[calc(50%-60px)]" />
            
            {/* Right arrow from Phase 2 */}
            <div className="w-[2px] h-[60px] bg-[#1ba5de] absolute right-[calc(50%-60px)]" />
            
            {/* Converging horizontal lines */}
            <div className="absolute top-[60px] left-[calc(50%-60px)] right-[calc(50%-60px)] h-[2px] bg-gradient-to-r from-[#7fbd4d] via-[#1ba5de] to-[#7fbd4d]" />
          </div>
          
          {/* Label */}
          <div className="bg-white border-2 border-[#4a5565] rounded-[12px] px-[20px] py-[8px] shadow-md mt-[-10px] mb-[16px]">
            <p className="font-bold text-[#4a5565] text-[16px] whitespace-nowrap">BOTH REQUIRED</p>
          </div>
          
          {/* Arrow pointing down to Phase 3 */}
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-[40px] bg-gradient-to-b from-[#1ba5de] to-[#fe8c31]" />
            <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-[#fe8c31]" />
          </div>
        </motion.div>

        {/* Bottom Row: Execution & Value */}
        <div className="flex items-start gap-[32px] justify-center">
          {/* Phase 3: Build */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-[380px] bg-gradient-to-br from-[rgba(254,140,49,0.12)] to-[rgba(254,140,49,0.02)] border-2 border-[#fe8c31] rounded-[20px] p-[24px] relative"
          >
            {/* Number Badge */}
            <div className="absolute top-[-16px] left-[24px] bg-[#fe8c31] rounded-full size-[48px] flex items-center justify-center shadow-lg">
              <span className="font-extrabold text-white text-[28px]">3</span>
            </div>

            {/* Icon */}
            <div className="bg-[#fe8c31] rounded-[12px] p-[10px] inline-flex mb-[12px] mt-[20px]">
              <Hammer className="size-6 text-white" />
            </div>
            
            <h3 className="font-bold leading-[28px] text-black text-[22px] mb-[8px]">
              Build the System
            </h3>
            
            <p className="font-semibold leading-[20px] text-[#fe8c31] text-[14px] mb-[12px]">
              EXECUTION
            </p>

            <div className="space-y-[8px] mb-[16px]">
              <p className="font-normal leading-[20px] text-[#364153] text-[14px]">
                • Tokens & foundations
              </p>
              <p className="font-normal leading-[20px] text-[#364153] text-[14px]">
                • Core components
              </p>
              <p className="font-normal leading-[20px] text-[#364153] text-[14px]">
                • Pattern library
              </p>
              <p className="font-normal leading-[20px] text-[#364153] text-[14px]">
                • Documentation
              </p>
            </div>

            <div className="bg-[#fe8c31] rounded-[8px] px-[12px] py-[6px] inline-block">
              <p className="font-bold leading-[20px] text-white text-[14px]">
                6-12 Months
              </p>
            </div>
          </motion.div>

          {/* Arrow to Phase 4 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex items-center pt-[80px]"
          >
            <MoveRight className="size-12 text-[#fe8c31]" strokeWidth={3} />
          </motion.div>

          {/* Phase 4: Integration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-[380px] bg-gradient-to-br from-[rgba(107,114,128,0.12)] to-[rgba(107,114,128,0.02)] border-2 border-[#6b7280] rounded-[20px] p-[24px] relative"
          >
            {/* Number Badge */}
            <div className="absolute top-[-16px] left-[24px] bg-[#6b7280] rounded-full size-[48px] flex items-center justify-center shadow-lg">
              <span className="font-extrabold text-white text-[28px]">4</span>
            </div>

            {/* Icon */}
            <div className="bg-[#6b7280] rounded-[12px] p-[10px] inline-flex mb-[12px] mt-[20px]">
              <Puzzle className="size-6 text-white" />
            </div>
            
            <h3 className="font-bold leading-[28px] text-black text-[22px] mb-[8px]">
              Scale & Integrate
            </h3>
            
            <p className="font-semibold leading-[20px] text-[#6b7280] text-[14px] mb-[12px]">
              VALUE REALIZATION
            </p>

            <div className="space-y-[8px] mb-[16px]">
              <p className="font-normal leading-[20px] text-[#364153] text-[14px]">
                • LM uses system daily
              </p>
              <p className="font-normal leading-[20px] text-[#364153] text-[14px]">
                • PDE/CP adopt quickly
              </p>
              <p className="font-normal leading-[20px] text-[#364153] text-[14px]">
                • Other products accelerate
              </p>
              <p className="font-normal leading-[20px] text-[#364153] text-[14px]">
                • $5M+ value unlocked
              </p>
            </div>

            <div className="bg-[#6b7280] rounded-[8px] px-[12px] py-[6px] inline-block">
              <p className="font-bold leading-[20px] text-white text-[14px]">
                12-24 Months
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Key Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="bg-gradient-to-r from-[rgba(127,189,77,0.12)] to-[rgba(27,165,222,0.12)] border-2 border-[#1ba5de] rounded-[20px] p-[28px] text-center"
      >
        <p className="font-bold leading-[32px] text-black text-[24px] mb-[8px]">
          Phase 1 is Complete. Phase 2 is the Blocker. Together They Unlock Phases 3 & 4.
        </p>
        <p className="font-normal leading-[28px] text-[#4a5565] text-[20px]">
          React + Team Capacity = Foundation to build and scale the system, realizing $5M+ value across all products.
        </p>
      </motion.div>

      {/* Theme Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute left-1/2 bottom-[40px] translate-x-[-50%] flex"
      >
        <div className="bg-[#7fbd4d] h-[40px] rounded-l-[12px] w-[216px]" />
        <div className="bg-[#1ba5de] h-[40px] w-[216px]" />
        <div className="bg-[#fe8c31] h-[40px] w-[216px]" />
        <div className="bg-[#6b7280] h-[40px] rounded-r-[12px] w-[216px]" />
      </motion.div>
    </div>
  );
}
