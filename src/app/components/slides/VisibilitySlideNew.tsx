import { motion } from 'motion/react';
import svgPaths from '@/imports/svg-pd46i6l7yy';

function EyeIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p3c563480} stroke="#FE8C31" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3cccb600} stroke="#FE8C31" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BarChartIcon() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g>
          <path d={svgPaths.pdd16700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M30 28.3333V15" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M21.6667 28.3333V8.33333" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M13.3333 28.3333V23.3333" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function ActivityIcon() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g>
          <path d={svgPaths.pe853b80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function EyeIconLarge() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g>
          <path d={svgPaths.p29d74c40} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p3573b4c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

export function VisibilitySlideNew() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      {/* Content */}
      <div className="flex h-full items-center justify-center px-16 py-12">
        <div className="w-full max-w-[1011.742px]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-[rgba(254,140,49,0.1)] border border-[#fe8c31] px-6 py-[14px] rounded-full mb-[20px]"
          >
            <EyeIcon />
            <span className="font-semibold leading-[28px] text-[#fe8c31] text-[18px]">Complete Transparency</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-[32px]"
          >
            <h2 className="font-black leading-[90px] text-[#101828] text-[72px]">
              See Your ROI
            </h2>
            <h2 className="font-black leading-[90px] text-[#fe8c31] text-[72px]">
              In Real-Time
            </h2>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-normal leading-[48.75px] text-[#4a5565] text-[30px] mb-[48px]"
          >
            Live dashboards. Monthly executive readouts. Zero surprises.
          </motion.p>

          {/* Features List */}
          <div className="flex flex-col gap-[32px] mb-[52px]">
            {/* Adoption Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-start gap-[24px]"
            >
              <div className="bg-[#1ba5de] rounded-[16px] shrink-0 size-[80px] flex items-center justify-center">
                <BarChartIcon />
              </div>
              <div className="flex flex-col gap-[12px]">
                <h3 className="font-bold leading-[36px] text-[#101828] text-[30px]">Adoption Dashboard</h3>
                <p className="font-normal leading-[32.5px] text-[#4a5565] text-[20px]">
                  Track component usage, team velocity, and value delivered—updated every sprint
                </p>
              </div>
            </motion.div>

            {/* Progress Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-start gap-[24px]"
            >
              <div className="bg-[#7fbd4d] rounded-[16px] shrink-0 size-[80px] flex items-center justify-center">
                <ActivityIcon />
              </div>
              <div className="flex flex-col gap-[12px]">
                <h3 className="font-bold leading-[36px] text-[#101828] text-[30px]">Progress Metrics</h3>
                <p className="font-normal leading-[32.5px] text-[#4a5565] text-[20px]">
                  System maturity, roadmap progress, and ROI trajectory — centralized in one view
                </p>
              </div>
            </motion.div>

            {/* Monthly Readouts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-start gap-[24px]"
            >
              <div className="bg-[#fe8c31] rounded-[16px] shrink-0 size-[80px] flex items-center justify-center">
                <EyeIconLarge />
              </div>
              <div className="flex flex-col gap-[12px]">
                <h3 className="font-bold leading-[36px] text-[#101828] text-[30px]">MPR & Executive Readouts</h3>
                <p className="font-normal leading-[32.5px] text-[#4a5565] text-[20px]">
                  Regular inclusion in MPR and leadership forums, highlighting wins, dependencies, and blockers
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-gradient-to-r from-[rgba(27,165,222,0.1)] to-[rgba(127,189,77,0.1)] border-2 border-[#1ba5de] rounded-[24px] px-[34px] pt-[34px] pb-[36px]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[48px]">
                {/* 100% Transparency */}
                <div>
                  <div className="font-black leading-[40px] text-[#1ba5de] text-[36px]">100%</div>
                  <div className="font-normal leading-[20px] text-[#4a5565] text-[14px]">Transparency</div>
                </div>
                
                {/* Divider */}
                <div className="bg-[#1ba5de] h-[48px] w-px"></div>
                
                {/* Monthly Updates */}
                <div>
                  <div className="font-black leading-[40px] text-[#7fbd4d] text-[36px]">Monthly</div>
                  <div className="font-normal leading-[20px] text-[#4a5565] text-[14px]">Updates</div>
                </div>
                
                {/* Divider */}
                <div className="bg-[#7fbd4d] h-[48px] w-[2px]"></div>
                
                {/* Live Metrics */}
                <div>
                  <div className="font-black leading-[40px] text-[#fe8c31] text-[36px]">Live</div>
                  <div className="font-normal leading-[20px] text-[#4a5565] text-[14px]">Metrics</div>
                </div>
                
                {/* Divider */}
                <div className="bg-[#7fbd4d] h-[48px] w-px"></div>
              </div>
              
              {/* Right text */}
              <p className="font-semibold italic leading-[28px] text-[#101828] text-[20px] text-center w-[291px]">
                You always know exactly where we stand
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}