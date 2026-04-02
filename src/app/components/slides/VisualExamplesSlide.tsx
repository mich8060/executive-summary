export function VisualExamplesSlide() {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-between p-24">
      <div className="flex-1 flex items-center gap-24">
        {/* Left column */}
        <div className="w-1/2 flex flex-col gap-8">
          <p className="text-2xl tracking-wide text-gray-600">INTRODUCTIONS</p>
          <h1 className="text-7xl mb-8" style={{ fontWeight: 900, lineHeight: 1.1 }}>
            Visual Examples
          </h1>
          <p className="text-3xl text-gray-700 leading-relaxed">
            By breaking down content into smaller units, paragraphs help convey information in a clear and digestible manner, allowing readers to grasp concepts more effectively.
          </p>
        </div>

        {/* Right column */}
        <div className="flex-1 flex items-center justify-center">
          <p className="text-3xl text-gray-700 text-center max-w-2xl">
            Visuals that tell the AI enabled future clearly
          </p>
        </div>
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
