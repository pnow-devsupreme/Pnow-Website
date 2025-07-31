// src/app/employer/[slug]/page.tsx
import React from 'react';

import {
  defaultEmploymentData,
  employmentData,
  EmploymentPageData,
} from '@/app/components/employer/data/employerData';
import EmployerHero from '@/app/components/employer/EmployerHero';
import EmploymentGrid from '@/app/components/employer/EmploymentGrid';
import CoreValues from '@/app/components/home-page/CoreValues';
import MissionSection from '@/app/components/home-page/MissionSection';
import ResearchSection from '@/app/components/home-page/ResearchSection';
import OurVision from '@/app/components/home-page/Vision';

interface PageProps {
  params: {
    slug: string;
  };
}

// 1. Tell Next.js which pages to pre-render
export async function generateStaticParams() {
  return Object.keys(employmentData).map((slug) => ({ slug }));
}

const ServicesPage: React.FC<PageProps> = ({ params }) => {
  const { slug } = params;

  // 2. Pick the matching data or fallback
  const data: EmploymentPageData =
    employmentData[slug] ?? defaultEmploymentData;

  // (optional) If you’d rather 404 on unknown slugs:
  // if (!employmentData[slug]) {
  //   notFound();
  // }

  const { servicesSection, gridSection } = data;

  return (
    <main>
      {/* Services hero section */}
      <EmployerHero />

      {/* Jobs grid */}
      <EmploymentGrid
        headerText={gridSection.headerText}
        categories={gridSection.categories}
      />
      <ResearchSection />
      <MissionSection />
      <CoreValues />
      <OurVision />
    </main>
  );
};

export default ServicesPage;
