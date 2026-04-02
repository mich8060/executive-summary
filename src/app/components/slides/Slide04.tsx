import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp } from 'lucide-react';

export function Slide04() {
  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-12">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold">1</div>
            <h2 className="text-5xl font-bold">Credibility</h2>
          </div>
          <p className="text-xl text-gray-400">Schedule & Pool + AI Acceleration proves the model</p>
        </motion.div>

        {/* Main value showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-br from-green-950/50 to-emerald-950/50 border-2 border-green-600 rounded-3xl p-12 mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <CheckCircle2 className="w-12 h-12 text-green-400" />
            <div className="text-3xl text-green-400">Design System Value Proven</div>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-sm text-gray-400 mb-3 uppercase tracking-wider">Original DS Value</div>
              <div className="text-6xl font-bold text-yellow-400 mb-2">$2.42M</div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="text-5xl text-green-400">+</div>
            </div>

            <div>
              <div className="text-sm text-gray-400 mb-3 uppercase tracking-wider">AI Acceleration</div>
              <div className="text-6xl font-bold text-green-400 mb-2">$2.56M</div>
              <div className="flex items-center justify-center gap-2 text-green-400">
                <TrendingUp className="w-5 h-5" />
                <span className="text-lg">+106%</span>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-green-700 pt-8">
            <div className="text-2xl text-gray-300 mb-4">Total Annual Value</div>
            <div className="text-9xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              $4.98M
            </div>
          </div>
        </motion.div>

        {/* Value breakdown */}
        <div className="grid grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-900/50 border border-gray-700 rounded-xl p-6"
          >
            <div className="text-sm text-gray-400 mb-2">UX Design</div>
            <div className="text-4xl font-bold mb-2">$683K</div>
            <div className="text-green-400 text-sm">+40% with AI</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-gray-900/50 border border-gray-700 rounded-xl p-6"
          >
            <div className="text-sm text-gray-400 mb-2">Engineering Velocity</div>
            <div className="text-4xl font-bold mb-2">$3.09M</div>
            <div className="text-green-400 text-sm">+60% with AI</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gray-900/50 border border-gray-700 rounded-xl p-6"
          >
            <div className="text-sm text-gray-400 mb-2">Prototype-to-Production</div>
            <div className="text-4xl font-bold mb-2">$600K</div>
            <div className="text-blue-400 text-sm">New with AI</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-8 text-2xl"
        >
          ROI: <span className="text-green-400 font-bold text-3xl">$11.11</span> for every $1 invested
        </motion.div>
      </div>
    </div>
  );
}
