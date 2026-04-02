export default function Slide003() {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden">
      <div className="px-[110px] py-[100px]">
        <div className="text-[20px] font-bold tracking-[0.2em] text-[#FE8C31] mb-[24px]" style={{ fontFamily: 'Inter, sans-serif' }}>THREE COLUMN</div>
        <h1 className="text-[96px] font-bold leading-[104px] text-black mb-[64px]" style={{ fontFamily: 'Inter, sans-serif' }}>Triple Column</h1>
        <div className="grid grid-cols-3 gap-[40px]">
          <div className="bg-white rounded-[24px] p-[40px] border-2 border-[#1BA5DE]/20 shadow-lg">
            <div className="w-[48px] h-[48px] rounded-full bg-[#1BA5DE]/20 flex items-center justify-center mb-[24px]">
              <span className="text-[24px]">📊</span>
            </div>
            <h3 className="text-[32px] font-bold text-black mb-[16px]" style={{ fontFamily: 'Inter, sans-serif' }}>Column One</h3>
            <p className="text-[20px] leading-[32px] text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>Placeholder text for first column content.</p>
          </div>
          <div className="bg-white rounded-[24px] p-[40px] border-2 border-[#7FBD4D]/20 shadow-lg">
            <div className="w-[48px] h-[48px] rounded-full bg-[#7FBD4D]/20 flex items-center justify-center mb-[24px]">
              <span className="text-[24px]">🎯</span>
            </div>
            <h3 className="text-[32px] font-bold text-black mb-[16px]" style={{ fontFamily: 'Inter, sans-serif' }}>Column Two</h3>
            <p className="text-[20px] leading-[32px] text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>Placeholder text for second column content.</p>
          </div>
          <div className="bg-white rounded-[24px] p-[40px] border-2 border-[#FE8C31]/20 shadow-lg">
            <div className="w-[48px] h-[48px] rounded-full bg-[#FE8C31]/20 flex items-center justify-center mb-[24px]">
              <span className="text-[24px]">⚡</span>
            </div>
            <h3 className="text-[32px] font-bold text-black mb-[16px]" style={{ fontFamily: 'Inter, sans-serif' }}>Column Three</h3>
            <p className="text-[20px] leading-[32px] text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>Placeholder text for third column content.</p>
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
