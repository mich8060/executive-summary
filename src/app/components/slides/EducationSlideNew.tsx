import { motion } from 'motion/react';
import { GraduationCap, Zap, Users } from 'lucide-react';

export function EducationSlideNew() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-16 py-12">
        <div className="max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-[#1BA5DE]/10 border border-[#1BA5DE] px-6 py-3 rounded-full mb-8">
              <GraduationCap className="w-6 h-6 text-[#1BA5DE]" />
              <span className="text-lg font-semibold text-[#1BA5DE]">Team Enablement</span>
            </div>

            <h2 className="text-8xl font-black mb-6 leading-tight text-gray-900">
              Your Teams Will
              <span className="block text-[#1BA5DE] mt-4">Love Using This</span>
            </h2>
            <p className="text-3xl text-gray-600 max-w-4xl mx-auto">
              From onboarding to mastery—we make adoption effortless
            </p>
          </motion.div>

          {/* Three Tiers */}
          <div className="grid grid-cols-3 gap-8">
            {/* Quick Start */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border-2 border-[#7FBD4D] rounded-3xl p-8 shadow-lg"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#7FBD4D] flex items-center justify-center mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-4xl font-black mb-4 text-[#7FBD4D]">Quick Start</h3>
              <p className="text-xl text-gray-600 mb-8">For new teams getting started</p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#7FBD4D] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-600">15-minute video walkthrough</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#7FBD4D] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-600">"First Component" tutorial</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#7FBD4D] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-600">Live Slack support channel</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#7FBD4D]">
                <div className="text-lg font-semibold text-[#7FBD4D]">Goal: Ship in 1 Sprint</div>
              </div>
            </motion.div>

            {/* Deep Dive */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white border-2 border-[#1BA5DE] rounded-3xl p-8 shadow-lg"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#1BA5DE] flex items-center justify-center mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-4xl font-black mb-4 text-[#1BA5DE]">Deep Dive</h3>
              <p className="text-xl text-gray-600 mb-8">For active users leveling up</p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1BA5DE] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-600">Component deep-dives</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1BA5DE] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-600">Pattern library training</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1BA5DE] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-600">Best practices workshops</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#1BA5DE]">
                <div className="text-lg font-semibold text-[#1BA5DE]">Goal: Build Anything Faster</div>
              </div>
            </motion.div>

            {/* Champions */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white border-2 border-[#FE8C31] rounded-3xl p-8 shadow-lg"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#FE8C31] flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-4xl font-black mb-4 text-[#FE8C31]">Champions</h3>
              <p className="text-xl text-gray-600 mb-8">For power users leading change</p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FE8C31] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-600">Contribution guidelines</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FE8C31] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-600">Advanced customization</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FE8C31] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-600">DS governance role</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#FE8C31]">
                <div className="text-lg font-semibold text-[#FE8C31]">Goal: Self-Sustaining System</div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-16 text-center"
          >
            <p className="text-4xl text-gray-900 font-semibold">
              We'll make your teams <span className="text-[#1BA5DE] font-black">design system experts</span>
            </p>
            <p className="text-2xl text-gray-600 mt-4">Average onboarding time: 2 hours</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}