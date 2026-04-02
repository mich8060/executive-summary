import { motion } from 'motion/react';
import { Code, Users, Hammer, Puzzle } from 'lucide-react';

export function JourneyPathSlide() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white px-[109px] py-[83px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-[64px]"
      >
        <p className="font-medium italic leading-[48px] text-[#cfcfcf] text-[40px] tracking-[-0.6px] mb-[16px]">
          The Path Forward
        </p>
        <h2 className="font-bold leading-[72px] text-black text-[64px] tracking-[-1.2px]">
          Four-Phase Journey
        </h2>
        <p className="font-normal leading-[36px] text-[#4a5565] text-[24px] mt-[16px]">
          Each phase unlocks the next. React replatforming is our foundation.
        </p>
      </motion.div>

      {/* Journey Flow */}
      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute top-[64px] left-[88px] right-[88px] h-[4px] bg-gradient-to-r from-[#7fbd4d] via-[#1ba5de] to-[#fe8c31]" />
        
        {/* Phase Cards */}
        <div className="grid grid-cols-4 gap-[24px] relative">
          {/* Phase 1: React */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            {/* Number Badge */}
            <div className="flex justify-center mb-[16px]">
              <div className="bg-[#7fbd4d] rounded-full size-[80px] flex items-center justify-center shadow-lg">
                <span className="font-extrabold text-white text-[42px]">1</span>
              </div>
            </div>

            {/* Card */}
            <div className="bg-gradient-to-br from-[rgba(127,189,77,0.1)] to-[rgba(127,189,77,0.02)] border-2 border-[#7fbd4d] rounded-[20px] p-[24px] flex-1">
              <div className="bg-[#7fbd4d] rounded-[12px] p-[12px] inline-flex mb-[16px]">
                <Code className="size-8 text-white" />
              </div>
              
              <h3 className="font-bold leading-[32px] text-black text-[26px] mb-[12px]">
                React Adoption
              </h3>
              
              <p className="font-medium leading-[24px] text-[#7fbd4d] text-[16px] mb-[16px]">
                FOUNDATION
              </p>

              <div className="space-y-[10px]">
                <p className="font-normal leading-[22px] text-[#364153] text-[15px]">
                  • LM already on React
                </p>
                <p className="font-normal leading-[22px] text-[#364153] text-[15px]">
                  • Modern component architecture
                </p>
                <p className="font-normal leading-[22px] text-[#364153] text-[15px]">
                  • Enables shared code
                </p>
                <p className="font-normal leading-[22px] text-[#364153] text-[15px]">
                  • PDE/CP planning same
                </p>
              </div>
            </div>
          </motion.div>

          {/* Phase 2: Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            {/* Number Badge */}
            <div className="flex justify-center mb-[16px]">
              <div className="bg-[#1ba5de] rounded-full size-[80px] flex items-center justify-center shadow-lg">
                <span className="font-extrabold text-white text-[42px]">2</span>
              </div>
            </div>

            {/* Card */}
            <div className="bg-gradient-to-br from-[rgba(27,165,222,0.1)] to-[rgba(27,165,222,0.02)] border-2 border-[#1ba5de] rounded-[20px] p-[24px] flex-1">
              <div className="bg-[#1ba5de] rounded-[12px] p-[12px] inline-flex mb-[16px]">
                <Users className="size-8 text-white" />
              </div>
              
              <h3 className="font-bold leading-[32px] text-black text-[26px] mb-[12px]">
                Design System Team
              </h3>
              
              <p className="font-medium leading-[24px] text-[#1ba5de] text-[16px] mb-[16px]">
                CAPACITY
              </p>

              <div className="space-y-[10px]">
                <p className="font-normal leading-[22px] text-[#364153] text-[15px]">
                  • Embed designer in LM
                </p>
                <p className="font-normal leading-[22px] text-[#364153] text-[15px]">
                  • Secure eng capacity
                </p>
                <p className="font-normal leading-[22px] text-[#364153] text-[15px]">
                  • Cross-product alignment
                </p>
                <p className="font-normal leading-[22px] text-[#364153] text-[15px]">
                  • Dedicated ownership
                </p>
              </div>
            </div>
          </motion.div>

          {/* Phase 3: Build */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col"
          >
            {/* Number Badge */}
            <div className="flex justify-center mb-[16px]">
              <div className="bg-[#fe8c31] rounded-full size-[80px] flex items-center justify-center shadow-lg">
                <span className="font-extrabold text-white text-[42px]">3</span>
              </div>
            </div>

            {/* Card */}
            <div className="bg-gradient-to-br from-[rgba(254,140,49,0.1)] to-[rgba(254,140,49,0.02)] border-2 border-[#fe8c31] rounded-[20px] p-[24px] flex-1">
              <div className="bg-[#fe8c31] rounded-[12px] p-[12px] inline-flex mb-[16px]">
                <Hammer className="size-8 text-white" />
              </div>
              
              <h3 className="font-bold leading-[32px] text-black text-[26px] mb-[12px]">
                Build the System
              </h3>
              
              <p className="font-medium leading-[24px] text-[#fe8c31] text-[16px] mb-[16px]">
                EXECUTION
              </p>

              <div className="space-y-[10px]">
                <p className="font-normal leading-[22px] text-[#364153] text-[15px]">
                  • Tokens & foundations
                </p>
                <p className="font-normal leading-[22px] text-[#364153] text-[15px]">
                  • Core components
                </p>
                <p className="font-normal leading-[22px] text-[#364153] text-[15px]">
                  • Pattern library
                </p>
                <p className="font-normal leading-[22px] text-[#364153] text-[15px]">
                  • Documentation
                </p>
              </div>
            </div>
          </motion.div>

          {/* Phase 4: Integration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col"
          >
            {/* Number Badge */}
            <div className="flex justify-center mb-[16px]">
              <div className="bg-[#6b7280] rounded-full size-[80px] flex items-center justify-center shadow-lg">
                <span className="font-extrabold text-white text-[42px]">4</span>
              </div>
            </div>

            {/* Card */}
            <div className="bg-gradient-to-br from-[rgba(107,114,128,0.1)] to-[rgba(107,114,128,0.02)] border-2 border-[#6b7280] rounded-[20px] p-[24px] flex-1">
              <div className="bg-[#6b7280] rounded-[12px] p-[12px] inline-flex mb-[16px]">
                <Puzzle className="size-8 text-white" />
              </div>
              
              <h3 className="font-bold leading-[32px] text-black text-[26px] mb-[12px]">
                Scale & Integrate
              </h3>
              
              <p className="font-medium leading-[24px] text-[#6b7280] text-[16px] mb-[16px]">
                VALUE REALIZATION
              </p>

              <div className="space-y-[10px]">
                <p className="font-normal leading-[22px] text-[#364153] text-[15px]">
                  • LM uses system daily
                </p>
                <p className="font-normal leading-[22px] text-[#364153] text-[15px]">
                  • PDE/CP adopt quickly
                </p>
                <p className="font-normal leading-[22px] text-[#364153] text-[15px]">
                  • Other products accelerate
                </p>
                <p className="font-normal leading-[22px] text-[#364153] text-[15px]">
                  • $5M+ value unlocked
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-[56px] bg-gradient-to-r from-[rgba(127,189,77,0.12)] to-[rgba(254,140,49,0.12)] border-2 border-[#7fbd4d] rounded-[20px] p-[24px]"
      >
        <div className="flex items-center justify-between">
          <div className="text-center flex-1">
            <p className="font-bold leading-[28px] text-[#7fbd4d] text-[20px] mb-[4px]">
              Phase 1
            </p>
            <p className="font-medium leading-[24px] text-[#4a5565] text-[16px]">
              Already Complete (LM)
            </p>
          </div>
          
          <div className="text-[#cfcfcf] text-[32px]">→</div>
          
          <div className="text-center flex-1">
            <p className="font-bold leading-[28px] text-[#1ba5de] text-[20px] mb-[4px]">
              Phase 2
            </p>
            <p className="font-medium leading-[24px] text-[#4a5565] text-[16px]">
              Immediate Need
            </p>
          </div>
          
          <div className="text-[#cfcfcf] text-[32px]">→</div>
          
          <div className="text-center flex-1">
            <p className="font-bold leading-[28px] text-[#fe8c31] text-[20px] mb-[4px]">
              Phase 3
            </p>
            <p className="font-medium leading-[24px] text-[#4a5565] text-[16px]">
              6-12 Months
            </p>
          </div>
          
          <div className="text-[#cfcfcf] text-[32px]">→</div>
          
          <div className="text-center flex-1">
            <p className="font-bold leading-[28px] text-[#6b7280] text-[20px] mb-[4px]">
              Phase 4
            </p>
            <p className="font-medium leading-[24px] text-[#4a5565] text-[16px]">
              12-24 Months
            </p>
          </div>
        </div>
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
