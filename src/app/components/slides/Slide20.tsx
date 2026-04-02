import { motion } from 'motion/react';
import { CheckCircle2, Calendar, FileText, Users } from 'lucide-react';

export function Slide20() {
  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-12 bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl font-bold mb-6">Let's Do This</h2>
          <p className="text-2xl text-gray-400">Immediate next steps to unlock the $5M+ opportunity</p>
        </motion.div>

        {/* Actions for this week */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="text-3xl font-bold mb-6 text-blue-400">This Week:</div>
          <div className="space-y-4">
            <div className="flex items-start gap-6 bg-gray-900/50 border border-blue-700 rounded-xl p-6 hover:border-blue-500 transition-all">
              <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 text-2xl font-bold">1</div>
              <div className="flex items-center gap-6 flex-1">
                <CheckCircle2 className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-xl font-bold mb-1">Align on critical questions</div>
                  <div className="text-gray-400">Engineering capacity as unlock? Decision makers? Contractor budget? Value story?</div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6 bg-gray-900/50 border border-blue-700 rounded-xl p-6 hover:border-blue-500 transition-all">
              <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 text-2xl font-bold">2</div>
              <div className="flex items-center gap-6 flex-1">
                <Calendar className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-xl font-bold mb-1">Schedule monthly UX Impact Strategy Session</div>
                  <div className="text-gray-400">30-45 min recurring with Tate, Michael, Trish, Brian</div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6 bg-gray-900/50 border border-blue-700 rounded-xl p-6 hover:border-blue-500 transition-all">
              <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 text-2xl font-bold">3</div>
              <div className="flex items-center gap-6 flex-1">
                <FileText className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-xl font-bold mb-1">Begin Phase 1 artifacts</div>
                  <div className="text-gray-400">Leadership talking points, explicit "ask" 1-pager, narrative arc</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Success metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-green-950/50 to-emerald-950/50 border-2 border-green-600 rounded-2xl p-8 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-10 h-10 text-green-400" />
            <div className="text-3xl font-bold">2026 Success Metrics</div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <span className="text-lg">Engineering capacity secured by end of Q1</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <span className="text-lg">All products at Tier 1 DS maturity by year end</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <span className="text-lg">$2M+ in validated value captured (40% of potential)</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <span className="text-lg">AI acceleration infrastructure established</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <div className="text-3xl mb-4">
            We have a validated <span className="text-green-400 font-bold">$5M+ annual opportunity</span>
          </div>
          <div className="text-2xl text-gray-400 mb-6">
            We're currently capturing 10%. The blocker is clear. The path is ready.
          </div>
          <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's capture this value together.
          </div>
        </motion.div>
      </div>
    </div>
  );
}
