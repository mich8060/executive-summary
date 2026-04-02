import { motion } from 'motion/react';
import { Heart, Mail, Calendar } from 'lucide-react';

export function ThankYouSlide() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      <div className="relative z-10 h-full flex items-center justify-center px-16">
        <div className="max-w-6xl w-full text-center">
          {/* Main Thank You */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-9xl font-black mb-8 leading-tight">
              <span className="text-gray-900">Thank</span>
              <span className="block text-[#1BA5DE] mt-4">You</span>
            </h1>
          </motion.div>

          {/* Icon Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mb-12"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#1BA5DE] to-[#7FBD4D] flex items-center justify-center">
              <Heart className="w-16 h-16 text-white" fill="white" />
            </div>
          </motion.div>

          {/* Supporting Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <p className="text-4xl text-gray-700 mb-6 font-semibold">
              Let's unlock $5M+ in value together
            </p>
            <p className="text-2xl text-gray-500 max-w-3xl mx-auto">
              Ready to discuss next steps and answer any questions
            </p>
          </motion.div>

          {/* Call to Action Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Questions Card */}
            <div className="bg-white border-2 border-[#1BA5DE] rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-[#1BA5DE] flex items-center justify-center mb-4 mx-auto">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Questions?</h3>
              <p className="text-lg text-gray-600">Let's dive deeper into any details</p>
            </div>

            {/* Schedule Card */}
            <div className="bg-white border-2 border-[#7FBD4D] rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-[#7FBD4D] flex items-center justify-center mb-4 mx-auto">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Start?</h3>
              <p className="text-lg text-gray-600">Let's schedule our kickoff</p>
            </div>
          </motion.div>

          {/* Bottom Accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16"
          >
            <div className="h-3 rounded-full mx-auto bg-gradient-to-r from-[#1BA5DE] via-[#7FBD4D] to-[#FE8C31]" style={{ width: '500px' }} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
