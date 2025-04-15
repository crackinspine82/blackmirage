'use client';

import { motion } from 'framer-motion';

interface ExpertisePoint {
  title: string;
  description: string;
}

interface TeamExpertiseProps {
  title: string;
  description: string;
  points: ExpertisePoint[];
}

export default function TeamExpertise({ title, description, points }: TeamExpertiseProps) {
  return (
    <section id="team-expertise" className="min-h-screen flex items-center bg-black overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
              {title}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-accent-secondary transition-colors"
            >
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                {point.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
