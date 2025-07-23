import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#0D004D] text-white px-6 md:px-20 pt-16 pb-6'>
      <div className='flex flex-col md:flex-row md:justify-between gap-12 border-b border-[#3A2F77] pb-8'>
        {/* Left - Logo and Social Icons */}
        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
          {/* Logo placeholder */}
          <div className='mb-6'>
            <span className='text-3xl font-bold'>🅿️</span>{' '}
            {/* Replace with real logo */}
          </div>

          {/* Social Icons */}
          <div className='flex space-x-4'>
            <FaFacebookF className='cursor-pointer hover:text-gray-300' />
            <FaXTwitter className='cursor-pointer hover:text-gray-300' />
            <FaInstagram className='cursor-pointer hover:text-gray-300' />
            <FaLinkedinIn className='cursor-pointer hover:text-gray-300' />
          </div>
        </div>

        {/* Locations */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm'>
          {/* USA */}
          <div>
            <h4 className='font-bold mb-2'>USA 🇺🇸</h4>
            <p>
              <span className='text-gray-400'>Main: </span>
              <span className='font-medium'>
                650 Warrenville Road, Ste 100
                <br />
                Lisle - IL 60532
              </span>
            </p>
            <p className='mt-2'>
              <span className='text-gray-400'>Email: </span>
              <a
                href='mailto:info@proficientnow.com'
                className='hover:underline'
              >
                info@proficientnow.com
              </a>
            </p>
            <p>
              <span className='text-gray-400'>Contact No: </span>
              <span className='font-medium'>+1 (872) 305-0790</span>
            </p>
          </div>

          {/* Australia */}
          <div>
            <h4 className='font-bold mb-2'>Australia 🇦🇺</h4>
            <p>
              <span className='text-gray-400'>Main: </span>
              <span className='font-medium'>
                Thomastown, Victoria - 3074, Australia
              </span>
            </p>
            <p className='mt-2'>
              <span className='text-gray-400'>Email: </span>
              <a
                href='mailto:info@proficientnow.com'
                className='hover:underline'
              >
                info@proficientnow.com
              </a>
            </p>
            <p>
              <span className='text-gray-400'>Contact No: </span>
              <span className='font-medium'>(02) 7259 9757</span>
            </p>
          </div>

          {/* India */}
          <div>
            <h4 className='font-bold mb-2'>India 🇮🇳</h4>
            <p>
              <span className='text-gray-400'>Main: </span>
              <span className='font-medium'>
                Sanali Info Park, 1st Floor, A Block,
                <br />
                8-2-120/113, Road No. 2, Banjara Hills, Hyderabad - 500034
              </span>
            </p>
            <p className='mt-2'>
              <span className='text-gray-400'>Email: </span>
              <a
                href='mailto:info@proficientnow.com'
                className='hover:underline'
              >
                info@proficientnow.com
              </a>
            </p>
            <p>
              <span className='text-gray-400'>Contact No: </span>
              <span className='font-medium'>+91 7036755731</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='text-xs text-gray-300 text-center pt-6 flex flex-col md:flex-row justify-between items-center'>
        <p>
          ©ProficientNow 2023{' '}
          <span className='font-semibold'>All Rights Reserved.</span>
        </p>
        <div className='space-x-4 mt-2 md:mt-0'>
          <a href='#' className='hover:underline'>
            Privacy Policy
          </a>
          <a href='#' className='hover:underline'>
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
