import { motion } from 'motion/react';
import { FileText, Handshake, BarChart } from 'lucide-react';

export function Slide09() {
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
            <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-2xl font-bold">4</div>
            <h2 className="text-5xl font-bold">The Path Forward</h2>
          </div>
          <p className="text-xl text-gray-400">How we unlock engineering capacity and capture the value</p>
        </motion.div>

        {/* Three phases */}
        <div className="relative mb-12">
          {/* Timeline line */}
          <div className="absolute left-8 top-20 bottom-20 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative pl-24"
            >
              <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center border-4 border-gray-950 shadow-lg shadow-blue-500/50">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div className="bg-gradient-to-br from-blue-950/50 to-gray-900/50 border border-blue-700 rounded-2xl p-8">
                <div className="flex items-baseline gap-4 mb-3">
                  <h3 className="text-3xl font-bold">Phase 1: Build the Case</h3>
                  <span className="text-blue-400 text-lg">Now → 4-6 weeks</span>
                </div>
                <p className="text-xl text-gray-300 mb-4">Create artifacts that unlock the engineering conversation</p>
                <div className="text-base text-gray-400 leading-relaxed">
                  • Quantify 2025 value delivered<br />
                  • Leadership talking points & visuals<br />
                  • Single narrative arc in Design System Playbook
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative pl-24"
            >
              <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center border-4 border-gray-950 shadow-lg shadow-purple-500/50">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <div className="bg-gradient-to-br from-purple-950/50 to-gray-900/50 border border-purple-700 rounded-2xl p-8">
                <div className="flex items-baseline gap-4 mb-3">
                  <h3 className="text-3xl font-bold">Phase 2: Secure the Unlock</h3>
                  <span className="text-purple-400 text-lg">Weeks 4-8</span>
                </div>
                <p className="text-xl text-gray-300 mb-4">Get engineering commitment or contractor approved</p>
                <div className="grid grid-cols-2 gap-6 text-base">
                  <div className="bg-green-900/20 border border-green-800 rounded-lg p-4">
                    <div className="font-bold text-green-400 mb-2">Path A: Internal</div>
                    <div className="text-gray-400 text-sm">Dedicated engineering resources (preferred)</div>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
                    <div className="font-bold text-blue-400 mb-2">Path B: Contractor</div>
                    <div className="text-gray-400 text-sm">Fallback if internal capacity unavailable</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative pl-24"
            >
              <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center border-4 border-gray-950 shadow-lg shadow-green-500/50">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <div className="bg-gradient-to-br from-green-950/50 to-gray-900/50 border border-green-700 rounded-2xl p-8">
                <div className="flex items-baseline gap-4 mb-3">
                  <h3 className="text-3xl font-bold">Phase 3: Operationalize</h3>
                  <span className="text-green-400 text-lg">Ongoing</span>
                </div>
                <p className="text-xl text-gray-300 mb-4">Make value visible and sustainable</p>
                <div className="text-base text-gray-400 leading-relaxed">
                  • Adoption dashboard for tracking progress<br />
                  • Monthly leadership readouts<br />
                  • Relationship strategy & influencer network
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
