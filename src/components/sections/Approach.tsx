'use client';

import { useState } from 'react';
import OrigamiTerrainBackground from '../three/OrigamiTerrainBackground';
import { motion } from 'framer-motion';

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
    <section className="min-h-screen w-full bg-white overflow-hidden relative flex items-center justify-center">
      {/* 3D Origami Terrain Animated Background */}
      <div className="absolute inset-0 z-0">
        <OrigamiTerrainBackground />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title and Description on top */}
        <div className="flex flex-col lg:flex-row mb-12">
          <div className="w-full lg:w-1/2 flex flex-col justify-start items-start mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-2xl md:text-3xl font-medium text-black mb-6">
              {description}
            </p>
          </div>
          <div className="hidden lg:block lg:w-1/2"></div>
        </div>
        {/* Cards: Full width, responsive grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              // Randomize the floating animation per card
              const randomX = Math.random() * 8 - 4; // between -4 and 4
              const randomY = Math.random() * 8 - 4; // between -4 and 4
              return (
                <motion.div
                  key={step.title}
                  className={`rounded-xl shadow-lg p-6 flex flex-col h-full justify-between cursor-pointer transition-transform hover:scale-105 ${expandedIndex === index ? 'ring-4 ring-orange-400' : ''}`}
                  style={{ backgroundColor: '#ff7714' }}
                  onClick={() => toggleExpand(index)}
                  animate={{
                    x: [0, randomX, 0, -randomX, 0],
                    y: [0, randomY, 0, -randomY, 0],
                  }}
                  transition={{
                    duration: 6 + Math.random() * 2, // 6-8s
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                  }}
                >
                  {/* Title and Number */}
                  <div className="flex items-center mb-16">
                    <h3 className="text-2xl font-bold text-black text-left flex-1">
                      {step.title}
                    </h3>
                    <span className="text-black text-3xl font-mono ml-4">{String(index + 1).padStart(3, '.0')}</span>
                  </div>
                  {/* Large logo in the center */}
                  <div className="flex justify-center items-center mb-6">
                    <span
                      className="w-40 h-40 flex items-center justify-center text-black"
                      style={{ color: 'black', fontSize: '10rem', lineHeight: 1 }}
                      dangerouslySetInnerHTML={{ __html: step.icon }}
                    />
                  </div>
                  {/* Description at the bottom */}
                  <p className="text-black text-xl opacity-90 mt-4 text-left">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
           </div>
        </div>

      </div>
    </section>
  );
}
