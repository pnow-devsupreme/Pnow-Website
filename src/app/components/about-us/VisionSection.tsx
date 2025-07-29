import React from 'react';

import PyramidSvg from '@/app/components/about-us/PyramidSvg';

export default function VisionSection() {
  return (
    <section className='bg-white py-16 px-4 md:px-20'>
      <h2 className='text-4xl font-bold text-[#0F0F55] mb-12'>Vision</h2>

      <div
        className='relative flex'
        style={{
          height: '216px',
        }}
      >
        <div className='w-72 h-full flex-shrink-0'>
          <PyramidSvg />
        </div>

        <hr className='absolute left-72 top-[33.333%] right-0 border-t border-[#A39BC2]' />
        <hr className='absolute left-72 top-[66.666%] right-0 border-t border-[#A39BC2]' />
        <hr className='absolute left-72 bottom-0   right-0 border-t border-[#A39BC2]' />

        <div className='absolute left-[21rem] top-[33.333%] transform -translate-y-1/2 z-10 text-[#4A4A4A]'>
          <h3 className='text-xl font-semibold text-[#6F6F89]'>
            Bridge the Gap
          </h3>
          <p className='text-sm'>Between industry and talent pool</p>
        </div>

        <div className='absolute left-[21rem] top-[66.666%] transform -translate-y-1/2 z-10 text-[#4A4A4A]'>
          <h3 className='text-xl font-semibold text-[#6F6F89]'>
            Direct Employees
          </h3>
          <p className='text-sm'>To the right position in their career path</p>
        </div>

        <div className='absolute left-[21rem] bottom-0 transform -translate-y-full z-10 text-[#4A4A4A]'>
          <h3 className='text-xl font-semibold text-[#6F6F89]'>
            Support Employers
          </h3>
          <p className='text-sm'>With professional and executive talent</p>
        </div>
      </div>

      <p className='mt-10 max-w-3xl text-sm text-[#6A6A6A]'>
        To support our Employers with professional and executive talent and to
        direct employees to the right position in their career path with
        rewarding benefits. We bridge the gap between industry and the talent
        pool with Automated technology.
      </p>
    </section>
  );
}
