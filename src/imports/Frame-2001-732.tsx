import svgPaths from "./svg-ncb9g8c8pk";

function ChgLogoHK() {
  return (
    <div className="absolute h-[35px] left-[1648px] top-[1005px] w-[222px]" data-name="CHG_Logo_H_k 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 222 35">
        <g clipPath="url(#clip0_2001_443)" id="CHG_Logo_H_k 1">
          <path d={svgPaths.p3c0de280} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector" />
          <path d={svgPaths.p19aa8a80} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_2" />
          <path d={svgPaths.p214d0370} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_3" />
          <path d={svgPaths.p20ed8e00} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_4" />
          <path d={svgPaths.p359f6db0} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_5" />
          <path d={svgPaths.p36da04e0} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_6" />
          <path d={svgPaths.pd9f7d00} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_7" />
          <path d={svgPaths.p2867b600} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_8" />
          <path d={svgPaths.p15e77400} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_9" />
          <path d={svgPaths.p8e2d580} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_10" />
          <path d={svgPaths.p3ec89680} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_11" />
          <path d={svgPaths.pdf70780} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_12" />
          <path d={svgPaths.p168f8500} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_13" />
          <path d={svgPaths.pa3cb100} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_14" />
        </g>
        <defs>
          <clipPath id="clip0_2001_443">
            <rect fill="white" height="35" width="222" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ThemeBar() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center left-1/2 top-[1040px]" data-name="Theme bar">
      <div className="bg-[#f5821f] h-[40px] rounded-tl-[12px] shrink-0 w-[288px]" data-name="Theme rectangle" />
      <div className="bg-[#81be41] h-[40px] shrink-0 w-[288px]" data-name="Theme rectangle" />
      <div className="bg-[#00a7e1] h-[40px] rounded-tr-[12px] shrink-0 w-[288px]" data-name="Theme rectangle" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full" data-name="Frame">
      {/* Title */}
      <h1 className="absolute left-[104px] top-[96px] font-['Inter:Bold',sans-serif] font-bold text-[100px] leading-[100px] tracking-[-2px] text-black">
        The Lines Are Blurring
      </h1>

      {/* Subtitle */}
      <p className="absolute left-[104px] top-[310px] font-['Inter',sans-serif] text-[24px] text-gray-600 italic">
        Design and Frontend Engineering converge into a unified workflow
      </p>

      {/* Venn Diagram Container */}
      <div className="absolute left-1/2 top-[500px] -translate-x-1/2 -translate-y-1/2">
        {/* Overlapping Squares */}
        <svg width="900" height="500" viewBox="0 0 900 500" className="absolute left-1/2 -translate-x-1/2">
          {/* Left square (Design) */}
          <rect 
            x="80" 
            y="50" 
            width="400" 
            height="400" 
            fill="#1BA5DE" 
            fillOpacity="0.5"
            stroke="#1BA5DE"
            strokeWidth="3"
            rx="20"
          />
          
          {/* Right square (Engineering) */}
          <rect 
            x="420" 
            y="50" 
            width="400" 
            height="400" 
            fill="#FE8C31" 
            fillOpacity="0.5"
            stroke="#FE8C31"
            strokeWidth="3"
            rx="20"
          />
          
          {/* Overlap area */}
          <rect 
            x="420" 
            y="50" 
            width="60" 
            height="400" 
            fill="#B8DB93" 
            fillOpacity="0.8"
            rx="0"
          />
        </svg>

        {/* Left Circle Label */}
        <div className="absolute" style={{ left: '-220px', top: '-80px', width: '200px' }}>
          <div className="text-center">
            <div className="text-[#1BA5DE] font-['Inter:Bold',sans-serif] font-bold text-[32px] mb-4">UX Design</div>
            <div className="text-gray-700 font-['Inter',sans-serif] text-[18px] leading-[28px] space-y-2">
              <div>• User Research</div>
              <div>• Wireframes</div>
              <div>• Visual Design</div>
              <div>• Prototypes</div>
              <div>• Design Systems</div>
            </div>
          </div>
        </div>

        {/* Right Circle Label */}
        <div className="absolute" style={{ left: '420px', top: '-80px', width: '200px' }}>
          <div className="text-center">
            <div className="text-[#FE8C31] font-['Inter:Bold',sans-serif] font-bold text-[32px] mb-4">Frontend Eng</div>
            <div className="text-gray-700 font-['Inter',sans-serif] text-[18px] leading-[28px] space-y-2">
              <div>• React Components</div>
              <div>• State Management</div>
              <div>• API Integration</div>
              <div>• Performance</div>
              <div>• Testing</div>
            </div>
          </div>
        </div>

        {/* Intersection Label */}
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '-20px', width: '240px' }}>
          <div className="text-center bg-white/90 rounded-2xl p-6 shadow-lg border-2 border-[#7FBD4D]">
            <div className="text-[#7FBD4D] font-['Inter:Bold',sans-serif] font-bold text-[28px] mb-3">Convergence</div>
            <div className="text-gray-800 font-['Inter',sans-serif] text-[17px] leading-[26px] space-y-1">
              <div>• Design Tokens</div>
              <div>• Component Libraries</div>
              <div>• AI-Generated UI</div>
              <div>• Design-to-Code</div>
              <div>• Shared Language</div>
            </div>
          </div>
        </div>
      </div>

      <ChgLogoHK />
      <ThemeBar />
    </div>
  );
}
