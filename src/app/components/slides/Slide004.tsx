export default function Slide004() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-white to-gray-100 overflow-hidden">
      <div className="px-[110px] py-[100px]">
        <div className="text-[20px] font-bold tracking-[0.2em] text-[#1BA5DE] mb-[24px]" style={{ fontFamily: 'Inter, sans-serif' }}>BULLET LIST</div>
        <h1 className="text-[96px] font-bold leading-[104px] text-black mb-[64px]" style={{ fontFamily: 'Inter, sans-serif' }}>Key Points</h1>
        <div className="space-y-[24px]">
          {['First key point', 'Second important item', 'Third critical detail', 'Fourth essential element'].map((item, i) => (
            <div key={i} className="flex items-start gap-[24px]">
              <div className="w-[12px] h-[12px] rounded-full bg-[#1BA5DE] mt-[20px] shrink-0" />
              <p className="text-[36px] leading-[52px] text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="font-bold text-black">{item.split(' ')[0]} {item.split(' ')[1]}</span> {item.split(' ').slice(2).join(' ')}
              </p>
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
