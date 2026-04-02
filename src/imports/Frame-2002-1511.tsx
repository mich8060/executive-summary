import imgImage15 from "figma:asset/1e93c51f2cda6c5a61a630534d2a2bf004429c00.png";
import imgTempImage5OudOx1 from "figma:asset/673fa66d66cce4d41c054c209e17b722e9169eeb.png";

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
      <div className="-translate-x-1/2 absolute h-[1081.313px] left-[calc(50%+0.17px)] top-[-96px] w-[1922.333px]" data-name="image 15">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage15} />
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[144px] left-[252px] not-italic text-[100px] text-black top-[569px] tracking-[-2px] w-[832px]" style={{ fontFeatureSettings: "'salt', 'ss03', 'ss04', 'cv01', 'cv02', 'lnum', 'pnum'" }}>
        Questions?
      </p>
      <div className="absolute h-[66px] left-[264px] top-[894px] w-[420px]" data-name="tempImage5OUDOx 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTempImage5OudOx1} />
      </div>
      <ThemeBar />
    </div>
  );
}