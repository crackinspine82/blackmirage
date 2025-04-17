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
    title: "Digital Strategy & Consulting",
    subtitle: "Navigate Digital Transformation",
    description: "We help organizations chart their digital future and implement transformative solutions.",
    image: "/images/services/digital/strategy-1.jpg",
    primaryButton: {
      text: "Start Your Journey",
      href: "/connect"
    },
    secondaryButton: {
      text: "Learn More",
      href: "#approach"
    }
  },
  {
    title: "Strategic Innovation",
    subtitle: "Future-Ready Solutions",
    description: "Create competitive advantage through strategic digital initiatives and innovation.",
    image: "/images/services/digital/strategy-2.jpg",
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
    title: "Digital Excellence",
    subtitle: "Data-Driven Decisions",
    description: "Transform your organization with insights-driven digital strategies.",
    image: "/images/services/digital/strategy-3.jpg",
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
  title: "The Digital Challenge",
  statement: "Organizations struggle to navigate digital transformation and stay competitive in a rapidly evolving technological landscape.",
  description: "The pace of digital change creates uncertainty about which technologies to adopt, how to implement them effectively, and how to ensure ROI. Leaders need strategic guidance to make informed decisions and drive successful digital initiatives."
};

const approachSteps = [
  {
    title: "Digital Assessment",
    description: "We evaluate your current digital maturity and identify opportunities for transformation.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>`
  },
  {
    title: "Strategy Development",
    description: "We create a comprehensive digital roadmap aligned with your business objectives.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>`
  },
  {
    title: "Implementation Planning",
    description: "We design detailed implementation plans and help you prioritize initiatives.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
    </svg>`
  },
  {
    title: "Change Management",
    description: "We guide your organization through the transformation process and ensure adoption.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>`
  }
];

const expertise = {
  title: "Why Choose Black Mirage",
  description: "Our strategy team brings deep expertise in digital transformation and business innovation.",
  points: [
    {
      title: "Industry Expertise",
      description: "Deep understanding of digital trends and industry-specific challenges."
    },
    {
      title: "Data-Driven Approach",
      description: "Strategies backed by market research and analytics."
    },
    {
      title: "Innovation Focus",
      description: "Forward-thinking solutions that drive competitive advantage."
    },
    {
      title: "Practical Implementation",
      description: "Actionable plans that deliver measurable results."
    }
  ]
};

const audience = {
  title: "Who is this Service For?",
  description: "Our digital strategy and consulting services are designed for organizations seeking to lead through digital innovation.",
  segments: [
    {
      title: "C-Suite Executives",
      description: "Leaders seeking strategic guidance to drive digital transformation and create competitive advantage.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>`
    },
    {
      title: "Innovation Teams",
      description: "Teams responsible for driving digital innovation and transformation initiatives within their organizations.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>`
    },
    {
      title: "Business Leaders",
      description: "Department heads and managers looking to optimize their operations through digital solutions.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>`
    }
  ]
};

const StrategyBackground = ({ onHover }: { onHover?: boolean }) => (
  <GeometricBackground pattern="cubes" density={50} speed={0.7} onHover={onHover} />
);

export default function StrategyConsultingPage() {
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
            q: 'What is digital strategy?',
            a: 'A plan that leverages technology and data to achieve business goals.'
          },
          {
            q: 'How do you develop strategies?',
            a: 'We analyze your needs, competitors, and market to create a tailored roadmap.'
          },
          {
            q: 'Can you help with implementation?',
            a: 'Yes, we guide you from planning through execution and optimization.'
          }
        ]}
      />
      
      <Approach
        title="Our Approach"
        description="We follow a proven methodology to develop and implement effective digital strategies."
        steps={approachSteps}
      />
      
      <CallToAction
        title="Ready to Transform Your Business?"
        description="Let's discuss how we can help you navigate your digital transformation journey."
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
