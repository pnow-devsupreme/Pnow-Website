// components/PartnershipSection.tsx
import Image from 'next/image';
import React from 'react';

// static imports give us automatic width/height from the file
import businessImg from '../../../../public/images/business-partners.png';
import goalTeamImg from '../../../../public/images/goal-oriented-team.png';

export default function PartnershipSection() {
  return (
    <section className='bg-white py-16 max-w-[60%] mx-auto px-4 md:px-20'>
      {/* Title */}
      <h2 className='text-4xl font-bold text-[#0F0F55] mb-12'>Partnership</h2>

      {/* Two‑column */}
      <div className='flex flex-col md:flex-row gap-12'>
        {/* Left */}
        <div className='flex-1 flex flex-col'>
          <h3 className='text-xl font-semibold text-[#6F6F89]'>
            Business Partners
          </h3>
          <p className='mt-1 text-sm text-[#4A4A4A] max-w-lg'>
            ProficientNow treats our employers and employees as our business
            partners and actualizes their goals.
          </p>

          {/* center the image, no fixed width/height wrapper */}
          <div className='mt-6 flex justify-center'>
            <Image
              src={businessImg}
              width={500}
              height={500}
              alt='Business Partners'
              priority
            />
          </div>
        </div>

        {/* Right */}
        <div className='flex-1 flex flex-col'>
          <h3 className='text-xl font-semibold text-[#6F6F89]'>
            Goal‑Oriented Team
          </h3>
          <p className='mt-1 text-sm text-[#4A4A4A] max-w-lg'>
            Our goal‑oriented team always expands the network pool to meet the
            demands of our clients.
          </p>

          <div className='mt-6 flex justify-center'>
            <Image
              src={goalTeamImg}
              width={500}
              height={500}
              alt='Goal‑Oriented Team'
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom copy */}
      <p className='mt-10 max-w-3xl text-sm text-[#4A4A4A]'>
        With operations in the US, Australia, and India, and plans for global
        expansion, our diverse workforce is dedicated to driving recruitment
        excellence. Beyond business success, we're committed to community
        impact, bridging the gap between talent requirements and career growth
        opportunities.
      </p>
    </section>
  );
}
