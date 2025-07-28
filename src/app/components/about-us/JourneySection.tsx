import Image from 'next/image';
import React from 'react';

import growthIllustration from '../../../../public/images/growthIllustration.png'; // Replace with actual path

const JourneySection: React.FC = () => {
  return (
    <section className='py-16 px-6 mt-2 '>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12'>
        {/* Text Content */}
        <div className='max-w-xl'>
          <h2 className='text-4xl md:text-5xl font-extrabold text-[#140058] mb-6 leading-tight'>
            Our Journey:
            <br />
            Empowering Careers,
            <br />
            Transforming Businesses
          </h2>
          <p className='text-gray-600 text-base leading-relaxed mb-6'>
            Since our founding in June 2021, we've revolutionized recruitment by
            providing bespoke hiring solutions across diverse industries. From
            the US IT sector to Legal, Construction, Architecture, Mechanical,
            and Manufacturing, our vision drives seamless connections between
            employers and top-tier talent.
          </p>
          <button className='bg-[#140058] text-white text-lg px-6 py-2 rounded-full hover:bg-[#2b0a86] transition'>
            Let's go!
          </button>
        </div>

        {/* Image */}
        <div className='flex-shrink-0'>
          <Image
            src={growthIllustration}
            alt='Growth illustration'
            width={400}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
