import React from 'react';
import { FaHourglassHalf } from 'react-icons/fa';
import { FiCpu, FiMessageCircle, FiSearch } from 'react-icons/fi';

const INNOVATION = [
  {
    title: 'Creativity',
    description: 'Embracing innovative thinking',
    icon: <FiMessageCircle size={24} className='text-white' />,
    widthClass: 'w-16 md:w-20 lg:w-[4rem]',
  },
  {
    title: 'Cutting‑Edge Solutions',
    description: 'Implementing advanced recruitment technologies',
    icon: <FiCpu size={24} className='text-white' />,
    widthClass: 'w-20 md:w-32 lg:w-[10rem]',
  },
  {
    title: 'Continuous Evolution',
    description: 'Redefining industry standards',
    icon: <FaHourglassHalf size={24} className='text-white' />,
    widthClass: 'w-24 md:w-48 lg:w-[18rem]',
  },
  {
    title: 'Commitment to Excellence',
    description: 'Propelling clients and talent toward success',
    icon: <FiSearch size={24} className='text-white' />,
    widthClass: 'w-28 md:w-64 lg:w-[26rem]',
  },
];

export default function InnovationSection() {
  return (
    <section className='bg-white w-full max-w-none sm:max-w-[90%] md:max-w-[80%] lg:max-w-[60%] mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20'>
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F0F55] mb-8 sm:mb-10 md:mb-12 text-center sm:text-left'>
        Innovation
      </h2>

      <div className='flex flex-col gap-y-4 sm:gap-y-5 md:gap-y-6'>
        {INNOVATION.map((item, idx) => (
          <div
            key={idx}
            className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0'
          >
            <div
              className={`
                ${item.widthClass} h-12 sm:h-14 md:h-16
                bg-[#0B0A3E] rounded-lg sm:rounded-xl
                flex items-center justify-center
                flex-shrink-0
                mx-auto sm:mx-0
              `}
            >
              <div className='scale-75 sm:scale-90 md:scale-100'>
                {item.icon}
              </div>
            </div>

            <div className='sm:ml-4 md:ml-6 flex-1 relative text-center sm:text-left w-full sm:w-auto'>
              <h3 className='text-lg sm:text-xl font-semibold text-[#6F6F89] mb-1 sm:mb-0'>
                {item.title}
              </h3>
              <p className='text-xs sm:text-sm text-[#4A4A4A] leading-relaxed'>
                {item.description}
              </p>

              {idx < INNOVATION.length - 1 && (
                <hr className='mt-3 sm:mt-2 border-t border-[#A3A3C2] mx-auto sm:mx-0 w-3/4 sm:w-full' />
              )}
            </div>
          </div>
        ))}
      </div>

      <p className='mt-8 sm:mt-10 max-w-3xl text-xs sm:text-sm text-[#4A4A4A] leading-relaxed text-center sm:text-left mx-auto sm:mx-0'>
        Innovation fuels ProficientNow. We embrace creativity and cutting‑edge
        solutions, continually evolving to redefine industry standards.
        Committed to excellence, we propel clients and talent toward unmatched
        success.
      </p>
    </section>
  );
}
