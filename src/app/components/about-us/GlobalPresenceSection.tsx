import Image from 'next/image';

import ausbranch from '../../../../public/images/ausbranch.png';
import indiaBranch from '../../../../public/images/indiaBranch.png';
import Usa from '../../../../public/images/Usa.png';

const globalOffices = [
  {
    id: 'usa',
    name: 'USA',
    image: Usa,
    address: 'Main: 650 Warrenville Road, Ste 100\nLisle ‑ IL 60532',
    email: 'info@proficientnow.com',
    contactNo: '+1 (872) 305‑0790',
  },
  {
    id: 'australia',
    name: 'Australia',
    image: ausbranch,
    address: 'Main: Thomastown, Victoria ‑ 3074, Australia',
    email: 'info@proficientnow.com',
    contactNo: '(02) 7259 9757',
  },
  {
    id: 'india',
    name: 'India',
    image: indiaBranch,
    address:
      'Main: Sanali Info Park, 1st Floor, A Block,\n8‑2‑120/113, Road No. 2, Banjara Hills,\nHyderabad ‑ 500034',
    email: 'info@proficientnow.com',
    contactNo: '+91 7036755731',
  },
];

export default function GlobalPresenceSection() {
  return (
    <section className='max-w-[60%] mx-auto py-16 px-4 md:px-20'>
      {/* Section title */}
      <h2 className='text-4xl font-bold text-[#0F0F55] mb-12'>
        Global Presence
      </h2>

      {/* 3‑col grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
        {globalOffices.map((office) => (
          <div
            key={office.id}
            className='flex flex-col items-center text-center'
          >
            <Image
              src={office.image}
              alt={`${office.name} Office`}
              width={300}
              height={300}
              className='rounded-xl'
              priority
            />
            <h3 className='mt-6 text-xl font-semibold text-[#0F0F55]'>
              {office.name}
            </h3>
            <p className='text-sm text-[#4A4A4A] mt-2 max-w-xs'>
              {office.address.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < office.address.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
            <p className='text-sm text-[#4A4A4A] mt-2'>
              Email:{' '}
              <a
                href={`mailto:${office.email}`}
                className='text-[#0F0F55] underline'
              >
                {office.email}
              </a>
            </p>
            <p className='text-sm text-[#4A4A4A] mt-1'>
              Contact No: {office.contactNo}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
