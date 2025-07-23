import Image from 'next/image';
import React from 'react';

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
            src='data:image/jpeg;base64,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'
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
