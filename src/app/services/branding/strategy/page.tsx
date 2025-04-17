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
    title: "Brand Strategy & Positioning",
    subtitle: "Stand Out & Connect",
    description: "We help brands find their unique position in the market and develop strategies that drive growth.",
    image: "/images/services/branding/strategy-1.jpg",
    primaryButton: {
      text: "Start Your Project",
      href: "/connect"
    },
    secondaryButton: {
      text: "Learn More",
      href: "#approach"
    }
  },
  {
    title: "Market Positioning",
    subtitle: "Differentiate & Lead",
    description: "Create a distinctive market position that sets you apart from competitors.",
    image: "/images/services/branding/strategy-2.jpg",
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
    title: "Brand Strategy",
    subtitle: "Purpose-Driven Growth",
    description: "Build a strategic foundation that guides your brand's growth and evolution.",
    image: "/images/services/branding/strategy-3.jpg",
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
  title: "The Brand Strategy Challenge",
  statement: "In today's crowded marketplace, brands struggle to differentiate themselves and create meaningful connections with their audience.",
  description: "With increasing competition and evolving consumer expectations, organizations need a clear brand strategy and positioning that sets them apart, resonates with their target audience, and drives sustainable growth."
};

const approachSteps = [
  {
    title: "Market Analysis",
    description: "We analyze your market landscape, competition, and target audience to identify opportunities.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>`
  },
  {
    title: "Brand Discovery",
    description: "We uncover your brand's unique strengths, values, and opportunities for differentiation.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>`
  },
  {
    title: "Strategy Development",
    description: "We create a comprehensive brand strategy that aligns with your business objectives.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>`
  },
  {
    title: "Implementation Planning",
    description: "We develop actionable plans to bring your brand strategy to life across all touchpoints.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
    </svg>`
  }
];

const expertise = {
  title: "Why Choose Black Mirage",
  description: "Our brand strategy team brings deep expertise in market analysis and strategic planning.",
  points: [
    {
      title: "Market Insight",
      description: "Deep understanding of market dynamics and consumer behavior."
    },
    {
      title: "Strategic Thinking",
      description: "Comprehensive strategies that drive long-term success."
    },
    {
      title: "Research-Based",
      description: "Decisions backed by thorough market research and analysis."
    },
    {
      title: "Results Focused",
      description: "Strategies designed to deliver measurable business outcomes."
    }
  ]
};

const audience = {
  title: "Who is this Service For?",
  description: "Our brand strategy and positioning services are designed for organizations seeking to establish or strengthen their market presence.",
  segments: [
    {
      title: "Established Brands",
      description: "Brands looking to refresh their positioning or expand into new markets with a clear strategy.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>`
    },
    {
      title: "Growing Companies",
      description: "Organizations experiencing rapid growth who need a strong strategic foundation to support their expansion.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>`
    },
    {
      title: "Market Challengers",
      description: "Brands looking to challenge category leaders with distinctive positioning and compelling value propositions.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>`
    }
  ]
};

const GeometricBackground = dynamic(
  () => import('@/components/three/GeometricBackground').then(mod => mod.default),
  { ssr: false }
);

const StrategyBackground = ({ onHover }: { onHover?: boolean }) => (
  <GeometricBackground pattern="waves" density={70} speed={0.6} onHover={onHover} />
);

export default function BrandStrategyPage() {
  return (
    <main className="relative">
      <ServiceHero 
        slides={heroSlides}
        BackgroundComponent={StrategyBackground}
      />
      
      <ProblemStatement
        title={problemStatement.title}
        statement={problemStatement.statement}
        qa={[
          {
            q: 'What is brand strategy?',
            a: 'A plan to position, differentiate, and grow your brand in the market.'
          },
          {
            q: 'How do you develop strategies?',
            a: 'Through research, workshops, and collaboration to define your unique value.'
          },
          {
            q: 'Can you help reposition an existing brand?',
            a: 'Yes, we guide brands through repositioning for new opportunities.'
          }
        ]}
      />
      
      <Approach
        title="Our Approach"
        description="We follow a proven methodology to develop effective brand strategies and positioning."
        steps={approachSteps}
      />
      
      <CallToAction
        title="Ready to Position Your Brand?"
        description="Let's discuss how we can help you develop a winning brand strategy."
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
