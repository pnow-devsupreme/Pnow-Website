import { Grid, Shield, Target, ThumbsUp } from 'lucide-react';
import React from 'react';

interface CoreValue {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const coreValues: CoreValue[] = [
  {
    title: 'Transparency',
    description:
      'We believe in open, honest communication with clients and candidates throughout the recruitment process.',
    Icon: Grid,
  },
  {
    title: 'Trust',
    description:
      'Building reliable relationships with integrity and consistency in all our interactions.',
    Icon: Shield,
  },
  {
    title: 'Focus',
    description:
      'Maintaining highly focused attention on client needs and candidate goals with SMART objectives.',
    Icon: Target,
  },
  {
    title: 'Positive Reinforcement',
    description:
      'Encouraging growth and development through constructive feedback and support.',
    Icon: ThumbsUp,
  },
];

const CoreValues: React.FC = () => (
  <section className='bg-white py-16'>
    <div className='mx-auto max-w-[1440px] px-4'>
      <h2 className='text-[32px] md:text-[40px] lg:text-[48px] font-bold text-brand-purple mb-12'>
        Our Core Values
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8'>
        {coreValues.map(({ title, description, Icon }) => (
          <div key={title} className='flex items-start w-[350px] space-x-4'>
            <Icon className='w-10 h-10 flex-shrink-0 text-brand-purple' />
            <div>
              <h3 className='text-[18px] font-semibold text-brand-purple'>
                {title}
              </h3>
              <p className='mt-2 text-[16px] leading-relaxed text-gray-600'>
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreValues;
