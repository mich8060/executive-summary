import { motion } from 'motion/react';
import { CHGLogo } from '@/app/components/CHGLogo';
import { ThemeBar } from '@/app/components/ThemeBar';
import { Link2, CheckCircle2, BarChart3 } from 'lucide-react';

export function CredibilitySlide4() {
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl"
          >
            <h2 className="font-inter font-bold text-7xl mb-8 text-black tracking-tight leading-tight">
              We Created
              <span className="block text-[#7FBD4D] mt-2">Cross-Org Alignment</span>
            </h2>

            <p className="font-inter text-3xl text-gray-600 mb-12 tracking-tight">
              Broke down silos. Built bridges. Made everyone speak the same language.
            </p>

            {/* Three Alignments */}
            <div className="space-y-6 mb-10">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white border-2 border-[#1BA5DE] rounded-2xl p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-[#1BA5DE]/10 flex items-center justify-center flex-shrink-0">
                    <Link2 className="w-8 h-8 text-[#1BA5DE]" />
                  </div>
                  <div>
                    <h3 className="font-inter font-bold text-3xl mb-3 flex items-center gap-3 text-black">
                      Design ↔ Engineering
                    </h3>
                    <p className="font-inter text-xl text-gray-700 leading-relaxed">
                      Shared tokens and definitions eliminated translation loss between teams
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white border-2 border-[#7FBD4D] rounded-2xl p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-[#7FBD4D]/10 flex items-center justify-center flex-shrink-0">
                    <Link2 className="w-8 h-8 text-[#7FBD4D]" />
                  </div>
                  <div>
                    <h3 className="font-inter font-bold text-3xl mb-3 flex items-center gap-3 text-black">
                      Marketing ↔ Product
                    </h3>
                    <p className="font-inter text-xl text-gray-700 leading-relaxed">
                      Brand-safe components let both teams move fast without compromising consistency
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white border-2 border-[#FE8C31] rounded-2xl p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-[#FE8C31]/10 flex items-center justify-center flex-shrink-0">
                    <Link2 className="w-8 h-8 text-[#FE8C31]" />
                  </div>
                  <div>
                    <h3 className="font-inter font-bold text-3xl mb-3 flex items-center gap-3 text-black">
                      Leadership ↔ Delivery
                    </h3>
                    <p className="font-inter text-xl text-gray-700 leading-relaxed">
                      Clear artifacts and narratives connected strategy to execution
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center gap-4 font-inter text-2xl text-gray-700"
            >
              <CheckCircle2 className="w-8 h-8 text-[#7FBD4D]" />
              <span>Misalignment = hidden costs. <span className="text-black font-bold">We eliminated them.</span></span>
            </motion.div>

            {/* Bottom Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-12 bg-gray-50 border-2 border-gray-200 rounded-2xl p-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-12">
                  <div>
                    <div className="font-inter text-4xl font-bold text-[#7FBD4D]">Quality</div>
                    <div className="font-inter text-sm text-gray-600">Now Measurable</div>
                  </div>
                  <div className="w-px h-12 bg-gray-300"></div>
                  <div>
                    <div className="font-inter text-4xl font-bold text-[#1BA5DE]">Standards</div>
                    <div className="font-inter text-sm text-gray-600">Not Just Opinion</div>
                  </div>
                  <div className="w-px h-12 bg-gray-300"></div>
                  <div>
                    <div className="font-inter text-4xl font-bold text-[#FE8C31]">System-Driven</div>
                    <div className="font-inter text-sm text-gray-600">Not Taste-Driven</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-8 h-8 text-[#7FBD4D]" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom - ThemeBar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <ThemeBar />
        </motion.div>
      </div>
    </div>
  );
}