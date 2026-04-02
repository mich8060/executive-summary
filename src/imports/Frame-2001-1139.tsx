import imgImage from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";

function TextBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[54px] items-start relative shrink-0 w-full" data-name="Text block">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[72px] relative shrink-0 text-[64px] tracking-[-1.2px] w-full">Visual Examples</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[42px] relative shrink-0 text-[26px] w-full">By breaking down content into smaller units, paragraphs help convey information in a clear and digestible manner, allowing readers to grasp concepts more effectively.</p>
    </div>
  );
}

function RightContent() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[27px] items-start left-[1260px] not-italic pl-[32px] text-black top-1/2 w-[546px]" data-name="Right content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[36px] relative shrink-0 text-[26px] tracking-[1px] uppercase w-full">Introductions</p>
      <TextBlock />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full" data-name="Frame">
      <div className="absolute h-[1080px] left-0 top-0 w-[1236px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <RightContent />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[42px] left-[287px] not-italic text-[26px] text-black top-[calc(50%-9px)] whitespace-nowrap">Visuals that tell the AI enabled future clearly</p>
    </div>
  );
}