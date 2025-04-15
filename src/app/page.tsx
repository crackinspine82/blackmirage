'use client';

import ServiceHero from '@/components/sections/ServiceHero';
import ProblemStatement from '@/components/sections/ProblemStatement';
import WhatWeDo from '@/components/sections/WhatWeDo';
import Clients from '@/components/sections/Clients';
import CTA from '@/components/sections/CTA';
import dynamic from 'next/dynamic';

const GeometricBackground = dynamic(
  () => import('@/components/three/GeometricBackground').then(mod => mod.default),
  { ssr: false }
);

const HomeBackground = ({ onHover }: { onHover?: boolean }) => (
  <GeometricBackground pattern="cubes" density={50} speed={0.7} onHover={onHover} />
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <ServiceHero 
        BackgroundComponent={HomeBackground}
        slides={[
        {
          title: 'Cut Through the Noise',
          subtitle: 'Craft Experiences That Resonate',
          description: 'Fast isn\'t always first. We architect user experiences so compelling and intuitive, your users convert to subscribers.',
          image: '/images/hero/digital.jpg',
          primaryButton: {
            text: 'Explore Digital Experiences',
            href: '/services/digital',
            isPrimary: true
          },
          secondaryButton: {
            text: 'Request a Callback',
            href: '/connect',
            isPrimary: false
          }
        },
        {
          title: 'Brand With Purpose',
          subtitle: 'Create Lasting Impressions',
          description: 'Your brand is more than a logo. We help you build a cohesive identity that tells your story and connects with your audience on a deeper level.',
          image: '/images/hero/brand.jpg',
          primaryButton: {
            text: 'Explore Branding Services',
            href: '/services/branding',
            isPrimary: true
          },
          secondaryButton: {
            text: 'View Our Work',
            href: '/portfolio',
            isPrimary: false
          }
        },
        {
          title: 'Engage & Convert',
          subtitle: 'Marketing That Drives Results',
          description: 'From strategic campaigns to data-driven optimization, we help you reach your audience where they are and turn interest into action.',
          image: '/images/hero/marketing.jpg',
          primaryButton: {
            text: 'Explore Marketing Services',
            href: '/services/marketing',
            isPrimary: true
          },
          secondaryButton: {
            text: 'Start Your Project',
            href: '/connect',
            isPrimary: false
          }
        }
      ]} />
      <ProblemStatement 
        title="The Digital Landscape is Evolving"
        statement="In today's fast-paced digital world, businesses struggle to create meaningful connections with their audience while maintaining authenticity and innovation."
        description="We understand that standing out in the digital space isn't just about having a presence—it's about creating experiences that resonate. Our approach combines strategic thinking with creative execution to help you navigate this complex landscape and emerge as a leader in your industry."
      />
      <WhatWeDo />
      <Clients />
      <CTA />
    </main>
  );
}
