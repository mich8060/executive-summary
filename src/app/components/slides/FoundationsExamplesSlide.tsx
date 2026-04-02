import { motion } from 'motion/react';
import { Layers, Palette, Sparkles } from 'lucide-react';

export function FoundationsExamplesSlide() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white px-[109px] py-[83px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-[40px] text-center"
      >
        <p className="font-medium italic leading-[48px] text-[#cfcfcf] text-[40px] tracking-[-0.6px] mb-[8px]">
          In Practice
        </p>
        <h2 className="font-bold leading-[72px] text-black text-[64px] tracking-[-1.2px]">
          Design System Foundations
        </h2>
        <p className="font-normal leading-[36px] text-[#4a5565] text-[24px] mt-[8px]">
          Real examples of how these foundations work.
        </p>
      </motion.div>

      {/* Three Examples Grid */}
      <div className="grid grid-cols-3 gap-[24px]">
        {/* Example 1: Infrastructure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-br from-white to-[rgba(27,165,222,0.05)] border-2 border-[#1BA5DE] rounded-[20px] p-[24px]"
        >
          {/* Header */}
          <div className="flex items-center gap-[12px] mb-[20px]">
            <div className="bg-[#1BA5DE] rounded-[10px] p-[10px]">
              <Layers className="size-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold leading-[28px] text-[#1BA5DE] text-[22px]">
                Infrastructure
              </h3>
              <p className="font-normal leading-[20px] text-[#4a5565] text-[14px]">
                Tokens & Variables
              </p>
            </div>
          </div>

          {/* Visual Example */}
          <div className="bg-white rounded-[12px] p-[16px] border border-[#1BA5DE] mb-[16px] shadow-sm">
            {/* Token Example */}
            <div className="mb-[12px]">
              <p className="font-mono text-[12px] text-[#6b7280] mb-[6px]">
                // Design Token
              </p>
              <div className="flex items-center justify-between bg-gray-50 rounded-[6px] p-[8px]">
                <code className="font-mono text-[13px] text-[#1BA5DE] font-semibold">
                  color.primary.500
                </code>
                <div className="size-[24px] rounded-[4px] bg-[#1BA5DE] border border-gray-300" />
              </div>
            </div>

            <div className="mb-[12px]">
              <div className="flex items-center justify-between bg-gray-50 rounded-[6px] p-[8px]">
                <code className="font-mono text-[13px] text-[#7FBD4D] font-semibold">
                  color.success.500
                </code>
                <div className="size-[24px] rounded-[4px] bg-[#7FBD4D] border border-gray-300" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between bg-gray-50 rounded-[6px] p-[8px]">
                <code className="font-mono text-[13px] text-[#FE8C31] font-semibold">
                  color.warning.500
                </code>
                <div className="size-[24px] rounded-[4px] bg-[#FE8C31] border border-gray-300" />
              </div>
            </div>
          </div>

          {/* Benefit */}
          <div className="bg-[rgba(27,165,222,0.1)] rounded-[8px] p-[12px]">
            <p className="font-semibold leading-[20px] text-[#1BA5DE] text-[14px] mb-[4px]">
              Result:
            </p>
            <p className="font-normal leading-[20px] text-[#364153] text-[13px]">
              Change one token, update everywhere instantly. No manual find/replace.
            </p>
          </div>
        </motion.div>

        {/* Example 2: Multi-Brand Scale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-white to-[rgba(127,189,77,0.05)] border-2 border-[#7FBD4D] rounded-[20px] p-[24px]"
        >
          {/* Header */}
          <div className="flex items-center gap-[12px] mb-[20px]">
            <div className="bg-[#7FBD4D] rounded-[10px] p-[10px]">
              <Palette className="size-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold leading-[28px] text-[#7FBD4D] text-[22px]">
                Multi-Brand Scale
              </h3>
              <p className="font-normal leading-[20px] text-[#4a5565] text-[14px]">
                One component, many brands
              </p>
            </div>
          </div>

          {/* Visual Example - Same Button, Different Brands */}
          <div className="bg-white rounded-[12px] p-[16px] border border-[#7FBD4D] mb-[16px] shadow-sm space-y-[12px]">
            {/* CHG Brand */}
            <div className="text-center">
              <p className="font-semibold text-[11px] text-[#6b7280] mb-[6px] uppercase tracking-wide">
                CHG Healthcare
              </p>
              <button className="bg-[#1BA5DE] text-white px-[24px] py-[10px] rounded-[6px] font-semibold text-[14px] w-full hover:bg-[#1890c0] transition-colors">
                Get Started
              </button>
            </div>

            {/* Brand 2 */}
            <div className="text-center">
              <p className="font-semibold text-[11px] text-[#6b7280] mb-[6px] uppercase tracking-wide">
                LocumTenens
              </p>
              <button className="bg-[#7FBD4D] text-white px-[24px] py-[10px] rounded-[6px] font-semibold text-[14px] w-full hover:bg-[#6fa73d] transition-colors">
                Get Started
              </button>
            </div>

            {/* Brand 3 */}
            <div className="text-center">
              <p className="font-semibold text-[11px] text-[#6b7280] mb-[6px] uppercase tracking-wide">
                CompHealth
              </p>
              <button className="bg-[#FE8C31] text-white px-[24px] py-[10px] rounded-[6px] font-semibold text-[14px] w-full hover:bg-[#e67b1f] transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Benefit */}
          <div className="bg-[rgba(127,189,77,0.1)] rounded-[8px] p-[12px]">
            <p className="font-semibold leading-[20px] text-[#7FBD4D] text-[14px] mb-[4px]">
              Result:
            </p>
            <p className="font-normal leading-[20px] text-[#364153] text-[13px]">
              Same component code, different theme tokens. No duplication.
            </p>
          </div>
        </motion.div>

        {/* Example 3: Future-Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-white to-[rgba(254,140,49,0.05)] border-2 border-[#FE8C31] rounded-[20px] p-[24px]"
        >
          {/* Header */}
          <div className="flex items-center gap-[12px] mb-[20px]">
            <div className="bg-[#FE8C31] rounded-[10px] p-[10px]">
              <Sparkles className="size-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold leading-[28px] text-[#FE8C31] text-[22px]">
                Future-Proof
              </h3>
              <p className="font-normal leading-[20px] text-[#4a5565] text-[14px]">
                Easy to extend
              </p>
            </div>
          </div>

          {/* Visual Example - Adding New Brand */}
          <div className="bg-white rounded-[12px] p-[16px] border border-[#FE8C31] mb-[16px] shadow-sm">
            <p className="font-mono text-[12px] text-[#6b7280] mb-[8px]">
              // Add new brand in minutes
            </p>
            
            <div className="bg-gray-50 rounded-[8px] p-[12px] mb-[12px] font-mono text-[12px]">
              <div className="text-[#6b7280]">const <span className="text-[#FE8C31] font-semibold">newBrand</span> = {'{'}</div>
              <div className="text-[#6b7280] ml-[16px]">primary: <span className="text-[#1BA5DE]">'#1BA5DE'</span>,</div>
              <div className="text-[#6b7280] ml-[16px]">success: <span className="text-[#7FBD4D]">'#7FBD4D'</span>,</div>
              <div className="text-[#6b7280] ml-[16px]">warning: <span className="text-[#FE8C31]">'#FE8C31'</span></div>
              <div className="text-[#6b7280]">{'}'}</div>
            </div>

            <div className="flex items-center gap-[8px] bg-[#f0fdf4] rounded-[6px] p-[8px] border border-[#7FBD4D]">
              <div className="bg-[#7FBD4D] rounded-full size-[16px] flex items-center justify-center">
                <svg className="size-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-semibold text-[13px] text-[#15803d]">
                All components work instantly
              </p>
            </div>
          </div>

          {/* Benefit */}
          <div className="bg-[rgba(254,140,49,0.1)] rounded-[8px] p-[12px]">
            <p className="font-semibold leading-[20px] text-[#FE8C31] text-[14px] mb-[4px]">
              Result:
            </p>
            <p className="font-normal leading-[20px] text-[#364153] text-[13px]">
              Acquisition? New brand? Configure tokens, done. No rebuild needed.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-[32px] text-center"
      >
        <p className="font-semibold leading-[32px] text-[#4a5565] text-[20px]">
          <span className="text-[#1BA5DE] font-bold">Portable</span>, <span className="text-[#7FBD4D] font-bold">Scalable</span>, and <span className="text-[#FE8C31] font-bold">Future-Ready</span> by design.
        </p>
      </motion.div>

      {/* Theme Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute left-1/2 bottom-[40px] translate-x-[-50%] flex"
      >
        <div className="bg-[#1BA5DE] h-[40px] rounded-l-[12px] w-[288px]" />
        <div className="bg-[#7FBD4D] h-[40px] w-[288px]" />
        <div className="bg-[#FE8C31] h-[40px] rounded-r-[12px] w-[288px]" />
      </motion.div>
    </div>
  );
}
