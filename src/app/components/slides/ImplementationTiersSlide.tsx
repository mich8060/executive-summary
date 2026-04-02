import { motion } from 'motion/react';
import { Layers, Box, LayoutGrid, Sparkles } from 'lucide-react';

export function ImplementationTiersSlide() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white px-[109px] py-[83px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-[48px]"
      >
        <p className="font-medium italic leading-[48px] text-[#cfcfcf] text-[40px] tracking-[-0.6px] mb-[16px]">
          The Path Forward
        </p>
        <h2 className="font-bold leading-[72px] text-black text-[64px] tracking-[-1.2px]">
          Progressive Implementation
        </h2>
        <p className="font-normal leading-[36px] text-[#4a5565] text-[24px] mt-[16px]">
          Build value incrementally. Each tier delivers measurable impact while setting up the next level.
        </p>
      </motion.div>

      {/* Tiers Grid - 2x2 */}
      <div className="grid grid-cols-2 gap-[24px] mb-[40px]">
        {/* Tier 1: Foundation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-br from-[rgba(127,189,77,0.08)] to-[rgba(127,189,77,0.02)] border-2 border-[#7fbd4d] rounded-[20px] p-[28px]"
        >
          <div className="flex items-start gap-4 mb-[20px]">
            <div className="bg-[#7fbd4d] rounded-[12px] p-[12px] shrink-0">
              <Layers className="size-8 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-[8px]">
                <h3 className="font-bold leading-[32px] text-black text-[28px]">
                  Tier 1: Foundation
                </h3>
                <span className="bg-[#7fbd4d] text-white font-semibold text-[14px] px-[12px] py-[4px] rounded-full">
                  1-2 weeks
                </span>
              </div>
              <p className="font-medium leading-[24px] text-[#4a5565] text-[16px]">
                Design Tokens: Colors, Typography, Spacing, Icons
              </p>
            </div>
          </div>

          <div className="space-y-[12px]">
            <div className="flex items-start gap-2">
              <div className="size-2 rounded-full bg-[#7fbd4d] shrink-0 mt-[8px]" />
              <p className="font-normal leading-[24px] text-[#364153] text-[15px]">
                <span className="font-semibold">Low risk:</span> Aligns with work already happening in LM replatform
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="size-2 rounded-full bg-[#7fbd4d] shrink-0 mt-[8px]" />
              <p className="font-normal leading-[24px] text-[#364153] text-[15px]">
                <span className="font-semibold">Immediate value:</span> Consistent styling across LM from day one
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="size-2 rounded-full bg-[#7fbd4d] shrink-0 mt-[8px]" />
              <p className="font-normal leading-[24px] text-[#364153] text-[15px]">
                <span className="font-semibold">Foundation:</span> Unlocks component development in Tier 2
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tier 2: Basic Components */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-[rgba(27,165,222,0.08)] to-[rgba(27,165,222,0.02)] border-2 border-[#1ba5de] rounded-[20px] p-[28px]"
        >
          <div className="flex items-start gap-4 mb-[20px]">
            <div className="bg-[#1ba5de] rounded-[12px] p-[12px] shrink-0">
              <Box className="size-8 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-[8px]">
                <h3 className="font-bold leading-[32px] text-black text-[28px]">
                  Tier 2: Core Components
                </h3>
                <span className="bg-[#1ba5de] text-white font-semibold text-[14px] px-[12px] py-[4px] rounded-full">
                  4-6 weeks
                </span>
              </div>
              <p className="font-medium leading-[24px] text-[#4a5565] text-[16px]">
                Buttons, Forms, Cards, Navigation, Modals
              </p>
            </div>
          </div>

          <div className="space-y-[12px]">
            <div className="flex items-start gap-2">
              <div className="size-2 rounded-full bg-[#1ba5de] shrink-0 mt-[8px]" />
              <p className="font-normal leading-[24px] text-[#364153] text-[15px]">
                <span className="font-semibold">Embedded work:</span> Build components as LM needs them
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="size-2 rounded-full bg-[#1ba5de] shrink-0 mt-[8px]" />
              <p className="font-normal leading-[24px] text-[#364153] text-[15px]">
                <span className="font-semibold">Accelerates LM:</span> Pre-built, documented, accessible components
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="size-2 rounded-full bg-[#1ba5de] shrink-0 mt-[8px]" />
              <p className="font-normal leading-[24px] text-[#364153] text-[15px]">
                <span className="font-semibold">Leverage:</span> Library ready when PDE/CP replatform
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tier 3: Patterns & Architecture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-[rgba(254,140,49,0.08)] to-[rgba(254,140,49,0.02)] border-2 border-[#fe8c31] rounded-[20px] p-[28px]"
        >
          <div className="flex items-start gap-4 mb-[20px]">
            <div className="bg-[#fe8c31] rounded-[12px] p-[12px] shrink-0">
              <LayoutGrid className="size-8 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-[8px]">
                <h3 className="font-bold leading-[32px] text-black text-[28px]">
                  Tier 3: Patterns
                </h3>
                <span className="bg-[#fe8c31] text-white font-semibold text-[14px] px-[12px] py-[4px] rounded-full">
                  8-12 weeks
                </span>
              </div>
              <p className="font-medium leading-[24px] text-[#4a5565] text-[16px]">
                Layouts, Data Tables, Complex Forms, Workflows
              </p>
            </div>
          </div>

          <div className="space-y-[12px]">
            <div className="flex items-start gap-2">
              <div className="size-2 rounded-full bg-[#fe8c31] shrink-0 mt-[8px]" />
              <p className="font-normal leading-[24px] text-[#364153] text-[15px]">
                <span className="font-semibold">Product-driven:</span> Build patterns LM actually uses
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="size-2 rounded-full bg-[#fe8c31] shrink-0 mt-[8px]" />
              <p className="font-normal leading-[24px] text-[#364153] text-[15px]">
                <span className="font-semibold">Compound value:</span> Common workflows become plug-and-play
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="size-2 rounded-full bg-[#fe8c31] shrink-0 mt-[8px]" />
              <p className="font-normal leading-[24px] text-[#364153] text-[15px]">
                <span className="font-semibold">Massive acceleration:</span> Next products skip months of work
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tier 4: Advanced & Optimization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-[rgba(155,155,155,0.08)] to-[rgba(155,155,155,0.02)] border-2 border-[#6b7280] rounded-[20px] p-[28px]"
        >
          <div className="flex items-start gap-4 mb-[20px]">
            <div className="bg-[#6b7280] rounded-[12px] p-[12px] shrink-0">
              <Sparkles className="size-8 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-[8px]">
                <h3 className="font-bold leading-[32px] text-black text-[28px]">
                  Tier 4: Advanced
                </h3>
                <span className="bg-[#6b7280] text-white font-semibold text-[14px] px-[12px] py-[4px] rounded-full">
                  Ongoing
                </span>
              </div>
              <p className="font-medium leading-[24px] text-[#4a5565] text-[16px]">
                Performance, A11y, Testing, Multi-brand, Analytics
              </p>
            </div>
          </div>

          <div className="space-y-[12px]">
            <div className="flex items-start gap-2">
              <div className="size-2 rounded-full bg-[#6b7280] shrink-0 mt-[8px]" />
              <p className="font-normal leading-[24px] text-[#364153] text-[15px]">
                <span className="font-semibold">Maturity:</span> System is proven, now optimize
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="size-2 rounded-full bg-[#6b7280] shrink-0 mt-[8px]" />
              <p className="font-normal leading-[24px] text-[#364153] text-[15px]">
                <span className="font-semibold">Scale:</span> Multi-product efficiency, shared analytics
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="size-2 rounded-full bg-[#6b7280] shrink-0 mt-[8px]" />
              <p className="font-normal leading-[24px] text-[#364153] text-[15px]">
                <span className="font-semibold">Future-ready:</span> Platform for innovation across all products
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Key Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gradient-to-r from-[rgba(127,189,77,0.12)] to-[rgba(27,165,222,0.12)] border-2 border-[#7fbd4d] rounded-[20px] p-[28px] text-center"
      >
        <p className="font-bold leading-[32px] text-black text-[22px]">
          Start with Tier 1 in LM today. Build progressively. Each tier compounds value for all future products.
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
