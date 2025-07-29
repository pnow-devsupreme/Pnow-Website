import Image, { StaticImageData } from 'next/image';
import React from 'react';

import businessImg from '../../../../public/images/business-partners.png';
import goalTeamImg from '../../../../public/images/goal-oriented-team.png';

interface PartnershipCard {
  id: string;
  heading: string;
  description: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

interface PartnershipData {
  title: string;
  cards: PartnershipCard[];
  footerText: string;
}

const PARTNERSHIP_DATA: PartnershipData = {
  title: 'Partnership',
  cards: [
    {
      id: 'business-partners',
      heading: 'Business Partners',
      description:
        'ProficientNow treats our employers and employees as our business partners and actualizes their goals.',
      imageSrc: businessImg,
      imageAlt: 'Business Partners',
      imageWidth: 500,
      imageHeight: 500,
    },
    {
      id: 'goal-oriented-team',
      heading: 'Goal‑Oriented Team',
      description:
        'Our goal‑oriented team always expands the network pool to meet the demands of our clients.',
      imageSrc: goalTeamImg,
      imageAlt: 'Goal‑Oriented Team',
      imageWidth: 500,
      imageHeight: 500,
    },
  ],
  footerText:
    "With operations in the US, Australia, and India, and plans for global expansion, our diverse workforce is dedicated to driving recruitment excellence. Beyond business success, we're committed to community impact, bridging the gap between talent requirements and career growth opportunities.",
};

export default function PartnershipSection() {
  const { title, cards, footerText } = PARTNERSHIP_DATA;

  return (
    <section className='bg-white py-16 max-w-[60%] mx-auto px-4 md:px-20'>
      <h2 className='text-4xl font-bold text-[#0F0F55] mb-12'>{title}</h2>

      <div className='flex flex-col md:flex-row gap-12'>
        {cards.map(
          ({
            id,
            heading,
            description,
            imageSrc,
            imageAlt,
            imageWidth,
            imageHeight,
          }) => (
            <div key={id} className='flex-1 flex flex-col'>
              <h3 className='text-xl font-semibold text-[#6F6F89]'>
                {heading}
              </h3>
              <p className='mt-1 text-sm text-[#4A4A4A] max-w-lg'>
                {description}
              </p>
              <div className='mt-6 flex justify-center'>
                <Image
                  src={imageSrc}
                  width={imageWidth}
                  height={imageHeight}
                  alt={imageAlt}
                  priority
                />
              </div>
            </div>
          )
        )}
      </div>

      <p className='mt-10 max-w-3xl text-sm text-[#4A4A4A]'>{footerText}</p>
    </section>
  );
}
