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

const AngledMarquee = () => {
  const infiniteItems = [...items, ...items];

  return (
    <section className='py-8 mt-6 h-[200px]'>
      <div className='overflow-hidden flex transform -rotate-[5deg] bg-[#0D004D] ml-[-5%] rounded-lg h-[80px]'>
        <Marquee
          gradient={false}
          speed={50}
          loop={0}
          pauseOnHover={false}
          className='flex items-center justify-center text-white text-3xl whitespace-nowrap'
        >
          {infiniteItems.map((label, idx) => (
            <span key={idx} className='inline-flex items-center mx-8 space-x-4'>
              <span>{label}</span>
              <span>✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default AngledMarquee;
