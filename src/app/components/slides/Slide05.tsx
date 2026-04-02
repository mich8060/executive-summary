import { motion } from 'motion/react';
import { CHGLogo } from '@/app/components/CHGLogo';
import { ThemeBar } from '@/app/components/ThemeBar';
import { Sparkles, Code, Zap } from 'lucide-react';

export function Slide05() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      <div className="relative z-10 h-full flex flex-col justify-between px-20 py-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <CHGLogo />
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-6xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10 text-center"
            >
              <h2 className="font-inter font-bold text-6xl mb-4 text-black tracking-tight">
                AI Will Multiply
                <span className="block text-[#1BA5DE] mt-2">The Opportunity</span>
              </h2>
              <p className="font-inter text-2xl text-gray-600 tracking-tight">
                How Figma + AI integration will amplify what we've built
              </p>
            </motion.div>

            {/* Main concept */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-[#1BA5DE]/10 to-[#7FBD4D]/10 border-2 border-[#1BA5DE] rounded-2xl p-8 mb-8 text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <Sparkles className="w-10 h-10 text-[#1BA5DE]" />
                <div className="font-inter font-bold text-3xl text-black">The Catalyst: Figma + AI Integration</div>
              </div>
              <div className="font-inter text-xl text-gray-700 leading-relaxed">
                AI can now read and use design systems to generate production-quality work
              </div>
            </motion.div>

            {/* Three technologies */}
            <div className="grid grid-cols-3 gap-5 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white border-2 border-[#1BA5DE] rounded-2xl p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-[#1BA5DE]/10 flex items-center justify-center mb-4">
                  <Code className="w-7 h-7 text-[#1BA5DE]" />
                </div>
                <h3 className="font-inter font-bold text-xl mb-3 text-[#1BA5DE]">MCP Servers</h3>
                <div className="font-inter text-sm text-gray-700 leading-relaxed space-y-1">
                  <p>• AI accesses design system context from Figma</p>
                  <p>• Generates accurate, up-to-date code</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white border-2 border-[#7FBD4D] rounded-2xl p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-[#7FBD4D]/10 flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-[#7FBD4D]" />
                </div>
                <h3 className="font-inter font-bold text-xl mb-3 text-[#7FBD4D]">Code Connect UI</h3>
                <div className="font-inter text-sm text-gray-700 leading-relaxed space-y-1">
                  <p>• Auto-links Figma components to production code</p>
                  <p>• Reduces setup time and accelerates delivery</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white border-2 border-[#FE8C31] rounded-2xl p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-[#FE8C31]/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-7 h-7 text-[#FE8C31]" />
                </div>
                <h3 className="font-inter font-bold text-xl mb-3 text-[#FE8C31]">Figma Make Kits</h3>
                <div className="font-inter text-sm text-gray-700 leading-relaxed space-y-1">
                  <p>• Converts DS into code-ready assets</p>
                  <p>• AI generates higher-fidelity applications</p>
                </div>
              </motion.div>
            </div>

            {/* Critical point */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-[#FE8C31]/10 border-2 border-[#FE8C31] rounded-2xl p-6"
            >
              <div className="font-inter font-bold text-xl mb-3 text-[#FE8C31] text-center">Critical Point: AI Won't Replace UX</div>
              <div className="font-inter text-base text-gray-700 leading-relaxed text-center">
                AI acceleration maximizes efficiency and ensures we deliver the right solutions—but it doesn't eliminate the need for equal UX representation across MVT squads. <span className="text-[#FE8C31] font-semibold">The squad model should include Product, UX, and Engineering, with UX Research support.</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom - ThemeBar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <ThemeBar />
        </motion.div>
      </div>
    </div>
  );
}