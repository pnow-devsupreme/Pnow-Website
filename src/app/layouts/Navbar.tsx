'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { jobs } from '@/data/jobsdata';
import { employmentData } from '@/app/components/employer/data/employerData';

import Logo from '../../../public/navbar/pnlogonew.jpg';

const NAV_LINKS = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Find a Job', href: '/find-a-job' },
  { label: 'Employers', href: '/employers' },
  { label: 'Employees', href: '/employees' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
];

export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const positionStyles =
    isHome && !scrolled
      ? 'absolute left-1/2 transform -translate-x-1/2 top-[32px] '
      : 'sticky top-0 left-0 mx-auto';

  const rounding = scrolled ? 'rounded-none' : 'rounded-full';

  const widthStyles = scrolled
    ? 'w-full  px-8'
    : 'w-[calc(100%-64px)] top-[32px] max-w-[1200px] px-8';

  return (
    <nav
      className={`${positionStyles} ${rounding} ${widthStyles} bg-white py-3 flex justify-between items-center shadow-lg z-50`}
    >
      <Link href='/'>
        <Image src={Logo} alt='ProficientNow' className='h-10 flex-shrink-0' />
      </Link>

      <ul className='flex items-center space-x-6 relative'>
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = pathname === href;

          // Find a Job dropdown
          if (label === 'Find a Job') {
            return (
              <li key={href} className='relative group'>
                <button className='text-brand-purple font-semibold text-base focus:outline-none'>
                  {label}
                </button>
                <ul className='absolute left-0 w-48 bg-white border rounded-lg shadow-lg hidden group-hover:block z-50'>
                  {jobs.map((job) => (
                    <li key={job.slug}>
                      <Link
                        href={`/jobs/${job.slug}`}
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      >
                        {job.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }

          // Employers dropdown
          if (label === 'Employers') {
            return (
              <li key={href} className='relative group'>
                <button className='text-brand-purple font-semibold text-base focus:outline-none'>
                  {label}
                </button>
                <ul className='absolute left-0 w-56 bg-white border rounded-lg shadow-lg hidden group-hover:block z-50'>
                  {Object.entries(employmentData).map(([slug, data]) => (
                    <li key={slug}>
                      <Link
                        href={`/employers/${slug}`}
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      >
                        {data.servicesSection.title}{' '}
                        {data.servicesSection.subtitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }

          // Default link
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
