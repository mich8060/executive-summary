import { motion } from 'motion/react';

export function Slide02() {
  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-12">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-4">The Opportunity</h2>
          <p className="text-xl text-gray-400 mb-12">Total addressable value across UX initiatives</p>
        </motion.div>

        {/* Value bars */}
        <div className="space-y-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-6">
              <div className="w-48 text-xl text-gray-300">Design System</div>
              <div className="flex-1 relative">
                <div className="h-20 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg flex items-center px-8 shadow-lg">
                  <span className="text-3xl font-bold text-gray-950">$5M/year</span>
                  <span className="ml-4 text-sm text-gray-800 bg-white/30 px-3 py-1 rounded-full">validated</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-6">
              <div className="w-48 text-xl text-gray-300">Process Efficiency</div>
              <div className="flex-1 relative">
                <div className="h-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center px-8 shadow-lg" style={{ width: '40%' }}>
                  <span className="text-3xl font-bold text-white">$1-2M/year</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-6">
              <div className="w-48 text-xl text-gray-300">FSP Acceleration</div>
              <div className="flex-1 relative">
                <div className="h-20 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg flex items-center px-8 shadow-lg" style={{ width: '25%' }}>
                  <span className="text-2xl font-bold text-white">TBD</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Current state */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-red-950/50 to-orange-950/50 border-2 border-red-700 rounded-2xl p-10"
        >
          <div className="text-2xl mb-8 text-center text-red-400">Current Reality</div>
          <div className="grid grid-cols-2 gap-12">
            <div className="text-center">
              <div className="text-8xl font-bold text-red-400 mb-4">10-15%</div>
              <div className="text-xl text-gray-300">Value Currently Captured</div>
              <div className="mt-4 h-4 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl font-bold text-green-400 mb-4">85-90%</div>
              <div className="text-xl text-gray-300">Opportunity to Unlock</div>
              <div className="mt-4 h-4 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
