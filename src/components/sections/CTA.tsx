'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SoundWaveBackground from '../three/SoundWaveBackground';

export default function CTA() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-white">
      {/* Animated Sound Wave Background */}
      <SoundWaveBackground />
      {/* Content */}
      <div className="relative w-full">


        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-4 gap-8 items-center"
          >
            {/* Text content spanning 3 columns */}
            <div className="lg:col-span-3">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-heading font-bold text-black mb-4 leading-tight"
              >
                Ready to Transform Your Digital Presence?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl text-black/80"
              >
                Let&apos;s discuss how we can help your business grow with our innovative solutions.
              </motion.p>
            </div>

            {/* Button in the fourth column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <Link
                href="/connect"
                className="group relative inline-flex items-center justify-center"
              >
                <span className="relative z-10 px-8 py-4 border-2 border-black bg-black hover:bg-white text-white hover:text-black rounded-lg font-medium transition-all duration-300 text-lg md:text-xl flex items-center space-x-3">
                  <span>Contact Us Today</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className="w-6 h-6 transform transition-transform group-hover:translate-x-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 opacity-30 blur group-hover:opacity-50 transition-opacity"></div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
