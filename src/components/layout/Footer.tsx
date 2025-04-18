'use client';

import Link from 'next/link';
import Image from 'next/image';

// Footer navigation structure based on header menu (excluding 'Our Story' and 'Connect')
const navigationItems = {
  column1: {
    items: [
      {
        category: 'Branding & Marketing',
        links: [
          { name: 'Identity & Architecture', href: '/services/branding/identity' },
          { name: 'Strategy & Positioning', href: '/services/branding/strategy' },
          { name: 'Brand Messaging & Experience', href: '/services/branding/messaging' },
          { name: 'Logo & Visual Identity Design', href: '/services/branding/visual-identity' },
          { name: 'Brand Guidelines & Collaterals', href: '/services/branding/guidelines' },
          { name: 'Visual Communications', href: '/services/branding/communications' },
          { name: 'Market Research & Strategy', href: '/services/marketing/research' },
          { name: 'Search Engine Optimization', href: '/services/marketing/seo' },
          { name: 'Social Media Marketing', href: '/services/marketing/social' },
          { name: 'Content Creation', href: '/services/marketing/content' },
          { name: 'Paid Advertising', href: '/services/marketing/paid' },
          { name: 'Traditional Advertising', href: '/services/marketing/traditional' },
        ]
      }
    ]
  },
  column2: {
    items: [
      {
        category: 'Audio & Video',
        links: [
          { name: 'Recording & Mixing', href: '/services/audio/recording-mixing' },
          { name: 'Voice-Over Services', href: '/services/audio/voice-over' },
          { name: 'Audio Production', href: '/services/audio/production' },
          { name: '2D & 3D Animation', href: '/services/video/animation' },
          { name: 'Corporate Films', href: '/services/video/corporate' },
          { name: 'Product Demos', href: '/services/video/product-demos' },
          { name: 'TV Commercials', href: '/services/video/commercials' },
        ]
      }
    ]
  },
  column3: {
    items: [
      {
        category: 'Digital Experiences',
        links: [
          { name: 'UX & Design', href: '/services/digital/ux-design' },
          { name: 'Custom Digital Solutions', href: '/services/digital/custom-solutions' },
          { name: 'Mobile Application', href: '/services/digital/mobile-apps' },
          { name: 'E-commerce Platforms', href: '/services/digital/ecommerce' },
          { name: 'Digital Learning Platforms', href: '/services/digital/learning-platforms' },
          { name: 'Strategy & Consulting', href: '/services/digital/strategy' },
        ]
      }
    ]
  }
};

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`bg-black border-t border-white/10 h-screen w-full flex flex-col justify-between ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 flex-1">
          {/* Company Info */}
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Black Mirage"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <div className="space-y-4 text-gray-400">
              <p>
                123 Digital Avenue<br />
                Tech Hub District<br />
                Bangalore, Karnataka 560001<br />
                India
              </p>
              <p>
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </p>
              <p>
                <a href="mailto:hello@blackmirage.com" className="hover:text-white transition-colors">
                  hello@blackmirage.com
                </a>
              </p>
            </div>
          </div>

          {/* Column 1 */}
          <div className="space-y-8">
            {navigationItems.column1.items.map((section) => (
              <div key={section.category}>
                <h3 className="text-white font-heading text-lg font-bold mb-4">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            {navigationItems.column2.items.map((section) => (
              <div key={section.category}>
                <h3 className="text-white font-heading text-lg font-bold mb-4">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-8">
            {navigationItems.column3.items.map((section) => (
              <div key={section.category}>
                <h3 className="text-white font-heading text-lg font-bold mb-4">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              {new Date().getFullYear()} Black Mirage. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
