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
    title: "Content Creation",
    subtitle: "Engage & Inspire",
    description: "We create compelling content that connects with your audience and drives meaningful engagement.",
    image: "/images/services/marketing/content-1.jpg",
    primaryButton: {
      text: "Start Creating",
      href: "/connect"
    },
    secondaryButton: {
      text: "Learn More",
      href: "#approach"
    }
  },
  {
    title: "Strategic Content",
    subtitle: "Purpose-Driven Creation",
    description: "Develop content strategies that align with your business objectives and audience needs.",
    image: "/images/services/marketing/content-2.jpg",
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
    title: "Multi-Format Content",
    subtitle: "Diverse & Engaging",
    description: "Create diverse content formats that reach and engage your audience across channels.",
    image: "/images/services/marketing/content-3.jpg",
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
  title: "The Content Challenge",
  statement: "Organizations struggle to consistently create high-quality content that engages audiences and drives business results.",
  description: "In today's content-saturated world, standing out while maintaining consistent quality and relevance is increasingly challenging. Companies need strategic content creation that aligns with business goals while meeting audience needs across multiple channels and formats."
};

const approachSteps = [
  {
    title: "Strategy Development",
    description: "We create comprehensive content strategies aligned with your business objectives.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>`
  },
  {
    title: "Content Planning",
    description: "We develop detailed content calendars and topic clusters that resonate with your audience.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>`
  },
  {
    title: "Content Creation",
    description: "We produce high-quality content across various formats and channels.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
    </svg>`
  },
  {
    title: "Performance Analysis",
    description: "We measure content performance and optimize based on data insights.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>`
  }
];

const expertise = {
  title: "Why Choose Black Mirage",
  description: "Our content team combines creative excellence with strategic thinking.",
  points: [
    {
      title: "Strategic Approach",
      description: "Content aligned with business objectives and audience needs."
    },
    {
      title: "Creative Excellence",
      description: "Compelling storytelling that captures attention."
    },
    {
      title: "Multi-Format Expertise",
      description: "Proficiency across various content types and channels."
    },
    {
      title: "Data-Driven",
      description: "Content optimization based on performance insights."
    }
  ]
};

const audience = {
  title: "Who is this Service For?",
  description: "Our content creation services are designed for organizations seeking to build authority and engage audiences through quality content.",
  segments: [
    {
      title: "Marketing Teams",
      description: "Teams needing high-quality content for campaigns and ongoing marketing efforts.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>`
    },
    {
      title: "Brand Publishers",
      description: "Organizations building thought leadership and audience engagement through content.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>`
    },
    {
      title: "Digital Businesses",
      description: "Online businesses needing content to drive engagement and conversions.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>`
    }
  ]
};

const GeometricBackground = dynamic(
  () => import('@/components/three/GeometricBackground').then(mod => mod.default),
  { ssr: false }
);

const ContentBackground = ({ onHover }: { onHover?: boolean }) => (
  <GeometricBackground pattern="cubes" density={70} speed={0.5} onHover={onHover} />
);

export default function ContentCreationPage() {
  return (
    <main className="relative">
      <ServiceHero 
        slides={heroSlides}
        BackgroundComponent={ContentBackground}
      />
      
      <ProblemStatement
        title={problemStatement.title}
        statement={problemStatement.statement}
        qa={[
          {
            q: "Feeling like your content is actually moving the needle for your business?",
            a: "If you’re not seeing results, you’re probably pouring effort into content that doesn’t support your goals. Let’s get clear on your strategy and track what really matters."
          },
          {
            q: "Are your readers really connecting with what you publish?",
            a: "If your audience isn’t sticking around, it might be time to rethink how you’re engaging them. Building genuine connections through meaningful content can turn casual readers into loyal fans."
          },
          {
            q: "Do you and your content team feel like you’re always on the same page?",
            a: "If things get lost in translation, your content can miss the mark. Setting up open communication and regular check-ins can help everyone stay aligned and deliver real value."
          },
          {
            q: 'What is content strategy?',
            a: 'A plan for creating, publishing, and managing content to achieve business goals.'
          },
          {
            q: 'How do you ensure quality?',
            a: 'We use expert writers, editors, and proven workflows for consistent, high-quality output.'
          },
          {
            q: 'Can you create content for any industry?',
            a: 'Yes, our team has experience in a wide range of industries and formats.'
          }
        ]}
      />
      
      <Approach
        title="Our Approach"
        description="We follow a strategic methodology to create effective content that drives results."
        steps={approachSteps}
      />
      
      <CallToAction
        title="Ready to Create Compelling Content?"
        description="Let's discuss how we can help you engage your audience with quality content."
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
