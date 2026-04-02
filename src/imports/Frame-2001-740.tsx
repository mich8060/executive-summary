import svgPaths from "./svg-7sn0r6or2r";

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

function PipelineStep({ number, title, description, color }: { number: number; title: string; description: string; color: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="bg-white border-4 rounded-2xl shadow-lg w-[240px] h-[200px] flex flex-col items-center justify-center p-6 relative" style={{ borderColor: color }}>
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: color }}>
          {number}
        </div>
        <div className="text-2xl font-bold text-center mb-3 mt-4" style={{ color }}>{title}</div>
        <div className="text-sm text-center text-gray-700 leading-relaxed">{description}</div>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center w-[60px]">
      <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
        <path d="M2 12H58M58 12L48 2M58 12L48 22" stroke="#666" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export default function Frame() {
  const steps = [
    {
      number: 1,
      title: "UX Composes the Experience",
      description: "Designers assemble screens using system components.",
      color: "#F5821F"
    },
    {
      number: 2,
      title: "User Validation",
      description: "Experiences are tested and refined with users.",
      color: "#F5821F"
    },
    {
      number: 3,
      title: "React-Ready UI",
      description: "The interface is produced as reusable React components.",
      color: "#81BE41"
    },
    {
      number: 4,
      title: "Engineering Integration",
      description: "Developers connect the interface to APIs and business logic.",
      color: "#81BE41"
    },
    {
      number: 5,
      title: "Product Delivered Faster",
      description: "Consistent UI with dramatically increased development velocity.",
      color: "#00A7E1"
    },
    {
      number: 6,
      title: "Deploy",
      description: "Ship to production with confidence.",
      color: "#00A7E1"
    }
  ];

  return (
    <div className="bg-white relative size-full" data-name="Frame">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[72px] left-[252px] not-italic text-[56px] text-black top-[120px] tracking-[-1.2px]">
        Design System to React Pipeline
      </p>
      
      <div className="absolute left-1/2 top-[320px] -translate-x-1/2 flex items-center gap-0">
        <PipelineStep {...steps[0]} />
        <Arrow />
        <PipelineStep {...steps[1]} />
        <Arrow />
        <PipelineStep {...steps[2]} />
      </div>

      <div className="absolute left-1/2 top-[580px] -translate-x-1/2 flex items-center gap-0">
        <PipelineStep {...steps[3]} />
        <Arrow />
        <PipelineStep {...steps[4]} />
        <Arrow />
        <PipelineStep {...steps[5]} />
      </div>

      <ChgLogoHK />
      <ThemeBar />
    </div>
  );
}
