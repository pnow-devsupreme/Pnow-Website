// src/components/OurVision.tsx
import { Cpu, GitBranch, UserCheck, Users } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

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
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Left side - Illustration */}
          <div className='relative'>
            <Image
              src='/vision.png'
              alt='Modern office environment with people working and collaborating'
              width={600}
              height={700}
              className='w-full h-[700px] object-cover rounded-lg shadow-lg'
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className='space-y-8'>
            <h2 className='text-5xl font-bold text-[#2D1B69] mb-12'>
              Our Vision
            </h2>

            {/* Timeline container */}
            <div className='relative'>
              {/* Continuous vertical line */}
              <div className='absolute left-6 top-6 bottom-6 w-0.5 bg-gray-300' />

              <div className='space-y-12'>
                {visionPoints.map(({ title, description, Icon }) => (
                  <div key={title} className='flex items-center'>
                    {/* Icon */}
                    <div className='relative z-10'>
                      <div className='w-12 h-12 bg-[#2D1B69] rounded-full flex items-center justify-center'>
                        <Icon className='w-6 h-6 text-white' />
                      </div>
                    </div>

                    {/* Blue horizontal connector, perfectly centered */}
                    <div className='ml-6 w-10 h-0.5 bg-blue-500' />

                    {/* Text */}
                    <div className='ml-6'>
                      <h3 className='text-xl font-bold text-[#2D1B69]'>
                        {title}
                      </h3>
                      <p className='mt-2 text-gray-500 text-base'>
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom description */}
            <div className='mt-12 pt-8'>
              <p className='text-gray-500 text-base leading-relaxed'>
                To support our Employers with professional and executive talent
                and to direct employees to the right position in their career
                path with rewarding benefits. We bridge the gap between industry
                needs and the talent pool by leveraging technology for efficient
                matching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
