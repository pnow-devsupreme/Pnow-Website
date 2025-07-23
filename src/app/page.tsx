'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import CoreValues from '@/app/components/CoreValues';
import Hero from '@/app/components/HeroSection';
import ResearchSection from '@/app/components/ResearchSection';
import TransformSection from '@/app/components/TransformSection';
import TrustedBy from '@/app/components/TrustedBy';
import Vision from '@/app/components/Vision';
import WhyChooseUs from '@/app/components/WhyChooseUs';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className=''>
        <Hero />
        <CoreValues />
        <Vision />
        <TrustedBy />
        <TransformSection />
        <WhyChooseUs />
        <ResearchSection />
      </section>
    </main>
  );
}
