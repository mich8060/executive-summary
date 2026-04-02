import { motion } from 'motion/react';
import { CHGLogo } from '@/app/components/CHGLogo';
import { ThemeBar } from '@/app/components/ThemeBar';
import { TrendingUp, MessageSquare, UserCheck, Shield } from 'lucide-react';

export function SignalsOfChange() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      <div className="relative z-10 h-full flex flex-col justify-between px-20 py-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <CHGLogo />
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-inter font-bold text-6xl mb-4 text-black tracking-tight leading-tight text-center">
                How We Know
                <span className="block text-[#1BA5DE] mt-2">Real Change Is Happening</span>
              </h2>
              
              <p className="font-inter text-2xl text-gray-600 mb-12 tracking-tight text-center max-w-4xl mx-auto">
                Beyond deliverables—behavioral proof that teams have fundamentally changed how they work
              </p>

              {/* Four Key Signals */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white border-2 border-[#7FBD4D] rounded-2xl p-7"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-[#7FBD4D]/10 flex items-center justify-center flex-shrink-0">
                      <UserCheck className="w-7 h-7 text-[#7FBD4D]" />
                    </div>
                    <div>
                      <h3 className="font-inter font-bold text-xl mb-1 text-black">Adoption Without Mandate</h3>
                      <div className="font-inter text-sm text-[#7FBD4D] font-semibold">Voluntary, Not Enforced</div>
                    </div>
                  </div>
                  <p className="font-inter text-base text-gray-700 leading-relaxed">
                    Teams ask <span className="text-[#7FBD4D] font-semibold">"Is this in the design system?"</span> before designing. They adopted it because it made their work easier—not because it was mandated.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white border-2 border-[#1BA5DE] rounded-2xl p-7"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-[#1BA5DE]/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-7 h-7 text-[#1BA5DE]" />
                    </div>
                    <div>
                      <h3 className="font-inter font-bold text-xl mb-1 text-black">Debate Moved Up the Stack</h3>
                      <div className="font-inter text-sm text-[#1BA5DE] font-semibold">From Taste to Outcomes</div>
                    </div>
                  </div>
                  <p className="font-inter text-base text-gray-700 leading-relaxed">
                    Fewer arguments about <span className="text-[#1BA5DE] font-semibold">spacing and colors</span>. More conversations about user needs, journey impact, and edge cases.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-white border-2 border-[#FE8C31] rounded-2xl p-7"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-[#FE8C31]/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-7 h-7 text-[#FE8C31]" />
                    </div>
                    <div>
                      <h3 className="font-inter font-bold text-xl mb-1 text-black">Increased Self-Sufficiency</h3>
                      <div className="font-inter text-sm text-[#FE8C31] font-semibold">Independence Without Quality Loss</div>
                    </div>
                  </div>
                  <p className="font-inter text-base text-gray-700 leading-relaxed">
                    Teams execute confidently with <span className="text-[#FE8C31] font-semibold">fewer clarifications and approvals</span>. New designers ramp faster. Engineers ship without rework.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="bg-white border-2 border-[#1BA5DE] rounded-2xl p-7"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-[#1BA5DE]/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-7 h-7 text-[#1BA5DE]" />
                    </div>
                    <div>
                      <h3 className="font-inter font-bold text-xl mb-1 text-black">Consistency Emerged Organically</h3>
                      <div className="font-inter text-sm text-[#1BA5DE] font-semibold">Without Coordination Meetings</div>
                    </div>
                  </div>
                  <p className="font-inter text-base text-gray-700 leading-relaxed">
                    Teams that <span className="text-[#1BA5DE] font-semibold">don't directly collaborate</span> ship cohesive experiences. The system works in the background.
                  </p>
                </motion.div>
              </div>

              {/* Bottom Quote */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="mt-10 bg-gray-50 border-2 border-gray-200 rounded-2xl p-6"
              >
                <p className="font-inter text-2xl text-black font-medium italic tracking-tight text-center">
                  "We didn't mandate the design system—<span className="text-[#1BA5DE] font-bold">teams adopted it because it made their work easier</span>"
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom - ThemeBar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <ThemeBar />
        </motion.div>
      </div>
    </div>
  );
}
