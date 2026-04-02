import { motion } from 'motion/react';
import { CHGLogo } from '@/app/components/CHGLogo';
import { ThemeBar } from '@/app/components/ThemeBar';
import { CheckCircle2, TrendingUp, Zap } from 'lucide-react';

export function Slide04New() {
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
            className="max-w-5xl text-center"
          >
            <div className="inline-flex items-center gap-3 bg-[#1BA5DE]/10 border-2 border-[#1BA5DE] px-6 py-3 rounded-full mb-8">
              <CheckCircle2 className="w-6 h-6 text-[#1BA5DE]" />
              <span className="font-inter text-lg font-semibold text-[#1BA5DE]">Evidence-Based Opportunity</span>
            </div>

            <h2 className="font-inter font-bold text-7xl mb-6 text-black tracking-tight leading-tight">
              We Can Prove
              <span className="block text-[#1BA5DE] mt-4" style={{ fontFeatureSettings: "'salt', 'ss03', 'ss04', 'cv01', 'cv02', 'lnum', 'pnum'" }}>$4.98 Million in Value</span>
            </h2>

            <p className="font-inter text-3xl text-gray-600 mb-12 max-w-4xl mx-auto tracking-tight">
              We've modeled the opportunity using industry benchmarks and our organizational context. Here's what full adoption could unlock.
            </p>

            {/* Value Proof Points */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white border-2 border-[#1BA5DE] rounded-2xl p-8"
              >
                <div className="w-16 h-16 rounded-xl bg-[#1BA5DE]/10 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-[#1BA5DE]" />
                </div>
                <h3 className="font-inter font-bold text-4xl mb-2 text-[#1BA5DE]" style={{ fontFeatureSettings: "'salt', 'ss03', 'ss04', 'cv01', 'cv02', 'lnum', 'pnum'" }}>30-40%</h3>
                <h4 className="font-inter font-semibold text-xl mb-2 text-black">Faster Delivery</h4>
                <p className="font-inter text-base text-gray-600">Industry benchmark for mature design system adoption</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white border-2 border-[#FE8C31] rounded-2xl p-8"
              >
                <div className="w-16 h-16 rounded-xl bg-[#FE8C31]/10 flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-[#FE8C31]" />
                </div>
                <h3 className="font-inter font-bold text-4xl mb-2 text-[#FE8C31]" style={{ fontFeatureSettings: "'salt', 'ss03', 'ss04', 'cv01', 'cv02', 'lnum', 'pnum'" }}>50-60%</h3>
                <h4 className="font-inter font-semibold text-xl mb-2 text-black">Less Rework</h4>
                <p className="font-inter text-base text-gray-600">Reduced design debt and consistency fixes</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white border-2 border-[#7FBD4D] rounded-2xl p-8"
              >
                <div className="w-16 h-16 rounded-xl bg-[#7FBD4D]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#7FBD4D]" />
                </div>
                <h3 className="font-inter font-bold text-4xl mb-2 text-[#7FBD4D]" style={{ fontFeatureSettings: "'salt', 'ss03', 'ss04', 'cv01', 'cv02', 'lnum', 'pnum'" }}>~80%</h3>
                <h4 className="font-inter font-semibold text-xl mb-2 text-black">Team Coverage</h4>
                <p className="font-inter text-base text-gray-600">Of product teams that could benefit from the system</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8"
            >
              <p className="font-inter text-3xl text-black font-medium italic tracking-tight">
                "The infrastructure exists. The behavioral change is happening. <span className="text-[#1BA5DE] font-bold">Now we need capacity to capture the full value.</span>"
              </p>
            </motion.div>
          </motion.div>
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