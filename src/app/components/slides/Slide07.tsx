import { motion } from 'motion/react';
import { XCircle, Lock } from 'lucide-react';

export function Slide07() {
  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-12">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-2xl font-bold">3</div>
            <h2 className="text-5xl font-bold">The Blocker</h2>
          </div>
          <p className="text-xl text-gray-400">What's preventing us from capturing the $5M+ opportunity</p>
        </motion.div>

        {/* Primary blocker - big visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-br from-red-950/70 to-orange-950/70 border-4 border-red-600 rounded-3xl p-12 mb-12"
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            <Lock className="w-20 h-20 text-red-400" />
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Primary Blocker</div>
              <div className="text-7xl font-bold text-red-400">Zero Engineering Capacity</div>
            </div>
          </div>
          <div className="text-center text-2xl text-gray-300 mt-6">
            This is the single biggest constraint preventing value capture
          </div>
        </motion.div>

        {/* Supporting barriers */}
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-900/50 border border-red-800 rounded-xl p-6"
          >
            <div className="flex items-start gap-3 mb-3">
              <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <div className="text-xl font-bold mb-2 text-red-400">Product Partnerships</div>
                <div className="text-gray-400 text-base mb-3">Support exists but no formalized ownership</div>
                <div className="text-green-400 text-sm">→ Need PM as DS Product Owner + leadership directive</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-gray-900/50 border border-red-800 rounded-xl p-6"
          >
            <div className="flex items-start gap-3 mb-3">
              <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <div className="text-xl font-bold mb-2 text-red-400">Resource Allocation</div>
                <div className="text-gray-400 text-base mb-3">No dedicated team = piecemeal execution</div>
                <div className="text-green-400 text-sm">→ Need cross-functional team with protected bandwidth</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gray-900/50 border border-red-800 rounded-xl p-6"
          >
            <div className="flex items-start gap-3 mb-3">
              <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <div className="text-xl font-bold mb-2 text-red-400">Strategic Involvement</div>
                <div className="text-gray-400 text-base mb-3">UX not at roadmap planning table</div>
                <div className="text-green-400 text-sm">→ Need formalized seat in resourcing + strategy discussions</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-gray-900/50 border border-red-800 rounded-xl p-6"
          >
            <div className="flex items-start gap-3 mb-3">
              <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <div className="text-xl font-bold mb-2 text-red-400">Cross-Functional Buy-In</div>
                <div className="text-gray-400 text-base mb-3">Supportive but not prioritizing</div>
                <div className="text-green-400 text-sm">→ Need engineering prioritization + organizational muscle</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
