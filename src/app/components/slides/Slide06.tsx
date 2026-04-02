import { motion } from 'motion/react';
import { AlertTriangle } from 'lucide-react';

export function Slide06() {
  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-12 bg-white">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#7FBD4D] flex items-center justify-center text-2xl font-bold text-white">2</div>
            <h2 className="text-5xl font-bold text-gray-900">The Opportunity</h2>
          </div>
          <p className="text-xl text-gray-600">The gap between current capture and full potential</p>
        </motion.div>

        {/* Gap visualization */}
        <div className="mb-16">
          <div className="flex items-end justify-center gap-12">
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="bg-[#FE8C31] rounded-t-2xl w-48 shadow-2xl" style={{ height: '120px' }}>
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-4xl font-bold text-white">$300-500K</div>
                  <div className="text-sm text-white/90">Currently</div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="text-3xl font-bold text-[#FE8C31] mb-2">6-10%</div>
                <div className="text-gray-600">of potential</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="bg-[#7FBD4D] rounded-t-2xl w-48 shadow-2xl" style={{ height: '500px' }}>
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-6xl font-bold text-white mb-2">$5M+</div>
                  <div className="text-lg text-white/90">Full Potential</div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="text-3xl font-bold text-[#7FBD4D] mb-2">100%</div>
                <div className="text-gray-600">with barriers removed</div>
              </div>
            </motion.div>
          </div>

          {/* Arrow showing gap */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center mt-8"
          >
            <div className="bg-white border-2 border-[#FE8C31] rounded-full px-8 py-3 flex items-center gap-3 shadow-lg">
              <AlertTriangle className="w-6 h-6 text-[#FE8C31]" />
              <div className="text-2xl">
                <span className="text-[#FE8C31] font-bold">$4.5M+ gap</span>
                <span className="text-gray-600"> in unrealized value</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cost of inaction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-white border-2 border-[#FE8C31] rounded-2xl p-8 text-center shadow-lg"
        >
          <div className="text-2xl text-[#FE8C31] mb-4">Annual Cost of Inaction</div>
          <div className="text-7xl font-bold text-[#FE8C31] mb-4">$4.5M+</div>
          <div className="text-xl text-gray-600">in unrealized value every year we wait</div>
          <div className="mt-6 text-lg text-gray-600">
            That's <span className="text-[#FE8C31] font-bold">~$375K lost every month</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}