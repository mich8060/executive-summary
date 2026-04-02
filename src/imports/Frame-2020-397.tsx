import svgPaths from "./svg-tpd55z1uk0";

function ChgLogoHK() {
  return (
    <div className="absolute h-[35px] left-[1648px] top-[calc(100%-75px)] w-[222px]" data-name="CHG_Logo_H_k 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 222 35">
        <g clipPath="url(#clip0_2020_401)" id="CHG_Logo_H_k 1">
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
          <clipPath id="clip0_2020_401">
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
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[144px] left-[959.5px] not-italic text-[80px] text-black text-center top-[128px] tracking-[-2px] w-[1611px]" style={{ fontFeatureSettings: "'salt', 'ss03', 'ss04', 'cv01', 'cv02', 'lnum', 'pnum'" }}>
        Building Faster vs. Building the Right Thing
      </p>
      <ul className="absolute block font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[135px] list-disc not-italic text-[26px] text-black top-[797px] w-[685px]">
        <li className="mb-0 ms-[39px]">
          <span className="leading-[42px]">Validate direction before resource commitment</span>
        </li>
        <li className="mb-0 ms-[39px]">
          <span className="leading-[42px]">User needs, jobs-to-be-done, workflow validation</span>
        </li>
        <li className="ms-[39px]">
          <span className="leading-[42px]">Learn early, prevent expensive pivots</span>
        </li>
      </ul>
      <ul className="absolute block font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[1100px] list-disc not-italic text-[0px] text-black top-[797px] w-[685px]">
        <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
          <span className="leading-[42px] text-[26px]">Optimize execution after direction is set</span>
        </li>
        <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
          <span className="leading-[42px] text-[26px]">AI-assisted dev, pipelines, architecture quality</span>
        </li>
        <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)] whitespace-pre-wrap">
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[42px] not-italic text-[26px]">
            {`← Where 95% of AI investment lives today, `}
            <br aria-hidden="true" />
            including at CHG
          </span>
        </li>
      </ul>
      <ChgLogoHK />
      <ThemeBar />
    </div>
  );
}