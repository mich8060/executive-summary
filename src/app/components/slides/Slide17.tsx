import { motion } from 'motion/react';
import { HandHeart, Users, Rocket } from 'lucide-react';

export function Slide17() {
  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-12 bg-white">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-900">What We Need From You</h2>
          <p className="text-2xl text-[#FE8C31]">This is not about more proof or more planning</p>
        </motion.div>

        {/* Key message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white border-2 border-[#FE8C31] rounded-2xl p-10 mb-12 text-center shadow-lg"
        >
          <div className="text-3xl mb-6 text-gray-900">We have the proof. We have the plan.</div>
          <div className="text-5xl font-bold text-[#FE8C31]">We need organizational muscle.</div>
        </motion.div>

        {/* Three timeframes */}
        <div className="grid grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white border-2 border-[#1BA5DE] rounded-2xl p-8 shadow-lg"
          >
            <div className="flex flex-col items-center mb-6">
              <HandHeart className="w-16 h-16 text-[#1BA5DE] mb-4" />
              <h3 className="text-2xl font-bold text-[#1BA5DE]">Short-term</h3>
            </div>
            <div className="text-lg mb-3 text-center font-semibold text-gray-900">Break Through Barriers</div>
            <div className="text-base text-gray-600 leading-relaxed">
              • Engineering prioritizing DS (not just "supportive")<br />
              • Product assigning PM owner<br />
              • Executive air cover
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white border-2 border-[#FE8C31] rounded-2xl p-8 shadow-lg"
          >
            <div className="flex flex-col items-center mb-6">
              <Users className="w-16 h-16 text-[#FE8C31] mb-4" />
              <h3 className="text-2xl font-bold text-[#FE8C31]">Medium-term</h3>
            </div>
            <div className="text-lg mb-3 text-center font-semibold text-gray-900">Formalize UX's Role</div>
            <div className="text-base text-gray-600 leading-relaxed">
              • UX at strategic planning table<br />
              • Formalized seat in resourcing discussions<br />
              • Cross-functional partnerships
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white border-2 border-[#7FBD4D] rounded-2xl p-8 shadow-lg"
          >
            <div className="flex flex-col items-center mb-6">
              <Rocket className="w-16 h-16 text-[#7FBD4D] mb-4" />
              <h3 className="text-2xl font-bold text-[#7FBD4D]">Long-term</h3>
            </div>
            <div className="text-lg mb-3 text-center font-semibold text-gray-900">Competitive Advantage</div>
            <div className="text-base text-gray-600 leading-relaxed">
              • Executive sponsorship for multi-year commitment<br />
              • UX as competitive weapon<br />
              • Market leadership
            </div>
          </motion.div>
        </div>

        {/* Key conversations needed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-12 bg-white border-2 border-gray-300 rounded-2xl p-8 shadow-lg"
        >
          <div className="text-2xl font-bold mb-6 text-center text-gray-900">Critical Conversations Needed:</div>
          <div className="grid grid-cols-3 gap-6 text-sm">
            <div>
              <div className="font-bold text-[#1BA5DE] mb-2">Product Leadership</div>
              <div className="text-gray-600">"How do we formalize PM ownership so this scales?"</div>
            </div>
            <div>
              <div className="font-bold text-[#FE8C31] mb-2">Engineering Leadership</div>
              <div className="text-gray-600">"We're leaving $4.5M+/year on the table. What's needed to prioritize this?"</div>
            </div>
            <div>
              <div className="font-bold text-[#7FBD4D] mb-2">Executive Leadership</div>
              <div className="text-gray-600">"We've validated $6-7M opportunity. We need executive sponsorship."</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}