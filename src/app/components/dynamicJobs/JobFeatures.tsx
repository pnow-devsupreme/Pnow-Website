import React from 'react';

import { JobFeature } from '@/data/jobsdata';

interface FeatureGridProps {
  description: string;
  items: JobFeature[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ description, items }) => (
  <section className='py-8 px-4 md:px-8 bg-white'>
    <div className='max-w-6xl mx-auto text-center'>
      <p className='text-gray-500 max-w-6xl text-left mb-12 text-md'>
        {description}
      </p>
      <div className='flex flex-col md:flex-row gap-8 md:gap-12 align-left'>
        {items.map((item) => (
          <div key={item.title} className='text-start'>
            <item.icon className='w-12 h-12 text-[#0D004D] mb-4' strokeWidth={1}/>
            <h3 className='text-lg font-extrabold text-[#0D004D]'>
              {item.title}
            </h3>
            <p className='text-gray-500 mt-2'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureGrid;
