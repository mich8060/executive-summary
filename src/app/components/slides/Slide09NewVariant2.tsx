import { motion } from 'motion/react';
import svgPaths from '@/imports/svg-plyxcvef2q';
import svgPathsNew from '@/imports/svg-vdduqdlesa';

function RocketIcon() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g>
          <path d={svgPaths.p12d15d00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p282ede00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p10c44480} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p25f11f80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function TargetIcon() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g>
          <path d={svgPaths.p1b3c0f00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p15663e00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p2b87e900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function TrendingIcon() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g>
          <path d={svgPaths.p1e3ad180} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p3b4c3700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

// Summary bar icons - using new SVG paths
function DollarIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d="M12 2V22" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPathsNew.p2ba0dca0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ZapIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPathsNew.p1b8b3180} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function UsersIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPathsNew.p1d820380} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPathsNew.p161d4800} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPathsNew.p2981fe00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPathsNew.p13e20900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LayersIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPathsNew.pdb17300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPathsNew.p2f6e8c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPathsNew.p32c0b4c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export function Slide09NewVariant2() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      {/* Content Container */}
      <div className="h-full flex items-center justify-center px-16 py-8">
        <div className="w-full max-w-[1152px] flex flex-col gap-[23px]">
          {/* Header Section */}
          <div className="flex flex-col items-center w-full gap-[15px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center font-black w-full"
            >
              <p className="leading-[60px] text-[48px] text-[#101828]">Your Path to</p>
              <p className="leading-[96px] text-[96px] text-[#1ba5de]">$5M+ Annual Value</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="font-normal leading-[36px] text-[30px] text-[#4a5565] text-center">
                Three phases. Nine months. Massive ROI.
              </p>
            </motion.div>
          </div>

          {/* Cards Section */}
          <div className="relative w-full flex justify-between gap-[32px]">
            {/* Phase 1 - Blue */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1 relative pt-[50px]"
            >
              {/* Icon */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 size-[80px] bg-[#1ba5de] rounded-full flex items-center justify-center p-[4px] border-4 border-white shadow-2xl z-10">
                <RocketIcon />
              </div>
              
              {/* Card */}
              <div className="bg-white border-2 border-[#1ba5de] rounded-[24px] p-[32px] shadow-lg flex flex-col gap-[20px]">
                {/* Month Label */}
                <p className="font-black leading-[20px] text-[14px] text-[#1ba5de] tracking-[0.7px] uppercase">
                  Months 1-3
                </p>
                
                {/* Title */}
                <p className="font-black leading-[40px] text-[36px] text-[#101828]">
                  Establish the Foundation
                </p>
                
                {/* Bullets */}
                <div className="flex flex-col gap-[4px]">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center justify-center size-[30px] shrink-0">
                      <div className="bg-[#1ba5de] rounded-full size-[8px]" />
                    </div>
                    <p className="flex-1 font-normal leading-[28px] text-[16px] text-[#4a5565]">
                      Secure dedicated engineering capacity
                    </p>
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center justify-center size-[30px] shrink-0">
                      <div className="bg-[#1ba5de] rounded-full size-[8px]" />
                    </div>
                    <p className="flex-1 font-normal leading-[28px] text-[16px] text-[#4a5565]">
                      Establish clear design system governance and ownership
                    </p>
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center justify-center size-[30px] shrink-0">
                      <div className="bg-[#1ba5de] rounded-full size-[8px]" />
                    </div>
                    <p className="flex-1 font-normal leading-[28px] text-[16px] text-[#4a5565]">
                      Define success metrics and reporting cadence
                    </p>
                  </div>
                </div>
                
                {/* Value Unlock */}
                <div className="pt-[25px] border-t border-[#1ba5de] flex flex-col gap-[4px]">
                  <p className="font-bold leading-[20px] text-[14px] text-black">Value Unlock</p>
                  <p className="font-black leading-[36px] text-[24px] text-[#1ba5de] tracking-[-0.5px]">
                    Scalable Foundation
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Phase 2 - Green */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex-1 relative pt-[50px]"
            >
              {/* Icon */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 size-[80px] bg-[#7fbd4d] rounded-full flex items-center justify-center p-[4px] border-4 border-white shadow-2xl z-10">
                <TargetIcon />
              </div>
              
              {/* Card */}
              <div className="bg-white border-2 border-[#7fbd4d] rounded-[24px] p-[32px] shadow-lg flex flex-col gap-[20px]">
                {/* Month Label */}
                <p className="font-black leading-[20px] text-[14px] text-[#7fbd4d] tracking-[0.7px] uppercase">
                  Months 4-6
                </p>
                
                {/* Title */}
                <p className="font-black leading-[40px] text-[36px] text-[#101828]">
                  Build, Deploy & Activate
                </p>
                
                {/* Bullets */}
                <div className="flex flex-col h-[150px]">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center justify-center size-[30px] shrink-0">
                      <div className="bg-[#7fbd4d] rounded-full size-[8px]" />
                    </div>
                    <p className="flex-1 font-normal leading-[28px] text-[16px] text-[#4a5565]">
                      Onboard initial product teams
                    </p>
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center justify-center size-[30px] shrink-0">
                      <div className="bg-[#7fbd4d] rounded-full size-[8px]" />
                    </div>
                    <p className="flex-1 font-normal leading-[28px] text-[16px] text-[#4a5565]">
                      Launch production-ready component library
                    </p>
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center justify-center size-[30px] shrink-0">
                      <div className="bg-[#7fbd4d] rounded-full size-[8px]" />
                    </div>
                    <p className="flex-1 font-normal leading-[28px] text-[16px] text-[#4a5565]">
                      Measure early adoption and delivery gains
                    </p>
                  </div>
                </div>
                
                {/* Value Unlock */}
                <div className="pt-[25px] border-t border-[#7fbd4d] flex flex-col gap-[4px]">
                  <p className="font-bold leading-[20px] text-[14px] text-black">Value Unlock</p>
                  <p className="font-black leading-[36px] text-[24px] text-[#7fbd4d] tracking-[-0.5px] whitespace-nowrap">
                    $1M+ annualized run-rate
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Phase 3 - Orange */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex-1 relative pt-[50px]"
            >
              {/* Icon */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 size-[80px] bg-[#fe8c31] rounded-full flex items-center justify-center p-[4px] border-4 border-white shadow-2xl z-10">
                <TrendingIcon />
              </div>
              
              {/* Card */}
              <div className="bg-white border-2 border-[#fe8c31] rounded-[24px] p-[32px] shadow-lg flex flex-col gap-[20px]">
                {/* Month Label */}
                <p className="font-black leading-[20px] text-[14px] text-[#fe8c31] tracking-[0.7px] uppercase">
                  Months 7-9
                </p>
                
                {/* Title */}
                <p className="font-black leading-[40px] text-[36px] text-[#101828]">
                  Scale & Optimize
                </p>
                
                {/* Bullets */}
                <div className="flex flex-col gap-[4px]">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center justify-center size-[30px] shrink-0">
                      <div className="bg-[#fe8c31] rounded-full size-[8px]" />
                    </div>
                    <p className="flex-1 font-normal leading-[28px] text-[16px] text-[#4a5565]">
                      Expand adoption across all priority product teams
                    </p>
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center justify-center size-[30px] shrink-0">
                      <div className="bg-[#fe8c31] rounded-full size-[8px]" />
                    </div>
                    <p className="flex-1 font-normal leading-[28px] text-[16px] text-[#4a5565]">
                      Automate workflows and handoffs
                    </p>
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center justify-center size-[30px] shrink-0">
                      <div className="bg-[#fe8c31] rounded-full size-[8px]" />
                    </div>
                    <p className="flex-1 font-normal leading-[28px] text-[16px] text-[#4a5565]">
                      Transition to a self-sustaining system
                    </p>
                  </div>
                </div>
                
                {/* Value Unlock */}
                <div className="pt-[25px] border-t border-[#fe8c31] flex flex-col gap-[4px]">
                  <p className="font-bold leading-[20px] text-[14px] text-black">Value Unlock</p>
                  <p className="font-black leading-[36px] text-[24px] text-[#fe8c31] tracking-[-0.5px]">
                    $5M+ Annual
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Holistic Benefits Summary Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="w-full"
          >
            <div className="bg-gradient-to-r from-[rgba(27,165,222,0.05)] via-[rgba(127,189,77,0.05)] to-[rgba(254,140,49,0.05)] border-2 border-[#e5e7eb] rounded-[24px] p-[24px]">
              <p className="text-center font-black leading-[27px] text-[18px] text-[#101828] mb-[24px]">
                Total Enterprise Value
              </p>
              <div className="grid grid-cols-4 gap-[24px]">
                {/* Financial Value */}
                <div className="flex flex-col items-center gap-[8px]">
                  <div className="w-[48px] h-[48px] bg-[#1ba5de] rounded-full flex items-center justify-center">
                    <DollarIcon />
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-black leading-[30px] text-[20px] text-[#1ba5de]">$5M+ Annual</p>
                    <p className="font-normal leading-[21px] text-[14px] text-[#4a5565] text-center">Financial Value</p>
                  </div>
                </div>

                {/* Engineering Agility */}
                <div className="flex flex-col items-center gap-[8px]">
                  <div className="w-[48px] h-[48px] bg-[#7fbd4d] rounded-full flex items-center justify-center">
                    <ZapIcon />
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-black leading-[30px] text-[20px] text-[#7fbd4d]">10x Faster</p>
                    <p className="font-normal leading-[21px] text-[14px] text-[#4a5565] text-center">Engineering Agility</p>
                  </div>
                </div>

                {/* Product Velocity */}
                <div className="flex flex-col items-center gap-[8px]">
                  <div className="w-[48px] h-[48px] bg-[#fe8c31] rounded-full flex items-center justify-center">
                    <UsersIcon />
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-black leading-[30px] text-[20px] text-[#fe8c31]">Unified UX</p>
                    <p className="font-normal leading-[21px] text-[14px] text-[#4a5565] text-center">Product Velocity</p>
                  </div>
                </div>

                {/* Enterprise Scale */}
                <div className="flex flex-col items-center gap-[8px]">
                  <div className="w-[48px] h-[48px] bg-[#101828] rounded-full flex items-center justify-center">
                    <LayersIcon />
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-black leading-[30px] text-[20px] text-[#101828]">Instant Updates</p>
                    <p className="font-normal leading-[21px] text-[14px] text-[#4a5565] text-center">Enterprise Scale</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}