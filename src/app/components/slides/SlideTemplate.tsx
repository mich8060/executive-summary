// Dynamic slide component that generates slides based on slideNumber prop
interface SlideTemplateProps {
  slideNumber: number;
}

export default function SlideTemplate({ slideNumber }: SlideTemplateProps) {
  const colors = ['#FE8C31', '#7FBD4D', '#1BA5DE'];
  const colorNames = ['orange', 'green', 'blue'];
  const layouts = ['Hero Centered', 'Split Layout', 'Triple Column', 'List Layout', 'Quote Slide', 'Stats Layout', 'Timeline', 'Grid Layout'];
  
  const colorIndex = slideNumber % 3;
  const layoutIndex = slideNumber % 8;
  const color = colors[colorIndex];
  const layout = layouts[layoutIndex];
  const slideNum = slideNumber.toString().padStart(3, '0');
  
  // Different layouts based on slide number
  if (layoutIndex === 0) {
    // Hero Centered
    return (
      <div className="relative w-full h-full bg-white overflow-hidden">
        <div className="flex items-center justify-center h-full px-[200px]">
          <div className="text-center">
            <div className="text-[20px] font-bold tracking-[0.25em] mb-[32px]" style={{fontFamily:'Inter,sans-serif',color}}>
              SLIDE {slideNum}
            </div>
            <h1 className="text-[120px] font-bold text-black mb-[48px]" style={{fontFamily:'Inter,sans-serif'}}>
              {layout} {slideNum}
            </h1>
            <p className="text-[36px] leading-[52px] text-gray-600" style={{fontFamily:'Inter,sans-serif'}}>
              This is a hero centered layout with emphasis on the title.
            </p>
          </div>
        </div>
        <div className="absolute bottom-[40px] right-[110px] text-[14px] text-gray-400" style={{fontFamily:'Inter,sans-serif'}}>
          CHG Healthcare
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex h-[40px]">
          <div className="w-[288px] bg-[#FE8C31] rounded-tl-[12px]" />
          <div className="w-[288px] bg-[#7FBD4D]" />
          <div className="w-[288px] bg-[#1BA5DE] rounded-tr-[12px]" />
        </div>
      </div>
    );
  }
  
  if (layoutIndex === 1) {
    // Split Layout
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="px-[110px] py-[100px]">
          <div className="text-[18px] font-bold tracking-[0.25em] mb-[24px]" style={{fontFamily:'Inter,sans-serif',color}}>
            SLIDE {slideNum}
          </div>
          <h1 className="text-[96px] font-bold text-black mb-[60px]" style={{fontFamily:'Inter,sans-serif'}}>
            {layout} {slideNum}
          </h1>
          <div className="grid grid-cols-2 gap-[60px]">
            <div>
              <h2 className="text-[36px] font-bold text-black mb-[20px]" style={{fontFamily:'Inter,sans-serif'}}>Left Column</h2>
              <p className="text-[24px] leading-[36px] text-gray-600" style={{fontFamily:'Inter,sans-serif'}}>
                Placeholder content for left side. Use for comparisons.
              </p>
            </div>
            <div>
              <h2 className="text-[36px] font-bold text-black mb-[20px]" style={{fontFamily:'Inter,sans-serif'}}>Right Column</h2>
              <p className="text-[24px] leading-[36px] text-gray-600" style={{fontFamily:'Inter,sans-serif'}}>
                Placeholder content for right side. Perfect for contrasts.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[40px] right-[110px] text-[14px] text-gray-400" style={{fontFamily:'Inter,sans-serif'}}>
          CHG Healthcare
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex h-[40px]">
          <div className="w-[288px] bg-[#FE8C31] rounded-tl-[12px]" />
          <div className="w-[288px] bg-[#7FBD4D]" />
          <div className="w-[288px] bg-[#1BA5DE] rounded-tr-[12px]" />
        </div>
      </div>
    );
  }
  
  if (layoutIndex === 2) {
    // Triple Column
    return (
      <div className="relative w-full h-full bg-white overflow-hidden">
        <div className="px-[110px] py-[100px]">
          <div className="text-[18px] font-bold tracking-[0.25em] mb-[24px]" style={{fontFamily:'Inter,sans-serif',color}}>
            SLIDE {slideNum}
          </div>
          <h1 className="text-[96px] font-bold text-black mb-[60px]" style={{fontFamily:'Inter,sans-serif'}}>
            {layout} {slideNum}
          </h1>
          <div className="grid grid-cols-3 gap-[40px]">
            {[1,2,3].map(i => (
              <div key={i} className="bg-gray-50 rounded-[20px] p-[32px] border border-gray-200">
                <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center mb-[16px]" style={{backgroundColor:`${color}20`}}>
                  <span className="text-[20px]">📌</span>
                </div>
                <h3 className="text-[28px] font-bold text-black mb-[12px]" style={{fontFamily:'Inter,sans-serif'}}>Item {i}</h3>
                <p className="text-[18px] text-gray-600" style={{fontFamily:'Inter,sans-serif'}}>Content placeholder</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-[40px] right-[110px] text-[14px] text-gray-400" style={{fontFamily:'Inter,sans-serif'}}>
          CHG Healthcare
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex h-[40px]">
          <div className="w-[288px] bg-[#FE8C31] rounded-tl-[12px]" />
          <div className="w-[288px] bg-[#7FBD4D]" />
          <div className="w-[288px] bg-[#1BA5DE] rounded-tr-[12px]" />
        </div>
      </div>
    );
  }
  
  if (layoutIndex === 4) {
    // Quote
    return (
      <div className="relative w-full h-full bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
        <div className="relative z-10 flex items-center justify-center h-full px-[200px]">
          <div>
            <div className="text-[140px] font-bold leading-[140px] text-white/20 mb-[-40px]" style={{fontFamily:'Inter,sans-serif'}}>"</div>
            <blockquote className="text-[56px] leading-[76px] text-white font-bold mb-[48px]" style={{fontFamily:'Inter,sans-serif'}}>
              This is a compelling quote or key statement for slide {slideNum}
            </blockquote>
            <p className="text-[28px] text-white/70" style={{fontFamily:'Inter,sans-serif'}}>— Quote Attribution</p>
          </div>
        </div>
        <div className="absolute bottom-[40px] right-[110px] text-[14px] text-white/60" style={{fontFamily:'Inter,sans-serif'}}>
          CHG Healthcare
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex h-[40px] z-20">
          <div className="w-[288px] bg-[#FE8C31] rounded-tl-[12px]" />
          <div className="w-[288px] bg-[#7FBD4D]" />
          <div className="w-[288px] bg-[#1BA5DE] rounded-tr-[12px]" />
        </div>
      </div>
    );
  }
  
  if (layoutIndex === 5) {
    // Stats
    return (
      <div className="relative w-full h-full bg-white overflow-hidden">
        <div className="px-[110px] py-[100px]">
          <div className="text-[18px] font-bold tracking-[0.25em] mb-[24px]" style={{fontFamily:'Inter,sans-serif',color}}>
            SLIDE {slideNum}
          </div>
          <h1 className="text-[96px] font-bold text-black mb-[80px]" style={{fontFamily:'Inter,sans-serif'}}>
            {layout} {slideNum}
          </h1>
          <div className="grid grid-cols-3 gap-[60px]">
            {[
              {n:'87%',l:'Growth Rate'},
              {n:'2.5M',l:'Total Users'},
              {n:'145',l:'Active Projects'}
            ].map((stat,i) => (
              <div key={i} className="text-center">
                <div className="text-[96px] font-bold mb-[16px]" style={{fontFamily:'Inter,sans-serif',color}}>{stat.n}</div>
                <div className="text-[28px] text-gray-600" style={{fontFamily:'Inter,sans-serif'}}>{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-[40px] right-[110px] text-[14px] text-gray-400" style={{fontFamily:'Inter,sans-serif'}}>
          CHG Healthcare
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex h-[40px]">
          <div className="w-[288px] bg-[#FE8C31] rounded-tl-[12px]" />
          <div className="w-[288px] bg-[#7FBD4D]" />
          <div className="w-[288px] bg-[#1BA5DE] rounded-tr-[12px]" />
        </div>
      </div>
    );
  }
  
  // Default simple layout for all other slides
  return (
    <div className="relative w-full h-full bg-white overflow-hidden">
      <div className="px-[110px] py-[100px]">
        <div className="text-[18px] font-bold tracking-[0.25em] mb-[24px]" style={{fontFamily:'Inter,sans-serif',color}}>
          SLIDE {slideNum}
        </div>
        <h1 className="text-[96px] font-bold text-black my-[48px]" style={{fontFamily:'Inter,sans-serif'}}>
          {layout} {slideNum}
        </h1>
        <p className="text-[28px] text-gray-600" style={{fontFamily:'Inter,sans-serif'}}>
          Placeholder content for slide {slideNum}. This uses a {layout.toLowerCase()} pattern with {colorNames[colorIndex]} accents.
        </p>
      </div>
      <div className="absolute bottom-[40px] right-[110px] text-[14px] text-gray-400" style={{fontFamily:'Inter,sans-serif'}}>
        CHG Healthcare
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex h-[40px]">
        <div className="w-[288px] bg-[#FE8C31] rounded-tl-[12px]" />
        <div className="w-[288px] bg-[#7FBD4D]" />
        <div className="w-[288px] bg-[#1BA5DE] rounded-tr-[12px]" />
      </div>
    </div>
  );
}
