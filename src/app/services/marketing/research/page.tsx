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
    title: "Market Research & Strategy",
    subtitle: "Insight-Driven Success",
    description: "We help organizations understand their market and develop strategies that drive sustainable growth.",
    image: "/images/services/marketing/research-1.jpg",
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
    title: "Market Research",
    subtitle: "Deep Market Understanding",
    description: "Gain valuable insights into your market, customers, and competitors.",
    image: "/images/services/marketing/research-2.jpg",
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
    title: "Marketing Strategy",
    subtitle: "Data-Driven Planning",
    description: "Develop effective strategies based on solid market research and analysis.",
    image: "/images/services/marketing/research-3.jpg",
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
  title: "The Market Understanding Challenge",
  statement: "Organizations struggle to gain actionable insights from market data and develop strategies that drive measurable results.",
  description: "In today's fast-changing market environment, understanding customer needs, competitor moves, and market trends is increasingly complex. Companies need robust research methodologies and strategic frameworks to make informed decisions and stay competitive."
};

const approachSteps = [
  {
    title: "Research Design",
    description: "We design comprehensive research plans tailored to your specific needs and objectives.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>`
  },
  {
    title: "Data Collection",
    description: "We gather data through multiple methods including surveys, interviews, and market analysis.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
    </svg>`
  },
  {
    title: "Analysis & Insights",
    description: "We analyze data to uncover actionable insights and strategic opportunities.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>`
  },
  {
    title: "Strategy Development",
    description: "We create actionable strategies based on research findings and business objectives.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
    </svg>`
  }
];

const expertise = {
  title: "Why Choose Black Mirage",
  description: "Our research team combines analytical expertise with strategic thinking.",
  points: [
    {
      title: "Research Excellence",
      description: "Robust methodologies and comprehensive analysis."
    },
    {
      title: "Strategic Focus",
      description: "Insights aligned with business objectives."
    },
    {
      title: "Data-Driven",
      description: "Evidence-based recommendations and strategies."
    },
    {
      title: "Industry Expertise",
      description: "Deep understanding of market dynamics."
    }
  ]
};

const audience = {
  title: "Who is this Service For?",
  description: "Our market research and strategy services are designed for organizations seeking to make informed decisions and drive growth.",
  segments: [
    {
      title: "Business Leaders",
      description: "Decision-makers seeking data-driven insights to guide strategic planning.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>`
    },
    {
      title: "Marketing Teams",
      description: "Teams needing market insights to develop effective campaigns and strategies.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>`
    },
    {
      title: "Product Teams",
      description: "Teams seeking market validation and insights for product development.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>`
    }
  ]
};

const GeometricBackground = dynamic(
  () => import('@/components/three/GeometricBackground').then(mod => mod.default),
  { ssr: false }
);

const ResearchBackground = ({ onHover }: { onHover?: boolean }) => (
  <GeometricBackground pattern="spheres" density={75} speed={0.5} onHover={onHover} />
);

export default function MarketResearchPage() {
  return (
    <main className="relative">
      <ServiceHero 
        slides={heroSlides}
        BackgroundComponent={ResearchBackground}
      />
      
      <ProblemStatement
        title={problemStatement.title}
        statement={problemStatement.statement}
        qa={[
          {
            q: 'Why is market research important?',
            a: 'It provides insights into customers, competitors, and trends for better decisions.'
          },
          {
            q: 'What methods do you use?',
            a: 'We use surveys, interviews, analytics, and competitive analysis.'
          },
          {
            q: 'How are insights delivered?',
            a: 'We provide clear reports and actionable recommendations.'
          }
        ]}
      />
      
      <Approach
        title="Our Approach"
        description="We follow a comprehensive methodology to deliver actionable insights and strategies."
        steps={approachSteps}
      />
      
      <CallToAction
        title="Ready to Understand Your Market?"
        description="Let's discuss how we can help you gain valuable insights and develop effective strategies."
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
