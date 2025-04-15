'use client';

import ServiceHero from '@/components/sections/ServiceHero';
import ProblemStatement from '@/components/sections/ProblemStatement';
import Approach from '@/components/sections/Approach';
import CallToAction from '@/components/sections/CallToAction';
import TeamExpertise from '@/components/sections/TeamExpertise';
import ServiceAudience from '@/components/sections/ServiceAudience';
import dynamic from 'next/dynamic';

const GeometricBackground = dynamic(
  () => import('@/components/three/GeometricBackground').then(mod => mod.default),
  { ssr: false }
);

const heroSlides = [
  {
    title: "E-commerce Solutions",
    subtitle: "Build Your Digital Store",
    description: "Create powerful online shopping experiences that convert visitors into loyal customers.",
    image: "/images/services/digital/ecommerce-1.jpg",
    primaryButton: {
      text: "Start Selling Online",
      href: "/connect"
    },
    secondaryButton: {
      text: "Learn More",
      href: "#approach"
    }
  },
  {
    title: "Custom E-commerce Solutions",
    subtitle: "Tailored for Growth",
    description: "Create unique shopping experiences that set your brand apart and maximize conversions.",
    image: "/images/services/digital/ecommerce-2.jpg",
    primaryButton: {
      text: "Explore Solutions",
      href: "/connect"
    },
    secondaryButton: {
      text: "View Case Studies",
      href: "/portfolio"
    }
  },
  {
    title: "Omnichannel Commerce",
    subtitle: "Seamless Integration",
    description: "Connect all your sales channels for a unified commerce experience that customers love.",
    image: "/images/services/digital/ecommerce-3.jpg",
    primaryButton: {
      text: "Transform Now",
      href: "/connect"
    },
    secondaryButton: {
      text: "Our Approach",
      href: "#approach"
    }
  }
];

const problemStatement = {
  title: "The E-commerce Challenge",
  statement: "Modern businesses need e-commerce platforms that can handle complex operations while delivering seamless shopping experiences across all channels.",
  description: "With rising customer expectations and increasing competition, businesses struggle to create e-commerce experiences that stand out, convert effectively, and scale with their growth. The challenge lies in building platforms that are both powerful and easy to use."
};

const approachSteps = [
  {
    title: "Discovery & Strategy",
    description: "We analyze your business needs, target audience, and competition to create a comprehensive e-commerce strategy.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>`
  },
  {
    title: "Platform Architecture",
    description: "We design a scalable architecture that supports your current needs and future growth plans.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>`
  },
  {
    title: "Development & Integration",
    description: "We build your platform with modern technologies and integrate essential e-commerce features and third-party services.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0113.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
    </svg>`
  },
  {
    title: "Launch & Optimization",
    description: "We ensure a smooth launch and continuously optimize for better performance and conversion rates.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>`
  }
];

const expertise = {
  title: "Why Choose Black Mirage",
  description: "Our e-commerce team combines technical expertise with business acumen to deliver solutions that drive growth.",
  points: [
    {
      title: "Conversion Focused",
      description: "Design and features optimized for maximum conversion rates."
    },
    {
      title: "Scalable Solutions",
      description: "Built to handle growth in traffic, products, and transactions."
    },
    {
      title: "Security & Compliance",
      description: "PCI-DSS compliant solutions with robust security measures."
    },
    {
      title: "Integration Ready",
      description: "Seamless integration with ERP, CRM, and other business systems."
    }
  ]
};

const audience = {
  title: "Who is this Service For?",
  description: "Our e-commerce solutions are designed for businesses looking to establish or enhance their online retail presence.",
  segments: [
    {
      title: "Retail Brands",
      description: "Established retail brands looking to expand their reach through digital channels or enhance their existing online presence.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>`
    },
    {
      title: "D2C Brands",
      description: "Direct-to-consumer brands seeking to create unique shopping experiences that reflect their brand identity.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>`
    },
    {
      title: "B2B Companies",
      description: "B2B organizations looking to streamline their ordering processes and provide better service to business customers.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>`
    }
  ]
};

const EcommerceBackground = ({ onHover }: { onHover?: boolean }) => (
  <GeometricBackground pattern="waves" density={60} speed={0.7} onHover={onHover} />
);

export default function EcommercePage() {
  return (
    <main className="relative">
      <ServiceHero 
        slides={heroSlides} 
        BackgroundComponent={EcommerceBackground}
      />
      
      <ProblemStatement
        title={problemStatement.title}
        statement={problemStatement.statement}
        description={problemStatement.description}
      />
      
      <Approach
        title="Our Approach"
        description="We follow a proven methodology to create successful e-commerce platforms."
        steps={approachSteps}
      />
      
      <CallToAction
        title="Ready to Transform Your E-commerce?"
        description="Let's discuss how we can help you create an online store that drives growth."
        buttonText="Schedule a Consultation"
        buttonLink="/connect"
      />
      
      <TeamExpertise
        title={expertise.title}
        description={expertise.description}
        points={expertise.points}
      />
      
      <ServiceAudience
        title={audience.title}
        description={audience.description}
        segments={audience.segments}
      />
    </main>
  );
}
