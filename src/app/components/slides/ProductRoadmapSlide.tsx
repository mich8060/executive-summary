import { motion } from 'motion/react';
import { Zap, CheckCircle2, Rocket } from 'lucide-react';

export function ProductRoadmapSlide() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white px-[109px] py-[83px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-[56px]"
      >
        <p className="font-medium italic leading-[48px] text-[#cfcfcf] text-[40px] tracking-[-0.6px] mb-[16px]">
          With Barriers Removed
        </p>
        <h2 className="font-bold leading-[72px] text-black text-[64px] tracking-[-1.2px]">
          Ready When They Are
        </h2>
      </motion.div>

      {/* Key Strategy Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-gradient-to-r from-[rgba(127,189,77,0.12)] to-[rgba(27,165,222,0.12)] border-2 border-[#7fbd4d] rounded-[20px] p-[32px] mb-[48px]"
      >
        <div className="flex items-start gap-4">
          <Rocket className="size-10 text-[#7fbd4d] shrink-0 mt-1" />
          <div>
            <p className="font-bold leading-[36px] text-black text-[28px] mb-[12px]">
              Build the Foundation Now = Leverage Every Future Replatform
            </p>
            <p className="font-normal leading-[32px] text-[#4a5565] text-[22px]">
              Embed in LM's React work today. Create the shared system. When other products replatform, they accelerate.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Opportunity Flow - What Gets Captured */}
      <div className="space-y-[32px] mb-[48px]">
        {/* LM Opportunity - CAPTURED */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-[24px]"
        >
          <div className="flex-shrink-0 w-[200px]">
            <div className="bg-[#7fbd4d] rounded-[12px] px-[20px] py-[16px]">
              <p className="font-bold leading-[28px] text-white text-[22px] text-center">
                LM Opportunity
              </p>
              <p className="font-medium leading-[24px] text-white text-[16px] text-center opacity-90">
                Already on React
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <CheckCircle2 className="size-8 text-[#7fbd4d]" />
          </div>

          <div className="flex-1 bg-[rgba(127,189,77,0.1)] border-2 border-[#7fbd4d] rounded-[16px] p-[24px]">
            <p className="font-semibold leading-[28px] text-[#7fbd4d] text-[20px] mb-[8px]">
              CAPTURED: Embed designer, build React foundation
            </p>
            <p className="font-normal leading-[26px] text-[#4a5565] text-[18px]">
              Build shared components with LM. Create foundation. Document patterns. LM moves fast, we build for all.
            </p>
          </div>
        </motion.div>

        {/* PDE/CP Opportunity - ACCELERATED */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-[24px]"
        >
          <div className="flex-shrink-0 w-[200px]">
            <div className="bg-[#1ba5de] rounded-[12px] px-[20px] py-[16px]">
              <p className="font-bold leading-[28px] text-white text-[22px] text-center">
                PDE & Connect
              </p>
              <p className="font-medium leading-[24px] text-white text-[16px] text-center opacity-90">
                Plan to replatform
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Zap className="size-8 text-[#1ba5de]" />
          </div>

          <div className="flex-1 bg-[rgba(27,165,222,0.1)] border-2 border-[#1ba5de] rounded-[16px] p-[24px]">
            <p className="font-semibold leading-[28px] text-[#1ba5de] text-[20px] mb-[8px]">
              ACCELERATED: System already exists when they're ready
            </p>
            <p className="font-normal leading-[26px] text-[#4a5565] text-[18px]">
              Components ready. Patterns proven. They plug in and go. Months of work eliminated. Consistent UX guaranteed.
            </p>
          </div>
        </motion.div>

        {/* Future Products - MOMENTUM */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-[24px]"
        >
          <div className="flex-shrink-0 w-[200px]">
            <div className="bg-[#fe8c31] rounded-[12px] px-[20px] py-[16px]">
              <p className="font-bold leading-[28px] text-white text-[22px] text-center">
                Future Products
              </p>
              <p className="font-medium leading-[24px] text-white text-[16px] text-center opacity-90">
                Replatform timing TBD
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Rocket className="size-8 text-[#fe8c31]" />
          </div>

          <div className="flex-1 bg-[rgba(254,140,49,0.1)] border-2 border-[#fe8c31] rounded-[16px] p-[24px]">
            <p className="font-semibold leading-[28px] text-[#fe8c31] text-[20px] mb-[8px]">
              MOMENTUM: React becomes the obvious choice
            </p>
            <p className="font-normal leading-[26px] text-[#4a5565] text-[18px]">
              Shared system makes React transitions faster and cheaper. Products see the value. Replatforming accelerates.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Impact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gradient-to-r from-[rgba(127,189,77,0.12)] to-[rgba(27,165,222,0.12)] border-2 border-[#7fbd4d] rounded-[20px] p-[32px]"
      >
        <p className="font-bold leading-[36px] text-black text-[26px] mb-[16px] text-center">
          Result: LM Builds Foundation, All Products Leverage It, Compounding Value
        </p>
        <p className="font-normal leading-[32px] text-[#4a5565] text-[20px] text-center">
          One investment. Multiple products accelerated. Consistent experience. $5M+ value realized across the enterprise.
        </p>
      </motion.div>

      {/* Theme Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute left-1/2 bottom-[40px] translate-x-[-50%] flex"
      >
        <div className="bg-[#7fbd4d] h-[40px] rounded-l-[12px] w-[288px]" />
        <div className="bg-[#1ba5de] h-[40px] w-[288px]" />
        <div className="bg-[#fe8c31] h-[40px] rounded-r-[12px] w-[288px]" />
      </motion.div>
    </div>
  );
}