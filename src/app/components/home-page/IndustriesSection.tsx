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
import React, { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { label: 'Hotel', count: 2853, Icon: Box },
  { label: 'Hospitality', count: 2256, Icon: LifeBuoy },
  { label: 'Kitchen', count: 1408, Icon: Factory },
  { label: 'Retail', count: 1740, Icon: Hop },
  { label: 'Special Events', count: 3948, Icon: Calendar },
  { label: 'General Labor', count: 2984, Icon: User },
  { label: 'Driving', count: 4509, Icon: Truck },
  { label: 'Senior Living', count: 1039, Icon: Users },
];

const IndustriesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const fillRef = useRef<HTMLDivElement[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const animationRefs = useRef<(gsap.core.Tween | null)[]>([]);

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
      // Kill any ongoing animations
      animationRefs.current.forEach((anim) => {
        if (anim) anim.kill();
      });
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);

    // Kill any existing animation on this element
    if (animationRefs.current[index]) {
      animationRefs.current[index]!.kill();
      animationRefs.current[index] = null;
    }

    // Animate the fill effect from top to bottom
    if (fillRef.current[index]) {
      animationRefs.current[index] = gsap.fromTo(
        fillRef.current[index],
        { height: 0, top: 0, bottom: 'auto' },
        {
          height: '100%',
          duration: 0.4,
          ease: 'power2.out',
        }
      );
    }
  };

  const handleMouseLeave = () => {
    // Kill any existing animations before resetting
    animationRefs.current.forEach((anim, idx) => {
      if (anim) {
        anim.kill();
        animationRefs.current[idx] = null;
      }
    });

    setHoveredIndex(null);

    // Reset all fill effects
    fillRef.current.forEach((el) => {
      if (el) {
        // Reset immediately without animation
        gsap.set(el, { height: 0, top: 0, bottom: 'auto' });
      }
    });
  };

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
            {industries.map(({ label, count, Icon }, idx) => {
              const isHighlighted = hoveredIndex === idx;
              return (
                <div
                  key={label}
                  ref={(el) => {
                    if (el) itemsRef.current[idx] = el;
                  }}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                  className='flex flex-col items-center justify-center px-6 py-10 bg-white relative overflow-hidden'
                >
                  {/* Fill effect overlay - positioned from top */}
                  <div
                    ref={(el) => {
                      if (el) fillRef.current[idx] = el;
                    }}
                    className='absolute top-0 left-0 right-0 bg-[#0D004D] z-0'
                    style={{ height: 0 }}
                  />

                  {/* Content */}
                  <div className='relative z-10 flex flex-col items-center'>
                    <Icon
                      size={32}
                      strokeWidth={1.5}
                      className={`transition-all duration-300 ${isHighlighted ? 'text-white scale-125' : 'text-current'
                        }`}
                    />
                    <h3
                      className={`mt-6 text-xl font-semibold transition-colors duration-300 ${isHighlighted ? 'text-white' : 'text-gray-900'
                        }`}
                    >
                      {label}
                    </h3>
                    <p
                      className={`mt-2 text-sm transition-colors duration-300 ${isHighlighted ? 'text-indigo-200' : 'text-gray-500'
                        }`}
                    >
                      {count} Staffs
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
