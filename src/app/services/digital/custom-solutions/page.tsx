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

const heroContent = {
  slides: [
    {
      title: "Custom Digital Solutions",
      subtitle: "Tailored Technology",
      description: "Build innovative digital solutions that address your unique business challenges and opportunities.",
      image: "/images/services/digital/custom-1.jpg",
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
      title: "Enterprise Solutions",
      subtitle: "Powerful & Scalable",
      description: "Custom software solutions designed to streamline your business operations and boost productivity.",
      image: "/images/services/digital/hero-2.jpg",
      primaryButton: {
        text: "Get Started",
        href: "/connect"
      },
      secondaryButton: {
        text: "View Solutions",
        href: "#solutions"
      }
    },
    {
      title: "Integration Services",
      subtitle: "Seamless Connectivity",
      description: "Connect your systems and data with powerful integration solutions that drive efficiency.",
      image: "/images/services/digital/hero-3.jpg",
      primaryButton: {
        text: "Learn More",
        href: "/connect"
      },
      secondaryButton: {
        text: "See How",
        href: "#approach"
      }
    }
  ]
};

const CustomBackground = ({ onHover }: { onHover?: boolean }) => (
  <GeometricBackground pattern="waves" density={65} speed={0.7} onHover={onHover} />
);

export default function CustomDigitalSolutions() {
  return (
    <main className="relative">
      <ServiceHero 
        {...heroContent} 
        BackgroundComponent={CustomBackground}
      />
      
      <ProblemStatement
        title="The Digital Challenge"
        statement="In today's rapidly evolving digital landscape, businesses face unique challenges that off-the-shelf solutions can't address."
        qa={[
          {
            q: 'Why choose custom solutions?',
            a: 'They address your unique needs, integrate with your systems, and scale as you grow.'
          },
          {
            q: 'How do you approach custom development?',
            a: 'We start with discovery, then design, build, and iterate with your feedback.'
          },
          {
            q: 'Can you modernize legacy systems?',
            a: 'Yes, we specialize in upgrading and integrating legacy tech.'
          }
        ]}
      />

      <Approach
        title="Our Development Approach"
        description="We follow a proven methodology to deliver successful digital solutions."
        steps={[
          {
            title: "Discovery & Analysis",
            description: "We dive deep into your business requirements and challenges to understand exactly what you need.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>`
          },
          {
            title: "Solution Design",
            description: "Our experts design a custom solution architecture that aligns with your goals and scalability needs.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>`
          },
          {
            title: "Agile Development",
            description: "We develop your solution using agile methodologies, ensuring regular feedback and flexibility.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>`
          },
          {
            title: "Testing & Quality Assurance",
            description: "Rigorous testing ensures your solution is robust, secure, and performs optimally.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>`
          },
          {
            title: "Deployment & Support",
            description: "We handle the deployment and provide ongoing support to ensure your solution continues to deliver value.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
            </svg>`
          }
        ]}
      />

      <CallToAction
        title="Ready to Build Your Custom Digital Solution?"
        description="Let's discuss how we can create a tailored digital solution that transforms your business."
        buttonText="Start Your Project"
        buttonLink="/connect"
      />

      <TeamExpertise
        title="Expert Development Team"
        description="Our team of seasoned developers, architects, and engineers brings decades of experience in creating custom digital solutions across industries."
        points={[
          {
            title: "Technical Excellence",
            description: "Expert developers skilled in the latest technologies and best practices."
          },
          {
            title: "User-Centric Design",
            description: "Solutions that prioritize user experience and drive adoption."
          },
          {
            title: "Scalable Architecture",
            description: "Built to grow with your business and handle increasing demands."
          }
        ]}
      />

      <ServiceAudience
        title="Who We Serve"
        description="Our solutions are tailored for organizations seeking digital transformation."
        segments={[
          {
            title: "Enterprise Organizations",
            description: "Large organizations needing custom solutions to optimize operations and drive digital transformation.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            </svg>`
          },
          {
            title: "Growing Businesses",
            description: "Mid-sized companies requiring scalable solutions to support their growth and innovation.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>`
          },
          {
            title: "Tech Startups",
            description: "Innovative startups needing robust technical solutions to bring their ideas to life.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>`
          },
          {
            title: "Healthcare Providers",
            description: "Healthcare organizations requiring secure and compliant digital solutions.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>`
          }
        ]}
      />
    </main>
  );
}
