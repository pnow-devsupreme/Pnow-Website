import React from 'react';
import { FiAperture, FiGrid, FiShield, FiTarget } from 'react-icons/fi';

const VALUES = [
  {
    title: 'Transparency',
    description:
      'We maintain clear and honest communication with all stakeholders',
    icon: <FiGrid size={20} />,
  },
  {
    title: 'Highly Focused',
    description: 'Maintaining attention to detail in all recruitment processes',
    icon: <FiAperture size={20} />,
  },
  {
    title: 'Trust',
    description:
      'Building reliable relationships with our clients and candidates',
    icon: <FiShield size={20} />,
  },
  {
    title: 'Goal Oriented',
    description: 'Working with Positive reinforcement and SMART objectives',
    icon: <FiTarget size={20} />,
  },
];

export default function ValuesSection() {
  return (
    <section className='bg-brand-purple py-16 px-4 md:px-20'>
      <div className='max-w-6xl mx-auto h-[500px] bg-white rounded-2xl p-8 md:p-12'>
        <h2 className='text-5xl font-bold text-brand-purple mb-10'>Values</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12'>
          {VALUES.map(({ title, description, icon }, idx) => (
            <div key={idx} className='flex items-start gap-4'>
              <div className='w-10 h-10 bg-[#0B0A3E] rounded-lg flex items-center justify-center flex-shrink-0'>
                <span className='text-white'>{icon}</span>
              </div>

              <div>
                <h3 className='text-lg font-semibold text-[#636363]'>
                  {title}
                </h3>
                <p className='mt-1 text-sm text-[#6A6A6A]'>{description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className='mt-10 text-sm text-[#4A4A4A]'>
          We are transparent, Trusted, Highly Focused and Goal Oriented. We work
          with Positive reinforcement with SMART objectives.
        </p>
      </div>
    </section>
  );
}
