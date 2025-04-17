'use client';

import { useState, useEffect } from 'react';
import { useHover } from '@/contexts/HoverContext';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll } from 'framer-motion';

interface NavigationLink {
  name: string;
  href: string;
  submenu?: NavigationLink[];
}

const navigation: NavigationLink[] = [
  {
    name: 'Branding & Marketing',
    href: '/services/branding',
    submenu: [
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
    ],
  },
  {
    name: 'Audio & Video',
    href: '/services/audio',
    submenu: [
      { name: 'Recording & Mixing', href: '/services/audio/recording-mixing' },
      { name: 'Voice-Over Services', href: '/services/audio/voice-over' },
      { name: 'Audio Production', href: '/services/audio/production' },
      { name: '2D & 3D Animation', href: '/services/video/animation' },
      { name: 'Corporate Films', href: '/services/video/corporate' },
      { name: 'Product Demos', href: '/services/video/product-demos' },
      { name: 'TV Commercials', href: '/services/video/commercials' },
    ],
  },
  {
    name: 'Digital Experiences',
    href: '/services/digital',
    submenu: [
      { name: 'UX & Design', href: '/services/digital/ux-design' },
      { name: 'Custom Digital Solutions', href: '/services/digital/custom-solutions' },
      { name: 'Mobile Application', href: '/services/digital/mobile-apps' },
      { name: 'E-commerce Platforms', href: '/services/digital/ecommerce' },
      { name: 'Digital Learning Platforms', href: '/services/digital/learning-platforms' },
      { name: 'Strategy & Consulting', href: '/services/digital/strategy' },
    ],
  },
  { name: 'Our Story', href: '/about' },
  { name: 'Connect', href: '/connect' },
];

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [openMobileSubSubmenu, setOpenMobileSubSubmenu] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const { setGlobalHover } = useHover();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileSubmenu(null);
    setOpenMobileSubSubmenu(null);
  };

  const toggleMobileSubmenu = (name: string) => {
    if (openMobileSubmenu === name) {
      setOpenMobileSubmenu(null);
      setOpenMobileSubSubmenu(null);
    } else {
      setOpenMobileSubmenu(name);
      setOpenMobileSubSubmenu(null);
    }
  };

  const toggleMobileSubSubmenu = (name: string) => {
    setOpenMobileSubSubmenu(openMobileSubSubmenu === name ? null : name);
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'} ${className}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setGlobalHover(true)}
      onMouseLeave={() => setGlobalHover(false)}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Black Mirage"
                width={150}
                height={40}
                className="h-8 sm:h-10 w-auto"
                priority
                style={{
                  maxWidth: 'none',
                  objectFit: 'contain'
                }}
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    className="text-white hover:text-accent-pink transition-colors duration-200 font-medium inline-flex items-center"
                  >
                    {item.name}
                    {item.submenu && (
                      <svg
                        className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-72 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      {item.submenu.map((subItem) => (
                        <div key={subItem.name} className="group/submenu relative">
                          <Link
                            href={subItem.href}
                            className="px-4 py-2 text-sm text-white hover:bg-accent-pink/20 hover:text-accent-pink transition-colors duration-200 flex items-center justify-between"
                            onClick={(e) => subItem.submenu && e.preventDefault()}
                          >
                            {subItem.name}
                            {subItem.submenu && (
                              <svg
                                className="h-4 w-4 transform -rotate-90"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            )}
                          </Link>
                          {subItem.submenu && (
                            <div className="absolute left-full top-0 w-72 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg py-2 ml-0.5 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200 -translate-x-2 group-hover/submenu:translate-x-0">
                              {subItem.submenu.map((subSubItem) => (
                                <Link
                                  key={subSubItem.name}
                                  href={subSubItem.href}
                                  className="block px-4 py-2 text-sm text-white hover:bg-accent-pink/20 hover:text-accent-pink transition-colors duration-200"
                                >
                                  {subSubItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-accent-pink"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          <motion.div
            className={`md:hidden fixed inset-x-0 top-[80px] bg-black/95 backdrop-blur-sm overflow-hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
            initial={{ height: 0 }}
            animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name} className="py-2">
                  <div
                    className="flex items-center justify-between text-white hover:text-accent-pink cursor-pointer"
                    onClick={() => item.submenu && toggleMobileSubmenu(item.name)}
                  >
                    <Link
                      href={item.href}
                      className="text-base font-medium block"
                      onClick={(e) => item.submenu && e.preventDefault()}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${openMobileSubmenu === item.name ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                  {item.submenu && (
                    <motion.div
                      className="pl-4 space-y-2"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: openMobileSubmenu === item.name ? 'auto' : 0, opacity: openMobileSubmenu === item.name ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.submenu.map((subItem) => (
                        <div key={subItem.name}>
                          <Link
                            href={subItem.href}
                            className="text-gray-300 hover:text-accent-pink text-sm block py-2"
                            onClick={(e) => {
                              if (subItem.submenu) {
                                e.preventDefault();
                                toggleMobileSubSubmenu(subItem.name);
                              } else {
                                setIsMobileMenuOpen(false);
                              }
                            }}
                          >
                            {subItem.name}
                          </Link>
                          {subItem.submenu && openMobileSubSubmenu === subItem.name && (
                            <motion.div
                              className="pl-4 space-y-2"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              {subItem.submenu.map((subSubItem) => (
                                <Link
                                  key={subSubItem.name}
                                  href={subSubItem.href}
                                  className="text-gray-400 hover:text-accent-pink text-sm block py-2"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subSubItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
}
