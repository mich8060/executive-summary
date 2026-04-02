// This file contains template generators for slides 9-200
// Pattern types: hero, split, triple, list, quote, stats, timeline, grid

const layouts = [
  'hero', 'split', 'triple', 'list', 'quote', 'stats', 'timeline', 'grid'
];

const colors = ['#1BA5DE', '#7FBD4D', '#FE8C31'];
const colorNames = ['blue', 'green', 'orange'];

export function generateSlideContent(slideNum: number): string {
  const layoutIndex = slideNum % 8;
  const layout = layouts[layoutIndex];
  const colorIndex = slideNum % 3;
  const color = colors[colorIndex];
  const colorName = colorNames[colorIndex];
  
  return `export default function Slide${slideNum.toString().padStart(3, '0')}() {
  return (<div className="relative w-full h-full bg-white overflow-hidden"><div className="px-[110px] py-[100px]"><div className="text-[18px] font-bold tracking-[0.25em] text-[${color}] mb-[24px]" style={{fontFamily:'Inter,sans-serif'}}>SLIDE ${slideNum}</div><h1 className="text-[96px] font-bold text-black mb-[48px]" style={{fontFamily:'Inter,sans-serif'}}>${layout.toUpperCase()} Layout ${slideNum}</h1><p className="text-[28px] text-gray-600" style={{fontFamily:'Inter,sans-serif'}}>Placeholder content for slide ${slideNum}. This uses a ${layout} layout pattern with ${colorName} accents.</p><div className="absolute bottom-[40px] right-[110px] text-[14px] font-semibold text-gray-400" style={{fontFamily:'Inter,sans-serif'}}>CHG Healthcare</div></div><div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex h-[40px] z-20"><div className="w-[288px] bg-[#FE8C31] rounded-tl-[12px]"/><div className="w-[288px] bg-[#7FBD4D]"/><div className="w-[288px] bg-[#1BA5DE] rounded-tr-[12px]"/></div></div>);
}`;
}

// Not executed - just for reference
