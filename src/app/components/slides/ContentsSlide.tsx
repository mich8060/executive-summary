export function ContentsSlide() {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-between p-24">
      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-2 gap-32 w-full max-w-6xl">
          {/* Left column - Title */}
          <div>
            <h1 className="text-8xl" style={{ fontWeight: 900 }}>Contents</h1>
          </div>

          {/* Right column - List */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 mt-2" style={{ backgroundColor: '#FE8C31' }}></div>
              <span className="text-4xl">Scalable Design Definitions</span>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 mt-2" style={{ backgroundColor: '#FE8C31' }}></div>
              <span className="text-4xl">Progress</span>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 mt-2" style={{ backgroundColor: '#FE8C31' }}></div>
              <span className="text-4xl">Item</span>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 mt-2" style={{ backgroundColor: '#FE8C31' }}></div>
              <span className="text-4xl">Item</span>
            </div>
          </div>
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
