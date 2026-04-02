import { motion } from 'motion/react';
import { CHGLogo } from '@/app/components/CHGLogo';
import { ThemeBar } from '@/app/components/ThemeBar';
import { Zap, Clock, TrendingUp } from 'lucide-react';

export function CredibilitySlide2() {
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
            className="max-w-6xl"
          >
            <h2 className="font-inter font-bold text-7xl mb-6 text-black tracking-tight leading-tight text-center">
              We Removed
              <span className="block text-[#1BA5DE] mt-2">The Bottlenecks</span>
            </h2>

            <p className="font-inter text-4xl text-gray-600 mb-12 tracking-tight text-center">
              Teams stopped debating. Started shipping.
            </p>

            {/* Before/After Split */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white border-2 border-[#FE8C31] rounded-2xl p-8"
              >
                <div className="font-inter text-sm uppercase tracking-wider text-[#FE8C31] mb-6 font-semibold">Before</div>
                <div className="space-y-4 font-inter text-lg text-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#FE8C31] rounded-full"></div>
                    <span>Re-litigating colors & spacing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#FE8C31] rounded-full"></div>
                    <span>Engineers waiting for clarification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#FE8C31] rounded-full"></div>
                    <span>Late-stage rework</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white border-2 border-[#7FBD4D] rounded-2xl p-8"
              >
                <div className="font-inter text-sm uppercase tracking-wider text-[#7FBD4D] mb-6 font-semibold">After</div>
                <div className="space-y-4 font-inter text-lg text-black">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#7FBD4D] rounded-full"></div>
                    <span>Pre-decided standards</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#7FBD4D] rounded-full"></div>
                    <span>Designers solve real problems</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#7FBD4D] rounded-full"></div>
                    <span>Faster design-to-dev</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Impact Metrics */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-start gap-6"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#1BA5DE]/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-10 h-10 text-[#1BA5DE]" />
                </div>
                <div>
                  <h3 className="font-inter font-bold text-3xl mb-2 text-black">Increased Velocity</h3>
                  <p className="font-inter text-xl text-gray-600">Teams focus on customer problems, not styling debates</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex items-start gap-6"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#7FBD4D]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-10 h-10 text-[#7FBD4D]" />
                </div>
                <div>
                  <h3 className="font-inter font-bold text-3xl mb-2 text-black">Reduced Rework</h3>
                  <p className="font-inter text-xl text-gray-600">Fewer handoffs, higher confidence in what ships</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="flex items-start gap-6"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#FE8C31]/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-10 h-10 text-[#FE8C31]" />
                </div>
                <div>
                  <h3 className="font-inter font-bold text-3xl mb-2 text-black">Lower Cognitive Load</h3>
                  <p className="font-inter text-xl text-gray-600">Teams ship at speed with less mental overhead</p>
                </div>
              </motion.div>
            </div>
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