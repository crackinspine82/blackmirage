'use client';

import { motion } from 'framer-motion';

interface ProblemStatementProps {
  title: string;
  statement: string;
  description: string;
}

export default function ProblemStatement({ title, statement, description }: ProblemStatementProps) {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-white">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        >
          {/* Left Column - Problem Statement */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-8">
              {title}
            </h2>
            <div className="text-2xl md:text-3xl font-medium text-black mb-6">
              {statement}
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="text-lg text-black/80 space-y-6">
            <p>{description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
