// eslint-disable-next-line simple-import-sort/imports
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import CiscoLogo from '../../../public/images/ciscologo.png';
import Craftechlogo from '../../../public/images/craftechlogo.png';
import Homeleasinglogo from '../../../public/images/homeleasinglogo.png';
import Atlaslogo from '../../../public/images/atlaslogo.png';
import Cnelogo from '../../../public/images/cnelogo.png';

const logos = [
  {
    src: Homeleasinglogo,
    alt: 'Home Leasing',
  },
  {
    src: Atlaslogo,
    alt: 'Atlas Sign Industries',
  },
  {
    src: Cnelogo,
    alt: 'CNE',
  },
  {
    src: Craftechlogo,
    alt: 'Craftech Industries',
  },
  {
    src: CiscoLogo,
    alt: 'Cisco',
  },
];
const TrustedBy: React.FC = () => {
  return (
    <section id='trusted-by' className='w-full py-12'>
      <div className='bg-white rounded-3xl shadow-lg py-8 px-8 max-w-7xl mx-auto h-[250px] flex items-center -mt-12'>
        <div className='w-full'>
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className='w-full'
          >
            {/* First set of logos */}
            {logos.map((logo, idx) => (
              <div key={`first-${idx}`} className='mx-8 flex-shrink-0'>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={80}
                  className='h-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300'
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, idx) => (
              <div key={`second-${idx}`} className='mx-8 flex-shrink-0'>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={80}
                  className='h-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300'
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
export default TrustedBy;
