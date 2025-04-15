'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Step {
  title: string;
  description: string;
  icon: string;
}

interface ApproachProps {
  title: string;
  description: string;
  steps: Step[];
}

export default function Approach({ title, description, steps }: ApproachProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen flex items-center bg-black overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 animated-dark-gradient-bg">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column - Steps */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-4 order-last lg:order-first"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <motion.div 
                  className={`relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors cursor-pointer`}
                  onClick={() => toggleExpand(index)}
                >
                  {/* Glowing effect */}
                  <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-r from-accent-pink/10 to-accent-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                  
                  <div className="relative p-3">
                    <div className="flex items-center gap-3">
                      {/* Icon */}
                      <div 
                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-md bg-accent-secondary/10"
                        dangerouslySetInnerHTML={{ __html: step.icon }}
                      />
                      
                      {/* Title */}
                      <h3 className="text-base font-heading font-bold text-white group-hover:text-accent-secondary transition-colors flex-1">
                        {step.title}
                      </h3>

                      {/* Expand/Collapse Icon */}
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-accent-secondary"
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </motion.svg>
                    </div>

                    {/* Expandable Description */}
                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-gray-400 mt-3 pl-11">
                            {step.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Connecting line for all except last item */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-[1.6rem] bottom-[-1rem] w-0.5 h-4 bg-gradient-to-b from-accent-secondary/30 to-transparent"></div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Title and Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 lg:sticky lg:top-24 order-first lg:order-last"
          >
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
                  {title}
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-xl text-gray-300">
                  {description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
