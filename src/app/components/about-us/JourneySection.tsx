import Image, { StaticImageData } from 'next/image';
import React from 'react';

import growthIllustration from '../../../../public/images/growthIllustration.png';

interface SectionItem {
  id: string;
  headingLines: string[];
  description: string;
  buttonText: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

const SECTION_DATA: SectionItem[] = [
  {
    id: 'our-journey',
    headingLines: [
      'Our Journey:',
      'Empowering Careers,',
      'Transforming Businesses',
    ],
    description:
      "Since our founding in June 2021, we've revolutionized recruitment by providing bespoke hiring solutions across diverse industries. From the US IT sector to Legal, Construction, Architecture, Mechanical, and Manufacturing, our vision drives seamless connections between employers and top-tier talent.",
    buttonText: "Let's go!",
    imageSrc: growthIllustration,
    imageAlt: 'Growth illustration',
    imageWidth: 400,
    imageHeight: 300,
  },
];

const JourneySection: React.FC = () => {
  return (
    <>
      {SECTION_DATA.map(
        ({
          id,
          headingLines,
          description,
          buttonText,
          imageSrc,
          imageAlt,
          imageWidth,
          imageHeight,
        }) => (
          <section key={id} className='py-16 px-6 mt-32'>
            <div className='max-w-[60%] mx-auto flex flex-col md:flex-row items-center justify-between gap-12'>
              {/* Text Content */}
              <div className='max-w-xl'>
                <h2 className='text-4xl font-extrabold text-[#140058] mb-6 leading-tight'>
                  {headingLines.map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h2>
                <p className='text-gray-600 text-base leading-relaxed mb-6'>
                  {description}
                </p>
                <button className='bg-[#140058] text-white text-lg px-6 py-2 rounded-full hover:bg-[#2b0a86] transition'>
                  {buttonText}
                </button>
              </div>

              {/* Image */}
              <div className='flex-shrink-0'>
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={imageWidth}
                  height={imageHeight}
                  priority
                />
              </div>
            </div>
          </section>
        )
      )}
    </>
  );
};

export default JourneySection;
