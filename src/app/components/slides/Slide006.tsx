export default function Slide006() {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden">
      <div className="px-[110px] py-[100px]">
        <div className="text-[20px] font-bold tracking-[0.2em] text-[#FE8C31] mb-[24px]" style={{ fontFamily: 'Inter, sans-serif' }}>METRICS</div>
        <h1 className="text-[96px] font-bold leading-[104px] text-black mb-[80px]" style={{ fontFamily: 'Inter, sans-serif' }}>By The Numbers</h1>
        <div className="grid grid-cols-3 gap-[60px]">
          {[
            { num: '87%', label: 'Growth Rate' },
            { num: '2.5M', label: 'Total Users' },
            { num: '145', label: 'Active Projects' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-[96px] font-bold text-[#1BA5DE] mb-[16px]" style={{ fontFamily: 'Inter, sans-serif' }}>{stat.num}</div>
              <div className="text-[28px] text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>{stat.label}</div>
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
