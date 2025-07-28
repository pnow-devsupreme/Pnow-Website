'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react';
import { FaBriefcase, FaUser } from 'react-icons/fa';

type TabKey = 'talents' | 'business';

const tabs: {
  id: TabKey;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}[] = [
  { id: 'talents', label: 'For Talents', Icon: FaUser },
  { id: 'business', label: 'For Business', Icon: FaBriefcase },
];
gsap.registerPlugin(ScrollTrigger);
interface Step {
  id: number;
  title: string;
  description: string;
}

const stepsData: Record<TabKey, Step[]> = {
  talents: [
    {
      id: 1,
      title: "Sign up, It's Free!",
      description:
        'Our team will set up your account and help you build a user‑friendly web dashboard.',
    },
    {
      id: 2,
      title: 'Post jobs in minutes',
      description:
        'Create and post anywhere from 1–100 job openings with just a few clicks.',
    },
    {
      id: 3,
      title: 'Review Your Staff',
      description:
        'View bios, reviews, and rosters before workers arrive on the job, then post feedback and pay—effortlessly.',
    },
  ],
  business: [
    {
      id: 1,
      title: 'Create a Business Profile',
      description:
        'Tell us about your company and what you’re looking for in talent.',
    },
    {
      id: 2,
      title: 'Browse & Match',
      description:
        'Search our database, save favorites, and invite candidates to apply.',
    },
    {
      id: 3,
      title: 'Schedule & Pay',
      description:
        'Manage shifts, track hours, and pay staff—all from one dashboard.',
    },
  ],
};

const HowItWorks: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabKey>('talents');
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (stepsRef.current.length) {
      gsap.fromTo(
        stepsRef.current,
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
  }, [selectedTab]);

  return (
    <section className='bg-[#0D004D] text-white py-20 px-6 md:px-20'>
      <div className='text-center'>
        <span className='bg-white text-[#0D004D] text-xs font-semibold px-3 py-1 rounded-full tracking-wider'>
          PROCESS
        </span>
        <h2 className='text-4xl font-bold mt-4 mb-8'>How It Works?</h2>

        {/* Toggle Buttons */}
        <div className='inline-flex bg-white rounded-full p-1 mb-12'>
          {tabs.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedTab(id)}
              className={`flex items-center px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedTab === id
                  ? 'bg-[#0D004D] text-white'
                  : 'text-[#0D004D]'
              }`}
            >
              <Icon className='mr-2' />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div
        ref={containerRef}
        className='grid max-w-[70%] mx-auto md:grid-cols-3 gap-6'
      >
        {stepsData[selectedTab].map(({ id, title, description }, idx) => (
          <div
            key={id}
            ref={(el) => {
              if (el) stepsRef.current[idx] = el;
            }}
            className='bg-[#291B68] p-6 rounded-lg opacity-0'
          >
            <div className='flex gap-2 items-center mb-5'>
              <div className='text-sm rounded-full p-2 flex items-center h-6 bg-white text-[#1A0C6D]'>
                {id}
              </div>
              <h3 className='text-lg font-semibold'>{title}</h3>
            </div>
            <p className='text-sm text-gray-300'>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
