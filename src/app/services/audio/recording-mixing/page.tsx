'use client';

import dynamic from 'next/dynamic';

const GeometricBackground = dynamic(
  () => import('@/components/three/GeometricBackground').then(mod => mod.default),
  { ssr: false }
);
import ServiceHero from '@/components/sections/ServiceHero';
import ProblemStatement from '@/components/sections/ProblemStatement';
import Approach from '@/components/sections/Approach';
import CallToAction from '@/components/sections/CallToAction';
import TeamExpertise from '@/components/sections/TeamExpertise';
import ServiceAudience from '@/components/sections/ServiceAudience';

const heroSlides = [
  {
    title: "Recording & Mixing",
    subtitle: "Professional Audio Excellence",
    description: "State-of-the-art recording and mixing services that bring your sound to life.",
    image: "/images/services/audio/hero-1.jpg",
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
    title: "Studio Excellence",
    subtitle: "World-Class Equipment",
    description: "Access to premium gear and acoustically treated spaces for perfect recordings.",
    image: "/images/services/audio/hero-2.jpg",
    primaryButton: {
      text: "Book Studio",
      href: "/connect"
    },
    secondaryButton: {
      text: "View Facilities",
      href: "/portfolio"
    }
  },
  {
    title: "Expert Engineering",
    subtitle: "Experienced Team",
    description: "Work with seasoned professionals who understand your creative vision.",
    image: "/images/services/audio/hero-3.jpg",
    primaryButton: {
      text: "Meet the Team",
      href: "/connect"
    },
    secondaryButton: {
      text: "Our Process",
      href: "#approach"
    }
  }
];

const problemStatement = {
  title: "The Audio Challenge",
  statement: "In today's competitive music industry, achieving professional sound quality is more crucial than ever.",
  description: "Many artists struggle with subpar recordings that don't capture their true potential. The challenge lies in finding the perfect balance between technical excellence and creative expression, while working within budget and time constraints."
};

const approachSteps = [
  {
    title: "Pre-Production",
    description: "We begin with detailed planning sessions to understand your vision, arrange the material, and prepare for efficient recording sessions.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>`
  },
  {
    title: "Recording",
    description: "Using our state-of-the-art equipment and acoustically treated spaces, we capture your performance with pristine clarity.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
    </svg>`
  },
  {
    title: "Mixing",
    description: "Our engineers blend and enhance your tracks using premium plugins and analog gear to achieve a polished, professional sound.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
    </svg>`
  },
  {
    title: "Final Delivery",
    description: "We provide your final mixes in multiple formats, ensuring they sound great across all playback systems.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
    </svg>`
  }
];

const expertise = {
  title: "Why Choose Black Mirage",
  description: "Our team brings together technical expertise and creative artistry to deliver exceptional audio results.",
  points: [
    {
      title: "Premium Equipment",
      description: "Access to top-tier microphones, preamps, and processing gear."
    },
    {
      title: "Experienced Engineers",
      description: "Work with professionals who have decades of industry experience."
    },
    {
      title: "Acoustically Treated Spaces",
      description: "Multiple rooms designed for optimal sound capture."
    },
    {
      title: "Modern Workflow",
      description: "Efficient processes that respect your time and budget."
    }
  ]
};

const audience = {
  title: "Who is this Service For?",
  description: "Our recording and mixing services cater to creators who demand professional sound quality and attention to detail.",
  segments: [
    {
      title: "Musicians & Bands",
      description: "Artists looking to record and mix their music to professional standards, from singles to full albums.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>`
    },
    {
      title: "Producers",
      description: "Music producers seeking a professional environment to develop and polish their productions.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>`
    },
    {
      title: "Content Creators",
      description: "YouTubers, podcasters, and digital content creators who need high-quality audio for their projects.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>`
    },
    {
      title: "Voice Artists",
      description: "Voice-over artists and narrators requiring pristine audio quality for professional deliverables.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>`
    }
  ]
};

const RecordingBackground = ({ onHover }: { onHover?: boolean }) => (
  <GeometricBackground pattern="spheres" density={60} speed={0.6} onHover={onHover} />
);

export default function RecordingMixingPage() {
  return (
    <main className="relative">
      <ServiceHero 
        slides={heroSlides}
        BackgroundComponent={RecordingBackground}
      />
      
      <ProblemStatement
        title={problemStatement.title}
        statement={problemStatement.statement}
        description={problemStatement.description}
      />
      
      <Approach
        title="Our Process"
        description="We follow a proven methodology to deliver exceptional audio results."
        steps={approachSteps}
      />
      
      <CallToAction
        title="Ready to Start Recording?"
        description="Let's discuss your project and create a plan that fits your needs and budget."
        buttonText="Book a Session"
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
