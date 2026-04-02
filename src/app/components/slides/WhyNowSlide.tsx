import { motion } from 'motion/react';
import { Clock, TrendingUp, Zap, Target } from 'lucide-react';

export function WhyNowSlide() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      <div className="relative z-10 h-full flex items-center justify-center px-16 py-12">
        <div className="max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-[#FE8C31]/10 border border-[#FE8C31] px-6 py-3 rounded-full mb-8">
              <Clock className="w-6 h-6 text-[#FE8C31]" />
              <span className="text-lg font-semibold text-[#FE8C31]">Timing</span>
            </div>

            <h2 className="text-8xl font-black mb-6 leading-tight text-gray-900">
              Why
              <span className="block text-[#FE8C31] mt-4">Now?</span>
            </h2>
            <p className="text-3xl text-gray-600 max-w-4xl mx-auto">
              Three converging forces make this the perfect moment
            </p>
          </motion.div>

          {/* Three Forces */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            {/* Force 1: AI Revolution */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border-2 border-[#1BA5DE] rounded-3xl p-8 shadow-lg"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#1BA5DE] flex items-center justify-center mb-6 mx-auto">
                <Zap className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-3xl font-black mb-4 text-[#1BA5DE] text-center">AI Is Here</h3>
              <p className="text-lg text-gray-600 mb-6 text-center">
                Design systems are becoming AI training data
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1BA5DE] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-gray-600">AI tools need structured component libraries</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1BA5DE] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-gray-600">Companies with DS will move 10x faster</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1BA5DE] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-gray-600">Without it, we fall behind permanently</p>
                </div>
              </div>
            </motion.div>

            {/* Force 2: Market Pressure */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white border-2 border-[#7FBD4D] rounded-3xl p-8 shadow-lg"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#7FBD4D] flex items-center justify-center mb-6 mx-auto">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-3xl font-black mb-4 text-[#7FBD4D] text-center">Competitors Moving</h3>
              <p className="text-lg text-gray-600 mb-6 text-center">
                Industry leaders are pulling ahead
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#7FBD4D] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-gray-600">Top healthcare orgs invested 2-3 years ago</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#7FBD4D] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-gray-600">They're shipping features 40% faster</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#7FBD4D] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-gray-600">Gap widens every quarter we wait</p>
                </div>
              </div>
            </motion.div>

            {/* Force 3: Internal Readiness */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white border-2 border-[#FE8C31] rounded-3xl p-8 shadow-lg"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#FE8C31] flex items-center justify-center mb-6 mx-auto">
                <Target className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-3xl font-black mb-4 text-[#FE8C31] text-center">We're Ready</h3>
              <p className="text-lg text-gray-600 mb-6 text-center">
                Foundation is already in place
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FE8C31] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-gray-600">Design patterns documented</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FE8C31] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-gray-600">Teams asking for components</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FE8C31] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base text-gray-600">Business case validated</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Call Out */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-gradient-to-r from-[#FE8C31]/10 to-[#1BA5DE]/10 border-2 border-[#FE8C31] rounded-3xl p-10 text-center"
          >
            <p className="text-4xl text-gray-900 font-bold mb-4">
              The window is open, but it won't stay open forever
            </p>
            <p className="text-2xl text-gray-600">
              Every quarter we delay = <span className="text-[#FE8C31] font-black">$1M+</span> left on the table + wider competitive gap
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
