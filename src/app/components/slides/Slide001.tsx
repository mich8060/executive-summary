import { Presentation } from 'lucide-react';

export default function Slide001() {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden">
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-[110px]">
        <div className="flex items-center gap-[20px] mb-[48px]">
          <Presentation className="w-[48px] h-[48px] text-[#1BA5DE]" strokeWidth={2} />
          <div className="text-[24px] font-bold tracking-[0.2em] text-[#1BA5DE]" style={{ fontFamily: 'Inter, sans-serif' }}>
            SECTION ONE
          </div>
        </div>
        <h1 className="text-[120px] font-bold leading-[120px] tracking-tight text-black text-center mb-[40px]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Hero Centered Layout
        </h1>
        <p className="text-[32px] leading-[48px] text-gray-600 text-center max-w-[1200px]" style={{ fontFamily: 'Inter, sans-serif' }}>
          This is a centered hero slide with placeholder text for your presentation content.
        </p>
        <div className="absolute bottom-[40px] right-[110px] text-[14px] font-semibold text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>CHG Healthcare</div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex h-[40px] z-20">
        <div className="w-[288px] h-[40px] bg-[#FE8C31] rounded-tl-[12px]" />
        <div className="w-[288px] h-[40px] bg-[#7FBD4D]" />
        <div className="w-[288px] h-[40px] bg-[#1BA5DE] rounded-tr-[12px]" />
      </div>
    </div>
  );
}
