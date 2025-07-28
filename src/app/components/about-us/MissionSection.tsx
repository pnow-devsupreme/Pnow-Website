// components/MissionSection.tsx
import Image from 'next/image';
import { FaChartLine, FaGlobe, FaStar } from 'react-icons/fa';

const FEATURES = [
  {
    title: 'High Quality',
    description: 'Recruitment services to various industries',
    icon: <FaStar size={20} />,
  },
  {
    title: 'Agile Growth',
    description: 'Support clients with executive solutions',
    icon: <FaChartLine size={20} />,
  },
  {
    title: 'Global Player',
    description: 'Result oriented with worldwide expansion',
    icon: <FaGlobe size={20} />,
  },
];

export default function MissionSection() {
  return (
    <section className='bg-white py-16 px-4 md:px-20'>
      {/* — Title */}
      <h2 className='text-4xl font-bold text-[#0F0F55] mb-12'>Mission</h2>

      <div className='flex flex-col md:flex-row items-start gap-12'>
        {/* — Left column: features + paragraph */}
        <div className='flex-1 flex flex-col gap-8'>
          {FEATURES.map(({ title, description, icon }, idx) => (
            <div key={idx} className='flex items-center gap-4'>
              {/* chevron shape */}
              <div className='w-16 h-20 bg-[#0B0A3E] clip‑chevron flex items-center justify-center flex-shrink-0'>
                <span className='text-white'>{icon}</span>
              </div>

              {/* text */}
              <div>
                <h3 className='text-xl font-semibold text-[#6F6F89]'>
                  {title}
                </h3>
                <p className='text-sm text-[#4A4A4A]'>{description}</p>
              </div>
            </div>
          ))}

          {/* bottom paragraph */}
          <p className='mt-4 text-sm text-[#6A6A6A] max-w-md'>
            ProficientNow provides high quality recruitment services to various
            industries. We support the agile growth of clients by providing
            executive solutions. We are result‑oriented and aim to become a
            global player in the coming years.
          </p>
        </div>

        {/* — Right column: illustration */}
        <div className='flex-shrink-0 w-full md:w-1/2'>
          <Image
            src='/mission-illustration.png'
            alt='Mission illustration'
            width={600}
            height={400}
            objectFit='contain'
            priority
          />
        </div>
      </div>
    </section>
  );
}
