// eslint-disable-next-line simple-import-sort/imports
import React from 'react';

import ConstructionEstimator from '../../../public/images/heroImage1.jpg';
import ConstructionTechnicians from '../../../public/images/heroImage2.jpg';
import Logo from '../../../public/images/logo.png';
import PipelineEngineer from '../../../public/images/heroImage3.jpg';
import SeniorAttorney from '../../../public/images/heroImage4.jpg';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section
      className='w-full bg-brand-purple overflow-hidden'
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 83%, 83% 100%, 17% 100%, 0 83%)',
      }}
    >
      <div className='relative mx-auto h-[800px] max-w-[1440px]'>
        {/* ─── NAVBAR ─────────────────────────────────────────── */}
        <nav
          className='
            absolute top-[32px] left-1/2
            transform -translate-x-1/2
            bg-white rounded-full
            px-8 py-3
            flex items-center
            shadow-lg
            w-[calc(100%-64px)] max-w-[1200px]
          '
        >
          <Image
            src={Logo}
            alt='ProficientNow'
            className='h-10 flex-shrink-0'
          />

          <ul className='flex ml-10 space-x-6'>
            {[
              'About Us',
              'Find a Job',
              'Employers',
              'Employees',
              'Services',
              'Blog',
            ].map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase().replace(/ /g, '-')}`}
                  className='text-brand-purple font-semibold text-base hover:underline'
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className='
              ml-auto
              bg-brand-purple text-white
              px-6 py-3
              rounded-full
              font-semibold text-base
              hover:opacity-90
            '
          >
            Contact Us
          </button>
        </nav>

        {/* ─── HERO CONTENT ───────────────────────────────────── */}
        <div
          className='
            absolute top-1/2 left-1/2
            transform -translate-x-1/2 -translate-y-1/2
            text-center
            px-4
            w-full max-w-[800px]
          '
        >
          <h1 className=' text-[60px] font-bold text-white leading-tight'>
            Transform Your <span className='text-brand-red'>Path</span> to
            <br />
            <span className='text-brand-red'> Success</span>
          </h1>

          <p className='mt-4 text-[18px] leading-relaxed text-white/90'>
            Welcome to our comprehensive solution, optimizing hiring for
            employers and efficiently connecting top talent. For employees, we
            offer career opportunities aligning with aspirations. Elevate your
            success journey with us, unlocking your full potential together.
          </p>

          <div className='mt-8 flex justify-center space-x-4'>
            <button
              className='
                bg-white text-brand-purple
                px-8 py-3
                rounded-full
                font-semibold text-base
                hover:opacity-90
              '
            >
              Find Works
            </button>

            <button
              className='
                bg-brand-red text-white
                px-8 py-3
                rounded-full
                font-semibold text-base
                hover:opacity-90
              '
            >
              Hire Talents Now
            </button>
          </div>
        </div>

        {/* ─── FOUR CIRCULAR ICONS ────────────────────────────── */}
        {/** Top‑left */}
        <div className='absolute top-[260px] left-[80px] flex flex-col items-center'>
          <Image
            src={ConstructionEstimator}
            alt='Construction Estimator'
            className='w-[120px] h-[120px] rounded-full bg-white object-cover'
          />
          <span className='mt-2 bg-white px-2 py-1 rounded-full text-[14px] text-brand-purple whitespace-nowrap'>
            Construction Estimator
          </span>
        </div>

        {/** Bottom‑left */}
        <div className='absolute bottom-[160px] left-[190px] flex flex-col items-center'>
          <Image
            src={ConstructionTechnicians}
            alt='Construction Technicians'
            className='w-[120px] h-[120px] rounded-full bg-white object-cover'
          />
          <span className='mt-2 bg-white px-2 py-1 rounded-full text-[14px] text-brand-purple whitespace-nowrap'>
            Construction Technicians
          </span>
        </div>

        {/** Top‑right */}
        <div className='absolute top-[260px] right-[80px] flex flex-col items-center'>
          <Image
            src={SeniorAttorney}
            alt='Senior Attorney'
            className='w-[120px] h-[120px] rounded-full bg-white object-cover'
          />
          <span className='mt-2 bg-white px-2 py-1 rounded-full text-[14px] text-brand-purple whitespace-nowrap'>
            Senior Attorney
          </span>
        </div>

        {/** Bottom‑right */}
        <div className='absolute bottom-[160px] right-[200px] flex flex-col items-center'>
          <Image
            src={PipelineEngineer}
            alt='Pipeline Engineer'
            className='w-[120px] h-[120px] rounded-full bg-white object-cover'
          />
          <span className='mt-2 bg-white px-2 py-1 rounded-full text-[14px] text-brand-purple whitespace-nowrap'>
            Pipeline Engineer
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
