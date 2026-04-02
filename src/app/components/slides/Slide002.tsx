export default function Slide002() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#1BA5DE]/10 to-white overflow-hidden">
      <div className="relative z-10 px-[110px] py-[100px]">
        <div className="text-[20px] font-bold tracking-[0.2em] text-[#7FBD4D] mb-[24px]" style={{ fontFamily: 'Inter, sans-serif' }}>TWO COLUMN</div>
        <h1 className="text-[96px] font-bold leading-[104px] text-black mb-[64px]" style={{ fontFamily: 'Inter, sans-serif' }}>Split Layout</h1>
        <div className="grid grid-cols-2 gap-[60px]">
          <div>
            <h2 className="text-[42px] font-bold text-black mb-[24px]" style={{ fontFamily: 'Inter, sans-serif' }}>Left Column</h2>
            <p className="text-[28px] leading-[42px] text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Placeholder content for the left side of your two-column layout. Add your key points here.
            </p>
          </div>
          <div>
            <h2 className="text-[42px] font-bold text-black mb-[24px]" style={{ fontFamily: 'Inter, sans-serif' }}>Right Column</h2>
            <p className="text-[28px] leading-[42px] text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              Placeholder content for the right side. Perfect for comparisons or complementary information.
            </p>
          </div>
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
