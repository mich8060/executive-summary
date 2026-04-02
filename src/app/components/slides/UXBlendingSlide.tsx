export function UXBlendingSlide() {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-between p-24">
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-6xl text-center max-w-5xl">
          UX blending into Frontend Engineering Visual
        </h1>
      </div>

      {/* Bottom section with logo and tri-color bar */}
      <div className="relative">
        {/* CHG Logo - gray */}
        <div className="absolute right-0 bottom-16 flex items-center gap-2 opacity-40">
          <div className="flex items-baseline">
            <span className="text-4xl text-gray-400" style={{ fontWeight: 800 }}>C</span>
            <span className="text-4xl text-gray-400" style={{ fontWeight: 800 }}>H</span>
            <span className="text-4xl text-gray-400" style={{ fontWeight: 800 }}>G</span>
          </div>
          <span className="text-xl text-gray-400 ml-1">Healthcare</span>
        </div>

        {/* Tri-color bar */}
        <div className="flex h-3 gap-0">
          <div className="flex-1" style={{ backgroundColor: '#FE8C31' }}></div>
          <div className="flex-1" style={{ backgroundColor: '#7FBD4D' }}></div>
          <div className="flex-1" style={{ backgroundColor: '#1BA5DE' }}></div>
        </div>
      </div>
    </div>
  );
}
