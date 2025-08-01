'use client';

import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import React, { useLayoutEffect, useRef, useState } from 'react';

import { employeesData } from '@/data/employeesData';
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

          if (label === 'Services') {
            return (
              <li key={href} className='relative group'>
                <button className='text-brand-purple font-semibold text-base focus:outline-none'>
                  {label}
                </button>
                <ul className='absolute left-0 w-56 bg-white border rounded-lg shadow-lg hidden group-hover:block z-50'>
                  {Object.entries(employmentData).map(([slug, data]) => (
                    <li key={slug}>
                      <Link
                        href={`/services/${slug}`}
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

          if (label === 'Employees') {
            return (
              <li key={href} className='relative group'>
                <button className='text-brand-purple font-semibold text-base focus:outline-none'>
                  {label}
                </button>
                <ul className='absolute left-0 w-56 bg-white border rounded-lg shadow-lg hidden group-hover:block z-50'>
                  {Object.entries(employeesData).map(([slug, data]) => (
                    <li key={slug}>
                      <Link
                        href={`/employees/${slug}`}
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
