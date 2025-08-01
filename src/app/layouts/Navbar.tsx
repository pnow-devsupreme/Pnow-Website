'use client';

import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import React, { useLayoutEffect, useRef, useState } from 'react';

import { employeesData } from '@/data/employeesData';
import { jobs } from '@/data/jobsdata';
import { employmentData } from '@/app/components/employer/data/employerData';

import Logo from '../../../public/navbar/pnlogonew.jpg';
import { Dropdown } from '@/app/layouts/Dropdown';

const NAV_LINKS = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Find a Job', href: '/find-a-job' },
  { label: 'Employers', href: '/employers' },
  { label: 'Employees', href: '/employees' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
];

// Helper function to chunk array into columns
const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

export default function NavBar() {
  const navRef = useRef<HTMLElement>(null);
  const tweenRef = useRef<gsap.core.Tween>();
  const [scrolled, setScrolled] = useState(false);

  // 1) Track scroll position
  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2) Create a single tween on mount, paused
  useLayoutEffect(() => {
    if (!navRef.current) return;
    // tween from "unscrolled" → "scrolled"
    tweenRef.current = gsap.to(navRef.current, {
      width: '100%',
      borderRadius: '0px',
      duration: 0.9,
      ease: 'power2.out',
      paused: true,
    });
    // ensure it starts at the "unscrolled" values
    gsap.set(navRef.current, {
      width: 'calc(100% - 500px)',
      borderRadius: '9999px',
    });
  }, []);

  // 3) Play forward or reverse when `scrolled` flips
  useLayoutEffect(() => {
    if (!tweenRef.current) return;
    if (scrolled) {
      tweenRef.current.play();
    } else {
      tweenRef.current.reverse();
    }
  }, [scrolled]);

  // 4) Inline style to match initial SSR/client paint
  const initialStyles: React.CSSProperties = {
    width: scrolled ? '100%' : 'calc(100% - 500px)',
    borderRadius: scrolled ? '0px' : '9999px',
  };

  // 5) Positioning: centered at top vs. sticky when scrolled
  const positionClasses = scrolled
    ? 'sticky top-0 left-0 mx-auto'
    : 'absolute left-1/2 transform -translate-x-1/2 top-[32px]';

  // Transform your data into label + href arrays
  const jobDropdown = chunkArray(
    jobs.map((job) => ({
      label: job.title,
      href: `/jobs/${job.slug}`,
    })),
    5
  );

  const employerDropdown = chunkArray(
    Object.entries(employmentData).map(([slug, data]) => ({
      label: `${data.servicesSection.title} ${data.servicesSection.subtitle}`,
      href: `/employers/${slug}`,
    })),
    5
  );

  const servicesDropdown = chunkArray(
    Object.entries(employmentData).map(([slug, data]) => ({
      label: `${data.servicesSection.title} ${data.servicesSection.subtitle}`,
      href: `/services/${slug}`,
    })),
    5
  );

  const employeesDropdown = chunkArray(
    Object.entries(employeesData).map(([slug, data]) => ({
      label: `${data.servicesSection.title} ${data.servicesSection.subtitle}`,
      href: `/employees/${slug}`,
    })),
    5
  );

  return (
    <nav
      ref={navRef}
      style={initialStyles}
      className={`
        ${positionClasses}
        bg-white
        py-3 px-8
        flex justify-between items-center
        shadow-lg
        z-50
      `}
    >
      <Link href='/'>
        <Image src={Logo} alt='ProficientNow' className='h-10 flex-shrink-0' />
      </Link>

      <ul className='flex items-center space-x-6 relative'>
        {NAV_LINKS.map(({ label, href }) => {
          if (label === 'Find a Job') {
            return <Dropdown key={label} label={label} columns={jobDropdown} />;
          }

          if (label === 'Employers') {
            return (
              <Dropdown key={label} label={label} columns={employerDropdown} />
            );
          }

          if (label === 'Services') {
            return (
              <Dropdown key={label} label={label} columns={servicesDropdown} />
            );
          }

          if (label === 'Employees') {
            return (
              <Dropdown key={label} label={label} columns={employeesDropdown} />
            );
          }

          return (
            <li key={href}>
              <Link
                href={href}
                className='text-brand-purple font-semibold text-base transition'
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link href='/contact'>
        <button className='bg-brand-purple text-white px-6 py-3 rounded-full font-semibold text-base hover:opacity-90 transition'>
          Contact Us
        </button>
      </Link>
    </nav>
  );
}
