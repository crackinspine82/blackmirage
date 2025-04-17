'use client';

import React from 'react';
import OrigamiTerrainBackground from '../three/OrigamiTerrainBackground';
import { 
  RocketLaunchIcon, 
  PaintBrushIcon, 
  ChartBarIcon, 
  CodeBracketIcon 
} from '@heroicons/react/24/outline';

export default function WhatWeDo() {
  const services = [
    {
      title: 'Digital Strategy',
      description: 'Transform your business with data-driven digital strategies that accelerate growth and maximize ROI.',
      icon: ChartBarIcon,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Web Development',
      description: 'Build powerful, scalable web applications using cutting-edge technologies and best practices.',
      icon: CodeBracketIcon,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Brand Identity',
      description: 'Create memorable brand experiences that connect with your audience and drive lasting engagement.',
      icon: PaintBrushIcon,
      color: 'from-orange-500 to-amber-500'
    },
    {
      title: 'Digital Marketing',
      description: 'Reach and engage your target audience through strategic digital marketing campaigns.',
      icon: RocketLaunchIcon,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="what-we-do" className="min-h-screen flex items-center text-black relative overflow-hidden">
      {/* Origami Terrain Animated Background */}
      <OrigamiTerrainBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-heading font-bold mb-6 text-black">
            What We Do
          </h2>
          <p className="text-xl text-black/80">
            We combine creativity and technology to deliver exceptional digital solutions that help businesses thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 backdrop-blur-sm border border-secondary/10 hover:border-accent-pink"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${service.color} rounded-2xl transition-opacity duration-300`} />
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <service.icon className="w-12 h-12 text-secondary group-hover:text-accent-pink transition-colors duration-300" />
                </div>

                <h3 className="text-2xl font-heading font-semibold mb-4 text-black">
                  {service.title}
                </h3>

                <p className="text-black/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
