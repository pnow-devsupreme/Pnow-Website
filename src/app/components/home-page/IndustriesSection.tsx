'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Box,
  Calendar,
  Factory,
  Hop,
  LifeBuoy,
  Truck,
  User,
  Users,
} from 'lucide-react';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { label: 'Hotel', count: 2853, Icon: Box },
  { label: 'Hospitality', count: 2256, Icon: LifeBuoy },
  { label: 'Kitchen', count: 1408, Icon: Factory },
  { label: 'Retail', count: 1740, Icon: Hop },
  { label: 'Special Events', count: 3948, Icon: Calendar, highlight: true },
  { label: 'General Labor', count: 2984, Icon: User },
  { label: 'Driving', count: 4509, Icon: Truck },
  { label: 'Senior Living', count: 1039, Icon: Users },
];

const IndustriesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (itemsRef.current.length) {
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.15,
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
    <section className='py-16 bg-white'>
      <div className='max-w-6xl mx-auto px-4 text-center'>
        {/* Pill label */}
        <span className='inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[#0D004D] bg-indigo-50 border border-[#0D004D] rounded-full'>
          Industries
        </span>

        {/* Title */}
        <h2 className='mt-3 text-3xl md:text-4xl font-bold text-gray-900'>
          Industries Served
        </h2>

        {/* Grid wrapper with outer border */}
        <div
          ref={containerRef}
          className='mt-8 border border-gray-200 rounded-lg overflow-hidden'
        >
          {/* divide-x & divide-y draws single 1px lines between cells */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-gray-200'>
            {industries.map(({ label, count, Icon, highlight }, idx) => (
              <div
                key={label}
                ref={(el) => {
                  if (el) itemsRef.current[idx] = el;
                }}
                className={`flex flex-col items-center justify-center px-6 py-10 ${
                  highlight ? 'bg-[#0D004D] text-white' : 'bg-white'
                }`}
              >
                <Icon size={32} strokeWidth={1.5} />
                <h3 className='mt-6 text-xl font-semibold'>{label}</h3>
                <p
                  className={
                    'mt-2 text-sm ' +
                    (highlight ? 'text-indigo-200' : 'text-gray-500')
                  }
                >
                  {count} Staffs
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
