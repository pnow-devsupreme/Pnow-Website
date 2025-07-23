import React from 'react';
import { FaBridge, FaHandshake, FaUser } from 'react-icons/fa6';

const MissionSection: React.FC = () => {
  return (
    <section className='bg-white text-[#0D004D] py-20 px-6 md:px-20'>
      <h2 className='text-4xl md:text-5xl font-bold text-center mb-16'>
        Our Mission at <span className='text-[#1A0C6D]'>ProficientNow</span>
      </h2>

      <div className='flex flex-col md:flex-row items-center justify-center gap-16 mb-10'>
        {/* Left Text */}
        <div className='text-center md:text-right md:w-1/3'>
          <h3 className='text-lg font-bold mb-2'>Global Success</h3>
          <p className='text-gray-500'>
            Delivering solutions that drive growth worldwide
          </p>
        </div>

        {/* Central Graphic */}
        <div className='relative w-[240px] h-[240px] md:w-[300px] md:h-[300px]'>
          <svg viewBox='0 0 200 200' className='w-full h-full text-[#0D004D]'>
            <circle cx='100' cy='100' r='90' fill='#0D004D' />
            <circle cx='100' cy='100' r='35' fill='white' />
          </svg>

          <FaHandshake className='absolute text-white text-xl md:text-2xl left-[16%] top-[44%]' />
          <FaBridge className='absolute text-white text-xl md:text-2xl right-[18%] top-[25%]' />
          <FaUser className='absolute text-white text-xl md:text-2xl right-[25%] bottom-[20%]' />
        </div>

        {/* Right Text */}
        <div className='text-center md:text-left md:w-1/3 space-y-6'>
          <div>
            <h3 className='text-lg font-bold mb-2'>Bridging Aspirations</h3>
            <p className='text-gray-500'>
              Connecting ambitions with achievement
            </p>
          </div>
          <div>
            <h3 className='text-lg font-bold mb-2'>Empowering Organizations</h3>
            <p className='text-gray-500'>
              Revolutionizing recruitment across industries
            </p>
          </div>
        </div>
      </div>

      {/* Footer Paragraph */}
      <p className='text-center text-gray-700 max-w-4xl mx-auto'>
        ProficientNow revolutionizes recruitment across diverse industries,
        empowering organizations and individuals alike. Our mission is to bridge
        aspiration with achievement, delivering tailored solutions that drive
        growth and success globally. Join us in shaping the future of careers
        and businesses.
      </p>
    </section>
  );
};

export default MissionSection;
