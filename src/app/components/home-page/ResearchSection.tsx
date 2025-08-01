// eslint-disable-next-line simple-import-sort/imports
'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

import Businessman from '../../../../public/images/Businessman.png';
import newEmployee from '../../../../public/images/newEmployee.png';

interface Card {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  imgSrc: StaticImageData | string;
  imgAlt: string;
}
gsap.registerPlugin(ScrollTrigger);

const cards: Card[] = [
  {
    title: 'Looking for your next role?',
    description:
      'Join over 1 million workers who use Proficientnow to find flexible hire',
    buttonText: 'Find Works',
    href: '/jobs',
    imgSrc: newEmployee,
    imgAlt: 'People meeting and shaking hands',
  },
  {
    title: 'Are you recruiting?',
    description:
      "Finding individuals who share your company's values and vision can contribute to a cohesive team",
    buttonText: 'Find Employee',
    href: '/employers',
    imgSrc: Businessman,
    imgAlt: 'Businessman on phone at desk',
  },
];

const ResearchSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (cardsRef.current.length) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className='relative'>
      <div className='bg-[#0D004D] h-[500px]'>
        <div className='container mx-auto px-6 lg:px-8 py-16 text-center text-white'>
          <span className='inline-block bg-white text-brand-purple rounded-full px-4 py-1 text-xs uppercase font-medium'>
            Category
          </span>
          <h2 className='mt-4 text-4xl lg:text-5xl font-extrabold max-w-2xl mx-auto'>
            Researching Companies Before Applying
          </h2>
        </div>
      </div>

      {/* Cards overlap: pull up with negative margin */}
      <div
        ref={containerRef}
        className='container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 pb-16 -mt-60 relative z-10 max-w-6xl'
      >
        {cards.map((c, idx) => (
          <div
            key={c.title}
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
            className='bg-white rounded-2xl shadow-lg flex flex-col items-center text-center p-8 h-[500px]'
          >
            <h3 className='text-xl font-bold'>{c.title}</h3>
            <p className='mt-3 text-gray-600'>{c.description}</p>
            <Link href={c.href}>
              <button className='mt-6 inline-block bg-brand-purples text-white rounded-full px-6 py-2 text-sm font-medium hover:bg-indigo-800 transition'>
                {c.buttonText}
              </button>
            </Link>
            <Image
              src={c.imgSrc}
              alt={c.imgAlt}
              width={200}
              height={200}
              className='mt-2 w-full h-[300px] object-contain'
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchSection;
