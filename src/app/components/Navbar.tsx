import Image from 'next/image';
import React from 'react';

import Logo from '../../../public/navbar/pnlogonew.jpg';

const navItems = [
  'About Us',
  'Find a Job',
  'Employers',
  'Employees',
  'Services',
  'Blog',
];

const Navbar: React.FC = () => (
  <nav className='rounded-full px-8 py-3 shadow-lg w-full max-w-[1200px] mx-auto mt-6 h-auto flex justify-between items-center'>
    <Image src={Logo} alt='ProficientNow' className='h-10 w-auto' />

    <ul className='flex space-x-6'>
      {navItems.map((label) => (
        <li key={label}>
          <a
            href={`#${label.toLowerCase().replace(/ /g, '-')}`}
            className='text-brand-purple font-semibold text-base'
          >
            {label}
          </a>
        </li>
      ))}
    </ul>

    <button className='bg-brand-purple text-white px-6 py-2 rounded-full font-semibold text-base hover:opacity-90'>
      Contact Us
    </button>
  </nav>
);

export default Navbar;
