'use client';

import dynamic from 'next/dynamic';
import ServiceHero from '@/components/sections/ServiceHero';
import ProblemStatement from '@/components/sections/ProblemStatement';
import Approach from '@/components/sections/Approach';
import CallToAction from '@/components/sections/CallToAction';
import TeamExpertise from '@/components/sections/TeamExpertise';
import ServiceAudience from '@/components/sections/ServiceAudience';

const heroSlides = [
  {
    title: "Paid Advertising",
    subtitle: "Drive Results",
    description: "We create and manage high-performing paid advertising campaigns that deliver measurable results.",
    image: "/images/services/marketing/paid-1.jpg",
    primaryButton: {
      text: "Start Your Campaign",
      href: "/connect"
    },
    secondaryButton: {
      text: "Learn More",
      href: "#approach"
    }
  },
  {
    title: "Multi-Platform Campaigns",
    subtitle: "Targeted Reach",
    description: "Strategic campaigns across search, social, and display networks to reach your audience.",
    image: "/images/services/marketing/paid-2.jpg",
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
    title: "Performance Marketing",
    subtitle: "Data-Driven Results",
    description: "Optimize campaigns with advanced analytics and performance tracking.",
    image: "/images/services/marketing/paid-3.jpg",
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
  title: "The Paid Advertising Challenge",
  statement: "Organizations struggle to achieve consistent ROI from paid advertising while managing increasing competition and costs.",
  description: "In today's competitive digital landscape, creating effective paid advertising campaigns requires sophisticated targeting, creative excellence, and continuous optimization. Companies need strategic approaches to maximize their advertising spend while reaching and converting their target audience."
};

const approachSteps = [
  {
    title: "Campaign Strategy",
    description: "We develop comprehensive paid advertising strategies aligned with your goals.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>`
  },
  {
    title: "Campaign Setup",
    description: "We create optimized campaign structures with precise targeting and messaging.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
    </svg>`
  },
  {
    title: "Creative Development",
    description: "We design engaging ad creative and copy that drives action.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>`
  },
  {
    title: "Optimization",
    description: "We continuously monitor and optimize campaigns for maximum performance.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>`
  }
];

const expertise = {
  title: "Why Choose Black Mirage",
  description: "Our paid advertising team combines strategic thinking with technical expertise.",
  points: [
    {
      title: "Platform Expertise",
      description: "Deep knowledge of major advertising platforms."
    },
    {
      title: "Data-Driven",
      description: "Decisions backed by comprehensive analytics."
    },
    {
      title: "Creative Excellence",
      description: "Engaging ad creative that drives action."
    },
    {
      title: "ROI Focused",
      description: "Strategies optimized for maximum return."
    }
  ]
};

const audience = {
  title: "Who is this Service For?",
  description: "Our paid advertising services are designed for organizations seeking to drive targeted traffic and conversions.",
  segments: [
    {
      title: "E-commerce Businesses",
      description: "Online retailers looking to drive sales and customer acquisition.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>`
    },
    {
      title: "Lead Generation",
      description: "B2B companies seeking quality leads and conversions.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>`
    },
    {
      title: "Brand Awareness",
      description: "Organizations looking to increase visibility and reach.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>`
    }
  ]
};

const GeometricBackground = dynamic(
  () => import('@/components/three/GeometricBackground').then(mod => mod.default),
  { ssr: false }
);

const PaidBackground = ({ onHover }: { onHover?: boolean }) => (
  <GeometricBackground pattern="waves" density={65} speed={0.6} onHover={onHover} />
);

export default function PaidAdvertisingPage() {
  return (
    <main className="relative">
      <ServiceHero 
        slides={heroSlides}
        BackgroundComponent={PaidBackground}
      />
      
      <ProblemStatement
        title={problemStatement.title}
        statement={problemStatement.statement}
        qa={[
          {
            q: "Feeling like your ad spend is really delivering value for your business?",
            a: "If you’re not sure, you might be wasting budget and missing out on real growth. Clearer goals and better campaign tracking can help you see the impact you’re making."
          },
          {
            q: "Are your ads actually connecting with your ideal audience?",
            a: "If you’re not getting engagement, your message might not be landing. Focusing on what your audience cares about can help your ads break through the noise."
          },
          {
            q: "Do you and your advertising partner always feel in sync?",
            a: "If communication is off, your campaigns can fall flat. Regular updates and open dialogue can keep everyone on track and working toward the same goals."
          },
          {
            q: 'What is paid advertising?',
            a: 'It involves paying for ad placements on platforms like Google, Facebook, and Instagram.'
          },
          {
            q: 'How do you optimize campaigns?',
            a: 'We use data-driven strategies and continuous testing to maximize ROI.'
          },
          {
            q: 'Can you manage multiple platforms?',
            a: 'Yes, we handle campaigns across all major advertising networks.'
          }
        ]}
      />
      
      <Approach
        title="Our Approach"
        description="We follow a comprehensive methodology to create and optimize paid advertising campaigns."
        steps={approachSteps}
      />
      
      <CallToAction
        title="Ready to Start Advertising?"
        description="Let's discuss how we can help you reach and convert your target audience."
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
