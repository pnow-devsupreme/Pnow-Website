// eslint-disable-next-line simple-import-sort/imports
import { Cpu, GitBranch, UserCheck, Users } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import ourVision from '../../../../public/images/ourVision.png';

interface VisionPoint {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const visionPoints: VisionPoint[] = [
  {
    title: 'Support Employers',
    description: 'Provide professional and executive talent to organizations',
    Icon: Users,
  },
  {
    title: 'Guide Employees',
    description:
      'Direct candidates to the right position with rewarding benefits',
    Icon: UserCheck,
  },
  {
    title: 'Bridge the Gap',
    description: 'Connect industry needs with the talent pool',
    Icon: GitBranch,
  },
  {
    title: 'Leverage Technology',
    description: 'Utilize automated solutions for efficient matching',
    Icon: Cpu,
  },
];

export default function OurVision() {
  return (
    <section className='bg-white py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
          <div className='relative'>
            <Image
              src={ourVision}
              alt='Office isometric graphic'
              width={600}
              height={700}
              className='w-full h-[700px] object-cover'
              priority
            />
          </div>

          <div>
            <h2 className='text-[48px] font-bold text-[#2D1B69] mb-[40px]'>
              Our Vision
            </h2>

            <ul className='relative'>
              <span className='absolute left-[18px] top-[18px] bottom-[18px] w-[2px] bg-gray-200' />

              {visionPoints.map(({ title, description, Icon }) => (
                <li
                  key={title}
                  className='relative pl-[70px] mb-[48px] last:mb-0'
                >
                  <div
                    className='
                      absolute left-0 top-0
                      w-[36px] h-[36px]
                      bg-[#2D1B69] rounded-lg
                      flex items-center justify-center
                    '
                  >
                    <Icon className='w-[20px] h-[20px] text-white z-50' />
                  </div>

                  {/* Horizontal connector */}
                  <div
                    className='
                      absolute
                      left-[20px] top-[17px]
                      w-[40px] h-[2px]
                      bg-[#2D1B69]
                    '
                  />

                  {/* Text */}
                  <h3 className='text-[24px] font-semibold text-[#2D1B69]'>
                    {title}
                  </h3>
                  <p className='mt-[8px] text-[18px] leading-relaxed text-gray-600'>
                    {description}
                  </p>
                </li>
              ))}
            </ul>

            {/* Bottom paragraph */}
            <p className='mt-[48px] text-[18px] leading-relaxed text-gray-600'>
              To support our Employers with professional and executive talent
              and to direct employees to the right position in their career path
              with rewarding benefits. We bridge the gap between industry needs
              and the talent pool by leveraging technology for efficient
              matching.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
