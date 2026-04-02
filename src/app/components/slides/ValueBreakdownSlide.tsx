import { motion } from 'motion/react';
import { DollarSign, Users, Zap, Target, TrendingUp } from 'lucide-react';

export function ValueBreakdownSlide() {
  const valueCategories = [
    {
      icon: Zap,
      category: 'Design Efficiency',
      value: '$150-200K',
      description: 'Faster design iteration, reusable components, reduced design time',
      percentage: '40-50%',
      color: '#1BA5DE'
    },
    {
      icon: Users,
      category: 'Engineering Velocity',
      value: '$80-120K',
      description: 'Pre-built components, reduced dev time, faster feature delivery',
      percentage: '25-30%',
      color: '#7FBD4D'
    },
    {
      icon: Target,
      category: 'Consistency & Quality',
      value: '$40-80K',
      description: 'Fewer bugs, reduced QA cycles, better UX consistency',
      percentage: '15-20%',
      color: '#FE8C31'
    },
    {
      icon: TrendingUp,
      category: 'Cross-Product Leverage',
      value: '$30-100K',
      description: 'Shared components across products, reduced duplication',
      percentage: '10-20%',
      color: '#6b7280'
    }
  ];

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
          Current State
        </p>
        <h2 className="font-bold leading-[72px] text-black text-[64px] tracking-[-1.2px]">
          Where the $300-500K Comes From
        </h2>
        <p className="font-normal leading-[36px] text-[#4a5565] text-[24px] mt-[16px]">
          Value delivered today with only a visual design system in Figma.
        </p>
      </motion.div>

      {/* Value Breakdown Cards */}
      <div className="grid grid-cols-2 gap-[24px] mb-[40px]">
        {valueCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-50 border-2 rounded-[20px] p-[28px] shadow-md hover:shadow-lg transition-shadow"
              style={{ borderColor: category.color }}
            >
              {/* Icon and Value */}
              <div className="flex items-start justify-between mb-[20px]">
                <div 
                  className="rounded-[12px] p-[12px] inline-flex"
                  style={{ backgroundColor: category.color }}
                >
                  <Icon className="size-8 text-white" />
                </div>
                <div className="text-right">
                  <div 
                    className="font-extrabold leading-[40px] text-[36px]"
                    style={{ color: category.color }}
                  >
                    {category.value}
                  </div>
                  <div className="font-semibold leading-[24px] text-[#6b7280] text-[16px]">
                    {category.percentage} of total
                  </div>
                </div>
              </div>

              {/* Category Name */}
              <h3 
                className="font-bold leading-[32px] text-[24px] mb-[12px]"
                style={{ color: category.color }}
              >
                {category.category}
              </h3>

              {/* Description */}
              <p className="font-normal leading-[24px] text-[#4a5565] text-[16px]">
                {category.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Total Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gradient-to-r from-[rgba(27,165,222,0.15)] to-[rgba(127,189,77,0.15)] border-2 border-[#1BA5DE] rounded-[20px] p-[32px] flex items-center justify-between"
      >
        <div className="flex items-center gap-[20px]">
          <div className="bg-[#1BA5DE] rounded-full size-[64px] flex items-center justify-center">
            <DollarSign className="size-10 text-white" strokeWidth={3} />
          </div>
          <div>
            <p className="font-semibold leading-[24px] text-[#4a5565] text-[18px] mb-[4px]">
              Total Annual Value (Current)
            </p>
            <p className="font-extrabold leading-[56px] text-[#1BA5DE] text-[48px]">
              $300-500K
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold leading-[32px] text-[#4a5565] text-[24px] mb-[8px]">
            From Visual Design System Only
          </p>
          <p className="font-normal leading-[28px] text-[#6b7280] text-[20px]">
            Imagine what we unlock with <span className="font-bold text-[#7FBD4D]">code-based components</span>
          </p>
        </div>
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
