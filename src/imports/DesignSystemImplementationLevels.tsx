import svgPaths from "./svg-s7y5rissza";

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-center w-full" data-name="Container">
      <div className="flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[#101828] text-[36px] w-[min-content]">
        <p className="css-4hzbpn leading-[40px]">Design System Implementation Levels</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[28px] relative shrink-0 text-[#384152] text-[20px]">
        <p className="css-ew64yg mb-0">{`Design systems don't have to be all-or-nothing. Implement them progressively to get`}</p>
        <p className="css-ew64yg">immediate value while building toward a comprehensive system.</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[14px] relative rounded-[16777200px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Svg />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Button:margin">
      <Button />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[80px] pl-[3.78px] pr-[3.79px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center">
        <p className="css-ew64yg mb-0">Foundation</p>
        <p className="css-ew64yg">Layer</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <ButtonMargin />
      <Container1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] relative shrink-0" data-name="Margin">
      <Container2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
            <path d="M0.833333 0.833333H12.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 13.3333">
            <path d={svgPaths.p2f52ca80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame />
    </div>
  );
}

function SvgMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] pt-[16px] relative shrink-0 size-[36px]" data-name="SVG:margin">
      <Svg1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[14px] relative rounded-[16777200px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Svg2 />
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Button:margin">
      <Button1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="font-['SF_Pro_Text:Regular',sans-serif] h-[40px] leading-[0] max-w-[80px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center w-[80px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[20px] justify-center left-[calc(50%+0.42px)] top-[9.75px] translate-x-[-50%] translate-y-[-50%] w-[35.634px]">
        <p className="css-4hzbpn leading-[20px]">Basic</p>
      </div>
      <div className="absolute flex flex-col h-[20px] justify-center left-[calc(50%+2px)] top-[29.75px] translate-x-[-50%] translate-y-[-50%] w-[84.009px]">
        <p className="css-4hzbpn leading-[20px]">Components</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <ButtonMargin1 />
      <Paragraph />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] relative shrink-0" data-name="Margin">
      <Container3 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[14px] relative rounded-[16777200px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Svg3 />
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Button:margin">
      <Button2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[80px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center">
        <p className="css-ew64yg mb-0">{`Layout &`}</p>
        <p className="css-ew64yg">Architecture</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <ButtonMargin2 />
      <Container4 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] relative shrink-0" data-name="Margin">
      <Container5 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[14px] relative rounded-[16777200px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Svg4 />
    </div>
  );
}

function ButtonMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Button:margin">
      <Button3 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="font-['SF_Pro_Text:Regular',sans-serif] h-[40px] leading-[0] max-w-[80px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center w-[80px]" data-name="Paragraph">
      <div className="absolute flex flex-col h-[20px] justify-center left-[calc(50%+0.69px)] top-[9.75px] translate-x-[-50%] translate-y-[-50%] w-[65.442px]">
        <p className="css-4hzbpn leading-[20px]">Advanced</p>
      </div>
      <div className="absolute flex flex-col h-[20px] justify-center left-[calc(50%+2px)] top-[29.75px] translate-x-[-50%] translate-y-[-50%] w-[84.009px]">
        <p className="css-4hzbpn leading-[20px]">Components</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <ButtonMargin3 />
      <Paragraph1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Margin />
      <SvgMargin />
      <Margin1 />
      <SvgMargin />
      <Margin2 />
      <SvgMargin />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3c3d51] text-[24px] text-center w-full">
        <p className="css-4hzbpn leading-[32px]">Implementation Progress</p>
      </div>
      <Container7 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.p28e73700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p29be2880} fill="var(--fill-0, #0A0A0A)" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pd3e9900} fill="var(--fill-0, #0A0A0A)" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3b1e3600} fill="var(--fill-0, #0A0A0A)" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1e3a1ef0} fill="var(--fill-0, #0A0A0A)" id="Vector_5" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[64px]" data-name="Background+Shadow">
      <Svg5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[16px]" data-name="Frame">
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.00015 6.66681">
            <path d={svgPaths.pf2f9980} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
            <path d={svgPaths.p3d62dd80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame1 />
    </div>
  );
}

function SvgMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[4px] relative shrink-0 w-[20px]" data-name="SVG:margin">
      <Svg6 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px]">
        <p className="css-ew64yg leading-[20px]">1-2 weeks</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <SvgMargin1 />
      <Container9 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] relative shrink-0" data-name="Margin">
      <Container10 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[16px]" data-name="Frame">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
            <path d={svgPaths.p3d62dd80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <path d={svgPaths.p341ae80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p2b1c1400} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame2 />
    </div>
  );
}

function SvgMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[4px] relative shrink-0 w-[20px]" data-name="SVG:margin">
      <Svg7 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Level 1 of 4</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <SvgMargin2 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Margin3 />
      <Container12 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center overflow-clip px-[13px] py-[5px] relative rounded-[8px] shrink-0" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#016630] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">Low Effort</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow />
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[30px]">
        <p className="css-ew64yg leading-[36px]">Foundation Layer</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[20px]">
        <p className="css-ew64yg leading-[28px]">{`Typography, Colors, Spacing, Iconography & Design Tokens`}</p>
      </div>
      <Container13 />
      <Background />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[18px] text-center w-[780px]">
        <p className="css-4hzbpn leading-[32px]">The foundation layer is your lowest-risk, highest-impact starting point. Since your team is already recreating basic styling during replatforming, this level simply replaces ad-hoc CSS values with a systematic, token-based approach.</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Container">
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container16 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[33px] pt-[32px] px-[32px] relative w-full">
        <Container17 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 18.3333">
            <path d="M0.833333 0.833333V17.5" id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13.3333">
            <path d={svgPaths.p1f9aea80} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame3 />
    </div>
  );
}

function SvgMargin3() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg8 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Business Case</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Heading 3">
      <SvgMargin3 />
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[16px] text-center w-full">
        <p className="css-4hzbpn leading-[26px]">{`Your replatforming initiative is already budgeting time for recreating visual elements. By implementing design tokens now, you transform necessary work into strategic advantage. Instead of rebuilding with arbitrary values, you're building with a scalable system that will accelerate every future project.`}</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] self-stretch" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
        <Heading />
        <Container19 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.p26fac1f0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 10">
            <path d={svgPaths.p1f5e580} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame4 />
    </div>
  );
}

function SvgMargin4() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg9 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Replatforming Alignment</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Heading 3">
      <SvgMargin4 />
      <Container21 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[16px] text-center w-full">
        <p className="css-4hzbpn leading-[26px]">{`Perfect alignment with replatforming timelines. You're already recreating CSS and design elements - this approach simply makes that work systematic and reusable rather than one-off custom implementations.`}</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] self-stretch" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
        <Heading2 />
        <Container22 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container23 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.p26fac1f0} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 10">
            <path d={svgPaths.p1f5e580} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame5 />
    </div>
  );
}

function SvgMargin5() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg10 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Expected ROI</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Heading 3">
      <SvgMargin5 />
      <Container25 />
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center p-[17px] relative rounded-[14px] self-stretch shrink-0 w-[393.33px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center w-[min-content]">
        <p className="css-4hzbpn leading-[20px]">Time Savings</p>
      </div>
      <div className="flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7fbc42] text-[24px] text-center w-[325px]">
        <p className="css-4hzbpn leading-[32px]">15-20 hours per developer per month</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#364153] text-[12px] text-center w-[min-content]">
        <p className="css-4hzbpn leading-[15px]">{`IBM Design Language Team (2022): "Design tokens reduced styling decisions by 85% and cut development time by 3-4 hours per component"`}</p>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[17px] relative rounded-[14px] self-stretch shrink-0 w-[393.34px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center w-full">
        <p className="css-4hzbpn leading-[20px]">Cost Reduction</p>
      </div>
      <div className="flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#05a8e1] text-[24px] text-center w-full">
        <p className="css-4hzbpn leading-[32px]">40% reduction in design-related bugs and rework</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[12px] text-center w-full">
        <p className="css-4hzbpn leading-[15px]">{`Atlassian Design System (2021): "Systematic design tokens reduced design-related bugs by 42% in first 6 months"`}</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[32px] not-italic relative shrink-0 text-[#f48420] text-[24px] text-center w-full">
        <p className="css-4hzbpn mb-0">90% improvement in visual</p>
        <p className="css-4hzbpn">consistency scores</p>
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[17px] relative rounded-[14px] self-stretch shrink-0 w-[393.34px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center w-full">
        <p className="css-4hzbpn leading-[20px]">Quality Improvement</p>
      </div>
      <Container26 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[15px] not-italic relative shrink-0 text-[#364153] text-[12px] text-center w-full">
        <p className="css-4hzbpn mb-0">{`Google Material Design Research (2023): "Design token implementation improved visual consistency scores from 23% to 91% across products"`}</p>
        <p className="css-4hzbpn">&nbsp;</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <OverlayBorder />
      <OverlayBorder1 />
      <OverlayBorder2 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container27 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 6.66667">
            <path d={svgPaths.p6877e0} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.92%_-33.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.1637 8.1204">
            <path d={svgPaths.p2cf69e00} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16687 6.55854">
            <path d={svgPaths.p39df7200} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 8.33333">
            <path d={svgPaths.p3ffa2780} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame6 />
    </div>
  );
}

function SvgMargin6() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg11 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Team Impact</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Heading 3">
      <SvgMargin6 />
      <Container29 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Developers</p>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin7() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg12 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[15.75px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Replace magic numbers with semantic tokens (e.g., --</p>
        <p className="css-ew64yg">space-md instead of 16px)</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin7 />
      <Container30 />
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin8() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg13 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin8 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Automatic consistency without memorizing style guides</p>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin9() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg14 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin9 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Easy theme switching and brand variations</p>
      </div>
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin10() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg15 />
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin10 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Reduced CSS debugging and override conflicts</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading1 />
      <List />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Designers</p>
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin11() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg16 />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin11 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Design decisions become reusable across all projects</p>
      </div>
    </div>
  );
}

function Svg17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin12() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg17 />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin12 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Faster mockup creation with predefined values</p>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin13() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg18 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[81.16px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Consistent handoffs with developer-friendly</p>
        <p className="css-ew64yg">specifications</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin13 />
      <Container32 />
    </div>
  );
}

function Svg19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin14() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg19 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[42.45px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Easy brand updates cascade automatically across</p>
        <p className="css-ew64yg">products</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin14 />
      <Container33 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading5 />
      <List1 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Product Managers</p>
      </div>
    </div>
  );
}

function Svg20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin15() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg20 />
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin15 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Faster time-to-market for new features and products</p>
      </div>
    </div>
  );
}

function Svg21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin16() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg21 />
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin16 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Consistent brand experience reduces user confusion</p>
      </div>
    </div>
  );
}

function Svg22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin17() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg22 />
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin17 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Lower maintenance costs as system prevents style drift</p>
      </div>
    </div>
  );
}

function Svg23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin18() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg23 />
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin18 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Scalable foundation supports rapid team growth</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading6 />
      <List2 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Container36 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[8.32%_8.32%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3368 18.3372">
            <path d={svgPaths.p2c4d7f80} id="Vector" stroke="var(--stroke-0, #125C32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg24() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame7 />
    </div>
  );
}

function SvgMargin19() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg24 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Implementation Details</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Heading 3">
      <SvgMargin19 />
      <Container38 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Technical Steps</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">1</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background1 />
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <Margin4 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Audit existing styles and replace common values</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">2</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background2 />
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <Margin5 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Implement semantic token naming convention</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">3</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background3 />
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <Margin6 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Replace hardcoded values in existing components</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">4</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background4 />
    </div>
  );
}

function Item15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <Margin7 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Create documentation and usage guidelines</p>
      </div>
    </div>
  );
}

function OrderedList() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Ordered List">
      <Item12 />
      <Item13 />
      <Item14 />
      <Item15 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading8 />
      <OrderedList />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Key Deliverables</p>
      </div>
    </div>
  );
}

function Svg25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin20() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg25 />
    </div>
  );
}

function Item16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin20 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Design tokens repository (CSS custom properties)</p>
      </div>
    </div>
  );
}

function Svg26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin21() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg26 />
    </div>
  );
}

function Item17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin21 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Color palette with accessibility compliance</p>
      </div>
    </div>
  );
}

function Svg27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin22() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg27 />
    </div>
  );
}

function Item18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin22 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Typography system with responsive scales</p>
      </div>
    </div>
  );
}

function Svg28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin23() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg28 />
    </div>
  );
}

function Item19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin23 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Spacing system documentation</p>
      </div>
    </div>
  );
}

function Svg29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin24() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg29 />
    </div>
  );
}

function Item20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin24 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Implementation guidelines for developers</p>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item16 />
      <Item17 />
      <Item18 />
      <Item19 />
      <Item20 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading9 />
      <List3 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
        <Container24 />
        <div className="bg-[rgba(0,0,0,0.1)] h-px shrink-0 w-full" data-name="Horizontal Divider" />
        <Container28 />
        <div className="bg-[rgba(0,0,0,0.1)] h-px shrink-0 w-full" data-name="Horizontal Divider" />
        <Container37 />
        <div className="bg-[rgba(0,0,0,0.1)] h-px shrink-0 w-full" data-name="Horizontal Divider" />
        <Container42 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[14px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[2px] relative w-full">
        <HorizontalBorder />
        <Container43 />
      </div>
    </div>
  );
}

function Svg30() {
  return (
    <div className="relative size-[32px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d="M6.66667 16H25.3333" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p24247500} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Builds upon previous level</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 size-[32px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "600" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Svg30 />
        </div>
      </div>
      <Margin8 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex items-start justify-center py-[24px] relative shrink-0 w-full" data-name="Container">
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1280px]" data-name="Container">
      <BackgroundBorder />
      <Container45 />
    </div>
  );
}

function Svg31() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.p3c478e70} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1aa02a00} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2fca2400} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pe2e3900} id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[64px]" data-name="Background+Shadow">
      <Svg31 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[16px]" data-name="Frame">
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.00015 6.66681">
            <path d={svgPaths.pf2f9980} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
            <path d={svgPaths.p3d62dd80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg32() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame8 />
    </div>
  );
}

function SvgMargin25() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[4px] relative shrink-0 w-[20px]" data-name="SVG:margin">
      <Svg32 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px]">
        <p className="css-ew64yg leading-[20px]">2-4 weeks</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <SvgMargin25 />
      <Container47 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] relative shrink-0" data-name="Margin">
      <Container48 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[16px]" data-name="Frame">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
            <path d={svgPaths.p3d62dd80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <path d={svgPaths.p341ae80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p2b1c1400} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg33() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame9 />
    </div>
  );
}

function SvgMargin26() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[4px] relative shrink-0 w-[20px]" data-name="SVG:margin">
      <Svg33 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Level 2 of 4</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <SvgMargin26 />
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Margin9 />
      <Container50 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#fef9c2] content-stretch flex items-center justify-center overflow-clip px-[13px] py-[5px] relative rounded-[8px] shrink-0" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#894b00] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">Medium Effort</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow1 />
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[30px]">
        <p className="css-ew64yg leading-[36px]">Basic Components</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[20px]">
        <p className="css-ew64yg leading-[28px]">{`Buttons, Inputs, & Interactive Elements`}</p>
      </div>
      <Container51 />
      <Background5 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[18px] text-center w-[780px]">
        <p className="css-4hzbpn leading-[29.25px]">Basic components are the building blocks your team uses daily. Instead of rebuilding buttons, inputs, and cards from scratch during replatforming, implement battle-tested components that include accessibility, multiple states, and consistent behavior.</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Container52 />
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[33px] pt-[32px] px-[32px] relative w-full">
        <Container53 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 18.3333">
            <path d="M0.833333 0.833333V17.5" id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13.3333">
            <path d={svgPaths.p1f9aea80} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg34() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame10 />
    </div>
  );
}

function SvgMargin27() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg34 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <SvgMargin27 />
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Business Case</p>
      </div>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] self-stretch" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[24px] relative size-full">
          <Heading10 />
          <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[16px] w-full">
            <p className="css-4hzbpn leading-[26px]">Your development team is already building these exact components for the new platform. The choice is between custom implementations that require extensive testing and maintenance, or proven components that work out of the box. This level pays for itself within the first month of implementation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.p26fac1f0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 10">
            <path d={svgPaths.p1f5e580} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg35() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame11 />
    </div>
  );
}

function SvgMargin28() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg35 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <SvgMargin28 />
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Replatforming Alignment</p>
      </div>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] self-stretch" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[24px] relative size-full">
          <Heading11 />
          <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[16px] w-full">
            <p className="css-4hzbpn leading-[26px]">Builds directly on Level 1 foundations. Your replatforming work requires rebuilding user interfaces - this level ensures every interface element is consistent, accessible, and maintainable rather than a collection of one-off implementations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <OverlayBorder3 />
      <OverlayBorder4 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.p26fac1f0} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 10">
            <path d={svgPaths.p1f5e580} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg36() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame12 />
    </div>
  );
}

function SvgMargin29() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg36 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Expected ROI</p>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Heading 3">
      <SvgMargin29 />
      <Container55 />
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center p-[17px] relative rounded-[14px] self-stretch shrink-0 w-[393.33px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center w-[min-content]">
        <p className="css-4hzbpn leading-[20px]">Time Savings</p>
      </div>
      <div className="flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7fbc42] text-[24px] text-center w-[325px]">
        <p className="css-4hzbpn leading-[32px]">25-30 hours per developer per month</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#364153] text-[12px] text-center w-[min-content]">
        <p className="css-4hzbpn leading-[15px]">{`Salesforce Lightning Design System (2022): "Reusable components saved 28 hours per developer monthly vs custom implementations"`}</p>
      </div>
    </div>
  );
}

function OverlayBorder6() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[17px] relative rounded-[14px] self-stretch shrink-0 w-[393.34px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center w-full">
        <p className="css-4hzbpn leading-[20px]">Cost Reduction</p>
      </div>
      <div className="flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[32px] not-italic relative shrink-0 text-[#05a8e1] text-[24px] text-center w-full">
        <p className="css-4hzbpn mb-0">60% reduction in component-</p>
        <p className="css-4hzbpn mb-0">related bugs and accessibility</p>
        <p className="css-4hzbpn">issues</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[12px] text-center w-full">
        <p className="css-4hzbpn leading-[15px]">{`Microsoft Fluent UI Study (2023): "Component library reduced accessibility violations by 67% and UI bugs by 58%"`}</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f48420] text-[24px] text-center w-full">
        <p className="css-4hzbpn leading-[32px]">95% improvement in interaction consistency and user experience</p>
      </div>
    </div>
  );
}

function OverlayBorder7() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[17px] relative rounded-[14px] self-stretch shrink-0 w-[393.34px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center w-full">
        <p className="css-4hzbpn leading-[20px]">Quality Improvement</p>
      </div>
      <Container56 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[12px] text-center w-full">
        <p className="css-4hzbpn leading-[15px]">{`Shopify Polaris Design System (2021): "Standardized components improved user task completion rates by 94% across merchant tools"`}</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <OverlayBorder5 />
      <OverlayBorder6 />
      <OverlayBorder7 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading12 />
      <Container57 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 6.66667">
            <path d={svgPaths.p6877e0} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.92%_-33.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.1637 8.1204">
            <path d={svgPaths.p2cf69e00} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16687 6.55854">
            <path d={svgPaths.p39df7200} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 8.33333">
            <path d={svgPaths.p3ffa2780} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg37() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame13 />
    </div>
  );
}

function SvgMargin30() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg37 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Team Impact</p>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Heading 4">
      <SvgMargin30 />
      <Container59 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Developers</p>
      </div>
    </div>
  );
}

function Svg38() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin31() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg38 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[40.03px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Pre-built components with all states (hover, focus,</p>
        <p className="css-ew64yg">disabled, loading)</p>
      </div>
    </div>
  );
}

function Item21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin31 />
      <Container60 />
    </div>
  );
}

function Svg39() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin32() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg39 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[9.44px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Automatic accessibility features (ARIA labels, keyboard</p>
        <p className="css-ew64yg">navigation)</p>
      </div>
    </div>
  );
}

function Item22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin32 />
      <Container61 />
    </div>
  );
}

function Svg40() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin33() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg40 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[9.41px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Consistent APIs across all components reduce learning</p>
        <p className="css-ew64yg">curve</p>
      </div>
    </div>
  );
}

function Item23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin33 />
      <Container62 />
    </div>
  );
}

function Svg41() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin34() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg41 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[11.61px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Built-in responsive behavior eliminates mobile-specific</p>
        <p className="css-ew64yg">debugging</p>
      </div>
    </div>
  );
}

function Item24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin34 />
      <Container63 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item21 />
      <Item22 />
      <Item23 />
      <Item24 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading14 />
      <List4 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Designers</p>
      </div>
    </div>
  );
}

function Svg42() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin35() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg42 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Component library in design tools matches development</p>
        <p className="css-ew64yg">exactly</p>
      </div>
    </div>
  );
}

function Item25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin35 />
      <Container65 />
    </div>
  );
}

function Svg43() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin36() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg43 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[71.54px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Faster prototyping with pre-made, interactive</p>
        <p className="css-ew64yg">components</p>
      </div>
    </div>
  );
}

function Item26() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin36 />
      <Container66 />
    </div>
  );
}

function Svg44() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin37() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg44 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[24.91px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Focus on user experience instead of redrawing basic</p>
        <p className="css-ew64yg">elements</p>
      </div>
    </div>
  );
}

function Item27() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin37 />
      <Container67 />
    </div>
  );
}

function Svg45() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin38() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg45 />
    </div>
  );
}

function Item28() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin38 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Easy A/B testing with consistent component variations</p>
      </div>
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item25 />
      <Item26 />
      <Item27 />
      <Item28 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading15 />
      <List5 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Product Managers</p>
      </div>
    </div>
  );
}

function Svg46() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin39() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg46 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[41.78px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Faster feature development with reusable building</p>
        <p className="css-ew64yg">blocks</p>
      </div>
    </div>
  );
}

function Item29() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin39 />
      <Container69 />
    </div>
  );
}

function Svg47() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin40() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg47 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[43.16px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Reduced accessibility compliance risk and testing</p>
        <p className="css-ew64yg">overhead</p>
      </div>
    </div>
  );
}

function Item30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin40 />
      <Container70 />
    </div>
  );
}

function Svg48() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin41() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg48 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[58.05px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Consistent user experience increases customer</p>
        <p className="css-ew64yg">satisfaction</p>
      </div>
    </div>
  );
}

function Item31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin41 />
      <Container71 />
    </div>
  );
}

function Svg49() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin42() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg49 />
    </div>
  );
}

function Item32() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin42 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Lower onboarding time for new team members</p>
      </div>
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item29 />
      <Item30 />
      <Item31 />
      <Item32 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading16 />
      <List6 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Container68 />
      <Container72 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading13 />
      <Container73 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[8.32%_8.32%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3368 18.3372">
            <path d={svgPaths.p2c4d7f80} id="Vector" stroke="var(--stroke-0, #125C32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg50() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame14 />
    </div>
  );
}

function SvgMargin43() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg50 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Implementation Details</p>
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Heading 4">
      <SvgMargin43 />
      <Container75 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Technical Steps</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">1</p>
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background6 />
    </div>
  );
}

function Item33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <Margin10 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Inventory existing button and input implementations</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">2</p>
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background7 />
    </div>
  );
}

function Item34() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <Margin11 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Install design system component library package</p>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">3</p>
      </div>
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background8 />
    </div>
  );
}

function Item35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <Margin12 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Map existing component usage to design system components</p>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">4</p>
      </div>
    </div>
  );
}

function Margin13() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background9 />
    </div>
  );
}

function Item36() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <Margin13 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Replace custom components with design system equivalents</p>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">4</p>
      </div>
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background10 />
    </div>
  );
}

function Item37() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <Margin14 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Customize component themes using foundation tokens from Level 1`</p>
      </div>
    </div>
  );
}

function OrderedList1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Ordered List">
      <Item33 />
      <Item34 />
      <Item35 />
      <Item36 />
      <Item37 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading18 />
      <OrderedList1 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Key Deliverables</p>
      </div>
    </div>
  );
}

function Svg51() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin44() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg51 />
    </div>
  );
}

function Item38() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin44 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Integrated button components with all variants and states</p>
      </div>
    </div>
  );
}

function Svg52() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin45() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg52 />
    </div>
  );
}

function Item39() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin45 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Standardized form input suite throughout your application</p>
      </div>
    </div>
  );
}

function Svg53() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin46() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg53 />
    </div>
  );
}

function Item40() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin46 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Reliable loading and feedback patterns (spinners, progress bars, toasts)</p>
      </div>
    </div>
  );
}

function List7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item38 />
      <Item39 />
      <Item40 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading19 />
      <List7 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container76 />
      <Container77 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading17 />
      <Container78 />
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
        <Container54 />
        <div className="bg-[rgba(0,0,0,0.1)] h-px shrink-0 w-full" data-name="Horizontal Divider" />
        <Container58 />
        <div className="bg-[rgba(0,0,0,0.1)] h-px shrink-0 w-full" data-name="Horizontal Divider" />
        <Container74 />
        <div className="bg-[rgba(0,0,0,0.1)] h-px shrink-0 w-full" data-name="Horizontal Divider" />
        <Container79 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[14px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[2px] relative w-full">
        <HorizontalBorder1 />
        <Container80 />
      </div>
    </div>
  );
}

function Svg54() {
  return (
    <div className="relative size-[32px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d="M6.66667 16H25.3333" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p24247500} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Margin15() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Builds upon previous level</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 size-[32px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "600" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Svg54 />
        </div>
      </div>
      <Margin15 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex items-start justify-center py-[24px] relative shrink-0 w-full" data-name="Container">
      <Container81 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1280px]" data-name="Container">
      <BackgroundBorder1 />
      <Container82 />
    </div>
  );
}

function Svg55() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.p1efeac80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M4 12H28" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M12 28V12" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[64px]" data-name="Background+Shadow">
      <Svg55 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[16px]" data-name="Frame">
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.00015 6.66681">
            <path d={svgPaths.pf2f9980} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
            <path d={svgPaths.p3d62dd80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg56() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame15 />
    </div>
  );
}

function SvgMargin47() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[4px] relative shrink-0 w-[20px]" data-name="SVG:margin">
      <Svg56 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px]">
        <p className="css-ew64yg leading-[20px]">1-3 months</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <SvgMargin47 />
      <Container84 />
    </div>
  );
}

function Margin16() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] relative shrink-0" data-name="Margin">
      <Container85 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[16px]" data-name="Frame">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
            <path d={svgPaths.p3d62dd80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <path d={svgPaths.p341ae80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p2b1c1400} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg57() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame16 />
    </div>
  );
}

function SvgMargin48() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[4px] relative shrink-0 w-[20px]" data-name="SVG:margin">
      <Svg57 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Level 3 of 4</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <SvgMargin48 />
      <Container86 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Margin16 />
      <Container87 />
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#ffe2e2] content-stretch flex items-center justify-center overflow-clip px-[13px] py-[5px] relative rounded-[8px] shrink-0" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9f0712] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">High Effort</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow2 />
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[30px]">
        <p className="css-ew64yg leading-[36px]">{`Layout & Architecture`}</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[20px]">
        <p className="css-ew64yg leading-[28px]">{`Page Structure, Navigation & Content Patterns`}</p>
      </div>
      <Container88 />
      <Background11 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[18px] text-center w-[780px]">
        <p className="css-4hzbpn leading-[29.25px]">Layout patterns define how users navigate and consume content across your platform. This level standardizes the structural elements that make your application feel cohesive and predictable, dramatically accelerating new page development.</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Container89 />
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[33px] pt-[32px] px-[32px] relative w-full">
        <Container90 />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 18.3333">
            <path d="M0.833333 0.833333V17.5" id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13.3333">
            <path d={svgPaths.p1f9aea80} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg58() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame17 />
    </div>
  );
}

function SvgMargin49() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg58 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <SvgMargin49 />
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Business Case</p>
      </div>
    </div>
  );
}

function OverlayBorder8() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] self-stretch" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[24px] relative size-full">
          <Heading20 />
          <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[16px] w-full">
            <p className="css-4hzbpn leading-[26px]">Navigation inconsistencies are user experience killers that directly impact conversion and satisfaction. While this level requires more upfront investment, it eliminates the need to redesign page structures for every new feature. ROI compounds as you build more pages and user flows.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.p26fac1f0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 10">
            <path d={svgPaths.p1f5e580} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg59() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame18 />
    </div>
  );
}

function SvgMargin50() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg59 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <SvgMargin50 />
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Replatforming Alignment</p>
      </div>
    </div>
  );
}

function OverlayBorder9() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] self-stretch" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[24px] relative size-full">
          <Heading21 />
          <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[16px] w-full">
            <p className="css-4hzbpn leading-[26px]">Essential for successful platform consolidation. If your replatforming involves unifying multiple systems or creating new user journeys, standardized layouts prevent the chaos of inconsistent experiences while accelerating development of new unified workflows.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <OverlayBorder8 />
      <OverlayBorder9 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.p26fac1f0} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 10">
            <path d={svgPaths.p1f5e580} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg60() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame19 />
    </div>
  );
}

function SvgMargin51() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg60 />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Expected ROI</p>
      </div>
    </div>
  );
}

function Heading22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Heading 3">
      <SvgMargin51 />
      <Container92 />
    </div>
  );
}

function OverlayBorder10() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center p-[17px] relative rounded-[14px] self-stretch shrink-0 w-[393.33px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center w-[min-content]">
        <p className="css-4hzbpn leading-[20px]">Time Savings</p>
      </div>
      <div className="flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7fbc42] text-[24px] text-center w-[325px]">
        <p className="css-4hzbpn leading-[32px]">40-50 hours per developer per month on new page development</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#364153] text-[12px] text-center w-[min-content]">
        <p className="css-4hzbpn leading-[15px]">{`Airbnb Design Language System (2022): "Standardized layouts reduced page development time by 75%, saving 45+ hours per developer monthly"`}</p>
      </div>
    </div>
  );
}

function OverlayBorder11() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[17px] relative rounded-[14px] self-stretch shrink-0 w-[393.34px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center w-full">
        <p className="css-4hzbpn leading-[20px]">Cost Reduction</p>
      </div>
      <div className="flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#05a8e1] text-[24px] text-center w-full">
        <p className="css-4hzbpn leading-[32px]">70% reduction in layout-related bugs and user experience issues</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[12px] text-center w-full">
        <p className="css-4hzbpn leading-[15px]">{`Adobe Spectrum Design System (2023): "Layout templates decreased responsive design bugs by 72% and UX inconsistencies by 69%"`}</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[32px] not-italic relative shrink-0 text-[#f48420] text-[24px] text-center w-full">
        <p className="css-4hzbpn mb-0">85% improvement in user task completion rates</p>
        <p className="css-4hzbpn">&nbsp;</p>
      </div>
    </div>
  );
}

function OverlayBorder12() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[17px] relative rounded-[14px] self-stretch shrink-0 w-[393.34px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center w-full">
        <p className="css-4hzbpn leading-[20px]">Quality Improvement</p>
      </div>
      <Container93 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[15px] not-italic relative shrink-0 text-[#364153] text-[12px] text-center w-full">
        <p className="css-4hzbpn mb-0">{`Uber Base Design System (2021): "Unified navigation patterns improved user task completion from 62% to 89% across rider and driver apps"`}</p>
        <p className="css-4hzbpn">&nbsp;</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <OverlayBorder10 />
      <OverlayBorder11 />
      <OverlayBorder12 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading22 />
      <Container94 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 6.66667">
            <path d={svgPaths.p6877e0} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.92%_-33.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.1637 8.1204">
            <path d={svgPaths.p2cf69e00} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16687 6.55854">
            <path d={svgPaths.p39df7200} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 8.33333">
            <path d={svgPaths.p3ffa2780} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg61() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame20 />
    </div>
  );
}

function SvgMargin52() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg61 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Team Impact</p>
      </div>
    </div>
  );
}

function Heading23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Heading 4">
      <SvgMargin52 />
      <Container96 />
    </div>
  );
}

function Heading24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Developers</p>
      </div>
    </div>
  );
}

function Svg62() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin53() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg62 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[5.91px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Standardized page templates eliminate layout decision-</p>
        <p className="css-ew64yg">making</p>
      </div>
    </div>
  );
}

function Item41() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin53 />
      <Container97 />
    </div>
  );
}

function Svg63() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin54() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg63 />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[23.2px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Responsive behavior handled automatically by layout</p>
        <p className="css-ew64yg">system</p>
      </div>
    </div>
  );
}

function Item42() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin54 />
      <Container98 />
    </div>
  );
}

function Svg64() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin55() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg64 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[40.69px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Consistent routing and navigation patterns reduce</p>
        <p className="css-ew64yg">debugging</p>
      </div>
    </div>
  );
}

function Item43() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin55 />
      <Container99 />
    </div>
  );
}

function Svg65() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin56() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg65 />
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[65.64px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">New pages can be built 3x faster using proven</p>
        <p className="css-ew64yg">templates</p>
      </div>
    </div>
  );
}

function Item44() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin56 />
      <Container100 />
    </div>
  );
}

function List8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item41 />
      <Item42 />
      <Item43 />
      <Item44 />
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading24 />
      <List8 />
    </div>
  );
}

function Heading25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Designers</p>
      </div>
    </div>
  );
}

function Svg66() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin57() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg66 />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[17.43px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Focus on content and user flows instead of recreating</p>
        <p className="css-ew64yg">page structures</p>
      </div>
    </div>
  );
}

function Item45() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin57 />
      <Container102 />
    </div>
  );
}

function Svg67() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin58() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg67 />
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[9.02px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Consistent layout constraints actually increase creative</p>
        <p className="css-ew64yg">freedom</p>
      </div>
    </div>
  );
}

function Item46() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin58 />
      <Container103 />
    </div>
  );
}

function Svg68() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin59() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg68 />
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[79.59px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">User testing becomes more meaningful with</p>
        <p className="css-ew64yg">standardized navigation</p>
      </div>
    </div>
  );
}

function Item47() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin59 />
      <Container104 />
    </div>
  );
}

function Svg69() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin60() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg69 />
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[74.37px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Design handoffs focus on content, not layout</p>
        <p className="css-ew64yg">specifications</p>
      </div>
    </div>
  );
}

function Item48() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin60 />
      <Container105 />
    </div>
  );
}

function List9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item45 />
      <Item46 />
      <Item47 />
      <Item48 />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading25 />
      <List9 />
    </div>
  );
}

function Heading26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Product Managers</p>
      </div>
    </div>
  );
}

function Svg70() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin61() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg70 />
    </div>
  );
}

function Item49() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin61 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">New features launch faster with proven page templates</p>
      </div>
    </div>
  );
}

function Svg71() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin62() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg71 />
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[22.04px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">User onboarding improves with consistent navigation</p>
        <p className="css-ew64yg">patterns</p>
      </div>
    </div>
  );
}

function Item50() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin62 />
      <Container107 />
    </div>
  );
}

function Svg72() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin63() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg72 />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[24.56px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">A/B testing becomes more reliable with standardized</p>
        <p className="css-ew64yg">layouts</p>
      </div>
    </div>
  );
}

function Item51() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin63 />
      <Container108 />
    </div>
  );
}

function Svg73() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin64() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg73 />
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[17.66px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Customer support issues decrease due to predictable</p>
        <p className="css-ew64yg">user interfaces</p>
      </div>
    </div>
  );
}

function Item52() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin64 />
      <Container109 />
    </div>
  );
}

function List10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item49 />
      <Item50 />
      <Item51 />
      <Item52 />
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading26 />
      <List10 />
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container101 />
      <Container106 />
      <Container110 />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading23 />
      <Container111 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[8.32%_8.32%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3368 18.3372">
            <path d={svgPaths.p2c4d7f80} id="Vector" stroke="var(--stroke-0, #125C32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg74() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame21 />
    </div>
  );
}

function SvgMargin65() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg74 />
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Implementation Details</p>
      </div>
    </div>
  );
}

function Heading27() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Heading 4">
      <SvgMargin65 />
      <Container113 />
    </div>
  );
}

function Heading28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Technical Steps</p>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">1</p>
      </div>
    </div>
  );
}

function Margin17() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background12 />
    </div>
  );
}

function Item53() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <Margin17 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Audit existing page layouts and identify common patterns</p>
      </div>
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">2</p>
      </div>
    </div>
  );
}

function Margin18() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background13 />
    </div>
  );
}

function Item54() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <Margin18 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Design responsive grid system with consistent breakpoints</p>
      </div>
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">3</p>
      </div>
    </div>
  );
}

function Margin19() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background14 />
    </div>
  );
}

function Item55() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <Margin19 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Create application shell with standardized navigation</p>
      </div>
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">4</p>
      </div>
    </div>
  );
}

function Margin20() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background15 />
    </div>
  );
}

function Item56() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <Margin20 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Build page template components for common use cases</p>
      </div>
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">5</p>
      </div>
    </div>
  );
}

function Margin21() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background16 />
    </div>
  );
}

function Item57() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <Margin21 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Implement routing patterns and navigation state management</p>
      </div>
    </div>
  );
}

function Background17() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">6</p>
      </div>
    </div>
  );
}

function Margin22() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background17 />
    </div>
  );
}

function Item58() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <Margin22 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Test responsive behavior across device sizes and orientations</p>
      </div>
    </div>
  );
}

function OrderedList2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Ordered List">
      <Item53 />
      <Item54 />
      <Item55 />
      <Item56 />
      <Item57 />
      <Item58 />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading28 />
      <OrderedList2 />
    </div>
  );
}

function Heading29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Key Deliverables</p>
      </div>
    </div>
  );
}

function Svg75() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin66() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg75 />
    </div>
  );
}

function Item59() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin66 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Application shell component with navigation management</p>
      </div>
    </div>
  );
}

function Svg76() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin67() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg76 />
    </div>
  );
}

function Item60() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin67 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Grid system with responsive behavior documentation</p>
      </div>
    </div>
  );
}

function Svg77() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin68() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg77 />
    </div>
  );
}

function Item61() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin68 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Page template library (dashboard, forms, content pages, listings)</p>
      </div>
    </div>
  );
}

function Svg78() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin69() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg78 />
    </div>
  );
}

function Item62() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin69 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Navigation components (primary nav, breadcrumbs, pagination)</p>
      </div>
    </div>
  );
}

function Svg79() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin70() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg79 />
    </div>
  );
}

function Item63() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin70 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Modal and overlay system with consistent behavior</p>
      </div>
    </div>
  );
}

function List11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item59 />
      <Item60 />
      <Item61 />
      <Item62 />
      <Item63 />
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading29 />
      <List11 />
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container114 />
      <Container115 />
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading27 />
      <Container116 />
    </div>
  );
}

function Container118() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
        <Container91 />
        <div className="bg-[rgba(0,0,0,0.1)] h-px shrink-0 w-full" data-name="Horizontal Divider" />
        <Container95 />
        <div className="bg-[rgba(0,0,0,0.1)] h-px shrink-0 w-full" data-name="Horizontal Divider" />
        <Container112 />
        <div className="bg-[rgba(0,0,0,0.1)] h-px shrink-0 w-full" data-name="Horizontal Divider" />
        <Container117 />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#faf5ff] relative rounded-[14px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-[#e9d4ff] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[2px] relative w-full">
        <HorizontalBorder2 />
        <Container118 />
      </div>
    </div>
  );
}

function Svg80() {
  return (
    <div className="relative size-[32px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d="M6.66667 16H25.3333" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p24247500} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Margin23() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Builds upon previous level</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 size-[32px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "600" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Svg80 />
        </div>
      </div>
      <Margin23 />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex items-start justify-center py-[24px] relative shrink-0 w-full" data-name="Container">
      <Container119 />
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1280px]" data-name="Container">
      <BackgroundBorder2 />
      <Container120 />
    </div>
  );
}

function Svg81() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="SVG">
          <path d={svgPaths.p29ed4e00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[64px]" data-name="Background+Shadow">
      <Svg81 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[16px]" data-name="Frame">
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.00015 6.66681">
            <path d={svgPaths.pf2f9980} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
            <path d={svgPaths.p3d62dd80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg82() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame22 />
    </div>
  );
}

function SvgMargin71() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[4px] relative shrink-0 w-[20px]" data-name="SVG:margin">
      <Svg82 />
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px]">
        <p className="css-ew64yg leading-[20px]">2-6 months</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <SvgMargin71 />
      <Container122 />
    </div>
  );
}

function Margin24() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[16px] relative shrink-0" data-name="Margin">
      <Container123 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[16px]" data-name="Frame">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
            <path d={svgPaths.p3d62dd80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <path d={svgPaths.p341ae80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p2b1c1400} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg83() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Frame23 />
    </div>
  );
}

function SvgMargin72() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pr-[4px] relative shrink-0 w-[20px]" data-name="SVG:margin">
      <Svg83 />
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Level 4 of 4</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <SvgMargin72 />
      <Container124 />
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Margin24 />
      <Container125 />
    </div>
  );
}

function Background18() {
  return (
    <div className="bg-[#ffe2e2] content-stretch flex items-center justify-center overflow-clip px-[13px] py-[5px] relative rounded-[8px] shrink-0" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9f0712] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">High Effort</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow3 />
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[30px]">
        <p className="css-ew64yg leading-[36px]">Advanced Components</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[20px]">
        <p className="css-ew64yg leading-[28px]">{`Complex Interactions & Business-Specific Patterns`}</p>
      </div>
      <Container126 />
      <Background18 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[18px] text-center w-[780px]">
        <p className="css-4hzbpn leading-[29.25px]">Advanced components solve your most complex user interface challenges with battle-tested, reusable solutions. These components handle the intricate interactions that differentiate your platform while maintaining consistency and performance.</p>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[33px] pt-[32px] px-[32px] relative w-full">
        <Container127 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 18.3333">
            <path d="M0.833333 0.833333V17.5" id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13.3333">
            <path d={svgPaths.p1f9aea80} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg84() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame24 />
    </div>
  );
}

function SvgMargin73() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg84 />
    </div>
  );
}

function Heading30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <SvgMargin73 />
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Business Case</p>
      </div>
    </div>
  );
}

function OverlayBorder13() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] self-stretch" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[24px] relative size-full">
          <Heading30 />
          <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[16px] w-full">
            <p className="css-4hzbpn leading-[26px]">Complex components represent the highest development risk and longest timelines in traditional projects. By investing in reusable advanced components, you transform high-risk, high-cost development into predictable, fast implementations. This level typically shows ROI within 6 months and pays dividends for years.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.p26fac1f0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 10">
            <path d={svgPaths.p1f5e580} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg85() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame25 />
    </div>
  );
}

function SvgMargin74() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg85 />
    </div>
  );
}

function Heading31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <SvgMargin74 />
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Replatforming Alignment</p>
      </div>
    </div>
  );
}

function OverlayBorder14() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[14px] self-stretch" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[24px] relative size-full">
          <Heading31 />
          <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[16px] w-full">
            <p className="css-4hzbpn leading-[26px]">Represents the full maturation of your design system investment. While not essential for initial replatforming success, this level transforms complex feature development from high-risk, high-timeline projects into predictable, fast implementations that differentiate your platform in the market.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <OverlayBorder13 />
      <OverlayBorder14 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.p26fac1f0} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 10">
            <path d={svgPaths.p1f5e580} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg86() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame26 />
    </div>
  );
}

function SvgMargin75() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg86 />
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Expected ROI</p>
      </div>
    </div>
  );
}

function Heading32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <SvgMargin75 />
      <Container129 />
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[32px] not-italic relative shrink-0 text-[#00a63e] text-[24px] w-full">
        <p className="css-4hzbpn mb-0">60-80 hours per developer per</p>
        <p className="css-4hzbpn mb-0">month on complex feature</p>
        <p className="css-4hzbpn">development</p>
      </div>
    </div>
  );
}

function Margin25() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container130 />
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] w-full">
        <p className="css-4hzbpn leading-[20px]">Time Savings</p>
      </div>
    </div>
  );
}

function OverlayBorder15() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] content-stretch flex flex-col gap-[24px] items-start p-[17px] relative rounded-[14px] self-stretch shrink-0 w-[393.33px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Margin25 />
      <Container131 />
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[32px] not-italic relative shrink-0 text-[#155dfc] text-[24px] w-full">
        <p className="css-4hzbpn mb-0">80% reduction in complex</p>
        <p className="css-4hzbpn mb-0">component bugs and performance</p>
        <p className="css-4hzbpn">issues</p>
      </div>
    </div>
  );
}

function Margin26() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container132 />
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] w-full">
        <p className="css-4hzbpn leading-[20px]">Cost Reduction</p>
      </div>
    </div>
  );
}

function OverlayBorder16() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] content-stretch flex flex-col gap-[24px] items-start p-[17px] relative rounded-[14px] self-stretch shrink-0 w-[393.34px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Margin26 />
      <Container133 />
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[32px] not-italic relative shrink-0 text-[#9810fa] text-[24px] w-full">
        <p className="css-4hzbpn mb-0">75% improvement in user</p>
        <p className="css-4hzbpn mb-0">satisfaction with complex</p>
        <p className="css-4hzbpn">workflows</p>
      </div>
    </div>
  );
}

function Margin27() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container134 />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] w-full">
        <p className="css-4hzbpn leading-[20px]">Quality Improvement</p>
      </div>
    </div>
  );
}

function OverlayBorder17() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] content-stretch flex flex-col gap-[24px] items-start p-[17px] relative rounded-[14px] self-stretch shrink-0 w-[393.34px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Margin27 />
      <Container135 />
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <OverlayBorder15 />
      <OverlayBorder16 />
      <OverlayBorder17 />
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading32 />
      <Container136 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.p26fac1f0} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 10">
            <path d={svgPaths.p1f5e580} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg87() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame27 />
    </div>
  );
}

function SvgMargin76() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg87 />
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Expected ROI</p>
      </div>
    </div>
  );
}

function Heading33() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Heading 3">
      <SvgMargin76 />
      <Container138 />
    </div>
  );
}

function OverlayBorder18() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center p-[17px] relative rounded-[14px] self-stretch shrink-0 w-[393.33px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center w-[min-content]">
        <p className="css-4hzbpn leading-[20px]">Time Savings</p>
      </div>
      <div className="flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7fbc42] text-[24px] text-center w-[325px]">
        <p className="css-4hzbpn leading-[32px]">60-80 hours per developer per month on complex feature development</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#364153] text-[12px] text-center w-[min-content]">
        <p className="css-4hzbpn leading-[15px]">{`GitHub Primer Design System (2023): "Advanced component library reduced complex feature development time by 78%, saving 65+ hours monthly per developer"`}</p>
      </div>
    </div>
  );
}

function OverlayBorder19() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[17px] relative rounded-[14px] self-stretch shrink-0 w-[393.34px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center w-full">
        <p className="css-4hzbpn leading-[20px]">Cost Reduction</p>
      </div>
      <div className="flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#05a8e1] text-[24px] text-center w-full">
        <p className="css-4hzbpn leading-[32px]">80% reduction in complex component bugs and performance issues</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[12px] text-center w-full">
        <p className="css-4hzbpn leading-[15px]">{`Spotify Encore Design System (2022): "Sophisticated reusable components decreased complex interaction bugs by 83% and performance issues by 76%"`}</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f48420] text-[24px] text-center w-full">
        <p className="css-4hzbpn leading-[32px]">75% improvement in user satisfaction with complex workflows</p>
      </div>
    </div>
  );
}

function OverlayBorder20() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[17px] relative rounded-[14px] self-stretch shrink-0 w-[393.34px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-center w-full">
        <p className="css-4hzbpn leading-[20px]">Quality Improvement</p>
      </div>
      <Container139 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[12px] text-center w-full">
        <p className="css-4hzbpn leading-[15px]">{`Slack Design System (2023): "Advanced component patterns improved user satisfaction with complex workflows from 54% to 81% based on user research studies"`}</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <OverlayBorder18 />
      <OverlayBorder19 />
      <OverlayBorder20 />
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading33 />
      <Container140 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 6.66667">
            <path d={svgPaths.p6877e0} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.92%_-33.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.1637 8.1204">
            <path d={svgPaths.p2cf69e00} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16687 6.55854">
            <path d={svgPaths.p39df7200} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 8.33333">
            <path d={svgPaths.p3ffa2780} id="Vector" stroke="var(--stroke-0, #162E54)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg88() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame28 />
    </div>
  );
}

function SvgMargin77() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg88 />
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Team Impact</p>
      </div>
    </div>
  );
}

function Heading34() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Heading 4">
      <SvgMargin77 />
      <Container142 />
    </div>
  );
}

function Heading35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Developers</p>
      </div>
    </div>
  );
}

function Svg89() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin78() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg89 />
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[35.7px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Complex functionality implemented through simple</p>
        <p className="css-ew64yg">component APIs</p>
      </div>
    </div>
  );
}

function Item64() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin78 />
      <Container143 />
    </div>
  );
}

function Svg90() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin79() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg90 />
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[3.09px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Performance optimizations (virtualization, memoization)</p>
        <p className="css-ew64yg">handled automatically</p>
      </div>
    </div>
  );
}

function Item65() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin79 />
      <Container144 />
    </div>
  );
}

function Svg91() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin80() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg91 />
    </div>
  );
}

function Container145() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[61.63px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Comprehensive accessibility features eliminate</p>
        <p className="css-ew64yg">compliance concerns</p>
      </div>
    </div>
  );
}

function Item66() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin80 />
      <Container145 />
    </div>
  );
}

function Svg92() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin81() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg92 />
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[11px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Extensive testing coverage reduces bug risk for critical</p>
        <p className="css-ew64yg">user flows</p>
      </div>
    </div>
  );
}

function Item67() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin81 />
      <Container146 />
    </div>
  );
}

function List12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item64 />
      <Item65 />
      <Item66 />
      <Item67 />
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading35 />
      <List12 />
    </div>
  );
}

function Heading36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Designers</p>
      </div>
    </div>
  );
}

function Svg93() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin82() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg93 />
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[63.91px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Focus on user workflows instead of interaction</p>
        <p className="css-ew64yg">implementation details</p>
      </div>
    </div>
  );
}

function Item68() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin82 />
      <Container148 />
    </div>
  );
}

function Svg94() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin83() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg94 />
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[15.3px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Consistent behavior patterns improve user experience</p>
        <p className="css-ew64yg">design</p>
      </div>
    </div>
  );
}

function Item69() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin83 />
      <Container149 />
    </div>
  );
}

function Svg95() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin84() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg95 />
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[45.76px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Advanced prototyping capabilities with functional</p>
        <p className="css-ew64yg">components</p>
      </div>
    </div>
  );
}

function Item70() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin84 />
      <Container150 />
    </div>
  );
}

function Svg96() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin85() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg96 />
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[44.92px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">User testing reveals workflow insights rather than</p>
        <p className="css-ew64yg">interaction bugs</p>
      </div>
    </div>
  );
}

function Item71() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin85 />
      <Container151 />
    </div>
  );
}

function List13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item68 />
      <Item69 />
      <Item70 />
      <Item71 />
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading36 />
      <List13 />
    </div>
  );
}

function Heading37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Product Managers</p>
      </div>
    </div>
  );
}

function Svg97() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin86() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg97 />
    </div>
  );
}

function Item72() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin86 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Complex features launch faster and with higher quality</p>
      </div>
    </div>
  );
}

function Svg98() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin87() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg98 />
    </div>
  );
}

function Container153() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32.75px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">User adoption increases due to familiar, well-tested</p>
        <p className="css-ew64yg">interactions</p>
      </div>
    </div>
  );
}

function Item73() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin87 />
      <Container153 />
    </div>
  );
}

function Svg99() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin88() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg99 />
    </div>
  );
}

function Container154() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[44.07px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Reduced technical debt as advanced patterns are</p>
        <p className="css-ew64yg">centrally maintained</p>
      </div>
    </div>
  );
}

function Item74() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin88 />
      <Container154 />
    </div>
  );
}

function Svg100() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin89() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg100 />
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[46.16px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg mb-0">Competitive advantage through sophisticated yet</p>
        <p className="css-ew64yg">consistent user experience</p>
      </div>
    </div>
  );
}

function Item75() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin89 />
      <Container155 />
    </div>
  );
}

function List14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item72 />
      <Item73 />
      <Item74 />
      <Item75 />
    </div>
  );
}

function Container156() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading37 />
      <List14 />
    </div>
  );
}

function Container157() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container147 />
      <Container152 />
      <Container156 />
    </div>
  );
}

function Container158() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading34 />
      <Container157 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[8.32%_8.32%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3368 18.3372">
            <path d={svgPaths.p2c4d7f80} id="Vector" stroke="var(--stroke-0, #125C32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg101() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame29 />
    </div>
  );
}

function SvgMargin90() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg101 />
    </div>
  );
}

function Container159() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Guardian_TextEgyp:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[18px]">
        <p className="css-ew64yg leading-[28px]">Implementation Details</p>
      </div>
    </div>
  );
}

function Heading38() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Heading 4">
      <SvgMargin90 />
      <Container159 />
    </div>
  );
}

function Heading39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Technical Steps</p>
      </div>
    </div>
  );
}

function Background19() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">1</p>
      </div>
    </div>
  );
}

function Margin28() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background19 />
    </div>
  );
}

function Item76() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <Margin28 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Identify complex interaction patterns across current and planned features</p>
      </div>
    </div>
  );
}

function Background20() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">2</p>
      </div>
    </div>
  );
}

function Margin29() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background20 />
    </div>
  );
}

function Item77() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <Margin29 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Design component APIs that balance flexibility with consistency</p>
      </div>
    </div>
  );
}

function Background21() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">3</p>
      </div>
    </div>
  );
}

function Margin30() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background21 />
    </div>
  );
}

function Item78() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <Margin30 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Implement performance optimizations (virtualization, debouncing, memoization)</p>
      </div>
    </div>
  );
}

function Background22() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">4</p>
      </div>
    </div>
  );
}

function Margin31() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background22 />
    </div>
  );
}

function Item79() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <Margin31 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Build comprehensive accessibility features for complex interactions</p>
      </div>
    </div>
  );
}

function Background23() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">5</p>
      </div>
    </div>
  );
}

function Margin32() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background23 />
    </div>
  );
}

function Item80() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <Margin32 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Create extensive testing suite including edge cases and error scenarios</p>
      </div>
    </div>
  );
}

function Background24() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">6</p>
      </div>
    </div>
  );
}

function Margin33() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start pr-[12px] pt-[2px] relative shrink-0 w-[36px]" data-name="Margin">
      <Background24 />
    </div>
  );
}

function Item81() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <Margin33 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Document advanced usage patterns and customization options</p>
      </div>
    </div>
  );
}

function OrderedList3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Ordered List">
      <Item76 />
      <Item77 />
      <Item78 />
      <Item79 />
      <Item80 />
      <Item81 />
    </div>
  );
}

function Container160() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading39 />
      <OrderedList3 />
    </div>
  );
}

function Heading40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] w-full">
        <p className="css-4hzbpn leading-[24px]">Key Deliverables</p>
      </div>
    </div>
  );
}

function Svg102() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin91() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg102 />
    </div>
  );
}

function Item82() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin91 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Data table component with advanced features (sorting, filtering, virtual scrolling)</p>
      </div>
    </div>
  );
}

function Svg103() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin92() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg103 />
    </div>
  );
}

function Item83() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin92 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Multi-step form system with validation, progress tracking, and state management</p>
      </div>
    </div>
  );
}

function Svg104() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin93() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg104 />
    </div>
  );
}

function Item84() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin93 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Rich text editor with collaborative features and content validation</p>
      </div>
    </div>
  );
}

function Svg105() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin94() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg105 />
    </div>
  );
}

function Item85() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin94 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Dashboard widget framework with real-time data binding</p>
      </div>
    </div>
  );
}

function Svg106() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p34e03900} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin95() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pr-[8px] pt-[2px] relative shrink-0 w-[24px]" data-name="SVG:margin">
      <Svg106 />
    </div>
  );
}

function Item86() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <SvgMargin95 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#364153] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Advanced search component with filtering and result management</p>
      </div>
    </div>
  );
}

function List15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item82 />
      <Item83 />
      <Item84 />
      <Item85 />
      <Item86 />
    </div>
  );
}

function Container161() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading40 />
      <List15 />
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container160 />
      <Container161 />
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading38 />
      <Container162 />
    </div>
  );
}

function Container164() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
        <Container128 />
        <div className="bg-[rgba(0,0,0,0.1)] h-px shrink-0 w-full" data-name="Horizontal Divider" />
        <Container137 />
        <Container141 />
        <div className="bg-[rgba(0,0,0,0.1)] h-px shrink-0 w-full" data-name="Horizontal Divider" />
        <Container158 />
        <div className="bg-[rgba(0,0,0,0.1)] h-px shrink-0 w-full" data-name="Horizontal Divider" />
        <Container163 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col gap-[24px] items-start p-[2px] relative rounded-[14px] shrink-0 w-[1280px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-[#ffd6a7] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <HorizontalBorder3 />
      <Container164 />
    </div>
  );
}

function Container165() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Container83 />
      <Container121 />
      <BackgroundBorder3 />
    </div>
  );
}

function Container166() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container8 />
      <Container165 />
    </div>
  );
}

export default function DesignSystemImplementationLevels() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start p-[80px] relative size-full" data-name="Design System Implementation Levels">
      <Container166 />
    </div>
  );
}