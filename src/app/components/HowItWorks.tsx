import React, { useState } from 'react';
import { FaBriefcase, FaUser } from 'react-icons/fa';

const HowItWorks: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'talents' | 'business'>(
    'talents'
  );

  return (
    <section className='bg-[#0D004D] text-white py-20 px-6 md:px-20'>
      <div className='text-center'>
        <span className='bg-white text-[#0D004D] text-xs font-semibold px-3 py-1 rounded-full tracking-wider'>
          PROCESS
        </span>
        <h2 className='text-4xl font-bold mt-4 mb-8'>How It Works?</h2>

        {/* Toggle Buttons */}
        <div className='inline-flex bg-white rounded-full p-1 mb-12'>
          <button
            className={`flex items-center px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
              selectedTab === 'talents'
                ? 'bg-[#0D004D] text-white'
                : 'text-[#0D004D]'
            }`}
            onClick={() => setSelectedTab('talents')}
          >
            <FaUser className='mr-2' />
            For Talents
          </button>
          <button
            className={`flex items-center px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
              selectedTab === 'business'
                ? 'bg-[#0D004D] text-white'
                : 'text-[#0D004D]'
            }`}
            onClick={() => setSelectedTab('business')}
          >
            <FaBriefcase className='mr-2' />
            For Business
          </button>
        </div>
      </div>

      {/* Steps */}
      <div className='grid md:grid-cols-3 gap-6'>
        <div className='bg-[#1A0C6D] p-6 rounded-lg'>
          <div className='text-2xl font-bold mb-2'>1</div>
          <h3 className='text-lg font-semibold mb-2'>Sign up, It's Free!</h3>
          <p className='text-sm text-gray-300'>
            Our team will set up your account and help you build job to
            easy-to-use web dashboard.
          </p>
        </div>
        <div className='bg-[#1A0C6D] p-6 rounded-lg'>
          <div className='text-2xl font-bold mb-2'>2</div>
          <h3 className='text-lg font-semibold mb-2'>Post jobs in minutes</h3>
          <p className='text-sm text-gray-300'>
            Create and post anywhere from 1–100 job openings with just a few
            clicks. Customize your own.
          </p>
        </div>
        <div className='bg-[#1A0C6D] p-6 rounded-lg'>
          <div className='text-2xl font-bold mb-2'>3</div>
          <h3 className='text-lg font-semibold mb-2'>Review Your Staff</h3>
          <p className='text-sm text-gray-300'>
            View bios, reviews, and rosters before workers arrive on the job,
            and post reviews and pay, effortlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
