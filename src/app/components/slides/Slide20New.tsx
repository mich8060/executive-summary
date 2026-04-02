import { motion } from 'motion/react';
import { CheckCircle2, Calendar, Users } from 'lucide-react';

export function Slide20New() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-16">
        <div className="max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-9xl font-black mb-8 leading-none text-[#1BA5DE]">
              Let's Do This
            </h1>

            <p className="text-4xl text-gray-600 mb-16 leading-relaxed max-w-4xl mx-auto">
              The business case is proven. The path is clear. 
              <span className="block mt-4 text-5xl font-bold text-gray-900">
                One decision unlocks $5M+
              </span>
            </p>

            {/* CTA Cards */}
            <div className="grid grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white border-2 border-[#1BA5DE] rounded-3xl p-8 shadow-lg"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#1BA5DE] flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4 text-gray-900">This Week</h3>
                <p className="text-xl text-gray-600">
                  Schedule 30-min alignment meeting with leadership
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white border-2 border-[#FE8C31] rounded-3xl p-8 shadow-lg"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#FE8C31] flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4 text-gray-900">Next Week</h3>
                <p className="text-xl text-gray-600">
                  Approve engineering resource allocation
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white border-2 border-[#7FBD4D] rounded-3xl p-8 shadow-lg"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#7FBD4D] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4 text-gray-900">Month 1</h3>
                <p className="text-xl text-gray-600">
                  Kickoff Phase 1 and start delivering value
                </p>
              </motion.div>
            </div>

            {/* Big Value Statement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-r from-[#1BA5DE]/10 to-[#7FBD4D]/10 border-2 border-[#1BA5DE] rounded-3xl p-12"
            >
              <div className="flex items-center justify-center gap-16 mb-8">
                <div>
                  <div className="text-7xl font-black text-[#7FBD4D] mb-2">$5M+</div>
                  <div className="text-xl text-gray-600">Annual Value</div>
                </div>
                <div className="text-7xl text-gray-400">+</div>
                <div>
                  <div className="text-7xl font-black text-[#1BA5DE] mb-2">9 Mo</div>
                  <div className="text-xl text-gray-600">To Full ROI</div>
                </div>
                <div className="text-7xl text-gray-400">=</div>
                <div>
                  <div className="text-7xl font-black text-[#FE8C31] mb-2">∞</div>
                  <div className="text-xl text-gray-600">Sustained Value</div>
                </div>
              </div>
              
              <p className="text-3xl text-gray-900 font-semibold">
                Let's capture this opportunity together
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}