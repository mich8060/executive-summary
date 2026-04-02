function Arrow({ direction = 'down' }: { direction?: 'down' | 'right' | 'left' }) {
  const rotations = {
    down: 'rotate-90',
    right: 'rotate-0',
    left: 'rotate-180'
  };

  return (
    <div className={rotations[direction]}>
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M40 10 L40 60 M40 60 L25 45 M40 60 L55 45" 
          stroke="#666" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full" data-name="Frame">
      {/* Title */}
      <h1 className="absolute left-[104px] top-[96px] font-['Inter:Bold',sans-serif] font-bold text-[100px] leading-[100px] tracking-[-2px] text-black">
        Acceleration Model
      </h1>

      {/* Subtitle */}
      <p className="absolute left-[104px] top-[310px] font-['Inter',sans-serif] text-[24px] text-gray-600 italic">
        An iterative lifecycle where each element powers the others
      </p>

      {/* Center Circle - Design System */}
      <div className="absolute left-1/2 top-[380px] -translate-x-1/2">
        <div className="relative flex items-center justify-center">
          <div className="w-[320px] h-[320px] rounded-full bg-gradient-to-br from-[#1BA5DE] to-[#0081B8] shadow-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-white font-['Inter:Bold',sans-serif] font-bold text-[32px] mb-3">Design System</div>
              <div className="text-white/90 font-['Inter',sans-serif] text-[18px] leading-[26px] px-8">
                UI patterns, tokens,<br/>and components
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left Box - AI Tools */}
      <div className="absolute left-[180px] top-[450px]">
        <div className="w-[280px] h-[180px] rounded-2xl bg-white border-4 border-[#7FBD4D] shadow-lg flex items-center justify-center">
          <div className="text-center px-6">
            <div className="text-[#7FBD4D] font-['Inter:Bold',sans-serif] font-bold text-[28px] mb-2">AI Tools</div>
            <div className="text-gray-700 font-['Inter',sans-serif] text-[18px]">Generate UI</div>
          </div>
        </div>
      </div>

      {/* Right Box - Engineering */}
      <div className="absolute right-[180px] top-[450px]">
        <div className="w-[280px] h-[180px] rounded-2xl bg-white border-4 border-[#FE8C31] shadow-lg flex items-center justify-center">
          <div className="text-center px-6">
            <div className="text-[#FE8C31] font-['Inter:Bold',sans-serif] font-bold text-[28px] mb-2">Engineering</div>
            <div className="text-gray-700 font-['Inter',sans-serif] text-[18px]">Connect Logic</div>
          </div>
        </div>
      </div>

      {/* Bottom Box - Production Software */}
      <div className="absolute left-1/2 top-[820px] -translate-x-1/2">
        <div className="w-[400px] h-[140px] rounded-2xl bg-gradient-to-r from-[#7FBD4D] via-[#1BA5DE] to-[#FE8C31] shadow-xl flex items-center justify-center">
          <div className="text-center">
            <div className="text-white font-['Inter:Bold',sans-serif] font-bold text-[32px]">Production Software</div>
          </div>
        </div>
      </div>

      {/* Arrow from Design System to AI Tools */}
      <div className="absolute left-[530px] top-[500px]">
        <Arrow direction="left" />
      </div>

      {/* Arrow from Design System to Engineering */}
      <div className="absolute right-[530px] top-[500px]">
        <Arrow direction="right" />
      </div>

      {/* Arrow from AI Tools to Production */}
      <div className="absolute left-[300px] top-[650px]">
        <Arrow direction="down" />
      </div>

      {/* Arrow from Engineering to Production */}
      <div className="absolute right-[300px] top-[650px]">
        <Arrow direction="down" />
      </div>

      {/* CHG Logo and Theme Bar from original */}
      <div className="absolute h-[35px] left-[1648px] top-[1005px] w-[222px]">
        <svg className="absolute block size-full opacity-30" fill="none" preserveAspectRatio="none" viewBox="0 0 222 35">
          <text x="0" y="25" fill="#231F20" fontFamily="Inter" fontSize="24" fontWeight="600">CHG Healthcare</text>
        </svg>
      </div>
      
      <div className="-translate-x-1/2 absolute content-stretch flex items-center left-1/2 top-[1040px]">
        <div className="bg-[#f5821f] h-[40px] rounded-tl-[12px] shrink-0 w-[288px]" />
        <div className="bg-[#81be41] h-[40px] shrink-0 w-[288px]" />
        <div className="bg-[#00a7e1] h-[40px] rounded-tr-[12px] shrink-0 w-[288px]" />
      </div>
    </div>
  );
}
