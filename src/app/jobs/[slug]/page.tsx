import { notFound } from 'next/navigation';
import React from 'react';

import { jobs } from '@/data/jobsdata';

import CareerSection from '@/app/components/dynamicJobs/CareerSection';
import FeatureGrid from '@/app/components/dynamicJobs/JobFeatures';
import SectionBlock from '@/app/components/dynamicJobs/JobPageHero';
import CoreValues from '@/app/components/home-page/CoreValues';
import MissionSection from '@/app/components/home-page/MissionSection';

interface Params {
  slug: string;
}

// Generate static paths for all jobs
export async function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

// Optional: Generate dynamic metadata per job
export async function generateMetadata({ params }: { params: Params }) {
  const job = jobs.find((j) => j.slug === params.slug);
  if (!job) {
    return { title: 'Job Not Found' };
  }
  return {
    title: `${job.title} | ProficientNow Careers`,
  };
}

// Default export for the dynamic job page
export default function JobPage({ params }: { params: Params }) {
  const job = jobs.find((j) => j.slug === params.slug);

  if (!job) {
    notFound();
  }

  return (
    <>
      <main className='max-w-6xl  lg:mt-[150px] mx-auto px-6 lg:py-12'>
        {job.sections.map((section, idx) => (
          <SectionBlock key={idx} section={section} reverse={idx % 2 === 0} />
        ))}
        {job.features && (
          <FeatureGrid
            description={job.features.description}
            items={job.features.items}
          />
        )}
        {job.careersSection && <CareerSection data={job.careersSection} />}
        <MissionSection />
        <CoreValues />
      </main>
    </>
  );
}
