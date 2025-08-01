import Image from 'next/image';
import React from 'react';

import { JobSection } from '@/data/jobsdata';

interface SectionProps {
  section: JobSection;
  reverse?: boolean;
}

const SectionBlock: React.FC<SectionProps> = ({ section, reverse = false }) => {
  const {
    title,
    description,
    imageSrc,
    altText = '',
    buttonText,
    buttonLink,
  } = section;
  return (
    <section className='py-4 px-4 md:px-8 mt-16'>
      <div
        className={`max-w-6xl mx-auto flex flex-col items-center md:items-stretch md:flex-row ${
          reverse ? 'md:flex-row-reverse' : ''
        }`}
      >
        <div className='md:w-1/2 flex-shrink-0'>
          <Image
            src={imageSrc}
            alt={altText}
            layout='responsive'
            width={600}
            height={400}
            className='rounded-xl'
          />
        </div>
        <div className='md:w-1/2 mt-8 md:mt-0 md:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold text-brand-purple'>
            {title}
          </h2>
          <p className='mt-4 text-gray-600 leading-relaxed'>{description}</p>
          {buttonText && buttonLink && (
            <a
              href={buttonLink}
              className='mt-6 inline-block bg-brand-purple text-white px-6 py-3 rounded-full hover:opacity-90 transition'
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionBlock;
