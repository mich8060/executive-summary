import { motion } from 'motion/react';
import { CHGLogo } from '@/app/components/CHGLogo';
import { ThemeBar } from '@/app/components/ThemeBar';
import { Building2, Layers, Shield } from 'lucide-react';

export function CredibilitySlide1() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      {/* Content */}
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
              <h2 className="font-inter font-bold text-6xl mb-4 text-black tracking-tight leading-tight">
                We Built
                <span className="block text-[#1BA5DE] mt-2">Business Infrastructure</span>
              </h2>
              
              <p className="font-inter text-3xl text-gray-600 mb-3 tracking-tight">
                Not just components. Not just a library.
              </p>
              <p className="font-inter font-bold text-3xl text-black mb-10 tracking-tight">
                A platform that scales how we design.
              </p>

              {/* Three Key Transformations */}
              <div className="grid grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white border-2 border-[#1BA5DE] rounded-2xl p-8"
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#1BA5DE]/10 flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-10 h-10 text-[#1BA5DE]" />
                  </div>
                  <h3 className="font-inter font-bold text-2xl mb-3 text-black">Infrastructure</h3>
                  <p className="font-inter text-base text-gray-700 leading-relaxed">
                    Tokens, variables, and governance that make design decisions <span className="text-[#1BA5DE] font-semibold">portable and repeatable</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white border-2 border-[#7FBD4D] rounded-2xl p-8"
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#7FBD4D]/10 flex items-center justify-center mx-auto mb-4">
                    <Layers className="w-10 h-10 text-[#7FBD4D]" />
                  </div>
                  <h3 className="font-inter font-bold text-2xl mb-3 text-black">Multi-Brand Scale</h3>
                  <p className="font-inter text-base text-gray-700 leading-relaxed">
                    Support multiple brands, themes, and modes <span className="text-[#7FBD4D] font-semibold">without duplication or fragmentation</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-white border-2 border-[#FE8C31] rounded-2xl p-8"
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#FE8C31]/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-10 h-10 text-[#FE8C31]" />
                  </div>
                  <h3 className="font-inter font-bold text-2xl mb-3 text-black">Future-Proof</h3>
                  <p className="font-inter text-base text-gray-700 leading-relaxed">
                    Built for acquisitions, new brands, and <span className="text-[#FE8C31] font-semibold">AI-assisted workflows</span> without rebuilding
                  </p>
                </motion.div>
              </div>

              {/* Bottom Impact Statement */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-10 bg-gray-50 border-2 border-gray-200 rounded-2xl p-6"
              >
                <p className="font-inter text-3xl text-black font-medium italic tracking-tight">
                  "We didn't just design UI—we designed <span className="text-[#1BA5DE] font-bold">how the organization designs</span>"
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom - ThemeBar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <ThemeBar />
        </motion.div>
      </div>
    </div>
  );
}