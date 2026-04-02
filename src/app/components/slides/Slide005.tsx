export default function Slide005() {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7FBD4D]/20 to-transparent" />
      <div className="relative z-10 flex items-center justify-center h-full px-[200px]">
        <div>
          <div className="text-[140px] font-bold leading-[140px] text-white mb-[32px]" style={{ fontFamily: 'Inter, sans-serif' }}>"</div>
          <blockquote className="text-[56px] leading-[76px] text-white font-bold mb-[48px]" style={{ fontFamily: 'Inter, sans-serif' }}>
            This is a compelling quote or key statement that deserves emphasis
          </blockquote>
          <p className="text-[28px] text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>— Attribution Name</p>
        </div>
        <div className="absolute bottom-[40px] right-[110px] text-[14px] font-semibold text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>CHG Healthcare</div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex h-[40px] z-20">
        <div className="w-[288px] bg-[#FE8C31] rounded-tl-[12px]" />
        <div className="w-[288px] bg-[#7FBD4D]" />
        <div className="w-[288px] bg-[#1BA5DE] rounded-tr-[12px]" />
      </div>
    </div>
  );
}
