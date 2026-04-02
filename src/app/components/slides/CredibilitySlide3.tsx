import { motion } from 'motion/react';
import { CHGLogo } from '@/app/components/CHGLogo';
import { ThemeBar } from '@/app/components/ThemeBar';
import { Users, Rocket, Code, Palette } from 'lucide-react';

export function CredibilitySlide3() {
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
          <div className="max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-inter font-bold text-7xl mb-6 text-black tracking-tight leading-tight">
                We Became a
                <span className="block text-[#1BA5DE] mt-2">Force Multiplier</span>
              </h2>
              
              <p className="font-inter text-3xl text-gray-600 mb-12 max-w-4xl mx-auto tracking-tight">
                Not just supporting teams—amplifying their impact across the entire organization
              </p>

              {/* Four Teams Impacted */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white border-2 border-[#FE8C31] rounded-2xl p-8 text-left"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-[#FE8C31]/10 flex items-center justify-center flex-shrink-0">
                      <Palette className="w-8 h-8 text-[#FE8C31]" />
                    </div>
                    <div>
                      <h3 className="font-inter font-bold text-2xl mb-1 text-black">Product Design</h3>
                      <div className="font-inter text-sm text-[#FE8C31] font-semibold">Faster execution, clearer constraints</div>
                    </div>
                  </div>
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    Designers moved from styling debates to <span className="text-[#FE8C31] font-semibold">solving customer problems</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white border-2 border-[#1BA5DE] rounded-2xl p-8 text-left"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-[#1BA5DE]/10 flex items-center justify-center flex-shrink-0">
                      <Code className="w-8 h-8 text-[#1BA5DE]" />
                    </div>
                    <div>
                      <h3 className="font-inter font-bold text-2xl mb-1 text-black">Engineering</h3>
                      <div className="font-inter text-sm text-[#1BA5DE] font-semibold">Predictable inputs, fewer edge cases</div>
                    </div>
                  </div>
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    Engineers implement faster with <span className="text-[#1BA5DE] font-semibold">ready-to-use foundations</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-white border-2 border-[#7FBD4D] rounded-2xl p-8 text-left"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-[#7FBD4D]/10 flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-8 h-8 text-[#7FBD4D]" />
                    </div>
                    <div>
                      <h3 className="font-inter font-bold text-2xl mb-1 text-black">Marketing</h3>
                      <div className="font-inter text-sm text-[#7FBD4D] font-semibold">Brand consistency without delays</div>
                    </div>
                  </div>
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    Ship brand-correct experiences <span className="text-[#7FBD4D] font-semibold">without custom overrides</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="bg-white border-2 border-[#1BA5DE] rounded-2xl p-8 text-left"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-[#1BA5DE]/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-[#1BA5DE]" />
                    </div>
                    <div>
                      <h3 className="font-inter font-bold text-2xl mb-1 text-black">Leadership</h3>
                      <div className="font-inter text-sm text-[#1BA5DE] font-semibold">Shared language and standards</div>
                    </div>
                  </div>
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    Leadership sees progress through <span className="text-[#1BA5DE] font-semibold">clear artifacts and narratives</span>
                  </p>
                </motion.div>
              </div>

              {/* Bottom Impact Statement */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8"
              >
                <p className="font-inter text-3xl text-black font-medium italic tracking-tight">
                  "We scaled ourselves through the system—<span className="text-[#1BA5DE] font-bold">classic senior leadership behavior</span>"
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