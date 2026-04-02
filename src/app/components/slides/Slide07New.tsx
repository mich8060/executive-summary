import { motion } from 'motion/react';
import { AlertCircle, X } from 'lucide-react';

export function Slide07New() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-16">
        <div className="max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-[#FE8C31]/10 border border-[#FE8C31] px-6 py-3 rounded-full mb-8">
              <AlertCircle className="w-6 h-6 text-[#FE8C31]" />
              <span className="text-lg font-semibold text-[#FE8C31]">The Problem</span>
            </div>

            <h2 className="text-8xl font-black mb-12 leading-tight text-gray-900">
              One Thing Is
              <span className="block text-[#FE8C31] mt-4">Blocking Everything</span>
            </h2>

            {/* The Blocker */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative my-16 bg-white border-4 border-[#FE8C31] rounded-3xl p-16 shadow-2xl"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#FE8C31] rounded-full flex items-center justify-center shadow-lg">
                <X className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-7xl font-black text-[#FE8C31] mb-6">
                Zero Engineering Capacity
              </h3>
              <p className="text-3xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                No dedicated engineers = No component library = No value capture
              </p>
            </motion.div>

            {/* Impact Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-4xl text-gray-900 font-semibold">
                You're leaving <span className="text-[#FE8C31] font-black">$4.5 million</span> on the table
              </p>
              <p className="text-3xl text-gray-600">
                Every. Single. Year.
              </p>
            </motion.div>

            {/* Bottom Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="grid grid-cols-3 gap-6 mt-16"
            >
              <div className="bg-white border-2 border-[#FE8C31] rounded-2xl p-6 shadow-lg">
                <div className="text-5xl font-black text-[#FE8C31] mb-2">0</div>
                <div className="text-lg text-gray-600">Dedicated Engineers</div>
              </div>
              <div className="bg-white border-2 border-[#FE8C31] rounded-2xl p-6 shadow-lg">
                <div className="text-5xl font-black text-[#FE8C31] mb-2">10-15%</div>
                <div className="text-lg text-gray-600">Value Currently Captured</div>
              </div>
              <div className="bg-white border-2 border-[#FE8C31] rounded-2xl p-6 shadow-lg">
                <div className="text-5xl font-black text-[#FE8C31] mb-2">∞</div>
                <div className="text-lg text-gray-600">Years Until Full Value</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}