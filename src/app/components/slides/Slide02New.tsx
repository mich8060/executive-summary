import { motion } from 'motion/react';
import { DollarSign, Rocket } from 'lucide-react';

export function Slide02New() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-16 py-12">
        <div className="max-w-6xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-[#7FBD4D]/10 border border-[#7FBD4D] px-6 py-3 rounded-full mb-8">
              <Rocket className="w-6 h-6 text-[#7FBD4D]" />
              <span className="text-lg font-semibold text-[#7FBD4D]">The Full Opportunity</span>
            </div>

            <h2 className="text-8xl font-black mb-8 leading-none text-gray-900">
              Your Design System
              <span className="block mt-4 text-[#7FBD4D]">
                Could Be Worth
              </span>
            </h2>

            {/* Massive Number */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="my-16"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-[#7FBD4D] blur-[100px] opacity-20"></div>
                <h1 className="relative text-[180px] font-black leading-none text-[#7FBD4D]">
                  $5.8M
                </h1>
              </div>
              <p className="text-4xl text-gray-600 mt-6">Annually. Forever.</p>
            </motion.div>

            {/* Value Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              <div className="bg-white border-2 border-[#1BA5DE] rounded-3xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-[#1BA5DE] flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-black text-[#1BA5DE] mb-4">$3.2M</div>
                <div className="text-xl text-gray-900 mb-2 font-semibold">Engineering Time</div>
                <p className="text-base text-gray-600">Reusable components = faster builds</p>
              </div>

              <div className="bg-white border-2 border-[#FE8C31] rounded-3xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-[#FE8C31] flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-black text-[#FE8C31] mb-4">$1.8M</div>
                <div className="text-xl text-gray-900 mb-2 font-semibold">Design Efficiency</div>
                <p className="text-base text-gray-600">Designers focus on innovation, not repetition</p>
              </div>

              <div className="bg-white border-2 border-[#7FBD4D] rounded-3xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-[#7FBD4D] flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-black text-[#7FBD4D] mb-4">$800K</div>
                <div className="text-xl text-gray-900 mb-2 font-semibold">Quality Gains</div>
                <p className="text-base text-gray-600">Less bugs, fewer iterations, happier users</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}