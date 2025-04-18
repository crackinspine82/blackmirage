'use client';

import ServiceHero from '@/components/sections/ServiceHero';
import ProblemStatement from '@/components/sections/ProblemStatement';
import Approach from '@/components/sections/Approach';
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
        qa={[
          {
            q: "Feeling like your digital investments are actually paying off?",
            a: "If you're not seeing the value, you're likely experiencing wasted budget and missing out on your business goals. Better tracking and clearer goals for your digital efforts could be the key to fixing this."
          },
          {
            q: "Are your users really connecting with your brand for the long haul?",
            a: "When users aren't truly connecting, you'll probably see a lot of them leaving and not building a real relationship with your brand. Focusing on creating meaningful interactions and a strong community around your brand can help build that lasting loyalty."
          },
          {
            q: "Do you and your marketing partner feel like you're always on the same wavelength?",
            a: "If there's a communication breakdown, you'll likely end up with marketing that misses the mark and doesn't achieve what you need. Setting up clear ways to talk and making sure everyone's in the loop with regular updates can really help get you aligned."
          },
        ]}
      />
      <Approach 
        title="Our Approach"
        description="We blend strategy, creativity, and technology to deliver solutions that drive real business results. Here’s how we do it:"
        steps={[
          {
            title: 'Discover',
            description: 'We dive deep into your business, audience, and goals to uncover key insights.',
            icon: '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="22" stroke="currentColor" stroke-width="4"/><path d="M24 14v10l7 7" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>'
          },
          {
            title: 'Design',
            description: 'We create compelling, user-focused designs that bring your brand to life.',
            icon: '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="32" height="32" rx="6" stroke="currentColor" stroke-width="4"/><path d="M16 32l16-16" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>'
          },
          {
            title: 'Develop',
            description: 'We build robust, scalable solutions using the latest technology.',
            icon: '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 24h32" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M24 8v32" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>'
          },
          {
            title: 'Deliver',
            description: 'We launch, optimize, and support your project for ongoing success.',
            icon: '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 40l32-32" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M24 8v32" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>'
          },
        ]}
      />
      <Clients />
      <CTA />
    </main>
  );
}
