import Image from 'next/image';
import React from 'react';

import teamImage from '../../../public/images/teamImage.png';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '73k+', label: 'Resumes' },
  { value: '95%', label: 'Jobs Fulfillment Rate' },
  { value: '12k+', label: 'Jobs Filled' },
  { value: '7152+', label: 'Satisfied Businesses' },
];

const TransformSection: React.FC = () => (
  <section className='bg-white py-16'>
    <div className='container max-w-8xl mx-auto px-6 lg:px-8'>
      {/* top: image + copy */}
      <div className='flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12'>
        {/* illustration */}
        <div className='w-full lg:w-1/2 flex justify-center'>
          <Image
            src={teamImage}
            alt='Team raising a flag illustration'
            width={600}
            height={600}
            className='max-w-full h-auto'
          />
        </div>
        {/* text */}
        <div className='w-full lg:w-1/2 max-w-md'>
          <span className='inline-block text-purple-700 border border-purple-700 rounded-full px-3 py-1 text-xs uppercase font-medium'>
            About us
          </span>
          <h2 className='mt-4 text-3xl lg:text-4xl font-bold leading-tight'>
            Transform Your Path to{' '}
            <span className='text-purple-700'>Success</span>
          </h2>
          <p className='mt-4 text-gray-600'>
            Welcome to our comprehensive solution, optimizing hiring for
            employers and efficiently connecting top talent. For employees, we
            offer career opportunities aligning with aspirations. Elevate your
            success journey with us, unlocking your full potential together.
          </p>
          <button
            type='button'
            className='mt-6 inline-block border border-purple-700 text-purple-700 rounded-full px-6 py-2 text-sm font-medium hover:bg-purple-50 transition'
          >
            Let’s go!
          </button>
        </div>
      </div>

      {/* stats */}
      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto gap-4'>
        {stats.map((s) => (
          <div
            key={s.label}
            className='bg-white border rounded-lg px-2 py-8 text-center shadow-sm w-[250px]'
          >
            <div className='text-2xl lg:text-4xl font-extrabold'>{s.value}</div>
            <div className='mt-2 text-gray-600'>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TransformSection;
