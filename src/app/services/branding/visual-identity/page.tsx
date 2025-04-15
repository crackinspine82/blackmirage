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
    title: "Logo & Visual Identity Design",
    subtitle: "Make Your Mark",
    description: "We create distinctive visual identities that capture your brand essence and leave lasting impressions.",
    image: "/images/services/branding/visual-1.jpg",
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
    title: "Logo Design",
    subtitle: "Iconic & Memorable",
    description: "Design logos that stand the test of time and effectively represent your brand.",
    image: "/images/services/branding/visual-2.jpg",
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
    title: "Visual Identity Systems",
    subtitle: "Cohesive & Scalable",
    description: "Create comprehensive visual systems that maintain consistency across all applications.",
    image: "/images/services/branding/visual-3.jpg",
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
  title: "The Visual Identity Challenge",
  statement: "Organizations need visual identities that are both distinctive and versatile, capable of working across diverse applications while maintaining impact.",
  description: "In today's digital-first world, brands need visual identities that work seamlessly across multiple platforms and scales, from tiny app icons to large billboards. The challenge lies in creating designs that are both memorable and practical, while ensuring long-term relevance."
};

const approachSteps = [
  {
    title: "Discovery & Research",
    description: "We explore your brand values, market position, and visual preferences to inform the design direction.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>`
  },
  {
    title: "Concept Development",
    description: "We create multiple design concepts that align with your brand strategy and objectives.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>`
  },
  {
    title: "Refinement",
    description: "We refine the chosen concept through iterative feedback to achieve the perfect design.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>`
  },
  {
    title: "System Development",
    description: "We create a comprehensive visual system with guidelines for consistent application.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
    </svg>`
  }
];

const expertise = {
  title: "Why Choose Black Mirage",
  description: "Our design team combines creative excellence with strategic thinking to create impactful visual identities.",
  points: [
    {
      title: "Creative Excellence",
      description: "Award-winning designers with diverse industry experience."
    },
    {
      title: "Strategic Approach",
      description: "Designs that support your brand strategy and objectives."
    },
    {
      title: "Versatile Solutions",
      description: "Identities that work across all applications and media."
    },
    {
      title: "Future-Proof",
      description: "Timeless designs that maintain relevance as your brand grows."
    }
  ]
};

const audience = {
  title: "Who is this Service For?",
  description: "Our visual identity design services are perfect for organizations seeking to establish or refresh their visual brand presence.",
  segments: [
    {
      title: "New Ventures",
      description: "Startups and new businesses needing a professional visual identity to launch their brand.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>`
    },
    {
      title: "Evolving Brands",
      description: "Established organizations looking to refresh their visual identity to stay relevant and competitive.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>`
    },
    {
      title: "Growing Organizations",
      description: "Companies expanding into new markets or launching new products that need cohesive visual systems.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>`
    }
  ]
};

const GeometricBackground = dynamic(
  () => import('@/components/three/GeometricBackground').then(mod => mod.default),
  { ssr: false }
);

const VisualIdentityBackground = ({ onHover }: { onHover?: boolean }) => (
  <GeometricBackground pattern="pyramids" density={65} speed={0.5} onHover={onHover} />
);

export default function VisualIdentityPage() {
  return (
    <main className="relative">
      <ServiceHero 
        slides={heroSlides}
        BackgroundComponent={VisualIdentityBackground}
      />
      
      <ProblemStatement
        title={problemStatement.title}
        statement={problemStatement.statement}
        description={problemStatement.description}
      />
      
      <Approach
        title="Our Approach"
        description="We follow a proven methodology to create distinctive and effective visual identities."
        steps={approachSteps}
      />
      
      <CallToAction
        title="Ready to Transform Your Visual Identity?"
        description="Let's discuss how we can help you create a distinctive visual presence."
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
