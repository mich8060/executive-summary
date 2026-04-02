import { motion } from 'motion/react';
import { BookOpen, Video, Users, Zap } from 'lucide-react';

export function EducationSlide1() {
  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-12">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-5xl font-bold mb-4">Scaling Through Education</h2>
          <p className="text-xl text-gray-400">From onboarding to mastery—enabling teams to succeed</p>
        </motion.div>

        {/* Three-tier education model */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-green-950/50 to-gray-900/50 border-2 border-green-600 rounded-2xl p-8"
          >
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4 text-green-400">Tier 1: Quick Start</h3>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm text-green-400 mb-2 font-semibold">For New Teams</div>
                    <div className="text-sm text-gray-400 leading-relaxed">
                      • 15-min video overview<br />
                      • "First Component" guide<br />
                      • Slack support channel
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-green-400 mb-2 font-semibold">Goal</div>
                    <div className="text-sm text-gray-400 leading-relaxed">
                      Ship first DS component within 1 sprint
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-green-400 mb-2 font-semibold">Outcome</div>
                    <div className="text-sm text-gray-400 leading-relaxed">
                      Teams unblocked and building confidence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-blue-950/50 to-gray-900/50 border-2 border-blue-600 rounded-2xl p-8"
          >
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4 text-blue-400">Tier 2: Deep Dive</h3>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm text-blue-400 mb-2 font-semibold">For Active Users</div>
                    <div className="text-sm text-gray-400 leading-relaxed">
                      • Component deep-dives<br />
                      • Pattern library training<br />
                      • Best practices workshops
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-blue-400 mb-2 font-semibold">Goal</div>
                    <div className="text-sm text-gray-400 leading-relaxed">
                      Build complex UIs efficiently and consistently
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-blue-400 mb-2 font-semibold">Outcome</div>
                    <div className="text-sm text-gray-400 leading-relaxed">
                      Teams shipping faster with higher quality
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-br from-purple-950/50 to-gray-900/50 border-2 border-purple-600 rounded-2xl p-8"
          >
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4 text-purple-400">Tier 3: Champions Program</h3>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm text-purple-400 mb-2 font-semibold">For Power Users</div>
                    <div className="text-sm text-gray-400 leading-relaxed">
                      • Contribution guidelines<br />
                      • Advanced customization<br />
                      • DS governance role
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-purple-400 mb-2 font-semibold">Goal</div>
                    <div className="text-sm text-gray-400 leading-relaxed">
                      Enable teams to contribute back to the system
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-purple-400 mb-2 font-semibold">Outcome</div>
                    <div className="text-sm text-gray-400 leading-relaxed">
                      Self-sustaining ecosystem with local advocates
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 bg-gradient-to-br from-indigo-950/50 to-gray-900/50 border border-indigo-700 rounded-2xl p-6"
        >
          <div className="grid grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-400 mb-2">100%</div>
              <div className="text-sm text-gray-400">Teams onboarded in Q1</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-400 mb-2">2 hrs</div>
              <div className="text-sm text-gray-400">Average onboarding time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-400 mb-2">50+</div>
              <div className="text-sm text-gray-400">Active champions by EOY</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-400 mb-2">Monthly</div>
              <div className="text-sm text-gray-400">Training sessions</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
