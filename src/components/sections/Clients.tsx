'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';

// Create 10 placeholder clients using Black Mirage logo
const clients = Array(10).fill({
  name: 'Client Company',
  logo: '/logo.png' // Using the existing Black Mirage logo
});

import OrigamiMountainBackground from "../three/OrigamiMountainBackground";

export default function Clients() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -inset-[100%] animate-smoke bg-gradient-to-br from-black/30 via-white/10 to-black/30 opacity-80 blur-[100px]">
          </div>
          <div className="absolute -inset-[100%] animate-smoke-reverse bg-gradient-to-tl from-black/30 via-white/5 to-black/30 opacity-70 blur-[120px]" style={{ animationDelay: '-5s' }}>
          </div>
          <div className="absolute -inset-[100%] animate-smoke-slow bg-gradient-to-tr from-black/30 via-white/10 to-black/30 opacity-60 blur-[150px]" style={{ animationDelay: '-10s' }}>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Brands that like working with us
          </h2>
          <p className="text-gray-300 text-lg mt-8">
            Success is built together. We thrive on collaboration and are honored to work alongside these forward-thinking brands, helping them connect deeply with their audience.
          </p>
        </div>

        {/* Clients Carousel */}
        <div className="relative">


          {/* Carousel */}
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={50}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="clients-carousel"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={`${client.name} ${index + 1}`}
                    width={80}
                    height={40}
                    className="h-[40px] w-auto opacity-50 hover:opacity-100 transition-opacity"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .clients-carousel .swiper-wrapper {
          transition-timing-function: linear !important;
        }

        @keyframes smoke {
          0% {
            transform: translate(10%, -10%) rotate(0deg);
          }
          50% {
            transform: translate(-5%, 5%) rotate(180deg);
          }
          100% {
            transform: translate(10%, -10%) rotate(360deg);
          }
        }

        @keyframes smoke-reverse {
          0% {
            transform: translate(-10%, 10%) rotate(360deg);
          }
          50% {
            transform: translate(5%, -5%) rotate(180deg);
          }
          100% {
            transform: translate(-10%, 10%) rotate(0deg);
          }
        }

        @keyframes smoke-slow {
          0% {
            transform: translate(-5%, -5%) rotate(0deg);
          }
          50% {
            transform: translate(10%, 10%) rotate(180deg);
          }
          100% {
            transform: translate(-5%, -5%) rotate(360deg);
          }
        }

        .animate-smoke {
          animation: smoke 20s infinite linear;
        }

        .animate-smoke-reverse {
          animation: smoke-reverse 25s infinite linear;
        }

        .animate-smoke-slow {
          animation: smoke-slow 30s infinite linear;
        }
      `}</style>
    </section>
  );
}
