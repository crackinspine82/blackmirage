'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Dynamically import BlueprintBackground with no SSR
const DefaultBackground = dynamic(
  () => import('@/components/three/BlueprintBackground'),
  { ssr: false }
);

interface BackgroundProps {
  onHover?: boolean;
}

interface Button {
  text: string;
  href: string;
  isPrimary?: boolean;
}

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryButton: Button;
  secondaryButton: Button;
}

interface ServiceHeroProps {
  slides: Slide[];
  BackgroundComponent?: ComponentType<BackgroundProps>;
}

import { useHover } from '@/contexts/HoverContext';

export default function ServiceHero({ slides, BackgroundComponent = DefaultBackground }: ServiceHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { isHovered, setGlobalHover } = useHover();

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isAnimating, slides.length]);

  const handleDotClick = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setCurrentSlide(index);
    }
  };

  const handlePrevSlide = () => {
    if (!isAnimating) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const handleNextSlide = () => {
    if (!isAnimating) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  };

  // Memoize the background component to prevent unnecessary re-renders
  const backgroundElement = useMemo(() => (
    <div className="absolute inset-0 z-0">
      <BackgroundComponent onHover={isHovered} />
    </div>
  ), [isHovered, BackgroundComponent]
  );

  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setGlobalHover(true)}
      onMouseLeave={() => setGlobalHover(false)}
    >
      {/* 3D Blueprint Background - Outside AnimatePresence to prevent re-renders */}
      {backgroundElement}

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 z-10" />

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="relative h-full z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-4xl mx-auto text-center"
              >
                <motion.h2 
                  className="text-accent-pink font-medium text-xl mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.h2>
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-300 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {slides[currentSlide].description}
                </motion.p>
                <motion.div 
                  className="flex items-center justify-center space-x-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.a
                    href={slides[currentSlide].primaryButton.href}
                    className="border-2 border-accent-pink bg-accent-pink hover:bg-white text-white hover:text-black px-8 py-4 rounded-lg font-medium transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {slides[currentSlide].primaryButton.text}
                  </motion.a>
                  <motion.a
                    href={slides[currentSlide].secondaryButton.href}
                    className="border-2 border-white hover:bg-white text-white hover:text-black px-8 py-4 rounded-lg font-medium transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {slides[currentSlide].secondaryButton.text}
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-accent-pink' : 'bg-white/50 hover:bg-white'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </section>
  );
}
