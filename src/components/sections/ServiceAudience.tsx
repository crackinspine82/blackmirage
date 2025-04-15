'use client';

import { motion } from 'framer-motion';

interface Segment {
  title: string;
  description: string;
  icon: string;
}

interface ServiceAudienceProps {
  title: string;
  description: string;
  segments: Segment[];
}

export default function ServiceAudience({ title, description, segments }: ServiceAudienceProps) {
  return (
    <section className="min-h-screen flex items-center bg-black overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
            {title}
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 max-w-7xl mx-auto relative">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group relative"
            >
              {/* Vertical Divider */}
              {index < segments.length - 1 && (
                <div className="hidden lg:block absolute right-[-1rem] top-0 h-full">
                  <div className="w-px h-full bg-gradient-to-b from-transparent via-accent-secondary/20 to-transparent"></div>
                </div>
              )}

              {/* Icon Container with improved visibility */}
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-accent-secondary/10 blur-xl transform group-hover:scale-110 transition-transform"></div>
                <div 
                  className="relative w-16 h-16 flex items-center justify-center text-accent-secondary transform hover:scale-105 transition-transform"
                  dangerouslySetInnerHTML={{ __html: segment.icon }}
                />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-accent-secondary transition-colors">
                {segment.title}
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-sm">
                {segment.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
