export default function Slide007() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#1BA5DE]/10 via-white to-[#7FBD4D]/5 overflow-hidden">
      <div className="px-[110px] py-[80px] h-full flex flex-col justify-center">
        <div className="text-[18px] font-bold tracking-[0.25em] text-[#7FBD4D] mb-[20px]" style={{ fontFamily: 'Inter, sans-serif' }}>TIMELINE</div>
        <h1 className="text-[84px] font-bold text-black mb-[56px]" style={{ fontFamily: 'Inter, sans-serif' }}>Our Journey</h1>
        <div className="relative pl-[60px]">
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#1BA5DE] via-[#7FBD4D] to-[#FE8C31]" />
          {[
            { phase: 'Q1 2024', title: 'Foundation', desc: 'Initial groundwork and planning' },
            { phase: 'Q2 2024', title: 'Development', desc: 'Core building and iteration' },
            { phase: 'Q3 2024', title: 'Launch', desc: 'Public release and adoption' },
            { phase: 'Q4 2024', title: 'Scale', desc: 'Growth and optimization' }
          ].map((item, i) => (
            <div key={i} className="mb-[40px] relative">
              <div className="absolute left-[-68px] w-[16px] h-[16px] rounded-full bg-[#1BA5DE] border-4 border-white" />
              <div className="text-[16px] font-bold text-[#1BA5DE] mb-[8px]" style={{ fontFamily: 'Inter, sans-serif' }}>{item.phase}</div>
              <div className="text-[32px] font-bold text-black mb-[8px]" style={{ fontFamily: 'Inter, sans-serif' }}>{item.title}</div>
              <div className="text-[22px] text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-[40px] right-[110px] text-[14px] font-semibold text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>CHG Healthcare</div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex h-[40px] z-20">
        <div className="w-[288px] bg-[#FE8C31] rounded-tl-[12px]" />
        <div className="w-[288px] bg-[#7FBD4D]" />
        <div className="w-[288px] bg-[#1BA5DE] rounded-tr-[12px]" />
      </div>
    </div>
  );
}
