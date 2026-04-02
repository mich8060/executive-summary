import imgTempImage5OudOx1 from "figma:asset/673fa66d66cce4d41c054c209e17b722e9169eeb.png";

function TitleArea() {
  return (
    <div className="absolute bottom-[408px] content-stretch flex flex-col gap-[46px] items-start justify-end left-[252px] not-italic text-black w-[1416px]" data-name="Title area">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[36px] relative shrink-0 text-[26px] tracking-[1px] uppercase w-[728px]">Mar 6, 2026</p>
      <div className="font-['Inter:Bold',sans-serif] font-bold leading-[144px] min-w-full relative shrink-0 text-[140px] tracking-[-2px] w-[min-content]" style={{ fontFeatureSettings: "'salt', 'ss03', 'ss04', 'cv01', 'cv02', 'lnum', 'pnum'" }}>
        <p className="mb-0">Design System</p>
        <p>to React</p>
      </div>
    </div>
  );
}

function ThemeBar() {
  return (
    <div className="absolute content-stretch flex items-center left-[240px] top-[1040px]" data-name="Theme bar">
      <div className="bg-[#f5821f] h-[40px] rounded-tl-[12px] shrink-0 w-[288px]" data-name="Theme rectangle" />
      <div className="bg-[#81be41] h-[40px] shrink-0 w-[288px]" data-name="Theme rectangle" />
      <div className="bg-[#00a7e1] h-[40px] rounded-tr-[12px] shrink-0 w-[288px]" data-name="Theme rectangle" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full" data-name="Frame">
      <TitleArea />
      <div className="absolute bottom-[264px] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-end leading-[0] left-[252px] not-italic text-[40px] text-black tracking-[-0.6px] w-[976px]">
        <p className="leading-[48px]">Aaron Tate + Michael Stevens</p>
      </div>
      <div className="absolute h-[66px] left-[240px] top-[198px] w-[420px]" data-name="tempImage5OUDOx 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTempImage5OudOx1} />
      </div>
      <ThemeBar />
    </div>
  );
}
