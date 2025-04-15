"use client";
import React from "react";
import "../../styles/animated-gradient.css";

const SERVICES = [
  "Bespoke Digital Solutions",
  "Mainstream Video Production",
  "Digital Transformation Ideas",
  "Brand Accelerators",
  "Commerce Solutions",
  "Mobile Apps",
  "Cloud Integration",
  "Digital Marketing"
];

import StorySmokeBackground from "@/components/StorySmokeBackground";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen h-screen flex flex-col justify-center items-center overflow-hidden py-20 animated-dark-gradient-bg">
      <StorySmokeBackground />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-2xl md:text-4xl font-heading font-bold text-white tracking-widest mb-1 drop-shadow-xl uppercase leading-loose">
          WE ARE
        </h1>
        <h2 className="text-6xl md:text-8xl font-heading font-extrabold mb-6 drop-shadow-xl uppercase leading-loose">
          <span style={{ color: '#000' }}>BLACK</span>{' '}
          <span style={{ color: '#fff' }}>MIRAGE</span>
        </h2>
        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto mb-20 leading-relaxed">
          We combine creativity and technology to deliver impactful digital solutions. Our mission is to help brands grow, connect, and thrive in the digital era.
        </p>
        {/* Text Carousel */}
        <div className="w-full overflow-x-hidden flex justify-center">
          <div className="inline-block whitespace-nowrap animate-carousel">
            {SERVICES.concat(SERVICES).map((service, i, arr) => (
              <React.Fragment key={i}>
                <span
                  className="inline-block mx-8 text-2xl md:text-3xl font-bold text-accent-primary drop-shadow-lg"
                >
                  {service}
                </span>
                {i !== arr.length - 1 && (
                  <span className="text-2xl md:text-3xl text-gray-400 inline-flex items-center mx-2">&bull;</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      {/* Optional: Overlay for effect */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5 pointer-events-none"></div>
      <style jsx global>{`
        @keyframes carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-carousel {
          animation: carousel 32s linear infinite;
        }
      `}</style>
    </section>
  );
}
