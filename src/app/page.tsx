'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import ClientExperience from '@/app/components/ClientExperience';
import CoreValues from '@/app/components/CoreValues';
import Footer from '@/app/components/Footer';
import Hero from '@/app/components/HeroSection';
import HowItWorks from '@/app/components/HowItWorks';
import MissionSection from '@/app/components/MissionSection';
import ResearchSection from '@/app/components/ResearchSection';
import TransformSection from '@/app/components/TransformSection';
import TrustedBy from '@/app/components/TrustedBy';
import Vision from '@/app/components/Vision';
import WhyChooseUs from '@/app/components/WhyChooseUs';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className=''>
        <Hero />
        <TrustedBy />
        <TransformSection />
        <WhyChooseUs />
        <ResearchSection />
        <HowItWorks />

        <MissionSection />
        <ClientExperience />
        <CoreValues />
        <Vision />
        <Footer />
      </section>
    </main>
  );
}
