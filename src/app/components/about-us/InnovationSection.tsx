import React from 'react';
import { FaHourglassHalf } from 'react-icons/fa';
import { FiCpu, FiMessageCircle, FiSearch } from 'react-icons/fi';

const INNOVATION = [
  {
    title: 'Creativity',
    description: 'Embracing innovative thinking',
    icon: <FiMessageCircle size={24} className='text-white' />,
    // block width ≈ 64px
    widthClass: 'w-[4rem]',
  },
  {
    title: 'Cutting‑Edge Solutions',
    description: 'Implementing advanced recruitment technologies',
    icon: <FiCpu size={24} className='text-white' />,
    // block width ≈ 160px
    widthClass: 'w-[10rem]',
  },
  {
    title: 'Continuous Evolution',
    description: 'Redefining industry standards',
    icon: <FaHourglassHalf size={24} className='text-white' />,
    // block width ≈ 288px
    widthClass: 'w-[18rem]',
  },
  {
    title: 'Commitment to Excellence',
    description: 'Propelling clients and talent toward success',
    icon: <FiSearch size={24} className='text-white' />,
    // block width ≈ 416px
    widthClass: 'w-[26rem]',
  },
];

export default function InnovationSection() {
  return (
    <section className='bg-white max-w-[60%] mx-auto py-16 px-4 md:px-20'>
      {/* Section title */}
      <h2 className='text-4xl font-bold text-[#0F0F55] mb-12'>Innovation</h2>

      {/* Staggered blocks */}
      <div className='flex flex-col gap-y-6'>
        {INNOVATION.map((item, idx) => (
          <div key={idx} className='flex items-start'>
            {/* Purple block */}
            <div
              className={`
                ${item.widthClass} h-16
                bg-[#0B0A3E] rounded-xl
                flex items-center justify-center
                flex-shrink-0
              `}
            >
              {item.icon}
            </div>

            {/* Text + line */}
            <div className='ml-6 flex-1 relative'>
              <h3 className='text-xl font-semibold text-[#6F6F89]'>
                {item.title}
              </h3>
              <p className='text-sm text-[#4A4A4A]'>{item.description}</p>

              {/* connector line under every row except the last */}
              {idx < INNOVATION.length - 1 && (
                <hr className='mt-2 border-t border-[#A3A3C2]' />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom paragraph */}
      <p className='mt-10 max-w-3xl text-sm text-[#4A4A4A]'>
        Innovation fuels ProficientNow. We embrace creativity and cutting‑edge
        solutions, continually evolving to redefine industry standards.
        Committed to excellence, we propel clients and talent toward unmatched
        success.
      </p>
    </section>
  );
}
