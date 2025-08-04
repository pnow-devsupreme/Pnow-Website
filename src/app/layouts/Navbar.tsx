'use client';

import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { employeesData } from '@/data/employeesData';
import { jobs } from '@/data/jobsdata';

import { employmentData } from '@/app/components/employer/data/employerData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/Accordion';
import { Dropdown } from '@/app/layouts/Dropdown';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Prevent scrolling on the body
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      // Re-enable scrolling
      document.body.style.overflow = '';
      document.body.style.height = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [isMobileMenuOpen]);

  // Determine if it's desktop based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track scroll position
  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Create a single tween on mount, paused, only for desktop
  useLayoutEffect(() => {
    if (!navRef.current) return;

    if (isDesktop) {
      tweenRef.current = gsap.to(navRef.current, {
        width: '100%',
        borderRadius: '0px',
        duration: 0.9,
        ease: 'power2.out',
        paused: true,
      });

      gsap.set(navRef.current, {
        width: 'calc(100% - 500px)',
        borderRadius: '9999px',
      });
    } else {
      gsap.set(navRef.current, { clearProps: 'width,borderRadius' });
      tweenRef.current?.kill();
      tweenRef.current = undefined;
    }
  }, [isDesktop]);

  // Play forward or reverse when `scrolled` flips, only for desktop
  useLayoutEffect(() => {
    if (!tweenRef.current || !isDesktop) return;

    if (scrolled) {
      tweenRef.current.play();
    } else {
      tweenRef.current.reverse();
    }
  }, [scrolled, isDesktop]);

  // Close mobile menu handler
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const initialStyles: React.CSSProperties = isDesktop
    ? {
      width: scrolled ? '100%' : 'calc(100% - 500px)',
      borderRadius: scrolled ? '0px' : '9999px',
    }
    : {
      width: '100%',
      borderRadius: '0px',
    };

  const positionClasses = isDesktop
    ? scrolled
      ? 'sticky top-0 left-0 mx-auto'
      : 'absolute left-1/2 transform -translate-x-1/2 top-[32px]'
    : 'sticky top-0 left-0 mx-auto';

  // Helper function to chunk array into columns
  const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

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
    <>
      <nav
        ref={navRef}
        style={initialStyles}
        className={`${positionClasses}
          bg-white
          py-3 px-4 lg:px-8
          flex justify-between items-center
          shadow-lg
          z-50
        `}
      >
        <Link href='/' onClick={closeMobileMenu}>
          <Image
            src={Logo || '/placeholder.svg'}
            alt='ProficientNow'
            className='h-10 flex-shrink-0'
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden lg:flex items-center space-x-6 relative'>
          {NAV_LINKS.map(({ label, href }) => {
            if (label === 'Find a Job') {
              return (
                <Dropdown key={label} label={label} columns={jobDropdown} />
              );
            }

            if (label === 'Employers') {
              return (
                <Dropdown
                  key={label}
                  label={label}
                  columns={employerDropdown}
                />
              );
            }

            if (label === 'Services') {
              return (
                <Dropdown
                  key={label}
                  label={label}
                  columns={servicesDropdown}
                />
              );
            }

            if (label === 'Employees') {
              return (
                <Dropdown
                  key={label}
                  label={label}
                  columns={employeesDropdown}
                />
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

        <Link href='/contact' className='hidden lg:block'>
          <button className='bg-brand-purple text-white px-6 py-3 rounded-full font-semibold text-base hover:opacity-90 transition'>
            Contact Us
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className='lg:hidden text-brand-purple focus:outline-none'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Scrollable content container */}
        <div className='h-full overflow-y-auto'>
          <div className='flex flex-col items-start p-8 pt-20 space-y-4 min-h-full w-[80%]'>
            {NAV_LINKS.map(({ label, href }) => {
              if (label === 'Find a Job') {
                return (
                  <Accordion
                    type='single'
                    collapsible
                    className='w-full'
                    key={label}
                  >
                    <AccordionItem value='item-1'>
                      <AccordionTrigger className='text-brand-purple font-semibold text-lg py-2'>
                        {label}
                      </AccordionTrigger>
                      <AccordionContent className='pl-4'>
                        <ul className='flex flex-col space-y-2'>
                          {jobs.map((job) => (
                            <li key={job.slug}>
                              <Link
                                href={`/jobs/${job.slug}`}
                                className='block py-2 text-base text-gray-700 hover:bg-gray-100 rounded-md'
                                onClick={closeMobileMenu}
                              >
                                {job.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              }
              if (label === 'Employers') {
                return (
                  <Accordion
                    type='single'
                    collapsible
                    className='w-full'
                    key={label}
                  >
                    <AccordionItem value='item-1'>
                      <AccordionTrigger className='text-brand-purple font-semibold text-lg py-2'>
                        {label}
                      </AccordionTrigger>
                      <AccordionContent className='pl-4'>
                        <ul className='flex flex-col space-y-2'>
                          {Object.entries(employmentData).map(
                            ([slug, data]) => (
                              <li key={slug}>
                                <Link
                                  href={`/employers/${slug}`}
                                  className='block py-2 text-base text-gray-700 hover:bg-gray-100 rounded-md'
                                  onClick={closeMobileMenu}
                                >
                                  {data.servicesSection.title}{' '}
                                  {data.servicesSection.subtitle}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              }

              if (label === 'Employees') {
                return (
                  <Accordion
                    type='single'
                    collapsible
                    className='w-full'
                    key={label}
                  >
                    <AccordionItem value='item-1'>
                      <AccordionTrigger className='text-brand-purple font-semibold text-lg py-2'>
                        {label}
                      </AccordionTrigger>
                      <AccordionContent className='pl-4'>
                        <ul className='flex flex-col space-y-2'>
                          {Object.entries(employeesData).map(([slug, data]) => (
                            <li key={slug}>
                              <Link
                                href={`/employers/${slug}`}
                                className='block py-2 text-base text-gray-700 hover:bg-gray-100 rounded-md'
                                onClick={closeMobileMenu}
                              >
                                {data.servicesSection.title}{' '}
                                {data.servicesSection.subtitle}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              }
              return (
                <Link
                  key={href}
                  href={href}
                  className='text-brand-purple font-semibold text-lg py-2 w-full'
                  onClick={closeMobileMenu}
                >
                  {label}
                </Link>
              );
            })}
            <Link href='/contact' className='w-full pt-4'>
              <button
                className='bg-brand-purple text-white px-6 py-3 rounded-full font-semibold text-base hover:opacity-90 transition w-full'
                onClick={closeMobileMenu}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
