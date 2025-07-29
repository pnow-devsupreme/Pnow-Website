'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';

const items = [
  'Architecture',
  'Mechanical',
  'Legal',
  'Environmental',
  'Accounting',
];

export default function AngledMarquee() {
  const seamlessItems = [...items, ...items];

  return (
    <section className='py-8 mt-6 h-[200px]'>
      <div
        className='
          overflow-hidden flex transform -rotate-[5deg]
          bg-[#0D004D] ml-[-5%] rounded-lg h-[80px]
        '
      >
        <Marquee
          gradient={false} // no fade at edges
          speed={50}
          loop={0} // infinite loops
          pauseOnHover={true}
          pauseOnClick={false}
          className='
            flex items-center justify-start
            text-white text-3xl whitespace-nowrap
          '
        >
          {seamlessItems.map((label, idx) => (
            <span key={idx} className='inline-flex items-center mx-8 space-x-4'>
              <span>{label}</span>
              <span>✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
