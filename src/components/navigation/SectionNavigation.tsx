'use client';

import React, { useEffect, useState } from 'react';

export default function SectionNavigation() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    // Observe all sections
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <ul className="space-y-2">
        {Array.from(document.querySelectorAll('section[id]')).map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-primary scale-125'
                  : 'bg-gray-400 hover:bg-primary/70'
              }`}
              aria-label={`Scroll to ${section.id} section`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
