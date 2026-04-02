import { motion } from 'motion/react';
import { AlertCircle, Clock, Copy, FileQuestion } from 'lucide-react';

export function BottleneckExamplesSlide() {
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
          Real-World Impact
        </p>
        <h2 className="font-bold leading-[72px] text-black text-[64px] tracking-[-1.2px]">
          What Bottlenecks Look Like
        </h2>
        <p className="font-normal leading-[36px] text-[#4a5565] text-[24px] mt-[8px]">
          Without engineering capacity, these scenarios happen daily.
        </p>
      </motion.div>

      {/* Grid of Scenarios */}
      <div className="grid grid-cols-2 gap-[32px] mb-[32px]">
        {/* Scenario 1: Copy-Paste Hell */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-br from-white to-[rgba(254,140,49,0.05)] border-2 border-[#FE8C31] rounded-[20px] p-[28px]"
        >
          {/* Header */}
          <div className="flex items-start gap-[16px] mb-[20px]">
            <div className="bg-[#FE8C31] rounded-[12px] p-[12px] flex-shrink-0">
              <Copy className="size-7 text-white" />
            </div>
            <div>
              <h3 className="font-bold leading-[32px] text-[#FE8C31] text-[26px]">
                Copy-Paste Hell
              </h3>
              <p className="font-normal leading-[22px] text-[#6b7280] text-[16px]">
                Duplicated code across teams
              </p>
            </div>
          </div>

          {/* Scenario Description */}
          <div className="bg-white rounded-[12px] p-[20px] border border-[#FE8C31] mb-[16px] shadow-sm">
            <p className="font-normal leading-[24px] text-[#364153] text-[16px] mb-[16px]">
              <span className="font-semibold text-[#FE8C31]">Designer:</span> "I designed this button in Figma..."
            </p>
            <p className="font-normal leading-[24px] text-[#364153] text-[16px] mb-[16px]">
              <span className="font-semibold text-[#7FBD4D]">Engineer:</span> "Cool, I'll just copy it from the other project and modify it."
            </p>
            <div className="bg-[rgba(254,140,49,0.1)] rounded-[8px] p-[12px] border-l-4 border-[#FE8C31]">
              <p className="font-semibold leading-[20px] text-[#FE8C31] text-[14px] mb-[4px]">
                3 weeks later...
              </p>
              <p className="font-normal leading-[20px] text-[#364153] text-[14px]">
                Same button now exists in 6 different forms across 4 products. A brand color changes — requires 47 manual updates.
              </p>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="flex items-center justify-between">
            <div className="text-center">
              <p className="font-bold text-[32px] text-[#FE8C31] leading-none">6+</p>
              <p className="font-normal text-[13px] text-[#6b7280] mt-[4px]">Versions</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-[32px] text-[#FE8C31] leading-none">47</p>
              <p className="font-normal text-[13px] text-[#6b7280] mt-[4px]">Manual Edits</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-[32px] text-[#FE8C31] leading-none">5h</p>
              <p className="font-normal text-[13px] text-[#6b7280] mt-[4px]">Wasted Time</p>
            </div>
          </div>
        </motion.div>

        {/* Scenario 2: Design-Dev Mismatch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-white to-[rgba(254,140,49,0.05)] border-2 border-[#FE8C31] rounded-[20px] p-[28px]"
        >
          {/* Header */}
          <div className="flex items-start gap-[16px] mb-[20px]">
            <div className="bg-[#FE8C31] rounded-[12px] p-[12px] flex-shrink-0">
              <FileQuestion className="size-7 text-white" />
            </div>
            <div>
              <h3 className="font-bold leading-[32px] text-[#FE8C31] text-[26px]">
                Design-Dev Drift
              </h3>
              <p className="font-normal leading-[22px] text-[#6b7280] text-[16px]">
                Figma ≠ Production
              </p>
            </div>
          </div>

          {/* Scenario Description */}
          <div className="bg-white rounded-[12px] p-[20px] border border-[#FE8C31] mb-[16px] shadow-sm">
            <p className="font-normal leading-[24px] text-[#364153] text-[16px] mb-[16px]">
              <span className="font-semibold text-[#FE8C31]">Designer:</span> "Why doesn't this match my design?"
            </p>
            <p className="font-normal leading-[24px] text-[#364153] text-[16px] mb-[16px]">
              <span className="font-semibold text-[#7FBD4D]">Engineer:</span> "I used 16px spacing because that's what the last project had..."
            </p>
            <div className="bg-[rgba(254,140,49,0.1)] rounded-[8px] p-[12px] border-l-4 border-[#FE8C31]">
              <p className="font-semibold leading-[20px] text-[#FE8C31] text-[14px] mb-[4px]">
                The Reality:
              </p>
              <p className="font-normal leading-[20px] text-[#364153] text-[14px]">
                Figma says 24px. Code says 16px. QA logs a bug. Designer re-explains spacing system. Engineer updates it. Repeat next sprint.
              </p>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="flex items-center justify-between">
            <div className="text-center">
              <p className="font-bold text-[32px] text-[#FE8C31] leading-none">3x</p>
              <p className="font-normal text-[13px] text-[#6b7280] mt-[4px]">Back & Forth</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-[32px] text-[#FE8C31] leading-none">12</p>
              <p className="font-normal text-[13px] text-[#6b7280] mt-[4px]">QA Tickets</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-[32px] text-[#FE8C31] leading-none">2d</p>
              <p className="font-normal text-[13px] text-[#6b7280] mt-[4px]">Sprint Delay</p>
            </div>
          </div>
        </motion.div>

        {/* Scenario 3: Onboarding Nightmare */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-white to-[rgba(254,140,49,0.05)] border-2 border-[#FE8C31] rounded-[20px] p-[28px]"
        >
          {/* Header */}
          <div className="flex items-start gap-[16px] mb-[20px]">
            <div className="bg-[#FE8C31] rounded-[12px] p-[12px] flex-shrink-0">
              <Clock className="size-7 text-white" />
            </div>
            <div>
              <h3 className="font-bold leading-[32px] text-[#FE8C31] text-[26px]">
                Onboarding Chaos
              </h3>
              <p className="font-normal leading-[22px] text-[#6b7280] text-[16px]">
                New hires start from scratch
              </p>
            </div>
          </div>

          {/* Scenario Description */}
          <div className="bg-white rounded-[12px] p-[20px] border border-[#FE8C31] mb-[16px] shadow-sm">
            <p className="font-normal leading-[24px] text-[#364153] text-[16px] mb-[16px]">
              <span className="font-semibold text-[#1BA5DE]">New Designer:</span> "Where do I find the button components?"
            </p>
            <p className="font-normal leading-[24px] text-[#364153] text-[16px] mb-[16px]">
              <span className="font-semibold text-[#6b7280]">Senior Designer:</span> "Well... there's the Figma file, but code doesn't match it, so check with your dev first..."
            </p>
            <div className="bg-[rgba(254,140,49,0.1)] rounded-[8px] p-[12px] border-l-4 border-[#FE8C31]">
              <p className="font-semibold leading-[20px] text-[#FE8C31] text-[14px] mb-[4px]">
                Week 1 Result:
              </p>
              <p className="font-normal leading-[20px] text-[#364153] text-[14px]">
                New hire spends 2 days learning "tribal knowledge" instead of designing. Still confused.
              </p>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="flex items-center justify-between">
            <div className="text-center">
              <p className="font-bold text-[32px] text-[#FE8C31] leading-none">2w</p>
              <p className="font-normal text-[13px] text-[#6b7280] mt-[4px]">Ramp Time</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-[32px] text-[#FE8C31] leading-none">8+</p>
              <p className="font-normal text-[13px] text-[#6b7280] mt-[4px]">Slack Threads</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-[32px] text-[#FE8C31] leading-none">$4K</p>
              <p className="font-normal text-[13px] text-[#6b7280] mt-[4px]">Lost Productivity</p>
            </div>
          </div>
        </motion.div>

        {/* Scenario 4: Broken Updates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-white to-[rgba(254,140,49,0.05)] border-2 border-[#FE8C31] rounded-[20px] p-[28px]"
        >
          {/* Header */}
          <div className="flex items-start gap-[16px] mb-[20px]">
            <div className="bg-[#FE8C31] rounded-[12px] p-[12px] flex-shrink-0">
              <AlertCircle className="size-7 text-white" />
            </div>
            <div>
              <h3 className="font-bold leading-[32px] text-[#FE8C31] text-[26px]">
                Update Paralysis
              </h3>
              <p className="font-normal leading-[22px] text-[#6b7280] text-[16px]">
                Simple changes = massive effort
              </p>
            </div>
          </div>

          {/* Scenario Description */}
          <div className="bg-white rounded-[12px] p-[20px] border border-[#FE8C31] mb-[16px] shadow-sm">
            <p className="font-normal leading-[24px] text-[#364153] text-[16px] mb-[16px]">
              <span className="font-semibold text-[#1BA5DE]">Leadership:</span> "We're updating the primary blue across all products."
            </p>
            <p className="font-normal leading-[24px] text-[#364153] text-[16px] mb-[16px]">
              <span className="font-semibold text-[#7FBD4D]">Teams:</span> "That'll take 6 sprints across 8 products. Are you sure?"
            </p>
            <div className="bg-[rgba(254,140,49,0.1)] rounded-[8px] p-[12px] border-l-4 border-[#FE8C31]">
              <p className="font-semibold leading-[20px] text-[#FE8C31] text-[14px] mb-[4px]">
                What Happens:
              </p>
              <p className="font-normal leading-[20px] text-[#364153] text-[14px]">
                Leadership backs off. Brand inconsistency persists. Team morale drops. Simple changes feel impossible.
              </p>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="flex items-center justify-between">
            <div className="text-center">
              <p className="font-bold text-[32px] text-[#FE8C31] leading-none">6</p>
              <p className="font-normal text-[13px] text-[#6b7280] mt-[4px]">Sprints</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-[32px] text-[#FE8C31] leading-none">8</p>
              <p className="font-normal text-[13px] text-[#6b7280] mt-[4px]">Teams Affected</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-[32px] text-[#FE8C31] leading-none">$80K</p>
              <p className="font-normal text-[13px] text-[#6b7280] mt-[4px]">Cost to Update</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-r from-[rgba(254,140,49,0.1)] to-[rgba(254,140,49,0.2)] rounded-[16px] p-[24px] border-l-4 border-[#FE8C31]"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold leading-[32px] text-black text-[24px] mb-[4px]">
              These aren't edge cases. This is daily reality.
            </p>
            <p className="font-normal leading-[24px] text-[#4a5565] text-[18px]">
              Without code, our design system is reference material — not infrastructure.
            </p>
          </div>
          <div className="bg-[#FE8C31] rounded-[12px] px-[24px] py-[16px]">
            <p className="font-bold text-white text-[36px] leading-none">$4.5M+</p>
            <p className="font-normal text-white text-[14px] mt-[4px]">Annual waste</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
