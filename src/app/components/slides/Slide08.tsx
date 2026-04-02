import { motion } from 'motion/react';
import { Clock, Zap } from 'lucide-react';

export function Slide08() {
  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-12 bg-white">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-900">The Choice</h2>
          <p className="text-2xl text-gray-600">Two very different futures</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-12">
          {/* With barriers */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white border-2 border-[#FE8C31] rounded-3xl p-10 h-full shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <Clock className="w-10 h-10 text-[#FE8C31]" />
                <h3 className="text-3xl font-bold text-[#FE8C31]">With Current Barriers</h3>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <div className="text-6xl font-bold text-[#FE8C31]">36+</div>
                  <div className="text-xl text-gray-600">months to full adoption</div>
                </div>

                <div className="h-px bg-[#FE8C31] my-4"></div>

                <div className="flex flex-col gap-2">
                  <div className="text-4xl font-bold text-[#FE8C31]">$500K/yr</div>
                  <div className="text-base text-gray-600">value captured (10%)</div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-5xl font-bold text-[#FE8C31]">-$4.5M/yr</div>
                  <div className="text-base text-[#FE8C31]">unrealized value lost</div>
                </div>

                <div className="h-px bg-[#FE8C31] my-4"></div>

                <div className="text-lg text-gray-600 leading-relaxed">
                  • UX team firefighting<br />
                  • Competitors ship faster<br />
                  • Inconsistent experiences<br />
                  • Technical debt grows
                </div>

                <div className="mt-8 pt-6 border-t-2 border-[#FE8C31]">
                  <div className="text-2xl text-[#FE8C31] font-bold">
                    ~$375K lost every month
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Barriers removed */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative bg-white border-2 border-[#7FBD4D] rounded-3xl p-10 h-full shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-10 h-10 text-[#7FBD4D]" />
                <h3 className="text-3xl font-bold text-[#7FBD4D]">Barriers Removed</h3>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <div className="text-6xl font-bold text-[#7FBD4D]">18-24</div>
                  <div className="text-xl text-gray-600">months to full adoption</div>
                </div>

                <div className="h-px bg-[#7FBD4D] my-4"></div>

                <div className="flex flex-col gap-2">
                  <div className="text-4xl font-bold text-[#7FBD4D]">$5M+/yr</div>
                  <div className="text-base text-gray-600">value captured (100%)</div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-5xl font-bold text-[#7FBD4D]">12-18 mo</div>
                  <div className="text-base text-[#7FBD4D]">faster time to value</div>
                </div>

                <div className="h-px bg-[#7FBD4D] my-4"></div>

                <div className="text-lg text-gray-600 leading-relaxed">
                  • UX as competitive weapon<br />
                  • Faster product delivery<br />
                  • Consistent, quality UX<br />
                  • AI-ready infrastructure
                </div>

                <div className="mt-8 pt-6 border-t-2 border-[#7FBD4D]">
                  <div className="text-2xl text-[#7FBD4D] font-bold">
                    Full ROI 18 months sooner
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}