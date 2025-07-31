// src/app/employer/[slug]/page.tsx
import React from 'react';

import { defaultEmployeesData, employeesData } from '@/data/employeesData';

import { EmploymentPageData } from '@/app/components/employer/data/employerData';
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
  return Object.keys(employeesData).map((slug) => ({ slug }));
}

const EmployeesPage: React.FC<PageProps> = ({ params }) => {
  const { slug } = params;

  // 2. Pick the matching data or fallback
  const data: EmploymentPageData = employeesData[slug] ?? defaultEmployeesData;

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

export default EmployeesPage;
