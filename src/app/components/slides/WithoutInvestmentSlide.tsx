import { motion } from 'motion/react';
import { AlertTriangle, X, Clock } from 'lucide-react';

export function WithoutInvestmentSlide() {
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
          Without Investment
        </p>
        <h2 className="font-bold leading-[72px] text-black text-[64px] tracking-[-1.2px]">
          Missed Opportunities
        </h2>
      </motion.div>

      {/* Key Problem Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-[rgba(107,114,128,0.1)] border-2 border-[#6b7280] rounded-[20px] p-[32px] mb-[48px]"
      >
        <div className="flex items-start gap-4">
          <AlertTriangle className="size-10 text-[#fe8c31] shrink-0 mt-1" />
          <div>
            <p className="font-bold leading-[36px] text-black text-[28px] mb-[12px]">
              No Design System in Code = Every Product Rebuilds
            </p>
            <p className="font-normal leading-[32px] text-[#4a5565] text-[22px]">
              We have Figma designs, but no React components. Each team replatforming to React must build everything from scratch.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Opportunity Flow - What Gets Missed */}
      <div className="space-y-[32px] mb-[48px]">
        {/* LM Opportunity - MISSED */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-[24px]"
        >
          <div className="flex-shrink-0 w-[200px]">
            <div className="bg-[#6b7280] rounded-[12px] px-[20px] py-[16px]">
              <p className="font-bold leading-[28px] text-white text-[22px] text-center">
                LM Opportunity
              </p>
              <p className="font-medium leading-[24px] text-white text-[16px] text-center opacity-90">
                Already on React
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <X className="size-8 text-[#fe8c31]" />
          </div>

          <div className="flex-1 bg-[rgba(107,114,128,0.08)] border-2 border-dashed border-[#6b7280] rounded-[16px] p-[24px]">
            <p className="font-semibold leading-[28px] text-[#6b7280] text-[20px] mb-[8px]">
              MISSED: LM builds their own components
            </p>
            <p className="font-normal leading-[26px] text-[#4a5565] text-[18px]">
              No shared foundation created. Effort is isolated and unreusable.
            </p>
          </div>
        </motion.div>

        {/* PDE/CP Opportunity - MISSED */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-[24px]"
        >
          <div className="flex-shrink-0 w-[200px]">
            <div className="bg-[#6b7280] rounded-[12px] px-[20px] py-[16px]">
              <p className="font-bold leading-[28px] text-white text-[22px] text-center">
                PDE & Connect
              </p>
              <p className="font-medium leading-[24px] text-white text-[16px] text-center opacity-90">
                Plan to replatform
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <X className="size-8 text-[#fe8c31]" />
          </div>

          <div className="flex-1 bg-[rgba(107,114,128,0.08)] border-2 border-dashed border-[#6b7280] rounded-[16px] p-[24px]">
            <p className="font-semibold leading-[28px] text-[#6b7280] text-[20px] mb-[8px]">
              MISSED: They rebuild from scratch too
            </p>
            <p className="font-normal leading-[26px] text-[#4a5565] text-[18px]">
              No foundation exists. They duplicate all the work LM already did.
            </p>
          </div>
        </motion.div>

        {/* Delayed Replatforms - RISK */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-[24px]"
        >
          <div className="flex-shrink-0 w-[200px]">
            <div className="bg-[#6b7280] rounded-[12px] px-[20px] py-[16px]">
              <p className="font-bold leading-[28px] text-white text-[22px] text-center">
                Other Products
              </p>
              <p className="font-medium leading-[24px] text-white text-[16px] text-center opacity-90">
                React pushback?
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Clock className="size-8 text-[#fe8c31]" />
          </div>

          <div className="flex-1 bg-[rgba(254,140,49,0.1)] border-2 border-dashed border-[#fe8c31] rounded-[16px] p-[24px]">
            <p className="font-semibold leading-[28px] text-[#fe8c31] text-[20px] mb-[8px]">
              RISK: Replatforms delayed or cancelled
            </p>
            <p className="font-normal leading-[26px] text-[#4a5565] text-[18px]">
              Without shared system benefits, products may delay React transitions. Timeline pushes out years.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Impact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gradient-to-r from-[rgba(107,114,128,0.08)] to-[rgba(254,140,49,0.12)] border-2 border-[#6b7280] rounded-[20px] p-[32px]"
      >
        <p className="font-bold leading-[36px] text-black text-[26px] mb-[16px] text-center">
          Result: Years of Duplicate Work, Fragmented UX, $5M+ Value Lost
        </p>
        <p className="font-normal leading-[32px] text-[#4a5565] text-[20px] text-center">
          Every product builds in isolation. No shared efficiency. No leverage. No foundation for future products.
        </p>
      </motion.div>

      {/* Theme Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute left-1/2 bottom-[40px] translate-x-[-50%] flex"
      >
        <div className="bg-[#9ca3af] h-[40px] rounded-l-[12px] w-[288px]" />
        <div className="bg-[#6b7280] h-[40px] w-[288px]" />
        <div className="bg-[#4b5563] h-[40px] rounded-r-[12px] w-[288px]" />
      </motion.div>
    </div>
  );
}