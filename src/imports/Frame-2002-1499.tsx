import svgPaths from "./svg-dz504x9ew";
import { motion } from 'motion/react';
import { ImageWithFallback } from '../app/components/figma/ImageWithFallback';

function ChgLogoHK() {
  return (
    <div className="absolute h-[35px] left-[1648px] top-[1005px] w-[222px]" data-name="CHG_Logo_H_k 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 222 35">
        <g clipPath="url(#clip0_2001_443)" id="CHG_Logo_H_k 1">
          <path d={svgPaths.p3c0de280} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector" />
          <path d={svgPaths.p19aa8a80} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_2" />
          <path d={svgPaths.p214d0370} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_3" />
          <path d={svgPaths.p20ed8e00} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_4" />
          <path d={svgPaths.p359f6db0} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_5" />
          <path d={svgPaths.p36da04e0} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_6" />
          <path d={svgPaths.pd9f7d00} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_7" />
          <path d={svgPaths.p2867b600} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_8" />
          <path d={svgPaths.p15e77400} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_9" />
          <path d={svgPaths.p8e2d580} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_10" />
          <path d={svgPaths.p3ec89680} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_11" />
          <path d={svgPaths.pdf70780} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_12" />
          <path d={svgPaths.p168f8500} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_13" />
          <path d={svgPaths.pa3cb100} fill="var(--fill-0, #231F20)" fillOpacity="0.3" id="Vector_14" />
        </g>
        <defs>
          <clipPath id="clip0_2001_443">
            <rect fill="white" height="35" width="222" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ThemeBar() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center left-1/2 top-[1040px]" data-name="Theme bar">
      <div className="bg-[#f5821f] h-[40px] rounded-tl-[12px] shrink-0 w-[288px]" data-name="Theme rectangle" />
      <div className="bg-[#81be41] h-[40px] shrink-0 w-[288px]" data-name="Theme rectangle" />
      <div className="bg-[#00a7e1] h-[40px] rounded-tr-[12px] shrink-0 w-[288px]" data-name="Theme rectangle" />
    </div>
  );
}

function ScreenshotGallery() {
  const screenshots = [
    {
      url: "https://images.unsplash.com/photo-1735399976112-17508533c97a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHVpJTIwaW50ZXJmYWNlJTIwc2NyZWVuc2hvdHxlbnwxfHx8fDE3NzM2NzE4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      label: "Document Dashboard",
      description: "Overview and navigation"
    },
    {
      url: "https://images.unsplash.com/photo-1759297044036-19a0256fade2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBzY3JlZW4lMjBtb2NrdXAlMjBmbGF0fGVufDF8fHx8MTc3MzY3MTgwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      label: "File Management",
      description: "List and organize"
    },
    {
      url: "https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc3MzU4MjYzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      label: "Document Preview",
      description: "Quick view and edit"
    },
    {
      url: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMHVpfGVufDF8fHx8MTc3MzY3MTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      label: "Collaboration View",
      description: "Share and comment"
    }
  ];

  return (
    <div className="absolute left-[109px] top-[180px] right-[109px] bottom-[160px] flex gap-12">
      {/* Left side - Screenshots Grid */}
      <div className="flex-1 grid grid-cols-2 gap-4">
        {screenshots.map((screenshot, index) => (
          <motion.div
            key={index}
            className="relative bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200"
            style={{ aspectRatio: '16/9' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <ImageWithFallback
              src={screenshot.url}
              alt={screenshot.label}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Right side - Content */}
      <motion.div 
        className="flex-1 flex flex-col justify-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="font-['Inter:Bold',sans-serif] text-sm tracking-wider mb-3" style={{ color: '#1BA5DE' }}>
          PROOF OF CONCEPT
        </div>
        <h2 className="font-['Inter:Bold',sans-serif] font-bold text-5xl mb-6 leading-tight">
          Building the Documents experiment
        </h2>
        <p className="font-['Inter:Regular',sans-serif] text-lg leading-relaxed mb-4 text-gray-700">
          We partnered with engineering to prototype a full document management interface using components from our Figma design system. The experiment validated our end-to-end workflow and demonstrated real-world applicability.
        </p>
        <p className="font-['Inter:Regular',sans-serif] text-lg leading-relaxed text-gray-700">
          "By leveraging pre-built design system components, we reduced development time by 50% while maintaining visual consistency and brand standards across every screen. This proof point shows what's possible when design and code work from a single source of truth."
        </p>
      </motion.div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full" data-name="Frame">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[72px] left-[109px] not-italic text-[64px] text-black top-[65px] tracking-[-1.2px] w-[1264px]">Documents</p>
      <ScreenshotGallery />
      <ChgLogoHK />
      <ThemeBar />
    </div>
  );
}