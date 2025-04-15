'use client';

import React from 'react';
import Image from 'next/image';

export default function ClientCarousel() {
  // Simulated client logos with placeholder images
  const clients = Array.from({ length: 8 }, (_, i) => ({
    name: `Client ${i + 1}`,
    logo: `https://via.placeholder.com/150x80?text=Client+${i + 1}`,
  }));

  return (
    <section className="min-h-screen flex items-center bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
          Our Clients
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-none w-[200px] mx-4 hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={80}
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
