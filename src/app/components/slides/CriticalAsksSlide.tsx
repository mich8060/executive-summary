import { motion } from 'motion/react';
import { Users, Code, Target, Zap, CheckCircle2 } from 'lucide-react';

export function CriticalAsksSlide() {
  const asks = [
    {
      icon: Users,
      number: '1',
      title: 'Design System Engineering Capacity',
      description: '2-3 dedicated engineers to build and maintain the component library',
      impact: 'Unlocks ability to translate Figma designs into production-ready React components',
      color: '#1BA5DE',
      priority: 'CRITICAL'
    },
    {
      icon: Code,
      number: '2',
      title: 'Embed Designer in LocumSmart Team',
      description: 'Designer working directly with LM eng team to define and refine components',
      impact: 'Ensures design system components meet real product needs from day one',
      color: '#7FBD4D',
      priority: 'CRITICAL'
    },
    {
      icon: Target,
      number: '3',
      title: 'Dedicated Design System Team Ownership',
      description: 'Clear ownership, decision-making authority, and cross-product alignment',
      impact: 'Prevents design system work from being deprioritized for product features',
      color: '#FE8C31',
      priority: 'CRITICAL'
    },
    {
      icon: Zap,
      number: '4',
      title: 'Executive Sponsorship & Support',
      description: 'Visible leadership commitment and removal of organizational blockers',
      impact: 'Signals priority to all teams and accelerates adoption across products',
      color: '#6b7280',
      priority: 'ENABLER'
    }
  ];

  return (
    <div className="w-full h-full relative overflow-hidden bg-white px-[109px] py-[83px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-[48px] text-center"
      >
        <p className="font-medium italic leading-[48px] text-[#cfcfcf] text-[40px] tracking-[-0.6px] mb-[16px]">
          What We Need
        </p>
        <h2 className="font-bold leading-[72px] text-black text-[64px] tracking-[-1.2px]">
          Critical Asks to Unlock $5M+
        </h2>
        <p className="font-normal leading-[36px] text-[#4a5565] text-[24px] mt-[16px]">
          Four essential requirements to remove barriers and capture full value.
        </p>
      </motion.div>

      {/* Asks Grid */}
      <div className="grid grid-cols-2 gap-[28px] mb-[40px]">
        {asks.map((ask, index) => {
          const Icon = ask.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="relative bg-gradient-to-br from-white to-gray-50 border-2 rounded-[20px] p-[28px] shadow-lg hover:shadow-xl transition-all"
              style={{ borderColor: ask.color }}
            >
              {/* Number Badge */}
              <div 
                className="absolute top-[-20px] left-[28px] rounded-full size-[56px] flex items-center justify-center shadow-lg"
                style={{ backgroundColor: ask.color }}
              >
                <span className="font-extrabold text-white text-[32px]">{ask.number}</span>
              </div>

              {/* Priority Badge */}
              <div className="absolute top-[24px] right-[24px]">
                <div 
                  className="rounded-[8px] px-[12px] py-[6px]"
                  style={{ 
                    backgroundColor: ask.priority === 'CRITICAL' ? 'rgba(254, 140, 49, 0.15)' : 'rgba(107, 114, 128, 0.15)',
                    border: `2px solid ${ask.priority === 'CRITICAL' ? '#FE8C31' : '#6b7280'}`
                  }}
                >
                  <p 
                    className="font-bold leading-[16px] text-[12px]"
                    style={{ color: ask.priority === 'CRITICAL' ? '#FE8C31' : '#6b7280' }}
                  >
                    {ask.priority}
                  </p>
                </div>
              </div>

              {/* Icon */}
              <div 
                className="rounded-[12px] p-[12px] inline-flex mb-[16px] mt-[24px]"
                style={{ backgroundColor: ask.color }}
              >
                <Icon className="size-8 text-white" />
              </div>

              {/* Title */}
              <h3 
                className="font-bold leading-[32px] text-[24px] mb-[12px] pr-[80px]"
                style={{ color: ask.color }}
              >
                {ask.title}
              </h3>

              {/* Description */}
              <p className="font-normal leading-[24px] text-[#364153] text-[16px] mb-[16px]">
                {ask.description}
              </p>

              {/* Impact */}
              <div className="flex items-start gap-[12px] bg-gradient-to-r from-gray-50 to-white rounded-[12px] p-[16px] border border-gray-200">
                <CheckCircle2 className="size-5 text-[#7FBD4D] flex-shrink-0 mt-[2px]" />
                <div>
                  <p className="font-semibold leading-[20px] text-[#7FBD4D] text-[14px] mb-[4px]">
                    Impact
                  </p>
                  <p className="font-normal leading-[22px] text-[#4a5565] text-[15px]">
                    {ask.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gradient-to-r from-[rgba(27,165,222,0.15)] to-[rgba(254,140,49,0.15)] border-2 border-[#FE8C31] rounded-[20px] p-[32px] text-center"
      >
        <p className="font-bold leading-[36px] text-black text-[28px] mb-[12px]">
          Without These Resources, We Cannot Build the Design System
        </p>
        <p className="font-normal leading-[32px] text-[#4a5565] text-[22px]">
          We have React (Phase 1). We need <span className="font-bold text-[#1BA5DE]">Phase 2</span> to unlock <span className="font-bold text-[#FE8C31]">Phases 3 & 4</span> and capture <span className="font-bold text-[#7FBD4D]">$5M+ annual value</span>.
        </p>
      </motion.div>

      {/* Theme Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute left-1/2 bottom-[40px] translate-x-[-50%] flex"
      >
        <div className="bg-[#1BA5DE] h-[40px] rounded-l-[12px] w-[216px]" />
        <div className="bg-[#7FBD4D] h-[40px] w-[216px]" />
        <div className="bg-[#FE8C31] h-[40px] w-[216px]" />
        <div className="bg-[#6b7280] h-[40px] rounded-r-[12px] w-[216px]" />
      </motion.div>
    </div>
  );
}
