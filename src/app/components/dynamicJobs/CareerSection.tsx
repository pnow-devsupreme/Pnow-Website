'use client';

import Image from 'next/image';
import { useState } from 'react';

import { JobCareers } from '@/data/jobsdata';

import JobModal from '@/app/components/dynamicJobs/JobModel';

interface CareerSectionProps {
  data: JobCareers;
}

export default function CareerSection({ data }: CareerSectionProps) {
  const [selectedItem, setSelectedItem] = useState<
    null | (typeof data.items)[0]
  >(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (item: typeof selectedItem) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsOpen(false);
  };

  return (
    <section className='py-16 px-4 lg:px-4 bg-white max-w-6xl'>
      <div className='text-left max-w-6xl mx-auto mb-12'>
        <h2 className='text-3xl md:text-4xl font-extrabold text-[#0D004D] mb-4'>
          {data.title}
        </h2>
        <p className='text-black text-base md:text-lg'>{data.description}</p>
      </div>

      <div className='grid gap-y-12 gap-x-8 md:grid-cols-2 lg:grid-cols-2'>
        {data.items.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center text-center group cursor-pointer'
            onClick={() => handleOpenModal(item)}
          >
            <div className='w-full h-[400px] relative mb-4'>
              <Image
                src={item.imageSrc}
                alt={item.altText || item.title}
                fill
                className='object-contain rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105'
              />
            </div>

            {item.title && (
              <div className='mt-2 text-xl font-semibold text-primary mb-2 hover:underline'>
                {item.title}
              </div>
            )}
          </div>
        ))}
      </div>

      <JobModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        item={selectedItem}
      />
    </section>
  );
}
