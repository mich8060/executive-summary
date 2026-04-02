import { motion } from 'motion/react';
import { BarChart3, TrendingUp, Users, Gauge } from 'lucide-react';

export function VisibilitySlide1() {
  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-12">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-5xl font-bold mb-4">Making Progress Visible</h2>
          <p className="text-xl text-gray-400">Real-time tracking and executive reporting</p>
        </motion.div>

        {/* Adoption Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-yellow-950/50 to-orange-950/50 border-2 border-yellow-600 rounded-3xl p-10 mb-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
              <Gauge className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold">Adoption Dashboard</h3>
              <p className="text-lg text-gray-400">Single source of truth for DS progress</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gray-900/50 border border-yellow-700 rounded-xl p-6">
              <div className="text-sm text-yellow-400 mb-3 uppercase tracking-wider">Real-Time Metrics</div>
              <div className="space-y-3 text-base text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Component adoption by product</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Maturity tier tracking (T1-T4)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Velocity improvements measured</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Value capture vs. target</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-yellow-700 rounded-xl p-6">
              <div className="text-sm text-yellow-400 mb-3 uppercase tracking-wider">Automated Tracking</div>
              <div className="space-y-3 text-base text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>GitHub integration for usage stats</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Figma component link tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Design-to-dev handoff metrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Sprint velocity correlation</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Monthly Leadership Readouts */}
        <div className="grid grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-br from-blue-950/50 to-gray-900/50 border border-blue-700 rounded-2xl p-6"
          >
            <div className="flex flex-col items-center mb-4">
              <BarChart3 className="w-12 h-12 text-blue-400 mb-3" />
              <h3 className="text-xl font-bold text-blue-400">Monthly Readouts</h3>
            </div>
            <div className="text-sm text-gray-400 text-center leading-relaxed">
              Executive summaries showing value delivered, blockers removed, and ROI trajectory
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-gradient-to-br from-purple-950/50 to-gray-900/50 border border-purple-700 rounded-2xl p-6"
          >
            <div className="flex flex-col items-center mb-4">
              <TrendingUp className="w-12 h-12 text-purple-400 mb-3" />
              <h3 className="text-xl font-bold text-purple-400">Trend Analysis</h3>
            </div>
            <div className="text-sm text-gray-400 text-center leading-relaxed">
              Track adoption velocity, identify lagging products, and forecast value capture
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gradient-to-br from-green-950/50 to-gray-900/50 border border-green-700 rounded-2xl p-6"
          >
            <div className="flex flex-col items-center mb-4">
              <Users className="w-12 h-12 text-green-400 mb-3" />
              <h3 className="text-xl font-bold text-green-400">Team Insights</h3>
            </div>
            <div className="text-sm text-gray-400 text-center leading-relaxed">
              Measure design/dev collaboration, identify champions, and spot training needs
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
