import { motion } from 'motion/react';
import { Target, TrendingUp, AlertCircle, Map, Eye, GraduationCap } from 'lucide-react';

export function Slide03() {
  const steps = [
    { icon: Target, title: 'Credibility', desc: 'Value we\'ve already delivered', color: 'from-blue-500 to-cyan-500' },
    { icon: TrendingUp, title: 'Opportunity', desc: 'Gap we can capture', color: 'from-green-500 to-emerald-500' },
    { icon: AlertCircle, title: 'Blocker', desc: 'What\'s preventing us', color: 'from-red-500 to-orange-500' },
    { icon: Map, title: 'Path', desc: 'How we unlock it', color: 'from-purple-500 to-pink-500' },
    { icon: Eye, title: 'Visibility', desc: 'How you\'ll see progress', color: 'from-yellow-500 to-amber-500' },
    { icon: GraduationCap, title: 'Education', desc: 'How we scale adoption', color: 'from-indigo-500 to-blue-500' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-16 py-12">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4">Strategic Framework</h2>
          <p className="text-xl text-gray-400">Six steps to unlock engineering capacity and capture $5M+ value</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center text-xl font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
                
                {/* Connecting line */}
                {idx < steps.length - 1 && idx % 3 !== 2 && (
                  <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-600 to-transparent"></div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-blue-950/50 to-purple-950/50 border-2 border-blue-700 rounded-2xl p-8 text-center"
        >
          <p className="text-2xl leading-relaxed">
            This framework unlocks <span className="text-blue-400 font-bold">engineering capacity</span>—<br />
            the single biggest lever for capturing the $5M+ opportunity.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
