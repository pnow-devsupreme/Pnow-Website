'use client';

import * as React from 'react';

import AngledMarquee from '@/app/components/home-page/AnglesMarquee';
import ClientExperience from '@/app/components/home-page/ClientExperience';
import CoreValues from '@/app/components/home-page/CoreValues';
import Hero from '@/app/components/home-page/HeroSection';
import HowItWorks from '@/app/components/home-page/HowItWorks';
import IndustriesSection from '@/app/components/home-page/IndustriesSection';
import MissionSection from '@/app/components/home-page/MissionSection';
import ResearchSection from '@/app/components/home-page/ResearchSection';
import TransformSection from '@/app/components/home-page/TransformSection';
import TrustedBy from '@/app/components/home-page/TrustedBy';
import Vision from '@/app/components/home-page/Vision';
import WhyChooseUs from '@/app/components/home-page/WhyChooseUs';

export default function HomePage() {
  return (
    <main>
      <section>
        <Hero />
        <TrustedBy />
        <TransformSection />
        <AngledMarquee />
        <WhyChooseUs />
        <ResearchSection />
        <IndustriesSection />
        <HowItWorks />
        <MissionSection />
        <ClientExperience />
        <CoreValues />
        <Vision />
      </section>
    </main>
  );
}
