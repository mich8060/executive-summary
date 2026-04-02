import svgPaths from "./svg-wnuoapzc02";

function ChgLogoHK() {
  return (
    <div className="absolute h-[35px] left-[1648px] top-[calc(100%-75px)] w-[222px]" data-name="CHG_Logo_H_k 1">
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
    <div className="-translate-x-1/2 absolute content-stretch flex items-center left-1/2 top-[calc(100%-40px)]" data-name="Theme bar">
      <div className="bg-[#f5821f] h-[40px] rounded-tl-[12px] shrink-0 w-[288px]" data-name="Theme rectangle" />
      <div className="bg-[#81be41] h-[40px] shrink-0 w-[288px]" data-name="Theme rectangle" />
      <div className="bg-[#00a7e1] h-[40px] rounded-tr-[12px] shrink-0 w-[288px]" data-name="Theme rectangle" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full" data-name="Frame">
      <ul className="absolute block font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[107px] list-disc not-italic text-[40px] text-black top-[359px] tracking-[-0.6px] w-[1541px] whitespace-pre-wrap">
        <li className="mb-0 ms-[60px]">
          <span className="leading-[64px]">{`Design System: `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[64px] not-italic">$5M/year (validated)</span>
        </li>
        <li className="mb-0 ms-[60px]">
          <span className="leading-[64px]">{`FSP Acceleration and Failure Prevention: `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[64px] not-italic">TBD (velocity gains)</span>
        </li>
        <li className="mb-0 ms-[60px]">
          <span className="leading-[64px]">{`Process Efficiency: `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[64px] not-italic">Est. $1-2M/year (reduced rework)</span>
        </li>
        <li className="ms-[60px]">
          <span className="leading-[64px]">{`Strategic Influence: `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[64px] not-italic">Unquantified</span>
          <span className="leading-[64px]">{` (competitive positioning, ability to facilitate effective strategic discussions and conversations)`}</span>
        </li>
      </ul>
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[107px] not-italic text-[0px] text-black top-[754px] tracking-[-0.6px] w-[1476px] whitespace-pre-wrap">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[48px] mb-0 text-[40px]">{`Combined opportunity: `}</p>
        <p>
          <span className="leading-[48px] text-[40px]">
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[72px] not-italic text-[64px] tracking-[-1.2px]">$6-7M+ annually from maximizing UX impact</span>
        </p>
      </div>
      <ChgLogoHK />
      <ThemeBar />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[72px] left-[107px] not-italic text-[64px] text-black top-[157px] tracking-[-1.2px] w-[1449px]">Total Addressable Value</p>
    </div>
  );
}