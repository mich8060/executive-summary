export function NewTitleSlide() {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-between p-24">
      {/* CHG Logo - colored */}
      <div className="flex items-center gap-2">
        <div className="flex items-baseline">
          <span className="text-6xl" style={{ color: '#FE8C31', fontWeight: 800 }}>C</span>
          <span className="text-6xl" style={{ color: '#7FBD4D', fontWeight: 800 }}>H</span>
          <span className="text-6xl" style={{ color: '#1BA5DE', fontWeight: 800 }}>G</span>
        </div>
        <span className="text-3xl text-gray-700 ml-2">Healthcare</span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center -mt-32">
        <p className="text-xl text-gray-600 mb-4 tracking-wide">MAR 6, 2026</p>
        <h1 className="text-9xl mb-12" style={{ fontWeight: 900, lineHeight: 1.1 }}>
          Design System<br />to React
        </h1>
        <p className="text-4xl text-gray-900">Aaron Tate + Michael Stevens</p>
      </div>

      {/* Tri-color bar at bottom */}
      <div className="flex h-3 gap-0">
        <div className="flex-1" style={{ backgroundColor: '#FE8C31' }}></div>
        <div className="flex-1" style={{ backgroundColor: '#7FBD4D' }}></div>
        <div className="flex-1" style={{ backgroundColor: '#1BA5DE' }}></div>
      </div>
    </div>
  );
}
